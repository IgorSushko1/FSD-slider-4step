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
    step: 2,
    tooltip: 'on',
    valueStateField: 'on',
});
view.init();
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
            if (this.checkParent) {
                if (this.sliderType === 'double') {
                    this.createDoubleDOM();
                }
                if (this.sliderType === 'single') {
                    this.createSingleDOM();
                }
            }
        };
        this.checkParent = () => !!this.elem;
        this.createSingleDOM = () => {
            this.elem.innerHTML = '<div class="iss__value-field">'
                + '<span class="iss_staticField"></span>'
                + '</div>'
                + '<div class= "iss-container">'
                + '<div class= "iss__scale"></div>'
                + '<div class="iss__color-bar"></div>'
                + '<div class="iss__single_fly-value iss__tooltip" data-slyder="single"></div>'
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
                + '<div class="iss__double_1_horizontal iss__drag" data-slyder="lower"></div>'
                + '<div class="iss__double_fly-value-2 iss__tooltip"></div>'
                + '<div class="iss__double_2_horizontal iss__drag" data-slyder="upper"></div>'
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
            const sliderInDOM = this.elem.querySelectorAll('.iss__drag');
            if ((sliderInDOM.length > 0)) {
                this.sliderInDOM = sliderInDOM;
            }
        };
        this.writeSingleDOMtoVariables = () => {
            [this.scale] = this.returnElementsFromDOM('.iss__scale', 1);
            [this.singleSlider] = this.returnElementsFromDOM('.iss__drag', 1);
            [this.staticFieldUpper] = this.returnElementsFromDOM('.iss_staticField', 1);
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
            const elemBounding = elem.getBoundingClientRect();
            if (this.sliderType === 'horizontal') {
                this.singleSliderPosition = elemBounding.left;
            }
            if (this.sliderType === 'vertical') {
                this.singleSliderPosition = elemBounding.top;
            }
        };
        this.writeDoubleSliderIndent = () => {
            const elems = this.returnElementsFromDOM('.iss__drag', 2);
            const type = this.directionType;
            const returnIndent = (arr) => {
                if (type === 'horizontal') {
                    return arr.offsetLeft;
                }
                if (type === 'vertical') {
                    return arr.offsetTop;
                }
            };
            this.lowerSliderPosition = returnIndent(elems[0]);
            this.upperSliderPosition = returnIndent(elems[1]);
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
            const setHorizontalDirection = () => {
                this.clientRect = this.scale.getBoundingClientRect();
                this.indent = this.clientRect.left;
                this.mainAxisSize = this.scale.offsetWidth;
                this.secondaryAxisSize = this.scale.offsetHeight;
            };
            const setVerticalDirection = () => {
                this.clientRect = this.scale.getBoundingClientRect();
                this.indent = this.clientRect.top;
                this.mainAxisSize = this.elem.offsetHeight;
                this.secondaryAxisSize = this.scale.offsetWidth;
            };
            if (this.directionType === 'horizontal') {
                setHorizontalDirection();
            }
            if (this.directionType === 'vertical') {
                setVerticalDirection();
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
                this.pixelStep = stepInPixel;
                this.roundedPixelStep = 1;
            }
            else {
                this.pixelStep = stepInPixel;
                this.roundedPixelStep = Math.round(stepInPixel);
            }
        };
        this.createListenerOnSlider = () => {
            if (this.sliderInDOM.length === 1) {
                this.createEventOnSingleSlider();
            }
            else if (this.sliderInDOM.length === 2) {
                this.createEventsOnDoubleSlider();
            }
        };
        this.createEventsOnDoubleSlider = () => {
            this.lowerSlider.onmousedown = this.eventOnSlider;
            this.upperSlider.onmousedown = this.eventOnSlider;
        };
        this.createEventOnSingleSlider = () => {
            this.singleSlider.onmousedown = this.eventOnSlider;
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
                this.upperRestriction = this.upperSliderPosition;
                this.lowerRestriction = 0;
                this.upperCostRestriction = this.getCostForSlider(this.upperSliderPosition);
                this.lowerCostRestriction = this.lowerScale;
            }
            if (_e.target === this.upperSlider) {
                this.targetSlider = this.upperSlider;
                this.upperRestriction = this.mainAxisSize;
                this.lowerRestriction = this.lowerSliderPosition;
                this.upperCostRestriction = this.upperScale;
                this.lowerCostRestriction = this.getCostForSlider(this.lowerSliderPosition);
            }
        };
        this.setRestrictionForSingleSlider = () => {
            this.targetSlider = this.singleSlider;
            this.upperRestriction = this.mainAxisSize;
            this.lowerRestriction = 0;
            this.upperCostRestriction = this.upperScale;
            this.lowerCostRestriction = this.lowerScale;
        };
        this.getCostForSlider = (sliderPostionInPixel) => Math.round((sliderPostionInPixel / this.pixelStep) * this.step);
        this.moveEventWithHoldMouse = (_e) => {
            const innerMousePosition = this.getMousePosition(_e);
            const nearestRoundedStep = this.calcNearestStep(innerMousePosition);
            const finalPositionInPixel = this.calcFinalPosition(nearestRoundedStep);
            const finalCost = this.calcFinalCost(finalPositionInPixel);
            this.showMoneyOnScreen(finalCost);
            this.setTargetSliderPosition(finalPositionInPixel);
            this.moveRibbon();
        };
        this.getMousePosition = (_e) => {
            if (this.directionType === 'horizontal') {
                return (_e.clientX - this.indent);
            }
            if (this.directionType === 'vertical') {
                return (_e.clientY - this.indent);
            }
        };
        this.calcNearestStep = (_positionInPixel) => Math.round(_positionInPixel / this.pixelStep);
        this.calcFinalPosition = (nearestRoundedStep) => {
            const positionInPixel = nearestRoundedStep * this.pixelStep;
            if (this.isInBorder(positionInPixel)) {
                return positionInPixel;
            }
            if (positionInPixel <= this.lowerRestriction) {
                return this.lowerRestriction;
            }
            if (positionInPixel >= this.upperRestriction) {
                return this.upperRestriction;
            }
        };
        this.calcFinalCost = (finalPositionInPixel) => {
            if (this.isInBorder(finalPositionInPixel)) {
                return finalPositionInPixel * this.step;
            }
            if (finalPositionInPixel < this.lowerRestriction) {
                return this.lowerCostRestriction;
            }
            if (finalPositionInPixel > this.upperRestriction) {
                return this.upperCostRestriction;
            }
        };
        this.isInBorder = (position) => ((position >= this.lowerRestriction) && (position <= this.upperRestriction));
        this.showMoneyOnScreen = (finalCost) => {
            if (this.targetSlider === this.lowerSlider) {
                this.staticFieldLower.textContent = String(finalCost);
            }
            if ((this.targetSlider === this.upperSlider) || (this.targetSlider === this.singleSlider)) {
                this.staticFieldUpper.textContent = String(finalCost);
            }
        };
        this.moveRibbon = () => {
            const setHorizontalRibbonVariables = () => {
                if (this.sliderInDOM.length === 1) {
                    this.ribbon.style.left = '0px';
                    this.ribbon.style.width = `${this.singleSlider.offsetLeft} px`;
                }
                else if (this.sliderInDOM.length === 2) {
                    this.ribbon.style.left = this.lowerSlider.style.left;
                    this.ribbon.style.width = `${this.upperSlider.offsetLeft - this.lowerSlider.offsetLeft} px`;
                }
            };
            const setVerticalRibbonVariables = () => {
                if (this.sliderInDOM.length === 1) {
                    this.ribbon.style.top = '0px';
                    this.ribbon.style.height = `${this.singleSlider.offsetTop} px`;
                }
                else if (this.sliderInDOM.length === 2) {
                    this.ribbon.style.top = this.lowerSlider.style.top;
                    this.ribbon.style.height = `${this.upperSlider.offsetTop - this.lowerSlider.offsetTop} px`;
                }
            };
            if (this.directionType === 'horizontal') {
                setHorizontalRibbonVariables();
            }
            if (this.directionType === 'vertical') {
                setVerticalRibbonVariables();
            }
        };
        this.setTargetSliderPosition = (num) => {
            if (this.directionType === 'horizontal') {
                this.targetSlider.style.left = `${num}px`;
            }
            else if (this.directionType === 'vertical') {
                this.targetSlider.style.top = `${num}px`;
            }
            this.writeDOM();
            this.setOverlay();
        };
        this.setOverlay = () => {
            if (this.sliderType === 'double') {
                if (this.targetSlider === this.lowerSlider) {
                    this.targetSlider.style.zIndex = '100';
                    this.upperSlider.style.zIndex = '1';
                }
                else if (this.targetSlider === this.upperSlider) {
                    this.targetSlider.style.zIndex = '100';
                    this.lowerSlider.style.zIndex = '1';
                }
            }
        };
        this.cancelEvents = () => {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vaXNfcmVmYWN0b3JpbmcuY3NzPzcwZTkiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZmFjdG9yaW5nL2pzL3JlZmFjdG9yaW5nSW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZmFjdG9yaW5nL2pzL3JlZmFjdG9yaW5nVmlldy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEsdUM7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQXFDO0FBQ3JDO0FBQ21EO0FBQ25ELGlCQUFpQiwrREFBYztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSw0Qzs7Ozs7Ozs7Ozs7O0FDbEJBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsNkJBQTZCO0FBQzlFO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCwwREFBMEQ7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCw0QkFBNEI7QUFDOUU7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELHdEQUF3RDtBQUMxRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELElBQUk7QUFDdEQ7QUFDQTtBQUNBLGlEQUFpRCxJQUFJO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDMEI7QUFDMUIsMkMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvcmVmYWN0b3JpbmcvanMvcmVmYWN0b3JpbmdJbmRleC5qc1wiKTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCAnLi4vLi4vLi4vaXNfcmVmYWN0b3JpbmcuY3NzJztcclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnJlc29sdmVkXHJcbmltcG9ydCB7IFZpZXdIb3Jpem9udGFsIH0gZnJvbSAnLi9yZWZhY3RvcmluZ1ZpZXcnO1xyXG5jb25zdCB2aWV3ID0gbmV3IFZpZXdIb3Jpem9udGFsKCk7XHJcbnZpZXcuc2V0U3RhcnRpbmdDb25kaXRpb25zKHtcclxuICAgIGVsZW1lbnRJZDogJyNpc3MnLFxyXG4gICAgc2lnbjogJyQnLFxyXG4gICAgbG93ZXJTY2FsZUJvdW5kOiAxMDAsXHJcbiAgICB1cHBlclNjYWxlQm91bmQ6IDE1MDAsXHJcbiAgICBsb3dlclNsaWRlclZhbHVlOiAyMDAsXHJcbiAgICB1cHBlclNsaWRlclZhbHVlOiA4MDAsXHJcbiAgICBzbGlkZXJUeXBlOiAnZG91YmxlJyxcclxuICAgIGRpcmVjdGlvblR5cGU6ICdob3Jpem9udGFsJyxcclxuICAgIHN0ZXA6IDIsXHJcbiAgICB0b29sdGlwOiAnb24nLFxyXG4gICAgdmFsdWVTdGF0ZUZpZWxkOiAnb24nLFxyXG59KTtcclxudmlldy5pbml0KCk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlZmFjdG9yaW5nSW5kZXguanMubWFwIiwiY2xhc3MgVmlld0hvcml6b250YWwge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5iaW5kQ29udHJvbGxlciA9IChjb250cm9sbGVyKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udHJvbGxlciA9IGNvbnRyb2xsZXI7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnNldFN0YXJ0aW5nQ29uZGl0aW9ucyA9IChvYmopID0+IHtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50SWQgPSBvYmouZWxlbWVudElkIHx8ICcjaXNzJztcclxuICAgICAgICAgICAgdGhpcy5lbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihvYmouZWxlbWVudElkKTtcclxuICAgICAgICAgICAgdGhpcy5zaWduID0gb2JqLnNpZ24gfHwgJ1InO1xyXG4gICAgICAgICAgICB0aGlzLmxvd2VyU2NhbGUgPSBOdW1iZXIob2JqLmxvd2VyU2NhbGVCb3VuZCkgfHwgMDtcclxuICAgICAgICAgICAgdGhpcy51cHBlclNjYWxlID0gTnVtYmVyKG9iai51cHBlclNjYWxlQm91bmQpIHx8IDEwMDA7XHJcbiAgICAgICAgICAgIHRoaXMubG93ZXJTbGlkZXJWYWx1ZSA9IE51bWJlcihvYmoubG93ZXJTbGlkZXJWYWx1ZSkgfHwgMjAwO1xyXG4gICAgICAgICAgICB0aGlzLnVwcGVyU2xpZGVyVmFsdWUgPSBOdW1iZXIob2JqLnVwcGVyU2xpZGVyVmFsdWUpIHx8IDgwMDtcclxuICAgICAgICAgICAgdGhpcy5zbGlkZXJUeXBlID0gb2JqLnNsaWRlclR5cGUgfHwgJ3NpbmdsZSc7XHJcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uVHlwZSA9IG9iai5kaXJlY3Rpb25UeXBlIHx8ICdob3Jpem9udGFsJztcclxuICAgICAgICAgICAgdGhpcy5zdGVwID0gb2JqLnN0ZXAgfHwgMjtcclxuICAgICAgICAgICAgdGhpcy50b29sdGlwID0gb2JqLnRvb2x0aXAgfHwgJ29uJztcclxuICAgICAgICAgICAgdGhpcy52YWx1ZVN0YXRlRmllbGQgPSBvYmoudmFsdWVTdGF0ZUZpZWxkIHx8ICdvbic7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmdldFN0YXJ0aW5nQ29uZGl0aW9ucyA9ICgpID0+ICh7XHJcbiAgICAgICAgICAgIGVsZW1lbnRJZDogdGhpcy5lbGVtZW50SWQsXHJcbiAgICAgICAgICAgIHNpZ246IHRoaXMuc2lnbixcclxuICAgICAgICAgICAgbG93ZXJTY2FsZUJvdW5kOiB0aGlzLmxvd2VyU2NhbGUsXHJcbiAgICAgICAgICAgIHVwcGVyU2NhbGVCb3VuZDogdGhpcy51cHBlclNjYWxlLFxyXG4gICAgICAgICAgICBsb3dlclNsaWRlclZhbHVlOiB0aGlzLmxvd2VyU2xpZGVyVmFsdWUsXHJcbiAgICAgICAgICAgIHVwcGVyU2xpZGVyVmFsdWU6IHRoaXMudXBwZXJTbGlkZXJWYWx1ZSxcclxuICAgICAgICAgICAgc2xpZGVyVHlwZTogdGhpcy5zbGlkZXJUeXBlLFxyXG4gICAgICAgICAgICBzdGVwOiB0aGlzLnN0ZXAsXHJcbiAgICAgICAgICAgIHRvb2x0aXA6IHRoaXMudG9vbHRpcCxcclxuICAgICAgICAgICAgdmFsdWVTdGF0ZUZpZWxkOiB0aGlzLnZhbHVlU3RhdGVGaWVsZCxcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmluaXQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlRE9NKCk7XHJcbiAgICAgICAgICAgIHRoaXMud3JpdGVET00oKTtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVMaXN0ZW5lck9uU2xpZGVyKCk7XHJcbiAgICAgICAgICAgIHRoaXMud3JpdGVHZW9tZXRyeURPTXRvVmFyaWFibGVzKCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmNyZWF0ZURPTSA9ICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2tQYXJlbnQpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNsaWRlclR5cGUgPT09ICdkb3VibGUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVEb3VibGVET00oKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNsaWRlclR5cGUgPT09ICdzaW5nbGUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVTaW5nbGVET00oKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5jaGVja1BhcmVudCA9ICgpID0+ICEhdGhpcy5lbGVtO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlU2luZ2xlRE9NID0gKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmVsZW0uaW5uZXJIVE1MID0gJzxkaXYgY2xhc3M9XCJpc3NfX3ZhbHVlLWZpZWxkXCI+J1xyXG4gICAgICAgICAgICAgICAgKyAnPHNwYW4gY2xhc3M9XCJpc3Nfc3RhdGljRmllbGRcIj48L3NwYW4+J1xyXG4gICAgICAgICAgICAgICAgKyAnPC9kaXY+J1xyXG4gICAgICAgICAgICAgICAgKyAnPGRpdiBjbGFzcz0gXCJpc3MtY29udGFpbmVyXCI+J1xyXG4gICAgICAgICAgICAgICAgKyAnPGRpdiBjbGFzcz0gXCJpc3NfX3NjYWxlXCI+PC9kaXY+J1xyXG4gICAgICAgICAgICAgICAgKyAnPGRpdiBjbGFzcz1cImlzc19fY29sb3ItYmFyXCI+PC9kaXY+J1xyXG4gICAgICAgICAgICAgICAgKyAnPGRpdiBjbGFzcz1cImlzc19fc2luZ2xlX2ZseS12YWx1ZSBpc3NfX3Rvb2x0aXBcIiBkYXRhLXNseWRlcj1cInNpbmdsZVwiPjwvZGl2PidcclxuICAgICAgICAgICAgICAgICsgJzxkaXYgY2xhc3M9XCJpc3NfX3NpbmdsZSBpc3NfX2RyYWdcIj48L2Rpdj4nXHJcbiAgICAgICAgICAgICAgICArICc8L2Rpdj4nO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5jcmVhdGVEb3VibGVET00gPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbS5pbm5lckhUTUwgPSAnPGRpdiBjbGFzcz1cImlzc19fdmFsdWUtZmllbGRcIj4nXHJcbiAgICAgICAgICAgICAgICArICc8c3BhbiBjbGFzcz1cImlzc19zdGF0aWNGaWVsZFwiPjwvc3Bhbj4nXHJcbiAgICAgICAgICAgICAgICArICctJ1xyXG4gICAgICAgICAgICAgICAgKyAnPHNwYW4gY2xhc3M9XCJpc3Nfc3RhdGljRmllbGRcIj48L3NwYW4+J1xyXG4gICAgICAgICAgICAgICAgKyAnPC9kaXY+J1xyXG4gICAgICAgICAgICAgICAgKyAnPGRpdiBjbGFzcz0gXCJpc3MtY29udGFpbmVyXCI+J1xyXG4gICAgICAgICAgICAgICAgKyAnPGRpdiBjbGFzcz0gXCJpc3NfX3NjYWxlXCI+PC9kaXY+J1xyXG4gICAgICAgICAgICAgICAgKyAnPGRpdiBjbGFzcz1cImlzc19fZG91YmxlX2ZseS12YWx1ZS0xIGlzc19fdG9vbHRpcFwiPjwvZGl2PidcclxuICAgICAgICAgICAgICAgICsgJzxkaXYgY2xhc3M9XCJpc3NfX2RvdWJsZV8xX2hvcml6b250YWwgaXNzX19kcmFnXCIgZGF0YS1zbHlkZXI9XCJsb3dlclwiPjwvZGl2PidcclxuICAgICAgICAgICAgICAgICsgJzxkaXYgY2xhc3M9XCJpc3NfX2RvdWJsZV9mbHktdmFsdWUtMiBpc3NfX3Rvb2x0aXBcIj48L2Rpdj4nXHJcbiAgICAgICAgICAgICAgICArICc8ZGl2IGNsYXNzPVwiaXNzX19kb3VibGVfMl9ob3Jpem9udGFsIGlzc19fZHJhZ1wiIGRhdGEtc2x5ZGVyPVwidXBwZXJcIj48L2Rpdj4nXHJcbiAgICAgICAgICAgICAgICArICc8ZGl2IGNsYXNzPVwiaXNzX19jb2xvci1iYXJcIj48L2Rpdj4nXHJcbiAgICAgICAgICAgICAgICArICc8L2Rpdj4nO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy53cml0ZURPTSA9ICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jaGVja0VsZW1lbnRzSW5ET00oKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc2xpZGVySW5ET00ubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLndyaXRlU2luZ2xlRE9NdG9WYXJpYWJsZXMoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMud3JpdGVTaW5nbGVTbGlkZXJJbmRlbnQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLnNsaWRlckluRE9NLmxlbmd0aCA9PT0gMikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy53cml0ZURvdWJsZURPTXRvVmFyaWFibGVzKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLndyaXRlRG91YmxlU2xpZGVySW5kZW50KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuY2hlY2tFbGVtZW50c0luRE9NID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBzbGlkZXJJbkRPTSA9IHRoaXMuZWxlbS5xdWVyeVNlbGVjdG9yQWxsKCcuaXNzX19kcmFnJyk7XHJcbiAgICAgICAgICAgIGlmICgoc2xpZGVySW5ET00ubGVuZ3RoID4gMCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2xpZGVySW5ET00gPSBzbGlkZXJJbkRPTTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy53cml0ZVNpbmdsZURPTXRvVmFyaWFibGVzID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBbdGhpcy5zY2FsZV0gPSB0aGlzLnJldHVybkVsZW1lbnRzRnJvbURPTSgnLmlzc19fc2NhbGUnLCAxKTtcclxuICAgICAgICAgICAgW3RoaXMuc2luZ2xlU2xpZGVyXSA9IHRoaXMucmV0dXJuRWxlbWVudHNGcm9tRE9NKCcuaXNzX19kcmFnJywgMSk7XHJcbiAgICAgICAgICAgIFt0aGlzLnN0YXRpY0ZpZWxkVXBwZXJdID0gdGhpcy5yZXR1cm5FbGVtZW50c0Zyb21ET00oJy5pc3Nfc3RhdGljRmllbGQnLCAxKTtcclxuICAgICAgICAgICAgW3RoaXMuZmx5RmllbGRTaW5nbGVdID0gdGhpcy5yZXR1cm5FbGVtZW50c0Zyb21ET00oJy5pc3NfX3Rvb2x0aXAnLCAxKTtcclxuICAgICAgICAgICAgW3RoaXMucmliYm9uXSA9IHRoaXMucmV0dXJuRWxlbWVudHNGcm9tRE9NKCcuaXNzX19jb2xvci1iYXInLCAxKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMud3JpdGVEb3VibGVET010b1ZhcmlhYmxlcyA9ICgpID0+IHtcclxuICAgICAgICAgICAgW3RoaXMuc2NhbGVdID0gdGhpcy5yZXR1cm5FbGVtZW50c0Zyb21ET00oJy5pc3NfX3NjYWxlJywgMSk7XHJcbiAgICAgICAgICAgIFt0aGlzLmxvd2VyU2xpZGVyLCB0aGlzLnVwcGVyU2xpZGVyXSA9IHRoaXMucmV0dXJuRWxlbWVudHNGcm9tRE9NKCcuaXNzX19kcmFnJywgMik7XHJcbiAgICAgICAgICAgIFt0aGlzLnN0YXRpY0ZpZWxkTG93ZXIsIHRoaXMuc3RhdGljRmllbGRVcHBlcl0gPSB0aGlzLnJldHVybkVsZW1lbnRzRnJvbURPTSgnLmlzc19zdGF0aWNGaWVsZCcsIDIpO1xyXG4gICAgICAgICAgICBbdGhpcy5mbHlGaWVsZExvd2VyLCB0aGlzLmZseUZpZWxkVXBwZXJdID0gdGhpcy5yZXR1cm5FbGVtZW50c0Zyb21ET00oJy5pc3NfX3Rvb2x0aXAnLCAyKTtcclxuICAgICAgICAgICAgW3RoaXMucmliYm9uXSA9IHRoaXMucmV0dXJuRWxlbWVudHNGcm9tRE9NKCcuaXNzX19jb2xvci1iYXInLCAxKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMud3JpdGVTaW5nbGVTbGlkZXJJbmRlbnQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW0gPSB0aGlzLnJldHVybkVsZW1lbnRzRnJvbURPTSgnLmlzc19fZHJhZycsIDEpO1xyXG4gICAgICAgICAgICBjb25zdCBlbGVtQm91bmRpbmcgPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zbGlkZXJUeXBlID09PSAnaG9yaXpvbnRhbCcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2luZ2xlU2xpZGVyUG9zaXRpb24gPSBlbGVtQm91bmRpbmcubGVmdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5zbGlkZXJUeXBlID09PSAndmVydGljYWwnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNpbmdsZVNsaWRlclBvc2l0aW9uID0gZWxlbUJvdW5kaW5nLnRvcDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy53cml0ZURvdWJsZVNsaWRlckluZGVudCA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZWxlbXMgPSB0aGlzLnJldHVybkVsZW1lbnRzRnJvbURPTSgnLmlzc19fZHJhZycsIDIpO1xyXG4gICAgICAgICAgICBjb25zdCB0eXBlID0gdGhpcy5kaXJlY3Rpb25UeXBlO1xyXG4gICAgICAgICAgICBjb25zdCByZXR1cm5JbmRlbnQgPSAoYXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gJ2hvcml6b250YWwnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFyci5vZmZzZXRMZWZ0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICd2ZXJ0aWNhbCcpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXJyLm9mZnNldFRvcDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdGhpcy5sb3dlclNsaWRlclBvc2l0aW9uID0gcmV0dXJuSW5kZW50KGVsZW1zWzBdKTtcclxuICAgICAgICAgICAgdGhpcy51cHBlclNsaWRlclBvc2l0aW9uID0gcmV0dXJuSW5kZW50KGVsZW1zWzFdKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMucmV0dXJuRWxlbWVudHNGcm9tRE9NID0gKGNsYXNzTmFtZSwgbGVuZ3RoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IERPTUVsZW1lbnRzID0gdGhpcy5lbGVtLnF1ZXJ5U2VsZWN0b3JBbGwoY2xhc3NOYW1lKTtcclxuICAgICAgICAgICAgaWYgKChET01FbGVtZW50cy5sZW5ndGggPT09IGxlbmd0aCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBET01FbGVtZW50cztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLndyaXRlR2VvbWV0cnlET010b1ZhcmlhYmxlcyA9ICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXREaXJlY3Rpb24oKTtcclxuICAgICAgICAgICAgdGhpcy53cml0ZUdlb21ldHJ5T2ZTbGlkZXIoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuc2V0RGlyZWN0aW9uID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBzZXRIb3Jpem9udGFsRGlyZWN0aW9uID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbGllbnRSZWN0ID0gdGhpcy5zY2FsZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5kZW50ID0gdGhpcy5jbGllbnRSZWN0LmxlZnQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1haW5BeGlzU2l6ZSA9IHRoaXMuc2NhbGUub2Zmc2V0V2lkdGg7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlY29uZGFyeUF4aXNTaXplID0gdGhpcy5zY2FsZS5vZmZzZXRIZWlnaHQ7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNvbnN0IHNldFZlcnRpY2FsRGlyZWN0aW9uID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbGllbnRSZWN0ID0gdGhpcy5zY2FsZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5kZW50ID0gdGhpcy5jbGllbnRSZWN0LnRvcDtcclxuICAgICAgICAgICAgICAgIHRoaXMubWFpbkF4aXNTaXplID0gdGhpcy5lbGVtLm9mZnNldEhlaWdodDtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2Vjb25kYXJ5QXhpc1NpemUgPSB0aGlzLnNjYWxlLm9mZnNldFdpZHRoO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb25UeXBlID09PSAnaG9yaXpvbnRhbCcpIHtcclxuICAgICAgICAgICAgICAgIHNldEhvcml6b250YWxEaXJlY3Rpb24oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb25UeXBlID09PSAndmVydGljYWwnKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRWZXJ0aWNhbERpcmVjdGlvbigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLndyaXRlR2VvbWV0cnlPZlNsaWRlciA9ICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc2xpZGVySW5ET00ubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNsaWRlcldpZHRoID0gdGhpcy5zaW5nbGVTbGlkZXIub2Zmc2V0V2lkdGg7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNsaWRlckhlaWdodCA9IHRoaXMuc2luZ2xlU2xpZGVyLm9mZnNldEhlaWdodDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLnNsaWRlckluRE9NLmxlbmd0aCA9PT0gMikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zbGlkZXJXaWR0aCA9IHRoaXMubG93ZXJTbGlkZXIub2Zmc2V0V2lkdGg7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNsaWRlckhlaWdodCA9IHRoaXMubG93ZXJTbGlkZXIub2Zmc2V0SGVpZ2h0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuY2FsY1BpeGVsU3RlcCgpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5jYWxjUGl4ZWxTdGVwID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB3aWR0aFZzTW9uZXkgPSB0aGlzLm1haW5BeGlzU2l6ZSAvIHRoaXMudXBwZXJTY2FsZTtcclxuICAgICAgICAgICAgY29uc3Qgc3RlcEluUGl4ZWwgPSB3aWR0aFZzTW9uZXkgKiB0aGlzLnN0ZXA7XHJcbiAgICAgICAgICAgIGlmIChzdGVwSW5QaXhlbCA8IDEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGl4ZWxTdGVwID0gc3RlcEluUGl4ZWw7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdW5kZWRQaXhlbFN0ZXAgPSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5waXhlbFN0ZXAgPSBzdGVwSW5QaXhlbDtcclxuICAgICAgICAgICAgICAgIHRoaXMucm91bmRlZFBpeGVsU3RlcCA9IE1hdGgucm91bmQoc3RlcEluUGl4ZWwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmNyZWF0ZUxpc3RlbmVyT25TbGlkZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNsaWRlckluRE9NLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVFdmVudE9uU2luZ2xlU2xpZGVyKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5zbGlkZXJJbkRPTS5sZW5ndGggPT09IDIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlRXZlbnRzT25Eb3VibGVTbGlkZXIoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5jcmVhdGVFdmVudHNPbkRvdWJsZVNsaWRlciA9ICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5sb3dlclNsaWRlci5vbm1vdXNlZG93biA9IHRoaXMuZXZlbnRPblNsaWRlcjtcclxuICAgICAgICAgICAgdGhpcy51cHBlclNsaWRlci5vbm1vdXNlZG93biA9IHRoaXMuZXZlbnRPblNsaWRlcjtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuY3JlYXRlRXZlbnRPblNpbmdsZVNsaWRlciA9ICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zaW5nbGVTbGlkZXIub25tb3VzZWRvd24gPSB0aGlzLmV2ZW50T25TbGlkZXI7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmV2ZW50T25TbGlkZXIgPSAoX2UpID0+IHtcclxuICAgICAgICAgICAgX2UucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRSZXN0cmljdGlvbk9mU2xpZGVyTW92ZW1lbnQoX2UpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5vbm1vdXNldXAgPSB0aGlzLmNhbmNlbEV2ZW50cztcclxuICAgICAgICAgICAgZG9jdW1lbnQub25tb3VzZW1vdmUgPSB0aGlzLm1vdmVFdmVudFdpdGhIb2xkTW91c2U7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnNldFJlc3RyaWN0aW9uT2ZTbGlkZXJNb3ZlbWVudCA9IChfZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zbGlkZXJUeXBlID09PSAnZG91YmxlJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRSZXN0cmljdGlvbkZvckRvdWJsZVNsaWRlcihfZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuc2xpZGVyVHlwZSA9PT0gJ3NpbmdsZScpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0UmVzdHJpY3Rpb25Gb3JTaW5nbGVTbGlkZXIoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5zZXRSZXN0cmljdGlvbkZvckRvdWJsZVNsaWRlciA9IChfZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoX2UudGFyZ2V0ID09PSB0aGlzLmxvd2VyU2xpZGVyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRhcmdldFNsaWRlciA9IHRoaXMubG93ZXJTbGlkZXI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwcGVyUmVzdHJpY3Rpb24gPSB0aGlzLnVwcGVyU2xpZGVyUG9zaXRpb247XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvd2VyUmVzdHJpY3Rpb24gPSAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cHBlckNvc3RSZXN0cmljdGlvbiA9IHRoaXMuZ2V0Q29zdEZvclNsaWRlcih0aGlzLnVwcGVyU2xpZGVyUG9zaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb3dlckNvc3RSZXN0cmljdGlvbiA9IHRoaXMubG93ZXJTY2FsZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoX2UudGFyZ2V0ID09PSB0aGlzLnVwcGVyU2xpZGVyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRhcmdldFNsaWRlciA9IHRoaXMudXBwZXJTbGlkZXI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwcGVyUmVzdHJpY3Rpb24gPSB0aGlzLm1haW5BeGlzU2l6ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubG93ZXJSZXN0cmljdGlvbiA9IHRoaXMubG93ZXJTbGlkZXJQb3NpdGlvbjtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBwZXJDb3N0UmVzdHJpY3Rpb24gPSB0aGlzLnVwcGVyU2NhbGU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvd2VyQ29zdFJlc3RyaWN0aW9uID0gdGhpcy5nZXRDb3N0Rm9yU2xpZGVyKHRoaXMubG93ZXJTbGlkZXJQb3NpdGlvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuc2V0UmVzdHJpY3Rpb25Gb3JTaW5nbGVTbGlkZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0U2xpZGVyID0gdGhpcy5zaW5nbGVTbGlkZXI7XHJcbiAgICAgICAgICAgIHRoaXMudXBwZXJSZXN0cmljdGlvbiA9IHRoaXMubWFpbkF4aXNTaXplO1xyXG4gICAgICAgICAgICB0aGlzLmxvd2VyUmVzdHJpY3Rpb24gPSAwO1xyXG4gICAgICAgICAgICB0aGlzLnVwcGVyQ29zdFJlc3RyaWN0aW9uID0gdGhpcy51cHBlclNjYWxlO1xyXG4gICAgICAgICAgICB0aGlzLmxvd2VyQ29zdFJlc3RyaWN0aW9uID0gdGhpcy5sb3dlclNjYWxlO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5nZXRDb3N0Rm9yU2xpZGVyID0gKHNsaWRlclBvc3Rpb25JblBpeGVsKSA9PiBNYXRoLnJvdW5kKChzbGlkZXJQb3N0aW9uSW5QaXhlbCAvIHRoaXMucGl4ZWxTdGVwKSAqIHRoaXMuc3RlcCk7XHJcbiAgICAgICAgdGhpcy5tb3ZlRXZlbnRXaXRoSG9sZE1vdXNlID0gKF9lKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlubmVyTW91c2VQb3NpdGlvbiA9IHRoaXMuZ2V0TW91c2VQb3NpdGlvbihfZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IG5lYXJlc3RSb3VuZGVkU3RlcCA9IHRoaXMuY2FsY05lYXJlc3RTdGVwKGlubmVyTW91c2VQb3NpdGlvbik7XHJcbiAgICAgICAgICAgIGNvbnN0IGZpbmFsUG9zaXRpb25JblBpeGVsID0gdGhpcy5jYWxjRmluYWxQb3NpdGlvbihuZWFyZXN0Um91bmRlZFN0ZXApO1xyXG4gICAgICAgICAgICBjb25zdCBmaW5hbENvc3QgPSB0aGlzLmNhbGNGaW5hbENvc3QoZmluYWxQb3NpdGlvbkluUGl4ZWwpO1xyXG4gICAgICAgICAgICB0aGlzLnNob3dNb25leU9uU2NyZWVuKGZpbmFsQ29zdCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0VGFyZ2V0U2xpZGVyUG9zaXRpb24oZmluYWxQb3NpdGlvbkluUGl4ZWwpO1xyXG4gICAgICAgICAgICB0aGlzLm1vdmVSaWJib24oKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuZ2V0TW91c2VQb3NpdGlvbiA9IChfZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb25UeXBlID09PSAnaG9yaXpvbnRhbCcpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoX2UuY2xpZW50WCAtIHRoaXMuaW5kZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb25UeXBlID09PSAndmVydGljYWwnKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKF9lLmNsaWVudFkgLSB0aGlzLmluZGVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuY2FsY05lYXJlc3RTdGVwID0gKF9wb3NpdGlvbkluUGl4ZWwpID0+IE1hdGgucm91bmQoX3Bvc2l0aW9uSW5QaXhlbCAvIHRoaXMucGl4ZWxTdGVwKTtcclxuICAgICAgICB0aGlzLmNhbGNGaW5hbFBvc2l0aW9uID0gKG5lYXJlc3RSb3VuZGVkU3RlcCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwb3NpdGlvbkluUGl4ZWwgPSBuZWFyZXN0Um91bmRlZFN0ZXAgKiB0aGlzLnBpeGVsU3RlcDtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNJbkJvcmRlcihwb3NpdGlvbkluUGl4ZWwpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcG9zaXRpb25JblBpeGVsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChwb3NpdGlvbkluUGl4ZWwgPD0gdGhpcy5sb3dlclJlc3RyaWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5sb3dlclJlc3RyaWN0aW9uO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChwb3NpdGlvbkluUGl4ZWwgPj0gdGhpcy51cHBlclJlc3RyaWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy51cHBlclJlc3RyaWN0aW9uO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmNhbGNGaW5hbENvc3QgPSAoZmluYWxQb3NpdGlvbkluUGl4ZWwpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNJbkJvcmRlcihmaW5hbFBvc2l0aW9uSW5QaXhlbCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmaW5hbFBvc2l0aW9uSW5QaXhlbCAqIHRoaXMuc3RlcDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZmluYWxQb3NpdGlvbkluUGl4ZWwgPCB0aGlzLmxvd2VyUmVzdHJpY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmxvd2VyQ29zdFJlc3RyaWN0aW9uO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChmaW5hbFBvc2l0aW9uSW5QaXhlbCA+IHRoaXMudXBwZXJSZXN0cmljdGlvbikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudXBwZXJDb3N0UmVzdHJpY3Rpb247XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuaXNJbkJvcmRlciA9IChwb3NpdGlvbikgPT4gKChwb3NpdGlvbiA+PSB0aGlzLmxvd2VyUmVzdHJpY3Rpb24pICYmIChwb3NpdGlvbiA8PSB0aGlzLnVwcGVyUmVzdHJpY3Rpb24pKTtcclxuICAgICAgICB0aGlzLnNob3dNb25leU9uU2NyZWVuID0gKGZpbmFsQ29zdCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy50YXJnZXRTbGlkZXIgPT09IHRoaXMubG93ZXJTbGlkZXIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGljRmllbGRMb3dlci50ZXh0Q29udGVudCA9IFN0cmluZyhmaW5hbENvc3QpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICgodGhpcy50YXJnZXRTbGlkZXIgPT09IHRoaXMudXBwZXJTbGlkZXIpIHx8ICh0aGlzLnRhcmdldFNsaWRlciA9PT0gdGhpcy5zaW5nbGVTbGlkZXIpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRpY0ZpZWxkVXBwZXIudGV4dENvbnRlbnQgPSBTdHJpbmcoZmluYWxDb3N0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5tb3ZlUmliYm9uID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBzZXRIb3Jpem9udGFsUmliYm9uVmFyaWFibGVzID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2xpZGVySW5ET00ubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yaWJib24uc3R5bGUubGVmdCA9ICcwcHgnO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmliYm9uLnN0eWxlLndpZHRoID0gYCR7dGhpcy5zaW5nbGVTbGlkZXIub2Zmc2V0TGVmdH0gcHhgO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5zbGlkZXJJbkRPTS5sZW5ndGggPT09IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJpYmJvbi5zdHlsZS5sZWZ0ID0gdGhpcy5sb3dlclNsaWRlci5zdHlsZS5sZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmliYm9uLnN0eWxlLndpZHRoID0gYCR7dGhpcy51cHBlclNsaWRlci5vZmZzZXRMZWZ0IC0gdGhpcy5sb3dlclNsaWRlci5vZmZzZXRMZWZ0fSBweGA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNvbnN0IHNldFZlcnRpY2FsUmliYm9uVmFyaWFibGVzID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2xpZGVySW5ET00ubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yaWJib24uc3R5bGUudG9wID0gJzBweCc7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yaWJib24uc3R5bGUuaGVpZ2h0ID0gYCR7dGhpcy5zaW5nbGVTbGlkZXIub2Zmc2V0VG9wfSBweGA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLnNsaWRlckluRE9NLmxlbmd0aCA9PT0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmliYm9uLnN0eWxlLnRvcCA9IHRoaXMubG93ZXJTbGlkZXIuc3R5bGUudG9wO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmliYm9uLnN0eWxlLmhlaWdodCA9IGAke3RoaXMudXBwZXJTbGlkZXIub2Zmc2V0VG9wIC0gdGhpcy5sb3dlclNsaWRlci5vZmZzZXRUb3B9IHB4YDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uVHlwZSA9PT0gJ2hvcml6b250YWwnKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRIb3Jpem9udGFsUmliYm9uVmFyaWFibGVzKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uVHlwZSA9PT0gJ3ZlcnRpY2FsJykge1xyXG4gICAgICAgICAgICAgICAgc2V0VmVydGljYWxSaWJib25WYXJpYWJsZXMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5zZXRUYXJnZXRTbGlkZXJQb3NpdGlvbiA9IChudW0pID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uVHlwZSA9PT0gJ2hvcml6b250YWwnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRhcmdldFNsaWRlci5zdHlsZS5sZWZ0ID0gYCR7bnVtfXB4YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLmRpcmVjdGlvblR5cGUgPT09ICd2ZXJ0aWNhbCcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0U2xpZGVyLnN0eWxlLnRvcCA9IGAke251bX1weGA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy53cml0ZURPTSgpO1xyXG4gICAgICAgICAgICB0aGlzLnNldE92ZXJsYXkoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuc2V0T3ZlcmxheSA9ICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc2xpZGVyVHlwZSA9PT0gJ2RvdWJsZScpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRhcmdldFNsaWRlciA9PT0gdGhpcy5sb3dlclNsaWRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0U2xpZGVyLnN0eWxlLnpJbmRleCA9ICcxMDAnO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBwZXJTbGlkZXIuc3R5bGUuekluZGV4ID0gJzEnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy50YXJnZXRTbGlkZXIgPT09IHRoaXMudXBwZXJTbGlkZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRhcmdldFNsaWRlci5zdHlsZS56SW5kZXggPSAnMTAwJztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvd2VyU2xpZGVyLnN0eWxlLnpJbmRleCA9ICcxJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5jYW5jZWxFdmVudHMgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50Lm9ubW91c2V1cCA9IG51bGw7XHJcbiAgICAgICAgICAgIGRvY3VtZW50Lm9ubW91c2Vtb3ZlID0gbnVsbDtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgc2V0Q29udHJvbGxlcigpIHtcclxuICAgICAgICBjb25zdCBvYmogPSB7XHJcbiAgICAgICAgICAgIGxvd2VyU2xpZGVyVmFsdWU6IHRoaXMubG93ZXJTbGlkZXJWYWx1ZSxcclxuICAgICAgICAgICAgdXBwZXJTbGlkZXJWYWx1ZTogdGhpcy51cHBlclNsaWRlclZhbHVlLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5jb250cm9sbGVyLmdldFZpZXcob2JqKTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgeyBWaWV3SG9yaXpvbnRhbCB9O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZWZhY3RvcmluZ1ZpZXcuanMubWFwIl0sInNvdXJjZVJvb3QiOiIifQ==