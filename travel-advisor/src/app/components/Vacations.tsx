import VacationItem from "./VacationItem";
import styles from "./Vacations.module.css"

const Vacations = () => {

    const dummyArray = ["Item1", "Item2", "Item3"]

    return(
        <div className={styles.gridContainer}>
            {dummyArray.map(() => (
                <VacationItem />
            ))}
        </div>
    );
}

export default Vacations