import { GraphQLScalarType, Kind } from 'graphql';
const { Stock, User, Appointment } = require('../models');

//Date scalar from apolloGraphQl 
//https://www.apollographql.com/docs/apollo-server/schema/custom-scalars
//used for storing the date when the appointment is made
const dateScalar = new GraphQLScalarType({
    name: 'Date',
    description: 'Date custom scalar type',
    serialize(value) {
      if (value instanceof Date) {
        return value.getTime(); // Convert outgoing Date to integer for JSON
      }
      throw Error('GraphQL Date Scalar serializer expected a `Date` object');
    },
    parseValue(value) {
      if (typeof value === 'number') {
        return new Date(value); // Convert incoming integer to Date
      }
      throw new Error('GraphQL Date Scalar parser expected a `number`');
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.INT) {
        // Convert hard-coded AST string to integer and then to Date
        return new Date(parseInt(ast.value, 10));
      }
      // Invalid hard-coded value (not an integer)
      return null;
    },
});

const resolvers = {
    Query: {
        stockInventory: async () => {
            return Stock.find();
        },

        stock: async (parent, { stockName }) => {
            return Stock.findOne({ _id: stockName });
        },
    },

    Mutation: {
        addStock: async (parent, { id, name, quantity, description })  => {
            return Stock.create({ id, name, quantity, description});
        },
        addUser: async (parent, { name, password }) => {
            return User.create({ name, password });
        },
        addAppointment: async (parent, { title, date }) => {
            return Appointment.create({ title, date });
        },
        removeStock: async (parent, { stockId } ) => {
            return Stock.findOneAndDelete({ _id: stockId });
        },
        updateStock: async (parent, { stockId, newQuantity }) => {
            return Stock.findOneAndUpdate({
                _id: stockId
            },
            {
                quantity: newQuantity
            },
            {
                new: true
            });
        }
    },

    Date: dateScalar,

}

module.exports = resolvers;