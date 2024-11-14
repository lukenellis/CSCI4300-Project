import styles from "./LoginLeft.module.css"

const LoginLeft = () => {
    return(
        <div className={styles.leftSide}>
            <h1 className={styles.title}>TRAVEL ADVISOR</h1>
            <p className={styles.subtitle}>Your Dream Trip, Perfectly Planned—Weather-Ready, Curated, and Personalized Just for You!</p>
            <div className={styles.illustration}>
                <img src="https://www.freeiconspng.com/uploads/description-white-plane-icon-2-27.png" alt="Traveler illustration" />
            </div>
        </div>
    );
}

export default LoginLeft