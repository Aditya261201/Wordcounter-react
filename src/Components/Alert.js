import React from 'react'

export default function Alert(props) {
    return (
        // here we set all this in a div and set its height i.e if alert comes and dissappears then the content doesnt shift . so we give a specified space for the alert element
        <div style={{height: '50px'}}>
            {/* here if props.alert is null then the statement further && is not checked ...and if props.alert isn't null then the further statement is called.. */}
        {props.alert && <div className="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>{props.alert.type}</strong>:{props.alert.msg}
        </div>}
        </div>
    )
}
