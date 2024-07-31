import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Signup = () => {
  const [rememberLogin, setRememberLogin] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const {user, signUp} = UserAuth()
  const navigate = useNavigate()

  const handleFormSubmit = async (e) => {
    e.preventDefault()

    try {
      await signUp(email, password)
      navigate('/')
    }
    catch(err) {
      console.log(err)
    }
    
  };

  return (
    <>
      <div className='w-full h-screen '>
        <img className='hidden sm:block absolute w-full object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/0552717c-9d8c-47bd-9640-4f4efa2de663/537e2c5e-c750-4d4c-9f7a-e66fe93eb977/IN-en-20240701-POP_SIGNUP_TWO_WEEKS-perspective_WEB_b00eeb83-a7e8-4b5b-8ff7-86ed92c51caf_small.jpg" alt="///" />
        <div className='bg-black/70 fixed top-0 left-0 w-full h-screen' />

        <div className='fixed w-full px-4 py-24 z-20'>
          <div className='max-w-[450px] h-[600px] mx-auto bg-black/60 rounded-lg'>
            <div className='max-w-[320px] mx-auto py-16'>
              <h1 className='text-3xl font-nsans-bold'> Sign UP </h1>
              <form onSubmit={handleFormSubmit} className='w-full flex flex-col py-4'> 
                <input className='p-3 my-2 bg-gray-700 rounded' type="email" placeholder='email' autoComplete='email' value={email} onChange={(e) => setEmail(e.target.value)}  />
                <input className='p-3 my-2 bg-gray-700 rounded' type="password" placeholder='password' autoComplete='current-password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <button className='bg-red-500 py-3 my-6 rounded font-nsans-bold'>Sign up</button>
                <div className='flex justify-between items-center text-gray-600'>
                  <p>
                    <input className='mr-2' type="checkbox" checked={rememberLogin} onChange={(e) => setRememberLogin(!rememberLogin)} />
                    Remember me
                  </p>
                  <p>Need help ?</p>
                </div>
                  <p className='my-4'>
                    <span className='text-gray-600 mr-2'>Already subscribed to Netflix ?</span>
                    <Link to='/login'>Sign In</Link>
                  </p>
              </form>
            </div>
          </div>
        </div>
      </div> 
    </>
  )
}

export default Signup
