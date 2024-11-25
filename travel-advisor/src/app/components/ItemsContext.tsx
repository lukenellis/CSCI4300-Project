"use client"
import React, { createContext, useState, ReactNode } from 'react';

const initialArray: Vacation[] = [
    {
        title: "21st Birthday Trip",
        image: "https://content.r9cdn.net/rimg/dimg/17/74/0ca6e469-city-30651-1632b88f203.jpg?width=1200&height=630&xhint=2635&yhint=1507&crop=true",
        location: "Miami, FL",
        dates: "2024-6-1 to 2024-6-3"
    },
    {
        title: "Spring Break",
        image: "https://www.moonpalacecancun.com/small_sunrise-area-moon-palace-cancun_6417283d9f.webp",
        location: "Cancun, Mexico",
        dates: "2024-3-3 to 2024-3-8"
    },
    {
        title: "Winter Ski Trip",
        image: "https://jacksonhole-traveler-production.s3.amazonaws.com/wp-content/uploads/2014/11/jacksonhole-mountainresort-1280x601.jpg",
        location: "Jackson Hole, WY",
        dates: "2024-12-10 to 2024-12-20"
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