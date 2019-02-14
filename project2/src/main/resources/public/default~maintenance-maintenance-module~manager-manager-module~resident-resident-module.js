(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~maintenance-maintenance-module~manager-manager-module~resident-resident-module"],{

/***/ "./src/app/components/detailsmodal/detailsmodal.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/detailsmodal/detailsmodal.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navButtons{\r\n    text-align: center;\r\n}\r\n.button1{\r\n    background-color: black;\r\n    color: gold;\r\n    border: none;\r\n    margin: 5px;\r\n    border-radius: 12px;\r\n    height: 30px;\r\n    font-family: 'Times New Roman', Times, serif;\r\n    font-size: 13pt;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kZXRhaWxzbW9kYWwvZGV0YWlsc21vZGFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLDRDQUE0QztJQUM1QyxlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9kZXRhaWxzbW9kYWwvZGV0YWlsc21vZGFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2QnV0dG9uc3tcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uYnV0dG9uMXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgY29sb3I6IGdvbGQ7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTNwdDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/detailsmodal/detailsmodal.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/detailsmodal/detailsmodal.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n  <h4 class=\"modal-title\">Ticket: #{{ticket.id}}</h4>\r\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  {{ticket.authorFirstName}}{{ticket.authorLastName}}\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <button type=\"button\" class=\"resolve\" (click)=\"resolve()\" *ngIf=\"employee\"></button>\r\n</div>"

/***/ }),

/***/ "./src/app/components/detailsmodal/detailsmodal.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/detailsmodal/detailsmodal.component.ts ***!
  \*******************************************************************/
/*! exports provided: DetailsmodalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsmodalComponent", function() { return DetailsmodalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var src_app_models_ticket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/ticket */ "./src/app/models/ticket.ts");




var DetailsmodalComponent = /** @class */ (function () {
    function DetailsmodalComponent(activeModal) {
        this.activeModal = activeModal;
        this.resolveTicket = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    DetailsmodalComponent.prototype.ngOnInit = function () {
    };
    DetailsmodalComponent.prototype.resolve = function () {
        this.resolveTicket.emit(this.ticket);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_models_ticket__WEBPACK_IMPORTED_MODULE_3__["Ticket"])
    ], DetailsmodalComponent.prototype, "ticket", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], DetailsmodalComponent.prototype, "manager", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], DetailsmodalComponent.prototype, "resolveTicket", void 0);
    DetailsmodalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-detailsmodal',
            template: __webpack_require__(/*! ./detailsmodal.component.html */ "./src/app/components/detailsmodal/detailsmodal.component.html"),
            styles: [__webpack_require__(/*! ./detailsmodal.component.css */ "./src/app/components/detailsmodal/detailsmodal.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]])
    ], DetailsmodalComponent);
    return DetailsmodalComponent;
}());



/***/ }),

/***/ "./src/app/components/logoutbar/logoutbar.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/logoutbar/logoutbar.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar{\r\n    background-color: #bdbdbd\r\n}\r\n.btn{\r\n    background-color: #44e274;\r\n    color: #f7f7f7\r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dvdXRiYXIvbG9nb3V0YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtBQUNKO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekI7O0FBRUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xvZ291dGJhci9sb2dvdXRiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmRiZGJkXHJcbn1cclxuLmJ0bntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NGUyNzQ7XHJcbiAgICBjb2xvcjogI2Y3ZjdmN1xyXG4gICAgXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/logoutbar/logoutbar.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/logoutbar/logoutbar.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light justify-content-between\">\r\n  <a class=\"navbar-brand\">{{userName}}</a>\r\n  <form class=\"form-inline\">\r\n    <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\" (click)=\"logout()\">Logout</button>\r\n  </form>\r\n</nav>"

/***/ }),

/***/ "./src/app/components/logoutbar/logoutbar.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/logoutbar/logoutbar.component.ts ***!
  \*************************************************************/
/*! exports provided: LogoutbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutbarComponent", function() { return LogoutbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var LogoutbarComponent = /** @class */ (function () {
    function LogoutbarComponent(router) {
        this.router = router;
    }
    LogoutbarComponent.prototype.ngOnInit = function () {
    };
    LogoutbarComponent.prototype.logout = function () {
        localStorage.removeItem("userToken");
        this.router.navigate(['']);
    };
    LogoutbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-logoutbar',
            template: __webpack_require__(/*! ./logoutbar.component.html */ "./src/app/components/logoutbar/logoutbar.component.html"),
            styles: [__webpack_require__(/*! ./logoutbar.component.css */ "./src/app/components/logoutbar/logoutbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LogoutbarComponent);
    return LogoutbarComponent;
}());



/***/ }),

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

module.exports = "<div class = \"container\">\r\n  <div class = \"list-container\">\r\n    <table class=\"table table-hover\">\r\n      <thead>\r\n        <tr>\r\n          <th scope=\"col\">Ticket ID</th>\r\n          <th scope=\"col\">Author</th>\r\n          <th scope=\"col\">Submitted</th>\r\n          <th scope=\"col\">Date Resolved</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor = \"let ticket of tickets\"\r\n        (click) = \"detailView(ticket)\">\r\n          <th scope=\"row\">{{ticket.id}}</th>\r\n          <td>{{ticket.authorFirstName}} {{ticket.authorLastName}}</td>\r\n          <td>{{reimb.submitted.getMonth()+1}}/{{reimb.submitted.getDate()}}/{{reimb.submitted.getFullYear()}}</td>\r\n          <td *ngIf=\"reimb.resolved > reimb.submitted\" >{{reimb.resolved.getMonth()+1}}/{{reimb.resolved.getDate()}}/{{reimb.resolved.getFullYear()}}</td>\r\n          <td *ngIf=\"reimb.resolved < reimb.submitted\">Unresolved</td>\r\n        </tr>\r\n    </tbody>\r\n    </table>\r\n  </div>\r\n</div>\r\n"

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
        modalRef.componentInstance.manager = this.manager;
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
    ], TicketlistComponent.prototype, "manager", void 0);
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

/***/ "./src/app/global/global.module.ts":
/*!*****************************************!*\
  !*** ./src/app/global/global.module.ts ***!
  \*****************************************/
/*! exports provided: GlobalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalModule", function() { return GlobalModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_ticketlist_ticketlist_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ticketlist/ticketlist.component */ "./src/app/components/ticketlist/ticketlist.component.ts");
/* harmony import */ var _components_logoutbar_logoutbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/logoutbar/logoutbar.component */ "./src/app/components/logoutbar/logoutbar.component.ts");
/* harmony import */ var _components_detailsmodal_detailsmodal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/detailsmodal/detailsmodal.component */ "./src/app/components/detailsmodal/detailsmodal.component.ts");






var GlobalModule = /** @class */ (function () {
    function GlobalModule() {
    }
    GlobalModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_components_ticketlist_ticketlist_component__WEBPACK_IMPORTED_MODULE_3__["TicketlistComponent"],
                _components_logoutbar_logoutbar_component__WEBPACK_IMPORTED_MODULE_4__["LogoutbarComponent"],
                _components_detailsmodal_detailsmodal_component__WEBPACK_IMPORTED_MODULE_5__["DetailsmodalComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            exports: [
                _components_ticketlist_ticketlist_component__WEBPACK_IMPORTED_MODULE_3__["TicketlistComponent"],
                _components_logoutbar_logoutbar_component__WEBPACK_IMPORTED_MODULE_4__["LogoutbarComponent"],
                _components_detailsmodal_detailsmodal_component__WEBPACK_IMPORTED_MODULE_5__["DetailsmodalComponent"]
            ]
        })
    ], GlobalModule);
    return GlobalModule;
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
    function Ticket(id, submitted, authorFirstName, authorLastName, resolved, resolver_id, description, apt_num) {
        this.id = id;
        this.submitted = submitted;
        this.authorFirstName = authorFirstName;
        this.authorLastName = authorLastName;
        this.resolved = resolved;
        this.resolver_id = resolver_id;
        this.description = description;
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
        this.http.post(url, { headers: { Authorization: localStorage.getItem('userToken') } })
            .toPromise().then(function (resp) { return success(resp); }, function (err) { return fail(err); });
    };
    TickethandlerService.prototype.resolveTicket = function (url, ticket, success, fail) {
        var _this = this;
        this.http.post(url, { headers: { Authorization: localStorage.getItem('userToken') },
            body: JSON.stringify(ticket) })
            .toPromise().then(function (resp) {
            var tickets;
            resp.foreach(function (ticket) { return tickets.push(_this.ticketParse(ticket)); });
            success(tickets);
        }, function (err) { return fail(err); });
    };
    TickethandlerService.prototype.ticketParse = function (ticket) {
        var parsedTicket = new _models_ticket__WEBPACK_IMPORTED_MODULE_3__["Ticket"](ticket[0], ticket[1], ticket[2], ticket[3], ticket[4], ticket[5], ticket[6], ticket[7]);
        return parsedTicket;
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
//# sourceMappingURL=default~maintenance-maintenance-module~manager-manager-module~resident-resident-module.js.map