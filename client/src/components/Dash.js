import { Outlet } from "react-router-dom"
import DashFooter from "./DashFooter"
import DashHeader from "./DashHeader"

const Dash = () => {
  return (
    <div className="flex flex-col bg-gray-800 justify-between min-h-screen">
        <DashHeader/>
        <div className="flex w-4/5 items-center justify-center mx-auto py-16 gap-x-10 ">
            <Outlet/>
        </div>
        <DashFooter/>
    </div>
  )
}

export default Dash