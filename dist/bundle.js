/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/auto-reply.js":
/*!***************************!*\
  !*** ./src/auto-reply.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addAutoReplyButton: () => (/* binding */ addAutoReplyButton)
/* harmony export */ });
/* harmony import */ var _prompt_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prompt-api.js */ "./src/prompt-api.js");
/* harmony import */ var _button_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button.js */ "./src/button.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }


function addAutoReplyButton(replyArea, emailBodyArea) {
  console.log("Creating auto-reply button...");
  var autoReplyButton = (0,_button_js__WEBPACK_IMPORTED_MODULE_1__.createButton)("auto-reply-button", "Auto Reply");
  replyArea.insertAdjacentElement('afterend', autoReplyButton);
  autoReplyButton.addEventListener('click', /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var emailContent, prompt;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          console.log("creating reply content...");
          emailContent = getEmailContent();
          if (emailContent) {
            _context.next = 5;
            break;
          }
          console.error("No email content detected.");
          return _context.abrupt("return");
        case 5:
          prompt = "Create a reply email for this email content, but do not create subject: " + emailContent;
          console.log(prompt);
          try {
            generateEmailContent(prompt, emailBodyArea);
          } catch (error) {
            responseOutput.textContent = 'Error occurred while calling the API.';
            console.error('Error in content.js:', error);
          }
        case 8:
        case "end":
          return _context.stop();
      }
    }, _callee);
  })));
}
function getEmailContent() {
  var emailBodyContainer = document.querySelector(".ii.gt") || document.querySelector('div[aria-label="Message body"]');
  var emailContent = "";
  if (emailBodyContainer) {
    emailContent = emailBodyContainer.innerText.trim();
  } else {
    console.error("Unable to find the email content container.");
    return "";
  }
  return emailContent.replace(/[^\x00-\x7F]/g, " ").slice(0, 1000);
}
function generateEmailContent(_x, _x2) {
  return _generateEmailContent.apply(this, arguments);
}
function _generateEmailContent() {
  _generateEmailContent = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(prompt, emailBodyArea) {
    var emailContent;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          console.log("Email is being generated. Please wait...");
          if (emailBodyArea) {
            emailBodyArea.innerText = "Email is being generated. Please wait...";
          }
          _context2.next = 4;
          return (0,_prompt_api_js__WEBPACK_IMPORTED_MODULE_0__.callAIPromptAPI)(prompt);
        case 4:
          emailContent = _context2.sent;
          console.log("emailContent: " + emailContent);
          if (emailBodyArea) {
            emailBodyArea.innerText = emailContent;
          }
        case 7:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _generateEmailContent.apply(this, arguments);
}

/***/ }),

/***/ "./src/auto-write.js":
/*!***************************!*\
  !*** ./src/auto-write.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addAutoWriteButton: () => (/* binding */ addAutoWriteButton)
/* harmony export */ });
/* harmony import */ var _prompt_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prompt-api.js */ "./src/prompt-api.js");
/* harmony import */ var _createPopupDiv_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createPopupDiv.js */ "./src/createPopupDiv.js");
/* harmony import */ var _button_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button.js */ "./src/button.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _toArray(r) { return _arrayWithHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }



function addAutoWriteButton(subjectArea, emailBodyArea) {
  console.log("Creating auto-write button...");
  var autoWriteButton = (0,_button_js__WEBPACK_IMPORTED_MODULE_2__.createButton)("auto-write-button", "Auto Write");
  subjectArea.insertAdjacentElement("afterend", autoWriteButton);
  autoWriteButton.addEventListener("click", function () {
    return openPromptPopup(subjectArea, emailBodyArea);
  });
}

// Function to open the specific prompt popup
function openPromptPopup(subjectArea, emailBodyArea) {
  console.log("Creating auto-write pop-up window...");
  (0,_createPopupDiv_js__WEBPACK_IMPORTED_MODULE_1__.createPopupDiv)("Auto Write Email", function (contentDiv) {
    // Set innerHTML for content div
    contentDiv.innerHTML = "\n      <textarea id=\"autoWritePrompt\" placeholder=\"Input what do you want to include in your email...\" style=\"width: 100%; height: 100px;\"></textarea>\n      <button id=\"generateButton\" style=\"margin-top: 10px;\">Generate</button>\n      <p id=\"errorMessage\" style=\"color: red; margin-top: 10px; display: none;\">Please enter content for your email before generating.</p>\n    ";

    // Get references to elements inside contentDiv
    var promptInput = contentDiv.querySelector("#autoWritePrompt");
    var generateButton = contentDiv.querySelector("#generateButton");
    var errorMessage = contentDiv.querySelector("#errorMessage");

    // Generate button event listener
    generateButton.addEventListener("click", function () {
      var userInput = promptInput.value.trim();
      console.log("User input: " + userInput);
      if (userInput) {
        // Valid input, remove error message if it exists and generate email content
        errorMessage.style.display = "none";
        generateEmailContent(userInput + ". Also generate subject.", subjectArea, emailBodyArea);
      } else {
        // Invalid input, show error message
        errorMessage.style.display = "block";
      }
    });
  });
}
function generateEmailContent(_x, _x2, _x3) {
  return _generateEmailContent.apply(this, arguments);
}
function _generateEmailContent() {
  _generateEmailContent = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(prompt, subjectArea, emailBodyArea) {
    var emailContent, _emailContent$split, _emailContent$split2, subject, bodyParts, body;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          if (emailBodyArea) {
            subjectArea.value = ""; //clear subject
            emailBodyArea.innerText = "Email is being generated. Please wait...";
          }
          _context.next = 3;
          return (0,_prompt_api_js__WEBPACK_IMPORTED_MODULE_0__.callAIPromptAPI)(prompt);
        case 3:
          emailContent = _context.sent;
          console.log(emailContent);
          _emailContent$split = emailContent.split("\n"), _emailContent$split2 = _toArray(_emailContent$split), subject = _emailContent$split2[0], bodyParts = _emailContent$split2.slice(1);
          body = bodyParts.join("\n").replace("Subject:", "").trim();
          if (subjectArea) {
            subjectArea.value = subject.replace(/^## Subject:/, "").trim();
          }
          if (emailBodyArea) {
            emailBodyArea.innerText = body;
          }
        case 9:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _generateEmailContent.apply(this, arguments);
}

/***/ }),

/***/ "./src/button.js":
/*!***********************!*\
  !*** ./src/button.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createButton: () => (/* binding */ createButton)
/* harmony export */ });
function createButton(id, textContent) {
  var styles = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var button = document.createElement('button');
  button.id = id;
  button.innerText = textContent;

  // Default styles: add spacing and AI-inspired appearance
  var defaultStyles = {
    cursor: 'pointer',
    padding: '5px',
    margin: '5px',
    fontSize: '12px',
    fontWeight: 'bold',
    color: '#ffffff',
    background: 'linear-gradient(90deg, #8e24aa, #d81b60)',
    // AI-inspired gradient background
    border: 'none',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    transition: 'all 0.3s ease' // Smooth animation
  };

  // Merge default styles with provided styles
  Object.assign(button.style, defaultStyles, styles);

  // Styles when the mouse hovers over the button
  button.addEventListener('mouseover', function () {
    button.style.background = 'linear-gradient(90deg, #d81b60, #8e24aa)';
    button.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.3)'; // Enhance shadow
    button.style.transform = 'translateY(-2px)'; // Hover effect
  });

  // Revert styles when the mouse leaves the button
  button.addEventListener('mouseout', function () {
    button.style.background = 'linear-gradient(90deg, #8e24aa, #d81b60)';
    button.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
    button.style.transform = 'translateY(0)';
  });
  return button;
}

/***/ }),

/***/ "./src/createPopupDiv.js":
/*!*******************************!*\
  !*** ./src/createPopupDiv.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createPopupDiv: () => (/* binding */ createPopupDiv)
/* harmony export */ });
function createPopupDiv(titleText, contentGenerator) {
  // Create popup div and set basic styles
  var popupDiv = document.createElement("div");
  popupDiv.style.position = "fixed";
  popupDiv.style.top = "50%";
  popupDiv.style.left = "50%";
  popupDiv.style.transform = "translate(-50%, -50%)";
  popupDiv.style.backgroundColor = "white";
  popupDiv.style.boxShadow = "0 0 10px rgba(0,0,0,0.5)";
  popupDiv.style.zIndex = "1000";
  popupDiv.style.width = "400px";

  // Set innerHTML for popup div
  popupDiv.innerHTML = "\n        <div class=\"title-bar\" style=\"\n          background-color: #f3f4f6;\n          color: black;\n          padding: 10px;\n          cursor: move;\n          font-weight: bold;\n          display: flex;\n          justify-content: space-between;\n        \">\n          <span>".concat(titleText, "</span>\n          <button class=\"close-button\" style=\"\n            background: none;\n            border: none;\n            color: black;\n            font-size: 16px;\n            cursor: pointer;\n            margin-left: 10px;\n          \">X</button>\n        </div>\n        <div class=\"content-div\" style=\"padding: 20px;\"></div>\n      ");

  // Append popup to document body
  document.body.appendChild(popupDiv);

  // Get reference to the close button and content div
  var titleCloseButton = popupDiv.querySelector(".close-button");
  var contentDiv = popupDiv.querySelector(".content-div");

  // Close button click event listener
  titleCloseButton.addEventListener("click", function () {
    document.body.removeChild(popupDiv);
  });

  // Implement dragging functionality
  var titleBar = popupDiv.querySelector(".title-bar");
  var isDragging = false;
  var offsetX = 0;
  var offsetY = 0;
  titleBar.addEventListener("mousedown", function (e) {
    isDragging = true;
    offsetX = e.clientX - popupDiv.getBoundingClientRect().left;
    offsetY = e.clientY - popupDiv.getBoundingClientRect().top;
    popupDiv.style.transition = "none";
  });
  document.addEventListener("mousemove", function (e) {
    if (isDragging) {
      popupDiv.style.left = "".concat(e.clientX - offsetX, "px");
      popupDiv.style.top = "".concat(e.clientY - offsetY, "px");
      popupDiv.style.transform = "none";
    }
  });
  document.addEventListener("mouseup", function () {
    isDragging = false;
  });

  // Generate custom content
  if (contentGenerator && typeof contentGenerator === "function") {
    contentGenerator(contentDiv);
  }
}

/***/ }),

/***/ "./src/polish.js":
/*!***********************!*\
  !*** ./src/polish.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addPolishButton: () => (/* binding */ addPolishButton)
/* harmony export */ });
/* harmony import */ var _createPopupDiv_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createPopupDiv.js */ "./src/createPopupDiv.js");
/* harmony import */ var _prompt_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prompt-api.js */ "./src/prompt-api.js");
/* harmony import */ var _showModal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./showModal.js */ "./src/showModal.js");
/* harmony import */ var _button_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./button.js */ "./src/button.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }




function addPolishButton(subjectArea, emailBodyArea) {
  console.log("Creating polish button...");

  // Create polish button
  var polishButton = (0,_button_js__WEBPACK_IMPORTED_MODULE_3__.createButton)("polish-button", "Polish Text");

  // Insert button next to the subject area
  subjectArea.insertAdjacentElement("afterend", polishButton);
  polishButton.addEventListener("click", function () {
    return openPromptPopup(emailBodyArea);
  });

  // Check if the button is added to the DOM
  if (document.querySelector("#polish-button")) {
    console.log("Polish button successfully added.");
  } else {
    console.error("Failed to add polish button.");
  }
}
function openPromptPopup(emailBodyArea) {
  console.log("Creating polish pop-up window...");
  (0,_createPopupDiv_js__WEBPACK_IMPORTED_MODULE_0__.createPopupDiv)("Polish Email", function (contentDiv) {
    // Set innerHTML for content div
    contentDiv.innerHTML = "\n      <p style=\"margin-top: 0px; margin-bottom: 10px;\">Choose a style for the email:</p>\n      <div id=\"buttonContainer\" style=\"display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 10px;\">\n        <button class=\"style-button\" data-style=\"Professional\">Professional</button>\n        <button class=\"style-button\" data-style=\"Friendly\">Friendly</button>\n        <button class=\"style-button\" data-style=\"Concise\">Concise</button>\n        <button class=\"style-button\" data-style=\"Grammar and spelling check only\">Grammar & spelling check only</button>\n      </div>\n\n      <textarea id=\"polishPrompt\" placeholder=\"Input additional instructions for polishing the email...\" style=\"width: 100%; height: 100px;\"></textarea>\n      <button id=\"generateButton\" style=\"margin-top: 10px;\">Generate Polished Text</button>\n      <textarea id=\"polishedResult\" style=\"width: 100%; height: 100px; margin-top: 10px;\" readonly></textarea>\n      <button id=\"insertButton\" style=\"margin-top: 10px;\">Insert Polished Text</button>\n      ";

    // Get references to elements inside contentDiv
    var promptInput = contentDiv.querySelector("#polishPrompt");
    var generateButton = contentDiv.querySelector("#generateButton");
    var resultTextarea = contentDiv.querySelector("#polishedResult");
    var insertButton = contentDiv.querySelector("#insertButton");

    // Handle style button selection
    var selectedStyle = "Professional";
    contentDiv.querySelectorAll(".style-button").forEach(function (button) {
      button.addEventListener("click", function () {
        selectedStyle = button.dataset.style;

        // Highlight the selected button and reset others
        contentDiv.querySelectorAll(".style-button").forEach(function (btn) {
          btn.style.backgroundColor = btn === button ? "#007bff" : "";
          btn.style.color = btn === button ? "white" : "";
        });
        console.log("Selected style: ".concat(selectedStyle));
      });

      // Set initial styles for the default selected button
      if (button.dataset.style === selectedStyle) {
        button.style.backgroundColor = "#007bff";
        button.style.color = "white";
      }
    });

    // Generate polished text
    generateButton.addEventListener("click", /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var userInput, existingText, prompt, polishedText;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            userInput = promptInput.value.trim();
            if (!(!emailBodyArea || !emailBodyArea.innerText.trim())) {
              _context.next = 4;
              break;
            }
            (0,_showModal_js__WEBPACK_IMPORTED_MODULE_2__.showModal)({
              message: "No text found in the email body area.",
              buttons: [{
                text: "Close",
                onClick: function onClick(modal) {
                  console.log("Modal closed.");
                  document.body.removeChild(modal);
                }
              }]
            });
            return _context.abrupt("return");
          case 4:
            existingText = emailBodyArea.innerText;
            prompt = "\n        Please polish the following email content in a ".concat(selectedStyle.toLowerCase(), " style.\n        Return a single email template, without repeating sections, and ensure it is ready to be sent.\n        Do not include a subject line. Do not include extra notes, suggestions, or alternative templates.\n        ").concat(userInput ? "Additional instructions: " + userInput : "", "\n        ").concat(existingText, "\n      "); // Show loading message
            resultTextarea.value = "Generating polished text, please wait...";

            // Call the API to polish the text
            _context.prev = 7;
            _context.next = 10;
            return (0,_prompt_api_js__WEBPACK_IMPORTED_MODULE_1__.callAIPromptAPI)(prompt);
          case 10:
            polishedText = _context.sent;
            resultTextarea.value = polishedText.replace(/^Subject:.*$/m, "").trim() || "Error generating polished text.";
            _context.next = 17;
            break;
          case 14:
            _context.prev = 14;
            _context.t0 = _context["catch"](7);
            (0,_showModal_js__WEBPACK_IMPORTED_MODULE_2__.showModal)({
              message: "Error generating polished text.",
              buttons: [{
                text: "Close",
                onClick: function onClick(modal) {
                  console.log("Error modal closed.");
                  document.body.removeChild(modal);
                }
              }]
            });
          case 17:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[7, 14]]);
    })));

    // Insert polished text into the email body
    insertButton.addEventListener("click", function () {
      // const emailBodyArea = document.querySelector('.Am.Al.editable');
      var resultText = resultTextarea.value.trim();
      if (!emailBodyArea) {
        (0,_showModal_js__WEBPACK_IMPORTED_MODULE_2__.showModal)({
          message: "No email body area found to insert the text.",
          buttons: [{
            text: "Close",
            onClick: function onClick(modal) {
              console.log("Modal closed.");
              document.body.removeChild(modal);
            }
          }]
        });
        return;
      }
      if (!resultText) {
        (0,_showModal_js__WEBPACK_IMPORTED_MODULE_2__.showModal)({
          message: "The generated text area is empty. Please provide text to insert.",
          buttons: [{
            text: "Close",
            onClick: function onClick(modal) {
              console.log("Modal closed.");
              document.body.removeChild(modal);
            }
          }]
        });
        return;
      }
      (0,_showModal_js__WEBPACK_IMPORTED_MODULE_2__.showModal)({
        message: "Are you sure you want to insert the polished text into the email body?",
        buttons: [{
          text: "Confirm",
          color: "white",
          backgroundColor: "#007bff",
          onClick: function onClick(modal) {
            emailBodyArea.innerText = resultText;
            resultTextarea.value = ""; // Clear the result area
            console.log("Text inserted successfully.");
            document.body.removeChild(modal);
          }
        }, {
          text: "Cancel",
          onClick: function onClick(modal) {
            console.log("Insertion cancelled.");
            document.body.removeChild(modal);
          }
        }]
      });
    });
  });
}

/***/ }),

/***/ "./src/prompt-api.js":
/*!***************************!*\
  !*** ./src/prompt-api.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   callAIPromptAPI: () => (/* binding */ callAIPromptAPI)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function callAIPromptAPI(_x) {
  return _callAIPromptAPI.apply(this, arguments);
}
function _callAIPromptAPI() {
  _callAIPromptAPI = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(prompt) {
    var _yield$ai$languageMod, available, session, result;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return ai.languageModel.capabilities();
        case 3:
          _yield$ai$languageMod = _context.sent;
          available = _yield$ai$languageMod.available;
          if (!(available !== "no")) {
            _context.next = 15;
            break;
          }
          _context.next = 8;
          return ai.languageModel.create();
        case 8:
          session = _context.sent;
          _context.next = 11;
          return session.prompt(prompt);
        case 11:
          result = _context.sent;
          return _context.abrupt("return", result);
        case 15:
          console.error("AI model is not available.");
          return _context.abrupt("return", "AI model is not available.");
        case 17:
          _context.next = 24;
          break;
        case 19:
          _context.prev = 19;
          _context.t0 = _context["catch"](0);
          console.error("Error calling AI Prompt API:", _context.t0);
          console.error("Prompt causing error:", prompt); // 输出导致错误的 prompt
          return _context.abrupt("return", "Error occurred while calling AI Prompt API.");
        case 24:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 19]]);
  }));
  return _callAIPromptAPI.apply(this, arguments);
}

/***/ }),

/***/ "./src/showModal.js":
/*!**************************!*\
  !*** ./src/showModal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   showModal: () => (/* binding */ showModal)
/* harmony export */ });
function showModal(_ref) {
  var message = _ref.message,
    buttons = _ref.buttons;
  var modal = document.createElement("div");
  modal.style.position = "fixed";
  modal.style.top = "50%";
  modal.style.left = "50%";
  modal.style.transform = "translate(-50%, -50%)";
  modal.style.padding = "20px";
  modal.style.backgroundColor = "white";
  modal.style.border = "1px solid #ccc";
  modal.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
  modal.style.zIndex = "1000";
  modal.style.textAlign = "center";

  // Add content to the modal
  modal.innerHTML = "\n      <p>".concat(message, "</p>\n      <div id=\"modalButtonContainer\" style=\"margin-top: 10px;\"></div>\n    ");
  var buttonContainer = modal.querySelector("#modalButtonContainer");
  buttons.forEach(function (_ref2) {
    var text = _ref2.text,
      color = _ref2.color,
      backgroundColor = _ref2.backgroundColor,
      onClick = _ref2.onClick,
      _ref2$style = _ref2.style,
      style = _ref2$style === void 0 ? {} : _ref2$style;
    var button = document.createElement("button");
    button.textContent = text;
    button.style.margin = "0 5px";
    button.style.padding = "5px 10px";
    button.style.color = color || "black";
    button.style.backgroundColor = backgroundColor || ""; // Default color
    Object.assign(button.style, style); // Apply optional styles
    button.addEventListener("click", function () {
      onClick(modal); // Execute button action
    });
    buttonContainer.appendChild(button);
  });

  // Add modal to the document
  document.body.appendChild(modal);
  return modal;
}

/***/ }),

/***/ "./src/subject.js":
/*!************************!*\
  !*** ./src/subject.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addCreateSubjectButton: () => (/* binding */ addCreateSubjectButton)
/* harmony export */ });
/* harmony import */ var _prompt_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prompt-api.js */ "./src/prompt-api.js");
/* harmony import */ var _createPopupDiv_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createPopupDiv.js */ "./src/createPopupDiv.js");
/* harmony import */ var _button_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button.js */ "./src/button.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }



console.log("Content script loaded.");
var subjectOptions = []; // Array to hold the generated subjects
var currentIndex = 0; // Current index in the subject options

function addCreateSubjectButton(subjectArea, emailBodyArea) {
  console.log("Creating buttons...");
  var createSubjectButton = (0,_button_js__WEBPACK_IMPORTED_MODULE_2__.createButton)("create-subject-button", "Create Subject");
  subjectArea.insertAdjacentElement("afterend", createSubjectButton);
  console.log("Create Subject button added.");

  // Event listener for "Create Subject" button
  createSubjectButton.addEventListener("click", /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var _emailBodyArea$innerT;
    var bodyText, prompt, result;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          console.log("Generating subject...");
          bodyText = (_emailBodyArea$innerT = emailBodyArea.innerText) === null || _emailBodyArea$innerT === void 0 ? void 0 : _emailBodyArea$innerT.trim(); // Ensure bodyText is trimmed
          // Check if bodyText is empty
          if (!(!bodyText || bodyText.length === 0)) {
            _context.next = 6;
            break;
          }
          console.error("Email content is empty.");
          showEmptyContentPopup(); // Show popup if email content is empty
          return _context.abrupt("return");
        case 6:
          // Show "Generating subject lines..." in subject line
          subjectArea.value = "Generating subject lines...";
          prompt = "Write three email subject lines in English based on the following email content. Do not attempt to interpret or modify any technical terms, abbreviations, or acronyms. Treat them as is. Email content:\n\n".concat(bodyText, "\n\nOnly return the subject lines, separated by new lines.");
          console.log("Prompt:", prompt);
          _context.prev = 9;
          _context.next = 12;
          return (0,_prompt_api_js__WEBPACK_IMPORTED_MODULE_0__.callAIPromptAPI)(prompt);
        case 12:
          result = _context.sent;
          subjectOptions = result.split("\n") // Split by new lines
          .map(function (subject) {
            return subject.trim();
          }) // Remove extra spaces
          .filter(function (subject) {
            return subject !== "";
          }); // Remove empty entries
          currentIndex = 0; // Reset index to the first subject

          if (subjectOptions.length > 0) {
            subjectArea.value = subjectOptions[currentIndex]; // Display the first subject
            console.log("Generated subjects:", subjectOptions);
            showNavigationButtons(subjectArea); // Show navigation buttons
          } else {
            console.error("No valid subjects generated.");
            subjectArea.value = "No subject generated.";
          }
          _context.next = 22;
          break;
        case 18:
          _context.prev = 18;
          _context.t0 = _context["catch"](9);
          console.error("Error generating subjects:", _context.t0);
          subjectArea.value = "Error occurred while generating subjects.";
        case 22:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[9, 18]]);
  })));
}
function showNavigationButtons(subjectArea) {
  var navContainer = document.getElementById("nav-container");

  // If the container already exists, remove it
  if (navContainer) {
    navContainer.remove();
  }

  // Create a new navigation container
  navContainer = document.createElement("div");
  navContainer.id = "nav-container";
  navContainer.style.display = "inline-flex";
  navContainer.style.alignItems = "center";
  navContainer.style.gap = "4px";
  navContainer.style.marginTop = "10px";

  // Create "<" button
  var prevButton = document.createElement("button");
  prevButton.id = "prev-button";
  prevButton.innerText = "<";
  prevButton.style.cursor = "pointer";
  //const prevButton = createButton("prev-button", "<");//not very good

  // Create page indicator
  var pageIndicator = document.createElement("span");
  pageIndicator.id = "page-indicator";
  pageIndicator.innerText = "".concat(currentIndex + 1, "/").concat(subjectOptions.length);
  pageIndicator.style.fontSize = "14px";
  pageIndicator.style.color = "#555";

  // Create ">" button
  var nextButton = document.createElement("button");
  nextButton.id = "next-button";
  nextButton.innerText = ">";
  nextButton.style.cursor = "pointer";
  //const nextButton = createButton("next-button", ">");

  // Append navigation elements to the container
  navContainer.appendChild(prevButton);
  navContainer.appendChild(pageIndicator);
  navContainer.appendChild(nextButton);

  // Append navigation buttons below the subjectArea but aligned with Create Button
  var createSubjectButton = document.getElementById("create-subject-button");
  createSubjectButton.style.marginRight = "10px";
  createSubjectButton.parentElement.insertBefore(navContainer, createSubjectButton.nextSibling);

  // Event listeners for navigation buttons
  prevButton.addEventListener("click", function () {
    if (subjectOptions.length > 0) {
      currentIndex = (currentIndex - 1 + subjectOptions.length) % subjectOptions.length; // Loop back to last if at first
      subjectArea.value = subjectOptions[currentIndex];
      pageIndicator.innerText = "".concat(currentIndex + 1, "/").concat(subjectOptions.length);
      console.log("Previous clicked. Current Index:", currentIndex);
    }
  });
  nextButton.addEventListener("click", function () {
    if (subjectOptions.length > 0) {
      currentIndex = (currentIndex + 1) % subjectOptions.length; // Loop to first if at last
      subjectArea.value = subjectOptions[currentIndex];
      pageIndicator.innerText = "".concat(currentIndex + 1, "/").concat(subjectOptions.length);
      console.log("Next clicked. Current Index:", currentIndex);
    }
  });
}

// Show popup for empty content
function showEmptyContentPopup() {
  console.log("Displaying empty content popup...");
  (0,_createPopupDiv_js__WEBPACK_IMPORTED_MODULE_1__.createPopupDiv)("Error", function (contentDiv) {
    contentDiv.innerText = "Email content cannot be empty. Please provide valid content before generating subject lines.";
  });
}

/***/ }),

/***/ "./src/summarize.js":
/*!**************************!*\
  !*** ./src/summarize.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addSummarizeButton: () => (/* binding */ addSummarizeButton)
/* harmony export */ });
/* harmony import */ var _prompt_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prompt-api.js */ "./src/prompt-api.js");
/* harmony import */ var _createPopupDiv_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createPopupDiv.js */ "./src/createPopupDiv.js");
/* harmony import */ var _button_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button.js */ "./src/button.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }



console.log("Summarize content script loaded.");

// Add Summarize button and define click event
function addSummarizeButton(subjectElement) {
  var summarizeButton = (0,_button_js__WEBPACK_IMPORTED_MODULE_2__.createButton)("summarize-button", "Summarize");
  subjectElement.insertAdjacentElement("afterend", summarizeButton);
  summarizeButton.addEventListener("click", /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var emailContent, prompt, summary;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          emailContent = getEmailContent();
          if (emailContent) {
            _context.next = 4;
            break;
          }
          console.error("No email content detected.");
          return _context.abrupt("return");
        case 4:
          //initialize the summarize popup
          getSummaryPopup("Summarizing...");

          // Build prompt and call API using callAIPromptAPI
          prompt = "Summarize the following email content in 100 words or less:\n\n".concat(emailContent);
          console.log("Generated Prompt:", prompt);
          _context.prev = 7;
          _context.next = 10;
          return (0,_prompt_api_js__WEBPACK_IMPORTED_MODULE_0__.callAIPromptAPI)(prompt);
        case 10:
          summary = _context.sent;
          if (summary && summary.trim() !== "") {
            getSummaryPopup(summary); // Update popup content with summary
          } else {
            console.error("Failed to generate summary or summary is empty.");
            getSummaryPopup("Failed to generate a summary. Please try again.");
          }
          _context.next = 18;
          break;
        case 14:
          _context.prev = 14;
          _context.t0 = _context["catch"](7);
          console.error("Error generating summary:", _context.t0);
          getSummaryPopup("An error occurred while generating the summary.");
        case 18:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[7, 14]]);
  })));
}

// Get email content and clean it up
function getEmailContent() {
  //choose gmail or outlook
  var emailBodyContainer = document.querySelector(".ii.gt") || document.querySelector('div[aria-label="Message body"]');
  var emailContent = "";
  if (emailBodyContainer) {
    emailContent = emailBodyContainer.innerText.trim();
  } else {
    console.error("Unable to find the email content container.");
    return "";
  }
  return emailContent.replace(/[^\x00-\x7F]/g, " ").slice(0, 1000);
}

// Show or update popup window
function getSummaryPopup(content) {
  // Check if popup content already exists
  var summaryContent = document.querySelector("#summary-content");
  if (summaryContent) {
    // If exists, update content
    summaryContent.innerText = content;
  } else {
    // If not exists, create the popup
    (0,_createPopupDiv_js__WEBPACK_IMPORTED_MODULE_1__.createPopupDiv)("Summary", function (contentDiv) {
      // Initialize content
      contentDiv.id = "summary-content";
      contentDiv.innerText = content;
    });
  }
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/observer.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auto_write_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auto-write.js */ "./src/auto-write.js");
/* harmony import */ var _summarize_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./summarize.js */ "./src/summarize.js");
/* harmony import */ var _polish_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./polish.js */ "./src/polish.js");
/* harmony import */ var _subject_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./subject.js */ "./src/subject.js");
/* harmony import */ var _auto_reply_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auto-reply.js */ "./src/auto-reply.js");






// Detect the current platform (Gmail or Outlook)
var isGmail = window.location.hostname.includes("mail.google.com");
var isOutlook = window.location.hostname.includes("outlook.office365.com");

// Initialize MutationObserver to watch for new compose windows or email details
var observer = new MutationObserver(function (mutations) {
  mutations.forEach(function () {
    if (isGmail) {
      handleMutations({
        subjectArea: 'input[name="subjectbox"]',
        emailBodyArea: '.Am.Al.editable',
        subjectElement: 'h2.hP',
        replyArea: 'form.bAs',
        newMsgEl: 'div.aYF'
      }, "Gmail");
    } else if (isOutlook) {
      handleMutations({
        subjectArea: 'div.ZMK7F',
        emailBodyArea: 'div[aria-label="Message body, press Alt+F10 to exit"]',
        subjectElement: 'span.JdFsz',
        replyArea: 'div.UVFSO.GCol2'
      }, "Outlook");
    }
  });
});

// Generalized mutation handling
function handleMutations(selectors, platform) {
  var subjectArea = selectors.subjectArea,
    emailBodyArea = selectors.emailBodyArea,
    subjectElement = selectors.subjectElement,
    replyArea = selectors.replyArea,
    newMsgEl = selectors.newMsgEl;
  var subjectAreaEl = document.querySelector(subjectArea);
  var emailBodyAreaEl = document.querySelector(emailBodyArea);
  var subjectElementEl = document.querySelector(subjectElement);
  var replyAreaEl = document.querySelector(replyArea);
  var newMsgElDetected = newMsgEl ? document.querySelector(newMsgEl) : true;
  var actions = [{
    condition: newMsgElDetected && subjectAreaEl && emailBodyAreaEl && !document.querySelector("#auto-write-button"),
    action: function action() {
      return (0,_auto_write_js__WEBPACK_IMPORTED_MODULE_0__.addAutoWriteButton)(subjectAreaEl, emailBodyAreaEl);
    },
    message: "".concat(platform, ": Compose window detected. Adding auto-write button...")
  }, {
    condition: subjectElementEl && !document.getElementById("summarize-button"),
    action: function action() {
      return (0,_summarize_js__WEBPACK_IMPORTED_MODULE_1__.addSummarizeButton)(subjectElementEl);
    },
    message: "".concat(platform, ": Email detail detected. Adding summarize button...")
  }, {
    condition: newMsgElDetected && subjectAreaEl && emailBodyAreaEl && !document.querySelector("#polish-button"),
    action: function action() {
      return (0,_polish_js__WEBPACK_IMPORTED_MODULE_2__.addPolishButton)(subjectAreaEl, emailBodyAreaEl);
    },
    message: "".concat(platform, ": Compose window detected. Adding polish button...")
  }, {
    condition: newMsgElDetected && subjectAreaEl && emailBodyAreaEl && !document.querySelector("#create-subject-button"),
    action: function action() {
      return (0,_subject_js__WEBPACK_IMPORTED_MODULE_3__.addCreateSubjectButton)(subjectAreaEl, emailBodyAreaEl);
    },
    message: "".concat(platform, ": Compose window detected. Adding create subject button...")
  }, {
    condition: !newMsgElDetected && replyAreaEl && emailBodyAreaEl && !document.querySelector("#auto-reply-button"),
    action: function action() {
      return (0,_auto_reply_js__WEBPACK_IMPORTED_MODULE_4__.addAutoReplyButton)(replyAreaEl, emailBodyAreaEl);
    },
    message: "".concat(platform, ": Reply window detected. Adding auto-reply button...")
  }];
  actions.forEach(function (_ref) {
    var condition = _ref.condition,
      action = _ref.action,
      message = _ref.message;
    if (condition) {
      console.log(message);
      action();
    }
  });
}

// Start observing
observer.observe(document, {
  childList: true,
  subtree: true
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map