// src/app/plan/page.tsx

"use client";  // Make sure this is here for client-side hooks

import { useState } from "react";
import { useRouter } from "next/navigation";  // Use 'next/navigation' for Next.js 13+ router API
import Header from "../components/Header";
import AddItemForm from "../components/AddItemForm";
import styles from "./page.module.css";

export default function Plan({ addVacationItem }) {
    const [formData, setFormData] = useState({
        title: "",
        imageUrl: "",
        location: "",
        dates: "",
        numTravelers: "",
        travelMethod: ""
    });

    const router = useRouter();  // Initialize useRouter

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addVacationItem(formData);  // Send data to parent
        router.push("/dashboard");  // Redirect after form submission
    };

    return (
        <div className={styles.all}>
            <Header />
            <div className={styles.body}>
                <div className={styles.formContainer}>
                    <AddItemForm
                        formData={formData}
                        handleInputChange={handleInputChange}
                    />
                    <button
                        type="submit"
                        className={styles.continueButton}
                        onClick={handleSubmit}
                    >
                        Continue
                    </button>
                </div>
            </div>
        </div>
    );
}
