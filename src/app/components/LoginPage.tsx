import LoginForm from "./LoginForm"
import LoginLeft from "./LoginLeft"
import styles from "./LoginPage.module.css"

const LoginPage = () => {
    return(
        <div className={styles.all}>
            <div className={styles.container}>
                <div className={styles.body}>
                    <LoginLeft />
                    <LoginForm />
                </div>
            </div>
        </div>
    )
}

export default LoginPage