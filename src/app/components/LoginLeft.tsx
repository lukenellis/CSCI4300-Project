import styles from "./LoginLeft.module.css"

const LoginLeft = () => {
    return(
        <div className={styles.leftSide}>
            <h1 className={styles.title}>TRAVEL ADVISOR</h1>
            <p className={styles.subtitle}>Your Dream Trip, Perfectly Planned—Weather-Ready, Curated, and Personalized Just for You!</p>
            <div className={styles.illustration}>
            <img src="/images/Screenshot 2024-11-07 at 11.58.21 AM.png" alt="Traveler illustration" />

            </div>
        </div>
    );
}

export default LoginLeft