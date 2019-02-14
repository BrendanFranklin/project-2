// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  publicOpenApts: "http://localhost:8080/apt/emptyApt",
  publicSubmitApp: "TDOO",

  checkResident: "http://localhost:8080/users/getresident",
  checkManager: "http://localhost:8080/users/getmanager",
  checkmaintenance: "http://localhost:8080/users/getmaintenance",


  residentAuth: "http://localhost:8080/login",
  employeeAuth: "http://localhost:8080/login",
 
  managerGetTickets: "http://localhost:8080/ticket/allTicket",
  managerResolveTicket: "http://localhost:8080/ticket/ticketRes",

  managerGetApt: "http://localhost:8080/apt/allApt",


  residentGetTickets: "http://localhost:8080/ticket/ticketId",
  residentGetDetails: "TOOD",
  residentPayRent: "TODO",

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
