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



var routes = [];
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




var MaintenanceModule = /** @class */ (function () {
    function MaintenanceModule() {
    }
    MaintenanceModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _maintenance_routing_module__WEBPACK_IMPORTED_MODULE_3__["MaintenanceRoutingModule"]
            ]
        })
    ], MaintenanceModule);
    return MaintenanceModule;
}());



/***/ })

}]);
//# sourceMappingURL=maintenance-maintenance-module.js.map