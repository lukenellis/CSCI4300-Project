"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter for navigation
import styles from "./LoginForm.module.css";

const LoginForm = () => {
    const router = useRouter(); // Initialize useRouter
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const submitHandler = async (e: React.FormEvent) => {
        e.preventDefault();
        const credentials = { email, password };

        try {
            const response = await fetch("/api/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(credentials),
            });

            if (!response.ok) throw new Error("Invalid login credentials");

            // Navigate to dashboard upon success
            router.push("/dashboard");
        } catch (error) {
            console.error("Error logging in:", error);
            setError("Invalid email or password.");
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

                {error && <p className={styles.error}>{error}</p>}

                <button type="submit" className={styles.signInButton}>
                    Sign In
                </button>

                <div className={styles.links}>
                    <a href="#" className="forgot-password">Forgot password?</a>
                    <a href="./signup/" className="sign-up">Sign up!</a>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
