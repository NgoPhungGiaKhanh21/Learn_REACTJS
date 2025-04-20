import React from 'react'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
  const navigate = useNavigate()
  const handleLogin = () => {
    alert('đăng nhập thành công')
    setTimeout(() => {
      navigate('/')
    }, 1000)
  }
  return (
    <div>
      Login page
      <button onClick={handleLogin} className='rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700'>
        Đăng nhập
      </button>
    </div>
  )
}

export default LoginPage