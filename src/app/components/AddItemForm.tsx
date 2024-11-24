"use client";
import styles from "./AddItemForm.module.css";
import { useState } from "react";

const AddItemForm = () => {
  const [tripName, setTripName] = useState("");
  const [destination, setDestination] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    // Retrieve the logged-in user
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser") || "{}");
    if (!loggedInUser.email) {
      alert("Please log in to add a trip.");
      return;
    }

    // Fetch existing vacations or initialize if none exist
    const userVacations = JSON.parse(localStorage.getItem("vacations") || "{}");
    const userTrips = userVacations[loggedInUser.email] || [];

    // Add new trip
    const newTrip = { tripName, destination, startDate, endDate };
    userTrips.push(newTrip);

    // Update localStorage
    userVacations[loggedInUser.email] = userTrips;
    localStorage.setItem("vacations", JSON.stringify(userVacations));

    alert("Trip added successfully!");
    setTripName("");
    setDestination("");
    setStartDate("");
    setEndDate("");
  };

  return (
    <div className={styles.formContainer}>
      <form className={styles.tripForm} onSubmit={submitHandler}>
        <div className={styles.formGroup}>
          <label htmlFor="trip-name">Trip Name</label>
          <input
            type="text"
            id="trip-name"
            placeholder="Please enter a name"
            value={tripName}
            onChange={(e) => setTripName(e.target.value)}
            required
          />
          <small className={styles.errorMessage}>Please enter a name</small>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="destination">Destination</label>
          <input
            type="text"
            id="destination"
            placeholder="Type a location"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="dates">Dates</label>
          <div className={styles.dateGroup}>
            <div>
              <p>From:</p>
              <input
                type="date"
                id="start-date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>
            <div>
              <p>To:</p>
              <input
                type="date"
                id="end-date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>
          </div>
        </div>

        <button type="submit" className={styles.continueButton}>
          Add Trip
        </button>
      </form>
    </div>
  );
};

export default AddItemForm;
