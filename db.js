const mongoose = require('mongoose') 


const conn = async () => {
    try {
        await mongoose.connect(process.env.DB_CONN)
        console.log("Database is connected")    
    } catch (error) {
        console.log("error",error)
    }

    
}    


module.exports = {
    conn
}