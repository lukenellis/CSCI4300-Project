"use client" 
import { useState } from "react";
import styles from "./SignUpForm.module.css";

const SignUpForm = () => {
    // State to store form input values
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    // State for error messages
    const [error, setError] = useState("");

    const submitHandler = async (e: React.FormEvent) => {
        e.preventDefault(); // Prevent form from reloading the page
        
        // Basic validation
        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        // Create an object with form data
        const formData = {
            fullName,
            email,
            password,
        };

        // Send form data to an API (or backend)
        try {
            const response = await fetch("/api/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error("Failed to create an account");
            }

            const data = await response.json();
            console.log("Account created successfully:", data);

            // Handle successful account creation (e.g., redirect to login page)
        } catch (error) {
            console.error("Error creating account:", error);
            setError("Error creating account. Please try again.");
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

                <label htmlFor="confirm-password">Confirm Password</label>
                <input
                    type="password"
                    id="confirm-password"
                    placeholder="Confirm your password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />

                {error && <p className={styles.error}>{error}</p>}

                <button type="submit" className={styles.signUpButton}>
                    Sign Up
                </button>

                <div className={styles.links}>
                    <p>Already have an account? <a href="./" className={styles.links}>Log in</a></p>
                </div>
            </form>
        </div>
    );
};

export default SignUpForm;
