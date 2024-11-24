"use client"
import styles from "./SignUpForm.module.css"

const SignUpForm = () => {

    const submitHandler = () => {
        console.log("Placeholder function")
    }

    return(
        <div className={styles.rightSide}>
            <h2>Create Your Account</h2>
            <form id="signup-form" className={styles.signupForm}>
                <label htmlFor="full-name">Full Name</label>
                <input type="text" id="full-name" placeholder="Enter your full name" />
                
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Enter your email" />
                
                <label htmlFor="password">Password</label>
                <input type="password" id="password" placeholder="Enter your password" />
                
                <label htmlFor="confirm-password">Confirm Password</label>
                <input type="password" id="confirm-password" placeholder="Confirm your password" />
                
                <button type="button" className={styles.signUpButton} onSubmit={submitHandler}>Sign Up</button>
                
                <div className={styles.links}>
                    <p>Already have an account? <a href="./" className={styles.links}>Log in</a></p>
                </div>
            </form>
        </div>
    )
}

export default SignUpForm;