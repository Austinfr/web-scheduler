const { Stock, User } = require('../models');

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
    }
}

module.exports = resolvers;