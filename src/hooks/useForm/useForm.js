import { useState } from 'react'

export default function useForm(config) {
  const keys = Object.keys(config)

  const [data, setData] = useState(() => {
    const state = {}
    keys.forEach((key) => {
      state[key] = ''
    })

    return state
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const error = {}
  keys.forEach((key) => {
    error[key] = config[key].getError(data)
  })

  const inputs = {}
  keys.forEach((key) => {
    inputs[key] = {
      placeholder: config[key].placeholder,
      type: config[key].type,
      value: data[key],
      onChange: (event) => {
        setData({
          ...data,
          [key]: event.target.value,
        })
      },
      error: isSubmitted && error[key],
    }
  })
  
  const onSubmit = (callback) => {
    setIsSubmitted(true)

    const valid = Object.values(error).every((e) => !e)  

    if (!valid) {
      return
    }

    callback(data)
  }

  return {
    inputs,
    onSubmit,
  }
}
