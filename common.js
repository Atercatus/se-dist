(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/shared/http/admin.service.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/http/admin.service.ts ***!
  \**********************************************/
/*! exports provided: AdminService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminService", function() { return AdminService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/global.service */ "./src/app/shared/service/global.service.ts");




var AdminService = /** @class */ (function () {
    function AdminService(http, global) {
        this.http = http;
        this.global = global;
    }
    AdminService.prototype.getAdminList = function () {
        return this.http.get(this.global.url + "/admin").map(function (res) {
            if (res.status === 'success') {
                return res.result;
            }
            else {
                alert('[ERROR]: ' + res.err);
            }
        });
    };
    AdminService.prototype.getAdminByCredit = function (credit) {
        return this.http.get(this.global.url + ("/admin/" + credit)).map(function (res) {
            if (res.status === 'success') {
                return res.result;
            }
            else {
                alert('[ERROR]: ' + res.err);
            }
        });
    };
    AdminService.prototype.postAdmin = function (data) {
        return this.http.post(this.global.url + "/post-admin", data).map(function (res) {
            if (res.status === 'success') {
                return res.result;
            }
            else {
                alert('[ERROR]: ' + res.err);
            }
        });
    };
    AdminService.prototype.deleteAdmin = function (id) {
        var data = {
            id: id
        };
        return this.http.put(this.global.url + "/delete-admin", data).map(function (res) {
            if (res.status === 'success') {
                return res.result;
            }
            else {
                alert('[ERROR]: ' + res.err);
            }
        });
    };
    AdminService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _service_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"]])
    ], AdminService);
    return AdminService;
}());



/***/ }),

/***/ "./src/app/shared/http/punish.service.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/http/punish.service.ts ***!
  \***********************************************/
/*! exports provided: PunishService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PunishService", function() { return PunishService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/global.service */ "./src/app/shared/service/global.service.ts");





var PunishService = /** @class */ (function () {
    function PunishService(http, global, location) {
        this.http = http;
        this.global = global;
        this.location = location;
    }
    PunishService.prototype.getPunishList = function () {
        return this.http.get(this.global.url + "/sanction").map(function (res) {
            if (res.status === 'success') {
                return res.result;
            }
            else {
                alert('[ERROR]: ' + res.result);
            }
        });
    };
    PunishService.prototype.postPunish = function (data) {
        return this.http.put(this.global.url + "/post-sanction", data).map(function (res) {
            if (res.status === 'success') {
                return res.result;
            }
            else {
                alert('[ERROR]: ' + res.result);
            }
        });
    };
    PunishService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _service_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])
    ], PunishService);
    return PunishService;
}());



/***/ }),

/***/ "./src/app/shared/http/report.service.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/http/report.service.ts ***!
  \***********************************************/
/*! exports provided: ReportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportService", function() { return ReportService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/global.service */ "./src/app/shared/service/global.service.ts");




var ReportService = /** @class */ (function () {
    function ReportService(http, global) {
        this.http = http;
        this.global = global;
    }
    ReportService.prototype.postReport = function (data) {
        return this.http.post(this.global.url + "/report", data).map(function (res) {
            if (res.status === 'success') {
                return res.result;
            }
            else {
                alert('[ERROR]: ' + res.result);
            }
        });
    };
    ReportService.prototype.getReportList = function () {
        return this.http.get(this.global.url + "/report").map(function (res) {
            if (res.status === 'success') {
                return res.result;
            }
            else {
                alert('[ERROR]: ' + res.result);
            }
        });
    };
    ReportService.prototype.getReportById = function (id) {
        return this.http.get(this.global.url + ("/report/" + id)).map(function (res) {
            if (res.status === 'success') {
                return res.result;
            }
            else {
                alert('[ERROR]: ' + res.result);
            }
        });
    };
    ReportService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _service_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"]])
    ], ReportService);
    return ReportService;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map