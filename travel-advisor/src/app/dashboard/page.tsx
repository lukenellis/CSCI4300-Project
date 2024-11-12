"use client"

import Header from "../components/Header"
import Vacations from "../components/Vacations"
import AddItemButton from "../components/AddItemButton"
import React, { useState } from "react"

type Vacation = {
    title: string;
    image: string;
    location: string;
    dates: string;
}

const initialArray: Vacation[] = [
    {
        title: "21st Birthday Trip",
        image: "https://content.r9cdn.net/rimg/dimg/17/74/0ca6e469-city-30651-1632b88f203.jpg?width=1200&height=630&xhint=2635&yhint=1507&crop=true",
        location: "Miami, FL",
        dates: "June 1st - June 3rd"
    },
    {
        title: "Spring Break",
        image: "https://www.moonpalacecancun.com/small_sunrise-area-moon-palace-cancun_6417283d9f.webp",
        location: "Cancun, Mexico",
        dates: "March 4th - March 8th"
    },
    {
        title: "Winter Ski Trip",
        image: "https://jacksonhole-traveler-production.s3.amazonaws.com/wp-content/uploads/2014/11/jacksonhole-mountainresort-1280x601.jpg",
        location: "Jackson Hole, WY",
        dates: "December 17th - December 20th"
    }
]

export default function Dashboard() {

    const [vacations, setVacations] = useState(initialArray)

    const addVacation = (newVacation : Vacation) => {
        setVacations((prevVacations) => [...prevVacations, newVacation])
    }

    return(
        <div>
            <Header />
            <AddItemButton />
            <Vacations vacations={ vacations }/>
        </div>
    )
}