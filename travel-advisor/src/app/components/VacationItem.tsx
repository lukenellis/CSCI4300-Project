import Image from "next/image";
import styles from "./VacationItem.module.css"
import Link from "next/link";

const gridImg = {
    maxWidth: "100%",
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

const linkStyle = {
    textDecoration: 'underline',
    color: 'blue'
};



const VacationItem = ({vacation}:VacationProps) => {
    return(
        <div className={styles.gridItem}>
            <h2>{vacation.title}</h2>
            <Image src={vacation.image} alt="User Image" width="200" height="150" style={gridImg}/>
            <p>{vacation.location}</p>
            <p>{vacation.dates}</p>
            <Link href={`/edit/${vacation.title}`} passHref style={linkStyle}>
                Edit
            </Link>
        </div>
    )
}

export default VacationItem;