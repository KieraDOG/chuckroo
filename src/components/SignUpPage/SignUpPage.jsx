import React, { useState } from 'react'
import validator from 'validator'
import signUp from '../../apis/signUp'
import { TOKEN } from '../../constants/localStorage'
import useForm, { Form } from '../../hooks/useForm'
import AuthenticationLayout from '../AuthenticationLayout'
import Link from '../Router/Link'
import useRouter from '../Router/useRouter'
import ExternalLink from './components/ExternalLink'

const getEmailError = ({ email }) => {
  if (validator.isEmpty(email)) {
    return 'Email address cannot be empty'
  }

  if (!validator.isEmail(email)) {
    return 'Email address is invalid'
  }

  return
}

const getPasswordError = ({ password }) => {
  if (validator.isEmpty(password)) {
    return 'Password cannot be empty'
  }

  return
}

const getConfirmPasswordError = ({ confirmPassword, password }) => {
  if (password !== confirmPassword) {
    return 'Passwords do not match'
  }

  return
}

export default function SignUpPage() {
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
    },
    confirmPassword: {
      placeholder: 'Confirm password',
      type: 'password',
      getError: getConfirmPasswordError,
    },
  })

  const { push } = useRouter()

  const [error, setError] = useState()

  const handleSignUp = async ({ 
    email, 
    password,
  }) => {
    try {
      const response = await signUp(email, password)

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
          Join
          <br />
          and Comment
        </>
      )}
      footer={(
        <>
          Already have an account?{' '}
          <Link href="/log-in" className="text-blue-600">
            Log in
          </Link>
        </>
      )}
    >
      {error?.status === 409 && (
        <div className="text-red-400">
          An account with this email address already exists. <Link className="underline" href="/log-in">Log in</Link>?
        </div>
      )}
      <Form
        className="space-y-4"
        inputs={inputs}
        onSubmit={() => onSubmit(handleSignUp)}
        submitText="Sign up"
      />
      <div className="space-y-1">
        <p className="text-zinc-600">
          By clicking Sign up, you agree to our
        </p>
        <p>
          <ExternalLink href="/terms-of-service">Terms of Service</ExternalLink>
        </p>
        <p>
          <ExternalLink href="/privacy-policy">Privacy Policy</ExternalLink>
        </p>
      </div>
    </AuthenticationLayout>
  )
}
