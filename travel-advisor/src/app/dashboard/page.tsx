"use client"

import Header from "../components/Header"
import Vacations from "../components/Vacations"
import React, { useContext, useState, useEffect } from "react"
import { ItemsContext } from "../components/ItemsContext"
import { useRouter } from "next/router"

export default function Dashboard() {
  const { vacations, setVacations } = useContext(ItemsContext);
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    // Check if the user is authenticated (if JWT exists in localStorage)
    const token = localStorage.getItem("authToken");

    if (!token) {
      // If no token, redirect to login page
      router.push("/login");
    } else {
      // Optionally, decode the JWT token to get user details or fetch user info from backend
      setUser({ email: "user@example.com" }); // Example, you can decode the token here
    }
  }, [router]);

  return (
    <div>
      <Header />
      <Vacations vacations={vacations} />
      <h2>Welcome to the Dashboard, {user ? user.email : 'Guest'}!</h2>
    </div>
  );
}
