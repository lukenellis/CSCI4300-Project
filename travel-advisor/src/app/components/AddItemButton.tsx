import styles from "./AddItemButton.module.css"
import Link from "next/link";


const AddItemButton = () => {
    return(
        <Link href="./plan">
            <div className={styles.container}>
                <h1>+</h1>
                <h2>Add Item</h2>
            </div>
        </Link>
    )
}
export default AddItemButton