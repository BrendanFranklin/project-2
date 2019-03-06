(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["maintenance-maintenance-module"],{

/***/ "./src/app/maintenance/maintenance-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/maintenance/maintenance-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: MaintenanceRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaintenanceRoutingModule", function() { return MaintenanceRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ticket_page_ticket_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ticket-page/ticket-page.component */ "./src/app/maintenance/ticket-page/ticket-page.component.ts");




var routes = [{
        path: '',
        component: _ticket_page_ticket_page_component__WEBPACK_IMPORTED_MODULE_3__["TicketPageComponent"]
    }];
var MaintenanceRoutingModule = /** @class */ (function () {
    function MaintenanceRoutingModule() {
    }
    MaintenanceRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], MaintenanceRoutingModule);
    return MaintenanceRoutingModule;
}());



/***/ }),

/***/ "./src/app/maintenance/maintenance.module.ts":
/*!***************************************************!*\
  !*** ./src/app/maintenance/maintenance.module.ts ***!
  \***************************************************/
/*! exports provided: MaintenanceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaintenanceModule", function() { return MaintenanceModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _maintenance_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./maintenance-routing.module */ "./src/app/maintenance/maintenance-routing.module.ts");
/* harmony import */ var _ticket_page_ticket_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ticket-page/ticket-page.component */ "./src/app/maintenance/ticket-page/ticket-page.component.ts");
/* harmony import */ var _global_global_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../global/global.module */ "./src/app/global/global.module.ts");






var MaintenanceModule = /** @class */ (function () {
    function MaintenanceModule() {
    }
    MaintenanceModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_ticket_page_ticket_page_component__WEBPACK_IMPORTED_MODULE_4__["TicketPageComponent"]],
            imports: [
                _global_global_module__WEBPACK_IMPORTED_MODULE_5__["GlobalModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _maintenance_routing_module__WEBPACK_IMPORTED_MODULE_3__["MaintenanceRoutingModule"]
            ]
        })
    ], MaintenanceModule);
    return MaintenanceModule;
}());



/***/ }),

/***/ "./src/app/maintenance/ticket-page/ticket-page.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/maintenance/ticket-page/ticket-page.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW50ZW5hbmNlL3RpY2tldC1wYWdlL3RpY2tldC1wYWdlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/maintenance/ticket-page/ticket-page.component.html":
/*!********************************************************************!*\
  !*** ./src/app/maintenance/ticket-page/ticket-page.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-logoutbar></app-logoutbar>\r\n<app-ticketlist [manager]=\"manager\" [tickets]=\"tickets\"></app-ticketlist>\r\n"

/***/ }),

/***/ "./src/app/maintenance/ticket-page/ticket-page.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/maintenance/ticket-page/ticket-page.component.ts ***!
  \******************************************************************/
/*! exports provided: TicketPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketPageComponent", function() { return TicketPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_tickethandler_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/tickethandler.service */ "./src/app/services/tickethandler.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




var TicketPageComponent = /** @class */ (function () {
    function TicketPageComponent(ticketHandler) {
        this.ticketHandler = ticketHandler;
        this.manager = true;
    }
    TicketPageComponent.prototype.ngOnInit = function () {
        this.getTickets();
    };
    TicketPageComponent.prototype.resolve = function (ticket) {
    };
    TicketPageComponent.prototype.getTickets = function () {
        var _this = this;
        this.ticketHandler.getTickets(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].managerGetTickets, function (tickets) { _this.tickets = tickets; }, function (err) { return console.log(err); });
    };
    TicketPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ticket-page',
            template: __webpack_require__(/*! ./ticket-page.component.html */ "./src/app/maintenance/ticket-page/ticket-page.component.html"),
            styles: [__webpack_require__(/*! ./ticket-page.component.css */ "./src/app/maintenance/ticket-page/ticket-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_tickethandler_service__WEBPACK_IMPORTED_MODULE_2__["TickethandlerService"]])
    ], TicketPageComponent);
    return TicketPageComponent;
}());



/***/ })

}]);
//# sourceMappingURL=maintenance-maintenance-module.js.map