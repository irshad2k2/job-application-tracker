import SignUpForm from "../components/auth/SignUpForm";
const Signup: React.FC = () => {
  const handleSignUp = async (data: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }) => {
    const response = await fetch("http://localhost:3000/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      console.log("Sign-up successful!");
    } else {
      console.error("Sign-up error:", response.statusText);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center">
      <SignUpForm onSubmit={handleSignUp} />
    </div>
  );
};

export default Signup;
