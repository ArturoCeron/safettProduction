module.exports = {
    port: process.env.PORT || process.env.BIND_IP,
    db: process.env.MONGODB || 'mongodb+srv://safettProject:Abfzxz09!@cluster0.6zsec.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    urlParser : {
        useNewUrlParser: true,
        useUnifiedTopology: true//,
        //useFindAndModify: false,
        //useCreateIndex: true
    }
}
