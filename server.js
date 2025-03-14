import express from 'express'
import { twitRouter  } from './src/twitter/twitter.controller.js';
const app = express();

async function main(){
    app.use(express.json())

    app.use('/api/twitters',twitRouter)
    
    app.use('/api/twitters',(req,res) => {
        res.status(200).json({
            message:'okey'
        })
    })
    app.listen(3000,() => {
        console.log('3000');
    })
}

main()