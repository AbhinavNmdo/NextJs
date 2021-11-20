import User from "../../../models/User";
import dbconnect from "../../../middleware/dbconnect";

dbconnect();

export default async (req, res)=>{
    const {query: {id}, method} = req;
    if(method === 'GET'){
        try {
            const user = await User.findById(id);
            console.log(id);
            return res.status(200).send(user);
        } catch (error) {
            res.status(500).send({error});
        }
    }
}