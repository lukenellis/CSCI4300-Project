"use client"
import styles from "./LoginForm.module.css"

const LoginForm = () => {

    const submitHandler = () => {
        console.log("Placeholder for function")
    }


    return(
        <div className={styles.rightSide}>
            <h2>Welcome Back!</h2>
            <form className={styles.loginForm} onSubmit={submitHandler}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Enter your email" />
                
                <label htmlFor="password">Password</label>
                <input type="password" id="password" placeholder="Enter your password" />
                
                <button type="submit" className={styles.signInButton}>Sign In</button>
                
                <div className={styles.links}>
                    <a href="#" className="forgot-password">Forgot password?</a>
                    <a href="./signup/" className="sign-up">Sign up!</a>
                </div>
            </form>
        </div>
    );
}

export default LoginForm;