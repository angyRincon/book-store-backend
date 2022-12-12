//@packages
import mongoose from "mongoose";



export const connectDataBase = async () => {
    try {
        mongoose.set('strictQuery', false);
        const db = await mongoose.connect('mongodb://localhost/book-store', {
            useNewUrlParser: true,
        })
        console.log('DB connected at', db.connection.name)
    } catch (e) {
        console.log('Error', e.message)
    }
}
