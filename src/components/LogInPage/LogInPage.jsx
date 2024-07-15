import React, { useState } from 'react'
import validator from 'validator'
import logIn from '../../apis/logIn'
import { TOKEN } from '../../constants/localStorage'
import useForm, { Form } from '../../hooks/useForm'
import AuthenticationLayout from '../AuthenticationLayout'
import Button from '../Button'
import { useRouter } from '../Router'
import Link from '../Router/Link'

const getEmailError = ({ email }) => {
  if (validator.isEmpty(email)) {
    return 'Email address cannot be empty'
  }

  return
}

const getPasswordError = ({ password }) => {
  if (validator.isEmpty(password)) {
    return 'Password cannot be empty'
  }

  return
}

export default function LoginPage() {
  const {
    inputs,
    onSubmit,
  } = useForm({
    email: {
      placeholder: 'Email address',
      getError: getEmailError,
    },
    password: {
      placeholder: 'Password',
      type: 'password',
      getError: getPasswordError,
    }
  })

  const { push } = useRouter()

  const [error, setError] = useState()

  const handleLogIn = async ({
    email,
    password,
  }) => {
    try {
      const response = await logIn(email, password)

      localStorage.setItem(TOKEN, response.headers['x-auth-token'])

      push('/')
    } catch (error) {
      if (!error.response) {
        throw error
      }

      setError(error.response)
    }
  }

  return (
    <AuthenticationLayout
      title={(
        <>
          Log in
          <br />
          to Chuckroo
        </>
      )}
      footer={(
        <>
          Don't have an account?{' '}
          <Link href="/sign-up" className="text-blue-600">
            Sign up
          </Link>
        </>
      )}
    >
      <Form
        className="space-y-4"
        inputs={inputs}
        onSubmit={() => onSubmit(handleLogIn)}
        submitText="Log in"
      />
    </AuthenticationLayout>
  )
}
