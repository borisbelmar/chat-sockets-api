const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    })
    .then(res => console.log('DB is connected'))
    .catch(err => console.error(err));