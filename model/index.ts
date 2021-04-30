import mongoose from 'mongoose'
import dns from 'dns'
import dotenv from 'dotenv'
import path from 'path'
import isWsl from 'is-wsl'
import autoIncrement from 'mongoose-auto-increment'
import Memo from './schema/memo'

dotenv.config({ path: path.join(process.cwd(), '.env') })

if (isWsl) {
    mongoose.connect('mongodb://' + dns.getServers()[0] + ':27017/' + process.env.MONGO_DBNAME, {
        auth: {
            user: process.env.MONGO_USERNAME as string,
            password: process.env.MONGO_PASSWORD as string
        },
        useUnifiedTopology: true,
        useNewUrlParser: true
    }).then(() => console.log('MongoDB Connected'))
        .catch(err => console.log(err));
} else {
    mongoose.connect(process.env.MONGO_URI as string, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    }).then(() => console.log('MongoDB Connected'))
        .catch(err => console.log(err));
}

console.log('Connect Complete')

mongoose.set('useCreateIndex', true)
autoIncrement.initialize(mongoose.connection)

const db = { ...Memo(autoIncrement) }

export default db