import React, { useEffect, useState } from 'react'
import { useRouter } from '../../../../../Router'
import Login from './components/Login'
import Notification from './components/Notification'
import SignUp from './components/SignUp'
import User from './components/User'
import getAuthentication from '../../../../../../apis/getAuthentication/getAuthentication'
import { TOKEN } from '../../../../../../constants/localStorage'

export default function Authentication() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const { push } = useRouter()

  useEffect(() => {
    const authentication = async () => {
      const token = localStorage.getItem(TOKEN)
    
      if (token) {
        try {
          await getAuthentication(token)
          
          setIsLoggedIn(true)
        } catch (error) {
          localStorage.removeItem(TOKEN)

          setIsLoggedIn(false)
        }
      }
    }

    authentication()
  }, [])
   
  return (
    <div className="flex gap-x-2.5">
      {!isLoggedIn ? (
        <>
          <Login onClick={() => push('/log-in')} />
          <SignUp onClick={() => push('/sign-up')} />
        </>
      ) : (
        <>
          <Notification />
          <User onLogOut={() => {
            setIsLoggedIn(false)
            localStorage.removeItem(TOKEN)
          }} />
        </>
      )}
    </div>
  )
}
