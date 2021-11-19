const User = require('../../../models/User')
import dbconnect from '../../../middleware/dbconnect';

dbconnect();

export default async (req, res)=>{
    const {method} = req;
    if(method === 'GET'){
        const users = await User.find();
        res.send(users);
    }
    else if(method === 'POST'){
        const {name, email, password} = req.body
        const users2 = User.create({
            name,
            email,
            password
        })
        res.json(users2);
    }
}