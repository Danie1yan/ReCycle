"use client";
import { Card, CardContent, Typography, Box } from '@mui/material';
import { Button } from '@mui/material';
import Link from 'next/link';

const PaymentHistoryPage = () => {
  const transactions = [
    { date: "2024-07-27 10:30:00", description: "Recycled 3 Cans", amount: "+$1.50" },
    { date: "2024-07-26 15:45:00", description: "Recycled 1 Bottle", amount: "+$0.50" },
    { date: "2024-07-25 09:00:00", description: "Recycled 5 Paper Bundles", amount: "+$2.50" },
    { date: "2024-07-24 18:20:00", description: "Recycled 2 Bottles", amount: "+$1.00" },
    { date: "2024-07-23 11:15:00", description: "Recycled 1 Can", amount: "+$0.50" },
    { date: "2024-07-22 14:00:00", description: "Recycled 4 Cans", amount: "+$2.00" },
    { date: "2024-07-27 10:30:00", description: "Recycled 3 Cans", amount: "+$1.50" },
    { date: "2024-07-26 15:45:00", description: "Recycled 1 Bottle", amount: "+$0.50" }
  ];

  return (
    <div className="p-4 mt-20 h-screen overflow-y-auto scrollable-container">
      <Card
        className="rounded-xl shadow-md mb-6 sticky top-0 bg-[#6FCF97] z-10"
        sx={{ color: "#fff" }}
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


    <Link href="/account" passHref>
        <Button variant="contained" color="primary" className="mb-4">
            Return
        </Button>
    </Link>

      <Typography variant="h5" className="font-semibold mb-4">
        History
      </Typography>

      <div className="space-y-3">
        {transactions.map((transaction, index) => (
          <div key={index} className="bg-white rounded-lg p-3 shadow-sm">
            <div className="flex justify-between items-center">
              <div>
                <Typography variant="body1" className="font-medium">
                  {new Date(transaction.date).toLocaleDateString("en-US", {
                    year: 'numeric', month: 'long', day: 'numeric',
                  })}
                  {" "}
                  {new Date(transaction.date).toLocaleTimeString("en-US", {
                    hour: '2-digit', minute: '2-digit'
                  })}
                </Typography>
                <Typography variant="body2" className="text-gray-600">
                  {transaction.description}
                </Typography>
              </div>
              <Typography variant="body1" className="font-medium">
                {transaction.amount}
              </Typography>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentHistoryPage;