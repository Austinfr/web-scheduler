import { gql } from '@apollo/client';

const MAKE_APPOINTMENT = gql`
    mutation makeAppointments($title: String!, $date: Date!) {
        addAppointment(title: $title, date: date) {
            
        }
    }
`;

const ADD_USER = gql`
    mutation makeUser($username: String!, $password: String!){
        addUser(username: $username, password: $password){
            _id
            username
            password
        }
    }
`;

export { MAKE_APPOINTMENT, ADD_USER }