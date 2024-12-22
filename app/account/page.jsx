"use client";
import { Button } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

const AccountPage = () => {
return (
    <div className="flex flex-col items-center p-4 mt-20"> {/* Added padding and margin-top */}
        {/* Profile Image (Placeholder) */}
        <div className="rounded-full bg-gray-200 w-24 h-24 flex items-center justify-center mb-4">
            {/* You can replace this with an actual image component */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-gray-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.125h15m-15-8.25v2.25a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25v-2.25" />
            </svg>
        </div>

        {/* User Info */}
        <div className="text-center mb-6">
            <h2 className="text-xl font-semibold">Suren Danielyan</h2>
            <p className="text-gray-600">pro100.sev.urban@spitak.niva</p>
        </div>

        {/* Action Buttons */}
        <div className="w-full max-w-md space-y-4"> {/* Added max-width for larger screens and increased space between buttons */}
            <Link href="/payment-history" className="w-full"> {/* Example link */}
                <Button variant="contained" color="success" fullWidth>
                    Payment History
                </Button>
            </Link>
            <Link href="https://www.youtube.com/watch?v=UviUQt-rwKc " className="w-full"> {/* Example link */}
                <Button variant="contained" color="inherit" fullWidth>
                    Location
                </Button>
            </Link>
            <Link href="/settings" className="w-full"> {/* Example link */}
                <Button variant="contained" color="inherit" fullWidth>
                    Settings
                </Button>
            </Link>
            <Button variant="contained" color="error" fullWidth>
                Log out
            </Button>
            <div className='mt-60'>
                
            <Link href="/main" className="w-full mt-[200px]">
                <Button variant="contained" color="primary" fullWidth>
                    Return to Main
                </Button>
            </Link>
            </div>
        </div>
    </div>
);
};

export default AccountPage;