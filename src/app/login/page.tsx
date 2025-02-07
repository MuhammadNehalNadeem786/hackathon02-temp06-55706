'use client';
import Header from "../components/Header";
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import Footer from "../components/Footer"

const Login = () => {
    return (
        <div>
            {/*Header Component*/}
            < Header />
            <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
                <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
                    <div className='flex justify-center text-center'>
                        <SignedIn>
                            <div>
                                <UserButton />

                                <h1 className='text-lg font-medium text-center mt-4'>Congratulation You Are Sign in</h1>
                                <h2 className='text-lg font-bold text-center mt-4'>WELCOME to Furniro</h2>
                                <p className='text-base text-center mt-4'>Furniture as Unique as You Are</p>
                            </div>
                        </SignedIn>
                    </div>
                    <SignedOut>
                        <h1 className="text-2xl font-bold mb-6 text-center">Sign in to Furniro</h1>
                        <p className="text-lg mb-6 text-center">Welcome back! Please sign in to continue</p>

                        <form>
                            {/* Email Address */}
                            <div className="mb-4">
                                <label className="block text-gray-700 font-medium mb-2">Email Address</label>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                                />
                            </div>

                            {/* Password */}
                            <div className="mb-4">
                                <label className="block text-gray-700 font-medium mb-2">Password</label>
                                <input
                                    type="password"
                                    placeholder="Enter your password"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                                />
                            </div>

                            {/* Remember Me & Forgot Password */}
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center">
                                    <input type="checkbox" id="rememberMe" className="mr-2" />
                                    <label htmlFor="rememberMe" className="text-sm text-gray-700">Remember Me</label>
                                </div>
                                <Link href="#" className="text-sm text-gray-500 hover:underline">Forgot Password?</Link>
                            </div>

                        </form>

                        {/* Login Button */}
                        <Link href={`https://solid-bunny-40.accounts.dev/sign-in?redirect_url=http%3A%2F%2Flocalhost%3A3000%2Flogin`}>

                            <div className=' text-center w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 cursor-pointer'>

                                <SignInButton />


                            </div>
                        </Link>

                        <p className="text-center mt-4 text-gray-600">
                            No account? <Link href="#" className="text-red-500 font-bold hover:underline">Create an account</Link>
                        </p>
                    </SignedOut>
                </div>
            </div >
            {/* Component Render */}
            <Footer />
        </div>
    );
}
export default Login;