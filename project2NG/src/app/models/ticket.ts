export class Ticket{
    constructor(public id: number, public submitted: Date ,
        public authorFirstName: string,
        public authorLastName: string,
         public resolved: Date, public resolver_id: number,
         public description: string, public apt_num: number){}
}