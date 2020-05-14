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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/ts/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/ts/ISSlider.ts":
/*!****************************!*\
  !*** ./src/ts/ISSlider.ts ***!
  \****************************/
/*! exports provided: ISSlider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ISSlider", function() { return ISSlider; });
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ "./src/ts/model.ts");
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controller */ "./src/ts/controller.ts");
/* harmony import */ var _View__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./View */ "./src/ts/View.ts");
/* harmony import */ var _controlPanel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controlPanel */ "./src/ts/controlPanel.ts");




function ISSlider(param) {
    const settings = {
        idForControlPanel: param.idForControlPanel || 'doc_panel',
        elementId: param.elementId || 'iss',
        sign: param.sign || '₽',
        lowerScaleBound: param.lowerScaleBound || 0,
        upperScaleBound: param.upperScaleBound || 1000,
        lowerSliderValue: param.lowerSliderValue || 200,
        upperSliderValue: param.upperSliderValue || 800,
        sliderType: param.sliderType || 'double',
        directionType: param.directionType || 'horizontal',
        step: param.step || 50,
        style: param.style || 'iss',
    };
    // ПОСТРОЕНИЕ СЛАЙДЕРА ПРИ ПЕРВОМ ЗАПУСКЕ
    const model = new _model__WEBPACK_IMPORTED_MODULE_0__["Model"](settings);
    const controller = new _controller__WEBPACK_IMPORTED_MODULE_1__["Controller"](settings);
    const view = new _View__WEBPACK_IMPORTED_MODULE_2__["View"]();
    const controlPanel = new _controlPanel__WEBPACK_IMPORTED_MODULE_3__["ControlPanel"]();
    controller.bindModel(model);
    controller.bindView(view);
    controller.bindControlPanel(controlPanel);
    view.bindController(controller);
    controlPanel.bindController(controller);
    controlPanel.bindModel(model);
    controlPanel.setSettings(settings);
    controller.createSlider();
    controlPanel.buildPanel();
}



/***/ }),

/***/ "./src/ts/View.ts":
/*!************************!*\
  !*** ./src/ts/View.ts ***!
  \************************/
/*! exports provided: View */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View", function() { return View; });
class View {
    constructor() {
        this.bindController = (controller) => {
            this.controller = controller;
        };
        this.setStartingConditions = (obj) => {
            this.elementId = `#${obj.elementId}` || '#iss';
            this.elem = document.getElementById(obj.elementId);
            this.sign = obj.sign || 'R';
            this.lowerScaleBound = Number(obj.lowerScaleBound) || 0;
            this.upperScaleBound = Number(obj.upperScaleBound) || 1000;
            this.lowerSliderValue = Number(obj.lowerSliderValue) || 200;
            this.upperSliderValue = Number(obj.upperSliderValue) || 800;
            this.sliderType = obj.sliderType || 'single';
            this.directionType = obj.directionType || 'horizontal';
            this.step = obj.step || 2;
            this.style = obj.style || 'iss';
        };
        this.getStartingConditions = () => ({
            elementId: this.elementId,
            sign: this.sign,
            lowerScaleBound: this.lowerScaleBound,
            upperScaleBound: this.upperScaleBound,
            lowerSliderValue: this.lowerSliderValue,
            upperSliderValue: this.upperSliderValue,
            sliderType: this.sliderType,
            step: this.step,
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
            this.elem.innerHTML = `<div class="${this.style}__value-field">
      <span class="${this.style}__staticField"></span>
      </div>
      <div class= "${this.style}__container">
      <div class= "${this.style}__scale"></div>
      <div class="${this.style}__color-bar"></div>
      <div class="${this.style}__single-fly ${this.style}__tooltip"></div>
      <div class="${this.style}__single ${this.style}__drag"></div>
      <div class="${this.style}__visible-scale"></div>
      </div>`;
        };
        this.createDoubleDOM = () => {
            this.elem.innerHTML = `<div class="${this.style}__value-field">
      <span class="${this.style}__staticField"></span>
      -
      <span class="${this.style}__staticField"></span>
      </div>
      <div class= "${this.style}__container">
      <div class= "${this.style}__scale"></div>
      <div class="${this.style}__double-fly-first ${this.style}__tooltip"></div>
      <div class="${this.style}__double-first-slider ${this.style}__drag"></div>
      <div class="${this.style}__double-fly-second ${this.style}__tooltip"></div>
      <div class="${this.style}__double-second-slider ${this.style}__drag"></div>
      <div class="${this.style}__color-bar"></div>
      <div class="${this.style}__visible-scale"></div>
      </div>`;
        };
        this.writeDOM = () => {
            this.checkElementsInDOM();
            if (this.sliderType === 'single') {
                this.writeSingleDOMtoVariables();
                this.writeSingleSliderIndent();
            }
            else if (this.sliderType === 'double') {
                this.writeDoubleDOMtoVariables();
                this.writeDoubleSliderIndent();
            }
        };
        this.checkElementsInDOM = () => {
            const DOMElements = this.elem.querySelectorAll(`.${this.style}__drag`);
            if ((DOMElements.length > 0)) {
                this.sliderInDOM = DOMElements;
            }
        };
        this.writeSingleDOMtoVariables = () => {
            [this.scale] = this.returnElementsFromDOM(`.${this.style}__scale`, 1);
            [this.singleSlider] = this.returnElementsFromDOM(`.${this.style}__drag`, 1);
            [this.staticFieldSingle] = this.returnElementsFromDOM(`.${this.style}__staticField`, 1);
            [this.flyFieldSingle] = this.returnElementsFromDOM(`.${this.style}__tooltip`, 1);
            [this.ribbon] = this.returnElementsFromDOM(`.${this.style}__color-bar`, 1);
        };
        this.writeDoubleDOMtoVariables = () => {
            [this.scale] = this.returnElementsFromDOM(`.${this.style}__scale`, 1);
            [this.lowerSlider, this.upperSlider] = this.returnElementsFromDOM(`.${this.style}__drag`, 2);
            [this.staticFieldLower, this.staticFieldUpper] = this.returnElementsFromDOM(`.${this.style}__staticField`, 2);
            [this.flyFieldLower, this.flyFieldUpper] = this.returnElementsFromDOM(`.${this.style}__tooltip`, 2);
            [this.ribbon] = this.returnElementsFromDOM(`.${this.style}__color-bar`, 1);
        };
        this.writeSingleSliderIndent = () => {
            const elem = this.returnElementsFromDOM(`.${this.style}__drag`, 1);
            this.singleSliderPosition = this.returnIndent(elem[0]);
        };
        this.writeDoubleSliderIndent = () => {
            const elems = this.returnElementsFromDOM(`.${this.style}__drag`, 2);
            this.lowerSliderPosition = this.returnIndent(elems[0]);
            this.upperSliderPosition = this.returnIndent(elems[1]);
        };
        this.returnElementsFromDOM = (className, length) => {
            const DOMElements = this.elem.querySelectorAll(className);
            if ((DOMElements.length === length)) {
                return DOMElements;
            }
            return false;
        };
        this.returnIndent = (element) => {
            if (this.directionType === 'horizontal') {
                return element.offsetLeft;
            }
            if (this.directionType === 'vertical') {
                return element.offsetTop;
            }
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
            if (this.sliderType === 'single') {
                this.sliderWidth = this.singleSlider.offsetWidth;
                this.sliderHeight = this.singleSlider.offsetHeight;
            }
            else if (this.sliderType === 'double') {
                this.sliderWidth = this.lowerSlider.offsetWidth;
                this.sliderHeight = this.lowerSlider.offsetHeight;
            }
            this.calcPixelStep();
        };
        this.calcPixelStep = () => {
            const stepInPixel = (this.mainAxisSize / (this.upperScaleBound - this.lowerScaleBound)) * this.step;
            if (stepInPixel < 1 && stepInPixel !== 0) {
                console.log('Шаг в пикселях меньше 1px, расчеты не производятся. Шаг автоматически будет увеличиваться на 50, пока не будет соответствовать условиям');
                this.step = this.step + 50;
                this.calcPixelStep();
            }
            else {
                this.pixelStep = stepInPixel;
                this.roundedPixelStep = Math.round(stepInPixel);
            }
        };
        this.createListenerOnSlider = () => {
            if (this.sliderType === 'single') {
                this.singleSlider.onmousedown = this.eventOnSlider;
            }
            else if (this.sliderType === 'double') {
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
            if (this.lowerScaleBound <= this.lowerSliderValue && this.upperScaleBound >= this.upperSliderValue) {
                if (this.directionType === 'horizontal') {
                    this.lowerSlider.style.left = `${this.calcMoneyToPosition(this.lowerSliderValue)}px`;
                    this.upperSlider.style.left = `${this.calcMoneyToPosition(this.upperSliderValue)}px`;
                }
                if (this.directionType === 'vertical') {
                    this.lowerSlider.style.top = `${this.calcMoneyToPosition(this.upperSliderValue)}px`;
                    this.upperSlider.style.top = `${this.calcMoneyToPosition(this.lowerSliderValue)}px`;
                }
            }
        };
        this.writeMoneyToFields = () => {
            if (this.sliderType === 'single') {
                this.staticFieldSingle.innerText = `${this.lowerSliderValue}${this.sign}`;
                this.flyFieldSingle.innerText = `${this.lowerSliderValue}${this.sign}`;
            }
            if (this.sliderType === 'double') {
                if (this.directionType === 'horizontal') {
                    this.staticFieldLower.innerText = `${this.lowerSliderValue}${this.sign}`;
                    this.staticFieldUpper.innerText = `${this.upperSliderValue}${this.sign}`;
                    this.flyFieldLower.innerText = `${this.lowerSliderValue}${this.sign}`;
                    this.flyFieldUpper.innerText = `${this.upperSliderValue}${this.sign}`;
                }
                if (this.directionType === 'vertical') {
                    this.staticFieldLower.innerText = `${this.lowerSliderValue}${this.sign}`;
                    this.staticFieldUpper.innerText = `${this.upperSliderValue}${this.sign}`;
                    this.flyFieldLower.innerText = `${this.upperSliderValue}${this.sign}`;
                    this.flyFieldUpper.innerText = `${this.lowerSliderValue}${this.sign}`;
                }
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
                    this.lowerCostRestriction = this.lowerScaleBound;
                    this.upperCostRestriction = this.getCostForSlider(this.upperRestriction);
                }
                if (_e.target === this.upperSlider) {
                    this.targetSlider = this.upperSlider;
                    this.lowerRestriction = this.lowerSliderPosition;
                    this.upperRestriction = this.mainAxisSize;
                    this.lowerCostRestriction = this.getCostForSlider(this.lowerRestriction);
                    this.upperCostRestriction = this.upperScaleBound;
                }
            }
            if (this.directionType === 'vertical') {
                if (_e.target === this.lowerSlider) {
                    this.targetSlider = this.lowerSlider;
                    this.lowerRestriction = 0;
                    this.upperRestriction = this.upperSliderPosition;
                    this.lowerCostRestriction = this.getCostForSlider(this.lowerRestriction);
                    this.upperCostRestriction = this.getCostForSlider(this.upperRestriction);
                }
                if (_e.target === this.upperSlider) {
                    this.targetSlider = this.upperSlider;
                    this.lowerRestriction = this.lowerSliderPosition;
                    this.upperRestriction = this.mainAxisSize;
                    this.lowerCostRestriction = this.getCostForSlider(this.lowerRestriction);
                    this.upperCostRestriction = this.getCostForSlider(this.upperRestriction);
                }
            }
        };
        this.setRestrictionForSingleSlider = () => {
            if (this.directionType === 'horizontal') {
                this.targetSlider = this.singleSlider;
                this.lowerRestriction = 0;
                this.upperRestriction = this.mainAxisSize;
                this.lowerCostRestriction = this.lowerScaleBound;
                this.upperCostRestriction = this.upperScaleBound;
            }
            if (this.directionType === 'vertical') {
                this.targetSlider = this.singleSlider;
                this.lowerRestriction = 0;
                this.upperRestriction = this.mainAxisSize;
                this.lowerCostRestriction = this.upperScaleBound;
                this.upperCostRestriction = this.lowerScaleBound;
            }
        };
        this.getCostForSlider = (sliderPostionInPixel) => {
            if (this.directionType === 'horizontal') {
                if (sliderPostionInPixel <= 0) {
                    return this.lowerScaleBound;
                }
                return (this.lowerScaleBound + (Math.round(sliderPostionInPixel / this.pixelStep) * this.step));
            }
            if (this.directionType === 'vertical') {
                if (sliderPostionInPixel <= 0) {
                    return this.upperScaleBound;
                }
                return ((Math.round((this.mainAxisSize - sliderPostionInPixel) / this.pixelStep) * this.step) + this.lowerScaleBound);
            }
        };
        this.moveEventWithHoldMouse = (_e) => {
            const innerMousePosition = this.getMousePosition(_e);
            const nearestRoundedStep = this.calcNearestStep(innerMousePosition);
            const finalPositionInPixel = this.calcFinalPosition(nearestRoundedStep);
            const finalCost = this.calcFinalCost(nearestRoundedStep);
            this.moveSlider(finalPositionInPixel);
            this.showMoneyOnScreen(finalCost);
            this.writeMoneyToVariables(finalCost);
            this.setOverlay();
            this.moveRibbon();
            this.moveTooltip();
        };
        this.getMousePosition = (_e) => {
            this.clientRect = this.scale.getBoundingClientRect();
            if (this.directionType === 'horizontal') {
                this.indent = this.clientRect.left;
                return (_e.clientX - this.indent - (this.sliderWidth / 2));
            }
            if (this.directionType === 'vertical') {
                this.indent = this.clientRect.top;
                return (_e.clientY - this.indent - (this.sliderHeight / 2));
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
                    return (this.mainAxisSize - positionInPixel);
                }
                if ((this.mainAxisSize - positionInPixel) <= this.lowerRestriction) {
                    return this.lowerRestriction;
                }
                if ((this.mainAxisSize - positionInPixel) >= this.upperRestriction) {
                    return this.upperRestriction;
                }
            }
        };
        this.calcFinalCost = (_nearestRoundedStep) => {
            if (this.directionType === 'horizontal') {
                const positionInMoney = this.lowerScaleBound + (_nearestRoundedStep * this.step);
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
                const positionInMoney = (_nearestRoundedStep * this.step) + this.lowerScaleBound;
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
            if (this.directionType === 'horizontal') {
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
            }
            if (this.directionType === 'vertical') {
                if (this.targetSlider === this.lowerSlider) {
                    this.staticFieldUpper.textContent = `${cost}`;
                    this.flyFieldLower.textContent = `${cost}`;
                }
                if (this.targetSlider === this.upperSlider) {
                    this.staticFieldLower.textContent = `${cost}`;
                    this.flyFieldUpper.textContent = `${cost}`;
                }
                if (this.targetSlider === this.singleSlider) {
                    this.staticFieldSingle.textContent = `${cost}`;
                    this.flyFieldSingle.textContent = `${cost}`;
                }
            }
        };
        this.writeMoneyToVariables = (finalCost) => {
            if (this.targetSlider === this.lowerSlider) {
                this.lowerSliderValue = finalCost;
            }
            if (this.targetSlider === this.upperSlider) {
                this.upperSliderValue = finalCost;
            }
            if (this.targetSlider === this.singleSlider) {
                this.lowerSliderValue = finalCost;
            }
        };
        this.moveRibbon = () => {
            const setHorizontalRibbonVariables = () => {
                if (this.sliderInDOM.length === 1) {
                    this.ribbon.style.left = '0px';
                    this.ribbon.style.width = `${this.singleSlider.offsetLeft + (this.sliderWidth / 2)}px`;
                }
                else if (this.sliderInDOM.length === 2) {
                    this.ribbon.style.left = `${this.lowerSlider.offsetLeft + (this.sliderWidth / 2)}px`;
                    this.ribbon.style.width = `${this.upperSlider.offsetLeft - this.lowerSlider.offsetLeft}px`;
                }
            };
            const setVerticalRibbonVariables = () => {
                if (this.sliderInDOM.length === 1) {
                    this.ribbon.style.top = `${this.singleSlider.offsetTop + (this.sliderHeight / 2)}px`;
                    this.ribbon.style.height = `${this.mainAxisSize - this.singleSlider.offsetTop + (this.sliderHeight / 2)}px`;
                }
                else if (this.sliderInDOM.length === 2) {
                    this.ribbon.style.top = `${this.lowerSlider.offsetTop + (this.sliderHeight / 2)}px`;
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
            const move = (direction, offset, sliderSize) => {
                if (this.sliderType === 'single') {
                    this.elem.querySelectorAll(`.${this.style}__tooltip`)[0].style[direction] = `${this.singleSlider[offset] - sliderSize}px`;
                }
                if (this.sliderType === 'double') {
                    this.elem.querySelectorAll(`.${this.style}__tooltip`)[0].style[direction] = `${this.lowerSlider[offset] - sliderSize}px`;
                    this.elem.querySelectorAll(`.${this.style}__tooltip`)[1].style[direction] = `${this.upperSlider[offset] - sliderSize}px`;
                }
            };
            if (this.directionType === 'horizontal') {
                move('left', 'offsetLeft', (this.sliderWidth / 3));
            }
            if (this.directionType === 'vertical') {
                move('top', 'offsetTop', 0);
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
        let position;
        if (this.directionType === 'horizontal') {
            position = ((money - this.lowerScaleBound) / this.step) * this.pixelStep;
        }
        if (this.directionType === 'vertical') {
            position = this.mainAxisSize - (((money - this.lowerScaleBound) / this.step) * this.pixelStep);
        }
        return position;
    }
}



/***/ }),

/***/ "./src/ts/controlPanel.ts":
/*!********************************!*\
  !*** ./src/ts/controlPanel.ts ***!
  \********************************/
/*! exports provided: ControlPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlPanel", function() { return ControlPanel; });
class ControlPanel {
    constructor() {
        this.orValues = {
            sign: {
                title: 'Sign',
                description: 'Валюта',
                elementName: 'sign',
                value: ['₽', '$'],
                nameOfVariable: 'sign',
            },
            sliderType: {
                title: 'Type',
                description: 'Тип слайдера - одинарный или двойной',
                elementName: 'sliderType',
                value: ['double', 'single'],
                nameOfVariable: 'sliderType',
            },
            directionType: {
                title: 'Type',
                description: 'Тип слайдера - вертикальный или горизонтальный',
                elementName: 'directionType',
                value: ['horizontal', 'vertical'],
                nameOfVariable: 'directionType',
            },
            styleType: {
                title: 'Style',
                description: 'Тип стиля - можно выбрать стиль CSS для горизонтального или вертикального вида',
                elementName: 'style',
                value: ['issHorizontal', 'issVertical'],
                nameOfVariable: 'style',
            },
        };
        this.numeralValues = {
            step: {
                title: 'Step',
                description: 'Шаг ползунка',
                elementName: 'step',
                type: 'number',
                nameOfVariable: 'step',
            },
            lowerScaleBound: {
                title: 'Min_slider',
                description: 'Минимальное значение шкалы слайдера',
                elementName: 'lowerScaleBound',
                type: 'number',
                nameOfVariable: 'lowerScaleBound',
            },
            upperScaleBound: {
                title: 'Max_slider',
                description: 'Максимальное значение шкалы слайдера',
                elementName: 'upperScaleBound',
                type: 'number',
                nameOfVariable: 'upperScaleBound',
            },
            lowerSliderValue: {
                title: 'Min_slider',
                description: 'Начальное значение шкалы слайдера - для первого или одиночного ползунка',
                elementName: 'lowerSliderValue',
                type: 'number',
                nameOfVariable: 'lowerSliderValue',
            },
            upperSliderValue: {
                title: 'Max_slider',
                description: 'Начальное значение шкалы слайдера - для второго ползунка',
                elementName: 'upperSliderValue',
                type: 'number',
                nameOfVariable: 'upperSliderValue',
            },
        };
        this.settings = {
            elementId: 'iss',
            sign: '₽',
            lowerScaleBound: 0,
            upperScaleBound: 1000,
            lowerSliderValue: 200,
            upperSliderValue: 800,
            sliderType: 'double',
            directionType: 'horizontal',
            step: 5,
            idForControlPanel: 'doc_panel',
            style: 'iss',
        };
        this.bindController = (controller) => {
            this.controller = controller;
        };
        this.setSettings = (setFromController) => {
            this.settings = {
                elementId: setFromController.elementId,
                sign: setFromController.sign,
                lowerScaleBound: setFromController.lowerScaleBound,
                upperScaleBound: setFromController.upperScaleBound,
                lowerSliderValue: setFromController.lowerSliderValue,
                upperSliderValue: setFromController.upperSliderValue,
                sliderType: setFromController.sliderType,
                directionType: setFromController.directionType,
                step: setFromController.step,
                idForControlPanel: setFromController.idForControlPanel,
                style: setFromController.style,
            };
        };
        this.bindModel = (model) => {
            this.model = model;
        };
        this.getControlPanel = () => {
            const controlPanel = document.getElementById(this.settings.idForControlPanel);
            return controlPanel;
        };
        this.setIdForSelect = (select, obj) => {
            select.id = obj.elementName;
        };
        this.appendChild = (parent, child) => {
            parent.appendChild(child);
        };
        this.createTitle = (obj) => {
            const title = obj.description;
            const div = document.createElement('div');
            const textNodeTitle = document.createTextNode(title);
            div.appendChild(textNodeTitle);
            return div;
        };
        this.returnKeys = (obj) => {
            const arr = Object.keys(obj);
            return arr;
        };
        this.createInput = (selectOrDiv, value) => {
            const input = document.createElement('input');
            input.type = 'number';
            input.value = String(value);
            this.appendChild(selectOrDiv, input);
        };
        this.createChangableOptions = (arr, parentElement) => {
            arr.forEach((changableValue) => {
                const option = document.createElement('option');
                option.value = changableValue;
                const text = document.createTextNode(changableValue);
                this.appendChild(option, text);
                this.appendChild(parentElement, option);
            });
        };
        this.createListenerOrOr = (elementForListener, keyOfSetting) => {
            const changeListener = () => {
                this.settings[keyOfSetting] = elementForListener.value;
                this.sliderRefresh();
            };
            elementForListener.addEventListener('change', changeListener);
        };
        this.createListenerNumeral = (elementForListener, keyOfSetting) => {
            const inputListener = () => {
                this.settings[keyOfSetting] = Number(elementForListener.getElementsByTagName('input')[0].valueAsNumber);
                this.sliderRefresh();
            };
            elementForListener.addEventListener('input', inputListener);
        };
        this.createPanel = (objectForConstructionPanel, type, controlPanel) => {
            const keys = this.returnKeys(objectForConstructionPanel);
            keys.forEach((key) => {
                const currentObj = objectForConstructionPanel[key];
                let selectOrDiv;
                if (type === 'numeral') {
                    selectOrDiv = document.createElement('div');
                }
                if (type === 'select') {
                    selectOrDiv = document.createElement('select');
                }
                this.setIdForSelect(selectOrDiv, currentObj);
                const createTitle = this.createTitle(currentObj);
                this.appendChild(selectOrDiv, createTitle);
                if (type === 'numeral') {
                    this.createInput(selectOrDiv, this.settings[currentObj.nameOfVariable]);
                }
                if (type === 'select') {
                    this.createChangableOptions(currentObj.value, selectOrDiv);
                }
                this.appendChild(controlPanel, selectOrDiv);
            });
            keys.forEach((key) => {
                const currentObj = objectForConstructionPanel[key];
                const keyOfSetting = currentObj.nameOfVariable;
                if (type === 'numeral') {
                    const eventElement = controlPanel.querySelector(`#${currentObj.elementName}`);
                    this.createListenerNumeral(eventElement, keyOfSetting);
                }
                if (type === 'select') {
                    const eventElement = controlPanel.querySelector(`#${currentObj.elementName}`);
                    this.createListenerOrOr(eventElement, keyOfSetting);
                }
            });
        };
        this.sliderRefresh = () => {
            const objForController = {
                sliderType: this.settings.sliderType,
                directionType: this.settings.directionType,
                step: this.settings.step,
                style: this.settings.style,
            };
            this.controller.setControllerFromControlPanel(objForController);
            const objForModel = {
                sign: this.settings.sign,
                lowerScaleBound: this.settings.lowerScaleBound,
                upperScaleBound: this.settings.upperScaleBound,
                lowerSliderValue: this.settings.lowerSliderValue,
                upperSliderValue: this.settings.upperSliderValue,
            };
            this.model.setInitialModelOptions(objForModel);
            this.controller.createSlider();
        };
        this.buildPanel = () => {
            const controlPanel = this.getControlPanel();
            this.createPanel(this.orValues, 'select', controlPanel);
            this.createPanel(this.numeralValues, 'numeral', controlPanel);
        };
    }
}



/***/ }),

/***/ "./src/ts/controller.ts":
/*!******************************!*\
  !*** ./src/ts/controller.ts ***!
  \******************************/
/*! exports provided: Controller */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Controller", function() { return Controller; });
class Controller {
    constructor(settings) {
        this.setControllerFromControlPanel = (obj) => {
            this.step = obj.step;
            this.sliderType = obj.sliderType;
            this.directionType = obj.directionType;
            this.style = obj.style;
        };
        this.elementId = settings.elementId;
        this.sliderType = settings.sliderType || 'single';
        this.directionType = settings.directionType || 'horizontal';
        this.step = settings.step || 2;
        this.idForControlPanel = settings.idForControlPanel || '';
        this.style = settings.style || 'iss';
    }
    createSlider() {
        this.setController();
        this.setAndRunView();
    }
    setController() {
        const objFromModel = this.getModel();
        this.lowerSliderValue = objFromModel.lowerSliderValue;
        this.upperSliderValue = objFromModel.upperSliderValue;
        this.lowerScaleBound = objFromModel.lowerScaleBound;
        this.upperScaleBound = objFromModel.upperScaleBound;
        this.sign = objFromModel.sign;
    }
    getModel() {
        return this.model.getModel();
    }
    setAndRunView() {
        const obj = {
            elementId: this.elementId,
            sign: this.sign,
            lowerScaleBound: this.lowerScaleBound,
            upperScaleBound: this.upperScaleBound,
            lowerSliderValue: this.lowerSliderValue,
            upperSliderValue: this.upperSliderValue,
            sliderType: this.sliderType,
            directionType: this.directionType,
            step: this.step,
            style: this.style,
        };
        this.view.setStartingConditions(obj);
        this.view.init();
    }
    bindModel(model) {
        this.model = model;
    }
    setModel() {
        this.model.setModel({
            lowerSliderValue: this.lowerSliderValue,
            upperSliderValue: this.upperSliderValue,
        });
    }
    bindView(view) {
        this.view = view;
    }
    getView(obj) {
        if (this.sliderType === 'double') {
            this.lowerSliderValue = obj.lowerSliderValue;
            this.upperSliderValue = obj.upperSliderValue;
        }
        if (this.sliderType === 'single') {
            this.lowerSliderValue = obj.lowerSliderValue;
        }
        this.setModel();
    }
    getController() {
        return {
            elementId: this.elementId,
            sign: this.sign,
            lowerScaleBound: this.lowerScaleBound,
            upperScaleBound: this.upperScaleBound,
            lowerSliderValue: this.lowerSliderValue,
            upperSliderValue: this.upperSliderValue,
            sliderType: this.sliderType,
            step: this.step,
        };
    }
    bindControlPanel(cntrlPnl) {
        this.controlPanel = cntrlPnl;
    }
}



/***/ }),

/***/ "./src/ts/index.ts":
/*!*************************!*\
  !*** ./src/ts/index.ts ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles.scss */ "./src/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ISSlider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ISSlider */ "./src/ts/ISSlider.ts");


const settingsForHorizontalDuble = {
    idForControlPanel: 'doc_panel',
    elementId: 'iss',
    sign: '$',
    lowerScaleBound: 100,
    upperScaleBound: 1500,
    lowerSliderValue: 200,
    upperSliderValue: 800,
    sliderType: 'double',
    directionType: 'horizontal',
    step: 10,
    style: 'issHorizontal',
};
Object(_ISSlider__WEBPACK_IMPORTED_MODULE_1__["ISSlider"])(settingsForHorizontalDuble);
const settingsForHorizontalSingle = {
    idForControlPanel: 'doc_panel_2',
    elementId: 'iss_2',
    sign: '$',
    lowerScaleBound: 100,
    upperScaleBound: 1500,
    lowerSliderValue: 200,
    upperSliderValue: 800,
    sliderType: 'single',
    directionType: 'horizontal',
    step: 10,
    style: 'issHorizontal',
};
Object(_ISSlider__WEBPACK_IMPORTED_MODULE_1__["ISSlider"])(settingsForHorizontalSingle);
const settingsForVerticalDouble = {
    idForControlPanel: 'doc_panel_3',
    elementId: 'iss_3',
    sign: '$',
    lowerScaleBound: 100,
    upperScaleBound: 1500,
    lowerSliderValue: 200,
    upperSliderValue: 800,
    sliderType: 'double',
    directionType: 'vertical',
    step: 10,
    style: 'issVertical',
};
Object(_ISSlider__WEBPACK_IMPORTED_MODULE_1__["ISSlider"])(settingsForVerticalDouble);
const settingsForVerticalSingle = {
    idForControlPanel: 'doc_panel_4',
    elementId: 'iss_4',
    sign: '$',
    lowerScaleBound: 100,
    upperScaleBound: 1500,
    lowerSliderValue: 200,
    upperSliderValue: 800,
    sliderType: 'single',
    directionType: 'vertical',
    step: 10,
    style: 'issVertical',
};
Object(_ISSlider__WEBPACK_IMPORTED_MODULE_1__["ISSlider"])(settingsForVerticalSingle);


/***/ }),

/***/ "./src/ts/model.ts":
/*!*************************!*\
  !*** ./src/ts/model.ts ***!
  \*************************/
/*! exports provided: Model */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Model", function() { return Model; });
class Model {
    constructor(param) {
        this.setInitialModelOptions = (param) => {
            this.lowerScaleBound = param.lowerScaleBound;
            this.upperScaleBound = param.upperScaleBound;
            this.lowerSliderValue = param.lowerSliderValue;
            this.upperSliderValue = param.upperSliderValue;
            this.sign = param.sign;
        };
        this.lowerScaleBound = param.lowerScaleBound || 0;
        this.upperScaleBound = param.upperScaleBound || 1000;
        this.lowerSliderValue = param.lowerSliderValue || 200;
        this.upperSliderValue = param.upperSliderValue || 800;
        this.sign = param.sign || '?';
    }
    setModel(obj) {
        this.lowerSliderValue = obj.lowerSliderValue;
        this.upperSliderValue = obj.upperSliderValue;
    }
    getModel() {
        return {
            lowerScaleBound: this.lowerScaleBound,
            upperScaleBound: this.upperScaleBound,
            lowerSliderValue: this.lowerSliderValue,
            upperSliderValue: this.upperSliderValue,
            sign: this.sign,
        };
    }
}



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy5zY3NzPzAyOWEiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL0lTU2xpZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9WaWV3LnRzIiwid2VicGFjazovLy8uL3NyYy90cy9jb250cm9sUGFuZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2NvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy90cy9tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEsdUM7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFnQztBQUNVO0FBQ1o7QUFDZ0I7QUFnQjlDLFNBQVMsUUFBUSxDQUFDLEtB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QUssQ0FBQyxlQUFlLElBQUksQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDLGVBQWUsSUFBSSxJQUFJLENBQUM7UUFDckQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQyxnQkFBZ0IsSUFBSSxHQUFHLENBQUM7UUFDdEQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQyxnQkFBZ0IsSUFBSSxHQUFHLENBQUM7UUFDdEQsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxJQUFJLEdBQUcsQ0FBQztJQUNoQyxDQUFDO0lBRUQsUUFBUSxDQUFDLEdBQWdCO1FBQ3ZCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxHQUFHLENBQUMsZ0JBQWdCLENBQUM7UUFDN0MsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQztJQUMvQyxDQUFDO0lBVUQsUUFBUTtRQUNOLE9BQU87WUFDTCxlQUFlLEVBQUUsSUFBSSxDQUFDLGVBQWU7WUFDckMsZUFBZSxFQUFFLElBQUksQ0FBQyxlQUFlO1lBQ3JDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxnQkFBZ0I7WUFDdkMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLGdCQUFnQjtZQUN2QyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7U0FDaEIsQ0FBQztJQUNKLENBQUM7Q0FDRjtBQUVnQiIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy90cy9pbmRleC50c1wiKTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCB7IE1vZGVsIH0gZnJvbSAnLi9tb2RlbCc7XG5pbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnLi9jb250cm9sbGVyJztcbmltcG9ydCB7IFZpZXcgfSBmcm9tICcuL1ZpZXcnO1xuaW1wb3J0IHsgQ29udHJvbFBhbmVsIH0gZnJvbSAnLi9jb250cm9sUGFuZWwnO1xuXG5pbnRlcmZhY2UgUGFyYW0ge1xuICBpZEZvckNvbnRyb2xQYW5lbD86IHN0cmluZztcbiAgZWxlbWVudElkPzogc3RyaW5nO1xuICBzaWduOiBzdHJpbmc7XG4gIGxvd2VyU2NhbGVCb3VuZD86IG51bWJlcjtcbiAgdXBwZXJTY2FsZUJvdW5kPzogbnVtYmVyO1xuICBsb3dlclNsaWRlclZhbHVlPzogbnVtYmVyO1xuICB1cHBlclNsaWRlclZhbHVlPzogbnVtYmVyO1xuICBzbGlkZXJUeXBlPzogc3RyaW5nO1xuICBkaXJlY3Rpb25UeXBlPzogc3RyaW5nO1xuICBzdGVwPzogbnVtYmVyO1xuICBzdHlsZT86IHN0cmluZztcbn1cblxuZnVuY3Rpb24gSVNTbGlkZXIocGFyYW06IFBhcmFtKSB7XG5cbiAgY29uc3Qgc2V0dGluZ3M6IGFueSA9IHtcbiAgICBpZEZvckNvbnRyb2xQYW5lbDogcGFyYW0uaWRGb3JDb250cm9sUGFuZWwgfHwgJ2RvY19wYW5lbCcsXG4gICAgZWxlbWVudElkOiBwYXJhbS5lbGVtZW50SWQgfHwgJ2lzcycsXG4gICAgc2lnbjogcGFyYW0uc2lnbiB8fCAn4oK9JyxcbiAgICBsb3dlclNjYWxlQm91bmQ6IHBhcmFtLmxvd2VyU2NhbGVCb3VuZCB8fCAwLFxuICAgIHVwcGVyU2NhbGVCb3VuZDogcGFyYW0udXBwZXJTY2FsZUJvdW5kIHx8IDEwMDAsXG4gICAgbG93ZXJTbGlkZXJWYWx1ZTogcGFyYW0ubG93ZXJTbGlkZXJWYWx1ZSB8fCAyMDAsXG4gICAgdXBwZXJTbGlkZXJWYWx1ZTogcGFyYW0udXBwZXJTbGlkZXJWYWx1ZSB8fCA4MDAsXG4gICAgc2xpZGVyVHlwZTogcGFyYW0uc2xpZGVyVHlwZSB8fCAnZG91YmxlJyxcbiAgICBkaXJlY3Rpb25UeXBlOiBwYXJhbS5kaXJlY3Rpb25UeXBlIHx8ICdob3Jpem9udGFsJyxcbiAgICBzdGVwOiBwYXJhbS5zdGVwIHx8IDUwLFxuICAgIHN0eWxlOiBwYXJhbS5zdHlsZSB8fCAnaXNzJyxcbiAgfTtcblxuICAvLyDQn9Ce0KHQotCg0J7QldCd0JjQlSDQodCb0JDQmdCU0JXQoNCQINCf0KDQmCDQn9CV0KDQktCe0Jwg0JfQkNCf0KPQodCa0JVcbiAgY29uc3QgbW9kZWwgPSBuZXcgTW9kZWwoc2V0dGluZ3MpO1xuICBjb25zdCBjb250cm9sbGVyID0gbmV3IENvbnRyb2xsZXIoc2V0dGluZ3MpO1xuICBjb25zdCB2aWV3ID0gbmV3IFZpZXcoKTtcbiAgY29uc3QgY29udHJvbFBhbmVsID0gbmV3IENvbnRyb2xQYW5lbCgpO1xuXG4gIGNvbnRyb2xsZXIuYmluZE1vZGVsKG1vZGVsKTtcbiAgY29udHJvbGxlci5iaW5kVmlldyh2aWV3KTtcbiAgY29udHJvbGxlci5iaW5kQ29udHJvbFBhbmVsKGNvbnRyb2xQYW5lbCk7XG5cbiAgdmlldy5iaW5kQ29udHJvbGxlcihjb250cm9sbGVyKTtcbiAgY29udHJvbFBhbmVsLmJpbmRDb250cm9sbGVyKGNvbnRyb2xsZXIpO1xuICBjb250cm9sUGFuZWwuYmluZE1vZGVsKG1vZGVsKTtcbiAgY29udHJvbFBhbmVsLnNldFNldHRpbmdzKHNldHRpbmdzKTtcblxuICBjb250cm9sbGVyLmNyZWF0ZVNsaWRlcigpO1xuXG4gIGNvbnRyb2xQYW5lbC5idWlsZFBhbmVsKCk7XG59XG5cbmV4cG9ydCB7IElTU2xpZGVyIH07XG4iLCJpbnRlcmZhY2UgVmlld1N0YXJ0aW5nQ29uZGl0aW9ucyB7XG4gIGVsZW1lbnRJZD86IHN0cmluZztcbiAgZWxlbT86IGFueTtcbiAgc2lnbj86IHN0cmluZztcbiAgbG93ZXJTY2FsZUJvdW5kPzogbnVtYmVyO1xuICB1cHBlclNjYWxlQm91bmQ/OiBudW1iZXI7XG4gIGxvd2VyU2xpZGVyVmFsdWU/OiBudW1iZXI7XG4gIHVwcGVyU2xpZGVyVmFsdWU/OiBudW1iZXI7XG4gIHNsaWRlclR5cGU/OiBzdHJpbmc7XG4gIGRpcmVjdGlvblR5cGU/OiBzdHJpbmc7XG4gIHN0ZXA/OiBudW1iZXI7XG4gIGNvbnRyb2xsZXI/OiBhbnk7XG4gIHN0eWxlPzogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgVmlldyB7XG4gIGVsZW1lbnRJZDogc3RyaW5nO1xuICBlbGVtOiBhbnk7XG4gIHNpZ246IHN0cmluZztcbiAgbG93ZXJTY2FsZUJvdW5kOiBudW1iZXI7XG4gIHVwcGVyU2NhbGVCb3VuZDogbnVtYmVyO1xuICBsb3dlclNsaWRlclZhbHVlOiBudW1iZXI7XG4gIHVwcGVyU2xpZGVyVmFsdWU6IG51bWJlcjtcbiAgc2xpZGVyVHlwZTogc3RyaW5nO1xuICBkaXJlY3Rpb25UeXBlOiBzdHJpbmc7XG4gIHN0ZXA6IG51bWJlcjtcbiAgY29udHJvbGxlcjogYW55O1xuICBzdHlsZTogc3RyaW5nO1xuXG4gIHNjYWxlOiBIVE1MRWxlbWVudDtcbiAgaW5kZW50OiBudW1iZXI7XG4gIG1haW5BeGlzU2l6ZTogbnVtYmVyO1xuXG4gIHNsaWRlckluRE9NOiBbSFRNTEVsZW1lbnRdO1xuXG4gIHN0YXRpY0ZpZWxkTG93ZXI6IEhUTUxFbGVtZW50O1xuICBzdGF0aWNGaWVsZFVwcGVyOiBIVE1MRWxlbWVudDtcbiAgc3RhdGljRmllbGRTaW5nbGU6IEhUTUxFbGVtZW50O1xuXG4gIGZseUZpZWxkTG93ZXI6IEhUTUxFbGVtZW50O1xuICBmbHlGaWVsZFVwcGVyOiBIVE1MRWxlbWVudDtcbiAgZmx5RmllbGRTaW5nbGU6IEhUTUxFbGVtZW50O1xuXG4gIGxvd2VyU2xpZGVyOiBIVE1MRWxlbWVudDtcbiAgbG93ZXJTbGlkZXJQb3NpdGlvbjogbnVtYmVyO1xuXG4gIHVwcGVyU2xpZGVyOiBIVE1MRWxlbWVudDtcbiAgdXBwZXJTbGlkZXJQb3NpdGlvbjogbnVtYmVyO1xuXG4gIHNpbmdsZVNsaWRlcjogSFRNTEVsZW1lbnQ7XG4gIHNpbmdsZVNsaWRlclBvc2l0aW9uOiBudW1iZXI7XG5cbiAgc2xpZGVyV2lkdGg6IG51bWJlcjtcbiAgc2xpZGVySGVpZ2h0OiBudW1iZXI7XG5cbiAgcmliYm9uOiBIVE1MRWxlbWVudDtcblxuICBjbGllbnRSZWN0OiBDbGllbnRSZWN0O1xuXG4gIGlubmVyTW91c2VQb3NpdGlvbjogbnVtYmVyO1xuXG4gIHBpeGVsU3RlcDogbnVtYmVyO1xuICByb3VuZGVkUGl4ZWxTdGVwOiBudW1iZXI7XG5cbiAgdGFyZ2V0U2xpZGVyOiBIVE1MRWxlbWVudDtcblxuICBsb3dlclJlc3RyaWN0aW9uOiBudW1iZXI7XG4gIHVwcGVyUmVzdHJpY3Rpb246IG51bWJlcjtcblxuICBsb3dlckNvc3RSZXN0cmljdGlvbjogbnVtYmVyO1xuICB1cHBlckNvc3RSZXN0cmljdGlvbjogbnVtYmVyO1xufVxuXG5jbGFzcyBWaWV3IHtcbiAgYmluZENvbnRyb2xsZXIgPSAoY29udHJvbGxlcjogYW55KSA9PiB7XG4gICAgdGhpcy5jb250cm9sbGVyID0gY29udHJvbGxlcjtcbiAgfVxuXG4gIHNldENvbnRyb2xsZXIoKSB7XG4gICAgY29uc3Qgb2JqID0ge1xuICAgICAgbG93ZXJTbGlkZXJWYWx1ZTogdGhpcy5sb3dlclNsaWRlclZhbHVlLFxuICAgICAgdXBwZXJTbGlkZXJWYWx1ZTogdGhpcy51cHBlclNsaWRlclZhbHVlLFxuICAgIH07XG4gICAgdGhpcy5jb250cm9sbGVyLmdldFZpZXcob2JqKTtcbiAgfVxuXG4gIHNldFN0YXJ0aW5nQ29uZGl0aW9ucyA9IChvYmo6IFZpZXdTdGFydGluZ0NvbmRpdGlvbnMpID0+IHtcbiAgICB0aGlzLmVsZW1lbnRJZCA9IGAjJHtvYmouZWxlbWVudElkfWAgfHwgJyNpc3MnO1xuICAgIHRoaXMuZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG9iai5lbGVtZW50SWQpO1xuXG4gICAgdGhpcy5zaWduID0gb2JqLnNpZ24gfHwgJ1InO1xuICAgIHRoaXMubG93ZXJTY2FsZUJvdW5kID0gTnVtYmVyKG9iai5sb3dlclNjYWxlQm91bmQpIHx8IDA7XG4gICAgdGhpcy51cHBlclNjYWxlQm91bmQgPSBOdW1iZXIob2JqLnVwcGVyU2NhbGVCb3VuZCkgfHwgMTAwMDtcbiAgICB0aGlzLmxvd2VyU2xpZGVyVmFsdWUgPSBOdW1iZXIob2JqLmxvd2VyU2xpZGVyVmFsdWUpIHx8IDIwMDtcbiAgICB0aGlzLnVwcGVyU2xpZGVyVmFsdWUgPSBOdW1iZXIob2JqLnVwcGVyU2xpZGVyVmFsdWUpIHx8IDgwMDtcblxuICAgIHRoaXMuc2xpZGVyVHlwZSA9IG9iai5zbGlkZXJUeXBlIHx8ICdzaW5nbGUnO1xuICAgIHRoaXMuZGlyZWN0aW9uVHlwZSA9IG9iai5kaXJlY3Rpb25UeXBlIHx8ICdob3Jpem9udGFsJztcbiAgICB0aGlzLnN0ZXAgPSBvYmouc3RlcCB8fCAyO1xuXG4gICAgdGhpcy5zdHlsZSA9IG9iai5zdHlsZSB8fCAnaXNzJztcbiAgfVxuXG4gIGdldFN0YXJ0aW5nQ29uZGl0aW9ucyA9ICgpID0+ICh7XG4gICAgZWxlbWVudElkOiB0aGlzLmVsZW1lbnRJZCxcbiAgICBzaWduOiB0aGlzLnNpZ24sXG4gICAgbG93ZXJTY2FsZUJvdW5kOiB0aGlzLmxvd2VyU2NhbGVCb3VuZCxcbiAgICB1cHBlclNjYWxlQm91bmQ6IHRoaXMudXBwZXJTY2FsZUJvdW5kLFxuICAgIGxvd2VyU2xpZGVyVmFsdWU6IHRoaXMubG93ZXJTbGlkZXJWYWx1ZSxcbiAgICB1cHBlclNsaWRlclZhbHVlOiB0aGlzLnVwcGVyU2xpZGVyVmFsdWUsXG4gICAgc2xpZGVyVHlwZTogdGhpcy5zbGlkZXJUeXBlLFxuICAgIHN0ZXA6IHRoaXMuc3RlcCxcbiAgfSk7XG5cbiAgaW5pdCA9ICgpID0+IHtcbiAgICB0aGlzLmNyZWF0ZURPTSgpO1xuICAgIHRoaXMud3JpdGVET00oKTtcbiAgICB0aGlzLndyaXRlR2VvbWV0cnlET010b1ZhcmlhYmxlcygpO1xuICAgIHRoaXMuY3JlYXRlTGlzdGVuZXJPblNsaWRlcigpO1xuICAgIHRoaXMubW92ZXNTbGlkZXJzVG9TdGFydFBvc2l0aW9ucygpO1xuICAgIHRoaXMud3JpdGVNb25leVRvRmllbGRzKCk7XG4gICAgdGhpcy5tb3ZlVG9vbHRpcCgpO1xuICB9XG5cbiAgY3JlYXRlRE9NID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLnNsaWRlclR5cGUgPT09ICdkb3VibGUnKSB7XG4gICAgICB0aGlzLmNyZWF0ZURvdWJsZURPTSgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5zbGlkZXJUeXBlID09PSAnc2luZ2xlJykge1xuICAgICAgdGhpcy5jcmVhdGVTaW5nbGVET00oKTtcbiAgICB9XG4gIH1cblxuICBjcmVhdGVTaW5nbGVET00gPSAoKSA9PiB7XG4gICAgdGhpcy5lbGVtLmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwiJHt0aGlzLnN0eWxlfV9fdmFsdWUtZmllbGRcIj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiJHt0aGlzLnN0eWxlfV9fc3RhdGljRmllbGRcIj48L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9IFwiJHt0aGlzLnN0eWxlfV9fY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzPSBcIiR7dGhpcy5zdHlsZX1fX3NjYWxlXCI+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiJHt0aGlzLnN0eWxlfV9fY29sb3ItYmFyXCI+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiJHt0aGlzLnN0eWxlfV9fc2luZ2xlLWZseSAke3RoaXMuc3R5bGV9X190b29sdGlwXCI+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiJHt0aGlzLnN0eWxlfV9fc2luZ2xlICR7dGhpcy5zdHlsZX1fX2RyYWdcIj48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCIke3RoaXMuc3R5bGV9X192aXNpYmxlLXNjYWxlXCI+PC9kaXY+XG4gICAgICA8L2Rpdj5gO1xuICB9XG5cbiAgY3JlYXRlRG91YmxlRE9NID0gKCkgPT4ge1xuICAgIHRoaXMuZWxlbS5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cIiR7dGhpcy5zdHlsZX1fX3ZhbHVlLWZpZWxkXCI+XG4gICAgICA8c3BhbiBjbGFzcz1cIiR7dGhpcy5zdHlsZX1fX3N0YXRpY0ZpZWxkXCI+PC9zcGFuPlxuICAgICAgLVxuICAgICAgPHNwYW4gY2xhc3M9XCIke3RoaXMuc3R5bGV9X19zdGF0aWNGaWVsZFwiPjwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz0gXCIke3RoaXMuc3R5bGV9X19jb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9IFwiJHt0aGlzLnN0eWxlfV9fc2NhbGVcIj48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCIke3RoaXMuc3R5bGV9X19kb3VibGUtZmx5LWZpcnN0ICR7dGhpcy5zdHlsZX1fX3Rvb2x0aXBcIj48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCIke3RoaXMuc3R5bGV9X19kb3VibGUtZmlyc3Qtc2xpZGVyICR7dGhpcy5zdHlsZX1fX2RyYWdcIj48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCIke3RoaXMuc3R5bGV9X19kb3VibGUtZmx5LXNlY29uZCAke3RoaXMuc3R5bGV9X190b29sdGlwXCI+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiJHt0aGlzLnN0eWxlfV9fZG91YmxlLXNlY29uZC1zbGlkZXIgJHt0aGlzLnN0eWxlfV9fZHJhZ1wiPjwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cIiR7dGhpcy5zdHlsZX1fX2NvbG9yLWJhclwiPjwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cIiR7dGhpcy5zdHlsZX1fX3Zpc2libGUtc2NhbGVcIj48L2Rpdj5cbiAgICAgIDwvZGl2PmA7XG4gIH1cblxuICB3cml0ZURPTSA9ICgpID0+IHtcbiAgICB0aGlzLmNoZWNrRWxlbWVudHNJbkRPTSgpO1xuICAgIGlmICh0aGlzLnNsaWRlclR5cGUgPT09ICdzaW5nbGUnKSB7XG4gICAgICB0aGlzLndyaXRlU2luZ2xlRE9NdG9WYXJpYWJsZXMoKTtcbiAgICAgIHRoaXMud3JpdGVTaW5nbGVTbGlkZXJJbmRlbnQoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2xpZGVyVHlwZSA9PT0gJ2RvdWJsZScpIHtcbiAgICAgIHRoaXMud3JpdGVEb3VibGVET010b1ZhcmlhYmxlcygpO1xuICAgICAgdGhpcy53cml0ZURvdWJsZVNsaWRlckluZGVudCgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY2hlY2tFbGVtZW50c0luRE9NID0gKCkgPT4ge1xuICAgIGNvbnN0IERPTUVsZW1lbnRzID0gdGhpcy5lbGVtLnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke3RoaXMuc3R5bGV9X19kcmFnYCk7XG4gICAgaWYgKChET01FbGVtZW50cy5sZW5ndGggPiAwKSkge1xuICAgICAgdGhpcy5zbGlkZXJJbkRPTSA9IERPTUVsZW1lbnRzO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgd3JpdGVTaW5nbGVET010b1ZhcmlhYmxlcyA9ICgpID0+IHtcbiAgICBbdGhpcy5zY2FsZV0gPSB0aGlzLnJldHVybkVsZW1lbnRzRnJvbURPTShgLiR7dGhpcy5zdHlsZX1fX3NjYWxlYCwgMSk7XG4gICAgW3RoaXMuc2luZ2xlU2xpZGVyXSA9IHRoaXMucmV0dXJuRWxlbWVudHNGcm9tRE9NKGAuJHt0aGlzLnN0eWxlfV9fZHJhZ2AsIDEpO1xuICAgIFt0aGlzLnN0YXRpY0ZpZWxkU2luZ2xlXSA9IHRoaXMucmV0dXJuRWxlbWVudHNGcm9tRE9NKGAuJHt0aGlzLnN0eWxlfV9fc3RhdGljRmllbGRgLCAxKTtcbiAgICBbdGhpcy5mbHlGaWVsZFNpbmdsZV0gPSB0aGlzLnJldHVybkVsZW1lbnRzRnJvbURPTShgLiR7dGhpcy5zdHlsZX1fX3Rvb2x0aXBgLCAxKTtcbiAgICBbdGhpcy5yaWJib25dID0gdGhpcy5yZXR1cm5FbGVtZW50c0Zyb21ET00oYC4ke3RoaXMuc3R5bGV9X19jb2xvci1iYXJgLCAxKTtcbiAgfVxuXG4gIHByaXZhdGUgd3JpdGVEb3VibGVET010b1ZhcmlhYmxlcyA9ICgpID0+IHtcbiAgICBbdGhpcy5zY2FsZV0gPSB0aGlzLnJldHVybkVsZW1lbnRzRnJvbURPTShgLiR7dGhpcy5zdHlsZX1fX3NjYWxlYCwgMSk7XG4gICAgW3RoaXMubG93ZXJTbGlkZXIsIHRoaXMudXBwZXJTbGlkZXJdID0gdGhpcy5yZXR1cm5FbGVtZW50c0Zyb21ET00oYC4ke3RoaXMuc3R5bGV9X19kcmFnYCwgMik7XG4gICAgW3RoaXMuc3RhdGljRmllbGRMb3dlciwgdGhpcy5zdGF0aWNGaWVsZFVwcGVyXSA9IHRoaXMucmV0dXJuRWxlbWVudHNGcm9tRE9NKGAuJHt0aGlzLnN0eWxlfV9fc3RhdGljRmllbGRgLCAyKTtcbiAgICBbdGhpcy5mbHlGaWVsZExvd2VyLCB0aGlzLmZseUZpZWxkVXBwZXJdID0gdGhpcy5yZXR1cm5FbGVtZW50c0Zyb21ET00oYC4ke3RoaXMuc3R5bGV9X190b29sdGlwYCwgMik7XG4gICAgW3RoaXMucmliYm9uXSA9IHRoaXMucmV0dXJuRWxlbWVudHNGcm9tRE9NKGAuJHt0aGlzLnN0eWxlfV9fY29sb3ItYmFyYCwgMSk7XG4gIH1cblxuICBwcml2YXRlIHdyaXRlU2luZ2xlU2xpZGVySW5kZW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IGVsZW0gPSB0aGlzLnJldHVybkVsZW1lbnRzRnJvbURPTShgLiR7dGhpcy5zdHlsZX1fX2RyYWdgLCAxKTtcbiAgICB0aGlzLnNpbmdsZVNsaWRlclBvc2l0aW9uID0gdGhpcy5yZXR1cm5JbmRlbnQoZWxlbVswXSk7XG4gIH1cblxuICBwcml2YXRlIHdyaXRlRG91YmxlU2xpZGVySW5kZW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IGVsZW1zID0gdGhpcy5yZXR1cm5FbGVtZW50c0Zyb21ET00oYC4ke3RoaXMuc3R5bGV9X19kcmFnYCwgMik7XG4gICAgdGhpcy5sb3dlclNsaWRlclBvc2l0aW9uID0gdGhpcy5yZXR1cm5JbmRlbnQoZWxlbXNbMF0pO1xuICAgIHRoaXMudXBwZXJTbGlkZXJQb3NpdGlvbiA9IHRoaXMucmV0dXJuSW5kZW50KGVsZW1zWzFdKTtcbiAgfVxuXG4gIHByaXZhdGUgcmV0dXJuRWxlbWVudHNGcm9tRE9NID0gKGNsYXNzTmFtZTogc3RyaW5nLCBsZW5ndGg6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IERPTUVsZW1lbnRzID0gdGhpcy5lbGVtLnF1ZXJ5U2VsZWN0b3JBbGwoY2xhc3NOYW1lKTtcbiAgICBpZiAoKERPTUVsZW1lbnRzLmxlbmd0aCA9PT0gbGVuZ3RoKSkge1xuICAgICAgcmV0dXJuIERPTUVsZW1lbnRzO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuXG4gIHByaXZhdGUgcmV0dXJuSW5kZW50ID0gKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSA9PiB7XG4gICAgaWYgKHRoaXMuZGlyZWN0aW9uVHlwZSA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICByZXR1cm4gZWxlbWVudC5vZmZzZXRMZWZ0O1xuICAgIH0gaWYgKHRoaXMuZGlyZWN0aW9uVHlwZSA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgcmV0dXJuIGVsZW1lbnQub2Zmc2V0VG9wO1xuICAgIH1cbiAgfTtcblxuICB3cml0ZUdlb21ldHJ5RE9NdG9WYXJpYWJsZXMgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXREaXJlY3Rpb24oKTtcbiAgICB0aGlzLndyaXRlR2VvbWV0cnlPZlNsaWRlcigpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXREaXJlY3Rpb24gPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuZGlyZWN0aW9uVHlwZSA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICB0aGlzLm1haW5BeGlzU2l6ZSA9IHRoaXMuc2NhbGUub2Zmc2V0V2lkdGg7XG4gICAgfVxuICAgIGlmICh0aGlzLmRpcmVjdGlvblR5cGUgPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgIHRoaXMubWFpbkF4aXNTaXplID0gdGhpcy5zY2FsZS5vZmZzZXRIZWlnaHQ7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB3cml0ZUdlb21ldHJ5T2ZTbGlkZXIgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuc2xpZGVyVHlwZSA9PT0gJ3NpbmdsZScpIHtcbiAgICAgIHRoaXMuc2xpZGVyV2lkdGggPSB0aGlzLnNpbmdsZVNsaWRlci5vZmZzZXRXaWR0aDtcbiAgICAgIHRoaXMuc2xpZGVySGVpZ2h0ID0gdGhpcy5zaW5nbGVTbGlkZXIub2Zmc2V0SGVpZ2h0O1xuICAgIH0gZWxzZSBpZiAodGhpcy5zbGlkZXJUeXBlID09PSAnZG91YmxlJykge1xuICAgICAgdGhpcy5zbGlkZXJXaWR0aCA9IHRoaXMubG93ZXJTbGlkZXIub2Zmc2V0V2lkdGg7XG4gICAgICB0aGlzLnNsaWRlckhlaWdodCA9IHRoaXMubG93ZXJTbGlkZXIub2Zmc2V0SGVpZ2h0O1xuICAgIH1cbiAgICB0aGlzLmNhbGNQaXhlbFN0ZXAoKTtcbiAgfVxuXG4gIGNhbGNQaXhlbFN0ZXAgPSAoKSA9PiB7XG4gICAgY29uc3Qgc3RlcEluUGl4ZWwgPSAodGhpcy5tYWluQXhpc1NpemUgLyAodGhpcy51cHBlclNjYWxlQm91bmQgLSB0aGlzLmxvd2VyU2NhbGVCb3VuZCkpICogdGhpcy5zdGVwO1xuICAgIGlmIChzdGVwSW5QaXhlbCA8IDEgJiYgc3RlcEluUGl4ZWwgIT09IDApIHtcbiAgICAgIGNvbnNvbGUubG9nKCfQqNCw0LMg0LIg0L/QuNC60YHQtdC70Y/RhSDQvNC10L3RjNGI0LUgMXB4LCDRgNCw0YHRh9C10YLRiyDQvdC1INC/0YDQvtC40LfQstC+0LTRj9GC0YHRjy4g0KjQsNCzINCw0LLRgtC+0LzQsNGC0LjRh9C10YHQutC4INCx0YPQtNC10YIg0YPQstC10LvQuNGH0LjQstCw0YLRjNGB0Y8g0L3QsCA1MCwg0L/QvtC60LAg0L3QtSDQsdGD0LTQtdGCINGB0L7QvtGC0LLQtdGC0YHRgtCy0L7QstCw0YLRjCDRg9GB0LvQvtCy0LjRj9C8Jyk7XG4gICAgICB0aGlzLnN0ZXAgPSB0aGlzLnN0ZXAgKyA1MDtcbiAgICAgIHRoaXMuY2FsY1BpeGVsU3RlcCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnBpeGVsU3RlcCA9IHN0ZXBJblBpeGVsO1xuICAgICAgdGhpcy5yb3VuZGVkUGl4ZWxTdGVwID0gTWF0aC5yb3VuZChzdGVwSW5QaXhlbCk7XG4gICAgfVxuICB9XG5cbiAgY3JlYXRlTGlzdGVuZXJPblNsaWRlciA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5zbGlkZXJUeXBlID09PSAnc2luZ2xlJykge1xuICAgICAgdGhpcy5zaW5nbGVTbGlkZXIub25tb3VzZWRvd24gPSB0aGlzLmV2ZW50T25TbGlkZXI7XG4gICAgfSBlbHNlIGlmICh0aGlzLnNsaWRlclR5cGUgPT09ICdkb3VibGUnKSB7XG4gICAgICB0aGlzLmxvd2VyU2xpZGVyLm9ubW91c2Vkb3duID0gdGhpcy5ldmVudE9uU2xpZGVyO1xuICAgICAgdGhpcy51cHBlclNsaWRlci5vbm1vdXNlZG93biA9IHRoaXMuZXZlbnRPblNsaWRlcjtcbiAgICB9XG4gIH1cblxuICBtb3Zlc1NsaWRlcnNUb1N0YXJ0UG9zaXRpb25zID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLnNsaWRlclR5cGUgPT09ICdzaW5nbGUnKSB7XG4gICAgICB0aGlzLnNldFNpbmdsZVRvU3RhcnRQb3NpdGlvbigpO1xuICAgICAgdGhpcy5tb3ZlUmliYm9uKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLnNsaWRlclR5cGUgPT09ICdkb3VibGUnKSB7XG4gICAgICB0aGlzLnNldHNEb3VibGVUb1N0YXJ0UG9zdGlvbnMoKTtcbiAgICAgIHRoaXMubW92ZVJpYmJvbigpO1xuICAgIH1cbiAgfVxuXG4gIHNldFNpbmdsZVRvU3RhcnRQb3NpdGlvbiA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5kaXJlY3Rpb25UeXBlID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgIHRoaXMuc2luZ2xlU2xpZGVyLnN0eWxlLmxlZnQgPSBgJHt0aGlzLmNhbGNNb25leVRvUG9zaXRpb24odGhpcy5sb3dlclNsaWRlclZhbHVlKX1weGA7XG4gICAgfVxuICAgIGlmICh0aGlzLmRpcmVjdGlvblR5cGUgPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgIHRoaXMuc2luZ2xlU2xpZGVyLnN0eWxlLnRvcCA9IGAke3RoaXMuY2FsY01vbmV5VG9Qb3NpdGlvbih0aGlzLmxvd2VyU2xpZGVyVmFsdWUpfXB4YDtcbiAgICB9XG4gIH1cblxuICBzZXRzRG91YmxlVG9TdGFydFBvc3Rpb25zID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLmxvd2VyU2NhbGVCb3VuZCA8PSB0aGlzLmxvd2VyU2xpZGVyVmFsdWUgJiYgdGhpcy51cHBlclNjYWxlQm91bmQgPj0gdGhpcy51cHBlclNsaWRlclZhbHVlKSB7XG4gICAgICBpZiAodGhpcy5kaXJlY3Rpb25UeXBlID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgdGhpcy5sb3dlclNsaWRlci5zdHlsZS5sZWZ0ID0gYCR7dGhpcy5jYWxjTW9uZXlUb1Bvc2l0aW9uKHRoaXMubG93ZXJTbGlkZXJWYWx1ZSl9cHhgO1xuICAgICAgICB0aGlzLnVwcGVyU2xpZGVyLnN0eWxlLmxlZnQgPSBgJHt0aGlzLmNhbGNNb25leVRvUG9zaXRpb24odGhpcy51cHBlclNsaWRlclZhbHVlKX1weGA7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5kaXJlY3Rpb25UeXBlID09PSAndmVydGljYWwnKSB7XG4gICAgICAgIHRoaXMubG93ZXJTbGlkZXIuc3R5bGUudG9wID0gYCR7dGhpcy5jYWxjTW9uZXlUb1Bvc2l0aW9uKHRoaXMudXBwZXJTbGlkZXJWYWx1ZSl9cHhgO1xuICAgICAgICB0aGlzLnVwcGVyU2xpZGVyLnN0eWxlLnRvcCA9IGAke3RoaXMuY2FsY01vbmV5VG9Qb3NpdGlvbih0aGlzLmxvd2VyU2xpZGVyVmFsdWUpfXB4YDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB3cml0ZU1vbmV5VG9GaWVsZHMgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuc2xpZGVyVHlwZSA9PT0gJ3NpbmdsZScpIHtcbiAgICAgIHRoaXMuc3RhdGljRmllbGRTaW5nbGUuaW5uZXJUZXh0ID0gYCR7dGhpcy5sb3dlclNsaWRlclZhbHVlfSR7dGhpcy5zaWdufWA7XG4gICAgICB0aGlzLmZseUZpZWxkU2luZ2xlLmlubmVyVGV4dCA9IGAke3RoaXMubG93ZXJTbGlkZXJWYWx1ZX0ke3RoaXMuc2lnbn1gO1xuICAgIH1cbiAgICBpZiAodGhpcy5zbGlkZXJUeXBlID09PSAnZG91YmxlJykge1xuICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uVHlwZSA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgIHRoaXMuc3RhdGljRmllbGRMb3dlci5pbm5lclRleHQgPSBgJHt0aGlzLmxvd2VyU2xpZGVyVmFsdWV9JHt0aGlzLnNpZ259YDtcbiAgICAgICAgdGhpcy5zdGF0aWNGaWVsZFVwcGVyLmlubmVyVGV4dCA9IGAke3RoaXMudXBwZXJTbGlkZXJWYWx1ZX0ke3RoaXMuc2lnbn1gO1xuXG4gICAgICAgIHRoaXMuZmx5RmllbGRMb3dlci5pbm5lclRleHQgPSBgJHt0aGlzLmxvd2VyU2xpZGVyVmFsdWV9JHt0aGlzLnNpZ259YDtcbiAgICAgICAgdGhpcy5mbHlGaWVsZFVwcGVyLmlubmVyVGV4dCA9IGAke3RoaXMudXBwZXJTbGlkZXJWYWx1ZX0ke3RoaXMuc2lnbn1gO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5kaXJlY3Rpb25UeXBlID09PSAndmVydGljYWwnKSB7XG4gICAgICAgIHRoaXMuc3RhdGljRmllbGRMb3dlci5pbm5lclRleHQgPSBgJHt0aGlzLmxvd2VyU2xpZGVyVmFsdWV9JHt0aGlzLnNpZ259YDtcbiAgICAgICAgdGhpcy5zdGF0aWNGaWVsZFVwcGVyLmlubmVyVGV4dCA9IGAke3RoaXMudXBwZXJTbGlkZXJWYWx1ZX0ke3RoaXMuc2lnbn1gO1xuXG4gICAgICAgIHRoaXMuZmx5RmllbGRMb3dlci5pbm5lclRleHQgPSBgJHt0aGlzLnVwcGVyU2xpZGVyVmFsdWV9JHt0aGlzLnNpZ259YDtcbiAgICAgICAgdGhpcy5mbHlGaWVsZFVwcGVyLmlubmVyVGV4dCA9IGAke3RoaXMubG93ZXJTbGlkZXJWYWx1ZX0ke3RoaXMuc2lnbn1gO1xuICAgICAgfVxuXG4gICAgfVxuICB9XG5cbiAgY2FsY01vbmV5VG9Qb3NpdGlvbihtb25leTogbnVtYmVyKSB7XG4gICAgbGV0IHBvc2l0aW9uOiBudW1iZXI7XG4gICAgaWYgKHRoaXMuZGlyZWN0aW9uVHlwZSA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICBwb3NpdGlvbiA9ICgobW9uZXkgLSB0aGlzLmxvd2VyU2NhbGVCb3VuZCkgLyB0aGlzLnN0ZXApICogdGhpcy5waXhlbFN0ZXA7XG4gICAgfVxuICAgIGlmICh0aGlzLmRpcmVjdGlvblR5cGUgPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgIHBvc2l0aW9uID0gdGhpcy5tYWluQXhpc1NpemUgLSAoKChtb25leSAtIHRoaXMubG93ZXJTY2FsZUJvdW5kKSAvIHRoaXMuc3RlcCkgKiB0aGlzLnBpeGVsU3RlcCk7XG4gICAgfVxuICAgIHJldHVybiBwb3NpdGlvbjtcbiAgfVxuXG4gIHByaXZhdGUgZXZlbnRPblNsaWRlciA9IChfZTogRXZlbnQpID0+IHtcbiAgICBfZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuc2V0UmVzdHJpY3Rpb25PZlNsaWRlck1vdmVtZW50KF9lKTtcbiAgICBkb2N1bWVudC5vbm1vdXNldXAgPSB0aGlzLmNhbmNlbEV2ZW50cztcbiAgICBkb2N1bWVudC5vbm1vdXNlbW92ZSA9IHRoaXMubW92ZUV2ZW50V2l0aEhvbGRNb3VzZTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0UmVzdHJpY3Rpb25PZlNsaWRlck1vdmVtZW50ID0gKF9lOiBFdmVudCkgPT4ge1xuICAgIGlmICh0aGlzLnNsaWRlclR5cGUgPT09ICdkb3VibGUnKSB7XG4gICAgICB0aGlzLnNldFJlc3RyaWN0aW9uRm9yRG91YmxlU2xpZGVyKF9lKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc2xpZGVyVHlwZSA9PT0gJ3NpbmdsZScpIHtcbiAgICAgIHRoaXMuc2V0UmVzdHJpY3Rpb25Gb3JTaW5nbGVTbGlkZXIoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNldFJlc3RyaWN0aW9uRm9yRG91YmxlU2xpZGVyID0gKF9lOiBFdmVudCkgPT4ge1xuICAgIGlmICh0aGlzLmRpcmVjdGlvblR5cGUgPT09ICdob3Jpem9udGFsJykge1xuICAgICAgaWYgKF9lLnRhcmdldCA9PT0gdGhpcy5sb3dlclNsaWRlcikge1xuICAgICAgICB0aGlzLnRhcmdldFNsaWRlciA9IHRoaXMubG93ZXJTbGlkZXI7XG4gICAgICAgIHRoaXMubG93ZXJSZXN0cmljdGlvbiA9IDA7XG4gICAgICAgIHRoaXMudXBwZXJSZXN0cmljdGlvbiA9IHRoaXMudXBwZXJTbGlkZXJQb3NpdGlvbjtcbiAgICAgICAgdGhpcy5sb3dlckNvc3RSZXN0cmljdGlvbiA9IHRoaXMubG93ZXJTY2FsZUJvdW5kO1xuICAgICAgICB0aGlzLnVwcGVyQ29zdFJlc3RyaWN0aW9uID0gdGhpcy5nZXRDb3N0Rm9yU2xpZGVyKHRoaXMudXBwZXJSZXN0cmljdGlvbik7XG4gICAgICB9XG4gICAgICBpZiAoX2UudGFyZ2V0ID09PSB0aGlzLnVwcGVyU2xpZGVyKSB7XG4gICAgICAgIHRoaXMudGFyZ2V0U2xpZGVyID0gdGhpcy51cHBlclNsaWRlcjtcbiAgICAgICAgdGhpcy5sb3dlclJlc3RyaWN0aW9uID0gdGhpcy5sb3dlclNsaWRlclBvc2l0aW9uO1xuICAgICAgICB0aGlzLnVwcGVyUmVzdHJpY3Rpb24gPSB0aGlzLm1haW5BeGlzU2l6ZTtcbiAgICAgICAgdGhpcy5sb3dlckNvc3RSZXN0cmljdGlvbiA9IHRoaXMuZ2V0Q29zdEZvclNsaWRlcih0aGlzLmxvd2VyUmVzdHJpY3Rpb24pO1xuICAgICAgICB0aGlzLnVwcGVyQ29zdFJlc3RyaWN0aW9uID0gdGhpcy51cHBlclNjYWxlQm91bmQ7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLmRpcmVjdGlvblR5cGUgPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgIGlmIChfZS50YXJnZXQgPT09IHRoaXMubG93ZXJTbGlkZXIpIHtcbiAgICAgICAgdGhpcy50YXJnZXRTbGlkZXIgPSB0aGlzLmxvd2VyU2xpZGVyO1xuICAgICAgICB0aGlzLmxvd2VyUmVzdHJpY3Rpb24gPSAwO1xuICAgICAgICB0aGlzLnVwcGVyUmVzdHJpY3Rpb24gPSB0aGlzLnVwcGVyU2xpZGVyUG9zaXRpb247XG4gICAgICAgIHRoaXMubG93ZXJDb3N0UmVzdHJpY3Rpb24gPSB0aGlzLmdldENvc3RGb3JTbGlkZXIodGhpcy5sb3dlclJlc3RyaWN0aW9uKTtcbiAgICAgICAgdGhpcy51cHBlckNvc3RSZXN0cmljdGlvbiA9IHRoaXMuZ2V0Q29zdEZvclNsaWRlcih0aGlzLnVwcGVyUmVzdHJpY3Rpb24pO1xuICAgICAgfVxuICAgICAgaWYgKF9lLnRhcmdldCA9PT0gdGhpcy51cHBlclNsaWRlcikge1xuICAgICAgICB0aGlzLnRhcmdldFNsaWRlciA9IHRoaXMudXBwZXJTbGlkZXI7XG4gICAgICAgIHRoaXMubG93ZXJSZXN0cmljdGlvbiA9IHRoaXMubG93ZXJTbGlkZXJQb3NpdGlvbjtcbiAgICAgICAgdGhpcy51cHBlclJlc3RyaWN0aW9uID0gdGhpcy5tYWluQXhpc1NpemU7XG4gICAgICAgIHRoaXMubG93ZXJDb3N0UmVzdHJpY3Rpb24gPSB0aGlzLmdldENvc3RGb3JTbGlkZXIodGhpcy5sb3dlclJlc3RyaWN0aW9uKTtcbiAgICAgICAgdGhpcy51cHBlckNvc3RSZXN0cmljdGlvbiA9IHRoaXMuZ2V0Q29zdEZvclNsaWRlcih0aGlzLnVwcGVyUmVzdHJpY3Rpb24pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2V0UmVzdHJpY3Rpb25Gb3JTaW5nbGVTbGlkZXIgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuZGlyZWN0aW9uVHlwZSA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICB0aGlzLnRhcmdldFNsaWRlciA9IHRoaXMuc2luZ2xlU2xpZGVyO1xuICAgICAgdGhpcy5sb3dlclJlc3RyaWN0aW9uID0gMDtcbiAgICAgIHRoaXMudXBwZXJSZXN0cmljdGlvbiA9IHRoaXMubWFpbkF4aXNTaXplO1xuICAgICAgdGhpcy5sb3dlckNvc3RSZXN0cmljdGlvbiA9IHRoaXMubG93ZXJTY2FsZUJvdW5kO1xuICAgICAgdGhpcy51cHBlckNvc3RSZXN0cmljdGlvbiA9IHRoaXMudXBwZXJTY2FsZUJvdW5kO1xuICAgIH1cbiAgICBpZiAodGhpcy5kaXJlY3Rpb25UeXBlID09PSAndmVydGljYWwnKSB7XG4gICAgICB0aGlzLnRhcmdldFNsaWRlciA9IHRoaXMuc2luZ2xlU2xpZGVyO1xuICAgICAgdGhpcy5sb3dlclJlc3RyaWN0aW9uID0gMDtcbiAgICAgIHRoaXMudXBwZXJSZXN0cmljdGlvbiA9IHRoaXMubWFpbkF4aXNTaXplO1xuICAgICAgdGhpcy5sb3dlckNvc3RSZXN0cmljdGlvbiA9IHRoaXMudXBwZXJTY2FsZUJvdW5kO1xuICAgICAgdGhpcy51cHBlckNvc3RSZXN0cmljdGlvbiA9IHRoaXMubG93ZXJTY2FsZUJvdW5kO1xuICAgIH1cbiAgfVxuXG4gIGdldENvc3RGb3JTbGlkZXIgPSAoc2xpZGVyUG9zdGlvbkluUGl4ZWw6IG51bWJlcikgPT4ge1xuICAgIGlmICh0aGlzLmRpcmVjdGlvblR5cGUgPT09ICdob3Jpem9udGFsJykge1xuICAgICAgaWYgKHNsaWRlclBvc3Rpb25JblBpeGVsIDw9IDApIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubG93ZXJTY2FsZUJvdW5kO1xuICAgICAgfVxuICAgICAgcmV0dXJuICh0aGlzLmxvd2VyU2NhbGVCb3VuZCArIChNYXRoLnJvdW5kKHNsaWRlclBvc3Rpb25JblBpeGVsIC8gdGhpcy5waXhlbFN0ZXApICogdGhpcy5zdGVwKSk7XG4gICAgfVxuICAgIGlmICh0aGlzLmRpcmVjdGlvblR5cGUgPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgIGlmIChzbGlkZXJQb3N0aW9uSW5QaXhlbCA8PSAwKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVwcGVyU2NhbGVCb3VuZDtcbiAgICAgIH1cbiAgICAgIHJldHVybiAoKE1hdGgucm91bmQoKHRoaXMubWFpbkF4aXNTaXplIC0gc2xpZGVyUG9zdGlvbkluUGl4ZWwpIC8gdGhpcy5waXhlbFN0ZXApICogdGhpcy5zdGVwKSArIHRoaXMubG93ZXJTY2FsZUJvdW5kKTtcbiAgICB9XG4gIH1cblxuICBtb3ZlRXZlbnRXaXRoSG9sZE1vdXNlID0gKF9lOiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgY29uc3QgaW5uZXJNb3VzZVBvc2l0aW9uID0gdGhpcy5nZXRNb3VzZVBvc2l0aW9uKF9lKTtcblxuICAgIGNvbnN0IG5lYXJlc3RSb3VuZGVkU3RlcCA9IHRoaXMuY2FsY05lYXJlc3RTdGVwKGlubmVyTW91c2VQb3NpdGlvbik7XG5cbiAgICBjb25zdCBmaW5hbFBvc2l0aW9uSW5QaXhlbCA9IHRoaXMuY2FsY0ZpbmFsUG9zaXRpb24obmVhcmVzdFJvdW5kZWRTdGVwKTtcblxuICAgIGNvbnN0IGZpbmFsQ29zdCA9IHRoaXMuY2FsY0ZpbmFsQ29zdChuZWFyZXN0Um91bmRlZFN0ZXApO1xuXG4gICAgdGhpcy5tb3ZlU2xpZGVyKGZpbmFsUG9zaXRpb25JblBpeGVsKTtcblxuICAgIHRoaXMuc2hvd01vbmV5T25TY3JlZW4oZmluYWxDb3N0KTtcblxuICAgIHRoaXMud3JpdGVNb25leVRvVmFyaWFibGVzKGZpbmFsQ29zdCk7XG5cbiAgICB0aGlzLnNldE92ZXJsYXkoKTtcblxuICAgIHRoaXMubW92ZVJpYmJvbigpO1xuXG4gICAgdGhpcy5tb3ZlVG9vbHRpcCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRNb3VzZVBvc2l0aW9uID0gKF9lOiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgdGhpcy5jbGllbnRSZWN0ID0gdGhpcy5zY2FsZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBpZiAodGhpcy5kaXJlY3Rpb25UeXBlID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgIHRoaXMuaW5kZW50ID0gdGhpcy5jbGllbnRSZWN0LmxlZnQ7XG4gICAgICByZXR1cm4gKF9lLmNsaWVudFggLSB0aGlzLmluZGVudCAtICh0aGlzLnNsaWRlcldpZHRoIC8gMikpO1xuICAgIH0gaWYgKHRoaXMuZGlyZWN0aW9uVHlwZSA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgdGhpcy5pbmRlbnQgPSB0aGlzLmNsaWVudFJlY3QudG9wO1xuICAgICAgcmV0dXJuIChfZS5jbGllbnRZIC0gdGhpcy5pbmRlbnQgLSAodGhpcy5zbGlkZXJIZWlnaHQgLyAyKSk7XG4gICAgfVxuICB9XG5cbiAgY2FsY05lYXJlc3RTdGVwID0gKF9wb3NpdGlvbkluUGl4ZWw6IG51bWJlcikgPT4ge1xuICAgIGlmICh0aGlzLmRpcmVjdGlvblR5cGUgPT09ICdob3Jpem9udGFsJykge1xuICAgICAgcmV0dXJuIE1hdGgucm91bmQoX3Bvc2l0aW9uSW5QaXhlbCAvIHRoaXMucGl4ZWxTdGVwKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZGlyZWN0aW9uVHlwZSA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgcmV0dXJuIE1hdGgucm91bmQoKHRoaXMubWFpbkF4aXNTaXplIC0gX3Bvc2l0aW9uSW5QaXhlbCkgLyB0aGlzLnBpeGVsU3RlcCk7XG4gICAgfVxuICB9XG5cbiAgY2FsY0ZpbmFsUG9zaXRpb24gPSAoX25lYXJlc3RSb3VuZGVkU3RlcDogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgcG9zaXRpb25JblBpeGVsID0gX25lYXJlc3RSb3VuZGVkU3RlcCAqIHRoaXMucGl4ZWxTdGVwO1xuICAgIGlmICh0aGlzLmRpcmVjdGlvblR5cGUgPT09ICdob3Jpem9udGFsJykge1xuICAgICAgaWYgKHRoaXMuaXNQaXhlbHNJbkJvcmRlcihwb3NpdGlvbkluUGl4ZWwpKSB7XG4gICAgICAgIHJldHVybiBwb3NpdGlvbkluUGl4ZWw7XG4gICAgICB9XG4gICAgICBpZiAocG9zaXRpb25JblBpeGVsIDw9IHRoaXMubG93ZXJSZXN0cmljdGlvbikge1xuICAgICAgICByZXR1cm4gdGhpcy5sb3dlclJlc3RyaWN0aW9uO1xuICAgICAgfVxuICAgICAgaWYgKHBvc2l0aW9uSW5QaXhlbCA+PSB0aGlzLnVwcGVyUmVzdHJpY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXBwZXJSZXN0cmljdGlvbjtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMuZGlyZWN0aW9uVHlwZSA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgaWYgKHRoaXMuaXNQaXhlbHNJbkJvcmRlcigodGhpcy5tYWluQXhpc1NpemUgLSBwb3NpdGlvbkluUGl4ZWwpKSkge1xuICAgICAgICByZXR1cm4gKHRoaXMubWFpbkF4aXNTaXplIC0gcG9zaXRpb25JblBpeGVsKTtcbiAgICAgIH1cbiAgICAgIGlmICgodGhpcy5tYWluQXhpc1NpemUgLSBwb3NpdGlvbkluUGl4ZWwpIDw9IHRoaXMubG93ZXJSZXN0cmljdGlvbikge1xuICAgICAgICByZXR1cm4gdGhpcy5sb3dlclJlc3RyaWN0aW9uO1xuICAgICAgfVxuICAgICAgaWYgKCh0aGlzLm1haW5BeGlzU2l6ZSAtIHBvc2l0aW9uSW5QaXhlbCkgPj0gdGhpcy51cHBlclJlc3RyaWN0aW9uKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVwcGVyUmVzdHJpY3Rpb247XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY2FsY0ZpbmFsQ29zdCA9IChfbmVhcmVzdFJvdW5kZWRTdGVwOiBudW1iZXIpID0+IHtcbiAgICBpZiAodGhpcy5kaXJlY3Rpb25UeXBlID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgIGNvbnN0IHBvc2l0aW9uSW5Nb25leSA9IHRoaXMubG93ZXJTY2FsZUJvdW5kICsgKF9uZWFyZXN0Um91bmRlZFN0ZXAgKiB0aGlzLnN0ZXApO1xuXG4gICAgICBpZiAodGhpcy5pc01vbmV5SW5Cb3JkZXIocG9zaXRpb25Jbk1vbmV5KSkge1xuICAgICAgICByZXR1cm4gcG9zaXRpb25Jbk1vbmV5O1xuICAgICAgfVxuICAgICAgaWYgKHBvc2l0aW9uSW5Nb25leSA8IHRoaXMubG93ZXJDb3N0UmVzdHJpY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubG93ZXJDb3N0UmVzdHJpY3Rpb247XG4gICAgICB9XG4gICAgICBpZiAocG9zaXRpb25Jbk1vbmV5ID4gdGhpcy51cHBlckNvc3RSZXN0cmljdGlvbikge1xuICAgICAgICByZXR1cm4gdGhpcy51cHBlckNvc3RSZXN0cmljdGlvbjtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMuZGlyZWN0aW9uVHlwZSA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgY29uc3QgcG9zaXRpb25Jbk1vbmV5ID0gKF9uZWFyZXN0Um91bmRlZFN0ZXAgKiB0aGlzLnN0ZXApICsgdGhpcy5sb3dlclNjYWxlQm91bmQ7XG4gICAgICBpZiAodGhpcy5pc01vbmV5SW5Cb3JkZXIocG9zaXRpb25Jbk1vbmV5KSkge1xuICAgICAgICByZXR1cm4gcG9zaXRpb25Jbk1vbmV5O1xuICAgICAgfVxuICAgICAgaWYgKHBvc2l0aW9uSW5Nb25leSA+IHRoaXMubG93ZXJDb3N0UmVzdHJpY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubG93ZXJDb3N0UmVzdHJpY3Rpb247XG4gICAgICB9XG4gICAgICBpZiAocG9zaXRpb25Jbk1vbmV5IDwgdGhpcy51cHBlckNvc3RSZXN0cmljdGlvbikge1xuICAgICAgICByZXR1cm4gdGhpcy51cHBlckNvc3RSZXN0cmljdGlvbjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpc1BpeGVsc0luQm9yZGVyID0gKF9wb3NpdGlvbjogbnVtYmVyKSA9PiAoKF9wb3NpdGlvbiA+PSB0aGlzLmxvd2VyUmVzdHJpY3Rpb24pICYmIChfcG9zaXRpb24gPD0gdGhpcy51cHBlclJlc3RyaWN0aW9uKSlcblxuICBpc01vbmV5SW5Cb3JkZXIgPSAoX3Bvc2l0aW9uOiBudW1iZXIpID0+IHtcbiAgICBpZiAodGhpcy5kaXJlY3Rpb25UeXBlID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgIHJldHVybiAoKF9wb3NpdGlvbiA+PSB0aGlzLmxvd2VyQ29zdFJlc3RyaWN0aW9uKSAmJiAoX3Bvc2l0aW9uIDw9IHRoaXMudXBwZXJDb3N0UmVzdHJpY3Rpb24pKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZGlyZWN0aW9uVHlwZSA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgcmV0dXJuICgoX3Bvc2l0aW9uIDw9IHRoaXMubG93ZXJDb3N0UmVzdHJpY3Rpb24pICYmIChfcG9zaXRpb24gPj0gdGhpcy51cHBlckNvc3RSZXN0cmljdGlvbikpO1xuICAgIH1cbiAgfVxuXG4gIHNob3dNb25leU9uU2NyZWVuID0gKGZpbmFsQ29zdDogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgY29zdCA9IGAke2ZpbmFsQ29zdH0ke3RoaXMuc2lnbn1gO1xuICAgIGlmICh0aGlzLmRpcmVjdGlvblR5cGUgPT09ICdob3Jpem9udGFsJykge1xuICAgICAgaWYgKHRoaXMudGFyZ2V0U2xpZGVyID09PSB0aGlzLmxvd2VyU2xpZGVyKSB7XG4gICAgICAgIHRoaXMuc3RhdGljRmllbGRMb3dlci50ZXh0Q29udGVudCA9IGAke2Nvc3R9YDtcbiAgICAgICAgdGhpcy5mbHlGaWVsZExvd2VyLnRleHRDb250ZW50ID0gYCR7Y29zdH1gO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMudGFyZ2V0U2xpZGVyID09PSB0aGlzLnVwcGVyU2xpZGVyKSB7XG4gICAgICAgIHRoaXMuc3RhdGljRmllbGRVcHBlci50ZXh0Q29udGVudCA9IGAke2Nvc3R9YDtcbiAgICAgICAgdGhpcy5mbHlGaWVsZFVwcGVyLnRleHRDb250ZW50ID0gYCR7Y29zdH1gO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMudGFyZ2V0U2xpZGVyID09PSB0aGlzLnNpbmdsZVNsaWRlcikge1xuICAgICAgICB0aGlzLnN0YXRpY0ZpZWxkU2luZ2xlLnRleHRDb250ZW50ID0gYCR7Y29zdH1gO1xuICAgICAgICB0aGlzLmZseUZpZWxkU2luZ2xlLnRleHRDb250ZW50ID0gYCR7Y29zdH1gO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5kaXJlY3Rpb25UeXBlID09PSAndmVydGljYWwnKSB7XG4gICAgICBpZiAodGhpcy50YXJnZXRTbGlkZXIgPT09IHRoaXMubG93ZXJTbGlkZXIpIHtcbiAgICAgICAgdGhpcy5zdGF0aWNGaWVsZFVwcGVyLnRleHRDb250ZW50ID0gYCR7Y29zdH1gO1xuICAgICAgICB0aGlzLmZseUZpZWxkTG93ZXIudGV4dENvbnRlbnQgPSBgJHtjb3N0fWA7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy50YXJnZXRTbGlkZXIgPT09IHRoaXMudXBwZXJTbGlkZXIpIHtcbiAgICAgICAgdGhpcy5zdGF0aWNGaWVsZExvd2VyLnRleHRDb250ZW50ID0gYCR7Y29zdH1gO1xuICAgICAgICB0aGlzLmZseUZpZWxkVXBwZXIudGV4dENvbnRlbnQgPSBgJHtjb3N0fWA7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy50YXJnZXRTbGlkZXIgPT09IHRoaXMuc2luZ2xlU2xpZGVyKSB7XG4gICAgICAgIHRoaXMuc3RhdGljRmllbGRTaW5nbGUudGV4dENvbnRlbnQgPSBgJHtjb3N0fWA7XG4gICAgICAgIHRoaXMuZmx5RmllbGRTaW5nbGUudGV4dENvbnRlbnQgPSBgJHtjb3N0fWA7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgd3JpdGVNb25leVRvVmFyaWFibGVzID0gKGZpbmFsQ29zdDogbnVtYmVyKSA9PiB7XG4gICAgaWYgKHRoaXMudGFyZ2V0U2xpZGVyID09PSB0aGlzLmxvd2VyU2xpZGVyKSB7XG4gICAgICB0aGlzLmxvd2VyU2xpZGVyVmFsdWUgPSBmaW5hbENvc3Q7XG4gICAgfVxuICAgIGlmICh0aGlzLnRhcmdldFNsaWRlciA9PT0gdGhpcy51cHBlclNsaWRlcikge1xuICAgICAgdGhpcy51cHBlclNsaWRlclZhbHVlID0gZmluYWxDb3N0O1xuICAgIH1cbiAgICBpZiAodGhpcy50YXJnZXRTbGlkZXIgPT09IHRoaXMuc2luZ2xlU2xpZGVyKSB7XG4gICAgICB0aGlzLmxvd2VyU2xpZGVyVmFsdWUgPSBmaW5hbENvc3Q7XG4gICAgfVxuICB9O1xuXG4gIHByaXZhdGUgbW92ZVJpYmJvbiA9ICgpID0+IHtcbiAgICBjb25zdCBzZXRIb3Jpem9udGFsUmliYm9uVmFyaWFibGVzID0gKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuc2xpZGVySW5ET00ubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIHRoaXMucmliYm9uLnN0eWxlLmxlZnQgPSAnMHB4JztcbiAgICAgICAgdGhpcy5yaWJib24uc3R5bGUud2lkdGggPSBgJHt0aGlzLnNpbmdsZVNsaWRlci5vZmZzZXRMZWZ0ICsgKHRoaXMuc2xpZGVyV2lkdGggLyAyKX1weGA7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuc2xpZGVySW5ET00ubGVuZ3RoID09PSAyKSB7XG4gICAgICAgIHRoaXMucmliYm9uLnN0eWxlLmxlZnQgPSBgJHt0aGlzLmxvd2VyU2xpZGVyLm9mZnNldExlZnQgKyAodGhpcy5zbGlkZXJXaWR0aCAvIDIpfXB4YDtcbiAgICAgICAgdGhpcy5yaWJib24uc3R5bGUud2lkdGggPSBgJHt0aGlzLnVwcGVyU2xpZGVyLm9mZnNldExlZnQgLSB0aGlzLmxvd2VyU2xpZGVyLm9mZnNldExlZnR9cHhgO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBzZXRWZXJ0aWNhbFJpYmJvblZhcmlhYmxlcyA9ICgpID0+IHtcbiAgICAgIGlmICh0aGlzLnNsaWRlckluRE9NLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICB0aGlzLnJpYmJvbi5zdHlsZS50b3AgPSBgJHt0aGlzLnNpbmdsZVNsaWRlci5vZmZzZXRUb3AgKyAodGhpcy5zbGlkZXJIZWlnaHQgLyAyKX1weGA7XG4gICAgICAgIHRoaXMucmliYm9uLnN0eWxlLmhlaWdodCA9IGAke3RoaXMubWFpbkF4aXNTaXplIC0gdGhpcy5zaW5nbGVTbGlkZXIub2Zmc2V0VG9wICsgKHRoaXMuc2xpZGVySGVpZ2h0IC8gMil9cHhgO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnNsaWRlckluRE9NLmxlbmd0aCA9PT0gMikge1xuICAgICAgICB0aGlzLnJpYmJvbi5zdHlsZS50b3AgPSBgJHt0aGlzLmxvd2VyU2xpZGVyLm9mZnNldFRvcCArICh0aGlzLnNsaWRlckhlaWdodCAvIDIpfXB4YDtcbiAgICAgICAgdGhpcy5yaWJib24uc3R5bGUuaGVpZ2h0ID0gYCR7dGhpcy51cHBlclNsaWRlci5vZmZzZXRUb3AgLSB0aGlzLmxvd2VyU2xpZGVyLm9mZnNldFRvcH1weGA7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmICh0aGlzLmRpcmVjdGlvblR5cGUgPT09ICdob3Jpem9udGFsJykge1xuICAgICAgc2V0SG9yaXpvbnRhbFJpYmJvblZhcmlhYmxlcygpO1xuICAgIH1cbiAgICBpZiAodGhpcy5kaXJlY3Rpb25UeXBlID09PSAndmVydGljYWwnKSB7XG4gICAgICBzZXRWZXJ0aWNhbFJpYmJvblZhcmlhYmxlcygpO1xuICAgIH1cbiAgfVxuXG4gIG1vdmVTbGlkZXIgPSAobnVtOiBudW1iZXIpID0+IHtcbiAgICBpZiAodGhpcy5kaXJlY3Rpb25UeXBlID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgIHRoaXMudGFyZ2V0U2xpZGVyLnN0eWxlLmxlZnQgPSBgJHtudW19cHhgO1xuICAgIH0gZWxzZSBpZiAodGhpcy5kaXJlY3Rpb25UeXBlID09PSAndmVydGljYWwnKSB7XG4gICAgICB0aGlzLnRhcmdldFNsaWRlci5zdHlsZS50b3AgPSBgJHtudW19cHhgO1xuICAgIH1cbiAgfVxuXG4gIG1vdmVUb29sdGlwID0gKCkgPT4ge1xuICAgIGNvbnN0IG1vdmUgPSAoZGlyZWN0aW9uOiBzdHJpbmcsIG9mZnNldDogJ29mZnNldExlZnQnIHwgJ29mZnNldFRvcCcsIHNsaWRlclNpemU6IG51bWJlcikgPT4ge1xuICAgICAgaWYgKHRoaXMuc2xpZGVyVHlwZSA9PT0gJ3NpbmdsZScpIHtcbiAgICAgICAgdGhpcy5lbGVtLnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke3RoaXMuc3R5bGV9X190b29sdGlwYClbMF0uc3R5bGVbZGlyZWN0aW9uXSA9IGAke3RoaXMuc2luZ2xlU2xpZGVyW29mZnNldF0gLSBzbGlkZXJTaXplfXB4YDtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnNsaWRlclR5cGUgPT09ICdkb3VibGUnKSB7XG4gICAgICAgIHRoaXMuZWxlbS5xdWVyeVNlbGVjdG9yQWxsKGAuJHt0aGlzLnN0eWxlfV9fdG9vbHRpcGApWzBdLnN0eWxlW2RpcmVjdGlvbl0gPSBgJHt0aGlzLmxvd2VyU2xpZGVyW29mZnNldF0gLSBzbGlkZXJTaXplfXB4YDtcbiAgICAgICAgdGhpcy5lbGVtLnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke3RoaXMuc3R5bGV9X190b29sdGlwYClbMV0uc3R5bGVbZGlyZWN0aW9uXSA9IGAke3RoaXMudXBwZXJTbGlkZXJbb2Zmc2V0XSAtIHNsaWRlclNpemV9cHhgO1xuICAgICAgfVxuICAgIH07XG4gICAgaWYgKHRoaXMuZGlyZWN0aW9uVHlwZSA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICBtb3ZlKCdsZWZ0JywgJ29mZnNldExlZnQnLCAodGhpcy5zbGlkZXJXaWR0aCAvIDMpKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZGlyZWN0aW9uVHlwZSA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgbW92ZSgndG9wJywgJ29mZnNldFRvcCcsIDApO1xuICAgIH1cbiAgfVxuXG4gIHNldE92ZXJsYXkgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMudGFyZ2V0U2xpZGVyID09PSB0aGlzLmxvd2VyU2xpZGVyKSB7XG4gICAgICB0aGlzLnRhcmdldFNsaWRlci5zdHlsZS56SW5kZXggPSAnMTAwJztcbiAgICAgIHRoaXMudXBwZXJTbGlkZXIuc3R5bGUuekluZGV4ID0gJzEnO1xuICAgIH0gZWxzZSBpZiAodGhpcy50YXJnZXRTbGlkZXIgPT09IHRoaXMudXBwZXJTbGlkZXIpIHtcbiAgICAgIHRoaXMudGFyZ2V0U2xpZGVyLnN0eWxlLnpJbmRleCA9ICcxMDAnO1xuICAgICAgdGhpcy5sb3dlclNsaWRlci5zdHlsZS56SW5kZXggPSAnMSc7XG4gICAgfVxuICB9XG5cbiAgY2FuY2VsRXZlbnRzID0gKCkgPT4ge1xuICAgIHRoaXMud3JpdGVET00oKTtcbiAgICBkb2N1bWVudC5vbm1vdXNldXAgPSBudWxsO1xuICAgIGRvY3VtZW50Lm9ubW91c2Vtb3ZlID0gbnVsbDtcbiAgfVxufVxuXG5leHBvcnQgeyBWaWV3IH07XG4iLCJpbnRlcmZhY2UgVmFsdWVzIHtcbiAgW2E6IHN0cmluZ106IEVsZW1lbnRJbnRlcmZhY2U7XG59XG5cbmludGVyZmFjZSBFbGVtZW50SW50ZXJmYWNlIHtcbiAgdGl0bGU/OiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICBlbGVtZW50TmFtZT86IHN0cmluZztcbiAgdmFsdWU/OiBhbnk7XG4gIG5hbWVPZlZhcmlhYmxlPzogc3RyaW5nO1xuICB0eXBlPzogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgUGFyYW0ge1xuICBpZEZvckNvbnRyb2xQYW5lbD86IHN0cmluZztcbiAgZGlyZWN0aW9uVHlwZT86IHN0cmluZztcbiAgZWxlbWVudElkPzogc3RyaW5nO1xuICBlbGVtPzogYW55O1xuICBzaWduPzogc3RyaW5nO1xuICBsb3dlclNjYWxlQm91bmQ/OiBudW1iZXI7XG4gIHVwcGVyU2NhbGVCb3VuZD86IG51bWJlcjtcbiAgbG93ZXJTbGlkZXJWYWx1ZT86IG51bWJlcjtcbiAgdXBwZXJTbGlkZXJWYWx1ZT86IG51bWJlcjtcbiAgc2xpZGVyVHlwZT86IHN0cmluZztcbiAgc3RlcD86IG51bWJlcjtcbiAgY29udHJvbGxlcj86IGFueTtcbiAgc3R5bGU/OiBzdHJpbmdcbn1cblxuaW50ZXJmYWNlIENvbnRyb2xQYW5lbCB7XG4gIGNvbnRyb2xQYW5lbDogSFRNTEVsZW1lbnQsXG4gIHNlbGVjdE9yT3I6IEhUTUxFbGVtZW50LFxuICBkaXZOdW1lcmFsOiBIVE1MRWxlbWVudCxcbiAgY29udHJvbGxlcjogYW55O1xuICBtb2RlbDogYW55O1xufVxuXG5jbGFzcyBDb250cm9sUGFuZWwge1xuICBvclZhbHVlczogVmFsdWVzID0ge1xuICAgIHNpZ246IHtcbiAgICAgIHRpdGxlOiAnU2lnbicsXG4gICAgICBkZXNjcmlwdGlvbjogJ9CS0LDQu9GO0YLQsCcsXG4gICAgICBlbGVtZW50TmFtZTogJ3NpZ24nLFxuICAgICAgdmFsdWU6IFsn4oK9JywgJyQnXSxcbiAgICAgIG5hbWVPZlZhcmlhYmxlOiAnc2lnbicsXG4gICAgfSxcbiAgICBzbGlkZXJUeXBlOiB7XG4gICAgICB0aXRsZTogJ1R5cGUnLFxuICAgICAgZGVzY3JpcHRpb246ICfQotC40L8g0YHQu9Cw0LnQtNC10YDQsCAtINC+0LTQuNC90LDRgNC90YvQuSDQuNC70Lgg0LTQstC+0LnQvdC+0LknLFxuICAgICAgZWxlbWVudE5hbWU6ICdzbGlkZXJUeXBlJyxcbiAgICAgIHZhbHVlOiBbJ2RvdWJsZScsICdzaW5nbGUnXSxcbiAgICAgIG5hbWVPZlZhcmlhYmxlOiAnc2xpZGVyVHlwZScsXG4gICAgfSxcbiAgICBkaXJlY3Rpb25UeXBlOiB7XG4gICAgICB0aXRsZTogJ1R5cGUnLFxuICAgICAgZGVzY3JpcHRpb246ICfQotC40L8g0YHQu9Cw0LnQtNC10YDQsCAtINCy0LXRgNGC0LjQutCw0LvRjNC90YvQuSDQuNC70Lgg0LPQvtGA0LjQt9C+0L3RgtCw0LvRjNC90YvQuScsXG4gICAgICBlbGVtZW50TmFtZTogJ2RpcmVjdGlvblR5cGUnLFxuICAgICAgdmFsdWU6IFsnaG9yaXpvbnRhbCcsICd2ZXJ0aWNhbCddLFxuICAgICAgbmFtZU9mVmFyaWFibGU6ICdkaXJlY3Rpb25UeXBlJyxcbiAgICB9LFxuICAgIHN0eWxlVHlwZToge1xuICAgICAgdGl0bGU6ICdTdHlsZScsXG4gICAgICBkZXNjcmlwdGlvbjogJ9Ci0LjQvyDRgdGC0LjQu9GPIC0g0LzQvtC20L3QviDQstGL0LHRgNCw0YLRjCDRgdGC0LjQu9GMIENTUyDQtNC70Y8g0LPQvtGA0LjQt9C+0L3RgtCw0LvRjNC90L7Qs9C+INC40LvQuCDQstC10YDRgtC40LrQsNC70YzQvdC+0LPQviDQstC40LTQsCcsXG4gICAgICBlbGVtZW50TmFtZTogJ3N0eWxlJyxcbiAgICAgIHZhbHVlOiBbJ2lzc0hvcml6b250YWwnLCAnaXNzVmVydGljYWwnXSxcbiAgICAgIG5hbWVPZlZhcmlhYmxlOiAnc3R5bGUnLFxuICAgIH0sXG4gIH07XG5cbiAgbnVtZXJhbFZhbHVlczogVmFsdWVzID0ge1xuICAgIHN0ZXA6IHtcbiAgICAgIHRpdGxlOiAnU3RlcCcsXG4gICAgICBkZXNjcmlwdGlvbjogJ9Co0LDQsyDQv9C+0LvQt9GD0L3QutCwJyxcbiAgICAgIGVsZW1lbnROYW1lOiAnc3RlcCcsXG4gICAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICAgIG5hbWVPZlZhcmlhYmxlOiAnc3RlcCcsXG4gICAgfSxcbiAgICBsb3dlclNjYWxlQm91bmQ6IHtcbiAgICAgIHRpdGxlOiAnTWluX3NsaWRlcicsXG4gICAgICBkZXNjcmlwdGlvbjogJ9Cc0LjQvdC40LzQsNC70YzQvdC+0LUg0LfQvdCw0YfQtdC90LjQtSDRiNC60LDQu9GLINGB0LvQsNC50LTQtdGA0LAnLFxuICAgICAgZWxlbWVudE5hbWU6ICdsb3dlclNjYWxlQm91bmQnLFxuICAgICAgdHlwZTogJ251bWJlcicsXG4gICAgICBuYW1lT2ZWYXJpYWJsZTogJ2xvd2VyU2NhbGVCb3VuZCcsXG4gICAgfSxcbiAgICB1cHBlclNjYWxlQm91bmQ6IHtcbiAgICAgIHRpdGxlOiAnTWF4X3NsaWRlcicsXG4gICAgICBkZXNjcmlwdGlvbjogJ9Cc0LDQutGB0LjQvNCw0LvRjNC90L7QtSDQt9C90LDRh9C10L3QuNC1INGI0LrQsNC70Ysg0YHQu9Cw0LnQtNC10YDQsCcsXG4gICAgICBlbGVtZW50TmFtZTogJ3VwcGVyU2NhbGVCb3VuZCcsXG4gICAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICAgIG5hbWVPZlZhcmlhYmxlOiAndXBwZXJTY2FsZUJvdW5kJyxcbiAgICB9LFxuICAgIGxvd2VyU2xpZGVyVmFsdWU6IHtcbiAgICAgIHRpdGxlOiAnTWluX3NsaWRlcicsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgJ9Cd0LDRh9Cw0LvRjNC90L7QtSDQt9C90LDRh9C10L3QuNC1INGI0LrQsNC70Ysg0YHQu9Cw0LnQtNC10YDQsCAtINC00LvRjyDQv9C10YDQstC+0LPQviDQuNC70Lgg0L7QtNC40L3QvtGH0L3QvtCz0L4g0L/QvtC70LfRg9C90LrQsCcsXG4gICAgICBlbGVtZW50TmFtZTogJ2xvd2VyU2xpZGVyVmFsdWUnLFxuICAgICAgdHlwZTogJ251bWJlcicsXG4gICAgICBuYW1lT2ZWYXJpYWJsZTogJ2xvd2VyU2xpZGVyVmFsdWUnLFxuICAgIH0sXG4gICAgdXBwZXJTbGlkZXJWYWx1ZToge1xuICAgICAgdGl0bGU6ICdNYXhfc2xpZGVyJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAn0J3QsNGH0LDQu9GM0L3QvtC1INC30L3QsNGH0LXQvdC40LUg0YjQutCw0LvRiyDRgdC70LDQudC00LXRgNCwIC0g0LTQu9GPINCy0YLQvtGA0L7Qs9C+INC/0L7Qu9C30YPQvdC60LAnLFxuICAgICAgZWxlbWVudE5hbWU6ICd1cHBlclNsaWRlclZhbHVlJyxcbiAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgbmFtZU9mVmFyaWFibGU6ICd1cHBlclNsaWRlclZhbHVlJyxcbiAgICB9LFxuICB9O1xuXG4gIHNldHRpbmdzOiBQYXJhbSA9IHtcbiAgICBlbGVtZW50SWQ6ICdpc3MnLFxuICAgIHNpZ246ICfigr0nLFxuICAgIGxvd2VyU2NhbGVCb3VuZDogMCxcbiAgICB1cHBlclNjYWxlQm91bmQ6IDEwMDAsXG4gICAgbG93ZXJTbGlkZXJWYWx1ZTogMjAwLFxuICAgIHVwcGVyU2xpZGVyVmFsdWU6IDgwMCxcbiAgICBzbGlkZXJUeXBlOiAnZG91YmxlJyxcbiAgICBkaXJlY3Rpb25UeXBlOiAnaG9yaXpvbnRhbCcsXG4gICAgc3RlcDogNSxcbiAgICBpZEZvckNvbnRyb2xQYW5lbDogJ2RvY19wYW5lbCcsXG4gICAgc3R5bGU6ICdpc3MnLFxuICB9O1xuXG4gIGJpbmRDb250cm9sbGVyID0gKGNvbnRyb2xsZXI6IGFueSkgPT4ge1xuICAgIHRoaXMuY29udHJvbGxlciA9IGNvbnRyb2xsZXI7XG4gIH1cblxuICBzZXRTZXR0aW5ncyA9IChzZXRGcm9tQ29udHJvbGxlcjogUGFyYW0pID0+IHtcbiAgICB0aGlzLnNldHRpbmdzID0ge1xuICAgICAgZWxlbWVudElkOiBzZXRGcm9tQ29udHJvbGxlci5lbGVtZW50SWQsXG4gICAgICBzaWduOiBzZXRGcm9tQ29udHJvbGxlci5zaWduLFxuICAgICAgbG93ZXJTY2FsZUJvdW5kOiBzZXRGcm9tQ29udHJvbGxlci5sb3dlclNjYWxlQm91bmQsXG4gICAgICB1cHBlclNjYWxlQm91bmQ6IHNldEZyb21Db250cm9sbGVyLnVwcGVyU2NhbGVCb3VuZCxcbiAgICAgIGxvd2VyU2xpZGVyVmFsdWU6IHNldEZyb21Db250cm9sbGVyLmxvd2VyU2xpZGVyVmFsdWUsXG4gICAgICB1cHBlclNsaWRlclZhbHVlOiBzZXRGcm9tQ29udHJvbGxlci51cHBlclNsaWRlclZhbHVlLFxuICAgICAgc2xpZGVyVHlwZTogc2V0RnJvbUNvbnRyb2xsZXIuc2xpZGVyVHlwZSxcbiAgICAgIGRpcmVjdGlvblR5cGU6IHNldEZyb21Db250cm9sbGVyLmRpcmVjdGlvblR5cGUsXG4gICAgICBzdGVwOiBzZXRGcm9tQ29udHJvbGxlci5zdGVwLFxuICAgICAgaWRGb3JDb250cm9sUGFuZWw6IHNldEZyb21Db250cm9sbGVyLmlkRm9yQ29udHJvbFBhbmVsLFxuICAgICAgc3R5bGU6IHNldEZyb21Db250cm9sbGVyLnN0eWxlLFxuICAgIH07XG4gIH1cblxuICBiaW5kTW9kZWwgPSAobW9kZWw6IGFueSkgPT4ge1xuICAgIHRoaXMubW9kZWwgPSBtb2RlbDtcbiAgfVxuXG4gIGdldENvbnRyb2xQYW5lbCA9ICgpID0+IHtcbiAgICBjb25zdCBjb250cm9sUGFuZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLnNldHRpbmdzLmlkRm9yQ29udHJvbFBhbmVsKTtcbiAgICByZXR1cm4gY29udHJvbFBhbmVsO1xuICB9XG5cbiAgc2V0SWRGb3JTZWxlY3QgPSAoc2VsZWN0OiBIVE1MRWxlbWVudCwgb2JqOiBhbnkpID0+IHtcbiAgICBzZWxlY3QuaWQgPSBvYmouZWxlbWVudE5hbWU7XG4gIH1cblxuICBhcHBlbmRDaGlsZCA9IChwYXJlbnQ6IEhUTUxFbGVtZW50LCBjaGlsZDogSFRNTEVsZW1lbnQgfCBUZXh0KSA9PiB7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGNoaWxkKTtcbiAgfVxuXG4gIGNyZWF0ZVRpdGxlID0gKG9iajogYW55KSA9PiB7XG4gICAgY29uc3QgdGl0bGU6IHN0cmluZyA9IG9iai5kZXNjcmlwdGlvbjtcblxuICAgIGNvbnN0IGRpdjogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGNvbnN0IHRleHROb2RlVGl0bGU6IFRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0aXRsZSk7XG5cbiAgICBkaXYuYXBwZW5kQ2hpbGQodGV4dE5vZGVUaXRsZSk7XG5cbiAgICByZXR1cm4gZGl2O1xuICB9XG5cbiAgcmV0dXJuS2V5cyA9IChvYmo6IFZhbHVlcyk6IHN0cmluZ1tdID0+IHtcbiAgICBjb25zdCBhcnIgPSBPYmplY3Qua2V5cyhvYmopO1xuICAgIHJldHVybiBhcnI7XG4gIH1cblxuICBjcmVhdGVJbnB1dCA9IChzZWxlY3RPckRpdjogSFRNTEVsZW1lbnQsIHZhbHVlOiBudW1iZXIpID0+IHtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaW5wdXQudHlwZSA9ICdudW1iZXInO1xuICAgIGlucHV0LnZhbHVlID0gU3RyaW5nKHZhbHVlKTtcbiAgICB0aGlzLmFwcGVuZENoaWxkKHNlbGVjdE9yRGl2LCBpbnB1dCk7XG4gIH1cblxuICBjcmVhdGVDaGFuZ2FibGVPcHRpb25zID0gKGFycjogc3RyaW5nW10sIHBhcmVudEVsZW1lbnQ6IEhUTUxFbGVtZW50KSA9PiB7XG4gICAgYXJyLmZvckVhY2goKGNoYW5nYWJsZVZhbHVlKSA9PiB7XG4gICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgIG9wdGlvbi52YWx1ZSA9IGNoYW5nYWJsZVZhbHVlO1xuICAgICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNoYW5nYWJsZVZhbHVlKTtcbiAgICAgIHRoaXMuYXBwZW5kQ2hpbGQob3B0aW9uLCB0ZXh0KTtcbiAgICAgIHRoaXMuYXBwZW5kQ2hpbGQocGFyZW50RWxlbWVudCwgb3B0aW9uKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNyZWF0ZUxpc3RlbmVyT3JPciA9IChlbGVtZW50Rm9yTGlzdGVuZXI6IEhUTUxTZWxlY3RFbGVtZW50LCBrZXlPZlNldHRpbmc6ICdzaWduJyB8ICdzbGlkZXJUeXBlJyB8ICdkaXJlY3Rpb25UeXBlJykgPT4ge1xuICAgIGNvbnN0IGNoYW5nZUxpc3RlbmVyID0gKCk6IGFueSA9PiB7XG4gICAgICB0aGlzLnNldHRpbmdzW2tleU9mU2V0dGluZ10gPSBlbGVtZW50Rm9yTGlzdGVuZXIudmFsdWU7XG4gICAgICB0aGlzLnNsaWRlclJlZnJlc2goKTtcbiAgICB9O1xuICAgIGVsZW1lbnRGb3JMaXN0ZW5lci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBjaGFuZ2VMaXN0ZW5lcik7XG4gIH1cblxuICBjcmVhdGVMaXN0ZW5lck51bWVyYWwgPSAoZWxlbWVudEZvckxpc3RlbmVyOiBIVE1MSW5wdXRFbGVtZW50LCBrZXlPZlNldHRpbmc6ICdzdGVwJyB8ICdsb3dlclNjYWxlQm91bmQnIHwgJ3VwcGVyU2NhbGVCb3VuZCcgfCAnbG93ZXJTbGlkZXJWYWx1ZScgfCAndXBwZXJTbGlkZXJWYWx1ZScpID0+IHtcbiAgICBjb25zdCBpbnB1dExpc3RlbmVyID0gKCk6IGFueSA9PiB7XG4gICAgICB0aGlzLnNldHRpbmdzW2tleU9mU2V0dGluZ10gPSBOdW1iZXIoZWxlbWVudEZvckxpc3RlbmVyLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbnB1dCcpWzBdLnZhbHVlQXNOdW1iZXIpO1xuICAgICAgdGhpcy5zbGlkZXJSZWZyZXNoKCk7XG4gICAgfTtcbiAgICBlbGVtZW50Rm9yTGlzdGVuZXIuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBpbnB1dExpc3RlbmVyKTtcbiAgfVxuXG4gIGNyZWF0ZVBhbmVsID0gKG9iamVjdEZvckNvbnN0cnVjdGlvblBhbmVsOiBWYWx1ZXMsIHR5cGU6IHN0cmluZywgY29udHJvbFBhbmVsOiBIVE1MRWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGtleXMgPSB0aGlzLnJldHVybktleXMob2JqZWN0Rm9yQ29uc3RydWN0aW9uUGFuZWwpO1xuXG4gICAga2V5cy5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGNvbnN0IGN1cnJlbnRPYmogPSBvYmplY3RGb3JDb25zdHJ1Y3Rpb25QYW5lbFtrZXldO1xuXG4gICAgICBsZXQgc2VsZWN0T3JEaXY6IEhUTUxFbGVtZW50O1xuICAgICAgaWYgKHR5cGUgPT09ICdudW1lcmFsJykge1xuICAgICAgICBzZWxlY3RPckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGUgPT09ICdzZWxlY3QnKSB7XG4gICAgICAgIHNlbGVjdE9yRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2V0SWRGb3JTZWxlY3Qoc2VsZWN0T3JEaXYsIGN1cnJlbnRPYmopO1xuICAgICAgY29uc3QgY3JlYXRlVGl0bGUgPSB0aGlzLmNyZWF0ZVRpdGxlKGN1cnJlbnRPYmopO1xuICAgICAgdGhpcy5hcHBlbmRDaGlsZChzZWxlY3RPckRpdiwgY3JlYXRlVGl0bGUpO1xuXG4gICAgICBpZiAodHlwZSA9PT0gJ251bWVyYWwnKSB7XG4gICAgICAgIHRoaXMuY3JlYXRlSW5wdXQoc2VsZWN0T3JEaXYsIHRoaXMuc2V0dGluZ3NbY3VycmVudE9iai5uYW1lT2ZWYXJpYWJsZSBhcyAnc3RlcCcgfCAnbG93ZXJTY2FsZUJvdW5kJyB8ICd1cHBlclNjYWxlQm91bmQnIHwgJ2xvd2VyU2xpZGVyVmFsdWUnIHwgJ3VwcGVyU2xpZGVyVmFsdWUnXSk7XG4gICAgICB9XG4gICAgICBpZiAodHlwZSA9PT0gJ3NlbGVjdCcpIHtcbiAgICAgICAgdGhpcy5jcmVhdGVDaGFuZ2FibGVPcHRpb25zKGN1cnJlbnRPYmoudmFsdWUsIHNlbGVjdE9yRGl2KTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5hcHBlbmRDaGlsZChjb250cm9sUGFuZWwsIHNlbGVjdE9yRGl2KTtcbiAgICB9KTtcblxuICAgIGtleXMuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBjb25zdCBjdXJyZW50T2JqID0gb2JqZWN0Rm9yQ29uc3RydWN0aW9uUGFuZWxba2V5XTtcbiAgICAgIGNvbnN0IGtleU9mU2V0dGluZzogYW55ID0gY3VycmVudE9iai5uYW1lT2ZWYXJpYWJsZTtcblxuICAgICAgaWYgKHR5cGUgPT09ICdudW1lcmFsJykge1xuICAgICAgICBjb25zdCBldmVudEVsZW1lbnQgPSBjb250cm9sUGFuZWwucXVlcnlTZWxlY3RvcihgIyR7Y3VycmVudE9iai5lbGVtZW50TmFtZX1gKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuXG4gICAgICAgIHRoaXMuY3JlYXRlTGlzdGVuZXJOdW1lcmFsKGV2ZW50RWxlbWVudCwga2V5T2ZTZXR0aW5nKTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlID09PSAnc2VsZWN0Jykge1xuICAgICAgICBjb25zdCBldmVudEVsZW1lbnQgPSBjb250cm9sUGFuZWwucXVlcnlTZWxlY3RvcihgIyR7Y3VycmVudE9iai5lbGVtZW50TmFtZX1gKSBhcyBIVE1MU2VsZWN0RWxlbWVudDtcbiAgICAgICAgdGhpcy5jcmVhdGVMaXN0ZW5lck9yT3IoZXZlbnRFbGVtZW50LCBrZXlPZlNldHRpbmcpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc2xpZGVyUmVmcmVzaCA9ICgpID0+IHtcbiAgICBjb25zdCBvYmpGb3JDb250cm9sbGVyID0ge1xuICAgICAgc2xpZGVyVHlwZTogdGhpcy5zZXR0aW5ncy5zbGlkZXJUeXBlLFxuICAgICAgZGlyZWN0aW9uVHlwZTogdGhpcy5zZXR0aW5ncy5kaXJlY3Rpb25UeXBlLFxuICAgICAgc3RlcDogdGhpcy5zZXR0aW5ncy5zdGVwLFxuICAgICAgc3R5bGU6IHRoaXMuc2V0dGluZ3Muc3R5bGUsXG4gICAgfTtcbiAgICB0aGlzLmNvbnRyb2xsZXIuc2V0Q29udHJvbGxlckZyb21Db250cm9sUGFuZWwob2JqRm9yQ29udHJvbGxlcik7XG5cbiAgICBjb25zdCBvYmpGb3JNb2RlbCA9IHtcbiAgICAgIHNpZ246IHRoaXMuc2V0dGluZ3Muc2lnbixcbiAgICAgIGxvd2VyU2NhbGVCb3VuZDogdGhpcy5zZXR0aW5ncy5sb3dlclNjYWxlQm91bmQsXG4gICAgICB1cHBlclNjYWxlQm91bmQ6IHRoaXMuc2V0dGluZ3MudXBwZXJTY2FsZUJvdW5kLFxuICAgICAgbG93ZXJTbGlkZXJWYWx1ZTogdGhpcy5zZXR0aW5ncy5sb3dlclNsaWRlclZhbHVlLFxuICAgICAgdXBwZXJTbGlkZXJWYWx1ZTogdGhpcy5zZXR0aW5ncy51cHBlclNsaWRlclZhbHVlLFxuICAgIH07XG4gICAgdGhpcy5tb2RlbC5zZXRJbml0aWFsTW9kZWxPcHRpb25zKG9iakZvck1vZGVsKTtcblxuICAgIHRoaXMuY29udHJvbGxlci5jcmVhdGVTbGlkZXIoKTtcbiAgfVxuXG4gIGJ1aWxkUGFuZWwgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udHJvbFBhbmVsID0gdGhpcy5nZXRDb250cm9sUGFuZWwoKTtcbiAgICB0aGlzLmNyZWF0ZVBhbmVsKHRoaXMub3JWYWx1ZXMsICdzZWxlY3QnLCBjb250cm9sUGFuZWwpO1xuICAgIHRoaXMuY3JlYXRlUGFuZWwodGhpcy5udW1lcmFsVmFsdWVzLCAnbnVtZXJhbCcsIGNvbnRyb2xQYW5lbCk7XG4gIH1cbn1cblxuZXhwb3J0IHsgQ29udHJvbFBhbmVsIH07XG4iLCJpbnRlcmZhY2UgQ29udHJvbGxlciB7XG4gIGlkRm9yQ29udHJvbFBhbmVsPzogc3RyaW5nO1xuICBlbGVtZW50SWQ/OiBzdHJpbmc7XG4gIHNpZ24/OiBzdHJpbmc7XG4gIGxvd2VyU2NhbGVCb3VuZD86IG51bWJlcjtcbiAgdXBwZXJTY2FsZUJvdW5kPzogbnVtYmVyO1xuICBsb3dlclNsaWRlclZhbHVlPzogbnVtYmVyO1xuICB1cHBlclNsaWRlclZhbHVlPzogbnVtYmVyO1xuICBzbGlkZXJUeXBlPzogc3RyaW5nO1xuICBkaXJlY3Rpb25UeXBlPzogc3RyaW5nO1xuICBzdGVwPzogbnVtYmVyO1xuICBzdHlsZT86IHN0cmluZztcblxuICBtb2RlbD86IGFueTtcbiAgdmlldz86IGFueTtcbiAgY29udHJvbFBhbmVsPzogYW55O1xufVxuXG5pbnRlcmZhY2Ugb2JqRnJvbVZpZXcge1xuICBsb3dlclNsaWRlclZhbHVlPzogbnVtYmVyO1xuICB1cHBlclNsaWRlclZhbHVlPzogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2Ugb2JqRnJvbUNvbnRyb2xQYW5lbCB7XG4gIHNsaWRlclR5cGU6IHN0cmluZztcbiAgZGlyZWN0aW9uVHlwZTogc3RyaW5nO1xuICBzdGVwOiBudW1iZXI7XG4gIHN0eWxlOiBzdHJpbmc7XG59XG5cbmNsYXNzIENvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvcihzZXR0aW5nczogYW55KSB7XG4gICAgdGhpcy5lbGVtZW50SWQgPSBzZXR0aW5ncy5lbGVtZW50SWQ7XG4gICAgdGhpcy5zbGlkZXJUeXBlID0gc2V0dGluZ3Muc2xpZGVyVHlwZSB8fCAnc2luZ2xlJztcbiAgICB0aGlzLmRpcmVjdGlvblR5cGUgPSBzZXR0aW5ncy5kaXJlY3Rpb25UeXBlIHx8ICdob3Jpem9udGFsJztcbiAgICB0aGlzLnN0ZXAgPSBzZXR0aW5ncy5zdGVwIHx8IDI7XG4gICAgdGhpcy5pZEZvckNvbnRyb2xQYW5lbCA9IHNldHRpbmdzLmlkRm9yQ29udHJvbFBhbmVsIHx8ICcnO1xuICAgIHRoaXMuc3R5bGUgPSBzZXR0aW5ncy5zdHlsZSB8fCAnaXNzJztcbiAgfVxuXG4gIGNyZWF0ZVNsaWRlcigpIHtcbiAgICB0aGlzLnNldENvbnRyb2xsZXIoKTtcbiAgICB0aGlzLnNldEFuZFJ1blZpZXcoKTtcbiAgfVxuXG4gIHNldENvbnRyb2xsZXIoKSB7XG4gICAgY29uc3Qgb2JqRnJvbU1vZGVsID0gdGhpcy5nZXRNb2RlbCgpO1xuICAgIHRoaXMubG93ZXJTbGlkZXJWYWx1ZSA9IG9iakZyb21Nb2RlbC5sb3dlclNsaWRlclZhbHVlO1xuICAgIHRoaXMudXBwZXJTbGlkZXJWYWx1ZSA9IG9iakZyb21Nb2RlbC51cHBlclNsaWRlclZhbHVlO1xuICAgIHRoaXMubG93ZXJTY2FsZUJvdW5kID0gb2JqRnJvbU1vZGVsLmxvd2VyU2NhbGVCb3VuZDtcbiAgICB0aGlzLnVwcGVyU2NhbGVCb3VuZCA9IG9iakZyb21Nb2RlbC51cHBlclNjYWxlQm91bmQ7XG4gICAgdGhpcy5zaWduID0gb2JqRnJvbU1vZGVsLnNpZ247XG4gIH1cblxuICBnZXRNb2RlbCgpIHtcbiAgICByZXR1cm4gdGhpcy5tb2RlbC5nZXRNb2RlbCgpO1xuICB9XG5cbiAgc2V0QW5kUnVuVmlldygpIHtcbiAgICBjb25zdCBvYmogPSB7XG4gICAgICBlbGVtZW50SWQ6IHRoaXMuZWxlbWVudElkLFxuICAgICAgc2lnbjogdGhpcy5zaWduLFxuICAgICAgbG93ZXJTY2FsZUJvdW5kOiB0aGlzLmxvd2VyU2NhbGVCb3VuZCxcbiAgICAgIHVwcGVyU2NhbGVCb3VuZDogdGhpcy51cHBlclNjYWxlQm91bmQsXG4gICAgICBsb3dlclNsaWRlclZhbHVlOiB0aGlzLmxvd2VyU2xpZGVyVmFsdWUsXG4gICAgICB1cHBlclNsaWRlclZhbHVlOiB0aGlzLnVwcGVyU2xpZGVyVmFsdWUsXG4gICAgICBzbGlkZXJUeXBlOiB0aGlzLnNsaWRlclR5cGUsXG4gICAgICBkaXJlY3Rpb25UeXBlOiB0aGlzLmRpcmVjdGlvblR5cGUsXG4gICAgICBzdGVwOiB0aGlzLnN0ZXAsXG4gICAgICBzdHlsZTogdGhpcy5zdHlsZSxcbiAgICB9O1xuICAgIHRoaXMudmlldy5zZXRTdGFydGluZ0NvbmRpdGlvbnMob2JqKTtcbiAgICB0aGlzLnZpZXcuaW5pdCgpO1xuICB9XG5cbiAgYmluZE1vZGVsKG1vZGVsOiBhbnkpIHtcbiAgICB0aGlzLm1vZGVsID0gbW9kZWw7XG4gIH1cblxuICBzZXRNb2RlbCgpIHtcbiAgICB0aGlzLm1vZGVsLnNldE1vZGVsKHtcbiAgICAgIGxvd2VyU2xpZGVyVmFsdWU6IHRoaXMubG93ZXJTbGlkZXJWYWx1ZSxcbiAgICAgIHVwcGVyU2xpZGVyVmFsdWU6IHRoaXMudXBwZXJTbGlkZXJWYWx1ZSxcbiAgICB9KTtcbiAgfVxuXG4gIGJpbmRWaWV3KHZpZXc6IGFueSkge1xuICAgIHRoaXMudmlldyA9IHZpZXc7XG4gIH1cblxuICBnZXRWaWV3KG9iajogb2JqRnJvbVZpZXcpIHtcbiAgICBpZiAodGhpcy5zbGlkZXJUeXBlID09PSAnZG91YmxlJykge1xuICAgICAgdGhpcy5sb3dlclNsaWRlclZhbHVlID0gb2JqLmxvd2VyU2xpZGVyVmFsdWU7XG4gICAgICB0aGlzLnVwcGVyU2xpZGVyVmFsdWUgPSBvYmoudXBwZXJTbGlkZXJWYWx1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc2xpZGVyVHlwZSA9PT0gJ3NpbmdsZScpIHtcbiAgICAgIHRoaXMubG93ZXJTbGlkZXJWYWx1ZSA9IG9iai5sb3dlclNsaWRlclZhbHVlO1xuICAgIH1cbiAgICB0aGlzLnNldE1vZGVsKCk7XG4gIH1cblxuICBnZXRDb250cm9sbGVyKCkge1xuICAgIHJldHVybiB7XG4gICAgICBlbGVtZW50SWQ6IHRoaXMuZWxlbWVudElkLFxuICAgICAgc2lnbjogdGhpcy5zaWduLFxuICAgICAgbG93ZXJTY2FsZUJvdW5kOiB0aGlzLmxvd2VyU2NhbGVCb3VuZCxcbiAgICAgIHVwcGVyU2NhbGVCb3VuZDogdGhpcy51cHBlclNjYWxlQm91bmQsXG4gICAgICBsb3dlclNsaWRlclZhbHVlOiB0aGlzLmxvd2VyU2xpZGVyVmFsdWUsXG4gICAgICB1cHBlclNsaWRlclZhbHVlOiB0aGlzLnVwcGVyU2xpZGVyVmFsdWUsXG4gICAgICBzbGlkZXJUeXBlOiB0aGlzLnNsaWRlclR5cGUsXG4gICAgICBzdGVwOiB0aGlzLnN0ZXAsXG4gICAgfTtcbiAgfVxuXG4gIGJpbmRDb250cm9sUGFuZWwoY250cmxQbmw6IGFueSkge1xuICAgIHRoaXMuY29udHJvbFBhbmVsID0gY250cmxQbmw7XG4gIH1cblxuICBzZXRDb250cm9sbGVyRnJvbUNvbnRyb2xQYW5lbCA9IChvYmo6IG9iakZyb21Db250cm9sUGFuZWwpID0+IHtcbiAgICB0aGlzLnN0ZXAgPSBvYmouc3RlcDtcbiAgICB0aGlzLnNsaWRlclR5cGUgPSBvYmouc2xpZGVyVHlwZTtcbiAgICB0aGlzLmRpcmVjdGlvblR5cGUgPSBvYmouZGlyZWN0aW9uVHlwZTtcbiAgICB0aGlzLnN0eWxlID0gb2JqLnN0eWxlO1xuICB9XG59XG5cbmV4cG9ydCB7IENvbnRyb2xsZXIgfTtcbiIsImltcG9ydCAnLi4vc3R5bGVzLnNjc3MnO1xuXG5pbXBvcnQgeyBJU1NsaWRlciB9IGZyb20gJy4vSVNTbGlkZXInO1xuXG5jb25zdCBzZXR0aW5nc0Zvckhvcml6b250YWxEdWJsZSA9IHtcbiAgaWRGb3JDb250cm9sUGFuZWw6ICdkb2NfcGFuZWwnLFxuICBlbGVtZW50SWQ6ICdpc3MnLFxuICBzaWduOiAnJCcsXG4gIGxvd2VyU2NhbGVCb3VuZDogMTAwLFxuICB1cHBlclNjYWxlQm91bmQ6IDE1MDAsXG4gIGxvd2VyU2xpZGVyVmFsdWU6IDIwMCxcbiAgdXBwZXJTbGlkZXJWYWx1ZTogODAwLFxuICBzbGlkZXJUeXBlOiAnZG91YmxlJyxcbiAgZGlyZWN0aW9uVHlwZTogJ2hvcml6b250YWwnLFxuICBzdGVwOiAxMCxcbiAgc3R5bGU6ICdpc3NIb3Jpem9udGFsJyxcbn07XG5JU1NsaWRlcihzZXR0aW5nc0Zvckhvcml6b250YWxEdWJsZSk7XG5cbmNvbnN0IHNldHRpbmdzRm9ySG9yaXpvbnRhbFNpbmdsZSA9IHtcbiAgaWRGb3JDb250cm9sUGFuZWw6ICdkb2NfcGFuZWxfMicsXG4gIGVsZW1lbnRJZDogJ2lzc18yJyxcbiAgc2lnbjogJyQnLFxuICBsb3dlclNjYWxlQm91bmQ6IDEwMCxcbiAgdXBwZXJTY2FsZUJvdW5kOiAxNTAwLFxuICBsb3dlclNsaWRlclZhbHVlOiAyMDAsXG4gIHVwcGVyU2xpZGVyVmFsdWU6IDgwMCxcbiAgc2xpZGVyVHlwZTogJ3NpbmdsZScsXG4gIGRpcmVjdGlvblR5cGU6ICdob3Jpem9udGFsJyxcbiAgc3RlcDogMTAsXG4gIHN0eWxlOiAnaXNzSG9yaXpvbnRhbCcsXG59O1xuSVNTbGlkZXIoc2V0dGluZ3NGb3JIb3Jpem9udGFsU2luZ2xlKTtcblxuY29uc3Qgc2V0dGluZ3NGb3JWZXJ0aWNhbERvdWJsZSA9IHtcbiAgaWRGb3JDb250cm9sUGFuZWw6ICdkb2NfcGFuZWxfMycsXG4gIGVsZW1lbnRJZDogJ2lzc18zJyxcbiAgc2lnbjogJyQnLFxuICBsb3dlclNjYWxlQm91bmQ6IDEwMCxcbiAgdXBwZXJTY2FsZUJvdW5kOiAxNTAwLFxuICBsb3dlclNsaWRlclZhbHVlOiAyMDAsXG4gIHVwcGVyU2xpZGVyVmFsdWU6IDgwMCxcbiAgc2xpZGVyVHlwZTogJ2RvdWJsZScsXG4gIGRpcmVjdGlvblR5cGU6ICd2ZXJ0aWNhbCcsXG4gIHN0ZXA6IDEwLFxuICBzdHlsZTogJ2lzc1ZlcnRpY2FsJyxcbn07XG5cbklTU2xpZGVyKHNldHRpbmdzRm9yVmVydGljYWxEb3VibGUpO1xuXG5jb25zdCBzZXR0aW5nc0ZvclZlcnRpY2FsU2luZ2xlID0ge1xuICBpZEZvckNvbnRyb2xQYW5lbDogJ2RvY19wYW5lbF80JyxcbiAgZWxlbWVudElkOiAnaXNzXzQnLFxuICBzaWduOiAnJCcsXG4gIGxvd2VyU2NhbGVCb3VuZDogMTAwLFxuICB1cHBlclNjYWxlQm91bmQ6IDE1MDAsXG4gIGxvd2VyU2xpZGVyVmFsdWU6IDIwMCxcbiAgdXBwZXJTbGlkZXJWYWx1ZTogODAwLFxuICBzbGlkZXJUeXBlOiAnc2luZ2xlJyxcbiAgZGlyZWN0aW9uVHlwZTogJ3ZlcnRpY2FsJyxcbiAgc3RlcDogMTAsXG4gIHN0eWxlOiAnaXNzVmVydGljYWwnLFxufTtcblxuSVNTbGlkZXIoc2V0dGluZ3NGb3JWZXJ0aWNhbFNpbmdsZSk7XG4iLCJpbnRlcmZhY2UgTW9kZWwge1xuICBsb3dlclNjYWxlQm91bmQ6IG51bWJlcjtcbiAgdXBwZXJTY2FsZUJvdW5kOiBudW1iZXI7XG4gIGxvd2VyU2xpZGVyVmFsdWU6IG51bWJlcjtcbiAgdXBwZXJTbGlkZXJWYWx1ZTogbnVtYmVyO1xuICBzaWduOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBvYmpGcm9tVmlldyB7XG4gIGxvd2VyU2xpZGVyVmFsdWU/OiBudW1iZXI7XG4gIHVwcGVyU2xpZGVyVmFsdWU/OiBudW1iZXI7XG59XG5cbmludGVyZmFjZSBvYmpGcm9tQ29udHJvbGxlciB7XG4gIGxvd2VyU2NhbGVCb3VuZDogbnVtYmVyO1xuICB1cHBlclNjYWxlQm91bmQ6IG51bWJlcjtcbiAgbG93ZXJTbGlkZXJWYWx1ZTogbnVtYmVyO1xuICB1cHBlclNsaWRlclZhbHVlOiBudW1iZXI7XG4gIHNpZ246IHN0cmluZztcbn1cblxuY2xhc3MgTW9kZWwge1xuICBjb25zdHJ1Y3RvcihwYXJhbTogb2JqRnJvbUNvbnRyb2xsZXIpIHtcbiAgICB0aGlzLmxvd2VyU2NhbGVCb3VuZCA9IHBhcmFtLmxvd2VyU2NhbGVCb3VuZCB8fCAwO1xuICAgIHRoaXMudXBwZXJTY2FsZUJvdW5kID0gcGFyYW0udXBwZXJTY2FsZUJvdW5kIHx8IDEwMDA7XG4gICAgdGhpcy5sb3dlclNsaWRlclZhbHVlID0gcGFyYW0ubG93ZXJTbGlkZXJWYWx1ZSB8fCAyMDA7XG4gICAgdGhpcy51cHBlclNsaWRlclZhbHVlID0gcGFyYW0udXBwZXJTbGlkZXJWYWx1ZSB8fCA4MDA7XG4gICAgdGhpcy5zaWduID0gcGFyYW0uc2lnbiB8fCAnPyc7XG4gIH1cblxuICBzZXRNb2RlbChvYmo6IG9iakZyb21WaWV3KSB7XG4gICAgdGhpcy5sb3dlclNsaWRlclZhbHVlID0gb2JqLmxvd2VyU2xpZGVyVmFsdWU7XG4gICAgdGhpcy51cHBlclNsaWRlclZhbHVlID0gb2JqLnVwcGVyU2xpZGVyVmFsdWU7XG4gIH1cblxuICBzZXRJbml0aWFsTW9kZWxPcHRpb25zID0gKHBhcmFtOiBvYmpGcm9tQ29udHJvbGxlcikgPT4ge1xuICAgIHRoaXMubG93ZXJTY2FsZUJvdW5kID0gcGFyYW0ubG93ZXJTY2FsZUJvdW5kO1xuICAgIHRoaXMudXBwZXJTY2FsZUJvdW5kID0gcGFyYW0udXBwZXJTY2FsZUJvdW5kO1xuICAgIHRoaXMubG93ZXJTbGlkZXJWYWx1ZSA9IHBhcmFtLmxvd2VyU2xpZGVyVmFsdWU7XG4gICAgdGhpcy51cHBlclNsaWRlclZhbHVlID0gcGFyYW0udXBwZXJTbGlkZXJWYWx1ZTtcbiAgICB0aGlzLnNpZ24gPSBwYXJhbS5zaWduO1xuICB9XG5cbiAgZ2V0TW9kZWwoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxvd2VyU2NhbGVCb3VuZDogdGhpcy5sb3dlclNjYWxlQm91bmQsXG4gICAgICB1cHBlclNjYWxlQm91bmQ6IHRoaXMudXBwZXJTY2FsZUJvdW5kLFxuICAgICAgbG93ZXJTbGlkZXJWYWx1ZTogdGhpcy5sb3dlclNsaWRlclZhbHVlLFxuICAgICAgdXBwZXJTbGlkZXJWYWx1ZTogdGhpcy51cHBlclNsaWRlclZhbHVlLFxuICAgICAgc2lnbjogdGhpcy5zaWduLFxuICAgIH07XG4gIH1cbn1cblxuZXhwb3J0IHsgTW9kZWwgfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=