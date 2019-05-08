(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-dev-dev-module"],{

/***/ "./src/app/dev/dev-routing.module.ts":
/*!*******************************************!*\
  !*** ./src/app/dev/dev-routing.module.ts ***!
  \*******************************************/
/*! exports provided: DevRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevRoutingModule", function() { return DevRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dev_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dev.component */ "./src/app/dev/dev.component.ts");




var routes = [
    { path: '', component: _dev_component__WEBPACK_IMPORTED_MODULE_3__["DevComponent"] },
];
var DevRoutingModule = /** @class */ (function () {
    function DevRoutingModule() {
    }
    DevRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], DevRoutingModule);
    return DevRoutingModule;
}());



/***/ }),

/***/ "./src/app/dev/dev.component.html":
/*!****************************************!*\
  !*** ./src/app/dev/dev.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"container\">\r\n    <div class=\"panel panel-primary\">\r\n        <div class=\"panel-heading\">사용 오픈소스</div>\r\n        <div class=\"panel-body\">\r\n            <ul class=\"list-group\">\r\n                <h3 class=\"list-group-title\">프론트앤드</h3>\r\n                <li class=\"list-group-item head\">\r\n                    <div class=\"row\">\r\n                        <p class=\"col-lg-3\">오픈소스 이름</p>\r\n                        <p class=\"col-lg-5\">오픈소스 페이지</p>\r\n                        <p class=\"col-lg-1\">버전</p>\r\n                        <p class=\"col-lg-3\">비고</p>\r\n                    </div>\r\n                    <div class=\"list-group-separator\"></div>\r\n                </li>\r\n                <li class=\"list-group-item\" *ngFor=\"let item of front\">\r\n                    <div class=\"row\">\r\n                        <p class=\"col-lg-3\">{{ item.title }}</p>\r\n                        <p class=\"col-lg-5\">\r\n                            <a [href]=\"item.url\">{{ item.url }}</a>\r\n                        </p>\r\n                        <p class=\"col-lg-1\">{{ item.min_version }}</p>\r\n                        <p class=\"col-lg-3\">{{ item.remark }}</p>\r\n                    </div>\r\n                </li>\r\n            </ul>\r\n            <ul class=\"list-group\">\r\n                <h3 class=\"list-group-title\">백앤드</h3>\r\n                <li class=\"list-group-item head\">\r\n                    <div class=\"row\">\r\n                        <p class=\"col-lg-3\">오픈소스 이름</p>\r\n                        <p class=\"col-lg-5\">오픈소스 페이지</p>\r\n                        <p class=\"col-lg-1\">버전</p>\r\n                        <p class=\"col-lg-3\">비고</p>\r\n                    </div>\r\n                    <div class=\"list-group-separator\"></div>\r\n                </li>\r\n                <li class=\"list-group-item\" *ngFor=\"let item of back\">\r\n                    <div class=\"row\">\r\n                        <p class=\"col-lg-3\">{{ item.title }}</p>\r\n                        <p class=\"col-lg-5\">\r\n                            <a [href]=\"item.url\">{{ item.url }}</a>\r\n                        </p>\r\n                        <p class=\"col-lg-1\">{{ item.min_version }}</p>\r\n                        <p class=\"col-lg-3\">{{ item.remark }}</p>\r\n                    </div>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/dev/dev.component.scss":
/*!****************************************!*\
  !*** ./src/app/dev/dev.component.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list-group-title {\n  margin-bottom: 20px; }\n\n.list-group-item.head p {\n  margin-bottom: 5px;\n  font-size: 16px; }\n\n.list-group-item.head .list-group-separator {\n  margin-top: 0;\n  margin-bottom: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV2L0M6XFxVc2Vyc1xcQXRlckNhdHVzXFxEZXNrdG9wXFxzY2hvb2xfcHJvamVjdFxcU0VfQm9va2luZ19TeXN0ZW1fZnJvbnQvc3JjXFxhcHBcXGRldlxcZGV2LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQW1CLEVBQUE7O0FBR3ZCO0VBRVEsa0JBQWtCO0VBQ2xCLGVBQWUsRUFBQTs7QUFIdkI7RUFNUSxhQUFhO0VBQ2IsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9kZXYvZGV2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxpc3QtZ3JvdXAtdGl0bGUge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLmxpc3QtZ3JvdXAtaXRlbS5oZWFkIHtcclxuICAgIHAge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB9XHJcbiAgICAubGlzdC1ncm91cC1zZXBhcmF0b3Ige1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/dev/dev.component.ts":
/*!**************************************!*\
  !*** ./src/app/dev/dev.component.ts ***!
  \**************************************/
/*! exports provided: DevComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevComponent", function() { return DevComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DevComponent = /** @class */ (function () {
    function DevComponent() {
    }
    DevComponent.prototype.ngOnInit = function () {
        this.front = [
            { title: 'angular', url: 'https://angular.io/', min_version: '4.3.0', remark: '' },
            { title: 'bootstrap', url: 'http://getbootstrap.com/', min_version: '3.3.7', remark: '' },
            {
                title: 'bootstrap material design',
                url: 'http://fezvrasta.github.io/bootstrap-material-design/',
                min_version: '4.0.2',
                remark: 'bootstrap theme'
            },
            {
                title: 'arrive.js',
                url: 'https://github.com/uzairfarooq/arrive',
                min_version: '2.4.1',
                remark: 'dynamic DOM event manager for bootstrap material design'
            },
            { title: 'jquery', url: 'https://jquery.com/', min_version: '3.2.1', remark: '' },
            { title: 'moment.js', url: 'https://momentjs.com/', min_version: '2.18.1', remark: '' },
            {
                title: 'normalize.css',
                url: 'https://necolas.github.io/normalize.css/',
                min_version: '7.0.0',
                remark: ''
            },
            {
                title: 'ngx-bootstrap',
                url: 'http://valor-software.com/ngx-bootstrap/#/',
                min_version: '1.7.1',
                remark: ''
            },
            { title: 'summernote', url: 'http://summernote.org/', min_version: '0.8.6', remark: '' }
        ];
        this.back = [
            { title: 'express', url: 'http://expressjs.com/', min_version: '4.15.3', remark: '' },
            {
                title: 'promise-mysql',
                url: 'https://github.com/lukeb-uk/node-promise-mysql',
                min_version: '3.0.1',
                remark: ''
            },
            {
                title: 'request-promise',
                url: 'https://github.com/request/request-promise',
                min_version: '4.2.1',
                remark: ''
            },
            { title: 'rxjs', url: 'https://github.com/ReactiveX/rxjs', min_version: '5.4.2', remark: '' },
            { title: 'multiparty', url: 'https://github.com/pillarjs/multiparty', min_version: '4.1.3', remark: '' }
        ];
    };
    DevComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dev',
            template: __webpack_require__(/*! ./dev.component.html */ "./src/app/dev/dev.component.html"),
            styles: [__webpack_require__(/*! ./dev.component.scss */ "./src/app/dev/dev.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DevComponent);
    return DevComponent;
}());



/***/ }),

/***/ "./src/app/dev/dev.module.ts":
/*!***********************************!*\
  !*** ./src/app/dev/dev.module.ts ***!
  \***********************************/
/*! exports provided: DevModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevModule", function() { return DevModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_component_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/component/navbar/navbar.module */ "./src/app/shared/component/navbar/navbar.module.ts");
/* harmony import */ var _dev_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dev-routing.module */ "./src/app/dev/dev-routing.module.ts");
/* harmony import */ var _dev_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dev.component */ "./src/app/dev/dev.component.ts");






var DevModule = /** @class */ (function () {
    function DevModule() {
    }
    DevModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _dev_routing_module__WEBPACK_IMPORTED_MODULE_4__["DevRoutingModule"],
                _shared_component_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_3__["NavbarModule"]
            ],
            declarations: [_dev_component__WEBPACK_IMPORTED_MODULE_5__["DevComponent"]]
        })
    ], DevModule);
    return DevModule;
}());



/***/ })

}]);
//# sourceMappingURL=app-dev-dev-module.js.map