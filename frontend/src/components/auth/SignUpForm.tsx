import { useState } from "react";
interface SignUpFormProps {
  onSubmit: (data: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }) => void;
}

const SignUpForm = ({ onSubmit }: SignUpFormProps) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
    <div className="min-h-screen flex flex-col justify-center items-center w-full bg-fuchsia-950 p-4">
      <div className="bg-fuchsia-800 w-full max-w-md mx-auto p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center text-white mb-6">
          Signup
        </h1>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2">
            <label
              className="text-blue-50 text-sm font-medium"
              htmlFor="firstName"
            >
              First Name *
            </label>
            <input
              className="text-gray-900 bg-white border-2 border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
              type="text"
              name="firstName"
              id="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <label
              className="text-blue-50 text-sm font-medium"
              htmlFor="lastName"
            >
              Last Name *
            </label>
            <input
              className="text-gray-900 bg-white border-2 border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
              type="text"
              name="lastName"
              id="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
            <label className="text-blue-50 text-sm font-medium" htmlFor="email">
              Email *
            </label>
            <input
              className="text-gray-900 bg-white border-2 border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label
              className="text-blue-50 text-sm font-medium"
              htmlFor="password"
            >
              Password *
            </label>
            <input
              className="text-gray-900 bg-white border-2 border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <button
              className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-semibold py-2 px-4 rounded mt-4"
              type="submit"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
