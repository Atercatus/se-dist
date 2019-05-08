(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-admin-cancel-cancel-module"],{

/***/ "./src/app/admin/cancel/cancel-detail/cancel-detail.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/admin/cancel/cancel-detail/cancel-detail.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"container\">\r\n    <div class=\"alert alert-dismissible alert-warning\">\r\n        <h4>경 고!</h4>\r\n        <p>관리자의 월권 행위 일 수도 있습니다. 정해진 규칙에 따라 신중히 사용 하시길 바랍니다.</p>\r\n    </div>\r\n    <div class=\"panel panel-default\">\r\n        <div class=\"panel-body\" *ngIf=\"cancelTarget$ | async as cancelTarget\">\r\n            <h3 class=\"page-header\">예약 취소</h3>\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-1 col-md-2 col-sm-2 col-xs-4\">\r\n                    <p class=\"text-muted\">예약 일자</p>\r\n                </div>\r\n                <div class=\"col-lg-2 col-md-2 col-sm-2 col-xs-8\">\r\n                    <p>{{ cancelTarget.booking_date }}</p>\r\n                </div>\r\n                <div class=\"col-lg-1 col-md-2 col-sm-2 col-xs-4\">\r\n                    <p class=\"text-muted\">예약 섹션</p>\r\n                </div>\r\n                <div class=\"col-lg-1 col-md-1 col-sm-2 col-xs-8\">\r\n                    <p>{{ cancelTarget.section }}</p>\r\n                </div>\r\n                <div class=\"col-lg-1 col-md-2 col-sm-2 col-xs-4\">\r\n                    <p class=\"text-muted\">예약 시간</p>\r\n                </div>\r\n                <div class=\"col-lg-3 col-md-2 col-sm-2 col-xs-8\">\r\n                    <p>{{ cancelTarget.booking_time }}</p>\r\n                </div>\r\n                <div class=\"col-lg-1 col-md-2 col-sm-2 col-xs-4\">\r\n                    <p class=\"text-muted\">예약자</p>\r\n                </div>\r\n                <div class=\"col-lg-2 col-md-2 col-sm-2 col-xs-8\">\r\n                    <p>{{ cancelTarget.booker }}</p>\r\n                </div>\r\n            </div>\r\n            <div class=\"pull-right\">\r\n                <button class=\"btn btn-raised btn-danger\" (click)=\"end( cancelTarget.id, cancelTarget.booking_time )\">\r\n                    취소\r\n                </button>\r\n                <button class=\"btn btn-raised btn-primary\" [routerLink]=\"['/admin/cancel']\">목록으로</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/admin/cancel/cancel-detail/cancel-detail.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/admin/cancel/cancel-detail/cancel-detail.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NhbmNlbC9jYW5jZWwtZGV0YWlsL2NhbmNlbC1kZXRhaWwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/cancel/cancel-detail/cancel-detail.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/admin/cancel/cancel-detail/cancel-detail.component.ts ***!
  \***********************************************************************/
/*! exports provided: CancelDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CancelDetailComponent", function() { return CancelDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _shared_http_booking_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/http/booking.service */ "./src/app/shared/http/booking.service.ts");






var CancelDetailComponent = /** @class */ (function () {
    function CancelDetailComponent(router, route, bookingService) {
        this.router = router;
        this.route = route;
        this.bookingService = bookingService;
    }
    CancelDetailComponent.prototype.ngOnInit = function () {
        this.id = this.route.snapshot.params.id;
        this.cancelTarget$ = this.bookingService.getBookingInfoById(this.id).map(function (list) { return list[0]; });
    };
    CancelDetailComponent.prototype.end = function (id, time) {
        var _this = this;
        var targetTime = time.split(', ');
        var changeTime = '';
        for (var i = 0; i < targetTime.length; i++) {
            if (+targetTime[i] <= +moment__WEBPACK_IMPORTED_MODULE_3__().format('HH')) {
                if (i == 0) {
                    changeTime += targetTime[i];
                }
                else {
                    changeTime += ', ';
                    changeTime += targetTime[i];
                }
            }
        }
        this.bookingService.end(this.id, sessionStorage.getItem('id'), changeTime).subscribe(function (res) {
            if (res.status === 'success') {
                _this.router.navigate(['/admin/cancel']);
            }
            else {
                alert('[ERROR]: ' + res.result);
            }
        });
    };
    CancelDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cancel-detail',
            template: __webpack_require__(/*! ./cancel-detail.component.html */ "./src/app/admin/cancel/cancel-detail/cancel-detail.component.html"),
            styles: [__webpack_require__(/*! ./cancel-detail.component.scss */ "./src/app/admin/cancel/cancel-detail/cancel-detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _shared_http_booking_service__WEBPACK_IMPORTED_MODULE_5__["BookingService"]])
    ], CancelDetailComponent);
    return CancelDetailComponent;
}());



/***/ }),

/***/ "./src/app/admin/cancel/cancel-detail/cancel-detail.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/admin/cancel/cancel-detail/cancel-detail.module.ts ***!
  \********************************************************************/
/*! exports provided: CancelDetailModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CancelDetailModule", function() { return CancelDetailModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_http_booking_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/http/booking.service */ "./src/app/shared/http/booking.service.ts");
/* harmony import */ var _shared_component_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/component/navbar/navbar.module */ "./src/app/admin/shared/component/navbar/navbar.module.ts");
/* harmony import */ var _cancel_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cancel-detail.component */ "./src/app/admin/cancel/cancel-detail/cancel-detail.component.ts");







var CancelDetailModule = /** @class */ (function () {
    function CancelDetailModule() {
    }
    CancelDetailModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _shared_component_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_5__["NavbarModule"]
            ],
            declarations: [_cancel_detail_component__WEBPACK_IMPORTED_MODULE_6__["CancelDetailComponent"]],
            providers: [_shared_http_booking_service__WEBPACK_IMPORTED_MODULE_4__["BookingService"]]
        })
    ], CancelDetailModule);
    return CancelDetailModule;
}());



/***/ }),

/***/ "./src/app/admin/cancel/cancel-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/admin/cancel/cancel-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: CancelRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CancelRoutingModule", function() { return CancelRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _cancel_detail_cancel_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cancel-detail/cancel-detail.component */ "./src/app/admin/cancel/cancel-detail/cancel-detail.component.ts");
/* harmony import */ var _cancel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cancel.component */ "./src/app/admin/cancel/cancel.component.ts");





var routes = [
    { path: '', component: _cancel_component__WEBPACK_IMPORTED_MODULE_4__["CancelComponent"] },
    { path: ':id', component: _cancel_detail_cancel_detail_component__WEBPACK_IMPORTED_MODULE_3__["CancelDetailComponent"] },
];
var CancelRoutingModule = /** @class */ (function () {
    function CancelRoutingModule() {
    }
    CancelRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], CancelRoutingModule);
    return CancelRoutingModule;
}());



/***/ }),

/***/ "./src/app/admin/cancel/cancel.component.html":
/*!****************************************************!*\
  !*** ./src/app/admin/cancel/cancel.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<div class=\"container\" *ngIf=\"filteredBookingList$ | async as bookingList\">\r\n    <div class=\"panel panel-default\">\r\n        <div class=\"panel-body\">\r\n            <h3>예약 취소</h3>\r\n        </div>\r\n        <ul class=\"list-group\">\r\n            <li class=\"list-group-item head\">\r\n                <div class=\"row\">\r\n                    <p class=\"col-lg-3 col-md-3 col-sm-4 col-xs-4\">예약자</p>\r\n                    <p class=\"col-lg-3 col-md-3 hidden-sm hidden-xs\">예약 일자</p>\r\n                    <p class=\"col-lg-3 col-md-3 col-sm-4 col-xs-4\">예약 시간</p>\r\n                    <p class=\"col-lg-3 col-md-3 col-sm-4 col-xs-4\">취소자</p>\r\n                </div>\r\n                <div class=\"list-group-separator\"></div>\r\n            </li>\r\n            <li class=\"list-group-item\"\r\n                *ngFor=\"let bookingInfo of bookingList | slice:(currentPage - 1):(currentPage + itemPerPage - 1) \">\r\n                <div class=\"row\">\r\n                    <p class=\"col-lg-3 col-md-3 col-sm-4 col-xs-4\">\r\n                        <a [routerLink]=\"['/admin/cancel/', bookingInfo.id]\">{{ bookingInfo.booker }}</a>\r\n                    </p>\r\n                    <p class=\"col-lg-3 col-md-3 hidden-sm hidden-xs\">{{ bookingInfo.booking_date }}</p>\r\n                    <p class=\"col-lg-3 col-md-3 col-sm-4 col-xs-4\">{{ bookingInfo.booking_time }}</p>\r\n                    <p class=\"col-lg-3 col-md-3 col-sm-4 col-xs-4\">{{ bookingInfo.changer }}</p>\r\n                </div>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n    <div class=\"text-center\">\r\n        <pagination [previousText]=\"'이전'\" [nextText]=\"'다음'\" [totalItems]=\"bookingList.length\"\r\n                    [itemsPerPage]=\"itemPerPage\" [(ngModel)]=\"currentPage\"></pagination>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/admin/cancel/cancel.component.scss":
/*!****************************************************!*\
  !*** ./src/app/admin/cancel/cancel.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list-group-item.head p {\n  margin-bottom: 5px;\n  font-size: 16px; }\n\n.list-group-item.head .list-group-separator {\n  margin-top: 0;\n  margin-bottom: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vY2FuY2VsL0M6XFxVc2Vyc1xcQXRlckNhdHVzXFxEZXNrdG9wXFxzY2hvb2xfcHJvamVjdFxcU0VfQm9va2luZ19TeXN0ZW1fZnJvbnQvc3JjXFxhcHBcXGFkbWluXFxjYW5jZWxcXGNhbmNlbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLGtCQUFrQjtFQUNsQixlQUFlLEVBQUE7O0FBSHZCO0VBTVEsYUFBYTtFQUNiLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vY2FuY2VsL2NhbmNlbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saXN0LWdyb3VwLWl0ZW0uaGVhZCB7XHJcbiAgICBwIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgfVxyXG4gICAgLmxpc3QtZ3JvdXAtc2VwYXJhdG9yIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/admin/cancel/cancel.component.ts":
/*!**************************************************!*\
  !*** ./src/app/admin/cancel/cancel.component.ts ***!
  \**************************************************/
/*! exports provided: CancelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CancelComponent", function() { return CancelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _shared_http_booking_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/http/booking.service */ "./src/app/shared/http/booking.service.ts");





var CancelComponent = /** @class */ (function () {
    function CancelComponent(bookingService) {
        this.bookingService = bookingService;
    }
    CancelComponent.prototype.ngOnInit = function () {
        this.filteredBookingList$ =
            this.bookingService.getBookingList()
                .map(function (list) { return list.filter(function (item) { return (item.changer !== item.booker || item.changer === null); }); })
                .map(function (list) { return list.filter(function (item) { return item.booking_date === moment__WEBPACK_IMPORTED_MODULE_2__().format('YYYY-MM-DD'); }); })
                .map(function (list) { return list.filter(function (item) {
                var booking_time = item.booking_time.split(', ');
                var now = moment__WEBPACK_IMPORTED_MODULE_2__().format('HH');
                return +booking_time[0] <= +now && +now <= +booking_time[booking_time.length - 1];
            }).reverse(); });
        this.currentPage = 1;
        this.itemPerPage = 30;
    };
    CancelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cancel',
            template: __webpack_require__(/*! ./cancel.component.html */ "./src/app/admin/cancel/cancel.component.html"),
            styles: [__webpack_require__(/*! ./cancel.component.scss */ "./src/app/admin/cancel/cancel.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_http_booking_service__WEBPACK_IMPORTED_MODULE_4__["BookingService"]])
    ], CancelComponent);
    return CancelComponent;
}());



/***/ }),

/***/ "./src/app/admin/cancel/cancel.module.ts":
/*!***********************************************!*\
  !*** ./src/app/admin/cancel/cancel.module.ts ***!
  \***********************************************/
/*! exports provided: CancelModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CancelModule", function() { return CancelModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _shared_http_booking_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/http/booking.service */ "./src/app/shared/http/booking.service.ts");
/* harmony import */ var _shared_component_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/component/navbar/navbar.module */ "./src/app/admin/shared/component/navbar/navbar.module.ts");
/* harmony import */ var _cancel_detail_cancel_detail_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cancel-detail/cancel-detail.module */ "./src/app/admin/cancel/cancel-detail/cancel-detail.module.ts");
/* harmony import */ var _cancel_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cancel-routing.module */ "./src/app/admin/cancel/cancel-routing.module.ts");
/* harmony import */ var _cancel_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./cancel.component */ "./src/app/admin/cancel/cancel.component.ts");










var CancelModule = /** @class */ (function () {
    function CancelModule() {
    }
    CancelModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _cancel_routing_module__WEBPACK_IMPORTED_MODULE_8__["CancelRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _shared_component_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_6__["NavbarModule"],
                _cancel_detail_cancel_detail_module__WEBPACK_IMPORTED_MODULE_7__["CancelDetailModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["PaginationModule"].forRoot()
            ],
            declarations: [_cancel_component__WEBPACK_IMPORTED_MODULE_9__["CancelComponent"]],
            providers: [_shared_http_booking_service__WEBPACK_IMPORTED_MODULE_5__["BookingService"]]
        })
    ], CancelModule);
    return CancelModule;
}());



/***/ })

}]);
//# sourceMappingURL=app-admin-cancel-cancel-module.js.map