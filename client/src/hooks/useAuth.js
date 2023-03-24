import { useSelector } from "react-redux";
import { selectCurrentToken } from "../features/auth/authSlice";
import jwtDecode from "jwt-decode"

import React from 'react'

const useAuth = () => {
  const token = useSelector(selectCurrentToken)

  if(token) {
    const decoded = jwtDecode(token)
    const { username, picture_url } = decoded.UserInfo

    return { username, picture_url }
  }

  return { username : "", picture_url:""}
}

export default useAuth