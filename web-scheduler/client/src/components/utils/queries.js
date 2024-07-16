import { gql } from '@apollo/client';

const QUERY_APPOINTMENTS = gql`
    query allAppointments {
        Appointments {
            _id
            name
        }
    }
`;

const MAKE_APPOINTMENTS = gql`
    query makeAppointments {
        
    }
`;

export { QUERY_APPOINTMENTS , MAKE_APPOINTMENTS }