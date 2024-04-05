const connectdb = require('./connect.js')
const app = require('./app.js')

connectdb()

app.listen(8000,()=>{
    console.log(`server started at ${process.env.NODE_ENV} mode`  );
})