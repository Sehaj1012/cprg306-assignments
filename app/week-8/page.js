"use client"

import Link from 'next/link';
import { useUserAuth } from './_utils/auth-context';

const Page = () => {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    // SignIn and SignOut handlers
    const handleSignIn =  () => {
        try {
             gitHubSignIn();
        } catch (error) {
            console.error("Error signing in: ", error);
        }
    };

    const handleSignOut =  () => {
        try {
             firebaseSignOut();
        } catch (error) {
            console.error("Error signing out: ", error);
        }
    };
    return (
        <main className=" min-h-screen bg-black text-white">
            <h1>Shopping list</h1>
            {user ? (
                <div className=' flex flex-col'>
                    <p>Logged in as {user.displayName} ({user.email})</p>
                    <Link className=' w-1/2 hover:text-gray-400 decoration-none ' href="/week-8/shopping-list">Go to shopping list</Link>
                    <button onClick={handleSignOut} className=' w-fit bg-red-600 p-1 border-none rounded-md'>Sign out</button>
                </ div>
            ) : (
                <>
                    <p>Not logged in</p>
                    <button onClick={handleSignIn} className=' bg-green-600 p-1 border-none rounded-md'>Sign in with GitHub</button>
                </>
            )}
        </main>
    )
};

export default Page;