import React from 'react';
import MAKE_APPOINTMENT from '../utils/mutations';


const AppointmentList = ({ AppointmentList }) => {
    if(!AppointmentList.length){
        return <h3>No Appointments to make</h3>
    }
    return (
        <form onSubmit={MAKE_APPOINTMENT}>
            {AppointmentList.map((appointment) => {
                appointment.isAvailable ? 
                (<div></div>)
                :
                (
                <div>
                    <input type='radio' id={appointment.appointmentType} name="appoint" value={appointment.appointmentType}></input>
                    <label for={appointment.appointmentType}>{appointment.appointmentType}</label>
                </div>
                )
            })}
        </form>
    )
}

export default AppointmentList;