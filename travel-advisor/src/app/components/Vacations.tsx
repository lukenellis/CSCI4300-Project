import VacationItem from "./VacationItem";
import styles from "./Vacations.module.css"

type Vacation = {
    title: string;
    image: string;
    location: string;
    dates: string;
}

type VacationArray = {
    vacations: Vacation[];
}

const Vacations = ({ vacations }: VacationArray) => {

    return(
        <div className={styles.gridContainer}>
            {vacations.map((vacation) => (
                <VacationItem vacation={vacation}/>
            ))}
        </div>
    );
}

export default Vacations