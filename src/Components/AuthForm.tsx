
import { useState } from 'react'
import { supabase } from '../lib/supabaseClient'
import Header from './Header'
import { useNavigate } from 'react-router-dom'

export default function AuthForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLogin, setIsLogin] = useState(true)
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [signup, setSignup] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setError('')

        const { error } = isLogin
            ? await supabase.auth.signInWithPassword({ email, password })
            : await supabase.auth.signUp({ email, password })

        if (error) {
            setError(error.message)
        }

        setLoading(false)
    }
    
    // Handle login and if user is verified then move him/her into the app
    const navigate = useNavigate()
    async function handleLogin(){
        const{data , error} = await supabase.auth.signInWithPassword({
            email,
            password,
          })
        if(error){
            setError(error.message)
        }
        if (!data.user?.email_confirmed_at) {
            setError('Please verify your email before signing in.')
            await supabase.auth.signOut()
            return
          }else{
            navigate('/searchBy')
          }
    }

    return (
        <div className="flex flex-col items-center">
            <Header menu={false} back={false} />
            <form onSubmit={handleSubmit} className="h-screen w-[360px] flex flex-col gap-4 justify-center items-center">
                <h1 className="text-xl font-semibold text-center">{isLogin ? 'Sign In' : 'Sign Up'}</h1>
                <input
                    type="email"
                    placeholder="Email"
                    className="w-[320px] h-[48px] border border-[#AEAEB2] bg-white rounded-lg p-2 flex justify-between items-center focus:border focus:border-[#7FC859]"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="w-[320px] h-[48px] border border-[#AEAEB2] bg-white rounded-lg p-2 flex justify-between items-center focus:border focus:border-[#7FC859]d"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                {error && <p className="text-red-500 text-sm">{error}</p>}
                <button
                    type="submit"
                    className="w-[320px] h-[46px] border-2 border-[#7FC859] rounded-full hover:bg-[#E5F4DE] cursor-pointer active:bg-[#7FC859] disabled:border disabled:border-gray-300 disabled:text-gray-300 disabled:hover:bg-gray-50 disabled:cursor-not-allowed"
                    disabled={loading}
                    onClick={()=> isLogin? handleLogin() : setSignup(true)}
                >
                    {loading ? 'Loading...' : isLogin ? 'Sign In' : 'Sign Up'}
                </button>
                {!error && signup && !loading && <p className='text-[#7FC859]'>Check your email to verify your account.</p>}
                <p
                    className="text-sm text-center text-gray-500 cursor-pointer"
                    onClick={() => setIsLogin(!isLogin)}
                >
                    {isLogin ? "Don't have an account? Sign up" : 'Already have an account? Sign in'}
                </p>
            </form>
        </div>
    )
}
