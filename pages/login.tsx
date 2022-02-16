/* eslint-disable no-undef */
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Swal from 'sweetalert2';

export default function Login() {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();

  const updateUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.currentTarget.value);
  };
  const updatePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
  };

  const loginUser = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'admin' && password === 'password') {
      if (typeof window !== 'undefined') {
        // eslint-disable-next-line no-undef
        localStorage.setItem('htnLoggedIn', 'true');
      }
      router.push('/');
    } else {
      Swal.fire({
        title: 'Error!',
        text: 'Water water water! Wrong username or password. Hint: It is admin and password',
        icon: 'error',
        confirmButtonText: 'loo loo loo!',
      });
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-screen">
      <form className="flex flex-col pt-3 md:pt-8 w-96" onSubmit={(e) => loginUser(e)}>
        <div className="flex flex-col pt-4">
          <input type="text" onChange={(e) => updateUsername(e)} placeholder="Username" className=" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
        </div>

        <div className="flex flex-col pt-4">
          <input type="password" onChange={(e) => updatePassword(e)} placeholder="Password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
        </div>

        <input type="submit" value="Log In" className="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8" />
      </form>
      <div className="text-center pt-12 pb-12">
        <p>
          Don&apos;t have an account?
          {' '}
          <Link href="/login">
            <div className="underline font-semibold">
              Sign Up
            </div>
          </Link>
        </p>
      </div>
    </div>
  );
}
