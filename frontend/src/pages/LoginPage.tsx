import { useNavigate } from "react-router-dom";
import LogInForm from "../components/auth/LogInForm";
const LogIn: React.FC = () => {
  const navigate = useNavigate();
  const handleLogIn = async (data: { email: string; password: string }) => {
    const response = await fetch("http://localhost:3000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const reult = await response.json();

    if (response.ok) {
      console.log("Login successful!");
      localStorage.setItem("token", reult.token);
      navigate("/dashboard");
    } else {
      console.error("Login error:", response.statusText);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center">
      <LogInForm onSubmit={handleLogIn} />
    </div>
  );
};

export default LogIn;
