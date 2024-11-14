import Link from "next/link";
import styles from "./Header.module.css"

const Header = () => {
    return(
        <header className={styles.header}>
            <div className={styles.logoContainer}>
            <img src="https://www.freeiconspng.com/uploads/description-white-plane-icon-2-27.png" alt="Plane Icon" height="75" width="75"/>
                <span className={styles.logo}>TravelAdvisor</span>
            </div>
            <Link href="./" className={styles.logout}>Log out</Link>
        </header>
    )
}

export default Header;