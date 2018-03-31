import React from 'react';
import '../styles/styles.css';


const Log = (props) => {
    console.log(props)

    return (
        <div className="journal-log" >
            {props.entries.map((entry, i) => <article key={i} className="journal-log__entry">Menu item</article>)}
        </div>
    )
}

export default Log;
