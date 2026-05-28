import React, { useEffect } from "react";
import { useState } from "react";
import StatCard from "../components/StatCard";
import JobForm from "../components/JobForm";
import { Link } from "react-router-dom";

const DashboardPage: React.FC = () => {
  const [applied, setApplied] = useState(0);
  const [offered, setOffered] = useState(0);
  const [interview, setInterview] = useState(0);
  const [rejected, setRejected] = useState(0);

  const fetchJobStats = async () => {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/job/stats`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `BEARER ${localStorage.getItem("token")}`,
        },
      },
    );
    const data = await response.json();
    setApplied(data.APPLIED);
    setOffered(data.OFFER);
    setInterview(data.INTERVIEW);
    setRejected(data.REJECTED);
  };

  const handleCreateJob = async (data: {
    company: string;
    role: string;
    description: string;
    ctc: string;
    location: string;
    status: string;
    appliedDate: string;
    notes: string;
  }) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/job`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `BEARER ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      console.log("Job created successfully!");
      fetchJobStats();
    } else {
      console.error("Job creation error:", response.statusText);
    }
  };

  useEffect(() => {
    fetchJobStats();
  }, []);

  return (
    <div className="bg-fuchsia-700 w-full min-h-screen flex flex-col items-center">
      <div className="w-full max-w-7xl flex justify-center items-center mt-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-7xl justify-items-center p-2">
          <Link to="/jobs/APPLIED" className="w-full">
            <StatCard title="APPLIED" count={applied} bg="bg-blue-500" />
          </Link>
          <Link to="/jobs/OFFER" className="w-full">
            <StatCard title="OFFERED" count={offered} bg="bg-green-500" />
          </Link>
          <Link to="/jobs/INTERVIEW" className="w-full">
            <StatCard title="INTERVIEW" count={interview} bg="bg-yellow-500" />
          </Link>
          <Link to="/jobs/REJECTED" className="w-full">
            <StatCard title="REJECTED" count={rejected} bg="bg-red-500" />
          </Link>
        </div>
      </div>

      <div className="w-full max-w-4xl bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-xl">
        <JobForm onSubmit={handleCreateJob} />
      </div>
    </div>
  );
};

export default DashboardPage;
