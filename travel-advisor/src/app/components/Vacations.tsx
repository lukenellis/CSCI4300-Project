import VacationItem from "./VacationItem";
import styles from "./Vacations.module.css";

const Vacations = ({ vacationItems }) => {
    return (
        <div className={styles.gridContainer}>
            {vacationItems.map((item, index) => (
                <VacationItem
                    key={index}
                    title={item.title}
                    imageUrl={item.imageUrl}
                    location={item.location}
                    dates={item.dates}
                    numTravelers={item.numTravelers}
                    travelMethod={item.travelMethod}
                />
            ))}
        </div>
    );
};

export default Vacations;
