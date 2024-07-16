import React from 'react';
import AppointmentList from '../helpers/AppointmentList.js';
import { useQuery } from '@apollo/client';
import { QUERY_APPOINTMENTS } from '../utils/queries';

function MakeAppointment () {
    const { loading, data } = useQuery(QUERY_APPOINTMENTS);
    const appointments = data?.appointments || [];


    return (
        <div>
            <h1>
                <p>MakeAppointment</p>
            </h1>
            {loading ? (
                <div>Loading appointments</div>
            ) : (
            <AppointmentList 
                appointments={appointments}/>
            )}
        </div>
    );
}


export default MakeAppointment