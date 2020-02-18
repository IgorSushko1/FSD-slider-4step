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
        style: param.style || 'iss',
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
    controlPanel.setSettings(settings);
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
      <div class="${this.style}__double_fly-value-1 ${this.style}__tooltip"></div>
      <div class="${this.style}__double_1_horizontal ${this.style}__drag"></div>
      <div class="${this.style}__double_fly-value-2 ${this.style}__tooltip"></div>
      <div class="${this.style}__double_2_horizontal ${this.style}__drag"></div>
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

/***/ "./styles.scss":
/*!*********************!*\
  !*** ./styles.scss ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZmFjdG9yaW5nL3RzL0NvbnRyb2xQYW5lbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVmYWN0b3JpbmcvdHMvSVNTbGlkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZmFjdG9yaW5nL3RzL2NvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZmFjdG9yaW5nL3RzL21vZGVsLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWZhY3RvcmluZy90cy9yZWZhY3RvcmluZ0luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9yZWZhY3RvcmluZy90cy9yZWZhY3RvcmluZ1ZpZXcudHMiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzLnNjc3M/NmQ4YyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDN0NB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QUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUF5T0QsbUJBQW1CLENBQUMsS0FBYTtRQUMvQixJQUFJLFFBQWdCLENBQUM7UUFDckIsSUFBSSxJQUFJLENBQUMsYUFBYSxLQUFLLFlBQVksRUFBRTtZQUN2QyxRQUFRLEdBQUcsQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7U0FDMUU7UUFDRCxJQUFJLElBQUksQ0FBQyxhQUFhLEtBQUssVUFBVSxFQUFFO1lBQ3JDLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUNoRztRQUNELE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7Q0FrU0Y7QUFFZTs7Ozs7Ozs7Ozs7O0FDMW1CaEIsdUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvcmVmYWN0b3JpbmcvdHMvcmVmYWN0b3JpbmdJbmRleC50c1wiKTtcbiIsImludGVyZmFjZSBWYWx1ZXMge1xuICBbYTogc3RyaW5nXTogRWxlbWVudEludGVyZmFjZTtcbn1cblxuaW50ZXJmYWNlIEVsZW1lbnRJbnRlcmZhY2Uge1xuICB0aXRsZT86IHN0cmluZztcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gIGVsZW1lbnROYW1lPzogc3RyaW5nO1xuICB2YWx1ZT86IGFueTtcbiAgbmFtZU9mVmFyaWFibGU/OiBzdHJpbmc7XG4gIHR5cGU/OiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBQYXJhbSB7XG4gIGlkRm9yQ29udHJvbFBhbmVsPzogc3RyaW5nO1xuICBkaXJlY3Rpb25UeXBlPzogc3RyaW5nO1xuICBlbGVtZW50SWQ/OiBzdHJpbmc7XG4gIGVsZW0/OiBhbnk7XG4gIHNpZ24/OiBzdHJpbmc7XG4gIGxvd2VyU2NhbGVCb3VuZD86IG51bWJlcjtcbiAgdXBwZXJTY2FsZUJvdW5kPzogbnVtYmVyO1xuICBsb3dlclNsaWRlclZhbHVlPzogbnVtYmVyO1xuICB1cHBlclNsaWRlclZhbHVlPzogbnVtYmVyO1xuICBzbGlkZXJUeXBlPzogc3RyaW5nO1xuICBzdGVwPzogbnVtYmVyO1xuICBjb250cm9sbGVyPzogYW55O1xuICBzdHlsZT86IHN0cmluZ1xufVxuXG5pbnRlcmZhY2UgQ29udHJvbFBhbmVsIHtcbiAgY29udHJvbFBhbmVsOiBIVE1MRWxlbWVudCxcbiAgc2VsZWN0T3JPcjogSFRNTEVsZW1lbnQsXG4gIGRpdk51bWVyYWw6IEhUTUxFbGVtZW50LFxuICBjb250cm9sbGVyOiBhbnk7XG4gIG1vZGVsOiBhbnk7XG59XG5cbmNsYXNzIENvbnRyb2xQYW5lbCB7XG4gIG9yVmFsdWVzOiBWYWx1ZXMgPSB7XG4gICAgc2lnbjoge1xuICAgICAgdGl0bGU6ICdTaWduJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAn0JLQsNC70Y7RgtCwJyxcbiAgICAgIGVsZW1lbnROYW1lOiAnc2lnbicsXG4gICAgICB2YWx1ZTogWyfigr0nLCAnJCddLFxuICAgICAgbmFtZU9mVmFyaWFibGU6ICdzaWduJyxcbiAgICB9LFxuICAgIHNsaWRlclR5cGU6IHtcbiAgICAgIHRpdGxlOiAnVHlwZScsXG4gICAgICBkZXNjcmlwdGlvbjogJ9Ci0LjQvyDRgdC70LDQudC00LXRgNCwIC0g0L7QtNC40L3QsNGA0L3Ri9C5INC40LvQuCDQtNCy0L7QudC90L7QuScsXG4gICAgICBlbGVtZW50TmFtZTogJ3NsaWRlclR5cGUnLFxuICAgICAgdmFsdWU6IFsnZG91YmxlJywgJ3NpbmdsZSddLFxuICAgICAgbmFtZU9mVmFyaWFibGU6ICdzbGlkZXJUeXBlJyxcbiAgICB9LFxuICAgIGRpcmVjdGlvblR5cGU6IHtcbiAgICAgIHRpdGxlOiAnVHlwZScsXG4gICAgICBkZXNjcmlwdGlvbjogJ9Ci0LjQvyDRgdC70LDQudC00LXRgNCwIC0g0LLQtdGA0YLQuNC60LDQu9GM0L3Ri9C5INC40LvQuCDQs9C+0YDQuNC30L7QvdGC0LDQu9GM0L3Ri9C5JyxcbiAgICAgIGVsZW1lbnROYW1lOiAnZGlyZWN0aW9uVHlwZScsXG4gICAgICB2YWx1ZTogWydob3Jpem9udGFsJywgJ3ZlcnRpY2FsJ10sXG4gICAgICBuYW1lT2ZWYXJpYWJsZTogJ2RpcmVjdGlvblR5cGUnLFxuICAgIH0sXG4gICAgc3R5bGVUeXBlOiB7XG4gICAgICB0aXRsZTogJ1N0eWxlJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAn0KLQuNC/INGB0YLQuNC70Y8gLSDQvNC+0LbQvdC+INCy0YvQsdGA0LDRgtGMINGB0YLQuNC70YwgQ1NTINC00LvRjyDQs9C+0YDQuNC30L7QvdGC0LDQu9GM0L3QvtCz0L4g0LjQu9C4INCy0LXRgNGC0LjQutCw0LvRjNC90L7Qs9C+INCy0LjQtNCwJyxcbiAgICAgIGVsZW1lbnROYW1lOiAnc3R5bGUnLFxuICAgICAgdmFsdWU6IFsnaXNzSG9yaXpvbnRhbCcsICdpc3NWZXJ0aWNhbCddLFxuICAgICAgbmFtZU9mVmFyaWFibGU6ICdzdHlsZScsXG4gICAgfSxcbiAgfTtcblxuICBudW1lcmFsVmFsdWVzOiBWYWx1ZXMgPSB7XG4gICAgc3RlcDoge1xuICAgICAgdGl0bGU6ICdTdGVwJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAn0KjQsNCzINC/0L7Qu9C30YPQvdC60LAnLFxuICAgICAgZWxlbWVudE5hbWU6ICdzdGVwJyxcbiAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgbmFtZU9mVmFyaWFibGU6ICdzdGVwJyxcbiAgICB9LFxuICAgIGxvd2VyU2NhbGVCb3VuZDoge1xuICAgICAgdGl0bGU6ICdNaW5fc2xpZGVyJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAn0JzQuNC90LjQvNCw0LvRjNC90L7QtSDQt9C90LDRh9C10L3QuNC1INGI0LrQsNC70Ysg0YHQu9Cw0LnQtNC10YDQsCcsXG4gICAgICBlbGVtZW50TmFtZTogJ2xvd2VyU2NhbGVCb3VuZCcsXG4gICAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICAgIG5hbWVPZlZhcmlhYmxlOiAnbG93ZXJTY2FsZUJvdW5kJyxcbiAgICB9LFxuICAgIHVwcGVyU2NhbGVCb3VuZDoge1xuICAgICAgdGl0bGU6ICdNYXhfc2xpZGVyJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAn0JzQsNC60YHQuNC80LDQu9GM0L3QvtC1INC30L3QsNGH0LXQvdC40LUg0YjQutCw0LvRiyDRgdC70LDQudC00LXRgNCwJyxcbiAgICAgIGVsZW1lbnROYW1lOiAndXBwZXJTY2FsZUJvdW5kJyxcbiAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgbmFtZU9mVmFyaWFibGU6ICd1cHBlclNjYWxlQm91bmQnLFxuICAgIH0sXG4gICAgbG93ZXJTbGlkZXJWYWx1ZToge1xuICAgICAgdGl0bGU6ICdNaW5fc2xpZGVyJyxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAn0J3QsNGH0LDQu9GM0L3QvtC1INC30L3QsNGH0LXQvdC40LUg0YjQutCw0LvRiyDRgdC70LDQudC00LXRgNCwIC0g0LTQu9GPINC/0LXRgNCy0L7Qs9C+INC40LvQuCDQvtC00LjQvdC+0YfQvdC+0LPQviDQv9C+0LvQt9GD0L3QutCwJyxcbiAgICAgIGVsZW1lbnROYW1lOiAnbG93ZXJTbGlkZXJWYWx1ZScsXG4gICAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICAgIG5hbWVPZlZhcmlhYmxlOiAnbG93ZXJTbGlkZXJWYWx1ZScsXG4gICAgfSxcbiAgICB1cHBlclNsaWRlclZhbHVlOiB7XG4gICAgICB0aXRsZTogJ01heF9zbGlkZXInLFxuICAgICAgZGVzY3JpcHRpb246ICfQndCw0YfQsNC70YzQvdC+0LUg0LfQvdCw0YfQtdC90LjQtSDRiNC60LDQu9GLINGB0LvQsNC50LTQtdGA0LAgLSDQtNC70Y8g0LLRgtC+0YDQvtCz0L4g0L/QvtC70LfRg9C90LrQsCcsXG4gICAgICBlbGVtZW50TmFtZTogJ3VwcGVyU2xpZGVyVmFsdWUnLFxuICAgICAgdHlwZTogJ251bWJlcicsXG4gICAgICBuYW1lT2ZWYXJpYWJsZTogJ3VwcGVyU2xpZGVyVmFsdWUnLFxuICAgIH0sXG4gIH07XG5cbiAgc2V0dGluZ3M6IFBhcmFtID0ge1xuICAgIGVsZW1lbnRJZDogJ2lzcycsXG4gICAgc2lnbjogJ+KCvScsXG4gICAgbG93ZXJTY2FsZUJvdW5kOiAwLFxuICAgIHVwcGVyU2NhbGVCb3VuZDogMTAwMCxcbiAgICBsb3dlclNsaWRlclZhbHVlOiAyMDAsXG4gICAgdXBwZXJTbGlkZXJWYWx1ZTogODAwLFxuICAgIHNsaWRlclR5cGU6ICdkb3VibGUnLFxuICAgIGRpcmVjdGlvblR5cGU6ICdob3Jpem9udGFsJyxcbiAgICBzdGVwOiA1LFxuICAgIGlkRm9yQ29udHJvbFBhbmVsOiAnZG9jX3BhbmVsJyxcbiAgICBzdHlsZTogJ2lzcycsXG4gIH07XG5cbiAgYmluZENvbnRyb2xsZXIgPSAoY29udHJvbGxlcjogYW55KSA9PiB7XG4gICAgdGhpcy5jb250cm9sbGVyID0gY29udHJvbGxlcjtcbiAgfVxuXG4gIHNldFNldHRpbmdzID0gKHNldEZyb21Db250cm9sbGVyOiBQYXJhbSkgPT4ge1xuICAgIHRoaXMuc2V0dGluZ3MgPSB7XG4gICAgICBlbGVtZW50SWQ6IHNldEZyb21Db250cm9sbGVyLmVsZW1lbnRJZCxcbiAgICAgIHNpZ246IHNldEZyb21Db250cm9sbGVyLnNpZ24sXG4gICAgICBsb3dlclNjYWxlQm91bmQ6IHNldEZyb21Db250cm9sbGVyLmxvd2VyU2NhbGVCb3VuZCxcbiAgICAgIHVwcGVyU2NhbGVCb3VuZDogc2V0RnJvbUNvbnRyb2xsZXIudXBwZXJTY2FsZUJvdW5kLFxuICAgICAgbG93ZXJTbGlkZXJWYWx1ZTogc2V0RnJvbUNvbnRyb2xsZXIubG93ZXJTbGlkZXJWYWx1ZSxcbiAgICAgIHVwcGVyU2xpZGVyVmFsdWU6IHNldEZyb21Db250cm9sbGVyLnVwcGVyU2xpZGVyVmFsdWUsXG4gICAgICBzbGlkZXJUeXBlOiBzZXRGcm9tQ29udHJvbGxlci5zbGlkZXJUeXBlLFxuICAgICAgZGlyZWN0aW9uVHlwZTogc2V0RnJvbUNvbnRyb2xsZXIuZGlyZWN0aW9uVHlwZSxcbiAgICAgIHN0ZXA6IHNldEZyb21Db250cm9sbGVyLnN0ZXAsXG4gICAgICBpZEZvckNvbnRyb2xQYW5lbDogc2V0RnJvbUNvbnRyb2xsZXIuaWRGb3JDb250cm9sUGFuZWwsXG4gICAgICBzdHlsZTogc2V0RnJvbUNvbnRyb2xsZXIuc3R5bGUsXG4gICAgfVxuICB9XG5cbiAgYmluZE1vZGVsID0gKG1vZGVsOiBhbnkpID0+IHtcbiAgICB0aGlzLm1vZGVsID0gbW9kZWw7XG4gIH1cblxuICBnZXRDb250cm9sUGFuZWwgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udHJvbFBhbmVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5zZXR0aW5ncy5pZEZvckNvbnRyb2xQYW5lbCk7XG4gICAgcmV0dXJuIGNvbnRyb2xQYW5lbDtcbiAgfVxuXG4gIHNldElkRm9yU2VsZWN0ID0gKHNlbGVjdDogSFRNTEVsZW1lbnQsIG9iajogYW55KSA9PiB7XG4gICAgc2VsZWN0LmlkID0gb2JqLmVsZW1lbnROYW1lO1xuICB9XG5cbiAgYXBwZW5kQ2hpbGQgPSAocGFyZW50OiBIVE1MRWxlbWVudCwgY2hpbGQ6IEhUTUxFbGVtZW50IHwgVGV4dCkgPT4ge1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChjaGlsZCk7XG4gIH1cblxuICBjcmVhdGVUaXRsZSA9IChvYmo6IGFueSkgPT4ge1xuICAgIGNvbnN0IHRpdGxlOiBzdHJpbmcgPSBvYmouZGVzY3JpcHRpb247XG5cbiAgICBjb25zdCBkaXY6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBjb25zdCB0ZXh0Tm9kZVRpdGxlOiBUZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGl0bGUpO1xuXG4gICAgZGl2LmFwcGVuZENoaWxkKHRleHROb2RlVGl0bGUpO1xuXG4gICAgcmV0dXJuIGRpdjtcbiAgfVxuXG4gIHJldHVybktleXMgPSAob2JqOiBWYWx1ZXMpOiBzdHJpbmdbXSA9PiB7XG4gICAgY29uc3QgYXJyID0gT2JqZWN0LmtleXMob2JqKTtcbiAgICByZXR1cm4gYXJyO1xuICB9XG5cbiAgY3JlYXRlSW5wdXQgPSAoc2VsZWN0T3JEaXY6IEhUTUxFbGVtZW50LCB2YWx1ZTogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGlucHV0LnR5cGUgPSAnbnVtYmVyJztcbiAgICBpbnB1dC52YWx1ZSA9IFN0cmluZyh2YWx1ZSk7XG4gICAgdGhpcy5hcHBlbmRDaGlsZChzZWxlY3RPckRpdiwgaW5wdXQpO1xuICB9XG5cbiAgY3JlYXRlQ2hhbmdhYmxlT3B0aW9ucyA9IChhcnI6IHN0cmluZ1tdLCBwYXJlbnRFbGVtZW50OiBIVE1MRWxlbWVudCkgPT4ge1xuICAgIGFyci5mb3JFYWNoKChjaGFuZ2FibGVWYWx1ZSkgPT4ge1xuICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICBvcHRpb24udmFsdWUgPSBjaGFuZ2FibGVWYWx1ZTtcbiAgICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjaGFuZ2FibGVWYWx1ZSk7XG4gICAgICB0aGlzLmFwcGVuZENoaWxkKG9wdGlvbiwgdGV4dCk7XG4gICAgICB0aGlzLmFwcGVuZENoaWxkKHBhcmVudEVsZW1lbnQsIG9wdGlvbik7XG4gICAgfSk7XG4gIH1cblxuICBjcmVhdGVMaXN0ZW5lck9yT3IgPSAoZWxlbWVudEZvckxpc3RlbmVyOiBIVE1MU2VsZWN0RWxlbWVudCwga2V5T2ZTZXR0aW5nOiAnc2lnbicgfCAnc2xpZGVyVHlwZScgfCAnZGlyZWN0aW9uVHlwZScpID0+IHtcbiAgICBjb25zdCBjaGFuZ2VMaXN0ZW5lciA9ICgpOiBhbnkgPT4ge1xuICAgICAgdGhpcy5zZXR0aW5nc1trZXlPZlNldHRpbmddID0gZWxlbWVudEZvckxpc3RlbmVyLnZhbHVlO1xuICAgICAgdGhpcy5zbGlkZXJSZWZyZXNoKCk7XG4gICAgfTtcbiAgICBlbGVtZW50Rm9yTGlzdGVuZXIuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgY2hhbmdlTGlzdGVuZXIpO1xuICB9XG5cbiAgY3JlYXRlTGlzdGVuZXJOdW1lcmFsID0gKGVsZW1lbnRGb3JMaXN0ZW5lcjogSFRNTElucHV0RWxlbWVudCwga2V5T2ZTZXR0aW5nOiAnc3RlcCcgfCAnbG93ZXJTY2FsZUJvdW5kJyB8ICd1cHBlclNjYWxlQm91bmQnIHwgJ2xvd2VyU2xpZGVyVmFsdWUnIHwgJ3VwcGVyU2xpZGVyVmFsdWUnKSA9PiB7XG4gICAgY29uc3QgaW5wdXRMaXN0ZW5lciA9ICgpOiBhbnkgPT4ge1xuICAgICAgdGhpcy5zZXR0aW5nc1trZXlPZlNldHRpbmddID0gTnVtYmVyKGVsZW1lbnRGb3JMaXN0ZW5lci5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW5wdXQnKVswXS52YWx1ZUFzTnVtYmVyKTtcbiAgICAgIHRoaXMuc2xpZGVyUmVmcmVzaCgpO1xuICAgIH07XG4gICAgZWxlbWVudEZvckxpc3RlbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgaW5wdXRMaXN0ZW5lcik7XG4gIH1cblxuICBjcmVhdGVQYW5lbCA9IChvYmplY3RGb3JDb25zdHJ1Y3Rpb25QYW5lbDogVmFsdWVzLCB0eXBlOiBzdHJpbmcsIGNvbnRyb2xQYW5lbDogSFRNTEVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBrZXlzID0gdGhpcy5yZXR1cm5LZXlzKG9iamVjdEZvckNvbnN0cnVjdGlvblBhbmVsKTtcblxuICAgIGtleXMuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBjb25zdCBjdXJyZW50T2JqID0gb2JqZWN0Rm9yQ29uc3RydWN0aW9uUGFuZWxba2V5XTtcblxuICAgICAgbGV0IHNlbGVjdE9yRGl2OiBIVE1MRWxlbWVudDtcbiAgICAgIGlmICh0eXBlID09PSAnbnVtZXJhbCcpIHtcbiAgICAgICAgc2VsZWN0T3JEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlID09PSAnc2VsZWN0Jykge1xuICAgICAgICBzZWxlY3RPckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNldElkRm9yU2VsZWN0KHNlbGVjdE9yRGl2LCBjdXJyZW50T2JqKTtcbiAgICAgIGNvbnN0IGNyZWF0ZVRpdGxlID0gdGhpcy5jcmVhdGVUaXRsZShjdXJyZW50T2JqKTtcbiAgICAgIHRoaXMuYXBwZW5kQ2hpbGQoc2VsZWN0T3JEaXYsIGNyZWF0ZVRpdGxlKTtcblxuICAgICAgaWYgKHR5cGUgPT09ICdudW1lcmFsJykge1xuICAgICAgICB0aGlzLmNyZWF0ZUlucHV0KHNlbGVjdE9yRGl2LCB0aGlzLnNldHRpbmdzW2N1cnJlbnRPYmoubmFtZU9mVmFyaWFibGUgYXMgJ3N0ZXAnIHwgJ2xvd2VyU2NhbGVCb3VuZCcgfCAndXBwZXJTY2FsZUJvdW5kJyB8ICdsb3dlclNsaWRlclZhbHVlJyB8ICd1cHBlclNsaWRlclZhbHVlJ10pO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGUgPT09ICdzZWxlY3QnKSB7XG4gICAgICAgIHRoaXMuY3JlYXRlQ2hhbmdhYmxlT3B0aW9ucyhjdXJyZW50T2JqLnZhbHVlLCBzZWxlY3RPckRpdik7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuYXBwZW5kQ2hpbGQoY29udHJvbFBhbmVsLCBzZWxlY3RPckRpdik7XG4gICAgfSk7XG5cbiAgICBrZXlzLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgY29uc3QgY3VycmVudE9iaiA9IG9iamVjdEZvckNvbnN0cnVjdGlvblBhbmVsW2tleV07XG4gICAgICBjb25zdCBrZXlPZlNldHRpbmc6IGFueSA9IGN1cnJlbnRPYmoubmFtZU9mVmFyaWFibGU7XG5cbiAgICAgIGlmICh0eXBlID09PSAnbnVtZXJhbCcpIHtcbiAgICAgICAgY29uc3QgZXZlbnRFbGVtZW50ID0gY29udHJvbFBhbmVsLnF1ZXJ5U2VsZWN0b3IoYCMke2N1cnJlbnRPYmouZWxlbWVudE5hbWV9YCkgYXMgSFRNTElucHV0RWxlbWVudDtcblxuICAgICAgICB0aGlzLmNyZWF0ZUxpc3RlbmVyTnVtZXJhbChldmVudEVsZW1lbnQsIGtleU9mU2V0dGluZyk7XG4gICAgICB9XG4gICAgICBpZiAodHlwZSA9PT0gJ3NlbGVjdCcpIHtcbiAgICAgICAgY29uc3QgZXZlbnRFbGVtZW50ID0gY29udHJvbFBhbmVsLnF1ZXJ5U2VsZWN0b3IoYCMke2N1cnJlbnRPYmouZWxlbWVudE5hbWV9YCkgYXMgSFRNTFNlbGVjdEVsZW1lbnQ7XG4gICAgICAgIHRoaXMuY3JlYXRlTGlzdGVuZXJPck9yKGV2ZW50RWxlbWVudCwga2V5T2ZTZXR0aW5nKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHNsaWRlclJlZnJlc2ggPSAoKSA9PiB7XG4gICAgY29uc3Qgb2JqRm9yQ29udHJvbGxlciA9IHtcbiAgICAgIHNsaWRlclR5cGU6IHRoaXMuc2V0dGluZ3Muc2xpZGVyVHlwZSxcbiAgICAgIGRpcmVjdGlvblR5cGU6IHRoaXMuc2V0dGluZ3MuZGlyZWN0aW9uVHlwZSxcbiAgICAgIHN0ZXA6IHRoaXMuc2V0dGluZ3Muc3RlcCxcbiAgICAgIHN0eWxlOiB0aGlzLnNldHRpbmdzLnN0eWxlLFxuICAgIH07XG4gICAgdGhpcy5jb250cm9sbGVyLnNldENvbnRyb2xsZXJGcm9tQ29udHJvbFBhbmVsKG9iakZvckNvbnRyb2xsZXIpO1xuXG4gICAgY29uc3Qgb2JqRm9yTW9kZWwgPSB7XG4gICAgICBzaWduOiB0aGlzLnNldHRpbmdzLnNpZ24sXG4gICAgICBsb3dlclNjYWxlQm91bmQ6IHRoaXMuc2V0dGluZ3MubG93ZXJTY2FsZUJvdW5kLFxuICAgICAgdXBwZXJTY2FsZUJvdW5kOiB0aGlzLnNldHRpbmdzLnVwcGVyU2NhbGVCb3VuZCxcbiAgICAgIGxvd2VyU2xpZGVyVmFsdWU6IHRoaXMuc2V0dGluZ3MubG93ZXJTbGlkZXJWYWx1ZSxcbiAgICAgIHVwcGVyU2xpZGVyVmFsdWU6IHRoaXMuc2V0dGluZ3MudXBwZXJTbGlkZXJWYWx1ZSxcbiAgICB9O1xuICAgIHRoaXMubW9kZWwuc2V0SW5pdGlhbE1vZGVsT3B0aW9ucyhvYmpGb3JNb2RlbCk7XG5cbiAgICB0aGlzLmNvbnRyb2xsZXIuY3JlYXRlU2xpZGVyKCk7XG4gIH1cblxuICBidWlsZFBhbmVsID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRyb2xQYW5lbCA9IHRoaXMuZ2V0Q29udHJvbFBhbmVsKCk7XG4gICAgdGhpcy5jcmVhdGVQYW5lbCh0aGlzLm9yVmFsdWVzLCAnc2VsZWN0JywgY29udHJvbFBhbmVsKTtcbiAgICB0aGlzLmNyZWF0ZVBhbmVsKHRoaXMubnVtZXJhbFZhbHVlcywgJ251bWVyYWwnLCBjb250cm9sUGFuZWwpO1xuICB9XG59XG5cbmV4cG9ydCB7IENvbnRyb2xQYW5lbCB9O1xuIiwiaW1wb3J0IHsgTW9kZWwgfSBmcm9tICcuL21vZGVsJztcbmltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICcuL2NvbnRyb2xsZXInO1xuaW1wb3J0IHsgVmlldyB9IGZyb20gJy4vcmVmYWN0b3JpbmdWaWV3JztcbmltcG9ydCB7IENvbnRyb2xQYW5lbCB9IGZyb20gJy4vQ29udHJvbFBhbmVsJztcblxuaW50ZXJmYWNlIFBhcmFtIHtcbiAgaWRGb3JDb250cm9sUGFuZWw/OiBzdHJpbmc7XG4gIGVsZW1lbnRJZD86IHN0cmluZztcbiAgc2lnbjogc3RyaW5nO1xuICBsb3dlclNjYWxlQm91bmQ/OiBudW1iZXI7XG4gIHVwcGVyU2NhbGVCb3VuZD86IG51bWJlcjtcbiAgbG93ZXJTbGlkZXJWYWx1ZT86IG51bWJlcjtcbiAgdXBwZXJTbGlkZXJWYWx1ZT86IG51bWJlcjtcbiAgc2xpZGVyVHlwZT86IHN0cmluZztcbiAgZGlyZWN0aW9uVHlwZT86IHN0cmluZztcbiAgc3RlcD86IG51bWJlcjtcbiAgc3R5bGU/OiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIElTU2xpZGVyKHBhcmFtOiBQYXJhbSkge1xuXG4gIGNvbnN0IHNldHRpbmdzOiBhbnkgPSB7XG4gICAgaWRGb3JDb250cm9sUGFuZWw6IHBhcmFtLmlkRm9yQ29udHJvbFBhbmVsIHx8ICdkb2NfcGFuZWwnLFxuICAgIGVsZW1lbnRJZDogcGFyYW0uZWxlbWVudElkIHx8ICdpc3MnLFxuICAgIHNpZ246IHBhcmFtLnNpZ24gfHwgJ+KCvScsXG4gICAgbG93ZXJTY2FsZUJvdW5kOiBwYXJhbS5sb3dlclNjYWxlQm91bmQgfHwgMCxcbiAgICB1cHBlclNjYWxlQm91bmQ6IHBhcmFtLnVwcGVyU2NhbGVCb3VuZCB8fCAxMDAwLFxuICAgIGxvd2VyU2xpZGVyVmFsdWU6IHBhcmFtLmxvd2VyU2xpZGVyVmFsdWUgfHwgMjAwLFxuICAgIHVwcGVyU2xpZGVyVmFsdWU6IHBhcmFtLnVwcGVyU2xpZGVyVmFsdWUgfHwgODAwLFxuICAgIHNsaWRlclR5cGU6IHBhcmFtLnNsaWRlclR5cGUgfHwgJ2RvdWJsZScsXG4gICAgZGlyZWN0aW9uVHlwZTogcGFyYW0uZGlyZWN0aW9uVHlwZSB8fCAnaG9yaXpvbnRhbCcsXG4gICAgc3RlcDogcGFyYW0uc3RlcCB8fCA1MCxcbiAgICBzdHlsZTogcGFyYW0uc3R5bGUgfHwgJ2lzcycsXG4gIH07XG5cbiAgLy8g0J/QntCh0KLQoNCe0JXQndCY0JUg0KHQm9CQ0JnQlNCV0KDQkCDQn9Cg0Jgg0J/QldCg0JLQntCcINCX0JDQn9Cj0KHQmtCVXG4gIGNvbnN0IG1vZGVsID0gbmV3IE1vZGVsKHNldHRpbmdzKTtcbiAgY29uc3QgY29udHJvbGxlciA9IG5ldyBDb250cm9sbGVyKHNldHRpbmdzKTtcbiAgY29uc3QgdmlldyA9IG5ldyBWaWV3KCk7XG4gIGNvbnN0IGNvbnRyb2xQYW5lbCA9IG5ldyBDb250cm9sUGFuZWwoKTtcblxuICBjb250cm9sbGVyLmJpbmRNb2RlbChtb2RlbCk7XG4gIGNvbnRyb2xsZXIuYmluZFZpZXcodmlldyk7XG4gIGNvbnRyb2xsZXIuYmluZENvbnRyb2xQYW5lbChjb250cm9sUGFuZWwpO1xuXG4gIHZpZXcuYmluZENvbnRyb2xsZXIoY29udHJvbGxlcik7XG4gIGNvbnRyb2xQYW5lbC5iaW5kQ29udHJvbGxlcihjb250cm9sbGVyKTtcbiAgY29udHJvbFBhbmVsLmJpbmRNb2RlbChtb2RlbCk7XG4gIGNvbnRyb2xQYW5lbC5zZXRTZXR0aW5ncyhzZXR0aW5ncyk7XG5cbiAgY29udHJvbGxlci5jcmVhdGVTbGlkZXIoKTtcblxuICBjb250cm9sUGFuZWwuYnVpbGRQYW5lbCgpO1xufVxuXG5leHBvcnQgeyBJU1NsaWRlciB9O1xuIiwiaW1wb3J0IHsgTW9kZWwgfSBmcm9tICcuL21vZGVsJztcbmltcG9ydCB7IFZpZXcgfSBmcm9tICcuL3JlZmFjdG9yaW5nVmlldyc7XG5pbXBvcnQgeyBDb250cm9sUGFuZWwgfSBmcm9tICcuL0NvbnRyb2xQYW5lbCc7XG5cbmludGVyZmFjZSBDb250cm9sbGVyIHtcbiAgaWRGb3JDb250cm9sUGFuZWw/OiBzdHJpbmc7XG4gIGVsZW1lbnRJZD86IHN0cmluZztcbiAgc2lnbj86IHN0cmluZztcbiAgbG93ZXJTY2FsZUJvdW5kPzogbnVtYmVyO1xuICB1cHBlclNjYWxlQm91bmQ/OiBudW1iZXI7XG4gIGxvd2VyU2xpZGVyVmFsdWU/OiBudW1iZXI7XG4gIHVwcGVyU2xpZGVyVmFsdWU/OiBudW1iZXI7XG4gIHNsaWRlclR5cGU/OiBzdHJpbmc7XG4gIGRpcmVjdGlvblR5cGU/OiBzdHJpbmc7XG4gIHN0ZXA/OiBudW1iZXI7XG4gIHN0eWxlPzogc3RyaW5nO1xuXG4gIG1vZGVsPzogYW55O1xuICB2aWV3PzogYW55O1xuXG4gIGNvbnRyb2xQYW5lbD86IGFueTtcbn1cblxuaW50ZXJmYWNlIG9iakZyb21WaWV3IHtcbiAgbG93ZXJTbGlkZXJWYWx1ZT86IG51bWJlcjtcbiAgdXBwZXJTbGlkZXJWYWx1ZT86IG51bWJlcjtcbn1cblxuaW50ZXJmYWNlIG9iakZyb21Db250cm9sUGFuZWwge1xuICBzbGlkZXJUeXBlOiBzdHJpbmc7XG4gIGRpcmVjdGlvblR5cGU6IHN0cmluZztcbiAgc3RlcDogbnVtYmVyO1xuICBzdHlsZTogc3RyaW5nO1xufVxuXG5jbGFzcyBDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3Ioc2V0dGluZ3M6IGFueSkge1xuICAgIHRoaXMuZWxlbWVudElkID0gc2V0dGluZ3MuZWxlbWVudElkO1xuICAgIHRoaXMuc2xpZGVyVHlwZSA9IHNldHRpbmdzLnNsaWRlclR5cGUgfHwgJ3NpbmdsZSc7XG4gICAgdGhpcy5kaXJlY3Rpb25UeXBlID0gc2V0dGluZ3MuZGlyZWN0aW9uVHlwZSB8fCAnaG9yaXpvbnRhbCc7XG4gICAgdGhpcy5zdGVwID0gc2V0dGluZ3Muc3RlcCB8fCAyO1xuICAgIHRoaXMuaWRGb3JDb250cm9sUGFuZWwgPSBzZXR0aW5ncy5pZEZvckNvbnRyb2xQYW5lbCB8fCAnJztcbiAgICB0aGlzLnN0eWxlID0gc2V0dGluZ3Muc3R5bGUgfHwgJ2lzcyc7XG4gIH1cblxuICBjcmVhdGVTbGlkZXIoKSB7XG4gICAgdGhpcy5zZXRDb250cm9sbGVyKCk7XG4gICAgdGhpcy5zZXRBbmRSdW5WaWV3KCk7XG4gIH1cblxuICBzZXRDb250cm9sbGVyKCkge1xuICAgIGNvbnN0IG9iakZyb21Nb2RlbCA9IHRoaXMuZ2V0TW9kZWwoKTtcbiAgICB0aGlzLmxvd2VyU2xpZGVyVmFsdWUgPSBvYmpGcm9tTW9kZWwubG93ZXJTbGlkZXJWYWx1ZTtcbiAgICB0aGlzLnVwcGVyU2xpZGVyVmFsdWUgPSBvYmpGcm9tTW9kZWwudXBwZXJTbGlkZXJWYWx1ZTtcbiAgICB0aGlzLmxvd2VyU2NhbGVCb3VuZCA9IG9iakZyb21Nb2RlbC5sb3dlclNjYWxlQm91bmQ7XG4gICAgdGhpcy51cHBlclNjYWxlQm91bmQgPSBvYmpGcm9tTW9kZWwudXBwZXJTY2FsZUJvdW5kO1xuICAgIHRoaXMuc2lnbiA9IG9iakZyb21Nb2RlbC5zaWduO1xuICB9XG5cbiAgZ2V0TW9kZWwoKSB7XG4gICAgcmV0dXJuIHRoaXMubW9kZWwuZ2V0TW9kZWwoKTtcbiAgfVxuXG4gIHNldEFuZFJ1blZpZXcoKSB7XG4gICAgY29uc3Qgb2JqID0ge1xuICAgICAgZWxlbWVudElkOiB0aGlzLmVsZW1lbnRJZCxcbiAgICAgIHNpZ246IHRoaXMuc2lnbixcbiAgICAgIGxvd2VyU2NhbGVCb3VuZDogdGhpcy5sb3dlclNjYWxlQm91bmQsXG4gICAgICB1cHBlclNjYWxlQm91bmQ6IHRoaXMudXBwZXJTY2FsZUJvdW5kLFxuICAgICAgbG93ZXJTbGlkZXJWYWx1ZTogdGhpcy5sb3dlclNsaWRlclZhbHVlLFxuICAgICAgdXBwZXJTbGlkZXJWYWx1ZTogdGhpcy51cHBlclNsaWRlclZhbHVlLFxuICAgICAgc2xpZGVyVHlwZTogdGhpcy5zbGlkZXJUeXBlLFxuICAgICAgZGlyZWN0aW9uVHlwZTogdGhpcy5kaXJlY3Rpb25UeXBlLFxuICAgICAgc3RlcDogdGhpcy5zdGVwLFxuICAgICAgc3R5bGU6IHRoaXMuc3R5bGUsXG4gICAgfTtcbiAgICB0aGlzLnZpZXcuc2V0U3RhcnRpbmdDb25kaXRpb25zKG9iaik7XG4gICAgdGhpcy52aWV3LmluaXQoKTtcbiAgfVxuXG4gIGJpbmRNb2RlbChtb2RlbDogTW9kZWwpIHtcbiAgICB0aGlzLm1vZGVsID0gbW9kZWw7XG4gIH1cblxuICBzZXRNb2RlbCgpIHtcbiAgICB0aGlzLm1vZGVsLnNldE1vZGVsKHtcbiAgICAgIGxvd2VyU2xpZGVyVmFsdWU6IHRoaXMubG93ZXJTbGlkZXJWYWx1ZSxcbiAgICAgIHVwcGVyU2xpZGVyVmFsdWU6IHRoaXMudXBwZXJTbGlkZXJWYWx1ZSxcbiAgICB9KTtcbiAgfVxuXG4gIGJpbmRWaWV3KHZpZXc6IFZpZXcpIHtcbiAgICB0aGlzLnZpZXcgPSB2aWV3O1xuICB9XG5cbiAgZ2V0VmlldyhvYmo6IG9iakZyb21WaWV3KSB7XG4gICAgaWYgKHRoaXMuc2xpZGVyVHlwZSA9PT0gJ2RvdWJsZScpIHtcbiAgICAgIHRoaXMubG93ZXJTbGlkZXJWYWx1ZSA9IG9iai5sb3dlclNsaWRlclZhbHVlO1xuICAgICAgdGhpcy51cHBlclNsaWRlclZhbHVlID0gb2JqLnVwcGVyU2xpZGVyVmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLnNsaWRlclR5cGUgPT09ICdzaW5nbGUnKSB7XG4gICAgICB0aGlzLmxvd2VyU2xpZGVyVmFsdWUgPSBvYmoubG93ZXJTbGlkZXJWYWx1ZTtcbiAgICB9XG4gICAgdGhpcy5zZXRNb2RlbCgpO1xuICB9XG5cbiAgZ2V0Q29udHJvbGxlcigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZWxlbWVudElkOiB0aGlzLmVsZW1lbnRJZCxcbiAgICAgIHNpZ246IHRoaXMuc2lnbixcbiAgICAgIGxvd2VyU2NhbGVCb3VuZDogdGhpcy5sb3dlclNjYWxlQm91bmQsXG4gICAgICB1cHBlclNjYWxlQm91bmQ6IHRoaXMudXBwZXJTY2FsZUJvdW5kLFxuICAgICAgbG93ZXJTbGlkZXJWYWx1ZTogdGhpcy5sb3dlclNsaWRlclZhbHVlLFxuICAgICAgdXBwZXJTbGlkZXJWYWx1ZTogdGhpcy51cHBlclNsaWRlclZhbHVlLFxuICAgICAgc2xpZGVyVHlwZTogdGhpcy5zbGlkZXJUeXBlLFxuICAgICAgc3RlcDogdGhpcy5zdGVwLFxuICAgIH07XG4gIH1cblxuICBiaW5kQ29udHJvbFBhbmVsKGNudHJsUG5sOiBDb250cm9sUGFuZWwpIHtcbiAgICB0aGlzLmNvbnRyb2xQYW5lbCA9IGNudHJsUG5sO1xuICB9XG5cbiAgc2V0Q29udHJvbGxlckZyb21Db250cm9sUGFuZWwgPSAob2JqOiBvYmpGcm9tQ29udHJvbFBhbmVsKSA9PiB7XG4gICAgdGhpcy5zdGVwID0gb2JqLnN0ZXA7XG4gICAgdGhpcy5zbGlkZXJUeXBlID0gb2JqLnNsaWRlclR5cGU7XG4gICAgdGhpcy5kaXJlY3Rpb25UeXBlID0gb2JqLmRpcmVjdGlvblR5cGU7XG4gICAgdGhpcy5zdHlsZSA9IG9iai5zdHlsZTtcbiAgfVxufVxuXG5leHBvcnQgeyBDb250cm9sbGVyIH07XG4iLCJpbnRlcmZhY2UgTW9kZWwge1xuICBsb3dlclNjYWxlQm91bmQ6IG51bWJlcjtcbiAgdXBwZXJTY2FsZUJvdW5kOiBudW1iZXI7XG4gIGxvd2VyU2xpZGVyVmFsdWU6IG51bWJlcjtcbiAgdXBwZXJTbGlkZXJWYWx1ZTogbnVtYmVyO1xuICBzaWduOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBvYmpGcm9tVmlldyB7XG4gIGxvd2VyU2xpZGVyVmFsdWU/OiBudW1iZXI7XG4gIHVwcGVyU2xpZGVyVmFsdWU/OiBudW1iZXI7XG59XG5pbnRlcmZhY2Ugb2JqRnJvbUNvbnRyb2xsZXIge1xuICBsb3dlclNjYWxlQm91bmQ6IG51bWJlcjtcbiAgdXBwZXJTY2FsZUJvdW5kOiBudW1iZXI7XG4gIGxvd2VyU2xpZGVyVmFsdWU6IG51bWJlcjtcbiAgdXBwZXJTbGlkZXJWYWx1ZTogbnVtYmVyO1xuICBzaWduOiBzdHJpbmc7XG59XG5jbGFzcyBNb2RlbCB7XG4gIGNvbnN0cnVjdG9yKHBhcmFtOiBvYmpGcm9tQ29udHJvbGxlcikge1xuICAgIHRoaXMubG93ZXJTY2FsZUJvdW5kID0gcGFyYW0ubG93ZXJTY2FsZUJvdW5kIHx8IDA7XG4gICAgdGhpcy51cHBlclNjYWxlQm91bmQgPSBwYXJhbS51cHBlclNjYWxlQm91bmQgfHwgMTAwMDtcbiAgICB0aGlzLmxvd2VyU2xpZGVyVmFsdWUgPSBwYXJhbS5sb3dlclNsaWRlclZhbHVlIHx8IDIwMDtcbiAgICB0aGlzLnVwcGVyU2xpZGVyVmFsdWUgPSBwYXJhbS51cHBlclNsaWRlclZhbHVlIHx8IDgwMDtcbiAgICB0aGlzLnNpZ24gPSBwYXJhbS5zaWduIHx8ICc/JztcbiAgfVxuXG4gIHNldE1vZGVsKG9iajogb2JqRnJvbVZpZXcpIHtcbiAgICB0aGlzLmxvd2VyU2xpZGVyVmFsdWUgPSBvYmoubG93ZXJTbGlkZXJWYWx1ZTtcbiAgICB0aGlzLnVwcGVyU2xpZGVyVmFsdWUgPSBvYmoudXBwZXJTbGlkZXJWYWx1ZTtcbiAgfVxuXG4gIHNldEluaXRpYWxNb2RlbE9wdGlvbnMgPSAocGFyYW06IG9iakZyb21Db250cm9sbGVyKSA9PiB7XG4gICAgdGhpcy5sb3dlclNjYWxlQm91bmQgPSBwYXJhbS5sb3dlclNjYWxlQm91bmQ7XG4gICAgdGhpcy51cHBlclNjYWxlQm91bmQgPSBwYXJhbS51cHBlclNjYWxlQm91bmQ7XG4gICAgdGhpcy5sb3dlclNsaWRlclZhbHVlID0gcGFyYW0ubG93ZXJTbGlkZXJWYWx1ZTtcbiAgICB0aGlzLnVwcGVyU2xpZGVyVmFsdWUgPSBwYXJhbS51cHBlclNsaWRlclZhbHVlO1xuICAgIHRoaXMuc2lnbiA9IHBhcmFtLnNpZ247XG4gIH1cblxuICBnZXRNb2RlbCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbG93ZXJTY2FsZUJvdW5kOiB0aGlzLmxvd2VyU2NhbGVCb3VuZCxcbiAgICAgIHVwcGVyU2NhbGVCb3VuZDogdGhpcy51cHBlclNjYWxlQm91bmQsXG4gICAgICBsb3dlclNsaWRlclZhbHVlOiB0aGlzLmxvd2VyU2xpZGVyVmFsdWUsXG4gICAgICB1cHBlclNsaWRlclZhbHVlOiB0aGlzLnVwcGVyU2xpZGVyVmFsdWUsXG4gICAgICBzaWduOiB0aGlzLnNpZ24sXG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgeyBNb2RlbCB9O1xuIiwiaW1wb3J0ICcuLi8uLi8uLi9zdHlsZXMuc2Nzcyc7XG5cbmltcG9ydCB7IElTU2xpZGVyIH0gZnJvbSAnLi9JU1NsaWRlcic7XG5cbmNvbnN0IHNldHRpbmdzRm9ySG9yaXpvbnRhbER1YmxlID0ge1xuICBpZEZvckNvbnRyb2xQYW5lbDogJ2RvY19wYW5lbCcsXG4gIGVsZW1lbnRJZDogJ2lzcycsXG4gIHNpZ246ICckJyxcbiAgbG93ZXJTY2FsZUJvdW5kOiAxMDAsXG4gIHVwcGVyU2NhbGVCb3VuZDogMTUwMCxcbiAgbG93ZXJTbGlkZXJWYWx1ZTogMjAwLFxuICB1cHBlclNsaWRlclZhbHVlOiA4MDAsXG4gIHNsaWRlclR5cGU6ICdkb3VibGUnLFxuICBkaXJlY3Rpb25UeXBlOiAnaG9yaXpvbnRhbCcsXG4gIHN0ZXA6IDEwLFxuICBzdHlsZTogJ2lzc0hvcml6b250YWwnLFxufTtcbklTU2xpZGVyKHNldHRpbmdzRm9ySG9yaXpvbnRhbER1YmxlKTtcblxuY29uc3Qgc2V0dGluZ3NGb3JIb3Jpem9udGFsU2luZ2xlID0ge1xuICBpZEZvckNvbnRyb2xQYW5lbDogJ2RvY19wYW5lbF8yJyxcbiAgZWxlbWVudElkOiAnaXNzXzInLFxuICBzaWduOiAnJCcsXG4gIGxvd2VyU2NhbGVCb3VuZDogMTAwLFxuICB1cHBlclNjYWxlQm91bmQ6IDE1MDAsXG4gIGxvd2VyU2xpZGVyVmFsdWU6IDIwMCxcbiAgdXBwZXJTbGlkZXJWYWx1ZTogODAwLFxuICBzbGlkZXJUeXBlOiAnc2luZ2xlJyxcbiAgZGlyZWN0aW9uVHlwZTogJ2hvcml6b250YWwnLFxuICBzdGVwOiAxMCxcbiAgc3R5bGU6ICdpc3NIb3Jpem9udGFsJyxcbn07XG5JU1NsaWRlcihzZXR0aW5nc0Zvckhvcml6b250YWxTaW5nbGUpO1xuXG5jb25zdCBzZXR0aW5nc0ZvclZlcnRpY2FsRG91YmxlID0ge1xuICBpZEZvckNvbnRyb2xQYW5lbDogJ2RvY19wYW5lbF8zJyxcbiAgZWxlbWVudElkOiAnaXNzXzMnLFxuICBzaWduOiAnJCcsXG4gIGxvd2VyU2NhbGVCb3VuZDogMTAwLFxuICB1cHBlclNjYWxlQm91bmQ6IDE1MDAsXG4gIGxvd2VyU2xpZGVyVmFsdWU6IDIwMCxcbiAgdXBwZXJTbGlkZXJWYWx1ZTogODAwLFxuICBzbGlkZXJUeXBlOiAnZG91YmxlJyxcbiAgZGlyZWN0aW9uVHlwZTogJ3ZlcnRpY2FsJyxcbiAgc3RlcDogMTAsXG4gIHN0eWxlOiAnaXNzVmVydGljYWwnLFxufTtcblxuSVNTbGlkZXIoc2V0dGluZ3NGb3JWZXJ0aWNhbERvdWJsZSk7XG5cbmNvbnN0IHNldHRpbmdzRm9yVmVydGljYWxTaW5nbGUgPSB7XG4gIGlkRm9yQ29udHJvbFBhbmVsOiAnZG9jX3BhbmVsXzQnLFxuICBlbGVtZW50SWQ6ICdpc3NfNCcsXG4gIHNpZ246ICckJyxcbiAgbG93ZXJTY2FsZUJvdW5kOiAxMDAsXG4gIHVwcGVyU2NhbGVCb3VuZDogMTUwMCxcbiAgbG93ZXJTbGlkZXJWYWx1ZTogMjAwLFxuICB1cHBlclNsaWRlclZhbHVlOiA4MDAsXG4gIHNsaWRlclR5cGU6ICdzaW5nbGUnLFxuICBkaXJlY3Rpb25UeXBlOiAndmVydGljYWwnLFxuICBzdGVwOiAxMCxcbiAgc3R5bGU6ICdpc3NWZXJ0aWNhbCcsXG59O1xuXG5JU1NsaWRlcihzZXR0aW5nc0ZvclZlcnRpY2FsU2luZ2xlKTtcbiIsImludGVyZmFjZSBWaWV3U3RhcnRpbmdDb25kaXRpb25zIHtcbiAgZWxlbWVudElkPzogc3RyaW5nO1xuICBlbGVtPzogYW55O1xuICBzaWduPzogc3RyaW5nO1xuICBsb3dlclNjYWxlQm91bmQ/OiBudW1iZXI7XG4gIHVwcGVyU2NhbGVCb3VuZD86IG51bWJlcjtcbiAgbG93ZXJTbGlkZXJWYWx1ZT86IG51bWJlcjtcbiAgdXBwZXJTbGlkZXJWYWx1ZT86IG51bWJlcjtcbiAgc2xpZGVyVHlwZT86IHN0cmluZztcbiAgZGlyZWN0aW9uVHlwZT86IHN0cmluZztcbiAgc3RlcD86IG51bWJlcjtcbiAgY29udHJvbGxlcj86IGFueTtcbiAgc3R5bGU/OiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBWaWV3IHtcbiAgZWxlbWVudElkOiBzdHJpbmc7XG4gIGVsZW06IGFueTtcbiAgc2lnbjogc3RyaW5nO1xuICBsb3dlclNjYWxlQm91bmQ6IG51bWJlcjtcbiAgdXBwZXJTY2FsZUJvdW5kOiBudW1iZXI7XG4gIGxvd2VyU2xpZGVyVmFsdWU6IG51bWJlcjtcbiAgdXBwZXJTbGlkZXJWYWx1ZTogbnVtYmVyO1xuICBzbGlkZXJUeXBlOiBzdHJpbmc7XG4gIGRpcmVjdGlvblR5cGU6IHN0cmluZztcbiAgc3RlcDogbnVtYmVyO1xuICBjb250cm9sbGVyOiBhbnk7XG4gIHN0eWxlOiBzdHJpbmc7XG5cbiAgc2NhbGU6IEhUTUxFbGVtZW50O1xuICBpbmRlbnQ6IG51bWJlcjtcbiAgbWFpbkF4aXNTaXplOiBudW1iZXI7XG5cbiAgc2xpZGVySW5ET006IFtIVE1MRWxlbWVudF07XG5cbiAgc3RhdGljRmllbGRMb3dlcjogSFRNTEVsZW1lbnQ7XG4gIHN0YXRpY0ZpZWxkVXBwZXI6IEhUTUxFbGVtZW50O1xuICBzdGF0aWNGaWVsZFNpbmdsZTogSFRNTEVsZW1lbnQ7XG5cbiAgZmx5RmllbGRMb3dlcjogSFRNTEVsZW1lbnQ7XG4gIGZseUZpZWxkVXBwZXI6IEhUTUxFbGVtZW50O1xuICBmbHlGaWVsZFNpbmdsZTogSFRNTEVsZW1lbnQ7XG5cbiAgbG93ZXJTbGlkZXI6IEhUTUxFbGVtZW50O1xuICBsb3dlclNsaWRlclBvc2l0aW9uOiBudW1iZXI7XG5cbiAgdXBwZXJTbGlkZXI6IEhUTUxFbGVtZW50O1xuICB1cHBlclNsaWRlclBvc2l0aW9uOiBudW1iZXI7XG5cbiAgc2luZ2xlU2xpZGVyOiBIVE1MRWxlbWVudDtcbiAgc2luZ2xlU2xpZGVyUG9zaXRpb246IG51bWJlcjtcblxuICBzbGlkZXJXaWR0aDogbnVtYmVyO1xuICBzbGlkZXJIZWlnaHQ6IG51bWJlcjtcblxuICByaWJib246IEhUTUxFbGVtZW50O1xuXG4gIGNsaWVudFJlY3Q6IENsaWVudFJlY3Q7XG5cbiAgaW5uZXJNb3VzZVBvc2l0aW9uOiBudW1iZXI7XG5cbiAgcGl4ZWxTdGVwOiBudW1iZXI7XG4gIHJvdW5kZWRQaXhlbFN0ZXA6IG51bWJlcjtcblxuICB0YXJnZXRTbGlkZXI6IEhUTUxFbGVtZW50O1xuXG4gIGxvd2VyUmVzdHJpY3Rpb246IG51bWJlcjtcbiAgdXBwZXJSZXN0cmljdGlvbjogbnVtYmVyO1xuXG4gIGxvd2VyQ29zdFJlc3RyaWN0aW9uOiBudW1iZXI7XG4gIHVwcGVyQ29zdFJlc3RyaWN0aW9uOiBudW1iZXI7XG59XG5cbmNsYXNzIFZpZXcge1xuICBiaW5kQ29udHJvbGxlciA9IChjb250cm9sbGVyOiBhbnkpID0+IHtcbiAgICB0aGlzLmNvbnRyb2xsZXIgPSBjb250cm9sbGVyO1xuICB9XG5cbiAgc2V0Q29udHJvbGxlcigpIHtcbiAgICBjb25zdCBvYmogPSB7XG4gICAgICBsb3dlclNsaWRlclZhbHVlOiB0aGlzLmxvd2VyU2xpZGVyVmFsdWUsXG4gICAgICB1cHBlclNsaWRlclZhbHVlOiB0aGlzLnVwcGVyU2xpZGVyVmFsdWUsXG4gICAgfTtcbiAgICB0aGlzLmNvbnRyb2xsZXIuZ2V0VmlldyhvYmopO1xuICB9XG5cbiAgc2V0U3RhcnRpbmdDb25kaXRpb25zID0gKG9iajogVmlld1N0YXJ0aW5nQ29uZGl0aW9ucykgPT4ge1xuICAgIHRoaXMuZWxlbWVudElkID0gYCMke29iai5lbGVtZW50SWR9YCB8fCAnI2lzcyc7XG4gICAgdGhpcy5lbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQob2JqLmVsZW1lbnRJZCk7XG5cbiAgICB0aGlzLnNpZ24gPSBvYmouc2lnbiB8fCAnUic7XG4gICAgdGhpcy5sb3dlclNjYWxlQm91bmQgPSBOdW1iZXIob2JqLmxvd2VyU2NhbGVCb3VuZCkgfHwgMDtcbiAgICB0aGlzLnVwcGVyU2NhbGVCb3VuZCA9IE51bWJlcihvYmoudXBwZXJTY2FsZUJvdW5kKSB8fCAxMDAwO1xuICAgIHRoaXMubG93ZXJTbGlkZXJWYWx1ZSA9IE51bWJlcihvYmoubG93ZXJTbGlkZXJWYWx1ZSkgfHwgMjAwO1xuICAgIHRoaXMudXBwZXJTbGlkZXJWYWx1ZSA9IE51bWJlcihvYmoudXBwZXJTbGlkZXJWYWx1ZSkgfHwgODAwO1xuXG4gICAgdGhpcy5zbGlkZXJUeXBlID0gb2JqLnNsaWRlclR5cGUgfHwgJ3NpbmdsZSc7XG4gICAgdGhpcy5kaXJlY3Rpb25UeXBlID0gb2JqLmRpcmVjdGlvblR5cGUgfHwgJ2hvcml6b250YWwnO1xuICAgIHRoaXMuc3RlcCA9IG9iai5zdGVwIHx8IDI7XG5cbiAgICB0aGlzLnN0eWxlID0gb2JqLnN0eWxlIHx8ICdpc3MnO1xuICB9XG5cbiAgZ2V0U3RhcnRpbmdDb25kaXRpb25zID0gKCkgPT4gKHtcbiAgICBlbGVtZW50SWQ6IHRoaXMuZWxlbWVudElkLFxuICAgIHNpZ246IHRoaXMuc2lnbixcbiAgICBsb3dlclNjYWxlQm91bmQ6IHRoaXMubG93ZXJTY2FsZUJvdW5kLFxuICAgIHVwcGVyU2NhbGVCb3VuZDogdGhpcy51cHBlclNjYWxlQm91bmQsXG4gICAgbG93ZXJTbGlkZXJWYWx1ZTogdGhpcy5sb3dlclNsaWRlclZhbHVlLFxuICAgIHVwcGVyU2xpZGVyVmFsdWU6IHRoaXMudXBwZXJTbGlkZXJWYWx1ZSxcbiAgICBzbGlkZXJUeXBlOiB0aGlzLnNsaWRlclR5cGUsXG4gICAgc3RlcDogdGhpcy5zdGVwLFxuICB9KTtcblxuICBpbml0ID0gKCkgPT4ge1xuICAgIHRoaXMuY3JlYXRlRE9NKCk7XG4gICAgdGhpcy53cml0ZURPTSgpO1xuICAgIHRoaXMud3JpdGVHZW9tZXRyeURPTXRvVmFyaWFibGVzKCk7XG4gICAgdGhpcy5jcmVhdGVMaXN0ZW5lck9uU2xpZGVyKCk7XG4gICAgdGhpcy5tb3Zlc1NsaWRlcnNUb1N0YXJ0UG9zaXRpb25zKCk7XG4gICAgdGhpcy53cml0ZU1vbmV5VG9GaWVsZHMoKTtcbiAgICB0aGlzLm1vdmVUb29sdGlwKCk7XG4gIH1cblxuICBjcmVhdGVET00gPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuc2xpZGVyVHlwZSA9PT0gJ2RvdWJsZScpIHtcbiAgICAgIHRoaXMuY3JlYXRlRG91YmxlRE9NKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLnNsaWRlclR5cGUgPT09ICdzaW5nbGUnKSB7XG4gICAgICB0aGlzLmNyZWF0ZVNpbmdsZURPTSgpO1xuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZVNpbmdsZURPTSA9ICgpID0+IHtcbiAgICB0aGlzLmVsZW0uaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCIke3RoaXMuc3R5bGV9X192YWx1ZS1maWVsZFwiPlxuICAgICAgPHNwYW4gY2xhc3M9XCIke3RoaXMuc3R5bGV9X19zdGF0aWNGaWVsZFwiPjwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz0gXCIke3RoaXMuc3R5bGV9X19jb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9IFwiJHt0aGlzLnN0eWxlfV9fc2NhbGVcIj48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCIke3RoaXMuc3R5bGV9X19jb2xvci1iYXJcIj48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCIke3RoaXMuc3R5bGV9X19zaW5nbGVfZmx5LXZhbHVlICR7dGhpcy5zdHlsZX1fX3Rvb2x0aXBcIj48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCIke3RoaXMuc3R5bGV9X19zaW5nbGUgJHt0aGlzLnN0eWxlfV9fZHJhZ1wiPjwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cIiR7dGhpcy5zdHlsZX1fX3Zpc2libGUtc2NhbGVcIj48L2Rpdj5cbiAgICAgIDwvZGl2PmA7XG4gIH1cblxuICBjcmVhdGVEb3VibGVET00gPSAoKSA9PiB7XG4gICAgdGhpcy5lbGVtLmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwiJHt0aGlzLnN0eWxlfV9fdmFsdWUtZmllbGRcIj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiJHt0aGlzLnN0eWxlfV9fc3RhdGljRmllbGRcIj48L3NwYW4+XG4gICAgICAtXG4gICAgICA8c3BhbiBjbGFzcz1cIiR7dGhpcy5zdHlsZX1fX3N0YXRpY0ZpZWxkXCI+PC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPSBcIiR7dGhpcy5zdHlsZX1fX2NvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzcz0gXCIke3RoaXMuc3R5bGV9X19zY2FsZVwiPjwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cIiR7dGhpcy5zdHlsZX1fX2RvdWJsZV9mbHktdmFsdWUtMSAke3RoaXMuc3R5bGV9X190b29sdGlwXCI+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiJHt0aGlzLnN0eWxlfV9fZG91YmxlXzFfaG9yaXpvbnRhbCAke3RoaXMuc3R5bGV9X19kcmFnXCI+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiJHt0aGlzLnN0eWxlfV9fZG91YmxlX2ZseS12YWx1ZS0yICR7dGhpcy5zdHlsZX1fX3Rvb2x0aXBcIj48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCIke3RoaXMuc3R5bGV9X19kb3VibGVfMl9ob3Jpem9udGFsICR7dGhpcy5zdHlsZX1fX2RyYWdcIj48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCIke3RoaXMuc3R5bGV9X19jb2xvci1iYXJcIj48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCIke3RoaXMuc3R5bGV9X192aXNpYmxlLXNjYWxlXCI+PC9kaXY+XG4gICAgICA8L2Rpdj5gO1xuICB9XG5cbiAgd3JpdGVET00gPSAoKSA9PiB7XG4gICAgdGhpcy5jaGVja0VsZW1lbnRzSW5ET00oKTtcbiAgICBpZiAodGhpcy5zbGlkZXJUeXBlID09PSAnc2luZ2xlJykge1xuICAgICAgdGhpcy53cml0ZVNpbmdsZURPTXRvVmFyaWFibGVzKCk7XG4gICAgICB0aGlzLndyaXRlU2luZ2xlU2xpZGVySW5kZW50KCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnNsaWRlclR5cGUgPT09ICdkb3VibGUnKSB7XG4gICAgICB0aGlzLndyaXRlRG91YmxlRE9NdG9WYXJpYWJsZXMoKTtcbiAgICAgIHRoaXMud3JpdGVEb3VibGVTbGlkZXJJbmRlbnQoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNoZWNrRWxlbWVudHNJbkRPTSA9ICgpID0+IHtcbiAgICBjb25zdCBET01FbGVtZW50cyA9IHRoaXMuZWxlbS5xdWVyeVNlbGVjdG9yQWxsKGAuJHt0aGlzLnN0eWxlfV9fZHJhZ2ApO1xuICAgIGlmICgoRE9NRWxlbWVudHMubGVuZ3RoID4gMCkpIHtcbiAgICAgIHRoaXMuc2xpZGVySW5ET00gPSBET01FbGVtZW50cztcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHdyaXRlU2luZ2xlRE9NdG9WYXJpYWJsZXMgPSAoKSA9PiB7XG4gICAgW3RoaXMuc2NhbGVdID0gdGhpcy5yZXR1cm5FbGVtZW50c0Zyb21ET00oYC4ke3RoaXMuc3R5bGV9X19zY2FsZWAsIDEpO1xuICAgIFt0aGlzLnNpbmdsZVNsaWRlcl0gPSB0aGlzLnJldHVybkVsZW1lbnRzRnJvbURPTShgLiR7dGhpcy5zdHlsZX1fX2RyYWdgLCAxKTtcbiAgICBbdGhpcy5zdGF0aWNGaWVsZFNpbmdsZV0gPSB0aGlzLnJldHVybkVsZW1lbnRzRnJvbURPTShgLiR7dGhpcy5zdHlsZX1fX3N0YXRpY0ZpZWxkYCwgMSk7XG4gICAgW3RoaXMuZmx5RmllbGRTaW5nbGVdID0gdGhpcy5yZXR1cm5FbGVtZW50c0Zyb21ET00oYC4ke3RoaXMuc3R5bGV9X190b29sdGlwYCwgMSk7XG4gICAgW3RoaXMucmliYm9uXSA9IHRoaXMucmV0dXJuRWxlbWVudHNGcm9tRE9NKGAuJHt0aGlzLnN0eWxlfV9fY29sb3ItYmFyYCwgMSk7XG4gIH1cblxuICBwcml2YXRlIHdyaXRlRG91YmxlRE9NdG9WYXJpYWJsZXMgPSAoKSA9PiB7XG4gICAgW3RoaXMuc2NhbGVdID0gdGhpcy5yZXR1cm5FbGVtZW50c0Zyb21ET00oYC4ke3RoaXMuc3R5bGV9X19zY2FsZWAsIDEpO1xuICAgIFt0aGlzLmxvd2VyU2xpZGVyLCB0aGlzLnVwcGVyU2xpZGVyXSA9IHRoaXMucmV0dXJuRWxlbWVudHNGcm9tRE9NKGAuJHt0aGlzLnN0eWxlfV9fZHJhZ2AsIDIpO1xuICAgIFt0aGlzLnN0YXRpY0ZpZWxkTG93ZXIsIHRoaXMuc3RhdGljRmllbGRVcHBlcl0gPSB0aGlzLnJldHVybkVsZW1lbnRzRnJvbURPTShgLiR7dGhpcy5zdHlsZX1fX3N0YXRpY0ZpZWxkYCwgMik7XG4gICAgW3RoaXMuZmx5RmllbGRMb3dlciwgdGhpcy5mbHlGaWVsZFVwcGVyXSA9IHRoaXMucmV0dXJuRWxlbWVudHNGcm9tRE9NKGAuJHt0aGlzLnN0eWxlfV9fdG9vbHRpcGAsIDIpO1xuICAgIFt0aGlzLnJpYmJvbl0gPSB0aGlzLnJldHVybkVsZW1lbnRzRnJvbURPTShgLiR7dGhpcy5zdHlsZX1fX2NvbG9yLWJhcmAsIDEpO1xuICB9XG5cbiAgcHJpdmF0ZSB3cml0ZVNpbmdsZVNsaWRlckluZGVudCA9ICgpID0+IHtcbiAgICBjb25zdCBlbGVtID0gdGhpcy5yZXR1cm5FbGVtZW50c0Zyb21ET00oYC4ke3RoaXMuc3R5bGV9X19kcmFnYCwgMSk7XG4gICAgdGhpcy5zaW5nbGVTbGlkZXJQb3NpdGlvbiA9IHRoaXMucmV0dXJuSW5kZW50KGVsZW1bMF0pO1xuICB9XG5cbiAgcHJpdmF0ZSB3cml0ZURvdWJsZVNsaWRlckluZGVudCA9ICgpID0+IHtcbiAgICBjb25zdCBlbGVtcyA9IHRoaXMucmV0dXJuRWxlbWVudHNGcm9tRE9NKGAuJHt0aGlzLnN0eWxlfV9fZHJhZ2AsIDIpO1xuICAgIHRoaXMubG93ZXJTbGlkZXJQb3NpdGlvbiA9IHRoaXMucmV0dXJuSW5kZW50KGVsZW1zWzBdKTtcbiAgICB0aGlzLnVwcGVyU2xpZGVyUG9zaXRpb24gPSB0aGlzLnJldHVybkluZGVudChlbGVtc1sxXSk7XG4gIH1cblxuICBwcml2YXRlIHJldHVybkluZGVudCA9IChlbGVtZW50OiBIVE1MRWxlbWVudCkgPT4ge1xuICAgIGlmICh0aGlzLmRpcmVjdGlvblR5cGUgPT09ICdob3Jpem9udGFsJykge1xuICAgICAgcmV0dXJuIGVsZW1lbnQub2Zmc2V0TGVmdDtcbiAgICB9IGlmICh0aGlzLmRpcmVjdGlvblR5cGUgPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgIHJldHVybiBlbGVtZW50Lm9mZnNldFRvcDtcbiAgICB9XG4gIH07XG5cbiAgcHJpdmF0ZSByZXR1cm5FbGVtZW50c0Zyb21ET00gPSAoY2xhc3NOYW1lOiBzdHJpbmcsIGxlbmd0aDogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgRE9NRWxlbWVudHMgPSB0aGlzLmVsZW0ucXVlcnlTZWxlY3RvckFsbChjbGFzc05hbWUpO1xuICAgIGlmICgoRE9NRWxlbWVudHMubGVuZ3RoID09PSBsZW5ndGgpKSB7XG4gICAgICByZXR1cm4gRE9NRWxlbWVudHM7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHdyaXRlR2VvbWV0cnlET010b1ZhcmlhYmxlcyA9ICgpID0+IHtcbiAgICB0aGlzLnNldERpcmVjdGlvbigpO1xuICAgIHRoaXMud3JpdGVHZW9tZXRyeU9mU2xpZGVyKCk7XG4gIH1cblxuICBwcml2YXRlIHNldERpcmVjdGlvbiA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5kaXJlY3Rpb25UeXBlID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgIHRoaXMubWFpbkF4aXNTaXplID0gdGhpcy5zY2FsZS5vZmZzZXRXaWR0aDtcbiAgICB9XG4gICAgaWYgKHRoaXMuZGlyZWN0aW9uVHlwZSA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgdGhpcy5tYWluQXhpc1NpemUgPSB0aGlzLnNjYWxlLm9mZnNldEhlaWdodDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHdyaXRlR2VvbWV0cnlPZlNsaWRlciA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5zbGlkZXJUeXBlID09PSAnc2luZ2xlJykge1xuICAgICAgdGhpcy5zbGlkZXJXaWR0aCA9IHRoaXMuc2luZ2xlU2xpZGVyLm9mZnNldFdpZHRoO1xuICAgICAgdGhpcy5zbGlkZXJIZWlnaHQgPSB0aGlzLnNpbmdsZVNsaWRlci5vZmZzZXRIZWlnaHQ7XG4gICAgfSBlbHNlIGlmICh0aGlzLnNsaWRlclR5cGUgPT09ICdkb3VibGUnKSB7XG4gICAgICB0aGlzLnNsaWRlcldpZHRoID0gdGhpcy5sb3dlclNsaWRlci5vZmZzZXRXaWR0aDtcbiAgICAgIHRoaXMuc2xpZGVySGVpZ2h0ID0gdGhpcy5sb3dlclNsaWRlci5vZmZzZXRIZWlnaHQ7XG4gICAgfVxuICAgIHRoaXMuY2FsY1BpeGVsU3RlcCgpO1xuICB9XG5cbiAgY2FsY1BpeGVsU3RlcCA9ICgpID0+IHtcbiAgICBjb25zdCBzdGVwSW5QaXhlbCA9ICh0aGlzLm1haW5BeGlzU2l6ZSAvICh0aGlzLnVwcGVyU2NhbGVCb3VuZCAtIHRoaXMubG93ZXJTY2FsZUJvdW5kKSkgKiB0aGlzLnN0ZXA7XG4gICAgaWYgKHN0ZXBJblBpeGVsIDwgMSkge1xuICAgICAgYWxlcnQoJ9Co0LDQsyDQsiDQv9C40LrRgdC10LvRj9GFINC80LXQvdGM0YjQtSAxcHgsINGA0LDRgdGH0LXRgtGLINC90LUg0L/RgNC+0LjQt9Cy0L7QtNGP0YLRgdGPLiDQqNCw0LMg0LDQstGC0L7QvNCw0YLQuNGH0LXRgdC60Lgg0LHRg9C00LXRgiDRg9Cy0LXQu9C40YfQuNCy0LDRgtGM0YHRjyDQvdCwIDUwLCDQv9C+0LrQsCDQvdC1INCx0YPQtNC10YIg0YHQvtC+0YLQstC10YLRgdGC0LLQvtCy0LDRgtGMINGD0YHQu9C+0LLQuNGP0LwnKTtcbiAgICAgIHRoaXMuc3RlcCA9IHRoaXMuc3RlcCArIDUwO1xuICAgICAgdGhpcy5jYWxjUGl4ZWxTdGVwKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucGl4ZWxTdGVwID0gc3RlcEluUGl4ZWw7XG4gICAgICB0aGlzLnJvdW5kZWRQaXhlbFN0ZXAgPSBNYXRoLnJvdW5kKHN0ZXBJblBpeGVsKTtcbiAgICB9XG4gIH1cblxuICBjcmVhdGVMaXN0ZW5lck9uU2xpZGVyID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLnNsaWRlclR5cGUgPT09ICdzaW5nbGUnKSB7XG4gICAgICB0aGlzLnNpbmdsZVNsaWRlci5vbm1vdXNlZG93biA9IHRoaXMuZXZlbnRPblNsaWRlcjtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2xpZGVyVHlwZSA9PT0gJ2RvdWJsZScpIHtcbiAgICAgIHRoaXMubG93ZXJTbGlkZXIub25tb3VzZWRvd24gPSB0aGlzLmV2ZW50T25TbGlkZXI7XG4gICAgICB0aGlzLnVwcGVyU2xpZGVyLm9ubW91c2Vkb3duID0gdGhpcy5ldmVudE9uU2xpZGVyO1xuICAgIH1cbiAgfVxuXG4gIG1vdmVzU2xpZGVyc1RvU3RhcnRQb3NpdGlvbnMgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuc2xpZGVyVHlwZSA9PT0gJ3NpbmdsZScpIHtcbiAgICAgIHRoaXMuc2V0U2luZ2xlVG9TdGFydFBvc2l0aW9uKCk7XG4gICAgICB0aGlzLm1vdmVSaWJib24oKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc2xpZGVyVHlwZSA9PT0gJ2RvdWJsZScpIHtcbiAgICAgIHRoaXMuc2V0c0RvdWJsZVRvU3RhcnRQb3N0aW9ucygpO1xuICAgICAgdGhpcy5tb3ZlUmliYm9uKCk7XG4gICAgfVxuICB9XG5cbiAgc2V0U2luZ2xlVG9TdGFydFBvc2l0aW9uID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLmRpcmVjdGlvblR5cGUgPT09ICdob3Jpem9udGFsJykge1xuICAgICAgdGhpcy5zaW5nbGVTbGlkZXIuc3R5bGUubGVmdCA9IGAke3RoaXMuY2FsY01vbmV5VG9Qb3NpdGlvbih0aGlzLmxvd2VyU2xpZGVyVmFsdWUpfXB4YDtcbiAgICB9XG4gICAgaWYgKHRoaXMuZGlyZWN0aW9uVHlwZSA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgdGhpcy5zaW5nbGVTbGlkZXIuc3R5bGUudG9wID0gYCR7dGhpcy5jYWxjTW9uZXlUb1Bvc2l0aW9uKHRoaXMubG93ZXJTbGlkZXJWYWx1ZSl9cHhgO1xuICAgIH1cbiAgfVxuXG4gIHNldHNEb3VibGVUb1N0YXJ0UG9zdGlvbnMgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMubG93ZXJTY2FsZUJvdW5kIDw9IHRoaXMubG93ZXJTbGlkZXJWYWx1ZSAmJiB0aGlzLnVwcGVyU2NhbGVCb3VuZCA+PSB0aGlzLnVwcGVyU2xpZGVyVmFsdWUpIHtcbiAgICAgIGlmICh0aGlzLmRpcmVjdGlvblR5cGUgPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICB0aGlzLmxvd2VyU2xpZGVyLnN0eWxlLmxlZnQgPSBgJHt0aGlzLmNhbGNNb25leVRvUG9zaXRpb24odGhpcy5sb3dlclNsaWRlclZhbHVlKX1weGA7XG4gICAgICAgIHRoaXMudXBwZXJTbGlkZXIuc3R5bGUubGVmdCA9IGAke3RoaXMuY2FsY01vbmV5VG9Qb3NpdGlvbih0aGlzLnVwcGVyU2xpZGVyVmFsdWUpfXB4YDtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmRpcmVjdGlvblR5cGUgPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgdGhpcy5sb3dlclNsaWRlci5zdHlsZS50b3AgPSBgJHt0aGlzLmNhbGNNb25leVRvUG9zaXRpb24odGhpcy51cHBlclNsaWRlclZhbHVlKX1weGA7XG4gICAgICAgIHRoaXMudXBwZXJTbGlkZXIuc3R5bGUudG9wID0gYCR7dGhpcy5jYWxjTW9uZXlUb1Bvc2l0aW9uKHRoaXMubG93ZXJTbGlkZXJWYWx1ZSl9cHhgO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHdyaXRlTW9uZXlUb0ZpZWxkcyA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5zbGlkZXJUeXBlID09PSAnc2luZ2xlJykge1xuICAgICAgdGhpcy5zdGF0aWNGaWVsZFNpbmdsZS5pbm5lclRleHQgPSBgJHt0aGlzLmxvd2VyU2xpZGVyVmFsdWV9JHt0aGlzLnNpZ259YDtcbiAgICAgIHRoaXMuZmx5RmllbGRTaW5nbGUuaW5uZXJUZXh0ID0gYCR7dGhpcy5sb3dlclNsaWRlclZhbHVlfSR7dGhpcy5zaWdufWA7XG4gICAgfVxuICAgIGlmICh0aGlzLnNsaWRlclR5cGUgPT09ICdkb3VibGUnKSB7XG4gICAgICB0aGlzLnN0YXRpY0ZpZWxkTG93ZXIuaW5uZXJUZXh0ID0gYCR7dGhpcy5sb3dlclNsaWRlclZhbHVlfSR7dGhpcy5zaWdufWA7XG4gICAgICB0aGlzLnN0YXRpY0ZpZWxkVXBwZXIuaW5uZXJUZXh0ID0gYCR7dGhpcy51cHBlclNsaWRlclZhbHVlfSR7dGhpcy5zaWdufWA7XG5cbiAgICAgIHRoaXMuZmx5RmllbGRMb3dlci5pbm5lclRleHQgPSBgJHt0aGlzLmxvd2VyU2xpZGVyVmFsdWV9JHt0aGlzLnNpZ259YDtcbiAgICAgIHRoaXMuZmx5RmllbGRVcHBlci5pbm5lclRleHQgPSBgJHt0aGlzLnVwcGVyU2xpZGVyVmFsdWV9JHt0aGlzLnNpZ259YDtcbiAgICB9XG4gIH1cblxuICBjYWxjTW9uZXlUb1Bvc2l0aW9uKG1vbmV5OiBudW1iZXIpIHtcbiAgICBsZXQgcG9zaXRpb246IG51bWJlcjtcbiAgICBpZiAodGhpcy5kaXJlY3Rpb25UeXBlID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgIHBvc2l0aW9uID0gKChtb25leSAtIHRoaXMubG93ZXJTY2FsZUJvdW5kKSAvIHRoaXMuc3RlcCkgKiB0aGlzLnBpeGVsU3RlcDtcbiAgICB9XG4gICAgaWYgKHRoaXMuZGlyZWN0aW9uVHlwZSA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgcG9zaXRpb24gPSB0aGlzLm1haW5BeGlzU2l6ZSAtICgoKG1vbmV5IC0gdGhpcy5sb3dlclNjYWxlQm91bmQpIC8gdGhpcy5zdGVwKSAqIHRoaXMucGl4ZWxTdGVwKTtcbiAgICB9XG4gICAgcmV0dXJuIHBvc2l0aW9uO1xuICB9XG5cbiAgcHJpdmF0ZSBldmVudE9uU2xpZGVyID0gKF9lOiBFdmVudCkgPT4ge1xuICAgIF9lLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5zZXRSZXN0cmljdGlvbk9mU2xpZGVyTW92ZW1lbnQoX2UpO1xuICAgIGRvY3VtZW50Lm9ubW91c2V1cCA9IHRoaXMuY2FuY2VsRXZlbnRzO1xuICAgIGRvY3VtZW50Lm9ubW91c2Vtb3ZlID0gdGhpcy5tb3ZlRXZlbnRXaXRoSG9sZE1vdXNlO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRSZXN0cmljdGlvbk9mU2xpZGVyTW92ZW1lbnQgPSAoX2U6IEV2ZW50KSA9PiB7XG4gICAgaWYgKHRoaXMuc2xpZGVyVHlwZSA9PT0gJ2RvdWJsZScpIHtcbiAgICAgIHRoaXMuc2V0UmVzdHJpY3Rpb25Gb3JEb3VibGVTbGlkZXIoX2UpO1xuICAgIH1cbiAgICBpZiAodGhpcy5zbGlkZXJUeXBlID09PSAnc2luZ2xlJykge1xuICAgICAgdGhpcy5zZXRSZXN0cmljdGlvbkZvclNpbmdsZVNsaWRlcigpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2V0UmVzdHJpY3Rpb25Gb3JEb3VibGVTbGlkZXIgPSAoX2U6IEV2ZW50KSA9PiB7XG4gICAgaWYgKHRoaXMuZGlyZWN0aW9uVHlwZSA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICBpZiAoX2UudGFyZ2V0ID09PSB0aGlzLmxvd2VyU2xpZGVyKSB7XG4gICAgICAgIHRoaXMudGFyZ2V0U2xpZGVyID0gdGhpcy5sb3dlclNsaWRlcjtcbiAgICAgICAgdGhpcy5sb3dlclJlc3RyaWN0aW9uID0gMDtcbiAgICAgICAgdGhpcy51cHBlclJlc3RyaWN0aW9uID0gdGhpcy51cHBlclNsaWRlclBvc2l0aW9uO1xuICAgICAgICB0aGlzLmxvd2VyQ29zdFJlc3RyaWN0aW9uID0gdGhpcy5sb3dlclNjYWxlQm91bmQ7XG4gICAgICAgIHRoaXMudXBwZXJDb3N0UmVzdHJpY3Rpb24gPSB0aGlzLmdldENvc3RGb3JTbGlkZXIodGhpcy51cHBlclJlc3RyaWN0aW9uKTtcbiAgICAgIH1cbiAgICAgIGlmIChfZS50YXJnZXQgPT09IHRoaXMudXBwZXJTbGlkZXIpIHtcbiAgICAgICAgdGhpcy50YXJnZXRTbGlkZXIgPSB0aGlzLnVwcGVyU2xpZGVyO1xuICAgICAgICB0aGlzLmxvd2VyUmVzdHJpY3Rpb24gPSB0aGlzLmxvd2VyU2xpZGVyUG9zaXRpb247XG4gICAgICAgIHRoaXMudXBwZXJSZXN0cmljdGlvbiA9IHRoaXMubWFpbkF4aXNTaXplO1xuICAgICAgICB0aGlzLmxvd2VyQ29zdFJlc3RyaWN0aW9uID0gdGhpcy5nZXRDb3N0Rm9yU2xpZGVyKHRoaXMubG93ZXJSZXN0cmljdGlvbik7XG4gICAgICAgIHRoaXMudXBwZXJDb3N0UmVzdHJpY3Rpb24gPSB0aGlzLnVwcGVyU2NhbGVCb3VuZDtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMuZGlyZWN0aW9uVHlwZSA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgaWYgKF9lLnRhcmdldCA9PT0gdGhpcy5sb3dlclNsaWRlcikge1xuICAgICAgICB0aGlzLnRhcmdldFNsaWRlciA9IHRoaXMubG93ZXJTbGlkZXI7XG4gICAgICAgIHRoaXMubG93ZXJSZXN0cmljdGlvbiA9IDA7XG4gICAgICAgIHRoaXMudXBwZXJSZXN0cmljdGlvbiA9IHRoaXMudXBwZXJTbGlkZXJQb3NpdGlvbjtcbiAgICAgICAgdGhpcy5sb3dlckNvc3RSZXN0cmljdGlvbiA9IHRoaXMuZ2V0Q29zdEZvclNsaWRlcih0aGlzLmxvd2VyUmVzdHJpY3Rpb24pO1xuICAgICAgICB0aGlzLnVwcGVyQ29zdFJlc3RyaWN0aW9uID0gdGhpcy5nZXRDb3N0Rm9yU2xpZGVyKHRoaXMudXBwZXJSZXN0cmljdGlvbik7XG4gICAgICB9XG4gICAgICBpZiAoX2UudGFyZ2V0ID09PSB0aGlzLnVwcGVyU2xpZGVyKSB7XG4gICAgICAgIHRoaXMudGFyZ2V0U2xpZGVyID0gdGhpcy51cHBlclNsaWRlcjtcbiAgICAgICAgdGhpcy5sb3dlclJlc3RyaWN0aW9uID0gdGhpcy5sb3dlclNsaWRlclBvc2l0aW9uO1xuICAgICAgICB0aGlzLnVwcGVyUmVzdHJpY3Rpb24gPSB0aGlzLm1haW5BeGlzU2l6ZTtcbiAgICAgICAgdGhpcy5sb3dlckNvc3RSZXN0cmljdGlvbiA9IHRoaXMuZ2V0Q29zdEZvclNsaWRlcih0aGlzLmxvd2VyUmVzdHJpY3Rpb24pO1xuICAgICAgICB0aGlzLnVwcGVyQ29zdFJlc3RyaWN0aW9uID0gdGhpcy5nZXRDb3N0Rm9yU2xpZGVyKHRoaXMudXBwZXJSZXN0cmljdGlvbik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRSZXN0cmljdGlvbkZvclNpbmdsZVNsaWRlciA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5kaXJlY3Rpb25UeXBlID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgIHRoaXMudGFyZ2V0U2xpZGVyID0gdGhpcy5zaW5nbGVTbGlkZXI7XG4gICAgICB0aGlzLmxvd2VyUmVzdHJpY3Rpb24gPSAwO1xuICAgICAgdGhpcy51cHBlclJlc3RyaWN0aW9uID0gdGhpcy5tYWluQXhpc1NpemU7XG4gICAgICB0aGlzLmxvd2VyQ29zdFJlc3RyaWN0aW9uID0gdGhpcy5sb3dlclNjYWxlQm91bmQ7XG4gICAgICB0aGlzLnVwcGVyQ29zdFJlc3RyaWN0aW9uID0gdGhpcy51cHBlclNjYWxlQm91bmQ7XG4gICAgfVxuICAgIGlmICh0aGlzLmRpcmVjdGlvblR5cGUgPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgIHRoaXMudGFyZ2V0U2xpZGVyID0gdGhpcy5zaW5nbGVTbGlkZXI7XG4gICAgICB0aGlzLmxvd2VyUmVzdHJpY3Rpb24gPSAwO1xuICAgICAgdGhpcy51cHBlclJlc3RyaWN0aW9uID0gdGhpcy5tYWluQXhpc1NpemU7XG4gICAgICB0aGlzLmxvd2VyQ29zdFJlc3RyaWN0aW9uID0gdGhpcy51cHBlclNjYWxlQm91bmQ7XG4gICAgICB0aGlzLnVwcGVyQ29zdFJlc3RyaWN0aW9uID0gdGhpcy5sb3dlclNjYWxlQm91bmQ7XG4gICAgfVxuICB9XG5cbiAgZ2V0Q29zdEZvclNsaWRlciA9IChzbGlkZXJQb3N0aW9uSW5QaXhlbDogbnVtYmVyKSA9PiB7XG4gICAgaWYgKHRoaXMuZGlyZWN0aW9uVHlwZSA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICBpZiAoc2xpZGVyUG9zdGlvbkluUGl4ZWwgPD0gMCkge1xuICAgICAgICByZXR1cm4gdGhpcy5sb3dlclNjYWxlQm91bmQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gKHRoaXMubG93ZXJTY2FsZUJvdW5kICsgKE1hdGgucm91bmQoc2xpZGVyUG9zdGlvbkluUGl4ZWwgLyB0aGlzLnBpeGVsU3RlcCkgKiB0aGlzLnN0ZXApKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZGlyZWN0aW9uVHlwZSA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgaWYgKHNsaWRlclBvc3Rpb25JblBpeGVsIDw9IDApIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXBwZXJTY2FsZUJvdW5kO1xuICAgICAgfVxuICAgICAgcmV0dXJuICgoTWF0aC5yb3VuZCgodGhpcy5tYWluQXhpc1NpemUgLSBzbGlkZXJQb3N0aW9uSW5QaXhlbCkgLyB0aGlzLnBpeGVsU3RlcCkgKiB0aGlzLnN0ZXApICsgdGhpcy5sb3dlclNjYWxlQm91bmQpO1xuICAgIH1cbiAgfVxuXG4gIG1vdmVFdmVudFdpdGhIb2xkTW91c2UgPSAoX2U6IE1vdXNlRXZlbnQpID0+IHtcbiAgICBjb25zdCBpbm5lck1vdXNlUG9zaXRpb24gPSB0aGlzLmdldE1vdXNlUG9zaXRpb24oX2UpO1xuXG4gICAgY29uc3QgbmVhcmVzdFJvdW5kZWRTdGVwID0gdGhpcy5jYWxjTmVhcmVzdFN0ZXAoaW5uZXJNb3VzZVBvc2l0aW9uKTtcblxuICAgIGNvbnN0IGZpbmFsUG9zaXRpb25JblBpeGVsID0gdGhpcy5jYWxjRmluYWxQb3NpdGlvbihuZWFyZXN0Um91bmRlZFN0ZXApO1xuXG4gICAgY29uc3QgZmluYWxDb3N0ID0gdGhpcy5jYWxjRmluYWxDb3N0KG5lYXJlc3RSb3VuZGVkU3RlcCk7XG5cbiAgICB0aGlzLm1vdmVTbGlkZXIoZmluYWxQb3NpdGlvbkluUGl4ZWwpO1xuXG4gICAgdGhpcy5zaG93TW9uZXlPblNjcmVlbihmaW5hbENvc3QpO1xuXG4gICAgdGhpcy53cml0ZU1vbmV5VG9WYXJpYWJsZXMoZmluYWxDb3N0KTtcblxuICAgIHRoaXMuc2V0T3ZlcmxheSgpO1xuXG4gICAgdGhpcy5tb3ZlUmliYm9uKCk7XG5cbiAgICB0aGlzLm1vdmVUb29sdGlwKCk7XG4gIH1cblxuICBwcml2YXRlIGdldE1vdXNlUG9zaXRpb24gPSAoX2U6IE1vdXNlRXZlbnQpID0+IHtcbiAgICB0aGlzLmNsaWVudFJlY3QgPSB0aGlzLnNjYWxlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGlmICh0aGlzLmRpcmVjdGlvblR5cGUgPT09ICdob3Jpem9udGFsJykge1xuICAgICAgdGhpcy5pbmRlbnQgPSB0aGlzLmNsaWVudFJlY3QubGVmdDtcbiAgICAgIHJldHVybiAoX2UuY2xpZW50WCAtIHRoaXMuaW5kZW50IC0gKHRoaXMuc2xpZGVyV2lkdGggLyAyKSk7XG4gICAgfSBpZiAodGhpcy5kaXJlY3Rpb25UeXBlID09PSAndmVydGljYWwnKSB7XG4gICAgICB0aGlzLmluZGVudCA9IHRoaXMuY2xpZW50UmVjdC50b3A7XG4gICAgICByZXR1cm4gKF9lLmNsaWVudFkgLSB0aGlzLmluZGVudCAtICh0aGlzLnNsaWRlckhlaWdodCAvIDIpKTtcbiAgICB9XG4gIH1cblxuICBjYWxjTmVhcmVzdFN0ZXAgPSAoX3Bvc2l0aW9uSW5QaXhlbDogbnVtYmVyKSA9PiB7XG4gICAgaWYgKHRoaXMuZGlyZWN0aW9uVHlwZSA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICByZXR1cm4gTWF0aC5yb3VuZChfcG9zaXRpb25JblBpeGVsIC8gdGhpcy5waXhlbFN0ZXApO1xuICAgIH1cbiAgICBpZiAodGhpcy5kaXJlY3Rpb25UeXBlID09PSAndmVydGljYWwnKSB7XG4gICAgICByZXR1cm4gTWF0aC5yb3VuZCgodGhpcy5tYWluQXhpc1NpemUgLSBfcG9zaXRpb25JblBpeGVsKSAvIHRoaXMucGl4ZWxTdGVwKTtcbiAgICB9XG4gIH1cblxuICBjYWxjRmluYWxQb3NpdGlvbiA9IChfbmVhcmVzdFJvdW5kZWRTdGVwOiBudW1iZXIpID0+IHtcbiAgICBjb25zdCBwb3NpdGlvbkluUGl4ZWwgPSBfbmVhcmVzdFJvdW5kZWRTdGVwICogdGhpcy5waXhlbFN0ZXA7XG4gICAgaWYgKHRoaXMuZGlyZWN0aW9uVHlwZSA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICBpZiAodGhpcy5pc1BpeGVsc0luQm9yZGVyKHBvc2l0aW9uSW5QaXhlbCkpIHtcbiAgICAgICAgcmV0dXJuIHBvc2l0aW9uSW5QaXhlbDtcbiAgICAgIH1cbiAgICAgIGlmIChwb3NpdGlvbkluUGl4ZWwgPD0gdGhpcy5sb3dlclJlc3RyaWN0aW9uKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvd2VyUmVzdHJpY3Rpb247XG4gICAgICB9XG4gICAgICBpZiAocG9zaXRpb25JblBpeGVsID49IHRoaXMudXBwZXJSZXN0cmljdGlvbikge1xuICAgICAgICByZXR1cm4gdGhpcy51cHBlclJlc3RyaWN0aW9uO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5kaXJlY3Rpb25UeXBlID09PSAndmVydGljYWwnKSB7XG4gICAgICBpZiAodGhpcy5pc1BpeGVsc0luQm9yZGVyKCh0aGlzLm1haW5BeGlzU2l6ZSAtIHBvc2l0aW9uSW5QaXhlbCkpKSB7XG4gICAgICAgIHJldHVybiAodGhpcy5tYWluQXhpc1NpemUgLSBwb3NpdGlvbkluUGl4ZWwpO1xuICAgICAgfVxuICAgICAgaWYgKCh0aGlzLm1haW5BeGlzU2l6ZSAtIHBvc2l0aW9uSW5QaXhlbCkgPD0gdGhpcy5sb3dlclJlc3RyaWN0aW9uKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvd2VyUmVzdHJpY3Rpb247XG4gICAgICB9XG4gICAgICBpZiAoKHRoaXMubWFpbkF4aXNTaXplIC0gcG9zaXRpb25JblBpeGVsKSA+PSB0aGlzLnVwcGVyUmVzdHJpY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXBwZXJSZXN0cmljdGlvbjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjYWxjRmluYWxDb3N0ID0gKF9uZWFyZXN0Um91bmRlZFN0ZXA6IG51bWJlcikgPT4ge1xuICAgIGlmICh0aGlzLmRpcmVjdGlvblR5cGUgPT09ICdob3Jpem9udGFsJykge1xuICAgICAgY29uc3QgcG9zaXRpb25Jbk1vbmV5ID0gdGhpcy5sb3dlclNjYWxlQm91bmQgKyAoX25lYXJlc3RSb3VuZGVkU3RlcCAqIHRoaXMuc3RlcCk7XG5cbiAgICAgIGlmICh0aGlzLmlzTW9uZXlJbkJvcmRlcihwb3NpdGlvbkluTW9uZXkpKSB7XG4gICAgICAgIHJldHVybiBwb3NpdGlvbkluTW9uZXk7XG4gICAgICB9XG4gICAgICBpZiAocG9zaXRpb25Jbk1vbmV5IDwgdGhpcy5sb3dlckNvc3RSZXN0cmljdGlvbikge1xuICAgICAgICByZXR1cm4gdGhpcy5sb3dlckNvc3RSZXN0cmljdGlvbjtcbiAgICAgIH1cbiAgICAgIGlmIChwb3NpdGlvbkluTW9uZXkgPiB0aGlzLnVwcGVyQ29zdFJlc3RyaWN0aW9uKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVwcGVyQ29zdFJlc3RyaWN0aW9uO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5kaXJlY3Rpb25UeXBlID09PSAndmVydGljYWwnKSB7XG4gICAgICBjb25zdCBwb3NpdGlvbkluTW9uZXkgPSAoX25lYXJlc3RSb3VuZGVkU3RlcCAqIHRoaXMuc3RlcCkgKyB0aGlzLmxvd2VyU2NhbGVCb3VuZDtcbiAgICAgIGlmICh0aGlzLmlzTW9uZXlJbkJvcmRlcihwb3NpdGlvbkluTW9uZXkpKSB7XG4gICAgICAgIHJldHVybiBwb3NpdGlvbkluTW9uZXk7XG4gICAgICB9XG4gICAgICBpZiAocG9zaXRpb25Jbk1vbmV5ID4gdGhpcy5sb3dlckNvc3RSZXN0cmljdGlvbikge1xuICAgICAgICByZXR1cm4gdGhpcy5sb3dlckNvc3RSZXN0cmljdGlvbjtcbiAgICAgIH1cbiAgICAgIGlmIChwb3NpdGlvbkluTW9uZXkgPCB0aGlzLnVwcGVyQ29zdFJlc3RyaWN0aW9uKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVwcGVyQ29zdFJlc3RyaWN0aW9uO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlzUGl4ZWxzSW5Cb3JkZXIgPSAoX3Bvc2l0aW9uOiBudW1iZXIpID0+ICgoX3Bvc2l0aW9uID49IHRoaXMubG93ZXJSZXN0cmljdGlvbikgJiYgKF9wb3NpdGlvbiA8PSB0aGlzLnVwcGVyUmVzdHJpY3Rpb24pKVxuXG4gIGlzTW9uZXlJbkJvcmRlciA9IChfcG9zaXRpb246IG51bWJlcikgPT4ge1xuICAgIGlmICh0aGlzLmRpcmVjdGlvblR5cGUgPT09ICdob3Jpem9udGFsJykge1xuICAgICAgcmV0dXJuICgoX3Bvc2l0aW9uID49IHRoaXMubG93ZXJDb3N0UmVzdHJpY3Rpb24pICYmIChfcG9zaXRpb24gPD0gdGhpcy51cHBlckNvc3RSZXN0cmljdGlvbikpO1xuICAgIH1cbiAgICBpZiAodGhpcy5kaXJlY3Rpb25UeXBlID09PSAndmVydGljYWwnKSB7XG4gICAgICByZXR1cm4gKChfcG9zaXRpb24gPD0gdGhpcy5sb3dlckNvc3RSZXN0cmljdGlvbikgJiYgKF9wb3NpdGlvbiA+PSB0aGlzLnVwcGVyQ29zdFJlc3RyaWN0aW9uKSk7XG4gICAgfVxuICB9XG5cbiAgc2hvd01vbmV5T25TY3JlZW4gPSAoZmluYWxDb3N0OiBudW1iZXIpID0+IHtcbiAgICBjb25zdCBjb3N0ID0gYCR7ZmluYWxDb3N0fSR7dGhpcy5zaWdufWA7XG4gICAgaWYgKHRoaXMudGFyZ2V0U2xpZGVyID09PSB0aGlzLmxvd2VyU2xpZGVyKSB7XG4gICAgICB0aGlzLnN0YXRpY0ZpZWxkTG93ZXIudGV4dENvbnRlbnQgPSBgJHtjb3N0fWA7XG4gICAgICB0aGlzLmZseUZpZWxkTG93ZXIudGV4dENvbnRlbnQgPSBgJHtjb3N0fWA7XG4gICAgfVxuICAgIGlmICh0aGlzLnRhcmdldFNsaWRlciA9PT0gdGhpcy51cHBlclNsaWRlcikge1xuICAgICAgdGhpcy5zdGF0aWNGaWVsZFVwcGVyLnRleHRDb250ZW50ID0gYCR7Y29zdH1gO1xuICAgICAgdGhpcy5mbHlGaWVsZFVwcGVyLnRleHRDb250ZW50ID0gYCR7Y29zdH1gO1xuICAgIH1cbiAgICBpZiAodGhpcy50YXJnZXRTbGlkZXIgPT09IHRoaXMuc2luZ2xlU2xpZGVyKSB7XG4gICAgICB0aGlzLnN0YXRpY0ZpZWxkU2luZ2xlLnRleHRDb250ZW50ID0gYCR7Y29zdH1gO1xuICAgICAgdGhpcy5mbHlGaWVsZFNpbmdsZS50ZXh0Q29udGVudCA9IGAke2Nvc3R9YDtcbiAgICB9XG4gIH1cblxuICB3cml0ZU1vbmV5VG9WYXJpYWJsZXMgPSAoZmluYWxDb3N0OiBudW1iZXIpID0+IHtcbiAgICBpZiAodGhpcy50YXJnZXRTbGlkZXIgPT09IHRoaXMubG93ZXJTbGlkZXIpIHtcbiAgICAgIHRoaXMubG93ZXJTbGlkZXJWYWx1ZSA9IGZpbmFsQ29zdDtcbiAgICB9XG4gICAgaWYgKHRoaXMudGFyZ2V0U2xpZGVyID09PSB0aGlzLnVwcGVyU2xpZGVyKSB7XG4gICAgICB0aGlzLnVwcGVyU2xpZGVyVmFsdWUgPSBmaW5hbENvc3Q7XG4gICAgfVxuICAgIGlmICh0aGlzLnRhcmdldFNsaWRlciA9PT0gdGhpcy5zaW5nbGVTbGlkZXIpIHtcbiAgICAgIHRoaXMubG93ZXJTbGlkZXJWYWx1ZSA9IGZpbmFsQ29zdDtcbiAgICB9XG4gIH07XG5cbiAgcHJpdmF0ZSBtb3ZlUmliYm9uID0gKCkgPT4ge1xuICAgIGNvbnN0IHNldEhvcml6b250YWxSaWJib25WYXJpYWJsZXMgPSAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5zbGlkZXJJbkRPTS5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgdGhpcy5yaWJib24uc3R5bGUubGVmdCA9ICcwcHgnO1xuICAgICAgICB0aGlzLnJpYmJvbi5zdHlsZS53aWR0aCA9IGAke3RoaXMuc2luZ2xlU2xpZGVyLm9mZnNldExlZnQgKyAodGhpcy5zbGlkZXJXaWR0aCAvIDIpfXB4YDtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5zbGlkZXJJbkRPTS5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgdGhpcy5yaWJib24uc3R5bGUubGVmdCA9IGAke3RoaXMubG93ZXJTbGlkZXIub2Zmc2V0TGVmdCArICh0aGlzLnNsaWRlcldpZHRoIC8gMil9cHhgO1xuICAgICAgICB0aGlzLnJpYmJvbi5zdHlsZS53aWR0aCA9IGAke3RoaXMudXBwZXJTbGlkZXIub2Zmc2V0TGVmdCAtIHRoaXMubG93ZXJTbGlkZXIub2Zmc2V0TGVmdH1weGA7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IHNldFZlcnRpY2FsUmliYm9uVmFyaWFibGVzID0gKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuc2xpZGVySW5ET00ubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIHRoaXMucmliYm9uLnN0eWxlLnRvcCA9IGAke3RoaXMuc2luZ2xlU2xpZGVyLm9mZnNldFRvcCArICh0aGlzLnNsaWRlckhlaWdodCAvIDIpfXB4YDtcbiAgICAgICAgdGhpcy5yaWJib24uc3R5bGUuaGVpZ2h0ID0gYCR7dGhpcy5tYWluQXhpc1NpemUgLSB0aGlzLnNpbmdsZVNsaWRlci5vZmZzZXRUb3AgKyAodGhpcy5zbGlkZXJIZWlnaHQgLyAyKX1weGA7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuc2xpZGVySW5ET00ubGVuZ3RoID09PSAyKSB7XG4gICAgICAgIHRoaXMucmliYm9uLnN0eWxlLnRvcCA9IGAke3RoaXMubG93ZXJTbGlkZXIub2Zmc2V0VG9wICsgKHRoaXMuc2xpZGVySGVpZ2h0IC8gMil9cHhgO1xuICAgICAgICB0aGlzLnJpYmJvbi5zdHlsZS5oZWlnaHQgPSBgJHt0aGlzLnVwcGVyU2xpZGVyLm9mZnNldFRvcCAtIHRoaXMubG93ZXJTbGlkZXIub2Zmc2V0VG9wfXB4YDtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKHRoaXMuZGlyZWN0aW9uVHlwZSA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICBzZXRIb3Jpem9udGFsUmliYm9uVmFyaWFibGVzKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmRpcmVjdGlvblR5cGUgPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgIHNldFZlcnRpY2FsUmliYm9uVmFyaWFibGVzKCk7XG4gICAgfVxuICB9XG5cbiAgbW92ZVNsaWRlciA9IChudW06IG51bWJlcikgPT4ge1xuICAgIGlmICh0aGlzLmRpcmVjdGlvblR5cGUgPT09ICdob3Jpem9udGFsJykge1xuICAgICAgdGhpcy50YXJnZXRTbGlkZXIuc3R5bGUubGVmdCA9IGAke251bX1weGA7XG4gICAgfSBlbHNlIGlmICh0aGlzLmRpcmVjdGlvblR5cGUgPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgIHRoaXMudGFyZ2V0U2xpZGVyLnN0eWxlLnRvcCA9IGAke251bX1weGA7XG4gICAgfVxuICB9XG5cbiAgbW92ZVRvb2x0aXAgPSAoKSA9PiB7XG4gICAgY29uc3QgbW92ZSA9IChkaXJlY3Rpb246IHN0cmluZywgb2Zmc2V0OiAnb2Zmc2V0TGVmdCcgfCAnb2Zmc2V0VG9wJywgc2xpZGVyU2l6ZTogbnVtYmVyKSA9PiB7XG4gICAgICBpZiAodGhpcy5zbGlkZXJUeXBlID09PSAnc2luZ2xlJykge1xuICAgICAgICB0aGlzLmVsZW0ucXVlcnlTZWxlY3RvckFsbChgLiR7dGhpcy5zdHlsZX1fX3Rvb2x0aXBgKVswXS5zdHlsZVtkaXJlY3Rpb25dID0gYCR7dGhpcy5zaW5nbGVTbGlkZXJbb2Zmc2V0XSAtIHNsaWRlclNpemV9cHhgO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuc2xpZGVyVHlwZSA9PT0gJ2RvdWJsZScpIHtcbiAgICAgICAgdGhpcy5lbGVtLnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke3RoaXMuc3R5bGV9X190b29sdGlwYClbMF0uc3R5bGVbZGlyZWN0aW9uXSA9IGAke3RoaXMubG93ZXJTbGlkZXJbb2Zmc2V0XSAtIHNsaWRlclNpemV9cHhgO1xuICAgICAgICB0aGlzLmVsZW0ucXVlcnlTZWxlY3RvckFsbChgLiR7dGhpcy5zdHlsZX1fX3Rvb2x0aXBgKVsxXS5zdHlsZVtkaXJlY3Rpb25dID0gYCR7dGhpcy51cHBlclNsaWRlcltvZmZzZXRdIC0gc2xpZGVyU2l6ZX1weGA7XG4gICAgICB9XG4gICAgfTtcbiAgICBpZiAodGhpcy5kaXJlY3Rpb25UeXBlID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgIG1vdmUoJ2xlZnQnLCAnb2Zmc2V0TGVmdCcsICh0aGlzLnNsaWRlcldpZHRoIC8gMykpO1xuICAgIH1cbiAgICBpZiAodGhpcy5kaXJlY3Rpb25UeXBlID09PSAndmVydGljYWwnKSB7XG4gICAgICBtb3ZlKCd0b3AnLCAnb2Zmc2V0VG9wJywgMCk7XG4gICAgfVxuICB9XG5cbiAgc2V0T3ZlcmxheSA9ICgpID0+IHtcbiAgICBpZiAodGhpcy50YXJnZXRTbGlkZXIgPT09IHRoaXMubG93ZXJTbGlkZXIpIHtcbiAgICAgIHRoaXMudGFyZ2V0U2xpZGVyLnN0eWxlLnpJbmRleCA9ICcxMDAnO1xuICAgICAgdGhpcy51cHBlclNsaWRlci5zdHlsZS56SW5kZXggPSAnMSc7XG4gICAgfSBlbHNlIGlmICh0aGlzLnRhcmdldFNsaWRlciA9PT0gdGhpcy51cHBlclNsaWRlcikge1xuICAgICAgdGhpcy50YXJnZXRTbGlkZXIuc3R5bGUuekluZGV4ID0gJzEwMCc7XG4gICAgICB0aGlzLmxvd2VyU2xpZGVyLnN0eWxlLnpJbmRleCA9ICcxJztcbiAgICB9XG4gIH1cblxuICBjYW5jZWxFdmVudHMgPSAoKSA9PiB7XG4gICAgdGhpcy53cml0ZURPTSgpO1xuICAgIGRvY3VtZW50Lm9ubW91c2V1cCA9IG51bGw7XG4gICAgZG9jdW1lbnQub25tb3VzZW1vdmUgPSBudWxsO1xuICB9XG59XG5cbmV4cG9ydCB7IFZpZXcgfTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=