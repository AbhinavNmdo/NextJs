const User = require('../../../models/User')
const dbconnect = require('../../../middleware/dbconnect')

dbconnect();

export default async (req, res)=>{
    if(req.method === 'GET'){
        try {
            const user = await User.find();
            res.status(200).send(user);
        } catch (error) {
            res.status(400).send({test: "failed"})
        }
    }
}