import Image from "next/image";
import styles from "./VacationItem.module.css"

const gridImg = {
    maxWidth: "100%",
    height: "auto",
    borderRadius: "8px",
    marginBottom: "10px",
};


const VacationItem = () => {
    return(
        <div className={styles.gridItem}>
            {/*Need to make this dynamic, replace with variables taken from add form
            Use props to do this. Similar to individual react project with buzz lightyear.*/}

            <h2>Title</h2>
            <Image src="https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder-1024x1024.png" alt="User Image" width="100" height="100" style={gridImg}/>
            <p>Location</p>
            <p>Dates</p>
            <p># of Travelers</p>
            <p>Method of Travel</p>
        </div>
    )
}

export default VacationItem;