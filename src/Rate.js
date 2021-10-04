import React from 'react';

function Rate(props) {
        const circles = ["","","","",""]
        return (
                <div className = "rate-circles-container">
                       {circles.map((element ,index) => {
                               return <span
                                        className={
                                                index <= props.value ?
                                                        "rate-circle rate-circle-gold" :
                                                        "rate-circle rate-circle-grey"}
                                        key={index}>
                                       </span>
                       })
                        }
                </div>
        );
}

export default Rate;