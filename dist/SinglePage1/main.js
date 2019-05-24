(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_components/alert.component.html":
/*!**************************************************!*\
  !*** ./src/app/_components/alert.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"message\" [ngClass]=\"{ 'alert-success': message.type === 'success', 'ErrBox': message.type === 'error' }\">{{message.text}}</div>"

/***/ }),

/***/ "./src/app/_components/alert.component.ts":
/*!************************************************!*\
  !*** ./src/app/_components/alert.component.ts ***!
  \************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/alert.service */ "./src/app/_services/alert.service.ts");



var AlertComponent = /** @class */ (function () {
    function AlertComponent(alertService) {
        this.alertService = alertService;
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.alertService.getMessage().subscribe(function (message) {
            _this.message = message;
        });
    };
    AlertComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    AlertComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'alert',
            template: __webpack_require__(/*! ./alert.component.html */ "./src/app/_components/alert.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"]])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "./src/app/_components/index.ts":
/*!**************************************!*\
  !*** ./src/app/_components/index.ts ***!
  \**************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alert_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert.component */ "./src/app/_components/alert.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return _alert_component__WEBPACK_IMPORTED_MODULE_0__["AlertComponent"]; });




/***/ }),

/***/ "./src/app/_guards/auth.guard.ts":
/*!***************************************!*\
  !*** ./src/app/_guards/auth.guard.ts ***!
  \***************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/authentication.service */ "./src/app/_services/authentication.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var currentUser = this.authenticationService.currentUserValue;
        if (currentUser) {
            // authorised so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/_guards/index.ts":
/*!**********************************!*\
  !*** ./src/app/_guards/index.ts ***!
  \**********************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.guard */ "./src/app/_guards/auth.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]; });




/***/ }),

/***/ "./src/app/_helpers/error.interceptor.ts":
/*!***********************************************!*\
  !*** ./src/app/_helpers/error.interceptor.ts ***!
  \***********************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/authentication.service */ "./src/app/_services/authentication.service.ts");





var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    ErrorInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                _this.authenticationService.logout();
                location.reload(true);
            }
            var error = err.error.message || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }));
    };
    ErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]])
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());



/***/ }),

/***/ "./src/app/_helpers/fake-backend.ts":
/*!******************************************!*\
  !*** ./src/app/_helpers/fake-backend.ts ***!
  \******************************************/
/*! exports provided: FakeBackendInterceptor, fakeBackendProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FakeBackendInterceptor", function() { return FakeBackendInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fakeBackendProvider", function() { return fakeBackendProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





// array in local storage for registered users
var users = JSON.parse(localStorage.getItem('users')) || [];
var FakeBackendInterceptor = /** @class */ (function () {
    function FakeBackendInterceptor() {
    }
    FakeBackendInterceptor.prototype.intercept = function (request, next) {
        var url = request.url, method = request.method, headers = request.headers, body = request.body;
        // wrap in delayed observable to simulate server api call
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(handleRoute))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["materialize"])()) // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(500))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["dematerialize"])());
        function handleRoute() {
            switch (true) {
                case url.endsWith('/users/register') && method === 'POST':
                    return register();
                case url.endsWith('/users/authenticate') && method === 'POST':
                    return authenticate();
                case url.endsWith('/users') && method === 'GET':
                    return getUsers();
                case url.match(/\/users\/\d+$/) && method === 'GET':
                    return getUserById();
                case url.match(/\/users\/\d+$/) && method === 'DELETE':
                    return deleteUser();
                default:
                    // pass through any requests not handled above
                    return next.handle(request);
            }
        }
        // route functions
        function register() {
            var user = body;
            if (users.find(function (x) { return x.username === user.username; })) {
                return error('Username "' + user.username + '" is already taken');
            }
            user.id = users.length ? Math.max.apply(Math, users.map(function (x) { return x.id; })) + 1 : 1;
            users.push(user);
            localStorage.setItem('users', JSON.stringify(users));
            return ok();
        }
        function authenticate() {
            var username = body.username, password = body.password;
            var user = users.find(function (x) { return x.username === username && x.password === password; });
            if (!user)
                return error('Username or password is incorrect');
            return ok({
                id: user.id,
                username: user.username,
                email: user.email,
                token: 'fake-jwt-token'
            });
        }
        function getUsers() {
            if (!isLoggedIn())
                return unauthorized();
            return ok(users);
        }
        function getUserById() {
            if (!isLoggedIn())
                return unauthorized();
            var user = users.find(function (x) { return x.id == idFromUrl(); });
            return ok(user);
        }
        function deleteUser() {
            if (!isLoggedIn())
                return unauthorized();
            users = users.filter(function (x) { return x.id !== idFromUrl(); });
            localStorage.setItem('users', JSON.stringify(users));
            return ok();
        }
        // helper functions
        function ok(body) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]({ status: 200, body: body }));
        }
        function unauthorized() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])({ status: 401, error: { message: 'Unauthorised' } });
        }
        function error(message) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])({ error: { message: message } });
        }
        function isLoggedIn() {
            return headers.get('Authorization') === 'Bearer fake-jwt-token';
        }
        function idFromUrl() {
            var urlParts = url.split('/');
            return parseInt(urlParts[urlParts.length - 1]);
        }
    };
    FakeBackendInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], FakeBackendInterceptor);
    return FakeBackendInterceptor;
}());

var fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
    useClass: FakeBackendInterceptor,
    multi: true
};


/***/ }),

/***/ "./src/app/_helpers/index.ts":
/*!***********************************!*\
  !*** ./src/app/_helpers/index.ts ***!
  \***********************************/
/*! exports provided: ErrorInterceptor, JwtInterceptor, FakeBackendInterceptor, fakeBackendProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _error_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error.interceptor */ "./src/app/_helpers/error.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return _error_interceptor__WEBPACK_IMPORTED_MODULE_0__["ErrorInterceptor"]; });

/* harmony import */ var _jwt_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jwt.interceptor */ "./src/app/_helpers/jwt.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return _jwt_interceptor__WEBPACK_IMPORTED_MODULE_1__["JwtInterceptor"]; });

/* harmony import */ var _fake_backend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fake-backend */ "./src/app/_helpers/fake-backend.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FakeBackendInterceptor", function() { return _fake_backend__WEBPACK_IMPORTED_MODULE_2__["FakeBackendInterceptor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fakeBackendProvider", function() { return _fake_backend__WEBPACK_IMPORTED_MODULE_2__["fakeBackendProvider"]; });






/***/ }),

/***/ "./src/app/_helpers/jwt.interceptor.ts":
/*!*********************************************!*\
  !*** ./src/app/_helpers/jwt.interceptor.ts ***!
  \*********************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/authentication.service */ "./src/app/_services/authentication.service.ts");



var JwtInterceptor = /** @class */ (function () {
    function JwtInterceptor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    JwtInterceptor.prototype.intercept = function (request, next) {
        // add authorization header with jwt token if available
        var currentUser = this.authenticationService.currentUserValue;
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: "Bearer " + currentUser.token
                }
            });
        }
        return next.handle(request);
    };
    JwtInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], JwtInterceptor);
    return JwtInterceptor;
}());



/***/ }),

/***/ "./src/app/_services/alert.service.ts":
/*!********************************************!*\
  !*** ./src/app/_services/alert.service.ts ***!
  \********************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var AlertService = /** @class */ (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.keepAfterNavigationChange = false;
        // clear alert message on route change
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                if (_this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    _this.keepAfterNavigationChange = false;
                }
                else {
                    // clear alert
                    _this.subject.next();
                }
            }
        });
    }
    AlertService.prototype.success = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
    };
    AlertService.prototype.error = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', text: message });
    };
    AlertService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    AlertService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "./src/app/_services/authentication.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/_services/authentication.service.ts ***!
  \*****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    Object.defineProperty(AuthenticationService.prototype, "currentUserValue", {
        get: function () {
            return this.currentUserSubject.value;
        },
        enumerable: true,
        configurable: true
    });
    AuthenticationService.prototype.login = function (username, password) {
        var _this = this;
        return this.http.post(config.apiUrl + "/users/authenticate", { username: username, password: password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (user) {
            // login successful if there's a jwt token in the response
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
                _this.currentUserSubject.next(user);
            }
            return user;
        }));
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    };
    AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/_services/index.ts":
/*!************************************!*\
  !*** ./src/app/_services/index.ts ***!
  \************************************/
/*! exports provided: AlertService, AuthenticationService, UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert.service */ "./src/app/_services/alert.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return _alert_service__WEBPACK_IMPORTED_MODULE_0__["AlertService"]; });

/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authentication.service */ "./src/app/_services/authentication.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return _authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]; });

/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.service */ "./src/app/_services/user.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]; });






/***/ }),

/***/ "./src/app/_services/user.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/user.service.ts ***!
  \*******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.getAll = function () {
        return this.http.get(config.apiUrl + "/users");
    };
    UserService.prototype.getById = function (id) {
        return this.http.get(config.apiUrl + "/users/" + id);
    };
    UserService.prototype.register = function (user) {
        return this.http.post(config.apiUrl + "/users/register", user);
    };
    UserService.prototype.update = function (user) {
        return this.http.put(config.apiUrl + "/users/" + user.id, user);
    };
    UserService.prototype.delete = function (id) {
        return this.http.delete(config.apiUrl + "/users/" + id);
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/app-password.directive.ts":
/*!*******************************************!*\
  !*** ./src/app/app-password.directive.ts ***!
  \*******************************************/
/*! exports provided: AppPasswordDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppPasswordDirective", function() { return AppPasswordDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppPasswordDirective = /** @class */ (function () {
    function AppPasswordDirective(el) {
        this.el = el;
        this._shown = false;
        this.setup();
    }
    AppPasswordDirective.prototype.toggle = function (span) {
        this._shown = !this._shown;
        if (this._shown) {
            this.el.nativeElement.setAttribute('type', 'text');
            span.innerHTML = '<div class="PassBtn input-group-append"><span class="input-group-text PassBtnText">Hide</span></div>';
        }
        else {
            this.el.nativeElement.setAttribute('type', 'password');
            span.innerHTML = '<div class="PassBtn input-group-append"><span class="input-group-text PassBtnText">Show</span></div>';
        }
    };
    AppPasswordDirective.prototype.setup = function () {
        var _this = this;
        var parent = this.el.nativeElement.parentNode.parentNode;
        var span = document.createElement('span');
        span.innerHTML = '<div class="PassBtn input-group-append"><span class="input-group-text PassBtnText">Show</span></div>';
        span.addEventListener('click', function (event) {
            _this.toggle(span);
        });
        parent.appendChild(span);
    };
    AppPasswordDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appPassword]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], AppPasswordDirective);
    return AppPasswordDirective;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _createaccount_createaccount_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createaccount/createaccount.component */ "./src/app/createaccount/createaccount.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_guards */ "./src/app/_guards/index.ts");







var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'register', component: _createaccount_createaccount_component__WEBPACK_IMPORTED_MODULE_4__["CreateaccountComponent"] },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    background: #FFFFFF;\r\n    box-shadow: 0px 1px 0px rgba(36, 51, 39, 0.02), 0px 1px 5px rgba(36, 51, 39, 0.13); \r\n    height: 60px;\r\n    z-index: 2;\r\n}\r\n header .Left{\r\n    display: flex;\r\n    position: fixed; \r\n    left: 0;\r\n}\r\n header .Left a{\r\n    text-decoration: none;\r\n}\r\n header .Left .NavbarLabel{\r\n    width: 100%;\r\n    display: flex;\r\n    padding-left: .7rem;\r\n}\r\n header .Left .BtnText{\r\n    font-family: 'Work Sans';\r\n    font-style: normal;\r\n    font-weight: 600;\r\n    font-size: 14px;\r\n    line-height: 100%;\r\n    display: flex;\r\n    align-items: flex-end;\r\n    text-align: center;\r\n    letter-spacing: 0.2px;\r\n    color: #243327;\r\n    padding-left: .7rem;\r\n    transition: opacity 0.4s ease-in-out;\r\n}\r\n header .Center{\r\n    cursor: default;\r\n    font-family: 'Work Sans';\r\n    font-style: Bold;\r\n    font-weight: 1000;\r\n    font-size: 20px;\r\n    line-height: 100%;\r\n    display: flex;\r\n    align-items: flex-end;\r\n    text-align: center;\r\n    letter-spacing: 0.2px;\r\n    color: #243327;\r\n}\r\n section{\r\n    margin-top: 65px;\r\n}\r\n @media only screen and (max-width: 600px) {\r\n    header .Left .BtnText{\r\n        transition: opacity 0.2s ease-in-out;\r\n        zoom: 1;\r\n        filter: alpha(opacity=0);\r\n        opacity: 0;\r\n    }\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsTUFBTTtJQUNOLE9BQU87SUFDUCxRQUFRO0lBQ1IsbUJBQW1CO0lBQ25CLGtGQUFrRjtJQUNsRixZQUFZO0lBQ1osVUFBVTtBQUNkO0NBQ0M7SUFDRyxhQUFhO0lBQ2IsZUFBZTtJQUNmLE9BQU87QUFDWDtDQUVBO0lBQ0kscUJBQXFCO0FBQ3pCO0NBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLG1CQUFtQjtBQUN2QjtDQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsY0FBYztJQUNkLG1CQUFtQjtJQUtuQixvQ0FBb0M7QUFDeEM7Q0FFQTtJQUNJLGVBQWU7SUFDZix3QkFBd0I7SUFDeEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixjQUFjO0FBQ2xCO0NBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7Q0FFQTtJQUNJO1FBS0ksb0NBQW9DO1FBQ3BDLE9BQU87UUFDUCx3QkFBd0I7UUFDeEIsVUFBVTtJQUNkO0VBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImhlYWRlcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDFweCAwcHggcmdiYSgzNiwgNTEsIDM5LCAwLjAyKSwgMHB4IDFweCA1cHggcmdiYSgzNiwgNTEsIDM5LCAwLjEzKTsgXHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICB6LWluZGV4OiAyO1xyXG59XHJcbiBoZWFkZXIgLkxlZnR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcG9zaXRpb246IGZpeGVkOyBcclxuICAgIGxlZnQ6IDA7XHJcbn1cclxuXHJcbmhlYWRlciAuTGVmdCBhe1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5oZWFkZXIgLkxlZnQgLk5hdmJhckxhYmVse1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAuN3JlbTtcclxufVxyXG5cclxuaGVhZGVyIC5MZWZ0IC5CdG5UZXh0e1xyXG4gICAgZm9udC1mYW1pbHk6ICdXb3JrIFNhbnMnO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjJweDtcclxuICAgIGNvbG9yOiAjMjQzMzI3O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAuN3JlbTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjRzIGVhc2UtaW4tb3V0O1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBvcGFjdGl5IDAuNHMgZWFzZS1pbi1vdXQ7XHJcbiAgICAtbXMtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjRzIGVhc2UtaW4tb3V0O1xyXG4gICAgLW8tdHJhbnNpdGlvbjogb3BhY2l0eSAwLjRzIGVhc2UtaW4tb3V0O1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjRzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG5oZWFkZXIgLkNlbnRlcntcclxuICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgIGZvbnQtZmFtaWx5OiAnV29yayBTYW5zJztcclxuICAgIGZvbnQtc3R5bGU6IEJvbGQ7XHJcbiAgICBmb250LXdlaWdodDogMTAwMDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjJweDtcclxuICAgIGNvbG9yOiAjMjQzMzI3O1xyXG59IFxyXG5zZWN0aW9ue1xyXG4gICAgbWFyZ2luLXRvcDogNjVweDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgaGVhZGVyIC5MZWZ0IC5CdG5UZXh0e1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgIC1tb3otdHJhbnNpdGlvbjogb3BhY3RpeSAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgIC1tcy10cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgLW8tdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBlYXNlLWluLW91dDtcclxuICAgICAgICB6b29tOiAxO1xyXG4gICAgICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT0wKTtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <div class=\"Left\">\n    <a href=\"#\" class=\"NavbarLabel\">\n      <img src=\"../assets/left-arrow.svg\" alt=\"\">\n      <div class=\"BtnText\">\n        Back to homepage\n      </div>\n    </a>\n  </div>\n  <div class=\"Center\">\n    FANSPLAYERS\n  </div>\n</header> \n<section>\n  <router-outlet></router-outlet>\n</section>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_services */ "./src/app/_services/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AppComponent = /** @class */ (function () {
    function AppComponent(router, authenticationService) {
        var _this = this;
        this.router = router;
        this.authenticationService = authenticationService;
        this.authenticationService.currentUser.subscribe(function (x) { return _this.currentUser = x; });
    }
    AppComponent.prototype.logout = function () {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_helpers */ "./src/app/_helpers/index.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _createaccount_createaccount_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./createaccount/createaccount.component */ "./src/app/createaccount/createaccount.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _app_password_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-password.directive */ "./src/app/app-password.directive.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_components */ "./src/app/_components/index.ts");
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _createaccount_createaccount_component__WEBPACK_IMPORTED_MODULE_9__["CreateaccountComponent"],
                _app_password_directive__WEBPACK_IMPORTED_MODULE_11__["AppPasswordDirective"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                _components__WEBPACK_IMPORTED_MODULE_13__["AlertComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
            ],
            providers: [
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _helpers__WEBPACK_IMPORTED_MODULE_5__["JwtInterceptor"], multi: true },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _helpers__WEBPACK_IMPORTED_MODULE_5__["ErrorInterceptor"], multi: true },
                // provider used to create fake backend
                _helpers__WEBPACK_IMPORTED_MODULE_5__["fakeBackendProvider"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/createaccount/createaccount.component.css":
/*!***********************************************************!*\
  !*** ./src/app/createaccount/createaccount.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".Page{\r\n    z-index: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center; \r\n    flex-direction: column;\r\n    padding: 7.22% 0;\r\n}\r\n\r\n.Page .Component{\r\n    width: 40%;\r\n    height: 100%;\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    background: #FFFFFF;\r\n    box-shadow: 0px 8px 14px rgba(0, 0, 0, 0.0726902);\r\n    border-radius: 6px;\r\n    padding-bottom: 30px; \r\n}\r\n\r\n.Page .Component .Navbar{\r\n    width: 100%;\r\n    height: 70px;\r\n    display:flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.Page .Component .Navbar a {\r\n    text-decoration: none\r\n}\r\n\r\n.Page .Component .Navbar .Item {\r\n    width: 100%;\r\n    height: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    text-align: center;\r\n    background: #F1F3F2;\r\n    box-shadow: inset 3px -5px 4px rgba(0, 0, 0, 0.05);\r\n    color: #939F95;\r\n    cursor: hand;\r\n}\r\n\r\n.Page .Component .Navbar .Item:first-child{\r\n    border-top: 4px solid #E7E9E7;\r\n    border-top-left-radius: 4px;\r\n}\r\n\r\n.Page .Component .Navbar .Item:last-child{\r\n    border-top: 4px solid #E7E9E7;\r\n    border-top-right-radius: 4px;\r\n}\r\n\r\n.Page .Component .Navbar .Item .Text{\r\n    font-family: 'Work Sans';\r\n    font-style: normal;\r\n    font-weight: 600;\r\n    font-size: 22px;\r\n    line-height: 28px;\r\n    display: flex;\r\n    align-items: flex-end;\r\n    text-align: center;\r\n    letter-spacing: 0.2px;\r\n}\r\n\r\n.Page .Component .Navbar .Item.Active {\r\n    width: 100%;\r\n    height: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    text-align: center;\r\n    background: #FFFFFF; \r\n    border-top: 4px solid #2AB446;\r\n    color: #243327;\r\n    box-shadow: none;\r\n    transition: background-color 0.3s ease-in-out;\r\n}\r\n\r\n.TermsBox{\r\n    margin-top: 1.2rem\r\n}\r\n\r\n.TermsBox > a{\r\n    color: #2AB446;\r\n}\r\n\r\n.alert{\r\n    margin-bottom:0px;\r\n    padding: 0 1rem;\r\n    border-top-left-radius: 0px;\r\n    border-top-right-radius: 0px;\r\n}\r\n\r\n.alert-danger{\r\n    background: #FF463A;\r\n    font-family: 'Work Sans';\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    font-size: 12px;\r\n    line-height: 28px;\r\n    display: flex;\r\n    align-items: flex-end;\r\n    color: #FFFFFF; \r\n    border: 1px solid red;\r\n    border-top-left-radius: 0px;\r\n    border-top-right-radius: 0px;\r\n}\r\n\r\n.ErrBox {\r\n    border: 1px solid red!important;\r\n    border-radius: 3px!important;\r\n}\r\n\r\n.form-control:focus{\r\n    border: none;\r\n    box-shadow: none\r\n}\r\n\r\n.input-group-text{\r\n    background: #FFFFFF;\r\n    border: none;\r\n    border-top-right-radius: 0px;\r\n    border-bottom-right-radius: 0px;\r\n}\r\n\r\n.MyInputBox{\r\n    display:flex;\r\n    flex-direction:column;\r\n    width: 100%;\r\n    border: 1px solid #939F95;\r\n    border-radius: 3px;\r\n}\r\n\r\n.field {\r\n    z-index: 0;\r\n    display: flex;\r\n    flex-flow: column-reverse;\r\n    width: 100%;\r\n    height: 3.2rem;\r\n    padding-bottom: .3rem;\r\n  }\r\n\r\nlabel, input {\r\n    width: 99%;\r\n    transition: all 0.2s;\r\n    touch-action: manipulation;\r\n  }\r\n\r\ninput {\r\n    font-size: 1em;\r\n    border: 0;\r\n    font-family: inherit;\r\n    -webkit-appearance: none;\r\n    border-radius: 0;\r\n    padding: 0;\r\n    cursor: text;\r\n    font-family: 'Work Sans';\r\n    font-style: normal;\r\n    font-weight: 600;\r\n    font-size: 15px;\r\n    line-height: 28px;\r\n    display: flex;\r\n    align-items: flex-end;\r\n    color: #243327;\r\n  }\r\n\r\ninput:-webkit-autofill,input:-webkit-autofill:hover,input:-webkit-autofill:focus,textarea:-webkit-autofill,textarea:-webkit-autofill:hover,textarea:-webkit-autofill:focus,select:-webkit-autofill,select:-webkit-autofill:hover,select:-webkit-autofill:focus {\r\n    border: none;\r\n    background: #FFFFFF;\r\n    -webkit-text-fill-color: #495057;\r\n    -webkit-box-shadow: 0 0 0px 1000px #FFFFFF inset;\r\n  }\r\n\r\ninput:focus {\r\n    outline: 0;\r\n    border-bottom: 1px solid #666;\r\n  }\r\n\r\nlabel {\r\n    font-size: .8em;\r\n    margin-bottom: 0;\r\n    font-family: 'Work Sans';\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    font-size: 12px;\r\n    line-height: 28px;\r\n    display: flex;\r\n    align-items: flex-end;\r\n    color: #939F95;\r\n  }\r\n\r\ninput:placeholder-shown + label {\r\n    cursor: text;\r\n    max-width: 66.66%;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    -webkit-transform-origin: left bottom;\r\n            transform-origin: left bottom;\r\n    -webkit-transform: translate(0, 1.7rem) scale(1.3);\r\n            transform: translate(0, 1.7rem) scale(1.3);\r\n  }\r\n\r\n::-webkit-input-placeholder {\r\n    opacity: 0;\r\n    transition: inherit;\r\n  }\r\n\r\ninput:focus::-webkit-input-placeholder {\r\n    opacity: 1;\r\n  }\r\n\r\ninput:not(:placeholder-shown) + label,\r\n  input:focus + label {\r\n    -webkit-transform: translate(0, 0) scale(1);\r\n            transform: translate(0, 0) scale(1);\r\n    cursor: default;\r\n    padding-top: 1.1rem!important;\r\n  }\r\n\r\n.mybtn{\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background: #2AB446;\r\n    border-radius: 2px;\r\n    box-shadow: 0px 1px 0px #2F9343;\r\n}\r\n\r\n.btn-primary{\r\n    border-color: #2AB446;\r\n}\r\n\r\n.btn-primary:not(:disabled):not(.disabled).active, .btn-primary:not(:disabled):not(.disabled):active, .show>.btn-primary.dropdown-toggle{\r\n    color: white;\r\n    background-color: rgb(40, 145, 61);\r\n    border-color: rgb(40, 145, 61);\r\n}\r\n\r\n.btn-primary:not(:disabled):not(.disabled).active:focus, .btn-primary:not(:disabled):not(.disabled):active:focus, .show>.btn-primary.dropdown-toggle:focus{\r\n    box-shadow: 0 0 0 0.2rem rgb(40, 145, 61,.5);\r\n}\r\n\r\n.mybtn .btnText{\r\n    font-family: Work Sans;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    font-size: 17px;\r\n    line-height: 28px;\r\n    display: flex;\r\n    align-items: flex-end;\r\n    text-align: center;\r\n    letter-spacing: 0.2px;\r\n    color: #FFFFFF;\r\n\r\n}\r\n\r\n.BreakerWrapper{\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding-top: 3vh;\r\n}\r\n\r\n.BreakerWrapper .BreakerLineBox {\r\n    width: 10.2vw;\r\n    height: 2px;\r\n    background: #E7E9E7;\r\n}\r\n\r\n.BreakerWrapper .BreakerWord {\r\n    font-family: 'Open Sans', sans-serif;\r\n    font-size: 12px;\r\n    line-height: 16px;\r\n    display: flex;\r\n    align-items: flex-end;\r\n    text-align: center;\r\n    letter-spacing: 1px;\r\n\r\n    color: #939F95;\r\n\r\n}\r\n\r\n.btn{\r\n    padding: 0.8rem .75rem;\r\n}\r\n\r\n.mybtnSocial{\r\n    margin: 1.5rem 0;\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    background: #F6F8F7;\r\n    border: 1px solid #E9ECE9;\r\n    border-radius: 2px;\r\n    padding-left: 0;\r\n}\r\n\r\n.mybtnSocial .btnSocialText{\r\n    font-family: Work Sans;\r\n    font-style: normal;\r\n    font-weight: 800;\r\n    font-size: 17px;\r\n    line-height: 28px;\r\n    display: flex;\r\n    align-items: flex-end;\r\n    text-align: center;\r\n    letter-spacing: 0.2px;\r\n    color: #243327;\r\n    padding-left: 1rem\r\n}\r\n\r\n.Myshadow{\r\n    box-shadow: 0px 0px 8px -3px rgba(153,153,153,1);\r\n    transition: box-shadow 0.1s ease-in-out;\r\n  }\r\n\r\n.ProgresBar{\r\n    width:100%;\r\n    height: 2.2rem;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center      \r\n}\r\n\r\n.ProgresBar .progress{\r\n    width:78%!important;\r\n    height: .5rem;\r\n}\r\n\r\n.ProgresBar .progress-bar.weak{\r\n    background-color: #FFC122;\r\n}\r\n\r\n.ProgresBar .progress-bar.good{\r\n    background-color: #2AB446;\r\n}\r\n\r\n.ProgresBar .progress-bar.excelent{\r\n    background-color: #229138;\r\n}\r\n\r\n.ProgresBar .ProgresText{\r\n    width:22%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center\r\n}\r\n\r\n.ProgresBar .ProgresText.weak{\r\n    color: #FFC122;\r\n}\r\n\r\n.ProgresBar .ProgresText.good{\r\n    color: #2AB446;\r\n}\r\n\r\n.ProgresBar .ProgresText.excelent{\r\n    color: #229138;\r\n}\r\n\r\n@media only screen and (max-width:500px) {\r\n    .Page .Component{\r\n        width: 90%;\r\n    }\r\n    .Page .Component .Navbar{\r\n        height: 50px!important;\r\n    }\r\n    .Page .Component .Navbar .Item .Text{\r\n        font-size: 14px!important;\r\n        white-space: nowrap;\r\n    }\r\n    .ComponentContent{\r\n        width: 90%!important;\r\n    }\r\n    .field{\r\n        height: 2.8rem;\r\n    }\r\n    input{\r\n        font-size: 12px!important;\r\n    }\r\n    label{\r\n        font-size: 10px!important;\r\n    }\r\n    .PassBtnText{\r\n        width: 60px!important;\r\n    }\r\n    .btn{\r\n        padding: 0.4rem 0.75rem!important;\r\n    }\r\n    .mybtn{\r\n        margin: 0.5rem 0!important;\r\n    }\r\n    .mybtn .btnText{\r\n        font-size: 14px!important;\r\n        white-space: nowrap;\r\n        padding-left: 0px!important;\r\n    }\r\n    .mybtnSocial{\r\n        margin: 0.5rem 0!important;\r\n    }\r\n    .mybtnSocial .btnSocialText{\r\n        font-size: 12px!important;\r\n        white-space: nowrap;\r\n        padding-left: 0px!important;\r\n    }\r\n    .BreakerWrapper .BreakerLineBox{\r\n        width: 35vw!important;\r\n    }\r\n    .TermsBox{\r\n        width: 88%;\r\n        font-size: 12px;\r\n        text-align: justify;\r\n    }\r\n    .alert-danger{\r\n        font-size: 10px;\r\n    }\r\n  }\r\n\r\n@media only screen and (min-width: 501px) and (max-width:900px) {\r\n    .Page .Component{\r\n        width: 60%;\r\n    }\r\n    .Page .Component .Navbar{\r\n        height: 60px!important;\r\n    }\r\n    .Page .Component .Navbar .Item .Text{\r\n        font-size: 14px!important;\r\n        white-space: nowrap;\r\n    }\r\n    .ComponentContent{\r\n        width: 90%!important;\r\n    }\r\n    .field{\r\n        height: 2.8rem;\r\n    }\r\n    input{\r\n        font-size: 12px!important;\r\n    }\r\n    label{\r\n        font-size: 10px!important;\r\n    }\r\n    .PassBtnText{\r\n        width: 60px!important;\r\n    }\r\n    .btn{\r\n        padding: 0.4rem 0.75rem!important;\r\n    }\r\n    .mybtn{\r\n        margin: 0.5rem 0!important;\r\n    }\r\n    .mybtn .btnText{\r\n        font-size: 14px!important;\r\n        white-space: nowrap;\r\n        padding-left: 0px!important;\r\n    }\r\n    .mybtnSocial{\r\n        margin: 0.5rem 0!important;\r\n    }\r\n    .mybtnSocial .btnSocialText{\r\n        font-size: 12px!important;\r\n        white-space: nowrap;\r\n        padding-left: 0px!important;\r\n    }\r\n    .BreakerWrapper .BreakerLineBox{\r\n        width: 35vw!important;\r\n    }\r\n    .TermsBox{\r\n        width: 58%;\r\n        font-size: 12px;\r\n        text-align: justify;\r\n    }\r\n    .alert-danger{\r\n        font-size: 10px;\r\n    }\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlYXRlYWNjb3VudC9jcmVhdGVhY2NvdW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGlEQUFpRDtJQUNqRCxrQkFBa0I7SUFDbEIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFDQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsa0RBQWtEO0lBQ2xELGNBQWM7SUFDZCxZQUFZO0FBQ2hCOztBQUNBO0lBQ0ksNkJBQTZCO0lBQzdCLDJCQUEyQjtBQUMvQjs7QUFDQTtJQUNJLDZCQUE2QjtJQUM3Qiw0QkFBNEI7QUFDaEM7O0FBQ0E7SUFDSSx3QkFBd0I7SUFDeEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsY0FBYztJQUNkLGdCQUFnQjtJQUNoQiw2Q0FBNkM7QUFDakQ7O0FBRUE7SUFDSTtBQUNKOztB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QUNuQiwyQkFBMkI7SUFDL0I7SUFDQTtRQUNJLHFCQUFxQjtJQUN6QjtJQUNBO1FBQ0ksVUFBVTtRQUNWLGVBQWU7UUFDZixtQkFBbUI7SUFDdkI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7RUFDRjs7QUFFQTtJQUNFO1FBQ0ksVUFBVTtJQUNkO0lBQ0E7UUFDSSxzQkFBc0I7SUFDMUI7SUFDQTtRQUNJLHlCQUF5QjtRQUN6QixtQkFBbUI7SUFDdkI7SUFDQTtRQUNJLG9CQUFvQjtJQUN4QjtJQUNBO1FBQ0ksY0FBYztJQUNsQjtJQUNBO1FBQ0kseUJBQXlCO0lBQzdCO0lBQ0E7UUFDSSx5QkFBeUI7SUFDN0I7SUFDQTtRQUNJLHFCQUFxQjtJQUN6QjtJQUNBO1FBQ0ksaUNBQWlDO0lBQ3JDO0lBQ0E7UUFDSSwwQkFBMEI7SUFDOUI7SUFDQTtRQUNJLHlCQUF5QjtRQUN6QixtQkFBbUI7UUFDbkIsMkJBQTJCO0lBQy9CO0lBQ0E7UUFDSSwwQkFBMEI7SUFDOUI7SUFDQTtRQUNJLHlCQUF5QjtRQUN6QixtQkFBbUI7UUFDbkIsMkJBQTJCO0lBQy9CO0lBQ0E7UUFDSSxxQkFBcUI7SUFDekI7SUFDQTtRQUNJLFVBQVU7UUFDVixlQUFlO1FBQ2YsbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0VBQ0YiLCJmaWxlIjoic3JjL2FwcC9jcmVhdGVhY2NvdW50L2NyZWF0ZWFjY291bnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5QYWdle1xyXG4gICAgei1pbmRleDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IFxyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHBhZGRpbmc6IDcuMjIlIDA7XHJcbn1cclxuXHJcbi5QYWdlIC5Db21wb25lbnR7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgIGJveC1zaGFkb3c6IDBweCA4cHggMTRweCByZ2JhKDAsIDAsIDAsIDAuMDcyNjkwMik7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDsgXHJcbn1cclxuXHJcbi5QYWdlIC5Db21wb25lbnQgLk5hdmJhcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5QYWdlIC5Db21wb25lbnQgLk5hdmJhciBhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZVxyXG59XHJcblxyXG4uUGFnZSAuQ29tcG9uZW50IC5OYXZiYXIgLkl0ZW0ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogI0YxRjNGMjtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDNweCAtNXB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG4gICAgY29sb3I6ICM5MzlGOTU7XHJcbiAgICBjdXJzb3I6IGhhbmQ7XHJcbn1cclxuLlBhZ2UgLkNvbXBvbmVudCAuTmF2YmFyIC5JdGVtOmZpcnN0LWNoaWxke1xyXG4gICAgYm9yZGVyLXRvcDogNHB4IHNvbGlkICNFN0U5RTc7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0cHg7XHJcbn1cclxuLlBhZ2UgLkNvbXBvbmVudCAuTmF2YmFyIC5JdGVtOmxhc3QtY2hpbGR7XHJcbiAgICBib3JkZXItdG9wOiA0cHggc29saWQgI0U3RTlFNztcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA0cHg7XHJcbn1cclxuLlBhZ2UgLkNvbXBvbmVudCAuTmF2YmFyIC5JdGVtIC5UZXh0e1xyXG4gICAgZm9udC1mYW1pbHk6ICdXb3JrIFNhbnMnO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjJweDtcclxufVxyXG5cclxuLlBhZ2UgLkNvbXBvbmVudCAuTmF2YmFyIC5JdGVtLkFjdGl2ZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGOyBcclxuICAgIGJvcmRlci10b3A6IDRweCBzb2xpZCAjMkFCNDQ2O1xyXG4gICAgY29sb3I6ICMyNDMzMjc7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4uVGVybXNCb3h7XHJcbiAgICBtYXJnaW4tdG9wOiAxLjJyZW1cclxufVxyXG4uVGVybXNCb3ggPiBhe1xyXG4gICAgY29sb3I6ICMyQUI0NDY7XHJcbn1cclxuXHJcbi5hbGVydHtcclxuICAgIG1hcmdpbi1ib3R0b206MHB4O1xyXG4gICAgcGFkZGluZzogMCAxcmVtO1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMHB4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDBweDtcclxufVxyXG4uYWxlcnQtZGFuZ2Vye1xyXG4gICAgYmFja2dyb3VuZDogI0ZGNDYzQTtcclxuICAgIGZvbnQtZmFtaWx5OiAnV29yayBTYW5zJztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjhweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjsgXHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwcHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMHB4O1xyXG59XHJcbi5FcnJCb3gge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweCFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2w6Zm9jdXN7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3gtc2hhZG93OiBub25lXHJcbn1cclxuLmlucHV0LWdyb3VwLXRleHR7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDBweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwcHg7XHJcbn1cclxuXHJcbi5NeUlucHV0Qm94e1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOTM5Rjk1O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG59XHJcbi5maWVsZCB7XHJcbiAgICB6LWluZGV4OiAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogY29sdW1uLXJldmVyc2U7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMy4ycmVtO1xyXG4gICAgcGFkZGluZy1ib3R0b206IC4zcmVtO1xyXG4gIH1cclxuICBcclxuICBsYWJlbCwgaW5wdXQge1xyXG4gICAgd2lkdGg6IDk5JTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xyXG4gICAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0IHtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGN1cnNvcjogdGV4dDtcclxuICAgIGZvbnQtZmFtaWx5OiAnV29yayBTYW5zJztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjhweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICBjb2xvcjogIzI0MzMyNztcclxuICB9XHJcbiAgaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbCxpbnB1dDotd2Via2l0LWF1dG9maWxsOmhvdmVyLGlucHV0Oi13ZWJraXQtYXV0b2ZpbGw6Zm9jdXMsdGV4dGFyZWE6LXdlYmtpdC1hdXRvZmlsbCx0ZXh0YXJlYTotd2Via2l0LWF1dG9maWxsOmhvdmVyLHRleHRhcmVhOi13ZWJraXQtYXV0b2ZpbGw6Zm9jdXMsc2VsZWN0Oi13ZWJraXQtYXV0b2ZpbGwsc2VsZWN0Oi13ZWJraXQtYXV0b2ZpbGw6aG92ZXIsc2VsZWN0Oi13ZWJraXQtYXV0b2ZpbGw6Zm9jdXMge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiAjNDk1MDU3O1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMHB4IDEwMDBweCAjRkZGRkZGIGluc2V0O1xyXG4gIH1cclxuICBcclxuICBpbnB1dDpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM2NjY7XHJcbiAgfVxyXG4gIFxyXG4gIGxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogLjhlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBmb250LWZhbWlseTogJ1dvcmsgU2Fucyc7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgY29sb3I6ICM5MzlGOTU7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0OnBsYWNlaG9sZGVyLXNob3duICsgbGFiZWwge1xyXG4gICAgY3Vyc29yOiB0ZXh0O1xyXG4gICAgbWF4LXdpZHRoOiA2Ni42NiU7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b207XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAxLjdyZW0pIHNjYWxlKDEuMyk7XHJcbiAgfVxyXG4gIFxyXG4gIDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNpdGlvbjogaW5oZXJpdDtcclxuICB9XHJcbiAgXHJcbiAgaW5wdXQ6Zm9jdXM6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbiAgXHJcbiAgaW5wdXQ6bm90KDpwbGFjZWhvbGRlci1zaG93bikgKyBsYWJlbCxcclxuICBpbnB1dDpmb2N1cyArIGxhYmVsIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApIHNjYWxlKDEpO1xyXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gICAgcGFkZGluZy10b3A6IDEuMXJlbSFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuLm15YnRue1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogIzJBQjQ0NjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAxcHggMHB4ICMyRjkzNDM7XHJcbn1cclxuLmJ0bi1wcmltYXJ5e1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMkFCNDQ2O1xyXG59XHJcbi5idG4tcHJpbWFyeTpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKS5hY3RpdmUsIC5idG4tcHJpbWFyeTpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmUsIC5zaG93Pi5idG4tcHJpbWFyeS5kcm9wZG93bi10b2dnbGV7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDAsIDE0NSwgNjEpO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoNDAsIDE0NSwgNjEpO1xyXG59XHJcbi5idG4tcHJpbWFyeTpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKS5hY3RpdmU6Zm9jdXMsIC5idG4tcHJpbWFyeTpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmU6Zm9jdXMsIC5zaG93Pi5idG4tcHJpbWFyeS5kcm9wZG93bi10b2dnbGU6Zm9jdXN7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiKDQwLCAxNDUsIDYxLC41KTtcclxufVxyXG4ubXlidG4gLmJ0blRleHR7XHJcbiAgICBmb250LWZhbWlseTogV29yayBTYW5zO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjhweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuXHJcbn1cclxuXHJcbi5CcmVha2VyV3JhcHBlcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogM3ZoO1xyXG59XHJcblxyXG4uQnJlYWtlcldyYXBwZXIgLkJyZWFrZXJMaW5lQm94IHtcclxuICAgIHdpZHRoOiAxMC4ydnc7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxuICAgIGJhY2tncm91bmQ6ICNFN0U5RTc7XHJcbn1cclxuXHJcbi5CcmVha2VyV3JhcHBlciAuQnJlYWtlcldvcmQge1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuXHJcbiAgICBjb2xvcjogIzkzOUY5NTtcclxuXHJcbn1cclxuLmJ0bntcclxuICAgIHBhZGRpbmc6IDAuOHJlbSAuNzVyZW07XHJcbn1cclxuLm15YnRuU29jaWFse1xyXG4gICAgbWFyZ2luOiAxLjVyZW0gMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjZGOEY3O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0U5RUNFOTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIHBhZGRpbmctbGVmdDogMDtcclxufVxyXG5cclxuLm15YnRuU29jaWFsIC5idG5Tb2NpYWxUZXh0e1xyXG4gICAgZm9udC1mYW1pbHk6IFdvcmsgU2FucztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjhweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XHJcbiAgICBjb2xvcjogIzI0MzMyNztcclxuICAgIHBhZGRpbmctbGVmdDogMXJlbVxyXG59XHJcblxyXG4uTXlzaGFkb3d7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggOHB4IC0zcHggcmdiYSgxNTMsMTUzLDE1MywxKTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCA4cHggLTNweCByZ2JhKDE1MywxNTMsMTUzLDEpO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA4cHggLTNweCByZ2JhKDE1MywxNTMsMTUzLDEpO1xyXG4gICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjFzIGVhc2UtaW4tb3V0O1xyXG4gIH1cclxuXHJcbi5Qcm9ncmVzQmFye1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDogMi4ycmVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgICAgICBcclxufVxyXG4uUHJvZ3Jlc0JhciAucHJvZ3Jlc3N7XHJcbiAgICB3aWR0aDo3OCUhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAuNXJlbTtcclxufVxyXG4uUHJvZ3Jlc0JhciAucHJvZ3Jlc3MtYmFyLndlYWt7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZDMTIyO1xyXG59XHJcbi5Qcm9ncmVzQmFyIC5wcm9ncmVzcy1iYXIuZ29vZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyQUI0NDY7XHJcbn1cclxuLlByb2dyZXNCYXIgLnByb2dyZXNzLWJhci5leGNlbGVudHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMjkxMzg7XHJcbn1cclxuXHJcbi5Qcm9ncmVzQmFyIC5Qcm9ncmVzVGV4dHtcclxuICAgIHdpZHRoOjIyJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXJcclxufVxyXG4uUHJvZ3Jlc0JhciAuUHJvZ3Jlc1RleHQud2Vha3tcclxuICAgIGNvbG9yOiAjRkZDMTIyO1xyXG59XHJcbi5Qcm9ncmVzQmFyIC5Qcm9ncmVzVGV4dC5nb29ke1xyXG4gICAgY29sb3I6ICMyQUI0NDY7XHJcbn1cclxuLlByb2dyZXNCYXIgLlByb2dyZXNUZXh0LmV4Y2VsZW50e1xyXG4gICAgY29sb3I6ICMyMjkxMzg7XHJcbn1cclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjUwMHB4KSB7XHJcbiAgICAuUGFnZSAuQ29tcG9uZW50e1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICB9XHJcbiAgICAuUGFnZSAuQ29tcG9uZW50IC5OYXZiYXJ7XHJcbiAgICAgICAgaGVpZ2h0OiA1MHB4IWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5QYWdlIC5Db21wb25lbnQgLk5hdmJhciAuSXRlbSAuVGV4dHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHghaW1wb3J0YW50O1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICB9XHJcbiAgICAuQ29tcG9uZW50Q29udGVudHtcclxuICAgICAgICB3aWR0aDogOTAlIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5maWVsZHtcclxuICAgICAgICBoZWlnaHQ6IDIuOHJlbTtcclxuICAgIH1cclxuICAgIGlucHV0e1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweCFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICBsYWJlbHtcclxuICAgICAgICBmb250LXNpemU6IDEwcHghaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLlBhc3NCdG5UZXh0e1xyXG4gICAgICAgIHdpZHRoOiA2MHB4IWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5idG57XHJcbiAgICAgICAgcGFkZGluZzogMC40cmVtIDAuNzVyZW0haW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLm15YnRue1xyXG4gICAgICAgIG1hcmdpbjogMC41cmVtIDAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLm15YnRuIC5idG5UZXh0e1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweCFpbXBvcnRhbnQ7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDBweCFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAubXlidG5Tb2NpYWx7XHJcbiAgICAgICAgbWFyZ2luOiAwLjVyZW0gMCFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAubXlidG5Tb2NpYWwgLmJ0blNvY2lhbFRleHR7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4IWltcG9ydGFudDtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMHB4IWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5CcmVha2VyV3JhcHBlciAuQnJlYWtlckxpbmVCb3h7XHJcbiAgICAgICAgd2lkdGg6IDM1dnchaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLlRlcm1zQm94e1xyXG4gICAgICAgIHdpZHRoOiA4OCU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICB9XHJcbiAgICAuYWxlcnQtZGFuZ2Vye1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTAxcHgpIGFuZCAobWF4LXdpZHRoOjkwMHB4KSB7XHJcbiAgICAuUGFnZSAuQ29tcG9uZW50e1xyXG4gICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICB9XHJcbiAgICAuUGFnZSAuQ29tcG9uZW50IC5OYXZiYXJ7XHJcbiAgICAgICAgaGVpZ2h0OiA2MHB4IWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5QYWdlIC5Db21wb25lbnQgLk5hdmJhciAuSXRlbSAuVGV4dHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHghaW1wb3J0YW50O1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICB9XHJcbiAgICAuQ29tcG9uZW50Q29udGVudHtcclxuICAgICAgICB3aWR0aDogOTAlIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5maWVsZHtcclxuICAgICAgICBoZWlnaHQ6IDIuOHJlbTtcclxuICAgIH1cclxuICAgIGlucHV0e1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweCFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICBsYWJlbHtcclxuICAgICAgICBmb250LXNpemU6IDEwcHghaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLlBhc3NCdG5UZXh0e1xyXG4gICAgICAgIHdpZHRoOiA2MHB4IWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5idG57XHJcbiAgICAgICAgcGFkZGluZzogMC40cmVtIDAuNzVyZW0haW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLm15YnRue1xyXG4gICAgICAgIG1hcmdpbjogMC41cmVtIDAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLm15YnRuIC5idG5UZXh0e1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweCFpbXBvcnRhbnQ7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDBweCFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAubXlidG5Tb2NpYWx7XHJcbiAgICAgICAgbWFyZ2luOiAwLjVyZW0gMCFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAubXlidG5Tb2NpYWwgLmJ0blNvY2lhbFRleHR7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4IWltcG9ydGFudDtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMHB4IWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5CcmVha2VyV3JhcHBlciAuQnJlYWtlckxpbmVCb3h7XHJcbiAgICAgICAgd2lkdGg6IDM1dnchaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLlRlcm1zQm94e1xyXG4gICAgICAgIHdpZHRoOiA1OCU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICB9XHJcbiAgICAuYWxlcnQtZGFuZ2Vye1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIH1cclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/createaccount/createaccount.component.html":
/*!************************************************************!*\
  !*** ./src/app/createaccount/createaccount.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"Page\">\n    <div class=\"Component\">\n      <div class=\"Navbar\">\n          <a routerLink=\"/register\" class=\"Item Active\">\n            <div class=\"Text\">\n                Create account\n            </div>\n          </a>\n          <a routerLink=\"/login\" class=\"Item\">\n            <div class=\"Text\">\n                Log In\n            </div>\n          </a>\n      </div>\n      <div class=\"ComponentContent\" style=\"width:80%\">\n        <form >\n\n          <div class=\"form-group input-group mt-3\">\n            <div class=\"MyInputBox\" [ngClass]=\"{'ErrBox':UserName.touched && !UserName.valid}\">\n              <div style=\"display:flex;flex-direction:row\">\n                <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\">\n                      <img src=\"../../assets/username.svg\" alt=\"\">\n                    </span>\n                </div>\n                <div class=\"field\">\n                  <input required ngModel name=\"UserName\" #UserName=\"ngModel\"  id=\"UserName\" type=\"text\" class=\"form-control\" placeholder=\"Your username\">\n                  <label for=\"UserName\">Your username</label>\n                </div>\n              </div>  \n              <div class=\"alert alert-danger\" *ngIf=\"UserName.touched && !UserName.valid\" >Username is required</div>\n            </div>\n          </div>\n\n          <div class=\"form-group input-group mt-3\">\n            <div class=\"MyInputBox\" [ngClass]=\"{'Myshadow':Email.change,'ErrBox':Email.touched && !Email.valid}\">\n              <div style=\"display:flex;flex-direction:row\">\n                <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\">\n                      <img src=\"../../assets/email.svg\" alt=\"\">\n                    </span>\n                </div>\n                <div class=\"field\">\n                  <input required pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" ngModel name=\"Email\" #Email=\"ngModel\"  id=\"Email\" type=\"text\" class=\"form-control\" placeholder=\"Your email adress\">\n                  <label for=\"Email\">Your email</label>\n                </div>\n              </div>  \n              <div class=\"alert alert-danger\" *ngIf=\"Email.touched && !Email.valid\" >\n                  <div *ngIf=\"Email.errors.required\">Email is required! </div>\n                  <div *ngIf=\"Email.errors.pattern\">Please input a valid email! </div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"form-group input-group mt-3\">\n            <div class=\"MyInputBox\" [ngClass]=\"{'ErrBox':Password.touched && !Password.valid}\">\n              <div style=\"display:flex;flex-direction:row;overflow: hidden;\">\n                <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\">\n                      <img src=\"../../assets/password.svg\" alt=\"\">\n                    </span>\n                </div>\n                  <div class=\"field\">\n                      <input appPassword required ngModel name=\"Password\" #Password=\"ngModel\" (keyup)=\"PassStrength(Password)\"  id=\"Password\" type=\"password\" class=\"form-control\"  placeholder=\"New password\">\n                      <label for=\"Password\">New password</label>\n                  </div>\n                  \n              </div>  \n              <div class=\"alert alert-danger\" *ngIf=\"Password.touched && !Password.valid\">\n                  <div *ngIf=\"Password.errors.required\">Password is required! </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group input-group\" *ngIf=\"Password.dirty\">\n            <div class=\"ProgresBar\">\n              <div class=\"progress\">\n                <div class=\"progress-bar\" [ngClass]=\"{'weak':Weak,'good':Good,'excelent':Excelent}\" role=\"progressbar\" style=\"width: 50%\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n              </div>\n              <div class=\"ProgresText\" [ngClass]=\"{'weak':Weak,'good':Good,'excelent':Excelent}\">\n                {{status}}\n              </div>\n            </div>\n          </div>\n\n          <button [disabled]=\"!UserName.valid || !Email.valid || !Password.valid\" class=\"mybtn btn btn-primary\" (click)=\"onSubmit()\">\n            <div class=\"btnText\">Create account</div>\n          </button> \n\n          \n        </form>\n\n        <div class=\"BreakerWrapper\">\n          <div class=\"BreakerLineBox\"></div>\n          <div class=\"BreakerWord\"> OR </div>\n          <div class=\"BreakerLineBox\"></div>\n        </div>\n\n        <button type=\"button\" class=\"mybtnSocial btn btn-light mt-4\">\n          <span class=\"input-group-text\" style=\"background:transparent; border:none\" >\n            <img src=\"../../assets/FB-icon.svg\" alt=\"\">\n          </span>\n          <div class=\"btnSocialText\">Register with Facebook</div>\n        </button>\n        <button type=\"button\" class=\"mybtnSocial btn btn-light\">\n          <span class=\"input-group-text\" style=\"background:transparent; border:none\">\n            <img src=\"../../assets/G-icon.svg\" alt=\"\"/>\n          </span>\n          <div class=\"btnSocialText\">Register with Gmail</div>\n        </button>\n      </div>\n    </div>\n    <div class=\"TermsBox\">\n        By signing up you agree to our <a href=\"#\"> Terms of Service </a> and <a href=\"#\"> Privacy Policy </a>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/createaccount/createaccount.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/createaccount/createaccount.component.ts ***!
  \**********************************************************/
/*! exports provided: CreateaccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateaccountComponent", function() { return CreateaccountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/ */ "./src/app/_services/index.ts");






var CreateaccountComponent = /** @class */ (function () {
    function CreateaccountComponent(formBuilder, router, authenticationService, userService, alertService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.authenticationService = authenticationService;
        this.userService = userService;
        this.alertService = alertService;
        this.Weak = true;
        this.Good = false;
        this.Excelent = false;
        this.status = "Weak";
        this.loading = false;
        this.submitted = false;
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/']);
        }
    }
    CreateaccountComponent.prototype.ngOnInit = function () {
        this.registerForm = this.formBuilder.group({
            username: [''],
            email: [''],
            password: ['']
        });
    };
    Object.defineProperty(CreateaccountComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.registerForm.controls; },
        enumerable: true,
        configurable: true
    });
    CreateaccountComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // // stop here if form is invalid
        // if (this.registerForm.invalid) {
        //     return;
        // }
        this.loading = true;
        this.userService.register(this.registerForm.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function (data) {
            _this.alertService.success('Registration successful', true);
            _this.router.navigate(['/login']);
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    CreateaccountComponent.prototype.PassStrength = function (x) {
        var password = x.value;
        var numberOfElements = 0;
        numberOfElements = /.*[a-z].*/.test(password) ? ++numberOfElements : numberOfElements; // Lowercase letters
        numberOfElements = /.*[A-Z].*/.test(password) ? ++numberOfElements : numberOfElements; // Uppercase letters
        numberOfElements = /.*[0-9].*/.test(password) ? ++numberOfElements : numberOfElements; // Numbers
        numberOfElements = /[^a-zA-Z0-9]/.test(password) ? ++numberOfElements : numberOfElements; // Special characters (inc. space)
        // Assume we have a poor password already
        var currentPasswordStrength = "Weak";
        // Check then strenth of this password using some simple rules
        if (password === null || password.length < 5) {
            currentPasswordStrength = "Weak";
            this.status = "Weak";
            this.Weak = true;
            this.Good = false;
            this.Excelent = false;
        }
        else if (numberOfElements === 0 || numberOfElements === 1 || numberOfElements === 2) {
            currentPasswordStrength = "Weak";
            this.status = "Weak";
            this.Weak = true;
            this.Good = false;
            this.Excelent = false;
        }
        else if (numberOfElements === 3) {
            currentPasswordStrength = "Good";
            this.status = "Good";
            this.Weak = false;
            this.Good = true;
            this.Excelent = false;
        }
        else {
            currentPasswordStrength = "Excelent";
            this.status = "Excelent";
            this.Weak = false;
            this.Good = false;
            this.Excelent = true;
        }
        console.log(x);
    };
    CreateaccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-createaccount',
            template: __webpack_require__(/*! ./createaccount.component.html */ "./src/app/createaccount/createaccount.component.html"),
            styles: [__webpack_require__(/*! ./createaccount.component.css */ "./src/app/createaccount/createaccount.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services___WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"],
            _services___WEBPACK_IMPORTED_MODULE_5__["UserService"],
            _services___WEBPACK_IMPORTED_MODULE_5__["AlertService"]])
    ], CreateaccountComponent);
    return CreateaccountComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Hi {{currentUser.UserName}}!</h1>\n<p>You're logged in FansPlayers app</p>\n<div class=\"form-group input-group mt-3\" style=\"height: 6vh\">\n    <button (click)=\"logout()\" class=\"mybtn btn btn-danger dissable\">Log out</button>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/ */ "./src/app/_services/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var HomeComponent = /** @class */ (function () {
    function HomeComponent(authenticationService, userService, router) {
        var _this = this;
        this.authenticationService = authenticationService;
        this.userService = userService;
        this.router = router;
        this.users = [];
        this.currentUserSubscription = this.authenticationService.currentUser.subscribe(function (user) {
            _this.currentUser = user;
        });
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.loadAllUsers();
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        // unsubscribe to ensure no memory leaks
        this.currentUserSubscription.unsubscribe();
    };
    HomeComponent.prototype.deleteUser = function (id) {
        var _this = this;
        this.userService.delete(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(function () {
            _this.loadAllUsers();
        });
    };
    HomeComponent.prototype.loadAllUsers = function () {
        var _this = this;
        this.userService.getAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(function (users) {
            _this.users = users;
        });
    };
    HomeComponent.prototype.logout = function () {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({ template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html") }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services___WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"],
            _services___WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".Page{\r\n    z-index: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center; \r\n    flex-direction: column;\r\n    padding: 7.22% 0;\r\n}\r\n\r\n.Page .Component{\r\n    width: 40%;\r\n    height: 100%;\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    background: #FFFFFF;\r\n    box-shadow: 0px 8px 14px rgba(0, 0, 0, 0.0726902);\r\n    border-radius: 6px;\r\n    padding-bottom: 30px; \r\n}\r\n\r\n.Page .Component .Navbar{\r\n    width: 100%;\r\n    height: 70px;\r\n    display:flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.Page .Component .Navbar a {\r\n    text-decoration: none\r\n}\r\n\r\n.Page .Component .Navbar .Item {\r\n    width: 100%;\r\n    height: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    text-align: center;\r\n    background: #F1F3F2;\r\n    box-shadow: inset 3px -5px 4px rgba(0, 0, 0, 0.05);\r\n    color: #939F95;\r\n    cursor: hand;\r\n}\r\n\r\n.Page .Component .Navbar .Item:first-child{\r\n    border-top: 4px solid #E7E9E7;\r\n    border-top-left-radius: 4px;\r\n}\r\n\r\n.Page .Component .Navbar .Item:last-child{\r\n    border-top: 4px solid #E7E9E7;\r\n    border-top-right-radius: 4px;\r\n}\r\n\r\n.Page .Component .Navbar .Item .Text{\r\n    font-family: 'Work Sans';\r\n    font-style: normal;\r\n    font-weight: 600;\r\n    font-size: 22px;\r\n    line-height: 28px;\r\n    display: flex;\r\n    align-items: flex-end;\r\n    text-align: center;\r\n    letter-spacing: 0.2px;\r\n}\r\n\r\n.Page .Component .Navbar .Item.Active {\r\n    width: 100%;\r\n    height: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    text-align: center;\r\n    background: #FFFFFF; \r\n    border-top: 4px solid #2AB446;\r\n    color: #243327;\r\n    box-shadow: none;\r\n}\r\n\r\n.TermsBox{\r\n    margin-top: 1.2rem\r\n}\r\n\r\n.TermsBox > a{\r\n    color: #2AB446;\r\n}\r\n\r\n.alert{\r\n    margin-bottom:0px;\r\n    padding: 0 1rem;\r\n    border-top-left-radius: 0px;\r\n    border-top-right-radius: 0px;\r\n}\r\n\r\n.alert-danger{\r\n    background-color: #FF463A;\r\n    font-family: 'Work Sans';\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    font-size: 12px;\r\n    line-height: 28px;\r\n    display: flex;\r\n    align-items: flex-end;\r\n    color: #FFFFFF; \r\n    border: 1px solid red;\r\n    border-top-left-radius: 0px;\r\n    border-top-right-radius: 0px;\r\n}\r\n\r\n.ErrBox {\r\n    border: 1px solid red!important;\r\n    border-radius: 3px!important;\r\n    transition: border 1s ease-in;\r\n}\r\n\r\n.form-control:focus{\r\n    border: none;\r\n    box-shadow: none\r\n}\r\n\r\n.input-group-text{\r\n    background: #FFFFFF;\r\n    border: none;\r\n    border-top-right-radius: 0px;\r\n    border-bottom-right-radius: 0px;\r\n}\r\n\r\n.MyInputBox{\r\n    display:flex;\r\n    flex-direction:column;\r\n    width: 100%;\r\n    border: 1px solid #939F95;\r\n    border-radius: 3px;\r\n}\r\n\r\n.field {\r\n    z-index: 0;\r\n    display: flex;\r\n    flex-flow: column-reverse;\r\n    width: 100%;\r\n    height: 3.2rem;\r\n    padding-bottom: .3rem;\r\n  }\r\n\r\nlabel, input {\r\n    width: 99%;\r\n    transition: all 0.2s;\r\n    touch-action: manipulation;\r\n  }\r\n\r\ninput {\r\n    font-size: 1em;\r\n    border: 0;\r\n    font-family: inherit;\r\n    -webkit-appearance: none;\r\n    border-radius: 0;\r\n    padding: 0;\r\n    cursor: text;\r\n    font-family: 'Work Sans';\r\n    font-style: normal;\r\n    font-weight: 600;\r\n    font-size: 15px;\r\n    line-height: 28px;\r\n    display: flex;\r\n    align-items: flex-end;\r\n    color: #243327;\r\n  }\r\n\r\ninput:-webkit-autofill,input:-webkit-autofill:hover,input:-webkit-autofill:focus,textarea:-webkit-autofill,textarea:-webkit-autofill:hover,textarea:-webkit-autofill:focus,select:-webkit-autofill,select:-webkit-autofill:hover,select:-webkit-autofill:focus {\r\n    border: none;\r\n    background: #FFFFFF;\r\n    -webkit-text-fill-color: #495057;\r\n    -webkit-box-shadow: 0 0 0px 1000px #FFFFFF inset;\r\n  }\r\n\r\ninput:focus {\r\n    outline: 0;\r\n    border-bottom: 1px solid #666;\r\n  }\r\n\r\nlabel {\r\n    font-size: .8em;\r\n    margin-bottom: 0;\r\n    font-family: 'Work Sans';\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    font-size: 12px;\r\n    line-height: 28px;\r\n    display: flex;\r\n    align-items: flex-end;\r\n    color: #939F95;\r\n  }\r\n\r\ninput:placeholder-shown + label {\r\n    cursor: text;\r\n    max-width: 66.66%;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    -webkit-transform-origin: left bottom;\r\n            transform-origin: left bottom;\r\n    -webkit-transform: translate(0, 1.7rem) scale(1.3);\r\n            transform: translate(0, 1.7rem) scale(1.3);\r\n  }\r\n\r\n::-webkit-input-placeholder {\r\n    opacity: 0;\r\n    transition: inherit;\r\n  }\r\n\r\ninput:focus::-webkit-input-placeholder {\r\n    opacity: 1;\r\n  }\r\n\r\ninput:not(:placeholder-shown) + label,\r\n  input:focus + label {\r\n    -webkit-transform: translate(0, 0) scale(1);\r\n            transform: translate(0, 0) scale(1);\r\n    cursor: default;\r\n    padding-top: 1.1rem!important;\r\n  }\r\n\r\n.mybtn{\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background: #2AB446;\r\n    border-radius: 2px;\r\n    box-shadow: 0px 1px 0px #2F9343;\r\n}\r\n\r\n.btn-primary{\r\n    border-color: #2AB446;\r\n}\r\n\r\n.btn-primary:not(:disabled):not(.disabled).active, .btn-primary:not(:disabled):not(.disabled):active, .show>.btn-primary.dropdown-toggle{\r\n    color: white;\r\n    background-color: rgb(40, 145, 61);\r\n    border-color: rgb(40, 145, 61);\r\n}\r\n\r\n.btn-primary:not(:disabled):not(.disabled).active:focus, .btn-primary:not(:disabled):not(.disabled):active:focus, .show>.btn-primary.dropdown-toggle:focus{\r\n    box-shadow: 0 0 0 0.2rem rgb(40, 145, 61,.5);\r\n}\r\n\r\n.mybtn .btnText{\r\n    font-family: Work Sans;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    font-size: 17px;\r\n    line-height: 28px;\r\n    display: flex;\r\n    align-items: flex-end;\r\n    text-align: center;\r\n    letter-spacing: 0.2px;\r\n    color: #FFFFFF;\r\n\r\n}\r\n\r\n.BreakerWrapper{\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding-top: 3vh;\r\n}\r\n\r\n.BreakerWrapper .BreakerLineBox {\r\n    width: 10.2vw;\r\n    height: 2px;\r\n    background: #E7E9E7;\r\n}\r\n\r\n.BreakerWrapper .BreakerWord {\r\n    font-family: 'Open Sans', sans-serif;\r\n    font-size: 12px;\r\n    line-height: 16px;\r\n    display: flex;\r\n    align-items: flex-end;\r\n    text-align: center;\r\n    letter-spacing: 1px;\r\n\r\n    color: #939F95;\r\n\r\n}\r\n\r\n.btn{\r\n    padding: 0.8rem .75rem;\r\n}\r\n\r\n.mybtnSocial{\r\n    margin: 1.5rem 0;\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    background: #F6F8F7;\r\n    border: 1px solid #E9ECE9;\r\n    border-radius: 2px;\r\n    padding-left: 0;\r\n}\r\n\r\n.mybtnSocial .btnSocialText{\r\n    font-family: Work Sans;\r\n    font-style: normal;\r\n    font-weight: 800;\r\n    font-size: 17px;\r\n    line-height: 28px;\r\n    display: flex;\r\n    align-items: flex-end;\r\n    text-align: center;\r\n    letter-spacing: 0.2px;\r\n    color: #243327;\r\n    padding-left: 1rem\r\n}\r\n\r\n.Myshadow{\r\n    box-shadow: 0px 0px 8px -3px rgba(153,153,153,1);\r\n    transition: box-shadow 0.1s ease-in-out;\r\n  }\r\n\r\n.form-check{\r\n      display: flex;\r\n      flex-direction: row;\r\n      justify-content: space-between\r\n  }\r\n\r\n.form-check-input{\r\n    -webkit-appearance: checkbox;\r\n    width: 5%;\r\n    text-align: center;\r\n    border: 1px solid #D1D6D1;\r\n    border-radius: 3px;\r\n  }\r\n\r\n.form-check-label{\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: flex-start;\r\n    width: 33%;\r\n\r\n  }\r\n\r\n.form-check-label{\r\n    width: 50%;\r\n    font-family: Work Sans;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    font-size: 14px!important;\r\n    line-height: 28px!important;\r\n    display: flex!important;\r\n    align-items: flex-end!important;\r\n    color: #939F95!important;\r\n  }\r\n\r\n@media only screen and (max-width:500px) {\r\n    .Page .Component{\r\n        width: 90%;\r\n    }\r\n    .Page .Component .Navbar{\r\n        height: 50px!important;\r\n    }\r\n    .Page .Component .Navbar .Item .Text{\r\n        font-size: 14px!important;\r\n        white-space: nowrap;\r\n    }\r\n    .ComponentContent{\r\n        width: 90%!important;\r\n    }\r\n    .field{\r\n        height: 2.8rem;\r\n    }\r\n    input{\r\n        font-size: 12px!important;\r\n    }\r\n    label{\r\n        font-size: 10px!important;\r\n    }\r\n    .PassBtnText{\r\n        width: 60px!important;\r\n    }\r\n    .btn{\r\n        padding: 0.4rem 0.75rem!important;\r\n    }\r\n    .mybtn{\r\n        margin: 0.5rem 0!important;\r\n    }\r\n    .mybtn .btnText{\r\n        font-size: 14px!important;\r\n        white-space: nowrap;\r\n        padding-left: 0px!important;\r\n    }\r\n    .mybtnSocial{\r\n        margin: 0.5rem 0!important;\r\n    }\r\n    .mybtnSocial .btnSocialText{\r\n        font-size: 12px!important;\r\n        white-space: nowrap;\r\n        padding-left: 0px!important;\r\n    }\r\n    .BreakerWrapper .BreakerLineBox{\r\n        width: 20vw!important;\r\n    }\r\n    .TermsBox{\r\n        width: 88%;\r\n        font-size: 12px;\r\n        text-align: justify;\r\n    }\r\n    .alert-danger{\r\n        font-size: 10px;\r\n    }\r\n  }\r\n\r\n@media only screen and (min-width: 501px) and (max-width:900px) {\r\n    .Page .Component{\r\n        width: 60%;\r\n    }\r\n    .Page .Component .Navbar{\r\n        height: 60px!important;\r\n    }\r\n    .Page .Component .Navbar .Item .Text{\r\n        font-size: 14px!important;\r\n        white-space: nowrap;\r\n    }\r\n    .ComponentContent{\r\n        width: 90%!important;\r\n    }\r\n    .field{\r\n        height: 2.8rem;\r\n    }\r\n    input{\r\n        font-size: 12px!important;\r\n        padding-bottom: .3rem;\r\n    }\r\n    label{\r\n        font-size: 10px!important;\r\n    }\r\n    .PassBtnText{\r\n        width: 60px!important;\r\n    }\r\n    .btn{\r\n        padding: 0.4rem 0.75rem!important;\r\n    }\r\n    .mybtn{\r\n        margin: 0.5rem 0!important;\r\n    }\r\n    .mybtn .btnText{\r\n        font-size: 14px!important;\r\n        white-space: nowrap;\r\n        padding-left: 0px!important;\r\n    }\r\n    .mybtnSocial{\r\n        margin: 0.5rem 0!important;\r\n    }\r\n    .mybtnSocial .btnSocialText{\r\n        font-size: 12px!important;\r\n        white-space: nowrap;\r\n        padding-left: 0px!important;\r\n    }\r\n    .BreakerWrapper .BreakerLineBox{\r\n        width: 15vw!important;\r\n    }\r\n    .TermsBox{\r\n        width: 58%;\r\n        font-size: 12px;\r\n        text-align: justify;\r\n    }\r\n    .alert-danger{\r\n        font-size: 10px;\r\n    }\r\n  }\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsaURBQWlEO0lBQ2pELGtCQUFrQjtJQUNsQixvQkFBb0I7QUFDeEI7O0FBSUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUNBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixrREFBa0Q7SUFDbEQsY0FBYztJQUNkLFlBQVk7QUFDaEI7O0FBQ0E7SUFDSSw2QkFBNkI7SUFDN0IsMkJBQTJCO0FBQy9COztBQUNBO0lBQ0ksNkJBQTZCO0lBQzdCLDRCQUE0QjtBQUNoQzs7QUFDQTtJQUNJLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QixjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0k7QUFDSjs7QUFDQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFD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bkIsMkJBQTJCO0lBQy9CO0lBQ0E7UUFDSSxxQkFBcUI7SUFDekI7SUFDQTtRQUNJLFVBQVU7UUFDVixlQUFlO1FBQ2YsbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0VBQ0Y7O0FBRUE7SUFDRTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksc0JBQXNCO0lBQzFCO0lBQ0E7UUFDSSx5QkFBeUI7UUFDekIsbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxvQkFBb0I7SUFDeEI7SUFDQTtRQUNJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLHlCQUF5QjtRQUN6QixxQkFBcUI7SUFDekI7SUFDQTtRQUNJLHlCQUF5QjtJQUM3QjtJQUNBO1FBQ0kscUJBQXFCO0lBQ3pCO0lBQ0E7UUFDSSxpQ0FBaUM7SUFDckM7SUFDQTtRQUNJLDBCQUEwQjtJQUM5QjtJQUNBO1FBQ0kseUJBQXlCO1FBQ3pCLG1CQUFtQjtRQUNuQiwyQkFBMkI7SUFDL0I7SUFDQTtRQUNJLDBCQUEwQjtJQUM5QjtJQUNBO1FBQ0kseUJBQXlCO1FBQ3pCLG1CQUFtQjtRQUNuQiwyQkFBMkI7SUFDL0I7SUFDQTtRQUNJLHFCQUFxQjtJQUN6QjtJQUNBO1FBQ0ksVUFBVTtRQUNWLGVBQWU7UUFDZixtQkFBbUI7SUFDdkI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7RUFDRiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuUGFnZXtcclxuICAgIHotaW5kZXg6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyBcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBwYWRkaW5nOiA3LjIyJSAwO1xyXG59XHJcblxyXG4uUGFnZSAuQ29tcG9uZW50e1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICBib3gtc2hhZG93OiAwcHggOHB4IDE0cHggcmdiYSgwLCAwLCAwLCAwLjA3MjY5MDIpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7IFxyXG59XHJcblxyXG5cclxuXHJcbi5QYWdlIC5Db21wb25lbnQgLk5hdmJhcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5QYWdlIC5Db21wb25lbnQgLk5hdmJhciBhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZVxyXG59XHJcblxyXG4uUGFnZSAuQ29tcG9uZW50IC5OYXZiYXIgLkl0ZW0ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogI0YxRjNGMjtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDNweCAtNXB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG4gICAgY29sb3I6ICM5MzlGOTU7XHJcbiAgICBjdXJzb3I6IGhhbmQ7XHJcbn1cclxuLlBhZ2UgLkNvbXBvbmVudCAuTmF2YmFyIC5JdGVtOmZpcnN0LWNoaWxke1xyXG4gICAgYm9yZGVyLXRvcDogNHB4IHNvbGlkICNFN0U5RTc7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0cHg7XHJcbn1cclxuLlBhZ2UgLkNvbXBvbmVudCAuTmF2YmFyIC5JdGVtOmxhc3QtY2hpbGR7XHJcbiAgICBib3JkZXItdG9wOiA0cHggc29saWQgI0U3RTlFNztcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA0cHg7XHJcbn1cclxuLlBhZ2UgLkNvbXBvbmVudCAuTmF2YmFyIC5JdGVtIC5UZXh0e1xyXG4gICAgZm9udC1mYW1pbHk6ICdXb3JrIFNhbnMnO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjJweDtcclxufVxyXG5cclxuLlBhZ2UgLkNvbXBvbmVudCAuTmF2YmFyIC5JdGVtLkFjdGl2ZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGOyBcclxuICAgIGJvcmRlci10b3A6IDRweCBzb2xpZCAjMkFCNDQ2O1xyXG4gICAgY29sb3I6ICMyNDMzMjc7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4uVGVybXNCb3h7XHJcbiAgICBtYXJnaW4tdG9wOiAxLjJyZW1cclxufVxyXG4uVGVybXNCb3ggPiBhe1xyXG4gICAgY29sb3I6ICMyQUI0NDY7XHJcbn1cclxuXHJcbi5hbGVydHtcclxuICAgIG1hcmdpbi1ib3R0b206MHB4O1xyXG4gICAgcGFkZGluZzogMCAxcmVtO1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMHB4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDBweDtcclxufVxyXG4uYWxlcnQtZGFuZ2Vye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGNDYzQTtcclxuICAgIGZvbnQtZmFtaWx5OiAnV29yayBTYW5zJztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjhweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjsgXHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwcHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMHB4O1xyXG59XHJcbi5FcnJCb3gge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweCFpbXBvcnRhbnQ7XHJcbiAgICB0cmFuc2l0aW9uOiBib3JkZXIgMXMgZWFzZS1pbjtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbDpmb2N1c3tcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJveC1zaGFkb3c6IG5vbmVcclxufVxyXG4uaW5wdXQtZ3JvdXAtdGV4dHtcclxuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDBweDtcclxufVxyXG5cclxuLk15SW5wdXRCb3h7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM5MzlGOTU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbn1cclxuLmZpZWxkIHtcclxuICAgIHotaW5kZXg6IDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiBjb2x1bW4tcmV2ZXJzZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAzLjJyZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogLjNyZW07XHJcbiAgfVxyXG4gIFxyXG4gIGxhYmVsLCBpbnB1dCB7XHJcbiAgICB3aWR0aDogOTklO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XHJcbiAgICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcclxuICB9XHJcbiAgXHJcbiAgaW5wdXQge1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgY3Vyc29yOiB0ZXh0O1xyXG4gICAgZm9udC1mYW1pbHk6ICdXb3JrIFNhbnMnO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgIGNvbG9yOiAjMjQzMzI3O1xyXG4gIH1cclxuICBpbnB1dDotd2Via2l0LWF1dG9maWxsLGlucHV0Oi13ZWJraXQtYXV0b2ZpbGw6aG92ZXIsaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbDpmb2N1cyx0ZXh0YXJlYTotd2Via2l0LWF1dG9maWxsLHRleHRhcmVhOi13ZWJraXQtYXV0b2ZpbGw6aG92ZXIsdGV4dGFyZWE6LXdlYmtpdC1hdXRvZmlsbDpmb2N1cyxzZWxlY3Q6LXdlYmtpdC1hdXRvZmlsbCxzZWxlY3Q6LXdlYmtpdC1hdXRvZmlsbDpob3ZlcixzZWxlY3Q6LXdlYmtpdC1hdXRvZmlsbDpmb2N1cyB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6ICM0OTUwNTc7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwcHggMTAwMHB4ICNGRkZGRkYgaW5zZXQ7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0OmZvY3VzIHtcclxuICAgIG91dGxpbmU6IDA7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzY2NjtcclxuICB9XHJcbiAgXHJcbiAgbGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAuOGVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIGZvbnQtZmFtaWx5OiAnV29yayBTYW5zJztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjhweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICBjb2xvcjogIzkzOUY5NTtcclxuICB9XHJcbiAgXHJcbiAgaW5wdXQ6cGxhY2Vob2xkZXItc2hvd24gKyBsYWJlbCB7XHJcbiAgICBjdXJzb3I6IHRleHQ7XHJcbiAgICBtYXgtd2lkdGg6IDY2LjY2JTtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDEuN3JlbSkgc2NhbGUoMS4zKTtcclxuICB9XHJcbiAgXHJcbiAgOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2l0aW9uOiBpbmhlcml0O1xyXG4gIH1cclxuICBcclxuICBpbnB1dDpmb2N1czo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuICBcclxuICBpbnB1dDpub3QoOnBsYWNlaG9sZGVyLXNob3duKSArIGxhYmVsLFxyXG4gIGlucHV0OmZvY3VzICsgbGFiZWwge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMSk7XHJcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgICBwYWRkaW5nLXRvcDogMS4xcmVtIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4ubXlidG57XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMkFCNDQ2O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDFweCAwcHggIzJGOTM0MztcclxufVxyXG4uYnRuLXByaW1hcnl7XHJcbiAgICBib3JkZXItY29sb3I6ICMyQUI0NDY7XHJcbn1cclxuLmJ0bi1wcmltYXJ5Om5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpLmFjdGl2ZSwgLmJ0bi1wcmltYXJ5Om5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZSwgLnNob3c+LmJ0bi1wcmltYXJ5LmRyb3Bkb3duLXRvZ2dsZXtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0MCwgMTQ1LCA2MSk7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYig0MCwgMTQ1LCA2MSk7XHJcbn1cclxuLmJ0bi1wcmltYXJ5Om5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpLmFjdGl2ZTpmb2N1cywgLmJ0bi1wcmltYXJ5Om5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZTpmb2N1cywgLnNob3c+LmJ0bi1wcmltYXJ5LmRyb3Bkb3duLXRvZ2dsZTpmb2N1c3tcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2IoNDAsIDE0NSwgNjEsLjUpO1xyXG59XHJcblxyXG4ubXlidG4gLmJ0blRleHR7XHJcbiAgICBmb250LWZhbWlseTogV29yayBTYW5zO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjhweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuXHJcbn1cclxuXHJcbi5CcmVha2VyV3JhcHBlcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogM3ZoO1xyXG59XHJcblxyXG4uQnJlYWtlcldyYXBwZXIgLkJyZWFrZXJMaW5lQm94IHtcclxuICAgIHdpZHRoOiAxMC4ydnc7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxuICAgIGJhY2tncm91bmQ6ICNFN0U5RTc7XHJcbn1cclxuXHJcbi5CcmVha2VyV3JhcHBlciAuQnJlYWtlcldvcmQge1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuXHJcbiAgICBjb2xvcjogIzkzOUY5NTtcclxuXHJcbn1cclxuLmJ0bntcclxuICAgIHBhZGRpbmc6IDAuOHJlbSAuNzVyZW07XHJcbn1cclxuLm15YnRuU29jaWFse1xyXG4gICAgbWFyZ2luOiAxLjVyZW0gMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjZGOEY3O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0U5RUNFOTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIHBhZGRpbmctbGVmdDogMDtcclxufVxyXG5cclxuLm15YnRuU29jaWFsIC5idG5Tb2NpYWxUZXh0e1xyXG4gICAgZm9udC1mYW1pbHk6IFdvcmsgU2FucztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjhweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XHJcbiAgICBjb2xvcjogIzI0MzMyNztcclxuICAgIHBhZGRpbmctbGVmdDogMXJlbVxyXG59XHJcblxyXG4uTXlzaGFkb3d7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggOHB4IC0zcHggcmdiYSgxNTMsMTUzLDE1MywxKTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCA4cHggLTNweCByZ2JhKDE1MywxNTMsMTUzLDEpO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA4cHggLTNweCByZ2JhKDE1MywxNTMsMTUzLDEpO1xyXG4gICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjFzIGVhc2UtaW4tb3V0O1xyXG4gIH1cclxuXHJcbiAgLmZvcm0tY2hlY2t7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlblxyXG4gIH1cclxuICAuZm9ybS1jaGVjay1pbnB1dHtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogY2hlY2tib3g7XHJcbiAgICB3aWR0aDogNSU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRDFENkQxO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIH1cclxuICAuZm9ybS1jaGVjay1sYWJlbHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIHdpZHRoOiAzMyU7XHJcblxyXG4gIH1cclxuXHJcbiAgLmZvcm0tY2hlY2stbGFiZWx7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgZm9udC1mYW1pbHk6IFdvcmsgU2FucztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDE0cHghaW1wb3J0YW50O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI4cHghaW1wb3J0YW50O1xyXG4gICAgZGlzcGxheTogZmxleCFpbXBvcnRhbnQ7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICM5MzlGOTUhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo1MDBweCkge1xyXG4gICAgLlBhZ2UgLkNvbXBvbmVudHtcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgfVxyXG4gICAgLlBhZ2UgLkNvbXBvbmVudCAuTmF2YmFye1xyXG4gICAgICAgIGhlaWdodDogNTBweCFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuUGFnZSAuQ29tcG9uZW50IC5OYXZiYXIgLkl0ZW0gLlRleHR7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4IWltcG9ydGFudDtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgfVxyXG4gICAgLkNvbXBvbmVudENvbnRlbnR7XHJcbiAgICAgICAgd2lkdGg6IDkwJSFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuZmllbGR7XHJcbiAgICAgICAgaGVpZ2h0OiAyLjhyZW07XHJcbiAgICB9XHJcbiAgICBpbnB1dHtcclxuICAgICAgICBmb250LXNpemU6IDEycHghaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgbGFiZWx7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMHB4IWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5QYXNzQnRuVGV4dHtcclxuICAgICAgICB3aWR0aDogNjBweCFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuYnRue1xyXG4gICAgICAgIHBhZGRpbmc6IDAuNHJlbSAwLjc1cmVtIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5teWJ0bntcclxuICAgICAgICBtYXJnaW46IDAuNXJlbSAwIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5teWJ0biAuYnRuVGV4dHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHghaW1wb3J0YW50O1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwcHghaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLm15YnRuU29jaWFse1xyXG4gICAgICAgIG1hcmdpbjogMC41cmVtIDAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLm15YnRuU29jaWFsIC5idG5Tb2NpYWxUZXh0e1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweCFpbXBvcnRhbnQ7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDBweCFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuQnJlYWtlcldyYXBwZXIgLkJyZWFrZXJMaW5lQm94e1xyXG4gICAgICAgIHdpZHRoOiAyMHZ3IWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5UZXJtc0JveHtcclxuICAgICAgICB3aWR0aDogODglO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgfVxyXG4gICAgLmFsZXJ0LWRhbmdlcntcclxuICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDUwMXB4KSBhbmQgKG1heC13aWR0aDo5MDBweCkge1xyXG4gICAgLlBhZ2UgLkNvbXBvbmVudHtcclxuICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgfVxyXG4gICAgLlBhZ2UgLkNvbXBvbmVudCAuTmF2YmFye1xyXG4gICAgICAgIGhlaWdodDogNjBweCFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuUGFnZSAuQ29tcG9uZW50IC5OYXZiYXIgLkl0ZW0gLlRleHR7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4IWltcG9ydGFudDtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgfVxyXG4gICAgLkNvbXBvbmVudENvbnRlbnR7XHJcbiAgICAgICAgd2lkdGg6IDkwJSFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuZmllbGR7XHJcbiAgICAgICAgaGVpZ2h0OiAyLjhyZW07XHJcbiAgICB9XHJcbiAgICBpbnB1dHtcclxuICAgICAgICBmb250LXNpemU6IDEycHghaW1wb3J0YW50O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAuM3JlbTtcclxuICAgIH1cclxuICAgIGxhYmVse1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweCFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuUGFzc0J0blRleHR7XHJcbiAgICAgICAgd2lkdGg6IDYwcHghaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmJ0bntcclxuICAgICAgICBwYWRkaW5nOiAwLjRyZW0gMC43NXJlbSFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAubXlidG57XHJcbiAgICAgICAgbWFyZ2luOiAwLjVyZW0gMCFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAubXlidG4gLmJ0blRleHR7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4IWltcG9ydGFudDtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMHB4IWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5teWJ0blNvY2lhbHtcclxuICAgICAgICBtYXJnaW46IDAuNXJlbSAwIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5teWJ0blNvY2lhbCAuYnRuU29jaWFsVGV4dHtcclxuICAgICAgICBmb250LXNpemU6IDEycHghaW1wb3J0YW50O1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwcHghaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLkJyZWFrZXJXcmFwcGVyIC5CcmVha2VyTGluZUJveHtcclxuICAgICAgICB3aWR0aDogMTV2dyFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuVGVybXNCb3h7XHJcbiAgICAgICAgd2lkdGg6IDU4JTtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgIH1cclxuICAgIC5hbGVydC1kYW5nZXJ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"Page\">\n    <div class=\"Component\">\n      <div class=\"Navbar\">\n          <a routerLink=\"/register\" class=\"Item\">\n            <div class=\"Text\">\n                Create account\n            </div>\n          </a>\n          <a routerLink=\"/login\" class=\"Item Active\">\n            <div class=\"Text\">\n                Log In\n            </div>\n          </a>\n      </div>\n      <div class=\"ComponentContent\" style=\"width:80%\">\n        <form>\n\n          <div class=\"form-group input-group mt-3\">\n            <div class=\"MyInputBox\" [ngClass]=\"{'ErrBox':UserName.touched && !UserName.valid}\">\n              <div style=\"display:flex;flex-direction:row\">\n                <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\">\n                      <img src=\"../../assets/username.svg\" alt=\"\">\n                    </span>\n                </div>\n                <div class=\"field\">\n                  <input required ngModel name=\"UserName\" #UserName=\"ngModel\"  id=\"UserName\" type=\"text\" class=\"form-control\" placeholder=\"Your username or email\">\n                  <label for=\"UserName\">Your username or email</label>\n                </div>\n              </div>  \n              <div class=\"alert alert-danger\" *ngIf=\"UserName.touched && !UserName.valid\" >Username or email is required</div>\n            </div>\n          </div>\n\n          <div class=\"form-group input-group mt-3\">\n            <div class=\"MyInputBox\" [ngClass]=\"{'ErrBox':Password.touched && !Password.valid}\">\n              <div style=\"display:flex;flex-direction:row;overflow: hidden;\">\n                <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\">\n                      <img src=\"../../assets/password.svg\" alt=\"\">\n                    </span>\n                </div>\n                  <div class=\"field\">\n                      <input appPassword required ngModel name=\"Password\" #Password=\"ngModel\"  id=\"Password\" type=\"password\" class=\"form-control\"  placeholder=\"Your password\">\n                      <label for=\"Password\">Your password</label>\n                  </div>\n                  \n              </div>  \n              <div class=\"alert alert-danger\" *ngIf=\"Password.touched && !Password.valid\" >\n                  <div *ngIf=\"Password.errors.required\">Password is required! </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-check\">\n            <input type=\"checkbox\" class=\"form-check-input\" id=\"Check1\">\n            <label class=\"MyCheckboxLabel form-check-label\" for=\"Check1\" style=\"padding-top: 0!important;\">\n              Remember password\n            </label>\n            <div >\n              <a href=\"#\" style=\"text-decoration:none;color: #2AB446;width: 33%;\">Forgot password?</a>\n            </div>\n          </div>\n\n          <button [disabled]=\"!UserName.valid || !Password.valid || loading\" class=\"mybtn btn btn-primary\">\n            <div class=\"btnText\">Log in</div>\n          </button> \n\n          \n        </form>\n\n        <div class=\"BreakerWrapper\">\n          <div class=\"BreakerLineBox\"></div>\n          <div class=\"BreakerWord\"> OR CONNECT WITH </div>\n          <div class=\"BreakerLineBox\"></div>\n        </div>\n\n        <button type=\"button\" class=\"mybtnSocial btn btn-light mt-4\">\n          <span class=\"input-group-text\" style=\"background:transparent; border:none\" >\n            <img src=\"../../assets/FB-icon.svg\" alt=\"\">\n          </span>\n          <div class=\"btnSocialText\">Register with Facebook</div>\n        </button>\n        <button type=\"button\" class=\"mybtnSocial btn btn-light\">\n          <span class=\"input-group-text\" style=\"background:transparent; border:none\">\n            <img src=\"../../assets/G-icon.svg\" alt=\"\"/>\n          </span>\n          <div class=\"btnSocialText\">Register with Gmail</div>\n        </button>\n      </div>\n    </div>\n    <div class=\"TermsBox\">\n        By signing up you agree to our <a href=\"#\"> Terms of Service </a> and <a href=\"#\"> Privacy Policy </a>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/ */ "./src/app/_services/index.ts");






var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, route, router, authenticationService, alertService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.alertService = alertService;
        this.loading = false;
        this.submitted = false;
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/']);
        }
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            UserName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            Password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    Object.defineProperty(LoginComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.loginForm.controls; },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        this.loading = true;
        this.authenticationService.login(this.f.username.value, this.f.password.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function (data) {
            _this.router.navigate([_this.returnUrl]);
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services___WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"],
            _services___WEBPACK_IMPORTED_MODULE_5__["AlertService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Maros\Desktop\SinglePage\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map