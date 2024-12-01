import AddItemButton from "./AddItemButton";
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
            {vacations.map((vacation, index) => (
                <VacationItem key={index} vacation={vacation}/>
            ))}
            <AddItemButton />
        </div>
        
    );
}

export default Vacations