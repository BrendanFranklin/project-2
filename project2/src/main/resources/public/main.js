(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./home/home.module": [
		"./src/app/home/home.module.ts",
		"common",
		"home-home-module"
	],
	"./maintenance/maintenance.module": [
		"./src/app/maintenance/maintenance.module.ts",
		"default~maintenance-maintenance-module~manager-manager-module~resident-resident-module",
		"common",
		"maintenance-maintenance-module"
	],
	"./manager/manager.module": [
		"./src/app/manager/manager.module.ts",
		"default~maintenance-maintenance-module~manager-manager-module~resident-resident-module",
		"common",
		"manager-manager-module"
	],
	"./resident/resident.module": [
		"./src/app/resident/resident.module.ts",
		"default~maintenance-maintenance-module~manager-manager-module~resident-resident-module",
		"common",
		"resident-resident-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_ticket_details_ticket_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/ticket-details/ticket-details.component */ "./src/app/components/ticket-details/ticket-details.component.ts");




var routes = [
    {
        path: '',
        loadChildren: './home/home.module#HomeModule'
    },
    {
        path: 'maintenance',
        loadChildren: './maintenance/maintenance.module#MaintenanceModule'
    },
    {
        path: 'resident',
        loadChildren: './resident/resident.module#ResidentModule'
    },
    {
        path: 'manager',
        loadChildren: './manager/manager.module#ManagerModule'
    },
    {
        path: 'ticketdeets',
        component: _components_ticket_details_ticket_details_component__WEBPACK_IMPORTED_MODULE_3__["TicketDetailsComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'project2NG';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_ticket_details_ticket_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/ticket-details/ticket-details.component */ "./src/app/components/ticket-details/ticket-details.component.ts");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _components_ticket_details_ticket_details_component__WEBPACK_IMPORTED_MODULE_8__["TicketDetailsComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/ticket-details/ticket-details.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/ticket-details/ticket-details.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tickBan{\r\n\r\n    text-align: center;\r\n\r\n}\r\n\r\n\r\n\r\n.noteField{\r\n\r\n    text-align: center;\r\n\r\n}\r\n\r\n\r\n\r\n.buttBox{\r\n\r\n    padding-top: 50px;\r\n\r\n}\r\n\r\n\r\n\r\n.resolvebutt{\r\n\r\n    text-align: right;\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90aWNrZXQtZGV0YWlscy90aWNrZXQtZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLGtCQUFrQjs7QUFFdEI7Ozs7QUFJQTs7SUFFSSxrQkFBa0I7O0FBRXRCOzs7O0FBRUE7O0lBRUksaUJBQWlCOztBQUVyQjs7OztBQUVBOztJQUVJLGlCQUFpQjs7QUFFckIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3RpY2tldC1kZXRhaWxzL3RpY2tldC1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGlja0JhbntcclxuXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG59XHJcblxyXG5cclxuXHJcbi5ub3RlRmllbGR7XHJcblxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxufVxyXG5cclxuLmJ1dHRCb3h7XHJcblxyXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XHJcblxyXG59XHJcblxyXG4ucmVzb2x2ZWJ1dHR7XHJcblxyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcblxyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/ticket-details/ticket-details.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/ticket-details/ticket-details.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"tickBan\" >Ticket Details</h1>\r\n\r\n\r\n\r\n<div class=\"card\">\r\n\r\n  <table>\r\n\r\n\r\n          <tr>\r\n\r\n          <div>\r\n\r\n              Apartment: {{ticket.apt_num}}\r\n\r\n          </div>\r\n\r\n          <div>\r\n\r\n          Author: {{ticket.authorFirstName}} {{ticket.authorLastName}}\r\n\r\n          </div>\r\n\r\n\r\n\r\n      </tr>\r\n\r\n      <tr>\r\n\r\n          <div>\r\n\r\n          Description: {{ticket.description}}\r\n\r\n          </div>\r\n\r\n          <div>\r\n\r\n              Resolved: {{ticket.resolved}}\r\n\r\n          </div>\r\n          <div>\r\n\r\n            Notes: {{ticket.notes}}\r\n\r\n        </div>\r\n\r\n      </tr>\r\n\r\n\r\n  </table>\r\n\r\n<div *ngIf=\"manager\">\r\n        <form class=\"submission\" #submission=\"ngForm\" novalidate (ngSubmit)=\"submit(false)\">\r\n      <div class=\"noteField\" >\r\n\r\n          <button class=\"btn btn-primary\" type=\"submit\">Add Notes</button>\r\n\r\n          <input type=\"text\" ([ngModel])=\"ticket.notes\" name=\"notes\" >\r\n\r\n      </div>\r\n      </form>\r\n    <div class=\"resolvebutt\" *ngIf=\"!ticket.resolved\">\r\n\r\n        <button class=\"btn btn-primary\" (click)=\"submit(true)\">Resolved</button>\r\n\r\n    </div>\r\n</div>\r\n  </div>"

/***/ }),

/***/ "./src/app/components/ticket-details/ticket-details.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/ticket-details/ticket-details.component.ts ***!
  \***********************************************************************/
/*! exports provided: TicketDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketDetailsComponent", function() { return TicketDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_tickethandler_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/tickethandler.service */ "./src/app/services/tickethandler.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




var TicketDetailsComponent = /** @class */ (function () {
    function TicketDetailsComponent(ticketService) {
        this.ticketService = ticketService;
    }
    TicketDetailsComponent.prototype.ngOnInit = function () {
        this.ticket = this.ticketService.detailTicket;
        this.manager = true;
        if (parseInt(localStorage.getItem('userRole')) == 1) {
            this.manager = false;
        }
    };
    TicketDetailsComponent.prototype.submit = function (resolved) {
        if (resolved) {
            this.ticket.resolved = true;
            this.ticket.resolver = parseInt(localStorage.getItem('userId'));
        }
        if (!this.ticket.resolved) {
            this.ticket.resolver = 1;
        }
        this.ticketService.resolveTicket(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].managerUpdateTicket, this.ticket);
    };
    TicketDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ticket-details',
            template: __webpack_require__(/*! ./ticket-details.component.html */ "./src/app/components/ticket-details/ticket-details.component.html"),
            styles: [__webpack_require__(/*! ./ticket-details.component.css */ "./src/app/components/ticket-details/ticket-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_tickethandler_service__WEBPACK_IMPORTED_MODULE_2__["TickethandlerService"]])
    ], TicketDetailsComponent);
    return TicketDetailsComponent;
}());



/***/ }),

/***/ "./src/app/models/ticket.ts":
/*!**********************************!*\
  !*** ./src/app/models/ticket.ts ***!
  \**********************************/
/*! exports provided: Ticket */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ticket", function() { return Ticket; });
var Ticket = /** @class */ (function () {
    function Ticket(id, submitted, authorFirstName, authorLastName, description, resolved, resolver, notes, apt_num) {
        this.id = id;
        this.submitted = submitted;
        this.authorFirstName = authorFirstName;
        this.authorLastName = authorLastName;
        this.description = description;
        this.resolved = resolved;
        this.resolver = resolver;
        this.notes = notes;
        this.apt_num = apt_num;
    }
    return Ticket;
}());



/***/ }),

/***/ "./src/app/services/tickethandler.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/tickethandler.service.ts ***!
  \***************************************************/
/*! exports provided: TickethandlerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TickethandlerService", function() { return TickethandlerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _models_ticket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/ticket */ "./src/app/models/ticket.ts");




var TickethandlerService = /** @class */ (function () {
    function TickethandlerService(http) {
        this.http = http;
    }
    TickethandlerService.prototype.getTickets = function (url, success, fail) {
        var _this = this;
        this.http.get(url, { headers: { 'Authorization': localStorage.getItem('userToken') } })
            .toPromise().then(function (resp) {
            var tickets = [];
            resp.forEach(function (ticket) { return tickets.push(_this.ticketParse(ticket)); });
            success(tickets);
        }, function (err) { return fail(err); });
    };
    TickethandlerService.prototype.getResidentTickets = function (url, success, fail) {
        var _this = this;
        this.http.post(url, localStorage.getItem('userId'), { headers: { 'Authorization': localStorage.getItem('userToken') } })
            .toPromise().then(function (resp) {
            var tickets = [];
            resp.forEach(function (ticket) { return tickets.push(_this.ticketParse(ticket)); });
            success(tickets);
        }, function (err) { return fail(err); });
    };
    TickethandlerService.prototype.resolveTicket = function (url, ticket) {
        this.http.post(url, JSON.stringify(ticket), { headers: { 'Authorization': localStorage.getItem('userToken'),
                'content-type': 'application/json' } })
            .subscribe();
    };
    // getTicketDetail(url: string, ticketId: number, success, fail){
    //   this.http.post<any>(url,JSON.stringify(ticketId))
    // }
    TickethandlerService.prototype.ticketParse = function (ticket) {
        var parsedTicket = new _models_ticket__WEBPACK_IMPORTED_MODULE_3__["Ticket"](ticket[0], ticket[1], ticket[2], ticket[3], ticket[4], ticket[5], ticket[6], ticket[7], ticket[8]);
        return parsedTicket;
    };
    TickethandlerService.prototype.makeTicket = function (url, newTicket, success) {
        this.http.post(url, JSON.stringify(newTicket), { headers: { 'Authorization': localStorage.getItem('userToken'),
                'content-type': 'application/json' } }).toPromise().then(success());
    };
    TickethandlerService.prototype.getResTickets = function (url, success, fail) {
        var _this = this;
        this.http.post(url, JSON.stringify({ author: parseInt(localStorage.getItem('userId')) }), { headers: { 'Authorization': localStorage.getItem('userToken'),
                'content-type': 'application/json' } })
            .toPromise().then(function (resp) {
            var tickets = [];
            resp.forEach(function (ticket) { return tickets.push(_this.ticketParse(ticket)); });
            success(tickets);
        }, function (err) { return fail(err); });
    };
    TickethandlerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TickethandlerService);
    return TickethandlerService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    everybodyMakeTicket: "http://localhost:8080/ticket/openTicket",
    publicOpenApts: "http://localhost:8080/apt/emptyApt",
    publicSubmitApp: "http://localhost:8080/application/openApp",
    loginGetRoleId: "http://localhost:8080/users/roleid",
    loginGetUserId: "http://localhost:8080/users/userid",
    residentAuth: "http://localhost:8080/login",
    employeeAuth: "http://localhost:8080/login",
    managerGetTickets: "http://localhost:8080/ticket/allTicket",
    managerUpdateTicket: "http://localhost:8080/ticket/updateTicket",
    managerGetRent: "http://localhost:8080/payment/allPayments",
    managerUpdateRent: "http://localhost:8080/payment/makePayment",
    managerGetApt: "http://localhost:8080/apt/allApt",
    managerGetApps: "http://localhost:8080/application/viewAll",
    managerGetUsers: "http://localhost:8080/users/findall",
    managerMakeUser: "http://localhost:8080/users/sign-up",
    //
    residentGetTickets: "http://localhost:8080/ticket/ticketRes",
    residentGetApt: "http://localhost:8080/apt/aptByUserId",
    //send user ID: author
    residentGetRentDetails: "http://localhost:8080/payment/paymentAuth",
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Matthew\Desktop\Project-2\project-2\project2NG\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map