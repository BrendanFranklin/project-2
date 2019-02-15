// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  publicOpenApts: "http://localhost:8080/apt/emptyApt",
  publicSubmitApp: "http://localhost:8080/application/openApp",

  
  loginGetRoleId: "http://localhost:8080/users/roleid",
  loginGetUserId: "http://localhost:8080/users/userid",


  residentAuth: "http://localhost:8080/login",
  employeeAuth: "http://localhost:8080/login",
 
  managerGetTickets: "http://localhost:8080/ticket/allTicket",
  managerUpdateTicket: "http://localhost:8080/ticket/updateTicket",

  managerGetRent: "http://localhost:8080/payment/allPayments",
  managerUpdateRent: "TODO",

  managerGetApt: "http://localhost:8080/apt/allApt",
  managerGetApps: "http://localhost:8080/application/viewAll",

  managerGetUsers: "http://localhost:8080/users/findall",
  managerMakeUser: "http://localhost:8080/users/sign-up",

  //
  residentGetTickets: "http://localhost:8080/ticket/ticketRes",
  //send user ID: author
  residentGetRentDetails: "http://localhost8080/payment/paymentAuth",

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
