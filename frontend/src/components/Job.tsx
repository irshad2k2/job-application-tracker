import React from "react";

interface JobProps {
  company: string;
  role: string;
  description: string;
  ctc: string;
  location: string;
  status: "APPLIED" | "OFFER" | "INTERVIEW" | "REJECTED" | string;
  notes: string;
}

const Job: React.FC<JobProps> = ({
  company,
  role,
  description,
  ctc,
  location,
  status,
  notes,
}) => {
  let bg = "bg-gray-500";

  if (status === "APPLIED") {
    bg = "bg-blue-500";
  } else if (status === "OFFER") {
    bg = "bg-green-500";
  } else if (status === "INTERVIEW") {
    bg = "bg-yellow-500";
  } else if (status === "REJECTED") {
    bg = "bg-red-500";
  }

  return (
    <div className="p-2">
      <div className={`${bg} p-6 rounded-lg text-white`}>
        <h1 className="text-xl font-bold">Company: {company}</h1>
        <h2>Role: {role}</h2>
        <p>Description: {description}</p>
        <p>CTC: {ctc}</p>
        <p>Location: {location}</p>
        <p>Status: {status}</p>
        <p>Notes: {notes}</p>
      </div>
    </div>
  );
};

export default Job;
