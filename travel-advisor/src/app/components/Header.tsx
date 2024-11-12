import Link from "next/link";
import styles from "./Header.module.css"

const Header = () => {
    return(
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <p>ICON HERE</p>
                <span className={styles.logo}>TravelAdvisor</span>
            </div>
            <Link href="./" className={styles.logout}>Log out</Link>
        </header>
    )
}

export default Header;