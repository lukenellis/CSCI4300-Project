import Header from "../components/Header"
import AddItemForm from "../components/AddItemForm"
import styles from "./page.module.css"

export default function Plan() {
    return(
            <div className={styles.all}>
                <Header />
                <div className={styles.body}>
                    <AddItemForm />
                </div>
            </div>
    )
}