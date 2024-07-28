import { gql } from '@apollo/client';

const QUERY_APPOINTMENTS = gql`
    query allAppointments {
        Appointments {
            appointmentType
            appointmentDate
            isAvailable
        }
    }
`;

export { QUERY_APPOINTMENTS }