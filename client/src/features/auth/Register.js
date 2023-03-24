import { Button, Card, Label, TextInput } from "flowbite-react"
import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAddNewUserMutation } from "../user/userApiSlice"

const Register = () => {

  const userRef = useRef()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const navigate = useNavigate()

  const [register, {
    isLoading,
    isSuccess,
    isError,
    error
  }] = useAddNewUserMutation()

  useEffect(() => {
    if(isSuccess){
      setUsername('')
      setPassword('')
      setImageUrl('')
      navigate('../login')
    }
  }, [isSuccess, navigate])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const result = await register({username, password, image_url:imageUrl})
    if(result.error){
      alert(result.error.data.message)
    }
  }

  const handleUserInput = (e) => setUsername(e.currentTarget.value)
  const handlePwdInput = (e) => setPassword(e.currentTarget.value)
  const handleImgInput = (e) => setImageUrl(e.currentTarget.value)
  
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
                    Sign up to platform
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
                    <div className="mb-4 flex flex-col gap-y-3">
                        <Label htmlFor="image_url">Your image url</Label>
                        <p className="text-slate-400">If you dont have image url, you can leave this form empty</p>
                        <TextInput
                        id="image_url"
                        name="image_url"
                        type="text"
                        value={imageUrl}
                        ref={userRef}
                        autoComplete='off'
                        onChange={handleImgInput}
                        />
                    </div>
                    <div className="mb-6">
                        <Button type="submit" className="w-full lg:w-auto">
                            Register
                        </Button>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-300">
                        Already registered ?&nbsp;
                        <a href="/login" className="text-primary-600 dark:text-primary-300">
                          Login to your account
                        </a>
                    </p>
                    </form>
                </Card>
            </div>
  )

  return content
}

export default Register