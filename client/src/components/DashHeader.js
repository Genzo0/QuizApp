import { Avatar, Button, Dropdown, Navbar } from 'flowbite-react'
import React from 'react'
import { useEffect } from 'react'
import { useNavigate, Link, useLocation } from 'react-router-dom'
import { useSendLogoutMutation } from '../features/auth/authApiSlice'
import useAuth from '../hooks/useAuth'

const DashHeader = () => {

    const { username, picture_url } = useAuth()

    const navigate = useNavigate()
    const { pathname } = useLocation()

    const [sendLogout, {
        isLoading,
        isSuccess, 
        isError,
        error
    }] = useSendLogoutMutation()

    useEffect(() => {
        if(isSuccess) navigate('/')
    }, [isSuccess, navigate])

    const onLogoutClicked = () => sendLogout()

    if(isLoading) return <p>Logging out...</p>

    if(isError) return <p>Error : {error.data?.message}</p>

    const logoutButton = (
        <Button
        color="failure"
        onClick={onLogoutClicked}>
            Logout
        </Button>
    )

    const content = (
        <Navbar
            fluid={true}
            className="bg-slate-700">
            <Navbar.Brand>
                <img
                src={picture_url}
                rounded={true}
                className="mr-3 h-6 sm:h-9"
                alt="Flowbite Logo"
                />
                <span className="self-center whitespace-nowrap text-xl font-semibold text-white">
                {username}
                </span>
            </Navbar.Brand>
            <div className="flex md:order-2">
                    {logoutButton}
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <Navbar.Link className='text-white'
                href="/libraries"
                >
                Libraries
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    )
  return content
}

export default DashHeader