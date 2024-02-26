import { Link } from "react-router-dom"
import useLogin from "../hooks/useLogin"
import { useState } from "react"

const Login = () => {
    const [inputs, setInputs] = useState({
        email: "",
        password: ""
    })
    const { loading, handleLogin } = useLogin()
    const handleSubmit = async (ev) => {
        ev.preventDefault()
        await handleLogin(inputs)
    }
    return (
        <div className="h-screen w-full px-4 sm:px-0 sm:w-[85%] mx-auto flex justify-center items-center">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 shadow-lg p-4 rounded-xl w-full sm:w-[400px]  bg-gray-500  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
                <h2 className=" font-bold text-lg">Login Form</h2>
                <label className="input input-bordered flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                    <input value={inputs.email} onChange={(ev) => setInputs({ ...inputs, email: ev.target.value })} type="email" className="grow" placeholder="Email" />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                    <input value={inputs.password} onChange={(ev) => setInputs({ ...inputs, password: ev.target.value })} type="password" className="grow" placeholder="password" />
                </label>
                <button type="submit" className="btn bg-blue-700 text-white">{loading ? <span className="loading loading-spinner"></span> : "Login"}</button>
                <p className="text-md font-medium text-center">New User? <Link className="text-blue-600" to={"/signup"}>Signup</Link></p>
            </form>
        </div>
    )
}
export default Login