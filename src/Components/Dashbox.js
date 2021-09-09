import React from 'react';


const DashBox =(props) => {
    return(
        <div className={`dash-list ${props.data.color}`}>
        <div className="list-logo">{props.data.icon}</div>
        <div className="dash-msg">
            <p>{props.data.title}</p>
            <p className="dash-cost">{props.data.price}<span className="dash-month">{props.data.month}</span></p>
        
        </div>
    </div>
    )
}

export default DashBox;