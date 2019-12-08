const mongoose = require('mongoose');


mongoose.connect(process.env.mongouri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('mongodb connected..'))
    .catch(err => console.log(err));
