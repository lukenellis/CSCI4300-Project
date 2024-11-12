"use client";  // Add this line to mark this component as client-side

import { useState } from "react";
import { useRouter } from "next/router"; // Import useRouter
import Header from "../components/Header";
import Vacations from "../components/Vacations";
import AddItemButton from "../components/AddItemButton";
import styles from "./page.module.css";

export default function Dashboard() {
    const [vacationItems, setVacationItems] = useState([]);
    const router = useRouter(); // Initialize the router

    const addVacationItem = (item) => {
        setVacationItems((prevItems) => [...prevItems, item]);
        router.push("/dashboard"); // After adding, navigate to the dashboard
    };

    return (
        <div>
            <Header />
            <AddItemButton />
            <Vacations vacationItems={vacationItems} />
        </div>
    );
}
