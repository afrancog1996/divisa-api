import app from './index'
const port = process.env.PORT
const mongoose = require('mongoose')
const mongoose_options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

mongoose.connect(process.env.MONGOSE_URL, mongoose_options).then( () => {
    app.listen(port, () => {
        console.log(`Example app listening at port http://localhost:${port}`)
    })
});



