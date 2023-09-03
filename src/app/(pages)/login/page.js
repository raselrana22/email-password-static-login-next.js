"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'

const formInitialValue = {
    email: "email@email.com",
    password: "123"
}

export default function Login() {

    const [formValue, SetFormValue] = useState(formInitialValue)
    const router = useRouter();

    const inputChange = (name, value) => {
        SetFormValue(formValue => (
            {
                ...formValue,
                [name]: value
            }
        ))
    }

    const submit = async (e) => {
        e.preventDefault();
        if (formValue.email.length === 0) {
            alert("Email Required");
            return;
        } else if (formValue.password.length === 0) {
            alert("Password Required");
            return;
        }

        try {
            const response = await fetch("/api/login", {
                method: 'POST',
                body: JSON.stringify(formValue)
            });
            const json = await response.json();
            if (json.status === "success") {
                router.replace('/dashboard');
            } else {
                // Display error message to the user
                alert(json.message);
            }
        } catch (error) {
            // Handle network or other unexpected errors
            console.error("Login error:", error);
            alert("An error occurred during login.");
        }
    }

    return (
        <div>
            <form onSubmit={submit}>
                <label className='py-2 px-2'>User Email</label>
                <input className='border border-black' value={formValue.email} onChange={(e) => inputChange('email', e.target.value)} type="email" placeholder="example@example.com" />
                <br />
                <label className='py-2 px-2'>User Password</label>
                <input className='border border-black' value={formValue.password} onChange={(e) => inputChange('password', e.target.value)} type="password" placeholder="XXXXXXX" />
                <br />
                <input className='px-2 border border-black rounded-sm' type="submit" value="Login" />
            </form>
        </div>
    );
};
