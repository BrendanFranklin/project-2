(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["resident-resident-module"],{

/***/ "./src/app/resident/apartmentdetailspage/apartmentdetailspage.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/resident/apartmentdetailspage/apartmentdetailspage.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc2lkZW50L2FwYXJ0bWVudGRldGFpbHNwYWdlL2FwYXJ0bWVudGRldGFpbHNwYWdlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/resident/apartmentdetailspage/apartmentdetailspage.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/resident/apartmentdetailspage/apartmentdetailspage.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-logoutbar></app-logoutbar>"

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
/* harmony import */ var _components_ticketlist_ticketlist_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/ticketlist/ticketlist.component */ "./src/app/components/ticketlist/ticketlist.component.ts");








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
                _components_ticketlist_ticketlist_component__WEBPACK_IMPORTED_MODULE_7__["TicketlistComponent"]
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

module.exports = "<app-logoutbar></app-logoutbar>\r\n<app-ticketlist [manager]=\"manager\"></app-ticketlist>"

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


var TicketpageComponent = /** @class */ (function () {
    function TicketpageComponent() {
        this.manager = false;
    }
    TicketpageComponent.prototype.ngOnInit = function () {
    };
    TicketpageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ticketpage',
            template: __webpack_require__(/*! ./ticketpage.component.html */ "./src/app/resident/ticketpage/ticketpage.component.html"),
            styles: [__webpack_require__(/*! ./ticketpage.component.css */ "./src/app/resident/ticketpage/ticketpage.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TicketpageComponent);
    return TicketpageComponent;
}());



/***/ })

}]);
//# sourceMappingURL=resident-resident-module.js.map