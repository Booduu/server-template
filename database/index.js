const mongoose = require('mongoose');
// mongoose.set('useFindAndModify', false);



mongoose.connect('mongodb://localhost:27017/dyma', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
        console.log('CONNEXION TO DATABASE : OK !!');       
}).catch(err => {
    console.log('error : ', err)
});

