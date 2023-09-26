import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

const Statistics = () => {
  const donationData = useLoaderData();
  const [donation, setDonation] = useState(0);
  const [donationItemLength, setDonationItemLength] = useState(0);

  useEffect(() => {
    const donationItems = JSON.parse(localStorage.getItem("donate")) || [];
    const donationItemLength = donationItems.length;
    setDonationItemLength(donationItemLength);

    const donationDataLength = donationData.length;

    const donationPercentage = donationDataLength - donationItemLength;

    setDonation(donationPercentage);
  }, [donationData]);

  const data = [
    { name: "Total Donation", value: donation },
    { name: "Your Donation", value: donationItemLength },
  ];

  const COLORS = ["red", "green"];

  return (
    <div>
        <div
          className="w-full mx-auto"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <ResponsiveContainer width={400} height={400}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                outerRadius={130}
                fill="#8884d8"
                dataKey="value"
                label={({percent}) => `${(percent * 100).toFixed(2)}%`}
              >
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}></Cell>
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div style={{marginTop: '4px', display: 'flex', alignItems: 'center'}}>
            <div style={{color: 'black', marginRight: '10px',}}>Total Donation</div>
            <div style={{width: '80px', height: '10px', backgroundColor: COLORS[0], marginRight: '20px', borderRadius: '2px'}}></div>
            <div style={{color: 'black', marginRight: '10px',}}>Your Donation</div>
            <div style={{width: '80px', height: '10px', backgroundColor: COLORS[1], borderRadius: '2px'}}></div>
          </div>
        </div>
    </div>
  );
};

export default Statistics;
