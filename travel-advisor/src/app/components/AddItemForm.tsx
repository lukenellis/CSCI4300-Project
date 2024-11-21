"use client"
import { useRouter } from "next/navigation"
import styles from "./AddItemForm.module.css"
import { ItemsContext } from "../components/ItemsContext"
import { useContext, useState } from "react"

type Vacation = {
    title: string;
    image: string;
    location: string;
    dates: string;
}

const AddItemForm = () => {
    const {vacations, setVacations} = useContext(ItemsContext)
    const router = useRouter();
    

    const addVacation = (newVacation: Vacation) => {
        setVacations((prevVacations) => [...prevVacations, newVacation])
    }

    const [title, setTitle] = useState("")
    const [image, setImage] = useState("")
    const [location, setLocation] = useState("")
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    const HandleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("SUBMITTED FORM")

        const newVacation : Vacation = {
            title: title,
            image: image,
            location: location,
            dates: `${startDate} to ${endDate}`
        }
    
        addVacation(newVacation)
        
        setTitle("");
        setImage("");
        setLocation("");
        setStartDate("");
        setEndDate("");

        router.push("/dashboard");
    }


    return(
        <div className={styles.formContainer}>

            <form className={styles.tripForm} onSubmit={HandleSubmit}>
                <div className={styles.formGroup}>
                    <label htmlFor="trip-name">Trip Name</label>
                    <input type="text" id="trip-name" placeholder="Please enter a name" value={title} onChange={(e) => setTitle(e.target.value)} required/>
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
    )
}

export default AddItemForm