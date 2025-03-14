import {Router} from 'express'
import { Create } from './twitter.servies.js';

const router = Router();
const twitter = new Create();
router.post('/',(req,res) =>{
    if(!req.body?.text?.length){
        res.status(400).json({message:'bad request'});
    }
    const twit =  Create(req.body)
    res.status(200).json(twit);
})

export const twitRouter = router;