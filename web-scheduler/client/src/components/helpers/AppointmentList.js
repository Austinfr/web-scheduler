import React from 'react';


const AppointmentList = ({ AppointmentList }) => {
    if(!AppointmentList.length){
        return <h3>No Appointments to make</h3>
    }
    return (
        <form>
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