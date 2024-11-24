"use client";
import styles from "./LoginForm.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter(); // For navigation after login

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    // Simulate user authentication
    const users = JSON.parse(localStorage.getItem("users") || "{}");
    if (users[email] && users[email].password === password) {
      // Save logged-in user session to localStorage
      localStorage.setItem("loggedInUser", JSON.stringify({ email }));
      alert("Logged in successfully!");
      router.push("/dashboard"); // Redirect to the dashboard page
    } else {
      alert("Invalid email or password.");
    }
  };

  return (
    <div className={styles.rightSide}>
      <h2>Welcome Back!</h2>
      <form className={styles.loginForm} onSubmit={submitHandler}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" className={styles.signInButton}>
          Sign In
        </button>

        <div className={styles.links}>
          <a href="#" className="forgot-password">
            Forgot password?
          </a>
          <a href="./signup/" className="sign-up">
            Sign up!
          </a>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
