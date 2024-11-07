import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

mongoose.connect(process.env.URI as string, { dbName: process.env.DB, })
    .then(() => {
        console.log('db conectada')
    })
    .catch((error) => {
        console.log(`ha ocurrido un error :b ${error}`)
    });