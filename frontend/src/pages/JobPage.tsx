import React, { useState, useEffect } from "react";
import Job from "../components/Job";
import { useParams } from "react-router-dom";

interface JobData {
  company: string;
  role: string;
  description: string;
  ctc: string;
  location: string;
  status: string;
  notes: string;
}

const JobPage: React.FC = () => {
  const status = useParams().status;
  const [job, setJob] = useState<JobData[]>([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/job/?status=${status}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `BEARER ${localStorage.getItem("token")}`,
            },
          },
        );
        const data = await response.json();
        setJob(data);
      } catch (error) {
        console.error("Error fetching job:", error);
      }
    };

    fetchJobs();
  }, [status]);

  if (!job) return <div>Loading...</div>;

  return (
    <div className="flex flex-col gap-2 bg-fuchsia-700 h-screen">
      {job.map((job, index) => (
        <Job
          key={index}
          company={job.company}
          role={job.role}
          description={job.description}
          ctc={job.ctc}
          location={job.location}
          status={job.status}
          notes={job.notes}
        />
      ))}
    </div>
  );
};

export default JobPage;
