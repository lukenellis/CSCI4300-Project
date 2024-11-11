import styles from "./AddItemForm.module.css"

const AddItemForm = () => {
    return(
 
        <div className={styles.formContainer}>

            <form className={styles.tripForm}>
                <div className={styles.formGroup}>
                    <label htmlFor="trip-name">Trip Name</label>
                    <input type="text" id="trip-name" placeholder="Please enter a name" required />
                    <small className={styles.errorMessage}>Please enter a name</small>
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="destination">Destination</label>
                    <input type="text" id="destination" placeholder="Type a location" />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="dates">Dates</label>
                    <div className={styles.dateGroup}>
                        <div><p>From:</p><input type="date" id="start-date" /></div>
                        <div><p>To:</p><input type="date" id="end-date" /></div>
                    </div>
                </div>

                <button type="submit" className={styles.continueButton}>Continue</button>
            </form>
        </div> 
    )
}

export default AddItemForm