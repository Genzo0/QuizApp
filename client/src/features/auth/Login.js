import { useRef, useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { setCredentials } from './authSlice'
import { useLoginMutation } from './authApiSlice'
import { Button, Card, Label, TextInput } from 'flowbite-react'

const Login = () => {

  const userRef = useRef()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [login, {isLoading}] = useLoginMutation()

  useEffect(() => {
    userRef.current.focus()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    try{
        const { accessToken } = await login({username, password}).unwrap()
        dispatch(setCredentials({ accessToken }))
        setUsername('')
        setPassword('')
        navigate('/libraries')
    } catch (err) {
        console.log(err)
    }

  }

  const handleUserInput = (e) => setUsername(e.currentTarget.value)
  const handlePwdInput = (e) => setPassword(e.currentTarget.value)

  if(isLoading) return (<p>Loading...</p>)

  const content = (
    <div className="flex flex-col items-center justify-center px-6 lg:h-screen lg:gap-y-12 bg-gray-800">
                <Card
                    className="w-full md:max-w-screen-sm [&>img]:hidden md:[&>img]:w-96 md:[&>img]:p-0 md:[&>*]:w-full md:[&>*]:p-16 lg:[&>img]:block"
                >
                <div className="my-6 flex items-center gap-x-1 lg:my-0">
                    <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
                    QUIZ APP
                    </span>
                </div>
                    <h1 className="mb-3 text-2xl font-bold dark:text-white md:text-3xl">
                    Sign in to platform
                    </h1>
                    <form onSubmit={handleSubmit}>
                    <div className="mb-4 flex flex-col gap-y-3">
                        <Label htmlFor="username">Your username</Label>
                        <TextInput
                        id="username"
                        name="username"
                        type="text"
                        value={username}
                        ref={userRef}
                        autoComplete='off'
                        required
                        onChange={handleUserInput}
                        />
                    </div>
                    <div className="mb-6 flex flex-col gap-y-3">
                        <Label htmlFor="password">Your password</Label>
                        <TextInput
                        id="password"
                        name="password"
                        onChange={handlePwdInput}
                        value={password}
                        type="password"
                        required
                        />
                    </div>
                    <div className="mb-6">
                        <Button type="submit" className="w-full lg:w-auto">
                            Login to your account
                        </Button>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-300">
                        Not registered?&nbsp;
                        <a href="/register" className="text-primary-600 dark:text-primary-300">
                        Create account
                        </a>
                    </p>
                    </form>
                </Card>
            </div>
  )

  return content
}

export default Login