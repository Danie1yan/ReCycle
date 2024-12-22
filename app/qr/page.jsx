"use client";
import { Button } from '@mui/material'; // You can use Material UI components
import Image from 'next/image';
import Link from 'next/link'; // Import Link component from Next.js

const QRPage = () => {
  return (
    <div className="flex flex-col items-center mt-[120px]">
      {/* QR Code Image */}
      <div className="mb-4">
        <Image 
        src="/qr.png" 
        alt="QR Code" 
        width={200} 
        height={200} 
        />
      </div>

      {/* Text suggesting to scan the QR code */}
      <div className="text-center mb-4">
        <h2>Scan the QR Code</h2>
        <p>Please scan the QR code above to proceed.</p>
      </div>

      {/* Link Button to return to the /main route */}
      <div className="mt-4">
        <Link href="/main">
          <Button variant="outlined" color="secondary">
            Return
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default QRPage;
