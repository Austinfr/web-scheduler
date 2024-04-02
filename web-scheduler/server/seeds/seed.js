const db = require('../config/connection');
const {  } = require('../models');
//seeds const seeds = require('./');

db.once('open', async () => {
    try{

        //model creation
        await placeHolder.deleteMany({});
        await placeHolder.create(seeds);

        console.log('all done');
        process.exit(0);

    } catch(err){
        throw err;
    }
})