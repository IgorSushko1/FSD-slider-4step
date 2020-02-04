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
            this.targetSlider = this.singleSlider;
            this.lowerRestriction = 0;
            this.upperRestriction = this.mainAxisSize;
            this.upperCostRestriction = this.upperScale;
            this.lowerCostRestriction = this.lowerScale;
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
                    // console.log(`${this.upperScale} this.upperScale`);
                    return this.upperScale;
                }
                return ((Math.round((this.mainAxisSize - sliderPostionInPixel) / this.pixelStep) * this.step) + this.lowerScale);
            }
        };
        this.moveEventWithHoldMouse = (_e) => {
            const innerMousePosition = this.getMousePosition(_e);
            // console.log(`${innerMousePosition} innerMousePosition`);
            const nearestRoundedStep = this.calcNearestStep(innerMousePosition);
            // console.log(`${_nearestRoundedStep} _nearestRoundedStep`);
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
                // return Math.round(_positionInPixel / this.pixelStep);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vaXNfcmVmYWN0b3JpbmcuY3NzPzcwZTkiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZmFjdG9yaW5nL2pzL3JlZmFjdG9yaW5nSW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZmFjdG9yaW5nL2pzL3JlZmFjdG9yaW5nVmlldy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEsdUM7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQXFDO0FBQ3JDO0FBQ21EO0FBQ25ELGlCQUFpQiwrREFBYztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxpQ0FBaUMsK0RBQWM7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsK0JBQStCLCtEQUFjO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLCtCQUErQiwrREFBYztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSw0Qzs7Ozs7Ozs7Ozs7O0FDL0RBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELFlBQVksd0JBQXdCLGtCQUFrQjtBQUMxRztBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxZQUFZLHdCQUF3QixrQkFBa0I7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNERBQTRELDBCQUEwQjtBQUN0Riw0REFBNEQsMEJBQTBCO0FBQ3RGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNERBQTRELDBCQUEwQjtBQUN0Riw0REFBNEQsMEJBQTBCO0FBQ3RGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLGdCQUFnQjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsZ0JBQWdCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLG1CQUFtQjtBQUNqRDtBQUNBLDhCQUE4QixvQkFBb0I7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsb0NBQW9DO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QyxtQ0FBbUMsc0JBQXNCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELGdCQUFnQjtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsVUFBVSxFQUFFLFVBQVU7QUFDbEQ7QUFDQSx1REFBdUQsS0FBSztBQUM1RCxvREFBb0QsS0FBSztBQUN6RDtBQUNBO0FBQ0EsdURBQXVELEtBQUs7QUFDNUQsb0RBQW9ELEtBQUs7QUFDekQ7QUFDQTtBQUNBLHdEQUF3RCxLQUFLO0FBQzdELHFEQUFxRCxLQUFLO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCw2QkFBNkI7QUFDOUU7QUFDQTtBQUNBO0FBQ0EsaURBQWlELDBEQUEwRDtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELDRCQUE0QjtBQUM5RTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Qsd0RBQXdEO0FBQzFHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsSUFBSTtBQUN0RDtBQUNBO0FBQ0EsaURBQWlELElBQUk7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlGQUF5RiwwQkFBMEI7QUFDbkg7QUFDQTtBQUNBLHlGQUF5Rix5QkFBeUI7QUFDbEgseUZBQXlGLHlCQUF5QjtBQUNsSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDMEI7QUFDMUIsMkMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvcmVmYWN0b3JpbmcvanMvcmVmYWN0b3JpbmdJbmRleC5qc1wiKTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCAnLi4vLi4vLi4vaXNfcmVmYWN0b3JpbmcuY3NzJztcclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnJlc29sdmVkXHJcbmltcG9ydCB7IFZpZXdIb3Jpem9udGFsIH0gZnJvbSAnLi9yZWZhY3RvcmluZ1ZpZXcnO1xyXG5jb25zdCB2aWV3ID0gbmV3IFZpZXdIb3Jpem9udGFsKCk7XHJcbnZpZXcuc2V0U3RhcnRpbmdDb25kaXRpb25zKHtcclxuICAgIGVsZW1lbnRJZDogJyNpc3MnLFxyXG4gICAgc2lnbjogJyQnLFxyXG4gICAgbG93ZXJTY2FsZUJvdW5kOiAxMDAsXHJcbiAgICB1cHBlclNjYWxlQm91bmQ6IDE1MDAsXHJcbiAgICBsb3dlclNsaWRlclZhbHVlOiAyMDAsXHJcbiAgICB1cHBlclNsaWRlclZhbHVlOiA4MDAsXHJcbiAgICBzbGlkZXJUeXBlOiAnZG91YmxlJyxcclxuICAgIGRpcmVjdGlvblR5cGU6ICdob3Jpem9udGFsJyxcclxuICAgIHN0ZXA6IDEwLFxyXG4gICAgdG9vbHRpcDogJ29uJyxcclxuICAgIHZhbHVlU3RhdGVGaWVsZDogJ29uJyxcclxufSk7XHJcbnZpZXcuaW5pdCgpO1xyXG5jb25zdCB2aWV3U2luZ2xlSG9yaXpvbnRhbCA9IG5ldyBWaWV3SG9yaXpvbnRhbCgpO1xyXG52aWV3U2luZ2xlSG9yaXpvbnRhbC5zZXRTdGFydGluZ0NvbmRpdGlvbnMoe1xyXG4gICAgZWxlbWVudElkOiAnI2lzc18yJyxcclxuICAgIHNpZ246ICckJyxcclxuICAgIGxvd2VyU2NhbGVCb3VuZDogMTAwLFxyXG4gICAgdXBwZXJTY2FsZUJvdW5kOiAxNTAwLFxyXG4gICAgbG93ZXJTbGlkZXJWYWx1ZTogMjAwLFxyXG4gICAgdXBwZXJTbGlkZXJWYWx1ZTogODAwLFxyXG4gICAgc2xpZGVyVHlwZTogJ3NpbmdsZScsXHJcbiAgICBkaXJlY3Rpb25UeXBlOiAnaG9yaXpvbnRhbCcsXHJcbiAgICBzdGVwOiAxMCxcclxuICAgIHRvb2x0aXA6ICdvbicsXHJcbiAgICB2YWx1ZVN0YXRlRmllbGQ6ICdvbicsXHJcbn0pO1xyXG52aWV3U2luZ2xlSG9yaXpvbnRhbC5pbml0KCk7XHJcbmNvbnN0IHZpZXdTaW5nbGVWZXJ0aWNhbCA9IG5ldyBWaWV3SG9yaXpvbnRhbCgpO1xyXG52aWV3U2luZ2xlVmVydGljYWwuc2V0U3RhcnRpbmdDb25kaXRpb25zKHtcclxuICAgIGVsZW1lbnRJZDogJyNpc3NfMycsXHJcbiAgICBzaWduOiAnJCcsXHJcbiAgICBsb3dlclNjYWxlQm91bmQ6IDEwMCxcclxuICAgIHVwcGVyU2NhbGVCb3VuZDogMTUwMCxcclxuICAgIGxvd2VyU2xpZGVyVmFsdWU6IDIwMCxcclxuICAgIHVwcGVyU2xpZGVyVmFsdWU6IDgwMCxcclxuICAgIHNsaWRlclR5cGU6ICdzaW5nbGUnLFxyXG4gICAgZGlyZWN0aW9uVHlwZTogJ3ZlcnRpY2FsJyxcclxuICAgIHN0ZXA6IDEwLFxyXG4gICAgdG9vbHRpcDogJ29uJyxcclxuICAgIHZhbHVlU3RhdGVGaWVsZDogJ29uJyxcclxufSk7XHJcbnZpZXdTaW5nbGVWZXJ0aWNhbC5pbml0KCk7XHJcbmNvbnN0IHZpZXdEb3VibGVWZXJ0aWNhbCA9IG5ldyBWaWV3SG9yaXpvbnRhbCgpO1xyXG52aWV3RG91YmxlVmVydGljYWwuc2V0U3RhcnRpbmdDb25kaXRpb25zKHtcclxuICAgIGVsZW1lbnRJZDogJyNpc3NfNCcsXHJcbiAgICBzaWduOiAnJCcsXHJcbiAgICBsb3dlclNjYWxlQm91bmQ6IDEwMCxcclxuICAgIHVwcGVyU2NhbGVCb3VuZDogMTUwMCxcclxuICAgIGxvd2VyU2xpZGVyVmFsdWU6IDIwMCxcclxuICAgIHVwcGVyU2xpZGVyVmFsdWU6IDgwMCxcclxuICAgIHNsaWRlclR5cGU6ICdkb3VibGUnLFxyXG4gICAgZGlyZWN0aW9uVHlwZTogJ3ZlcnRpY2FsJyxcclxuICAgIHN0ZXA6IDEwLFxyXG4gICAgdG9vbHRpcDogJ29uJyxcclxuICAgIHZhbHVlU3RhdGVGaWVsZDogJ29uJyxcclxufSk7XHJcbnZpZXdEb3VibGVWZXJ0aWNhbC5pbml0KCk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlZmFjdG9yaW5nSW5kZXguanMubWFwIiwiY2xhc3MgVmlld0hvcml6b250YWwge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5iaW5kQ29udHJvbGxlciA9IChjb250cm9sbGVyKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udHJvbGxlciA9IGNvbnRyb2xsZXI7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnNldFN0YXJ0aW5nQ29uZGl0aW9ucyA9IChvYmopID0+IHtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50SWQgPSBvYmouZWxlbWVudElkIHx8ICcjaXNzJztcclxuICAgICAgICAgICAgdGhpcy5lbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihvYmouZWxlbWVudElkKTtcclxuICAgICAgICAgICAgdGhpcy5zaWduID0gb2JqLnNpZ24gfHwgJ1InO1xyXG4gICAgICAgICAgICB0aGlzLmxvd2VyU2NhbGUgPSBOdW1iZXIob2JqLmxvd2VyU2NhbGVCb3VuZCkgfHwgMDtcclxuICAgICAgICAgICAgdGhpcy51cHBlclNjYWxlID0gTnVtYmVyKG9iai51cHBlclNjYWxlQm91bmQpIHx8IDEwMDA7XHJcbiAgICAgICAgICAgIHRoaXMubG93ZXJTbGlkZXJWYWx1ZSA9IE51bWJlcihvYmoubG93ZXJTbGlkZXJWYWx1ZSkgfHwgMjAwO1xyXG4gICAgICAgICAgICB0aGlzLnVwcGVyU2xpZGVyVmFsdWUgPSBOdW1iZXIob2JqLnVwcGVyU2xpZGVyVmFsdWUpIHx8IDgwMDtcclxuICAgICAgICAgICAgdGhpcy5zbGlkZXJUeXBlID0gb2JqLnNsaWRlclR5cGUgfHwgJ3NpbmdsZSc7XHJcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uVHlwZSA9IG9iai5kaXJlY3Rpb25UeXBlIHx8ICdob3Jpem9udGFsJztcclxuICAgICAgICAgICAgdGhpcy5zdGVwID0gb2JqLnN0ZXAgfHwgMjtcclxuICAgICAgICAgICAgdGhpcy50b29sdGlwID0gb2JqLnRvb2x0aXAgfHwgJ29uJztcclxuICAgICAgICAgICAgdGhpcy52YWx1ZVN0YXRlRmllbGQgPSBvYmoudmFsdWVTdGF0ZUZpZWxkIHx8ICdvbic7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmdldFN0YXJ0aW5nQ29uZGl0aW9ucyA9ICgpID0+ICh7XHJcbiAgICAgICAgICAgIGVsZW1lbnRJZDogdGhpcy5lbGVtZW50SWQsXHJcbiAgICAgICAgICAgIHNpZ246IHRoaXMuc2lnbixcclxuICAgICAgICAgICAgbG93ZXJTY2FsZUJvdW5kOiB0aGlzLmxvd2VyU2NhbGUsXHJcbiAgICAgICAgICAgIHVwcGVyU2NhbGVCb3VuZDogdGhpcy51cHBlclNjYWxlLFxyXG4gICAgICAgICAgICBsb3dlclNsaWRlclZhbHVlOiB0aGlzLmxvd2VyU2xpZGVyVmFsdWUsXHJcbiAgICAgICAgICAgIHVwcGVyU2xpZGVyVmFsdWU6IHRoaXMudXBwZXJTbGlkZXJWYWx1ZSxcclxuICAgICAgICAgICAgc2xpZGVyVHlwZTogdGhpcy5zbGlkZXJUeXBlLFxyXG4gICAgICAgICAgICBzdGVwOiB0aGlzLnN0ZXAsXHJcbiAgICAgICAgICAgIHRvb2x0aXA6IHRoaXMudG9vbHRpcCxcclxuICAgICAgICAgICAgdmFsdWVTdGF0ZUZpZWxkOiB0aGlzLnZhbHVlU3RhdGVGaWVsZCxcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmluaXQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlRE9NKCk7XHJcbiAgICAgICAgICAgIHRoaXMud3JpdGVET00oKTtcclxuICAgICAgICAgICAgdGhpcy53cml0ZUdlb21ldHJ5RE9NdG9WYXJpYWJsZXMoKTtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVMaXN0ZW5lck9uU2xpZGVyKCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmNyZWF0ZURPTSA9ICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc2xpZGVyVHlwZSA9PT0gJ2RvdWJsZScpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlRG91YmxlRE9NKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuc2xpZGVyVHlwZSA9PT0gJ3NpbmdsZScpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlU2luZ2xlRE9NKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuY3JlYXRlU2luZ2xlRE9NID0gKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmVsZW0uaW5uZXJIVE1MID0gJzxkaXYgY2xhc3M9XCJpc3NfX3ZhbHVlLWZpZWxkXCI+J1xyXG4gICAgICAgICAgICAgICAgKyAnPHNwYW4gY2xhc3M9XCJpc3Nfc3RhdGljRmllbGRcIj48L3NwYW4+J1xyXG4gICAgICAgICAgICAgICAgKyAnPC9kaXY+J1xyXG4gICAgICAgICAgICAgICAgKyAnPGRpdiBjbGFzcz0gXCJpc3MtY29udGFpbmVyXCI+J1xyXG4gICAgICAgICAgICAgICAgKyAnPGRpdiBjbGFzcz0gXCJpc3NfX3NjYWxlXCI+PC9kaXY+J1xyXG4gICAgICAgICAgICAgICAgKyAnPGRpdiBjbGFzcz1cImlzc19fY29sb3ItYmFyXCI+PC9kaXY+J1xyXG4gICAgICAgICAgICAgICAgKyAnPGRpdiBjbGFzcz1cImlzc19fc2luZ2xlX2ZseS12YWx1ZSBpc3NfX3Rvb2x0aXBcIj48L2Rpdj4nXHJcbiAgICAgICAgICAgICAgICArICc8ZGl2IGNsYXNzPVwiaXNzX19zaW5nbGUgaXNzX19kcmFnXCI+PC9kaXY+J1xyXG4gICAgICAgICAgICAgICAgKyAnPC9kaXY+JztcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuY3JlYXRlRG91YmxlRE9NID0gKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmVsZW0uaW5uZXJIVE1MID0gJzxkaXYgY2xhc3M9XCJpc3NfX3ZhbHVlLWZpZWxkXCI+J1xyXG4gICAgICAgICAgICAgICAgKyAnPHNwYW4gY2xhc3M9XCJpc3Nfc3RhdGljRmllbGRcIj48L3NwYW4+J1xyXG4gICAgICAgICAgICAgICAgKyAnLSdcclxuICAgICAgICAgICAgICAgICsgJzxzcGFuIGNsYXNzPVwiaXNzX3N0YXRpY0ZpZWxkXCI+PC9zcGFuPidcclxuICAgICAgICAgICAgICAgICsgJzwvZGl2PidcclxuICAgICAgICAgICAgICAgICsgJzxkaXYgY2xhc3M9IFwiaXNzLWNvbnRhaW5lclwiPidcclxuICAgICAgICAgICAgICAgICsgJzxkaXYgY2xhc3M9IFwiaXNzX19zY2FsZVwiPjwvZGl2PidcclxuICAgICAgICAgICAgICAgICsgJzxkaXYgY2xhc3M9XCJpc3NfX2RvdWJsZV9mbHktdmFsdWUtMSBpc3NfX3Rvb2x0aXBcIj48L2Rpdj4nXHJcbiAgICAgICAgICAgICAgICArICc8ZGl2IGNsYXNzPVwiaXNzX19kb3VibGVfMV9ob3Jpem9udGFsIGlzc19fZHJhZ1wiPjwvZGl2PidcclxuICAgICAgICAgICAgICAgICsgJzxkaXYgY2xhc3M9XCJpc3NfX2RvdWJsZV9mbHktdmFsdWUtMiBpc3NfX3Rvb2x0aXBcIj48L2Rpdj4nXHJcbiAgICAgICAgICAgICAgICArICc8ZGl2IGNsYXNzPVwiaXNzX19kb3VibGVfMl9ob3Jpem9udGFsIGlzc19fZHJhZ1wiPjwvZGl2PidcclxuICAgICAgICAgICAgICAgICsgJzxkaXYgY2xhc3M9XCJpc3NfX2NvbG9yLWJhclwiPjwvZGl2PidcclxuICAgICAgICAgICAgICAgICsgJzwvZGl2Pic7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLndyaXRlRE9NID0gKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNoZWNrRWxlbWVudHNJbkRPTSgpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zbGlkZXJJbkRPTS5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMud3JpdGVTaW5nbGVET010b1ZhcmlhYmxlcygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy53cml0ZVNpbmdsZVNsaWRlckluZGVudCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuc2xpZGVySW5ET00ubGVuZ3RoID09PSAyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLndyaXRlRG91YmxlRE9NdG9WYXJpYWJsZXMoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMud3JpdGVEb3VibGVTbGlkZXJJbmRlbnQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5jaGVja0VsZW1lbnRzSW5ET00gPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IERPTUVsZW1lbnRzID0gdGhpcy5lbGVtLnF1ZXJ5U2VsZWN0b3JBbGwoJy5pc3NfX2RyYWcnKTtcclxuICAgICAgICAgICAgaWYgKChET01FbGVtZW50cy5sZW5ndGggPiAwKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zbGlkZXJJbkRPTSA9IERPTUVsZW1lbnRzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLndyaXRlU2luZ2xlRE9NdG9WYXJpYWJsZXMgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIFt0aGlzLnNjYWxlXSA9IHRoaXMucmV0dXJuRWxlbWVudHNGcm9tRE9NKCcuaXNzX19zY2FsZScsIDEpO1xyXG4gICAgICAgICAgICBbdGhpcy5zaW5nbGVTbGlkZXJdID0gdGhpcy5yZXR1cm5FbGVtZW50c0Zyb21ET00oJy5pc3NfX2RyYWcnLCAxKTtcclxuICAgICAgICAgICAgW3RoaXMuc3RhdGljRmllbGRTaW5nbGVdID0gdGhpcy5yZXR1cm5FbGVtZW50c0Zyb21ET00oJy5pc3Nfc3RhdGljRmllbGQnLCAxKTtcclxuICAgICAgICAgICAgW3RoaXMuZmx5RmllbGRTaW5nbGVdID0gdGhpcy5yZXR1cm5FbGVtZW50c0Zyb21ET00oJy5pc3NfX3Rvb2x0aXAnLCAxKTtcclxuICAgICAgICAgICAgW3RoaXMucmliYm9uXSA9IHRoaXMucmV0dXJuRWxlbWVudHNGcm9tRE9NKCcuaXNzX19jb2xvci1iYXInLCAxKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMud3JpdGVEb3VibGVET010b1ZhcmlhYmxlcyA9ICgpID0+IHtcclxuICAgICAgICAgICAgW3RoaXMuc2NhbGVdID0gdGhpcy5yZXR1cm5FbGVtZW50c0Zyb21ET00oJy5pc3NfX3NjYWxlJywgMSk7XHJcbiAgICAgICAgICAgIFt0aGlzLmxvd2VyU2xpZGVyLCB0aGlzLnVwcGVyU2xpZGVyXSA9IHRoaXMucmV0dXJuRWxlbWVudHNGcm9tRE9NKCcuaXNzX19kcmFnJywgMik7XHJcbiAgICAgICAgICAgIFt0aGlzLnN0YXRpY0ZpZWxkTG93ZXIsIHRoaXMuc3RhdGljRmllbGRVcHBlcl0gPSB0aGlzLnJldHVybkVsZW1lbnRzRnJvbURPTSgnLmlzc19zdGF0aWNGaWVsZCcsIDIpO1xyXG4gICAgICAgICAgICBbdGhpcy5mbHlGaWVsZExvd2VyLCB0aGlzLmZseUZpZWxkVXBwZXJdID0gdGhpcy5yZXR1cm5FbGVtZW50c0Zyb21ET00oJy5pc3NfX3Rvb2x0aXAnLCAyKTtcclxuICAgICAgICAgICAgW3RoaXMucmliYm9uXSA9IHRoaXMucmV0dXJuRWxlbWVudHNGcm9tRE9NKCcuaXNzX19jb2xvci1iYXInLCAxKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMud3JpdGVTaW5nbGVTbGlkZXJJbmRlbnQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW0gPSB0aGlzLnJldHVybkVsZW1lbnRzRnJvbURPTSgnLmlzc19fZHJhZycsIDEpO1xyXG4gICAgICAgICAgICB0aGlzLnNpbmdsZVNsaWRlclBvc2l0aW9uID0gdGhpcy5yZXR1cm5JbmRlbnQoZWxlbVswXSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLndyaXRlRG91YmxlU2xpZGVySW5kZW50ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBlbGVtcyA9IHRoaXMucmV0dXJuRWxlbWVudHNGcm9tRE9NKCcuaXNzX19kcmFnJywgMik7XHJcbiAgICAgICAgICAgIHRoaXMubG93ZXJTbGlkZXJQb3NpdGlvbiA9IHRoaXMucmV0dXJuSW5kZW50KGVsZW1zWzBdKTtcclxuICAgICAgICAgICAgdGhpcy51cHBlclNsaWRlclBvc2l0aW9uID0gdGhpcy5yZXR1cm5JbmRlbnQoZWxlbXNbMV0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5yZXR1cm5JbmRlbnQgPSAoYXJyKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRpcmVjdGlvblR5cGUgPT09ICdob3Jpem9udGFsJykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFyci5vZmZzZXRMZWZ0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRpcmVjdGlvblR5cGUgPT09ICd2ZXJ0aWNhbCcpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhcnIub2Zmc2V0VG9wO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnJldHVybkVsZW1lbnRzRnJvbURPTSA9IChjbGFzc05hbWUsIGxlbmd0aCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBET01FbGVtZW50cyA9IHRoaXMuZWxlbS5xdWVyeVNlbGVjdG9yQWxsKGNsYXNzTmFtZSk7XHJcbiAgICAgICAgICAgIGlmICgoRE9NRWxlbWVudHMubGVuZ3RoID09PSBsZW5ndGgpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gRE9NRWxlbWVudHM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy53cml0ZUdlb21ldHJ5RE9NdG9WYXJpYWJsZXMgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RGlyZWN0aW9uKCk7XHJcbiAgICAgICAgICAgIHRoaXMud3JpdGVHZW9tZXRyeU9mU2xpZGVyKCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnNldERpcmVjdGlvbiA9ICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uVHlwZSA9PT0gJ2hvcml6b250YWwnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1haW5BeGlzU2l6ZSA9IHRoaXMuc2NhbGUub2Zmc2V0V2lkdGg7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgaG9yaXpvbnRhbCBpbmRlbnQgJHt0aGlzLmluZGVudH0gLS0gdGhpcy5tYWluQXhpc1NpemUgJHt0aGlzLm1haW5BeGlzU2l6ZX1gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb25UeXBlID09PSAndmVydGljYWwnKSB7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmluZGVudCA9IHRoaXMuY2xpZW50UmVjdC50b3A7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1haW5BeGlzU2l6ZSA9IHRoaXMuc2NhbGUub2Zmc2V0SGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYGluZGVudCAke3RoaXMuaW5kZW50fSAtLSB0aGlzLm1haW5BeGlzU2l6ZSAke3RoaXMubWFpbkF4aXNTaXplfWApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLndyaXRlR2VvbWV0cnlPZlNsaWRlciA9ICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc2xpZGVySW5ET00ubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNsaWRlcldpZHRoID0gdGhpcy5zaW5nbGVTbGlkZXIub2Zmc2V0V2lkdGg7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNsaWRlckhlaWdodCA9IHRoaXMuc2luZ2xlU2xpZGVyLm9mZnNldEhlaWdodDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLnNsaWRlckluRE9NLmxlbmd0aCA9PT0gMikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zbGlkZXJXaWR0aCA9IHRoaXMubG93ZXJTbGlkZXIub2Zmc2V0V2lkdGg7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNsaWRlckhlaWdodCA9IHRoaXMubG93ZXJTbGlkZXIub2Zmc2V0SGVpZ2h0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuY2FsY1BpeGVsU3RlcCgpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5jYWxjUGl4ZWxTdGVwID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB3aWR0aFZzTW9uZXkgPSB0aGlzLm1haW5BeGlzU2l6ZSAvIHRoaXMudXBwZXJTY2FsZTtcclxuICAgICAgICAgICAgY29uc3Qgc3RlcEluUGl4ZWwgPSB3aWR0aFZzTW9uZXkgKiB0aGlzLnN0ZXA7XHJcbiAgICAgICAgICAgIGlmIChzdGVwSW5QaXhlbCA8IDEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGl4ZWxTdGVwID0gMTtcclxuICAgICAgICAgICAgICAgIHRoaXMucm91bmRlZFBpeGVsU3RlcCA9IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBpeGVsU3RlcCA9IHN0ZXBJblBpeGVsO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3VuZGVkUGl4ZWxTdGVwID0gTWF0aC5yb3VuZChzdGVwSW5QaXhlbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuY3JlYXRlTGlzdGVuZXJPblNsaWRlciA9ICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc2xpZGVySW5ET00ubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNpbmdsZVNsaWRlci5vbm1vdXNlZG93biA9IHRoaXMuZXZlbnRPblNsaWRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLnNsaWRlckluRE9NLmxlbmd0aCA9PT0gMikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb3dlclNsaWRlci5vbm1vdXNlZG93biA9IHRoaXMuZXZlbnRPblNsaWRlcjtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBwZXJTbGlkZXIub25tb3VzZWRvd24gPSB0aGlzLmV2ZW50T25TbGlkZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuZXZlbnRPblNsaWRlciA9IChfZSkgPT4ge1xyXG4gICAgICAgICAgICBfZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFJlc3RyaWN0aW9uT2ZTbGlkZXJNb3ZlbWVudChfZSk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50Lm9ubW91c2V1cCA9IHRoaXMuY2FuY2VsRXZlbnRzO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5vbm1vdXNlbW92ZSA9IHRoaXMubW92ZUV2ZW50V2l0aEhvbGRNb3VzZTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuc2V0UmVzdHJpY3Rpb25PZlNsaWRlck1vdmVtZW50ID0gKF9lKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNsaWRlclR5cGUgPT09ICdkb3VibGUnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFJlc3RyaWN0aW9uRm9yRG91YmxlU2xpZGVyKF9lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5zbGlkZXJUeXBlID09PSAnc2luZ2xlJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRSZXN0cmljdGlvbkZvclNpbmdsZVNsaWRlcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnNldFJlc3RyaWN0aW9uRm9yRG91YmxlU2xpZGVyID0gKF9lKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRpcmVjdGlvblR5cGUgPT09ICdob3Jpem9udGFsJykge1xyXG4gICAgICAgICAgICAgICAgaWYgKF9lLnRhcmdldCA9PT0gdGhpcy5sb3dlclNsaWRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0U2xpZGVyID0gdGhpcy5sb3dlclNsaWRlcjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvd2VyUmVzdHJpY3Rpb24gPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBwZXJSZXN0cmljdGlvbiA9IHRoaXMudXBwZXJTbGlkZXJQb3NpdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvd2VyQ29zdFJlc3RyaWN0aW9uID0gdGhpcy5sb3dlclNjYWxlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBwZXJDb3N0UmVzdHJpY3Rpb24gPSB0aGlzLmdldENvc3RGb3JTbGlkZXIodGhpcy51cHBlclJlc3RyaWN0aW9uKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChfZS50YXJnZXQgPT09IHRoaXMudXBwZXJTbGlkZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRhcmdldFNsaWRlciA9IHRoaXMudXBwZXJTbGlkZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb3dlclJlc3RyaWN0aW9uID0gdGhpcy5sb3dlclNsaWRlclBvc2l0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBwZXJSZXN0cmljdGlvbiA9IHRoaXMubWFpbkF4aXNTaXplO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG93ZXJDb3N0UmVzdHJpY3Rpb24gPSB0aGlzLmdldENvc3RGb3JTbGlkZXIodGhpcy5sb3dlclJlc3RyaWN0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwcGVyQ29zdFJlc3RyaWN0aW9uID0gdGhpcy51cHBlclNjYWxlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRpcmVjdGlvblR5cGUgPT09ICd2ZXJ0aWNhbCcpIHtcclxuICAgICAgICAgICAgICAgIGlmIChfZS50YXJnZXQgPT09IHRoaXMubG93ZXJTbGlkZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRhcmdldFNsaWRlciA9IHRoaXMubG93ZXJTbGlkZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb3dlclJlc3RyaWN0aW9uID0gMDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwcGVyUmVzdHJpY3Rpb24gPSB0aGlzLnVwcGVyU2xpZGVyUG9zaXRpb247XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb3dlckNvc3RSZXN0cmljdGlvbiA9IHRoaXMuZ2V0Q29zdEZvclNsaWRlcih0aGlzLmxvd2VyUmVzdHJpY3Rpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBwZXJDb3N0UmVzdHJpY3Rpb24gPSB0aGlzLmdldENvc3RGb3JTbGlkZXIodGhpcy51cHBlclJlc3RyaWN0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgbG93ZXJDb3N0UmVzdHJpY3Rpb24gPT09ICR7dGhpcy5sb3dlckNvc3RSZXN0cmljdGlvbn1gKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgdXBwZXJDb3N0UmVzdHJpY3Rpb24gPT09ICR7dGhpcy51cHBlckNvc3RSZXN0cmljdGlvbn1gKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChfZS50YXJnZXQgPT09IHRoaXMudXBwZXJTbGlkZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRhcmdldFNsaWRlciA9IHRoaXMudXBwZXJTbGlkZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb3dlclJlc3RyaWN0aW9uID0gdGhpcy5sb3dlclNsaWRlclBvc2l0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBwZXJSZXN0cmljdGlvbiA9IHRoaXMubWFpbkF4aXNTaXplO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG93ZXJDb3N0UmVzdHJpY3Rpb24gPSB0aGlzLmdldENvc3RGb3JTbGlkZXIodGhpcy5sb3dlclJlc3RyaWN0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwcGVyQ29zdFJlc3RyaWN0aW9uID0gdGhpcy5nZXRDb3N0Rm9yU2xpZGVyKHRoaXMudXBwZXJSZXN0cmljdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYGxvd2VyQ29zdFJlc3RyaWN0aW9uID09PSAke3RoaXMubG93ZXJDb3N0UmVzdHJpY3Rpb259YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYHVwcGVyQ29zdFJlc3RyaWN0aW9uID09PSAke3RoaXMudXBwZXJDb3N0UmVzdHJpY3Rpb259YCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuc2V0UmVzdHJpY3Rpb25Gb3JTaW5nbGVTbGlkZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0U2xpZGVyID0gdGhpcy5zaW5nbGVTbGlkZXI7XHJcbiAgICAgICAgICAgIHRoaXMubG93ZXJSZXN0cmljdGlvbiA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMudXBwZXJSZXN0cmljdGlvbiA9IHRoaXMubWFpbkF4aXNTaXplO1xyXG4gICAgICAgICAgICB0aGlzLnVwcGVyQ29zdFJlc3RyaWN0aW9uID0gdGhpcy51cHBlclNjYWxlO1xyXG4gICAgICAgICAgICB0aGlzLmxvd2VyQ29zdFJlc3RyaWN0aW9uID0gdGhpcy5sb3dlclNjYWxlO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5nZXRDb3N0Rm9yU2xpZGVyID0gKHNsaWRlclBvc3Rpb25JblBpeGVsKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRpcmVjdGlvblR5cGUgPT09ICdob3Jpem9udGFsJykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNsaWRlclBvc3Rpb25JblBpeGVsIDw9IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJHt0aGlzLmxvd2VyU2NhbGV9IHRoaXMubG93ZXJTY2FsZWApO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmxvd2VyU2NhbGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKE1hdGgucm91bmQoc2xpZGVyUG9zdGlvbkluUGl4ZWwgLyB0aGlzLnBpeGVsU3RlcCkgKiB0aGlzLnN0ZXApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRpcmVjdGlvblR5cGUgPT09ICd2ZXJ0aWNhbCcpIHtcclxuICAgICAgICAgICAgICAgIGlmIChzbGlkZXJQb3N0aW9uSW5QaXhlbCA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYCR7dGhpcy51cHBlclNjYWxlfSB0aGlzLnVwcGVyU2NhbGVgKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy51cHBlclNjYWxlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICgoTWF0aC5yb3VuZCgodGhpcy5tYWluQXhpc1NpemUgLSBzbGlkZXJQb3N0aW9uSW5QaXhlbCkgLyB0aGlzLnBpeGVsU3RlcCkgKiB0aGlzLnN0ZXApICsgdGhpcy5sb3dlclNjYWxlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5tb3ZlRXZlbnRXaXRoSG9sZE1vdXNlID0gKF9lKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlubmVyTW91c2VQb3NpdGlvbiA9IHRoaXMuZ2V0TW91c2VQb3NpdGlvbihfZSk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGAke2lubmVyTW91c2VQb3NpdGlvbn0gaW5uZXJNb3VzZVBvc2l0aW9uYCk7XHJcbiAgICAgICAgICAgIGNvbnN0IG5lYXJlc3RSb3VuZGVkU3RlcCA9IHRoaXMuY2FsY05lYXJlc3RTdGVwKGlubmVyTW91c2VQb3NpdGlvbik7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGAke19uZWFyZXN0Um91bmRlZFN0ZXB9IF9uZWFyZXN0Um91bmRlZFN0ZXBgKTtcclxuICAgICAgICAgICAgY29uc3QgZmluYWxQb3NpdGlvbkluUGl4ZWwgPSB0aGlzLmNhbGNGaW5hbFBvc2l0aW9uKG5lYXJlc3RSb3VuZGVkU3RlcCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGZpbmFsQ29zdCA9IHRoaXMuY2FsY0ZpbmFsQ29zdChuZWFyZXN0Um91bmRlZFN0ZXApO1xyXG4gICAgICAgICAgICB0aGlzLnNob3dNb25leU9uU2NyZWVuKGZpbmFsQ29zdCk7XHJcbiAgICAgICAgICAgIHRoaXMubW92ZVNsaWRlcihmaW5hbFBvc2l0aW9uSW5QaXhlbCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0T3ZlcmxheSgpO1xyXG4gICAgICAgICAgICB0aGlzLm1vdmVSaWJib24oKTtcclxuICAgICAgICAgICAgdGhpcy5tb3ZlVG9vbHRpcCgpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5nZXRNb3VzZVBvc2l0aW9uID0gKF9lKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xpZW50UmVjdCA9IHRoaXMuc2NhbGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRpcmVjdGlvblR5cGUgPT09ICdob3Jpem9udGFsJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbmRlbnQgPSB0aGlzLmNsaWVudFJlY3QubGVmdDtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoX2UuY2xpZW50WCAtIHRoaXMuaW5kZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb25UeXBlID09PSAndmVydGljYWwnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluZGVudCA9IHRoaXMuY2xpZW50UmVjdC50b3A7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKF9lLmNsaWVudFkgLSB0aGlzLmluZGVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuY2FsY05lYXJlc3RTdGVwID0gKF9wb3NpdGlvbkluUGl4ZWwpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uVHlwZSA9PT0gJ2hvcml6b250YWwnKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChfcG9zaXRpb25JblBpeGVsIC8gdGhpcy5waXhlbFN0ZXApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRpcmVjdGlvblR5cGUgPT09ICd2ZXJ0aWNhbCcpIHtcclxuICAgICAgICAgICAgICAgIC8vIHJldHVybiBNYXRoLnJvdW5kKF9wb3NpdGlvbkluUGl4ZWwgLyB0aGlzLnBpeGVsU3RlcCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gTWF0aC5yb3VuZCgodGhpcy5tYWluQXhpc1NpemUgLSBfcG9zaXRpb25JblBpeGVsKSAvIHRoaXMucGl4ZWxTdGVwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5jYWxjRmluYWxQb3NpdGlvbiA9IChfbmVhcmVzdFJvdW5kZWRTdGVwKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBvc2l0aW9uSW5QaXhlbCA9IF9uZWFyZXN0Um91bmRlZFN0ZXAgKiB0aGlzLnBpeGVsU3RlcDtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uVHlwZSA9PT0gJ2hvcml6b250YWwnKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1BpeGVsc0luQm9yZGVyKHBvc2l0aW9uSW5QaXhlbCkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcG9zaXRpb25JblBpeGVsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHBvc2l0aW9uSW5QaXhlbCA8PSB0aGlzLmxvd2VyUmVzdHJpY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5sb3dlclJlc3RyaWN0aW9uO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHBvc2l0aW9uSW5QaXhlbCA+PSB0aGlzLnVwcGVyUmVzdHJpY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy51cHBlclJlc3RyaWN0aW9uO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRpcmVjdGlvblR5cGUgPT09ICd2ZXJ0aWNhbCcpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzUGl4ZWxzSW5Cb3JkZXIoKHRoaXMubWFpbkF4aXNTaXplIC0gcG9zaXRpb25JblBpeGVsKSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJHt0aGlzLm1haW5BeGlzU2l6ZSAtIHBvc2l0aW9uSW5QaXhlbH0gPT09IHRoaXMubWFpbkF4aXNTaXplIC0gcG9zaXRpb25JblBpeGVsYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICh0aGlzLm1haW5BeGlzU2l6ZSAtIHBvc2l0aW9uSW5QaXhlbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoKHRoaXMubWFpbkF4aXNTaXplIC0gcG9zaXRpb25JblBpeGVsKSA8PSB0aGlzLmxvd2VyUmVzdHJpY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgJHt9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCR7dGhpcy5sb3dlclJlc3RyaWN0aW9ufSA9PT0gbG93ZXJgKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5sb3dlclJlc3RyaWN0aW9uO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKCh0aGlzLm1haW5BeGlzU2l6ZSAtIHBvc2l0aW9uSW5QaXhlbCkgPj0gdGhpcy51cHBlclJlc3RyaWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudXBwZXJSZXN0cmljdGlvbjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5jYWxjRmluYWxDb3N0ID0gKF9uZWFyZXN0Um91bmRlZFN0ZXApID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uVHlwZSA9PT0gJ2hvcml6b250YWwnKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwb3NpdGlvbkluTW9uZXkgPSBfbmVhcmVzdFJvdW5kZWRTdGVwICogdGhpcy5zdGVwO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNNb25leUluQm9yZGVyKHBvc2l0aW9uSW5Nb25leSkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcG9zaXRpb25Jbk1vbmV5O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHBvc2l0aW9uSW5Nb25leSA8IHRoaXMubG93ZXJDb3N0UmVzdHJpY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5sb3dlckNvc3RSZXN0cmljdGlvbjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChwb3NpdGlvbkluTW9uZXkgPiB0aGlzLnVwcGVyQ29zdFJlc3RyaWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudXBwZXJDb3N0UmVzdHJpY3Rpb247XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uVHlwZSA9PT0gJ3ZlcnRpY2FsJykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcG9zaXRpb25Jbk1vbmV5ID0gKF9uZWFyZXN0Um91bmRlZFN0ZXAgKiB0aGlzLnN0ZXApICsgdGhpcy5sb3dlclNjYWxlO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYHBvc2l0aW9uSW5Nb25leSA9PT0gJHtwb3NpdGlvbkluTW9uZXl9YCk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc01vbmV5SW5Cb3JkZXIocG9zaXRpb25Jbk1vbmV5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwb3NpdGlvbkluTW9uZXk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAocG9zaXRpb25Jbk1vbmV5ID4gdGhpcy5sb3dlckNvc3RSZXN0cmljdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmxvd2VyQ29zdFJlc3RyaWN0aW9uO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHBvc2l0aW9uSW5Nb25leSA8IHRoaXMudXBwZXJDb3N0UmVzdHJpY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy51cHBlckNvc3RSZXN0cmljdGlvbjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5pc1BpeGVsc0luQm9yZGVyID0gKF9wb3NpdGlvbikgPT4gKChfcG9zaXRpb24gPj0gdGhpcy5sb3dlclJlc3RyaWN0aW9uKSAmJiAoX3Bvc2l0aW9uIDw9IHRoaXMudXBwZXJSZXN0cmljdGlvbikpO1xyXG4gICAgICAgIHRoaXMuaXNNb25leUluQm9yZGVyID0gKF9wb3NpdGlvbikgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb25UeXBlID09PSAnaG9yaXpvbnRhbCcpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoKF9wb3NpdGlvbiA+PSB0aGlzLmxvd2VyQ29zdFJlc3RyaWN0aW9uKSAmJiAoX3Bvc2l0aW9uIDw9IHRoaXMudXBwZXJDb3N0UmVzdHJpY3Rpb24pKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb25UeXBlID09PSAndmVydGljYWwnKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKChfcG9zaXRpb24gPD0gdGhpcy5sb3dlckNvc3RSZXN0cmljdGlvbikgJiYgKF9wb3NpdGlvbiA+PSB0aGlzLnVwcGVyQ29zdFJlc3RyaWN0aW9uKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuc2hvd01vbmV5T25TY3JlZW4gPSAoZmluYWxDb3N0KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvc3QgPSBgJHtmaW5hbENvc3R9JHt0aGlzLnNpZ259YDtcclxuICAgICAgICAgICAgaWYgKHRoaXMudGFyZ2V0U2xpZGVyID09PSB0aGlzLmxvd2VyU2xpZGVyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRpY0ZpZWxkTG93ZXIudGV4dENvbnRlbnQgPSBgJHtjb3N0fWA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZseUZpZWxkTG93ZXIudGV4dENvbnRlbnQgPSBgJHtjb3N0fWA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMudGFyZ2V0U2xpZGVyID09PSB0aGlzLnVwcGVyU2xpZGVyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRpY0ZpZWxkVXBwZXIudGV4dENvbnRlbnQgPSBgJHtjb3N0fWA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZseUZpZWxkVXBwZXIudGV4dENvbnRlbnQgPSBgJHtjb3N0fWA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMudGFyZ2V0U2xpZGVyID09PSB0aGlzLnNpbmdsZVNsaWRlcikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0aWNGaWVsZFNpbmdsZS50ZXh0Q29udGVudCA9IGAke2Nvc3R9YDtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmx5RmllbGRTaW5nbGUudGV4dENvbnRlbnQgPSBgJHtjb3N0fWA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMubW92ZVJpYmJvbiA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgc2V0SG9yaXpvbnRhbFJpYmJvblZhcmlhYmxlcyA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNsaWRlckluRE9NLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmliYm9uLnN0eWxlLmxlZnQgPSAnMHB4JztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJpYmJvbi5zdHlsZS53aWR0aCA9IGAke3RoaXMuc2luZ2xlU2xpZGVyLm9mZnNldExlZnR9cHhgO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5zbGlkZXJJbkRPTS5sZW5ndGggPT09IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJpYmJvbi5zdHlsZS5sZWZ0ID0gdGhpcy5sb3dlclNsaWRlci5zdHlsZS5sZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmliYm9uLnN0eWxlLndpZHRoID0gYCR7dGhpcy51cHBlclNsaWRlci5vZmZzZXRMZWZ0IC0gdGhpcy5sb3dlclNsaWRlci5vZmZzZXRMZWZ0fXB4YDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY29uc3Qgc2V0VmVydGljYWxSaWJib25WYXJpYWJsZXMgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zbGlkZXJJbkRPTS5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJpYmJvbi5zdHlsZS50b3AgPSAnMHB4JztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJpYmJvbi5zdHlsZS5oZWlnaHQgPSBgJHt0aGlzLnNpbmdsZVNsaWRlci5vZmZzZXRUb3B9cHhgO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5zbGlkZXJJbkRPTS5sZW5ndGggPT09IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJpYmJvbi5zdHlsZS50b3AgPSB0aGlzLmxvd2VyU2xpZGVyLnN0eWxlLnRvcDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJpYmJvbi5zdHlsZS5oZWlnaHQgPSBgJHt0aGlzLnVwcGVyU2xpZGVyLm9mZnNldFRvcCAtIHRoaXMubG93ZXJTbGlkZXIub2Zmc2V0VG9wfXB4YDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uVHlwZSA9PT0gJ2hvcml6b250YWwnKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRIb3Jpem9udGFsUmliYm9uVmFyaWFibGVzKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uVHlwZSA9PT0gJ3ZlcnRpY2FsJykge1xyXG4gICAgICAgICAgICAgICAgc2V0VmVydGljYWxSaWJib25WYXJpYWJsZXMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5tb3ZlU2xpZGVyID0gKG51bSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb25UeXBlID09PSAnaG9yaXpvbnRhbCcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0U2xpZGVyLnN0eWxlLmxlZnQgPSBgJHtudW19cHhgO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuZGlyZWN0aW9uVHlwZSA9PT0gJ3ZlcnRpY2FsJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50YXJnZXRTbGlkZXIuc3R5bGUudG9wID0gYCR7bnVtfXB4YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5tb3ZlVG9vbHRpcCA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbW92ZSA9IChkaXJlY3Rpb24sIG9mZnNldCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2xpZGVyVHlwZSA9PT0gJ3NpbmdsZScpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVsZW0ucXVlcnlTZWxlY3RvckFsbCgnLmlzc19fdG9vbHRpcCcpWzBdLnN0eWxlW2RpcmVjdGlvbl0gPSBgJHt0aGlzLnNpbmdsZVNsaWRlcltvZmZzZXRdfXB4YDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNsaWRlclR5cGUgPT09ICdkb3VibGUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVtLnF1ZXJ5U2VsZWN0b3JBbGwoJy5pc3NfX3Rvb2x0aXAnKVswXS5zdHlsZVtkaXJlY3Rpb25dID0gYCR7dGhpcy5sb3dlclNsaWRlcltvZmZzZXRdfXB4YDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVsZW0ucXVlcnlTZWxlY3RvckFsbCgnLmlzc19fdG9vbHRpcCcpWzFdLnN0eWxlW2RpcmVjdGlvbl0gPSBgJHt0aGlzLnVwcGVyU2xpZGVyW29mZnNldF19cHhgO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb25UeXBlID09PSAnaG9yaXpvbnRhbCcpIHtcclxuICAgICAgICAgICAgICAgIG1vdmUoJ2xlZnQnLCAnb2Zmc2V0TGVmdCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRpcmVjdGlvblR5cGUgPT09ICd2ZXJ0aWNhbCcpIHtcclxuICAgICAgICAgICAgICAgIG1vdmUoJ3RvcCcsICdvZmZzZXRUb3AnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5zZXRPdmVybGF5ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy50YXJnZXRTbGlkZXIgPT09IHRoaXMubG93ZXJTbGlkZXIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0U2xpZGVyLnN0eWxlLnpJbmRleCA9ICcxMDAnO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cHBlclNsaWRlci5zdHlsZS56SW5kZXggPSAnMSc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy50YXJnZXRTbGlkZXIgPT09IHRoaXMudXBwZXJTbGlkZXIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0U2xpZGVyLnN0eWxlLnpJbmRleCA9ICcxMDAnO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb3dlclNsaWRlci5zdHlsZS56SW5kZXggPSAnMSc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuY2FuY2VsRXZlbnRzID0gKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLndyaXRlRE9NKCk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50Lm9ubW91c2V1cCA9IG51bGw7XHJcbiAgICAgICAgICAgIGRvY3VtZW50Lm9ubW91c2Vtb3ZlID0gbnVsbDtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgc2V0Q29udHJvbGxlcigpIHtcclxuICAgICAgICBjb25zdCBvYmogPSB7XHJcbiAgICAgICAgICAgIGxvd2VyU2xpZGVyVmFsdWU6IHRoaXMubG93ZXJTbGlkZXJWYWx1ZSxcclxuICAgICAgICAgICAgdXBwZXJTbGlkZXJWYWx1ZTogdGhpcy51cHBlclNsaWRlclZhbHVlLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5jb250cm9sbGVyLmdldFZpZXcob2JqKTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgeyBWaWV3SG9yaXpvbnRhbCB9O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZWZhY3RvcmluZ1ZpZXcuanMubWFwIl0sInNvdXJjZVJvb3QiOiIifQ==