"use client";

import { useState } from "react";
import Link from 'next/link'

export default function Signup() {
  const [user, setUser] = useState({
    username: "", 
    email: "",
    password: "",
  });
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1>Signup</h1>
        <hr />
        <label htmlFor="username">Username</label>
        <input
        className="p-2 border-gray-300 rounded-lg mb-4 focus:outline-none"
          type="text"
          id="username"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          placeholder="username"
        />
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
        >Signup Here</button>
        <Link href='/login'>Visit login page</Link>
      </div>
    </>
  );
}
 