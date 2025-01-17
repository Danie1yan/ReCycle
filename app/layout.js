import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Box, Typography } from "@mui/material";
import BatteryFullIcon from "@mui/icons-material/BatteryFull";
import WifiIcon from "@mui/icons-material/Wifi";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-300`}
            >
                <div className="max-w-[300px] w-full h-[650px] rounded-3xl bg-white ml-auto mr-auto mt-[20px] relative overflow-hidden">
                    <Box
                        className="flex items-center justify-between px-4"
                        sx={{
                            height: "24px",
                            position: "absolute",
                            top: "10px",
                            left: 0,
                            right: 0,
                            borderTopLeftRadius: "16px",
                            borderTopRightRadius: "16px",
                        }}
                    >
                        <Typography
                            variant="caption"
                            sx={{
                                fontWeight: "bold",
                                color: "black",
                                fontSize: "15px",
                            }}
                        >
                            12:30
                        </Typography>

                        <Box className="flex items-center space-x-1">
                            <SignalCellularAltIcon
                                fontSize="small"
                                sx={{ color: "black" }}
                            />
                            <WifiIcon
                                fontSize="small"
                                sx={{ color: "black" }}
                            />
                            <BatteryFullIcon
                                fontSize="small"
                                sx={{ color: "black" }}
                            />
                        </Box>
                    </Box>

                    {children}

                    <Box
                        sx={{
                            height: "5px",
                            backgroundColor: "black",
                            position: "absolute",
                            bottom: "10px",
                            left: "50%",
                            transform: "translateX(-50%)",
                            borderRadius: "8px",
                            width: "110px",
                        }}
                    ></Box>
                    <Box
                        sx={{
                            position: "absolute",
                            top: "7px",
                            left: "50%",
                            transform: "translateX(-50%)",
                            width: "100px",
                            height: "30px",
                            backgroundColor: "black",
                            borderRadius: "20px",
                            zIndex: 10,
                        }}
                    ></Box>
                </div>
            </body>
        </html>
    );
}
