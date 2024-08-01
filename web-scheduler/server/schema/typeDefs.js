const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type StockItem {
        id: ID!
        name: String!
        quantity: Int!
        description: String
    }

    type Query {
        stockInventory: [StockItem!]!
        stock(id: ID!): StockItem!
    }

    type Mutation {
        addStock(id: ID!, name: String!, quantity: Int!, description: String): StockItem
        removeStock(id: ID!): StockItem
        updateStock(id: ID!, quantity: Int!): StockItem
    }

`;

module.exports = typeDefs