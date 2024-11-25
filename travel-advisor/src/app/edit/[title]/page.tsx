"use client";
import { useRouter } from "next/navigation";
import { useContext, useState, useEffect } from "react";
import { ItemsContext } from "../../components/ItemsContext";
import styles from "./page.module.css"
import { useParams } from "next/navigation";
import Header from "@/app/components/Header";

type Vacation = {
    title: string;
    image: string;
    location: string;
    dates: string;
};

const EditItemForm = () => {
    const { vacations, setVacations } = useContext(ItemsContext);
    const router = useRouter();
    const { title } = useParams();
    let newTitle = title ? Array.isArray(title) ? title[0] : title : '';
    const decodedTitle = decodeURI(newTitle);
    const vacationToEdit = vacations.find((vacation) => vacation.title === decodedTitle);

    const [image, setImage] = useState(vacationToEdit?.image || "");
    const [location, setLocation] = useState(vacationToEdit?.location || "");
    const [startDate, setStartDate] = useState(vacationToEdit?.dates.split(" to ")[0] || "");
    const [endDate, setEndDate] = useState(vacationToEdit?.dates.split(" to ")[1] || "");

    const HandleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        const updatedVacations = vacations.map((vacation) =>
            vacation.title === decodedTitle
                ? {
                      ...vacation,
                      image: image,
                      location: location,
                      dates: `${startDate} to ${endDate}`,
                  }
                : vacation
        );
        setVacations(updatedVacations)

        router.push("/dashboard");
    };

    return (
        <div className={styles.all}>
        <Header />
        <div className={styles.body}>
        <div className={styles.formContainer}>

        <form className={styles.tripForm} onSubmit={HandleSubmit}>
            <div className={styles.formGroup}>
                <label htmlFor="trip-name">Trip Name</label>
                <input type="text" id="trip-name" placeholder="Please enter a name" value={decodedTitle} disabled/>
                <small className={styles.errorMessage}>Please enter a name</small>
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="image">Image URL</label>
                <input type="text" id="image" placeholder="Paste your image URL" value={image} onChange={(e) => setImage(e.target.value)} required/>
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="destination">Destination</label>
                <input type="text" id="destination" placeholder="Type a location" value={location} onChange={(e) => setLocation(e.target.value)} required/>
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="dates">Dates</label>
                <div className={styles.dateGroup}>
                    <div><p>From:</p><input type="date" id="start-date" value={startDate} onChange={(e) => setStartDate(e.target.value)} required/></div>
                    <div><p>To:</p><input type="date" id="end-date" value={endDate} onChange={(e) => setEndDate(e.target.value)} required/></div>
                </div>
            </div>

            <button type="submit" className={styles.continueButton}>Continue</button>
        </form>
    </div>
    </div>
    </div>
    );
};

export default EditItemForm;
