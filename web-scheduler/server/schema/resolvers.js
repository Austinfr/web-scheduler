const { Stock } = require('../models');

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
        addStock: async (parent, { id, name })  => {
            return Stock.create({ id, name})
        }
    }
}

module.exports = resolvers;