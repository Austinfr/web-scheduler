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
        addStock: async (parent, { name })  => {
            return Stock.create({name});
        },
        removeStock: async (parent, { stockId } ) => {
            return Stock.findOneAndDelete({ _id: stockId });
        }
    }
}

module.exports = resolvers;