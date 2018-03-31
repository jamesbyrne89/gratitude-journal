import React from 'react';
import '../styles/styles.css';

const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
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

const Time = () => {



    return (

        <time className="time">{days[new Date().getDay() - 1]} {new Date().getDate()} {months[new Date().getMonth()]}</time>

    );
}

export default Time;
