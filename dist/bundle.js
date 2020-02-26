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
                alert('Шаг в пикселях меньше 1px, расчеты не производятся. Шаг автоматически будет увеличиваться на 50, пока не будет соответствовать условиям');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy5zY3NzPzAyOWEiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL0lTU2xpZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9WaWV3LnRzIiwid2VicGFjazovLy8uL3NyYy90cy9jb250cm9sUGFuZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2NvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy90cy9tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEsdUM7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFnQztBQUNVO0FBQ1o7QUFDZ0I7QUFnQjlDLFNBQVMsUUFBUSxDQUFDLEtBQVk7SUFFNUIsTUFBTSxRQUFRLEdBQVE7UUFDcEIsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixJQUFJLFdBQVc7UUFDekQsU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTLElBQUksS0FBSztRQUNuQyxJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUksSUFBSSxHQUFHO1FBQ3ZCLGVBQWUsRUFBRSxLQUFLLENBQUMsZUFBZSxJQUFJLENBQUM7UUFDM0MsZUFBZSxFQUFFLEtBQUssQ0FBQyxlQUFlLElBQUksSUFBSTtRQUM5QyxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsZ0JBQWdCLElBQUksR0FBRztRQUMvQyxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsZ0JBQWdCLElBQUksR0FBRztRQUMvQyxVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVUsSUFBSSxRQUFRO1FBQ3hDLGFBQWEsRUFBRSxLQUFLLENBQUMsYUFBYSxJQUFJLFlBQVk7UUFDbEQsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJLElBQUksRUFBRTtRQUN0QixLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUssSUFBSSxLQUFLO0tBQzVCLENBQUM7SUFFRix5Q0FBeUM7SUFDekMsTUFBTSxLQUFLLEdBQUcsSUFBSSw0Q0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2xDLE1BQU0sVUFBVSxHQUFHLElBQUksc0RBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM1QyxNQUFNLElBQUksR0FBRyxJQUFJLDBDQUFJLEVBQUUsQ0FBQztJQUN4QixNQUFNLFlBQVksR0FBRyxJQUFJLDBEQUFZLEVBQUUsQ0FBQztJQUV4QyxVQUFVLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVCLFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsVUFBVSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxDQUFDO0lBRTFDLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDaEMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN4QyxZQUFZLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzlCLFlBQVksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7SUFFbkMsVUFBVSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBRTFCLFlBQVksQ0FBQyxVQUFVLEVBQUUsQ0FBQztBQUM1QixDQUFDO0FBRW1COzs7Ozs7Ozs7Ozs7O0FDa0JwQjtBQUFBO0FBQUEsTUFBTSxJQUFJO0lBQVY7UUFDRSxtQkFBYyxHQUFHLENBQUMsVUFBZSxFQUFFLEVBQUU7WUFDbkMsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDL0IsQ0FBQztRQVVELDBCQUFxQixHQUFHLENBQUMsR0FBMkIsRUFBRSxFQUFFO1lBQ3RELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxHQUFHLENBQUMsU0FBUyxFQUFFLElBQUksTUFBTSxDQUFDO1lBQy9DLElBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7WUFFbkQsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxJQUFJLEdBQUcsQ0FBQztZQUM1QixJQUFJLENBQUMsZUFBZSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3hELElBQUksQ0FBQyxlQUFlLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsSUFBSSxJQUFJLENBQUM7WUFDM0QsSUFBSSxDQUFDLGdCQUFnQixHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxHQUFHLENBQUM7WUFDNUQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxHQUFHLENBQUM7WUFFNUQsSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUMsVUFBVSxJQUFJLFFBQVEsQ0FBQztZQUM3QyxJQUFJLENBQUMsYUFBYSxHQUFHLEdBQUcsQ0FBQyxhQUFhLElBQUksWUFBWSxDQUFDO1lBQ3ZELElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUM7WUFFMUIsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQztRQUNsQyxDQUFDO1FBRUQsMEJBQXFCLEdBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQztZQUM3QixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDekIsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsZUFBZSxFQUFFLElBQUksQ0FBQyxlQUFlO1lBQ3JDLGVBQWUsRUFBRSxJQUFJLENBQUMsZUFBZTtZQUNyQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsZ0JBQWdCO1lBQ3ZDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxnQkFBZ0I7WUFDdkMsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVO1lBQzNCLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtTQUNoQixDQUFDLENBQUM7UUFFSCxTQUFJLEdBQUcsR0FBRyxFQUFFO1lBQ1YsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNoQixJQUFJLENBQUMsMkJBQTJCLEVBQUUsQ0FBQztZQUNuQyxJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztZQUM5QixJQUFJLENBQUMsNEJBQTRCLEVBQUUsQ0FBQztZQUNwQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztZQUMxQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDckIsQ0FBQztRQUVELGNBQVMsR0FBRyxHQUFHLEVBQUU7WUFDZixJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssUUFBUSxFQUFFO2dCQUNoQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7YUFDeEI7WUFDRCxJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssUUFBUSxFQUFFO2dCQUNoQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7YUFDeEI7UUFDSCxDQUFDO1FBRUQsb0JBQWUsR0FBRyxHQUFHLEVBQUU7WUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsZUFBZSxJQUFJLENBQUMsS0FBSztxQkFDOUIsSUFBSSxDQUFDLEtBQUs7O3FCQUVWLElBQUksQ0FBQyxLQUFLO3FCQUNWLElBQUksQ0FBQyxLQUFLO29CQUNYLElBQUksQ0FBQyxLQUFLO29CQUNWLElBQUksQ0FBQyxLQUFLLGdCQUFnQixJQUFJLENBQUMsS0FBSztvQkFDcEMsSUFBSSxDQUFDLEtBQUssWUFBWSxJQUFJLENBQUMsS0FBSztvQkFDaEMsSUFBSSxDQUFDLEtBQUs7YUFDakIsQ0FBQztRQUNaLENBQUM7UUFFRCxvQkFBZSxHQUFHLEdBQUcsRUFBRTtZQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxlQUFlLElBQUksQ0FBQyxLQUFLO3FCQUM5QixJQUFJLENBQUMsS0FBSzs7cUJBRVYsSUFBSSxDQUFDLEtBQUs7O3FCQUVWLElBQUksQ0FBQyxLQUFLO3FCQUNWLElBQUksQ0FBQyxLQUFLO29CQUNYLElBQUksQ0FBQyxLQUFLLHNCQUFzQixJQUFJLENBQUMsS0FBSztvQkFDMUMsSUFBSSxDQUFDLEtBQUsseUJBQXlCLElBQUksQ0FBQyxLQUFLO29CQUM3QyxJQUFJLENBQUMsS0FBSyx1QkFBdUIsSUFBSSxDQUFDLEtBQUs7b0JBQzNDLElBQUksQ0FBQyxLQUFLLDBCQUEwQixJQUFJLENBQUMsS0FBSztvQkFDOUMsSUFBSSxDQUFDLEtBQUs7b0JBQ1YsSUFBSSxDQUFDLEtBQUs7YUFDakIsQ0FBQztRQUNaLENBQUM7UUFFRCxhQUFRLEdBQUcsR0FBRyxFQUFFO1lBQ2QsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7WUFDMUIsSUFBSSxJQUFJLENBQUMsVUFBVSxLQUFLLFFBQVEsRUFBRTtnQkFDaEMsSUFBSSxDQUFDLHlCQUF5QixFQUFFLENBQUM7Z0JBQ2pDLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO2FBQ2hDO2lCQUFNLElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxRQUFRLEVBQUU7Z0JBQ3ZDLElBQUksQ0FBQyx5QkFBeUIsRUFBRSxDQUFDO2dCQUNqQyxJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQzthQUNoQztRQUNILENBQUM7UUFFTyx1QkFBa0IsR0FBRyxHQUFHLEVBQUU7WUFDaEMsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLFFBQVEsQ0FBQyxDQUFDO1lBQ3ZFLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxFQUFFO2dCQUM1QixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQzthQUNoQztRQUNILENBQUM7UUFFTyw4QkFBeUIsR0FBRyxHQUFHLEVBQUU7WUFDdkMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3RFLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUM1RSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLGVBQWUsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN4RixDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDakYsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssYUFBYSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzdFLENBQUM7UUFFTyw4QkFBeUIsR0FBRyxHQUFHLEVBQUU7WUFDdkMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3RFLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzdGLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLGVBQWUsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUM5RyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNwRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxhQUFhLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDN0UsQ0FBQztRQUVPLDRCQUF1QixHQUFHLEdBQUcsRUFBRTtZQUNyQyxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDbkUsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekQsQ0FBQztRQUVPLDRCQUF1QixHQUFHLEdBQUcsRUFBRTtZQUNyQyxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDcEUsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkQsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekQsQ0FBQztRQUVPLDBCQUFxQixHQUFHLENBQUMsU0FBaUIsRUFBRSxNQUFjLEVBQUUsRUFBRTtZQUNwRSxNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzFELElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxLQUFLLE1BQU0sQ0FBQyxFQUFFO2dCQUNuQyxPQUFPLFdBQVcsQ0FBQzthQUNwQjtZQUNELE9BQU8sS0FBSyxDQUFDO1FBQ2YsQ0FBQztRQUdPLGlCQUFZLEdBQUcsQ0FBQyxPQUFvQixFQUFFLEVBQUU7WUFDOUMsSUFBSSxJQUFJLENBQUMsYUFBYSxLQUFLLFlBQVksRUFBRTtnQkFDdkMsT0FBTyxPQUFPLENBQUMsVUFBVSxDQUFDO2FBQzNCO1lBQUMsSUFBSSxJQUFJLENBQUMsYUFBYSxLQUFLLFVBQVUsRUFBRTtnQkFDdkMsT0FBTyxPQUFPLENBQUMsU0FBUyxDQUFDO2FBQzFCO1FBQ0gsQ0FBQyxDQUFDO1FBRUYsZ0NBQTJCLEdBQUcsR0FBRyxFQUFFO1lBQ2pDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUNwQixJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUMvQixDQUFDO1FBRU8saUJBQVksR0FBRyxHQUFHLEVBQUU7WUFDMUIsSUFBSSxJQUFJLENBQUMsYUFBYSxLQUFLLFlBQVksRUFBRTtnQkFDdkMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQzthQUM1QztZQUNELElBQUksSUFBSSxDQUFDLGFBQWEsS0FBSyxVQUFVLEVBQUU7Z0JBQ3JDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUM7YUFDN0M7UUFDSCxDQUFDO1FBRU8sMEJBQXFCLEdBQUcsR0FBRyxFQUFFO1lBQ25DLElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxRQUFRLEVBQUU7Z0JBQ2hDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUM7Z0JBQ2pELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUM7YUFDcEQ7aUJBQU0sSUFBSSxJQUFJLENBQUMsVUFBVSxLQUFLLFFBQVEsRUFBRTtnQkFDdkMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQztnQkFDaEQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQzthQUNuRDtZQUNELElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN2QixDQUFDO1FBRUQsa0JBQWEsR0FBRyxHQUFHLEVBQUU7WUFDbkIsTUFBTSxXQUFXLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ3BHLElBQUksV0FBVyxHQUFHLENBQUMsSUFBSSxXQUFXLEtBQUssQ0FBQyxFQUFFO2dCQUN4QyxLQUFLLENBQUMseUlBQXlJLENBQUMsQ0FBQztnQkFDakosSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztnQkFDM0IsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO2FBQ3RCO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxTQUFTLEdBQUcsV0FBVyxDQUFDO2dCQUM3QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQzthQUNqRDtRQUNILENBQUM7UUFFRCwyQkFBc0IsR0FBRyxHQUFHLEVBQUU7WUFDNUIsSUFBSSxJQUFJLENBQUMsVUFBVSxLQUFLLFFBQVEsRUFBRTtnQkFDaEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQzthQUNwRDtpQkFBTSxJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssUUFBUSxFQUFFO2dCQUN2QyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO2dCQUNsRCxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO2FBQ25EO1FBQ0gsQ0FBQztRQUVELGlDQUE0QixHQUFHLEdBQUcsRUFBRTtZQUNsQyxJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssUUFBUSxFQUFFO2dCQUNoQyxJQUFJLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztnQkFDaEMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO2FBQ25CO1lBQ0QsSUFBSSxJQUFJLENBQUMsVUFBVSxLQUFLLFFBQVEsRUFBRTtnQkFDaEMsSUFBSSxDQUFDLHlCQUF5QixFQUFFLENBQUM7Z0JBQ2pDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQzthQUNuQjtRQUNILENBQUM7UUFFRCw2QkFBd0IsR0FBRyxHQUFHLEVBQUU7WUFDOUIsSUFBSSxJQUFJLENBQUMsYUFBYSxLQUFLLFlBQVksRUFBRTtnQkFDdkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7YUFDdkY7WUFDRCxJQUFJLElBQUksQ0FBQyxhQUFhLEtBQUssVUFBVSxFQUFFO2dCQUNyQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQzthQUN0RjtRQUNILENBQUM7UUFFRCw4QkFBeUIsR0FBRyxHQUFHLEVBQUU7WUFDL0IsSUFBSSxJQUFJLENBQUMsZUFBZSxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxJQUFJLENBQUMsZUFBZSxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtnQkFDbEcsSUFBSSxJQUFJLENBQUMsYUFBYSxLQUFLLFlBQVksRUFBRTtvQkFDdkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7b0JBQ3JGLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDO2lCQUN0RjtnQkFDRCxJQUFJLElBQUksQ0FBQyxhQUFhLEtBQUssVUFBVSxFQUFFO29CQUNyQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQztvQkFDcEYsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7aUJBQ3JGO2FBQ0Y7UUFDSCxDQUFDO1FBRUQsdUJBQWtCLEdBQUcsR0FBRyxFQUFFO1lBQ3hCLElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxRQUFRLEVBQUU7Z0JBQ2hDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLEdBQUcsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUMxRSxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsR0FBRyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDeEU7WUFDRCxJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssUUFBUSxFQUFFO2dCQUNoQyxJQUFJLElBQUksQ0FBQyxhQUFhLEtBQUssWUFBWSxFQUFFO29CQUN2QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxHQUFHLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDekUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsR0FBRyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBRXpFLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxHQUFHLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDdEUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEdBQUcsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO2lCQUN2RTtnQkFFRCxJQUFJLElBQUksQ0FBQyxhQUFhLEtBQUssVUFBVSxFQUFFO29CQUNyQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxHQUFHLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDekUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsR0FBRyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBRXpFLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxHQUFHLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDdEUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEdBQUcsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO2lCQUN2RTthQUVGO1FBQ0gsQ0FBQztRQWFPLGtCQUFhLEdBQUcsQ0FBQyxFQUFTLEVBQUUsRUFBRTtZQUNwQyxFQUFFLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDcEIsSUFBSSxDQUFDLDhCQUE4QixDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ3hDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUN2QyxRQUFRLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztRQUNyRCxDQUFDO1FBRU8sbUNBQThCLEdBQUcsQ0FBQyxFQUFTLEVBQUUsRUFBRTtZQUNyRCxJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssUUFBUSxFQUFFO2dCQUNoQyxJQUFJLENBQUMsNkJBQTZCLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDeEM7WUFDRCxJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssUUFBUSxFQUFFO2dCQUNoQyxJQUFJLENBQUMsNkJBQTZCLEVBQUUsQ0FBQzthQUN0QztRQUNILENBQUM7UUFFTyxrQ0FBNkIsR0FBRyxDQUFDLEVBQVMsRUFBRSxFQUFFO1lBQ3BELElBQUksSUFBSSxDQUFDLGFBQWEsS0FBSyxZQUFZLEVBQUU7Z0JBQ3ZDLElBQUksRUFBRSxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsV0FBVyxFQUFFO29CQUNsQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7b0JBQ3JDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7b0JBQzFCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUM7b0JBQ2pELElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDO29CQUNqRCxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2lCQUMxRTtnQkFDRCxJQUFJLEVBQUUsQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLFdBQVcsRUFBRTtvQkFDbEMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO29CQUNyQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDO29CQUNqRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztvQkFDMUMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztvQkFDekUsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxlQUFlLENBQUM7aUJBQ2xEO2FBQ0Y7WUFDRCxJQUFJLElBQUksQ0FBQyxhQUFhLEtBQUssVUFBVSxFQUFFO2dCQUNyQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLFdBQVcsRUFBRTtvQkFDbEMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO29CQUNyQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDO29CQUMxQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDO29CQUNqRCxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO29CQUN6RSxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2lCQUMxRTtnQkFDRCxJQUFJLEVBQUUsQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLFdBQVcsRUFBRTtvQkFDbEMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO29CQUNyQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDO29CQUNqRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztvQkFDMUMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztvQkFDekUsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztpQkFDMUU7YUFDRjtRQUNILENBQUM7UUFFTyxrQ0FBNkIsR0FBRyxHQUFHLEVBQUU7WUFDM0MsSUFBSSxJQUFJLENBQUMsYUFBYSxLQUFLLFlBQVksRUFBRTtnQkFDdkMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO2dCQUN0QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDO2dCQUMxQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztnQkFDMUMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxlQUFlLENBQUM7Z0JBQ2pELElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDO2FBQ2xEO1lBQ0QsSUFBSSxJQUFJLENBQUMsYUFBYSxLQUFLLFVBQVUsRUFBRTtnQkFDckMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO2dCQUN0QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDO2dCQUMxQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztnQkFDMUMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxlQUFlLENBQUM7Z0JBQ2pELElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDO2FBQ2xEO1FBQ0gsQ0FBQztRQUVELHFCQUFnQixHQUFHLENBQUMsb0JBQTRCLEVBQUUsRUFBRTtZQUNsRCxJQUFJLElBQUksQ0FBQyxhQUFhLEtBQUssWUFBWSxFQUFFO2dCQUN2QyxJQUFJLG9CQUFvQixJQUFJLENBQUMsRUFBRTtvQkFDN0IsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDO2lCQUM3QjtnQkFDRCxPQUFPLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2FBQ2pHO1lBQ0QsSUFBSSxJQUFJLENBQUMsYUFBYSxLQUFLLFVBQVUsRUFBRTtnQkFDckMsSUFBSSxvQkFBb0IsSUFBSSxDQUFDLEVBQUU7b0JBQzdCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztpQkFDN0I7Z0JBQ0QsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsb0JBQW9CLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQzthQUN2SDtRQUNILENBQUM7UUFFRCwyQkFBc0IsR0FBRyxDQUFDLEVBQWMsRUFBRSxFQUFFO1lBQzFDLE1BQU0sa0JBQWtCLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBRXJELE1BQU0sa0JBQWtCLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1lBRXBFLE1BQU0sb0JBQW9CLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGtCQUFrQixDQUFDLENBQUM7WUFFeEUsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1lBRXpELElBQUksQ0FBQyxVQUFVLENBQUMsb0JBQW9CLENBQUMsQ0FBQztZQUV0QyxJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLENBQUM7WUFFbEMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBRXRDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUVsQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFFbEIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3JCLENBQUM7UUFFTyxxQkFBZ0IsR0FBRyxDQUFDLEVBQWMsRUFBRSxFQUFFO1lBQzVDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1lBQ3JELElBQUksSUFBSSxDQUFDLGFBQWEsS0FBSyxZQUFZLEVBQUU7Z0JBQ3ZDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUM7Z0JBQ25DLE9BQU8sQ0FBQyxFQUFFLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDNUQ7WUFBQyxJQUFJLElBQUksQ0FBQyxhQUFhLEtBQUssVUFBVSxFQUFFO2dCQUN2QyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDO2dCQUNsQyxPQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzdEO1FBQ0gsQ0FBQztRQUVELG9CQUFlLEdBQUcsQ0FBQyxnQkFBd0IsRUFBRSxFQUFFO1lBQzdDLElBQUksSUFBSSxDQUFDLGFBQWEsS0FBSyxZQUFZLEVBQUU7Z0JBQ3ZDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDdEQ7WUFDRCxJQUFJLElBQUksQ0FBQyxhQUFhLEtBQUssVUFBVSxFQUFFO2dCQUNyQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLGdCQUFnQixDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQzVFO1FBQ0gsQ0FBQztRQUVELHNCQUFpQixHQUFHLENBQUMsbUJBQTJCLEVBQUUsRUFBRTtZQUNsRCxNQUFNLGVBQWUsR0FBRyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQzdELElBQUksSUFBSSxDQUFDLGFBQWEsS0FBSyxZQUFZLEVBQUU7Z0JBQ3ZDLElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxFQUFFO29CQUMxQyxPQUFPLGVBQWUsQ0FBQztpQkFDeEI7Z0JBQ0QsSUFBSSxlQUFlLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO29CQUM1QyxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztpQkFDOUI7Z0JBQ0QsSUFBSSxlQUFlLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO29CQUM1QyxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztpQkFDOUI7YUFDRjtZQUNELElBQUksSUFBSSxDQUFDLGFBQWEsS0FBSyxVQUFVLEVBQUU7Z0JBQ3JDLElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksR0FBRyxlQUFlLENBQUMsQ0FBQyxFQUFFO29CQUNoRSxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksR0FBRyxlQUFlLENBQUMsQ0FBQztpQkFDOUM7Z0JBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsZUFBZSxDQUFDLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO29CQUNsRSxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztpQkFDOUI7Z0JBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsZUFBZSxDQUFDLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO29CQUNsRSxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztpQkFDOUI7YUFDRjtRQUNILENBQUM7UUFFRCxrQkFBYSxHQUFHLENBQUMsbUJBQTJCLEVBQUUsRUFBRTtZQUM5QyxJQUFJLElBQUksQ0FBQyxhQUFhLEtBQUssWUFBWSxFQUFFO2dCQUN2QyxNQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsZUFBZSxHQUFHLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUVqRixJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsZUFBZSxDQUFDLEVBQUU7b0JBQ3pDLE9BQU8sZUFBZSxDQUFDO2lCQUN4QjtnQkFDRCxJQUFJLGVBQWUsR0FBRyxJQUFJLENBQUMsb0JBQW9CLEVBQUU7b0JBQy9DLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDO2lCQUNsQztnQkFDRCxJQUFJLGVBQWUsR0FBRyxJQUFJLENBQUMsb0JBQW9CLEVBQUU7b0JBQy9DLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDO2lCQUNsQzthQUNGO1lBQ0QsSUFBSSxJQUFJLENBQUMsYUFBYSxLQUFLLFVBQVUsRUFBRTtnQkFDckMsTUFBTSxlQUFlLEdBQUcsQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQztnQkFDakYsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLGVBQWUsQ0FBQyxFQUFFO29CQUN6QyxPQUFPLGVBQWUsQ0FBQztpQkFDeEI7Z0JBQ0QsSUFBSSxlQUFlLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixFQUFFO29CQUMvQyxPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztpQkFDbEM7Z0JBQ0QsSUFBSSxlQUFlLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixFQUFFO29CQUMvQyxPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztpQkFDbEM7YUFDRjtRQUNILENBQUM7UUFFRCxxQkFBZ0IsR0FBRyxDQUFDLFNBQWlCLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFFeEgsb0JBQWUsR0FBRyxDQUFDLFNBQWlCLEVBQUUsRUFBRTtZQUN0QyxJQUFJLElBQUksQ0FBQyxhQUFhLEtBQUssWUFBWSxFQUFFO2dCQUN2QyxPQUFPLENBQUMsQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQzthQUMvRjtZQUNELElBQUksSUFBSSxDQUFDLGFBQWEsS0FBSyxVQUFVLEVBQUU7Z0JBQ3JDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDO2FBQy9GO1FBQ0gsQ0FBQztRQUVELHNCQUFpQixHQUFHLENBQUMsU0FBaUIsRUFBRSxFQUFFO1lBQ3hDLE1BQU0sSUFBSSxHQUFHLEdBQUcsU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUN4QyxJQUFJLElBQUksQ0FBQyxhQUFhLEtBQUssWUFBWSxFQUFFO2dCQUN2QyxJQUFJLElBQUksQ0FBQyxZQUFZLEtBQUssSUFBSSxDQUFDLFdBQVcsRUFBRTtvQkFDMUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsR0FBRyxHQUFHLElBQUksRUFBRSxDQUFDO29CQUM5QyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsR0FBRyxHQUFHLElBQUksRUFBRSxDQUFDO2lCQUM1QztnQkFDRCxJQUFJLElBQUksQ0FBQyxZQUFZLEtBQUssSUFBSSxDQUFDLFdBQVcsRUFBRTtvQkFDMUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsR0FBRyxHQUFHLElBQUksRUFBRSxDQUFDO29CQUM5QyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsR0FBRyxHQUFHLElBQUksRUFBRSxDQUFDO2lCQUM1QztnQkFDRCxJQUFJLElBQUksQ0FBQyxZQUFZLEtBQUssSUFBSSxDQUFDLFlBQVksRUFBRTtvQkFDM0MsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsR0FBRyxHQUFHLElBQUksRUFBRSxDQUFDO29CQUMvQyxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsR0FBRyxHQUFHLElBQUksRUFBRSxDQUFDO2lCQUM3QzthQUNGO1lBQ0QsSUFBSSxJQUFJLENBQUMsYUFBYSxLQUFLLFVBQVUsRUFBRTtnQkFDckMsSUFBSSxJQUFJLENBQUMsWUFBWSxLQUFLLElBQUksQ0FBQyxXQUFXLEVBQUU7b0JBQzFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEdBQUcsR0FBRyxJQUFJLEVBQUUsQ0FBQztvQkFDOUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEdBQUcsR0FBRyxJQUFJLEVBQUUsQ0FBQztpQkFDNUM7Z0JBQ0QsSUFBSSxJQUFJLENBQUMsWUFBWSxLQUFLLElBQUksQ0FBQyxXQUFXLEVBQUU7b0JBQzFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEdBQUcsR0FBRyxJQUFJLEVBQUUsQ0FBQztvQkFDOUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEdBQUcsR0FBRyxJQUFJLEVBQUUsQ0FBQztpQkFDNUM7Z0JBQ0QsSUFBSSxJQUFJLENBQUMsWUFBWSxLQUFLLElBQUksQ0FBQyxZQUFZLEVBQUU7b0JBQzNDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLEdBQUcsR0FBRyxJQUFJLEVBQUUsQ0FBQztvQkFDL0MsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLEdBQUcsR0FBRyxJQUFJLEVBQUUsQ0FBQztpQkFDN0M7YUFDRjtRQUNILENBQUM7UUFFRCwwQkFBcUIsR0FBRyxDQUFDLFNBQWlCLEVBQUUsRUFBRTtZQUM1QyxJQUFJLElBQUksQ0FBQyxZQUFZLEtBQUssSUFBSSxDQUFDLFdBQVcsRUFBRTtnQkFDMUMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFNBQVMsQ0FBQzthQUNuQztZQUNELElBQUksSUFBSSxDQUFDLFlBQVksS0FBSyxJQUFJLENBQUMsV0FBVyxFQUFFO2dCQUMxQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsU0FBUyxDQUFDO2FBQ25DO1lBQ0QsSUFBSSxJQUFJLENBQUMsWUFBWSxLQUFLLElBQUksQ0FBQyxZQUFZLEVBQUU7Z0JBQzNDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxTQUFTLENBQUM7YUFDbkM7UUFDSCxDQUFDLENBQUM7UUFFTSxlQUFVLEdBQUcsR0FBRyxFQUFFO1lBQ3hCLE1BQU0sNEJBQTRCLEdBQUcsR0FBRyxFQUFFO2dCQUN4QyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtvQkFDakMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztvQkFDL0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7aUJBQ3hGO3FCQUFNLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO29CQUN4QyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztvQkFDckYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLElBQUksQ0FBQztpQkFDNUY7WUFDSCxDQUFDLENBQUM7WUFFRixNQUFNLDBCQUEwQixHQUFHLEdBQUcsRUFBRTtnQkFDdEMsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7b0JBQ2pDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO29CQUNyRixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO2lCQUM3RztxQkFBTSxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtvQkFDeEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7b0JBQ3BGLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxJQUFJLENBQUM7aUJBQzNGO1lBQ0gsQ0FBQyxDQUFDO1lBRUYsSUFBSSxJQUFJLENBQUMsYUFBYSxLQUFLLFlBQVksRUFBRTtnQkFDdkMsNEJBQTRCLEVBQUUsQ0FBQzthQUNoQztZQUNELElBQUksSUFBSSxDQUFDLGFBQWEsS0FBSyxVQUFVLEVBQUU7Z0JBQ3JDLDBCQUEwQixFQUFFLENBQUM7YUFDOUI7UUFDSCxDQUFDO1FBRUQsZUFBVSxHQUFHLENBQUMsR0FBVyxFQUFFLEVBQUU7WUFDM0IsSUFBSSxJQUFJLENBQUMsYUFBYSxLQUFLLFlBQVksRUFBRTtnQkFDdkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUM7YUFDM0M7aUJBQU0sSUFBSSxJQUFJLENBQUMsYUFBYSxLQUFLLFVBQVUsRUFBRTtnQkFDNUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUM7YUFDMUM7UUFDSCxDQUFDO1FBRUQsZ0JBQVcsR0FBRyxHQUFHLEVBQUU7WUFDakIsTUFBTSxJQUFJLEdBQUcsQ0FBQyxTQUFpQixFQUFFLE1BQWtDLEVBQUUsVUFBa0IsRUFBRSxFQUFFO2dCQUN6RixJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssUUFBUSxFQUFFO29CQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsR0FBRyxVQUFVLElBQUksQ0FBQztpQkFDM0g7Z0JBQ0QsSUFBSSxJQUFJLENBQUMsVUFBVSxLQUFLLFFBQVEsRUFBRTtvQkFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLEdBQUcsVUFBVSxJQUFJLENBQUM7b0JBQ3pILElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxHQUFHLFVBQVUsSUFBSSxDQUFDO2lCQUMxSDtZQUNILENBQUMsQ0FBQztZQUNGLElBQUksSUFBSSxDQUFDLGFBQWEsS0FBSyxZQUFZLEVBQUU7Z0JBQ3ZDLElBQUksQ0FBQyxNQUFNLEVBQUUsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3BEO1lBQ0QsSUFBSSxJQUFJLENBQUMsYUFBYSxLQUFLLFVBQVUsRUFBRTtnQkFDckMsSUFBSSxDQUFDLEtBQUssRUFBRSxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDN0I7UUFDSCxDQUFDO1FBRUQsZUFBVSxHQUFHLEdBQUcsRUFBRTtZQUNoQixJQUFJLElBQUksQ0FBQyxZQUFZLEtBQUssSUFBSSxDQUFDLFdBQVcsRUFBRTtnQkFDMUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztnQkFDdkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQzthQUNyQztpQkFBTSxJQUFJLElBQUksQ0FBQyxZQUFZLEtBQUssSUFBSSxDQUFDLFdBQVcsRUFBRTtnQkFDakQsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztnQkFDdkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQzthQUNyQztRQUNILENBQUM7UUFFRCxpQkFBWSxHQUFHLEdBQUcsRUFBRTtZQUNsQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDaEIsUUFBUSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7WUFDMUIsUUFBUSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDOUIsQ0FBQztJQUNILENBQUM7SUF0akJDLGFBQWE7UUFDWCxNQUFNLEdBQUcsR0FBRztZQUNWLGdCQUFnQixFQUFFLElBQUksQ0FBQyxnQkFBZ0I7WUFDdkMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLGdCQUFnQjtTQUN4QyxDQUFDO1FBQ0YsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQXFQRCxtQkFBbUIsQ0FBQyxLQUFhO1FBQy9CLElBQUksUUFBZ0IsQ0FBQztRQUNyQixJQUFJLElBQUksQ0FBQyxhQUFhLEtBQUssWUFBWSxFQUFFO1lBQ3ZDLFFBQVEsR0FBRyxDQUFDLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztTQUMxRTtRQUNELElBQUksSUFBSSxDQUFDLGFBQWEsS0FBSyxVQUFVLEVBQUU7WUFDckMsUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ2hHO1FBQ0QsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztDQWtURjtBQUVlOzs7Ozs7Ozs7Ozs7O0FDam1CaEI7QUFBQTtBQUFBLE1BQU0sWUFBWTtJQUFsQjtRQUNFLGFBQVEsR0FBVztZQUNqQixJQUFJLEVBQUU7Z0JBQ0osS0FBSyxFQUFFLE1BQU07Z0JBQ2IsV0FBVyxFQUFFLFFBQVE7Z0JBQ3JCLFdBQVcsRUFBRSxNQUFNO2dCQUNuQixLQUFLLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNqQixjQUFjLEVBQUUsTUFBTTthQUN2QjtZQUNELFVBQVUsRUFBRTtnQkFDVixLQUFLLEVBQUUsTUFBTTtnQkFDYixXQUFXLEVBQUUsc0NBQXNDO2dCQUNuRCxXQUFXLEVBQUUsWUFBWTtnQkFDekIsS0FBSyxFQUFFLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDM0IsY0FBYyxFQUFFLFlBQVk7YUFDN0I7WUFDRCxhQUFhLEVBQUU7Z0JBQ2IsS0FBSyxFQUFFLE1BQU07Z0JBQ2IsV0FBVyxFQUFFLGdEQUFnRDtnQkFDN0QsV0FBVyxFQUFFLGVBQWU7Z0JBQzVCLEtBQUssRUFBRSxDQUFDLFlBQVksRUFBRSxVQUFVLENBQUM7Z0JBQ2pDLGNBQWMsRUFBRSxlQUFlO2FBQ2hDO1lBQ0QsU0FBUyxFQUFFO2dCQUNULEtBQUssRUFBRSxPQUFPO2dCQUNkLFdBQVcsRUFBRSxnRkFBZ0Y7Z0JBQzdGLFdBQVcsRUFBRSxPQUFPO2dCQUNwQixLQUFLLEVBQUUsQ0FBQyxlQUFlLEVBQUUsYUFBYSxDQUFDO2dCQUN2QyxjQUFjLEVBQUUsT0FBTzthQUN4QjtTQUNGLENBQUM7UUFFRixrQkFBYSxHQUFXO1lBQ3RCLElBQUksRUFBRTtnQkFDSixLQUFLLEVBQUUsTUFBTTtnQkFDYixXQUFXLEVBQUUsY0FBYztnQkFDM0IsV0FBVyxFQUFFLE1BQU07Z0JBQ25CLElBQUksRUFBRSxRQUFRO2dCQUNkLGNBQWMsRUFBRSxNQUFNO2FBQ3ZCO1lBQ0QsZUFBZSxFQUFFO2dCQUNmLEtBQUssRUFBRSxZQUFZO2dCQUNuQixXQUFXLEVBQUUscUNBQXFDO2dCQUNsRCxXQUFXLEVBQUUsaUJBQWlCO2dCQUM5QixJQUFJLEVBQUUsUUFBUTtnQkFDZCxjQUFjLEVBQUUsaUJBQWlCO2FBQ2xDO1lBQ0QsZUFBZSxFQUFFO2dCQUNmLEtBQUssRUFBRSxZQUFZO2dCQUNuQixXQUFXLEVBQUUsc0NBQXNDO2dCQUNuRCxXQUFXLEVBQUUsaUJBQWlCO2dCQUM5QixJQUFJLEVBQUUsUUFBUTtnQkFDZCxjQUFjLEVBQUUsaUJBQWlCO2FBQ2xDO1lBQ0QsZ0JBQWdCLEVBQUU7Z0JBQ2hCLEtBQUssRUFBRSxZQUFZO2dCQUNuQixXQUFXLEVBQ1QseUVBQXlFO2dCQUMzRSxXQUFXLEVBQUUsa0JBQWtCO2dCQUMvQixJQUFJLEVBQUUsUUFBUTtnQkFDZCxjQUFjLEVBQUUsa0JBQWtCO2FBQ25DO1lBQ0QsZ0JBQWdCLEVBQUU7Z0JBQ2hCLEtBQUssRUFBRSxZQUFZO2dCQUNuQixXQUFXLEVBQUUsMERBQTBEO2dCQUN2RSxXQUFXLEVBQUUsa0JBQWtCO2dCQUMvQixJQUFJLEVBQUUsUUFBUTtnQkFDZCxjQUFjLEVBQUUsa0JBQWtCO2FBQ25DO1NBQ0YsQ0FBQztRQUVGLGFBQVEsR0FBVTtZQUNoQixTQUFTLEVBQUUsS0FBSztZQUNoQixJQUFJLEVBQUUsR0FBRztZQUNULGVBQWUsRUFBRSxDQUFDO1lBQ2xCLGVBQWUsRUFBRSxJQUFJO1lBQ3JCLGdCQUFnQixFQUFFLEdBQUc7WUFDckIsZ0JBQWdCLEVBQUUsR0FBRztZQUNyQixVQUFVLEVBQUUsUUFBUTtZQUNwQixhQUFhLEVBQUUsWUFBWTtZQUMzQixJQUFJLEVBQUUsQ0FBQztZQUNQLGlCQUFpQixFQUFFLFdBQVc7WUFDOUIsS0FBSyxFQUFFLEtBQUs7U0FDYixDQUFDO1FBRUYsbUJBQWMsR0FBRyxDQUFDLFVBQWUsRUFBRSxFQUFFO1lBQ25DLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1FBQy9CLENBQUM7UUFFRCxnQkFBVyxHQUFHLENBQUMsaUJBQXdCLEVBQUUsRUFBRTtZQUN6QyxJQUFJLENBQUMsUUFBUSxHQUFHO2dCQUNkLFNBQVMsRUFBRSxpQkFBaUIsQ0FBQyxTQUFTO2dCQUN0QyxJQUFJLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDNUIsZUFBZSxFQUFFLGlCQUFpQixDQUFDLGVBQWU7Z0JBQ2xELGVBQWUsRUFBRSxpQkFBaUIsQ0FBQyxlQUFlO2dCQUNsRCxnQkFBZ0IsRUFBRSxpQkFBaUIsQ0FBQyxnQkFBZ0I7Z0JBQ3BELGdCQUFnQixFQUFFLGlCQUFpQixDQUFDLGdCQUFnQjtnQkFDcEQsVUFBVSxFQUFFLGlCQUFpQixDQUFDLFVBQVU7Z0JBQ3hDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxhQUFhO2dCQUM5QyxJQUFJLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDNUIsaUJBQWlCLEVBQUUsaUJBQWlCLENBQUMsaUJBQWlCO2dCQUN0RCxLQUFLLEVBQUUsaUJBQWlCLENBQUMsS0FBSzthQUMvQixDQUFDO1FBQ0osQ0FBQztRQUVELGNBQVMsR0FBRyxDQUFDLEtBQVUsRUFBRSxFQUFFO1lBQ3pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLENBQUM7UUFFRCxvQkFBZSxHQUFHLEdBQUcsRUFBRTtZQUNyQixNQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsQ0FBQztZQUM5RSxPQUFPLFlBQVksQ0FBQztRQUN0QixDQUFDO1FBRUQsbUJBQWMsR0FBRyxDQUFDLE1BQW1CLEVBQUUsR0FBUSxFQUFFLEVBQUU7WUFDakQsTUFBTSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsV0FBVyxDQUFDO1FBQzlCLENBQUM7UUFFRCxnQkFBVyxHQUFHLENBQUMsTUFBbUIsRUFBRSxLQUF5QixFQUFFLEVBQUU7WUFDL0QsTUFBTSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1QixDQUFDO1FBRUQsZ0JBQVcsR0FBRyxDQUFDLEdBQVEsRUFBRSxFQUFFO1lBQ3pCLE1BQU0sS0FBSyxHQUFXLEdBQUcsQ0FBQyxXQUFXLENBQUM7WUFFdEMsTUFBTSxHQUFHLEdBQWdCLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7WUFFdkQsTUFBTSxhQUFhLEdBQVMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUUzRCxHQUFHLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBRS9CLE9BQU8sR0FBRyxDQUFDO1FBQ2IsQ0FBQztRQUVELGVBQVUsR0FBRyxDQUFDLEdBQVcsRUFBWSxFQUFFO1lBQ3JDLE1BQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDN0IsT0FBTyxHQUFHLENBQUM7UUFDYixDQUFDO1FBRUQsZ0JBQVcsR0FBRyxDQUFDLFdBQXdCLEVBQUUsS0FBYSxFQUFFLEVBQUU7WUFDeEQsTUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUM5QyxLQUFLLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQztZQUN0QixLQUFLLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM1QixJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN2QyxDQUFDO1FBRUQsMkJBQXNCLEdBQUcsQ0FBQyxHQUFhLEVBQUUsYUFBMEIsRUFBRSxFQUFFO1lBQ3JFLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxjQUFjLEVBQUUsRUFBRTtnQkFDN0IsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDaEQsTUFBTSxDQUFDLEtBQUssR0FBRyxjQUFjLENBQUM7Z0JBQzlCLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLENBQUM7Z0JBQ3JELElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUMvQixJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUMxQyxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUM7UUFFRCx1QkFBa0IsR0FBRyxDQUFDLGtCQUFxQyxFQUFFLFlBQXFELEVBQUUsRUFBRTtZQUNwSCxNQUFNLGNBQWMsR0FBRyxHQUFRLEVBQUU7Z0JBQy9CLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLEdBQUcsa0JBQWtCLENBQUMsS0FBSyxDQUFDO2dCQUN2RCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDdkIsQ0FBQyxDQUFDO1lBQ0Ysa0JBQWtCLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBQ2hFLENBQUM7UUFFRCwwQkFBcUIsR0FBRyxDQUFDLGtCQUFvQyxFQUFFLFlBQXNHLEVBQUUsRUFBRTtZQUN2SyxNQUFNLGFBQWEsR0FBRyxHQUFRLEVBQUU7Z0JBQzlCLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLEdBQUcsTUFBTSxDQUFDLGtCQUFrQixDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUN4RyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDdkIsQ0FBQyxDQUFDO1lBQ0Ysa0JBQWtCLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBQzlELENBQUM7UUFFRCxnQkFBVyxHQUFHLENBQUMsMEJBQWtDLEVBQUUsSUFBWSxFQUFFLFlBQXlCLEVBQUUsRUFBRTtZQUM1RixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLDBCQUEwQixDQUFDLENBQUM7WUFFekQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO2dCQUNuQixNQUFNLFVBQVUsR0FBRywwQkFBMEIsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFFbkQsSUFBSSxXQUF3QixDQUFDO2dCQUM3QixJQUFJLElBQUksS0FBSyxTQUFTLEVBQUU7b0JBQ3RCLFdBQVcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUM3QztnQkFDRCxJQUFJLElBQUksS0FBSyxRQUFRLEVBQUU7b0JBQ3JCLFdBQVcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2lCQUNoRDtnQkFFRCxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsRUFBRSxVQUFVLENBQUMsQ0FBQztnQkFDN0MsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDakQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsV0FBVyxDQUFDLENBQUM7Z0JBRTNDLElBQUksSUFBSSxLQUFLLFNBQVMsRUFBRTtvQkFDdEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsY0FBMEcsQ0FBQyxDQUFDLENBQUM7aUJBQ3JLO2dCQUNELElBQUksSUFBSSxLQUFLLFFBQVEsRUFBRTtvQkFDckIsSUFBSSxDQUFDLHNCQUFzQixDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsV0FBVyxDQUFDLENBQUM7aUJBQzVEO2dCQUVELElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1lBQzlDLENBQUMsQ0FBQyxDQUFDO1lBRUgsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO2dCQUNuQixNQUFNLFVBQVUsR0FBRywwQkFBMEIsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDbkQsTUFBTSxZQUFZLEdBQVEsVUFBVSxDQUFDLGNBQWMsQ0FBQztnQkFFcEQsSUFBSSxJQUFJLEtBQUssU0FBUyxFQUFFO29CQUN0QixNQUFNLFlBQVksR0FBRyxZQUFZLENBQUMsYUFBYSxDQUFDLElBQUksVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFxQixDQUFDO29CQUVsRyxJQUFJLENBQUMscUJBQXFCLENBQUMsWUFBWSxFQUFFLFlBQVksQ0FBQyxDQUFDO2lCQUN4RDtnQkFDRCxJQUFJLElBQUksS0FBSyxRQUFRLEVBQUU7b0JBQ3JCLE1BQU0sWUFBWSxHQUFHLFlBQVksQ0FBQyxhQUFhLENBQUMsSUFBSSxVQUFVLENBQUMsV0FBVyxFQUFFLENBQXNCLENBQUM7b0JBQ25HLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLEVBQUUsWUFBWSxDQUFDLENBQUM7aUJBQ3JEO1lBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDO1FBRUQsa0JBQWEsR0FBRyxHQUFHLEVBQUU7WUFDbkIsTUFBTSxnQkFBZ0IsR0FBRztnQkFDdkIsVUFBVSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVTtnQkFDcEMsYUFBYSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYTtnQkFDMUMsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSTtnQkFDeEIsS0FBSyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSzthQUMzQixDQUFDO1lBQ0YsSUFBSSxDQUFDLFVBQVUsQ0FBQyw2QkFBNkIsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBRWhFLE1BQU0sV0FBVyxHQUFHO2dCQUNsQixJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJO2dCQUN4QixlQUFlLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlO2dCQUM5QyxlQUFlLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlO2dCQUM5QyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLGdCQUFnQjtnQkFDaEQsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0I7YUFDakQsQ0FBQztZQUNGLElBQUksQ0FBQyxLQUFLLENBQUMsc0JBQXNCLENBQUMsV0FBVyxDQUFDLENBQUM7WUFFL0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNqQyxDQUFDO1FBRUQsZUFBVSxHQUFHLEdBQUcsRUFBRTtZQUNoQixNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDNUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxZQUFZLENBQUMsQ0FBQztZQUN4RCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsU0FBUyxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQ2hFLENBQUM7SUFDSCxDQUFDO0NBQUE7QUFFdUI7Ozs7Ozs7Ozs7Ozs7QUMzUHhCO0FBQUE7QUFBQSxNQUFNLFVBQVU7SUFDZCxZQUFZLFFBQWE7UUF1RnpCLGtDQUE2QixHQUFHLENBQUMsR0FBd0IsRUFBRSxFQUFFO1lBQzNELElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQztZQUNyQixJQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUM7WUFDakMsSUFBSSxDQUFDLGFBQWEsR0FBRyxHQUFHLENBQUMsYUFBYSxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQztRQUN6QixDQUFDO1FBM0ZDLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQztRQUNwQyxJQUFJLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQyxVQUFVLElBQUksUUFBUSxDQUFDO1FBQ2xELElBQUksQ0FBQyxhQUFhLEdBQUcsUUFBUSxDQUFDLGFBQWEsSUFBSSxZQUFZLENBQUM7UUFDNUQsSUFBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsaUJBQWlCLEdBQUcsUUFBUSxDQUFDLGlCQUFpQixJQUFJLEVBQUUsQ0FBQztRQUMxRCxJQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxZQUFZO1FBQ1YsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQsYUFBYTtRQUNYLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNyQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsWUFBWSxDQUFDLGdCQUFnQixDQUFDO1FBQ3RELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxZQUFZLENBQUMsZ0JBQWdCLENBQUM7UUFDdEQsSUFBSSxDQUFDLGVBQWUsR0FBRyxZQUFZLENBQUMsZUFBZSxDQUFDO1FBQ3BELElBQUksQ0FBQyxlQUFlLEdBQUcsWUFBWSxDQUFDLGVBQWUsQ0FBQztRQUNwRCxJQUFJLENBQUMsSUFBSSxHQUFHLFlBQVksQ0FBQyxJQUFJLENBQUM7SUFDaEMsQ0FBQztJQUVELFFBQVE7UUFDTixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUVELGFBQWE7UUFDWCxNQUFNLEdBQUcsR0FBRztZQUNWLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN6QixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixlQUFlLEVBQUUsSUFBSSxDQUFDLGVBQWU7WUFDckMsZUFBZSxFQUFFLElBQUksQ0FBQyxlQUFlO1lBQ3JDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxnQkFBZ0I7WUFDdkMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLGdCQUFnQjtZQUN2QyxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDM0IsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhO1lBQ2pDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztTQUNsQixDQUFDO1FBQ0YsSUFBSSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFRCxTQUFTLENBQUMsS0FBVTtRQUNsQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDO1lBQ2xCLGdCQUFnQixFQUFFLElBQUksQ0FBQyxnQkFBZ0I7WUFDdkMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLGdCQUFnQjtTQUN4QyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsUUFBUSxDQUFDLElBQVM7UUFDaEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDbkIsQ0FBQztJQUVELE9BQU8sQ0FBQyxHQUFnQjtRQUN0QixJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssUUFBUSxFQUFFO1lBQ2hDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxHQUFHLENBQUMsZ0JBQWdCLENBQUM7WUFDN0MsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQztTQUM5QztRQUNELElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxRQUFRLEVBQUU7WUFDaEMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQztTQUM5QztRQUNELElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRUQsYUFBYTtRQUNYLE9BQU87WUFDTCxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDekIsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsZUFBZSxFQUFFLElBQUksQ0FBQyxlQUFlO1lBQ3JDLGVBQWUsRUFBRSxJQUFJLENBQUMsZUFBZTtZQUNyQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsZ0JBQWdCO1lBQ3ZDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxnQkFBZ0I7WUFDdkMsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVO1lBQzNCLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtTQUNoQixDQUFDO0lBQ0osQ0FBQztJQUVELGdCQUFnQixDQUFDLFFBQWE7UUFDNUIsSUFBSSxDQUFDLFlBQVksR0FBRyxRQUFRLENBQUM7SUFDL0IsQ0FBQztDQVFGO0FBRXFCOzs7Ozs7Ozs7Ozs7O0FDOUh0QjtBQUFBO0FBQUE7QUFBQTtBQUF3QjtBQUVjO0FBRXRDLE1BQU0sMEJBQTBCLEdBQUc7SUFDakMsaUJBQWlCLEVBQUUsV0FBVztJQUM5QixTQUFTLEVBQUUsS0FBSztJQUNoQixJQUFJLEVBQUUsR0FBRztJQUNULGVBQWUsRUFBRSxHQUFHO0lBQ3BCLGVBQWUsRUFBRSxJQUFJO0lBQ3JCLGdCQUFnQixFQUFFLEdBQUc7SUFDckIsZ0JBQWdCLEVBQUUsR0FBRztJQUNyQixVQUFVLEVBQUUsUUFBUTtJQUNwQixhQUFhLEVBQUUsWUFBWTtJQUMzQixJQUFJLEVBQUUsRUFBRTtJQUNSLEtBQUssRUFBRSxlQUFlO0NBQ3ZCLENBQUM7QUFDRiwwREFBUSxDQUFDLDBCQUEwQixDQUFDLENBQUM7QUFFckMsTUFBTSwyQkFBMkIsR0FBRztJQUNsQyxpQkFBaUIsRUFBRSxhQUFhO0lBQ2hDLFNBQVMsRUFBRSxPQUFPO0lBQ2xCLElBQUksRUFBRSxHQUFHO0lBQ1QsZUFBZSxFQUFFLEdBQUc7SUFDcEIsZUFBZSxFQUFFLElBQUk7SUFDckIsZ0JBQWdCLEVBQUUsR0FBRztJQUNyQixnQkFBZ0IsRUFBRSxHQUFHO0lBQ3JCLFVBQVUsRUFBRSxRQUFRO0lBQ3BCLGFBQWEsRUFBRSxZQUFZO0lBQzNCLElBQUksRUFBRSxFQUFFO0lBQ1IsS0FBSyxFQUFFLGVBQWU7Q0FDdkIsQ0FBQztBQUNGLDBEQUFRLENBQUMsMkJBQTJCLENBQUMsQ0FBQztBQUV0QyxNQUFNLHlCQUF5QixHQUFHO0lBQ2hDLGlCQUFpQixFQUFFLGFBQWE7SUFDaEMsU0FBUyxFQUFFLE9BQU87SUFDbEIsSUFBSSxFQUFFLEdBQUc7SUFDVCxlQUFlLEVBQUUsR0FBRztJQUNwQixlQUFlLEVBQUUsSUFBSTtJQUNyQixnQkFBZ0IsRUFBRSxHQUFHO0lBQ3JCLGdCQUFnQixFQUFFLEdBQUc7SUFDckIsVUFBVSxFQUFFLFFBQVE7SUFDcEIsYUFBYSxFQUFFLFVBQVU7SUFDekIsSUFBSSxFQUFFLEVBQUU7SUFDUixLQUFLLEVBQUUsYUFBYTtDQUNyQixDQUFDO0FBRUYsMERBQVEsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0FBRXBDLE1BQU0seUJBQXlCLEdBQUc7SUFDaEMsaUJBQWlCLEVBQUUsYUFBYTtJQUNoQyxTQUFTLEVBQUUsT0FBTztJQUNsQixJQUFJLEVBQUUsR0FBRztJQUNULGVBQWUsRUFBRSxHQUFHO0lBQ3BCLGVBQWUsRUFBRSxJQUFJO0lBQ3JCLGdCQUFnQixFQUFFLEdBQUc7SUFDckIsZ0JBQWdCLEVBQUUsR0FBRztJQUNyQixVQUFVLEVBQUUsUUFBUTtJQUNwQixhQUFhLEVBQUUsVUFBVTtJQUN6QixJQUFJLEVBQUUsRUFBRTtJQUNSLEtBQUssRUFBRSxhQUFhO0NBQ3JCLENBQUM7QUFFRiwwREFBUSxDQUFDLHlCQUF5QixDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7QUMzQ3BDO0FBQUE7QUFBQSxNQUFNLEtBQUs7SUFDVCxZQUFZLEtBQXdCO1FBYXBDLDJCQUFzQixHQUFHLENBQUMsS0FBd0IsRUFBRSxFQUFFO1lBQ3BELElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDLGVBQWUsQ0FBQztZQUM3QyxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQyxlQUFlLENBQUM7WUFDN0MsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQztZQUMvQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDLGdCQUFnQixDQUFDO1lBQy9DLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztRQUN6QixDQUFDO1FBbEJDLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDLGVBQWUsSUFBSSxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUMsZUFBZSxJQUFJLElBQUksQ0FBQztRQUNyRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDLGdCQUFnQixJQUFJLEdBQUcsQ0FBQztRQUN0RCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDLGdCQUFnQixJQUFJLEdBQUcsQ0FBQztRQUN0RCxJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLElBQUksR0FBRyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxRQUFRLENBQUMsR0FBZ0I7UUFDdkIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQztRQUM3QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsR0FBRyxDQUFDLGdCQUFnQixDQUFDO0lBQy9DLENBQUM7SUFVRCxRQUFRO1FBQ04sT0FBTztZQUNMLGVBQWUsRUFBRSxJQUFJLENBQUMsZUFBZTtZQUNyQyxlQUFlLEVBQUUsSUFBSSxDQUFDLGVBQWU7WUFDckMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLGdCQUFnQjtZQUN2QyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsZ0JBQWdCO1lBQ3ZDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtTQUNoQixDQUFDO0lBQ0osQ0FBQztDQUNGO0FBRWdCIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3RzL2luZGV4LnRzXCIpO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IHsgTW9kZWwgfSBmcm9tICcuL21vZGVsJztcbmltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICcuL2NvbnRyb2xsZXInO1xuaW1wb3J0IHsgVmlldyB9IGZyb20gJy4vVmlldyc7XG5pbXBvcnQgeyBDb250cm9sUGFuZWwgfSBmcm9tICcuL2NvbnRyb2xQYW5lbCc7XG5cbmludGVyZmFjZSBQYXJhbSB7XG4gIGlkRm9yQ29udHJvbFBhbmVsPzogc3RyaW5nO1xuICBlbGVtZW50SWQ/OiBzdHJpbmc7XG4gIHNpZ246IHN0cmluZztcbiAgbG93ZXJTY2FsZUJvdW5kPzogbnVtYmVyO1xuICB1cHBlclNjYWxlQm91bmQ/OiBudW1iZXI7XG4gIGxvd2VyU2xpZGVyVmFsdWU/OiBudW1iZXI7XG4gIHVwcGVyU2xpZGVyVmFsdWU/OiBudW1iZXI7XG4gIHNsaWRlclR5cGU/OiBzdHJpbmc7XG4gIGRpcmVjdGlvblR5cGU/OiBzdHJpbmc7XG4gIHN0ZXA/OiBudW1iZXI7XG4gIHN0eWxlPzogc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBJU1NsaWRlcihwYXJhbTogUGFyYW0pIHtcblxuICBjb25zdCBzZXR0aW5nczogYW55ID0ge1xuICAgIGlkRm9yQ29udHJvbFBhbmVsOiBwYXJhbS5pZEZvckNvbnRyb2xQYW5lbCB8fCAnZG9jX3BhbmVsJyxcbiAgICBlbGVtZW50SWQ6IHBhcmFtLmVsZW1lbnRJZCB8fCAnaXNzJyxcbiAgICBzaWduOiBwYXJhbS5zaWduIHx8ICfigr0nLFxuICAgIGxvd2VyU2NhbGVCb3VuZDogcGFyYW0ubG93ZXJTY2FsZUJvdW5kIHx8IDAsXG4gICAgdXBwZXJTY2FsZUJvdW5kOiBwYXJhbS51cHBlclNjYWxlQm91bmQgfHwgMTAwMCxcbiAgICBsb3dlclNsaWRlclZhbHVlOiBwYXJhbS5sb3dlclNsaWRlclZhbHVlIHx8IDIwMCxcbiAgICB1cHBlclNsaWRlclZhbHVlOiBwYXJhbS51cHBlclNsaWRlclZhbHVlIHx8IDgwMCxcbiAgICBzbGlkZXJUeXBlOiBwYXJhbS5zbGlkZXJUeXBlIHx8ICdkb3VibGUnLFxuICAgIGRpcmVjdGlvblR5cGU6IHBhcmFtLmRpcmVjdGlvblR5cGUgfHwgJ2hvcml6b250YWwnLFxuICAgIHN0ZXA6IHBhcmFtLnN0ZXAgfHwgNTAsXG4gICAgc3R5bGU6IHBhcmFtLnN0eWxlIHx8ICdpc3MnLFxuICB9O1xuXG4gIC8vINCf0J7QodCi0KDQntCV0J3QmNCVINCh0JvQkNCZ0JTQldCg0JAg0J/QoNCYINCf0JXQoNCS0J7QnCDQl9CQ0J/Qo9Ch0JrQlVxuICBjb25zdCBtb2RlbCA9IG5ldyBNb2RlbChzZXR0aW5ncyk7XG4gIGNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgQ29udHJvbGxlcihzZXR0aW5ncyk7XG4gIGNvbnN0IHZpZXcgPSBuZXcgVmlldygpO1xuICBjb25zdCBjb250cm9sUGFuZWwgPSBuZXcgQ29udHJvbFBhbmVsKCk7XG5cbiAgY29udHJvbGxlci5iaW5kTW9kZWwobW9kZWwpO1xuICBjb250cm9sbGVyLmJpbmRWaWV3KHZpZXcpO1xuICBjb250cm9sbGVyLmJpbmRDb250cm9sUGFuZWwoY29udHJvbFBhbmVsKTtcblxuICB2aWV3LmJpbmRDb250cm9sbGVyKGNvbnRyb2xsZXIpO1xuICBjb250cm9sUGFuZWwuYmluZENvbnRyb2xsZXIoY29udHJvbGxlcik7XG4gIGNvbnRyb2xQYW5lbC5iaW5kTW9kZWwobW9kZWwpO1xuICBjb250cm9sUGFuZWwuc2V0U2V0dGluZ3Moc2V0dGluZ3MpO1xuXG4gIGNvbnRyb2xsZXIuY3JlYXRlU2xpZGVyKCk7XG5cbiAgY29udHJvbFBhbmVsLmJ1aWxkUGFuZWwoKTtcbn1cblxuZXhwb3J0IHsgSVNTbGlkZXIgfTtcbiIsImludGVyZmFjZSBWaWV3U3RhcnRpbmdDb25kaXRpb25zIHtcbiAgZWxlbWVudElkPzogc3RyaW5nO1xuICBlbGVtPzogYW55O1xuICBzaWduPzogc3RyaW5nO1xuICBsb3dlclNjYWxlQm91bmQ/OiBudW1iZXI7XG4gIHVwcGVyU2NhbGVCb3VuZD86IG51bWJlcjtcbiAgbG93ZXJTbGlkZXJWYWx1ZT86IG51bWJlcjtcbiAgdXBwZXJTbGlkZXJWYWx1ZT86IG51bWJlcjtcbiAgc2xpZGVyVHlwZT86IHN0cmluZztcbiAgZGlyZWN0aW9uVHlwZT86IHN0cmluZztcbiAgc3RlcD86IG51bWJlcjtcbiAgY29udHJvbGxlcj86IGFueTtcbiAgc3R5bGU/OiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBWaWV3IHtcbiAgZWxlbWVudElkOiBzdHJpbmc7XG4gIGVsZW06IGFueTtcbiAgc2lnbjogc3RyaW5nO1xuICBsb3dlclNjYWxlQm91bmQ6IG51bWJlcjtcbiAgdXBwZXJTY2FsZUJvdW5kOiBudW1iZXI7XG4gIGxvd2VyU2xpZGVyVmFsdWU6IG51bWJlcjtcbiAgdXBwZXJTbGlkZXJWYWx1ZTogbnVtYmVyO1xuICBzbGlkZXJUeXBlOiBzdHJpbmc7XG4gIGRpcmVjdGlvblR5cGU6IHN0cmluZztcbiAgc3RlcDogbnVtYmVyO1xuICBjb250cm9sbGVyOiBhbnk7XG4gIHN0eWxlOiBzdHJpbmc7XG5cbiAgc2NhbGU6IEhUTUxFbGVtZW50O1xuICBpbmRlbnQ6IG51bWJlcjtcbiAgbWFpbkF4aXNTaXplOiBudW1iZXI7XG5cbiAgc2xpZGVySW5ET006IFtIVE1MRWxlbWVudF07XG5cbiAgc3RhdGljRmllbGRMb3dlcjogSFRNTEVsZW1lbnQ7XG4gIHN0YXRpY0ZpZWxkVXBwZXI6IEhUTUxFbGVtZW50O1xuICBzdGF0aWNGaWVsZFNpbmdsZTogSFRNTEVsZW1lbnQ7XG5cbiAgZmx5RmllbGRMb3dlcjogSFRNTEVsZW1lbnQ7XG4gIGZseUZpZWxkVXBwZXI6IEhUTUxFbGVtZW50O1xuICBmbHlGaWVsZFNpbmdsZTogSFRNTEVsZW1lbnQ7XG5cbiAgbG93ZXJTbGlkZXI6IEhUTUxFbGVtZW50O1xuICBsb3dlclNsaWRlclBvc2l0aW9uOiBudW1iZXI7XG5cbiAgdXBwZXJTbGlkZXI6IEhUTUxFbGVtZW50O1xuICB1cHBlclNsaWRlclBvc2l0aW9uOiBudW1iZXI7XG5cbiAgc2luZ2xlU2xpZGVyOiBIVE1MRWxlbWVudDtcbiAgc2luZ2xlU2xpZGVyUG9zaXRpb246IG51bWJlcjtcblxuICBzbGlkZXJXaWR0aDogbnVtYmVyO1xuICBzbGlkZXJIZWlnaHQ6IG51bWJlcjtcblxuICByaWJib246IEhUTUxFbGVtZW50O1xuXG4gIGNsaWVudFJlY3Q6IENsaWVudFJlY3Q7XG5cbiAgaW5uZXJNb3VzZVBvc2l0aW9uOiBudW1iZXI7XG5cbiAgcGl4ZWxTdGVwOiBudW1iZXI7XG4gIHJvdW5kZWRQaXhlbFN0ZXA6IG51bWJlcjtcblxuICB0YXJnZXRTbGlkZXI6IEhUTUxFbGVtZW50O1xuXG4gIGxvd2VyUmVzdHJpY3Rpb246IG51bWJlcjtcbiAgdXBwZXJSZXN0cmljdGlvbjogbnVtYmVyO1xuXG4gIGxvd2VyQ29zdFJlc3RyaWN0aW9uOiBudW1iZXI7XG4gIHVwcGVyQ29zdFJlc3RyaWN0aW9uOiBudW1iZXI7XG59XG5cbmNsYXNzIFZpZXcge1xuICBiaW5kQ29udHJvbGxlciA9IChjb250cm9sbGVyOiBhbnkpID0+IHtcbiAgICB0aGlzLmNvbnRyb2xsZXIgPSBjb250cm9sbGVyO1xuICB9XG5cbiAgc2V0Q29udHJvbGxlcigpIHtcbiAgICBjb25zdCBvYmogPSB7XG4gICAgICBsb3dlclNsaWRlclZhbHVlOiB0aGlzLmxvd2VyU2xpZGVyVmFsdWUsXG4gICAgICB1cHBlclNsaWRlclZhbHVlOiB0aGlzLnVwcGVyU2xpZGVyVmFsdWUsXG4gICAgfTtcbiAgICB0aGlzLmNvbnRyb2xsZXIuZ2V0VmlldyhvYmopO1xuICB9XG5cbiAgc2V0U3RhcnRpbmdDb25kaXRpb25zID0gKG9iajogVmlld1N0YXJ0aW5nQ29uZGl0aW9ucykgPT4ge1xuICAgIHRoaXMuZWxlbWVudElkID0gYCMke29iai5lbGVtZW50SWR9YCB8fCAnI2lzcyc7XG4gICAgdGhpcy5lbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQob2JqLmVsZW1lbnRJZCk7XG5cbiAgICB0aGlzLnNpZ24gPSBvYmouc2lnbiB8fCAnUic7XG4gICAgdGhpcy5sb3dlclNjYWxlQm91bmQgPSBOdW1iZXIob2JqLmxvd2VyU2NhbGVCb3VuZCkgfHwgMDtcbiAgICB0aGlzLnVwcGVyU2NhbGVCb3VuZCA9IE51bWJlcihvYmoudXBwZXJTY2FsZUJvdW5kKSB8fCAxMDAwO1xuICAgIHRoaXMubG93ZXJTbGlkZXJWYWx1ZSA9IE51bWJlcihvYmoubG93ZXJTbGlkZXJWYWx1ZSkgfHwgMjAwO1xuICAgIHRoaXMudXBwZXJTbGlkZXJWYWx1ZSA9IE51bWJlcihvYmoudXBwZXJTbGlkZXJWYWx1ZSkgfHwgODAwO1xuXG4gICAgdGhpcy5zbGlkZXJUeXBlID0gb2JqLnNsaWRlclR5cGUgfHwgJ3NpbmdsZSc7XG4gICAgdGhpcy5kaXJlY3Rpb25UeXBlID0gb2JqLmRpcmVjdGlvblR5cGUgfHwgJ2hvcml6b250YWwnO1xuICAgIHRoaXMuc3RlcCA9IG9iai5zdGVwIHx8IDI7XG5cbiAgICB0aGlzLnN0eWxlID0gb2JqLnN0eWxlIHx8ICdpc3MnO1xuICB9XG5cbiAgZ2V0U3RhcnRpbmdDb25kaXRpb25zID0gKCkgPT4gKHtcbiAgICBlbGVtZW50SWQ6IHRoaXMuZWxlbWVudElkLFxuICAgIHNpZ246IHRoaXMuc2lnbixcbiAgICBsb3dlclNjYWxlQm91bmQ6IHRoaXMubG93ZXJTY2FsZUJvdW5kLFxuICAgIHVwcGVyU2NhbGVCb3VuZDogdGhpcy51cHBlclNjYWxlQm91bmQsXG4gICAgbG93ZXJTbGlkZXJWYWx1ZTogdGhpcy5sb3dlclNsaWRlclZhbHVlLFxuICAgIHVwcGVyU2xpZGVyVmFsdWU6IHRoaXMudXBwZXJTbGlkZXJWYWx1ZSxcbiAgICBzbGlkZXJUeXBlOiB0aGlzLnNsaWRlclR5cGUsXG4gICAgc3RlcDogdGhpcy5zdGVwLFxuICB9KTtcblxuICBpbml0ID0gKCkgPT4ge1xuICAgIHRoaXMuY3JlYXRlRE9NKCk7XG4gICAgdGhpcy53cml0ZURPTSgpO1xuICAgIHRoaXMud3JpdGVHZW9tZXRyeURPTXRvVmFyaWFibGVzKCk7XG4gICAgdGhpcy5jcmVhdGVMaXN0ZW5lck9uU2xpZGVyKCk7XG4gICAgdGhpcy5tb3Zlc1NsaWRlcnNUb1N0YXJ0UG9zaXRpb25zKCk7XG4gICAgdGhpcy53cml0ZU1vbmV5VG9GaWVsZHMoKTtcbiAgICB0aGlzLm1vdmVUb29sdGlwKCk7XG4gIH1cblxuICBjcmVhdGVET00gPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuc2xpZGVyVHlwZSA9PT0gJ2RvdWJsZScpIHtcbiAgICAgIHRoaXMuY3JlYXRlRG91YmxlRE9NKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLnNsaWRlclR5cGUgPT09ICdzaW5nbGUnKSB7XG4gICAgICB0aGlzLmNyZWF0ZVNpbmdsZURPTSgpO1xuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZVNpbmdsZURPTSA9ICgpID0+IHtcbiAgICB0aGlzLmVsZW0uaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCIke3RoaXMuc3R5bGV9X192YWx1ZS1maWVsZFwiPlxuICAgICAgPHNwYW4gY2xhc3M9XCIke3RoaXMuc3R5bGV9X19zdGF0aWNGaWVsZFwiPjwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz0gXCIke3RoaXMuc3R5bGV9X19jb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9IFwiJHt0aGlzLnN0eWxlfV9fc2NhbGVcIj48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCIke3RoaXMuc3R5bGV9X19jb2xvci1iYXJcIj48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCIke3RoaXMuc3R5bGV9X19zaW5nbGUtZmx5ICR7dGhpcy5zdHlsZX1fX3Rvb2x0aXBcIj48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCIke3RoaXMuc3R5bGV9X19zaW5nbGUgJHt0aGlzLnN0eWxlfV9fZHJhZ1wiPjwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cIiR7dGhpcy5zdHlsZX1fX3Zpc2libGUtc2NhbGVcIj48L2Rpdj5cbiAgICAgIDwvZGl2PmA7XG4gIH1cblxuICBjcmVhdGVEb3VibGVET00gPSAoKSA9PiB7XG4gICAgdGhpcy5lbGVtLmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwiJHt0aGlzLnN0eWxlfV9fdmFsdWUtZmllbGRcIj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiJHt0aGlzLnN0eWxlfV9fc3RhdGljRmllbGRcIj48L3NwYW4+XG4gICAgICAtXG4gICAgICA8c3BhbiBjbGFzcz1cIiR7dGhpcy5zdHlsZX1fX3N0YXRpY0ZpZWxkXCI+PC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPSBcIiR7dGhpcy5zdHlsZX1fX2NvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzcz0gXCIke3RoaXMuc3R5bGV9X19zY2FsZVwiPjwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cIiR7dGhpcy5zdHlsZX1fX2RvdWJsZS1mbHktZmlyc3QgJHt0aGlzLnN0eWxlfV9fdG9vbHRpcFwiPjwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cIiR7dGhpcy5zdHlsZX1fX2RvdWJsZS1maXJzdC1zbGlkZXIgJHt0aGlzLnN0eWxlfV9fZHJhZ1wiPjwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cIiR7dGhpcy5zdHlsZX1fX2RvdWJsZS1mbHktc2Vjb25kICR7dGhpcy5zdHlsZX1fX3Rvb2x0aXBcIj48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCIke3RoaXMuc3R5bGV9X19kb3VibGUtc2Vjb25kLXNsaWRlciAke3RoaXMuc3R5bGV9X19kcmFnXCI+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiJHt0aGlzLnN0eWxlfV9fY29sb3ItYmFyXCI+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiJHt0aGlzLnN0eWxlfV9fdmlzaWJsZS1zY2FsZVwiPjwvZGl2PlxuICAgICAgPC9kaXY+YDtcbiAgfVxuXG4gIHdyaXRlRE9NID0gKCkgPT4ge1xuICAgIHRoaXMuY2hlY2tFbGVtZW50c0luRE9NKCk7XG4gICAgaWYgKHRoaXMuc2xpZGVyVHlwZSA9PT0gJ3NpbmdsZScpIHtcbiAgICAgIHRoaXMud3JpdGVTaW5nbGVET010b1ZhcmlhYmxlcygpO1xuICAgICAgdGhpcy53cml0ZVNpbmdsZVNsaWRlckluZGVudCgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zbGlkZXJUeXBlID09PSAnZG91YmxlJykge1xuICAgICAgdGhpcy53cml0ZURvdWJsZURPTXRvVmFyaWFibGVzKCk7XG4gICAgICB0aGlzLndyaXRlRG91YmxlU2xpZGVySW5kZW50KCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjaGVja0VsZW1lbnRzSW5ET00gPSAoKSA9PiB7XG4gICAgY29uc3QgRE9NRWxlbWVudHMgPSB0aGlzLmVsZW0ucXVlcnlTZWxlY3RvckFsbChgLiR7dGhpcy5zdHlsZX1fX2RyYWdgKTtcbiAgICBpZiAoKERPTUVsZW1lbnRzLmxlbmd0aCA+IDApKSB7XG4gICAgICB0aGlzLnNsaWRlckluRE9NID0gRE9NRWxlbWVudHM7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB3cml0ZVNpbmdsZURPTXRvVmFyaWFibGVzID0gKCkgPT4ge1xuICAgIFt0aGlzLnNjYWxlXSA9IHRoaXMucmV0dXJuRWxlbWVudHNGcm9tRE9NKGAuJHt0aGlzLnN0eWxlfV9fc2NhbGVgLCAxKTtcbiAgICBbdGhpcy5zaW5nbGVTbGlkZXJdID0gdGhpcy5yZXR1cm5FbGVtZW50c0Zyb21ET00oYC4ke3RoaXMuc3R5bGV9X19kcmFnYCwgMSk7XG4gICAgW3RoaXMuc3RhdGljRmllbGRTaW5nbGVdID0gdGhpcy5yZXR1cm5FbGVtZW50c0Zyb21ET00oYC4ke3RoaXMuc3R5bGV9X19zdGF0aWNGaWVsZGAsIDEpO1xuICAgIFt0aGlzLmZseUZpZWxkU2luZ2xlXSA9IHRoaXMucmV0dXJuRWxlbWVudHNGcm9tRE9NKGAuJHt0aGlzLnN0eWxlfV9fdG9vbHRpcGAsIDEpO1xuICAgIFt0aGlzLnJpYmJvbl0gPSB0aGlzLnJldHVybkVsZW1lbnRzRnJvbURPTShgLiR7dGhpcy5zdHlsZX1fX2NvbG9yLWJhcmAsIDEpO1xuICB9XG5cbiAgcHJpdmF0ZSB3cml0ZURvdWJsZURPTXRvVmFyaWFibGVzID0gKCkgPT4ge1xuICAgIFt0aGlzLnNjYWxlXSA9IHRoaXMucmV0dXJuRWxlbWVudHNGcm9tRE9NKGAuJHt0aGlzLnN0eWxlfV9fc2NhbGVgLCAxKTtcbiAgICBbdGhpcy5sb3dlclNsaWRlciwgdGhpcy51cHBlclNsaWRlcl0gPSB0aGlzLnJldHVybkVsZW1lbnRzRnJvbURPTShgLiR7dGhpcy5zdHlsZX1fX2RyYWdgLCAyKTtcbiAgICBbdGhpcy5zdGF0aWNGaWVsZExvd2VyLCB0aGlzLnN0YXRpY0ZpZWxkVXBwZXJdID0gdGhpcy5yZXR1cm5FbGVtZW50c0Zyb21ET00oYC4ke3RoaXMuc3R5bGV9X19zdGF0aWNGaWVsZGAsIDIpO1xuICAgIFt0aGlzLmZseUZpZWxkTG93ZXIsIHRoaXMuZmx5RmllbGRVcHBlcl0gPSB0aGlzLnJldHVybkVsZW1lbnRzRnJvbURPTShgLiR7dGhpcy5zdHlsZX1fX3Rvb2x0aXBgLCAyKTtcbiAgICBbdGhpcy5yaWJib25dID0gdGhpcy5yZXR1cm5FbGVtZW50c0Zyb21ET00oYC4ke3RoaXMuc3R5bGV9X19jb2xvci1iYXJgLCAxKTtcbiAgfVxuXG4gIHByaXZhdGUgd3JpdGVTaW5nbGVTbGlkZXJJbmRlbnQgPSAoKSA9PiB7XG4gICAgY29uc3QgZWxlbSA9IHRoaXMucmV0dXJuRWxlbWVudHNGcm9tRE9NKGAuJHt0aGlzLnN0eWxlfV9fZHJhZ2AsIDEpO1xuICAgIHRoaXMuc2luZ2xlU2xpZGVyUG9zaXRpb24gPSB0aGlzLnJldHVybkluZGVudChlbGVtWzBdKTtcbiAgfVxuXG4gIHByaXZhdGUgd3JpdGVEb3VibGVTbGlkZXJJbmRlbnQgPSAoKSA9PiB7XG4gICAgY29uc3QgZWxlbXMgPSB0aGlzLnJldHVybkVsZW1lbnRzRnJvbURPTShgLiR7dGhpcy5zdHlsZX1fX2RyYWdgLCAyKTtcbiAgICB0aGlzLmxvd2VyU2xpZGVyUG9zaXRpb24gPSB0aGlzLnJldHVybkluZGVudChlbGVtc1swXSk7XG4gICAgdGhpcy51cHBlclNsaWRlclBvc2l0aW9uID0gdGhpcy5yZXR1cm5JbmRlbnQoZWxlbXNbMV0pO1xuICB9XG5cbiAgcHJpdmF0ZSByZXR1cm5FbGVtZW50c0Zyb21ET00gPSAoY2xhc3NOYW1lOiBzdHJpbmcsIGxlbmd0aDogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgRE9NRWxlbWVudHMgPSB0aGlzLmVsZW0ucXVlcnlTZWxlY3RvckFsbChjbGFzc05hbWUpO1xuICAgIGlmICgoRE9NRWxlbWVudHMubGVuZ3RoID09PSBsZW5ndGgpKSB7XG4gICAgICByZXR1cm4gRE9NRWxlbWVudHM7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG5cbiAgcHJpdmF0ZSByZXR1cm5JbmRlbnQgPSAoZWxlbWVudDogSFRNTEVsZW1lbnQpID0+IHtcbiAgICBpZiAodGhpcy5kaXJlY3Rpb25UeXBlID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgIHJldHVybiBlbGVtZW50Lm9mZnNldExlZnQ7XG4gICAgfSBpZiAodGhpcy5kaXJlY3Rpb25UeXBlID09PSAndmVydGljYWwnKSB7XG4gICAgICByZXR1cm4gZWxlbWVudC5vZmZzZXRUb3A7XG4gICAgfVxuICB9O1xuXG4gIHdyaXRlR2VvbWV0cnlET010b1ZhcmlhYmxlcyA9ICgpID0+IHtcbiAgICB0aGlzLnNldERpcmVjdGlvbigpO1xuICAgIHRoaXMud3JpdGVHZW9tZXRyeU9mU2xpZGVyKCk7XG4gIH1cblxuICBwcml2YXRlIHNldERpcmVjdGlvbiA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5kaXJlY3Rpb25UeXBlID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgIHRoaXMubWFpbkF4aXNTaXplID0gdGhpcy5zY2FsZS5vZmZzZXRXaWR0aDtcbiAgICB9XG4gICAgaWYgKHRoaXMuZGlyZWN0aW9uVHlwZSA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgdGhpcy5tYWluQXhpc1NpemUgPSB0aGlzLnNjYWxlLm9mZnNldEhlaWdodDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHdyaXRlR2VvbWV0cnlPZlNsaWRlciA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5zbGlkZXJUeXBlID09PSAnc2luZ2xlJykge1xuICAgICAgdGhpcy5zbGlkZXJXaWR0aCA9IHRoaXMuc2luZ2xlU2xpZGVyLm9mZnNldFdpZHRoO1xuICAgICAgdGhpcy5zbGlkZXJIZWlnaHQgPSB0aGlzLnNpbmdsZVNsaWRlci5vZmZzZXRIZWlnaHQ7XG4gICAgfSBlbHNlIGlmICh0aGlzLnNsaWRlclR5cGUgPT09ICdkb3VibGUnKSB7XG4gICAgICB0aGlzLnNsaWRlcldpZHRoID0gdGhpcy5sb3dlclNsaWRlci5vZmZzZXRXaWR0aDtcbiAgICAgIHRoaXMuc2xpZGVySGVpZ2h0ID0gdGhpcy5sb3dlclNsaWRlci5vZmZzZXRIZWlnaHQ7XG4gICAgfVxuICAgIHRoaXMuY2FsY1BpeGVsU3RlcCgpO1xuICB9XG5cbiAgY2FsY1BpeGVsU3RlcCA9ICgpID0+IHtcbiAgICBjb25zdCBzdGVwSW5QaXhlbCA9ICh0aGlzLm1haW5BeGlzU2l6ZSAvICh0aGlzLnVwcGVyU2NhbGVCb3VuZCAtIHRoaXMubG93ZXJTY2FsZUJvdW5kKSkgKiB0aGlzLnN0ZXA7XG4gICAgaWYgKHN0ZXBJblBpeGVsIDwgMSAmJiBzdGVwSW5QaXhlbCAhPT0gMCkge1xuICAgICAgYWxlcnQoJ9Co0LDQsyDQsiDQv9C40LrRgdC10LvRj9GFINC80LXQvdGM0YjQtSAxcHgsINGA0LDRgdGH0LXRgtGLINC90LUg0L/RgNC+0LjQt9Cy0L7QtNGP0YLRgdGPLiDQqNCw0LMg0LDQstGC0L7QvNCw0YLQuNGH0LXRgdC60Lgg0LHRg9C00LXRgiDRg9Cy0LXQu9C40YfQuNCy0LDRgtGM0YHRjyDQvdCwIDUwLCDQv9C+0LrQsCDQvdC1INCx0YPQtNC10YIg0YHQvtC+0YLQstC10YLRgdGC0LLQvtCy0LDRgtGMINGD0YHQu9C+0LLQuNGP0LwnKTtcbiAgICAgIHRoaXMuc3RlcCA9IHRoaXMuc3RlcCArIDUwO1xuICAgICAgdGhpcy5jYWxjUGl4ZWxTdGVwKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucGl4ZWxTdGVwID0gc3RlcEluUGl4ZWw7XG4gICAgICB0aGlzLnJvdW5kZWRQaXhlbFN0ZXAgPSBNYXRoLnJvdW5kKHN0ZXBJblBpeGVsKTtcbiAgICB9XG4gIH1cblxuICBjcmVhdGVMaXN0ZW5lck9uU2xpZGVyID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLnNsaWRlclR5cGUgPT09ICdzaW5nbGUnKSB7XG4gICAgICB0aGlzLnNpbmdsZVNsaWRlci5vbm1vdXNlZG93biA9IHRoaXMuZXZlbnRPblNsaWRlcjtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2xpZGVyVHlwZSA9PT0gJ2RvdWJsZScpIHtcbiAgICAgIHRoaXMubG93ZXJTbGlkZXIub25tb3VzZWRvd24gPSB0aGlzLmV2ZW50T25TbGlkZXI7XG4gICAgICB0aGlzLnVwcGVyU2xpZGVyLm9ubW91c2Vkb3duID0gdGhpcy5ldmVudE9uU2xpZGVyO1xuICAgIH1cbiAgfVxuXG4gIG1vdmVzU2xpZGVyc1RvU3RhcnRQb3NpdGlvbnMgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuc2xpZGVyVHlwZSA9PT0gJ3NpbmdsZScpIHtcbiAgICAgIHRoaXMuc2V0U2luZ2xlVG9TdGFydFBvc2l0aW9uKCk7XG4gICAgICB0aGlzLm1vdmVSaWJib24oKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc2xpZGVyVHlwZSA9PT0gJ2RvdWJsZScpIHtcbiAgICAgIHRoaXMuc2V0c0RvdWJsZVRvU3RhcnRQb3N0aW9ucygpO1xuICAgICAgdGhpcy5tb3ZlUmliYm9uKCk7XG4gICAgfVxuICB9XG5cbiAgc2V0U2luZ2xlVG9TdGFydFBvc2l0aW9uID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLmRpcmVjdGlvblR5cGUgPT09ICdob3Jpem9udGFsJykge1xuICAgICAgdGhpcy5zaW5nbGVTbGlkZXIuc3R5bGUubGVmdCA9IGAke3RoaXMuY2FsY01vbmV5VG9Qb3NpdGlvbih0aGlzLmxvd2VyU2xpZGVyVmFsdWUpfXB4YDtcbiAgICB9XG4gICAgaWYgKHRoaXMuZGlyZWN0aW9uVHlwZSA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgdGhpcy5zaW5nbGVTbGlkZXIuc3R5bGUudG9wID0gYCR7dGhpcy5jYWxjTW9uZXlUb1Bvc2l0aW9uKHRoaXMubG93ZXJTbGlkZXJWYWx1ZSl9cHhgO1xuICAgIH1cbiAgfVxuXG4gIHNldHNEb3VibGVUb1N0YXJ0UG9zdGlvbnMgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMubG93ZXJTY2FsZUJvdW5kIDw9IHRoaXMubG93ZXJTbGlkZXJWYWx1ZSAmJiB0aGlzLnVwcGVyU2NhbGVCb3VuZCA+PSB0aGlzLnVwcGVyU2xpZGVyVmFsdWUpIHtcbiAgICAgIGlmICh0aGlzLmRpcmVjdGlvblR5cGUgPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICB0aGlzLmxvd2VyU2xpZGVyLnN0eWxlLmxlZnQgPSBgJHt0aGlzLmNhbGNNb25leVRvUG9zaXRpb24odGhpcy5sb3dlclNsaWRlclZhbHVlKX1weGA7XG4gICAgICAgIHRoaXMudXBwZXJTbGlkZXIuc3R5bGUubGVmdCA9IGAke3RoaXMuY2FsY01vbmV5VG9Qb3NpdGlvbih0aGlzLnVwcGVyU2xpZGVyVmFsdWUpfXB4YDtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmRpcmVjdGlvblR5cGUgPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgdGhpcy5sb3dlclNsaWRlci5zdHlsZS50b3AgPSBgJHt0aGlzLmNhbGNNb25leVRvUG9zaXRpb24odGhpcy51cHBlclNsaWRlclZhbHVlKX1weGA7XG4gICAgICAgIHRoaXMudXBwZXJTbGlkZXIuc3R5bGUudG9wID0gYCR7dGhpcy5jYWxjTW9uZXlUb1Bvc2l0aW9uKHRoaXMubG93ZXJTbGlkZXJWYWx1ZSl9cHhgO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHdyaXRlTW9uZXlUb0ZpZWxkcyA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5zbGlkZXJUeXBlID09PSAnc2luZ2xlJykge1xuICAgICAgdGhpcy5zdGF0aWNGaWVsZFNpbmdsZS5pbm5lclRleHQgPSBgJHt0aGlzLmxvd2VyU2xpZGVyVmFsdWV9JHt0aGlzLnNpZ259YDtcbiAgICAgIHRoaXMuZmx5RmllbGRTaW5nbGUuaW5uZXJUZXh0ID0gYCR7dGhpcy5sb3dlclNsaWRlclZhbHVlfSR7dGhpcy5zaWdufWA7XG4gICAgfVxuICAgIGlmICh0aGlzLnNsaWRlclR5cGUgPT09ICdkb3VibGUnKSB7XG4gICAgICBpZiAodGhpcy5kaXJlY3Rpb25UeXBlID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgdGhpcy5zdGF0aWNGaWVsZExvd2VyLmlubmVyVGV4dCA9IGAke3RoaXMubG93ZXJTbGlkZXJWYWx1ZX0ke3RoaXMuc2lnbn1gO1xuICAgICAgICB0aGlzLnN0YXRpY0ZpZWxkVXBwZXIuaW5uZXJUZXh0ID0gYCR7dGhpcy51cHBlclNsaWRlclZhbHVlfSR7dGhpcy5zaWdufWA7XG5cbiAgICAgICAgdGhpcy5mbHlGaWVsZExvd2VyLmlubmVyVGV4dCA9IGAke3RoaXMubG93ZXJTbGlkZXJWYWx1ZX0ke3RoaXMuc2lnbn1gO1xuICAgICAgICB0aGlzLmZseUZpZWxkVXBwZXIuaW5uZXJUZXh0ID0gYCR7dGhpcy51cHBlclNsaWRlclZhbHVlfSR7dGhpcy5zaWdufWA7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmRpcmVjdGlvblR5cGUgPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgdGhpcy5zdGF0aWNGaWVsZExvd2VyLmlubmVyVGV4dCA9IGAke3RoaXMubG93ZXJTbGlkZXJWYWx1ZX0ke3RoaXMuc2lnbn1gO1xuICAgICAgICB0aGlzLnN0YXRpY0ZpZWxkVXBwZXIuaW5uZXJUZXh0ID0gYCR7dGhpcy51cHBlclNsaWRlclZhbHVlfSR7dGhpcy5zaWdufWA7XG5cbiAgICAgICAgdGhpcy5mbHlGaWVsZExvd2VyLmlubmVyVGV4dCA9IGAke3RoaXMudXBwZXJTbGlkZXJWYWx1ZX0ke3RoaXMuc2lnbn1gO1xuICAgICAgICB0aGlzLmZseUZpZWxkVXBwZXIuaW5uZXJUZXh0ID0gYCR7dGhpcy5sb3dlclNsaWRlclZhbHVlfSR7dGhpcy5zaWdufWA7XG4gICAgICB9XG5cbiAgICB9XG4gIH1cblxuICBjYWxjTW9uZXlUb1Bvc2l0aW9uKG1vbmV5OiBudW1iZXIpIHtcbiAgICBsZXQgcG9zaXRpb246IG51bWJlcjtcbiAgICBpZiAodGhpcy5kaXJlY3Rpb25UeXBlID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgIHBvc2l0aW9uID0gKChtb25leSAtIHRoaXMubG93ZXJTY2FsZUJvdW5kKSAvIHRoaXMuc3RlcCkgKiB0aGlzLnBpeGVsU3RlcDtcbiAgICB9XG4gICAgaWYgKHRoaXMuZGlyZWN0aW9uVHlwZSA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgcG9zaXRpb24gPSB0aGlzLm1haW5BeGlzU2l6ZSAtICgoKG1vbmV5IC0gdGhpcy5sb3dlclNjYWxlQm91bmQpIC8gdGhpcy5zdGVwKSAqIHRoaXMucGl4ZWxTdGVwKTtcbiAgICB9XG4gICAgcmV0dXJuIHBvc2l0aW9uO1xuICB9XG5cbiAgcHJpdmF0ZSBldmVudE9uU2xpZGVyID0gKF9lOiBFdmVudCkgPT4ge1xuICAgIF9lLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5zZXRSZXN0cmljdGlvbk9mU2xpZGVyTW92ZW1lbnQoX2UpO1xuICAgIGRvY3VtZW50Lm9ubW91c2V1cCA9IHRoaXMuY2FuY2VsRXZlbnRzO1xuICAgIGRvY3VtZW50Lm9ubW91c2Vtb3ZlID0gdGhpcy5tb3ZlRXZlbnRXaXRoSG9sZE1vdXNlO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRSZXN0cmljdGlvbk9mU2xpZGVyTW92ZW1lbnQgPSAoX2U6IEV2ZW50KSA9PiB7XG4gICAgaWYgKHRoaXMuc2xpZGVyVHlwZSA9PT0gJ2RvdWJsZScpIHtcbiAgICAgIHRoaXMuc2V0UmVzdHJpY3Rpb25Gb3JEb3VibGVTbGlkZXIoX2UpO1xuICAgIH1cbiAgICBpZiAodGhpcy5zbGlkZXJUeXBlID09PSAnc2luZ2xlJykge1xuICAgICAgdGhpcy5zZXRSZXN0cmljdGlvbkZvclNpbmdsZVNsaWRlcigpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2V0UmVzdHJpY3Rpb25Gb3JEb3VibGVTbGlkZXIgPSAoX2U6IEV2ZW50KSA9PiB7XG4gICAgaWYgKHRoaXMuZGlyZWN0aW9uVHlwZSA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICBpZiAoX2UudGFyZ2V0ID09PSB0aGlzLmxvd2VyU2xpZGVyKSB7XG4gICAgICAgIHRoaXMudGFyZ2V0U2xpZGVyID0gdGhpcy5sb3dlclNsaWRlcjtcbiAgICAgICAgdGhpcy5sb3dlclJlc3RyaWN0aW9uID0gMDtcbiAgICAgICAgdGhpcy51cHBlclJlc3RyaWN0aW9uID0gdGhpcy51cHBlclNsaWRlclBvc2l0aW9uO1xuICAgICAgICB0aGlzLmxvd2VyQ29zdFJlc3RyaWN0aW9uID0gdGhpcy5sb3dlclNjYWxlQm91bmQ7XG4gICAgICAgIHRoaXMudXBwZXJDb3N0UmVzdHJpY3Rpb24gPSB0aGlzLmdldENvc3RGb3JTbGlkZXIodGhpcy51cHBlclJlc3RyaWN0aW9uKTtcbiAgICAgIH1cbiAgICAgIGlmIChfZS50YXJnZXQgPT09IHRoaXMudXBwZXJTbGlkZXIpIHtcbiAgICAgICAgdGhpcy50YXJnZXRTbGlkZXIgPSB0aGlzLnVwcGVyU2xpZGVyO1xuICAgICAgICB0aGlzLmxvd2VyUmVzdHJpY3Rpb24gPSB0aGlzLmxvd2VyU2xpZGVyUG9zaXRpb247XG4gICAgICAgIHRoaXMudXBwZXJSZXN0cmljdGlvbiA9IHRoaXMubWFpbkF4aXNTaXplO1xuICAgICAgICB0aGlzLmxvd2VyQ29zdFJlc3RyaWN0aW9uID0gdGhpcy5nZXRDb3N0Rm9yU2xpZGVyKHRoaXMubG93ZXJSZXN0cmljdGlvbik7XG4gICAgICAgIHRoaXMudXBwZXJDb3N0UmVzdHJpY3Rpb24gPSB0aGlzLnVwcGVyU2NhbGVCb3VuZDtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMuZGlyZWN0aW9uVHlwZSA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgaWYgKF9lLnRhcmdldCA9PT0gdGhpcy5sb3dlclNsaWRlcikge1xuICAgICAgICB0aGlzLnRhcmdldFNsaWRlciA9IHRoaXMubG93ZXJTbGlkZXI7XG4gICAgICAgIHRoaXMubG93ZXJSZXN0cmljdGlvbiA9IDA7XG4gICAgICAgIHRoaXMudXBwZXJSZXN0cmljdGlvbiA9IHRoaXMudXBwZXJTbGlkZXJQb3NpdGlvbjtcbiAgICAgICAgdGhpcy5sb3dlckNvc3RSZXN0cmljdGlvbiA9IHRoaXMuZ2V0Q29zdEZvclNsaWRlcih0aGlzLmxvd2VyUmVzdHJpY3Rpb24pO1xuICAgICAgICB0aGlzLnVwcGVyQ29zdFJlc3RyaWN0aW9uID0gdGhpcy5nZXRDb3N0Rm9yU2xpZGVyKHRoaXMudXBwZXJSZXN0cmljdGlvbik7XG4gICAgICB9XG4gICAgICBpZiAoX2UudGFyZ2V0ID09PSB0aGlzLnVwcGVyU2xpZGVyKSB7XG4gICAgICAgIHRoaXMudGFyZ2V0U2xpZGVyID0gdGhpcy51cHBlclNsaWRlcjtcbiAgICAgICAgdGhpcy5sb3dlclJlc3RyaWN0aW9uID0gdGhpcy5sb3dlclNsaWRlclBvc2l0aW9uO1xuICAgICAgICB0aGlzLnVwcGVyUmVzdHJpY3Rpb24gPSB0aGlzLm1haW5BeGlzU2l6ZTtcbiAgICAgICAgdGhpcy5sb3dlckNvc3RSZXN0cmljdGlvbiA9IHRoaXMuZ2V0Q29zdEZvclNsaWRlcih0aGlzLmxvd2VyUmVzdHJpY3Rpb24pO1xuICAgICAgICB0aGlzLnVwcGVyQ29zdFJlc3RyaWN0aW9uID0gdGhpcy5nZXRDb3N0Rm9yU2xpZGVyKHRoaXMudXBwZXJSZXN0cmljdGlvbik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRSZXN0cmljdGlvbkZvclNpbmdsZVNsaWRlciA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5kaXJlY3Rpb25UeXBlID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgIHRoaXMudGFyZ2V0U2xpZGVyID0gdGhpcy5zaW5nbGVTbGlkZXI7XG4gICAgICB0aGlzLmxvd2VyUmVzdHJpY3Rpb24gPSAwO1xuICAgICAgdGhpcy51cHBlclJlc3RyaWN0aW9uID0gdGhpcy5tYWluQXhpc1NpemU7XG4gICAgICB0aGlzLmxvd2VyQ29zdFJlc3RyaWN0aW9uID0gdGhpcy5sb3dlclNjYWxlQm91bmQ7XG4gICAgICB0aGlzLnVwcGVyQ29zdFJlc3RyaWN0aW9uID0gdGhpcy51cHBlclNjYWxlQm91bmQ7XG4gICAgfVxuICAgIGlmICh0aGlzLmRpcmVjdGlvblR5cGUgPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgIHRoaXMudGFyZ2V0U2xpZGVyID0gdGhpcy5zaW5nbGVTbGlkZXI7XG4gICAgICB0aGlzLmxvd2VyUmVzdHJpY3Rpb24gPSAwO1xuICAgICAgdGhpcy51cHBlclJlc3RyaWN0aW9uID0gdGhpcy5tYWluQXhpc1NpemU7XG4gICAgICB0aGlzLmxvd2VyQ29zdFJlc3RyaWN0aW9uID0gdGhpcy51cHBlclNjYWxlQm91bmQ7XG4gICAgICB0aGlzLnVwcGVyQ29zdFJlc3RyaWN0aW9uID0gdGhpcy5sb3dlclNjYWxlQm91bmQ7XG4gICAgfVxuICB9XG5cbiAgZ2V0Q29zdEZvclNsaWRlciA9IChzbGlkZXJQb3N0aW9uSW5QaXhlbDogbnVtYmVyKSA9PiB7XG4gICAgaWYgKHRoaXMuZGlyZWN0aW9uVHlwZSA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICBpZiAoc2xpZGVyUG9zdGlvbkluUGl4ZWwgPD0gMCkge1xuICAgICAgICByZXR1cm4gdGhpcy5sb3dlclNjYWxlQm91bmQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gKHRoaXMubG93ZXJTY2FsZUJvdW5kICsgKE1hdGgucm91bmQoc2xpZGVyUG9zdGlvbkluUGl4ZWwgLyB0aGlzLnBpeGVsU3RlcCkgKiB0aGlzLnN0ZXApKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZGlyZWN0aW9uVHlwZSA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgaWYgKHNsaWRlclBvc3Rpb25JblBpeGVsIDw9IDApIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXBwZXJTY2FsZUJvdW5kO1xuICAgICAgfVxuICAgICAgcmV0dXJuICgoTWF0aC5yb3VuZCgodGhpcy5tYWluQXhpc1NpemUgLSBzbGlkZXJQb3N0aW9uSW5QaXhlbCkgLyB0aGlzLnBpeGVsU3RlcCkgKiB0aGlzLnN0ZXApICsgdGhpcy5sb3dlclNjYWxlQm91bmQpO1xuICAgIH1cbiAgfVxuXG4gIG1vdmVFdmVudFdpdGhIb2xkTW91c2UgPSAoX2U6IE1vdXNlRXZlbnQpID0+IHtcbiAgICBjb25zdCBpbm5lck1vdXNlUG9zaXRpb24gPSB0aGlzLmdldE1vdXNlUG9zaXRpb24oX2UpO1xuXG4gICAgY29uc3QgbmVhcmVzdFJvdW5kZWRTdGVwID0gdGhpcy5jYWxjTmVhcmVzdFN0ZXAoaW5uZXJNb3VzZVBvc2l0aW9uKTtcblxuICAgIGNvbnN0IGZpbmFsUG9zaXRpb25JblBpeGVsID0gdGhpcy5jYWxjRmluYWxQb3NpdGlvbihuZWFyZXN0Um91bmRlZFN0ZXApO1xuXG4gICAgY29uc3QgZmluYWxDb3N0ID0gdGhpcy5jYWxjRmluYWxDb3N0KG5lYXJlc3RSb3VuZGVkU3RlcCk7XG5cbiAgICB0aGlzLm1vdmVTbGlkZXIoZmluYWxQb3NpdGlvbkluUGl4ZWwpO1xuXG4gICAgdGhpcy5zaG93TW9uZXlPblNjcmVlbihmaW5hbENvc3QpO1xuXG4gICAgdGhpcy53cml0ZU1vbmV5VG9WYXJpYWJsZXMoZmluYWxDb3N0KTtcblxuICAgIHRoaXMuc2V0T3ZlcmxheSgpO1xuXG4gICAgdGhpcy5tb3ZlUmliYm9uKCk7XG5cbiAgICB0aGlzLm1vdmVUb29sdGlwKCk7XG4gIH1cblxuICBwcml2YXRlIGdldE1vdXNlUG9zaXRpb24gPSAoX2U6IE1vdXNlRXZlbnQpID0+IHtcbiAgICB0aGlzLmNsaWVudFJlY3QgPSB0aGlzLnNjYWxlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGlmICh0aGlzLmRpcmVjdGlvblR5cGUgPT09ICdob3Jpem9udGFsJykge1xuICAgICAgdGhpcy5pbmRlbnQgPSB0aGlzLmNsaWVudFJlY3QubGVmdDtcbiAgICAgIHJldHVybiAoX2UuY2xpZW50WCAtIHRoaXMuaW5kZW50IC0gKHRoaXMuc2xpZGVyV2lkdGggLyAyKSk7XG4gICAgfSBpZiAodGhpcy5kaXJlY3Rpb25UeXBlID09PSAndmVydGljYWwnKSB7XG4gICAgICB0aGlzLmluZGVudCA9IHRoaXMuY2xpZW50UmVjdC50b3A7XG4gICAgICByZXR1cm4gKF9lLmNsaWVudFkgLSB0aGlzLmluZGVudCAtICh0aGlzLnNsaWRlckhlaWdodCAvIDIpKTtcbiAgICB9XG4gIH1cblxuICBjYWxjTmVhcmVzdFN0ZXAgPSAoX3Bvc2l0aW9uSW5QaXhlbDogbnVtYmVyKSA9PiB7XG4gICAgaWYgKHRoaXMuZGlyZWN0aW9uVHlwZSA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICByZXR1cm4gTWF0aC5yb3VuZChfcG9zaXRpb25JblBpeGVsIC8gdGhpcy5waXhlbFN0ZXApO1xuICAgIH1cbiAgICBpZiAodGhpcy5kaXJlY3Rpb25UeXBlID09PSAndmVydGljYWwnKSB7XG4gICAgICByZXR1cm4gTWF0aC5yb3VuZCgodGhpcy5tYWluQXhpc1NpemUgLSBfcG9zaXRpb25JblBpeGVsKSAvIHRoaXMucGl4ZWxTdGVwKTtcbiAgICB9XG4gIH1cblxuICBjYWxjRmluYWxQb3NpdGlvbiA9IChfbmVhcmVzdFJvdW5kZWRTdGVwOiBudW1iZXIpID0+IHtcbiAgICBjb25zdCBwb3NpdGlvbkluUGl4ZWwgPSBfbmVhcmVzdFJvdW5kZWRTdGVwICogdGhpcy5waXhlbFN0ZXA7XG4gICAgaWYgKHRoaXMuZGlyZWN0aW9uVHlwZSA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICBpZiAodGhpcy5pc1BpeGVsc0luQm9yZGVyKHBvc2l0aW9uSW5QaXhlbCkpIHtcbiAgICAgICAgcmV0dXJuIHBvc2l0aW9uSW5QaXhlbDtcbiAgICAgIH1cbiAgICAgIGlmIChwb3NpdGlvbkluUGl4ZWwgPD0gdGhpcy5sb3dlclJlc3RyaWN0aW9uKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvd2VyUmVzdHJpY3Rpb247XG4gICAgICB9XG4gICAgICBpZiAocG9zaXRpb25JblBpeGVsID49IHRoaXMudXBwZXJSZXN0cmljdGlvbikge1xuICAgICAgICByZXR1cm4gdGhpcy51cHBlclJlc3RyaWN0aW9uO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5kaXJlY3Rpb25UeXBlID09PSAndmVydGljYWwnKSB7XG4gICAgICBpZiAodGhpcy5pc1BpeGVsc0luQm9yZGVyKCh0aGlzLm1haW5BeGlzU2l6ZSAtIHBvc2l0aW9uSW5QaXhlbCkpKSB7XG4gICAgICAgIHJldHVybiAodGhpcy5tYWluQXhpc1NpemUgLSBwb3NpdGlvbkluUGl4ZWwpO1xuICAgICAgfVxuICAgICAgaWYgKCh0aGlzLm1haW5BeGlzU2l6ZSAtIHBvc2l0aW9uSW5QaXhlbCkgPD0gdGhpcy5sb3dlclJlc3RyaWN0aW9uKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvd2VyUmVzdHJpY3Rpb247XG4gICAgICB9XG4gICAgICBpZiAoKHRoaXMubWFpbkF4aXNTaXplIC0gcG9zaXRpb25JblBpeGVsKSA+PSB0aGlzLnVwcGVyUmVzdHJpY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXBwZXJSZXN0cmljdGlvbjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjYWxjRmluYWxDb3N0ID0gKF9uZWFyZXN0Um91bmRlZFN0ZXA6IG51bWJlcikgPT4ge1xuICAgIGlmICh0aGlzLmRpcmVjdGlvblR5cGUgPT09ICdob3Jpem9udGFsJykge1xuICAgICAgY29uc3QgcG9zaXRpb25Jbk1vbmV5ID0gdGhpcy5sb3dlclNjYWxlQm91bmQgKyAoX25lYXJlc3RSb3VuZGVkU3RlcCAqIHRoaXMuc3RlcCk7XG5cbiAgICAgIGlmICh0aGlzLmlzTW9uZXlJbkJvcmRlcihwb3NpdGlvbkluTW9uZXkpKSB7XG4gICAgICAgIHJldHVybiBwb3NpdGlvbkluTW9uZXk7XG4gICAgICB9XG4gICAgICBpZiAocG9zaXRpb25Jbk1vbmV5IDwgdGhpcy5sb3dlckNvc3RSZXN0cmljdGlvbikge1xuICAgICAgICByZXR1cm4gdGhpcy5sb3dlckNvc3RSZXN0cmljdGlvbjtcbiAgICAgIH1cbiAgICAgIGlmIChwb3NpdGlvbkluTW9uZXkgPiB0aGlzLnVwcGVyQ29zdFJlc3RyaWN0aW9uKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVwcGVyQ29zdFJlc3RyaWN0aW9uO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5kaXJlY3Rpb25UeXBlID09PSAndmVydGljYWwnKSB7XG4gICAgICBjb25zdCBwb3NpdGlvbkluTW9uZXkgPSAoX25lYXJlc3RSb3VuZGVkU3RlcCAqIHRoaXMuc3RlcCkgKyB0aGlzLmxvd2VyU2NhbGVCb3VuZDtcbiAgICAgIGlmICh0aGlzLmlzTW9uZXlJbkJvcmRlcihwb3NpdGlvbkluTW9uZXkpKSB7XG4gICAgICAgIHJldHVybiBwb3NpdGlvbkluTW9uZXk7XG4gICAgICB9XG4gICAgICBpZiAocG9zaXRpb25Jbk1vbmV5ID4gdGhpcy5sb3dlckNvc3RSZXN0cmljdGlvbikge1xuICAgICAgICByZXR1cm4gdGhpcy5sb3dlckNvc3RSZXN0cmljdGlvbjtcbiAgICAgIH1cbiAgICAgIGlmIChwb3NpdGlvbkluTW9uZXkgPCB0aGlzLnVwcGVyQ29zdFJlc3RyaWN0aW9uKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVwcGVyQ29zdFJlc3RyaWN0aW9uO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlzUGl4ZWxzSW5Cb3JkZXIgPSAoX3Bvc2l0aW9uOiBudW1iZXIpID0+ICgoX3Bvc2l0aW9uID49IHRoaXMubG93ZXJSZXN0cmljdGlvbikgJiYgKF9wb3NpdGlvbiA8PSB0aGlzLnVwcGVyUmVzdHJpY3Rpb24pKVxuXG4gIGlzTW9uZXlJbkJvcmRlciA9IChfcG9zaXRpb246IG51bWJlcikgPT4ge1xuICAgIGlmICh0aGlzLmRpcmVjdGlvblR5cGUgPT09ICdob3Jpem9udGFsJykge1xuICAgICAgcmV0dXJuICgoX3Bvc2l0aW9uID49IHRoaXMubG93ZXJDb3N0UmVzdHJpY3Rpb24pICYmIChfcG9zaXRpb24gPD0gdGhpcy51cHBlckNvc3RSZXN0cmljdGlvbikpO1xuICAgIH1cbiAgICBpZiAodGhpcy5kaXJlY3Rpb25UeXBlID09PSAndmVydGljYWwnKSB7XG4gICAgICByZXR1cm4gKChfcG9zaXRpb24gPD0gdGhpcy5sb3dlckNvc3RSZXN0cmljdGlvbikgJiYgKF9wb3NpdGlvbiA+PSB0aGlzLnVwcGVyQ29zdFJlc3RyaWN0aW9uKSk7XG4gICAgfVxuICB9XG5cbiAgc2hvd01vbmV5T25TY3JlZW4gPSAoZmluYWxDb3N0OiBudW1iZXIpID0+IHtcbiAgICBjb25zdCBjb3N0ID0gYCR7ZmluYWxDb3N0fSR7dGhpcy5zaWdufWA7XG4gICAgaWYgKHRoaXMuZGlyZWN0aW9uVHlwZSA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICBpZiAodGhpcy50YXJnZXRTbGlkZXIgPT09IHRoaXMubG93ZXJTbGlkZXIpIHtcbiAgICAgICAgdGhpcy5zdGF0aWNGaWVsZExvd2VyLnRleHRDb250ZW50ID0gYCR7Y29zdH1gO1xuICAgICAgICB0aGlzLmZseUZpZWxkTG93ZXIudGV4dENvbnRlbnQgPSBgJHtjb3N0fWA7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy50YXJnZXRTbGlkZXIgPT09IHRoaXMudXBwZXJTbGlkZXIpIHtcbiAgICAgICAgdGhpcy5zdGF0aWNGaWVsZFVwcGVyLnRleHRDb250ZW50ID0gYCR7Y29zdH1gO1xuICAgICAgICB0aGlzLmZseUZpZWxkVXBwZXIudGV4dENvbnRlbnQgPSBgJHtjb3N0fWA7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy50YXJnZXRTbGlkZXIgPT09IHRoaXMuc2luZ2xlU2xpZGVyKSB7XG4gICAgICAgIHRoaXMuc3RhdGljRmllbGRTaW5nbGUudGV4dENvbnRlbnQgPSBgJHtjb3N0fWA7XG4gICAgICAgIHRoaXMuZmx5RmllbGRTaW5nbGUudGV4dENvbnRlbnQgPSBgJHtjb3N0fWA7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLmRpcmVjdGlvblR5cGUgPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgIGlmICh0aGlzLnRhcmdldFNsaWRlciA9PT0gdGhpcy5sb3dlclNsaWRlcikge1xuICAgICAgICB0aGlzLnN0YXRpY0ZpZWxkVXBwZXIudGV4dENvbnRlbnQgPSBgJHtjb3N0fWA7XG4gICAgICAgIHRoaXMuZmx5RmllbGRMb3dlci50ZXh0Q29udGVudCA9IGAke2Nvc3R9YDtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnRhcmdldFNsaWRlciA9PT0gdGhpcy51cHBlclNsaWRlcikge1xuICAgICAgICB0aGlzLnN0YXRpY0ZpZWxkTG93ZXIudGV4dENvbnRlbnQgPSBgJHtjb3N0fWA7XG4gICAgICAgIHRoaXMuZmx5RmllbGRVcHBlci50ZXh0Q29udGVudCA9IGAke2Nvc3R9YDtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnRhcmdldFNsaWRlciA9PT0gdGhpcy5zaW5nbGVTbGlkZXIpIHtcbiAgICAgICAgdGhpcy5zdGF0aWNGaWVsZFNpbmdsZS50ZXh0Q29udGVudCA9IGAke2Nvc3R9YDtcbiAgICAgICAgdGhpcy5mbHlGaWVsZFNpbmdsZS50ZXh0Q29udGVudCA9IGAke2Nvc3R9YDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB3cml0ZU1vbmV5VG9WYXJpYWJsZXMgPSAoZmluYWxDb3N0OiBudW1iZXIpID0+IHtcbiAgICBpZiAodGhpcy50YXJnZXRTbGlkZXIgPT09IHRoaXMubG93ZXJTbGlkZXIpIHtcbiAgICAgIHRoaXMubG93ZXJTbGlkZXJWYWx1ZSA9IGZpbmFsQ29zdDtcbiAgICB9XG4gICAgaWYgKHRoaXMudGFyZ2V0U2xpZGVyID09PSB0aGlzLnVwcGVyU2xpZGVyKSB7XG4gICAgICB0aGlzLnVwcGVyU2xpZGVyVmFsdWUgPSBmaW5hbENvc3Q7XG4gICAgfVxuICAgIGlmICh0aGlzLnRhcmdldFNsaWRlciA9PT0gdGhpcy5zaW5nbGVTbGlkZXIpIHtcbiAgICAgIHRoaXMubG93ZXJTbGlkZXJWYWx1ZSA9IGZpbmFsQ29zdDtcbiAgICB9XG4gIH07XG5cbiAgcHJpdmF0ZSBtb3ZlUmliYm9uID0gKCkgPT4ge1xuICAgIGNvbnN0IHNldEhvcml6b250YWxSaWJib25WYXJpYWJsZXMgPSAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5zbGlkZXJJbkRPTS5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgdGhpcy5yaWJib24uc3R5bGUubGVmdCA9ICcwcHgnO1xuICAgICAgICB0aGlzLnJpYmJvbi5zdHlsZS53aWR0aCA9IGAke3RoaXMuc2luZ2xlU2xpZGVyLm9mZnNldExlZnQgKyAodGhpcy5zbGlkZXJXaWR0aCAvIDIpfXB4YDtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5zbGlkZXJJbkRPTS5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgdGhpcy5yaWJib24uc3R5bGUubGVmdCA9IGAke3RoaXMubG93ZXJTbGlkZXIub2Zmc2V0TGVmdCArICh0aGlzLnNsaWRlcldpZHRoIC8gMil9cHhgO1xuICAgICAgICB0aGlzLnJpYmJvbi5zdHlsZS53aWR0aCA9IGAke3RoaXMudXBwZXJTbGlkZXIub2Zmc2V0TGVmdCAtIHRoaXMubG93ZXJTbGlkZXIub2Zmc2V0TGVmdH1weGA7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IHNldFZlcnRpY2FsUmliYm9uVmFyaWFibGVzID0gKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuc2xpZGVySW5ET00ubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIHRoaXMucmliYm9uLnN0eWxlLnRvcCA9IGAke3RoaXMuc2luZ2xlU2xpZGVyLm9mZnNldFRvcCArICh0aGlzLnNsaWRlckhlaWdodCAvIDIpfXB4YDtcbiAgICAgICAgdGhpcy5yaWJib24uc3R5bGUuaGVpZ2h0ID0gYCR7dGhpcy5tYWluQXhpc1NpemUgLSB0aGlzLnNpbmdsZVNsaWRlci5vZmZzZXRUb3AgKyAodGhpcy5zbGlkZXJIZWlnaHQgLyAyKX1weGA7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuc2xpZGVySW5ET00ubGVuZ3RoID09PSAyKSB7XG4gICAgICAgIHRoaXMucmliYm9uLnN0eWxlLnRvcCA9IGAke3RoaXMubG93ZXJTbGlkZXIub2Zmc2V0VG9wICsgKHRoaXMuc2xpZGVySGVpZ2h0IC8gMil9cHhgO1xuICAgICAgICB0aGlzLnJpYmJvbi5zdHlsZS5oZWlnaHQgPSBgJHt0aGlzLnVwcGVyU2xpZGVyLm9mZnNldFRvcCAtIHRoaXMubG93ZXJTbGlkZXIub2Zmc2V0VG9wfXB4YDtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKHRoaXMuZGlyZWN0aW9uVHlwZSA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICBzZXRIb3Jpem9udGFsUmliYm9uVmFyaWFibGVzKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmRpcmVjdGlvblR5cGUgPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgIHNldFZlcnRpY2FsUmliYm9uVmFyaWFibGVzKCk7XG4gICAgfVxuICB9XG5cbiAgbW92ZVNsaWRlciA9IChudW06IG51bWJlcikgPT4ge1xuICAgIGlmICh0aGlzLmRpcmVjdGlvblR5cGUgPT09ICdob3Jpem9udGFsJykge1xuICAgICAgdGhpcy50YXJnZXRTbGlkZXIuc3R5bGUubGVmdCA9IGAke251bX1weGA7XG4gICAgfSBlbHNlIGlmICh0aGlzLmRpcmVjdGlvblR5cGUgPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgIHRoaXMudGFyZ2V0U2xpZGVyLnN0eWxlLnRvcCA9IGAke251bX1weGA7XG4gICAgfVxuICB9XG5cbiAgbW92ZVRvb2x0aXAgPSAoKSA9PiB7XG4gICAgY29uc3QgbW92ZSA9IChkaXJlY3Rpb246IHN0cmluZywgb2Zmc2V0OiAnb2Zmc2V0TGVmdCcgfCAnb2Zmc2V0VG9wJywgc2xpZGVyU2l6ZTogbnVtYmVyKSA9PiB7XG4gICAgICBpZiAodGhpcy5zbGlkZXJUeXBlID09PSAnc2luZ2xlJykge1xuICAgICAgICB0aGlzLmVsZW0ucXVlcnlTZWxlY3RvckFsbChgLiR7dGhpcy5zdHlsZX1fX3Rvb2x0aXBgKVswXS5zdHlsZVtkaXJlY3Rpb25dID0gYCR7dGhpcy5zaW5nbGVTbGlkZXJbb2Zmc2V0XSAtIHNsaWRlclNpemV9cHhgO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuc2xpZGVyVHlwZSA9PT0gJ2RvdWJsZScpIHtcbiAgICAgICAgdGhpcy5lbGVtLnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke3RoaXMuc3R5bGV9X190b29sdGlwYClbMF0uc3R5bGVbZGlyZWN0aW9uXSA9IGAke3RoaXMubG93ZXJTbGlkZXJbb2Zmc2V0XSAtIHNsaWRlclNpemV9cHhgO1xuICAgICAgICB0aGlzLmVsZW0ucXVlcnlTZWxlY3RvckFsbChgLiR7dGhpcy5zdHlsZX1fX3Rvb2x0aXBgKVsxXS5zdHlsZVtkaXJlY3Rpb25dID0gYCR7dGhpcy51cHBlclNsaWRlcltvZmZzZXRdIC0gc2xpZGVyU2l6ZX1weGA7XG4gICAgICB9XG4gICAgfTtcbiAgICBpZiAodGhpcy5kaXJlY3Rpb25UeXBlID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgIG1vdmUoJ2xlZnQnLCAnb2Zmc2V0TGVmdCcsICh0aGlzLnNsaWRlcldpZHRoIC8gMykpO1xuICAgIH1cbiAgICBpZiAodGhpcy5kaXJlY3Rpb25UeXBlID09PSAndmVydGljYWwnKSB7XG4gICAgICBtb3ZlKCd0b3AnLCAnb2Zmc2V0VG9wJywgMCk7XG4gICAgfVxuICB9XG5cbiAgc2V0T3ZlcmxheSA9ICgpID0+IHtcbiAgICBpZiAodGhpcy50YXJnZXRTbGlkZXIgPT09IHRoaXMubG93ZXJTbGlkZXIpIHtcbiAgICAgIHRoaXMudGFyZ2V0U2xpZGVyLnN0eWxlLnpJbmRleCA9ICcxMDAnO1xuICAgICAgdGhpcy51cHBlclNsaWRlci5zdHlsZS56SW5kZXggPSAnMSc7XG4gICAgfSBlbHNlIGlmICh0aGlzLnRhcmdldFNsaWRlciA9PT0gdGhpcy51cHBlclNsaWRlcikge1xuICAgICAgdGhpcy50YXJnZXRTbGlkZXIuc3R5bGUuekluZGV4ID0gJzEwMCc7XG4gICAgICB0aGlzLmxvd2VyU2xpZGVyLnN0eWxlLnpJbmRleCA9ICcxJztcbiAgICB9XG4gIH1cblxuICBjYW5jZWxFdmVudHMgPSAoKSA9PiB7XG4gICAgdGhpcy53cml0ZURPTSgpO1xuICAgIGRvY3VtZW50Lm9ubW91c2V1cCA9IG51bGw7XG4gICAgZG9jdW1lbnQub25tb3VzZW1vdmUgPSBudWxsO1xuICB9XG59XG5cbmV4cG9ydCB7IFZpZXcgfTtcbiIsImludGVyZmFjZSBWYWx1ZXMge1xuICBbYTogc3RyaW5nXTogRWxlbWVudEludGVyZmFjZTtcbn1cblxuaW50ZXJmYWNlIEVsZW1lbnRJbnRlcmZhY2Uge1xuICB0aXRsZT86IHN0cmluZztcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gIGVsZW1lbnROYW1lPzogc3RyaW5nO1xuICB2YWx1ZT86IGFueTtcbiAgbmFtZU9mVmFyaWFibGU/OiBzdHJpbmc7XG4gIHR5cGU/OiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBQYXJhbSB7XG4gIGlkRm9yQ29udHJvbFBhbmVsPzogc3RyaW5nO1xuICBkaXJlY3Rpb25UeXBlPzogc3RyaW5nO1xuICBlbGVtZW50SWQ/OiBzdHJpbmc7XG4gIGVsZW0/OiBhbnk7XG4gIHNpZ24/OiBzdHJpbmc7XG4gIGxvd2VyU2NhbGVCb3VuZD86IG51bWJlcjtcbiAgdXBwZXJTY2FsZUJvdW5kPzogbnVtYmVyO1xuICBsb3dlclNsaWRlclZhbHVlPzogbnVtYmVyO1xuICB1cHBlclNsaWRlclZhbHVlPzogbnVtYmVyO1xuICBzbGlkZXJUeXBlPzogc3RyaW5nO1xuICBzdGVwPzogbnVtYmVyO1xuICBjb250cm9sbGVyPzogYW55O1xuICBzdHlsZT86IHN0cmluZ1xufVxuXG5pbnRlcmZhY2UgQ29udHJvbFBhbmVsIHtcbiAgY29udHJvbFBhbmVsOiBIVE1MRWxlbWVudCxcbiAgc2VsZWN0T3JPcjogSFRNTEVsZW1lbnQsXG4gIGRpdk51bWVyYWw6IEhUTUxFbGVtZW50LFxuICBjb250cm9sbGVyOiBhbnk7XG4gIG1vZGVsOiBhbnk7XG59XG5cbmNsYXNzIENvbnRyb2xQYW5lbCB7XG4gIG9yVmFsdWVzOiBWYWx1ZXMgPSB7XG4gICAgc2lnbjoge1xuICAgICAgdGl0bGU6ICdTaWduJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAn0JLQsNC70Y7RgtCwJyxcbiAgICAgIGVsZW1lbnROYW1lOiAnc2lnbicsXG4gICAgICB2YWx1ZTogWyfigr0nLCAnJCddLFxuICAgICAgbmFtZU9mVmFyaWFibGU6ICdzaWduJyxcbiAgICB9LFxuICAgIHNsaWRlclR5cGU6IHtcbiAgICAgIHRpdGxlOiAnVHlwZScsXG4gICAgICBkZXNjcmlwdGlvbjogJ9Ci0LjQvyDRgdC70LDQudC00LXRgNCwIC0g0L7QtNC40L3QsNGA0L3Ri9C5INC40LvQuCDQtNCy0L7QudC90L7QuScsXG4gICAgICBlbGVtZW50TmFtZTogJ3NsaWRlclR5cGUnLFxuICAgICAgdmFsdWU6IFsnZG91YmxlJywgJ3NpbmdsZSddLFxuICAgICAgbmFtZU9mVmFyaWFibGU6ICdzbGlkZXJUeXBlJyxcbiAgICB9LFxuICAgIGRpcmVjdGlvblR5cGU6IHtcbiAgICAgIHRpdGxlOiAnVHlwZScsXG4gICAgICBkZXNjcmlwdGlvbjogJ9Ci0LjQvyDRgdC70LDQudC00LXRgNCwIC0g0LLQtdGA0YLQuNC60LDQu9GM0L3Ri9C5INC40LvQuCDQs9C+0YDQuNC30L7QvdGC0LDQu9GM0L3Ri9C5JyxcbiAgICAgIGVsZW1lbnROYW1lOiAnZGlyZWN0aW9uVHlwZScsXG4gICAgICB2YWx1ZTogWydob3Jpem9udGFsJywgJ3ZlcnRpY2FsJ10sXG4gICAgICBuYW1lT2ZWYXJpYWJsZTogJ2RpcmVjdGlvblR5cGUnLFxuICAgIH0sXG4gICAgc3R5bGVUeXBlOiB7XG4gICAgICB0aXRsZTogJ1N0eWxlJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAn0KLQuNC/INGB0YLQuNC70Y8gLSDQvNC+0LbQvdC+INCy0YvQsdGA0LDRgtGMINGB0YLQuNC70YwgQ1NTINC00LvRjyDQs9C+0YDQuNC30L7QvdGC0LDQu9GM0L3QvtCz0L4g0LjQu9C4INCy0LXRgNGC0LjQutCw0LvRjNC90L7Qs9C+INCy0LjQtNCwJyxcbiAgICAgIGVsZW1lbnROYW1lOiAnc3R5bGUnLFxuICAgICAgdmFsdWU6IFsnaXNzSG9yaXpvbnRhbCcsICdpc3NWZXJ0aWNhbCddLFxuICAgICAgbmFtZU9mVmFyaWFibGU6ICdzdHlsZScsXG4gICAgfSxcbiAgfTtcblxuICBudW1lcmFsVmFsdWVzOiBWYWx1ZXMgPSB7XG4gICAgc3RlcDoge1xuICAgICAgdGl0bGU6ICdTdGVwJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAn0KjQsNCzINC/0L7Qu9C30YPQvdC60LAnLFxuICAgICAgZWxlbWVudE5hbWU6ICdzdGVwJyxcbiAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgbmFtZU9mVmFyaWFibGU6ICdzdGVwJyxcbiAgICB9LFxuICAgIGxvd2VyU2NhbGVCb3VuZDoge1xuICAgICAgdGl0bGU6ICdNaW5fc2xpZGVyJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAn0JzQuNC90LjQvNCw0LvRjNC90L7QtSDQt9C90LDRh9C10L3QuNC1INGI0LrQsNC70Ysg0YHQu9Cw0LnQtNC10YDQsCcsXG4gICAgICBlbGVtZW50TmFtZTogJ2xvd2VyU2NhbGVCb3VuZCcsXG4gICAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICAgIG5hbWVPZlZhcmlhYmxlOiAnbG93ZXJTY2FsZUJvdW5kJyxcbiAgICB9LFxuICAgIHVwcGVyU2NhbGVCb3VuZDoge1xuICAgICAgdGl0bGU6ICdNYXhfc2xpZGVyJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAn0JzQsNC60YHQuNC80LDQu9GM0L3QvtC1INC30L3QsNGH0LXQvdC40LUg0YjQutCw0LvRiyDRgdC70LDQudC00LXRgNCwJyxcbiAgICAgIGVsZW1lbnROYW1lOiAndXBwZXJTY2FsZUJvdW5kJyxcbiAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgbmFtZU9mVmFyaWFibGU6ICd1cHBlclNjYWxlQm91bmQnLFxuICAgIH0sXG4gICAgbG93ZXJTbGlkZXJWYWx1ZToge1xuICAgICAgdGl0bGU6ICdNaW5fc2xpZGVyJyxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAn0J3QsNGH0LDQu9GM0L3QvtC1INC30L3QsNGH0LXQvdC40LUg0YjQutCw0LvRiyDRgdC70LDQudC00LXRgNCwIC0g0LTQu9GPINC/0LXRgNCy0L7Qs9C+INC40LvQuCDQvtC00LjQvdC+0YfQvdC+0LPQviDQv9C+0LvQt9GD0L3QutCwJyxcbiAgICAgIGVsZW1lbnROYW1lOiAnbG93ZXJTbGlkZXJWYWx1ZScsXG4gICAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICAgIG5hbWVPZlZhcmlhYmxlOiAnbG93ZXJTbGlkZXJWYWx1ZScsXG4gICAgfSxcbiAgICB1cHBlclNsaWRlclZhbHVlOiB7XG4gICAgICB0aXRsZTogJ01heF9zbGlkZXInLFxuICAgICAgZGVzY3JpcHRpb246ICfQndCw0YfQsNC70YzQvdC+0LUg0LfQvdCw0YfQtdC90LjQtSDRiNC60LDQu9GLINGB0LvQsNC50LTQtdGA0LAgLSDQtNC70Y8g0LLRgtC+0YDQvtCz0L4g0L/QvtC70LfRg9C90LrQsCcsXG4gICAgICBlbGVtZW50TmFtZTogJ3VwcGVyU2xpZGVyVmFsdWUnLFxuICAgICAgdHlwZTogJ251bWJlcicsXG4gICAgICBuYW1lT2ZWYXJpYWJsZTogJ3VwcGVyU2xpZGVyVmFsdWUnLFxuICAgIH0sXG4gIH07XG5cbiAgc2V0dGluZ3M6IFBhcmFtID0ge1xuICAgIGVsZW1lbnRJZDogJ2lzcycsXG4gICAgc2lnbjogJ+KCvScsXG4gICAgbG93ZXJTY2FsZUJvdW5kOiAwLFxuICAgIHVwcGVyU2NhbGVCb3VuZDogMTAwMCxcbiAgICBsb3dlclNsaWRlclZhbHVlOiAyMDAsXG4gICAgdXBwZXJTbGlkZXJWYWx1ZTogODAwLFxuICAgIHNsaWRlclR5cGU6ICdkb3VibGUnLFxuICAgIGRpcmVjdGlvblR5cGU6ICdob3Jpem9udGFsJyxcbiAgICBzdGVwOiA1LFxuICAgIGlkRm9yQ29udHJvbFBhbmVsOiAnZG9jX3BhbmVsJyxcbiAgICBzdHlsZTogJ2lzcycsXG4gIH07XG5cbiAgYmluZENvbnRyb2xsZXIgPSAoY29udHJvbGxlcjogYW55KSA9PiB7XG4gICAgdGhpcy5jb250cm9sbGVyID0gY29udHJvbGxlcjtcbiAgfVxuXG4gIHNldFNldHRpbmdzID0gKHNldEZyb21Db250cm9sbGVyOiBQYXJhbSkgPT4ge1xuICAgIHRoaXMuc2V0dGluZ3MgPSB7XG4gICAgICBlbGVtZW50SWQ6IHNldEZyb21Db250cm9sbGVyLmVsZW1lbnRJZCxcbiAgICAgIHNpZ246IHNldEZyb21Db250cm9sbGVyLnNpZ24sXG4gICAgICBsb3dlclNjYWxlQm91bmQ6IHNldEZyb21Db250cm9sbGVyLmxvd2VyU2NhbGVCb3VuZCxcbiAgICAgIHVwcGVyU2NhbGVCb3VuZDogc2V0RnJvbUNvbnRyb2xsZXIudXBwZXJTY2FsZUJvdW5kLFxuICAgICAgbG93ZXJTbGlkZXJWYWx1ZTogc2V0RnJvbUNvbnRyb2xsZXIubG93ZXJTbGlkZXJWYWx1ZSxcbiAgICAgIHVwcGVyU2xpZGVyVmFsdWU6IHNldEZyb21Db250cm9sbGVyLnVwcGVyU2xpZGVyVmFsdWUsXG4gICAgICBzbGlkZXJUeXBlOiBzZXRGcm9tQ29udHJvbGxlci5zbGlkZXJUeXBlLFxuICAgICAgZGlyZWN0aW9uVHlwZTogc2V0RnJvbUNvbnRyb2xsZXIuZGlyZWN0aW9uVHlwZSxcbiAgICAgIHN0ZXA6IHNldEZyb21Db250cm9sbGVyLnN0ZXAsXG4gICAgICBpZEZvckNvbnRyb2xQYW5lbDogc2V0RnJvbUNvbnRyb2xsZXIuaWRGb3JDb250cm9sUGFuZWwsXG4gICAgICBzdHlsZTogc2V0RnJvbUNvbnRyb2xsZXIuc3R5bGUsXG4gICAgfTtcbiAgfVxuXG4gIGJpbmRNb2RlbCA9IChtb2RlbDogYW55KSA9PiB7XG4gICAgdGhpcy5tb2RlbCA9IG1vZGVsO1xuICB9XG5cbiAgZ2V0Q29udHJvbFBhbmVsID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRyb2xQYW5lbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuc2V0dGluZ3MuaWRGb3JDb250cm9sUGFuZWwpO1xuICAgIHJldHVybiBjb250cm9sUGFuZWw7XG4gIH1cblxuICBzZXRJZEZvclNlbGVjdCA9IChzZWxlY3Q6IEhUTUxFbGVtZW50LCBvYmo6IGFueSkgPT4ge1xuICAgIHNlbGVjdC5pZCA9IG9iai5lbGVtZW50TmFtZTtcbiAgfVxuXG4gIGFwcGVuZENoaWxkID0gKHBhcmVudDogSFRNTEVsZW1lbnQsIGNoaWxkOiBIVE1MRWxlbWVudCB8IFRleHQpID0+IHtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoY2hpbGQpO1xuICB9XG5cbiAgY3JlYXRlVGl0bGUgPSAob2JqOiBhbnkpID0+IHtcbiAgICBjb25zdCB0aXRsZTogc3RyaW5nID0gb2JqLmRlc2NyaXB0aW9uO1xuXG4gICAgY29uc3QgZGl2OiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgY29uc3QgdGV4dE5vZGVUaXRsZTogVGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRpdGxlKTtcblxuICAgIGRpdi5hcHBlbmRDaGlsZCh0ZXh0Tm9kZVRpdGxlKTtcblxuICAgIHJldHVybiBkaXY7XG4gIH1cblxuICByZXR1cm5LZXlzID0gKG9iajogVmFsdWVzKTogc3RyaW5nW10gPT4ge1xuICAgIGNvbnN0IGFyciA9IE9iamVjdC5rZXlzKG9iaik7XG4gICAgcmV0dXJuIGFycjtcbiAgfVxuXG4gIGNyZWF0ZUlucHV0ID0gKHNlbGVjdE9yRGl2OiBIVE1MRWxlbWVudCwgdmFsdWU6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBpbnB1dC50eXBlID0gJ251bWJlcic7XG4gICAgaW5wdXQudmFsdWUgPSBTdHJpbmcodmFsdWUpO1xuICAgIHRoaXMuYXBwZW5kQ2hpbGQoc2VsZWN0T3JEaXYsIGlucHV0KTtcbiAgfVxuXG4gIGNyZWF0ZUNoYW5nYWJsZU9wdGlvbnMgPSAoYXJyOiBzdHJpbmdbXSwgcGFyZW50RWxlbWVudDogSFRNTEVsZW1lbnQpID0+IHtcbiAgICBhcnIuZm9yRWFjaCgoY2hhbmdhYmxlVmFsdWUpID0+IHtcbiAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgb3B0aW9uLnZhbHVlID0gY2hhbmdhYmxlVmFsdWU7XG4gICAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY2hhbmdhYmxlVmFsdWUpO1xuICAgICAgdGhpcy5hcHBlbmRDaGlsZChvcHRpb24sIHRleHQpO1xuICAgICAgdGhpcy5hcHBlbmRDaGlsZChwYXJlbnRFbGVtZW50LCBvcHRpb24pO1xuICAgIH0pO1xuICB9XG5cbiAgY3JlYXRlTGlzdGVuZXJPck9yID0gKGVsZW1lbnRGb3JMaXN0ZW5lcjogSFRNTFNlbGVjdEVsZW1lbnQsIGtleU9mU2V0dGluZzogJ3NpZ24nIHwgJ3NsaWRlclR5cGUnIHwgJ2RpcmVjdGlvblR5cGUnKSA9PiB7XG4gICAgY29uc3QgY2hhbmdlTGlzdGVuZXIgPSAoKTogYW55ID0+IHtcbiAgICAgIHRoaXMuc2V0dGluZ3Nba2V5T2ZTZXR0aW5nXSA9IGVsZW1lbnRGb3JMaXN0ZW5lci52YWx1ZTtcbiAgICAgIHRoaXMuc2xpZGVyUmVmcmVzaCgpO1xuICAgIH07XG4gICAgZWxlbWVudEZvckxpc3RlbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGNoYW5nZUxpc3RlbmVyKTtcbiAgfVxuXG4gIGNyZWF0ZUxpc3RlbmVyTnVtZXJhbCA9IChlbGVtZW50Rm9yTGlzdGVuZXI6IEhUTUxJbnB1dEVsZW1lbnQsIGtleU9mU2V0dGluZzogJ3N0ZXAnIHwgJ2xvd2VyU2NhbGVCb3VuZCcgfCAndXBwZXJTY2FsZUJvdW5kJyB8ICdsb3dlclNsaWRlclZhbHVlJyB8ICd1cHBlclNsaWRlclZhbHVlJykgPT4ge1xuICAgIGNvbnN0IGlucHV0TGlzdGVuZXIgPSAoKTogYW55ID0+IHtcbiAgICAgIHRoaXMuc2V0dGluZ3Nba2V5T2ZTZXR0aW5nXSA9IE51bWJlcihlbGVtZW50Rm9yTGlzdGVuZXIuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2lucHV0JylbMF0udmFsdWVBc051bWJlcik7XG4gICAgICB0aGlzLnNsaWRlclJlZnJlc2goKTtcbiAgICB9O1xuICAgIGVsZW1lbnRGb3JMaXN0ZW5lci5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGlucHV0TGlzdGVuZXIpO1xuICB9XG5cbiAgY3JlYXRlUGFuZWwgPSAob2JqZWN0Rm9yQ29uc3RydWN0aW9uUGFuZWw6IFZhbHVlcywgdHlwZTogc3RyaW5nLCBjb250cm9sUGFuZWw6IEhUTUxFbGVtZW50KSA9PiB7XG4gICAgY29uc3Qga2V5cyA9IHRoaXMucmV0dXJuS2V5cyhvYmplY3RGb3JDb25zdHJ1Y3Rpb25QYW5lbCk7XG5cbiAgICBrZXlzLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgY29uc3QgY3VycmVudE9iaiA9IG9iamVjdEZvckNvbnN0cnVjdGlvblBhbmVsW2tleV07XG5cbiAgICAgIGxldCBzZWxlY3RPckRpdjogSFRNTEVsZW1lbnQ7XG4gICAgICBpZiAodHlwZSA9PT0gJ251bWVyYWwnKSB7XG4gICAgICAgIHNlbGVjdE9yRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB9XG4gICAgICBpZiAodHlwZSA9PT0gJ3NlbGVjdCcpIHtcbiAgICAgICAgc2VsZWN0T3JEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXRJZEZvclNlbGVjdChzZWxlY3RPckRpdiwgY3VycmVudE9iaik7XG4gICAgICBjb25zdCBjcmVhdGVUaXRsZSA9IHRoaXMuY3JlYXRlVGl0bGUoY3VycmVudE9iaik7XG4gICAgICB0aGlzLmFwcGVuZENoaWxkKHNlbGVjdE9yRGl2LCBjcmVhdGVUaXRsZSk7XG5cbiAgICAgIGlmICh0eXBlID09PSAnbnVtZXJhbCcpIHtcbiAgICAgICAgdGhpcy5jcmVhdGVJbnB1dChzZWxlY3RPckRpdiwgdGhpcy5zZXR0aW5nc1tjdXJyZW50T2JqLm5hbWVPZlZhcmlhYmxlIGFzICdzdGVwJyB8ICdsb3dlclNjYWxlQm91bmQnIHwgJ3VwcGVyU2NhbGVCb3VuZCcgfCAnbG93ZXJTbGlkZXJWYWx1ZScgfCAndXBwZXJTbGlkZXJWYWx1ZSddKTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlID09PSAnc2VsZWN0Jykge1xuICAgICAgICB0aGlzLmNyZWF0ZUNoYW5nYWJsZU9wdGlvbnMoY3VycmVudE9iai52YWx1ZSwgc2VsZWN0T3JEaXYpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmFwcGVuZENoaWxkKGNvbnRyb2xQYW5lbCwgc2VsZWN0T3JEaXYpO1xuICAgIH0pO1xuXG4gICAga2V5cy5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGNvbnN0IGN1cnJlbnRPYmogPSBvYmplY3RGb3JDb25zdHJ1Y3Rpb25QYW5lbFtrZXldO1xuICAgICAgY29uc3Qga2V5T2ZTZXR0aW5nOiBhbnkgPSBjdXJyZW50T2JqLm5hbWVPZlZhcmlhYmxlO1xuXG4gICAgICBpZiAodHlwZSA9PT0gJ251bWVyYWwnKSB7XG4gICAgICAgIGNvbnN0IGV2ZW50RWxlbWVudCA9IGNvbnRyb2xQYW5lbC5xdWVyeVNlbGVjdG9yKGAjJHtjdXJyZW50T2JqLmVsZW1lbnROYW1lfWApIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG5cbiAgICAgICAgdGhpcy5jcmVhdGVMaXN0ZW5lck51bWVyYWwoZXZlbnRFbGVtZW50LCBrZXlPZlNldHRpbmcpO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGUgPT09ICdzZWxlY3QnKSB7XG4gICAgICAgIGNvbnN0IGV2ZW50RWxlbWVudCA9IGNvbnRyb2xQYW5lbC5xdWVyeVNlbGVjdG9yKGAjJHtjdXJyZW50T2JqLmVsZW1lbnROYW1lfWApIGFzIEhUTUxTZWxlY3RFbGVtZW50O1xuICAgICAgICB0aGlzLmNyZWF0ZUxpc3RlbmVyT3JPcihldmVudEVsZW1lbnQsIGtleU9mU2V0dGluZyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzbGlkZXJSZWZyZXNoID0gKCkgPT4ge1xuICAgIGNvbnN0IG9iakZvckNvbnRyb2xsZXIgPSB7XG4gICAgICBzbGlkZXJUeXBlOiB0aGlzLnNldHRpbmdzLnNsaWRlclR5cGUsXG4gICAgICBkaXJlY3Rpb25UeXBlOiB0aGlzLnNldHRpbmdzLmRpcmVjdGlvblR5cGUsXG4gICAgICBzdGVwOiB0aGlzLnNldHRpbmdzLnN0ZXAsXG4gICAgICBzdHlsZTogdGhpcy5zZXR0aW5ncy5zdHlsZSxcbiAgICB9O1xuICAgIHRoaXMuY29udHJvbGxlci5zZXRDb250cm9sbGVyRnJvbUNvbnRyb2xQYW5lbChvYmpGb3JDb250cm9sbGVyKTtcblxuICAgIGNvbnN0IG9iakZvck1vZGVsID0ge1xuICAgICAgc2lnbjogdGhpcy5zZXR0aW5ncy5zaWduLFxuICAgICAgbG93ZXJTY2FsZUJvdW5kOiB0aGlzLnNldHRpbmdzLmxvd2VyU2NhbGVCb3VuZCxcbiAgICAgIHVwcGVyU2NhbGVCb3VuZDogdGhpcy5zZXR0aW5ncy51cHBlclNjYWxlQm91bmQsXG4gICAgICBsb3dlclNsaWRlclZhbHVlOiB0aGlzLnNldHRpbmdzLmxvd2VyU2xpZGVyVmFsdWUsXG4gICAgICB1cHBlclNsaWRlclZhbHVlOiB0aGlzLnNldHRpbmdzLnVwcGVyU2xpZGVyVmFsdWUsXG4gICAgfTtcbiAgICB0aGlzLm1vZGVsLnNldEluaXRpYWxNb2RlbE9wdGlvbnMob2JqRm9yTW9kZWwpO1xuXG4gICAgdGhpcy5jb250cm9sbGVyLmNyZWF0ZVNsaWRlcigpO1xuICB9XG5cbiAgYnVpbGRQYW5lbCA9ICgpID0+IHtcbiAgICBjb25zdCBjb250cm9sUGFuZWwgPSB0aGlzLmdldENvbnRyb2xQYW5lbCgpO1xuICAgIHRoaXMuY3JlYXRlUGFuZWwodGhpcy5vclZhbHVlcywgJ3NlbGVjdCcsIGNvbnRyb2xQYW5lbCk7XG4gICAgdGhpcy5jcmVhdGVQYW5lbCh0aGlzLm51bWVyYWxWYWx1ZXMsICdudW1lcmFsJywgY29udHJvbFBhbmVsKTtcbiAgfVxufVxuXG5leHBvcnQgeyBDb250cm9sUGFuZWwgfTtcbiIsImludGVyZmFjZSBDb250cm9sbGVyIHtcbiAgaWRGb3JDb250cm9sUGFuZWw/OiBzdHJpbmc7XG4gIGVsZW1lbnRJZD86IHN0cmluZztcbiAgc2lnbj86IHN0cmluZztcbiAgbG93ZXJTY2FsZUJvdW5kPzogbnVtYmVyO1xuICB1cHBlclNjYWxlQm91bmQ/OiBudW1iZXI7XG4gIGxvd2VyU2xpZGVyVmFsdWU/OiBudW1iZXI7XG4gIHVwcGVyU2xpZGVyVmFsdWU/OiBudW1iZXI7XG4gIHNsaWRlclR5cGU/OiBzdHJpbmc7XG4gIGRpcmVjdGlvblR5cGU/OiBzdHJpbmc7XG4gIHN0ZXA/OiBudW1iZXI7XG4gIHN0eWxlPzogc3RyaW5nO1xuXG4gIG1vZGVsPzogYW55O1xuICB2aWV3PzogYW55O1xuICBjb250cm9sUGFuZWw/OiBhbnk7XG59XG5cbmludGVyZmFjZSBvYmpGcm9tVmlldyB7XG4gIGxvd2VyU2xpZGVyVmFsdWU/OiBudW1iZXI7XG4gIHVwcGVyU2xpZGVyVmFsdWU/OiBudW1iZXI7XG59XG5cbmludGVyZmFjZSBvYmpGcm9tQ29udHJvbFBhbmVsIHtcbiAgc2xpZGVyVHlwZTogc3RyaW5nO1xuICBkaXJlY3Rpb25UeXBlOiBzdHJpbmc7XG4gIHN0ZXA6IG51bWJlcjtcbiAgc3R5bGU6IHN0cmluZztcbn1cblxuY2xhc3MgQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKHNldHRpbmdzOiBhbnkpIHtcbiAgICB0aGlzLmVsZW1lbnRJZCA9IHNldHRpbmdzLmVsZW1lbnRJZDtcbiAgICB0aGlzLnNsaWRlclR5cGUgPSBzZXR0aW5ncy5zbGlkZXJUeXBlIHx8ICdzaW5nbGUnO1xuICAgIHRoaXMuZGlyZWN0aW9uVHlwZSA9IHNldHRpbmdzLmRpcmVjdGlvblR5cGUgfHwgJ2hvcml6b250YWwnO1xuICAgIHRoaXMuc3RlcCA9IHNldHRpbmdzLnN0ZXAgfHwgMjtcbiAgICB0aGlzLmlkRm9yQ29udHJvbFBhbmVsID0gc2V0dGluZ3MuaWRGb3JDb250cm9sUGFuZWwgfHwgJyc7XG4gICAgdGhpcy5zdHlsZSA9IHNldHRpbmdzLnN0eWxlIHx8ICdpc3MnO1xuICB9XG5cbiAgY3JlYXRlU2xpZGVyKCkge1xuICAgIHRoaXMuc2V0Q29udHJvbGxlcigpO1xuICAgIHRoaXMuc2V0QW5kUnVuVmlldygpO1xuICB9XG5cbiAgc2V0Q29udHJvbGxlcigpIHtcbiAgICBjb25zdCBvYmpGcm9tTW9kZWwgPSB0aGlzLmdldE1vZGVsKCk7XG4gICAgdGhpcy5sb3dlclNsaWRlclZhbHVlID0gb2JqRnJvbU1vZGVsLmxvd2VyU2xpZGVyVmFsdWU7XG4gICAgdGhpcy51cHBlclNsaWRlclZhbHVlID0gb2JqRnJvbU1vZGVsLnVwcGVyU2xpZGVyVmFsdWU7XG4gICAgdGhpcy5sb3dlclNjYWxlQm91bmQgPSBvYmpGcm9tTW9kZWwubG93ZXJTY2FsZUJvdW5kO1xuICAgIHRoaXMudXBwZXJTY2FsZUJvdW5kID0gb2JqRnJvbU1vZGVsLnVwcGVyU2NhbGVCb3VuZDtcbiAgICB0aGlzLnNpZ24gPSBvYmpGcm9tTW9kZWwuc2lnbjtcbiAgfVxuXG4gIGdldE1vZGVsKCkge1xuICAgIHJldHVybiB0aGlzLm1vZGVsLmdldE1vZGVsKCk7XG4gIH1cblxuICBzZXRBbmRSdW5WaWV3KCkge1xuICAgIGNvbnN0IG9iaiA9IHtcbiAgICAgIGVsZW1lbnRJZDogdGhpcy5lbGVtZW50SWQsXG4gICAgICBzaWduOiB0aGlzLnNpZ24sXG4gICAgICBsb3dlclNjYWxlQm91bmQ6IHRoaXMubG93ZXJTY2FsZUJvdW5kLFxuICAgICAgdXBwZXJTY2FsZUJvdW5kOiB0aGlzLnVwcGVyU2NhbGVCb3VuZCxcbiAgICAgIGxvd2VyU2xpZGVyVmFsdWU6IHRoaXMubG93ZXJTbGlkZXJWYWx1ZSxcbiAgICAgIHVwcGVyU2xpZGVyVmFsdWU6IHRoaXMudXBwZXJTbGlkZXJWYWx1ZSxcbiAgICAgIHNsaWRlclR5cGU6IHRoaXMuc2xpZGVyVHlwZSxcbiAgICAgIGRpcmVjdGlvblR5cGU6IHRoaXMuZGlyZWN0aW9uVHlwZSxcbiAgICAgIHN0ZXA6IHRoaXMuc3RlcCxcbiAgICAgIHN0eWxlOiB0aGlzLnN0eWxlLFxuICAgIH07XG4gICAgdGhpcy52aWV3LnNldFN0YXJ0aW5nQ29uZGl0aW9ucyhvYmopO1xuICAgIHRoaXMudmlldy5pbml0KCk7XG4gIH1cblxuICBiaW5kTW9kZWwobW9kZWw6IGFueSkge1xuICAgIHRoaXMubW9kZWwgPSBtb2RlbDtcbiAgfVxuXG4gIHNldE1vZGVsKCkge1xuICAgIHRoaXMubW9kZWwuc2V0TW9kZWwoe1xuICAgICAgbG93ZXJTbGlkZXJWYWx1ZTogdGhpcy5sb3dlclNsaWRlclZhbHVlLFxuICAgICAgdXBwZXJTbGlkZXJWYWx1ZTogdGhpcy51cHBlclNsaWRlclZhbHVlLFxuICAgIH0pO1xuICB9XG5cbiAgYmluZFZpZXcodmlldzogYW55KSB7XG4gICAgdGhpcy52aWV3ID0gdmlldztcbiAgfVxuXG4gIGdldFZpZXcob2JqOiBvYmpGcm9tVmlldykge1xuICAgIGlmICh0aGlzLnNsaWRlclR5cGUgPT09ICdkb3VibGUnKSB7XG4gICAgICB0aGlzLmxvd2VyU2xpZGVyVmFsdWUgPSBvYmoubG93ZXJTbGlkZXJWYWx1ZTtcbiAgICAgIHRoaXMudXBwZXJTbGlkZXJWYWx1ZSA9IG9iai51cHBlclNsaWRlclZhbHVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5zbGlkZXJUeXBlID09PSAnc2luZ2xlJykge1xuICAgICAgdGhpcy5sb3dlclNsaWRlclZhbHVlID0gb2JqLmxvd2VyU2xpZGVyVmFsdWU7XG4gICAgfVxuICAgIHRoaXMuc2V0TW9kZWwoKTtcbiAgfVxuXG4gIGdldENvbnRyb2xsZXIoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGVsZW1lbnRJZDogdGhpcy5lbGVtZW50SWQsXG4gICAgICBzaWduOiB0aGlzLnNpZ24sXG4gICAgICBsb3dlclNjYWxlQm91bmQ6IHRoaXMubG93ZXJTY2FsZUJvdW5kLFxuICAgICAgdXBwZXJTY2FsZUJvdW5kOiB0aGlzLnVwcGVyU2NhbGVCb3VuZCxcbiAgICAgIGxvd2VyU2xpZGVyVmFsdWU6IHRoaXMubG93ZXJTbGlkZXJWYWx1ZSxcbiAgICAgIHVwcGVyU2xpZGVyVmFsdWU6IHRoaXMudXBwZXJTbGlkZXJWYWx1ZSxcbiAgICAgIHNsaWRlclR5cGU6IHRoaXMuc2xpZGVyVHlwZSxcbiAgICAgIHN0ZXA6IHRoaXMuc3RlcCxcbiAgICB9O1xuICB9XG5cbiAgYmluZENvbnRyb2xQYW5lbChjbnRybFBubDogYW55KSB7XG4gICAgdGhpcy5jb250cm9sUGFuZWwgPSBjbnRybFBubDtcbiAgfVxuXG4gIHNldENvbnRyb2xsZXJGcm9tQ29udHJvbFBhbmVsID0gKG9iajogb2JqRnJvbUNvbnRyb2xQYW5lbCkgPT4ge1xuICAgIHRoaXMuc3RlcCA9IG9iai5zdGVwO1xuICAgIHRoaXMuc2xpZGVyVHlwZSA9IG9iai5zbGlkZXJUeXBlO1xuICAgIHRoaXMuZGlyZWN0aW9uVHlwZSA9IG9iai5kaXJlY3Rpb25UeXBlO1xuICAgIHRoaXMuc3R5bGUgPSBvYmouc3R5bGU7XG4gIH1cbn1cblxuZXhwb3J0IHsgQ29udHJvbGxlciB9O1xuIiwiaW1wb3J0ICcuLi9zdHlsZXMuc2Nzcyc7XG5cbmltcG9ydCB7IElTU2xpZGVyIH0gZnJvbSAnLi9JU1NsaWRlcic7XG5cbmNvbnN0IHNldHRpbmdzRm9ySG9yaXpvbnRhbER1YmxlID0ge1xuICBpZEZvckNvbnRyb2xQYW5lbDogJ2RvY19wYW5lbCcsXG4gIGVsZW1lbnRJZDogJ2lzcycsXG4gIHNpZ246ICckJyxcbiAgbG93ZXJTY2FsZUJvdW5kOiAxMDAsXG4gIHVwcGVyU2NhbGVCb3VuZDogMTUwMCxcbiAgbG93ZXJTbGlkZXJWYWx1ZTogMjAwLFxuICB1cHBlclNsaWRlclZhbHVlOiA4MDAsXG4gIHNsaWRlclR5cGU6ICdkb3VibGUnLFxuICBkaXJlY3Rpb25UeXBlOiAnaG9yaXpvbnRhbCcsXG4gIHN0ZXA6IDEwLFxuICBzdHlsZTogJ2lzc0hvcml6b250YWwnLFxufTtcbklTU2xpZGVyKHNldHRpbmdzRm9ySG9yaXpvbnRhbER1YmxlKTtcblxuY29uc3Qgc2V0dGluZ3NGb3JIb3Jpem9udGFsU2luZ2xlID0ge1xuICBpZEZvckNvbnRyb2xQYW5lbDogJ2RvY19wYW5lbF8yJyxcbiAgZWxlbWVudElkOiAnaXNzXzInLFxuICBzaWduOiAnJCcsXG4gIGxvd2VyU2NhbGVCb3VuZDogMTAwLFxuICB1cHBlclNjYWxlQm91bmQ6IDE1MDAsXG4gIGxvd2VyU2xpZGVyVmFsdWU6IDIwMCxcbiAgdXBwZXJTbGlkZXJWYWx1ZTogODAwLFxuICBzbGlkZXJUeXBlOiAnc2luZ2xlJyxcbiAgZGlyZWN0aW9uVHlwZTogJ2hvcml6b250YWwnLFxuICBzdGVwOiAxMCxcbiAgc3R5bGU6ICdpc3NIb3Jpem9udGFsJyxcbn07XG5JU1NsaWRlcihzZXR0aW5nc0Zvckhvcml6b250YWxTaW5nbGUpO1xuXG5jb25zdCBzZXR0aW5nc0ZvclZlcnRpY2FsRG91YmxlID0ge1xuICBpZEZvckNvbnRyb2xQYW5lbDogJ2RvY19wYW5lbF8zJyxcbiAgZWxlbWVudElkOiAnaXNzXzMnLFxuICBzaWduOiAnJCcsXG4gIGxvd2VyU2NhbGVCb3VuZDogMTAwLFxuICB1cHBlclNjYWxlQm91bmQ6IDE1MDAsXG4gIGxvd2VyU2xpZGVyVmFsdWU6IDIwMCxcbiAgdXBwZXJTbGlkZXJWYWx1ZTogODAwLFxuICBzbGlkZXJUeXBlOiAnZG91YmxlJyxcbiAgZGlyZWN0aW9uVHlwZTogJ3ZlcnRpY2FsJyxcbiAgc3RlcDogMTAsXG4gIHN0eWxlOiAnaXNzVmVydGljYWwnLFxufTtcblxuSVNTbGlkZXIoc2V0dGluZ3NGb3JWZXJ0aWNhbERvdWJsZSk7XG5cbmNvbnN0IHNldHRpbmdzRm9yVmVydGljYWxTaW5nbGUgPSB7XG4gIGlkRm9yQ29udHJvbFBhbmVsOiAnZG9jX3BhbmVsXzQnLFxuICBlbGVtZW50SWQ6ICdpc3NfNCcsXG4gIHNpZ246ICckJyxcbiAgbG93ZXJTY2FsZUJvdW5kOiAxMDAsXG4gIHVwcGVyU2NhbGVCb3VuZDogMTUwMCxcbiAgbG93ZXJTbGlkZXJWYWx1ZTogMjAwLFxuICB1cHBlclNsaWRlclZhbHVlOiA4MDAsXG4gIHNsaWRlclR5cGU6ICdzaW5nbGUnLFxuICBkaXJlY3Rpb25UeXBlOiAndmVydGljYWwnLFxuICBzdGVwOiAxMCxcbiAgc3R5bGU6ICdpc3NWZXJ0aWNhbCcsXG59O1xuXG5JU1NsaWRlcihzZXR0aW5nc0ZvclZlcnRpY2FsU2luZ2xlKTtcbiIsImludGVyZmFjZSBNb2RlbCB7XG4gIGxvd2VyU2NhbGVCb3VuZDogbnVtYmVyO1xuICB1cHBlclNjYWxlQm91bmQ6IG51bWJlcjtcbiAgbG93ZXJTbGlkZXJWYWx1ZTogbnVtYmVyO1xuICB1cHBlclNsaWRlclZhbHVlOiBudW1iZXI7XG4gIHNpZ246IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIG9iakZyb21WaWV3IHtcbiAgbG93ZXJTbGlkZXJWYWx1ZT86IG51bWJlcjtcbiAgdXBwZXJTbGlkZXJWYWx1ZT86IG51bWJlcjtcbn1cblxuaW50ZXJmYWNlIG9iakZyb21Db250cm9sbGVyIHtcbiAgbG93ZXJTY2FsZUJvdW5kOiBudW1iZXI7XG4gIHVwcGVyU2NhbGVCb3VuZDogbnVtYmVyO1xuICBsb3dlclNsaWRlclZhbHVlOiBudW1iZXI7XG4gIHVwcGVyU2xpZGVyVmFsdWU6IG51bWJlcjtcbiAgc2lnbjogc3RyaW5nO1xufVxuXG5jbGFzcyBNb2RlbCB7XG4gIGNvbnN0cnVjdG9yKHBhcmFtOiBvYmpGcm9tQ29udHJvbGxlcikge1xuICAgIHRoaXMubG93ZXJTY2FsZUJvdW5kID0gcGFyYW0ubG93ZXJTY2FsZUJvdW5kIHx8IDA7XG4gICAgdGhpcy51cHBlclNjYWxlQm91bmQgPSBwYXJhbS51cHBlclNjYWxlQm91bmQgfHwgMTAwMDtcbiAgICB0aGlzLmxvd2VyU2xpZGVyVmFsdWUgPSBwYXJhbS5sb3dlclNsaWRlclZhbHVlIHx8IDIwMDtcbiAgICB0aGlzLnVwcGVyU2xpZGVyVmFsdWUgPSBwYXJhbS51cHBlclNsaWRlclZhbHVlIHx8IDgwMDtcbiAgICB0aGlzLnNpZ24gPSBwYXJhbS5zaWduIHx8ICc/JztcbiAgfVxuXG4gIHNldE1vZGVsKG9iajogb2JqRnJvbVZpZXcpIHtcbiAgICB0aGlzLmxvd2VyU2xpZGVyVmFsdWUgPSBvYmoubG93ZXJTbGlkZXJWYWx1ZTtcbiAgICB0aGlzLnVwcGVyU2xpZGVyVmFsdWUgPSBvYmoudXBwZXJTbGlkZXJWYWx1ZTtcbiAgfVxuXG4gIHNldEluaXRpYWxNb2RlbE9wdGlvbnMgPSAocGFyYW06IG9iakZyb21Db250cm9sbGVyKSA9PiB7XG4gICAgdGhpcy5sb3dlclNjYWxlQm91bmQgPSBwYXJhbS5sb3dlclNjYWxlQm91bmQ7XG4gICAgdGhpcy51cHBlclNjYWxlQm91bmQgPSBwYXJhbS51cHBlclNjYWxlQm91bmQ7XG4gICAgdGhpcy5sb3dlclNsaWRlclZhbHVlID0gcGFyYW0ubG93ZXJTbGlkZXJWYWx1ZTtcbiAgICB0aGlzLnVwcGVyU2xpZGVyVmFsdWUgPSBwYXJhbS51cHBlclNsaWRlclZhbHVlO1xuICAgIHRoaXMuc2lnbiA9IHBhcmFtLnNpZ247XG4gIH1cblxuICBnZXRNb2RlbCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbG93ZXJTY2FsZUJvdW5kOiB0aGlzLmxvd2VyU2NhbGVCb3VuZCxcbiAgICAgIHVwcGVyU2NhbGVCb3VuZDogdGhpcy51cHBlclNjYWxlQm91bmQsXG4gICAgICBsb3dlclNsaWRlclZhbHVlOiB0aGlzLmxvd2VyU2xpZGVyVmFsdWUsXG4gICAgICB1cHBlclNsaWRlclZhbHVlOiB0aGlzLnVwcGVyU2xpZGVyVmFsdWUsXG4gICAgICBzaWduOiB0aGlzLnNpZ24sXG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgeyBNb2RlbCB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==