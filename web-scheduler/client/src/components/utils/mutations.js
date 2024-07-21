import { gql } from '@apollo/client';

const MAKE_APPOINTMENTS = gql`
    mutation makeAppointments($a: String!, $q: Int!, $d: String) {
        addStock(name: $a, quantity: $q, description: $d) {
            _id
            name
            quantity
            description
        }
    }
`;

export { MAKE_APPOINTMENTS }