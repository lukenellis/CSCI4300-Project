import styles from "./LoginLeft.module.css"

const LoginLeft = () => {
    return(
        <div className={styles.leftSide}>
            <h1 className={styles.title}>TRAVEL ADVISOR</h1>
            <p className={styles.subtitle}>Your Dream Trip, Perfectly Planned—Weather-Ready, Curated, and Personalized Just for You!</p>
            <div className={styles.illustration}>
                <img src="https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder-1024x1024.png" alt="Traveler illustration" />
            </div>
        </div>
    );
}

export default LoginLeft