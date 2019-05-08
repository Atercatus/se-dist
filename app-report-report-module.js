(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-report-report-module"],{

/***/ "./node_modules/rxjs-compat/_esm5/add/operator/filter.js":
/*!***************************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/add/operator/filter.js ***!
  \***************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _operator_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../operator/filter */ "./node_modules/rxjs-compat/_esm5/operator/filter.js");


rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].prototype.filter = _operator_filter__WEBPACK_IMPORTED_MODULE_1__["filter"];
//# sourceMappingURL=filter.js.map

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm5/operator/filter.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/operator/filter.js ***!
  \***********************************************************/
/*! exports provided: filter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return filter; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");

function filter(predicate, thisArg) {
    return Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["filter"])(predicate, thisArg)(this);
}
//# sourceMappingURL=filter.js.map

/***/ }),

/***/ "./src/app/report/report-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/report/report-routing.module.ts ***!
  \*************************************************/
/*! exports provided: ReportRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportRoutingModule", function() { return ReportRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _report_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./report.component */ "./src/app/report/report.component.ts");




var routes = [
    { path: '', component: _report_component__WEBPACK_IMPORTED_MODULE_3__["ReportComponent"] },
];
var ReportRoutingModule = /** @class */ (function () {
    function ReportRoutingModule() {
    }
    ReportRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ReportRoutingModule);
    return ReportRoutingModule;
}());



/***/ }),

/***/ "./src/app/report/report.component.html":
/*!**********************************************!*\
  !*** ./src/app/report/report.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<div class=\"container\">\r\n    <div class=\"alert alert-dismissible alert-warning\">\r\n        <h4>잠깐만요!</h4>\r\n        <p>또한, 부정확한 신고 정보를 입력할 시 다른 학우에게 피해가 갈 수 있습니다. 신중히 사용해주세요.</p>\r\n    </div>\r\n\r\n    <div class=\"panel panel-primary\">\r\n        <div class=\"panel-heading\">신고 하기</div>\r\n        <div class=\"panel-body\">\r\n            <form [formGroup]=\"reportForm\" (submit)=\"submit()\" ngNativeValidate>\r\n                <div class=\"row\">\r\n                    <div class=\"form-group col-lg-12\">\r\n                        <input type=\"text\" class=\"form-control\" placeholder=\"제목을 입력해 주세요\" formControlName=\"title\"\r\n                               required>\r\n                    </div>\r\n                    <div class=\"form-group col-lg-4\">\r\n                        <select class=\"form-control\" [ngClass]=\"{plaseholder: reportForm.value.time === ''}\"\r\n                                formControlName=\"time\" required>\r\n                            <option class=\"plaseholder\" value=\"\">신고 시간</option>\r\n                            <option [value]=\"bookingItem.id\" *ngFor=\"let bookingItem of bookingList | async\">{{\r\n                                bookingItem.booking_date }} {{ bookingItem.booking_time }}:00 / {{ bookingItem.section\r\n                                }}\r\n                            </option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n                <div id=\"summernote\">Hello Summernote</div>\r\n                <div class=\"panel panel-default\">\r\n                    <div class=\"panel-body\">\r\n                        <div class=\"preview-wrapper\">\r\n                            <img class=\"preview\" *ngFor=\"let preview of previewList; let i = index\" [src]=\"preview\"\r\n                                 (click)=\"deletePicture( i )\">\r\n                        </div>\r\n                        <p class=\"hint\" *ngIf=\"previewList.length !== 0\">첨부된 사진은 클릭시 삭제 됩니다.</p>\r\n                    </div>\r\n                </div>\r\n                <div class=\"pull-right\">\r\n                    <button type=\"submit\" class=\"btn btn-raised btn-primary\">등록</button>\r\n                    <button class=\"btn btn-raised btn-danger\" [routerLink]=\"['/main']\">취소</button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/report/report.component.scss":
/*!**********************************************!*\
  !*** ./src/app/report/report.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".note-editor .btn-group {\n  margin-bottom: 0; }\n\n.preview-wrapper {\n  height: 100px;\n  display: table-cell;\n  vertical-align: middle; }\n\n.preview-wrapper .preview {\n    padding: 0 20px;\n    max-width: 100px;\n    max-height: 100px;\n    cursor: pointer; }\n\n.form-group {\n  margin: 0; }\n\n.form-group select.plaseholder {\n    color: #BDBDBD; }\n\n.form-group select.plaseholder option:not(.plaseholder) {\n      color: #000000; }\n\n.hint {\n  font-size: 12px;\n  margin: 0;\n  text-align: right; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwb3J0L0M6XFxVc2Vyc1xcQXRlckNhdHVzXFxEZXNrdG9wXFxzY2hvb2xfcHJvamVjdFxcU0VfQm9va2luZ19TeXN0ZW1fZnJvbnQvc3JjXFxhcHBcXHJlcG9ydFxccmVwb3J0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEsZ0JBQWdCLEVBQUE7O0FBSXhCO0VBQ0ksYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixzQkFBc0IsRUFBQTs7QUFIMUI7SUFLUSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixlQUFlLEVBQUE7O0FBSXZCO0VBQ0ksU0FBUyxFQUFBOztBQURiO0lBR1EsY0FBYyxFQUFBOztBQUh0QjtNQUtZLGNBQWMsRUFBQTs7QUFLMUI7RUFDSSxlQUFlO0VBQ2YsU0FBUztFQUNULGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcmVwb3J0L3JlcG9ydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ub3RlLWVkaXRvciB7XHJcbiAgICAuYnRuLWdyb3VwIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgfVxyXG59XHJcblxyXG4ucHJldmlldy13cmFwcGVyIHtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIC5wcmV2aWV3IHtcclxuICAgICAgICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDBweDtcclxuICAgICAgICBtYXgtaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHNlbGVjdC5wbGFzZWhvbGRlciB7XHJcbiAgICAgICAgY29sb3I6ICNCREJEQkQ7XHJcbiAgICAgICAgb3B0aW9uOm5vdCgucGxhc2Vob2xkZXIpIHtcclxuICAgICAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uaGludCB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/report/report.component.ts":
/*!********************************************!*\
  !*** ./src/app/report/report.component.ts ***!
  \********************************************/
/*! exports provided: ReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportComponent", function() { return ReportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs-compat/_esm5/add/operator/filter.js");
/* harmony import */ var _shared_http_booking_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/http/booking.service */ "./src/app/shared/http/booking.service.ts");
/* harmony import */ var _shared_http_report_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/http/report.service */ "./src/app/shared/http/report.service.ts");








var ReportComponent = /** @class */ (function () {
    function ReportComponent(bookingService, reportService, fb, location) {
        this.bookingService = bookingService;
        this.reportService = reportService;
        this.fb = fb;
        this.location = location;
    }
    ReportComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fileList = [];
        this.previewList = [];
        // 유저와 관련된 예약 정보 중 오늘 아직 지나지 않은 시간에 대한 예약만 가져온다.
        var userId = sessionStorage.getItem('id');
        this.bookingList = this.bookingService.getBookingInfoListByUser(userId).map(function (bookingList, index) {
            return bookingList.filter(function (bookingItem) {
                var startTime = bookingItem.booking_time.split(', ')[0];
                bookingItem.booking_time = startTime;
                if (_this.isTomorrow(startTime)) {
                    bookingItem.booking_date = moment__WEBPACK_IMPORTED_MODULE_4__(bookingItem.booking_date).add(1, 'd').format('YYYY-MM-DD');
                }
                // 오늘이나 내일 예약된 예약 중에
                if (moment__WEBPACK_IMPORTED_MODULE_4__().isSame(bookingItem.booking_date, 'day') || moment__WEBPACK_IMPORTED_MODULE_4__().add(1, 'd').isSame(bookingItem.booking_date, 'day')) {
                    // 아직 지나지 않은 시간 이면
                    // 16:00부터 예약일 시 16:10분까지는 신고할 수 있다.
                    var bookingDateTime = moment__WEBPACK_IMPORTED_MODULE_4__(bookingItem.booking_date).add(startTime, 'h').add(10, 'm');
                    if (moment__WEBPACK_IMPORTED_MODULE_4__().isSameOrBefore(bookingDateTime)) {
                        return true;
                    }
                }
                return false;
            });
        });
        // 신고 폼 init
        this.reportForm = this.fb.group({
            title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            time: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
        });
        // wysiwyg init
        $('#summernote').summernote({
            height: 300,
            toolbar: [
                ['fontsize', ['fontsize']],
                ['style', ['bold', 'italic', 'underline', 'clear']],
                ['insert', ['picture']],
                ['para', ['ul', 'ol']],
            ],
            callbacks: {
                onImageUpload: function (files) {
                    for (var i = 0; i < files.length; i++) {
                        _this.makePreview(files[i]);
                    }
                }
            }
        });
        // reset
        $('#summernote').summernote('code', '');
    };
    ReportComponent.prototype.ngOnDestroy = function () {
        $('#summernote').summernote('destroy');
    };
    ReportComponent.prototype.submit = function () {
        var _this = this;
        if (this.fileList.length === 0) {
            alert('현재 상황을 사진을 찍어 첨부해 주세요');
            return;
        }
        this.code = $('#summernote').summernote('code');
        var data = new FormData();
        data.append('title', this.reportForm.value.title);
        data.append('time', this.reportForm.value.time);
        data.append('contents', this.code);
        for (var i = 0; i < this.fileList.length; i++) {
            data.append("file_" + i, this.fileList[i]);
        }
        this.reportService.postReport(data).subscribe(function () {
            _this.location.back();
        });
    };
    // 사진에 대한 데이터 스키마 생성, 파일리스트에 등록
    ReportComponent.prototype.makePreview = function (file) {
        var _this = this;
        var reader = new FileReader();
        reader.addEventListener('load', function () {
            _this.fileList.push(file);
            _this.previewList.push(reader.result);
        });
        reader.readAsDataURL(file);
    };
    ReportComponent.prototype.deletePicture = function (index) {
        this.previewList.splice(index, 1);
        this.fileList.splice(index, 1);
    };
    ReportComponent.prototype.isTomorrow = function (start) {
        if (start < 6) {
            return true;
        }
        else {
            return false;
        }
    };
    ReportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-report',
            template: __webpack_require__(/*! ./report.component.html */ "./src/app/report/report.component.html"),
            styles: [__webpack_require__(/*! ./report.component.scss */ "./src/app/report/report.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_http_booking_service__WEBPACK_IMPORTED_MODULE_6__["BookingService"],
            _shared_http_report_service__WEBPACK_IMPORTED_MODULE_7__["ReportService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])
    ], ReportComponent);
    return ReportComponent;
}());



/***/ }),

/***/ "./src/app/report/report.module.ts":
/*!*****************************************!*\
  !*** ./src/app/report/report.module.ts ***!
  \*****************************************/
/*! exports provided: ReportModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportModule", function() { return ReportModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_component_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/component/navbar/navbar.module */ "./src/app/shared/component/navbar/navbar.module.ts");
/* harmony import */ var _shared_http_booking_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/http/booking.service */ "./src/app/shared/http/booking.service.ts");
/* harmony import */ var _shared_http_report_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/http/report.service */ "./src/app/shared/http/report.service.ts");
/* harmony import */ var _report_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./report-routing.module */ "./src/app/report/report-routing.module.ts");
/* harmony import */ var _report_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./report.component */ "./src/app/report/report.component.ts");









var ReportModule = /** @class */ (function () {
    function ReportModule() {
    }
    ReportModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _report_routing_module__WEBPACK_IMPORTED_MODULE_7__["ReportRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _shared_component_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_4__["NavbarModule"]
            ],
            declarations: [_report_component__WEBPACK_IMPORTED_MODULE_8__["ReportComponent"]],
            providers: [_shared_http_booking_service__WEBPACK_IMPORTED_MODULE_5__["BookingService"], _shared_http_report_service__WEBPACK_IMPORTED_MODULE_6__["ReportService"]]
        })
    ], ReportModule);
    return ReportModule;
}());



/***/ })

}]);
//# sourceMappingURL=app-report-report-module.js.map