export class User {

    id:number;
    name:string;
    surname:string;
    email : string;
    password : string;
    role : Role;
    
    public isAdmin() : boolean {
        return (this.role != null && this.role.name=="ADMIN");
    }
}

export class Role {
    id : number;
    name : string;
}