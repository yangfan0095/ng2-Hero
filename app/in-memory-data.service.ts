import { InMemoryDbService} from 'angular-in-memory-web-api' ;
export class InMemoryDataService implements InMemoryDbService{
    createDb(){
        let heroes = [
   {id:11,name:"Mr.Nice"},
   {id:12,name:"Mr.Nice2"},
   {id:13,name:"Mr.Nice3"},
   {id:14,name:"Mr.Nice4"},
   {id:15,name:"Mr.Nice5"},
   {id:16,name:"Mr.Nic6"},
   {id:17,name:"Mr.Nic7"},
   {id:18,name:"Mr.Nice8"},
   {id:19,name:"Mr.Nice9"},
   {id:20,name:"Mr.Nice33"},
   {id:21,name:"Mr.Niceer"},
   {id:22,name:"Mr.Nicerr"},
   {id:23,name:"Mr.Nicett"},
        ];
        return {heroes} ;
    }
}