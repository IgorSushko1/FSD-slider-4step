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
            this.writeGeometryDOMtoVariables();
            this.createListenerOnSlider();
            this.movesSlidersToStartPositions();
            this.writeMoneyToFields();
            this.moveTooltip();
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
        this.returnIndent = (element) => {
            if (this.directionType === 'horizontal') {
                return element.offsetLeft;
            }
            if (this.directionType === 'vertical') {
                return element.offsetTop;
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
            }
            if (this.directionType === 'vertical') {
                this.mainAxisSize = this.scale.offsetHeight;
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
        this.movesSlidersToStartPositions = () => {
            if (this.sliderType === 'single') {
                this.setSingleToStartPosition();
                this.moveRibbon();
            }
            if (this.sliderType === 'double') {
                this.setsDoubleToStartPostions();
                this.moveRibbon();
            }
        };
        this.setSingleToStartPosition = () => {
            if (this.directionType === 'horizontal') {
                this.singleSlider.style.left = `${this.calcMoneyToPosition(this.lowerSliderValue)}px`;
            }
            if (this.directionType === 'vertical') {
                this.singleSlider.style.top = `${this.calcMoneyToPosition(this.lowerSliderValue)}px`;
            }
        };
        this.setsDoubleToStartPostions = () => {
            if (this.directionType === 'horizontal') {
                this.lowerSlider.style.left = `${this.calcMoneyToPosition(this.lowerSliderValue)}px`;
                this.upperSlider.style.left = `${this.calcMoneyToPosition(this.upperSliderValue)}px`;
            }
            if (this.directionType === 'vertical') {
                this.lowerSlider.style.top = `${this.calcMoneyToPosition(this.lowerSliderValue)}px`;
                this.upperSlider.style.top = `${this.calcMoneyToPosition(this.upperSliderValue)}px`;
            }
        };
        this.writeMoneyToFields = () => {
            if (this.sliderType === 'single') {
                this.staticFieldSingle.innerText = `${this.lowerSliderValue}${this.sign}`;
                this.flyFieldSingle.innerText = `${this.lowerSliderValue}${this.sign}`;
            }
            if (this.sliderType === 'double') {
                this.staticFieldLower.innerText = `${this.lowerSliderValue}${this.sign}`;
                this.staticFieldUpper.innerText = `${this.upperSliderValue}${this.sign}`;
                this.flyFieldLower.innerText = `${this.lowerSliderValue}${this.sign}`;
                this.flyFieldUpper.innerText = `${this.upperSliderValue}${this.sign}`;
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
            if (this.directionType === 'horizontal') {
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
                    this.lowerCostRestriction = this.getCostForSlider(this.lowerRestriction);
                    this.upperCostRestriction = this.upperScale;
                }
            }
            if (this.directionType === 'vertical') {
                if (_e.target === this.lowerSlider) {
                    this.targetSlider = this.lowerSlider;
                    this.lowerRestriction = 0;
                    this.upperRestriction = this.upperSliderPosition;
                    this.lowerCostRestriction = this.getCostForSlider(this.lowerRestriction);
                    this.upperCostRestriction = this.getCostForSlider(this.upperRestriction);
                    console.log(`lowerCostRestriction === ${this.lowerCostRestriction}`);
                    console.log(`upperCostRestriction === ${this.upperCostRestriction}`);
                }
                if (_e.target === this.upperSlider) {
                    this.targetSlider = this.upperSlider;
                    this.lowerRestriction = this.lowerSliderPosition;
                    this.upperRestriction = this.mainAxisSize;
                    this.lowerCostRestriction = this.getCostForSlider(this.lowerRestriction);
                    this.upperCostRestriction = this.getCostForSlider(this.upperRestriction);
                    console.log(`lowerCostRestriction === ${this.lowerCostRestriction}`);
                    console.log(`upperCostRestriction === ${this.upperCostRestriction}`);
                }
            }
        };
        this.setRestrictionForSingleSlider = () => {
            if (this.directionType === 'horizontal') {
                this.targetSlider = this.singleSlider;
                this.lowerRestriction = 0;
                this.upperRestriction = this.mainAxisSize;
                this.lowerCostRestriction = this.lowerScale;
                this.upperCostRestriction = this.upperScale;
            }
            if (this.directionType === 'vertical') {
                this.targetSlider = this.singleSlider;
                this.lowerRestriction = 0;
                this.upperRestriction = this.mainAxisSize;
                this.lowerCostRestriction = this.upperScale;
                this.upperCostRestriction = this.lowerScale;
            }
        };
        this.getCostForSlider = (sliderPostionInPixel) => {
            if (this.directionType === 'horizontal') {
                if (sliderPostionInPixel <= 0) {
                    console.log(`${this.lowerScale} this.lowerScale`);
                    return this.lowerScale;
                }
                return (Math.round(sliderPostionInPixel / this.pixelStep) * this.step);
            }
            if (this.directionType === 'vertical') {
                if (sliderPostionInPixel <= 0) {
                    return this.upperScale;
                }
                return ((Math.round((this.mainAxisSize - sliderPostionInPixel) / this.pixelStep) * this.step) + this.lowerScale);
            }
        };
        this.moveEventWithHoldMouse = (_e) => {
            const innerMousePosition = this.getMousePosition(_e);
            const nearestRoundedStep = this.calcNearestStep(innerMousePosition);
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
        this.calcNearestStep = (_positionInPixel) => {
            if (this.directionType === 'horizontal') {
                return Math.round(_positionInPixel / this.pixelStep);
            }
            if (this.directionType === 'vertical') {
                return Math.round((this.mainAxisSize - _positionInPixel) / this.pixelStep);
            }
        };
        this.calcFinalPosition = (_nearestRoundedStep) => {
            const positionInPixel = _nearestRoundedStep * this.pixelStep;
            if (this.directionType === 'horizontal') {
                if (this.isPixelsInBorder(positionInPixel)) {
                    return positionInPixel;
                }
                if (positionInPixel <= this.lowerRestriction) {
                    return this.lowerRestriction;
                }
                if (positionInPixel >= this.upperRestriction) {
                    return this.upperRestriction;
                }
            }
            if (this.directionType === 'vertical') {
                if (this.isPixelsInBorder((this.mainAxisSize - positionInPixel))) {
                    console.log(`${this.mainAxisSize - positionInPixel} === this.mainAxisSize - positionInPixel`);
                    return (this.mainAxisSize - positionInPixel);
                }
                if ((this.mainAxisSize - positionInPixel) <= this.lowerRestriction) {
                    // console.log(`${}`);
                    console.log(`${this.lowerRestriction} === lower`);
                    return this.lowerRestriction;
                }
                if ((this.mainAxisSize - positionInPixel) >= this.upperRestriction) {
                    return this.upperRestriction;
                }
            }
        };
        this.calcFinalCost = (_nearestRoundedStep) => {
            if (this.directionType === 'horizontal') {
                const positionInMoney = _nearestRoundedStep * this.step;
                if (this.isMoneyInBorder(positionInMoney)) {
                    return positionInMoney;
                }
                if (positionInMoney < this.lowerCostRestriction) {
                    return this.lowerCostRestriction;
                }
                if (positionInMoney > this.upperCostRestriction) {
                    return this.upperCostRestriction;
                }
            }
            if (this.directionType === 'vertical') {
                const positionInMoney = (_nearestRoundedStep * this.step) + this.lowerScale;
                console.log(`positionInMoney === ${positionInMoney}`);
                if (this.isMoneyInBorder(positionInMoney)) {
                    return positionInMoney;
                }
                if (positionInMoney > this.lowerCostRestriction) {
                    return this.lowerCostRestriction;
                }
                if (positionInMoney < this.upperCostRestriction) {
                    return this.upperCostRestriction;
                }
            }
        };
        this.isPixelsInBorder = (_position) => ((_position >= this.lowerRestriction) && (_position <= this.upperRestriction));
        this.isMoneyInBorder = (_position) => {
            if (this.directionType === 'horizontal') {
                return ((_position >= this.lowerCostRestriction) && (_position <= this.upperCostRestriction));
            }
            if (this.directionType === 'vertical') {
                return ((_position <= this.lowerCostRestriction) && (_position >= this.upperCostRestriction));
            }
        };
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
                    this.ribbon.style.top = `${this.singleSlider.offsetTop}px`;
                    this.ribbon.style.height = `${this.mainAxisSize - this.singleSlider.offsetTop}px`;
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
    calcMoneyToPosition(money) {
        const position = (money / this.step) * this.pixelStep;
        return position;
    }
}

//# sourceMappingURL=refactoringView.js.map

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vaXNfcmVmYWN0b3JpbmcuY3NzPzcwZTkiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZmFjdG9yaW5nL2pzL3JlZmFjdG9yaW5nSW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZmFjdG9yaW5nL2pzL3JlZmFjdG9yaW5nVmlldy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEsdUM7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQXFDO0FBQ3JDO0FBQ21EO0FBQ25ELGlCQUFpQiwrREFBYztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxpQ0FBaUMsK0RBQWM7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsK0JBQStCLCtEQUFjO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLCtCQUErQiwrREFBYztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSw0Qzs7Ozs7Ozs7Ozs7O0FDL0RBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsZ0RBQWdEO0FBQ2xHO0FBQ0E7QUFDQSxpREFBaUQsZ0RBQWdEO0FBQ2pHO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELGdEQUFnRDtBQUNqRyxpREFBaUQsZ0RBQWdEO0FBQ2pHO0FBQ0E7QUFDQSxnREFBZ0QsZ0RBQWdEO0FBQ2hHLGdEQUFnRCxnREFBZ0Q7QUFDaEc7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzREFBc0Qsc0JBQXNCLEVBQUUsVUFBVTtBQUN4RixtREFBbUQsc0JBQXNCLEVBQUUsVUFBVTtBQUNyRjtBQUNBO0FBQ0EscURBQXFELHNCQUFzQixFQUFFLFVBQVU7QUFDdkYscURBQXFELHNCQUFzQixFQUFFLFVBQVU7QUFDdkYsa0RBQWtELHNCQUFzQixFQUFFLFVBQVU7QUFDcEYsa0RBQWtELHNCQUFzQixFQUFFLFVBQVU7QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFBNEQsMEJBQTBCO0FBQ3RGLDREQUE0RCwwQkFBMEI7QUFDdEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFBNEQsMEJBQTBCO0FBQ3RGLDREQUE0RCwwQkFBMEI7QUFDdEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsZ0JBQWdCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsb0NBQW9DO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QyxtQ0FBbUMsc0JBQXNCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELGdCQUFnQjtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsVUFBVSxFQUFFLFVBQVU7QUFDbEQ7QUFDQSx1REFBdUQsS0FBSztBQUM1RCxvREFBb0QsS0FBSztBQUN6RDtBQUNBO0FBQ0EsdURBQXVELEtBQUs7QUFDNUQsb0RBQW9ELEtBQUs7QUFDekQ7QUFDQTtBQUNBLHdEQUF3RCxLQUFLO0FBQzdELHFEQUFxRCxLQUFLO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCw2QkFBNkI7QUFDOUU7QUFDQTtBQUNBO0FBQ0EsaURBQWlELDBEQUEwRDtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyw0QkFBNEI7QUFDM0Usa0RBQWtELGdEQUFnRDtBQUNsRztBQUNBO0FBQ0E7QUFDQSxrREFBa0Qsd0RBQXdEO0FBQzFHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsSUFBSTtBQUN0RDtBQUNBO0FBQ0EsaURBQWlELElBQUk7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlGQUF5RiwwQkFBMEI7QUFDbkg7QUFDQTtBQUNBLHlGQUF5Rix5QkFBeUI7QUFDbEgseUZBQXlGLHlCQUF5QjtBQUNsSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUMwQjtBQUMxQiwyQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9yZWZhY3RvcmluZy9qcy9yZWZhY3RvcmluZ0luZGV4LmpzXCIpO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0ICcuLi8uLi8uLi9pc19yZWZhY3RvcmluZy5jc3MnO1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVucmVzb2x2ZWRcclxuaW1wb3J0IHsgVmlld0hvcml6b250YWwgfSBmcm9tICcuL3JlZmFjdG9yaW5nVmlldyc7XHJcbmNvbnN0IHZpZXcgPSBuZXcgVmlld0hvcml6b250YWwoKTtcclxudmlldy5zZXRTdGFydGluZ0NvbmRpdGlvbnMoe1xyXG4gICAgZWxlbWVudElkOiAnI2lzcycsXHJcbiAgICBzaWduOiAnJCcsXHJcbiAgICBsb3dlclNjYWxlQm91bmQ6IDEwMCxcclxuICAgIHVwcGVyU2NhbGVCb3VuZDogMTUwMCxcclxuICAgIGxvd2VyU2xpZGVyVmFsdWU6IDIwMCxcclxuICAgIHVwcGVyU2xpZGVyVmFsdWU6IDgwMCxcclxuICAgIHNsaWRlclR5cGU6ICdkb3VibGUnLFxyXG4gICAgZGlyZWN0aW9uVHlwZTogJ2hvcml6b250YWwnLFxyXG4gICAgc3RlcDogMTAsXHJcbiAgICB0b29sdGlwOiAnb24nLFxyXG4gICAgdmFsdWVTdGF0ZUZpZWxkOiAnb24nLFxyXG59KTtcclxudmlldy5pbml0KCk7XHJcbmNvbnN0IHZpZXdTaW5nbGVIb3Jpem9udGFsID0gbmV3IFZpZXdIb3Jpem9udGFsKCk7XHJcbnZpZXdTaW5nbGVIb3Jpem9udGFsLnNldFN0YXJ0aW5nQ29uZGl0aW9ucyh7XHJcbiAgICBlbGVtZW50SWQ6ICcjaXNzXzInLFxyXG4gICAgc2lnbjogJyQnLFxyXG4gICAgbG93ZXJTY2FsZUJvdW5kOiAxMDAsXHJcbiAgICB1cHBlclNjYWxlQm91bmQ6IDE1MDAsXHJcbiAgICBsb3dlclNsaWRlclZhbHVlOiAyMDAsXHJcbiAgICB1cHBlclNsaWRlclZhbHVlOiA4MDAsXHJcbiAgICBzbGlkZXJUeXBlOiAnc2luZ2xlJyxcclxuICAgIGRpcmVjdGlvblR5cGU6ICdob3Jpem9udGFsJyxcclxuICAgIHN0ZXA6IDEwLFxyXG4gICAgdG9vbHRpcDogJ29uJyxcclxuICAgIHZhbHVlU3RhdGVGaWVsZDogJ29uJyxcclxufSk7XHJcbnZpZXdTaW5nbGVIb3Jpem9udGFsLmluaXQoKTtcclxuY29uc3Qgdmlld1NpbmdsZVZlcnRpY2FsID0gbmV3IFZpZXdIb3Jpem9udGFsKCk7XHJcbnZpZXdTaW5nbGVWZXJ0aWNhbC5zZXRTdGFydGluZ0NvbmRpdGlvbnMoe1xyXG4gICAgZWxlbWVudElkOiAnI2lzc18zJyxcclxuICAgIHNpZ246ICckJyxcclxuICAgIGxvd2VyU2NhbGVCb3VuZDogMTAwLFxyXG4gICAgdXBwZXJTY2FsZUJvdW5kOiAxNTAwLFxyXG4gICAgbG93ZXJTbGlkZXJWYWx1ZTogMjAwLFxyXG4gICAgdXBwZXJTbGlkZXJWYWx1ZTogODAwLFxyXG4gICAgc2xpZGVyVHlwZTogJ3NpbmdsZScsXHJcbiAgICBkaXJlY3Rpb25UeXBlOiAndmVydGljYWwnLFxyXG4gICAgc3RlcDogMTAsXHJcbiAgICB0b29sdGlwOiAnb24nLFxyXG4gICAgdmFsdWVTdGF0ZUZpZWxkOiAnb24nLFxyXG59KTtcclxudmlld1NpbmdsZVZlcnRpY2FsLmluaXQoKTtcclxuY29uc3Qgdmlld0RvdWJsZVZlcnRpY2FsID0gbmV3IFZpZXdIb3Jpem9udGFsKCk7XHJcbnZpZXdEb3VibGVWZXJ0aWNhbC5zZXRTdGFydGluZ0NvbmRpdGlvbnMoe1xyXG4gICAgZWxlbWVudElkOiAnI2lzc180JyxcclxuICAgIHNpZ246ICckJyxcclxuICAgIGxvd2VyU2NhbGVCb3VuZDogMTAwLFxyXG4gICAgdXBwZXJTY2FsZUJvdW5kOiAxNTAwLFxyXG4gICAgbG93ZXJTbGlkZXJWYWx1ZTogMjAwLFxyXG4gICAgdXBwZXJTbGlkZXJWYWx1ZTogODAwLFxyXG4gICAgc2xpZGVyVHlwZTogJ2RvdWJsZScsXHJcbiAgICBkaXJlY3Rpb25UeXBlOiAndmVydGljYWwnLFxyXG4gICAgc3RlcDogMTAsXHJcbiAgICB0b29sdGlwOiAnb24nLFxyXG4gICAgdmFsdWVTdGF0ZUZpZWxkOiAnb24nLFxyXG59KTtcclxudmlld0RvdWJsZVZlcnRpY2FsLmluaXQoKTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVmYWN0b3JpbmdJbmRleC5qcy5tYXAiLCJjbGFzcyBWaWV3SG9yaXpvbnRhbCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmJpbmRDb250cm9sbGVyID0gKGNvbnRyb2xsZXIpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jb250cm9sbGVyID0gY29udHJvbGxlcjtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuc2V0U3RhcnRpbmdDb25kaXRpb25zID0gKG9iaikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRJZCA9IG9iai5lbGVtZW50SWQgfHwgJyNpc3MnO1xyXG4gICAgICAgICAgICB0aGlzLmVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG9iai5lbGVtZW50SWQpO1xyXG4gICAgICAgICAgICB0aGlzLnNpZ24gPSBvYmouc2lnbiB8fCAnUic7XHJcbiAgICAgICAgICAgIHRoaXMubG93ZXJTY2FsZSA9IE51bWJlcihvYmoubG93ZXJTY2FsZUJvdW5kKSB8fCAwO1xyXG4gICAgICAgICAgICB0aGlzLnVwcGVyU2NhbGUgPSBOdW1iZXIob2JqLnVwcGVyU2NhbGVCb3VuZCkgfHwgMTAwMDtcclxuICAgICAgICAgICAgdGhpcy5sb3dlclNsaWRlclZhbHVlID0gTnVtYmVyKG9iai5sb3dlclNsaWRlclZhbHVlKSB8fCAyMDA7XHJcbiAgICAgICAgICAgIHRoaXMudXBwZXJTbGlkZXJWYWx1ZSA9IE51bWJlcihvYmoudXBwZXJTbGlkZXJWYWx1ZSkgfHwgODAwO1xyXG4gICAgICAgICAgICB0aGlzLnNsaWRlclR5cGUgPSBvYmouc2xpZGVyVHlwZSB8fCAnc2luZ2xlJztcclxuICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb25UeXBlID0gb2JqLmRpcmVjdGlvblR5cGUgfHwgJ2hvcml6b250YWwnO1xyXG4gICAgICAgICAgICB0aGlzLnN0ZXAgPSBvYmouc3RlcCB8fCAyO1xyXG4gICAgICAgICAgICB0aGlzLnRvb2x0aXAgPSBvYmoudG9vbHRpcCB8fCAnb24nO1xyXG4gICAgICAgICAgICB0aGlzLnZhbHVlU3RhdGVGaWVsZCA9IG9iai52YWx1ZVN0YXRlRmllbGQgfHwgJ29uJztcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuZ2V0U3RhcnRpbmdDb25kaXRpb25zID0gKCkgPT4gKHtcclxuICAgICAgICAgICAgZWxlbWVudElkOiB0aGlzLmVsZW1lbnRJZCxcclxuICAgICAgICAgICAgc2lnbjogdGhpcy5zaWduLFxyXG4gICAgICAgICAgICBsb3dlclNjYWxlQm91bmQ6IHRoaXMubG93ZXJTY2FsZSxcclxuICAgICAgICAgICAgdXBwZXJTY2FsZUJvdW5kOiB0aGlzLnVwcGVyU2NhbGUsXHJcbiAgICAgICAgICAgIGxvd2VyU2xpZGVyVmFsdWU6IHRoaXMubG93ZXJTbGlkZXJWYWx1ZSxcclxuICAgICAgICAgICAgdXBwZXJTbGlkZXJWYWx1ZTogdGhpcy51cHBlclNsaWRlclZhbHVlLFxyXG4gICAgICAgICAgICBzbGlkZXJUeXBlOiB0aGlzLnNsaWRlclR5cGUsXHJcbiAgICAgICAgICAgIHN0ZXA6IHRoaXMuc3RlcCxcclxuICAgICAgICAgICAgdG9vbHRpcDogdGhpcy50b29sdGlwLFxyXG4gICAgICAgICAgICB2YWx1ZVN0YXRlRmllbGQ6IHRoaXMudmFsdWVTdGF0ZUZpZWxkLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuaW5pdCA9ICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVET00oKTtcclxuICAgICAgICAgICAgdGhpcy53cml0ZURPTSgpO1xyXG4gICAgICAgICAgICB0aGlzLndyaXRlR2VvbWV0cnlET010b1ZhcmlhYmxlcygpO1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUxpc3RlbmVyT25TbGlkZXIoKTtcclxuICAgICAgICAgICAgdGhpcy5tb3Zlc1NsaWRlcnNUb1N0YXJ0UG9zaXRpb25zKCk7XHJcbiAgICAgICAgICAgIHRoaXMud3JpdGVNb25leVRvRmllbGRzKCk7XHJcbiAgICAgICAgICAgIHRoaXMubW92ZVRvb2x0aXAoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuY3JlYXRlRE9NID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zbGlkZXJUeXBlID09PSAnZG91YmxlJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVEb3VibGVET00oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5zbGlkZXJUeXBlID09PSAnc2luZ2xlJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVTaW5nbGVET00oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5jcmVhdGVTaW5nbGVET00gPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbS5pbm5lckhUTUwgPSAnPGRpdiBjbGFzcz1cImlzc19fdmFsdWUtZmllbGRcIj4nXHJcbiAgICAgICAgICAgICAgICArICc8c3BhbiBjbGFzcz1cImlzc19zdGF0aWNGaWVsZFwiPjwvc3Bhbj4nXHJcbiAgICAgICAgICAgICAgICArICc8L2Rpdj4nXHJcbiAgICAgICAgICAgICAgICArICc8ZGl2IGNsYXNzPSBcImlzcy1jb250YWluZXJcIj4nXHJcbiAgICAgICAgICAgICAgICArICc8ZGl2IGNsYXNzPSBcImlzc19fc2NhbGVcIj48L2Rpdj4nXHJcbiAgICAgICAgICAgICAgICArICc8ZGl2IGNsYXNzPVwiaXNzX19jb2xvci1iYXJcIj48L2Rpdj4nXHJcbiAgICAgICAgICAgICAgICArICc8ZGl2IGNsYXNzPVwiaXNzX19zaW5nbGVfZmx5LXZhbHVlIGlzc19fdG9vbHRpcFwiPjwvZGl2PidcclxuICAgICAgICAgICAgICAgICsgJzxkaXYgY2xhc3M9XCJpc3NfX3NpbmdsZSBpc3NfX2RyYWdcIj48L2Rpdj4nXHJcbiAgICAgICAgICAgICAgICArICc8L2Rpdj4nO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5jcmVhdGVEb3VibGVET00gPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbS5pbm5lckhUTUwgPSAnPGRpdiBjbGFzcz1cImlzc19fdmFsdWUtZmllbGRcIj4nXHJcbiAgICAgICAgICAgICAgICArICc8c3BhbiBjbGFzcz1cImlzc19zdGF0aWNGaWVsZFwiPjwvc3Bhbj4nXHJcbiAgICAgICAgICAgICAgICArICctJ1xyXG4gICAgICAgICAgICAgICAgKyAnPHNwYW4gY2xhc3M9XCJpc3Nfc3RhdGljRmllbGRcIj48L3NwYW4+J1xyXG4gICAgICAgICAgICAgICAgKyAnPC9kaXY+J1xyXG4gICAgICAgICAgICAgICAgKyAnPGRpdiBjbGFzcz0gXCJpc3MtY29udGFpbmVyXCI+J1xyXG4gICAgICAgICAgICAgICAgKyAnPGRpdiBjbGFzcz0gXCJpc3NfX3NjYWxlXCI+PC9kaXY+J1xyXG4gICAgICAgICAgICAgICAgKyAnPGRpdiBjbGFzcz1cImlzc19fZG91YmxlX2ZseS12YWx1ZS0xIGlzc19fdG9vbHRpcFwiPjwvZGl2PidcclxuICAgICAgICAgICAgICAgICsgJzxkaXYgY2xhc3M9XCJpc3NfX2RvdWJsZV8xX2hvcml6b250YWwgaXNzX19kcmFnXCI+PC9kaXY+J1xyXG4gICAgICAgICAgICAgICAgKyAnPGRpdiBjbGFzcz1cImlzc19fZG91YmxlX2ZseS12YWx1ZS0yIGlzc19fdG9vbHRpcFwiPjwvZGl2PidcclxuICAgICAgICAgICAgICAgICsgJzxkaXYgY2xhc3M9XCJpc3NfX2RvdWJsZV8yX2hvcml6b250YWwgaXNzX19kcmFnXCI+PC9kaXY+J1xyXG4gICAgICAgICAgICAgICAgKyAnPGRpdiBjbGFzcz1cImlzc19fY29sb3ItYmFyXCI+PC9kaXY+J1xyXG4gICAgICAgICAgICAgICAgKyAnPC9kaXY+JztcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMud3JpdGVET00gPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tFbGVtZW50c0luRE9NKCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNsaWRlckluRE9NLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy53cml0ZVNpbmdsZURPTXRvVmFyaWFibGVzKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLndyaXRlU2luZ2xlU2xpZGVySW5kZW50KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5zbGlkZXJJbkRPTS5sZW5ndGggPT09IDIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMud3JpdGVEb3VibGVET010b1ZhcmlhYmxlcygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy53cml0ZURvdWJsZVNsaWRlckluZGVudCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmNoZWNrRWxlbWVudHNJbkRPTSA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgRE9NRWxlbWVudHMgPSB0aGlzLmVsZW0ucXVlcnlTZWxlY3RvckFsbCgnLmlzc19fZHJhZycpO1xyXG4gICAgICAgICAgICBpZiAoKERPTUVsZW1lbnRzLmxlbmd0aCA+IDApKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNsaWRlckluRE9NID0gRE9NRWxlbWVudHM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMud3JpdGVTaW5nbGVET010b1ZhcmlhYmxlcyA9ICgpID0+IHtcclxuICAgICAgICAgICAgW3RoaXMuc2NhbGVdID0gdGhpcy5yZXR1cm5FbGVtZW50c0Zyb21ET00oJy5pc3NfX3NjYWxlJywgMSk7XHJcbiAgICAgICAgICAgIFt0aGlzLnNpbmdsZVNsaWRlcl0gPSB0aGlzLnJldHVybkVsZW1lbnRzRnJvbURPTSgnLmlzc19fZHJhZycsIDEpO1xyXG4gICAgICAgICAgICBbdGhpcy5zdGF0aWNGaWVsZFNpbmdsZV0gPSB0aGlzLnJldHVybkVsZW1lbnRzRnJvbURPTSgnLmlzc19zdGF0aWNGaWVsZCcsIDEpO1xyXG4gICAgICAgICAgICBbdGhpcy5mbHlGaWVsZFNpbmdsZV0gPSB0aGlzLnJldHVybkVsZW1lbnRzRnJvbURPTSgnLmlzc19fdG9vbHRpcCcsIDEpO1xyXG4gICAgICAgICAgICBbdGhpcy5yaWJib25dID0gdGhpcy5yZXR1cm5FbGVtZW50c0Zyb21ET00oJy5pc3NfX2NvbG9yLWJhcicsIDEpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy53cml0ZURvdWJsZURPTXRvVmFyaWFibGVzID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBbdGhpcy5zY2FsZV0gPSB0aGlzLnJldHVybkVsZW1lbnRzRnJvbURPTSgnLmlzc19fc2NhbGUnLCAxKTtcclxuICAgICAgICAgICAgW3RoaXMubG93ZXJTbGlkZXIsIHRoaXMudXBwZXJTbGlkZXJdID0gdGhpcy5yZXR1cm5FbGVtZW50c0Zyb21ET00oJy5pc3NfX2RyYWcnLCAyKTtcclxuICAgICAgICAgICAgW3RoaXMuc3RhdGljRmllbGRMb3dlciwgdGhpcy5zdGF0aWNGaWVsZFVwcGVyXSA9IHRoaXMucmV0dXJuRWxlbWVudHNGcm9tRE9NKCcuaXNzX3N0YXRpY0ZpZWxkJywgMik7XHJcbiAgICAgICAgICAgIFt0aGlzLmZseUZpZWxkTG93ZXIsIHRoaXMuZmx5RmllbGRVcHBlcl0gPSB0aGlzLnJldHVybkVsZW1lbnRzRnJvbURPTSgnLmlzc19fdG9vbHRpcCcsIDIpO1xyXG4gICAgICAgICAgICBbdGhpcy5yaWJib25dID0gdGhpcy5yZXR1cm5FbGVtZW50c0Zyb21ET00oJy5pc3NfX2NvbG9yLWJhcicsIDEpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy53cml0ZVNpbmdsZVNsaWRlckluZGVudCA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZWxlbSA9IHRoaXMucmV0dXJuRWxlbWVudHNGcm9tRE9NKCcuaXNzX19kcmFnJywgMSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2luZ2xlU2xpZGVyUG9zaXRpb24gPSB0aGlzLnJldHVybkluZGVudChlbGVtWzBdKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMud3JpdGVEb3VibGVTbGlkZXJJbmRlbnQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW1zID0gdGhpcy5yZXR1cm5FbGVtZW50c0Zyb21ET00oJy5pc3NfX2RyYWcnLCAyKTtcclxuICAgICAgICAgICAgdGhpcy5sb3dlclNsaWRlclBvc2l0aW9uID0gdGhpcy5yZXR1cm5JbmRlbnQoZWxlbXNbMF0pO1xyXG4gICAgICAgICAgICB0aGlzLnVwcGVyU2xpZGVyUG9zaXRpb24gPSB0aGlzLnJldHVybkluZGVudChlbGVtc1sxXSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnJldHVybkluZGVudCA9IChlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRpcmVjdGlvblR5cGUgPT09ICdob3Jpem9udGFsJykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQub2Zmc2V0TGVmdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb25UeXBlID09PSAndmVydGljYWwnKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudC5vZmZzZXRUb3A7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMucmV0dXJuRWxlbWVudHNGcm9tRE9NID0gKGNsYXNzTmFtZSwgbGVuZ3RoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IERPTUVsZW1lbnRzID0gdGhpcy5lbGVtLnF1ZXJ5U2VsZWN0b3JBbGwoY2xhc3NOYW1lKTtcclxuICAgICAgICAgICAgaWYgKChET01FbGVtZW50cy5sZW5ndGggPT09IGxlbmd0aCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBET01FbGVtZW50cztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLndyaXRlR2VvbWV0cnlET010b1ZhcmlhYmxlcyA9ICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXREaXJlY3Rpb24oKTtcclxuICAgICAgICAgICAgdGhpcy53cml0ZUdlb21ldHJ5T2ZTbGlkZXIoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuc2V0RGlyZWN0aW9uID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb25UeXBlID09PSAnaG9yaXpvbnRhbCcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubWFpbkF4aXNTaXplID0gdGhpcy5zY2FsZS5vZmZzZXRXaWR0aDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb25UeXBlID09PSAndmVydGljYWwnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1haW5BeGlzU2l6ZSA9IHRoaXMuc2NhbGUub2Zmc2V0SGVpZ2h0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLndyaXRlR2VvbWV0cnlPZlNsaWRlciA9ICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc2xpZGVySW5ET00ubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNsaWRlcldpZHRoID0gdGhpcy5zaW5nbGVTbGlkZXIub2Zmc2V0V2lkdGg7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNsaWRlckhlaWdodCA9IHRoaXMuc2luZ2xlU2xpZGVyLm9mZnNldEhlaWdodDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLnNsaWRlckluRE9NLmxlbmd0aCA9PT0gMikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zbGlkZXJXaWR0aCA9IHRoaXMubG93ZXJTbGlkZXIub2Zmc2V0V2lkdGg7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNsaWRlckhlaWdodCA9IHRoaXMubG93ZXJTbGlkZXIub2Zmc2V0SGVpZ2h0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuY2FsY1BpeGVsU3RlcCgpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5jYWxjUGl4ZWxTdGVwID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB3aWR0aFZzTW9uZXkgPSB0aGlzLm1haW5BeGlzU2l6ZSAvIHRoaXMudXBwZXJTY2FsZTtcclxuICAgICAgICAgICAgY29uc3Qgc3RlcEluUGl4ZWwgPSB3aWR0aFZzTW9uZXkgKiB0aGlzLnN0ZXA7XHJcbiAgICAgICAgICAgIGlmIChzdGVwSW5QaXhlbCA8IDEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGl4ZWxTdGVwID0gMTtcclxuICAgICAgICAgICAgICAgIHRoaXMucm91bmRlZFBpeGVsU3RlcCA9IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBpeGVsU3RlcCA9IHN0ZXBJblBpeGVsO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3VuZGVkUGl4ZWxTdGVwID0gTWF0aC5yb3VuZChzdGVwSW5QaXhlbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuY3JlYXRlTGlzdGVuZXJPblNsaWRlciA9ICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc2xpZGVySW5ET00ubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNpbmdsZVNsaWRlci5vbm1vdXNlZG93biA9IHRoaXMuZXZlbnRPblNsaWRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLnNsaWRlckluRE9NLmxlbmd0aCA9PT0gMikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb3dlclNsaWRlci5vbm1vdXNlZG93biA9IHRoaXMuZXZlbnRPblNsaWRlcjtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBwZXJTbGlkZXIub25tb3VzZWRvd24gPSB0aGlzLmV2ZW50T25TbGlkZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMubW92ZXNTbGlkZXJzVG9TdGFydFBvc2l0aW9ucyA9ICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc2xpZGVyVHlwZSA9PT0gJ3NpbmdsZScpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U2luZ2xlVG9TdGFydFBvc2l0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVSaWJib24oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5zbGlkZXJUeXBlID09PSAnZG91YmxlJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRzRG91YmxlVG9TdGFydFBvc3Rpb25zKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVSaWJib24oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5zZXRTaW5nbGVUb1N0YXJ0UG9zaXRpb24gPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRpcmVjdGlvblR5cGUgPT09ICdob3Jpem9udGFsJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaW5nbGVTbGlkZXIuc3R5bGUubGVmdCA9IGAke3RoaXMuY2FsY01vbmV5VG9Qb3NpdGlvbih0aGlzLmxvd2VyU2xpZGVyVmFsdWUpfXB4YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb25UeXBlID09PSAndmVydGljYWwnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNpbmdsZVNsaWRlci5zdHlsZS50b3AgPSBgJHt0aGlzLmNhbGNNb25leVRvUG9zaXRpb24odGhpcy5sb3dlclNsaWRlclZhbHVlKX1weGA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuc2V0c0RvdWJsZVRvU3RhcnRQb3N0aW9ucyA9ICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uVHlwZSA9PT0gJ2hvcml6b250YWwnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvd2VyU2xpZGVyLnN0eWxlLmxlZnQgPSBgJHt0aGlzLmNhbGNNb25leVRvUG9zaXRpb24odGhpcy5sb3dlclNsaWRlclZhbHVlKX1weGA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwcGVyU2xpZGVyLnN0eWxlLmxlZnQgPSBgJHt0aGlzLmNhbGNNb25leVRvUG9zaXRpb24odGhpcy51cHBlclNsaWRlclZhbHVlKX1weGA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uVHlwZSA9PT0gJ3ZlcnRpY2FsJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb3dlclNsaWRlci5zdHlsZS50b3AgPSBgJHt0aGlzLmNhbGNNb25leVRvUG9zaXRpb24odGhpcy5sb3dlclNsaWRlclZhbHVlKX1weGA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwcGVyU2xpZGVyLnN0eWxlLnRvcCA9IGAke3RoaXMuY2FsY01vbmV5VG9Qb3NpdGlvbih0aGlzLnVwcGVyU2xpZGVyVmFsdWUpfXB4YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy53cml0ZU1vbmV5VG9GaWVsZHMgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNsaWRlclR5cGUgPT09ICdzaW5nbGUnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRpY0ZpZWxkU2luZ2xlLmlubmVyVGV4dCA9IGAke3RoaXMubG93ZXJTbGlkZXJWYWx1ZX0ke3RoaXMuc2lnbn1gO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mbHlGaWVsZFNpbmdsZS5pbm5lclRleHQgPSBgJHt0aGlzLmxvd2VyU2xpZGVyVmFsdWV9JHt0aGlzLnNpZ259YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5zbGlkZXJUeXBlID09PSAnZG91YmxlJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0aWNGaWVsZExvd2VyLmlubmVyVGV4dCA9IGAke3RoaXMubG93ZXJTbGlkZXJWYWx1ZX0ke3RoaXMuc2lnbn1gO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0aWNGaWVsZFVwcGVyLmlubmVyVGV4dCA9IGAke3RoaXMudXBwZXJTbGlkZXJWYWx1ZX0ke3RoaXMuc2lnbn1gO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mbHlGaWVsZExvd2VyLmlubmVyVGV4dCA9IGAke3RoaXMubG93ZXJTbGlkZXJWYWx1ZX0ke3RoaXMuc2lnbn1gO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mbHlGaWVsZFVwcGVyLmlubmVyVGV4dCA9IGAke3RoaXMudXBwZXJTbGlkZXJWYWx1ZX0ke3RoaXMuc2lnbn1gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmV2ZW50T25TbGlkZXIgPSAoX2UpID0+IHtcclxuICAgICAgICAgICAgX2UucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRSZXN0cmljdGlvbk9mU2xpZGVyTW92ZW1lbnQoX2UpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5vbm1vdXNldXAgPSB0aGlzLmNhbmNlbEV2ZW50cztcclxuICAgICAgICAgICAgZG9jdW1lbnQub25tb3VzZW1vdmUgPSB0aGlzLm1vdmVFdmVudFdpdGhIb2xkTW91c2U7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnNldFJlc3RyaWN0aW9uT2ZTbGlkZXJNb3ZlbWVudCA9IChfZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zbGlkZXJUeXBlID09PSAnZG91YmxlJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRSZXN0cmljdGlvbkZvckRvdWJsZVNsaWRlcihfZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuc2xpZGVyVHlwZSA9PT0gJ3NpbmdsZScpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0UmVzdHJpY3Rpb25Gb3JTaW5nbGVTbGlkZXIoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5zZXRSZXN0cmljdGlvbkZvckRvdWJsZVNsaWRlciA9IChfZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb25UeXBlID09PSAnaG9yaXpvbnRhbCcpIHtcclxuICAgICAgICAgICAgICAgIGlmIChfZS50YXJnZXQgPT09IHRoaXMubG93ZXJTbGlkZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRhcmdldFNsaWRlciA9IHRoaXMubG93ZXJTbGlkZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb3dlclJlc3RyaWN0aW9uID0gMDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwcGVyUmVzdHJpY3Rpb24gPSB0aGlzLnVwcGVyU2xpZGVyUG9zaXRpb247XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb3dlckNvc3RSZXN0cmljdGlvbiA9IHRoaXMubG93ZXJTY2FsZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwcGVyQ29zdFJlc3RyaWN0aW9uID0gdGhpcy5nZXRDb3N0Rm9yU2xpZGVyKHRoaXMudXBwZXJSZXN0cmljdGlvbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoX2UudGFyZ2V0ID09PSB0aGlzLnVwcGVyU2xpZGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50YXJnZXRTbGlkZXIgPSB0aGlzLnVwcGVyU2xpZGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG93ZXJSZXN0cmljdGlvbiA9IHRoaXMubG93ZXJTbGlkZXJQb3NpdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwcGVyUmVzdHJpY3Rpb24gPSB0aGlzLm1haW5BeGlzU2l6ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvd2VyQ29zdFJlc3RyaWN0aW9uID0gdGhpcy5nZXRDb3N0Rm9yU2xpZGVyKHRoaXMubG93ZXJSZXN0cmljdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cHBlckNvc3RSZXN0cmljdGlvbiA9IHRoaXMudXBwZXJTY2FsZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb25UeXBlID09PSAndmVydGljYWwnKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoX2UudGFyZ2V0ID09PSB0aGlzLmxvd2VyU2xpZGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50YXJnZXRTbGlkZXIgPSB0aGlzLmxvd2VyU2xpZGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG93ZXJSZXN0cmljdGlvbiA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cHBlclJlc3RyaWN0aW9uID0gdGhpcy51cHBlclNsaWRlclBvc2l0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG93ZXJDb3N0UmVzdHJpY3Rpb24gPSB0aGlzLmdldENvc3RGb3JTbGlkZXIodGhpcy5sb3dlclJlc3RyaWN0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwcGVyQ29zdFJlc3RyaWN0aW9uID0gdGhpcy5nZXRDb3N0Rm9yU2xpZGVyKHRoaXMudXBwZXJSZXN0cmljdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYGxvd2VyQ29zdFJlc3RyaWN0aW9uID09PSAke3RoaXMubG93ZXJDb3N0UmVzdHJpY3Rpb259YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYHVwcGVyQ29zdFJlc3RyaWN0aW9uID09PSAke3RoaXMudXBwZXJDb3N0UmVzdHJpY3Rpb259YCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoX2UudGFyZ2V0ID09PSB0aGlzLnVwcGVyU2xpZGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50YXJnZXRTbGlkZXIgPSB0aGlzLnVwcGVyU2xpZGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG93ZXJSZXN0cmljdGlvbiA9IHRoaXMubG93ZXJTbGlkZXJQb3NpdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwcGVyUmVzdHJpY3Rpb24gPSB0aGlzLm1haW5BeGlzU2l6ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvd2VyQ29zdFJlc3RyaWN0aW9uID0gdGhpcy5nZXRDb3N0Rm9yU2xpZGVyKHRoaXMubG93ZXJSZXN0cmljdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cHBlckNvc3RSZXN0cmljdGlvbiA9IHRoaXMuZ2V0Q29zdEZvclNsaWRlcih0aGlzLnVwcGVyUmVzdHJpY3Rpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBsb3dlckNvc3RSZXN0cmljdGlvbiA9PT0gJHt0aGlzLmxvd2VyQ29zdFJlc3RyaWN0aW9ufWApO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGB1cHBlckNvc3RSZXN0cmljdGlvbiA9PT0gJHt0aGlzLnVwcGVyQ29zdFJlc3RyaWN0aW9ufWApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnNldFJlc3RyaWN0aW9uRm9yU2luZ2xlU2xpZGVyID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb25UeXBlID09PSAnaG9yaXpvbnRhbCcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0U2xpZGVyID0gdGhpcy5zaW5nbGVTbGlkZXI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvd2VyUmVzdHJpY3Rpb24gPSAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cHBlclJlc3RyaWN0aW9uID0gdGhpcy5tYWluQXhpc1NpemU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvd2VyQ29zdFJlc3RyaWN0aW9uID0gdGhpcy5sb3dlclNjYWxlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cHBlckNvc3RSZXN0cmljdGlvbiA9IHRoaXMudXBwZXJTY2FsZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb25UeXBlID09PSAndmVydGljYWwnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRhcmdldFNsaWRlciA9IHRoaXMuc2luZ2xlU2xpZGVyO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb3dlclJlc3RyaWN0aW9uID0gMDtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBwZXJSZXN0cmljdGlvbiA9IHRoaXMubWFpbkF4aXNTaXplO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb3dlckNvc3RSZXN0cmljdGlvbiA9IHRoaXMudXBwZXJTY2FsZTtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBwZXJDb3N0UmVzdHJpY3Rpb24gPSB0aGlzLmxvd2VyU2NhbGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuZ2V0Q29zdEZvclNsaWRlciA9IChzbGlkZXJQb3N0aW9uSW5QaXhlbCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb25UeXBlID09PSAnaG9yaXpvbnRhbCcpIHtcclxuICAgICAgICAgICAgICAgIGlmIChzbGlkZXJQb3N0aW9uSW5QaXhlbCA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCR7dGhpcy5sb3dlclNjYWxlfSB0aGlzLmxvd2VyU2NhbGVgKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5sb3dlclNjYWxlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChNYXRoLnJvdW5kKHNsaWRlclBvc3Rpb25JblBpeGVsIC8gdGhpcy5waXhlbFN0ZXApICogdGhpcy5zdGVwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb25UeXBlID09PSAndmVydGljYWwnKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2xpZGVyUG9zdGlvbkluUGl4ZWwgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnVwcGVyU2NhbGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKChNYXRoLnJvdW5kKCh0aGlzLm1haW5BeGlzU2l6ZSAtIHNsaWRlclBvc3Rpb25JblBpeGVsKSAvIHRoaXMucGl4ZWxTdGVwKSAqIHRoaXMuc3RlcCkgKyB0aGlzLmxvd2VyU2NhbGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLm1vdmVFdmVudFdpdGhIb2xkTW91c2UgPSAoX2UpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaW5uZXJNb3VzZVBvc2l0aW9uID0gdGhpcy5nZXRNb3VzZVBvc2l0aW9uKF9lKTtcclxuICAgICAgICAgICAgY29uc3QgbmVhcmVzdFJvdW5kZWRTdGVwID0gdGhpcy5jYWxjTmVhcmVzdFN0ZXAoaW5uZXJNb3VzZVBvc2l0aW9uKTtcclxuICAgICAgICAgICAgY29uc3QgZmluYWxQb3NpdGlvbkluUGl4ZWwgPSB0aGlzLmNhbGNGaW5hbFBvc2l0aW9uKG5lYXJlc3RSb3VuZGVkU3RlcCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGZpbmFsQ29zdCA9IHRoaXMuY2FsY0ZpbmFsQ29zdChuZWFyZXN0Um91bmRlZFN0ZXApO1xyXG4gICAgICAgICAgICB0aGlzLnNob3dNb25leU9uU2NyZWVuKGZpbmFsQ29zdCk7XHJcbiAgICAgICAgICAgIHRoaXMubW92ZVNsaWRlcihmaW5hbFBvc2l0aW9uSW5QaXhlbCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0T3ZlcmxheSgpO1xyXG4gICAgICAgICAgICB0aGlzLm1vdmVSaWJib24oKTtcclxuICAgICAgICAgICAgdGhpcy5tb3ZlVG9vbHRpcCgpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5nZXRNb3VzZVBvc2l0aW9uID0gKF9lKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xpZW50UmVjdCA9IHRoaXMuc2NhbGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRpcmVjdGlvblR5cGUgPT09ICdob3Jpem9udGFsJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbmRlbnQgPSB0aGlzLmNsaWVudFJlY3QubGVmdDtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoX2UuY2xpZW50WCAtIHRoaXMuaW5kZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb25UeXBlID09PSAndmVydGljYWwnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluZGVudCA9IHRoaXMuY2xpZW50UmVjdC50b3A7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKF9lLmNsaWVudFkgLSB0aGlzLmluZGVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuY2FsY05lYXJlc3RTdGVwID0gKF9wb3NpdGlvbkluUGl4ZWwpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uVHlwZSA9PT0gJ2hvcml6b250YWwnKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChfcG9zaXRpb25JblBpeGVsIC8gdGhpcy5waXhlbFN0ZXApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRpcmVjdGlvblR5cGUgPT09ICd2ZXJ0aWNhbCcpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBNYXRoLnJvdW5kKCh0aGlzLm1haW5BeGlzU2l6ZSAtIF9wb3NpdGlvbkluUGl4ZWwpIC8gdGhpcy5waXhlbFN0ZXApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmNhbGNGaW5hbFBvc2l0aW9uID0gKF9uZWFyZXN0Um91bmRlZFN0ZXApID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcG9zaXRpb25JblBpeGVsID0gX25lYXJlc3RSb3VuZGVkU3RlcCAqIHRoaXMucGl4ZWxTdGVwO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb25UeXBlID09PSAnaG9yaXpvbnRhbCcpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzUGl4ZWxzSW5Cb3JkZXIocG9zaXRpb25JblBpeGVsKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwb3NpdGlvbkluUGl4ZWw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAocG9zaXRpb25JblBpeGVsIDw9IHRoaXMubG93ZXJSZXN0cmljdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmxvd2VyUmVzdHJpY3Rpb247XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAocG9zaXRpb25JblBpeGVsID49IHRoaXMudXBwZXJSZXN0cmljdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnVwcGVyUmVzdHJpY3Rpb247XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uVHlwZSA9PT0gJ3ZlcnRpY2FsJykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNQaXhlbHNJbkJvcmRlcigodGhpcy5tYWluQXhpc1NpemUgLSBwb3NpdGlvbkluUGl4ZWwpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMubWFpbkF4aXNTaXplIC0gcG9zaXRpb25JblBpeGVsfSA9PT0gdGhpcy5tYWluQXhpc1NpemUgLSBwb3NpdGlvbkluUGl4ZWxgKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKHRoaXMubWFpbkF4aXNTaXplIC0gcG9zaXRpb25JblBpeGVsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICgodGhpcy5tYWluQXhpc1NpemUgLSBwb3NpdGlvbkluUGl4ZWwpIDw9IHRoaXMubG93ZXJSZXN0cmljdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGAke31gKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJHt0aGlzLmxvd2VyUmVzdHJpY3Rpb259ID09PSBsb3dlcmApO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmxvd2VyUmVzdHJpY3Rpb247XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoKHRoaXMubWFpbkF4aXNTaXplIC0gcG9zaXRpb25JblBpeGVsKSA+PSB0aGlzLnVwcGVyUmVzdHJpY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy51cHBlclJlc3RyaWN0aW9uO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmNhbGNGaW5hbENvc3QgPSAoX25lYXJlc3RSb3VuZGVkU3RlcCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb25UeXBlID09PSAnaG9yaXpvbnRhbCcpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBvc2l0aW9uSW5Nb25leSA9IF9uZWFyZXN0Um91bmRlZFN0ZXAgKiB0aGlzLnN0ZXA7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc01vbmV5SW5Cb3JkZXIocG9zaXRpb25Jbk1vbmV5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwb3NpdGlvbkluTW9uZXk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAocG9zaXRpb25Jbk1vbmV5IDwgdGhpcy5sb3dlckNvc3RSZXN0cmljdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmxvd2VyQ29zdFJlc3RyaWN0aW9uO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHBvc2l0aW9uSW5Nb25leSA+IHRoaXMudXBwZXJDb3N0UmVzdHJpY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy51cHBlckNvc3RSZXN0cmljdGlvbjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb25UeXBlID09PSAndmVydGljYWwnKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwb3NpdGlvbkluTW9uZXkgPSAoX25lYXJlc3RSb3VuZGVkU3RlcCAqIHRoaXMuc3RlcCkgKyB0aGlzLmxvd2VyU2NhbGU7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgcG9zaXRpb25Jbk1vbmV5ID09PSAke3Bvc2l0aW9uSW5Nb25leX1gKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzTW9uZXlJbkJvcmRlcihwb3NpdGlvbkluTW9uZXkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBvc2l0aW9uSW5Nb25leTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChwb3NpdGlvbkluTW9uZXkgPiB0aGlzLmxvd2VyQ29zdFJlc3RyaWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubG93ZXJDb3N0UmVzdHJpY3Rpb247XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAocG9zaXRpb25Jbk1vbmV5IDwgdGhpcy51cHBlckNvc3RSZXN0cmljdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnVwcGVyQ29zdFJlc3RyaWN0aW9uO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmlzUGl4ZWxzSW5Cb3JkZXIgPSAoX3Bvc2l0aW9uKSA9PiAoKF9wb3NpdGlvbiA+PSB0aGlzLmxvd2VyUmVzdHJpY3Rpb24pICYmIChfcG9zaXRpb24gPD0gdGhpcy51cHBlclJlc3RyaWN0aW9uKSk7XHJcbiAgICAgICAgdGhpcy5pc01vbmV5SW5Cb3JkZXIgPSAoX3Bvc2l0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRpcmVjdGlvblR5cGUgPT09ICdob3Jpem9udGFsJykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICgoX3Bvc2l0aW9uID49IHRoaXMubG93ZXJDb3N0UmVzdHJpY3Rpb24pICYmIChfcG9zaXRpb24gPD0gdGhpcy51cHBlckNvc3RSZXN0cmljdGlvbikpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRpcmVjdGlvblR5cGUgPT09ICd2ZXJ0aWNhbCcpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoKF9wb3NpdGlvbiA8PSB0aGlzLmxvd2VyQ29zdFJlc3RyaWN0aW9uKSAmJiAoX3Bvc2l0aW9uID49IHRoaXMudXBwZXJDb3N0UmVzdHJpY3Rpb24pKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5zaG93TW9uZXlPblNjcmVlbiA9IChmaW5hbENvc3QpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY29zdCA9IGAke2ZpbmFsQ29zdH0ke3RoaXMuc2lnbn1gO1xyXG4gICAgICAgICAgICBpZiAodGhpcy50YXJnZXRTbGlkZXIgPT09IHRoaXMubG93ZXJTbGlkZXIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGljRmllbGRMb3dlci50ZXh0Q29udGVudCA9IGAke2Nvc3R9YDtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmx5RmllbGRMb3dlci50ZXh0Q29udGVudCA9IGAke2Nvc3R9YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy50YXJnZXRTbGlkZXIgPT09IHRoaXMudXBwZXJTbGlkZXIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGljRmllbGRVcHBlci50ZXh0Q29udGVudCA9IGAke2Nvc3R9YDtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmx5RmllbGRVcHBlci50ZXh0Q29udGVudCA9IGAke2Nvc3R9YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy50YXJnZXRTbGlkZXIgPT09IHRoaXMuc2luZ2xlU2xpZGVyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRpY0ZpZWxkU2luZ2xlLnRleHRDb250ZW50ID0gYCR7Y29zdH1gO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mbHlGaWVsZFNpbmdsZS50ZXh0Q29udGVudCA9IGAke2Nvc3R9YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5tb3ZlUmliYm9uID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBzZXRIb3Jpem9udGFsUmliYm9uVmFyaWFibGVzID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2xpZGVySW5ET00ubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yaWJib24uc3R5bGUubGVmdCA9ICcwcHgnO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmliYm9uLnN0eWxlLndpZHRoID0gYCR7dGhpcy5zaW5nbGVTbGlkZXIub2Zmc2V0TGVmdH1weGA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLnNsaWRlckluRE9NLmxlbmd0aCA9PT0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmliYm9uLnN0eWxlLmxlZnQgPSB0aGlzLmxvd2VyU2xpZGVyLnN0eWxlLmxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yaWJib24uc3R5bGUud2lkdGggPSBgJHt0aGlzLnVwcGVyU2xpZGVyLm9mZnNldExlZnQgLSB0aGlzLmxvd2VyU2xpZGVyLm9mZnNldExlZnR9cHhgO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjb25zdCBzZXRWZXJ0aWNhbFJpYmJvblZhcmlhYmxlcyA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNsaWRlckluRE9NLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmliYm9uLnN0eWxlLnRvcCA9IGAke3RoaXMuc2luZ2xlU2xpZGVyLm9mZnNldFRvcH1weGA7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yaWJib24uc3R5bGUuaGVpZ2h0ID0gYCR7dGhpcy5tYWluQXhpc1NpemUgLSB0aGlzLnNpbmdsZVNsaWRlci5vZmZzZXRUb3B9cHhgO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5zbGlkZXJJbkRPTS5sZW5ndGggPT09IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJpYmJvbi5zdHlsZS50b3AgPSB0aGlzLmxvd2VyU2xpZGVyLnN0eWxlLnRvcDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJpYmJvbi5zdHlsZS5oZWlnaHQgPSBgJHt0aGlzLnVwcGVyU2xpZGVyLm9mZnNldFRvcCAtIHRoaXMubG93ZXJTbGlkZXIub2Zmc2V0VG9wfXB4YDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uVHlwZSA9PT0gJ2hvcml6b250YWwnKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRIb3Jpem9udGFsUmliYm9uVmFyaWFibGVzKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uVHlwZSA9PT0gJ3ZlcnRpY2FsJykge1xyXG4gICAgICAgICAgICAgICAgc2V0VmVydGljYWxSaWJib25WYXJpYWJsZXMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5tb3ZlU2xpZGVyID0gKG51bSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb25UeXBlID09PSAnaG9yaXpvbnRhbCcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0U2xpZGVyLnN0eWxlLmxlZnQgPSBgJHtudW19cHhgO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuZGlyZWN0aW9uVHlwZSA9PT0gJ3ZlcnRpY2FsJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50YXJnZXRTbGlkZXIuc3R5bGUudG9wID0gYCR7bnVtfXB4YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5tb3ZlVG9vbHRpcCA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbW92ZSA9IChkaXJlY3Rpb24sIG9mZnNldCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2xpZGVyVHlwZSA9PT0gJ3NpbmdsZScpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVsZW0ucXVlcnlTZWxlY3RvckFsbCgnLmlzc19fdG9vbHRpcCcpWzBdLnN0eWxlW2RpcmVjdGlvbl0gPSBgJHt0aGlzLnNpbmdsZVNsaWRlcltvZmZzZXRdfXB4YDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNsaWRlclR5cGUgPT09ICdkb3VibGUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVtLnF1ZXJ5U2VsZWN0b3JBbGwoJy5pc3NfX3Rvb2x0aXAnKVswXS5zdHlsZVtkaXJlY3Rpb25dID0gYCR7dGhpcy5sb3dlclNsaWRlcltvZmZzZXRdfXB4YDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVsZW0ucXVlcnlTZWxlY3RvckFsbCgnLmlzc19fdG9vbHRpcCcpWzFdLnN0eWxlW2RpcmVjdGlvbl0gPSBgJHt0aGlzLnVwcGVyU2xpZGVyW29mZnNldF19cHhgO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb25UeXBlID09PSAnaG9yaXpvbnRhbCcpIHtcclxuICAgICAgICAgICAgICAgIG1vdmUoJ2xlZnQnLCAnb2Zmc2V0TGVmdCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRpcmVjdGlvblR5cGUgPT09ICd2ZXJ0aWNhbCcpIHtcclxuICAgICAgICAgICAgICAgIG1vdmUoJ3RvcCcsICdvZmZzZXRUb3AnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5zZXRPdmVybGF5ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy50YXJnZXRTbGlkZXIgPT09IHRoaXMubG93ZXJTbGlkZXIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0U2xpZGVyLnN0eWxlLnpJbmRleCA9ICcxMDAnO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cHBlclNsaWRlci5zdHlsZS56SW5kZXggPSAnMSc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy50YXJnZXRTbGlkZXIgPT09IHRoaXMudXBwZXJTbGlkZXIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0U2xpZGVyLnN0eWxlLnpJbmRleCA9ICcxMDAnO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb3dlclNsaWRlci5zdHlsZS56SW5kZXggPSAnMSc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuY2FuY2VsRXZlbnRzID0gKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLndyaXRlRE9NKCk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50Lm9ubW91c2V1cCA9IG51bGw7XHJcbiAgICAgICAgICAgIGRvY3VtZW50Lm9ubW91c2Vtb3ZlID0gbnVsbDtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgc2V0Q29udHJvbGxlcigpIHtcclxuICAgICAgICBjb25zdCBvYmogPSB7XHJcbiAgICAgICAgICAgIGxvd2VyU2xpZGVyVmFsdWU6IHRoaXMubG93ZXJTbGlkZXJWYWx1ZSxcclxuICAgICAgICAgICAgdXBwZXJTbGlkZXJWYWx1ZTogdGhpcy51cHBlclNsaWRlclZhbHVlLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5jb250cm9sbGVyLmdldFZpZXcob2JqKTtcclxuICAgIH1cclxuICAgIGNhbGNNb25leVRvUG9zaXRpb24obW9uZXkpIHtcclxuICAgICAgICBjb25zdCBwb3NpdGlvbiA9IChtb25leSAvIHRoaXMuc3RlcCkgKiB0aGlzLnBpeGVsU3RlcDtcclxuICAgICAgICByZXR1cm4gcG9zaXRpb247XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IHsgVmlld0hvcml6b250YWwgfTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVmYWN0b3JpbmdWaWV3LmpzLm1hcCJdLCJzb3VyY2VSb290IjoiIn0=