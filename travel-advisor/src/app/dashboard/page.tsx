import Header from "../components/Header"
import Vacations from "../components/Vacations"
import AddItemButton from "../components/AddItemButton"


export default function Dashboard() {
    return(
        <div>
            <Header />
            <AddItemButton />
            <Vacations />
        </div>
    )
}