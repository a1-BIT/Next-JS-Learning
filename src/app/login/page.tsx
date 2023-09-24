"use client";

import { useState } from "react";
import Link from 'next/link'

export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1>Login</h1>
        <hr />
      
          <label htmlFor="email">email</label>
        <input
        className="p-2 border-gray-300 rounded-lg mb-4 focus:outline-none"
          type="email"
          id="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder="email"
        />
          <label htmlFor="password">password</label>
        <input
        className="p-2 border-gray-300 rounded-lg mb-4 focus:outline-none"
          type="password"
          id="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder="password"
        />
        <button
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
        >Login Here</button>
        <Link href='/signup'>Visit signup page</Link>
      </div>
    </>
  );
}
 