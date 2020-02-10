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

/***/ "./src/refactoring/js/controlPanel.js":
/*!********************************************!*\
  !*** ./src/refactoring/js/controlPanel.js ***!
  \********************************************/
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
            elementId: 'doc_panel',
            sign: '₽',
            lowerScaleBound: 0,
            upperScaleBound: 1000,
            lowerSliderValue: 200,
            upperSliderValue: 800,
            sliderType: 'double',
            directionType: 'horizontal',
            step: 5,
            idForSettings: 'doc_panel',
        };
        this.getControlPanel = () => {
            const controlPanel = document.getElementById(this.settings.idForSettings);
            return controlPanel;
        };
        this.setIdForSelect = (select, obj) => {
            select.id = obj.elementName;
        };
        this.createTitle = (obj) => {
            const title = obj.description;
            const div = document.createElement('div');
            const textNodeTitle = document.createTextNode(title);
            div.appendChild(textNodeTitle);
            return div;
        };
        this.appendChild = (parent, child) => {
            parent.appendChild(child);
        };
        this.returnKeys = (obj) => {
            const arr = Object.keys(obj);
            return arr;
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
        this.createInput = (selectOrDiv, value) => {
            const input = document.createElement('input');
            input.type = 'number';
            input.textContent = `${value}${this.settings.sign}`;
            this.appendChild(selectOrDiv, input);
        };
        this.createListenerOrOr = (elementForListener, keyOfSetting) => {
            const changeListener = () => {
                this.settings[keyOfSetting] = elementForListener.value;
                this.sliderRefresh();
            };
            elementForListener.addEventListener('change', changeListener());
        };
        this.createListenerNumeral = (elementForListener, keyOfSetting) => {
            const inputListener = () => {
                this.settings[keyOfSetting] = Number(elementForListener.value);
                this.sliderRefresh();
            };
            elementForListener.addEventListener('input', inputListener());
        };
        this.createPanel = (objectForConstructionPanel, type) => {
            const keys = this.returnKeys(objectForConstructionPanel);
            const controlPanel = this.getControlPanel();
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
        this.buildPanel = () => {
            this.createPanel(this.numeralValues, 'numeral');
            this.createPanel(this.orValues, 'select');
        };
        this.sliderRefresh = () => { };
    }
}
// createOrOrPanel = () => {
//   const keys = this.returnKeys(this.orValues);
//   const controlPanel = this.getControlPanel();
//   keys.forEach(key => {
//     const currentObj = this.orValues[key];
//     this.selectOrOr = document.createElement('select');
//     this.setIdForSelect(this.selectOrOr, currentObj);
//     const createTitle = this.createTitle(currentObj);
//     this.appendChild(this.selectOrOr, createTitle);
//     this.createChangableOptions(currentObj['value'], this.selectOrOr);
//     this.appendChild(controlPanel, this.selectOrOr);
//   });
//   keys.forEach(key => {
//     const currentObj = this.orValues[key];
//     const eventElement: HTMLElement = controlPanel.querySelector(`#${currentObj.elementName}`)
//     this.createListenerOrOr(eventElement, key);
//   });
// };
// createNumberPanel = () => {
//   const keys = this.returnKeys(this.numeralValues);
//   const controlPanel = this.getControlPanel();
//   keys.forEach(key => {
//     const currentObj = this.numeralValues[key];
//     this.divNumeral = document.createElement('div');
//     this.setIdForSelect(this.divNumeral, currentObj);
//     const createTitle = this.createTitle(currentObj);
//     this.appendChild(this.divNumeral, createTitle);
//     const input = document.createElement('input');
//     input.type = 'number';
//     this.appendChild(this.divNumeral, input);
//     this.appendChild(controlPanel, this.divNumeral);
//   })
//   keys.forEach(key => {
//     const currentObj = this.numeralValues[key];
//     const eventElement: HTMLElement = controlPanel.querySelector(`#${currentObj.elementName}`);
//     this.createListenerNumeral(eventElement, key);
//   })
// }
// function change_string(n: string, x: string) {
//   document.getElementById('settings').innerText = `${n}: ${x}`;
//   slider_refresh();

//# sourceMappingURL=controlPanel.js.map

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
/* harmony import */ var _controlPanel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controlPanel */ "./src/refactoring/js/controlPanel.js");

// eslint-disable-next-line import/no-unresolved


const view = new _refactoringView__WEBPACK_IMPORTED_MODULE_1__["ViewHorizontal"]();
const controlPanel = new _controlPanel__WEBPACK_IMPORTED_MODULE_2__["ControlPanel"]();
controlPanel.buildPanel();
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
            const stepInPixel = (this.mainAxisSize / this.upperScale) * this.step;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vaXNfcmVmYWN0b3JpbmcuY3NzPzcwZTkiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZmFjdG9yaW5nL2pzL2NvbnRyb2xQYW5lbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVmYWN0b3JpbmcvanMvcmVmYWN0b3JpbmdJbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVmYWN0b3JpbmcvanMvcmVmYWN0b3JpbmdWaWV3LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQSx1Qzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsTUFBTSxFQUFFLG1CQUFtQjtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0VBQXdFLHVCQUF1QjtBQUMvRjtBQUNBO0FBQ0E7QUFDQSx3RUFBd0UsdUJBQXVCO0FBQy9GO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0Esd0VBQXdFLHVCQUF1QjtBQUMvRjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSx3RUFBd0UsdUJBQXVCO0FBQy9GO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSx3REFBd0QsRUFBRSxJQUFJLEVBQUU7QUFDaEU7QUFDd0I7QUFDeEIsd0M7Ozs7Ozs7Ozs7OztBQ2pOQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXFDO0FBQ3JDO0FBQ21EO0FBQ0w7QUFDOUMsaUJBQWlCLCtEQUFjO0FBQy9CLHlCQUF5QiwwREFBWTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLGlDQUFpQywrREFBYztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSwrQkFBK0IsK0RBQWM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsK0JBQStCLCtEQUFjO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLDRDOzs7Ozs7Ozs7Ozs7QUNsRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsZ0RBQWdEO0FBQ2xHO0FBQ0E7QUFDQSxpREFBaUQsZ0RBQWdEO0FBQ2pHO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELGdEQUFnRDtBQUNqRyxpREFBaUQsZ0RBQWdEO0FBQ2pHO0FBQ0E7QUFDQSxnREFBZ0QsZ0RBQWdEO0FBQ2hHLGdEQUFnRCxnREFBZ0Q7QUFDaEc7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzREFBc0Qsc0JBQXNCLEVBQUUsVUFBVTtBQUN4RixtREFBbUQsc0JBQXNCLEVBQUUsVUFBVTtBQUNyRjtBQUNBO0FBQ0EscURBQXFELHNCQUFzQixFQUFFLFVBQVU7QUFDdkYscURBQXFELHNCQUFzQixFQUFFLFVBQVU7QUFDdkYsa0RBQWtELHNCQUFzQixFQUFFLFVBQVU7QUFDcEYsa0RBQWtELHNCQUFzQixFQUFFLFVBQVU7QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsVUFBVSxFQUFFLFVBQVU7QUFDbEQ7QUFDQSx1REFBdUQsS0FBSztBQUM1RCxvREFBb0QsS0FBSztBQUN6RDtBQUNBO0FBQ0EsdURBQXVELEtBQUs7QUFDNUQsb0RBQW9ELEtBQUs7QUFDekQ7QUFDQTtBQUNBLHdEQUF3RCxLQUFLO0FBQzdELHFEQUFxRCxLQUFLO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsNkJBQTZCO0FBQzlFO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCwwREFBMEQ7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsNEJBQTRCO0FBQzNFLGtEQUFrRCxnREFBZ0Q7QUFDbEc7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELHdEQUF3RDtBQUMxRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELElBQUk7QUFDdEQ7QUFDQTtBQUNBLGlEQUFpRCxJQUFJO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5RkFBeUYsMEJBQTBCO0FBQ25IO0FBQ0E7QUFDQSx5RkFBeUYseUJBQXlCO0FBQ2xILHlGQUF5Rix5QkFBeUI7QUFDbEg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDMEI7QUFDMUIsMkMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvcmVmYWN0b3JpbmcvanMvcmVmYWN0b3JpbmdJbmRleC5qc1wiKTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImNsYXNzIENvbnRyb2xQYW5lbCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLm9yVmFsdWVzID0ge1xyXG4gICAgICAgICAgICBzaWduOiB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1NpZ24nLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICfQktCw0LvRjtGC0LAnLFxyXG4gICAgICAgICAgICAgICAgZWxlbWVudE5hbWU6ICdzaWduJyxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBbJ+KCvScsICckJ10sXHJcbiAgICAgICAgICAgICAgICBuYW1lT2ZWYXJpYWJsZTogJ3NpZ24nLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzbGlkZXJUeXBlOiB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1R5cGUnLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICfQotC40L8g0YHQu9Cw0LnQtNC10YDQsCAtINC+0LTQuNC90LDRgNC90YvQuSDQuNC70Lgg0LTQstC+0LnQvdC+0LknLFxyXG4gICAgICAgICAgICAgICAgZWxlbWVudE5hbWU6ICdzbGlkZXJUeXBlJyxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBbJ2RvdWJsZScsICdzaW5nbGUnXSxcclxuICAgICAgICAgICAgICAgIG5hbWVPZlZhcmlhYmxlOiAnc2xpZGVyVHlwZScsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRpcmVjdGlvblR5cGU6IHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnVHlwZScsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ9Ci0LjQvyDRgdC70LDQudC00LXRgNCwIC0g0LLQtdGA0YLQuNC60LDQu9GM0L3Ri9C5INC40LvQuCDQs9C+0YDQuNC30L7QvdGC0LDQu9GM0L3Ri9C5JyxcclxuICAgICAgICAgICAgICAgIGVsZW1lbnROYW1lOiAnZGlyZWN0aW9uVHlwZScsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogWydob3Jpem9udGFsJywgJ3ZlcnRpY2FsJ10sXHJcbiAgICAgICAgICAgICAgICBuYW1lT2ZWYXJpYWJsZTogJ2RpcmVjdGlvblR5cGUnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5udW1lcmFsVmFsdWVzID0ge1xyXG4gICAgICAgICAgICBzdGVwOiB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1N0ZXAnLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICfQqNCw0LMg0L/QvtC70LfRg9C90LrQsCcsXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50TmFtZTogJ3N0ZXAnLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogJ251bWJlcicsXHJcbiAgICAgICAgICAgICAgICBuYW1lT2ZWYXJpYWJsZTogJ3N0ZXAnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBsb3dlclNjYWxlQm91bmQ6IHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnTWluX3NsaWRlcicsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ9Cc0LjQvdC40LzQsNC70YzQvdC+0LUg0LfQvdCw0YfQtdC90LjQtSDRiNC60LDQu9GLINGB0LvQsNC50LTQtdGA0LAnLFxyXG4gICAgICAgICAgICAgICAgZWxlbWVudE5hbWU6ICdsb3dlclNjYWxlQm91bmQnLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogJ251bWJlcicsXHJcbiAgICAgICAgICAgICAgICBuYW1lT2ZWYXJpYWJsZTogJ2xvd2VyU2NhbGVCb3VuZCcsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHVwcGVyU2NhbGVCb3VuZDoge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdNYXhfc2xpZGVyJyxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAn0JzQsNC60YHQuNC80LDQu9GM0L3QvtC1INC30L3QsNGH0LXQvdC40LUg0YjQutCw0LvRiyDRgdC70LDQudC00LXRgNCwJyxcclxuICAgICAgICAgICAgICAgIGVsZW1lbnROYW1lOiAndXBwZXJTY2FsZUJvdW5kJyxcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdudW1iZXInLFxyXG4gICAgICAgICAgICAgICAgbmFtZU9mVmFyaWFibGU6ICd1cHBlclNjYWxlQm91bmQnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBsb3dlclNsaWRlclZhbHVlOiB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ01pbl9zbGlkZXInLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICfQndCw0YfQsNC70YzQvdC+0LUg0LfQvdCw0YfQtdC90LjQtSDRiNC60LDQu9GLINGB0LvQsNC50LTQtdGA0LAgLSDQtNC70Y8g0L/QtdGA0LLQvtCz0L4g0LjQu9C4INC+0LTQuNC90L7Rh9C90L7Qs9C+INC/0L7Qu9C30YPQvdC60LAnLFxyXG4gICAgICAgICAgICAgICAgZWxlbWVudE5hbWU6ICdsb3dlclNsaWRlclZhbHVlJyxcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdudW1iZXInLFxyXG4gICAgICAgICAgICAgICAgbmFtZU9mVmFyaWFibGU6ICdsb3dlclNsaWRlclZhbHVlJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdXBwZXJTbGlkZXJWYWx1ZToge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdNYXhfc2xpZGVyJyxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAn0J3QsNGH0LDQu9GM0L3QvtC1INC30L3QsNGH0LXQvdC40LUg0YjQutCw0LvRiyDRgdC70LDQudC00LXRgNCwIC0g0LTQu9GPINCy0YLQvtGA0L7Qs9C+INC/0L7Qu9C30YPQvdC60LAnLFxyXG4gICAgICAgICAgICAgICAgZWxlbWVudE5hbWU6ICd1cHBlclNsaWRlclZhbHVlJyxcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdudW1iZXInLFxyXG4gICAgICAgICAgICAgICAgbmFtZU9mVmFyaWFibGU6ICd1cHBlclNsaWRlclZhbHVlJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnRJZDogJ2RvY19wYW5lbCcsXHJcbiAgICAgICAgICAgIHNpZ246ICfigr0nLFxyXG4gICAgICAgICAgICBsb3dlclNjYWxlQm91bmQ6IDAsXHJcbiAgICAgICAgICAgIHVwcGVyU2NhbGVCb3VuZDogMTAwMCxcclxuICAgICAgICAgICAgbG93ZXJTbGlkZXJWYWx1ZTogMjAwLFxyXG4gICAgICAgICAgICB1cHBlclNsaWRlclZhbHVlOiA4MDAsXHJcbiAgICAgICAgICAgIHNsaWRlclR5cGU6ICdkb3VibGUnLFxyXG4gICAgICAgICAgICBkaXJlY3Rpb25UeXBlOiAnaG9yaXpvbnRhbCcsXHJcbiAgICAgICAgICAgIHN0ZXA6IDUsXHJcbiAgICAgICAgICAgIGlkRm9yU2V0dGluZ3M6ICdkb2NfcGFuZWwnLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5nZXRDb250cm9sUGFuZWwgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnRyb2xQYW5lbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuc2V0dGluZ3MuaWRGb3JTZXR0aW5ncyk7XHJcbiAgICAgICAgICAgIHJldHVybiBjb250cm9sUGFuZWw7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnNldElkRm9yU2VsZWN0ID0gKHNlbGVjdCwgb2JqKSA9PiB7XHJcbiAgICAgICAgICAgIHNlbGVjdC5pZCA9IG9iai5lbGVtZW50TmFtZTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuY3JlYXRlVGl0bGUgPSAob2JqKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gb2JqLmRlc2NyaXB0aW9uO1xyXG4gICAgICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgY29uc3QgdGV4dE5vZGVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRpdGxlKTtcclxuICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKHRleHROb2RlVGl0bGUpO1xyXG4gICAgICAgICAgICByZXR1cm4gZGl2O1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5hcHBlbmRDaGlsZCA9IChwYXJlbnQsIGNoaWxkKSA9PiB7XHJcbiAgICAgICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChjaGlsZCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnJldHVybktleXMgPSAob2JqKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFyciA9IE9iamVjdC5rZXlzKG9iaik7XHJcbiAgICAgICAgICAgIHJldHVybiBhcnI7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmNyZWF0ZUNoYW5nYWJsZU9wdGlvbnMgPSAoYXJyLCBwYXJlbnRFbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGFyci5mb3JFYWNoKChjaGFuZ2FibGVWYWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICAgICAgICAgICAgICBvcHRpb24udmFsdWUgPSBjaGFuZ2FibGVWYWx1ZTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjaGFuZ2FibGVWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFwcGVuZENoaWxkKG9wdGlvbiwgdGV4dCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFwcGVuZENoaWxkKHBhcmVudEVsZW1lbnQsIG9wdGlvbik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5jcmVhdGVJbnB1dCA9IChzZWxlY3RPckRpdiwgdmFsdWUpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgICAgICBpbnB1dC50eXBlID0gJ251bWJlcic7XHJcbiAgICAgICAgICAgIGlucHV0LnRleHRDb250ZW50ID0gYCR7dmFsdWV9JHt0aGlzLnNldHRpbmdzLnNpZ259YDtcclxuICAgICAgICAgICAgdGhpcy5hcHBlbmRDaGlsZChzZWxlY3RPckRpdiwgaW5wdXQpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5jcmVhdGVMaXN0ZW5lck9yT3IgPSAoZWxlbWVudEZvckxpc3RlbmVyLCBrZXlPZlNldHRpbmcpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY2hhbmdlTGlzdGVuZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldHRpbmdzW2tleU9mU2V0dGluZ10gPSBlbGVtZW50Rm9yTGlzdGVuZXIudmFsdWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNsaWRlclJlZnJlc2goKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgZWxlbWVudEZvckxpc3RlbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGNoYW5nZUxpc3RlbmVyKCkpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5jcmVhdGVMaXN0ZW5lck51bWVyYWwgPSAoZWxlbWVudEZvckxpc3RlbmVyLCBrZXlPZlNldHRpbmcpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaW5wdXRMaXN0ZW5lciA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0dGluZ3Nba2V5T2ZTZXR0aW5nXSA9IE51bWJlcihlbGVtZW50Rm9yTGlzdGVuZXIudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zbGlkZXJSZWZyZXNoKCk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGVsZW1lbnRGb3JMaXN0ZW5lci5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGlucHV0TGlzdGVuZXIoKSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmNyZWF0ZVBhbmVsID0gKG9iamVjdEZvckNvbnN0cnVjdGlvblBhbmVsLCB0eXBlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGtleXMgPSB0aGlzLnJldHVybktleXMob2JqZWN0Rm9yQ29uc3RydWN0aW9uUGFuZWwpO1xyXG4gICAgICAgICAgICBjb25zdCBjb250cm9sUGFuZWwgPSB0aGlzLmdldENvbnRyb2xQYW5lbCgpO1xyXG4gICAgICAgICAgICBrZXlzLmZvckVhY2goKGtleSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudE9iaiA9IG9iamVjdEZvckNvbnN0cnVjdGlvblBhbmVsW2tleV07XHJcbiAgICAgICAgICAgICAgICBsZXQgc2VsZWN0T3JEaXY7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gJ251bWVyYWwnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0T3JEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAnc2VsZWN0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdE9yRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldElkRm9yU2VsZWN0KHNlbGVjdE9yRGl2LCBjdXJyZW50T2JqKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNyZWF0ZVRpdGxlID0gdGhpcy5jcmVhdGVUaXRsZShjdXJyZW50T2JqKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXBwZW5kQ2hpbGQoc2VsZWN0T3JEaXYsIGNyZWF0ZVRpdGxlKTtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAnbnVtZXJhbCcpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUlucHV0KHNlbGVjdE9yRGl2LCB0aGlzLnNldHRpbmdzW2N1cnJlbnRPYmoubmFtZU9mVmFyaWFibGVdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAnc2VsZWN0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlQ2hhbmdhYmxlT3B0aW9ucyhjdXJyZW50T2JqLnZhbHVlLCBzZWxlY3RPckRpdik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFwcGVuZENoaWxkKGNvbnRyb2xQYW5lbCwgc2VsZWN0T3JEaXYpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAga2V5cy5mb3JFYWNoKChrZXkpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRPYmogPSBvYmplY3RGb3JDb25zdHJ1Y3Rpb25QYW5lbFtrZXldO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qga2V5T2ZTZXR0aW5nID0gY3VycmVudE9iai5uYW1lT2ZWYXJpYWJsZTtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAnbnVtZXJhbCcpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBldmVudEVsZW1lbnQgPSBjb250cm9sUGFuZWwucXVlcnlTZWxlY3RvcihgIyR7Y3VycmVudE9iai5lbGVtZW50TmFtZX1gKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUxpc3RlbmVyTnVtZXJhbChldmVudEVsZW1lbnQsIGtleU9mU2V0dGluZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gJ3NlbGVjdCcpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBldmVudEVsZW1lbnQgPSBjb250cm9sUGFuZWwucXVlcnlTZWxlY3RvcihgIyR7Y3VycmVudE9iai5lbGVtZW50TmFtZX1gKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUxpc3RlbmVyT3JPcihldmVudEVsZW1lbnQsIGtleU9mU2V0dGluZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5idWlsZFBhbmVsID0gKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVBhbmVsKHRoaXMubnVtZXJhbFZhbHVlcywgJ251bWVyYWwnKTtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVQYW5lbCh0aGlzLm9yVmFsdWVzLCAnc2VsZWN0Jyk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnNsaWRlclJlZnJlc2ggPSAoKSA9PiB7IH07XHJcbiAgICB9XHJcbn1cclxuLy8gY3JlYXRlT3JPclBhbmVsID0gKCkgPT4ge1xyXG4vLyAgIGNvbnN0IGtleXMgPSB0aGlzLnJldHVybktleXModGhpcy5vclZhbHVlcyk7XHJcbi8vICAgY29uc3QgY29udHJvbFBhbmVsID0gdGhpcy5nZXRDb250cm9sUGFuZWwoKTtcclxuLy8gICBrZXlzLmZvckVhY2goa2V5ID0+IHtcclxuLy8gICAgIGNvbnN0IGN1cnJlbnRPYmogPSB0aGlzLm9yVmFsdWVzW2tleV07XHJcbi8vICAgICB0aGlzLnNlbGVjdE9yT3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcclxuLy8gICAgIHRoaXMuc2V0SWRGb3JTZWxlY3QodGhpcy5zZWxlY3RPck9yLCBjdXJyZW50T2JqKTtcclxuLy8gICAgIGNvbnN0IGNyZWF0ZVRpdGxlID0gdGhpcy5jcmVhdGVUaXRsZShjdXJyZW50T2JqKTtcclxuLy8gICAgIHRoaXMuYXBwZW5kQ2hpbGQodGhpcy5zZWxlY3RPck9yLCBjcmVhdGVUaXRsZSk7XHJcbi8vICAgICB0aGlzLmNyZWF0ZUNoYW5nYWJsZU9wdGlvbnMoY3VycmVudE9ialsndmFsdWUnXSwgdGhpcy5zZWxlY3RPck9yKTtcclxuLy8gICAgIHRoaXMuYXBwZW5kQ2hpbGQoY29udHJvbFBhbmVsLCB0aGlzLnNlbGVjdE9yT3IpO1xyXG4vLyAgIH0pO1xyXG4vLyAgIGtleXMuZm9yRWFjaChrZXkgPT4ge1xyXG4vLyAgICAgY29uc3QgY3VycmVudE9iaiA9IHRoaXMub3JWYWx1ZXNba2V5XTtcclxuLy8gICAgIGNvbnN0IGV2ZW50RWxlbWVudDogSFRNTEVsZW1lbnQgPSBjb250cm9sUGFuZWwucXVlcnlTZWxlY3RvcihgIyR7Y3VycmVudE9iai5lbGVtZW50TmFtZX1gKVxyXG4vLyAgICAgdGhpcy5jcmVhdGVMaXN0ZW5lck9yT3IoZXZlbnRFbGVtZW50LCBrZXkpO1xyXG4vLyAgIH0pO1xyXG4vLyB9O1xyXG4vLyBjcmVhdGVOdW1iZXJQYW5lbCA9ICgpID0+IHtcclxuLy8gICBjb25zdCBrZXlzID0gdGhpcy5yZXR1cm5LZXlzKHRoaXMubnVtZXJhbFZhbHVlcyk7XHJcbi8vICAgY29uc3QgY29udHJvbFBhbmVsID0gdGhpcy5nZXRDb250cm9sUGFuZWwoKTtcclxuLy8gICBrZXlzLmZvckVhY2goa2V5ID0+IHtcclxuLy8gICAgIGNvbnN0IGN1cnJlbnRPYmogPSB0aGlzLm51bWVyYWxWYWx1ZXNba2V5XTtcclxuLy8gICAgIHRoaXMuZGl2TnVtZXJhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4vLyAgICAgdGhpcy5zZXRJZEZvclNlbGVjdCh0aGlzLmRpdk51bWVyYWwsIGN1cnJlbnRPYmopO1xyXG4vLyAgICAgY29uc3QgY3JlYXRlVGl0bGUgPSB0aGlzLmNyZWF0ZVRpdGxlKGN1cnJlbnRPYmopO1xyXG4vLyAgICAgdGhpcy5hcHBlbmRDaGlsZCh0aGlzLmRpdk51bWVyYWwsIGNyZWF0ZVRpdGxlKTtcclxuLy8gICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuLy8gICAgIGlucHV0LnR5cGUgPSAnbnVtYmVyJztcclxuLy8gICAgIHRoaXMuYXBwZW5kQ2hpbGQodGhpcy5kaXZOdW1lcmFsLCBpbnB1dCk7XHJcbi8vICAgICB0aGlzLmFwcGVuZENoaWxkKGNvbnRyb2xQYW5lbCwgdGhpcy5kaXZOdW1lcmFsKTtcclxuLy8gICB9KVxyXG4vLyAgIGtleXMuZm9yRWFjaChrZXkgPT4ge1xyXG4vLyAgICAgY29uc3QgY3VycmVudE9iaiA9IHRoaXMubnVtZXJhbFZhbHVlc1trZXldO1xyXG4vLyAgICAgY29uc3QgZXZlbnRFbGVtZW50OiBIVE1MRWxlbWVudCA9IGNvbnRyb2xQYW5lbC5xdWVyeVNlbGVjdG9yKGAjJHtjdXJyZW50T2JqLmVsZW1lbnROYW1lfWApO1xyXG4vLyAgICAgdGhpcy5jcmVhdGVMaXN0ZW5lck51bWVyYWwoZXZlbnRFbGVtZW50LCBrZXkpO1xyXG4vLyAgIH0pXHJcbi8vIH1cclxuLy8gZnVuY3Rpb24gY2hhbmdlX3N0cmluZyhuOiBzdHJpbmcsIHg6IHN0cmluZykge1xyXG4vLyAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZXR0aW5ncycpLmlubmVyVGV4dCA9IGAke259OiAke3h9YDtcclxuLy8gICBzbGlkZXJfcmVmcmVzaCgpO1xyXG5leHBvcnQgeyBDb250cm9sUGFuZWwgfTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29udHJvbFBhbmVsLmpzLm1hcCIsImltcG9ydCAnLi4vLi4vLi4vaXNfcmVmYWN0b3JpbmcuY3NzJztcclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnJlc29sdmVkXHJcbmltcG9ydCB7IFZpZXdIb3Jpem9udGFsIH0gZnJvbSAnLi9yZWZhY3RvcmluZ1ZpZXcnO1xyXG5pbXBvcnQgeyBDb250cm9sUGFuZWwgfSBmcm9tICcuL2NvbnRyb2xQYW5lbCc7XHJcbmNvbnN0IHZpZXcgPSBuZXcgVmlld0hvcml6b250YWwoKTtcclxuY29uc3QgY29udHJvbFBhbmVsID0gbmV3IENvbnRyb2xQYW5lbCgpO1xyXG5jb250cm9sUGFuZWwuYnVpbGRQYW5lbCgpO1xyXG52aWV3LnNldFN0YXJ0aW5nQ29uZGl0aW9ucyh7XHJcbiAgICBlbGVtZW50SWQ6ICcjaXNzJyxcclxuICAgIHNpZ246ICckJyxcclxuICAgIGxvd2VyU2NhbGVCb3VuZDogMTAwLFxyXG4gICAgdXBwZXJTY2FsZUJvdW5kOiAxNTAwLFxyXG4gICAgbG93ZXJTbGlkZXJWYWx1ZTogMjAwLFxyXG4gICAgdXBwZXJTbGlkZXJWYWx1ZTogODAwLFxyXG4gICAgc2xpZGVyVHlwZTogJ2RvdWJsZScsXHJcbiAgICBkaXJlY3Rpb25UeXBlOiAnaG9yaXpvbnRhbCcsXHJcbiAgICBzdGVwOiAxMCxcclxuICAgIHRvb2x0aXA6ICdvbicsXHJcbiAgICB2YWx1ZVN0YXRlRmllbGQ6ICdvbicsXHJcbn0pO1xyXG52aWV3LmluaXQoKTtcclxuY29uc3Qgdmlld1NpbmdsZUhvcml6b250YWwgPSBuZXcgVmlld0hvcml6b250YWwoKTtcclxudmlld1NpbmdsZUhvcml6b250YWwuc2V0U3RhcnRpbmdDb25kaXRpb25zKHtcclxuICAgIGVsZW1lbnRJZDogJyNpc3NfMicsXHJcbiAgICBzaWduOiAnJCcsXHJcbiAgICBsb3dlclNjYWxlQm91bmQ6IDEwMCxcclxuICAgIHVwcGVyU2NhbGVCb3VuZDogMTUwMCxcclxuICAgIGxvd2VyU2xpZGVyVmFsdWU6IDIwMCxcclxuICAgIHVwcGVyU2xpZGVyVmFsdWU6IDgwMCxcclxuICAgIHNsaWRlclR5cGU6ICdzaW5nbGUnLFxyXG4gICAgZGlyZWN0aW9uVHlwZTogJ2hvcml6b250YWwnLFxyXG4gICAgc3RlcDogMTAsXHJcbiAgICB0b29sdGlwOiAnb24nLFxyXG4gICAgdmFsdWVTdGF0ZUZpZWxkOiAnb24nLFxyXG59KTtcclxudmlld1NpbmdsZUhvcml6b250YWwuaW5pdCgpO1xyXG5jb25zdCB2aWV3U2luZ2xlVmVydGljYWwgPSBuZXcgVmlld0hvcml6b250YWwoKTtcclxudmlld1NpbmdsZVZlcnRpY2FsLnNldFN0YXJ0aW5nQ29uZGl0aW9ucyh7XHJcbiAgICBlbGVtZW50SWQ6ICcjaXNzXzMnLFxyXG4gICAgc2lnbjogJyQnLFxyXG4gICAgbG93ZXJTY2FsZUJvdW5kOiAxMDAsXHJcbiAgICB1cHBlclNjYWxlQm91bmQ6IDE1MDAsXHJcbiAgICBsb3dlclNsaWRlclZhbHVlOiAyMDAsXHJcbiAgICB1cHBlclNsaWRlclZhbHVlOiA4MDAsXHJcbiAgICBzbGlkZXJUeXBlOiAnc2luZ2xlJyxcclxuICAgIGRpcmVjdGlvblR5cGU6ICd2ZXJ0aWNhbCcsXHJcbiAgICBzdGVwOiAxMCxcclxuICAgIHRvb2x0aXA6ICdvbicsXHJcbiAgICB2YWx1ZVN0YXRlRmllbGQ6ICdvbicsXHJcbn0pO1xyXG52aWV3U2luZ2xlVmVydGljYWwuaW5pdCgpO1xyXG5jb25zdCB2aWV3RG91YmxlVmVydGljYWwgPSBuZXcgVmlld0hvcml6b250YWwoKTtcclxudmlld0RvdWJsZVZlcnRpY2FsLnNldFN0YXJ0aW5nQ29uZGl0aW9ucyh7XHJcbiAgICBlbGVtZW50SWQ6ICcjaXNzXzQnLFxyXG4gICAgc2lnbjogJyQnLFxyXG4gICAgbG93ZXJTY2FsZUJvdW5kOiAxMDAsXHJcbiAgICB1cHBlclNjYWxlQm91bmQ6IDE1MDAsXHJcbiAgICBsb3dlclNsaWRlclZhbHVlOiAyMDAsXHJcbiAgICB1cHBlclNsaWRlclZhbHVlOiA4MDAsXHJcbiAgICBzbGlkZXJUeXBlOiAnZG91YmxlJyxcclxuICAgIGRpcmVjdGlvblR5cGU6ICd2ZXJ0aWNhbCcsXHJcbiAgICBzdGVwOiAxMCxcclxuICAgIHRvb2x0aXA6ICdvbicsXHJcbiAgICB2YWx1ZVN0YXRlRmllbGQ6ICdvbicsXHJcbn0pO1xyXG52aWV3RG91YmxlVmVydGljYWwuaW5pdCgpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZWZhY3RvcmluZ0luZGV4LmpzLm1hcCIsImNsYXNzIFZpZXdIb3Jpem9udGFsIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuYmluZENvbnRyb2xsZXIgPSAoY29udHJvbGxlcikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRyb2xsZXIgPSBjb250cm9sbGVyO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5zZXRTdGFydGluZ0NvbmRpdGlvbnMgPSAob2JqKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudElkID0gb2JqLmVsZW1lbnRJZCB8fCAnI2lzcyc7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iob2JqLmVsZW1lbnRJZCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2lnbiA9IG9iai5zaWduIHx8ICdSJztcclxuICAgICAgICAgICAgdGhpcy5sb3dlclNjYWxlID0gTnVtYmVyKG9iai5sb3dlclNjYWxlQm91bmQpIHx8IDA7XHJcbiAgICAgICAgICAgIHRoaXMudXBwZXJTY2FsZSA9IE51bWJlcihvYmoudXBwZXJTY2FsZUJvdW5kKSB8fCAxMDAwO1xyXG4gICAgICAgICAgICB0aGlzLmxvd2VyU2xpZGVyVmFsdWUgPSBOdW1iZXIob2JqLmxvd2VyU2xpZGVyVmFsdWUpIHx8IDIwMDtcclxuICAgICAgICAgICAgdGhpcy51cHBlclNsaWRlclZhbHVlID0gTnVtYmVyKG9iai51cHBlclNsaWRlclZhbHVlKSB8fCA4MDA7XHJcbiAgICAgICAgICAgIHRoaXMuc2xpZGVyVHlwZSA9IG9iai5zbGlkZXJUeXBlIHx8ICdzaW5nbGUnO1xyXG4gICAgICAgICAgICB0aGlzLmRpcmVjdGlvblR5cGUgPSBvYmouZGlyZWN0aW9uVHlwZSB8fCAnaG9yaXpvbnRhbCc7XHJcbiAgICAgICAgICAgIHRoaXMuc3RlcCA9IG9iai5zdGVwIHx8IDI7XHJcbiAgICAgICAgICAgIHRoaXMudG9vbHRpcCA9IG9iai50b29sdGlwIHx8ICdvbic7XHJcbiAgICAgICAgICAgIHRoaXMudmFsdWVTdGF0ZUZpZWxkID0gb2JqLnZhbHVlU3RhdGVGaWVsZCB8fCAnb24nO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5nZXRTdGFydGluZ0NvbmRpdGlvbnMgPSAoKSA9PiAoe1xyXG4gICAgICAgICAgICBlbGVtZW50SWQ6IHRoaXMuZWxlbWVudElkLFxyXG4gICAgICAgICAgICBzaWduOiB0aGlzLnNpZ24sXHJcbiAgICAgICAgICAgIGxvd2VyU2NhbGVCb3VuZDogdGhpcy5sb3dlclNjYWxlLFxyXG4gICAgICAgICAgICB1cHBlclNjYWxlQm91bmQ6IHRoaXMudXBwZXJTY2FsZSxcclxuICAgICAgICAgICAgbG93ZXJTbGlkZXJWYWx1ZTogdGhpcy5sb3dlclNsaWRlclZhbHVlLFxyXG4gICAgICAgICAgICB1cHBlclNsaWRlclZhbHVlOiB0aGlzLnVwcGVyU2xpZGVyVmFsdWUsXHJcbiAgICAgICAgICAgIHNsaWRlclR5cGU6IHRoaXMuc2xpZGVyVHlwZSxcclxuICAgICAgICAgICAgc3RlcDogdGhpcy5zdGVwLFxyXG4gICAgICAgICAgICB0b29sdGlwOiB0aGlzLnRvb2x0aXAsXHJcbiAgICAgICAgICAgIHZhbHVlU3RhdGVGaWVsZDogdGhpcy52YWx1ZVN0YXRlRmllbGQsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5pbml0ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZURPTSgpO1xyXG4gICAgICAgICAgICB0aGlzLndyaXRlRE9NKCk7XHJcbiAgICAgICAgICAgIHRoaXMud3JpdGVHZW9tZXRyeURPTXRvVmFyaWFibGVzKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlTGlzdGVuZXJPblNsaWRlcigpO1xyXG4gICAgICAgICAgICB0aGlzLm1vdmVzU2xpZGVyc1RvU3RhcnRQb3NpdGlvbnMoKTtcclxuICAgICAgICAgICAgdGhpcy53cml0ZU1vbmV5VG9GaWVsZHMoKTtcclxuICAgICAgICAgICAgdGhpcy5tb3ZlVG9vbHRpcCgpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5jcmVhdGVET00gPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNsaWRlclR5cGUgPT09ICdkb3VibGUnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZURvdWJsZURPTSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNsaWRlclR5cGUgPT09ICdzaW5nbGUnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZVNpbmdsZURPTSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmNyZWF0ZVNpbmdsZURPTSA9ICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5lbGVtLmlubmVySFRNTCA9ICc8ZGl2IGNsYXNzPVwiaXNzX192YWx1ZS1maWVsZFwiPidcclxuICAgICAgICAgICAgICAgICsgJzxzcGFuIGNsYXNzPVwiaXNzX3N0YXRpY0ZpZWxkXCI+PC9zcGFuPidcclxuICAgICAgICAgICAgICAgICsgJzwvZGl2PidcclxuICAgICAgICAgICAgICAgICsgJzxkaXYgY2xhc3M9IFwiaXNzLWNvbnRhaW5lclwiPidcclxuICAgICAgICAgICAgICAgICsgJzxkaXYgY2xhc3M9IFwiaXNzX19zY2FsZVwiPjwvZGl2PidcclxuICAgICAgICAgICAgICAgICsgJzxkaXYgY2xhc3M9XCJpc3NfX2NvbG9yLWJhclwiPjwvZGl2PidcclxuICAgICAgICAgICAgICAgICsgJzxkaXYgY2xhc3M9XCJpc3NfX3NpbmdsZV9mbHktdmFsdWUgaXNzX190b29sdGlwXCI+PC9kaXY+J1xyXG4gICAgICAgICAgICAgICAgKyAnPGRpdiBjbGFzcz1cImlzc19fc2luZ2xlIGlzc19fZHJhZ1wiPjwvZGl2PidcclxuICAgICAgICAgICAgICAgICsgJzwvZGl2Pic7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmNyZWF0ZURvdWJsZURPTSA9ICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5lbGVtLmlubmVySFRNTCA9ICc8ZGl2IGNsYXNzPVwiaXNzX192YWx1ZS1maWVsZFwiPidcclxuICAgICAgICAgICAgICAgICsgJzxzcGFuIGNsYXNzPVwiaXNzX3N0YXRpY0ZpZWxkXCI+PC9zcGFuPidcclxuICAgICAgICAgICAgICAgICsgJy0nXHJcbiAgICAgICAgICAgICAgICArICc8c3BhbiBjbGFzcz1cImlzc19zdGF0aWNGaWVsZFwiPjwvc3Bhbj4nXHJcbiAgICAgICAgICAgICAgICArICc8L2Rpdj4nXHJcbiAgICAgICAgICAgICAgICArICc8ZGl2IGNsYXNzPSBcImlzcy1jb250YWluZXJcIj4nXHJcbiAgICAgICAgICAgICAgICArICc8ZGl2IGNsYXNzPSBcImlzc19fc2NhbGVcIj48L2Rpdj4nXHJcbiAgICAgICAgICAgICAgICArICc8ZGl2IGNsYXNzPVwiaXNzX19kb3VibGVfZmx5LXZhbHVlLTEgaXNzX190b29sdGlwXCI+PC9kaXY+J1xyXG4gICAgICAgICAgICAgICAgKyAnPGRpdiBjbGFzcz1cImlzc19fZG91YmxlXzFfaG9yaXpvbnRhbCBpc3NfX2RyYWdcIj48L2Rpdj4nXHJcbiAgICAgICAgICAgICAgICArICc8ZGl2IGNsYXNzPVwiaXNzX19kb3VibGVfZmx5LXZhbHVlLTIgaXNzX190b29sdGlwXCI+PC9kaXY+J1xyXG4gICAgICAgICAgICAgICAgKyAnPGRpdiBjbGFzcz1cImlzc19fZG91YmxlXzJfaG9yaXpvbnRhbCBpc3NfX2RyYWdcIj48L2Rpdj4nXHJcbiAgICAgICAgICAgICAgICArICc8ZGl2IGNsYXNzPVwiaXNzX19jb2xvci1iYXJcIj48L2Rpdj4nXHJcbiAgICAgICAgICAgICAgICArICc8L2Rpdj4nO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy53cml0ZURPTSA9ICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jaGVja0VsZW1lbnRzSW5ET00oKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc2xpZGVyVHlwZSA9PT0gJ3NpbmdsZScpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMud3JpdGVTaW5nbGVET010b1ZhcmlhYmxlcygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy53cml0ZVNpbmdsZVNsaWRlckluZGVudCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuc2xpZGVyVHlwZSA9PT0gJ2RvdWJsZScpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMud3JpdGVEb3VibGVET010b1ZhcmlhYmxlcygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy53cml0ZURvdWJsZVNsaWRlckluZGVudCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmNoZWNrRWxlbWVudHNJbkRPTSA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgRE9NRWxlbWVudHMgPSB0aGlzLmVsZW0ucXVlcnlTZWxlY3RvckFsbCgnLmlzc19fZHJhZycpO1xyXG4gICAgICAgICAgICBpZiAoKERPTUVsZW1lbnRzLmxlbmd0aCA+IDApKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNsaWRlckluRE9NID0gRE9NRWxlbWVudHM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMud3JpdGVTaW5nbGVET010b1ZhcmlhYmxlcyA9ICgpID0+IHtcclxuICAgICAgICAgICAgW3RoaXMuc2NhbGVdID0gdGhpcy5yZXR1cm5FbGVtZW50c0Zyb21ET00oJy5pc3NfX3NjYWxlJywgMSk7XHJcbiAgICAgICAgICAgIFt0aGlzLnNpbmdsZVNsaWRlcl0gPSB0aGlzLnJldHVybkVsZW1lbnRzRnJvbURPTSgnLmlzc19fZHJhZycsIDEpO1xyXG4gICAgICAgICAgICBbdGhpcy5zdGF0aWNGaWVsZFNpbmdsZV0gPSB0aGlzLnJldHVybkVsZW1lbnRzRnJvbURPTSgnLmlzc19zdGF0aWNGaWVsZCcsIDEpO1xyXG4gICAgICAgICAgICBbdGhpcy5mbHlGaWVsZFNpbmdsZV0gPSB0aGlzLnJldHVybkVsZW1lbnRzRnJvbURPTSgnLmlzc19fdG9vbHRpcCcsIDEpO1xyXG4gICAgICAgICAgICBbdGhpcy5yaWJib25dID0gdGhpcy5yZXR1cm5FbGVtZW50c0Zyb21ET00oJy5pc3NfX2NvbG9yLWJhcicsIDEpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy53cml0ZURvdWJsZURPTXRvVmFyaWFibGVzID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBbdGhpcy5zY2FsZV0gPSB0aGlzLnJldHVybkVsZW1lbnRzRnJvbURPTSgnLmlzc19fc2NhbGUnLCAxKTtcclxuICAgICAgICAgICAgW3RoaXMubG93ZXJTbGlkZXIsIHRoaXMudXBwZXJTbGlkZXJdID0gdGhpcy5yZXR1cm5FbGVtZW50c0Zyb21ET00oJy5pc3NfX2RyYWcnLCAyKTtcclxuICAgICAgICAgICAgW3RoaXMuc3RhdGljRmllbGRMb3dlciwgdGhpcy5zdGF0aWNGaWVsZFVwcGVyXSA9IHRoaXMucmV0dXJuRWxlbWVudHNGcm9tRE9NKCcuaXNzX3N0YXRpY0ZpZWxkJywgMik7XHJcbiAgICAgICAgICAgIFt0aGlzLmZseUZpZWxkTG93ZXIsIHRoaXMuZmx5RmllbGRVcHBlcl0gPSB0aGlzLnJldHVybkVsZW1lbnRzRnJvbURPTSgnLmlzc19fdG9vbHRpcCcsIDIpO1xyXG4gICAgICAgICAgICBbdGhpcy5yaWJib25dID0gdGhpcy5yZXR1cm5FbGVtZW50c0Zyb21ET00oJy5pc3NfX2NvbG9yLWJhcicsIDEpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy53cml0ZVNpbmdsZVNsaWRlckluZGVudCA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZWxlbSA9IHRoaXMucmV0dXJuRWxlbWVudHNGcm9tRE9NKCcuaXNzX19kcmFnJywgMSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2luZ2xlU2xpZGVyUG9zaXRpb24gPSB0aGlzLnJldHVybkluZGVudChlbGVtWzBdKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMud3JpdGVEb3VibGVTbGlkZXJJbmRlbnQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW1zID0gdGhpcy5yZXR1cm5FbGVtZW50c0Zyb21ET00oJy5pc3NfX2RyYWcnLCAyKTtcclxuICAgICAgICAgICAgdGhpcy5sb3dlclNsaWRlclBvc2l0aW9uID0gdGhpcy5yZXR1cm5JbmRlbnQoZWxlbXNbMF0pO1xyXG4gICAgICAgICAgICB0aGlzLnVwcGVyU2xpZGVyUG9zaXRpb24gPSB0aGlzLnJldHVybkluZGVudChlbGVtc1sxXSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnJldHVybkluZGVudCA9IChlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRpcmVjdGlvblR5cGUgPT09ICdob3Jpem9udGFsJykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQub2Zmc2V0TGVmdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb25UeXBlID09PSAndmVydGljYWwnKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudC5vZmZzZXRUb3A7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMucmV0dXJuRWxlbWVudHNGcm9tRE9NID0gKGNsYXNzTmFtZSwgbGVuZ3RoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IERPTUVsZW1lbnRzID0gdGhpcy5lbGVtLnF1ZXJ5U2VsZWN0b3JBbGwoY2xhc3NOYW1lKTtcclxuICAgICAgICAgICAgaWYgKChET01FbGVtZW50cy5sZW5ndGggPT09IGxlbmd0aCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBET01FbGVtZW50cztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLndyaXRlR2VvbWV0cnlET010b1ZhcmlhYmxlcyA9ICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXREaXJlY3Rpb24oKTtcclxuICAgICAgICAgICAgdGhpcy53cml0ZUdlb21ldHJ5T2ZTbGlkZXIoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuc2V0RGlyZWN0aW9uID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb25UeXBlID09PSAnaG9yaXpvbnRhbCcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubWFpbkF4aXNTaXplID0gdGhpcy5zY2FsZS5vZmZzZXRXaWR0aDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb25UeXBlID09PSAndmVydGljYWwnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1haW5BeGlzU2l6ZSA9IHRoaXMuc2NhbGUub2Zmc2V0SGVpZ2h0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLndyaXRlR2VvbWV0cnlPZlNsaWRlciA9ICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc2xpZGVyVHlwZSA9PT0gJ3NpbmdsZScpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2xpZGVyV2lkdGggPSB0aGlzLnNpbmdsZVNsaWRlci5vZmZzZXRXaWR0aDtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2xpZGVySGVpZ2h0ID0gdGhpcy5zaW5nbGVTbGlkZXIub2Zmc2V0SGVpZ2h0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuc2xpZGVyVHlwZSA9PT0gJ2RvdWJsZScpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2xpZGVyV2lkdGggPSB0aGlzLmxvd2VyU2xpZGVyLm9mZnNldFdpZHRoO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zbGlkZXJIZWlnaHQgPSB0aGlzLmxvd2VyU2xpZGVyLm9mZnNldEhlaWdodDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmNhbGNQaXhlbFN0ZXAoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuY2FsY1BpeGVsU3RlcCA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgc3RlcEluUGl4ZWwgPSAodGhpcy5tYWluQXhpc1NpemUgLyB0aGlzLnVwcGVyU2NhbGUpICogdGhpcy5zdGVwO1xyXG4gICAgICAgICAgICBpZiAoc3RlcEluUGl4ZWwgPCAxKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBpeGVsU3RlcCA9IDE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdW5kZWRQaXhlbFN0ZXAgPSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5waXhlbFN0ZXAgPSBzdGVwSW5QaXhlbDtcclxuICAgICAgICAgICAgICAgIHRoaXMucm91bmRlZFBpeGVsU3RlcCA9IE1hdGgucm91bmQoc3RlcEluUGl4ZWwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmNyZWF0ZUxpc3RlbmVyT25TbGlkZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNsaWRlclR5cGUgPT09ICdzaW5nbGUnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNpbmdsZVNsaWRlci5vbm1vdXNlZG93biA9IHRoaXMuZXZlbnRPblNsaWRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLnNsaWRlclR5cGUgPT09ICdkb3VibGUnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvd2VyU2xpZGVyLm9ubW91c2Vkb3duID0gdGhpcy5ldmVudE9uU2xpZGVyO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cHBlclNsaWRlci5vbm1vdXNlZG93biA9IHRoaXMuZXZlbnRPblNsaWRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5tb3Zlc1NsaWRlcnNUb1N0YXJ0UG9zaXRpb25zID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zbGlkZXJUeXBlID09PSAnc2luZ2xlJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTaW5nbGVUb1N0YXJ0UG9zaXRpb24oKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubW92ZVJpYmJvbigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNsaWRlclR5cGUgPT09ICdkb3VibGUnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldHNEb3VibGVUb1N0YXJ0UG9zdGlvbnMoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubW92ZVJpYmJvbigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnNldFNpbmdsZVRvU3RhcnRQb3NpdGlvbiA9ICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uVHlwZSA9PT0gJ2hvcml6b250YWwnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNpbmdsZVNsaWRlci5zdHlsZS5sZWZ0ID0gYCR7dGhpcy5jYWxjTW9uZXlUb1Bvc2l0aW9uKHRoaXMubG93ZXJTbGlkZXJWYWx1ZSl9cHhgO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRpcmVjdGlvblR5cGUgPT09ICd2ZXJ0aWNhbCcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2luZ2xlU2xpZGVyLnN0eWxlLnRvcCA9IGAke3RoaXMuY2FsY01vbmV5VG9Qb3NpdGlvbih0aGlzLmxvd2VyU2xpZGVyVmFsdWUpfXB4YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5zZXRzRG91YmxlVG9TdGFydFBvc3Rpb25zID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb25UeXBlID09PSAnaG9yaXpvbnRhbCcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG93ZXJTbGlkZXIuc3R5bGUubGVmdCA9IGAke3RoaXMuY2FsY01vbmV5VG9Qb3NpdGlvbih0aGlzLmxvd2VyU2xpZGVyVmFsdWUpfXB4YDtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBwZXJTbGlkZXIuc3R5bGUubGVmdCA9IGAke3RoaXMuY2FsY01vbmV5VG9Qb3NpdGlvbih0aGlzLnVwcGVyU2xpZGVyVmFsdWUpfXB4YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb25UeXBlID09PSAndmVydGljYWwnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvd2VyU2xpZGVyLnN0eWxlLnRvcCA9IGAke3RoaXMuY2FsY01vbmV5VG9Qb3NpdGlvbih0aGlzLmxvd2VyU2xpZGVyVmFsdWUpfXB4YDtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBwZXJTbGlkZXIuc3R5bGUudG9wID0gYCR7dGhpcy5jYWxjTW9uZXlUb1Bvc2l0aW9uKHRoaXMudXBwZXJTbGlkZXJWYWx1ZSl9cHhgO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLndyaXRlTW9uZXlUb0ZpZWxkcyA9ICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc2xpZGVyVHlwZSA9PT0gJ3NpbmdsZScpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGljRmllbGRTaW5nbGUuaW5uZXJUZXh0ID0gYCR7dGhpcy5sb3dlclNsaWRlclZhbHVlfSR7dGhpcy5zaWdufWA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZseUZpZWxkU2luZ2xlLmlubmVyVGV4dCA9IGAke3RoaXMubG93ZXJTbGlkZXJWYWx1ZX0ke3RoaXMuc2lnbn1gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNsaWRlclR5cGUgPT09ICdkb3VibGUnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRpY0ZpZWxkTG93ZXIuaW5uZXJUZXh0ID0gYCR7dGhpcy5sb3dlclNsaWRlclZhbHVlfSR7dGhpcy5zaWdufWA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRpY0ZpZWxkVXBwZXIuaW5uZXJUZXh0ID0gYCR7dGhpcy51cHBlclNsaWRlclZhbHVlfSR7dGhpcy5zaWdufWA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZseUZpZWxkTG93ZXIuaW5uZXJUZXh0ID0gYCR7dGhpcy5sb3dlclNsaWRlclZhbHVlfSR7dGhpcy5zaWdufWA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZseUZpZWxkVXBwZXIuaW5uZXJUZXh0ID0gYCR7dGhpcy51cHBlclNsaWRlclZhbHVlfSR7dGhpcy5zaWdufWA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuZXZlbnRPblNsaWRlciA9IChfZSkgPT4ge1xyXG4gICAgICAgICAgICBfZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFJlc3RyaWN0aW9uT2ZTbGlkZXJNb3ZlbWVudChfZSk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50Lm9ubW91c2V1cCA9IHRoaXMuY2FuY2VsRXZlbnRzO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5vbm1vdXNlbW92ZSA9IHRoaXMubW92ZUV2ZW50V2l0aEhvbGRNb3VzZTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuc2V0UmVzdHJpY3Rpb25PZlNsaWRlck1vdmVtZW50ID0gKF9lKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNsaWRlclR5cGUgPT09ICdkb3VibGUnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFJlc3RyaWN0aW9uRm9yRG91YmxlU2xpZGVyKF9lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5zbGlkZXJUeXBlID09PSAnc2luZ2xlJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRSZXN0cmljdGlvbkZvclNpbmdsZVNsaWRlcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnNldFJlc3RyaWN0aW9uRm9yRG91YmxlU2xpZGVyID0gKF9lKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRpcmVjdGlvblR5cGUgPT09ICdob3Jpem9udGFsJykge1xyXG4gICAgICAgICAgICAgICAgaWYgKF9lLnRhcmdldCA9PT0gdGhpcy5sb3dlclNsaWRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0U2xpZGVyID0gdGhpcy5sb3dlclNsaWRlcjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvd2VyUmVzdHJpY3Rpb24gPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBwZXJSZXN0cmljdGlvbiA9IHRoaXMudXBwZXJTbGlkZXJQb3NpdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvd2VyQ29zdFJlc3RyaWN0aW9uID0gdGhpcy5sb3dlclNjYWxlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBwZXJDb3N0UmVzdHJpY3Rpb24gPSB0aGlzLmdldENvc3RGb3JTbGlkZXIodGhpcy51cHBlclJlc3RyaWN0aW9uKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChfZS50YXJnZXQgPT09IHRoaXMudXBwZXJTbGlkZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRhcmdldFNsaWRlciA9IHRoaXMudXBwZXJTbGlkZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb3dlclJlc3RyaWN0aW9uID0gdGhpcy5sb3dlclNsaWRlclBvc2l0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBwZXJSZXN0cmljdGlvbiA9IHRoaXMubWFpbkF4aXNTaXplO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG93ZXJDb3N0UmVzdHJpY3Rpb24gPSB0aGlzLmdldENvc3RGb3JTbGlkZXIodGhpcy5sb3dlclJlc3RyaWN0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwcGVyQ29zdFJlc3RyaWN0aW9uID0gdGhpcy51cHBlclNjYWxlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRpcmVjdGlvblR5cGUgPT09ICd2ZXJ0aWNhbCcpIHtcclxuICAgICAgICAgICAgICAgIGlmIChfZS50YXJnZXQgPT09IHRoaXMubG93ZXJTbGlkZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRhcmdldFNsaWRlciA9IHRoaXMubG93ZXJTbGlkZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb3dlclJlc3RyaWN0aW9uID0gMDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwcGVyUmVzdHJpY3Rpb24gPSB0aGlzLnVwcGVyU2xpZGVyUG9zaXRpb247XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb3dlckNvc3RSZXN0cmljdGlvbiA9IHRoaXMuZ2V0Q29zdEZvclNsaWRlcih0aGlzLmxvd2VyUmVzdHJpY3Rpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBwZXJDb3N0UmVzdHJpY3Rpb24gPSB0aGlzLmdldENvc3RGb3JTbGlkZXIodGhpcy51cHBlclJlc3RyaWN0aW9uKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChfZS50YXJnZXQgPT09IHRoaXMudXBwZXJTbGlkZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRhcmdldFNsaWRlciA9IHRoaXMudXBwZXJTbGlkZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb3dlclJlc3RyaWN0aW9uID0gdGhpcy5sb3dlclNsaWRlclBvc2l0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBwZXJSZXN0cmljdGlvbiA9IHRoaXMubWFpbkF4aXNTaXplO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG93ZXJDb3N0UmVzdHJpY3Rpb24gPSB0aGlzLmdldENvc3RGb3JTbGlkZXIodGhpcy5sb3dlclJlc3RyaWN0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwcGVyQ29zdFJlc3RyaWN0aW9uID0gdGhpcy5nZXRDb3N0Rm9yU2xpZGVyKHRoaXMudXBwZXJSZXN0cmljdGlvbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuc2V0UmVzdHJpY3Rpb25Gb3JTaW5nbGVTbGlkZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRpcmVjdGlvblR5cGUgPT09ICdob3Jpem9udGFsJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50YXJnZXRTbGlkZXIgPSB0aGlzLnNpbmdsZVNsaWRlcjtcclxuICAgICAgICAgICAgICAgIHRoaXMubG93ZXJSZXN0cmljdGlvbiA9IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwcGVyUmVzdHJpY3Rpb24gPSB0aGlzLm1haW5BeGlzU2l6ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubG93ZXJDb3N0UmVzdHJpY3Rpb24gPSB0aGlzLmxvd2VyU2NhbGU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwcGVyQ29zdFJlc3RyaWN0aW9uID0gdGhpcy51cHBlclNjYWxlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRpcmVjdGlvblR5cGUgPT09ICd2ZXJ0aWNhbCcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0U2xpZGVyID0gdGhpcy5zaW5nbGVTbGlkZXI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvd2VyUmVzdHJpY3Rpb24gPSAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cHBlclJlc3RyaWN0aW9uID0gdGhpcy5tYWluQXhpc1NpemU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvd2VyQ29zdFJlc3RyaWN0aW9uID0gdGhpcy51cHBlclNjYWxlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cHBlckNvc3RSZXN0cmljdGlvbiA9IHRoaXMubG93ZXJTY2FsZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5nZXRDb3N0Rm9yU2xpZGVyID0gKHNsaWRlclBvc3Rpb25JblBpeGVsKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRpcmVjdGlvblR5cGUgPT09ICdob3Jpem9udGFsJykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNsaWRlclBvc3Rpb25JblBpeGVsIDw9IDApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5sb3dlclNjYWxlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChNYXRoLnJvdW5kKHNsaWRlclBvc3Rpb25JblBpeGVsIC8gdGhpcy5waXhlbFN0ZXApICogdGhpcy5zdGVwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb25UeXBlID09PSAndmVydGljYWwnKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2xpZGVyUG9zdGlvbkluUGl4ZWwgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnVwcGVyU2NhbGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKChNYXRoLnJvdW5kKCh0aGlzLm1haW5BeGlzU2l6ZSAtIHNsaWRlclBvc3Rpb25JblBpeGVsKSAvIHRoaXMucGl4ZWxTdGVwKSAqIHRoaXMuc3RlcCkgKyB0aGlzLmxvd2VyU2NhbGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLm1vdmVFdmVudFdpdGhIb2xkTW91c2UgPSAoX2UpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaW5uZXJNb3VzZVBvc2l0aW9uID0gdGhpcy5nZXRNb3VzZVBvc2l0aW9uKF9lKTtcclxuICAgICAgICAgICAgY29uc3QgbmVhcmVzdFJvdW5kZWRTdGVwID0gdGhpcy5jYWxjTmVhcmVzdFN0ZXAoaW5uZXJNb3VzZVBvc2l0aW9uKTtcclxuICAgICAgICAgICAgY29uc3QgZmluYWxQb3NpdGlvbkluUGl4ZWwgPSB0aGlzLmNhbGNGaW5hbFBvc2l0aW9uKG5lYXJlc3RSb3VuZGVkU3RlcCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGZpbmFsQ29zdCA9IHRoaXMuY2FsY0ZpbmFsQ29zdChuZWFyZXN0Um91bmRlZFN0ZXApO1xyXG4gICAgICAgICAgICB0aGlzLm1vdmVTbGlkZXIoZmluYWxQb3NpdGlvbkluUGl4ZWwpO1xyXG4gICAgICAgICAgICB0aGlzLnNob3dNb25leU9uU2NyZWVuKGZpbmFsQ29zdCk7XHJcbiAgICAgICAgICAgIHRoaXMud3JpdGVNb25leVRvVmFyaWFibGVzKGZpbmFsQ29zdCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0T3ZlcmxheSgpO1xyXG4gICAgICAgICAgICB0aGlzLm1vdmVSaWJib24oKTtcclxuICAgICAgICAgICAgdGhpcy5tb3ZlVG9vbHRpcCgpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5nZXRNb3VzZVBvc2l0aW9uID0gKF9lKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xpZW50UmVjdCA9IHRoaXMuc2NhbGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRpcmVjdGlvblR5cGUgPT09ICdob3Jpem9udGFsJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbmRlbnQgPSB0aGlzLmNsaWVudFJlY3QubGVmdDtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoX2UuY2xpZW50WCAtIHRoaXMuaW5kZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb25UeXBlID09PSAndmVydGljYWwnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluZGVudCA9IHRoaXMuY2xpZW50UmVjdC50b3A7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKF9lLmNsaWVudFkgLSB0aGlzLmluZGVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuY2FsY05lYXJlc3RTdGVwID0gKF9wb3NpdGlvbkluUGl4ZWwpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uVHlwZSA9PT0gJ2hvcml6b250YWwnKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChfcG9zaXRpb25JblBpeGVsIC8gdGhpcy5waXhlbFN0ZXApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRpcmVjdGlvblR5cGUgPT09ICd2ZXJ0aWNhbCcpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBNYXRoLnJvdW5kKCh0aGlzLm1haW5BeGlzU2l6ZSAtIF9wb3NpdGlvbkluUGl4ZWwpIC8gdGhpcy5waXhlbFN0ZXApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmNhbGNGaW5hbFBvc2l0aW9uID0gKF9uZWFyZXN0Um91bmRlZFN0ZXApID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcG9zaXRpb25JblBpeGVsID0gX25lYXJlc3RSb3VuZGVkU3RlcCAqIHRoaXMucGl4ZWxTdGVwO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb25UeXBlID09PSAnaG9yaXpvbnRhbCcpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzUGl4ZWxzSW5Cb3JkZXIocG9zaXRpb25JblBpeGVsKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwb3NpdGlvbkluUGl4ZWw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAocG9zaXRpb25JblBpeGVsIDw9IHRoaXMubG93ZXJSZXN0cmljdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmxvd2VyUmVzdHJpY3Rpb247XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAocG9zaXRpb25JblBpeGVsID49IHRoaXMudXBwZXJSZXN0cmljdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnVwcGVyUmVzdHJpY3Rpb247XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uVHlwZSA9PT0gJ3ZlcnRpY2FsJykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNQaXhlbHNJbkJvcmRlcigodGhpcy5tYWluQXhpc1NpemUgLSBwb3NpdGlvbkluUGl4ZWwpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAodGhpcy5tYWluQXhpc1NpemUgLSBwb3NpdGlvbkluUGl4ZWwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKCh0aGlzLm1haW5BeGlzU2l6ZSAtIHBvc2l0aW9uSW5QaXhlbCkgPD0gdGhpcy5sb3dlclJlc3RyaWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubG93ZXJSZXN0cmljdGlvbjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICgodGhpcy5tYWluQXhpc1NpemUgLSBwb3NpdGlvbkluUGl4ZWwpID49IHRoaXMudXBwZXJSZXN0cmljdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnVwcGVyUmVzdHJpY3Rpb247XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuY2FsY0ZpbmFsQ29zdCA9IChfbmVhcmVzdFJvdW5kZWRTdGVwKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRpcmVjdGlvblR5cGUgPT09ICdob3Jpem9udGFsJykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcG9zaXRpb25Jbk1vbmV5ID0gX25lYXJlc3RSb3VuZGVkU3RlcCAqIHRoaXMuc3RlcDtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzTW9uZXlJbkJvcmRlcihwb3NpdGlvbkluTW9uZXkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBvc2l0aW9uSW5Nb25leTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChwb3NpdGlvbkluTW9uZXkgPCB0aGlzLmxvd2VyQ29zdFJlc3RyaWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubG93ZXJDb3N0UmVzdHJpY3Rpb247XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAocG9zaXRpb25Jbk1vbmV5ID4gdGhpcy51cHBlckNvc3RSZXN0cmljdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnVwcGVyQ29zdFJlc3RyaWN0aW9uO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRpcmVjdGlvblR5cGUgPT09ICd2ZXJ0aWNhbCcpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBvc2l0aW9uSW5Nb25leSA9IChfbmVhcmVzdFJvdW5kZWRTdGVwICogdGhpcy5zdGVwKSArIHRoaXMubG93ZXJTY2FsZTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzTW9uZXlJbkJvcmRlcihwb3NpdGlvbkluTW9uZXkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBvc2l0aW9uSW5Nb25leTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChwb3NpdGlvbkluTW9uZXkgPiB0aGlzLmxvd2VyQ29zdFJlc3RyaWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubG93ZXJDb3N0UmVzdHJpY3Rpb247XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAocG9zaXRpb25Jbk1vbmV5IDwgdGhpcy51cHBlckNvc3RSZXN0cmljdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnVwcGVyQ29zdFJlc3RyaWN0aW9uO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmlzUGl4ZWxzSW5Cb3JkZXIgPSAoX3Bvc2l0aW9uKSA9PiAoKF9wb3NpdGlvbiA+PSB0aGlzLmxvd2VyUmVzdHJpY3Rpb24pICYmIChfcG9zaXRpb24gPD0gdGhpcy51cHBlclJlc3RyaWN0aW9uKSk7XHJcbiAgICAgICAgdGhpcy5pc01vbmV5SW5Cb3JkZXIgPSAoX3Bvc2l0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRpcmVjdGlvblR5cGUgPT09ICdob3Jpem9udGFsJykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICgoX3Bvc2l0aW9uID49IHRoaXMubG93ZXJDb3N0UmVzdHJpY3Rpb24pICYmIChfcG9zaXRpb24gPD0gdGhpcy51cHBlckNvc3RSZXN0cmljdGlvbikpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRpcmVjdGlvblR5cGUgPT09ICd2ZXJ0aWNhbCcpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoKF9wb3NpdGlvbiA8PSB0aGlzLmxvd2VyQ29zdFJlc3RyaWN0aW9uKSAmJiAoX3Bvc2l0aW9uID49IHRoaXMudXBwZXJDb3N0UmVzdHJpY3Rpb24pKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5zaG93TW9uZXlPblNjcmVlbiA9IChmaW5hbENvc3QpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY29zdCA9IGAke2ZpbmFsQ29zdH0ke3RoaXMuc2lnbn1gO1xyXG4gICAgICAgICAgICBpZiAodGhpcy50YXJnZXRTbGlkZXIgPT09IHRoaXMubG93ZXJTbGlkZXIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGljRmllbGRMb3dlci50ZXh0Q29udGVudCA9IGAke2Nvc3R9YDtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmx5RmllbGRMb3dlci50ZXh0Q29udGVudCA9IGAke2Nvc3R9YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy50YXJnZXRTbGlkZXIgPT09IHRoaXMudXBwZXJTbGlkZXIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGljRmllbGRVcHBlci50ZXh0Q29udGVudCA9IGAke2Nvc3R9YDtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmx5RmllbGRVcHBlci50ZXh0Q29udGVudCA9IGAke2Nvc3R9YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy50YXJnZXRTbGlkZXIgPT09IHRoaXMuc2luZ2xlU2xpZGVyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRpY0ZpZWxkU2luZ2xlLnRleHRDb250ZW50ID0gYCR7Y29zdH1gO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mbHlGaWVsZFNpbmdsZS50ZXh0Q29udGVudCA9IGAke2Nvc3R9YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy53cml0ZU1vbmV5VG9WYXJpYWJsZXMgPSAoZmluYWxDb3N0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRhcmdldFNsaWRlciA9PT0gdGhpcy5sb3dlclNsaWRlcikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb3dlclNsaWRlclZhbHVlID0gZmluYWxDb3N0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRhcmdldFNsaWRlciA9PT0gdGhpcy51cHBlclNsaWRlcikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cHBlclNsaWRlclZhbHVlID0gZmluYWxDb3N0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRhcmdldFNsaWRlciA9PT0gdGhpcy5zaW5nbGVTbGlkZXIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG93ZXJTbGlkZXJWYWx1ZSA9IGZpbmFsQ29zdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5tb3ZlUmliYm9uID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBzZXRIb3Jpem9udGFsUmliYm9uVmFyaWFibGVzID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2xpZGVySW5ET00ubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yaWJib24uc3R5bGUubGVmdCA9ICcwcHgnO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmliYm9uLnN0eWxlLndpZHRoID0gYCR7dGhpcy5zaW5nbGVTbGlkZXIub2Zmc2V0TGVmdH1weGA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLnNsaWRlckluRE9NLmxlbmd0aCA9PT0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmliYm9uLnN0eWxlLmxlZnQgPSB0aGlzLmxvd2VyU2xpZGVyLnN0eWxlLmxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yaWJib24uc3R5bGUud2lkdGggPSBgJHt0aGlzLnVwcGVyU2xpZGVyLm9mZnNldExlZnQgLSB0aGlzLmxvd2VyU2xpZGVyLm9mZnNldExlZnR9cHhgO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjb25zdCBzZXRWZXJ0aWNhbFJpYmJvblZhcmlhYmxlcyA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNsaWRlckluRE9NLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmliYm9uLnN0eWxlLnRvcCA9IGAke3RoaXMuc2luZ2xlU2xpZGVyLm9mZnNldFRvcH1weGA7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yaWJib24uc3R5bGUuaGVpZ2h0ID0gYCR7dGhpcy5tYWluQXhpc1NpemUgLSB0aGlzLnNpbmdsZVNsaWRlci5vZmZzZXRUb3B9cHhgO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5zbGlkZXJJbkRPTS5sZW5ndGggPT09IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJpYmJvbi5zdHlsZS50b3AgPSB0aGlzLmxvd2VyU2xpZGVyLnN0eWxlLnRvcDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJpYmJvbi5zdHlsZS5oZWlnaHQgPSBgJHt0aGlzLnVwcGVyU2xpZGVyLm9mZnNldFRvcCAtIHRoaXMubG93ZXJTbGlkZXIub2Zmc2V0VG9wfXB4YDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uVHlwZSA9PT0gJ2hvcml6b250YWwnKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRIb3Jpem9udGFsUmliYm9uVmFyaWFibGVzKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uVHlwZSA9PT0gJ3ZlcnRpY2FsJykge1xyXG4gICAgICAgICAgICAgICAgc2V0VmVydGljYWxSaWJib25WYXJpYWJsZXMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5tb3ZlU2xpZGVyID0gKG51bSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb25UeXBlID09PSAnaG9yaXpvbnRhbCcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0U2xpZGVyLnN0eWxlLmxlZnQgPSBgJHtudW19cHhgO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuZGlyZWN0aW9uVHlwZSA9PT0gJ3ZlcnRpY2FsJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50YXJnZXRTbGlkZXIuc3R5bGUudG9wID0gYCR7bnVtfXB4YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5tb3ZlVG9vbHRpcCA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbW92ZSA9IChkaXJlY3Rpb24sIG9mZnNldCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2xpZGVyVHlwZSA9PT0gJ3NpbmdsZScpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVsZW0ucXVlcnlTZWxlY3RvckFsbCgnLmlzc19fdG9vbHRpcCcpWzBdLnN0eWxlW2RpcmVjdGlvbl0gPSBgJHt0aGlzLnNpbmdsZVNsaWRlcltvZmZzZXRdfXB4YDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNsaWRlclR5cGUgPT09ICdkb3VibGUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVtLnF1ZXJ5U2VsZWN0b3JBbGwoJy5pc3NfX3Rvb2x0aXAnKVswXS5zdHlsZVtkaXJlY3Rpb25dID0gYCR7dGhpcy5sb3dlclNsaWRlcltvZmZzZXRdfXB4YDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVsZW0ucXVlcnlTZWxlY3RvckFsbCgnLmlzc19fdG9vbHRpcCcpWzFdLnN0eWxlW2RpcmVjdGlvbl0gPSBgJHt0aGlzLnVwcGVyU2xpZGVyW29mZnNldF19cHhgO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb25UeXBlID09PSAnaG9yaXpvbnRhbCcpIHtcclxuICAgICAgICAgICAgICAgIG1vdmUoJ2xlZnQnLCAnb2Zmc2V0TGVmdCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRpcmVjdGlvblR5cGUgPT09ICd2ZXJ0aWNhbCcpIHtcclxuICAgICAgICAgICAgICAgIG1vdmUoJ3RvcCcsICdvZmZzZXRUb3AnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5zZXRPdmVybGF5ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy50YXJnZXRTbGlkZXIgPT09IHRoaXMubG93ZXJTbGlkZXIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0U2xpZGVyLnN0eWxlLnpJbmRleCA9ICcxMDAnO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cHBlclNsaWRlci5zdHlsZS56SW5kZXggPSAnMSc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy50YXJnZXRTbGlkZXIgPT09IHRoaXMudXBwZXJTbGlkZXIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0U2xpZGVyLnN0eWxlLnpJbmRleCA9ICcxMDAnO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb3dlclNsaWRlci5zdHlsZS56SW5kZXggPSAnMSc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuY2FuY2VsRXZlbnRzID0gKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLndyaXRlRE9NKCk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50Lm9ubW91c2V1cCA9IG51bGw7XHJcbiAgICAgICAgICAgIGRvY3VtZW50Lm9ubW91c2Vtb3ZlID0gbnVsbDtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgc2V0Q29udHJvbGxlcigpIHtcclxuICAgICAgICBjb25zdCBvYmogPSB7XHJcbiAgICAgICAgICAgIGxvd2VyU2xpZGVyVmFsdWU6IHRoaXMubG93ZXJTbGlkZXJWYWx1ZSxcclxuICAgICAgICAgICAgdXBwZXJTbGlkZXJWYWx1ZTogdGhpcy51cHBlclNsaWRlclZhbHVlLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5jb250cm9sbGVyLmdldFZpZXcob2JqKTtcclxuICAgIH1cclxuICAgIGNhbGNNb25leVRvUG9zaXRpb24obW9uZXkpIHtcclxuICAgICAgICBjb25zdCBwb3NpdGlvbiA9IChtb25leSAvIHRoaXMuc3RlcCkgKiB0aGlzLnBpeGVsU3RlcDtcclxuICAgICAgICByZXR1cm4gcG9zaXRpb247XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IHsgVmlld0hvcml6b250YWwgfTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVmYWN0b3JpbmdWaWV3LmpzLm1hcCJdLCJzb3VyY2VSb290IjoiIn0=