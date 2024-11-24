import LoginLeft from "../components/LoginLeft"
import SignUpForm from "../components/SignUpForm"
import styles from "./page.module.css"

export default function SignUp() {
    return(
        <div className={styles.all}>
            <div className={styles.container}>
                <div className={styles.body}>
                    <LoginLeft />
                    <SignUpForm />
                </div>
            </div>
        </div>
    );
}