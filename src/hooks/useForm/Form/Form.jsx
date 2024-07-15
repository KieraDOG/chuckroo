import React from 'react'
import Input from '../../../components/Input'
import Button from '../../../components/Button'

export default function Form({ 
  onSubmit, 
  inputs, 
  className,
  submitText,
}) {
  return (
    <form 
      className={className}
      onSubmit={(event) => {
        event.preventDefault()
        onSubmit()
      }}
    >
      {Object.entries(inputs).map(([name, props]) => (
        <Input
          key={name}
          {...props}
        />
      ))}
      <div>
        <Button fullWidth>{submitText}</Button>
      </div>
    </form>
  )
}
