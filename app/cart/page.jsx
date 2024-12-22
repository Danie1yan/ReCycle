"use client";
import { Button } from '@mui/material'; // You can use Material UI components
import Image from 'next/image';
import Link from 'next/link'; // Import Link component from Next.js

const CartPage = () => {
  return (
    <div className="flex flex-col items-center mt-[120px]">
      {/* Cart Image */}
      <div className="mb-4">
        <Image 
        className='cursor-pointer'
          src="/cart.png" 
          alt="Cart" 
          width={700} 
          height={200} 
        />
      </div>

      {/* Link Button to return to the /main route */}
      <div className="mt-4">
        <Link href="/main">
          <Button variant="outlined" color="secondary">
            Return to Main
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CartPage;
