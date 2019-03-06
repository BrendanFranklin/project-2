export class Ticket{
    constructor(public id: number,
         public submitted: string ,
        public authorFirstName: string,
        public authorLastName: string,
        public description: string,
        public resolved: boolean,
          public resolver: number,
          public notes: string,
          public apt_num: number){}
}
