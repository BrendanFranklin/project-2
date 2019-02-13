export class Ticket{
    constructor(public id: number, public submitted: Date , public resolved: Date,
         public description: string, public author, public resolver ){}
}