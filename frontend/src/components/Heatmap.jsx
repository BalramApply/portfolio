import React, { useEffect, useState } from "react";
import HeatMap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import "./customHeatmap.css";
import { LeetCodeStats } from "./LeetcodeStats";

const Heatmap = () => {
  const [leetcodeData, setLeetcodeData] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const username = import.meta.env.VITE_LEETCODE; 
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    fetch(`${backendUrl}/leetcode/${username}/calendar`)
      .then((res) => res.json())
      .then((data) => {
        const raw = JSON.parse(data.submissionCalendar);
        const parsed = Object.entries(raw).map(([ts, count]) => ({
          date: new Date(Number(ts) * 1000).toISOString().split("T")[0],
          count,
        }));
        setLeetcodeData(parsed);
      })
      .catch((err) => console.error("Calendar fetch error:", err));
  }, []);

  const classForValue = (value) => {
    if (!value || value.count === 0) return "heatmap-empty";
    if (value.count < 3) return "heatmap-scale-1";
    if (value.count < 5) return "heatmap-scale-2";
    if (value.count < 7) return "heatmap-scale-3";
    return "heatmap-scale-4";
  };

  const getStartDate = () => {
    const today = new Date();
    const monthsToSubtract = isMobile ? 2 : 4;
    const startDate = new Date(today);
    startDate.setMonth(today.getMonth() - monthsToSubtract);
    return startDate;
  };

  return (
    <div id="leetcode" className="py-24 px-4 relative">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-primary">
        LeetCode <span className="text-white">Activity</span>
      </h2>
      <div className="container mx-auto max-w-5xl flex flex-col gap-8">
        {/* First Row - Heatmap */}
        <div className="w-full">
          <HeatMap
            startDate={getStartDate()}
            endDate={new Date()}
            values={leetcodeData}
            classForValue={classForValue}
            gutterSize={1}
          />
          <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 hidden group-hover:block bg-neutral-800 text-white text-xs px-3 py-2 rounded-md shadow-md z-10 w-max max-w-xs text-center">
            There are limited number of requests on this API :)
          </div>
        </div>
        
        {/* Second Row - LeetCode Stats */}
        <div className="w-full">
          <LeetCodeStats />
        </div>
      </div>
    </div>
  );
};

export default Heatmap;