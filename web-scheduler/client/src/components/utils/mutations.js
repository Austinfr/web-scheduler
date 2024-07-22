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

const ADD_USER = gql`
    mutation makeUser($un: String!, $pd: String!){
        addUser(username: $un, password: $pd){
            _id
            username
            password
        }
    }
`;

export { MAKE_APPOINTMENTS, ADD_USER }