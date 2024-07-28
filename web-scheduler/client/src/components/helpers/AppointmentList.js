import React from 'react';
import MAKE_APPOINTMENT from '../utils/mutations';


const AppointmentList = ({ AppointmentList }) => {
    if(!AppointmentList.length){
        return <h3>No Appointments to make</h3>
    }
    return (
        <form onSubmit={MAKE_APPOINTMENT}>
            {AppointmentList.map((appointment) => (
                <div>
                    <input type='radio' id={appointment.name} name="appoint" value={appointment.name}></input>
                    <label for={appointment.name}>{appointment.name}</label>
                </div>
            ))}
        </form>
    )
}

export default AppointmentList;