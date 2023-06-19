import axios from "axios";
import React, { useEffect, useState } from "react";

const Reviews = () => {
  const [buttonClicks, setButtonClicks] = useState([]);

  useEffect(() => {
    fetchButtonClicks();
  }, []);

  const fetchButtonClicks = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5070/api/buttonClicks"
      );
      setButtonClicks(response.data.buttonClicks);
    } catch (error) {
      console.error("Error fetching button clicks:", error);
    }
  };

  return (
    <div className="ml-20 mt-10">
      <h1 className="text-2xl font-bold mb-4">Reviews</h1>
      <ul className="divide-y divide-gray-200">
        {buttonClicks.map((click, index) => (
          <li key={index} className="">
            <div className="flex items-center">
              <span className="mr-2 font-semibold">{click.buttonName}:</span>
              <span className="text-gray-600">{click.clickCount} clicks</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
