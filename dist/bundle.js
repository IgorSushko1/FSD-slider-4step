/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/refactoring/js/refactoringIndex.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./is_refactoring.css":
/*!****************************!*\
  !*** ./is_refactoring.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/refactoring/js/refactoringIndex.js":
/*!************************************************!*\
  !*** ./src/refactoring/js/refactoringIndex.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _is_refactoring_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../is_refactoring.css */ "./is_refactoring.css");
/* harmony import */ var _is_refactoring_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_is_refactoring_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _refactoringView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./refactoringView */ "./src/refactoring/js/refactoringView.js");

// eslint-disable-next-line import/no-unresolved

const view = new _refactoringView__WEBPACK_IMPORTED_MODULE_1__["ViewHorizontal"]();
view.setStartingConditions({
    elementId: '#iss',
    sign: '$',
    lowerScaleBound: 100,
    upperScaleBound: 1500,
    lowerSliderValue: 200,
    upperSliderValue: 800,
    sliderType: 'double',
    directionType: 'horizontal',
    step: 10,
    tooltip: 'on',
    valueStateField: 'on',
});
view.init();
const viewSingleHorizontal = new _refactoringView__WEBPACK_IMPORTED_MODULE_1__["ViewHorizontal"]();
viewSingleHorizontal.setStartingConditions({
    elementId: '#iss_2',
    sign: '$',
    lowerScaleBound: 100,
    upperScaleBound: 1500,
    lowerSliderValue: 200,
    upperSliderValue: 800,
    sliderType: 'single',
    directionType: 'horizontal',
    step: 10,
    tooltip: 'on',
    valueStateField: 'on',
});
viewSingleHorizontal.init();
const viewSingleVertical = new _refactoringView__WEBPACK_IMPORTED_MODULE_1__["ViewHorizontal"]();
viewSingleVertical.setStartingConditions({
    elementId: '#iss_3',
    sign: '$',
    lowerScaleBound: 100,
    upperScaleBound: 1500,
    lowerSliderValue: 200,
    upperSliderValue: 800,
    sliderType: 'single',
    directionType: 'vertical',
    step: 10,
    tooltip: 'on',
    valueStateField: 'on',
});
viewSingleVertical.init();
const viewDoubleVertical = new _refactoringView__WEBPACK_IMPORTED_MODULE_1__["ViewHorizontal"]();
viewDoubleVertical.setStartingConditions({
    elementId: '#iss_4',
    sign: '$',
    lowerScaleBound: 100,
    upperScaleBound: 1500,
    lowerSliderValue: 200,
    upperSliderValue: 800,
    sliderType: 'double',
    directionType: 'vertical',
    step: 10,
    tooltip: 'on',
    valueStateField: 'on',
});
viewDoubleVertical.init();
//# sourceMappingURL=refactoringIndex.js.map

/***/ }),

/***/ "./src/refactoring/js/refactoringView.js":
/*!***********************************************!*\
  !*** ./src/refactoring/js/refactoringView.js ***!
  \***********************************************/
/*! exports provided: ViewHorizontal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewHorizontal", function() { return ViewHorizontal; });
class ViewHorizontal {
    constructor() {
        this.bindController = (controller) => {
            this.controller = controller;
        };
        this.setStartingConditions = (obj) => {
            this.elementId = obj.elementId || '#iss';
            this.elem = document.querySelector(obj.elementId);
            this.sign = obj.sign || 'R';
            this.lowerScale = Number(obj.lowerScaleBound) || 0;
            this.upperScale = Number(obj.upperScaleBound) || 1000;
            this.lowerSliderValue = Number(obj.lowerSliderValue) || 200;
            this.upperSliderValue = Number(obj.upperSliderValue) || 800;
            this.sliderType = obj.sliderType || 'single';
            this.directionType = obj.directionType || 'horizontal';
            this.step = obj.step || 2;
            this.tooltip = obj.tooltip || 'on';
            this.valueStateField = obj.valueStateField || 'on';
        };
        this.getStartingConditions = () => ({
            elementId: this.elementId,
            sign: this.sign,
            lowerScaleBound: this.lowerScale,
            upperScaleBound: this.upperScale,
            lowerSliderValue: this.lowerSliderValue,
            upperSliderValue: this.upperSliderValue,
            sliderType: this.sliderType,
            step: this.step,
            tooltip: this.tooltip,
            valueStateField: this.valueStateField,
        });
        this.init = () => {
            this.createDOM();
            this.writeDOM();
            this.createListenerOnSlider();
            this.writeGeometryDOMtoVariables();
        };
        this.createDOM = () => {
            if (this.sliderType === 'double') {
                this.createDoubleDOM();
            }
            if (this.sliderType === 'single') {
                this.createSingleDOM();
            }
        };
        this.createSingleDOM = () => {
            this.elem.innerHTML = '<div class="iss__value-field">'
                + '<span class="iss_staticField"></span>'
                + '</div>'
                + '<div class= "iss-container">'
                + '<div class= "iss__scale"></div>'
                + '<div class="iss__color-bar"></div>'
                + '<div class="iss__single_fly-value iss__tooltip"></div>'
                + '<div class="iss__single iss__drag"></div>'
                + '</div>';
        };
        this.createDoubleDOM = () => {
            this.elem.innerHTML = '<div class="iss__value-field">'
                + '<span class="iss_staticField"></span>'
                + '-'
                + '<span class="iss_staticField"></span>'
                + '</div>'
                + '<div class= "iss-container">'
                + '<div class= "iss__scale"></div>'
                + '<div class="iss__double_fly-value-1 iss__tooltip"></div>'
                + '<div class="iss__double_1_horizontal iss__drag"></div>'
                + '<div class="iss__double_fly-value-2 iss__tooltip"></div>'
                + '<div class="iss__double_2_horizontal iss__drag"></div>'
                + '<div class="iss__color-bar"></div>'
                + '</div>';
        };
        this.writeDOM = () => {
            this.checkElementsInDOM();
            if (this.sliderInDOM.length === 1) {
                this.writeSingleDOMtoVariables();
                this.writeSingleSliderIndent();
            }
            else if (this.sliderInDOM.length === 2) {
                this.writeDoubleDOMtoVariables();
                this.writeDoubleSliderIndent();
            }
        };
        this.checkElementsInDOM = () => {
            const DOMElements = this.elem.querySelectorAll('.iss__drag');
            if ((DOMElements.length > 0)) {
                this.sliderInDOM = DOMElements;
            }
        };
        this.writeSingleDOMtoVariables = () => {
            [this.scale] = this.returnElementsFromDOM('.iss__scale', 1);
            [this.singleSlider] = this.returnElementsFromDOM('.iss__drag', 1);
            [this.staticFieldSingle] = this.returnElementsFromDOM('.iss_staticField', 1);
            [this.flyFieldSingle] = this.returnElementsFromDOM('.iss__tooltip', 1);
            [this.ribbon] = this.returnElementsFromDOM('.iss__color-bar', 1);
        };
        this.writeDoubleDOMtoVariables = () => {
            [this.scale] = this.returnElementsFromDOM('.iss__scale', 1);
            [this.lowerSlider, this.upperSlider] = this.returnElementsFromDOM('.iss__drag', 2);
            [this.staticFieldLower, this.staticFieldUpper] = this.returnElementsFromDOM('.iss_staticField', 2);
            [this.flyFieldLower, this.flyFieldUpper] = this.returnElementsFromDOM('.iss__tooltip', 2);
            [this.ribbon] = this.returnElementsFromDOM('.iss__color-bar', 1);
        };
        this.writeSingleSliderIndent = () => {
            const elem = this.returnElementsFromDOM('.iss__drag', 1);
            this.singleSliderPosition = this.returnIndent(elem[0]);
        };
        this.writeDoubleSliderIndent = () => {
            const elems = this.returnElementsFromDOM('.iss__drag', 2);
            this.lowerSliderPosition = this.returnIndent(elems[0]);
            this.upperSliderPosition = this.returnIndent(elems[1]);
        };
        this.returnIndent = (arr) => {
            if (this.directionType === 'horizontal') {
                return arr.offsetLeft;
            }
            if (this.directionType === 'vertical') {
                return arr.offsetTop;
            }
        };
        this.returnElementsFromDOM = (className, length) => {
            const DOMElements = this.elem.querySelectorAll(className);
            if ((DOMElements.length === length)) {
                return DOMElements;
            }
            return false;
        };
        this.writeGeometryDOMtoVariables = () => {
            this.setDirection();
            this.writeGeometryOfSlider();
        };
        this.setDirection = () => {
            if (this.directionType === 'horizontal') {
                this.mainAxisSize = this.scale.offsetWidth;
                // console.log(`horizontal indent ${this.indent} -- this.mainAxisSize ${this.mainAxisSize}`);
            }
            if (this.directionType === 'vertical') {
                // this.indent = this.clientRect.top;
                this.mainAxisSize = this.scale.offsetHeight;
                // console.log(`indent ${this.indent} -- this.mainAxisSize ${this.mainAxisSize}`);
            }
        };
        this.writeGeometryOfSlider = () => {
            if (this.sliderInDOM.length === 1) {
                this.sliderWidth = this.singleSlider.offsetWidth;
                this.sliderHeight = this.singleSlider.offsetHeight;
            }
            else if (this.sliderInDOM.length === 2) {
                this.sliderWidth = this.lowerSlider.offsetWidth;
                this.sliderHeight = this.lowerSlider.offsetHeight;
            }
            this.calcPixelStep();
        };
        this.calcPixelStep = () => {
            const widthVsMoney = this.mainAxisSize / this.upperScale;
            const stepInPixel = widthVsMoney * this.step;
            if (stepInPixel < 1) {
                this.pixelStep = 1;
                this.roundedPixelStep = 1;
            }
            else {
                this.pixelStep = stepInPixel;
                this.roundedPixelStep = Math.round(stepInPixel);
            }
        };
        this.createListenerOnSlider = () => {
            if (this.sliderInDOM.length === 1) {
                this.singleSlider.onmousedown = this.eventOnSlider;
            }
            else if (this.sliderInDOM.length === 2) {
                this.lowerSlider.onmousedown = this.eventOnSlider;
                this.upperSlider.onmousedown = this.eventOnSlider;
            }
        };
        this.eventOnSlider = (_e) => {
            _e.preventDefault();
            this.setRestrictionOfSliderMovement(_e);
            document.onmouseup = this.cancelEvents;
            document.onmousemove = this.moveEventWithHoldMouse;
        };
        this.setRestrictionOfSliderMovement = (_e) => {
            if (this.sliderType === 'double') {
                this.setRestrictionForDoubleSlider(_e);
            }
            if (this.sliderType === 'single') {
                this.setRestrictionForSingleSlider();
            }
        };
        this.setRestrictionForDoubleSlider = (_e) => {
            if (_e.target === this.lowerSlider) {
                this.targetSlider = this.lowerSlider;
                this.lowerRestriction = 0;
                this.upperRestriction = this.upperSliderPosition;
                this.lowerCostRestriction = this.lowerScale;
                this.upperCostRestriction = this.getCostForSlider(this.upperRestriction);
            }
            if (_e.target === this.upperSlider) {
                this.targetSlider = this.upperSlider;
                this.lowerRestriction = this.lowerSliderPosition;
                this.upperRestriction = this.mainAxisSize;
                // console.log(`${this.lowerRestriction} lowerRestriction`);
                this.lowerCostRestriction = this.getCostForSlider(this.lowerRestriction);
                this.upperCostRestriction = this.upperScale;
                // console.log(`${this.lowerCostRestriction} lowerCostRestriction`);
            }
        };
        this.setRestrictionForSingleSlider = () => {
            this.targetSlider = this.singleSlider;
            this.upperRestriction = this.mainAxisSize;
            this.lowerRestriction = 0;
            this.upperCostRestriction = this.upperScale;
            this.lowerCostRestriction = this.lowerScale;
        };
        this.getCostForSlider = (sliderPostionInPixel) => {
            // console.log(`${sliderPostionInPixel} sliderPostionInPixel`);
            if (sliderPostionInPixel <= 0) {
                return this.lowerScale;
            }
            return ((Math.round(sliderPostionInPixel / this.pixelStep) * this.step) + this.lowerScale);
        };
        this.moveEventWithHoldMouse = (_e) => {
            const innerMousePosition = this.getMousePosition(_e);
            console.log(`${innerMousePosition} innerMousePosition`);
            const nearestRoundedStep = this.calcNearestStep(innerMousePosition);
            // console.log(`${nearestRoundedStep} nearestRoundedStep`);
            const finalPositionInPixel = this.calcFinalPosition(nearestRoundedStep);
            const finalCost = this.calcFinalCost(nearestRoundedStep);
            this.showMoneyOnScreen(finalCost);
            this.moveSlider(finalPositionInPixel);
            this.setOverlay();
            this.moveRibbon();
            this.moveTooltip();
        };
        this.getMousePosition = (_e) => {
            this.clientRect = this.scale.getBoundingClientRect();
            if (this.directionType === 'horizontal') {
                this.indent = this.clientRect.left;
                return (_e.clientX - this.indent);
            }
            if (this.directionType === 'vertical') {
                this.indent = this.clientRect.top;
                return (_e.clientY - this.indent);
            }
        };
        this.calcNearestStep = (_positionInPixel) => Math.round(_positionInPixel / this.pixelStep);
        this.calcFinalPosition = (nearestRoundedStep) => {
            const positionInPixel = nearestRoundedStep * this.pixelStep;
            if (this.isPixelsInBorder(positionInPixel)) {
                return positionInPixel;
            }
            if (positionInPixel <= this.lowerRestriction) {
                return this.lowerRestriction;
            }
            if (positionInPixel >= this.upperRestriction) {
                return this.upperRestriction;
            }
        };
        this.calcFinalCost = (nearestRoundedStep) => {
            const positionInMoney = (nearestRoundedStep * this.step) + this.lowerScale;
            if (this.isMoneyInBorder(positionInMoney)) {
                return positionInMoney;
            }
            if (positionInMoney < this.lowerCostRestriction) {
                return this.lowerCostRestriction;
            }
            if (positionInMoney > this.upperCostRestriction) {
                return this.upperCostRestriction;
            }
        };
        this.isPixelsInBorder = (position) => ((position >= this.lowerRestriction) && (position <= this.upperRestriction));
        this.isMoneyInBorder = (position) => ((position >= this.lowerCostRestriction) && (position <= this.upperCostRestriction));
        this.showMoneyOnScreen = (finalCost) => {
            const cost = `${finalCost}${this.sign}`;
            if (this.targetSlider === this.lowerSlider) {
                this.staticFieldLower.textContent = `${cost}`;
                this.flyFieldLower.textContent = `${cost}`;
            }
            if (this.targetSlider === this.upperSlider) {
                this.staticFieldUpper.textContent = `${cost}`;
                this.flyFieldUpper.textContent = `${cost}`;
            }
            if (this.targetSlider === this.singleSlider) {
                this.staticFieldSingle.textContent = `${cost}`;
                this.flyFieldSingle.textContent = `${cost}`;
            }
        };
        this.moveRibbon = () => {
            const setHorizontalRibbonVariables = () => {
                if (this.sliderInDOM.length === 1) {
                    this.ribbon.style.left = '0px';
                    this.ribbon.style.width = `${this.singleSlider.offsetLeft}px`;
                }
                else if (this.sliderInDOM.length === 2) {
                    this.ribbon.style.left = this.lowerSlider.style.left;
                    this.ribbon.style.width = `${this.upperSlider.offsetLeft - this.lowerSlider.offsetLeft}px`;
                }
            };
            const setVerticalRibbonVariables = () => {
                if (this.sliderInDOM.length === 1) {
                    this.ribbon.style.top = '0px';
                    this.ribbon.style.height = `${this.singleSlider.offsetTop}px`;
                }
                else if (this.sliderInDOM.length === 2) {
                    this.ribbon.style.top = this.lowerSlider.style.top;
                    this.ribbon.style.height = `${this.upperSlider.offsetTop - this.lowerSlider.offsetTop}px`;
                }
            };
            if (this.directionType === 'horizontal') {
                setHorizontalRibbonVariables();
            }
            if (this.directionType === 'vertical') {
                setVerticalRibbonVariables();
            }
        };
        this.moveSlider = (num) => {
            if (this.directionType === 'horizontal') {
                this.targetSlider.style.left = `${num}px`;
            }
            else if (this.directionType === 'vertical') {
                this.targetSlider.style.top = `${num}px`;
            }
        };
        this.moveTooltip = () => {
            const move = (direction, offset) => {
                if (this.sliderType === 'single') {
                    this.elem.querySelectorAll('.iss__tooltip')[0].style[direction] = `${this.singleSlider[offset]}px`;
                }
                if (this.sliderType === 'double') {
                    this.elem.querySelectorAll('.iss__tooltip')[0].style[direction] = `${this.lowerSlider[offset]}px`;
                    this.elem.querySelectorAll('.iss__tooltip')[1].style[direction] = `${this.upperSlider[offset]}px`;
                }
            };
            if (this.directionType === 'horizontal') {
                move('left', 'offsetLeft');
            }
            if (this.directionType === 'vertical') {
                move('top', 'offsetTop');
            }
        };
        this.setOverlay = () => {
            if (this.targetSlider === this.lowerSlider) {
                this.targetSlider.style.zIndex = '100';
                this.upperSlider.style.zIndex = '1';
            }
            else if (this.targetSlider === this.upperSlider) {
                this.targetSlider.style.zIndex = '100';
                this.lowerSlider.style.zIndex = '1';
            }
        };
        this.cancelEvents = () => {
            this.writeDOM();
            document.onmouseup = null;
            document.onmousemove = null;
        };
    }
    setController() {
        const obj = {
            lowerSliderValue: this.lowerSliderValue,
            upperSliderValue: this.upperSliderValue,
        };
        this.controller.getView(obj);
    }
}

//# sourceMappingURL=refactoringView.js.map

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vaXNfcmVmYWN0b3JpbmcuY3NzPzcwZTkiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZmFjdG9yaW5nL2pzL3JlZmFjdG9yaW5nSW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZmFjdG9yaW5nL2pzL3JlZmFjdG9yaW5nVmlldy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEsdUM7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQXFDO0FBQ3JDO0FBQ21EO0FBQ25ELGlCQUFpQiwrREFBYztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxpQ0FBaUMsK0RBQWM7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsK0JBQStCLCtEQUFjO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLCtCQUErQiwrREFBYztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSw0Qzs7Ozs7Ozs7Ozs7O0FDL0RBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELFlBQVksd0JBQXdCLGtCQUFrQjtBQUMxRztBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxZQUFZLHdCQUF3QixrQkFBa0I7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLHNCQUFzQjtBQUN4RDtBQUNBO0FBQ0Esa0NBQWtDLDBCQUEwQjtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixxQkFBcUI7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsbUJBQW1CO0FBQzlDO0FBQ0EsOEJBQThCLG1CQUFtQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFVBQVUsRUFBRSxVQUFVO0FBQ2xEO0FBQ0EsdURBQXVELEtBQUs7QUFDNUQsb0RBQW9ELEtBQUs7QUFDekQ7QUFDQTtBQUNBLHVEQUF1RCxLQUFLO0FBQzVELG9EQUFvRCxLQUFLO0FBQ3pEO0FBQ0E7QUFDQSx3REFBd0QsS0FBSztBQUM3RCxxREFBcUQsS0FBSztBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsNkJBQTZCO0FBQzlFO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCwwREFBMEQ7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCw0QkFBNEI7QUFDOUU7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELHdEQUF3RDtBQUMxRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELElBQUk7QUFDdEQ7QUFDQTtBQUNBLGlEQUFpRCxJQUFJO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5RkFBeUYsMEJBQTBCO0FBQ25IO0FBQ0E7QUFDQSx5RkFBeUYseUJBQXlCO0FBQ2xILHlGQUF5Rix5QkFBeUI7QUFDbEg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzBCO0FBQzFCLDJDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3JlZmFjdG9yaW5nL2pzL3JlZmFjdG9yaW5nSW5kZXguanNcIik7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgJy4uLy4uLy4uL2lzX3JlZmFjdG9yaW5nLmNzcyc7XHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW5yZXNvbHZlZFxyXG5pbXBvcnQgeyBWaWV3SG9yaXpvbnRhbCB9IGZyb20gJy4vcmVmYWN0b3JpbmdWaWV3JztcclxuY29uc3QgdmlldyA9IG5ldyBWaWV3SG9yaXpvbnRhbCgpO1xyXG52aWV3LnNldFN0YXJ0aW5nQ29uZGl0aW9ucyh7XHJcbiAgICBlbGVtZW50SWQ6ICcjaXNzJyxcclxuICAgIHNpZ246ICckJyxcclxuICAgIGxvd2VyU2NhbGVCb3VuZDogMTAwLFxyXG4gICAgdXBwZXJTY2FsZUJvdW5kOiAxNTAwLFxyXG4gICAgbG93ZXJTbGlkZXJWYWx1ZTogMjAwLFxyXG4gICAgdXBwZXJTbGlkZXJWYWx1ZTogODAwLFxyXG4gICAgc2xpZGVyVHlwZTogJ2RvdWJsZScsXHJcbiAgICBkaXJlY3Rpb25UeXBlOiAnaG9yaXpvbnRhbCcsXHJcbiAgICBzdGVwOiAxMCxcclxuICAgIHRvb2x0aXA6ICdvbicsXHJcbiAgICB2YWx1ZVN0YXRlRmllbGQ6ICdvbicsXHJcbn0pO1xyXG52aWV3LmluaXQoKTtcclxuY29uc3Qgdmlld1NpbmdsZUhvcml6b250YWwgPSBuZXcgVmlld0hvcml6b250YWwoKTtcclxudmlld1NpbmdsZUhvcml6b250YWwuc2V0U3RhcnRpbmdDb25kaXRpb25zKHtcclxuICAgIGVsZW1lbnRJZDogJyNpc3NfMicsXHJcbiAgICBzaWduOiAnJCcsXHJcbiAgICBsb3dlclNjYWxlQm91bmQ6IDEwMCxcclxuICAgIHVwcGVyU2NhbGVCb3VuZDogMTUwMCxcclxuICAgIGxvd2VyU2xpZGVyVmFsdWU6IDIwMCxcclxuICAgIHVwcGVyU2xpZGVyVmFsdWU6IDgwMCxcclxuICAgIHNsaWRlclR5cGU6ICdzaW5nbGUnLFxyXG4gICAgZGlyZWN0aW9uVHlwZTogJ2hvcml6b250YWwnLFxyXG4gICAgc3RlcDogMTAsXHJcbiAgICB0b29sdGlwOiAnb24nLFxyXG4gICAgdmFsdWVTdGF0ZUZpZWxkOiAnb24nLFxyXG59KTtcclxudmlld1NpbmdsZUhvcml6b250YWwuaW5pdCgpO1xyXG5jb25zdCB2aWV3U2luZ2xlVmVydGljYWwgPSBuZXcgVmlld0hvcml6b250YWwoKTtcclxudmlld1NpbmdsZVZlcnRpY2FsLnNldFN0YXJ0aW5nQ29uZGl0aW9ucyh7XHJcbiAgICBlbGVtZW50SWQ6ICcjaXNzXzMnLFxyXG4gICAgc2lnbjogJyQnLFxyXG4gICAgbG93ZXJTY2FsZUJvdW5kOiAxMDAsXHJcbiAgICB1cHBlclNjYWxlQm91bmQ6IDE1MDAsXHJcbiAgICBsb3dlclNsaWRlclZhbHVlOiAyMDAsXHJcbiAgICB1cHBlclNsaWRlclZhbHVlOiA4MDAsXHJcbiAgICBzbGlkZXJUeXBlOiAnc2luZ2xlJyxcclxuICAgIGRpcmVjdGlvblR5cGU6ICd2ZXJ0aWNhbCcsXHJcbiAgICBzdGVwOiAxMCxcclxuICAgIHRvb2x0aXA6ICdvbicsXHJcbiAgICB2YWx1ZVN0YXRlRmllbGQ6ICdvbicsXHJcbn0pO1xyXG52aWV3U2luZ2xlVmVydGljYWwuaW5pdCgpO1xyXG5jb25zdCB2aWV3RG91YmxlVmVydGljYWwgPSBuZXcgVmlld0hvcml6b250YWwoKTtcclxudmlld0RvdWJsZVZlcnRpY2FsLnNldFN0YXJ0aW5nQ29uZGl0aW9ucyh7XHJcbiAgICBlbGVtZW50SWQ6ICcjaXNzXzQnLFxyXG4gICAgc2lnbjogJyQnLFxyXG4gICAgbG93ZXJTY2FsZUJvdW5kOiAxMDAsXHJcbiAgICB1cHBlclNjYWxlQm91bmQ6IDE1MDAsXHJcbiAgICBsb3dlclNsaWRlclZhbHVlOiAyMDAsXHJcbiAgICB1cHBlclNsaWRlclZhbHVlOiA4MDAsXHJcbiAgICBzbGlkZXJUeXBlOiAnZG91YmxlJyxcclxuICAgIGRpcmVjdGlvblR5cGU6ICd2ZXJ0aWNhbCcsXHJcbiAgICBzdGVwOiAxMCxcclxuICAgIHRvb2x0aXA6ICdvbicsXHJcbiAgICB2YWx1ZVN0YXRlRmllbGQ6ICdvbicsXHJcbn0pO1xyXG52aWV3RG91YmxlVmVydGljYWwuaW5pdCgpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZWZhY3RvcmluZ0luZGV4LmpzLm1hcCIsImNsYXNzIFZpZXdIb3Jpem9udGFsIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuYmluZENvbnRyb2xsZXIgPSAoY29udHJvbGxlcikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRyb2xsZXIgPSBjb250cm9sbGVyO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5zZXRTdGFydGluZ0NvbmRpdGlvbnMgPSAob2JqKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudElkID0gb2JqLmVsZW1lbnRJZCB8fCAnI2lzcyc7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iob2JqLmVsZW1lbnRJZCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2lnbiA9IG9iai5zaWduIHx8ICdSJztcclxuICAgICAgICAgICAgdGhpcy5sb3dlclNjYWxlID0gTnVtYmVyKG9iai5sb3dlclNjYWxlQm91bmQpIHx8IDA7XHJcbiAgICAgICAgICAgIHRoaXMudXBwZXJTY2FsZSA9IE51bWJlcihvYmoudXBwZXJTY2FsZUJvdW5kKSB8fCAxMDAwO1xyXG4gICAgICAgICAgICB0aGlzLmxvd2VyU2xpZGVyVmFsdWUgPSBOdW1iZXIob2JqLmxvd2VyU2xpZGVyVmFsdWUpIHx8IDIwMDtcclxuICAgICAgICAgICAgdGhpcy51cHBlclNsaWRlclZhbHVlID0gTnVtYmVyKG9iai51cHBlclNsaWRlclZhbHVlKSB8fCA4MDA7XHJcbiAgICAgICAgICAgIHRoaXMuc2xpZGVyVHlwZSA9IG9iai5zbGlkZXJUeXBlIHx8ICdzaW5nbGUnO1xyXG4gICAgICAgICAgICB0aGlzLmRpcmVjdGlvblR5cGUgPSBvYmouZGlyZWN0aW9uVHlwZSB8fCAnaG9yaXpvbnRhbCc7XHJcbiAgICAgICAgICAgIHRoaXMuc3RlcCA9IG9iai5zdGVwIHx8IDI7XHJcbiAgICAgICAgICAgIHRoaXMudG9vbHRpcCA9IG9iai50b29sdGlwIHx8ICdvbic7XHJcbiAgICAgICAgICAgIHRoaXMudmFsdWVTdGF0ZUZpZWxkID0gb2JqLnZhbHVlU3RhdGVGaWVsZCB8fCAnb24nO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5nZXRTdGFydGluZ0NvbmRpdGlvbnMgPSAoKSA9PiAoe1xyXG4gICAgICAgICAgICBlbGVtZW50SWQ6IHRoaXMuZWxlbWVudElkLFxyXG4gICAgICAgICAgICBzaWduOiB0aGlzLnNpZ24sXHJcbiAgICAgICAgICAgIGxvd2VyU2NhbGVCb3VuZDogdGhpcy5sb3dlclNjYWxlLFxyXG4gICAgICAgICAgICB1cHBlclNjYWxlQm91bmQ6IHRoaXMudXBwZXJTY2FsZSxcclxuICAgICAgICAgICAgbG93ZXJTbGlkZXJWYWx1ZTogdGhpcy5sb3dlclNsaWRlclZhbHVlLFxyXG4gICAgICAgICAgICB1cHBlclNsaWRlclZhbHVlOiB0aGlzLnVwcGVyU2xpZGVyVmFsdWUsXHJcbiAgICAgICAgICAgIHNsaWRlclR5cGU6IHRoaXMuc2xpZGVyVHlwZSxcclxuICAgICAgICAgICAgc3RlcDogdGhpcy5zdGVwLFxyXG4gICAgICAgICAgICB0b29sdGlwOiB0aGlzLnRvb2x0aXAsXHJcbiAgICAgICAgICAgIHZhbHVlU3RhdGVGaWVsZDogdGhpcy52YWx1ZVN0YXRlRmllbGQsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5pbml0ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZURPTSgpO1xyXG4gICAgICAgICAgICB0aGlzLndyaXRlRE9NKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlTGlzdGVuZXJPblNsaWRlcigpO1xyXG4gICAgICAgICAgICB0aGlzLndyaXRlR2VvbWV0cnlET010b1ZhcmlhYmxlcygpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5jcmVhdGVET00gPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNsaWRlclR5cGUgPT09ICdkb3VibGUnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZURvdWJsZURPTSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNsaWRlclR5cGUgPT09ICdzaW5nbGUnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZVNpbmdsZURPTSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmNyZWF0ZVNpbmdsZURPTSA9ICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5lbGVtLmlubmVySFRNTCA9ICc8ZGl2IGNsYXNzPVwiaXNzX192YWx1ZS1maWVsZFwiPidcclxuICAgICAgICAgICAgICAgICsgJzxzcGFuIGNsYXNzPVwiaXNzX3N0YXRpY0ZpZWxkXCI+PC9zcGFuPidcclxuICAgICAgICAgICAgICAgICsgJzwvZGl2PidcclxuICAgICAgICAgICAgICAgICsgJzxkaXYgY2xhc3M9IFwiaXNzLWNvbnRhaW5lclwiPidcclxuICAgICAgICAgICAgICAgICsgJzxkaXYgY2xhc3M9IFwiaXNzX19zY2FsZVwiPjwvZGl2PidcclxuICAgICAgICAgICAgICAgICsgJzxkaXYgY2xhc3M9XCJpc3NfX2NvbG9yLWJhclwiPjwvZGl2PidcclxuICAgICAgICAgICAgICAgICsgJzxkaXYgY2xhc3M9XCJpc3NfX3NpbmdsZV9mbHktdmFsdWUgaXNzX190b29sdGlwXCI+PC9kaXY+J1xyXG4gICAgICAgICAgICAgICAgKyAnPGRpdiBjbGFzcz1cImlzc19fc2luZ2xlIGlzc19fZHJhZ1wiPjwvZGl2PidcclxuICAgICAgICAgICAgICAgICsgJzwvZGl2Pic7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmNyZWF0ZURvdWJsZURPTSA9ICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5lbGVtLmlubmVySFRNTCA9ICc8ZGl2IGNsYXNzPVwiaXNzX192YWx1ZS1maWVsZFwiPidcclxuICAgICAgICAgICAgICAgICsgJzxzcGFuIGNsYXNzPVwiaXNzX3N0YXRpY0ZpZWxkXCI+PC9zcGFuPidcclxuICAgICAgICAgICAgICAgICsgJy0nXHJcbiAgICAgICAgICAgICAgICArICc8c3BhbiBjbGFzcz1cImlzc19zdGF0aWNGaWVsZFwiPjwvc3Bhbj4nXHJcbiAgICAgICAgICAgICAgICArICc8L2Rpdj4nXHJcbiAgICAgICAgICAgICAgICArICc8ZGl2IGNsYXNzPSBcImlzcy1jb250YWluZXJcIj4nXHJcbiAgICAgICAgICAgICAgICArICc8ZGl2IGNsYXNzPSBcImlzc19fc2NhbGVcIj48L2Rpdj4nXHJcbiAgICAgICAgICAgICAgICArICc8ZGl2IGNsYXNzPVwiaXNzX19kb3VibGVfZmx5LXZhbHVlLTEgaXNzX190b29sdGlwXCI+PC9kaXY+J1xyXG4gICAgICAgICAgICAgICAgKyAnPGRpdiBjbGFzcz1cImlzc19fZG91YmxlXzFfaG9yaXpvbnRhbCBpc3NfX2RyYWdcIj48L2Rpdj4nXHJcbiAgICAgICAgICAgICAgICArICc8ZGl2IGNsYXNzPVwiaXNzX19kb3VibGVfZmx5LXZhbHVlLTIgaXNzX190b29sdGlwXCI+PC9kaXY+J1xyXG4gICAgICAgICAgICAgICAgKyAnPGRpdiBjbGFzcz1cImlzc19fZG91YmxlXzJfaG9yaXpvbnRhbCBpc3NfX2RyYWdcIj48L2Rpdj4nXHJcbiAgICAgICAgICAgICAgICArICc8ZGl2IGNsYXNzPVwiaXNzX19jb2xvci1iYXJcIj48L2Rpdj4nXHJcbiAgICAgICAgICAgICAgICArICc8L2Rpdj4nO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy53cml0ZURPTSA9ICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jaGVja0VsZW1lbnRzSW5ET00oKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc2xpZGVySW5ET00ubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLndyaXRlU2luZ2xlRE9NdG9WYXJpYWJsZXMoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMud3JpdGVTaW5nbGVTbGlkZXJJbmRlbnQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLnNsaWRlckluRE9NLmxlbmd0aCA9PT0gMikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy53cml0ZURvdWJsZURPTXRvVmFyaWFibGVzKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLndyaXRlRG91YmxlU2xpZGVySW5kZW50KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuY2hlY2tFbGVtZW50c0luRE9NID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBET01FbGVtZW50cyA9IHRoaXMuZWxlbS5xdWVyeVNlbGVjdG9yQWxsKCcuaXNzX19kcmFnJyk7XHJcbiAgICAgICAgICAgIGlmICgoRE9NRWxlbWVudHMubGVuZ3RoID4gMCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2xpZGVySW5ET00gPSBET01FbGVtZW50cztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy53cml0ZVNpbmdsZURPTXRvVmFyaWFibGVzID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBbdGhpcy5zY2FsZV0gPSB0aGlzLnJldHVybkVsZW1lbnRzRnJvbURPTSgnLmlzc19fc2NhbGUnLCAxKTtcclxuICAgICAgICAgICAgW3RoaXMuc2luZ2xlU2xpZGVyXSA9IHRoaXMucmV0dXJuRWxlbWVudHNGcm9tRE9NKCcuaXNzX19kcmFnJywgMSk7XHJcbiAgICAgICAgICAgIFt0aGlzLnN0YXRpY0ZpZWxkU2luZ2xlXSA9IHRoaXMucmV0dXJuRWxlbWVudHNGcm9tRE9NKCcuaXNzX3N0YXRpY0ZpZWxkJywgMSk7XHJcbiAgICAgICAgICAgIFt0aGlzLmZseUZpZWxkU2luZ2xlXSA9IHRoaXMucmV0dXJuRWxlbWVudHNGcm9tRE9NKCcuaXNzX190b29sdGlwJywgMSk7XHJcbiAgICAgICAgICAgIFt0aGlzLnJpYmJvbl0gPSB0aGlzLnJldHVybkVsZW1lbnRzRnJvbURPTSgnLmlzc19fY29sb3ItYmFyJywgMSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLndyaXRlRG91YmxlRE9NdG9WYXJpYWJsZXMgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIFt0aGlzLnNjYWxlXSA9IHRoaXMucmV0dXJuRWxlbWVudHNGcm9tRE9NKCcuaXNzX19zY2FsZScsIDEpO1xyXG4gICAgICAgICAgICBbdGhpcy5sb3dlclNsaWRlciwgdGhpcy51cHBlclNsaWRlcl0gPSB0aGlzLnJldHVybkVsZW1lbnRzRnJvbURPTSgnLmlzc19fZHJhZycsIDIpO1xyXG4gICAgICAgICAgICBbdGhpcy5zdGF0aWNGaWVsZExvd2VyLCB0aGlzLnN0YXRpY0ZpZWxkVXBwZXJdID0gdGhpcy5yZXR1cm5FbGVtZW50c0Zyb21ET00oJy5pc3Nfc3RhdGljRmllbGQnLCAyKTtcclxuICAgICAgICAgICAgW3RoaXMuZmx5RmllbGRMb3dlciwgdGhpcy5mbHlGaWVsZFVwcGVyXSA9IHRoaXMucmV0dXJuRWxlbWVudHNGcm9tRE9NKCcuaXNzX190b29sdGlwJywgMik7XHJcbiAgICAgICAgICAgIFt0aGlzLnJpYmJvbl0gPSB0aGlzLnJldHVybkVsZW1lbnRzRnJvbURPTSgnLmlzc19fY29sb3ItYmFyJywgMSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLndyaXRlU2luZ2xlU2xpZGVySW5kZW50ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBlbGVtID0gdGhpcy5yZXR1cm5FbGVtZW50c0Zyb21ET00oJy5pc3NfX2RyYWcnLCAxKTtcclxuICAgICAgICAgICAgdGhpcy5zaW5nbGVTbGlkZXJQb3NpdGlvbiA9IHRoaXMucmV0dXJuSW5kZW50KGVsZW1bMF0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy53cml0ZURvdWJsZVNsaWRlckluZGVudCA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZWxlbXMgPSB0aGlzLnJldHVybkVsZW1lbnRzRnJvbURPTSgnLmlzc19fZHJhZycsIDIpO1xyXG4gICAgICAgICAgICB0aGlzLmxvd2VyU2xpZGVyUG9zaXRpb24gPSB0aGlzLnJldHVybkluZGVudChlbGVtc1swXSk7XHJcbiAgICAgICAgICAgIHRoaXMudXBwZXJTbGlkZXJQb3NpdGlvbiA9IHRoaXMucmV0dXJuSW5kZW50KGVsZW1zWzFdKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMucmV0dXJuSW5kZW50ID0gKGFycikgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb25UeXBlID09PSAnaG9yaXpvbnRhbCcpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhcnIub2Zmc2V0TGVmdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb25UeXBlID09PSAndmVydGljYWwnKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYXJyLm9mZnNldFRvcDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5yZXR1cm5FbGVtZW50c0Zyb21ET00gPSAoY2xhc3NOYW1lLCBsZW5ndGgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgRE9NRWxlbWVudHMgPSB0aGlzLmVsZW0ucXVlcnlTZWxlY3RvckFsbChjbGFzc05hbWUpO1xyXG4gICAgICAgICAgICBpZiAoKERPTUVsZW1lbnRzLmxlbmd0aCA9PT0gbGVuZ3RoKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIERPTUVsZW1lbnRzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMud3JpdGVHZW9tZXRyeURPTXRvVmFyaWFibGVzID0gKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldERpcmVjdGlvbigpO1xyXG4gICAgICAgICAgICB0aGlzLndyaXRlR2VvbWV0cnlPZlNsaWRlcigpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5zZXREaXJlY3Rpb24gPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRpcmVjdGlvblR5cGUgPT09ICdob3Jpem9udGFsJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tYWluQXhpc1NpemUgPSB0aGlzLnNjYWxlLm9mZnNldFdpZHRoO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYGhvcml6b250YWwgaW5kZW50ICR7dGhpcy5pbmRlbnR9IC0tIHRoaXMubWFpbkF4aXNTaXplICR7dGhpcy5tYWluQXhpc1NpemV9YCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uVHlwZSA9PT0gJ3ZlcnRpY2FsJykge1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5pbmRlbnQgPSB0aGlzLmNsaWVudFJlY3QudG9wO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tYWluQXhpc1NpemUgPSB0aGlzLnNjYWxlLm9mZnNldEhlaWdodDtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBpbmRlbnQgJHt0aGlzLmluZGVudH0gLS0gdGhpcy5tYWluQXhpc1NpemUgJHt0aGlzLm1haW5BeGlzU2l6ZX1gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy53cml0ZUdlb21ldHJ5T2ZTbGlkZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNsaWRlckluRE9NLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zbGlkZXJXaWR0aCA9IHRoaXMuc2luZ2xlU2xpZGVyLm9mZnNldFdpZHRoO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zbGlkZXJIZWlnaHQgPSB0aGlzLnNpbmdsZVNsaWRlci5vZmZzZXRIZWlnaHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5zbGlkZXJJbkRPTS5sZW5ndGggPT09IDIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2xpZGVyV2lkdGggPSB0aGlzLmxvd2VyU2xpZGVyLm9mZnNldFdpZHRoO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zbGlkZXJIZWlnaHQgPSB0aGlzLmxvd2VyU2xpZGVyLm9mZnNldEhlaWdodDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmNhbGNQaXhlbFN0ZXAoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuY2FsY1BpeGVsU3RlcCA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgd2lkdGhWc01vbmV5ID0gdGhpcy5tYWluQXhpc1NpemUgLyB0aGlzLnVwcGVyU2NhbGU7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0ZXBJblBpeGVsID0gd2lkdGhWc01vbmV5ICogdGhpcy5zdGVwO1xyXG4gICAgICAgICAgICBpZiAoc3RlcEluUGl4ZWwgPCAxKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBpeGVsU3RlcCA9IDE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdW5kZWRQaXhlbFN0ZXAgPSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5waXhlbFN0ZXAgPSBzdGVwSW5QaXhlbDtcclxuICAgICAgICAgICAgICAgIHRoaXMucm91bmRlZFBpeGVsU3RlcCA9IE1hdGgucm91bmQoc3RlcEluUGl4ZWwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmNyZWF0ZUxpc3RlbmVyT25TbGlkZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNsaWRlckluRE9NLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaW5nbGVTbGlkZXIub25tb3VzZWRvd24gPSB0aGlzLmV2ZW50T25TbGlkZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5zbGlkZXJJbkRPTS5sZW5ndGggPT09IDIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG93ZXJTbGlkZXIub25tb3VzZWRvd24gPSB0aGlzLmV2ZW50T25TbGlkZXI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwcGVyU2xpZGVyLm9ubW91c2Vkb3duID0gdGhpcy5ldmVudE9uU2xpZGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmV2ZW50T25TbGlkZXIgPSAoX2UpID0+IHtcclxuICAgICAgICAgICAgX2UucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRSZXN0cmljdGlvbk9mU2xpZGVyTW92ZW1lbnQoX2UpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5vbm1vdXNldXAgPSB0aGlzLmNhbmNlbEV2ZW50cztcclxuICAgICAgICAgICAgZG9jdW1lbnQub25tb3VzZW1vdmUgPSB0aGlzLm1vdmVFdmVudFdpdGhIb2xkTW91c2U7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnNldFJlc3RyaWN0aW9uT2ZTbGlkZXJNb3ZlbWVudCA9IChfZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zbGlkZXJUeXBlID09PSAnZG91YmxlJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRSZXN0cmljdGlvbkZvckRvdWJsZVNsaWRlcihfZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuc2xpZGVyVHlwZSA9PT0gJ3NpbmdsZScpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0UmVzdHJpY3Rpb25Gb3JTaW5nbGVTbGlkZXIoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5zZXRSZXN0cmljdGlvbkZvckRvdWJsZVNsaWRlciA9IChfZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoX2UudGFyZ2V0ID09PSB0aGlzLmxvd2VyU2xpZGVyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRhcmdldFNsaWRlciA9IHRoaXMubG93ZXJTbGlkZXI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvd2VyUmVzdHJpY3Rpb24gPSAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cHBlclJlc3RyaWN0aW9uID0gdGhpcy51cHBlclNsaWRlclBvc2l0aW9uO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb3dlckNvc3RSZXN0cmljdGlvbiA9IHRoaXMubG93ZXJTY2FsZTtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBwZXJDb3N0UmVzdHJpY3Rpb24gPSB0aGlzLmdldENvc3RGb3JTbGlkZXIodGhpcy51cHBlclJlc3RyaWN0aW9uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoX2UudGFyZ2V0ID09PSB0aGlzLnVwcGVyU2xpZGVyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRhcmdldFNsaWRlciA9IHRoaXMudXBwZXJTbGlkZXI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvd2VyUmVzdHJpY3Rpb24gPSB0aGlzLmxvd2VyU2xpZGVyUG9zaXRpb247XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwcGVyUmVzdHJpY3Rpb24gPSB0aGlzLm1haW5BeGlzU2l6ZTtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGAke3RoaXMubG93ZXJSZXN0cmljdGlvbn0gbG93ZXJSZXN0cmljdGlvbmApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb3dlckNvc3RSZXN0cmljdGlvbiA9IHRoaXMuZ2V0Q29zdEZvclNsaWRlcih0aGlzLmxvd2VyUmVzdHJpY3Rpb24pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cHBlckNvc3RSZXN0cmljdGlvbiA9IHRoaXMudXBwZXJTY2FsZTtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGAke3RoaXMubG93ZXJDb3N0UmVzdHJpY3Rpb259IGxvd2VyQ29zdFJlc3RyaWN0aW9uYCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuc2V0UmVzdHJpY3Rpb25Gb3JTaW5nbGVTbGlkZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0U2xpZGVyID0gdGhpcy5zaW5nbGVTbGlkZXI7XHJcbiAgICAgICAgICAgIHRoaXMudXBwZXJSZXN0cmljdGlvbiA9IHRoaXMubWFpbkF4aXNTaXplO1xyXG4gICAgICAgICAgICB0aGlzLmxvd2VyUmVzdHJpY3Rpb24gPSAwO1xyXG4gICAgICAgICAgICB0aGlzLnVwcGVyQ29zdFJlc3RyaWN0aW9uID0gdGhpcy51cHBlclNjYWxlO1xyXG4gICAgICAgICAgICB0aGlzLmxvd2VyQ29zdFJlc3RyaWN0aW9uID0gdGhpcy5sb3dlclNjYWxlO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5nZXRDb3N0Rm9yU2xpZGVyID0gKHNsaWRlclBvc3Rpb25JblBpeGVsKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGAke3NsaWRlclBvc3Rpb25JblBpeGVsfSBzbGlkZXJQb3N0aW9uSW5QaXhlbGApO1xyXG4gICAgICAgICAgICBpZiAoc2xpZGVyUG9zdGlvbkluUGl4ZWwgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubG93ZXJTY2FsZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gKChNYXRoLnJvdW5kKHNsaWRlclBvc3Rpb25JblBpeGVsIC8gdGhpcy5waXhlbFN0ZXApICogdGhpcy5zdGVwKSArIHRoaXMubG93ZXJTY2FsZSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLm1vdmVFdmVudFdpdGhIb2xkTW91c2UgPSAoX2UpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaW5uZXJNb3VzZVBvc2l0aW9uID0gdGhpcy5nZXRNb3VzZVBvc2l0aW9uKF9lKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYCR7aW5uZXJNb3VzZVBvc2l0aW9ufSBpbm5lck1vdXNlUG9zaXRpb25gKTtcclxuICAgICAgICAgICAgY29uc3QgbmVhcmVzdFJvdW5kZWRTdGVwID0gdGhpcy5jYWxjTmVhcmVzdFN0ZXAoaW5uZXJNb3VzZVBvc2l0aW9uKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYCR7bmVhcmVzdFJvdW5kZWRTdGVwfSBuZWFyZXN0Um91bmRlZFN0ZXBgKTtcclxuICAgICAgICAgICAgY29uc3QgZmluYWxQb3NpdGlvbkluUGl4ZWwgPSB0aGlzLmNhbGNGaW5hbFBvc2l0aW9uKG5lYXJlc3RSb3VuZGVkU3RlcCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGZpbmFsQ29zdCA9IHRoaXMuY2FsY0ZpbmFsQ29zdChuZWFyZXN0Um91bmRlZFN0ZXApO1xyXG4gICAgICAgICAgICB0aGlzLnNob3dNb25leU9uU2NyZWVuKGZpbmFsQ29zdCk7XHJcbiAgICAgICAgICAgIHRoaXMubW92ZVNsaWRlcihmaW5hbFBvc2l0aW9uSW5QaXhlbCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0T3ZlcmxheSgpO1xyXG4gICAgICAgICAgICB0aGlzLm1vdmVSaWJib24oKTtcclxuICAgICAgICAgICAgdGhpcy5tb3ZlVG9vbHRpcCgpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5nZXRNb3VzZVBvc2l0aW9uID0gKF9lKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xpZW50UmVjdCA9IHRoaXMuc2NhbGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRpcmVjdGlvblR5cGUgPT09ICdob3Jpem9udGFsJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbmRlbnQgPSB0aGlzLmNsaWVudFJlY3QubGVmdDtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoX2UuY2xpZW50WCAtIHRoaXMuaW5kZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb25UeXBlID09PSAndmVydGljYWwnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluZGVudCA9IHRoaXMuY2xpZW50UmVjdC50b3A7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKF9lLmNsaWVudFkgLSB0aGlzLmluZGVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuY2FsY05lYXJlc3RTdGVwID0gKF9wb3NpdGlvbkluUGl4ZWwpID0+IE1hdGgucm91bmQoX3Bvc2l0aW9uSW5QaXhlbCAvIHRoaXMucGl4ZWxTdGVwKTtcclxuICAgICAgICB0aGlzLmNhbGNGaW5hbFBvc2l0aW9uID0gKG5lYXJlc3RSb3VuZGVkU3RlcCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwb3NpdGlvbkluUGl4ZWwgPSBuZWFyZXN0Um91bmRlZFN0ZXAgKiB0aGlzLnBpeGVsU3RlcDtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNQaXhlbHNJbkJvcmRlcihwb3NpdGlvbkluUGl4ZWwpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcG9zaXRpb25JblBpeGVsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChwb3NpdGlvbkluUGl4ZWwgPD0gdGhpcy5sb3dlclJlc3RyaWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5sb3dlclJlc3RyaWN0aW9uO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChwb3NpdGlvbkluUGl4ZWwgPj0gdGhpcy51cHBlclJlc3RyaWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy51cHBlclJlc3RyaWN0aW9uO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmNhbGNGaW5hbENvc3QgPSAobmVhcmVzdFJvdW5kZWRTdGVwKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBvc2l0aW9uSW5Nb25leSA9IChuZWFyZXN0Um91bmRlZFN0ZXAgKiB0aGlzLnN0ZXApICsgdGhpcy5sb3dlclNjYWxlO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc01vbmV5SW5Cb3JkZXIocG9zaXRpb25Jbk1vbmV5KSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBvc2l0aW9uSW5Nb25leTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocG9zaXRpb25Jbk1vbmV5IDwgdGhpcy5sb3dlckNvc3RSZXN0cmljdGlvbikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubG93ZXJDb3N0UmVzdHJpY3Rpb247XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHBvc2l0aW9uSW5Nb25leSA+IHRoaXMudXBwZXJDb3N0UmVzdHJpY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnVwcGVyQ29zdFJlc3RyaWN0aW9uO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmlzUGl4ZWxzSW5Cb3JkZXIgPSAocG9zaXRpb24pID0+ICgocG9zaXRpb24gPj0gdGhpcy5sb3dlclJlc3RyaWN0aW9uKSAmJiAocG9zaXRpb24gPD0gdGhpcy51cHBlclJlc3RyaWN0aW9uKSk7XHJcbiAgICAgICAgdGhpcy5pc01vbmV5SW5Cb3JkZXIgPSAocG9zaXRpb24pID0+ICgocG9zaXRpb24gPj0gdGhpcy5sb3dlckNvc3RSZXN0cmljdGlvbikgJiYgKHBvc2l0aW9uIDw9IHRoaXMudXBwZXJDb3N0UmVzdHJpY3Rpb24pKTtcclxuICAgICAgICB0aGlzLnNob3dNb25leU9uU2NyZWVuID0gKGZpbmFsQ29zdCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjb3N0ID0gYCR7ZmluYWxDb3N0fSR7dGhpcy5zaWdufWA7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRhcmdldFNsaWRlciA9PT0gdGhpcy5sb3dlclNsaWRlcikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0aWNGaWVsZExvd2VyLnRleHRDb250ZW50ID0gYCR7Y29zdH1gO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mbHlGaWVsZExvd2VyLnRleHRDb250ZW50ID0gYCR7Y29zdH1gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRhcmdldFNsaWRlciA9PT0gdGhpcy51cHBlclNsaWRlcikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0aWNGaWVsZFVwcGVyLnRleHRDb250ZW50ID0gYCR7Y29zdH1gO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mbHlGaWVsZFVwcGVyLnRleHRDb250ZW50ID0gYCR7Y29zdH1gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRhcmdldFNsaWRlciA9PT0gdGhpcy5zaW5nbGVTbGlkZXIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGljRmllbGRTaW5nbGUudGV4dENvbnRlbnQgPSBgJHtjb3N0fWA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZseUZpZWxkU2luZ2xlLnRleHRDb250ZW50ID0gYCR7Y29zdH1gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLm1vdmVSaWJib24gPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNldEhvcml6b250YWxSaWJib25WYXJpYWJsZXMgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zbGlkZXJJbkRPTS5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJpYmJvbi5zdHlsZS5sZWZ0ID0gJzBweCc7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yaWJib24uc3R5bGUud2lkdGggPSBgJHt0aGlzLnNpbmdsZVNsaWRlci5vZmZzZXRMZWZ0fXB4YDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuc2xpZGVySW5ET00ubGVuZ3RoID09PSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yaWJib24uc3R5bGUubGVmdCA9IHRoaXMubG93ZXJTbGlkZXIuc3R5bGUubGVmdDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJpYmJvbi5zdHlsZS53aWR0aCA9IGAke3RoaXMudXBwZXJTbGlkZXIub2Zmc2V0TGVmdCAtIHRoaXMubG93ZXJTbGlkZXIub2Zmc2V0TGVmdH1weGA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNvbnN0IHNldFZlcnRpY2FsUmliYm9uVmFyaWFibGVzID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2xpZGVySW5ET00ubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yaWJib24uc3R5bGUudG9wID0gJzBweCc7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yaWJib24uc3R5bGUuaGVpZ2h0ID0gYCR7dGhpcy5zaW5nbGVTbGlkZXIub2Zmc2V0VG9wfXB4YDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuc2xpZGVySW5ET00ubGVuZ3RoID09PSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yaWJib24uc3R5bGUudG9wID0gdGhpcy5sb3dlclNsaWRlci5zdHlsZS50b3A7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yaWJib24uc3R5bGUuaGVpZ2h0ID0gYCR7dGhpcy51cHBlclNsaWRlci5vZmZzZXRUb3AgLSB0aGlzLmxvd2VyU2xpZGVyLm9mZnNldFRvcH1weGA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRpcmVjdGlvblR5cGUgPT09ICdob3Jpem9udGFsJykge1xyXG4gICAgICAgICAgICAgICAgc2V0SG9yaXpvbnRhbFJpYmJvblZhcmlhYmxlcygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRpcmVjdGlvblR5cGUgPT09ICd2ZXJ0aWNhbCcpIHtcclxuICAgICAgICAgICAgICAgIHNldFZlcnRpY2FsUmliYm9uVmFyaWFibGVzKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMubW92ZVNsaWRlciA9IChudW0pID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uVHlwZSA9PT0gJ2hvcml6b250YWwnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRhcmdldFNsaWRlci5zdHlsZS5sZWZ0ID0gYCR7bnVtfXB4YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLmRpcmVjdGlvblR5cGUgPT09ICd2ZXJ0aWNhbCcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0U2xpZGVyLnN0eWxlLnRvcCA9IGAke251bX1weGA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMubW92ZVRvb2x0aXAgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1vdmUgPSAoZGlyZWN0aW9uLCBvZmZzZXQpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNsaWRlclR5cGUgPT09ICdzaW5nbGUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVtLnF1ZXJ5U2VsZWN0b3JBbGwoJy5pc3NfX3Rvb2x0aXAnKVswXS5zdHlsZVtkaXJlY3Rpb25dID0gYCR7dGhpcy5zaW5nbGVTbGlkZXJbb2Zmc2V0XX1weGA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zbGlkZXJUeXBlID09PSAnZG91YmxlJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWxlbS5xdWVyeVNlbGVjdG9yQWxsKCcuaXNzX190b29sdGlwJylbMF0uc3R5bGVbZGlyZWN0aW9uXSA9IGAke3RoaXMubG93ZXJTbGlkZXJbb2Zmc2V0XX1weGA7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVtLnF1ZXJ5U2VsZWN0b3JBbGwoJy5pc3NfX3Rvb2x0aXAnKVsxXS5zdHlsZVtkaXJlY3Rpb25dID0gYCR7dGhpcy51cHBlclNsaWRlcltvZmZzZXRdfXB4YDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uVHlwZSA9PT0gJ2hvcml6b250YWwnKSB7XHJcbiAgICAgICAgICAgICAgICBtb3ZlKCdsZWZ0JywgJ29mZnNldExlZnQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb25UeXBlID09PSAndmVydGljYWwnKSB7XHJcbiAgICAgICAgICAgICAgICBtb3ZlKCd0b3AnLCAnb2Zmc2V0VG9wJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuc2V0T3ZlcmxheSA9ICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMudGFyZ2V0U2xpZGVyID09PSB0aGlzLmxvd2VyU2xpZGVyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRhcmdldFNsaWRlci5zdHlsZS56SW5kZXggPSAnMTAwJztcclxuICAgICAgICAgICAgICAgIHRoaXMudXBwZXJTbGlkZXIuc3R5bGUuekluZGV4ID0gJzEnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMudGFyZ2V0U2xpZGVyID09PSB0aGlzLnVwcGVyU2xpZGVyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRhcmdldFNsaWRlci5zdHlsZS56SW5kZXggPSAnMTAwJztcclxuICAgICAgICAgICAgICAgIHRoaXMubG93ZXJTbGlkZXIuc3R5bGUuekluZGV4ID0gJzEnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmNhbmNlbEV2ZW50cyA9ICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy53cml0ZURPTSgpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5vbm1vdXNldXAgPSBudWxsO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5vbm1vdXNlbW92ZSA9IG51bGw7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIHNldENvbnRyb2xsZXIoKSB7XHJcbiAgICAgICAgY29uc3Qgb2JqID0ge1xyXG4gICAgICAgICAgICBsb3dlclNsaWRlclZhbHVlOiB0aGlzLmxvd2VyU2xpZGVyVmFsdWUsXHJcbiAgICAgICAgICAgIHVwcGVyU2xpZGVyVmFsdWU6IHRoaXMudXBwZXJTbGlkZXJWYWx1ZSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuY29udHJvbGxlci5nZXRWaWV3KG9iaik7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IHsgVmlld0hvcml6b250YWwgfTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVmYWN0b3JpbmdWaWV3LmpzLm1hcCJdLCJzb3VyY2VSb290IjoiIn0=