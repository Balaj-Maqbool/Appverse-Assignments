import { useNavigate } from "react-router-dom"
import {jwtDecode} from "jwt-decode"
import { useEffect, useState } from "react"

const Dashboard = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState(null)

    useEffect(() => {
        const token = localStorage.getItem("token")
        if (!token) {
            navigate("/") // redirect to login if not logged in
            return
        }
        try {
            const decoded = jwtDecode(token)
            setUser(decoded)
        } catch (err) {
            console.error("Invalid token", err)
            navigate("/") 
        }
    }, [navigate])

    if (!user) return null 

    return (
        <div className='bg-slate-800 min-h-screen flex flex-col justify-center items-center max-w-full text-white'>
            <h1 className="font-bold text-3xl mb-5 text-red-400">User Credentials</h1>
            <div className='p-10 text-white flex flex-col gap-y-5 justify-start items-center border-2 border-white rounded-2xl'>
                <h2 className='w-full text-center'>Full Name: <span className='font-bold'>{user.fullName}</span></h2>
                <h3 className='w-full text-center'>Email: <span className='font-bold'>{user.email}</span></h3>
                <h3 className='w-full text-center'>Username: <span className='font-bold'>{user.username}</span></h3>
                <h3 className='w-full text-center'>Role: <span className='font-bold'>{user.role}</span></h3>
                <button
                    onClick={() => {
                        localStorage.removeItem("token")
                        navigate("/")
                    }}
                    className='cursor-pointer p-5 mb-6 bg-white text-red-500 font-bold w-[60%] h-10 rounded-2xl flex justify-center items-center text-[1.1rem]'
                >
                    Logout
                </button>
            </div>
        </div>
    )
}

export default Dashboard
