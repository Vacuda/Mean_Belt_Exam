(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"container\">\n\n    <h2>Pet Shelter</h2>\n\n    <div class=\"division\"></div>\n\n    <router-outlet></router-outlet>\n\n</div>\n\n\n<!-- \n\n    <button [routerLink]=\"['/alpha']\">Load Alpha</button>\n    <a [routerLink] = \"['details', 5]\"> Go to /products/details/5 </a> \n\n\n    <app-show *ngIf=\"onetask\" [taskToShow]=\"onetask\"></app-show>\n\n    <div *ngIf=\"errors\">\n        <h4>Errors:</h4>\n        <ul>\n            <div *ngFor=\"let item of errors\">\n                <li class=\"errors\">{{item.message}}</li>\n            </div>\n        </ul>\n\n    </div>\n\n\n\n\n    <div *ngIf=\"createtask\">\n        <form (submit)=\"createTask()\">\n            <div class=\"form-group\">\n                <label for=\"title\">Task Name:</label>\n                <input name=\"createtask.title\" [(ngModel)]=\"createtask.title\" class=\"form-control\" id=\"title\" placeholder=\"---\">\n            </div>\n            <div class=\"form-group\">\n                <label for=\"description\">Description:</label>\n                <textarea name=\"createtask.description\" [(ngModel)]=\"createtask.description\" class=\"form-control\" id=\"description\" rows=\"3\" placeholder=\"---\"></textarea>\n            </div>\n\n            <button class=\"btn btn-warning\" type=\"submit\">Create</button>\n        </form>\n    </div>\n\n    <div *ngIf=\"updatetask\">\n        <form (submit)=\"updateTask(onetask._id)\">\n            <div class=\"form-group\">\n                <label for=\"title\">Task Name:</label>\n                <input name=\"updatetask.title\" [(ngModel)]=\"updatetask.title\" class=\"form-control\" id=\"title\" value=\"updatetask.title\">\n            </div>\n            <div class=\"form-group\">\n                <label for=\"description\">Description:</label>\n                <textarea name=\"updatetask.description\" [(ngModel)]=\"updatetask.description\" class=\"form-control\" id=\"description\" rows=\"3\" value=\"updatetask.description\"></textarea>\n            </div>\n\n            <button class=\"btn btn-warning\" type=\"submit\">Submit Edits</button>\n        </form>\n    </div>\n\n    <div class=\"division\"></div>\n\n    <button class=\"btn btn-primary\" (click)=\"getTasks()\">Click for Tasks</button>\n\n    <div class=\"division\"></div>\n\n    <div class=\"centered\" *ngFor=\"let task of tasks\">\n\n        <h2><a id=\"clickable\" (click)=\"getOneTask(task._id)\">{{task.title}}</a></h2>\n        <div class=\"division\"></div>\n    </div> -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/edit.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit/edit.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<button [routerLink]=\"['/pets']\" class=\"btn btn-success btn-top\">Home</button>\n\n<h4>Edit this pet</h4>\n\n<div *ngIf=\"errors\">\n    <h6>Errors:</h6>\n    <ul>\n        <div *ngFor=\"let item of errors\">\n            <li class=\"errors\">{{item.message}}</li>\n        </div>\n    </ul>\n\n</div>\n\n<form (submit)=\"updatePet()\">\n    <div class=\"form-group\">\n        <label for=\"name\">Pet Name:</label>\n        <input name=\"updatepet.name\" [(ngModel)]=\"updatepet.name\" class=\"form-control\" id=\"name\" placeholder=\"---\">\n    </div>\n    <div class=\"form-group\">\n        <label for=\"type\">Pet Type:</label>\n        <input name=\"updatepet.type\" [(ngModel)]=\"updatepet.type\" class=\"form-control\" id=\"type\" placeholder=\"---\">\n    </div>\n    <div class=\"form-group\">\n        <label for=\"description\">Description:</label>\n        <textarea name=\"updatepet.description\" [(ngModel)]=\"updatepet.description\" class=\"form-control\" id=\"description\" rows=\"3\" placeholder=\"---\"></textarea>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"skill_1\">Skill 1</label>\n        <input name=\"updatepet.skill_1\" [(ngModel)]=\"updatepet.skill_1\" class=\"form-control\" id=\"skill_1\" placeholder=\"---\">\n    </div>\n    <div class=\"form-group\">\n        <label for=\"skill_2\">Skill 2</label>\n        <input name=\"updatepet.skill_2\" [(ngModel)]=\"updatepet.skill_2\" class=\"form-control\" id=\"skill_2\" placeholder=\"---\">\n    </div>\n    <div class=\"form-group\">\n        <label for=\"skill_3\">Skill 3</label>\n        <input name=\"updatepet.skill_3\" [(ngModel)]=\"updatepet.skill_3\" class=\"form-control\" id=\"skill_3\" placeholder=\"---\">\n    </div>\n\n    <button class=\"btn btn-warning\" type=\"submit\">Update Pet</button>\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/list/list.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/list/list.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button [routerLink]=\"['/pets/new']\" class=\"btn btn-success btn-top\">Add a Pet</button>\n\n<table class=\"table table-dark table-striped\">\n    <thead>\n        <tr>\n            <th scope=\"col\">Pet Name</th>\n            <th scope=\"col\">Pet Type</th>\n            <th scope=\"col\">Details</th>\n            <th scope=\"col\">Edit</th>\n        </tr>\n    </thead>\n    <tbody>\n            <tr *ngFor=\"let pet of allpets\">\n                <td>{{pet.name}}</td>\n                <td>{{pet.type}}</td>\n                <td>\n                    <button [routerLink]=\"['/pets/show', pet._id]\" class=\"btn btn-success\">Details</button>\n                </td>\n                <td>\n                    <button [routerLink]=\"['/pets/edit/', pet._id]\" class=\"btn btn-warning\">Edit</button>\n                </td>\n            </tr>\n        \n\n        \n    </tbody>\n</table>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/new/new.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/new/new.component.html ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<button [routerLink]=\"['/pets']\" class=\"btn btn-success btn-top\">Home</button>\n\n<h4>Know of a pet needing a home?</h4>\n\n<div *ngIf=\"errors\">\n    <h6>Errors:</h6>\n    <ul>\n        <div *ngFor=\"let item of errors\">\n            <li class=\"errors\">{{item.message}}</li>\n        </div>\n    </ul>\n\n</div>\n\n<form (submit)=\"createPet()\">\n    <div class=\"form-group\">\n        <label for=\"name\">Pet Name:</label>\n        <input name=\"createpet.name\" [(ngModel)]=\"createpet.name\" class=\"form-control\" id=\"pet\" placeholder=\"---\">\n    </div>\n    <div class=\"form-group\">\n        <label for=\"type\">Pet Type:</label>\n        <input name=\"createpet.type\" [(ngModel)]=\"createpet.type\" class=\"form-control\" id=\"type\" placeholder=\"---\">\n    </div>\n    <div class=\"form-group\">\n        <label for=\"description\">Description:</label>\n        <textarea name=\"createpet.description\" [(ngModel)]=\"createpet.description\" class=\"form-control\" id=\"description\" rows=\"3\" placeholder=\"---\"></textarea>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"skill_1\">Skill 1</label>\n        <input name=\"createpet.skill_1\" [(ngModel)]=\"createpet.skill_1\" class=\"form-control\" id=\"skill_1\" placeholder=\"---\">\n    </div>\n    <div class=\"form-group\">\n        <label for=\"skill_2\">Skill 2</label>\n        <input name=\"createpet.skill_2\" [(ngModel)]=\"createpet.skill_2\" class=\"form-control\" id=\"skill_2\" placeholder=\"---\">\n    </div>\n    <div class=\"form-group\">\n        <label for=\"skill_3\">Skill 3</label>\n        <input name=\"createpet.skill_3\" [(ngModel)]=\"createpet.skill_3\" class=\"form-control\" id=\"skill_3\" placeholder=\"---\">\n    </div>\n\n    <button class=\"btn btn-warning\" type=\"submit\">Create Pet Listing</button>\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>page-not-found</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/show/show.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/show/show.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button [routerLink]=\"['/pets']\" class=\"btn btn-success btn-top\">Home</button>\n\n<h4>Details about {{onepet.name}}</h4>\n\n<div class=\"aroundtable\">\n    <table>\n        <tr>\n            <td class=\"title\">Pet type:</td>\n            <td>{{onepet.type}}</td>\n        </tr>\n        <tr>\n            <td class=\"title\">Pet Description:</td>\n            <td>{{onepet.description}}</td>\n        </tr>\n        <tr>\n            <td class=\"title\">Skills:</td>\n            <td></td>\n        </tr>\n        <tr>\n            <td class=\"title\"></td>\n            <td>\n                <ul>\n                    <div *ngIf=\"onepet.skill_1\">\n                        <li>{{onepet.skill_1}}</li>\n                    </div>\n                    <div *ngIf=\"onepet.skill_2\">\n                        <li>{{onepet.skill_2}}</li>\n                    </div>\n                    <div *ngIf=\"onepet.skill_3\">\n                        <li>{{onepet.skill_3}}</li>\n                    </div>\n                </ul>\n            </td>\n        </tr>\n        <tr>\n            <td class=\"title\">Likes:</td>\n            <td>{{onepet.likes}}</td>\n        </tr>\n    </table>\n</div>\n\n<div *ngIf=\"likebutton\">\n    <button (click)=\"likePet()\" class=\"btn btn-warning\">Like This Pet!</button>\n</div>\n<!-- <div *ngIf=\"likebutton==false\">\n    <button class=\"btn btn-warning\">barnacle</button>\n</div> -->\n<!-- <button (click)=\"likePet()\" class=\"btn btn-warning\">Like This Pet!</button> -->\n<button (click)=\"adoptPet()\" class=\"btn btn-danger btn-delete\">Adopt This Pet!  (destroy this pet)</button>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


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
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");
/* harmony import */ var _new_new_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./new/new.component */ "./src/app/new/new.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list/list.component */ "./src/app/list/list.component.ts");
/* harmony import */ var _show_show_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./show/show.component */ "./src/app/show/show.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");








const routes = [
    { path: 'pets', component: _list_list_component__WEBPACK_IMPORTED_MODULE_3__["ListComponent"] },
    { path: 'pets/new', component: _new_new_component__WEBPACK_IMPORTED_MODULE_2__["NewComponent"] },
    { path: 'pets/edit/:id', component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_1__["EditComponent"] },
    { path: 'pets/show/:id', component: _show_show_component__WEBPACK_IMPORTED_MODULE_4__["ShowComponent"] },
    { path: '', pathMatch: 'full', redirectTo: '/pets' },
    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__["PageNotFoundComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"]]
    })
], AppRoutingModule);

// const routes: Routes = [
//     { path: 'product',component: ProductComponent, children: [
//         { path: 'details/:id', component: ProductDetailComponent },
//     ]},
//     { path: 'review',component: ReviewComponent, children: [
//         { path: 'details/:id', component: ReviewDetailComponent },
//     ]},
//     { path: '', pathMatch: 'full', redirectTo: '/product' },
// ];


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n* {\r\n    margin: 0;\r\n    border: 0;\r\n    box-sizing: border-box;\r\n    vertical-align: top;\r\n    /* outline: 1px dotted red; */\r\n    color: black;\r\n    font-family: Verdana, Geneva, Tahoma, sans-serif\r\n}\r\n\r\n.container {\r\n    width: 970px;\r\n    min-height: 800px;\r\n    margin: 0px auto;\r\n    padding: 60px;\r\n    font-size: 15px;\r\n    background-color: rgb(160, 163, 154);\r\n}\r\n\r\n.division {\r\n    background-color: rgb(49, 72, 173);\r\n    height: 2px;\r\n    width: 80%;\r\n    margin: 20px auto 20px auto;\r\n    box-shadow: 0px 0px 3px darkblue;\r\n    display: block;\r\n}\r\n\r\nbutton {\r\n    margin: 0px auto;\r\n    display: block;\r\n}\r\n\r\n#clickable:hover {\r\n    color: #007bff;\r\n    text-decoration: underline;\r\n}\r\n\r\n.btn-warning {\r\n    margin-top: 15px;\r\n}\r\n\r\n.errors {\r\n    color: red;\r\n}\r\n\r\nh2 {\r\n    text-align: center;\r\n    margin-top: 0px;\r\n}\r\n\r\nh1 {\r\n    text-align: center;\r\n    margin-top: 0px;\r\n}\r\n\r\nspan {\r\n    color: rgb(161, 0, 0);\r\n    display: block;\r\n}\r\n\r\nheader p {\r\n    margin-bottom: 0px;\r\n    font-size: 10px;\r\n    text-align: end;\r\n}\r\n\r\nheader a {\r\n    font-size: 18px;\r\n    display: block;\r\n    text-align: end;\r\n}\r\n\r\n.th-big {\r\n    width: 40%;\r\n    background-color: rgb(82, 82, 82);\r\n}\r\n\r\n.th-medium {\r\n    width: 20%;\r\n    background-color: rgb(82, 82, 82);\r\n}\r\n\r\n.th-small {\r\n    width: 10%;\r\n    text-align: center;\r\n    background-color: rgb(82, 82, 82);\r\n}\r\n\r\n.centered {\r\n    text-align: center;\r\n}\r\n\r\ntr th.bordered {\r\n    border: 1px solid black;\r\n}\r\n\r\n.btn-delete {\r\n    width: 30px;\r\n    height: 20px;\r\n    font-size: 10px;\r\n    text-align: center;\r\n    padding: 0px;\r\n    line-height: 20px;\r\n}\r\n\r\n.btn-edit {\r\n    width: 60px;\r\n    height: 20px;\r\n    font-size: 10px;\r\n    text-align: center;\r\n    padding: 0px;\r\n    margin: 10px auto;\r\n    line-height: 20px;\r\n}\r\n\r\n.btn-complete {\r\n    text-align: center;\r\n    display: block;\r\n    width: 200px;\r\n    height: 40px;\r\n    line-height: 23px;\r\n    background-color: rgb(82, 82, 82);\r\n    font-weight: bold;\r\n    color: black;\r\n    box-shadow: 2px 2px 3px black;\r\n    /* margin-top: 20px; */\r\n}\r\n\r\n.btn-add:hover{\r\n    color: white;\r\n}\r\n\r\ntable {\r\n    overflow: hidden;\r\n}\r\n\r\n.table-backplate {\r\n    height: 400px;\r\n    display: block;\r\n    background-color: whitesmoke;\r\n}\r\n\r\n.length {\r\n    width: 300px;\r\n}\r\n\r\n/* EXAM SPECIFIC  */\r\n\r\n.squeeze {\r\n    width: 80%;\r\n    margin: 0px auto;\r\n\r\n}\r\n\r\n.midbutton {\r\n    margin: 0px auto;\r\n    display: block;\r\n    width: 200px;\r\n}\r\n\r\n.desc {\r\n    margin-left: 200px;\r\n    margin-right: 200px;\r\n}\r\n\r\n@media only screen and (max-width: 480px) {\r\n\r\n \r\n    \r\n}\r\n\r\n@media only screen and (min-width: 481px) {\r\n\r\n\r\n\r\n}\r\n\r\n@media only screen and (min-width: 1024px) {\r\n\r\n\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtJQUNJLFNBQVM7SUFDVCxTQUFTO0lBQ1Qsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaO0FBQ0o7O0FBRUE7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsZUFBZTtJQUNmLG9DQUFvQztBQUN4Qzs7QUFJQTtJQUNJLGtDQUFrQztJQUNsQyxXQUFXO0lBQ1gsVUFBVTtJQUNWLDJCQUEyQjtJQUMzQixnQ0FBZ0M7SUFDaEMsY0FBYztBQUNsQjs7QUFHQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztJQUNkLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFHQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUtBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsWUFBWTtJQUNaLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsaUNBQWlDO0lBQ2pDLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osNkJBQTZCO0lBQzdCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsY0FBYztJQUNkLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBR0EsbUJBQW1COztBQUduQjtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7O0FBRXBCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUErQkE7Ozs7QUFJQTs7QUFFQTs7OztBQUlBOztBQUVBOzs7O0FBSUEiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuKiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgIC8qIG91dGxpbmU6IDFweCBkb3R0ZWQgcmVkOyAqL1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmXHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDk3MHB4O1xyXG4gICAgbWluLWhlaWdodDogODAwcHg7XHJcbiAgICBtYXJnaW46IDBweCBhdXRvO1xyXG4gICAgcGFkZGluZzogNjBweDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjAsIDE2MywgMTU0KTtcclxufVxyXG5cclxuXHJcblxyXG4uZGl2aXNpb24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ5LCA3MiwgMTczKTtcclxuICAgIGhlaWdodDogMnB4O1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1hcmdpbjogMjBweCBhdXRvIDIwcHggYXV0bztcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggM3B4IGRhcmtibHVlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcblxyXG5idXR0b24ge1xyXG4gICAgbWFyZ2luOiAwcHggYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4jY2xpY2thYmxlOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjMDA3YmZmO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuXHJcbi5idG4td2FybmluZyB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG59XHJcblxyXG4uZXJyb3JzIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcblxyXG5oMiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmgxIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxufVxyXG5cclxuc3BhbiB7XHJcbiAgICBjb2xvcjogcmdiKDE2MSwgMCwgMCk7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuaGVhZGVyIHAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogZW5kO1xyXG59XHJcblxyXG5oZWFkZXIgYSB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtYWxpZ246IGVuZDtcclxufVxyXG5cclxuLnRoLWJpZyB7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDgyLCA4MiwgODIpO1xyXG59XHJcblxyXG4udGgtbWVkaXVtIHtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODIsIDgyLCA4Mik7XHJcbn1cclxuXHJcbi50aC1zbWFsbCB7XHJcbiAgICB3aWR0aDogMTAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDgyLCA4MiwgODIpO1xyXG59XHJcblxyXG4uY2VudGVyZWQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG50ciB0aC5ib3JkZXJlZCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxufVxyXG5cclxuLmJ0bi1kZWxldGUge1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxufVxyXG5cclxuLmJ0bi1lZGl0IHtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxufVxyXG5cclxuLmJ0bi1jb21wbGV0ZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyM3B4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDgyLCA4MiwgODIpO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDNweCBibGFjaztcclxuICAgIC8qIG1hcmdpbi10b3A6IDIwcHg7ICovXHJcbn1cclxuXHJcbi5idG4tYWRkOmhvdmVye1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4udGFibGUtYmFja3BsYXRlIHtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbn1cclxuXHJcbi5sZW5ndGgge1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG59XHJcblxyXG5cclxuLyogRVhBTSBTUEVDSUZJQyAgKi9cclxuXHJcblxyXG4uc3F1ZWV6ZSB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luOiAwcHggYXV0bztcclxuXHJcbn1cclxuXHJcbi5taWRidXR0b24ge1xyXG4gICAgbWFyZ2luOiAwcHggYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG59XHJcblxyXG4uZGVzYyB7XHJcbiAgICBtYXJnaW4tbGVmdDogMjAwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwMHB4O1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuXHJcbiBcclxuICAgIFxyXG59XHJcbiAgICBcclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0ODFweCkge1xyXG5cclxuXHJcblxyXG59XHJcbiAgICBcclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuXHJcblxyXG5cclxufSJdfQ== */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task.service */ "./src/app/task.service.ts");



let AppComponent = class AppComponent {
    // tasks:any;
    // onetask:any;
    // createtask:any;
    // updatetask:any;
    // @Input() taskToShow:any;
    // errors:any;
    constructor(_httpService) {
        this._httpService = _httpService;
    }
    ngOnInit() {
    }
};
AppComponent.ctorParameters = () => [
    { type: _task_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);

//this._router.navigate(['authors/all'])
// private _route: ActivatedRoute,
// private _router: Router
//import { ActivatedRoute, Params, Router } from '@angular/router';
// this._route.params.subscribe(params => {
//             console.log(params);
//             this.id=params.id;
//         })
// getTasks(){
//     this.updatetask = null;
//     this.createtask = {
//         title: "",
//         description: ""
//     }
//     let observable = this._httpService.getTasks()
//     observable.subscribe(data => {
//         this.tasks = data['results'];
//         this.onetask = null;
//     });
// }
// getOneTask(id:number){
//     this.errors = null;
//     let observable = this._httpService.getOneTask(id)
//     observable.subscribe(data => {
//         this.tasks = null;
//         this.onetask = data['results'];
//     });
// }
// createTask(){
//     this.errors = null;
//     let observable = this._httpService.createTask(this.createtask)
//     observable.subscribe(data => {
//         if(data["results"]){
//             this.getTasks();
//             this.createtask = {
//                 title: "",
//                 description: ""
//             }
//         }
//         else if(data["errors"]){
//             this.errors = [];
//             for(let item in data["errors"]){
//                 this.errors.push(data["errors"][item]);
//             }
//         }
//     });       
// }
// deleteTask(id:number){
//     //resets
//     this.errors = null;
//     this.updatetask = null;
//     this.createtask = {
//         title: "",
//         description: ""
//     }
//     let observable = this._httpService.deleteTask(id)
//     observable.subscribe(data => {
//         this.getTasks();
//         this.onetask = null;
//     });
// }
// markComplete(id:number){
//     //resets
//     this.errors = null;
//     let observable = this._httpService.markComplete(id)
//     observable.subscribe(data => {
//         this.getOneTask(id);
//     });
// }
// editTask(){
//     console.log("hereh;rake;jrakj;er")
//     //resets
//     this.createtask = null;
//     this.errors = null;
//     this.updatetask = {
//         title: this.onetask.title,
//         description: this.onetask.description
//     }
// }
// updateTask(id:number){
//     console.log(id)
//     let observable = this._httpService.updateTask(id, this.updatetask)
//     observable.subscribe(data => {
//         if(data["results"]){
//             this.createtask = {
//             title: "",
//             description: ""
//             }
//             this.getOneTask(id);
//             this.updatetask = null;
//         }
//         else if(data["errors"]){
//             this.errors = [];
//             for(let item in data["errors"]){
//                 this.errors.push(data["errors"][item]);
//             }
//         }
//     });
// }


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _task_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./task.service */ "./src/app/task.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _show_show_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./show/show.component */ "./src/app/show/show.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");
/* harmony import */ var _new_new_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./new/new.component */ "./src/app/new/new.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./list/list.component */ "./src/app/list/list.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");













let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _show_show_component__WEBPACK_IMPORTED_MODULE_8__["ShowComponent"],
            _edit_edit_component__WEBPACK_IMPORTED_MODULE_9__["EditComponent"],
            _new_new_component__WEBPACK_IMPORTED_MODULE_10__["NewComponent"],
            _list_list_component__WEBPACK_IMPORTED_MODULE_11__["ListComponent"],
            _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_12__["PageNotFoundComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]
        ],
        providers: [_task_service__WEBPACK_IMPORTED_MODULE_6__["TaskService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/edit/edit.component.css":
/*!*****************************************!*\
  !*** ./src/app/edit/edit.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n* {\r\n    margin: 0;\r\n    border: 0;\r\n    box-sizing: border-box;\r\n    vertical-align: top;\r\n    /* outline: 1px dotted red; */\r\n    color: black;\r\n    font-family: Verdana, Geneva, Tahoma, sans-serif\r\n}\r\n\r\n.container {\r\n    width: 970px;\r\n    min-height: 800px;\r\n    margin: 0px auto;\r\n    padding: 60px;\r\n    font-size: 15px;\r\n    background-color: rgb(160, 163, 154);\r\n}\r\n\r\n.division {\r\n    background-color: rgb(49, 72, 173);\r\n    height: 2px;\r\n    width: 80%;\r\n    margin: 20px auto 20px auto;\r\n    box-shadow: 0px 0px 3px darkblue;\r\n    display: block;\r\n}\r\n\r\nbutton {\r\n    margin: 0px auto;\r\n    display: block;\r\n}\r\n\r\n#clickable:hover {\r\n    color: #007bff;\r\n    text-decoration: underline;\r\n}\r\n\r\n.btn-warning {\r\n    margin-top: 15px;\r\n}\r\n\r\n.errors {\r\n    color: red;\r\n}\r\n\r\nh2 {\r\n    text-align: center;\r\n    margin-top: 0px;\r\n}\r\n\r\nh4 {\r\n    margin-bottom: 20px;\r\n}\r\n\r\nlabel {\r\n    font-size: 25px;\r\n    color: darkblue;\r\n}\r\n\r\ninput, textarea {\r\n    width: 300px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.btn-top {\r\n    margin-bottom: 20px;\r\n}\r\n\r\nh1 {\r\n    text-align: center;\r\n    margin-top: 0px;\r\n}\r\n\r\nspan {\r\n    color: rgb(161, 0, 0);\r\n    display: block;\r\n}\r\n\r\nheader p {\r\n    margin-bottom: 0px;\r\n    font-size: 10px;\r\n    text-align: end;\r\n}\r\n\r\nheader a {\r\n    font-size: 18px;\r\n    display: block;\r\n    text-align: end;\r\n}\r\n\r\n.th-big {\r\n    width: 40%;\r\n    background-color: rgb(82, 82, 82);\r\n}\r\n\r\n.th-medium {\r\n    width: 20%;\r\n    background-color: rgb(82, 82, 82);\r\n}\r\n\r\n.th-small {\r\n    width: 10%;\r\n    text-align: center;\r\n    background-color: rgb(82, 82, 82);\r\n}\r\n\r\n.centered {\r\n    text-align: center;\r\n}\r\n\r\ntr th.bordered {\r\n    border: 1px solid black;\r\n}\r\n\r\n.btn-delete {\r\n    width: 30px;\r\n    height: 20px;\r\n    font-size: 10px;\r\n    text-align: center;\r\n    padding: 0px;\r\n    line-height: 20px;\r\n}\r\n\r\n.btn-edit {\r\n    width: 60px;\r\n    height: 20px;\r\n    font-size: 10px;\r\n    text-align: center;\r\n    padding: 0px;\r\n    margin: 10px auto;\r\n    line-height: 20px;\r\n}\r\n\r\n.btn-complete {\r\n    text-align: center;\r\n    display: block;\r\n    width: 200px;\r\n    height: 40px;\r\n    line-height: 23px;\r\n    background-color: rgb(82, 82, 82);\r\n    font-weight: bold;\r\n    color: black;\r\n    box-shadow: 2px 2px 3px black;\r\n    /* margin-top: 20px; */\r\n}\r\n\r\n.btn-add:hover{\r\n    color: white;\r\n}\r\n\r\ntable {\r\n    overflow: hidden;\r\n}\r\n\r\n.table-backplate {\r\n    height: 400px;\r\n    display: block;\r\n    background-color: whitesmoke;\r\n}\r\n\r\n.length {\r\n    width: 300px;\r\n}\r\n\r\n/* EXAM SPECIFIC  */\r\n\r\n.squeeze {\r\n    width: 80%;\r\n    margin: 0px auto;\r\n\r\n}\r\n\r\n.midbutton {\r\n    margin: 0px auto;\r\n    display: block;\r\n    width: 200px;\r\n}\r\n\r\n.desc {\r\n    margin-left: 200px;\r\n    margin-right: 200px;\r\n}\r\n\r\n@media only screen and (max-width: 480px) {\r\n\r\n \r\n    \r\n}\r\n\r\n@media only screen and (min-width: 481px) {\r\n\r\n\r\n\r\n}\r\n\r\n@media only screen and (min-width: 1024px) {\r\n\r\n\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC9lZGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksU0FBUztJQUNULFNBQVM7SUFDVCxzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1o7QUFDSjs7QUFFQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixlQUFlO0lBQ2Ysb0NBQW9DO0FBQ3hDOztBQUlBO0lBQ0ksa0NBQWtDO0lBQ2xDLFdBQVc7SUFDWCxVQUFVO0lBQ1YsMkJBQTJCO0lBQzNCLGdDQUFnQztJQUNoQyxjQUFjO0FBQ2xCOztBQUdBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUdBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBS0E7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksVUFBVTtJQUNWLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLFVBQVU7SUFDVixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxZQUFZO0lBQ1osWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixpQ0FBaUM7SUFDakMsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWiw2QkFBNkI7SUFDN0Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixjQUFjO0lBQ2QsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFHQSxtQkFBbUI7O0FBR25CO0lBQ0ksVUFBVTtJQUNWLGdCQUFnQjs7QUFFcEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOztBQStCQTs7OztBQUlBOztBQUVBOzs7O0FBSUE7O0FBRUE7Ozs7QUFJQSIsImZpbGUiOiJzcmMvYXBwL2VkaXQvZWRpdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbioge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICAvKiBvdXRsaW5lOiAxcHggZG90dGVkIHJlZDsgKi9cclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZlxyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiA5NzBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDgwMHB4O1xyXG4gICAgbWFyZ2luOiAwcHggYXV0bztcclxuICAgIHBhZGRpbmc6IDYwcHg7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTYwLCAxNjMsIDE1NCk7XHJcbn1cclxuXHJcblxyXG5cclxuLmRpdmlzaW9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0OSwgNzIsIDE3Myk7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW46IDIwcHggYXV0byAyMHB4IGF1dG87XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDNweCBkYXJrYmx1ZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG5cclxuYnV0dG9uIHtcclxuICAgIG1hcmdpbjogMHB4IGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuI2NsaWNrYWJsZTpob3ZlciB7XHJcbiAgICBjb2xvcjogIzAwN2JmZjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG4uYnRuLXdhcm5pbmcge1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG5cclxuLmVycm9ycyB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG5cclxuaDIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG59XHJcblxyXG5oNCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBjb2xvcjogZGFya2JsdWU7XHJcbn1cclxuXHJcbmlucHV0LCB0ZXh0YXJlYSB7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uYnRuLXRvcCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5oMSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbn1cclxuXHJcbnNwYW4ge1xyXG4gICAgY29sb3I6IHJnYigxNjEsIDAsIDApO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbmhlYWRlciBwIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGVuZDtcclxufVxyXG5cclxuaGVhZGVyIGEge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XHJcbn1cclxuXHJcbi50aC1iaWcge1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4MiwgODIsIDgyKTtcclxufVxyXG5cclxuLnRoLW1lZGl1bSB7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDgyLCA4MiwgODIpO1xyXG59XHJcblxyXG4udGgtc21hbGwge1xyXG4gICAgd2lkdGg6IDEwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4MiwgODIsIDgyKTtcclxufVxyXG5cclxuLmNlbnRlcmVkIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxudHIgdGguYm9yZGVyZWQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbn1cclxuXHJcbi5idG4tZGVsZXRlIHtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5idG4tZWRpdCB7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIG1hcmdpbjogMTBweCBhdXRvO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5idG4tY29tcGxldGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjNweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4MiwgODIsIDgyKTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAzcHggYmxhY2s7XHJcbiAgICAvKiBtYXJnaW4tdG9wOiAyMHB4OyAqL1xyXG59XHJcblxyXG4uYnRuLWFkZDpob3ZlcntcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxudGFibGUge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLnRhYmxlLWJhY2twbGF0ZSB7XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG59XHJcblxyXG4ubGVuZ3RoIHtcclxuICAgIHdpZHRoOiAzMDBweDtcclxufVxyXG5cclxuXHJcbi8qIEVYQU0gU1BFQ0lGSUMgICovXHJcblxyXG5cclxuLnNxdWVlemUge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1hcmdpbjogMHB4IGF1dG87XHJcblxyXG59XHJcblxyXG4ubWlkYnV0dG9uIHtcclxuICAgIG1hcmdpbjogMHB4IGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAyMDBweDtcclxufVxyXG5cclxuLmRlc2Mge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMDBweDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcblxyXG4gXHJcbiAgICBcclxufVxyXG4gICAgXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDgxcHgpIHtcclxuXHJcblxyXG5cclxufVxyXG4gICAgXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcblxyXG5cclxuXHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/edit/edit.component.ts":
/*!****************************************!*\
  !*** ./src/app/edit/edit.component.ts ***!
  \****************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../task.service */ "./src/app/task.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let EditComponent = class EditComponent {
    constructor(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
    }
    ngOnInit() {
        this._route.params.subscribe(params => {
            this.getOnePet(params.id);
        });
    }
    getOnePet(id) {
        let observable = this._httpService.getOnePet(id);
        observable.subscribe(data => {
            this.updatepet = data['results'];
        });
    }
    updatePet() {
        let id = this.updatepet._id;
        let observable = this._httpService.updatePet(id, this.updatepet);
        observable.subscribe(data => {
            if (data["results"]) {
                this.updatepet = {
                    name: "",
                    type: "",
                    description: "",
                    skill_1: "",
                    skill_2: "",
                    skill_3: "",
                };
                this._router.navigate(['pets/show/', id]);
            }
            else if (data["errors"]) {
                this.errors = [];
                for (let item in data["errors"]) {
                    this.errors.push(data["errors"][item]);
                }
            }
        });
    }
};
EditComponent.ctorParameters = () => [
    { type: _task_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
EditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/edit.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit.component.css */ "./src/app/edit/edit.component.css")).default]
    })
], EditComponent);



/***/ }),

/***/ "./src/app/list/list.component.css":
/*!*****************************************!*\
  !*** ./src/app/list/list.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n* {\r\n    margin: 0;\r\n    border: 0;\r\n    box-sizing: border-box;\r\n    vertical-align: top;\r\n    /* outline: 1px dotted red; */\r\n    color: black;\r\n    font-family: Verdana, Geneva, Tahoma, sans-serif\r\n}\r\n\r\n.container {\r\n    width: 970px;\r\n    min-height: 800px;\r\n    margin: 0px auto;\r\n    padding: 60px;\r\n    font-size: 15px;\r\n    background-color: rgb(160, 163, 154);\r\n}\r\n\r\n.division {\r\n    background-color: rgb(49, 72, 173);\r\n    height: 2px;\r\n    width: 80%;\r\n    margin: 20px auto 20px auto;\r\n    box-shadow: 0px 0px 3px darkblue;\r\n    display: block;\r\n}\r\n\r\n#clickable:hover {\r\n    color: #007bff;\r\n    text-decoration: underline;\r\n}\r\n\r\n.errors {\r\n    color: red;\r\n}\r\n\r\nh2 {\r\n    text-align: center;\r\n    margin-top: 0px;\r\n}\r\n\r\n.btn-top {\r\n    margin: 0px auto;\r\n    display: block;\r\n    margin-bottom: 20px;\r\n}\r\n\r\nh1 {\r\n    text-align: center;\r\n    margin-top: 0px;\r\n}\r\n\r\nspan {\r\n    color: rgb(161, 0, 0);\r\n    display: block;\r\n}\r\n\r\nheader p {\r\n    margin-bottom: 0px;\r\n    font-size: 10px;\r\n    text-align: end;\r\n}\r\n\r\nheader a {\r\n    font-size: 18px;\r\n    display: block;\r\n    text-align: end;\r\n}\r\n\r\n.th-big {\r\n    width: 40%;\r\n    background-color: rgb(82, 82, 82);\r\n}\r\n\r\n.th-medium {\r\n    width: 20%;\r\n    background-color: rgb(82, 82, 82);\r\n}\r\n\r\n.th-small {\r\n    width: 10%;\r\n    text-align: center;\r\n    background-color: rgb(82, 82, 82);\r\n}\r\n\r\n.centered {\r\n    text-align: center;\r\n}\r\n\r\ntr th.bordered {\r\n    border: 1px solid black;\r\n}\r\n\r\n.btn-delete {\r\n    width: 30px;\r\n    height: 20px;\r\n    font-size: 10px;\r\n    text-align: center;\r\n    padding: 0px;\r\n    line-height: 20px;\r\n}\r\n\r\n.btn-edit {\r\n    width: 60px;\r\n    height: 20px;\r\n    font-size: 10px;\r\n    text-align: center;\r\n    padding: 0px;\r\n    margin: 10px auto;\r\n    line-height: 20px;\r\n}\r\n\r\n.btn-complete {\r\n    text-align: center;\r\n    display: block;\r\n    width: 200px;\r\n    height: 40px;\r\n    line-height: 23px;\r\n    background-color: rgb(82, 82, 82);\r\n    font-weight: bold;\r\n    color: black;\r\n    box-shadow: 2px 2px 3px black;\r\n    /* margin-top: 20px; */\r\n}\r\n\r\n.btn-add:hover{\r\n    color: white;\r\n}\r\n\r\n/* table {\r\n    overflow: hidden;\r\n} */\r\n\r\n.table-backplate {\r\n    height: 400px;\r\n    display: block;\r\n    background-color: whitesmoke;\r\n}\r\n\r\n.length {\r\n    width: 300px;\r\n}\r\n\r\n/* EXAM SPECIFIC  */\r\n\r\n.squeeze {\r\n    width: 80%;\r\n    margin: 0px auto;\r\n\r\n}\r\n\r\n.midbutton {\r\n    margin: 0px auto;\r\n    display: block;\r\n    width: 200px;\r\n}\r\n\r\n.desc {\r\n    margin-left: 200px;\r\n    margin-right: 200px;\r\n}\r\n\r\n@media only screen and (max-width: 480px) {\r\n\r\n \r\n    \r\n}\r\n\r\n@media only screen and (min-width: 481px) {\r\n\r\n\r\n\r\n}\r\n\r\n@media only screen and (min-width: 1024px) {\r\n\r\n\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdC9saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksU0FBUztJQUNULFNBQVM7SUFDVCxzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1o7QUFDSjs7QUFFQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixlQUFlO0lBQ2Ysb0NBQW9DO0FBQ3hDOztBQUlBO0lBQ0ksa0NBQWtDO0lBQ2xDLFdBQVc7SUFDWCxVQUFVO0lBQ1YsMkJBQTJCO0lBQzNCLGdDQUFnQztJQUNoQyxjQUFjO0FBQ2xCOztBQUtBO0lBQ0ksY0FBYztJQUNkLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFHQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxtQkFBbUI7QUFDdkI7O0FBS0E7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksVUFBVTtJQUNWLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLFVBQVU7SUFDVixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxZQUFZO0lBQ1osWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixpQ0FBaUM7SUFDakMsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWiw2QkFBNkI7SUFDN0Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTs7R0FFRzs7QUFFSDtJQUNJLGFBQWE7SUFDYixjQUFjO0lBQ2QsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFHQSxtQkFBbUI7O0FBR25CO0lBQ0ksVUFBVTtJQUNWLGdCQUFnQjs7QUFFcEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOztBQStCQTs7OztBQUlBOztBQUVBOzs7O0FBSUE7O0FBRUE7Ozs7QUFJQSIsImZpbGUiOiJzcmMvYXBwL2xpc3QvbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbioge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICAvKiBvdXRsaW5lOiAxcHggZG90dGVkIHJlZDsgKi9cclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZlxyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiA5NzBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDgwMHB4O1xyXG4gICAgbWFyZ2luOiAwcHggYXV0bztcclxuICAgIHBhZGRpbmc6IDYwcHg7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTYwLCAxNjMsIDE1NCk7XHJcbn1cclxuXHJcblxyXG5cclxuLmRpdmlzaW9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0OSwgNzIsIDE3Myk7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW46IDIwcHggYXV0byAyMHB4IGF1dG87XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDNweCBkYXJrYmx1ZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4jY2xpY2thYmxlOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjMDA3YmZmO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuXHJcbi5lcnJvcnMge1xyXG4gICAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuXHJcbmgyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxufVxyXG5cclxuLmJ0bi10b3Age1xyXG4gICAgbWFyZ2luOiAwcHggYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuaDEge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG59XHJcblxyXG5zcGFuIHtcclxuICAgIGNvbG9yOiByZ2IoMTYxLCAwLCAwKTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG5oZWFkZXIgcCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XHJcbn1cclxuXHJcbmhlYWRlciBhIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogZW5kO1xyXG59XHJcblxyXG4udGgtYmlnIHtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODIsIDgyLCA4Mik7XHJcbn1cclxuXHJcbi50aC1tZWRpdW0ge1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4MiwgODIsIDgyKTtcclxufVxyXG5cclxuLnRoLXNtYWxsIHtcclxuICAgIHdpZHRoOiAxMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODIsIDgyLCA4Mik7XHJcbn1cclxuXHJcbi5jZW50ZXJlZCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbnRyIHRoLmJvcmRlcmVkIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG4uYnRuLWRlbGV0ZSB7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4uYnRuLWVkaXQge1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBtYXJnaW46IDEwcHggYXV0bztcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4uYnRuLWNvbXBsZXRlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIzcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODIsIDgyLCA4Mik7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGJveC1zaGFkb3c6IDJweCAycHggM3B4IGJsYWNrO1xyXG4gICAgLyogbWFyZ2luLXRvcDogMjBweDsgKi9cclxufVxyXG5cclxuLmJ0bi1hZGQ6aG92ZXJ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi8qIHRhYmxlIHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn0gKi9cclxuXHJcbi50YWJsZS1iYWNrcGxhdGUge1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxufVxyXG5cclxuLmxlbmd0aCB7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbn1cclxuXHJcblxyXG4vKiBFWEFNIFNQRUNJRklDICAqL1xyXG5cclxuXHJcbi5zcXVlZXplIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW46IDBweCBhdXRvO1xyXG5cclxufVxyXG5cclxuLm1pZGJ1dHRvbiB7XHJcbiAgICBtYXJnaW46IDBweCBhdXRvO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbn1cclxuXHJcbi5kZXNjIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMDBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMjAwcHg7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xyXG5cclxuIFxyXG4gICAgXHJcbn1cclxuICAgIFxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ4MXB4KSB7XHJcblxyXG5cclxuXHJcbn1cclxuICAgIFxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG5cclxuXHJcblxyXG59Il19 */");

/***/ }),

/***/ "./src/app/list/list.component.ts":
/*!****************************************!*\
  !*** ./src/app/list/list.component.ts ***!
  \****************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../task.service */ "./src/app/task.service.ts");



let ListComponent = class ListComponent {
    constructor(_httpService) {
        this._httpService = _httpService;
    }
    ngOnInit() {
        this.getPets();
    }
    getPets() {
        let observable = this._httpService.getPets();
        observable.subscribe(data => {
            this.allpets = data['results'];
        });
    }
};
ListComponent.ctorParameters = () => [
    { type: _task_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"] }
];
ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/list/list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./list.component.css */ "./src/app/list/list.component.css")).default]
    })
], ListComponent);



/***/ }),

/***/ "./src/app/new/new.component.css":
/*!***************************************!*\
  !*** ./src/app/new/new.component.css ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n* {\r\n    margin: 0;\r\n    border: 0;\r\n    box-sizing: border-box;\r\n    vertical-align: top;\r\n    /* outline: 1px dotted red; */\r\n    color: black;\r\n    font-family: Verdana, Geneva, Tahoma, sans-serif\r\n}\r\n\r\n.container {\r\n    width: 970px;\r\n    min-height: 800px;\r\n    margin: 0px auto;\r\n    padding: 60px;\r\n    font-size: 15px;\r\n    background-color: rgb(160, 163, 154);\r\n}\r\n\r\n.division {\r\n    background-color: rgb(49, 72, 173);\r\n    height: 2px;\r\n    width: 80%;\r\n    margin: 20px auto 20px auto;\r\n    box-shadow: 0px 0px 3px darkblue;\r\n    display: block;\r\n}\r\n\r\nbutton {\r\n    margin: 0px auto;\r\n    display: block;\r\n}\r\n\r\n#clickable:hover {\r\n    color: #007bff;\r\n    text-decoration: underline;\r\n}\r\n\r\n.btn-warning {\r\n    margin-top: 15px;\r\n}\r\n\r\n.errors {\r\n    color: red;\r\n}\r\n\r\nh2 {\r\n    text-align: center;\r\n    margin-top: 0px;\r\n}\r\n\r\nh4 {\r\n    margin-bottom: 20px;\r\n}\r\n\r\nlabel {\r\n    font-size: 25px;\r\n    color: darkblue;\r\n}\r\n\r\ninput, textarea {\r\n    width: 300px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.btn-top {\r\n    margin-bottom: 20px;\r\n}\r\n\r\nh1 {\r\n    text-align: center;\r\n    margin-top: 0px;\r\n}\r\n\r\nspan {\r\n    color: rgb(161, 0, 0);\r\n    display: block;\r\n}\r\n\r\nheader p {\r\n    margin-bottom: 0px;\r\n    font-size: 10px;\r\n    text-align: end;\r\n}\r\n\r\nheader a {\r\n    font-size: 18px;\r\n    display: block;\r\n    text-align: end;\r\n}\r\n\r\n.th-big {\r\n    width: 40%;\r\n    background-color: rgb(82, 82, 82);\r\n}\r\n\r\n.th-medium {\r\n    width: 20%;\r\n    background-color: rgb(82, 82, 82);\r\n}\r\n\r\n.th-small {\r\n    width: 10%;\r\n    text-align: center;\r\n    background-color: rgb(82, 82, 82);\r\n}\r\n\r\n.centered {\r\n    text-align: center;\r\n}\r\n\r\ntr th.bordered {\r\n    border: 1px solid black;\r\n}\r\n\r\n.btn-delete {\r\n    width: 30px;\r\n    height: 20px;\r\n    font-size: 10px;\r\n    text-align: center;\r\n    padding: 0px;\r\n    line-height: 20px;\r\n}\r\n\r\n.btn-edit {\r\n    width: 60px;\r\n    height: 20px;\r\n    font-size: 10px;\r\n    text-align: center;\r\n    padding: 0px;\r\n    margin: 10px auto;\r\n    line-height: 20px;\r\n}\r\n\r\n.btn-complete {\r\n    text-align: center;\r\n    display: block;\r\n    width: 200px;\r\n    height: 40px;\r\n    line-height: 23px;\r\n    background-color: rgb(82, 82, 82);\r\n    font-weight: bold;\r\n    color: black;\r\n    box-shadow: 2px 2px 3px black;\r\n    /* margin-top: 20px; */\r\n}\r\n\r\n.btn-add:hover{\r\n    color: white;\r\n}\r\n\r\ntable {\r\n    overflow: hidden;\r\n}\r\n\r\n.table-backplate {\r\n    height: 400px;\r\n    display: block;\r\n    background-color: whitesmoke;\r\n}\r\n\r\n.length {\r\n    width: 300px;\r\n}\r\n\r\n/* EXAM SPECIFIC  */\r\n\r\n.squeeze {\r\n    width: 80%;\r\n    margin: 0px auto;\r\n\r\n}\r\n\r\n.midbutton {\r\n    margin: 0px auto;\r\n    display: block;\r\n    width: 200px;\r\n}\r\n\r\n.desc {\r\n    margin-left: 200px;\r\n    margin-right: 200px;\r\n}\r\n\r\n@media only screen and (max-width: 480px) {\r\n\r\n \r\n    \r\n}\r\n\r\n@media only screen and (min-width: 481px) {\r\n\r\n\r\n\r\n}\r\n\r\n@media only screen and (min-width: 1024px) {\r\n\r\n\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3L25ldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLFNBQVM7SUFDVCxTQUFTO0lBQ1Qsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaO0FBQ0o7O0FBRUE7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsZUFBZTtJQUNmLG9DQUFvQztBQUN4Qzs7QUFJQTtJQUNJLGtDQUFrQztJQUNsQyxXQUFXO0lBQ1gsVUFBVTtJQUNWLDJCQUEyQjtJQUMzQixnQ0FBZ0M7SUFDaEMsY0FBYztBQUNsQjs7QUFHQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztJQUNkLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFHQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUtBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsWUFBWTtJQUNaLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsaUNBQWlDO0lBQ2pDLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osNkJBQTZCO0lBQzdCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsY0FBYztJQUNkLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBR0EsbUJBQW1COztBQUduQjtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7O0FBRXBCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUErQkE7Ozs7QUFJQTs7QUFFQTs7OztBQUlBOztBQUVBOzs7O0FBSUEiLCJmaWxlIjoic3JjL2FwcC9uZXcvbmV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuKiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgIC8qIG91dGxpbmU6IDFweCBkb3R0ZWQgcmVkOyAqL1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmXHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDk3MHB4O1xyXG4gICAgbWluLWhlaWdodDogODAwcHg7XHJcbiAgICBtYXJnaW46IDBweCBhdXRvO1xyXG4gICAgcGFkZGluZzogNjBweDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjAsIDE2MywgMTU0KTtcclxufVxyXG5cclxuXHJcblxyXG4uZGl2aXNpb24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ5LCA3MiwgMTczKTtcclxuICAgIGhlaWdodDogMnB4O1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1hcmdpbjogMjBweCBhdXRvIDIwcHggYXV0bztcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggM3B4IGRhcmtibHVlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcblxyXG5idXR0b24ge1xyXG4gICAgbWFyZ2luOiAwcHggYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4jY2xpY2thYmxlOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjMDA3YmZmO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuXHJcbi5idG4td2FybmluZyB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG59XHJcblxyXG4uZXJyb3JzIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcblxyXG5oMiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbn1cclxuXHJcbmg0IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGNvbG9yOiBkYXJrYmx1ZTtcclxufVxyXG5cclxuaW5wdXQsIHRleHRhcmVhIHtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5idG4tdG9wIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmgxIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxufVxyXG5cclxuc3BhbiB7XHJcbiAgICBjb2xvcjogcmdiKDE2MSwgMCwgMCk7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuaGVhZGVyIHAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogZW5kO1xyXG59XHJcblxyXG5oZWFkZXIgYSB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtYWxpZ246IGVuZDtcclxufVxyXG5cclxuLnRoLWJpZyB7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDgyLCA4MiwgODIpO1xyXG59XHJcblxyXG4udGgtbWVkaXVtIHtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODIsIDgyLCA4Mik7XHJcbn1cclxuXHJcbi50aC1zbWFsbCB7XHJcbiAgICB3aWR0aDogMTAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDgyLCA4MiwgODIpO1xyXG59XHJcblxyXG4uY2VudGVyZWQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG50ciB0aC5ib3JkZXJlZCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxufVxyXG5cclxuLmJ0bi1kZWxldGUge1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxufVxyXG5cclxuLmJ0bi1lZGl0IHtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxufVxyXG5cclxuLmJ0bi1jb21wbGV0ZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyM3B4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDgyLCA4MiwgODIpO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDNweCBibGFjaztcclxuICAgIC8qIG1hcmdpbi10b3A6IDIwcHg7ICovXHJcbn1cclxuXHJcbi5idG4tYWRkOmhvdmVye1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4udGFibGUtYmFja3BsYXRlIHtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbn1cclxuXHJcbi5sZW5ndGgge1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG59XHJcblxyXG5cclxuLyogRVhBTSBTUEVDSUZJQyAgKi9cclxuXHJcblxyXG4uc3F1ZWV6ZSB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luOiAwcHggYXV0bztcclxuXHJcbn1cclxuXHJcbi5taWRidXR0b24ge1xyXG4gICAgbWFyZ2luOiAwcHggYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG59XHJcblxyXG4uZGVzYyB7XHJcbiAgICBtYXJnaW4tbGVmdDogMjAwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwMHB4O1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuXHJcbiBcclxuICAgIFxyXG59XHJcbiAgICBcclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0ODFweCkge1xyXG5cclxuXHJcblxyXG59XHJcbiAgICBcclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuXHJcblxyXG5cclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/new/new.component.ts":
/*!**************************************!*\
  !*** ./src/app/new/new.component.ts ***!
  \**************************************/
/*! exports provided: NewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewComponent", function() { return NewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../task.service */ "./src/app/task.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let NewComponent = class NewComponent {
    constructor(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
    }
    ngOnInit() {
        this.createpet = {
            name: "",
            type: "",
            description: "",
            skill_1: "",
            skill_2: "",
            skill_3: "",
        };
    }
    // createPet(){
    //     this.errors = [];
    //     let observable1 = this._httpService.checkPet(this.createpet.name);
    //     observable1.subscribe(data => {
    //         console.log(data)
    //         if(data["results"]){
    //             console.log(data)
    //             let observable2 = this._httpService.createPet(this.createpet)
    //             observable2.subscribe(data => {
    //                 if(data["results"]){
    //                     this.createpet = {
    //                         name: "",
    //                         type: "",
    //                         description: "",
    //                         skill_1: "",
    //                         skill_2: "",
    //                         skill_3: "",
    //                     }
    //                     this._router.navigate(['pets'])
    //                 }
    //                 else if(data["errors"]){
    //                     for(let item in data["errors"]){
    //                         this.errors.push(data["errors"][item]);
    //                     }
    //                 }
    //             });       
    //         }
    //         else if(data["errors"]){
    //             console.log(data["results"])
    //             console.log("yesdysd;yf;sdfys;dy")
    //             this.errors.push({message: "There is already a pet by that name.  No duplicates!"});         
    //         }
    //     });
    // }
    createPet() {
        this.errors = null;
        let observable = this._httpService.createPet(this.createpet);
        observable.subscribe(data => {
            if (data["results"]) {
                this.createpet = {
                    name: "",
                    type: "",
                    description: "",
                    skill_1: "",
                    skill_2: "",
                    skill_3: "",
                };
                this._router.navigate(['pets']);
            }
            else if (data["errors"]) {
                this.errors = [];
                for (let item in data["errors"]) {
                    this.errors.push(data["errors"][item]);
                }
            }
        });
    }
};
NewComponent.ctorParameters = () => [
    { type: _task_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
NewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-new',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./new.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/new/new.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./new.component.css */ "./src/app/new/new.component.css")).default]
    })
], NewComponent);

// createPet(){
//     this.errors = [];
//     let observable1 = this._httpService.checkPet(this.createpet.name);
//     observable1.subscribe(data => {
//         console.log(data)
//         if(data["results"].length==0){
//             console.log(data["results"])
//             console.log("yesdysd;yf;sdfys;dy")
//             this.errors.push({message: "There is already a pet by that name.  No duplicates!"});
//         }
//         if(data["results"]){
//             console.log(data)
//             let observable2 = this._httpService.createPet(this.createpet)
//             observable2.subscribe(data => {
//                 if(data["results"]){
//                     this.createpet = {
//                         name: "",
//                         type: "",
//                         description: "",
//                         skill_1: "",
//                         skill_2: "",
//                         skill_3: "",
//                     }
//                     this._router.navigate(['pets'])
//                 }
//                 else if(data["errors"]){
//                     for(let item in data["errors"]){
//                         this.errors.push(data["errors"][item]);
//                     }
//                 }
//             });       
//         }
//         else if(data["errors"]){
//             console.log
//             for(let item in data["errors"]){
//                 this.errors.push(data["errors"][item]);
//             }             
//         }
//     });
// }


/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/*!*************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../task.service */ "./src/app/task.service.ts");



let PageNotFoundComponent = class PageNotFoundComponent {
    constructor(_httpService) {
        this._httpService = _httpService;
    }
    ngOnInit() {
    }
};
PageNotFoundComponent.ctorParameters = () => [
    { type: _task_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"] }
];
PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page-not-found',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./page-not-found.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found/page-not-found.component.css")).default]
    })
], PageNotFoundComponent);



/***/ }),

/***/ "./src/app/show/show.component.css":
/*!*****************************************!*\
  !*** ./src/app/show/show.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n* {\r\n    margin: 0;\r\n    border: 0;\r\n    box-sizing: border-box;\r\n    vertical-align: top;\r\n    /* outline: 1px dotted red; */\r\n    color: black;\r\n    font-family: Verdana, Geneva, Tahoma, sans-serif\r\n}\r\n\r\n.container {\r\n    width: 970px;\r\n    min-height: 800px;\r\n    margin: 0px auto;\r\n    padding: 60px;\r\n    font-size: 15px;\r\n    background-color: rgb(160, 163, 154);\r\n}\r\n\r\n.division {\r\n    background-color: rgb(49, 72, 173);\r\n    height: 2px;\r\n    width: 80%;\r\n    margin: 20px auto 20px auto;\r\n    box-shadow: 0px 0px 3px darkblue;\r\n    display: block;\r\n}\r\n\r\nbutton {\r\n    margin: 0px auto;\r\n    display: block;\r\n}\r\n\r\n#clickable:hover {\r\n    color: #007bff;\r\n    text-decoration: underline;\r\n}\r\n\r\n.btn-warning {\r\n    margin-top: 15px;\r\n}\r\n\r\n.errors {\r\n    color: red;\r\n}\r\n\r\nh2 {\r\n    text-align: center;\r\n    margin-top: 0px;\r\n}\r\n\r\nh4 {\r\n    margin-bottom: 20px;\r\n}\r\n\r\nlabel {\r\n    font-size: 25px;\r\n    color: darkblue;\r\n}\r\n\r\ninput, textarea {\r\n    width: 300px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.btn-top {\r\n    margin-bottom: 20px;\r\n}\r\n\r\ntable {\r\n    width: 100%;\r\n}\r\n\r\ntd, li {\r\n    color: darkblue;\r\n}\r\n\r\n.aroundtable {\r\n    font-size: 25px;\r\n    width: 60%;\r\n    margin: 0px auto;\r\n    padding: 20px;\r\n    background-image: radial-gradient(white, rgb(160, 163, 154));\r\n    border: 1px solid darkblue; \r\n    box-shadow: 0px 0px 4px darkblue;\r\n}\r\n\r\ntr {\r\n    padding: 20px;\r\n}\r\n\r\nli {\r\n    list-style-type: none;\r\n    margin: 0px;\r\n    padding: 0px;\r\n}\r\n\r\nul {\r\n    padding: 0px;\r\n    margin: 0px;\r\n}\r\n\r\n.title {\r\n    width: 250px;\r\n}\r\n\r\n.btn-delete {\r\n    font-size: 10px;\r\n    text-align: center;\r\n    padding: 0px;\r\n    line-height: 20px;\r\n    margin-top: 30px;\r\n}\r\n\r\nh1 {\r\n    text-align: center;\r\n    margin-top: 0px;\r\n}\r\n\r\nspan {\r\n    color: rgb(161, 0, 0);\r\n    display: block;\r\n}\r\n\r\nheader p {\r\n    margin-bottom: 0px;\r\n    font-size: 10px;\r\n    text-align: end;\r\n}\r\n\r\nheader a {\r\n    font-size: 18px;\r\n    display: block;\r\n    text-align: end;\r\n}\r\n\r\n.th-big {\r\n    width: 40%;\r\n    background-color: rgb(82, 82, 82);\r\n}\r\n\r\n.th-medium {\r\n    width: 20%;\r\n    background-color: rgb(82, 82, 82);\r\n}\r\n\r\n.th-small {\r\n    width: 10%;\r\n    text-align: center;\r\n    background-color: rgb(82, 82, 82);\r\n}\r\n\r\n.centered {\r\n    text-align: center;\r\n}\r\n\r\ntr th.bordered {\r\n    border: 1px solid black;\r\n}\r\n\r\n.btn-edit {\r\n    width: 60px;\r\n    height: 20px;\r\n    font-size: 10px;\r\n    text-align: center;\r\n    padding: 0px;\r\n    margin: 10px auto;\r\n    line-height: 20px;\r\n}\r\n\r\n.btn-complete {\r\n    text-align: center;\r\n    display: block;\r\n    width: 200px;\r\n    height: 40px;\r\n    line-height: 23px;\r\n    background-color: rgb(82, 82, 82);\r\n    font-weight: bold;\r\n    color: black;\r\n    box-shadow: 2px 2px 3px black;\r\n    /* margin-top: 20px; */\r\n}\r\n\r\n.btn-add:hover{\r\n    color: white;\r\n}\r\n\r\n.table-backplate {\r\n    height: 400px;\r\n    display: block;\r\n    background-color: whitesmoke;\r\n}\r\n\r\n.length {\r\n    width: 300px;\r\n}\r\n\r\n/* EXAM SPECIFIC  */\r\n\r\n.squeeze {\r\n    width: 80%;\r\n    margin: 0px auto;\r\n\r\n}\r\n\r\n.midbutton {\r\n    margin: 0px auto;\r\n    display: block;\r\n    width: 200px;\r\n}\r\n\r\n.desc {\r\n    margin-left: 200px;\r\n    margin-right: 200px;\r\n}\r\n\r\n@media only screen and (max-width: 480px) {\r\n\r\n \r\n    \r\n}\r\n\r\n@media only screen and (min-width: 481px) {\r\n\r\n\r\n\r\n}\r\n\r\n@media only screen and (min-width: 1024px) {\r\n\r\n\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvdy9zaG93LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksU0FBUztJQUNULFNBQVM7SUFDVCxzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1o7QUFDSjs7QUFFQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixlQUFlO0lBQ2Ysb0NBQW9DO0FBQ3hDOztBQUlBO0lBQ0ksa0NBQWtDO0lBQ2xDLFdBQVc7SUFDWCxVQUFVO0lBQ1YsMkJBQTJCO0lBQzNCLGdDQUFnQztJQUNoQyxjQUFjO0FBQ2xCOztBQUdBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUdBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtJQUNmLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLDREQUE0RDtJQUM1RCwwQkFBMEI7SUFDMUIsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFPQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUlBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxZQUFZO0lBQ1osWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixpQ0FBaUM7SUFDakMsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWiw2QkFBNkI7SUFDN0Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFJQTtJQUNJLGFBQWE7SUFDYixjQUFjO0lBQ2QsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFHQSxtQkFBbUI7O0FBR25CO0lBQ0ksVUFBVTtJQUNWLGdCQUFnQjs7QUFFcEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOztBQStCQTs7OztBQUlBOztBQUVBOzs7O0FBSUE7O0FBRUE7Ozs7QUFJQSIsImZpbGUiOiJzcmMvYXBwL3Nob3cvc2hvdy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbioge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICAvKiBvdXRsaW5lOiAxcHggZG90dGVkIHJlZDsgKi9cclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZlxyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiA5NzBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDgwMHB4O1xyXG4gICAgbWFyZ2luOiAwcHggYXV0bztcclxuICAgIHBhZGRpbmc6IDYwcHg7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTYwLCAxNjMsIDE1NCk7XHJcbn1cclxuXHJcblxyXG5cclxuLmRpdmlzaW9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0OSwgNzIsIDE3Myk7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW46IDIwcHggYXV0byAyMHB4IGF1dG87XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDNweCBkYXJrYmx1ZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG5cclxuYnV0dG9uIHtcclxuICAgIG1hcmdpbjogMHB4IGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuI2NsaWNrYWJsZTpob3ZlciB7XHJcbiAgICBjb2xvcjogIzAwN2JmZjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG4uYnRuLXdhcm5pbmcge1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG5cclxuLmVycm9ycyB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG5cclxuaDIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG59XHJcblxyXG5oNCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBjb2xvcjogZGFya2JsdWU7XHJcbn1cclxuXHJcbmlucHV0LCB0ZXh0YXJlYSB7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uYnRuLXRvcCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxudGQsIGxpIHtcclxuICAgIGNvbG9yOiBkYXJrYmx1ZTtcclxufVxyXG5cclxuLmFyb3VuZHRhYmxlIHtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBtYXJnaW46IDBweCBhdXRvO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudCh3aGl0ZSwgcmdiKDE2MCwgMTYzLCAxNTQpKTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGRhcmtibHVlOyBcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNHB4IGRhcmtibHVlO1xyXG59XHJcblxyXG50ciB7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG5saSB7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxufVxyXG5cclxudWwge1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbn1cclxuXHJcbi5idG4tZGVsZXRlIHtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5oMSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbn1cclxuXHJcbnNwYW4ge1xyXG4gICAgY29sb3I6IHJnYigxNjEsIDAsIDApO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbmhlYWRlciBwIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGVuZDtcclxufVxyXG5cclxuaGVhZGVyIGEge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XHJcbn1cclxuXHJcbi50aC1iaWcge1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4MiwgODIsIDgyKTtcclxufVxyXG5cclxuLnRoLW1lZGl1bSB7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDgyLCA4MiwgODIpO1xyXG59XHJcblxyXG4udGgtc21hbGwge1xyXG4gICAgd2lkdGg6IDEwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4MiwgODIsIDgyKTtcclxufVxyXG5cclxuLmNlbnRlcmVkIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxudHIgdGguYm9yZGVyZWQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbn1cclxuXHJcblxyXG5cclxuLmJ0bi1lZGl0IHtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxufVxyXG5cclxuLmJ0bi1jb21wbGV0ZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyM3B4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDgyLCA4MiwgODIpO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDNweCBibGFjaztcclxuICAgIC8qIG1hcmdpbi10b3A6IDIwcHg7ICovXHJcbn1cclxuXHJcbi5idG4tYWRkOmhvdmVye1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5cclxuXHJcbi50YWJsZS1iYWNrcGxhdGUge1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxufVxyXG5cclxuLmxlbmd0aCB7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbn1cclxuXHJcblxyXG4vKiBFWEFNIFNQRUNJRklDICAqL1xyXG5cclxuXHJcbi5zcXVlZXplIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW46IDBweCBhdXRvO1xyXG5cclxufVxyXG5cclxuLm1pZGJ1dHRvbiB7XHJcbiAgICBtYXJnaW46IDBweCBhdXRvO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbn1cclxuXHJcbi5kZXNjIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMDBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMjAwcHg7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xyXG5cclxuIFxyXG4gICAgXHJcbn1cclxuICAgIFxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ4MXB4KSB7XHJcblxyXG5cclxuXHJcbn1cclxuICAgIFxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG5cclxuXHJcblxyXG59Il19 */");

/***/ }),

/***/ "./src/app/show/show.component.ts":
/*!****************************************!*\
  !*** ./src/app/show/show.component.ts ***!
  \****************************************/
/*! exports provided: ShowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowComponent", function() { return ShowComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../task.service */ "./src/app/task.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let ShowComponent = class ShowComponent {
    constructor(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
    }
    ngOnInit() {
        this.likebutton = true;
        this._route.params.subscribe(params => {
            this.getOnePet(params.id);
        });
    }
    getOnePet(id) {
        let observable = this._httpService.getOnePet(id);
        observable.subscribe(data => {
            this.onepet = data['results'];
        });
    }
    likePet() {
        this.likebutton = null;
        this.onepet.likes++;
        let observable = this._httpService.updatePet(this.onepet._id, this.onepet);
        observable.subscribe(data => {
            if (data["results"]) {
            }
            else if (data["errors"]) {
                this.errors = [];
                for (let item in data["errors"]) {
                    this.errors.push(data["errors"][item]);
                }
            }
        });
    }
    adoptPet() {
        let id = this.onepet._id;
        let observable = this._httpService.deletePet(id);
        observable.subscribe(data => {
            this._router.navigate(['pets']);
        });
    }
};
ShowComponent.ctorParameters = () => [
    { type: _task_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
ShowComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-show',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./show.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/show/show.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./show.component.css */ "./src/app/show/show.component.css")).default]
    })
], ShowComponent);



/***/ }),

/***/ "./src/app/task.service.ts":
/*!*********************************!*\
  !*** ./src/app/task.service.ts ***!
  \*********************************/
/*! exports provided: TaskService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskService", function() { return TaskService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let TaskService = class TaskService {
    constructor(_http) {
        this._http = _http;
    }
    getPets() {
        return this._http.get('/api/pets');
    }
    getOnePet(id) {
        return this._http.get(`/api/pet/${id}`);
    }
    createPet(data) {
        return this._http.post('/api/pet/create', data);
    }
    deletePet(id) {
        return this._http.delete(`/api/pet/destroy/${id}`);
    }
    updatePet(id, data) {
        return this._http.put(`/api/pet/update/${id}`, data);
    }
    checkPet(name) {
        return this._http.get(`/api/pet/check/${name}`);
    }
};
TaskService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
TaskService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TaskService);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\adamj\Dropbox\Coding Dojo\Mean_stack\Angular\BeltExam\public\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map