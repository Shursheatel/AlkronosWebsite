import React from 'react'
import { useState } from 'react'

const AuthForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className='_container'>
      <form className=''>
        <h1 className=''>Почта</h1>
        <div className='relative h-8 w-full mb-4'>
          <input 
            className='absolute shadow inset-0 px-2' 
            type = "text" 
            value={username} 
            onChange={event => setUsername(event.target.value)}
          />
        </div>
        <h1 className=''>Пароль</h1>
        <div className='relative h-8 w-full mb-4'>
          <input 
            className='absolute shadow inset-0 px-2' 
            type = "text" 
            value={password} 
            onChange={event => setPassword(event.target.value)}
          />
        </div>
        <div>
          <button className='shadow px-2 py-1'>Войти</button>
        </div>
      </form>
    </div>
  )
}
export default AuthForm;