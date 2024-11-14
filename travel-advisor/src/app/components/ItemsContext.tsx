"use client"
import React, { createContext, useState, ReactNode } from 'react';

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


type Vacation = {
    title: string;
    image: string;
    location: string;
    dates: string;
}

interface ContextProviderProps {
    children: ReactNode;
}

export const ItemsContext = createContext<{
    vacations: Vacation[];
    setVacations: React.Dispatch<React.SetStateAction<Vacation[]>>;
}>({ vacations: [], setVacations: () => {} });

export const ContextProvider = ({ children }: ContextProviderProps) => {
    const [vacations, setVacations] = useState(initialArray);

    return (
      <ItemsContext.Provider value={{ vacations, setVacations }}>
        {children}
      </ItemsContext.Provider>
    );
};