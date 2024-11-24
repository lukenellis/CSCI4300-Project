import styles from "./Header.module.css"

const Header = () => {
    return(
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <p>ICON HERE</p>
                <span className={styles.logo}>TravelAdvisor</span>
            </div>
            <a href="./" className={styles.logout}>Log out</a>
        </header>
    )
}

export default Header;