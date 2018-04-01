import React from 'react';
import '../styles/styles.css';



const Time = () => {

    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ]

    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ]

    return (

        <time className="time">
            {`${days[new Date().getDay()]} 
            ${new Date().getDate()} 
            ${months[new Date().getMonth()]}`}
        </time>

    );
}

export default Time;
