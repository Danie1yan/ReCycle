"use client";

import React from "react";
import { Card, CardContent, Typography, Box, Button } from "@mui/material";
import { useRouter } from "next/navigation";

const DashboardCard = () => {
    const router = useRouter();
  return (
    <>
      <div className="p-4 min-h-screen flex flex-col mt-[30px] relative">
        {/* Greeting Section */}
        <Typography variant="h5" component="h1" className="font-bold mb-4">
          Hi, Suren
        </Typography>

        {/* Card Section */}
        <Card
          className="rounded-xl shadow-md"
          sx={{ backgroundColor: "#6FCF97", color: "#fff" }}
        >
          <CardContent>
            <Box className="flex justify-between items-center mb-4">
              <Typography variant="h6" className="font-semibold">
                ReCycle
              </Typography>
              <Typography variant="h5" className="font-bold">
                VISA
              </Typography>
            </Box>
            <Typography variant="h6" className="tracking-widest font-medium">
              8910 2617 2001 2888
            </Typography>
          </CardContent>
        </Card>

        {/* Bottles Section */}
        <Box className="my-6 p-4 bg-white shadow rounded-lg">
          <Typography variant="body2" color="textSecondary" className="mb-2">
            Bottles you've recycled
          </Typography>
          <Typography variant="h5" className="font-bold text-teal-500">
            25 Bottles
          </Typography>
        </Box>

        {/* News Section */}
        <Box
          className="rounded-lg p-6 bg-green-100 shadow-md"
          sx={{ backgroundColor: "#E8F5E9" }}
        >
          <Typography
            variant="h5"
            className="font-bold text-green-700 mb-2"
            component="div"
          >
            THINK GREEN
          </Typography>
          <Typography
            variant="subtitle1"
            className="text-green-600 font-semibold mb-2"
          >
            Reduce Reuse Recycle
          </Typography>
          <Typography variant="body2" color="textSecondary" className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
          </Typography>

          {/* Social Icons */}
          <Box className="flex space-x-4">
            <Button
              variant="contained"
              sx={{
                borderRadius: "50%",
                backgroundColor: "#e0e0e0",
                color: "#757575",
                width: 36,
                height: 36,
                minWidth: 36,
              }}
            >
              🌍
            </Button>
            <Button
            onClick={() => {router.push("https://youtube.com/shorts/uJX8JXySvys?feature=share")}}
              variant="contained"
              sx={{
                borderRadius: "50%",
                backgroundColor: "#e0e0e0",
                color: "#757575",
                width: 36,
                height: 36,
                minWidth: 36,
              }}
            >
              📷
            </Button>
            <Button
            onClick={() => {router.push("https://www.youtube.com/watch?v=ZzP2CeiH1n0")}}
              variant="contained"
              sx={{
                borderRadius: "50%",
                backgroundColor: "#e0e0e0",
                color: "#757575",
                width: 36,
                height: 36,
                minWidth: 36,
              }}
            >
              🎥
            </Button>
          </Box>
        </Box>

        {/* Content should push up to accommodate the fixed navigation */}
        <div className="flex-grow" />
      </div>

      {/* Bottom Navigation */}
      <Box
        className="absolute bottom-0 left-0 w-full bg-white shadow-lg z-10"
        sx={{
          zIndex: 20,
        }}
      >
        <div className="flex justify-between py-3 px-5">
          <Button
            onClick={() => {router.push("/map")}}
            size="small"
            sx={{
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
              color: "#757575",
              padding: 0,
              width: "auto", // Smaller button width
              minWidth: "32px", // Adjusting for smaller text
            }}
          >
            🗺️ <span className="text-[0.5rem]">Map</span> {/* Smaller Text */}
          </Button>
          <Button
            size="small"
            onClick={() => {router.push("/qr")}}
            sx={{
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
              color: "#757575",
              padding: 0,
              width: "auto", // Smaller width
              minWidth: "32px", // Adjusting for smaller text
            }}
          >
            📷 <span className="text-[0.5rem]">QR Code</span> {/* Smaller Text */}
          </Button>
          <Button
            size="small"
            onClick={() => {router.push("/cart")}}
            sx={{
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
              color: "#757575",
              padding: 0,
              width: "auto", // Smaller button width
              minWidth: "32px", // Adjusting for smaller text
            }}
          >
            🛒 <span className="text-[0.5rem]">Cart</span> {/* Smaller Text */}
          </Button>
          <Button
            size="small"
            onClick={() => {router.push("/account")}}
            sx={{
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
              color: "#757575",
              padding: 0,
              width: "auto", // Smaller button width
              minWidth: "32px", // Adjusting for smaller text
            }}
          >
            👤 <span className="text-[0.5rem]">Account</span> {/* Smaller Text */}
          </Button>
        </div>
      </Box>
    </>
  );
};

export default DashboardCard;
