export class User {

    id:number;
    name:string;
    surname:string;
    email : string;
    password : string;
    role : Role;
    
}

export class Role {
    id : number;
    description : string;
}