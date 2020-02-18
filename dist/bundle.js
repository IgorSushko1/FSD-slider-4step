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

/***/ "./is_refactoring.css":
/*!****************************!*\
  !*** ./is_refactoring.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

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
            console.log('Работает!!!! Автоматическая загрузка и обновление на лету работают!!');
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
                // console.log('работает!');
                // console.log(`elementForListener.value === ${elementForListener.value}`);
                this.settings[keyOfSetting] = elementForListener.value;
                this.sliderRefresh();
            };
            elementForListener.addEventListener('change', changeListener);
        };
        this.createListenerNumeral = (elementForListener, keyOfSetting) => {
            const inputListener = () => {
                console.log('Работает!!!! Автоматическая загрузка и обновление на лету работают!!');
                console.log(elementForListener.getElementsByTagName('input')[0].valueAsNumber);
                this.settings[keyOfSetting] = Number(elementForListener.getElementsByTagName('input')[0].valueAsNumber);
                console.log(keyOfSetting);
                console.log(this.settings);
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
                console.log(`keyOfSetting === ${keyOfSetting}`);
                if (type === 'numeral') {
                    const eventElement = controlPanel.querySelector(`#${currentObj.elementName}`);
                    this.createListenerNumeral(eventElement, keyOfSetting);
                }
                if (type === 'select') {
                    console.log('123');
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
/* harmony import */ var _is_refactoring_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../is_refactoring.css */ "./is_refactoring.css");
/* harmony import */ var _is_refactoring_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_is_refactoring_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ISSlider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ISSlider */ "./src/refactoring/ts/ISSlider.ts");

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
    elementId: '#iss',
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
            this.elementId = obj.elementId || '#iss';
            this.elem = document.getElementById('iss');
            this.sign = obj.sign || 'R';
            this.lowerScaleBound = Number(obj.lowerScaleBound) || 0;
            this.upperScaleBound = Number(obj.upperScaleBound) || 1000;
            this.lowerSliderValue = Number(obj.lowerSliderValue) || 200;
            this.upperSliderValue = Number(obj.upperSliderValue) || 800;
            this.sliderType = obj.sliderType || 'single';
            this.directionType = obj.directionType || 'horizontal';
            this.step = obj.step || 2;
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
                return (_e.clientX - this.indent - this.sliderWidth);
            }
            if (this.directionType === 'vertical') {
                this.indent = this.clientRect.top;
                return (_e.clientY - this.indent - this.sliderHeight);
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
                console.log(`positionInMoney === ${positionInMoney}`);
                console.log(`this.isMoneyInBorder(positionInMoney) === ${this.isMoneyInBorder(positionInMoney)}`);
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
        if (this.directionType === 'horizontal') {
            const position = ((money - this.lowerScaleBound) / this.step) * this.pixelStep;
            return position;
        }
        if (this.directionType === 'vertical') {
            const position = this.mainAxisSize - (((money - this.lowerScaleBound) / this.step) * this.pixelStep);
            return position;
        }
    }
}



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vaXNfcmVmYWN0b3JpbmcuY3NzPzcwZTkiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZmFjdG9yaW5nL3RzL0NvbnRyb2xQYW5lbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVmYWN0b3JpbmcvdHMvSVNTbGlkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZmFjdG9yaW5nL3RzL2NvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZmFjdG9yaW5nL3RzL21vZGVsLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWZhY3RvcmluZy90cy9yZWZhY3RvcmluZ0luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9yZWZhY3RvcmluZy90cy9yZWZhY3RvcmluZ1ZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7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R0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUMvRSxPQUFPLFFBQVEsQ0FBQztTQUNqQjtRQUNELElBQUksSUFBSSxDQUFDLGFBQWEsS0FBSyxVQUFVLEVBQUU7WUFDckMsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDckcsT0FBTyxRQUFRLENBQUM7U0FDakI7SUFDSCxDQUFDO0NBb1NGO0FBRWUiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvcmVmYWN0b3JpbmcvdHMvcmVmYWN0b3JpbmdJbmRleC50c1wiKTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImludGVyZmFjZSBWYWx1ZXMge1xuICBbYTogc3RyaW5nXTogRWxlbWVudEludGVyZmFjZTtcbn1cblxuaW50ZXJmYWNlIEVsZW1lbnRJbnRlcmZhY2Uge1xuICB0aXRsZT86IHN0cmluZztcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gIGVsZW1lbnROYW1lPzogc3RyaW5nO1xuICB2YWx1ZT86IGFueTtcbiAgbmFtZU9mVmFyaWFibGU/OiBzdHJpbmc7XG4gIHR5cGU/OiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBQYXJhbSB7XG4gIGlkRm9yQ29udHJvbFBhbmVsPzogc3RyaW5nO1xuICBkaXJlY3Rpb25UeXBlPzogc3RyaW5nO1xuICBlbGVtZW50SWQ/OiBzdHJpbmc7XG4gIGVsZW0/OiBhbnk7XG4gIHNpZ24/OiBzdHJpbmc7XG4gIGxvd2VyU2NhbGVCb3VuZD86IG51bWJlcjtcbiAgdXBwZXJTY2FsZUJvdW5kPzogbnVtYmVyO1xuICBsb3dlclNsaWRlclZhbHVlPzogbnVtYmVyO1xuICB1cHBlclNsaWRlclZhbHVlPzogbnVtYmVyO1xuICBzbGlkZXJUeXBlPzogc3RyaW5nO1xuICBzdGVwPzogbnVtYmVyO1xuICBjb250cm9sbGVyPzogYW55O1xuICB0b29sdGlwPzogc3RyaW5nO1xuICAvLyB2YWx1ZV9maWVsZF9zdGF0ZT86IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIENvbnRyb2xQYW5lbCB7XG4gIGNvbnRyb2xQYW5lbDogSFRNTEVsZW1lbnQsXG4gIHNlbGVjdE9yT3I6IEhUTUxFbGVtZW50LFxuICBkaXZOdW1lcmFsOiBIVE1MRWxlbWVudCxcbiAgY29udHJvbGxlcjogYW55O1xuICBtb2RlbDogYW55O1xufVxuXG5jbGFzcyBDb250cm9sUGFuZWwge1xuICBvclZhbHVlczogVmFsdWVzID0ge1xuICAgIHNpZ246IHtcbiAgICAgIHRpdGxlOiAnU2lnbicsXG4gICAgICBkZXNjcmlwdGlvbjogJ9CS0LDQu9GO0YLQsCcsXG4gICAgICBlbGVtZW50TmFtZTogJ3NpZ24nLFxuICAgICAgdmFsdWU6IFsn4oK9JywgJyQnXSxcbiAgICAgIG5hbWVPZlZhcmlhYmxlOiAnc2lnbicsXG4gICAgfSxcbiAgICBzbGlkZXJUeXBlOiB7XG4gICAgICB0aXRsZTogJ1R5cGUnLFxuICAgICAgZGVzY3JpcHRpb246ICfQotC40L8g0YHQu9Cw0LnQtNC10YDQsCAtINC+0LTQuNC90LDRgNC90YvQuSDQuNC70Lgg0LTQstC+0LnQvdC+0LknLFxuICAgICAgZWxlbWVudE5hbWU6ICdzbGlkZXJUeXBlJyxcbiAgICAgIHZhbHVlOiBbJ2RvdWJsZScsICdzaW5nbGUnXSxcbiAgICAgIG5hbWVPZlZhcmlhYmxlOiAnc2xpZGVyVHlwZScsXG4gICAgfSxcbiAgICBkaXJlY3Rpb25UeXBlOiB7XG4gICAgICB0aXRsZTogJ1R5cGUnLFxuICAgICAgZGVzY3JpcHRpb246ICfQotC40L8g0YHQu9Cw0LnQtNC10YDQsCAtINCy0LXRgNGC0LjQutCw0LvRjNC90YvQuSDQuNC70Lgg0LPQvtGA0LjQt9C+0L3RgtCw0LvRjNC90YvQuScsXG4gICAgICBlbGVtZW50TmFtZTogJ2RpcmVjdGlvblR5cGUnLFxuICAgICAgdmFsdWU6IFsnaG9yaXpvbnRhbCcsICd2ZXJ0aWNhbCddLFxuICAgICAgbmFtZU9mVmFyaWFibGU6ICdkaXJlY3Rpb25UeXBlJyxcbiAgICB9LFxuICB9O1xuXG4gIG51bWVyYWxWYWx1ZXM6IFZhbHVlcyA9IHtcbiAgICBzdGVwOiB7XG4gICAgICB0aXRsZTogJ1N0ZXAnLFxuICAgICAgZGVzY3JpcHRpb246ICfQqNCw0LMg0L/QvtC70LfRg9C90LrQsCcsXG4gICAgICBlbGVtZW50TmFtZTogJ3N0ZXAnLFxuICAgICAgdHlwZTogJ251bWJlcicsXG4gICAgICBuYW1lT2ZWYXJpYWJsZTogJ3N0ZXAnLFxuICAgIH0sXG4gICAgbG93ZXJTY2FsZUJvdW5kOiB7XG4gICAgICB0aXRsZTogJ01pbl9zbGlkZXInLFxuICAgICAgZGVzY3JpcHRpb246ICfQnNC40L3QuNC80LDQu9GM0L3QvtC1INC30L3QsNGH0LXQvdC40LUg0YjQutCw0LvRiyDRgdC70LDQudC00LXRgNCwJyxcbiAgICAgIGVsZW1lbnROYW1lOiAnbG93ZXJTY2FsZUJvdW5kJyxcbiAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgbmFtZU9mVmFyaWFibGU6ICdsb3dlclNjYWxlQm91bmQnLFxuICAgIH0sXG4gICAgdXBwZXJTY2FsZUJvdW5kOiB7XG4gICAgICB0aXRsZTogJ01heF9zbGlkZXInLFxuICAgICAgZGVzY3JpcHRpb246ICfQnNCw0LrRgdC40LzQsNC70YzQvdC+0LUg0LfQvdCw0YfQtdC90LjQtSDRiNC60LDQu9GLINGB0LvQsNC50LTQtdGA0LAnLFxuICAgICAgZWxlbWVudE5hbWU6ICd1cHBlclNjYWxlQm91bmQnLFxuICAgICAgdHlwZTogJ251bWJlcicsXG4gICAgICBuYW1lT2ZWYXJpYWJsZTogJ3VwcGVyU2NhbGVCb3VuZCcsXG4gICAgfSxcbiAgICBsb3dlclNsaWRlclZhbHVlOiB7XG4gICAgICB0aXRsZTogJ01pbl9zbGlkZXInLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICfQndCw0YfQsNC70YzQvdC+0LUg0LfQvdCw0YfQtdC90LjQtSDRiNC60LDQu9GLINGB0LvQsNC50LTQtdGA0LAgLSDQtNC70Y8g0L/QtdGA0LLQvtCz0L4g0LjQu9C4INC+0LTQuNC90L7Rh9C90L7Qs9C+INC/0L7Qu9C30YPQvdC60LAnLFxuICAgICAgZWxlbWVudE5hbWU6ICdsb3dlclNsaWRlclZhbHVlJyxcbiAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgbmFtZU9mVmFyaWFibGU6ICdsb3dlclNsaWRlclZhbHVlJyxcbiAgICB9LFxuICAgIHVwcGVyU2xpZGVyVmFsdWU6IHtcbiAgICAgIHRpdGxlOiAnTWF4X3NsaWRlcicsXG4gICAgICBkZXNjcmlwdGlvbjogJ9Cd0LDRh9Cw0LvRjNC90L7QtSDQt9C90LDRh9C10L3QuNC1INGI0LrQsNC70Ysg0YHQu9Cw0LnQtNC10YDQsCAtINC00LvRjyDQstGC0L7RgNC+0LPQviDQv9C+0LvQt9GD0L3QutCwJyxcbiAgICAgIGVsZW1lbnROYW1lOiAndXBwZXJTbGlkZXJWYWx1ZScsXG4gICAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICAgIG5hbWVPZlZhcmlhYmxlOiAndXBwZXJTbGlkZXJWYWx1ZScsXG4gICAgfSxcbiAgfTtcblxuICBzZXR0aW5nczogUGFyYW0gPSB7XG4gICAgZWxlbWVudElkOiAnZG9jX3BhbmVsJyxcbiAgICBzaWduOiAn4oK9JyxcbiAgICBsb3dlclNjYWxlQm91bmQ6IDAsXG4gICAgdXBwZXJTY2FsZUJvdW5kOiAxMDAwLFxuICAgIGxvd2VyU2xpZGVyVmFsdWU6IDIwMCxcbiAgICB1cHBlclNsaWRlclZhbHVlOiA4MDAsXG4gICAgc2xpZGVyVHlwZTogJ2RvdWJsZScsXG4gICAgZGlyZWN0aW9uVHlwZTogJ2hvcml6b250YWwnLFxuICAgIHN0ZXA6IDUsXG4gICAgaWRGb3JDb250cm9sUGFuZWw6ICdkb2NfcGFuZWwnLFxuICB9O1xuXG4gIGJpbmRDb250cm9sbGVyID0gKGNvbnRyb2xsZXI6IGFueSkgPT4ge1xuICAgIHRoaXMuY29udHJvbGxlciA9IGNvbnRyb2xsZXI7XG4gIH1cblxuICBzZXRTZXR0aW5nc0Zyb21Db250cm9sbGVyID0gKHNldEZyb21Db250cm9sbGVyOiBQYXJhbSkgPT4ge1xuICAgIHRoaXMuc2V0dGluZ3MgPSB7XG4gICAgICBlbGVtZW50SWQ6IHNldEZyb21Db250cm9sbGVyLmVsZW1lbnRJZCxcbiAgICAgIHNpZ246IHNldEZyb21Db250cm9sbGVyLnNpZ24sXG4gICAgICBsb3dlclNjYWxlQm91bmQ6IHNldEZyb21Db250cm9sbGVyLmxvd2VyU2NhbGVCb3VuZCxcbiAgICAgIHVwcGVyU2NhbGVCb3VuZDogc2V0RnJvbUNvbnRyb2xsZXIudXBwZXJTY2FsZUJvdW5kLFxuICAgICAgbG93ZXJTbGlkZXJWYWx1ZTogc2V0RnJvbUNvbnRyb2xsZXIubG93ZXJTbGlkZXJWYWx1ZSxcbiAgICAgIHVwcGVyU2xpZGVyVmFsdWU6IHNldEZyb21Db250cm9sbGVyLnVwcGVyU2xpZGVyVmFsdWUsXG4gICAgICBzbGlkZXJUeXBlOiBzZXRGcm9tQ29udHJvbGxlci5zbGlkZXJUeXBlLFxuICAgICAgZGlyZWN0aW9uVHlwZTogc2V0RnJvbUNvbnRyb2xsZXIuZGlyZWN0aW9uVHlwZSxcbiAgICAgIHN0ZXA6IHNldEZyb21Db250cm9sbGVyLnN0ZXAsXG4gICAgICBpZEZvckNvbnRyb2xQYW5lbDogc2V0RnJvbUNvbnRyb2xsZXIuaWRGb3JDb250cm9sUGFuZWwsXG4gICAgfVxuICB9XG5cbiAgYmluZE1vZGVsID0gKG1vZGVsOiBhbnkpID0+IHtcbiAgICB0aGlzLm1vZGVsID0gbW9kZWw7XG4gIH1cblxuICBnZXRDb250cm9sUGFuZWwgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udHJvbFBhbmVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5zZXR0aW5ncy5pZEZvckNvbnRyb2xQYW5lbCk7XG4gICAgcmV0dXJuIGNvbnRyb2xQYW5lbDtcbiAgfVxuXG4gIHNldElkRm9yU2VsZWN0ID0gKHNlbGVjdDogSFRNTEVsZW1lbnQsIG9iajogYW55KSA9PiB7XG4gICAgc2VsZWN0LmlkID0gb2JqLmVsZW1lbnROYW1lO1xuICB9XG5cbiAgYXBwZW5kQ2hpbGQgPSAocGFyZW50OiBIVE1MRWxlbWVudCwgY2hpbGQ6IEhUTUxFbGVtZW50IHwgVGV4dCkgPT4ge1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChjaGlsZCk7XG4gIH1cblxuICBjcmVhdGVUaXRsZSA9IChvYmo6IGFueSkgPT4ge1xuICAgIGNvbnN0IHRpdGxlOiBzdHJpbmcgPSBvYmouZGVzY3JpcHRpb247XG5cbiAgICBjb25zdCBkaXY6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBjb25zdCB0ZXh0Tm9kZVRpdGxlOiBUZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGl0bGUpO1xuXG4gICAgZGl2LmFwcGVuZENoaWxkKHRleHROb2RlVGl0bGUpO1xuXG4gICAgcmV0dXJuIGRpdjtcbiAgfVxuXG5cblxuICByZXR1cm5LZXlzID0gKG9iajogVmFsdWVzKTogc3RyaW5nW10gPT4ge1xuICAgIGNvbnN0IGFyciA9IE9iamVjdC5rZXlzKG9iaik7XG4gICAgcmV0dXJuIGFycjtcbiAgfVxuXG4gIGNyZWF0ZUlucHV0ID0gKHNlbGVjdE9yRGl2OiBIVE1MRWxlbWVudCwgdmFsdWU6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBpbnB1dC50eXBlID0gJ251bWJlcic7XG4gICAgaW5wdXQudmFsdWUgPSBTdHJpbmcodmFsdWUpO1xuICAgIHRoaXMuYXBwZW5kQ2hpbGQoc2VsZWN0T3JEaXYsIGlucHV0KTtcbiAgICBjb25zb2xlLmxvZygn0KDQsNCx0L7RgtCw0LXRgiEhISEg0JDQstGC0L7QvNCw0YLQuNGH0LXRgdC60LDRjyDQt9Cw0LPRgNGD0LfQutCwINC4INC+0LHQvdC+0LLQu9C10L3QuNC1INC90LAg0LvQtdGC0YMg0YDQsNCx0L7RgtCw0Y7RgiEhJyk7XG4gIH1cblxuICBjcmVhdGVDaGFuZ2FibGVPcHRpb25zID0gKGFycjogc3RyaW5nW10sIHBhcmVudEVsZW1lbnQ6IEhUTUxFbGVtZW50KSA9PiB7XG4gICAgYXJyLmZvckVhY2goKGNoYW5nYWJsZVZhbHVlKSA9PiB7XG4gICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgIG9wdGlvbi52YWx1ZSA9IGNoYW5nYWJsZVZhbHVlO1xuICAgICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNoYW5nYWJsZVZhbHVlKTtcbiAgICAgIHRoaXMuYXBwZW5kQ2hpbGQob3B0aW9uLCB0ZXh0KTtcbiAgICAgIHRoaXMuYXBwZW5kQ2hpbGQocGFyZW50RWxlbWVudCwgb3B0aW9uKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNyZWF0ZUxpc3RlbmVyT3JPciA9IChlbGVtZW50Rm9yTGlzdGVuZXI6IEhUTUxTZWxlY3RFbGVtZW50LCBrZXlPZlNldHRpbmc6ICdzaWduJyB8ICdzbGlkZXJUeXBlJyB8ICdkaXJlY3Rpb25UeXBlJykgPT4ge1xuICAgIGNvbnN0IGNoYW5nZUxpc3RlbmVyID0gKCk6IGFueSA9PiB7XG4gICAgICAvLyBjb25zb2xlLmxvZygn0YDQsNCx0L7RgtCw0LXRgiEnKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGBlbGVtZW50Rm9yTGlzdGVuZXIudmFsdWUgPT09ICR7ZWxlbWVudEZvckxpc3RlbmVyLnZhbHVlfWApO1xuICAgICAgdGhpcy5zZXR0aW5nc1trZXlPZlNldHRpbmddID0gZWxlbWVudEZvckxpc3RlbmVyLnZhbHVlO1xuICAgICAgdGhpcy5zbGlkZXJSZWZyZXNoKCk7XG4gICAgfTtcbiAgICBlbGVtZW50Rm9yTGlzdGVuZXIuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgY2hhbmdlTGlzdGVuZXIpO1xuICB9XG5cbiAgY3JlYXRlTGlzdGVuZXJOdW1lcmFsID0gKGVsZW1lbnRGb3JMaXN0ZW5lcjogSFRNTElucHV0RWxlbWVudCwga2V5T2ZTZXR0aW5nOiAnc3RlcCcgfCAnbG93ZXJTY2FsZUJvdW5kJyB8ICd1cHBlclNjYWxlQm91bmQnIHwgJ2xvd2VyU2xpZGVyVmFsdWUnIHwgJ3VwcGVyU2xpZGVyVmFsdWUnKSA9PiB7XG4gICAgY29uc3QgaW5wdXRMaXN0ZW5lciA9ICgpOiBhbnkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ9Cg0LDQsdC+0YLQsNC10YIhISEhINCQ0LLRgtC+0LzQsNGC0LjRh9C10YHQutCw0Y8g0LfQsNCz0YDRg9C30LrQsCDQuCDQvtCx0L3QvtCy0LvQtdC90LjQtSDQvdCwINC70LXRgtGDINGA0LDQsdC+0YLQsNGO0YIhIScpO1xuICAgICAgY29uc29sZS5sb2coZWxlbWVudEZvckxpc3RlbmVyLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbnB1dCcpWzBdLnZhbHVlQXNOdW1iZXIpO1xuICAgICAgdGhpcy5zZXR0aW5nc1trZXlPZlNldHRpbmddID0gTnVtYmVyKGVsZW1lbnRGb3JMaXN0ZW5lci5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW5wdXQnKVswXS52YWx1ZUFzTnVtYmVyKTtcbiAgICAgIGNvbnNvbGUubG9nKGtleU9mU2V0dGluZyk7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnNldHRpbmdzKTtcbiAgICAgIHRoaXMuc2xpZGVyUmVmcmVzaCgpO1xuICAgIH07XG4gICAgZWxlbWVudEZvckxpc3RlbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgaW5wdXRMaXN0ZW5lcik7XG4gIH1cblxuICBjcmVhdGVQYW5lbCA9IChvYmplY3RGb3JDb25zdHJ1Y3Rpb25QYW5lbDogVmFsdWVzLCB0eXBlOiBzdHJpbmcsIGNvbnRyb2xQYW5lbDogSFRNTEVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBrZXlzID0gdGhpcy5yZXR1cm5LZXlzKG9iamVjdEZvckNvbnN0cnVjdGlvblBhbmVsKTtcblxuICAgIGtleXMuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBjb25zdCBjdXJyZW50T2JqID0gb2JqZWN0Rm9yQ29uc3RydWN0aW9uUGFuZWxba2V5XTtcblxuICAgICAgbGV0IHNlbGVjdE9yRGl2OiBIVE1MRWxlbWVudDtcbiAgICAgIGlmICh0eXBlID09PSAnbnVtZXJhbCcpIHtcbiAgICAgICAgc2VsZWN0T3JEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlID09PSAnc2VsZWN0Jykge1xuICAgICAgICBzZWxlY3RPckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNldElkRm9yU2VsZWN0KHNlbGVjdE9yRGl2LCBjdXJyZW50T2JqKTtcbiAgICAgIGNvbnN0IGNyZWF0ZVRpdGxlID0gdGhpcy5jcmVhdGVUaXRsZShjdXJyZW50T2JqKTtcbiAgICAgIHRoaXMuYXBwZW5kQ2hpbGQoc2VsZWN0T3JEaXYsIGNyZWF0ZVRpdGxlKTtcblxuICAgICAgaWYgKHR5cGUgPT09ICdudW1lcmFsJykge1xuICAgICAgICB0aGlzLmNyZWF0ZUlucHV0KHNlbGVjdE9yRGl2LCB0aGlzLnNldHRpbmdzW2N1cnJlbnRPYmoubmFtZU9mVmFyaWFibGUgYXMgJ3N0ZXAnIHwgJ2xvd2VyU2NhbGVCb3VuZCcgfCAndXBwZXJTY2FsZUJvdW5kJyB8ICdsb3dlclNsaWRlclZhbHVlJyB8ICd1cHBlclNsaWRlclZhbHVlJ10pO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGUgPT09ICdzZWxlY3QnKSB7XG4gICAgICAgIHRoaXMuY3JlYXRlQ2hhbmdhYmxlT3B0aW9ucyhjdXJyZW50T2JqLnZhbHVlLCBzZWxlY3RPckRpdik7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuYXBwZW5kQ2hpbGQoY29udHJvbFBhbmVsLCBzZWxlY3RPckRpdik7XG4gICAgfSk7XG5cbiAgICBrZXlzLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgY29uc3QgY3VycmVudE9iaiA9IG9iamVjdEZvckNvbnN0cnVjdGlvblBhbmVsW2tleV07XG4gICAgICBjb25zdCBrZXlPZlNldHRpbmc6IGFueSA9IGN1cnJlbnRPYmoubmFtZU9mVmFyaWFibGU7XG4gICAgICBjb25zb2xlLmxvZyhga2V5T2ZTZXR0aW5nID09PSAke2tleU9mU2V0dGluZ31gKTtcblxuXG4gICAgICBpZiAodHlwZSA9PT0gJ251bWVyYWwnKSB7XG4gICAgICAgIGNvbnN0IGV2ZW50RWxlbWVudCA9IGNvbnRyb2xQYW5lbC5xdWVyeVNlbGVjdG9yKGAjJHtjdXJyZW50T2JqLmVsZW1lbnROYW1lfWApIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG5cbiAgICAgICAgdGhpcy5jcmVhdGVMaXN0ZW5lck51bWVyYWwoZXZlbnRFbGVtZW50LCBrZXlPZlNldHRpbmcpO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGUgPT09ICdzZWxlY3QnKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCcxMjMnKTtcblxuICAgICAgICBjb25zdCBldmVudEVsZW1lbnQgPSBjb250cm9sUGFuZWwucXVlcnlTZWxlY3RvcihgIyR7Y3VycmVudE9iai5lbGVtZW50TmFtZX1gKSBhcyBIVE1MU2VsZWN0RWxlbWVudDtcblxuICAgICAgICB0aGlzLmNyZWF0ZUxpc3RlbmVyT3JPcihldmVudEVsZW1lbnQsIGtleU9mU2V0dGluZyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzbGlkZXJSZWZyZXNoID0gKCkgPT4ge1xuICAgIGNvbnN0IG9iakZvckNvbnRyb2xsZXIgPSB7XG4gICAgICBzbGlkZXJUeXBlOiB0aGlzLnNldHRpbmdzLnNsaWRlclR5cGUsXG4gICAgICBkaXJlY3Rpb25UeXBlOiB0aGlzLnNldHRpbmdzLmRpcmVjdGlvblR5cGUsXG4gICAgICBzdGVwOiB0aGlzLnNldHRpbmdzLnN0ZXAsXG4gICAgfTtcbiAgICB0aGlzLmNvbnRyb2xsZXIuc2V0Q29udHJvbGxlckZyb21Db250cm9sUGFuZWwob2JqRm9yQ29udHJvbGxlcik7XG5cbiAgICBjb25zdCBvYmpGb3JNb2RlbCA9IHtcbiAgICAgIHNpZ246IHRoaXMuc2V0dGluZ3Muc2lnbixcbiAgICAgIGxvd2VyU2NhbGVCb3VuZDogdGhpcy5zZXR0aW5ncy5sb3dlclNjYWxlQm91bmQsXG4gICAgICB1cHBlclNjYWxlQm91bmQ6IHRoaXMuc2V0dGluZ3MudXBwZXJTY2FsZUJvdW5kLFxuICAgICAgbG93ZXJTbGlkZXJWYWx1ZTogdGhpcy5zZXR0aW5ncy5sb3dlclNsaWRlclZhbHVlLFxuICAgICAgdXBwZXJTbGlkZXJWYWx1ZTogdGhpcy5zZXR0aW5ncy51cHBlclNsaWRlclZhbHVlLFxuICAgIH07XG4gICAgdGhpcy5tb2RlbC5zZXRJbml0aWFsTW9kZWxPcHRpb25zKG9iakZvck1vZGVsKTtcblxuICAgIHRoaXMuY29udHJvbGxlci5jcmVhdGVTbGlkZXIoKTtcbiAgfVxuXG4gIGJ1aWxkUGFuZWwgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udHJvbFBhbmVsID0gdGhpcy5nZXRDb250cm9sUGFuZWwoKTtcbiAgICB0aGlzLmNyZWF0ZVBhbmVsKHRoaXMub3JWYWx1ZXMsICdzZWxlY3QnLCBjb250cm9sUGFuZWwpO1xuICAgIHRoaXMuY3JlYXRlUGFuZWwodGhpcy5udW1lcmFsVmFsdWVzLCAnbnVtZXJhbCcsIGNvbnRyb2xQYW5lbCk7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5zZXR0aW5ncyk7XG4gIH1cbn1cblxuZXhwb3J0IHsgQ29udHJvbFBhbmVsIH07XG4iLCJpbXBvcnQgeyBNb2RlbCB9IGZyb20gJy4vbW9kZWwnO1xuaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJy4vY29udHJvbGxlcic7XG5pbXBvcnQgeyBWaWV3IH0gZnJvbSAnLi9yZWZhY3RvcmluZ1ZpZXcnO1xuaW1wb3J0IHsgQ29udHJvbFBhbmVsIH0gZnJvbSAnLi9Db250cm9sUGFuZWwnO1xuXG5pbnRlcmZhY2UgUGFyYW0ge1xuICBpZEZvckNvbnRyb2xQYW5lbD86IHN0cmluZztcbiAgZWxlbWVudElkPzogc3RyaW5nO1xuICBzaWduOiBzdHJpbmc7XG4gIGxvd2VyU2NhbGVCb3VuZD86IG51bWJlcjtcbiAgdXBwZXJTY2FsZUJvdW5kPzogbnVtYmVyO1xuICBsb3dlclNsaWRlclZhbHVlPzogbnVtYmVyO1xuICB1cHBlclNsaWRlclZhbHVlPzogbnVtYmVyO1xuICBzbGlkZXJUeXBlPzogc3RyaW5nO1xuICBkaXJlY3Rpb25UeXBlPzogc3RyaW5nO1xuICBzdGVwPzogbnVtYmVyO1xufVxuXG5mdW5jdGlvbiBJU1NsaWRlcihwYXJhbTogUGFyYW0pIHtcblxuICBjb25zdCBzZXR0aW5nczogYW55ID0ge1xuICAgIGlkRm9yQ29udHJvbFBhbmVsOiBwYXJhbS5pZEZvckNvbnRyb2xQYW5lbCB8fCAnZG9jX3BhbmVsJyxcbiAgICBlbGVtZW50SWQ6IHBhcmFtLmVsZW1lbnRJZCB8fCAnaXNzJyxcbiAgICBzaWduOiBwYXJhbS5zaWduIHx8ICfigr0nLFxuICAgIGxvd2VyU2NhbGVCb3VuZDogcGFyYW0ubG93ZXJTY2FsZUJvdW5kIHx8IDAsXG4gICAgdXBwZXJTY2FsZUJvdW5kOiBwYXJhbS51cHBlclNjYWxlQm91bmQgfHwgMTAwMCxcbiAgICBsb3dlclNsaWRlclZhbHVlOiBwYXJhbS5sb3dlclNsaWRlclZhbHVlIHx8IDIwMCxcbiAgICB1cHBlclNsaWRlclZhbHVlOiBwYXJhbS51cHBlclNsaWRlclZhbHVlIHx8IDgwMCxcbiAgICBzbGlkZXJUeXBlOiBwYXJhbS5zbGlkZXJUeXBlIHx8ICdkb3VibGUnLFxuICAgIGRpcmVjdGlvblR5cGU6IHBhcmFtLmRpcmVjdGlvblR5cGUgfHwgJ2hvcml6b250YWwnLFxuICAgIHN0ZXA6IHBhcmFtLnN0ZXAgfHwgNTAsXG4gIH07XG5cbiAgLy8g0J/QntCh0KLQoNCe0JXQndCY0JUg0KHQm9CQ0JnQlNCV0KDQkCDQn9Cg0Jgg0J/QldCg0JLQntCcINCX0JDQn9Cj0KHQmtCVXG4gIGNvbnN0IG1vZGVsID0gbmV3IE1vZGVsKHNldHRpbmdzKTtcbiAgY29uc3QgY29udHJvbGxlciA9IG5ldyBDb250cm9sbGVyKHNldHRpbmdzKTtcbiAgY29uc3QgdmlldyA9IG5ldyBWaWV3KCk7XG4gIGNvbnN0IGNvbnRyb2xQYW5lbCA9IG5ldyBDb250cm9sUGFuZWwoKTtcblxuICBjb250cm9sbGVyLmJpbmRNb2RlbChtb2RlbCk7XG4gIGNvbnRyb2xsZXIuYmluZFZpZXcodmlldyk7XG4gIGNvbnRyb2xsZXIuYmluZENvbnRyb2xQYW5lbChjb250cm9sUGFuZWwpO1xuXG4gIHZpZXcuYmluZENvbnRyb2xsZXIoY29udHJvbGxlcik7XG4gIGNvbnRyb2xQYW5lbC5iaW5kQ29udHJvbGxlcihjb250cm9sbGVyKTtcbiAgY29udHJvbFBhbmVsLmJpbmRNb2RlbChtb2RlbCk7XG5cbiAgY29udHJvbGxlci5jcmVhdGVTbGlkZXIoKTtcblxuICBjb250cm9sUGFuZWwuYnVpbGRQYW5lbCgpO1xufVxuXG5leHBvcnQgeyBJU1NsaWRlciB9O1xuIiwiaW1wb3J0IHsgTW9kZWwgfSBmcm9tICcuL21vZGVsJztcbmltcG9ydCB7IFZpZXcgfSBmcm9tICcuL3JlZmFjdG9yaW5nVmlldyc7XG5pbXBvcnQgeyBDb250cm9sUGFuZWwgfSBmcm9tICcuL0NvbnRyb2xQYW5lbCc7XG5cbmludGVyZmFjZSBDb250cm9sbGVyIHtcbiAgaWRGb3JDb250cm9sUGFuZWw/OiBzdHJpbmc7XG4gIGVsZW1lbnRJZD86IHN0cmluZztcbiAgc2lnbj86IHN0cmluZztcbiAgbG93ZXJTY2FsZUJvdW5kPzogbnVtYmVyO1xuICB1cHBlclNjYWxlQm91bmQ/OiBudW1iZXI7XG4gIGxvd2VyU2xpZGVyVmFsdWU/OiBudW1iZXI7XG4gIHVwcGVyU2xpZGVyVmFsdWU/OiBudW1iZXI7XG4gIHNsaWRlclR5cGU/OiBzdHJpbmc7XG4gIGRpcmVjdGlvblR5cGU/OiBzdHJpbmc7XG4gIHN0ZXA/OiBudW1iZXI7XG5cbiAgbW9kZWw/OiBhbnk7XG4gIHZpZXc/OiBhbnk7XG5cbiAgY29udHJvbFBhbmVsPzogYW55O1xufVxuXG5pbnRlcmZhY2Ugb2JqRnJvbVZpZXcge1xuICBsb3dlclNsaWRlclZhbHVlPzogbnVtYmVyO1xuICB1cHBlclNsaWRlclZhbHVlPzogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2Ugb2JqRnJvbUNvbnRyb2xQYW5lbCB7XG4gIHNsaWRlclR5cGU6IHN0cmluZztcbiAgZGlyZWN0aW9uVHlwZTogc3RyaW5nO1xuICBzdGVwOiBudW1iZXI7XG59XG5cbmNsYXNzIENvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvcihzZXR0aW5nczogYW55KSB7XG4gICAgdGhpcy5lbGVtZW50SWQgPSBzZXR0aW5ncy5lbGVtZW50SWQ7XG4gICAgdGhpcy5zbGlkZXJUeXBlID0gc2V0dGluZ3Muc2xpZGVyVHlwZSB8fCAnc2luZ2xlJztcbiAgICB0aGlzLmRpcmVjdGlvblR5cGUgPSBzZXR0aW5ncy5kaXJlY3Rpb25UeXBlIHx8ICdob3Jpem9udGFsJztcbiAgICB0aGlzLnN0ZXAgPSBzZXR0aW5ncy5zdGVwIHx8IDI7XG4gICAgdGhpcy5pZEZvckNvbnRyb2xQYW5lbCA9IHNldHRpbmdzLmlkRm9yQ29udHJvbFBhbmVsIHx8ICcnO1xuICB9XG5cblxuICBjcmVhdGVTbGlkZXIoKSB7XG4gICAgdGhpcy5zZXRDb250cm9sbGVyKCk7XG4gICAgdGhpcy5zZXRBbmRSdW5WaWV3KCk7XG4gIH1cblxuICBzZXRDb250cm9sbGVyKCkge1xuICAgIGNvbnN0IG9iakZyb21Nb2RlbCA9IHRoaXMuZ2V0TW9kZWwoKTtcbiAgICB0aGlzLmxvd2VyU2xpZGVyVmFsdWUgPSBvYmpGcm9tTW9kZWwubG93ZXJTbGlkZXJWYWx1ZTtcbiAgICB0aGlzLnVwcGVyU2xpZGVyVmFsdWUgPSBvYmpGcm9tTW9kZWwudXBwZXJTbGlkZXJWYWx1ZTtcbiAgICB0aGlzLmxvd2VyU2NhbGVCb3VuZCA9IG9iakZyb21Nb2RlbC5sb3dlclNjYWxlQm91bmQ7XG4gICAgdGhpcy51cHBlclNjYWxlQm91bmQgPSBvYmpGcm9tTW9kZWwudXBwZXJTY2FsZUJvdW5kO1xuICAgIHRoaXMuc2lnbiA9IG9iakZyb21Nb2RlbC5zaWduO1xuICB9XG5cbiAgZ2V0TW9kZWwoKSB7XG4gICAgcmV0dXJuIHRoaXMubW9kZWwuZ2V0TW9kZWwoKTtcbiAgfVxuXG4gIHNldEFuZFJ1blZpZXcoKSB7XG4gICAgY29uc3Qgb2JqID0ge1xuICAgICAgZWxlbWVudElkOiB0aGlzLmVsZW1lbnRJZCxcbiAgICAgIHNpZ246IHRoaXMuc2lnbixcbiAgICAgIGxvd2VyU2NhbGVCb3VuZDogdGhpcy5sb3dlclNjYWxlQm91bmQsXG4gICAgICB1cHBlclNjYWxlQm91bmQ6IHRoaXMudXBwZXJTY2FsZUJvdW5kLFxuICAgICAgbG93ZXJTbGlkZXJWYWx1ZTogdGhpcy5sb3dlclNsaWRlclZhbHVlLFxuICAgICAgdXBwZXJTbGlkZXJWYWx1ZTogdGhpcy51cHBlclNsaWRlclZhbHVlLFxuICAgICAgc2xpZGVyVHlwZTogdGhpcy5zbGlkZXJUeXBlLFxuICAgICAgZGlyZWN0aW9uVHlwZTogdGhpcy5kaXJlY3Rpb25UeXBlLFxuICAgICAgc3RlcDogdGhpcy5zdGVwLFxuICAgIH07XG4gICAgY29uc29sZS5sb2coJ3NldEFuZFJ1blZpZXcnKTtcbiAgICBjb25zb2xlLmxvZyhvYmopO1xuICAgIHRoaXMudmlldy5zZXRTdGFydGluZ0NvbmRpdGlvbnMob2JqKTtcbiAgICB0aGlzLnZpZXcuaW5pdCgpO1xuICB9XG5cblxuXG4gIGJpbmRNb2RlbChtb2RlbDogTW9kZWwpIHtcbiAgICB0aGlzLm1vZGVsID0gbW9kZWw7XG4gIH1cblxuICBzZXRNb2RlbCgpIHtcbiAgICB0aGlzLm1vZGVsLnNldE1vZGVsKHtcbiAgICAgIGxvd2VyU2xpZGVyVmFsdWU6IHRoaXMubG93ZXJTbGlkZXJWYWx1ZSxcbiAgICAgIHVwcGVyU2xpZGVyVmFsdWU6IHRoaXMudXBwZXJTbGlkZXJWYWx1ZSxcbiAgICB9KTtcbiAgfVxuXG4gIGJpbmRWaWV3KHZpZXc6IFZpZXcpIHtcbiAgICB0aGlzLnZpZXcgPSB2aWV3O1xuICB9XG5cbiAgZ2V0VmlldyhvYmo6IG9iakZyb21WaWV3KSB7XG4gICAgaWYgKHRoaXMuc2xpZGVyVHlwZSA9PT0gJ2RvdWJsZScpIHtcbiAgICAgIHRoaXMubG93ZXJTbGlkZXJWYWx1ZSA9IG9iai5sb3dlclNsaWRlclZhbHVlO1xuICAgICAgdGhpcy51cHBlclNsaWRlclZhbHVlID0gb2JqLnVwcGVyU2xpZGVyVmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLnNsaWRlclR5cGUgPT09ICdzaW5nbGUnKSB7XG4gICAgICB0aGlzLmxvd2VyU2xpZGVyVmFsdWUgPSBvYmoubG93ZXJTbGlkZXJWYWx1ZTtcbiAgICB9XG4gICAgdGhpcy5zZXRNb2RlbCgpO1xuICB9XG5cbiAgZ2V0Q29udHJvbGxlcigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZWxlbWVudElkOiB0aGlzLmVsZW1lbnRJZCxcbiAgICAgIHNpZ246IHRoaXMuc2lnbixcbiAgICAgIGxvd2VyU2NhbGVCb3VuZDogdGhpcy5sb3dlclNjYWxlQm91bmQsXG4gICAgICB1cHBlclNjYWxlQm91bmQ6IHRoaXMudXBwZXJTY2FsZUJvdW5kLFxuICAgICAgbG93ZXJTbGlkZXJWYWx1ZTogdGhpcy5sb3dlclNsaWRlclZhbHVlLFxuICAgICAgdXBwZXJTbGlkZXJWYWx1ZTogdGhpcy51cHBlclNsaWRlclZhbHVlLFxuICAgICAgc2xpZGVyVHlwZTogdGhpcy5zbGlkZXJUeXBlLFxuICAgICAgc3RlcDogdGhpcy5zdGVwLFxuICAgIH07XG4gIH1cblxuICBiaW5kQ29udHJvbFBhbmVsKGNudHJsUG5sOiBDb250cm9sUGFuZWwpIHtcbiAgICB0aGlzLmNvbnRyb2xQYW5lbCA9IGNudHJsUG5sO1xuICB9XG5cbiAgc2V0Q29udHJvbGxlckZyb21Db250cm9sUGFuZWwgPSAob2JqOiBvYmpGcm9tQ29udHJvbFBhbmVsKSA9PiB7XG4gICAgdGhpcy5zdGVwID0gb2JqLnN0ZXA7XG4gICAgdGhpcy5zbGlkZXJUeXBlID0gb2JqLnNsaWRlclR5cGU7XG4gICAgdGhpcy5kaXJlY3Rpb25UeXBlID0gb2JqLmRpcmVjdGlvblR5cGU7XG4gIH1cbn1cblxuZXhwb3J0IHsgQ29udHJvbGxlciB9O1xuIiwiaW50ZXJmYWNlIE1vZGVsIHtcbiAgbG93ZXJTY2FsZUJvdW5kOiBudW1iZXI7XG4gIHVwcGVyU2NhbGVCb3VuZDogbnVtYmVyO1xuICBsb3dlclNsaWRlclZhbHVlOiBudW1iZXI7XG4gIHVwcGVyU2xpZGVyVmFsdWU6IG51bWJlcjtcbiAgc2lnbjogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2Ugb2JqRnJvbVZpZXcge1xuICBsb3dlclNsaWRlclZhbHVlPzogbnVtYmVyO1xuICB1cHBlclNsaWRlclZhbHVlPzogbnVtYmVyO1xufVxuaW50ZXJmYWNlIG9iakZyb21Db250cm9sbGVyIHtcbiAgbG93ZXJTY2FsZUJvdW5kOiBudW1iZXI7XG4gIHVwcGVyU2NhbGVCb3VuZDogbnVtYmVyO1xuICBsb3dlclNsaWRlclZhbHVlOiBudW1iZXI7XG4gIHVwcGVyU2xpZGVyVmFsdWU6IG51bWJlcjtcbiAgc2lnbjogc3RyaW5nO1xufVxuY2xhc3MgTW9kZWwge1xuICBjb25zdHJ1Y3RvcihwYXJhbTogb2JqRnJvbUNvbnRyb2xsZXIpIHtcbiAgICB0aGlzLmxvd2VyU2NhbGVCb3VuZCA9IHBhcmFtLmxvd2VyU2NhbGVCb3VuZCB8fCAwO1xuICAgIHRoaXMudXBwZXJTY2FsZUJvdW5kID0gcGFyYW0udXBwZXJTY2FsZUJvdW5kIHx8IDEwMDA7XG4gICAgdGhpcy5sb3dlclNsaWRlclZhbHVlID0gcGFyYW0ubG93ZXJTbGlkZXJWYWx1ZSB8fCAyMDA7XG4gICAgdGhpcy51cHBlclNsaWRlclZhbHVlID0gcGFyYW0udXBwZXJTbGlkZXJWYWx1ZSB8fCA4MDA7XG4gICAgdGhpcy5zaWduID0gcGFyYW0uc2lnbiB8fCAnPyc7XG4gIH1cblxuICBzZXRNb2RlbChvYmo6IG9iakZyb21WaWV3KSB7XG4gICAgdGhpcy5sb3dlclNsaWRlclZhbHVlID0gb2JqLmxvd2VyU2xpZGVyVmFsdWU7XG4gICAgdGhpcy51cHBlclNsaWRlclZhbHVlID0gb2JqLnVwcGVyU2xpZGVyVmFsdWU7XG4gIH1cblxuICBzZXRJbml0aWFsTW9kZWxPcHRpb25zID0gKHBhcmFtOiBvYmpGcm9tQ29udHJvbGxlcikgPT4ge1xuICAgIHRoaXMubG93ZXJTY2FsZUJvdW5kID0gcGFyYW0ubG93ZXJTY2FsZUJvdW5kO1xuICAgIHRoaXMudXBwZXJTY2FsZUJvdW5kID0gcGFyYW0udXBwZXJTY2FsZUJvdW5kO1xuICAgIHRoaXMubG93ZXJTbGlkZXJWYWx1ZSA9IHBhcmFtLmxvd2VyU2xpZGVyVmFsdWU7XG4gICAgdGhpcy51cHBlclNsaWRlclZhbHVlID0gcGFyYW0udXBwZXJTbGlkZXJWYWx1ZTtcbiAgICB0aGlzLnNpZ24gPSBwYXJhbS5zaWduO1xuICB9XG5cbiAgZ2V0TW9kZWwoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxvd2VyU2NhbGVCb3VuZDogdGhpcy5sb3dlclNjYWxlQm91bmQsXG4gICAgICB1cHBlclNjYWxlQm91bmQ6IHRoaXMudXBwZXJTY2FsZUJvdW5kLFxuICAgICAgbG93ZXJTbGlkZXJWYWx1ZTogdGhpcy5sb3dlclNsaWRlclZhbHVlLFxuICAgICAgdXBwZXJTbGlkZXJWYWx1ZTogdGhpcy51cHBlclNsaWRlclZhbHVlLFxuICAgICAgc2lnbjogdGhpcy5zaWduLFxuICAgIH07XG4gIH1cbn1cblxuZXhwb3J0IHsgTW9kZWwgfTtcbiIsIlxuaW1wb3J0ICcuLi8uLi8uLi9pc19yZWZhY3RvcmluZy5jc3MnO1xuXG4vLyBpbXBvcnQgeyBWaWV3IH0gZnJvbSAnLi9yZWZhY3RvcmluZ1ZpZXcnO1xuLy8gaW1wb3J0IHsgQ29udHJvbFBhbmVsIH0gZnJvbSAnLi9Db250cm9sUGFuZWwnO1xuaW1wb3J0IHsgSVNTbGlkZXIgfSBmcm9tICcuL0lTU2xpZGVyJztcblxuLy8gY29uc3QgdmlldyA9IG5ldyBWaWV3KCk7XG5cbi8vIGNvbnN0IGNvbnRyb2xQYW5lbCA9IG5ldyBDb250cm9sUGFuZWwoKTtcbi8vIGNvbnRyb2xQYW5lbC5idWlsZFBhbmVsKCk7XG5cbi8vIHZpZXcuc2V0U3RhcnRpbmdDb25kaXRpb25zKHtcbi8vICAgZWxlbWVudElkOiAnI2lzcycsXG4vLyAgIHNpZ246ICckJyxcbi8vICAgbG93ZXJTY2FsZUJvdW5kOiAxMDAsXG4vLyAgIHVwcGVyU2NhbGVCb3VuZDogMTUwMCxcbi8vICAgbG93ZXJTbGlkZXJWYWx1ZTogMjAwLFxuLy8gICB1cHBlclNsaWRlclZhbHVlOiA4MDAsXG4vLyAgIHNsaWRlclR5cGU6ICdkb3VibGUnLFxuLy8gICBkaXJlY3Rpb25UeXBlOiAnaG9yaXpvbnRhbCcsXG4vLyAgIHN0ZXA6IDEwLFxuLy8gfSk7XG4vLyB2aWV3LmluaXQoKTtcbmNvbnN0IHNldHRpbmdzRm9ySG9yaXpvbnRhbER1YmxlID0ge1xuICBpZEZvckNvbnRyb2xQYW5lbDogJ2RvY19wYW5lbCcsXG4gIGVsZW1lbnRJZDogJyNpc3MnLFxuICBzaWduOiAnJCcsXG4gIGxvd2VyU2NhbGVCb3VuZDogMTAwLFxuICB1cHBlclNjYWxlQm91bmQ6IDE1MDAsXG4gIGxvd2VyU2xpZGVyVmFsdWU6IDIwMCxcbiAgdXBwZXJTbGlkZXJWYWx1ZTogODAwLFxuICBzbGlkZXJUeXBlOiAnZG91YmxlJyxcbiAgZGlyZWN0aW9uVHlwZTogJ2hvcml6b250YWwnLFxuICBzdGVwOiAxMCxcbn07XG5JU1NsaWRlcihzZXR0aW5nc0Zvckhvcml6b250YWxEdWJsZSk7XG5cbi8vIGNvbnN0IHZpZXdTaW5nbGVIb3Jpem9udGFsID0gbmV3IFZpZXcoKTtcblxuLy8gdmlld1NpbmdsZUhvcml6b250YWwuc2V0U3RhcnRpbmdDb25kaXRpb25zKHtcbi8vICAgZWxlbWVudElkOiAnI2lzc18yJyxcbi8vICAgc2lnbjogJyQnLFxuLy8gICBsb3dlclNjYWxlQm91bmQ6IDEwMCxcbi8vICAgdXBwZXJTY2FsZUJvdW5kOiAxNTAwLFxuLy8gICBsb3dlclNsaWRlclZhbHVlOiAyMDAsXG4vLyAgIHVwcGVyU2xpZGVyVmFsdWU6IDgwMCxcbi8vICAgc2xpZGVyVHlwZTogJ3NpbmdsZScsXG4vLyAgIGRpcmVjdGlvblR5cGU6ICdob3Jpem9udGFsJyxcbi8vICAgc3RlcDogMTAsXG4vLyB9KTtcbi8vIHZpZXdTaW5nbGVIb3Jpem9udGFsLmluaXQoKTtcblxuXG4vLyBjb25zdCB2aWV3U2luZ2xlVmVydGljYWwgPSBuZXcgVmlldygpO1xuXG4vLyB2aWV3U2luZ2xlVmVydGljYWwuc2V0U3RhcnRpbmdDb25kaXRpb25zKHtcbi8vICAgZWxlbWVudElkOiAnI2lzc18zJyxcbi8vICAgc2lnbjogJyQnLFxuLy8gICBsb3dlclNjYWxlQm91bmQ6IDEwMCxcbi8vICAgdXBwZXJTY2FsZUJvdW5kOiAxNTAwLFxuLy8gICBsb3dlclNsaWRlclZhbHVlOiAyMDAsXG4vLyAgIHVwcGVyU2xpZGVyVmFsdWU6IDgwMCxcbi8vICAgc2xpZGVyVHlwZTogJ3NpbmdsZScsXG4vLyAgIGRpcmVjdGlvblR5cGU6ICd2ZXJ0aWNhbCcsXG4vLyAgIHN0ZXA6IDEwLFxuLy8gfSk7XG4vLyB2aWV3U2luZ2xlVmVydGljYWwuaW5pdCgpO1xuXG5cbi8vIGNvbnN0IHZpZXdEb3VibGVWZXJ0aWNhbCA9IG5ldyBWaWV3KCk7XG5cbi8vIHZpZXdEb3VibGVWZXJ0aWNhbC5zZXRTdGFydGluZ0NvbmRpdGlvbnMoe1xuLy8gICBlbGVtZW50SWQ6ICcjaXNzXzQnLFxuLy8gICBzaWduOiAnJCcsXG4vLyAgIGxvd2VyU2NhbGVCb3VuZDogMTAwLFxuLy8gICB1cHBlclNjYWxlQm91bmQ6IDE1MDAsXG4vLyAgIGxvd2VyU2xpZGVyVmFsdWU6IDIwMCxcbi8vICAgdXBwZXJTbGlkZXJWYWx1ZTogODAwLFxuLy8gICBzbGlkZXJUeXBlOiAnZG91YmxlJyxcbi8vICAgZGlyZWN0aW9uVHlwZTogJ3ZlcnRpY2FsJyxcbi8vICAgc3RlcDogMTAsXG4vLyB9KTtcbi8vIHZpZXdEb3VibGVWZXJ0aWNhbC5pbml0KCk7XG4iLCJpbnRlcmZhY2UgVmlld1N0YXJ0aW5nQ29uZGl0aW9ucyB7XG4gIGVsZW1lbnRJZD86IHN0cmluZztcbiAgZWxlbT86IGFueTtcbiAgc2lnbj86IHN0cmluZztcbiAgbG93ZXJTY2FsZUJvdW5kPzogbnVtYmVyO1xuICB1cHBlclNjYWxlQm91bmQ/OiBudW1iZXI7XG4gIGxvd2VyU2xpZGVyVmFsdWU/OiBudW1iZXI7XG4gIHVwcGVyU2xpZGVyVmFsdWU/OiBudW1iZXI7XG4gIHNsaWRlclR5cGU/OiBzdHJpbmc7XG4gIGRpcmVjdGlvblR5cGU/OiBzdHJpbmc7XG4gIHN0ZXA/OiBudW1iZXI7XG4gIGNvbnRyb2xsZXI/OiBhbnk7XG59XG5cbmludGVyZmFjZSBWaWV3IHtcbiAgZWxlbWVudElkOiBzdHJpbmc7XG4gIGVsZW06IGFueTtcbiAgc2lnbjogc3RyaW5nO1xuICBsb3dlclNjYWxlQm91bmQ6IG51bWJlcjtcbiAgdXBwZXJTY2FsZUJvdW5kOiBudW1iZXI7XG4gIGxvd2VyU2xpZGVyVmFsdWU6IG51bWJlcjtcbiAgdXBwZXJTbGlkZXJWYWx1ZTogbnVtYmVyO1xuICBzbGlkZXJUeXBlOiBzdHJpbmc7XG4gIGRpcmVjdGlvblR5cGU6IHN0cmluZztcbiAgc3RlcDogbnVtYmVyO1xuICBjb250cm9sbGVyOiBhbnk7XG5cbiAgc2NhbGU6IEhUTUxFbGVtZW50O1xuICBpbmRlbnQ6IG51bWJlcjtcbiAgbWFpbkF4aXNTaXplOiBudW1iZXI7XG5cbiAgc2xpZGVySW5ET006IFtIVE1MRWxlbWVudF07XG5cbiAgc3RhdGljRmllbGRMb3dlcjogSFRNTEVsZW1lbnQ7XG4gIHN0YXRpY0ZpZWxkVXBwZXI6IEhUTUxFbGVtZW50O1xuICBzdGF0aWNGaWVsZFNpbmdsZTogSFRNTEVsZW1lbnQ7XG5cbiAgZmx5RmllbGRMb3dlcjogSFRNTEVsZW1lbnQ7XG4gIGZseUZpZWxkVXBwZXI6IEhUTUxFbGVtZW50O1xuICBmbHlGaWVsZFNpbmdsZTogSFRNTEVsZW1lbnQ7XG5cbiAgbG93ZXJTbGlkZXI6IEhUTUxFbGVtZW50O1xuICBsb3dlclNsaWRlclBvc2l0aW9uOiBudW1iZXI7XG5cbiAgdXBwZXJTbGlkZXI6IEhUTUxFbGVtZW50O1xuICB1cHBlclNsaWRlclBvc2l0aW9uOiBudW1iZXI7XG5cbiAgc2luZ2xlU2xpZGVyOiBIVE1MRWxlbWVudDtcbiAgc2luZ2xlU2xpZGVyUG9zaXRpb246IG51bWJlcjtcblxuICBzbGlkZXJXaWR0aDogbnVtYmVyO1xuICBzbGlkZXJIZWlnaHQ6IG51bWJlcjtcblxuICByaWJib246IEhUTUxFbGVtZW50O1xuXG4gIGNsaWVudFJlY3Q6IENsaWVudFJlY3Q7XG5cbiAgaW5uZXJNb3VzZVBvc2l0aW9uOiBudW1iZXI7XG5cbiAgcGl4ZWxTdGVwOiBudW1iZXI7XG4gIHJvdW5kZWRQaXhlbFN0ZXA6IG51bWJlcjtcblxuICB0YXJnZXRTbGlkZXI6IEhUTUxFbGVtZW50O1xuXG4gIGxvd2VyUmVzdHJpY3Rpb246IG51bWJlcjtcbiAgdXBwZXJSZXN0cmljdGlvbjogbnVtYmVyO1xuXG4gIGxvd2VyQ29zdFJlc3RyaWN0aW9uOiBudW1iZXI7XG4gIHVwcGVyQ29zdFJlc3RyaWN0aW9uOiBudW1iZXI7XG59XG5cbmNsYXNzIFZpZXcge1xuICBiaW5kQ29udHJvbGxlciA9IChjb250cm9sbGVyOiBhbnkpID0+IHtcbiAgICB0aGlzLmNvbnRyb2xsZXIgPSBjb250cm9sbGVyO1xuICB9XG5cbiAgc2V0Q29udHJvbGxlcigpIHtcbiAgICBjb25zdCBvYmogPSB7XG4gICAgICBsb3dlclNsaWRlclZhbHVlOiB0aGlzLmxvd2VyU2xpZGVyVmFsdWUsXG4gICAgICB1cHBlclNsaWRlclZhbHVlOiB0aGlzLnVwcGVyU2xpZGVyVmFsdWUsXG4gICAgfTtcbiAgICB0aGlzLmNvbnRyb2xsZXIuZ2V0VmlldyhvYmopO1xuICB9XG5cbiAgc2V0U3RhcnRpbmdDb25kaXRpb25zID0gKG9iajogVmlld1N0YXJ0aW5nQ29uZGl0aW9ucykgPT4ge1xuICAgIHRoaXMuZWxlbWVudElkID0gb2JqLmVsZW1lbnRJZCB8fCAnI2lzcyc7XG4gICAgdGhpcy5lbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lzcycpO1xuXG4gICAgdGhpcy5zaWduID0gb2JqLnNpZ24gfHwgJ1InO1xuICAgIHRoaXMubG93ZXJTY2FsZUJvdW5kID0gTnVtYmVyKG9iai5sb3dlclNjYWxlQm91bmQpIHx8IDA7XG4gICAgdGhpcy51cHBlclNjYWxlQm91bmQgPSBOdW1iZXIob2JqLnVwcGVyU2NhbGVCb3VuZCkgfHwgMTAwMDtcbiAgICB0aGlzLmxvd2VyU2xpZGVyVmFsdWUgPSBOdW1iZXIob2JqLmxvd2VyU2xpZGVyVmFsdWUpIHx8IDIwMDtcbiAgICB0aGlzLnVwcGVyU2xpZGVyVmFsdWUgPSBOdW1iZXIob2JqLnVwcGVyU2xpZGVyVmFsdWUpIHx8IDgwMDtcblxuICAgIHRoaXMuc2xpZGVyVHlwZSA9IG9iai5zbGlkZXJUeXBlIHx8ICdzaW5nbGUnO1xuICAgIHRoaXMuZGlyZWN0aW9uVHlwZSA9IG9iai5kaXJlY3Rpb25UeXBlIHx8ICdob3Jpem9udGFsJztcbiAgICB0aGlzLnN0ZXAgPSBvYmouc3RlcCB8fCAyO1xuICB9XG5cbiAgZ2V0U3RhcnRpbmdDb25kaXRpb25zID0gKCkgPT4gKHtcbiAgICBlbGVtZW50SWQ6IHRoaXMuZWxlbWVudElkLFxuICAgIHNpZ246IHRoaXMuc2lnbixcbiAgICBsb3dlclNjYWxlQm91bmQ6IHRoaXMubG93ZXJTY2FsZUJvdW5kLFxuICAgIHVwcGVyU2NhbGVCb3VuZDogdGhpcy51cHBlclNjYWxlQm91bmQsXG4gICAgbG93ZXJTbGlkZXJWYWx1ZTogdGhpcy5sb3dlclNsaWRlclZhbHVlLFxuICAgIHVwcGVyU2xpZGVyVmFsdWU6IHRoaXMudXBwZXJTbGlkZXJWYWx1ZSxcbiAgICBzbGlkZXJUeXBlOiB0aGlzLnNsaWRlclR5cGUsXG4gICAgc3RlcDogdGhpcy5zdGVwLFxuICB9KTtcblxuICBpbml0ID0gKCkgPT4ge1xuICAgIHRoaXMuY3JlYXRlRE9NKCk7XG4gICAgdGhpcy53cml0ZURPTSgpO1xuICAgIHRoaXMud3JpdGVHZW9tZXRyeURPTXRvVmFyaWFibGVzKCk7XG4gICAgdGhpcy5jcmVhdGVMaXN0ZW5lck9uU2xpZGVyKCk7XG4gICAgdGhpcy5tb3Zlc1NsaWRlcnNUb1N0YXJ0UG9zaXRpb25zKCk7XG4gICAgdGhpcy53cml0ZU1vbmV5VG9GaWVsZHMoKTtcbiAgICB0aGlzLm1vdmVUb29sdGlwKCk7XG4gIH1cblxuICBjcmVhdGVET00gPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuc2xpZGVyVHlwZSA9PT0gJ2RvdWJsZScpIHtcbiAgICAgIHRoaXMuY3JlYXRlRG91YmxlRE9NKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLnNsaWRlclR5cGUgPT09ICdzaW5nbGUnKSB7XG4gICAgICB0aGlzLmNyZWF0ZVNpbmdsZURPTSgpO1xuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZVNpbmdsZURPTSA9ICgpID0+IHtcbiAgICB0aGlzLmVsZW0uaW5uZXJIVE1MID0gJzxkaXYgY2xhc3M9XCJpc3NfX3ZhbHVlLWZpZWxkXCI+J1xuICAgICAgKyAnPHNwYW4gY2xhc3M9XCJpc3Nfc3RhdGljRmllbGRcIj48L3NwYW4+J1xuICAgICAgKyAnPC9kaXY+J1xuICAgICAgKyAnPGRpdiBjbGFzcz0gXCJpc3MtY29udGFpbmVyXCI+J1xuICAgICAgKyAnPGRpdiBjbGFzcz0gXCJpc3NfX3NjYWxlXCI+PC9kaXY+J1xuICAgICAgKyAnPGRpdiBjbGFzcz1cImlzc19fY29sb3ItYmFyXCI+PC9kaXY+J1xuICAgICAgKyAnPGRpdiBjbGFzcz1cImlzc19fc2luZ2xlX2ZseS12YWx1ZSBpc3NfX3Rvb2x0aXBcIj48L2Rpdj4nXG4gICAgICArICc8ZGl2IGNsYXNzPVwiaXNzX19zaW5nbGUgaXNzX19kcmFnXCI+PC9kaXY+J1xuICAgICAgKyAnPC9kaXY+JztcbiAgfVxuXG4gIGNyZWF0ZURvdWJsZURPTSA9ICgpID0+IHtcbiAgICB0aGlzLmVsZW0uaW5uZXJIVE1MID0gJzxkaXYgY2xhc3M9XCJpc3NfX3ZhbHVlLWZpZWxkXCI+J1xuICAgICAgKyAnPHNwYW4gY2xhc3M9XCJpc3Nfc3RhdGljRmllbGRcIj48L3NwYW4+J1xuICAgICAgKyAnLSdcbiAgICAgICsgJzxzcGFuIGNsYXNzPVwiaXNzX3N0YXRpY0ZpZWxkXCI+PC9zcGFuPidcbiAgICAgICsgJzwvZGl2PidcbiAgICAgICsgJzxkaXYgY2xhc3M9IFwiaXNzLWNvbnRhaW5lclwiPidcbiAgICAgICsgJzxkaXYgY2xhc3M9IFwiaXNzX19zY2FsZVwiPjwvZGl2PidcbiAgICAgICsgJzxkaXYgY2xhc3M9XCJpc3NfX2RvdWJsZV9mbHktdmFsdWUtMSBpc3NfX3Rvb2x0aXBcIj48L2Rpdj4nXG4gICAgICArICc8ZGl2IGNsYXNzPVwiaXNzX19kb3VibGVfMV9ob3Jpem9udGFsIGlzc19fZHJhZ1wiPjwvZGl2PidcbiAgICAgICsgJzxkaXYgY2xhc3M9XCJpc3NfX2RvdWJsZV9mbHktdmFsdWUtMiBpc3NfX3Rvb2x0aXBcIj48L2Rpdj4nXG4gICAgICArICc8ZGl2IGNsYXNzPVwiaXNzX19kb3VibGVfMl9ob3Jpem9udGFsIGlzc19fZHJhZ1wiPjwvZGl2PidcbiAgICAgICsgJzxkaXYgY2xhc3M9XCJpc3NfX2NvbG9yLWJhclwiPjwvZGl2PidcbiAgICAgICsgJzwvZGl2Pic7XG4gIH1cblxuICB3cml0ZURPTSA9ICgpID0+IHtcbiAgICB0aGlzLmNoZWNrRWxlbWVudHNJbkRPTSgpO1xuICAgIGlmICh0aGlzLnNsaWRlclR5cGUgPT09ICdzaW5nbGUnKSB7XG4gICAgICB0aGlzLndyaXRlU2luZ2xlRE9NdG9WYXJpYWJsZXMoKTtcbiAgICAgIHRoaXMud3JpdGVTaW5nbGVTbGlkZXJJbmRlbnQoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2xpZGVyVHlwZSA9PT0gJ2RvdWJsZScpIHtcbiAgICAgIHRoaXMud3JpdGVEb3VibGVET010b1ZhcmlhYmxlcygpO1xuICAgICAgdGhpcy53cml0ZURvdWJsZVNsaWRlckluZGVudCgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY2hlY2tFbGVtZW50c0luRE9NID0gKCkgPT4ge1xuICAgIGNvbnN0IERPTUVsZW1lbnRzID0gdGhpcy5lbGVtLnF1ZXJ5U2VsZWN0b3JBbGwoJy5pc3NfX2RyYWcnKTtcbiAgICBpZiAoKERPTUVsZW1lbnRzLmxlbmd0aCA+IDApKSB7XG4gICAgICB0aGlzLnNsaWRlckluRE9NID0gRE9NRWxlbWVudHM7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB3cml0ZVNpbmdsZURPTXRvVmFyaWFibGVzID0gKCkgPT4ge1xuICAgIFt0aGlzLnNjYWxlXSA9IHRoaXMucmV0dXJuRWxlbWVudHNGcm9tRE9NKCcuaXNzX19zY2FsZScsIDEpO1xuICAgIFt0aGlzLnNpbmdsZVNsaWRlcl0gPSB0aGlzLnJldHVybkVsZW1lbnRzRnJvbURPTSgnLmlzc19fZHJhZycsIDEpO1xuICAgIFt0aGlzLnN0YXRpY0ZpZWxkU2luZ2xlXSA9IHRoaXMucmV0dXJuRWxlbWVudHNGcm9tRE9NKCcuaXNzX3N0YXRpY0ZpZWxkJywgMSk7XG4gICAgW3RoaXMuZmx5RmllbGRTaW5nbGVdID0gdGhpcy5yZXR1cm5FbGVtZW50c0Zyb21ET00oJy5pc3NfX3Rvb2x0aXAnLCAxKTtcbiAgICBbdGhpcy5yaWJib25dID0gdGhpcy5yZXR1cm5FbGVtZW50c0Zyb21ET00oJy5pc3NfX2NvbG9yLWJhcicsIDEpO1xuICB9XG5cbiAgcHJpdmF0ZSB3cml0ZURvdWJsZURPTXRvVmFyaWFibGVzID0gKCkgPT4ge1xuICAgIFt0aGlzLnNjYWxlXSA9IHRoaXMucmV0dXJuRWxlbWVudHNGcm9tRE9NKCcuaXNzX19zY2FsZScsIDEpO1xuICAgIFt0aGlzLmxvd2VyU2xpZGVyLCB0aGlzLnVwcGVyU2xpZGVyXSA9IHRoaXMucmV0dXJuRWxlbWVudHNGcm9tRE9NKCcuaXNzX19kcmFnJywgMik7XG4gICAgW3RoaXMuc3RhdGljRmllbGRMb3dlciwgdGhpcy5zdGF0aWNGaWVsZFVwcGVyXSA9IHRoaXMucmV0dXJuRWxlbWVudHNGcm9tRE9NKCcuaXNzX3N0YXRpY0ZpZWxkJywgMik7XG4gICAgW3RoaXMuZmx5RmllbGRMb3dlciwgdGhpcy5mbHlGaWVsZFVwcGVyXSA9IHRoaXMucmV0dXJuRWxlbWVudHNGcm9tRE9NKCcuaXNzX190b29sdGlwJywgMik7XG4gICAgW3RoaXMucmliYm9uXSA9IHRoaXMucmV0dXJuRWxlbWVudHNGcm9tRE9NKCcuaXNzX19jb2xvci1iYXInLCAxKTtcbiAgfVxuXG4gIHByaXZhdGUgd3JpdGVTaW5nbGVTbGlkZXJJbmRlbnQgPSAoKSA9PiB7XG4gICAgY29uc3QgZWxlbSA9IHRoaXMucmV0dXJuRWxlbWVudHNGcm9tRE9NKCcuaXNzX19kcmFnJywgMSk7XG4gICAgdGhpcy5zaW5nbGVTbGlkZXJQb3NpdGlvbiA9IHRoaXMucmV0dXJuSW5kZW50KGVsZW1bMF0pO1xuICB9XG5cbiAgcHJpdmF0ZSB3cml0ZURvdWJsZVNsaWRlckluZGVudCA9ICgpID0+IHtcbiAgICBjb25zdCBlbGVtcyA9IHRoaXMucmV0dXJuRWxlbWVudHNGcm9tRE9NKCcuaXNzX19kcmFnJywgMik7XG4gICAgdGhpcy5sb3dlclNsaWRlclBvc2l0aW9uID0gdGhpcy5yZXR1cm5JbmRlbnQoZWxlbXNbMF0pO1xuICAgIHRoaXMudXBwZXJTbGlkZXJQb3NpdGlvbiA9IHRoaXMucmV0dXJuSW5kZW50KGVsZW1zWzFdKTtcbiAgfVxuXG4gIHByaXZhdGUgcmV0dXJuSW5kZW50ID0gKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSA9PiB7XG4gICAgaWYgKHRoaXMuZGlyZWN0aW9uVHlwZSA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICByZXR1cm4gZWxlbWVudC5vZmZzZXRMZWZ0O1xuICAgIH0gaWYgKHRoaXMuZGlyZWN0aW9uVHlwZSA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgcmV0dXJuIGVsZW1lbnQub2Zmc2V0VG9wO1xuICAgIH1cbiAgfTtcblxuICBwcml2YXRlIHJldHVybkVsZW1lbnRzRnJvbURPTSA9IChjbGFzc05hbWU6IHN0cmluZywgbGVuZ3RoOiBudW1iZXIpID0+IHtcbiAgICBjb25zdCBET01FbGVtZW50cyA9IHRoaXMuZWxlbS5xdWVyeVNlbGVjdG9yQWxsKGNsYXNzTmFtZSk7XG4gICAgaWYgKChET01FbGVtZW50cy5sZW5ndGggPT09IGxlbmd0aCkpIHtcbiAgICAgIHJldHVybiBET01FbGVtZW50cztcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgd3JpdGVHZW9tZXRyeURPTXRvVmFyaWFibGVzID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0RGlyZWN0aW9uKCk7XG4gICAgdGhpcy53cml0ZUdlb21ldHJ5T2ZTbGlkZXIoKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0RGlyZWN0aW9uID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLmRpcmVjdGlvblR5cGUgPT09ICdob3Jpem9udGFsJykge1xuICAgICAgdGhpcy5tYWluQXhpc1NpemUgPSB0aGlzLnNjYWxlLm9mZnNldFdpZHRoO1xuICAgIH1cbiAgICBpZiAodGhpcy5kaXJlY3Rpb25UeXBlID09PSAndmVydGljYWwnKSB7XG4gICAgICB0aGlzLm1haW5BeGlzU2l6ZSA9IHRoaXMuc2NhbGUub2Zmc2V0SGVpZ2h0O1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgd3JpdGVHZW9tZXRyeU9mU2xpZGVyID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLnNsaWRlclR5cGUgPT09ICdzaW5nbGUnKSB7XG4gICAgICB0aGlzLnNsaWRlcldpZHRoID0gdGhpcy5zaW5nbGVTbGlkZXIub2Zmc2V0V2lkdGg7XG4gICAgICB0aGlzLnNsaWRlckhlaWdodCA9IHRoaXMuc2luZ2xlU2xpZGVyLm9mZnNldEhlaWdodDtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2xpZGVyVHlwZSA9PT0gJ2RvdWJsZScpIHtcbiAgICAgIHRoaXMuc2xpZGVyV2lkdGggPSB0aGlzLmxvd2VyU2xpZGVyLm9mZnNldFdpZHRoO1xuICAgICAgdGhpcy5zbGlkZXJIZWlnaHQgPSB0aGlzLmxvd2VyU2xpZGVyLm9mZnNldEhlaWdodDtcbiAgICB9XG4gICAgdGhpcy5jYWxjUGl4ZWxTdGVwKCk7XG4gIH1cblxuICBjYWxjUGl4ZWxTdGVwID0gKCkgPT4ge1xuICAgIGNvbnN0IHN0ZXBJblBpeGVsID0gKHRoaXMubWFpbkF4aXNTaXplIC8gKHRoaXMudXBwZXJTY2FsZUJvdW5kIC0gdGhpcy5sb3dlclNjYWxlQm91bmQpKSAqIHRoaXMuc3RlcDtcbiAgICBpZiAoc3RlcEluUGl4ZWwgPCAxKSB7XG4gICAgICB0aGlzLnBpeGVsU3RlcCA9IDE7XG4gICAgICB0aGlzLnJvdW5kZWRQaXhlbFN0ZXAgPSAxO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnBpeGVsU3RlcCA9IHN0ZXBJblBpeGVsO1xuICAgICAgdGhpcy5yb3VuZGVkUGl4ZWxTdGVwID0gTWF0aC5yb3VuZChzdGVwSW5QaXhlbCk7XG4gICAgfVxuICB9XG5cbiAgY3JlYXRlTGlzdGVuZXJPblNsaWRlciA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5zbGlkZXJUeXBlID09PSAnc2luZ2xlJykge1xuICAgICAgdGhpcy5zaW5nbGVTbGlkZXIub25tb3VzZWRvd24gPSB0aGlzLmV2ZW50T25TbGlkZXI7XG4gICAgfSBlbHNlIGlmICh0aGlzLnNsaWRlclR5cGUgPT09ICdkb3VibGUnKSB7XG4gICAgICB0aGlzLmxvd2VyU2xpZGVyLm9ubW91c2Vkb3duID0gdGhpcy5ldmVudE9uU2xpZGVyO1xuICAgICAgdGhpcy51cHBlclNsaWRlci5vbm1vdXNlZG93biA9IHRoaXMuZXZlbnRPblNsaWRlcjtcbiAgICB9XG4gIH1cblxuICBtb3Zlc1NsaWRlcnNUb1N0YXJ0UG9zaXRpb25zID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLnNsaWRlclR5cGUgPT09ICdzaW5nbGUnKSB7XG4gICAgICB0aGlzLnNldFNpbmdsZVRvU3RhcnRQb3NpdGlvbigpO1xuICAgICAgdGhpcy5tb3ZlUmliYm9uKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLnNsaWRlclR5cGUgPT09ICdkb3VibGUnKSB7XG4gICAgICB0aGlzLnNldHNEb3VibGVUb1N0YXJ0UG9zdGlvbnMoKTtcbiAgICAgIHRoaXMubW92ZVJpYmJvbigpO1xuICAgIH1cbiAgfVxuXG4gIHNldFNpbmdsZVRvU3RhcnRQb3NpdGlvbiA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5kaXJlY3Rpb25UeXBlID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgIHRoaXMuc2luZ2xlU2xpZGVyLnN0eWxlLmxlZnQgPSBgJHt0aGlzLmNhbGNNb25leVRvUG9zaXRpb24odGhpcy5sb3dlclNsaWRlclZhbHVlKX1weGA7XG4gICAgfVxuICAgIGlmICh0aGlzLmRpcmVjdGlvblR5cGUgPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgIHRoaXMuc2luZ2xlU2xpZGVyLnN0eWxlLnRvcCA9IGAke3RoaXMuY2FsY01vbmV5VG9Qb3NpdGlvbih0aGlzLmxvd2VyU2xpZGVyVmFsdWUpfXB4YDtcbiAgICB9XG4gIH1cblxuICBzZXRzRG91YmxlVG9TdGFydFBvc3Rpb25zID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLmxvd2VyU2NhbGVCb3VuZCA8PSB0aGlzLmxvd2VyU2xpZGVyVmFsdWUgJiYgdGhpcy51cHBlclNjYWxlQm91bmQgPj0gdGhpcy51cHBlclNsaWRlclZhbHVlKSB7XG4gICAgICBpZiAodGhpcy5kaXJlY3Rpb25UeXBlID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgdGhpcy5sb3dlclNsaWRlci5zdHlsZS5sZWZ0ID0gYCR7dGhpcy5jYWxjTW9uZXlUb1Bvc2l0aW9uKHRoaXMubG93ZXJTbGlkZXJWYWx1ZSl9cHhgO1xuICAgICAgICB0aGlzLnVwcGVyU2xpZGVyLnN0eWxlLmxlZnQgPSBgJHt0aGlzLmNhbGNNb25leVRvUG9zaXRpb24odGhpcy51cHBlclNsaWRlclZhbHVlKX1weGA7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5kaXJlY3Rpb25UeXBlID09PSAndmVydGljYWwnKSB7XG4gICAgICAgIHRoaXMubG93ZXJTbGlkZXIuc3R5bGUudG9wID0gYCR7dGhpcy5jYWxjTW9uZXlUb1Bvc2l0aW9uKHRoaXMudXBwZXJTbGlkZXJWYWx1ZSl9cHhgO1xuICAgICAgICB0aGlzLnVwcGVyU2xpZGVyLnN0eWxlLnRvcCA9IGAke3RoaXMuY2FsY01vbmV5VG9Qb3NpdGlvbih0aGlzLmxvd2VyU2xpZGVyVmFsdWUpfXB4YDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB3cml0ZU1vbmV5VG9GaWVsZHMgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuc2xpZGVyVHlwZSA9PT0gJ3NpbmdsZScpIHtcbiAgICAgIHRoaXMuc3RhdGljRmllbGRTaW5nbGUuaW5uZXJUZXh0ID0gYCR7dGhpcy5sb3dlclNsaWRlclZhbHVlfSR7dGhpcy5zaWdufWA7XG4gICAgICB0aGlzLmZseUZpZWxkU2luZ2xlLmlubmVyVGV4dCA9IGAke3RoaXMubG93ZXJTbGlkZXJWYWx1ZX0ke3RoaXMuc2lnbn1gO1xuICAgIH1cbiAgICBpZiAodGhpcy5zbGlkZXJUeXBlID09PSAnZG91YmxlJykge1xuICAgICAgdGhpcy5zdGF0aWNGaWVsZExvd2VyLmlubmVyVGV4dCA9IGAke3RoaXMubG93ZXJTbGlkZXJWYWx1ZX0ke3RoaXMuc2lnbn1gO1xuICAgICAgdGhpcy5zdGF0aWNGaWVsZFVwcGVyLmlubmVyVGV4dCA9IGAke3RoaXMudXBwZXJTbGlkZXJWYWx1ZX0ke3RoaXMuc2lnbn1gO1xuXG4gICAgICB0aGlzLmZseUZpZWxkTG93ZXIuaW5uZXJUZXh0ID0gYCR7dGhpcy5sb3dlclNsaWRlclZhbHVlfSR7dGhpcy5zaWdufWA7XG4gICAgICB0aGlzLmZseUZpZWxkVXBwZXIuaW5uZXJUZXh0ID0gYCR7dGhpcy51cHBlclNsaWRlclZhbHVlfSR7dGhpcy5zaWdufWA7XG4gICAgfVxuICB9XG5cbiAgY2FsY01vbmV5VG9Qb3NpdGlvbihtb25leTogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuZGlyZWN0aW9uVHlwZSA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICBjb25zdCBwb3NpdGlvbiA9ICgobW9uZXkgLSB0aGlzLmxvd2VyU2NhbGVCb3VuZCkgLyB0aGlzLnN0ZXApICogdGhpcy5waXhlbFN0ZXA7XG4gICAgICByZXR1cm4gcG9zaXRpb247XG4gICAgfVxuICAgIGlmICh0aGlzLmRpcmVjdGlvblR5cGUgPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgIGNvbnN0IHBvc2l0aW9uID0gdGhpcy5tYWluQXhpc1NpemUgLSAoKChtb25leSAtIHRoaXMubG93ZXJTY2FsZUJvdW5kKSAvIHRoaXMuc3RlcCkgKiB0aGlzLnBpeGVsU3RlcCk7XG4gICAgICByZXR1cm4gcG9zaXRpb247XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBldmVudE9uU2xpZGVyID0gKF9lOiBFdmVudCkgPT4ge1xuICAgIF9lLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5zZXRSZXN0cmljdGlvbk9mU2xpZGVyTW92ZW1lbnQoX2UpO1xuICAgIGRvY3VtZW50Lm9ubW91c2V1cCA9IHRoaXMuY2FuY2VsRXZlbnRzO1xuICAgIGRvY3VtZW50Lm9ubW91c2Vtb3ZlID0gdGhpcy5tb3ZlRXZlbnRXaXRoSG9sZE1vdXNlO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRSZXN0cmljdGlvbk9mU2xpZGVyTW92ZW1lbnQgPSAoX2U6IEV2ZW50KSA9PiB7XG4gICAgaWYgKHRoaXMuc2xpZGVyVHlwZSA9PT0gJ2RvdWJsZScpIHtcbiAgICAgIHRoaXMuc2V0UmVzdHJpY3Rpb25Gb3JEb3VibGVTbGlkZXIoX2UpO1xuICAgIH1cbiAgICBpZiAodGhpcy5zbGlkZXJUeXBlID09PSAnc2luZ2xlJykge1xuICAgICAgdGhpcy5zZXRSZXN0cmljdGlvbkZvclNpbmdsZVNsaWRlcigpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2V0UmVzdHJpY3Rpb25Gb3JEb3VibGVTbGlkZXIgPSAoX2U6IEV2ZW50KSA9PiB7XG4gICAgaWYgKHRoaXMuZGlyZWN0aW9uVHlwZSA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICBpZiAoX2UudGFyZ2V0ID09PSB0aGlzLmxvd2VyU2xpZGVyKSB7XG4gICAgICAgIHRoaXMudGFyZ2V0U2xpZGVyID0gdGhpcy5sb3dlclNsaWRlcjtcbiAgICAgICAgdGhpcy5sb3dlclJlc3RyaWN0aW9uID0gMDtcbiAgICAgICAgdGhpcy51cHBlclJlc3RyaWN0aW9uID0gdGhpcy51cHBlclNsaWRlclBvc2l0aW9uO1xuICAgICAgICB0aGlzLmxvd2VyQ29zdFJlc3RyaWN0aW9uID0gdGhpcy5sb3dlclNjYWxlQm91bmQ7XG4gICAgICAgIHRoaXMudXBwZXJDb3N0UmVzdHJpY3Rpb24gPSB0aGlzLmdldENvc3RGb3JTbGlkZXIodGhpcy51cHBlclJlc3RyaWN0aW9uKTtcbiAgICAgIH1cbiAgICAgIGlmIChfZS50YXJnZXQgPT09IHRoaXMudXBwZXJTbGlkZXIpIHtcbiAgICAgICAgdGhpcy50YXJnZXRTbGlkZXIgPSB0aGlzLnVwcGVyU2xpZGVyO1xuICAgICAgICB0aGlzLmxvd2VyUmVzdHJpY3Rpb24gPSB0aGlzLmxvd2VyU2xpZGVyUG9zaXRpb247XG4gICAgICAgIHRoaXMudXBwZXJSZXN0cmljdGlvbiA9IHRoaXMubWFpbkF4aXNTaXplO1xuICAgICAgICB0aGlzLmxvd2VyQ29zdFJlc3RyaWN0aW9uID0gdGhpcy5nZXRDb3N0Rm9yU2xpZGVyKHRoaXMubG93ZXJSZXN0cmljdGlvbik7XG4gICAgICAgIHRoaXMudXBwZXJDb3N0UmVzdHJpY3Rpb24gPSB0aGlzLnVwcGVyU2NhbGVCb3VuZDtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMuZGlyZWN0aW9uVHlwZSA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgaWYgKF9lLnRhcmdldCA9PT0gdGhpcy5sb3dlclNsaWRlcikge1xuICAgICAgICB0aGlzLnRhcmdldFNsaWRlciA9IHRoaXMubG93ZXJTbGlkZXI7XG4gICAgICAgIHRoaXMubG93ZXJSZXN0cmljdGlvbiA9IDA7XG4gICAgICAgIHRoaXMudXBwZXJSZXN0cmljdGlvbiA9IHRoaXMudXBwZXJTbGlkZXJQb3NpdGlvbjtcbiAgICAgICAgdGhpcy5sb3dlckNvc3RSZXN0cmljdGlvbiA9IHRoaXMuZ2V0Q29zdEZvclNsaWRlcih0aGlzLmxvd2VyUmVzdHJpY3Rpb24pO1xuICAgICAgICB0aGlzLnVwcGVyQ29zdFJlc3RyaWN0aW9uID0gdGhpcy5nZXRDb3N0Rm9yU2xpZGVyKHRoaXMudXBwZXJSZXN0cmljdGlvbik7XG4gICAgICB9XG4gICAgICBpZiAoX2UudGFyZ2V0ID09PSB0aGlzLnVwcGVyU2xpZGVyKSB7XG4gICAgICAgIHRoaXMudGFyZ2V0U2xpZGVyID0gdGhpcy51cHBlclNsaWRlcjtcbiAgICAgICAgdGhpcy5sb3dlclJlc3RyaWN0aW9uID0gdGhpcy5sb3dlclNsaWRlclBvc2l0aW9uO1xuICAgICAgICB0aGlzLnVwcGVyUmVzdHJpY3Rpb24gPSB0aGlzLm1haW5BeGlzU2l6ZTtcbiAgICAgICAgdGhpcy5sb3dlckNvc3RSZXN0cmljdGlvbiA9IHRoaXMuZ2V0Q29zdEZvclNsaWRlcih0aGlzLmxvd2VyUmVzdHJpY3Rpb24pO1xuICAgICAgICB0aGlzLnVwcGVyQ29zdFJlc3RyaWN0aW9uID0gdGhpcy5nZXRDb3N0Rm9yU2xpZGVyKHRoaXMudXBwZXJSZXN0cmljdGlvbik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRSZXN0cmljdGlvbkZvclNpbmdsZVNsaWRlciA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5kaXJlY3Rpb25UeXBlID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgIHRoaXMudGFyZ2V0U2xpZGVyID0gdGhpcy5zaW5nbGVTbGlkZXI7XG4gICAgICB0aGlzLmxvd2VyUmVzdHJpY3Rpb24gPSAwO1xuICAgICAgdGhpcy51cHBlclJlc3RyaWN0aW9uID0gdGhpcy5tYWluQXhpc1NpemU7XG4gICAgICB0aGlzLmxvd2VyQ29zdFJlc3RyaWN0aW9uID0gdGhpcy5sb3dlclNjYWxlQm91bmQ7XG4gICAgICB0aGlzLnVwcGVyQ29zdFJlc3RyaWN0aW9uID0gdGhpcy51cHBlclNjYWxlQm91bmQ7XG4gICAgfVxuICAgIGlmICh0aGlzLmRpcmVjdGlvblR5cGUgPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgIHRoaXMudGFyZ2V0U2xpZGVyID0gdGhpcy5zaW5nbGVTbGlkZXI7XG4gICAgICB0aGlzLmxvd2VyUmVzdHJpY3Rpb24gPSAwO1xuICAgICAgdGhpcy51cHBlclJlc3RyaWN0aW9uID0gdGhpcy5tYWluQXhpc1NpemU7XG4gICAgICB0aGlzLmxvd2VyQ29zdFJlc3RyaWN0aW9uID0gdGhpcy51cHBlclNjYWxlQm91bmQ7XG4gICAgICB0aGlzLnVwcGVyQ29zdFJlc3RyaWN0aW9uID0gdGhpcy5sb3dlclNjYWxlQm91bmQ7XG4gICAgfVxuICB9XG5cbiAgZ2V0Q29zdEZvclNsaWRlciA9IChzbGlkZXJQb3N0aW9uSW5QaXhlbDogbnVtYmVyKSA9PiB7XG4gICAgaWYgKHRoaXMuZGlyZWN0aW9uVHlwZSA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICBpZiAoc2xpZGVyUG9zdGlvbkluUGl4ZWwgPD0gMCkge1xuICAgICAgICByZXR1cm4gdGhpcy5sb3dlclNjYWxlQm91bmQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gKHRoaXMubG93ZXJTY2FsZUJvdW5kICsgKE1hdGgucm91bmQoc2xpZGVyUG9zdGlvbkluUGl4ZWwgLyB0aGlzLnBpeGVsU3RlcCkgKiB0aGlzLnN0ZXApKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZGlyZWN0aW9uVHlwZSA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgaWYgKHNsaWRlclBvc3Rpb25JblBpeGVsIDw9IDApIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXBwZXJTY2FsZUJvdW5kO1xuICAgICAgfVxuICAgICAgcmV0dXJuICgoTWF0aC5yb3VuZCgodGhpcy5tYWluQXhpc1NpemUgLSBzbGlkZXJQb3N0aW9uSW5QaXhlbCkgLyB0aGlzLnBpeGVsU3RlcCkgKiB0aGlzLnN0ZXApICsgdGhpcy5sb3dlclNjYWxlQm91bmQpO1xuICAgIH1cbiAgfVxuXG4gIG1vdmVFdmVudFdpdGhIb2xkTW91c2UgPSAoX2U6IE1vdXNlRXZlbnQpID0+IHtcbiAgICBjb25zdCBpbm5lck1vdXNlUG9zaXRpb24gPSB0aGlzLmdldE1vdXNlUG9zaXRpb24oX2UpO1xuXG4gICAgY29uc3QgbmVhcmVzdFJvdW5kZWRTdGVwID0gdGhpcy5jYWxjTmVhcmVzdFN0ZXAoaW5uZXJNb3VzZVBvc2l0aW9uKTtcblxuICAgIGNvbnN0IGZpbmFsUG9zaXRpb25JblBpeGVsID0gdGhpcy5jYWxjRmluYWxQb3NpdGlvbihuZWFyZXN0Um91bmRlZFN0ZXApO1xuXG4gICAgY29uc3QgZmluYWxDb3N0ID0gdGhpcy5jYWxjRmluYWxDb3N0KG5lYXJlc3RSb3VuZGVkU3RlcCk7XG5cbiAgICB0aGlzLm1vdmVTbGlkZXIoZmluYWxQb3NpdGlvbkluUGl4ZWwpO1xuXG4gICAgdGhpcy5zaG93TW9uZXlPblNjcmVlbihmaW5hbENvc3QpO1xuXG4gICAgdGhpcy53cml0ZU1vbmV5VG9WYXJpYWJsZXMoZmluYWxDb3N0KTtcblxuICAgIHRoaXMuc2V0T3ZlcmxheSgpO1xuXG4gICAgdGhpcy5tb3ZlUmliYm9uKCk7XG5cbiAgICB0aGlzLm1vdmVUb29sdGlwKCk7XG4gIH1cblxuICBwcml2YXRlIGdldE1vdXNlUG9zaXRpb24gPSAoX2U6IE1vdXNlRXZlbnQpID0+IHtcbiAgICB0aGlzLmNsaWVudFJlY3QgPSB0aGlzLnNjYWxlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGlmICh0aGlzLmRpcmVjdGlvblR5cGUgPT09ICdob3Jpem9udGFsJykge1xuICAgICAgdGhpcy5pbmRlbnQgPSB0aGlzLmNsaWVudFJlY3QubGVmdDtcbiAgICAgIHJldHVybiAoX2UuY2xpZW50WCAtIHRoaXMuaW5kZW50IC0gdGhpcy5zbGlkZXJXaWR0aCk7XG4gICAgfSBpZiAodGhpcy5kaXJlY3Rpb25UeXBlID09PSAndmVydGljYWwnKSB7XG4gICAgICB0aGlzLmluZGVudCA9IHRoaXMuY2xpZW50UmVjdC50b3A7XG4gICAgICByZXR1cm4gKF9lLmNsaWVudFkgLSB0aGlzLmluZGVudCAtIHRoaXMuc2xpZGVySGVpZ2h0KTtcbiAgICB9XG4gIH1cblxuICBjYWxjTmVhcmVzdFN0ZXAgPSAoX3Bvc2l0aW9uSW5QaXhlbDogbnVtYmVyKSA9PiB7XG4gICAgaWYgKHRoaXMuZGlyZWN0aW9uVHlwZSA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICByZXR1cm4gTWF0aC5yb3VuZChfcG9zaXRpb25JblBpeGVsIC8gdGhpcy5waXhlbFN0ZXApO1xuICAgIH1cbiAgICBpZiAodGhpcy5kaXJlY3Rpb25UeXBlID09PSAndmVydGljYWwnKSB7XG4gICAgICByZXR1cm4gTWF0aC5yb3VuZCgodGhpcy5tYWluQXhpc1NpemUgLSBfcG9zaXRpb25JblBpeGVsKSAvIHRoaXMucGl4ZWxTdGVwKTtcbiAgICB9XG4gIH1cblxuICBjYWxjRmluYWxQb3NpdGlvbiA9IChfbmVhcmVzdFJvdW5kZWRTdGVwOiBudW1iZXIpID0+IHtcbiAgICBjb25zdCBwb3NpdGlvbkluUGl4ZWwgPSBfbmVhcmVzdFJvdW5kZWRTdGVwICogdGhpcy5waXhlbFN0ZXA7XG4gICAgaWYgKHRoaXMuZGlyZWN0aW9uVHlwZSA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICBpZiAodGhpcy5pc1BpeGVsc0luQm9yZGVyKHBvc2l0aW9uSW5QaXhlbCkpIHtcbiAgICAgICAgcmV0dXJuIHBvc2l0aW9uSW5QaXhlbDtcbiAgICAgIH1cbiAgICAgIGlmIChwb3NpdGlvbkluUGl4ZWwgPD0gdGhpcy5sb3dlclJlc3RyaWN0aW9uKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvd2VyUmVzdHJpY3Rpb247XG4gICAgICB9XG4gICAgICBpZiAocG9zaXRpb25JblBpeGVsID49IHRoaXMudXBwZXJSZXN0cmljdGlvbikge1xuICAgICAgICByZXR1cm4gdGhpcy51cHBlclJlc3RyaWN0aW9uO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5kaXJlY3Rpb25UeXBlID09PSAndmVydGljYWwnKSB7XG4gICAgICBpZiAodGhpcy5pc1BpeGVsc0luQm9yZGVyKCh0aGlzLm1haW5BeGlzU2l6ZSAtIHBvc2l0aW9uSW5QaXhlbCkpKSB7XG4gICAgICAgIHJldHVybiAodGhpcy5tYWluQXhpc1NpemUgLSBwb3NpdGlvbkluUGl4ZWwpO1xuICAgICAgfVxuICAgICAgaWYgKCh0aGlzLm1haW5BeGlzU2l6ZSAtIHBvc2l0aW9uSW5QaXhlbCkgPD0gdGhpcy5sb3dlclJlc3RyaWN0aW9uKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvd2VyUmVzdHJpY3Rpb247XG4gICAgICB9XG4gICAgICBpZiAoKHRoaXMubWFpbkF4aXNTaXplIC0gcG9zaXRpb25JblBpeGVsKSA+PSB0aGlzLnVwcGVyUmVzdHJpY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXBwZXJSZXN0cmljdGlvbjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjYWxjRmluYWxDb3N0ID0gKF9uZWFyZXN0Um91bmRlZFN0ZXA6IG51bWJlcikgPT4ge1xuICAgIGlmICh0aGlzLmRpcmVjdGlvblR5cGUgPT09ICdob3Jpem9udGFsJykge1xuICAgICAgY29uc3QgcG9zaXRpb25Jbk1vbmV5ID0gdGhpcy5sb3dlclNjYWxlQm91bmQgKyAoX25lYXJlc3RSb3VuZGVkU3RlcCAqIHRoaXMuc3RlcCk7XG4gICAgICBjb25zb2xlLmxvZyhgcG9zaXRpb25Jbk1vbmV5ID09PSAke3Bvc2l0aW9uSW5Nb25leX1gKTtcbiAgICAgIGNvbnNvbGUubG9nKGB0aGlzLmlzTW9uZXlJbkJvcmRlcihwb3NpdGlvbkluTW9uZXkpID09PSAke3RoaXMuaXNNb25leUluQm9yZGVyKHBvc2l0aW9uSW5Nb25leSl9YCk7XG5cbiAgICAgIGlmICh0aGlzLmlzTW9uZXlJbkJvcmRlcihwb3NpdGlvbkluTW9uZXkpKSB7XG4gICAgICAgIHJldHVybiBwb3NpdGlvbkluTW9uZXk7XG4gICAgICB9XG4gICAgICBpZiAocG9zaXRpb25Jbk1vbmV5IDwgdGhpcy5sb3dlckNvc3RSZXN0cmljdGlvbikge1xuICAgICAgICByZXR1cm4gdGhpcy5sb3dlckNvc3RSZXN0cmljdGlvbjtcbiAgICAgIH1cbiAgICAgIGlmIChwb3NpdGlvbkluTW9uZXkgPiB0aGlzLnVwcGVyQ29zdFJlc3RyaWN0aW9uKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVwcGVyQ29zdFJlc3RyaWN0aW9uO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5kaXJlY3Rpb25UeXBlID09PSAndmVydGljYWwnKSB7XG4gICAgICBjb25zdCBwb3NpdGlvbkluTW9uZXkgPSAoX25lYXJlc3RSb3VuZGVkU3RlcCAqIHRoaXMuc3RlcCkgKyB0aGlzLmxvd2VyU2NhbGVCb3VuZDtcbiAgICAgIGlmICh0aGlzLmlzTW9uZXlJbkJvcmRlcihwb3NpdGlvbkluTW9uZXkpKSB7XG4gICAgICAgIHJldHVybiBwb3NpdGlvbkluTW9uZXk7XG4gICAgICB9XG4gICAgICBpZiAocG9zaXRpb25Jbk1vbmV5ID4gdGhpcy5sb3dlckNvc3RSZXN0cmljdGlvbikge1xuICAgICAgICByZXR1cm4gdGhpcy5sb3dlckNvc3RSZXN0cmljdGlvbjtcbiAgICAgIH1cbiAgICAgIGlmIChwb3NpdGlvbkluTW9uZXkgPCB0aGlzLnVwcGVyQ29zdFJlc3RyaWN0aW9uKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVwcGVyQ29zdFJlc3RyaWN0aW9uO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlzUGl4ZWxzSW5Cb3JkZXIgPSAoX3Bvc2l0aW9uOiBudW1iZXIpID0+ICgoX3Bvc2l0aW9uID49IHRoaXMubG93ZXJSZXN0cmljdGlvbikgJiYgKF9wb3NpdGlvbiA8PSB0aGlzLnVwcGVyUmVzdHJpY3Rpb24pKVxuXG4gIGlzTW9uZXlJbkJvcmRlciA9IChfcG9zaXRpb246IG51bWJlcikgPT4ge1xuICAgIGlmICh0aGlzLmRpcmVjdGlvblR5cGUgPT09ICdob3Jpem9udGFsJykge1xuICAgICAgcmV0dXJuICgoX3Bvc2l0aW9uID49IHRoaXMubG93ZXJDb3N0UmVzdHJpY3Rpb24pICYmIChfcG9zaXRpb24gPD0gdGhpcy51cHBlckNvc3RSZXN0cmljdGlvbikpO1xuICAgIH1cbiAgICBpZiAodGhpcy5kaXJlY3Rpb25UeXBlID09PSAndmVydGljYWwnKSB7XG4gICAgICByZXR1cm4gKChfcG9zaXRpb24gPD0gdGhpcy5sb3dlckNvc3RSZXN0cmljdGlvbikgJiYgKF9wb3NpdGlvbiA+PSB0aGlzLnVwcGVyQ29zdFJlc3RyaWN0aW9uKSk7XG4gICAgfVxuICB9XG5cbiAgc2hvd01vbmV5T25TY3JlZW4gPSAoZmluYWxDb3N0OiBudW1iZXIpID0+IHtcbiAgICBjb25zdCBjb3N0ID0gYCR7ZmluYWxDb3N0fSR7dGhpcy5zaWdufWA7XG4gICAgaWYgKHRoaXMudGFyZ2V0U2xpZGVyID09PSB0aGlzLmxvd2VyU2xpZGVyKSB7XG4gICAgICB0aGlzLnN0YXRpY0ZpZWxkTG93ZXIudGV4dENvbnRlbnQgPSBgJHtjb3N0fWA7XG4gICAgICB0aGlzLmZseUZpZWxkTG93ZXIudGV4dENvbnRlbnQgPSBgJHtjb3N0fWA7XG4gICAgfVxuICAgIGlmICh0aGlzLnRhcmdldFNsaWRlciA9PT0gdGhpcy51cHBlclNsaWRlcikge1xuICAgICAgdGhpcy5zdGF0aWNGaWVsZFVwcGVyLnRleHRDb250ZW50ID0gYCR7Y29zdH1gO1xuICAgICAgdGhpcy5mbHlGaWVsZFVwcGVyLnRleHRDb250ZW50ID0gYCR7Y29zdH1gO1xuICAgIH1cbiAgICBpZiAodGhpcy50YXJnZXRTbGlkZXIgPT09IHRoaXMuc2luZ2xlU2xpZGVyKSB7XG4gICAgICB0aGlzLnN0YXRpY0ZpZWxkU2luZ2xlLnRleHRDb250ZW50ID0gYCR7Y29zdH1gO1xuICAgICAgdGhpcy5mbHlGaWVsZFNpbmdsZS50ZXh0Q29udGVudCA9IGAke2Nvc3R9YDtcbiAgICB9XG4gIH1cblxuICB3cml0ZU1vbmV5VG9WYXJpYWJsZXMgPSAoZmluYWxDb3N0OiBudW1iZXIpID0+IHtcbiAgICBpZiAodGhpcy50YXJnZXRTbGlkZXIgPT09IHRoaXMubG93ZXJTbGlkZXIpIHtcbiAgICAgIHRoaXMubG93ZXJTbGlkZXJWYWx1ZSA9IGZpbmFsQ29zdDtcbiAgICB9XG4gICAgaWYgKHRoaXMudGFyZ2V0U2xpZGVyID09PSB0aGlzLnVwcGVyU2xpZGVyKSB7XG4gICAgICB0aGlzLnVwcGVyU2xpZGVyVmFsdWUgPSBmaW5hbENvc3Q7XG4gICAgfVxuICAgIGlmICh0aGlzLnRhcmdldFNsaWRlciA9PT0gdGhpcy5zaW5nbGVTbGlkZXIpIHtcbiAgICAgIHRoaXMubG93ZXJTbGlkZXJWYWx1ZSA9IGZpbmFsQ29zdDtcbiAgICB9XG4gIH07XG5cbiAgcHJpdmF0ZSBtb3ZlUmliYm9uID0gKCkgPT4ge1xuICAgIGNvbnN0IHNldEhvcml6b250YWxSaWJib25WYXJpYWJsZXMgPSAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5zbGlkZXJJbkRPTS5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgdGhpcy5yaWJib24uc3R5bGUubGVmdCA9ICcwcHgnO1xuICAgICAgICB0aGlzLnJpYmJvbi5zdHlsZS53aWR0aCA9IGAke3RoaXMuc2luZ2xlU2xpZGVyLm9mZnNldExlZnR9cHhgO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnNsaWRlckluRE9NLmxlbmd0aCA9PT0gMikge1xuICAgICAgICB0aGlzLnJpYmJvbi5zdHlsZS5sZWZ0ID0gdGhpcy5sb3dlclNsaWRlci5zdHlsZS5sZWZ0O1xuICAgICAgICB0aGlzLnJpYmJvbi5zdHlsZS53aWR0aCA9IGAke3RoaXMudXBwZXJTbGlkZXIub2Zmc2V0TGVmdCAtIHRoaXMubG93ZXJTbGlkZXIub2Zmc2V0TGVmdH1weGA7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IHNldFZlcnRpY2FsUmliYm9uVmFyaWFibGVzID0gKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuc2xpZGVySW5ET00ubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIHRoaXMucmliYm9uLnN0eWxlLnRvcCA9IGAke3RoaXMuc2luZ2xlU2xpZGVyLm9mZnNldFRvcH1weGA7XG4gICAgICAgIHRoaXMucmliYm9uLnN0eWxlLmhlaWdodCA9IGAke3RoaXMubWFpbkF4aXNTaXplIC0gdGhpcy5zaW5nbGVTbGlkZXIub2Zmc2V0VG9wfXB4YDtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5zbGlkZXJJbkRPTS5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgdGhpcy5yaWJib24uc3R5bGUudG9wID0gdGhpcy5sb3dlclNsaWRlci5zdHlsZS50b3A7XG4gICAgICAgIHRoaXMucmliYm9uLnN0eWxlLmhlaWdodCA9IGAke3RoaXMudXBwZXJTbGlkZXIub2Zmc2V0VG9wIC0gdGhpcy5sb3dlclNsaWRlci5vZmZzZXRUb3B9cHhgO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAodGhpcy5kaXJlY3Rpb25UeXBlID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgIHNldEhvcml6b250YWxSaWJib25WYXJpYWJsZXMoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZGlyZWN0aW9uVHlwZSA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgc2V0VmVydGljYWxSaWJib25WYXJpYWJsZXMoKTtcbiAgICB9XG4gIH1cblxuICBtb3ZlU2xpZGVyID0gKG51bTogbnVtYmVyKSA9PiB7XG4gICAgaWYgKHRoaXMuZGlyZWN0aW9uVHlwZSA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICB0aGlzLnRhcmdldFNsaWRlci5zdHlsZS5sZWZ0ID0gYCR7bnVtfXB4YDtcbiAgICB9IGVsc2UgaWYgKHRoaXMuZGlyZWN0aW9uVHlwZSA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgdGhpcy50YXJnZXRTbGlkZXIuc3R5bGUudG9wID0gYCR7bnVtfXB4YDtcbiAgICB9XG4gIH1cblxuICBtb3ZlVG9vbHRpcCA9ICgpID0+IHtcbiAgICBjb25zdCBtb3ZlID0gKGRpcmVjdGlvbjogc3RyaW5nLCBvZmZzZXQ6ICdvZmZzZXRMZWZ0JyB8ICdvZmZzZXRUb3AnKSA9PiB7XG4gICAgICBpZiAodGhpcy5zbGlkZXJUeXBlID09PSAnc2luZ2xlJykge1xuICAgICAgICB0aGlzLmVsZW0ucXVlcnlTZWxlY3RvckFsbCgnLmlzc19fdG9vbHRpcCcpWzBdLnN0eWxlW2RpcmVjdGlvbl0gPSBgJHt0aGlzLnNpbmdsZVNsaWRlcltvZmZzZXRdfXB4YDtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnNsaWRlclR5cGUgPT09ICdkb3VibGUnKSB7XG4gICAgICAgIHRoaXMuZWxlbS5xdWVyeVNlbGVjdG9yQWxsKCcuaXNzX190b29sdGlwJylbMF0uc3R5bGVbZGlyZWN0aW9uXSA9IGAke3RoaXMubG93ZXJTbGlkZXJbb2Zmc2V0XX1weGA7XG4gICAgICAgIHRoaXMuZWxlbS5xdWVyeVNlbGVjdG9yQWxsKCcuaXNzX190b29sdGlwJylbMV0uc3R5bGVbZGlyZWN0aW9uXSA9IGAke3RoaXMudXBwZXJTbGlkZXJbb2Zmc2V0XX1weGA7XG4gICAgICB9XG4gICAgfTtcbiAgICBpZiAodGhpcy5kaXJlY3Rpb25UeXBlID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgIG1vdmUoJ2xlZnQnLCAnb2Zmc2V0TGVmdCcpO1xuICAgIH1cbiAgICBpZiAodGhpcy5kaXJlY3Rpb25UeXBlID09PSAndmVydGljYWwnKSB7XG4gICAgICBtb3ZlKCd0b3AnLCAnb2Zmc2V0VG9wJyk7XG4gICAgfVxuICB9XG5cbiAgc2V0T3ZlcmxheSA9ICgpID0+IHtcbiAgICBpZiAodGhpcy50YXJnZXRTbGlkZXIgPT09IHRoaXMubG93ZXJTbGlkZXIpIHtcbiAgICAgIHRoaXMudGFyZ2V0U2xpZGVyLnN0eWxlLnpJbmRleCA9ICcxMDAnO1xuICAgICAgdGhpcy51cHBlclNsaWRlci5zdHlsZS56SW5kZXggPSAnMSc7XG4gICAgfSBlbHNlIGlmICh0aGlzLnRhcmdldFNsaWRlciA9PT0gdGhpcy51cHBlclNsaWRlcikge1xuICAgICAgdGhpcy50YXJnZXRTbGlkZXIuc3R5bGUuekluZGV4ID0gJzEwMCc7XG4gICAgICB0aGlzLmxvd2VyU2xpZGVyLnN0eWxlLnpJbmRleCA9ICcxJztcbiAgICB9XG4gIH1cblxuICBjYW5jZWxFdmVudHMgPSAoKSA9PiB7XG4gICAgdGhpcy53cml0ZURPTSgpO1xuICAgIGRvY3VtZW50Lm9ubW91c2V1cCA9IG51bGw7XG4gICAgZG9jdW1lbnQub25tb3VzZW1vdmUgPSBudWxsO1xuICB9XG59XG5cbmV4cG9ydCB7IFZpZXcgfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=