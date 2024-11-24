"use client";
import React, { useState } from "react";
import styles from "./SignUpForm.module.css";
import { useRouter } from "next/router";  // For redirection after successful signup

const SignUpForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter(); // Hook for programmatically redirecting

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: { [key: string]: string } = {};

    // Basic form validation
    if (!fullName) newErrors.fullName = "Full name is required";
    if (!email) newErrors.email = "Email is required";
    if (!password) newErrors.password = "Password is required";
    if (password !== confirmPassword) newErrors.confirmPassword = "Passwords do not match";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Set submitting state
    setIsSubmitting(true);
    setErrors({});

    try {
      // Make POST request to create the user account
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName,
          email,
          password,
        }),
      });

      // If response is not OK (status code 2xx)
      if (!response.ok) {
        const errorData = await response.json();
        setErrors(errorData.errors || { general: "Signup failed, please try again." });
        setIsSubmitting(false);
        return;
      }

      // Assuming the backend responds with a JWT token
      const data = await response.json();
      const { token } = data;

      // Store the token in localStorage (you could also use sessionStorage)
      localStorage.setItem("authToken", token);

      // Redirect to the dashboard
      router.push("/dashboard");

    } catch (error) {
      setErrors({ general: "An error occurred during signup. Please try again." });
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.rightSide}>
      <h2>Create Your Account</h2>
      <form id="signup-form" className={styles.signupForm} onSubmit={submitHandler}>
        <label htmlFor="full-name">Full Name</label>
        <input
          type="text"
          id="full-name"
          placeholder="Enter your full name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        {errors.fullName && <p className={styles.error}>{errors.fullName}</p>}

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p className={styles.error}>{errors.email}</p>}

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <p className={styles.error}>{errors.password}</p>}

        <label htmlFor="confirm-password">Confirm Password</label>
        <input
          type="password"
          id="confirm-password"
          placeholder="Confirm your password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {errors.confirmPassword && <p className={styles.error}>{errors.confirmPassword}</p>}

        {errors.general && <p className={styles.error}>{errors.general}</p>}

        <button
          type="submit"
          className={styles.signUpButton}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Sign Up"}
        </button>

        <div className={styles.links}>
          <p>
            Already have an account?{" "}
            <a href="./login" className={styles.links}>
              Log in
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
