import { Link, Outlet } from "react-router-dom"
import { useEffect, useRef, useState } from "react"
import { useRefreshMutation } from "./authApiSlice"
import usePersist from "../../hooks/usePersist"
import { useSelector } from "react-redux"
import { selectCurrentToken } from "./authSlice"
import { useNavigate } from "react-router-dom"

const PersistLogin = () => {
  const [persist] = usePersist()
  const token = useSelector(selectCurrentToken)
  const effectRan = useRef(false)

  const navigate = useNavigate()

  const[trueSuccess, setTrueSuccess] = useState(false)

  const [refresh, {
    isUninitialized,
    isLoading, 
    isSuccess,
    isError,
    error
  }] = useRefreshMutation()

  useEffect(() => {
    if(effectRan.current === true || process.env.NODE_ENV !== 'development'){
        const verifyRefreshToken = async() => {
            console.log('verifying refresh token')
            try {
                await refresh()
                setTrueSuccess(true)
            } catch(err){
                console.log(err)
            }
        }

        if(!token && persist) verifyRefreshToken()
    }
    return () => effectRan.current = true
  }, [])

  let content
  if(!persist){
    console.log('no persist')
    content = <Outlet/>
  } else if (isLoading){
    console.log('loading')
    content = <p>Loading...</p>
  } else if (isError){
    navigate('/login')
  } else if (isSuccess && trueSuccess){
    console.log('success')
    content = <Outlet/>
  } else if (token && isUninitialized){
    console.log('token and uninit')
    console.log(isUninitialized)
    content = <Outlet/>
  }

  return content
}

export default PersistLogin