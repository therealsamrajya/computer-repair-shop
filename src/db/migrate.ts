import { db } from "./index";
import {migrate} from "drizzle-orm/neon-http/migrator"

const main = async ()=>{
    //migration is done to change the db if any changes are need later on
    try{
        await migrate(db,{
            migrationsFolder:'src/db/migrations'
        })
        console.log("Migration Complete!!");
        
    }
    catch(error){
        console.error("An error occcured :",error);
        process.exit(1)
    }
}


main()