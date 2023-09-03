'use client'

import { useRouter } from "next/navigation";

export default function Dashboard() {
    const router = useRouter();

    const Logout = async () => {
        const res = await fetch('/api/login', {
            method: 'GET',
        })

        const json = await res.json();
        if (json.status === 'success') {
            router.replace('/');
        }
    }

    return (
        <div>
            <div>This is the dashboard page</div>
            <button onClick={Logout}>Logout</button>
        </div>
    )
}