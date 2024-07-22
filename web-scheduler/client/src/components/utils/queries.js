import { gql } from '@apollo/client';

const QUERY_APPOINTMENTS = gql`
    query allAppointments {
        Appointments {
            _id
            name
        }
    }
`;

export { QUERY_APPOINTMENTS }