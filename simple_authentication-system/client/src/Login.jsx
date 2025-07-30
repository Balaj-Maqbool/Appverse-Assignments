import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState({ state: false, message: "" });
    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError({ state: false, message: "" });

        try {
            const res = await fetch("http://localhost:3000/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, password, username })
            });

            const data = await res.json();

            if (!res.ok) {
                setError({ state: true, message: data.message || "Login failed" });
                return;
            }

            if (!data.token) {
                setError({ state: true, message: "No token received" });
                return;
            }

            localStorage.setItem("token", data.token)
            navigate("/dashboard")

        } catch (error) {
            console.log("Error during login:", error);
            setError({ state: true, message: "500, Something went wrong" });
        }
    };

    return (
        <div className='flex flex-col justify-center items-center min-h-screen max-w-full bg-slate-900 text-white'>
            {error.state && (
                <div className='font-bold text-3xl text-red-500'>{error.message}</div>
            )}
            <h1 className='font-bold text-red-400 text-3xl mb-5'>Login</h1>
            <div className='flex flex-col justify-center items-center bg-white text-black rounded-3xl px-10 py-8 w-full max-w-md shadow-lg'>
                <form onSubmit={handleSubmit} className='w-full flex flex-col gap-4'>
                    <input
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                        className="p-3 bg-slate-800 text-white rounded-xl"
                        type="text"
                        required
                        placeholder='Username'
                    />
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        className="p-3 bg-slate-800 text-white rounded-xl"
                        type="email"
                        required
                        placeholder='Email'
                    />
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        className="p-3 bg-slate-800 text-white rounded-xl"
                        type="password"
                        required
                        placeholder='Password'
                    />
                    <button
                        type="submit"
                        className='p-3 bg-red-600 text-white font-bold rounded-xl hover:bg-red-700'
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
