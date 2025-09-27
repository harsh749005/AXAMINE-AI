import React, { useState } from "react";
import { signup,signInWithGoogle } from "../utils/authHelpers";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [error, setError] = useState(""); // string instead of object
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validForm = () => {
    if (!formData.email) {
      setError("Email is required");
      return false;
    } else if (!validateEmail(formData.email)) {
      setError("Please enter a valid email");
      return false;
    } else if (!formData.password) {
      setError("Password is required");
      return false;
    }
    setError("");
    return true;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validForm()) return;

    try {
      setError("");
      await signup(formData.email, formData.password);
      navigate("/"); // go to protected page
    } catch (err) {
      setError(err.message);
    }
  };
  async function handleGoogleSignIn(e) {
   // prevent form submit
    try {
      setError("");
      await signInWithGoogle();
      navigate("/"); // navigate after successful google login
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div>

    <form onSubmit={handleSubmit}>
      <input
        name="email"
        onChange={handleInputChange}
        type="email"
        placeholder="Email"
        required
        />
      <input
        name="password"
        onChange={handleInputChange}
        type="password"
        placeholder="Password"
        required
      />
      <button type="submit">Sign Up</button>
      {error && <div className="imagine">{error}</div>}
    </form>
      <button onClick={()=>handleGoogleSignIn()}>signInWithGoogle</button>
        </div>
  );
}

