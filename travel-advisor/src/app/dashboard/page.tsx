"use client"

import Header from "../components/Header"
import Vacations from "../components/Vacations"
import React, { useContext, useState } from "react"
import { ItemsContext } from "../components/ItemsContext"


export default function Dashboard() {

    const {vacations, setVacations} = useContext(ItemsContext);

    return(
        <div>
            <Header />  
            <Vacations vacations={ vacations }/>
        </div>
    )
}