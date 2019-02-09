export class Ticket{
    constructor(public submitted: Date , public resolved: Date,
         public description: string, public author: string, public resolver: string  ){}
}