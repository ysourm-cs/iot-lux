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
    constructor(id : number, description : string) {

    }

}

export class Role {
    id : number;
    name : string;
}