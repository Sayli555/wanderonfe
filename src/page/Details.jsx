import React, { useEffect, useState } from "react";
import { useAuth } from "../Context/AuthContext";
import CardCity from "../components/CardCity";

const Details = () => {
  const { token } = useAuth();
  const [tripdata, setTripData] = useState([]);

  useEffect(() => {
    async function fetchPrivateRoute() {
      try {
        const response = await fetch(
          "https://wonderon-backend.vercel.app/products",
          {
            method: "GET",

            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = await response.json();
        if (data && data.product.length > 0) {
          setTripData(data.product);
        }
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    }
    fetchPrivateRoute();
  }, []);

  return (
    <div className="mt-20">
       <h1 className="text-3xl text-blue-500 font-bold text-center my-2">You can Explore More Trip </h1>
      <div className="privateRoute   items-center space-x-4 p-4">
       
        <CardCity tripdata={tripdata} />
      </div>
    </div>
  );
};

export default Details;
