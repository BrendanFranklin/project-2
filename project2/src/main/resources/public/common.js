(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/components/ticketlist/ticketlist.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/ticketlist/ticketlist.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGlja2V0bGlzdC90aWNrZXRsaXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/ticketlist/ticketlist.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/ticketlist/ticketlist.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"container\">\r\n  <div class = \"list-container\">\r\n    <table class=\"table table-hover\">\r\n      <thead>\r\n        <tr>\r\n          <th scope=\"col\">Request ID</th>\r\n          <th scope=\"col\">Name</th>\r\n          <th scope=\"col\">Amount</th>\r\n          <th scope=\"col\">Type</th>\r\n          <th scope=\"col\">Submitted</th>\r\n          <th scope=\"col\">Resolved</th>\r\n          <th scope=\"col\">Status</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor = \"let ticket of tickets\"\r\n        (click) = \"detailView(ticket)\">\r\n          <th scope=\"row\">{{reimb.iD}}</th>\r\n          <td>{{reimb.firstName}} {{reimb.lastName}}</td>\r\n          <td>{{reimb.amount}}</td>\r\n          <td>{{reimb.type}}</td>\r\n          <td>{{reimb.submitted.getMonth()+1}}/{{reimb.submitted.getDate()}}/{{reimb.submitted.getFullYear()}}</td>\r\n          <td *ngIf=\"reimb.resolved > reimb.submitted\" >{{reimb.resolved.getMonth()+1}}/{{reimb.resolved.getDate()}}/{{reimb.resolved.getFullYear()}}</td>\r\n          <td *ngIf=\"reimb.resolved < reimb.submitted\">Unresolved</td>\r\n          <td>{{reimb.status}}</td>\r\n        </tr>\r\n    </tbody>\r\n    </table>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/ticketlist/ticketlist.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/ticketlist/ticketlist.component.ts ***!
  \***************************************************************/
/*! exports provided: TicketlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketlistComponent", function() { return TicketlistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _detailsmodal_detailsmodal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../detailsmodal/detailsmodal.component */ "./src/app/components/detailsmodal/detailsmodal.component.ts");




var TicketlistComponent = /** @class */ (function () {
    function TicketlistComponent(modalService) {
        this.modalService = modalService;
        this.resolveTicket = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    TicketlistComponent.prototype.ngOnInit = function () {
    };
    TicketlistComponent.prototype.detailView = function (ticket) {
        var _this = this;
        var modalRef = this.modalService.open(_detailsmodal_detailsmodal_component__WEBPACK_IMPORTED_MODULE_3__["DetailsmodalComponent"]);
        modalRef.componentInstance.ticket = ticket;
        modalRef.componentInstance.employee = this.employee;
        modalRef.componentInstance.resolveTicket.subscribe(function (ticket) {
            _this.resolveTicket.emit(ticket);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], TicketlistComponent.prototype, "tickets", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], TicketlistComponent.prototype, "employee", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], TicketlistComponent.prototype, "resolveTicket", void 0);
    TicketlistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ticketlist',
            template: __webpack_require__(/*! ./ticketlist.component.html */ "./src/app/components/ticketlist/ticketlist.component.html"),
            styles: [__webpack_require__(/*! ./ticketlist.component.css */ "./src/app/components/ticketlist/ticketlist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
    ], TicketlistComponent);
    return TicketlistComponent;
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



var TickethandlerService = /** @class */ (function () {
    function TickethandlerService(http) {
        this.http = http;
    }
    TickethandlerService.prototype.getTickets = function (url, success, fail) {
        this.http.post(url, { headers: { Authorization: localStorage.getItem('userToken') } })
            .toPromise().then(function (resp) { return success(resp); }, function (err) { return fail(err); });
    };
    TickethandlerService.prototype.resolveTicket = function (url, ticket, success, fail) {
        this.http.post(url, { headers: { Authorization: localStorage.getItem('userToken') },
            body: JSON.stringify(ticket) })
            .toPromise().then(function (resp) { return success(resp); }, function (err) { return fail(err); });
    };
    TickethandlerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TickethandlerService);
    return TickethandlerService;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map