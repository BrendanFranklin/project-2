(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["resident-resident-module"],{

/***/ "./src/app/resident/apartmentdetailspage/apartmentdetailspage.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/resident/apartmentdetailspage/apartmentdetailspage.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".resBan{\r\n    text-align: center;\r\n}\r\n.mainButt{\r\n text-align: center;\r\n    padding-top: 100px;\r\n}\r\n.aptDeets{\r\n    padding-top: 50px;\r\n    margin-left: 500px;\r\n    display: inline-block;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzaWRlbnQvYXBhcnRtZW50ZGV0YWlsc3BhZ2UvYXBhcnRtZW50ZGV0YWlsc3BhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0NBQ0Msa0JBQWtCO0lBQ2Ysa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL3Jlc2lkZW50L2FwYXJ0bWVudGRldGFpbHNwYWdlL2FwYXJ0bWVudGRldGFpbHNwYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVzQmFue1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5tYWluQnV0dHtcclxuIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiAxMDBweDtcclxufVxyXG5cclxuLmFwdERlZXRze1xyXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNTAwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/resident/apartmentdetailspage/apartmentdetailspage.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/resident/apartmentdetailspage/apartmentdetailspage.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-logoutbar></app-logoutbar>\r\n<h1 class=\"resBan\"> Apartment Details </h1>\r\n\r\n<div class=\"aptDeets\">\r\n   <div>Apt Number: {{apartment.apt_num}}</div>\r\n   <div>Style:{{apartment.apt_style}}</div>\r\n   <div> Rent: {{apartment.rent}}</div>\r\n   <div>Rent Status: {{payment.paid}}</div>\r\n</div>\r\n\r\n<div class=\"mainButt\">\r\n<button [routerLink]=\"'/resident/maintenance'\">Track/Submit Maintenance\r\n</button>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/resident/apartmentdetailspage/apartmentdetailspage.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/resident/apartmentdetailspage/apartmentdetailspage.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ApartmentdetailspageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApartmentdetailspageComponent", function() { return ApartmentdetailspageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ApartmentdetailspageComponent = /** @class */ (function () {
    function ApartmentdetailspageComponent() {
    }
    ApartmentdetailspageComponent.prototype.ngOnInit = function () {
    };
    ApartmentdetailspageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-apartmentdetailspage',
            template: __webpack_require__(/*! ./apartmentdetailspage.component.html */ "./src/app/resident/apartmentdetailspage/apartmentdetailspage.component.html"),
            styles: [__webpack_require__(/*! ./apartmentdetailspage.component.css */ "./src/app/resident/apartmentdetailspage/apartmentdetailspage.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ApartmentdetailspageComponent);
    return ApartmentdetailspageComponent;
}());



/***/ }),

/***/ "./src/app/resident/resident-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/resident/resident-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ResidentRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResidentRoutingModule", function() { return ResidentRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _apartmentdetailspage_apartmentdetailspage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./apartmentdetailspage/apartmentdetailspage.component */ "./src/app/resident/apartmentdetailspage/apartmentdetailspage.component.ts");
/* harmony import */ var _ticketpage_ticketpage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ticketpage/ticketpage.component */ "./src/app/resident/ticketpage/ticketpage.component.ts");





var routes = [
    {
        path: '',
        component: _apartmentdetailspage_apartmentdetailspage_component__WEBPACK_IMPORTED_MODULE_3__["ApartmentdetailspageComponent"]
    },
    {
        path: 'maintenance',
        component: _ticketpage_ticketpage_component__WEBPACK_IMPORTED_MODULE_4__["TicketpageComponent"]
    }
];
var ResidentRoutingModule = /** @class */ (function () {
    function ResidentRoutingModule() {
    }
    ResidentRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ResidentRoutingModule);
    return ResidentRoutingModule;
}());



/***/ }),

/***/ "./src/app/resident/resident.module.ts":
/*!*********************************************!*\
  !*** ./src/app/resident/resident.module.ts ***!
  \*********************************************/
/*! exports provided: ResidentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResidentModule", function() { return ResidentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _resident_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resident-routing.module */ "./src/app/resident/resident-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _apartmentdetailspage_apartmentdetailspage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./apartmentdetailspage/apartmentdetailspage.component */ "./src/app/resident/apartmentdetailspage/apartmentdetailspage.component.ts");
/* harmony import */ var _ticketpage_ticketpage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ticketpage/ticketpage.component */ "./src/app/resident/ticketpage/ticketpage.component.ts");
/* harmony import */ var _global_global_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../global/global.module */ "./src/app/global/global.module.ts");








var ResidentModule = /** @class */ (function () {
    function ResidentModule() {
    }
    ResidentModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_apartmentdetailspage_apartmentdetailspage_component__WEBPACK_IMPORTED_MODULE_5__["ApartmentdetailspageComponent"], _ticketpage_ticketpage_component__WEBPACK_IMPORTED_MODULE_6__["TicketpageComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _resident_routing_module__WEBPACK_IMPORTED_MODULE_3__["ResidentRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _global_global_module__WEBPACK_IMPORTED_MODULE_7__["GlobalModule"]
            ]
        })
    ], ResidentModule);
    return ResidentModule;
}());



/***/ }),

/***/ "./src/app/resident/ticketpage/ticketpage.component.css":
/*!**************************************************************!*\
  !*** ./src/app/resident/ticketpage/ticketpage.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc2lkZW50L3RpY2tldHBhZ2UvdGlja2V0cGFnZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/resident/ticketpage/ticketpage.component.html":
/*!***************************************************************!*\
  !*** ./src/app/resident/ticketpage/ticketpage.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-logoutbar></app-logoutbar>\r\n<h1 style=\"text-align: center\">Resident Maintenance Page</h1>\r\n<app-maintform></app-maintform>\r\n<app-ticketlist [manager]=\"manager\" [tickets]=\"tickets\"></app-ticketlist>\r\n\r\n"

/***/ }),

/***/ "./src/app/resident/ticketpage/ticketpage.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/resident/ticketpage/ticketpage.component.ts ***!
  \*************************************************************/
/*! exports provided: TicketpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketpageComponent", function() { return TicketpageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_tickethandler_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/tickethandler.service */ "./src/app/services/tickethandler.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




var TicketpageComponent = /** @class */ (function () {
    function TicketpageComponent(ticketHandler) {
        this.ticketHandler = ticketHandler;
        this.manager = false;
    }
    TicketpageComponent.prototype.ngOnInit = function () {
    };
    TicketpageComponent.prototype.getTickets = function () {
        var _this = this;
        this.ticketHandler.getTickets(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].residentGetTickets, function (tickets) { _this.tickets = tickets; }, function (err) { return console.log(err); });
    };
    TicketpageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ticketpage',
            template: __webpack_require__(/*! ./ticketpage.component.html */ "./src/app/resident/ticketpage/ticketpage.component.html"),
            styles: [__webpack_require__(/*! ./ticketpage.component.css */ "./src/app/resident/ticketpage/ticketpage.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_tickethandler_service__WEBPACK_IMPORTED_MODULE_2__["TickethandlerService"]])
    ], TicketpageComponent);
    return TicketpageComponent;
}());



/***/ })

}]);
//# sourceMappingURL=resident-resident-module.js.map