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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/refactoring/ts/refactoringIndex.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/refactoring/ts/ControlPanel.ts":
/*!********************************************!*\
  !*** ./src/refactoring/ts/ControlPanel.ts ***!
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
            styleType: {
                title: 'Style',
                description: 'Тип стиля - можно выбрать стиль CSS для горизонтального или вертикального вида',
                elementName: 'style',
                value: ['iss', 'iss__vertical'],
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
            elementId: 'doc_panel',
            sign: '₽',
            lowerScaleBound: 0,
            upperScaleBound: 1000,
            lowerSliderValue: 200,
            upperSliderValue: 800,
            sliderType: 'double',
            directionType: 'horizontal',
            step: 5,
            idForControlPanel: 'doc_panel',
        };
        this.bindController = (controller) => {
            this.controller = controller;
        };
        this.setSettingsFromController = (setFromController) => {
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
            // console.log(this.settings);
        };
    }
}



/***/ }),

/***/ "./src/refactoring/ts/ISSlider.ts":
/*!****************************************!*\
  !*** ./src/refactoring/ts/ISSlider.ts ***!
  \****************************************/
/*! exports provided: ISSlider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ISSlider", function() { return ISSlider; });
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ "./src/refactoring/ts/model.ts");
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controller */ "./src/refactoring/ts/controller.ts");
/* harmony import */ var _refactoringView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./refactoringView */ "./src/refactoring/ts/refactoringView.ts");
/* harmony import */ var _ControlPanel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ControlPanel */ "./src/refactoring/ts/ControlPanel.ts");




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
    };
    // ПОСТРОЕНИЕ СЛАЙДЕРА ПРИ ПЕРВОМ ЗАПУСКЕ
    const model = new _model__WEBPACK_IMPORTED_MODULE_0__["Model"](settings);
    const controller = new _controller__WEBPACK_IMPORTED_MODULE_1__["Controller"](settings);
    const view = new _refactoringView__WEBPACK_IMPORTED_MODULE_2__["View"]();
    const controlPanel = new _ControlPanel__WEBPACK_IMPORTED_MODULE_3__["ControlPanel"]();
    controller.bindModel(model);
    controller.bindView(view);
    controller.bindControlPanel(controlPanel);
    view.bindController(controller);
    controlPanel.bindController(controller);
    controlPanel.bindModel(model);
    controller.createSlider();
    controlPanel.buildPanel();
}



/***/ }),

/***/ "./src/refactoring/ts/controller.ts":
/*!******************************************!*\
  !*** ./src/refactoring/ts/controller.ts ***!
  \******************************************/
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
        };
        this.elementId = settings.elementId;
        this.sliderType = settings.sliderType || 'single';
        this.directionType = settings.directionType || 'horizontal';
        this.step = settings.step || 2;
        this.idForControlPanel = settings.idForControlPanel || '';
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
        };
        console.log('setAndRunView');
        console.log(obj);
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

/***/ "./src/refactoring/ts/model.ts":
/*!*************************************!*\
  !*** ./src/refactoring/ts/model.ts ***!
  \*************************************/
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



/***/ }),

/***/ "./src/refactoring/ts/refactoringIndex.ts":
/*!************************************************!*\
  !*** ./src/refactoring/ts/refactoringIndex.ts ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../styles.scss */ "./styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ISSlider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ISSlider */ "./src/refactoring/ts/ISSlider.ts");
// import '../../../is_refactoring.css';

// import { View } from './refactoringView';
// import { ControlPanel } from './ControlPanel';

// const view = new View();
// const controlPanel = new ControlPanel();
// controlPanel.buildPanel();
// view.setStartingConditions({
//   elementId: '#iss',
//   sign: '$',
//   lowerScaleBound: 100,
//   upperScaleBound: 1500,
//   lowerSliderValue: 200,
//   upperSliderValue: 800,
//   sliderType: 'double',
//   directionType: 'horizontal',
//   step: 10,
// });
// view.init();
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
};
Object(_ISSlider__WEBPACK_IMPORTED_MODULE_1__["ISSlider"])(settingsForHorizontalDuble);
// const viewSingleHorizontal = new View();
// viewSingleHorizontal.setStartingConditions({
//   elementId: '#iss_2',
//   sign: '$',
//   lowerScaleBound: 100,
//   upperScaleBound: 1500,
//   lowerSliderValue: 200,
//   upperSliderValue: 800,
//   sliderType: 'single',
//   directionType: 'horizontal',
//   step: 10,
// });
// viewSingleHorizontal.init();
// const viewSingleVertical = new View();
// viewSingleVertical.setStartingConditions({
//   elementId: '#iss_3',
//   sign: '$',
//   lowerScaleBound: 100,
//   upperScaleBound: 1500,
//   lowerSliderValue: 200,
//   upperSliderValue: 800,
//   sliderType: 'single',
//   directionType: 'vertical',
//   step: 10,
// });
// viewSingleVertical.init();
// const viewDoubleVertical = new View();
// viewDoubleVertical.setStartingConditions({
//   elementId: '#iss_4',
//   sign: '$',
//   lowerScaleBound: 100,
//   upperScaleBound: 1500,
//   lowerSliderValue: 200,
//   upperSliderValue: 800,
//   sliderType: 'double',
//   directionType: 'vertical',
//   step: 10,
// });
// viewDoubleVertical.init();


/***/ }),

/***/ "./src/refactoring/ts/refactoringView.ts":
/*!***********************************************!*\
  !*** ./src/refactoring/ts/refactoringView.ts ***!
  \***********************************************/
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
      <div class="${this.style}__single_fly-value ${this.style}__tooltip"></div>
      <div class="${this.style}__single ${this.style}__drag"></div>
      </div>'`;
        };
        this.createDoubleDOM = () => {
            this.elem.innerHTML = `<div class="${this.style}__value-field">
      <span class="${this.style}__staticField"></span>
      -
      <span class="${this.style}__staticField"></span>
      </div>
      <div class= "${this.style}__container">
      <div class= "${this.style}__scale"></div>
      <div class="${this.style}__double_fly-value-1 ${this.style}__tooltip"></div>
      <div class="${this.style}__double_1_horizontal ${this.style}__drag"></div>
      <div class="${this.style}__double_fly-value-2 ${this.style}__tooltip"></div>
      <div class="${this.style}__double_2_horizontal ${this.style}__drag"></div>
      <div class="${this.style}__color-bar"></div>
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
            const stepInPixel = (this.mainAxisSize / (this.upperScaleBound - this.lowerScaleBound)) * this.step;
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
                    this.ribbon.style.height = `${this.mainAxisSize - this.singleSlider.offsetTop}px`;
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
            const move = (direction, offset) => {
                if (this.sliderType === 'single') {
                    this.elem.querySelectorAll(`.${this.style}__tooltip`)[0].style[direction] = `${this.singleSlider[offset]}px`;
                }
                if (this.sliderType === 'double') {
                    this.elem.querySelectorAll(`.${this.style}__tooltip`)[0].style[direction] = `${this.lowerSlider[offset]}px`;
                    this.elem.querySelectorAll(`.${this.style}__tooltip`)[1].style[direction] = `${this.upperSlider[offset]}px`;
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

/***/ "./styles.scss":
/*!*********************!*\
  !*** ./styles.scss ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZmFjdG9yaW5nL3RzL0NvbnRyb2xQYW5lbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVmYWN0b3JpbmcvdHMvSVNTbGlkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZmFjdG9yaW5nL3RzL2NvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZmFjdG9yaW5nL3RzL21vZGVsLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWZhY3RvcmluZy90cy9yZWZhY3RvcmluZ0luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9yZWZhY3RvcmluZy90cy9yZWZhY3RvcmluZ1ZpZXcudHMiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzLnNjc3M/NmQ4YyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDNUNB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SUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ2hCLFFBQVEsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1lBQzFCLFFBQVEsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQzlCLENBQUM7SUFDSCxDQUFDO0lBdmhCQyxhQUFhO1FBQ1gsTUFBTSxHQUFHLEdBQUc7WUFDVixnQkFBZ0IsRUFBRSxJQUFJLENBQUMsZ0JBQWdCO1lBQ3ZDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxnQkFBZ0I7U0FDeEMsQ0FBQztRQUNGLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFzT0QsbUJBQW1CLENBQUMsS0FBYTtRQUMvQixJQUFJLFFBQWdCLENBQUM7UUFDckIsSUFBSSxJQUFJLENBQUMsYUFBYSxLQUFLLFlBQVksRUFBRTtZQUN2QyxRQUFRLEdBQUcsQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7U0FDMUU7UUFDRCxJQUFJLElBQUksQ0FBQyxhQUFhLEtBQUssVUFBVSxFQUFFO1lBQ3JDLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUNoRztRQUNELE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7Q0FrU0Y7QUFFZTs7Ozs7Ozs7Ozs7O0FDdm1CaEIsdUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvcmVmYWN0b3JpbmcvdHMvcmVmYWN0b3JpbmdJbmRleC50c1wiKTtcbiIsImludGVyZmFjZSBWYWx1ZXMge1xuICBbYTogc3RyaW5nXTogRWxlbWVudEludGVyZmFjZTtcbn1cblxuaW50ZXJmYWNlIEVsZW1lbnRJbnRlcmZhY2Uge1xuICB0aXRsZT86IHN0cmluZztcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gIGVsZW1lbnROYW1lPzogc3RyaW5nO1xuICB2YWx1ZT86IGFueTtcbiAgbmFtZU9mVmFyaWFibGU/OiBzdHJpbmc7XG4gIHR5cGU/OiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBQYXJhbSB7XG4gIGlkRm9yQ29udHJvbFBhbmVsPzogc3RyaW5nO1xuICBkaXJlY3Rpb25UeXBlPzogc3RyaW5nO1xuICBlbGVtZW50SWQ/OiBzdHJpbmc7XG4gIGVsZW0/OiBhbnk7XG4gIHNpZ24/OiBzdHJpbmc7XG4gIGxvd2VyU2NhbGVCb3VuZD86IG51bWJlcjtcbiAgdXBwZXJTY2FsZUJvdW5kPzogbnVtYmVyO1xuICBsb3dlclNsaWRlclZhbHVlPzogbnVtYmVyO1xuICB1cHBlclNsaWRlclZhbHVlPzogbnVtYmVyO1xuICBzbGlkZXJUeXBlPzogc3RyaW5nO1xuICBzdGVwPzogbnVtYmVyO1xuICBjb250cm9sbGVyPzogYW55O1xuICB0b29sdGlwPzogc3RyaW5nO1xuICAvLyB2YWx1ZV9maWVsZF9zdGF0ZT86IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIENvbnRyb2xQYW5lbCB7XG4gIGNvbnRyb2xQYW5lbDogSFRNTEVsZW1lbnQsXG4gIHNlbGVjdE9yT3I6IEhUTUxFbGVtZW50LFxuICBkaXZOdW1lcmFsOiBIVE1MRWxlbWVudCxcbiAgY29udHJvbGxlcjogYW55O1xuICBtb2RlbDogYW55O1xufVxuXG5jbGFzcyBDb250cm9sUGFuZWwge1xuICBvclZhbHVlczogVmFsdWVzID0ge1xuICAgIHNpZ246IHtcbiAgICAgIHRpdGxlOiAnU2lnbicsXG4gICAgICBkZXNjcmlwdGlvbjogJ9CS0LDQu9GO0YLQsCcsXG4gICAgICBlbGVtZW50TmFtZTogJ3NpZ24nLFxuICAgICAgdmFsdWU6IFsn4oK9JywgJyQnXSxcbiAgICAgIG5hbWVPZlZhcmlhYmxlOiAnc2lnbicsXG4gICAgfSxcbiAgICBzbGlkZXJUeXBlOiB7XG4gICAgICB0aXRsZTogJ1R5cGUnLFxuICAgICAgZGVzY3JpcHRpb246ICfQotC40L8g0YHQu9Cw0LnQtNC10YDQsCAtINC+0LTQuNC90LDRgNC90YvQuSDQuNC70Lgg0LTQstC+0LnQvdC+0LknLFxuICAgICAgZWxlbWVudE5hbWU6ICdzbGlkZXJUeXBlJyxcbiAgICAgIHZhbHVlOiBbJ2RvdWJsZScsICdzaW5nbGUnXSxcbiAgICAgIG5hbWVPZlZhcmlhYmxlOiAnc2xpZGVyVHlwZScsXG4gICAgfSxcbiAgICBkaXJlY3Rpb25UeXBlOiB7XG4gICAgICB0aXRsZTogJ1R5cGUnLFxuICAgICAgZGVzY3JpcHRpb246ICfQotC40L8g0YHQu9Cw0LnQtNC10YDQsCAtINCy0LXRgNGC0LjQutCw0LvRjNC90YvQuSDQuNC70Lgg0LPQvtGA0LjQt9C+0L3RgtCw0LvRjNC90YvQuScsXG4gICAgICBlbGVtZW50TmFtZTogJ2RpcmVjdGlvblR5cGUnLFxuICAgICAgdmFsdWU6IFsnaG9yaXpvbnRhbCcsICd2ZXJ0aWNhbCddLFxuICAgICAgbmFtZU9mVmFyaWFibGU6ICdkaXJlY3Rpb25UeXBlJyxcbiAgICB9LFxuICAgIHN0eWxlVHlwZToge1xuICAgICAgdGl0bGU6ICdTdHlsZScsXG4gICAgICBkZXNjcmlwdGlvbjogJ9Ci0LjQvyDRgdGC0LjQu9GPIC0g0LzQvtC20L3QviDQstGL0LHRgNCw0YLRjCDRgdGC0LjQu9GMIENTUyDQtNC70Y8g0LPQvtGA0LjQt9C+0L3RgtCw0LvRjNC90L7Qs9C+INC40LvQuCDQstC10YDRgtC40LrQsNC70YzQvdC+0LPQviDQstC40LTQsCcsXG4gICAgICBlbGVtZW50TmFtZTogJ3N0eWxlJyxcbiAgICAgIHZhbHVlOiBbJ2lzcycsICdpc3NfX3ZlcnRpY2FsJ10sXG4gICAgICBuYW1lT2ZWYXJpYWJsZTogJ3N0eWxlJyxcbiAgICB9LFxuICB9O1xuXG4gIG51bWVyYWxWYWx1ZXM6IFZhbHVlcyA9IHtcbiAgICBzdGVwOiB7XG4gICAgICB0aXRsZTogJ1N0ZXAnLFxuICAgICAgZGVzY3JpcHRpb246ICfQqNCw0LMg0L/QvtC70LfRg9C90LrQsCcsXG4gICAgICBlbGVtZW50TmFtZTogJ3N0ZXAnLFxuICAgICAgdHlwZTogJ251bWJlcicsXG4gICAgICBuYW1lT2ZWYXJpYWJsZTogJ3N0ZXAnLFxuICAgIH0sXG4gICAgbG93ZXJTY2FsZUJvdW5kOiB7XG4gICAgICB0aXRsZTogJ01pbl9zbGlkZXInLFxuICAgICAgZGVzY3JpcHRpb246ICfQnNC40L3QuNC80LDQu9GM0L3QvtC1INC30L3QsNGH0LXQvdC40LUg0YjQutCw0LvRiyDRgdC70LDQudC00LXRgNCwJyxcbiAgICAgIGVsZW1lbnROYW1lOiAnbG93ZXJTY2FsZUJvdW5kJyxcbiAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgbmFtZU9mVmFyaWFibGU6ICdsb3dlclNjYWxlQm91bmQnLFxuICAgIH0sXG4gICAgdXBwZXJTY2FsZUJvdW5kOiB7XG4gICAgICB0aXRsZTogJ01heF9zbGlkZXInLFxuICAgICAgZGVzY3JpcHRpb246ICfQnNCw0LrRgdC40LzQsNC70YzQvdC+0LUg0LfQvdCw0YfQtdC90LjQtSDRiNC60LDQu9GLINGB0LvQsNC50LTQtdGA0LAnLFxuICAgICAgZWxlbWVudE5hbWU6ICd1cHBlclNjYWxlQm91bmQnLFxuICAgICAgdHlwZTogJ251bWJlcicsXG4gICAgICBuYW1lT2ZWYXJpYWJsZTogJ3VwcGVyU2NhbGVCb3VuZCcsXG4gICAgfSxcbiAgICBsb3dlclNsaWRlclZhbHVlOiB7XG4gICAgICB0aXRsZTogJ01pbl9zbGlkZXInLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICfQndCw0YfQsNC70YzQvdC+0LUg0LfQvdCw0YfQtdC90LjQtSDRiNC60LDQu9GLINGB0LvQsNC50LTQtdGA0LAgLSDQtNC70Y8g0L/QtdGA0LLQvtCz0L4g0LjQu9C4INC+0LTQuNC90L7Rh9C90L7Qs9C+INC/0L7Qu9C30YPQvdC60LAnLFxuICAgICAgZWxlbWVudE5hbWU6ICdsb3dlclNsaWRlclZhbHVlJyxcbiAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgbmFtZU9mVmFyaWFibGU6ICdsb3dlclNsaWRlclZhbHVlJyxcbiAgICB9LFxuICAgIHVwcGVyU2xpZGVyVmFsdWU6IHtcbiAgICAgIHRpdGxlOiAnTWF4X3NsaWRlcicsXG4gICAgICBkZXNjcmlwdGlvbjogJ9Cd0LDRh9Cw0LvRjNC90L7QtSDQt9C90LDRh9C10L3QuNC1INGI0LrQsNC70Ysg0YHQu9Cw0LnQtNC10YDQsCAtINC00LvRjyDQstGC0L7RgNC+0LPQviDQv9C+0LvQt9GD0L3QutCwJyxcbiAgICAgIGVsZW1lbnROYW1lOiAndXBwZXJTbGlkZXJWYWx1ZScsXG4gICAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICAgIG5hbWVPZlZhcmlhYmxlOiAndXBwZXJTbGlkZXJWYWx1ZScsXG4gICAgfSxcbiAgfTtcblxuICBzZXR0aW5nczogUGFyYW0gPSB7XG4gICAgZWxlbWVudElkOiAnZG9jX3BhbmVsJyxcbiAgICBzaWduOiAn4oK9JyxcbiAgICBsb3dlclNjYWxlQm91bmQ6IDAsXG4gICAgdXBwZXJTY2FsZUJvdW5kOiAxMDAwLFxuICAgIGxvd2VyU2xpZGVyVmFsdWU6IDIwMCxcbiAgICB1cHBlclNsaWRlclZhbHVlOiA4MDAsXG4gICAgc2xpZGVyVHlwZTogJ2RvdWJsZScsXG4gICAgZGlyZWN0aW9uVHlwZTogJ2hvcml6b250YWwnLFxuICAgIHN0ZXA6IDUsXG4gICAgaWRGb3JDb250cm9sUGFuZWw6ICdkb2NfcGFuZWwnLFxuICB9O1xuXG4gIGJpbmRDb250cm9sbGVyID0gKGNvbnRyb2xsZXI6IGFueSkgPT4ge1xuICAgIHRoaXMuY29udHJvbGxlciA9IGNvbnRyb2xsZXI7XG4gIH1cblxuICBzZXRTZXR0aW5nc0Zyb21Db250cm9sbGVyID0gKHNldEZyb21Db250cm9sbGVyOiBQYXJhbSkgPT4ge1xuICAgIHRoaXMuc2V0dGluZ3MgPSB7XG4gICAgICBlbGVtZW50SWQ6IHNldEZyb21Db250cm9sbGVyLmVsZW1lbnRJZCxcbiAgICAgIHNpZ246IHNldEZyb21Db250cm9sbGVyLnNpZ24sXG4gICAgICBsb3dlclNjYWxlQm91bmQ6IHNldEZyb21Db250cm9sbGVyLmxvd2VyU2NhbGVCb3VuZCxcbiAgICAgIHVwcGVyU2NhbGVCb3VuZDogc2V0RnJvbUNvbnRyb2xsZXIudXBwZXJTY2FsZUJvdW5kLFxuICAgICAgbG93ZXJTbGlkZXJWYWx1ZTogc2V0RnJvbUNvbnRyb2xsZXIubG93ZXJTbGlkZXJWYWx1ZSxcbiAgICAgIHVwcGVyU2xpZGVyVmFsdWU6IHNldEZyb21Db250cm9sbGVyLnVwcGVyU2xpZGVyVmFsdWUsXG4gICAgICBzbGlkZXJUeXBlOiBzZXRGcm9tQ29udHJvbGxlci5zbGlkZXJUeXBlLFxuICAgICAgZGlyZWN0aW9uVHlwZTogc2V0RnJvbUNvbnRyb2xsZXIuZGlyZWN0aW9uVHlwZSxcbiAgICAgIHN0ZXA6IHNldEZyb21Db250cm9sbGVyLnN0ZXAsXG4gICAgICBpZEZvckNvbnRyb2xQYW5lbDogc2V0RnJvbUNvbnRyb2xsZXIuaWRGb3JDb250cm9sUGFuZWwsXG4gICAgfVxuICB9XG5cbiAgYmluZE1vZGVsID0gKG1vZGVsOiBhbnkpID0+IHtcbiAgICB0aGlzLm1vZGVsID0gbW9kZWw7XG4gIH1cblxuICBnZXRDb250cm9sUGFuZWwgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udHJvbFBhbmVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5zZXR0aW5ncy5pZEZvckNvbnRyb2xQYW5lbCk7XG4gICAgcmV0dXJuIGNvbnRyb2xQYW5lbDtcbiAgfVxuXG4gIHNldElkRm9yU2VsZWN0ID0gKHNlbGVjdDogSFRNTEVsZW1lbnQsIG9iajogYW55KSA9PiB7XG4gICAgc2VsZWN0LmlkID0gb2JqLmVsZW1lbnROYW1lO1xuICB9XG5cbiAgYXBwZW5kQ2hpbGQgPSAocGFyZW50OiBIVE1MRWxlbWVudCwgY2hpbGQ6IEhUTUxFbGVtZW50IHwgVGV4dCkgPT4ge1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChjaGlsZCk7XG4gIH1cblxuICBjcmVhdGVUaXRsZSA9IChvYmo6IGFueSkgPT4ge1xuICAgIGNvbnN0IHRpdGxlOiBzdHJpbmcgPSBvYmouZGVzY3JpcHRpb247XG5cbiAgICBjb25zdCBkaXY6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBjb25zdCB0ZXh0Tm9kZVRpdGxlOiBUZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGl0bGUpO1xuXG4gICAgZGl2LmFwcGVuZENoaWxkKHRleHROb2RlVGl0bGUpO1xuXG4gICAgcmV0dXJuIGRpdjtcbiAgfVxuXG4gIHJldHVybktleXMgPSAob2JqOiBWYWx1ZXMpOiBzdHJpbmdbXSA9PiB7XG4gICAgY29uc3QgYXJyID0gT2JqZWN0LmtleXMob2JqKTtcbiAgICByZXR1cm4gYXJyO1xuICB9XG5cbiAgY3JlYXRlSW5wdXQgPSAoc2VsZWN0T3JEaXY6IEhUTUxFbGVtZW50LCB2YWx1ZTogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGlucHV0LnR5cGUgPSAnbnVtYmVyJztcbiAgICBpbnB1dC52YWx1ZSA9IFN0cmluZyh2YWx1ZSk7XG4gICAgdGhpcy5hcHBlbmRDaGlsZChzZWxlY3RPckRpdiwgaW5wdXQpO1xuICB9XG5cbiAgY3JlYXRlQ2hhbmdhYmxlT3B0aW9ucyA9IChhcnI6IHN0cmluZ1tdLCBwYXJlbnRFbGVtZW50OiBIVE1MRWxlbWVudCkgPT4ge1xuICAgIGFyci5mb3JFYWNoKChjaGFuZ2FibGVWYWx1ZSkgPT4ge1xuICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICBvcHRpb24udmFsdWUgPSBjaGFuZ2FibGVWYWx1ZTtcbiAgICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjaGFuZ2FibGVWYWx1ZSk7XG4gICAgICB0aGlzLmFwcGVuZENoaWxkKG9wdGlvbiwgdGV4dCk7XG4gICAgICB0aGlzLmFwcGVuZENoaWxkKHBhcmVudEVsZW1lbnQsIG9wdGlvbik7XG4gICAgfSk7XG4gIH1cblxuICBjcmVhdGVMaXN0ZW5lck9yT3IgPSAoZWxlbWVudEZvckxpc3RlbmVyOiBIVE1MU2VsZWN0RWxlbWVudCwga2V5T2ZTZXR0aW5nOiAnc2lnbicgfCAnc2xpZGVyVHlwZScgfCAnZGlyZWN0aW9uVHlwZScpID0+IHtcbiAgICBjb25zdCBjaGFuZ2VMaXN0ZW5lciA9ICgpOiBhbnkgPT4ge1xuICAgICAgdGhpcy5zZXR0aW5nc1trZXlPZlNldHRpbmddID0gZWxlbWVudEZvckxpc3RlbmVyLnZhbHVlO1xuICAgICAgdGhpcy5zbGlkZXJSZWZyZXNoKCk7XG4gICAgfTtcbiAgICBlbGVtZW50Rm9yTGlzdGVuZXIuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgY2hhbmdlTGlzdGVuZXIpO1xuICB9XG5cbiAgY3JlYXRlTGlzdGVuZXJOdW1lcmFsID0gKGVsZW1lbnRGb3JMaXN0ZW5lcjogSFRNTElucHV0RWxlbWVudCwga2V5T2ZTZXR0aW5nOiAnc3RlcCcgfCAnbG93ZXJTY2FsZUJvdW5kJyB8ICd1cHBlclNjYWxlQm91bmQnIHwgJ2xvd2VyU2xpZGVyVmFsdWUnIHwgJ3VwcGVyU2xpZGVyVmFsdWUnKSA9PiB7XG4gICAgY29uc3QgaW5wdXRMaXN0ZW5lciA9ICgpOiBhbnkgPT4ge1xuICAgICAgdGhpcy5zZXR0aW5nc1trZXlPZlNldHRpbmddID0gTnVtYmVyKGVsZW1lbnRGb3JMaXN0ZW5lci5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW5wdXQnKVswXS52YWx1ZUFzTnVtYmVyKTtcbiAgICAgIHRoaXMuc2xpZGVyUmVmcmVzaCgpO1xuICAgIH07XG4gICAgZWxlbWVudEZvckxpc3RlbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgaW5wdXRMaXN0ZW5lcik7XG4gIH1cblxuICBjcmVhdGVQYW5lbCA9IChvYmplY3RGb3JDb25zdHJ1Y3Rpb25QYW5lbDogVmFsdWVzLCB0eXBlOiBzdHJpbmcsIGNvbnRyb2xQYW5lbDogSFRNTEVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBrZXlzID0gdGhpcy5yZXR1cm5LZXlzKG9iamVjdEZvckNvbnN0cnVjdGlvblBhbmVsKTtcblxuICAgIGtleXMuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBjb25zdCBjdXJyZW50T2JqID0gb2JqZWN0Rm9yQ29uc3RydWN0aW9uUGFuZWxba2V5XTtcblxuICAgICAgbGV0IHNlbGVjdE9yRGl2OiBIVE1MRWxlbWVudDtcbiAgICAgIGlmICh0eXBlID09PSAnbnVtZXJhbCcpIHtcbiAgICAgICAgc2VsZWN0T3JEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlID09PSAnc2VsZWN0Jykge1xuICAgICAgICBzZWxlY3RPckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNldElkRm9yU2VsZWN0KHNlbGVjdE9yRGl2LCBjdXJyZW50T2JqKTtcbiAgICAgIGNvbnN0IGNyZWF0ZVRpdGxlID0gdGhpcy5jcmVhdGVUaXRsZShjdXJyZW50T2JqKTtcbiAgICAgIHRoaXMuYXBwZW5kQ2hpbGQoc2VsZWN0T3JEaXYsIGNyZWF0ZVRpdGxlKTtcblxuICAgICAgaWYgKHR5cGUgPT09ICdudW1lcmFsJykge1xuICAgICAgICB0aGlzLmNyZWF0ZUlucHV0KHNlbGVjdE9yRGl2LCB0aGlzLnNldHRpbmdzW2N1cnJlbnRPYmoubmFtZU9mVmFyaWFibGUgYXMgJ3N0ZXAnIHwgJ2xvd2VyU2NhbGVCb3VuZCcgfCAndXBwZXJTY2FsZUJvdW5kJyB8ICdsb3dlclNsaWRlclZhbHVlJyB8ICd1cHBlclNsaWRlclZhbHVlJ10pO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGUgPT09ICdzZWxlY3QnKSB7XG4gICAgICAgIHRoaXMuY3JlYXRlQ2hhbmdhYmxlT3B0aW9ucyhjdXJyZW50T2JqLnZhbHVlLCBzZWxlY3RPckRpdik7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuYXBwZW5kQ2hpbGQoY29udHJvbFBhbmVsLCBzZWxlY3RPckRpdik7XG4gICAgfSk7XG5cbiAgICBrZXlzLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgY29uc3QgY3VycmVudE9iaiA9IG9iamVjdEZvckNvbnN0cnVjdGlvblBhbmVsW2tleV07XG4gICAgICBjb25zdCBrZXlPZlNldHRpbmc6IGFueSA9IGN1cnJlbnRPYmoubmFtZU9mVmFyaWFibGU7XG5cbiAgICAgIGlmICh0eXBlID09PSAnbnVtZXJhbCcpIHtcbiAgICAgICAgY29uc3QgZXZlbnRFbGVtZW50ID0gY29udHJvbFBhbmVsLnF1ZXJ5U2VsZWN0b3IoYCMke2N1cnJlbnRPYmouZWxlbWVudE5hbWV9YCkgYXMgSFRNTElucHV0RWxlbWVudDtcblxuICAgICAgICB0aGlzLmNyZWF0ZUxpc3RlbmVyTnVtZXJhbChldmVudEVsZW1lbnQsIGtleU9mU2V0dGluZyk7XG4gICAgICB9XG4gICAgICBpZiAodHlwZSA9PT0gJ3NlbGVjdCcpIHtcbiAgICAgICAgY29uc3QgZXZlbnRFbGVtZW50ID0gY29udHJvbFBhbmVsLnF1ZXJ5U2VsZWN0b3IoYCMke2N1cnJlbnRPYmouZWxlbWVudE5hbWV9YCkgYXMgSFRNTFNlbGVjdEVsZW1lbnQ7XG4gICAgICAgIHRoaXMuY3JlYXRlTGlzdGVuZXJPck9yKGV2ZW50RWxlbWVudCwga2V5T2ZTZXR0aW5nKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHNsaWRlclJlZnJlc2ggPSAoKSA9PiB7XG4gICAgY29uc3Qgb2JqRm9yQ29udHJvbGxlciA9IHtcbiAgICAgIHNsaWRlclR5cGU6IHRoaXMuc2V0dGluZ3Muc2xpZGVyVHlwZSxcbiAgICAgIGRpcmVjdGlvblR5cGU6IHRoaXMuc2V0dGluZ3MuZGlyZWN0aW9uVHlwZSxcbiAgICAgIHN0ZXA6IHRoaXMuc2V0dGluZ3Muc3RlcCxcbiAgICB9O1xuICAgIHRoaXMuY29udHJvbGxlci5zZXRDb250cm9sbGVyRnJvbUNvbnRyb2xQYW5lbChvYmpGb3JDb250cm9sbGVyKTtcblxuICAgIGNvbnN0IG9iakZvck1vZGVsID0ge1xuICAgICAgc2lnbjogdGhpcy5zZXR0aW5ncy5zaWduLFxuICAgICAgbG93ZXJTY2FsZUJvdW5kOiB0aGlzLnNldHRpbmdzLmxvd2VyU2NhbGVCb3VuZCxcbiAgICAgIHVwcGVyU2NhbGVCb3VuZDogdGhpcy5zZXR0aW5ncy51cHBlclNjYWxlQm91bmQsXG4gICAgICBsb3dlclNsaWRlclZhbHVlOiB0aGlzLnNldHRpbmdzLmxvd2VyU2xpZGVyVmFsdWUsXG4gICAgICB1cHBlclNsaWRlclZhbHVlOiB0aGlzLnNldHRpbmdzLnVwcGVyU2xpZGVyVmFsdWUsXG4gICAgfTtcbiAgICB0aGlzLm1vZGVsLnNldEluaXRpYWxNb2RlbE9wdGlvbnMob2JqRm9yTW9kZWwpO1xuXG4gICAgdGhpcy5jb250cm9sbGVyLmNyZWF0ZVNsaWRlcigpO1xuICB9XG5cbiAgYnVpbGRQYW5lbCA9ICgpID0+IHtcbiAgICBjb25zdCBjb250cm9sUGFuZWwgPSB0aGlzLmdldENvbnRyb2xQYW5lbCgpO1xuICAgIHRoaXMuY3JlYXRlUGFuZWwodGhpcy5vclZhbHVlcywgJ3NlbGVjdCcsIGNvbnRyb2xQYW5lbCk7XG4gICAgdGhpcy5jcmVhdGVQYW5lbCh0aGlzLm51bWVyYWxWYWx1ZXMsICdudW1lcmFsJywgY29udHJvbFBhbmVsKTtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnNldHRpbmdzKTtcbiAgfVxufVxuXG5leHBvcnQgeyBDb250cm9sUGFuZWwgfTtcbiIsImltcG9ydCB7IE1vZGVsIH0gZnJvbSAnLi9tb2RlbCc7XG5pbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnLi9jb250cm9sbGVyJztcbmltcG9ydCB7IFZpZXcgfSBmcm9tICcuL3JlZmFjdG9yaW5nVmlldyc7XG5pbXBvcnQgeyBDb250cm9sUGFuZWwgfSBmcm9tICcuL0NvbnRyb2xQYW5lbCc7XG5cbmludGVyZmFjZSBQYXJhbSB7XG4gIGlkRm9yQ29udHJvbFBhbmVsPzogc3RyaW5nO1xuICBlbGVtZW50SWQ/OiBzdHJpbmc7XG4gIHNpZ246IHN0cmluZztcbiAgbG93ZXJTY2FsZUJvdW5kPzogbnVtYmVyO1xuICB1cHBlclNjYWxlQm91bmQ/OiBudW1iZXI7XG4gIGxvd2VyU2xpZGVyVmFsdWU/OiBudW1iZXI7XG4gIHVwcGVyU2xpZGVyVmFsdWU/OiBudW1iZXI7XG4gIHNsaWRlclR5cGU/OiBzdHJpbmc7XG4gIGRpcmVjdGlvblR5cGU/OiBzdHJpbmc7XG4gIHN0ZXA/OiBudW1iZXI7XG59XG5cbmZ1bmN0aW9uIElTU2xpZGVyKHBhcmFtOiBQYXJhbSkge1xuXG4gIGNvbnN0IHNldHRpbmdzOiBhbnkgPSB7XG4gICAgaWRGb3JDb250cm9sUGFuZWw6IHBhcmFtLmlkRm9yQ29udHJvbFBhbmVsIHx8ICdkb2NfcGFuZWwnLFxuICAgIGVsZW1lbnRJZDogcGFyYW0uZWxlbWVudElkIHx8ICdpc3MnLFxuICAgIHNpZ246IHBhcmFtLnNpZ24gfHwgJ+KCvScsXG4gICAgbG93ZXJTY2FsZUJvdW5kOiBwYXJhbS5sb3dlclNjYWxlQm91bmQgfHwgMCxcbiAgICB1cHBlclNjYWxlQm91bmQ6IHBhcmFtLnVwcGVyU2NhbGVCb3VuZCB8fCAxMDAwLFxuICAgIGxvd2VyU2xpZGVyVmFsdWU6IHBhcmFtLmxvd2VyU2xpZGVyVmFsdWUgfHwgMjAwLFxuICAgIHVwcGVyU2xpZGVyVmFsdWU6IHBhcmFtLnVwcGVyU2xpZGVyVmFsdWUgfHwgODAwLFxuICAgIHNsaWRlclR5cGU6IHBhcmFtLnNsaWRlclR5cGUgfHwgJ2RvdWJsZScsXG4gICAgZGlyZWN0aW9uVHlwZTogcGFyYW0uZGlyZWN0aW9uVHlwZSB8fCAnaG9yaXpvbnRhbCcsXG4gICAgc3RlcDogcGFyYW0uc3RlcCB8fCA1MCxcbiAgfTtcblxuICAvLyDQn9Ce0KHQotCg0J7QldCd0JjQlSDQodCb0JDQmdCU0JXQoNCQINCf0KDQmCDQn9CV0KDQktCe0Jwg0JfQkNCf0KPQodCa0JVcbiAgY29uc3QgbW9kZWwgPSBuZXcgTW9kZWwoc2V0dGluZ3MpO1xuICBjb25zdCBjb250cm9sbGVyID0gbmV3IENvbnRyb2xsZXIoc2V0dGluZ3MpO1xuICBjb25zdCB2aWV3ID0gbmV3IFZpZXcoKTtcbiAgY29uc3QgY29udHJvbFBhbmVsID0gbmV3IENvbnRyb2xQYW5lbCgpO1xuXG4gIGNvbnRyb2xsZXIuYmluZE1vZGVsKG1vZGVsKTtcbiAgY29udHJvbGxlci5iaW5kVmlldyh2aWV3KTtcbiAgY29udHJvbGxlci5iaW5kQ29udHJvbFBhbmVsKGNvbnRyb2xQYW5lbCk7XG5cbiAgdmlldy5iaW5kQ29udHJvbGxlcihjb250cm9sbGVyKTtcbiAgY29udHJvbFBhbmVsLmJpbmRDb250cm9sbGVyKGNvbnRyb2xsZXIpO1xuICBjb250cm9sUGFuZWwuYmluZE1vZGVsKG1vZGVsKTtcblxuICBjb250cm9sbGVyLmNyZWF0ZVNsaWRlcigpO1xuXG4gIGNvbnRyb2xQYW5lbC5idWlsZFBhbmVsKCk7XG59XG5cbmV4cG9ydCB7IElTU2xpZGVyIH07XG4iLCJpbXBvcnQgeyBNb2RlbCB9IGZyb20gJy4vbW9kZWwnO1xuaW1wb3J0IHsgVmlldyB9IGZyb20gJy4vcmVmYWN0b3JpbmdWaWV3JztcbmltcG9ydCB7IENvbnRyb2xQYW5lbCB9IGZyb20gJy4vQ29udHJvbFBhbmVsJztcblxuaW50ZXJmYWNlIENvbnRyb2xsZXIge1xuICBpZEZvckNvbnRyb2xQYW5lbD86IHN0cmluZztcbiAgZWxlbWVudElkPzogc3RyaW5nO1xuICBzaWduPzogc3RyaW5nO1xuICBsb3dlclNjYWxlQm91bmQ/OiBudW1iZXI7XG4gIHVwcGVyU2NhbGVCb3VuZD86IG51bWJlcjtcbiAgbG93ZXJTbGlkZXJWYWx1ZT86IG51bWJlcjtcbiAgdXBwZXJTbGlkZXJWYWx1ZT86IG51bWJlcjtcbiAgc2xpZGVyVHlwZT86IHN0cmluZztcbiAgZGlyZWN0aW9uVHlwZT86IHN0cmluZztcbiAgc3RlcD86IG51bWJlcjtcblxuICBtb2RlbD86IGFueTtcbiAgdmlldz86IGFueTtcblxuICBjb250cm9sUGFuZWw/OiBhbnk7XG59XG5cbmludGVyZmFjZSBvYmpGcm9tVmlldyB7XG4gIGxvd2VyU2xpZGVyVmFsdWU/OiBudW1iZXI7XG4gIHVwcGVyU2xpZGVyVmFsdWU/OiBudW1iZXI7XG59XG5cbmludGVyZmFjZSBvYmpGcm9tQ29udHJvbFBhbmVsIHtcbiAgc2xpZGVyVHlwZTogc3RyaW5nO1xuICBkaXJlY3Rpb25UeXBlOiBzdHJpbmc7XG4gIHN0ZXA6IG51bWJlcjtcbn1cblxuY2xhc3MgQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKHNldHRpbmdzOiBhbnkpIHtcbiAgICB0aGlzLmVsZW1lbnRJZCA9IHNldHRpbmdzLmVsZW1lbnRJZDtcbiAgICB0aGlzLnNsaWRlclR5cGUgPSBzZXR0aW5ncy5zbGlkZXJUeXBlIHx8ICdzaW5nbGUnO1xuICAgIHRoaXMuZGlyZWN0aW9uVHlwZSA9IHNldHRpbmdzLmRpcmVjdGlvblR5cGUgfHwgJ2hvcml6b250YWwnO1xuICAgIHRoaXMuc3RlcCA9IHNldHRpbmdzLnN0ZXAgfHwgMjtcbiAgICB0aGlzLmlkRm9yQ29udHJvbFBhbmVsID0gc2V0dGluZ3MuaWRGb3JDb250cm9sUGFuZWwgfHwgJyc7XG4gIH1cblxuXG4gIGNyZWF0ZVNsaWRlcigpIHtcbiAgICB0aGlzLnNldENvbnRyb2xsZXIoKTtcbiAgICB0aGlzLnNldEFuZFJ1blZpZXcoKTtcbiAgfVxuXG4gIHNldENvbnRyb2xsZXIoKSB7XG4gICAgY29uc3Qgb2JqRnJvbU1vZGVsID0gdGhpcy5nZXRNb2RlbCgpO1xuICAgIHRoaXMubG93ZXJTbGlkZXJWYWx1ZSA9IG9iakZyb21Nb2RlbC5sb3dlclNsaWRlclZhbHVlO1xuICAgIHRoaXMudXBwZXJTbGlkZXJWYWx1ZSA9IG9iakZyb21Nb2RlbC51cHBlclNsaWRlclZhbHVlO1xuICAgIHRoaXMubG93ZXJTY2FsZUJvdW5kID0gb2JqRnJvbU1vZGVsLmxvd2VyU2NhbGVCb3VuZDtcbiAgICB0aGlzLnVwcGVyU2NhbGVCb3VuZCA9IG9iakZyb21Nb2RlbC51cHBlclNjYWxlQm91bmQ7XG4gICAgdGhpcy5zaWduID0gb2JqRnJvbU1vZGVsLnNpZ247XG4gIH1cblxuICBnZXRNb2RlbCgpIHtcbiAgICByZXR1cm4gdGhpcy5tb2RlbC5nZXRNb2RlbCgpO1xuICB9XG5cbiAgc2V0QW5kUnVuVmlldygpIHtcbiAgICBjb25zdCBvYmogPSB7XG4gICAgICBlbGVtZW50SWQ6IHRoaXMuZWxlbWVudElkLFxuICAgICAgc2lnbjogdGhpcy5zaWduLFxuICAgICAgbG93ZXJTY2FsZUJvdW5kOiB0aGlzLmxvd2VyU2NhbGVCb3VuZCxcbiAgICAgIHVwcGVyU2NhbGVCb3VuZDogdGhpcy51cHBlclNjYWxlQm91bmQsXG4gICAgICBsb3dlclNsaWRlclZhbHVlOiB0aGlzLmxvd2VyU2xpZGVyVmFsdWUsXG4gICAgICB1cHBlclNsaWRlclZhbHVlOiB0aGlzLnVwcGVyU2xpZGVyVmFsdWUsXG4gICAgICBzbGlkZXJUeXBlOiB0aGlzLnNsaWRlclR5cGUsXG4gICAgICBkaXJlY3Rpb25UeXBlOiB0aGlzLmRpcmVjdGlvblR5cGUsXG4gICAgICBzdGVwOiB0aGlzLnN0ZXAsXG4gICAgfTtcbiAgICBjb25zb2xlLmxvZygnc2V0QW5kUnVuVmlldycpO1xuICAgIGNvbnNvbGUubG9nKG9iaik7XG4gICAgdGhpcy52aWV3LnNldFN0YXJ0aW5nQ29uZGl0aW9ucyhvYmopO1xuICAgIHRoaXMudmlldy5pbml0KCk7XG4gIH1cblxuXG5cbiAgYmluZE1vZGVsKG1vZGVsOiBNb2RlbCkge1xuICAgIHRoaXMubW9kZWwgPSBtb2RlbDtcbiAgfVxuXG4gIHNldE1vZGVsKCkge1xuICAgIHRoaXMubW9kZWwuc2V0TW9kZWwoe1xuICAgICAgbG93ZXJTbGlkZXJWYWx1ZTogdGhpcy5sb3dlclNsaWRlclZhbHVlLFxuICAgICAgdXBwZXJTbGlkZXJWYWx1ZTogdGhpcy51cHBlclNsaWRlclZhbHVlLFxuICAgIH0pO1xuICB9XG5cbiAgYmluZFZpZXcodmlldzogVmlldykge1xuICAgIHRoaXMudmlldyA9IHZpZXc7XG4gIH1cblxuICBnZXRWaWV3KG9iajogb2JqRnJvbVZpZXcpIHtcbiAgICBpZiAodGhpcy5zbGlkZXJUeXBlID09PSAnZG91YmxlJykge1xuICAgICAgdGhpcy5sb3dlclNsaWRlclZhbHVlID0gb2JqLmxvd2VyU2xpZGVyVmFsdWU7XG4gICAgICB0aGlzLnVwcGVyU2xpZGVyVmFsdWUgPSBvYmoudXBwZXJTbGlkZXJWYWx1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc2xpZGVyVHlwZSA9PT0gJ3NpbmdsZScpIHtcbiAgICAgIHRoaXMubG93ZXJTbGlkZXJWYWx1ZSA9IG9iai5sb3dlclNsaWRlclZhbHVlO1xuICAgIH1cbiAgICB0aGlzLnNldE1vZGVsKCk7XG4gIH1cblxuICBnZXRDb250cm9sbGVyKCkge1xuICAgIHJldHVybiB7XG4gICAgICBlbGVtZW50SWQ6IHRoaXMuZWxlbWVudElkLFxuICAgICAgc2lnbjogdGhpcy5zaWduLFxuICAgICAgbG93ZXJTY2FsZUJvdW5kOiB0aGlzLmxvd2VyU2NhbGVCb3VuZCxcbiAgICAgIHVwcGVyU2NhbGVCb3VuZDogdGhpcy51cHBlclNjYWxlQm91bmQsXG4gICAgICBsb3dlclNsaWRlclZhbHVlOiB0aGlzLmxvd2VyU2xpZGVyVmFsdWUsXG4gICAgICB1cHBlclNsaWRlclZhbHVlOiB0aGlzLnVwcGVyU2xpZGVyVmFsdWUsXG4gICAgICBzbGlkZXJUeXBlOiB0aGlzLnNsaWRlclR5cGUsXG4gICAgICBzdGVwOiB0aGlzLnN0ZXAsXG4gICAgfTtcbiAgfVxuXG4gIGJpbmRDb250cm9sUGFuZWwoY250cmxQbmw6IENvbnRyb2xQYW5lbCkge1xuICAgIHRoaXMuY29udHJvbFBhbmVsID0gY250cmxQbmw7XG4gIH1cblxuICBzZXRDb250cm9sbGVyRnJvbUNvbnRyb2xQYW5lbCA9IChvYmo6IG9iakZyb21Db250cm9sUGFuZWwpID0+IHtcbiAgICB0aGlzLnN0ZXAgPSBvYmouc3RlcDtcbiAgICB0aGlzLnNsaWRlclR5cGUgPSBvYmouc2xpZGVyVHlwZTtcbiAgICB0aGlzLmRpcmVjdGlvblR5cGUgPSBvYmouZGlyZWN0aW9uVHlwZTtcbiAgfVxufVxuXG5leHBvcnQgeyBDb250cm9sbGVyIH07XG4iLCJpbnRlcmZhY2UgTW9kZWwge1xuICBsb3dlclNjYWxlQm91bmQ6IG51bWJlcjtcbiAgdXBwZXJTY2FsZUJvdW5kOiBudW1iZXI7XG4gIGxvd2VyU2xpZGVyVmFsdWU6IG51bWJlcjtcbiAgdXBwZXJTbGlkZXJWYWx1ZTogbnVtYmVyO1xuICBzaWduOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBvYmpGcm9tVmlldyB7XG4gIGxvd2VyU2xpZGVyVmFsdWU/OiBudW1iZXI7XG4gIHVwcGVyU2xpZGVyVmFsdWU/OiBudW1iZXI7XG59XG5pbnRlcmZhY2Ugb2JqRnJvbUNvbnRyb2xsZXIge1xuICBsb3dlclNjYWxlQm91bmQ6IG51bWJlcjtcbiAgdXBwZXJTY2FsZUJvdW5kOiBudW1iZXI7XG4gIGxvd2VyU2xpZGVyVmFsdWU6IG51bWJlcjtcbiAgdXBwZXJTbGlkZXJWYWx1ZTogbnVtYmVyO1xuICBzaWduOiBzdHJpbmc7XG59XG5jbGFzcyBNb2RlbCB7XG4gIGNvbnN0cnVjdG9yKHBhcmFtOiBvYmpGcm9tQ29udHJvbGxlcikge1xuICAgIHRoaXMubG93ZXJTY2FsZUJvdW5kID0gcGFyYW0ubG93ZXJTY2FsZUJvdW5kIHx8IDA7XG4gICAgdGhpcy51cHBlclNjYWxlQm91bmQgPSBwYXJhbS51cHBlclNjYWxlQm91bmQgfHwgMTAwMDtcbiAgICB0aGlzLmxvd2VyU2xpZGVyVmFsdWUgPSBwYXJhbS5sb3dlclNsaWRlclZhbHVlIHx8IDIwMDtcbiAgICB0aGlzLnVwcGVyU2xpZGVyVmFsdWUgPSBwYXJhbS51cHBlclNsaWRlclZhbHVlIHx8IDgwMDtcbiAgICB0aGlzLnNpZ24gPSBwYXJhbS5zaWduIHx8ICc/JztcbiAgfVxuXG4gIHNldE1vZGVsKG9iajogb2JqRnJvbVZpZXcpIHtcbiAgICB0aGlzLmxvd2VyU2xpZGVyVmFsdWUgPSBvYmoubG93ZXJTbGlkZXJWYWx1ZTtcbiAgICB0aGlzLnVwcGVyU2xpZGVyVmFsdWUgPSBvYmoudXBwZXJTbGlkZXJWYWx1ZTtcbiAgfVxuXG4gIHNldEluaXRpYWxNb2RlbE9wdGlvbnMgPSAocGFyYW06IG9iakZyb21Db250cm9sbGVyKSA9PiB7XG4gICAgdGhpcy5sb3dlclNjYWxlQm91bmQgPSBwYXJhbS5sb3dlclNjYWxlQm91bmQ7XG4gICAgdGhpcy51cHBlclNjYWxlQm91bmQgPSBwYXJhbS51cHBlclNjYWxlQm91bmQ7XG4gICAgdGhpcy5sb3dlclNsaWRlclZhbHVlID0gcGFyYW0ubG93ZXJTbGlkZXJWYWx1ZTtcbiAgICB0aGlzLnVwcGVyU2xpZGVyVmFsdWUgPSBwYXJhbS51cHBlclNsaWRlclZhbHVlO1xuICAgIHRoaXMuc2lnbiA9IHBhcmFtLnNpZ247XG4gIH1cblxuICBnZXRNb2RlbCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbG93ZXJTY2FsZUJvdW5kOiB0aGlzLmxvd2VyU2NhbGVCb3VuZCxcbiAgICAgIHVwcGVyU2NhbGVCb3VuZDogdGhpcy51cHBlclNjYWxlQm91bmQsXG4gICAgICBsb3dlclNsaWRlclZhbHVlOiB0aGlzLmxvd2VyU2xpZGVyVmFsdWUsXG4gICAgICB1cHBlclNsaWRlclZhbHVlOiB0aGlzLnVwcGVyU2xpZGVyVmFsdWUsXG4gICAgICBzaWduOiB0aGlzLnNpZ24sXG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgeyBNb2RlbCB9O1xuIiwiXG4vLyBpbXBvcnQgJy4uLy4uLy4uL2lzX3JlZmFjdG9yaW5nLmNzcyc7XG5pbXBvcnQgJy4uLy4uLy4uL3N0eWxlcy5zY3NzJztcblxuLy8gaW1wb3J0IHsgVmlldyB9IGZyb20gJy4vcmVmYWN0b3JpbmdWaWV3Jztcbi8vIGltcG9ydCB7IENvbnRyb2xQYW5lbCB9IGZyb20gJy4vQ29udHJvbFBhbmVsJztcbmltcG9ydCB7IElTU2xpZGVyIH0gZnJvbSAnLi9JU1NsaWRlcic7XG5cbi8vIGNvbnN0IHZpZXcgPSBuZXcgVmlldygpO1xuXG4vLyBjb25zdCBjb250cm9sUGFuZWwgPSBuZXcgQ29udHJvbFBhbmVsKCk7XG4vLyBjb250cm9sUGFuZWwuYnVpbGRQYW5lbCgpO1xuXG4vLyB2aWV3LnNldFN0YXJ0aW5nQ29uZGl0aW9ucyh7XG4vLyAgIGVsZW1lbnRJZDogJyNpc3MnLFxuLy8gICBzaWduOiAnJCcsXG4vLyAgIGxvd2VyU2NhbGVCb3VuZDogMTAwLFxuLy8gICB1cHBlclNjYWxlQm91bmQ6IDE1MDAsXG4vLyAgIGxvd2VyU2xpZGVyVmFsdWU6IDIwMCxcbi8vICAgdXBwZXJTbGlkZXJWYWx1ZTogODAwLFxuLy8gICBzbGlkZXJUeXBlOiAnZG91YmxlJyxcbi8vICAgZGlyZWN0aW9uVHlwZTogJ2hvcml6b250YWwnLFxuLy8gICBzdGVwOiAxMCxcbi8vIH0pO1xuLy8gdmlldy5pbml0KCk7XG5jb25zdCBzZXR0aW5nc0Zvckhvcml6b250YWxEdWJsZSA9IHtcbiAgaWRGb3JDb250cm9sUGFuZWw6ICdkb2NfcGFuZWwnLFxuICBlbGVtZW50SWQ6ICdpc3MnLFxuICBzaWduOiAnJCcsXG4gIGxvd2VyU2NhbGVCb3VuZDogMTAwLFxuICB1cHBlclNjYWxlQm91bmQ6IDE1MDAsXG4gIGxvd2VyU2xpZGVyVmFsdWU6IDIwMCxcbiAgdXBwZXJTbGlkZXJWYWx1ZTogODAwLFxuICBzbGlkZXJUeXBlOiAnZG91YmxlJyxcbiAgZGlyZWN0aW9uVHlwZTogJ2hvcml6b250YWwnLFxuICBzdGVwOiAxMCxcbn07XG5JU1NsaWRlcihzZXR0aW5nc0Zvckhvcml6b250YWxEdWJsZSk7XG5cbi8vIGNvbnN0IHZpZXdTaW5nbGVIb3Jpem9udGFsID0gbmV3IFZpZXcoKTtcblxuLy8gdmlld1NpbmdsZUhvcml6b250YWwuc2V0U3RhcnRpbmdDb25kaXRpb25zKHtcbi8vICAgZWxlbWVudElkOiAnI2lzc18yJyxcbi8vICAgc2lnbjogJyQnLFxuLy8gICBsb3dlclNjYWxlQm91bmQ6IDEwMCxcbi8vICAgdXBwZXJTY2FsZUJvdW5kOiAxNTAwLFxuLy8gICBsb3dlclNsaWRlclZhbHVlOiAyMDAsXG4vLyAgIHVwcGVyU2xpZGVyVmFsdWU6IDgwMCxcbi8vICAgc2xpZGVyVHlwZTogJ3NpbmdsZScsXG4vLyAgIGRpcmVjdGlvblR5cGU6ICdob3Jpem9udGFsJyxcbi8vICAgc3RlcDogMTAsXG4vLyB9KTtcbi8vIHZpZXdTaW5nbGVIb3Jpem9udGFsLmluaXQoKTtcblxuXG4vLyBjb25zdCB2aWV3U2luZ2xlVmVydGljYWwgPSBuZXcgVmlldygpO1xuXG4vLyB2aWV3U2luZ2xlVmVydGljYWwuc2V0U3RhcnRpbmdDb25kaXRpb25zKHtcbi8vICAgZWxlbWVudElkOiAnI2lzc18zJyxcbi8vICAgc2lnbjogJyQnLFxuLy8gICBsb3dlclNjYWxlQm91bmQ6IDEwMCxcbi8vICAgdXBwZXJTY2FsZUJvdW5kOiAxNTAwLFxuLy8gICBsb3dlclNsaWRlclZhbHVlOiAyMDAsXG4vLyAgIHVwcGVyU2xpZGVyVmFsdWU6IDgwMCxcbi8vICAgc2xpZGVyVHlwZTogJ3NpbmdsZScsXG4vLyAgIGRpcmVjdGlvblR5cGU6ICd2ZXJ0aWNhbCcsXG4vLyAgIHN0ZXA6IDEwLFxuLy8gfSk7XG4vLyB2aWV3U2luZ2xlVmVydGljYWwuaW5pdCgpO1xuXG5cbi8vIGNvbnN0IHZpZXdEb3VibGVWZXJ0aWNhbCA9IG5ldyBWaWV3KCk7XG5cbi8vIHZpZXdEb3VibGVWZXJ0aWNhbC5zZXRTdGFydGluZ0NvbmRpdGlvbnMoe1xuLy8gICBlbGVtZW50SWQ6ICcjaXNzXzQnLFxuLy8gICBzaWduOiAnJCcsXG4vLyAgIGxvd2VyU2NhbGVCb3VuZDogMTAwLFxuLy8gICB1cHBlclNjYWxlQm91bmQ6IDE1MDAsXG4vLyAgIGxvd2VyU2xpZGVyVmFsdWU6IDIwMCxcbi8vICAgdXBwZXJTbGlkZXJWYWx1ZTogODAwLFxuLy8gICBzbGlkZXJUeXBlOiAnZG91YmxlJyxcbi8vICAgZGlyZWN0aW9uVHlwZTogJ3ZlcnRpY2FsJyxcbi8vICAgc3RlcDogMTAsXG4vLyB9KTtcbi8vIHZpZXdEb3VibGVWZXJ0aWNhbC5pbml0KCk7XG4iLCJpbnRlcmZhY2UgVmlld1N0YXJ0aW5nQ29uZGl0aW9ucyB7XG4gIGVsZW1lbnRJZD86IHN0cmluZztcbiAgZWxlbT86IGFueTtcbiAgc2lnbj86IHN0cmluZztcbiAgbG93ZXJTY2FsZUJvdW5kPzogbnVtYmVyO1xuICB1cHBlclNjYWxlQm91bmQ/OiBudW1iZXI7XG4gIGxvd2VyU2xpZGVyVmFsdWU/OiBudW1iZXI7XG4gIHVwcGVyU2xpZGVyVmFsdWU/OiBudW1iZXI7XG4gIHNsaWRlclR5cGU/OiBzdHJpbmc7XG4gIGRpcmVjdGlvblR5cGU/OiBzdHJpbmc7XG4gIHN0ZXA/OiBudW1iZXI7XG4gIGNvbnRyb2xsZXI/OiBhbnk7XG4gIHN0eWxlPzogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgVmlldyB7XG4gIGVsZW1lbnRJZDogc3RyaW5nO1xuICBlbGVtOiBhbnk7XG4gIHNpZ246IHN0cmluZztcbiAgbG93ZXJTY2FsZUJvdW5kOiBudW1iZXI7XG4gIHVwcGVyU2NhbGVCb3VuZDogbnVtYmVyO1xuICBsb3dlclNsaWRlclZhbHVlOiBudW1iZXI7XG4gIHVwcGVyU2xpZGVyVmFsdWU6IG51bWJlcjtcbiAgc2xpZGVyVHlwZTogc3RyaW5nO1xuICBkaXJlY3Rpb25UeXBlOiBzdHJpbmc7XG4gIHN0ZXA6IG51bWJlcjtcbiAgY29udHJvbGxlcjogYW55O1xuICBzdHlsZTogc3RyaW5nO1xuXG4gIHNjYWxlOiBIVE1MRWxlbWVudDtcbiAgaW5kZW50OiBudW1iZXI7XG4gIG1haW5BeGlzU2l6ZTogbnVtYmVyO1xuXG4gIHNsaWRlckluRE9NOiBbSFRNTEVsZW1lbnRdO1xuXG4gIHN0YXRpY0ZpZWxkTG93ZXI6IEhUTUxFbGVtZW50O1xuICBzdGF0aWNGaWVsZFVwcGVyOiBIVE1MRWxlbWVudDtcbiAgc3RhdGljRmllbGRTaW5nbGU6IEhUTUxFbGVtZW50O1xuXG4gIGZseUZpZWxkTG93ZXI6IEhUTUxFbGVtZW50O1xuICBmbHlGaWVsZFVwcGVyOiBIVE1MRWxlbWVudDtcbiAgZmx5RmllbGRTaW5nbGU6IEhUTUxFbGVtZW50O1xuXG4gIGxvd2VyU2xpZGVyOiBIVE1MRWxlbWVudDtcbiAgbG93ZXJTbGlkZXJQb3NpdGlvbjogbnVtYmVyO1xuXG4gIHVwcGVyU2xpZGVyOiBIVE1MRWxlbWVudDtcbiAgdXBwZXJTbGlkZXJQb3NpdGlvbjogbnVtYmVyO1xuXG4gIHNpbmdsZVNsaWRlcjogSFRNTEVsZW1lbnQ7XG4gIHNpbmdsZVNsaWRlclBvc2l0aW9uOiBudW1iZXI7XG5cbiAgc2xpZGVyV2lkdGg6IG51bWJlcjtcbiAgc2xpZGVySGVpZ2h0OiBudW1iZXI7XG5cbiAgcmliYm9uOiBIVE1MRWxlbWVudDtcblxuICBjbGllbnRSZWN0OiBDbGllbnRSZWN0O1xuXG4gIGlubmVyTW91c2VQb3NpdGlvbjogbnVtYmVyO1xuXG4gIHBpeGVsU3RlcDogbnVtYmVyO1xuICByb3VuZGVkUGl4ZWxTdGVwOiBudW1iZXI7XG5cbiAgdGFyZ2V0U2xpZGVyOiBIVE1MRWxlbWVudDtcblxuICBsb3dlclJlc3RyaWN0aW9uOiBudW1iZXI7XG4gIHVwcGVyUmVzdHJpY3Rpb246IG51bWJlcjtcblxuICBsb3dlckNvc3RSZXN0cmljdGlvbjogbnVtYmVyO1xuICB1cHBlckNvc3RSZXN0cmljdGlvbjogbnVtYmVyO1xufVxuXG5jbGFzcyBWaWV3IHtcbiAgYmluZENvbnRyb2xsZXIgPSAoY29udHJvbGxlcjogYW55KSA9PiB7XG4gICAgdGhpcy5jb250cm9sbGVyID0gY29udHJvbGxlcjtcbiAgfVxuXG4gIHNldENvbnRyb2xsZXIoKSB7XG4gICAgY29uc3Qgb2JqID0ge1xuICAgICAgbG93ZXJTbGlkZXJWYWx1ZTogdGhpcy5sb3dlclNsaWRlclZhbHVlLFxuICAgICAgdXBwZXJTbGlkZXJWYWx1ZTogdGhpcy51cHBlclNsaWRlclZhbHVlLFxuICAgIH07XG4gICAgdGhpcy5jb250cm9sbGVyLmdldFZpZXcob2JqKTtcbiAgfVxuXG4gIHNldFN0YXJ0aW5nQ29uZGl0aW9ucyA9IChvYmo6IFZpZXdTdGFydGluZ0NvbmRpdGlvbnMpID0+IHtcbiAgICB0aGlzLmVsZW1lbnRJZCA9IGAjJHtvYmouZWxlbWVudElkfWAgfHwgJyNpc3MnO1xuICAgIHRoaXMuZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG9iai5lbGVtZW50SWQpO1xuXG4gICAgdGhpcy5zaWduID0gb2JqLnNpZ24gfHwgJ1InO1xuICAgIHRoaXMubG93ZXJTY2FsZUJvdW5kID0gTnVtYmVyKG9iai5sb3dlclNjYWxlQm91bmQpIHx8IDA7XG4gICAgdGhpcy51cHBlclNjYWxlQm91bmQgPSBOdW1iZXIob2JqLnVwcGVyU2NhbGVCb3VuZCkgfHwgMTAwMDtcbiAgICB0aGlzLmxvd2VyU2xpZGVyVmFsdWUgPSBOdW1iZXIob2JqLmxvd2VyU2xpZGVyVmFsdWUpIHx8IDIwMDtcbiAgICB0aGlzLnVwcGVyU2xpZGVyVmFsdWUgPSBOdW1iZXIob2JqLnVwcGVyU2xpZGVyVmFsdWUpIHx8IDgwMDtcblxuICAgIHRoaXMuc2xpZGVyVHlwZSA9IG9iai5zbGlkZXJUeXBlIHx8ICdzaW5nbGUnO1xuICAgIHRoaXMuZGlyZWN0aW9uVHlwZSA9IG9iai5kaXJlY3Rpb25UeXBlIHx8ICdob3Jpem9udGFsJztcbiAgICB0aGlzLnN0ZXAgPSBvYmouc3RlcCB8fCAyO1xuXG4gICAgdGhpcy5zdHlsZSA9IG9iai5zdHlsZSB8fCAnaXNzJztcbiAgfVxuXG4gIGdldFN0YXJ0aW5nQ29uZGl0aW9ucyA9ICgpID0+ICh7XG4gICAgZWxlbWVudElkOiB0aGlzLmVsZW1lbnRJZCxcbiAgICBzaWduOiB0aGlzLnNpZ24sXG4gICAgbG93ZXJTY2FsZUJvdW5kOiB0aGlzLmxvd2VyU2NhbGVCb3VuZCxcbiAgICB1cHBlclNjYWxlQm91bmQ6IHRoaXMudXBwZXJTY2FsZUJvdW5kLFxuICAgIGxvd2VyU2xpZGVyVmFsdWU6IHRoaXMubG93ZXJTbGlkZXJWYWx1ZSxcbiAgICB1cHBlclNsaWRlclZhbHVlOiB0aGlzLnVwcGVyU2xpZGVyVmFsdWUsXG4gICAgc2xpZGVyVHlwZTogdGhpcy5zbGlkZXJUeXBlLFxuICAgIHN0ZXA6IHRoaXMuc3RlcCxcbiAgfSk7XG5cbiAgaW5pdCA9ICgpID0+IHtcbiAgICB0aGlzLmNyZWF0ZURPTSgpO1xuICAgIHRoaXMud3JpdGVET00oKTtcbiAgICB0aGlzLndyaXRlR2VvbWV0cnlET010b1ZhcmlhYmxlcygpO1xuICAgIHRoaXMuY3JlYXRlTGlzdGVuZXJPblNsaWRlcigpO1xuICAgIHRoaXMubW92ZXNTbGlkZXJzVG9TdGFydFBvc2l0aW9ucygpO1xuICAgIHRoaXMud3JpdGVNb25leVRvRmllbGRzKCk7XG4gICAgdGhpcy5tb3ZlVG9vbHRpcCgpO1xuICB9XG5cbiAgY3JlYXRlRE9NID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLnNsaWRlclR5cGUgPT09ICdkb3VibGUnKSB7XG4gICAgICB0aGlzLmNyZWF0ZURvdWJsZURPTSgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5zbGlkZXJUeXBlID09PSAnc2luZ2xlJykge1xuICAgICAgdGhpcy5jcmVhdGVTaW5nbGVET00oKTtcbiAgICB9XG4gIH1cblxuICBjcmVhdGVTaW5nbGVET00gPSAoKSA9PiB7XG4gICAgdGhpcy5lbGVtLmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwiJHt0aGlzLnN0eWxlfV9fdmFsdWUtZmllbGRcIj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiJHt0aGlzLnN0eWxlfV9fc3RhdGljRmllbGRcIj48L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9IFwiJHt0aGlzLnN0eWxlfV9fY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzPSBcIiR7dGhpcy5zdHlsZX1fX3NjYWxlXCI+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiJHt0aGlzLnN0eWxlfV9fY29sb3ItYmFyXCI+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiJHt0aGlzLnN0eWxlfV9fc2luZ2xlX2ZseS12YWx1ZSAke3RoaXMuc3R5bGV9X190b29sdGlwXCI+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiJHt0aGlzLnN0eWxlfV9fc2luZ2xlICR7dGhpcy5zdHlsZX1fX2RyYWdcIj48L2Rpdj5cbiAgICAgIDwvZGl2PidgO1xuICB9XG5cbiAgY3JlYXRlRG91YmxlRE9NID0gKCkgPT4ge1xuICAgIHRoaXMuZWxlbS5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cIiR7dGhpcy5zdHlsZX1fX3ZhbHVlLWZpZWxkXCI+XG4gICAgICA8c3BhbiBjbGFzcz1cIiR7dGhpcy5zdHlsZX1fX3N0YXRpY0ZpZWxkXCI+PC9zcGFuPlxuICAgICAgLVxuICAgICAgPHNwYW4gY2xhc3M9XCIke3RoaXMuc3R5bGV9X19zdGF0aWNGaWVsZFwiPjwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz0gXCIke3RoaXMuc3R5bGV9X19jb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9IFwiJHt0aGlzLnN0eWxlfV9fc2NhbGVcIj48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCIke3RoaXMuc3R5bGV9X19kb3VibGVfZmx5LXZhbHVlLTEgJHt0aGlzLnN0eWxlfV9fdG9vbHRpcFwiPjwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cIiR7dGhpcy5zdHlsZX1fX2RvdWJsZV8xX2hvcml6b250YWwgJHt0aGlzLnN0eWxlfV9fZHJhZ1wiPjwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cIiR7dGhpcy5zdHlsZX1fX2RvdWJsZV9mbHktdmFsdWUtMiAke3RoaXMuc3R5bGV9X190b29sdGlwXCI+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiJHt0aGlzLnN0eWxlfV9fZG91YmxlXzJfaG9yaXpvbnRhbCAke3RoaXMuc3R5bGV9X19kcmFnXCI+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiJHt0aGlzLnN0eWxlfV9fY29sb3ItYmFyXCI+PC9kaXY+XG4gICAgICA8L2Rpdj5gO1xuICB9XG5cbiAgd3JpdGVET00gPSAoKSA9PiB7XG4gICAgdGhpcy5jaGVja0VsZW1lbnRzSW5ET00oKTtcbiAgICBpZiAodGhpcy5zbGlkZXJUeXBlID09PSAnc2luZ2xlJykge1xuICAgICAgdGhpcy53cml0ZVNpbmdsZURPTXRvVmFyaWFibGVzKCk7XG4gICAgICB0aGlzLndyaXRlU2luZ2xlU2xpZGVySW5kZW50KCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnNsaWRlclR5cGUgPT09ICdkb3VibGUnKSB7XG4gICAgICB0aGlzLndyaXRlRG91YmxlRE9NdG9WYXJpYWJsZXMoKTtcbiAgICAgIHRoaXMud3JpdGVEb3VibGVTbGlkZXJJbmRlbnQoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNoZWNrRWxlbWVudHNJbkRPTSA9ICgpID0+IHtcbiAgICBjb25zdCBET01FbGVtZW50cyA9IHRoaXMuZWxlbS5xdWVyeVNlbGVjdG9yQWxsKGAuJHt0aGlzLnN0eWxlfV9fZHJhZ2ApO1xuICAgIGlmICgoRE9NRWxlbWVudHMubGVuZ3RoID4gMCkpIHtcbiAgICAgIHRoaXMuc2xpZGVySW5ET00gPSBET01FbGVtZW50cztcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHdyaXRlU2luZ2xlRE9NdG9WYXJpYWJsZXMgPSAoKSA9PiB7XG4gICAgW3RoaXMuc2NhbGVdID0gdGhpcy5yZXR1cm5FbGVtZW50c0Zyb21ET00oYC4ke3RoaXMuc3R5bGV9X19zY2FsZWAsIDEpO1xuICAgIFt0aGlzLnNpbmdsZVNsaWRlcl0gPSB0aGlzLnJldHVybkVsZW1lbnRzRnJvbURPTShgLiR7dGhpcy5zdHlsZX1fX2RyYWdgLCAxKTtcbiAgICBbdGhpcy5zdGF0aWNGaWVsZFNpbmdsZV0gPSB0aGlzLnJldHVybkVsZW1lbnRzRnJvbURPTShgLiR7dGhpcy5zdHlsZX1fX3N0YXRpY0ZpZWxkYCwgMSk7XG4gICAgW3RoaXMuZmx5RmllbGRTaW5nbGVdID0gdGhpcy5yZXR1cm5FbGVtZW50c0Zyb21ET00oYC4ke3RoaXMuc3R5bGV9X190b29sdGlwYCwgMSk7XG4gICAgW3RoaXMucmliYm9uXSA9IHRoaXMucmV0dXJuRWxlbWVudHNGcm9tRE9NKGAuJHt0aGlzLnN0eWxlfV9fY29sb3ItYmFyYCwgMSk7XG4gIH1cblxuICBwcml2YXRlIHdyaXRlRG91YmxlRE9NdG9WYXJpYWJsZXMgPSAoKSA9PiB7XG4gICAgW3RoaXMuc2NhbGVdID0gdGhpcy5yZXR1cm5FbGVtZW50c0Zyb21ET00oYC4ke3RoaXMuc3R5bGV9X19zY2FsZWAsIDEpO1xuICAgIFt0aGlzLmxvd2VyU2xpZGVyLCB0aGlzLnVwcGVyU2xpZGVyXSA9IHRoaXMucmV0dXJuRWxlbWVudHNGcm9tRE9NKGAuJHt0aGlzLnN0eWxlfV9fZHJhZ2AsIDIpO1xuICAgIFt0aGlzLnN0YXRpY0ZpZWxkTG93ZXIsIHRoaXMuc3RhdGljRmllbGRVcHBlcl0gPSB0aGlzLnJldHVybkVsZW1lbnRzRnJvbURPTShgLiR7dGhpcy5zdHlsZX1fX3N0YXRpY0ZpZWxkYCwgMik7XG4gICAgW3RoaXMuZmx5RmllbGRMb3dlciwgdGhpcy5mbHlGaWVsZFVwcGVyXSA9IHRoaXMucmV0dXJuRWxlbWVudHNGcm9tRE9NKGAuJHt0aGlzLnN0eWxlfV9fdG9vbHRpcGAsIDIpO1xuICAgIFt0aGlzLnJpYmJvbl0gPSB0aGlzLnJldHVybkVsZW1lbnRzRnJvbURPTShgLiR7dGhpcy5zdHlsZX1fX2NvbG9yLWJhcmAsIDEpO1xuICB9XG5cbiAgcHJpdmF0ZSB3cml0ZVNpbmdsZVNsaWRlckluZGVudCA9ICgpID0+IHtcbiAgICBjb25zdCBlbGVtID0gdGhpcy5yZXR1cm5FbGVtZW50c0Zyb21ET00oYC4ke3RoaXMuc3R5bGV9X19kcmFnYCwgMSk7XG4gICAgdGhpcy5zaW5nbGVTbGlkZXJQb3NpdGlvbiA9IHRoaXMucmV0dXJuSW5kZW50KGVsZW1bMF0pO1xuICB9XG5cbiAgcHJpdmF0ZSB3cml0ZURvdWJsZVNsaWRlckluZGVudCA9ICgpID0+IHtcbiAgICBjb25zdCBlbGVtcyA9IHRoaXMucmV0dXJuRWxlbWVudHNGcm9tRE9NKGAuJHt0aGlzLnN0eWxlfV9fZHJhZ2AsIDIpO1xuICAgIHRoaXMubG93ZXJTbGlkZXJQb3NpdGlvbiA9IHRoaXMucmV0dXJuSW5kZW50KGVsZW1zWzBdKTtcbiAgICB0aGlzLnVwcGVyU2xpZGVyUG9zaXRpb24gPSB0aGlzLnJldHVybkluZGVudChlbGVtc1sxXSk7XG4gIH1cblxuICBwcml2YXRlIHJldHVybkluZGVudCA9IChlbGVtZW50OiBIVE1MRWxlbWVudCkgPT4ge1xuICAgIGlmICh0aGlzLmRpcmVjdGlvblR5cGUgPT09ICdob3Jpem9udGFsJykge1xuICAgICAgcmV0dXJuIGVsZW1lbnQub2Zmc2V0TGVmdDtcbiAgICB9IGlmICh0aGlzLmRpcmVjdGlvblR5cGUgPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgIHJldHVybiBlbGVtZW50Lm9mZnNldFRvcDtcbiAgICB9XG4gIH07XG5cbiAgcHJpdmF0ZSByZXR1cm5FbGVtZW50c0Zyb21ET00gPSAoY2xhc3NOYW1lOiBzdHJpbmcsIGxlbmd0aDogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgRE9NRWxlbWVudHMgPSB0aGlzLmVsZW0ucXVlcnlTZWxlY3RvckFsbChjbGFzc05hbWUpO1xuICAgIGlmICgoRE9NRWxlbWVudHMubGVuZ3RoID09PSBsZW5ndGgpKSB7XG4gICAgICByZXR1cm4gRE9NRWxlbWVudHM7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHdyaXRlR2VvbWV0cnlET010b1ZhcmlhYmxlcyA9ICgpID0+IHtcbiAgICB0aGlzLnNldERpcmVjdGlvbigpO1xuICAgIHRoaXMud3JpdGVHZW9tZXRyeU9mU2xpZGVyKCk7XG4gIH1cblxuICBwcml2YXRlIHNldERpcmVjdGlvbiA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5kaXJlY3Rpb25UeXBlID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgIHRoaXMubWFpbkF4aXNTaXplID0gdGhpcy5zY2FsZS5vZmZzZXRXaWR0aDtcbiAgICB9XG4gICAgaWYgKHRoaXMuZGlyZWN0aW9uVHlwZSA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgdGhpcy5tYWluQXhpc1NpemUgPSB0aGlzLnNjYWxlLm9mZnNldEhlaWdodDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHdyaXRlR2VvbWV0cnlPZlNsaWRlciA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5zbGlkZXJUeXBlID09PSAnc2luZ2xlJykge1xuICAgICAgdGhpcy5zbGlkZXJXaWR0aCA9IHRoaXMuc2luZ2xlU2xpZGVyLm9mZnNldFdpZHRoO1xuICAgICAgdGhpcy5zbGlkZXJIZWlnaHQgPSB0aGlzLnNpbmdsZVNsaWRlci5vZmZzZXRIZWlnaHQ7XG4gICAgfSBlbHNlIGlmICh0aGlzLnNsaWRlclR5cGUgPT09ICdkb3VibGUnKSB7XG4gICAgICB0aGlzLnNsaWRlcldpZHRoID0gdGhpcy5sb3dlclNsaWRlci5vZmZzZXRXaWR0aDtcbiAgICAgIHRoaXMuc2xpZGVySGVpZ2h0ID0gdGhpcy5sb3dlclNsaWRlci5vZmZzZXRIZWlnaHQ7XG4gICAgfVxuICAgIHRoaXMuY2FsY1BpeGVsU3RlcCgpO1xuICB9XG5cbiAgY2FsY1BpeGVsU3RlcCA9ICgpID0+IHtcbiAgICBjb25zdCBzdGVwSW5QaXhlbCA9ICh0aGlzLm1haW5BeGlzU2l6ZSAvICh0aGlzLnVwcGVyU2NhbGVCb3VuZCAtIHRoaXMubG93ZXJTY2FsZUJvdW5kKSkgKiB0aGlzLnN0ZXA7XG4gICAgaWYgKHN0ZXBJblBpeGVsIDwgMSkge1xuICAgICAgdGhpcy5waXhlbFN0ZXAgPSAxO1xuICAgICAgdGhpcy5yb3VuZGVkUGl4ZWxTdGVwID0gMTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5waXhlbFN0ZXAgPSBzdGVwSW5QaXhlbDtcbiAgICAgIHRoaXMucm91bmRlZFBpeGVsU3RlcCA9IE1hdGgucm91bmQoc3RlcEluUGl4ZWwpO1xuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZUxpc3RlbmVyT25TbGlkZXIgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuc2xpZGVyVHlwZSA9PT0gJ3NpbmdsZScpIHtcbiAgICAgIHRoaXMuc2luZ2xlU2xpZGVyLm9ubW91c2Vkb3duID0gdGhpcy5ldmVudE9uU2xpZGVyO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zbGlkZXJUeXBlID09PSAnZG91YmxlJykge1xuICAgICAgdGhpcy5sb3dlclNsaWRlci5vbm1vdXNlZG93biA9IHRoaXMuZXZlbnRPblNsaWRlcjtcbiAgICAgIHRoaXMudXBwZXJTbGlkZXIub25tb3VzZWRvd24gPSB0aGlzLmV2ZW50T25TbGlkZXI7XG4gICAgfVxuICB9XG5cbiAgbW92ZXNTbGlkZXJzVG9TdGFydFBvc2l0aW9ucyA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5zbGlkZXJUeXBlID09PSAnc2luZ2xlJykge1xuICAgICAgdGhpcy5zZXRTaW5nbGVUb1N0YXJ0UG9zaXRpb24oKTtcbiAgICAgIHRoaXMubW92ZVJpYmJvbigpO1xuICAgIH1cbiAgICBpZiAodGhpcy5zbGlkZXJUeXBlID09PSAnZG91YmxlJykge1xuICAgICAgdGhpcy5zZXRzRG91YmxlVG9TdGFydFBvc3Rpb25zKCk7XG4gICAgICB0aGlzLm1vdmVSaWJib24oKTtcbiAgICB9XG4gIH1cblxuICBzZXRTaW5nbGVUb1N0YXJ0UG9zaXRpb24gPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuZGlyZWN0aW9uVHlwZSA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICB0aGlzLnNpbmdsZVNsaWRlci5zdHlsZS5sZWZ0ID0gYCR7dGhpcy5jYWxjTW9uZXlUb1Bvc2l0aW9uKHRoaXMubG93ZXJTbGlkZXJWYWx1ZSl9cHhgO1xuICAgIH1cbiAgICBpZiAodGhpcy5kaXJlY3Rpb25UeXBlID09PSAndmVydGljYWwnKSB7XG4gICAgICB0aGlzLnNpbmdsZVNsaWRlci5zdHlsZS50b3AgPSBgJHt0aGlzLmNhbGNNb25leVRvUG9zaXRpb24odGhpcy5sb3dlclNsaWRlclZhbHVlKX1weGA7XG4gICAgfVxuICB9XG5cbiAgc2V0c0RvdWJsZVRvU3RhcnRQb3N0aW9ucyA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5sb3dlclNjYWxlQm91bmQgPD0gdGhpcy5sb3dlclNsaWRlclZhbHVlICYmIHRoaXMudXBwZXJTY2FsZUJvdW5kID49IHRoaXMudXBwZXJTbGlkZXJWYWx1ZSkge1xuICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uVHlwZSA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgIHRoaXMubG93ZXJTbGlkZXIuc3R5bGUubGVmdCA9IGAke3RoaXMuY2FsY01vbmV5VG9Qb3NpdGlvbih0aGlzLmxvd2VyU2xpZGVyVmFsdWUpfXB4YDtcbiAgICAgICAgdGhpcy51cHBlclNsaWRlci5zdHlsZS5sZWZ0ID0gYCR7dGhpcy5jYWxjTW9uZXlUb1Bvc2l0aW9uKHRoaXMudXBwZXJTbGlkZXJWYWx1ZSl9cHhgO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uVHlwZSA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgICB0aGlzLmxvd2VyU2xpZGVyLnN0eWxlLnRvcCA9IGAke3RoaXMuY2FsY01vbmV5VG9Qb3NpdGlvbih0aGlzLnVwcGVyU2xpZGVyVmFsdWUpfXB4YDtcbiAgICAgICAgdGhpcy51cHBlclNsaWRlci5zdHlsZS50b3AgPSBgJHt0aGlzLmNhbGNNb25leVRvUG9zaXRpb24odGhpcy5sb3dlclNsaWRlclZhbHVlKX1weGA7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgd3JpdGVNb25leVRvRmllbGRzID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLnNsaWRlclR5cGUgPT09ICdzaW5nbGUnKSB7XG4gICAgICB0aGlzLnN0YXRpY0ZpZWxkU2luZ2xlLmlubmVyVGV4dCA9IGAke3RoaXMubG93ZXJTbGlkZXJWYWx1ZX0ke3RoaXMuc2lnbn1gO1xuICAgICAgdGhpcy5mbHlGaWVsZFNpbmdsZS5pbm5lclRleHQgPSBgJHt0aGlzLmxvd2VyU2xpZGVyVmFsdWV9JHt0aGlzLnNpZ259YDtcbiAgICB9XG4gICAgaWYgKHRoaXMuc2xpZGVyVHlwZSA9PT0gJ2RvdWJsZScpIHtcbiAgICAgIHRoaXMuc3RhdGljRmllbGRMb3dlci5pbm5lclRleHQgPSBgJHt0aGlzLmxvd2VyU2xpZGVyVmFsdWV9JHt0aGlzLnNpZ259YDtcbiAgICAgIHRoaXMuc3RhdGljRmllbGRVcHBlci5pbm5lclRleHQgPSBgJHt0aGlzLnVwcGVyU2xpZGVyVmFsdWV9JHt0aGlzLnNpZ259YDtcblxuICAgICAgdGhpcy5mbHlGaWVsZExvd2VyLmlubmVyVGV4dCA9IGAke3RoaXMubG93ZXJTbGlkZXJWYWx1ZX0ke3RoaXMuc2lnbn1gO1xuICAgICAgdGhpcy5mbHlGaWVsZFVwcGVyLmlubmVyVGV4dCA9IGAke3RoaXMudXBwZXJTbGlkZXJWYWx1ZX0ke3RoaXMuc2lnbn1gO1xuICAgIH1cbiAgfVxuXG4gIGNhbGNNb25leVRvUG9zaXRpb24obW9uZXk6IG51bWJlcikge1xuICAgIGxldCBwb3NpdGlvbjogbnVtYmVyO1xuICAgIGlmICh0aGlzLmRpcmVjdGlvblR5cGUgPT09ICdob3Jpem9udGFsJykge1xuICAgICAgcG9zaXRpb24gPSAoKG1vbmV5IC0gdGhpcy5sb3dlclNjYWxlQm91bmQpIC8gdGhpcy5zdGVwKSAqIHRoaXMucGl4ZWxTdGVwO1xuICAgIH1cbiAgICBpZiAodGhpcy5kaXJlY3Rpb25UeXBlID09PSAndmVydGljYWwnKSB7XG4gICAgICBwb3NpdGlvbiA9IHRoaXMubWFpbkF4aXNTaXplIC0gKCgobW9uZXkgLSB0aGlzLmxvd2VyU2NhbGVCb3VuZCkgLyB0aGlzLnN0ZXApICogdGhpcy5waXhlbFN0ZXApO1xuICAgIH1cbiAgICByZXR1cm4gcG9zaXRpb247XG4gIH1cblxuICBwcml2YXRlIGV2ZW50T25TbGlkZXIgPSAoX2U6IEV2ZW50KSA9PiB7XG4gICAgX2UucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnNldFJlc3RyaWN0aW9uT2ZTbGlkZXJNb3ZlbWVudChfZSk7XG4gICAgZG9jdW1lbnQub25tb3VzZXVwID0gdGhpcy5jYW5jZWxFdmVudHM7XG4gICAgZG9jdW1lbnQub25tb3VzZW1vdmUgPSB0aGlzLm1vdmVFdmVudFdpdGhIb2xkTW91c2U7XG4gIH1cblxuICBwcml2YXRlIHNldFJlc3RyaWN0aW9uT2ZTbGlkZXJNb3ZlbWVudCA9IChfZTogRXZlbnQpID0+IHtcbiAgICBpZiAodGhpcy5zbGlkZXJUeXBlID09PSAnZG91YmxlJykge1xuICAgICAgdGhpcy5zZXRSZXN0cmljdGlvbkZvckRvdWJsZVNsaWRlcihfZSk7XG4gICAgfVxuICAgIGlmICh0aGlzLnNsaWRlclR5cGUgPT09ICdzaW5nbGUnKSB7XG4gICAgICB0aGlzLnNldFJlc3RyaWN0aW9uRm9yU2luZ2xlU2xpZGVyKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRSZXN0cmljdGlvbkZvckRvdWJsZVNsaWRlciA9IChfZTogRXZlbnQpID0+IHtcbiAgICBpZiAodGhpcy5kaXJlY3Rpb25UeXBlID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgIGlmIChfZS50YXJnZXQgPT09IHRoaXMubG93ZXJTbGlkZXIpIHtcbiAgICAgICAgdGhpcy50YXJnZXRTbGlkZXIgPSB0aGlzLmxvd2VyU2xpZGVyO1xuICAgICAgICB0aGlzLmxvd2VyUmVzdHJpY3Rpb24gPSAwO1xuICAgICAgICB0aGlzLnVwcGVyUmVzdHJpY3Rpb24gPSB0aGlzLnVwcGVyU2xpZGVyUG9zaXRpb247XG4gICAgICAgIHRoaXMubG93ZXJDb3N0UmVzdHJpY3Rpb24gPSB0aGlzLmxvd2VyU2NhbGVCb3VuZDtcbiAgICAgICAgdGhpcy51cHBlckNvc3RSZXN0cmljdGlvbiA9IHRoaXMuZ2V0Q29zdEZvclNsaWRlcih0aGlzLnVwcGVyUmVzdHJpY3Rpb24pO1xuICAgICAgfVxuICAgICAgaWYgKF9lLnRhcmdldCA9PT0gdGhpcy51cHBlclNsaWRlcikge1xuICAgICAgICB0aGlzLnRhcmdldFNsaWRlciA9IHRoaXMudXBwZXJTbGlkZXI7XG4gICAgICAgIHRoaXMubG93ZXJSZXN0cmljdGlvbiA9IHRoaXMubG93ZXJTbGlkZXJQb3NpdGlvbjtcbiAgICAgICAgdGhpcy51cHBlclJlc3RyaWN0aW9uID0gdGhpcy5tYWluQXhpc1NpemU7XG4gICAgICAgIHRoaXMubG93ZXJDb3N0UmVzdHJpY3Rpb24gPSB0aGlzLmdldENvc3RGb3JTbGlkZXIodGhpcy5sb3dlclJlc3RyaWN0aW9uKTtcbiAgICAgICAgdGhpcy51cHBlckNvc3RSZXN0cmljdGlvbiA9IHRoaXMudXBwZXJTY2FsZUJvdW5kO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5kaXJlY3Rpb25UeXBlID09PSAndmVydGljYWwnKSB7XG4gICAgICBpZiAoX2UudGFyZ2V0ID09PSB0aGlzLmxvd2VyU2xpZGVyKSB7XG4gICAgICAgIHRoaXMudGFyZ2V0U2xpZGVyID0gdGhpcy5sb3dlclNsaWRlcjtcbiAgICAgICAgdGhpcy5sb3dlclJlc3RyaWN0aW9uID0gMDtcbiAgICAgICAgdGhpcy51cHBlclJlc3RyaWN0aW9uID0gdGhpcy51cHBlclNsaWRlclBvc2l0aW9uO1xuICAgICAgICB0aGlzLmxvd2VyQ29zdFJlc3RyaWN0aW9uID0gdGhpcy5nZXRDb3N0Rm9yU2xpZGVyKHRoaXMubG93ZXJSZXN0cmljdGlvbik7XG4gICAgICAgIHRoaXMudXBwZXJDb3N0UmVzdHJpY3Rpb24gPSB0aGlzLmdldENvc3RGb3JTbGlkZXIodGhpcy51cHBlclJlc3RyaWN0aW9uKTtcbiAgICAgIH1cbiAgICAgIGlmIChfZS50YXJnZXQgPT09IHRoaXMudXBwZXJTbGlkZXIpIHtcbiAgICAgICAgdGhpcy50YXJnZXRTbGlkZXIgPSB0aGlzLnVwcGVyU2xpZGVyO1xuICAgICAgICB0aGlzLmxvd2VyUmVzdHJpY3Rpb24gPSB0aGlzLmxvd2VyU2xpZGVyUG9zaXRpb247XG4gICAgICAgIHRoaXMudXBwZXJSZXN0cmljdGlvbiA9IHRoaXMubWFpbkF4aXNTaXplO1xuICAgICAgICB0aGlzLmxvd2VyQ29zdFJlc3RyaWN0aW9uID0gdGhpcy5nZXRDb3N0Rm9yU2xpZGVyKHRoaXMubG93ZXJSZXN0cmljdGlvbik7XG4gICAgICAgIHRoaXMudXBwZXJDb3N0UmVzdHJpY3Rpb24gPSB0aGlzLmdldENvc3RGb3JTbGlkZXIodGhpcy51cHBlclJlc3RyaWN0aW9uKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNldFJlc3RyaWN0aW9uRm9yU2luZ2xlU2xpZGVyID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLmRpcmVjdGlvblR5cGUgPT09ICdob3Jpem9udGFsJykge1xuICAgICAgdGhpcy50YXJnZXRTbGlkZXIgPSB0aGlzLnNpbmdsZVNsaWRlcjtcbiAgICAgIHRoaXMubG93ZXJSZXN0cmljdGlvbiA9IDA7XG4gICAgICB0aGlzLnVwcGVyUmVzdHJpY3Rpb24gPSB0aGlzLm1haW5BeGlzU2l6ZTtcbiAgICAgIHRoaXMubG93ZXJDb3N0UmVzdHJpY3Rpb24gPSB0aGlzLmxvd2VyU2NhbGVCb3VuZDtcbiAgICAgIHRoaXMudXBwZXJDb3N0UmVzdHJpY3Rpb24gPSB0aGlzLnVwcGVyU2NhbGVCb3VuZDtcbiAgICB9XG4gICAgaWYgKHRoaXMuZGlyZWN0aW9uVHlwZSA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgdGhpcy50YXJnZXRTbGlkZXIgPSB0aGlzLnNpbmdsZVNsaWRlcjtcbiAgICAgIHRoaXMubG93ZXJSZXN0cmljdGlvbiA9IDA7XG4gICAgICB0aGlzLnVwcGVyUmVzdHJpY3Rpb24gPSB0aGlzLm1haW5BeGlzU2l6ZTtcbiAgICAgIHRoaXMubG93ZXJDb3N0UmVzdHJpY3Rpb24gPSB0aGlzLnVwcGVyU2NhbGVCb3VuZDtcbiAgICAgIHRoaXMudXBwZXJDb3N0UmVzdHJpY3Rpb24gPSB0aGlzLmxvd2VyU2NhbGVCb3VuZDtcbiAgICB9XG4gIH1cblxuICBnZXRDb3N0Rm9yU2xpZGVyID0gKHNsaWRlclBvc3Rpb25JblBpeGVsOiBudW1iZXIpID0+IHtcbiAgICBpZiAodGhpcy5kaXJlY3Rpb25UeXBlID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgIGlmIChzbGlkZXJQb3N0aW9uSW5QaXhlbCA8PSAwKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvd2VyU2NhbGVCb3VuZDtcbiAgICAgIH1cbiAgICAgIHJldHVybiAodGhpcy5sb3dlclNjYWxlQm91bmQgKyAoTWF0aC5yb3VuZChzbGlkZXJQb3N0aW9uSW5QaXhlbCAvIHRoaXMucGl4ZWxTdGVwKSAqIHRoaXMuc3RlcCkpO1xuICAgIH1cbiAgICBpZiAodGhpcy5kaXJlY3Rpb25UeXBlID09PSAndmVydGljYWwnKSB7XG4gICAgICBpZiAoc2xpZGVyUG9zdGlvbkluUGl4ZWwgPD0gMCkge1xuICAgICAgICByZXR1cm4gdGhpcy51cHBlclNjYWxlQm91bmQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gKChNYXRoLnJvdW5kKCh0aGlzLm1haW5BeGlzU2l6ZSAtIHNsaWRlclBvc3Rpb25JblBpeGVsKSAvIHRoaXMucGl4ZWxTdGVwKSAqIHRoaXMuc3RlcCkgKyB0aGlzLmxvd2VyU2NhbGVCb3VuZCk7XG4gICAgfVxuICB9XG5cbiAgbW92ZUV2ZW50V2l0aEhvbGRNb3VzZSA9IChfZTogTW91c2VFdmVudCkgPT4ge1xuICAgIGNvbnN0IGlubmVyTW91c2VQb3NpdGlvbiA9IHRoaXMuZ2V0TW91c2VQb3NpdGlvbihfZSk7XG5cbiAgICBjb25zdCBuZWFyZXN0Um91bmRlZFN0ZXAgPSB0aGlzLmNhbGNOZWFyZXN0U3RlcChpbm5lck1vdXNlUG9zaXRpb24pO1xuXG4gICAgY29uc3QgZmluYWxQb3NpdGlvbkluUGl4ZWwgPSB0aGlzLmNhbGNGaW5hbFBvc2l0aW9uKG5lYXJlc3RSb3VuZGVkU3RlcCk7XG5cbiAgICBjb25zdCBmaW5hbENvc3QgPSB0aGlzLmNhbGNGaW5hbENvc3QobmVhcmVzdFJvdW5kZWRTdGVwKTtcblxuICAgIHRoaXMubW92ZVNsaWRlcihmaW5hbFBvc2l0aW9uSW5QaXhlbCk7XG5cbiAgICB0aGlzLnNob3dNb25leU9uU2NyZWVuKGZpbmFsQ29zdCk7XG5cbiAgICB0aGlzLndyaXRlTW9uZXlUb1ZhcmlhYmxlcyhmaW5hbENvc3QpO1xuXG4gICAgdGhpcy5zZXRPdmVybGF5KCk7XG5cbiAgICB0aGlzLm1vdmVSaWJib24oKTtcblxuICAgIHRoaXMubW92ZVRvb2x0aXAoKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0TW91c2VQb3NpdGlvbiA9IChfZTogTW91c2VFdmVudCkgPT4ge1xuICAgIHRoaXMuY2xpZW50UmVjdCA9IHRoaXMuc2NhbGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgaWYgKHRoaXMuZGlyZWN0aW9uVHlwZSA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICB0aGlzLmluZGVudCA9IHRoaXMuY2xpZW50UmVjdC5sZWZ0O1xuICAgICAgcmV0dXJuIChfZS5jbGllbnRYIC0gdGhpcy5pbmRlbnQgLSAodGhpcy5zbGlkZXJXaWR0aCAvIDIpKTtcbiAgICB9IGlmICh0aGlzLmRpcmVjdGlvblR5cGUgPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgIHRoaXMuaW5kZW50ID0gdGhpcy5jbGllbnRSZWN0LnRvcDtcbiAgICAgIHJldHVybiAoX2UuY2xpZW50WSAtIHRoaXMuaW5kZW50IC0gKHRoaXMuc2xpZGVySGVpZ2h0IC8gMikpO1xuICAgIH1cbiAgfVxuXG4gIGNhbGNOZWFyZXN0U3RlcCA9IChfcG9zaXRpb25JblBpeGVsOiBudW1iZXIpID0+IHtcbiAgICBpZiAodGhpcy5kaXJlY3Rpb25UeXBlID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgIHJldHVybiBNYXRoLnJvdW5kKF9wb3NpdGlvbkluUGl4ZWwgLyB0aGlzLnBpeGVsU3RlcCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmRpcmVjdGlvblR5cGUgPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgIHJldHVybiBNYXRoLnJvdW5kKCh0aGlzLm1haW5BeGlzU2l6ZSAtIF9wb3NpdGlvbkluUGl4ZWwpIC8gdGhpcy5waXhlbFN0ZXApO1xuICAgIH1cbiAgfVxuXG4gIGNhbGNGaW5hbFBvc2l0aW9uID0gKF9uZWFyZXN0Um91bmRlZFN0ZXA6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IHBvc2l0aW9uSW5QaXhlbCA9IF9uZWFyZXN0Um91bmRlZFN0ZXAgKiB0aGlzLnBpeGVsU3RlcDtcbiAgICBpZiAodGhpcy5kaXJlY3Rpb25UeXBlID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgIGlmICh0aGlzLmlzUGl4ZWxzSW5Cb3JkZXIocG9zaXRpb25JblBpeGVsKSkge1xuICAgICAgICByZXR1cm4gcG9zaXRpb25JblBpeGVsO1xuICAgICAgfVxuICAgICAgaWYgKHBvc2l0aW9uSW5QaXhlbCA8PSB0aGlzLmxvd2VyUmVzdHJpY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubG93ZXJSZXN0cmljdGlvbjtcbiAgICAgIH1cbiAgICAgIGlmIChwb3NpdGlvbkluUGl4ZWwgPj0gdGhpcy51cHBlclJlc3RyaWN0aW9uKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVwcGVyUmVzdHJpY3Rpb247XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLmRpcmVjdGlvblR5cGUgPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgIGlmICh0aGlzLmlzUGl4ZWxzSW5Cb3JkZXIoKHRoaXMubWFpbkF4aXNTaXplIC0gcG9zaXRpb25JblBpeGVsKSkpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLm1haW5BeGlzU2l6ZSAtIHBvc2l0aW9uSW5QaXhlbCk7XG4gICAgICB9XG4gICAgICBpZiAoKHRoaXMubWFpbkF4aXNTaXplIC0gcG9zaXRpb25JblBpeGVsKSA8PSB0aGlzLmxvd2VyUmVzdHJpY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubG93ZXJSZXN0cmljdGlvbjtcbiAgICAgIH1cbiAgICAgIGlmICgodGhpcy5tYWluQXhpc1NpemUgLSBwb3NpdGlvbkluUGl4ZWwpID49IHRoaXMudXBwZXJSZXN0cmljdGlvbikge1xuICAgICAgICByZXR1cm4gdGhpcy51cHBlclJlc3RyaWN0aW9uO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNhbGNGaW5hbENvc3QgPSAoX25lYXJlc3RSb3VuZGVkU3RlcDogbnVtYmVyKSA9PiB7XG4gICAgaWYgKHRoaXMuZGlyZWN0aW9uVHlwZSA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICBjb25zdCBwb3NpdGlvbkluTW9uZXkgPSB0aGlzLmxvd2VyU2NhbGVCb3VuZCArIChfbmVhcmVzdFJvdW5kZWRTdGVwICogdGhpcy5zdGVwKTtcblxuICAgICAgaWYgKHRoaXMuaXNNb25leUluQm9yZGVyKHBvc2l0aW9uSW5Nb25leSkpIHtcbiAgICAgICAgcmV0dXJuIHBvc2l0aW9uSW5Nb25leTtcbiAgICAgIH1cbiAgICAgIGlmIChwb3NpdGlvbkluTW9uZXkgPCB0aGlzLmxvd2VyQ29zdFJlc3RyaWN0aW9uKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvd2VyQ29zdFJlc3RyaWN0aW9uO1xuICAgICAgfVxuICAgICAgaWYgKHBvc2l0aW9uSW5Nb25leSA+IHRoaXMudXBwZXJDb3N0UmVzdHJpY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXBwZXJDb3N0UmVzdHJpY3Rpb247XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLmRpcmVjdGlvblR5cGUgPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgIGNvbnN0IHBvc2l0aW9uSW5Nb25leSA9IChfbmVhcmVzdFJvdW5kZWRTdGVwICogdGhpcy5zdGVwKSArIHRoaXMubG93ZXJTY2FsZUJvdW5kO1xuICAgICAgaWYgKHRoaXMuaXNNb25leUluQm9yZGVyKHBvc2l0aW9uSW5Nb25leSkpIHtcbiAgICAgICAgcmV0dXJuIHBvc2l0aW9uSW5Nb25leTtcbiAgICAgIH1cbiAgICAgIGlmIChwb3NpdGlvbkluTW9uZXkgPiB0aGlzLmxvd2VyQ29zdFJlc3RyaWN0aW9uKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvd2VyQ29zdFJlc3RyaWN0aW9uO1xuICAgICAgfVxuICAgICAgaWYgKHBvc2l0aW9uSW5Nb25leSA8IHRoaXMudXBwZXJDb3N0UmVzdHJpY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXBwZXJDb3N0UmVzdHJpY3Rpb247XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaXNQaXhlbHNJbkJvcmRlciA9IChfcG9zaXRpb246IG51bWJlcikgPT4gKChfcG9zaXRpb24gPj0gdGhpcy5sb3dlclJlc3RyaWN0aW9uKSAmJiAoX3Bvc2l0aW9uIDw9IHRoaXMudXBwZXJSZXN0cmljdGlvbikpXG5cbiAgaXNNb25leUluQm9yZGVyID0gKF9wb3NpdGlvbjogbnVtYmVyKSA9PiB7XG4gICAgaWYgKHRoaXMuZGlyZWN0aW9uVHlwZSA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICByZXR1cm4gKChfcG9zaXRpb24gPj0gdGhpcy5sb3dlckNvc3RSZXN0cmljdGlvbikgJiYgKF9wb3NpdGlvbiA8PSB0aGlzLnVwcGVyQ29zdFJlc3RyaWN0aW9uKSk7XG4gICAgfVxuICAgIGlmICh0aGlzLmRpcmVjdGlvblR5cGUgPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgIHJldHVybiAoKF9wb3NpdGlvbiA8PSB0aGlzLmxvd2VyQ29zdFJlc3RyaWN0aW9uKSAmJiAoX3Bvc2l0aW9uID49IHRoaXMudXBwZXJDb3N0UmVzdHJpY3Rpb24pKTtcbiAgICB9XG4gIH1cblxuICBzaG93TW9uZXlPblNjcmVlbiA9IChmaW5hbENvc3Q6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IGNvc3QgPSBgJHtmaW5hbENvc3R9JHt0aGlzLnNpZ259YDtcbiAgICBpZiAodGhpcy50YXJnZXRTbGlkZXIgPT09IHRoaXMubG93ZXJTbGlkZXIpIHtcbiAgICAgIHRoaXMuc3RhdGljRmllbGRMb3dlci50ZXh0Q29udGVudCA9IGAke2Nvc3R9YDtcbiAgICAgIHRoaXMuZmx5RmllbGRMb3dlci50ZXh0Q29udGVudCA9IGAke2Nvc3R9YDtcbiAgICB9XG4gICAgaWYgKHRoaXMudGFyZ2V0U2xpZGVyID09PSB0aGlzLnVwcGVyU2xpZGVyKSB7XG4gICAgICB0aGlzLnN0YXRpY0ZpZWxkVXBwZXIudGV4dENvbnRlbnQgPSBgJHtjb3N0fWA7XG4gICAgICB0aGlzLmZseUZpZWxkVXBwZXIudGV4dENvbnRlbnQgPSBgJHtjb3N0fWA7XG4gICAgfVxuICAgIGlmICh0aGlzLnRhcmdldFNsaWRlciA9PT0gdGhpcy5zaW5nbGVTbGlkZXIpIHtcbiAgICAgIHRoaXMuc3RhdGljRmllbGRTaW5nbGUudGV4dENvbnRlbnQgPSBgJHtjb3N0fWA7XG4gICAgICB0aGlzLmZseUZpZWxkU2luZ2xlLnRleHRDb250ZW50ID0gYCR7Y29zdH1gO1xuICAgIH1cbiAgfVxuXG4gIHdyaXRlTW9uZXlUb1ZhcmlhYmxlcyA9IChmaW5hbENvc3Q6IG51bWJlcikgPT4ge1xuICAgIGlmICh0aGlzLnRhcmdldFNsaWRlciA9PT0gdGhpcy5sb3dlclNsaWRlcikge1xuICAgICAgdGhpcy5sb3dlclNsaWRlclZhbHVlID0gZmluYWxDb3N0O1xuICAgIH1cbiAgICBpZiAodGhpcy50YXJnZXRTbGlkZXIgPT09IHRoaXMudXBwZXJTbGlkZXIpIHtcbiAgICAgIHRoaXMudXBwZXJTbGlkZXJWYWx1ZSA9IGZpbmFsQ29zdDtcbiAgICB9XG4gICAgaWYgKHRoaXMudGFyZ2V0U2xpZGVyID09PSB0aGlzLnNpbmdsZVNsaWRlcikge1xuICAgICAgdGhpcy5sb3dlclNsaWRlclZhbHVlID0gZmluYWxDb3N0O1xuICAgIH1cbiAgfTtcblxuICBwcml2YXRlIG1vdmVSaWJib24gPSAoKSA9PiB7XG4gICAgY29uc3Qgc2V0SG9yaXpvbnRhbFJpYmJvblZhcmlhYmxlcyA9ICgpID0+IHtcbiAgICAgIGlmICh0aGlzLnNsaWRlckluRE9NLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICB0aGlzLnJpYmJvbi5zdHlsZS5sZWZ0ID0gJzBweCc7XG4gICAgICAgIHRoaXMucmliYm9uLnN0eWxlLndpZHRoID0gYCR7dGhpcy5zaW5nbGVTbGlkZXIub2Zmc2V0TGVmdCArICh0aGlzLnNsaWRlcldpZHRoIC8gMil9cHhgO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnNsaWRlckluRE9NLmxlbmd0aCA9PT0gMikge1xuICAgICAgICB0aGlzLnJpYmJvbi5zdHlsZS5sZWZ0ID0gYCR7dGhpcy5sb3dlclNsaWRlci5vZmZzZXRMZWZ0ICsgKHRoaXMuc2xpZGVyV2lkdGggLyAyKX1weGA7XG4gICAgICAgIHRoaXMucmliYm9uLnN0eWxlLndpZHRoID0gYCR7dGhpcy51cHBlclNsaWRlci5vZmZzZXRMZWZ0IC0gdGhpcy5sb3dlclNsaWRlci5vZmZzZXRMZWZ0fXB4YDtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3Qgc2V0VmVydGljYWxSaWJib25WYXJpYWJsZXMgPSAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5zbGlkZXJJbkRPTS5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgdGhpcy5yaWJib24uc3R5bGUudG9wID0gYCR7dGhpcy5zaW5nbGVTbGlkZXIub2Zmc2V0VG9wICsgKHRoaXMuc2xpZGVySGVpZ2h0IC8gMil9cHhgO1xuICAgICAgICB0aGlzLnJpYmJvbi5zdHlsZS5oZWlnaHQgPSBgJHt0aGlzLm1haW5BeGlzU2l6ZSAtIHRoaXMuc2luZ2xlU2xpZGVyLm9mZnNldFRvcH1weGA7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuc2xpZGVySW5ET00ubGVuZ3RoID09PSAyKSB7XG4gICAgICAgIHRoaXMucmliYm9uLnN0eWxlLnRvcCA9IGAke3RoaXMubG93ZXJTbGlkZXIub2Zmc2V0VG9wICsgKHRoaXMuc2xpZGVySGVpZ2h0IC8gMil9cHhgO1xuICAgICAgICB0aGlzLnJpYmJvbi5zdHlsZS5oZWlnaHQgPSBgJHt0aGlzLnVwcGVyU2xpZGVyLm9mZnNldFRvcCAtIHRoaXMubG93ZXJTbGlkZXIub2Zmc2V0VG9wfXB4YDtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKHRoaXMuZGlyZWN0aW9uVHlwZSA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICBzZXRIb3Jpem9udGFsUmliYm9uVmFyaWFibGVzKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmRpcmVjdGlvblR5cGUgPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgIHNldFZlcnRpY2FsUmliYm9uVmFyaWFibGVzKCk7XG4gICAgfVxuICB9XG5cbiAgbW92ZVNsaWRlciA9IChudW06IG51bWJlcikgPT4ge1xuICAgIGlmICh0aGlzLmRpcmVjdGlvblR5cGUgPT09ICdob3Jpem9udGFsJykge1xuICAgICAgdGhpcy50YXJnZXRTbGlkZXIuc3R5bGUubGVmdCA9IGAke251bX1weGA7XG4gICAgfSBlbHNlIGlmICh0aGlzLmRpcmVjdGlvblR5cGUgPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgIHRoaXMudGFyZ2V0U2xpZGVyLnN0eWxlLnRvcCA9IGAke251bX1weGA7XG4gICAgfVxuICB9XG5cbiAgbW92ZVRvb2x0aXAgPSAoKSA9PiB7XG4gICAgY29uc3QgbW92ZSA9IChkaXJlY3Rpb246IHN0cmluZywgb2Zmc2V0OiAnb2Zmc2V0TGVmdCcgfCAnb2Zmc2V0VG9wJykgPT4ge1xuICAgICAgaWYgKHRoaXMuc2xpZGVyVHlwZSA9PT0gJ3NpbmdsZScpIHtcbiAgICAgICAgdGhpcy5lbGVtLnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke3RoaXMuc3R5bGV9X190b29sdGlwYClbMF0uc3R5bGVbZGlyZWN0aW9uXSA9IGAke3RoaXMuc2luZ2xlU2xpZGVyW29mZnNldF19cHhgO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuc2xpZGVyVHlwZSA9PT0gJ2RvdWJsZScpIHtcbiAgICAgICAgdGhpcy5lbGVtLnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke3RoaXMuc3R5bGV9X190b29sdGlwYClbMF0uc3R5bGVbZGlyZWN0aW9uXSA9IGAke3RoaXMubG93ZXJTbGlkZXJbb2Zmc2V0XX1weGA7XG4gICAgICAgIHRoaXMuZWxlbS5xdWVyeVNlbGVjdG9yQWxsKGAuJHt0aGlzLnN0eWxlfV9fdG9vbHRpcGApWzFdLnN0eWxlW2RpcmVjdGlvbl0gPSBgJHt0aGlzLnVwcGVyU2xpZGVyW29mZnNldF19cHhgO1xuICAgICAgfVxuICAgIH07XG4gICAgaWYgKHRoaXMuZGlyZWN0aW9uVHlwZSA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICBtb3ZlKCdsZWZ0JywgJ29mZnNldExlZnQnKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZGlyZWN0aW9uVHlwZSA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgbW92ZSgndG9wJywgJ29mZnNldFRvcCcpO1xuICAgIH1cbiAgfVxuXG4gIHNldE92ZXJsYXkgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMudGFyZ2V0U2xpZGVyID09PSB0aGlzLmxvd2VyU2xpZGVyKSB7XG4gICAgICB0aGlzLnRhcmdldFNsaWRlci5zdHlsZS56SW5kZXggPSAnMTAwJztcbiAgICAgIHRoaXMudXBwZXJTbGlkZXIuc3R5bGUuekluZGV4ID0gJzEnO1xuICAgIH0gZWxzZSBpZiAodGhpcy50YXJnZXRTbGlkZXIgPT09IHRoaXMudXBwZXJTbGlkZXIpIHtcbiAgICAgIHRoaXMudGFyZ2V0U2xpZGVyLnN0eWxlLnpJbmRleCA9ICcxMDAnO1xuICAgICAgdGhpcy5sb3dlclNsaWRlci5zdHlsZS56SW5kZXggPSAnMSc7XG4gICAgfVxuICB9XG5cbiAgY2FuY2VsRXZlbnRzID0gKCkgPT4ge1xuICAgIHRoaXMud3JpdGVET00oKTtcbiAgICBkb2N1bWVudC5vbm1vdXNldXAgPSBudWxsO1xuICAgIGRvY3VtZW50Lm9ubW91c2Vtb3ZlID0gbnVsbDtcbiAgfVxufVxuXG5leHBvcnQgeyBWaWV3IH07XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9