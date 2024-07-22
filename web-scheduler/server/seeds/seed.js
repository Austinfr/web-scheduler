const db = require('../config/connection');
const { Stock } = require('../models');
const seeds = require('./seeds.json');

db.once('open', async () => {
    try{

        //model creation
        await Stock.deleteMany({});
        await Stock.create(seeds);

        console.log('all done');
        process.exit(0);

    } catch(err){
        throw err;
    }
})