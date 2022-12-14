import { async } from '@firebase/util';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Signup = () => {
    const [name, setName] = useState('')
    const [nomor, setNomor] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { user, signUp } = UserAuth()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await signUp(name, nomor, email, password)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className='w-full h-screen'>
                <img className='hidden sm:block absolute w-full h-full object-cover' src='https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg' alt="" />
                <div className='bg-black/60 fixed top-0 left-0 w-full h-screen '></div>
                <div className='fixed w-full px-4 py-24 z-50'>
                    <div className='max-w -[450px] h-[600px] mx-auto bg-black/75 text-white'>
                        <div className='max-w-[320px] mx-auto py-16'>
                            <h1 className='text-3xl font-bold'>Sign Up</h1>
                            <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
                                <input onChange={(e) => setName(e.target.value)} className='p-3 my-2 bg-gray-700 rouded' type="name" placeholder='Name' autoComplete='name' />
                                <input onChange={(e) => setNomor(e.target.value)} className='p-3 my-2 bg-gray-700 rouded' type="text" placeholder='Nomor' autoComplete='nomor' />
                                <input onChange={(e) => setEmail(e.target.value)} className='p-3 my-2 bg-gray-700 rouded' type="email" placeholder='Email' autoComplete='email' />
                                <input onChange={(e) => setPassword(e.target.value)} className='p-3 my-2 bg-gray-700 rouded' type="password" placeholder='Password' autoComplete='current-password' />
                                <button className='bg-red-600 py-3 my-6 rounded font-bold '>Sign Up</button>
                                <div className='flex justify-between items-center text-sm text-gray-600'>
                                    <p><input className='mr-2' type="checkbox" />Remember Me</p>
                                    <p>Need Help?</p>
                                </div>
                                <p className='py-8'><span className='text-gray-600'>New to T-Movie?</span>{''}
                                    <Link to='/signup'>
                                        Sign Up
                                    </Link></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Signup