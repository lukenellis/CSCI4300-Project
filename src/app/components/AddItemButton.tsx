import styles from "./AddItemButton.module.css"

const AddItemButton = () => {
    return(
        <a href="./plan">
            <div className={styles.container}>
                <h1>+</h1>
                <h2>Add Item</h2>
            </div>
        </a>
    )
}
export default AddItemButton