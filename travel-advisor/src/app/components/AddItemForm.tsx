import styles from "./AddItemForm.module.css";

const AddItemForm = ({ formData, handleInputChange }) => {
    return (
        <div className={styles.formContainer}>
            <form className={styles.tripForm}>
                <div className={styles.formGroup}>
                    <label htmlFor="title">Trip Name</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        placeholder="Please enter a name"
                        required
                    />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="location">Destination</label>
                    <input
                        type="text"
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        placeholder="Type a location"
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
                                name="dates"
                                value={formData.dates}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="numTravelers"># of Travelers</label>
                    <input
                        type="number"
                        id="numTravelers"
                        name="numTravelers"
                        value={formData.numTravelers}
                        onChange={handleInputChange}
                    />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="travelMethod">Method of Travel</label>
                    <input
                        type="text"
                        id="travelMethod"
                        name="travelMethod"
                        value={formData.travelMethod}
                        onChange={handleInputChange}
                    />
                </div>
            </form>
        </div>
    );
};

export default AddItemForm;
