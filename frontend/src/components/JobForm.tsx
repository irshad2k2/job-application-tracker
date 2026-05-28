import { useState } from "react";

interface JobFormProps {
  onSubmit: (data: {
    company: string;
    role: string;
    description: string;
    ctc: string;
    location: string;
    status: string;
    appliedDate: string;
    notes: string;
  }) => void;
}

const JobForm = ({ onSubmit }: JobFormProps) => {
  const [formData, setFormData] = useState({
    company: "",
    role: "",
    description: "",
    ctc: "",
    location: "",
    status: "APPLIED",
    appliedDate: "",
    notes: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="w-full">
      <h1 className="text-2xl font-bold text-center text-white mb-6">
        Add Job Application
      </h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex flex-col gap-1">
            <label
              className="text-blue-50 text-sm font-medium"
              htmlFor="company"
            >
              Company *
            </label>
            <input
              className="text-gray-900 bg-white border-2 border-gray-300 rounded px-3 py-1.5 focus:outline-none focus:border-blue-500"
              type="text"
              name="company"
              id="company"
              value={formData.company}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-blue-50 text-sm font-medium" htmlFor="role">
              Role *
            </label>
            <input
              className="text-gray-900 bg-white border-2 border-gray-300 rounded px-3 py-1.5 focus:outline-none focus:border-blue-500"
              type="text"
              name="role"
              id="role"
              value={formData.role}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-blue-50 text-sm font-medium" htmlFor="ctc">
              CTC (LPA) *
            </label>
            <input
              className="text-gray-900 bg-white border-2 border-gray-300 rounded px-3 py-1.5 focus:outline-none focus:border-blue-500"
              type="text"
              name="ctc"
              id="ctc"
              value={formData.ctc}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex flex-col gap-1">
            <label
              className="text-blue-50 text-sm font-medium"
              htmlFor="location"
            >
              Location *
            </label>
            <input
              className="text-gray-900 bg-white border-2 border-gray-300 rounded px-3 py-1.5 focus:outline-none focus:border-blue-500"
              type="text"
              name="location"
              id="location"
              value={formData.location}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex flex-col gap-1">
            <label
              className="text-blue-50 text-sm font-medium"
              htmlFor="status"
            >
              Status *
            </label>
            <select
              name="status"
              id="status"
              value={formData.status}
              onChange={handleChange}
              className="text-gray-900 bg-white border-2 border-gray-300 rounded px-3 py-1.5 focus:outline-none focus:border-blue-500 h-9.5"
              required
            >
              <option value="" disabled hidden>
                Select Status
              </option>
              <option value="APPLIED">Applied</option>
              <option value="INTERVIEW">Interview</option>
              <option value="OFFER">Offered</option>
              <option value="REJECTED">Rejected</option>
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <label
              className="text-blue-50 text-sm font-medium"
              htmlFor="appliedDate"
            >
              Applied Date *
            </label>
            <input
              className="text-gray-900 bg-white border-2 border-gray-300 rounded px-3 py-1.5 focus:outline-none focus:border-blue-500"
              type="date"
              name="appliedDate"
              id="appliedDate"
              value={formData.appliedDate}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <label
              className="text-blue-50 text-sm font-medium"
              htmlFor="description"
            >
              Job Description *
            </label>
            <input
              className="text-gray-900 bg-white border-2 border-gray-300 rounded px-3 py-1.5 focus:outline-none focus:border-blue-500"
              type="text"
              name="description"
              id="description"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-blue-50 text-sm font-medium" htmlFor="notes">
              Notes *
            </label>
            <input
              className="text-gray-900 bg-white border-2 border-gray-300 rounded px-3 py-1.5 focus:outline-none focus:border-blue-500"
              type="text"
              name="notes"
              id="notes"
              value={formData.notes}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="flex justify-end mt-2">
          <button
            className="w-full md:w-44 bg-fuchsia-600 hover:bg-fuchsia-500 text-white font-bold py-2.5 px-6 rounded-lg transition-colors shadow-md"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default JobForm;
