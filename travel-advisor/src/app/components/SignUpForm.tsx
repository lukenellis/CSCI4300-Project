"use client"
import { useState } from "react";
import styles from "./SignUpForm.module.css";

const SignUpForm = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault(); // Prevent the default form submission behavior
        
        // Validate passwords match
        if (formData.password !== formData.confirmPassword) {
            console.log("Passwords do not match!");
            return;
        }

        // Perform the signup logic, e.g., send data to an API
        console.log("Form submitted with data:", formData);
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
                    value={formData.fullName} // Ensure value is controlled by React state
                    onChange={handleChange} // Handle change to update state
                />
                
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                />
                
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                />
                
                <label htmlFor="confirm-password">Confirm Password</label>
                <input
                    type="password"
                    id="confirm-password"
                    placeholder="Confirm your password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                />
                
                <button type="submit" className={styles.signUpButton}>Sign Up</button>
                
                <div className={styles.links}>
                    <p>Already have an account? <a href="./" className={styles.links}>Log in</a></p>
                </div>
            </form>
        </div>
    );
};

export default SignUpForm;
