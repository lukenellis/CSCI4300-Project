import Image from "next/image";
import styles from "./VacationItem.module.css"

const gridImg = {
    maxWidth: "100%",
    height: "auto",
    borderRadius: "8px",
    marginBottom: "10px",
};

type Vacation = {
    title: string;
    image: string;
    location: string;
    dates: string;
}

type VacationProps = {
    vacation: Vacation
}


const VacationItem = ({vacation}:VacationProps) => {
    return(
        <div className={styles.gridItem}>
            {/*Need to make this dynamic, replace with variables taken from add form
            Use props to do this. Similar to individual react project with buzz lightyear.*/}

            <h2>{vacation.title}</h2>
            <Image src={vacation.image} alt="User Image" width="100" height="100" style={gridImg}/>
            <p>{vacation.location}</p>
            <p>{vacation.dates}</p>
        </div>
    )
}

export default VacationItem;