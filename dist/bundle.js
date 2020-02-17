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

/***/ "./src/refactoring/js/ControlPanel.js":
/*!********************************************!*\
  !*** ./src/refactoring/js/ControlPanel.js ***!
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
            input.value = value;
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
                // console.log('работает!');
                // console.log(`elementForListener.value === ${elementForListener.value}`);
                this.settings[keyOfSetting] = elementForListener.value;
                this.sliderRefresh();
            };
            elementForListener.addEventListener('change', changeListener);
        };
        this.createListenerNumeral = (elementForListener, keyOfSetting) => {
            const inputListener = () => {
                console.log('работает!');
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

//# sourceMappingURL=ControlPanel.js.map

/***/ }),

/***/ "./src/refactoring/js/ISSlider.js":
/*!****************************************!*\
  !*** ./src/refactoring/js/ISSlider.js ***!
  \****************************************/
/*! exports provided: ISSlider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ISSlider", function() { return ISSlider; });
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ "./src/refactoring/js/model.js");
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controller */ "./src/refactoring/js/controller.js");
/* harmony import */ var _refactoringView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./refactoringView */ "./src/refactoring/js/refactoringView.js");
/* harmony import */ var _ControlPanel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ControlPanel */ "./src/refactoring/js/ControlPanel.js");




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

//# sourceMappingURL=ISSlider.js.map

/***/ }),

/***/ "./src/refactoring/js/controller.js":
/*!******************************************!*\
  !*** ./src/refactoring/js/controller.js ***!
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

//# sourceMappingURL=controller.js.map

/***/ }),

/***/ "./src/refactoring/js/model.js":
/*!*************************************!*\
  !*** ./src/refactoring/js/model.js ***!
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

//# sourceMappingURL=model.js.map

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
/* harmony import */ var _ISSlider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ISSlider */ "./src/refactoring/js/ISSlider.js");

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
//# sourceMappingURL=refactoringIndex.js.map

/***/ }),

/***/ "./src/refactoring/js/refactoringView.js":
/*!***********************************************!*\
  !*** ./src/refactoring/js/refactoringView.js ***!
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
            const stepInPixel = (this.mainAxisSize / this.upperScaleBound) * this.step;
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
                this.singleSlider.style.left = `${this.calcMoneyToPosition(this.lowerSliderValue - this.lowerScaleBound)}px`;
            }
            if (this.directionType === 'vertical') {
                this.singleSlider.style.top = `${this.calcMoneyToPosition(this.upperScaleBound - this.lowerSliderValue)}px`;
            }
        };
        this.setsDoubleToStartPostions = () => {
            if (this.lowerScaleBound <= this.lowerSliderValue && this.upperScaleBound >= this.upperSliderValue) {
                if (this.directionType === 'horizontal') {
                    this.lowerSlider.style.left = `${this.calcMoneyToPosition(this.lowerSliderValue - this.lowerScaleBound)}px`;
                    this.upperSlider.style.left = `${this.calcMoneyToPosition(this.upperScaleBound - this.upperSliderValue)}px`;
                }
                if (this.directionType === 'vertical') {
                    this.lowerSlider.style.top = `${this.calcMoneyToPosition(this.lowerSliderValue - this.lowerScaleBound)}px`;
                    this.upperSlider.style.top = `${this.calcMoneyToPosition(this.upperScaleBound - this.upperSliderValue)}px`;
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
                return (Math.round(sliderPostionInPixel / this.pixelStep) * this.step);
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
        const position = (money / this.step) * this.pixelStep;
        return position;
    }
}

//# sourceMappingURL=refactoringView.js.map

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vaXNfcmVmYWN0b3JpbmcuY3NzPzcwZTkiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZmFjdG9yaW5nL2pzL0NvbnRyb2xQYW5lbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVmYWN0b3JpbmcvanMvSVNTbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZmFjdG9yaW5nL2pzL2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZmFjdG9yaW5nL2pzL21vZGVsLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWZhY3RvcmluZy9qcy9yZWZhY3RvcmluZ0luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9yZWZhY3RvcmluZy9qcy9yZWZhY3RvcmluZ1ZpZXcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBLHVDOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrREFBK0QseUJBQXlCO0FBQ3hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxhQUFhO0FBQzdEO0FBQ0Esd0VBQXdFLHVCQUF1QjtBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdFQUF3RSx1QkFBdUI7QUFDL0Y7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3dCO0FBQ3hCLHdDOzs7Ozs7Ozs7Ozs7QUNyTkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWdDO0FBQ1U7QUFDRDtBQUNLO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsNENBQUs7QUFDM0IsMkJBQTJCLHNEQUFVO0FBQ3JDLHFCQUFxQixxREFBSTtBQUN6Qiw2QkFBNkIsMERBQVk7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ29CO0FBQ3BCLG9DOzs7Ozs7Ozs7Ozs7QUNoQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNzQjtBQUN0QixzQzs7Ozs7Ozs7Ozs7O0FDcEZBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2lCO0FBQ2pCLGlDOzs7Ozs7Ozs7Ozs7QUM5QkE7QUFBQTtBQUFBO0FBQUE7QUFBcUM7QUFDckMsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsZUFBZTtBQUNZO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSw0Qzs7Ozs7Ozs7Ozs7O0FDdkVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCx1RUFBdUU7QUFDekg7QUFDQTtBQUNBLGlEQUFpRCx1RUFBdUU7QUFDeEg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRCx1RUFBdUU7QUFDNUgscURBQXFELHVFQUF1RTtBQUM1SDtBQUNBO0FBQ0Esb0RBQW9ELHVFQUF1RTtBQUMzSCxvREFBb0QsdUVBQXVFO0FBQzNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzREFBc0Qsc0JBQXNCLEVBQUUsVUFBVTtBQUN4RixtREFBbUQsc0JBQXNCLEVBQUUsVUFBVTtBQUNyRjtBQUNBO0FBQ0EscURBQXFELHNCQUFzQixFQUFFLFVBQVU7QUFDdkYscURBQXFELHNCQUFzQixFQUFFLFVBQVU7QUFDdkYsa0RBQWtELHNCQUFzQixFQUFFLFVBQVU7QUFDcEYsa0RBQWtELHNCQUFzQixFQUFFLFVBQVU7QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsVUFBVSxFQUFFLFVBQVU7QUFDbEQ7QUFDQSx1REFBdUQsS0FBSztBQUM1RCxvREFBb0QsS0FBSztBQUN6RDtBQUNBO0FBQ0EsdURBQXVELEtBQUs7QUFDNUQsb0RBQW9ELEtBQUs7QUFDekQ7QUFDQTtBQUNBLHdEQUF3RCxLQUFLO0FBQzdELHFEQUFxRCxLQUFLO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsNkJBQTZCO0FBQzlFO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCwwREFBMEQ7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsNEJBQTRCO0FBQzNFLGtEQUFrRCxnREFBZ0Q7QUFDbEc7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELHdEQUF3RDtBQUMxRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELElBQUk7QUFDdEQ7QUFDQTtBQUNBLGlEQUFpRCxJQUFJO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5RkFBeUYsMEJBQTBCO0FBQ25IO0FBQ0E7QUFDQSx5RkFBeUYseUJBQXlCO0FBQ2xILHlGQUF5Rix5QkFBeUI7QUFDbEg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZ0I7QUFDaEIsMkMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvcmVmYWN0b3JpbmcvanMvcmVmYWN0b3JpbmdJbmRleC5qc1wiKTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImNsYXNzIENvbnRyb2xQYW5lbCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLm9yVmFsdWVzID0ge1xyXG4gICAgICAgICAgICBzaWduOiB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1NpZ24nLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICfQktCw0LvRjtGC0LAnLFxyXG4gICAgICAgICAgICAgICAgZWxlbWVudE5hbWU6ICdzaWduJyxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBbJ+KCvScsICckJ10sXHJcbiAgICAgICAgICAgICAgICBuYW1lT2ZWYXJpYWJsZTogJ3NpZ24nLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzbGlkZXJUeXBlOiB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1R5cGUnLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICfQotC40L8g0YHQu9Cw0LnQtNC10YDQsCAtINC+0LTQuNC90LDRgNC90YvQuSDQuNC70Lgg0LTQstC+0LnQvdC+0LknLFxyXG4gICAgICAgICAgICAgICAgZWxlbWVudE5hbWU6ICdzbGlkZXJUeXBlJyxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBbJ2RvdWJsZScsICdzaW5nbGUnXSxcclxuICAgICAgICAgICAgICAgIG5hbWVPZlZhcmlhYmxlOiAnc2xpZGVyVHlwZScsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRpcmVjdGlvblR5cGU6IHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnVHlwZScsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ9Ci0LjQvyDRgdC70LDQudC00LXRgNCwIC0g0LLQtdGA0YLQuNC60LDQu9GM0L3Ri9C5INC40LvQuCDQs9C+0YDQuNC30L7QvdGC0LDQu9GM0L3Ri9C5JyxcclxuICAgICAgICAgICAgICAgIGVsZW1lbnROYW1lOiAnZGlyZWN0aW9uVHlwZScsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogWydob3Jpem9udGFsJywgJ3ZlcnRpY2FsJ10sXHJcbiAgICAgICAgICAgICAgICBuYW1lT2ZWYXJpYWJsZTogJ2RpcmVjdGlvblR5cGUnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5udW1lcmFsVmFsdWVzID0ge1xyXG4gICAgICAgICAgICBzdGVwOiB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1N0ZXAnLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICfQqNCw0LMg0L/QvtC70LfRg9C90LrQsCcsXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50TmFtZTogJ3N0ZXAnLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogJ251bWJlcicsXHJcbiAgICAgICAgICAgICAgICBuYW1lT2ZWYXJpYWJsZTogJ3N0ZXAnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBsb3dlclNjYWxlQm91bmQ6IHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnTWluX3NsaWRlcicsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ9Cc0LjQvdC40LzQsNC70YzQvdC+0LUg0LfQvdCw0YfQtdC90LjQtSDRiNC60LDQu9GLINGB0LvQsNC50LTQtdGA0LAnLFxyXG4gICAgICAgICAgICAgICAgZWxlbWVudE5hbWU6ICdsb3dlclNjYWxlQm91bmQnLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogJ251bWJlcicsXHJcbiAgICAgICAgICAgICAgICBuYW1lT2ZWYXJpYWJsZTogJ2xvd2VyU2NhbGVCb3VuZCcsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHVwcGVyU2NhbGVCb3VuZDoge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdNYXhfc2xpZGVyJyxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAn0JzQsNC60YHQuNC80LDQu9GM0L3QvtC1INC30L3QsNGH0LXQvdC40LUg0YjQutCw0LvRiyDRgdC70LDQudC00LXRgNCwJyxcclxuICAgICAgICAgICAgICAgIGVsZW1lbnROYW1lOiAndXBwZXJTY2FsZUJvdW5kJyxcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdudW1iZXInLFxyXG4gICAgICAgICAgICAgICAgbmFtZU9mVmFyaWFibGU6ICd1cHBlclNjYWxlQm91bmQnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBsb3dlclNsaWRlclZhbHVlOiB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ01pbl9zbGlkZXInLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICfQndCw0YfQsNC70YzQvdC+0LUg0LfQvdCw0YfQtdC90LjQtSDRiNC60LDQu9GLINGB0LvQsNC50LTQtdGA0LAgLSDQtNC70Y8g0L/QtdGA0LLQvtCz0L4g0LjQu9C4INC+0LTQuNC90L7Rh9C90L7Qs9C+INC/0L7Qu9C30YPQvdC60LAnLFxyXG4gICAgICAgICAgICAgICAgZWxlbWVudE5hbWU6ICdsb3dlclNsaWRlclZhbHVlJyxcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdudW1iZXInLFxyXG4gICAgICAgICAgICAgICAgbmFtZU9mVmFyaWFibGU6ICdsb3dlclNsaWRlclZhbHVlJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdXBwZXJTbGlkZXJWYWx1ZToge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdNYXhfc2xpZGVyJyxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAn0J3QsNGH0LDQu9GM0L3QvtC1INC30L3QsNGH0LXQvdC40LUg0YjQutCw0LvRiyDRgdC70LDQudC00LXRgNCwIC0g0LTQu9GPINCy0YLQvtGA0L7Qs9C+INC/0L7Qu9C30YPQvdC60LAnLFxyXG4gICAgICAgICAgICAgICAgZWxlbWVudE5hbWU6ICd1cHBlclNsaWRlclZhbHVlJyxcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdudW1iZXInLFxyXG4gICAgICAgICAgICAgICAgbmFtZU9mVmFyaWFibGU6ICd1cHBlclNsaWRlclZhbHVlJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnRJZDogJ2RvY19wYW5lbCcsXHJcbiAgICAgICAgICAgIHNpZ246ICfigr0nLFxyXG4gICAgICAgICAgICBsb3dlclNjYWxlQm91bmQ6IDAsXHJcbiAgICAgICAgICAgIHVwcGVyU2NhbGVCb3VuZDogMTAwMCxcclxuICAgICAgICAgICAgbG93ZXJTbGlkZXJWYWx1ZTogMjAwLFxyXG4gICAgICAgICAgICB1cHBlclNsaWRlclZhbHVlOiA4MDAsXHJcbiAgICAgICAgICAgIHNsaWRlclR5cGU6ICdkb3VibGUnLFxyXG4gICAgICAgICAgICBkaXJlY3Rpb25UeXBlOiAnaG9yaXpvbnRhbCcsXHJcbiAgICAgICAgICAgIHN0ZXA6IDUsXHJcbiAgICAgICAgICAgIGlkRm9yQ29udHJvbFBhbmVsOiAnZG9jX3BhbmVsJyxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuYmluZENvbnRyb2xsZXIgPSAoY29udHJvbGxlcikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRyb2xsZXIgPSBjb250cm9sbGVyO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5zZXRTZXR0aW5nc0Zyb21Db250cm9sbGVyID0gKHNldEZyb21Db250cm9sbGVyKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MgPSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50SWQ6IHNldEZyb21Db250cm9sbGVyLmVsZW1lbnRJZCxcclxuICAgICAgICAgICAgICAgIHNpZ246IHNldEZyb21Db250cm9sbGVyLnNpZ24sXHJcbiAgICAgICAgICAgICAgICBsb3dlclNjYWxlQm91bmQ6IHNldEZyb21Db250cm9sbGVyLmxvd2VyU2NhbGVCb3VuZCxcclxuICAgICAgICAgICAgICAgIHVwcGVyU2NhbGVCb3VuZDogc2V0RnJvbUNvbnRyb2xsZXIudXBwZXJTY2FsZUJvdW5kLFxyXG4gICAgICAgICAgICAgICAgbG93ZXJTbGlkZXJWYWx1ZTogc2V0RnJvbUNvbnRyb2xsZXIubG93ZXJTbGlkZXJWYWx1ZSxcclxuICAgICAgICAgICAgICAgIHVwcGVyU2xpZGVyVmFsdWU6IHNldEZyb21Db250cm9sbGVyLnVwcGVyU2xpZGVyVmFsdWUsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXJUeXBlOiBzZXRGcm9tQ29udHJvbGxlci5zbGlkZXJUeXBlLFxyXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uVHlwZTogc2V0RnJvbUNvbnRyb2xsZXIuZGlyZWN0aW9uVHlwZSxcclxuICAgICAgICAgICAgICAgIHN0ZXA6IHNldEZyb21Db250cm9sbGVyLnN0ZXAsXHJcbiAgICAgICAgICAgICAgICBpZEZvckNvbnRyb2xQYW5lbDogc2V0RnJvbUNvbnRyb2xsZXIuaWRGb3JDb250cm9sUGFuZWwsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmJpbmRNb2RlbCA9IChtb2RlbCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm1vZGVsID0gbW9kZWw7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmdldENvbnRyb2xQYW5lbCA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY29udHJvbFBhbmVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5zZXR0aW5ncy5pZEZvckNvbnRyb2xQYW5lbCk7XHJcbiAgICAgICAgICAgIHJldHVybiBjb250cm9sUGFuZWw7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnNldElkRm9yU2VsZWN0ID0gKHNlbGVjdCwgb2JqKSA9PiB7XHJcbiAgICAgICAgICAgIHNlbGVjdC5pZCA9IG9iai5lbGVtZW50TmFtZTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuYXBwZW5kQ2hpbGQgPSAocGFyZW50LCBjaGlsZCkgPT4ge1xyXG4gICAgICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoY2hpbGQpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5jcmVhdGVUaXRsZSA9IChvYmopID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBvYmouZGVzY3JpcHRpb247XHJcbiAgICAgICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBjb25zdCB0ZXh0Tm9kZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGl0bGUpO1xyXG4gICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQodGV4dE5vZGVUaXRsZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBkaXY7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnJldHVybktleXMgPSAob2JqKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFyciA9IE9iamVjdC5rZXlzKG9iaik7XHJcbiAgICAgICAgICAgIHJldHVybiBhcnI7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmNyZWF0ZUlucHV0ID0gKHNlbGVjdE9yRGl2LCB2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgICAgIGlucHV0LnR5cGUgPSAnbnVtYmVyJztcclxuICAgICAgICAgICAgaW5wdXQudmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgdGhpcy5hcHBlbmRDaGlsZChzZWxlY3RPckRpdiwgaW5wdXQpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5jcmVhdGVDaGFuZ2FibGVPcHRpb25zID0gKGFyciwgcGFyZW50RWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICBhcnIuZm9yRWFjaCgoY2hhbmdhYmxlVmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgICAgICAgICAgICAgb3B0aW9uLnZhbHVlID0gY2hhbmdhYmxlVmFsdWU7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY2hhbmdhYmxlVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcHBlbmRDaGlsZChvcHRpb24sIHRleHQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcHBlbmRDaGlsZChwYXJlbnRFbGVtZW50LCBvcHRpb24pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuY3JlYXRlTGlzdGVuZXJPck9yID0gKGVsZW1lbnRGb3JMaXN0ZW5lciwga2V5T2ZTZXR0aW5nKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNoYW5nZUxpc3RlbmVyID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ9GA0LDQsdC+0YLQsNC10YIhJyk7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgZWxlbWVudEZvckxpc3RlbmVyLnZhbHVlID09PSAke2VsZW1lbnRGb3JMaXN0ZW5lci52YWx1ZX1gKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0dGluZ3Nba2V5T2ZTZXR0aW5nXSA9IGVsZW1lbnRGb3JMaXN0ZW5lci52YWx1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2xpZGVyUmVmcmVzaCgpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBlbGVtZW50Rm9yTGlzdGVuZXIuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgY2hhbmdlTGlzdGVuZXIpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5jcmVhdGVMaXN0ZW5lck51bWVyYWwgPSAoZWxlbWVudEZvckxpc3RlbmVyLCBrZXlPZlNldHRpbmcpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaW5wdXRMaXN0ZW5lciA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfRgNCw0LHQvtGC0LDQtdGCIScpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZWxlbWVudEZvckxpc3RlbmVyLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbnB1dCcpWzBdLnZhbHVlQXNOdW1iZXIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXR0aW5nc1trZXlPZlNldHRpbmddID0gTnVtYmVyKGVsZW1lbnRGb3JMaXN0ZW5lci5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW5wdXQnKVswXS52YWx1ZUFzTnVtYmVyKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGtleU9mU2V0dGluZyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnNldHRpbmdzKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2xpZGVyUmVmcmVzaCgpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBlbGVtZW50Rm9yTGlzdGVuZXIuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBpbnB1dExpc3RlbmVyKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuY3JlYXRlUGFuZWwgPSAob2JqZWN0Rm9yQ29uc3RydWN0aW9uUGFuZWwsIHR5cGUsIGNvbnRyb2xQYW5lbCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBrZXlzID0gdGhpcy5yZXR1cm5LZXlzKG9iamVjdEZvckNvbnN0cnVjdGlvblBhbmVsKTtcclxuICAgICAgICAgICAga2V5cy5mb3JFYWNoKChrZXkpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRPYmogPSBvYmplY3RGb3JDb25zdHJ1Y3Rpb25QYW5lbFtrZXldO1xyXG4gICAgICAgICAgICAgICAgbGV0IHNlbGVjdE9yRGl2O1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdudW1lcmFsJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdE9yRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gJ3NlbGVjdCcpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RPckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRJZEZvclNlbGVjdChzZWxlY3RPckRpdiwgY3VycmVudE9iaik7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjcmVhdGVUaXRsZSA9IHRoaXMuY3JlYXRlVGl0bGUoY3VycmVudE9iaik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFwcGVuZENoaWxkKHNlbGVjdE9yRGl2LCBjcmVhdGVUaXRsZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gJ251bWVyYWwnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVJbnB1dChzZWxlY3RPckRpdiwgdGhpcy5zZXR0aW5nc1tjdXJyZW50T2JqLm5hbWVPZlZhcmlhYmxlXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gJ3NlbGVjdCcpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUNoYW5nYWJsZU9wdGlvbnMoY3VycmVudE9iai52YWx1ZSwgc2VsZWN0T3JEaXYpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5hcHBlbmRDaGlsZChjb250cm9sUGFuZWwsIHNlbGVjdE9yRGl2KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGtleXMuZm9yRWFjaCgoa2V5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50T2JqID0gb2JqZWN0Rm9yQ29uc3RydWN0aW9uUGFuZWxba2V5XTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGtleU9mU2V0dGluZyA9IGN1cnJlbnRPYmoubmFtZU9mVmFyaWFibGU7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhga2V5T2ZTZXR0aW5nID09PSAke2tleU9mU2V0dGluZ31gKTtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAnbnVtZXJhbCcpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBldmVudEVsZW1lbnQgPSBjb250cm9sUGFuZWwucXVlcnlTZWxlY3RvcihgIyR7Y3VycmVudE9iai5lbGVtZW50TmFtZX1gKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUxpc3RlbmVyTnVtZXJhbChldmVudEVsZW1lbnQsIGtleU9mU2V0dGluZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gJ3NlbGVjdCcpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnMTIzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZXZlbnRFbGVtZW50ID0gY29udHJvbFBhbmVsLnF1ZXJ5U2VsZWN0b3IoYCMke2N1cnJlbnRPYmouZWxlbWVudE5hbWV9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVMaXN0ZW5lck9yT3IoZXZlbnRFbGVtZW50LCBrZXlPZlNldHRpbmcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuc2xpZGVyUmVmcmVzaCA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgb2JqRm9yQ29udHJvbGxlciA9IHtcclxuICAgICAgICAgICAgICAgIHNsaWRlclR5cGU6IHRoaXMuc2V0dGluZ3Muc2xpZGVyVHlwZSxcclxuICAgICAgICAgICAgICAgIGRpcmVjdGlvblR5cGU6IHRoaXMuc2V0dGluZ3MuZGlyZWN0aW9uVHlwZSxcclxuICAgICAgICAgICAgICAgIHN0ZXA6IHRoaXMuc2V0dGluZ3Muc3RlcCxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdGhpcy5jb250cm9sbGVyLnNldENvbnRyb2xsZXJGcm9tQ29udHJvbFBhbmVsKG9iakZvckNvbnRyb2xsZXIpO1xyXG4gICAgICAgICAgICBjb25zdCBvYmpGb3JNb2RlbCA9IHtcclxuICAgICAgICAgICAgICAgIHNpZ246IHRoaXMuc2V0dGluZ3Muc2lnbixcclxuICAgICAgICAgICAgICAgIGxvd2VyU2NhbGVCb3VuZDogdGhpcy5zZXR0aW5ncy5sb3dlclNjYWxlQm91bmQsXHJcbiAgICAgICAgICAgICAgICB1cHBlclNjYWxlQm91bmQ6IHRoaXMuc2V0dGluZ3MudXBwZXJTY2FsZUJvdW5kLFxyXG4gICAgICAgICAgICAgICAgbG93ZXJTbGlkZXJWYWx1ZTogdGhpcy5zZXR0aW5ncy5sb3dlclNsaWRlclZhbHVlLFxyXG4gICAgICAgICAgICAgICAgdXBwZXJTbGlkZXJWYWx1ZTogdGhpcy5zZXR0aW5ncy51cHBlclNsaWRlclZhbHVlLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB0aGlzLm1vZGVsLnNldEluaXRpYWxNb2RlbE9wdGlvbnMob2JqRm9yTW9kZWwpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRyb2xsZXIuY3JlYXRlU2xpZGVyKCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmJ1aWxkUGFuZWwgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnRyb2xQYW5lbCA9IHRoaXMuZ2V0Q29udHJvbFBhbmVsKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlUGFuZWwodGhpcy5vclZhbHVlcywgJ3NlbGVjdCcsIGNvbnRyb2xQYW5lbCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlUGFuZWwodGhpcy5udW1lcmFsVmFsdWVzLCAnbnVtZXJhbCcsIGNvbnRyb2xQYW5lbCk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc2V0dGluZ3MpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IHsgQ29udHJvbFBhbmVsIH07XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUNvbnRyb2xQYW5lbC5qcy5tYXAiLCJpbXBvcnQgeyBNb2RlbCB9IGZyb20gJy4vbW9kZWwnO1xyXG5pbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnLi9jb250cm9sbGVyJztcclxuaW1wb3J0IHsgVmlldyB9IGZyb20gJy4vcmVmYWN0b3JpbmdWaWV3JztcclxuaW1wb3J0IHsgQ29udHJvbFBhbmVsIH0gZnJvbSAnLi9Db250cm9sUGFuZWwnO1xyXG5mdW5jdGlvbiBJU1NsaWRlcihwYXJhbSkge1xyXG4gICAgY29uc3Qgc2V0dGluZ3MgPSB7XHJcbiAgICAgICAgaWRGb3JDb250cm9sUGFuZWw6IHBhcmFtLmlkRm9yQ29udHJvbFBhbmVsIHx8ICdkb2NfcGFuZWwnLFxyXG4gICAgICAgIGVsZW1lbnRJZDogcGFyYW0uZWxlbWVudElkIHx8ICdpc3MnLFxyXG4gICAgICAgIHNpZ246IHBhcmFtLnNpZ24gfHwgJ+KCvScsXHJcbiAgICAgICAgbG93ZXJTY2FsZUJvdW5kOiBwYXJhbS5sb3dlclNjYWxlQm91bmQgfHwgMCxcclxuICAgICAgICB1cHBlclNjYWxlQm91bmQ6IHBhcmFtLnVwcGVyU2NhbGVCb3VuZCB8fCAxMDAwLFxyXG4gICAgICAgIGxvd2VyU2xpZGVyVmFsdWU6IHBhcmFtLmxvd2VyU2xpZGVyVmFsdWUgfHwgMjAwLFxyXG4gICAgICAgIHVwcGVyU2xpZGVyVmFsdWU6IHBhcmFtLnVwcGVyU2xpZGVyVmFsdWUgfHwgODAwLFxyXG4gICAgICAgIHNsaWRlclR5cGU6IHBhcmFtLnNsaWRlclR5cGUgfHwgJ2RvdWJsZScsXHJcbiAgICAgICAgZGlyZWN0aW9uVHlwZTogcGFyYW0uZGlyZWN0aW9uVHlwZSB8fCAnaG9yaXpvbnRhbCcsXHJcbiAgICAgICAgc3RlcDogcGFyYW0uc3RlcCB8fCA1MCxcclxuICAgIH07XHJcbiAgICAvLyDQn9Ce0KHQotCg0J7QldCd0JjQlSDQodCb0JDQmdCU0JXQoNCQINCf0KDQmCDQn9CV0KDQktCe0Jwg0JfQkNCf0KPQodCa0JVcclxuICAgIGNvbnN0IG1vZGVsID0gbmV3IE1vZGVsKHNldHRpbmdzKTtcclxuICAgIGNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgQ29udHJvbGxlcihzZXR0aW5ncyk7XHJcbiAgICBjb25zdCB2aWV3ID0gbmV3IFZpZXcoKTtcclxuICAgIGNvbnN0IGNvbnRyb2xQYW5lbCA9IG5ldyBDb250cm9sUGFuZWwoKTtcclxuICAgIGNvbnRyb2xsZXIuYmluZE1vZGVsKG1vZGVsKTtcclxuICAgIGNvbnRyb2xsZXIuYmluZFZpZXcodmlldyk7XHJcbiAgICBjb250cm9sbGVyLmJpbmRDb250cm9sUGFuZWwoY29udHJvbFBhbmVsKTtcclxuICAgIHZpZXcuYmluZENvbnRyb2xsZXIoY29udHJvbGxlcik7XHJcbiAgICBjb250cm9sUGFuZWwuYmluZENvbnRyb2xsZXIoY29udHJvbGxlcik7XHJcbiAgICBjb250cm9sUGFuZWwuYmluZE1vZGVsKG1vZGVsKTtcclxuICAgIGNvbnRyb2xsZXIuY3JlYXRlU2xpZGVyKCk7XHJcbiAgICBjb250cm9sUGFuZWwuYnVpbGRQYW5lbCgpO1xyXG59XHJcbmV4cG9ydCB7IElTU2xpZGVyIH07XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUlTU2xpZGVyLmpzLm1hcCIsImNsYXNzIENvbnRyb2xsZXIge1xyXG4gICAgY29uc3RydWN0b3Ioc2V0dGluZ3MpIHtcclxuICAgICAgICB0aGlzLnNldENvbnRyb2xsZXJGcm9tQ29udHJvbFBhbmVsID0gKG9iaikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnN0ZXAgPSBvYmouc3RlcDtcclxuICAgICAgICAgICAgdGhpcy5zbGlkZXJUeXBlID0gb2JqLnNsaWRlclR5cGU7XHJcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uVHlwZSA9IG9iai5kaXJlY3Rpb25UeXBlO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5lbGVtZW50SWQgPSBzZXR0aW5ncy5lbGVtZW50SWQ7XHJcbiAgICAgICAgdGhpcy5zbGlkZXJUeXBlID0gc2V0dGluZ3Muc2xpZGVyVHlwZSB8fCAnc2luZ2xlJztcclxuICAgICAgICB0aGlzLmRpcmVjdGlvblR5cGUgPSBzZXR0aW5ncy5kaXJlY3Rpb25UeXBlIHx8ICdob3Jpem9udGFsJztcclxuICAgICAgICB0aGlzLnN0ZXAgPSBzZXR0aW5ncy5zdGVwIHx8IDI7XHJcbiAgICAgICAgdGhpcy5pZEZvckNvbnRyb2xQYW5lbCA9IHNldHRpbmdzLmlkRm9yQ29udHJvbFBhbmVsIHx8ICcnO1xyXG4gICAgfVxyXG4gICAgY3JlYXRlU2xpZGVyKCkge1xyXG4gICAgICAgIHRoaXMuc2V0Q29udHJvbGxlcigpO1xyXG4gICAgICAgIHRoaXMuc2V0QW5kUnVuVmlldygpO1xyXG4gICAgfVxyXG4gICAgc2V0Q29udHJvbGxlcigpIHtcclxuICAgICAgICBjb25zdCBvYmpGcm9tTW9kZWwgPSB0aGlzLmdldE1vZGVsKCk7XHJcbiAgICAgICAgdGhpcy5sb3dlclNsaWRlclZhbHVlID0gb2JqRnJvbU1vZGVsLmxvd2VyU2xpZGVyVmFsdWU7XHJcbiAgICAgICAgdGhpcy51cHBlclNsaWRlclZhbHVlID0gb2JqRnJvbU1vZGVsLnVwcGVyU2xpZGVyVmFsdWU7XHJcbiAgICAgICAgdGhpcy5sb3dlclNjYWxlQm91bmQgPSBvYmpGcm9tTW9kZWwubG93ZXJTY2FsZUJvdW5kO1xyXG4gICAgICAgIHRoaXMudXBwZXJTY2FsZUJvdW5kID0gb2JqRnJvbU1vZGVsLnVwcGVyU2NhbGVCb3VuZDtcclxuICAgICAgICB0aGlzLnNpZ24gPSBvYmpGcm9tTW9kZWwuc2lnbjtcclxuICAgIH1cclxuICAgIGdldE1vZGVsKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1vZGVsLmdldE1vZGVsKCk7XHJcbiAgICB9XHJcbiAgICBzZXRBbmRSdW5WaWV3KCkge1xyXG4gICAgICAgIGNvbnN0IG9iaiA9IHtcclxuICAgICAgICAgICAgZWxlbWVudElkOiB0aGlzLmVsZW1lbnRJZCxcclxuICAgICAgICAgICAgc2lnbjogdGhpcy5zaWduLFxyXG4gICAgICAgICAgICBsb3dlclNjYWxlQm91bmQ6IHRoaXMubG93ZXJTY2FsZUJvdW5kLFxyXG4gICAgICAgICAgICB1cHBlclNjYWxlQm91bmQ6IHRoaXMudXBwZXJTY2FsZUJvdW5kLFxyXG4gICAgICAgICAgICBsb3dlclNsaWRlclZhbHVlOiB0aGlzLmxvd2VyU2xpZGVyVmFsdWUsXHJcbiAgICAgICAgICAgIHVwcGVyU2xpZGVyVmFsdWU6IHRoaXMudXBwZXJTbGlkZXJWYWx1ZSxcclxuICAgICAgICAgICAgc2xpZGVyVHlwZTogdGhpcy5zbGlkZXJUeXBlLFxyXG4gICAgICAgICAgICBkaXJlY3Rpb25UeXBlOiB0aGlzLmRpcmVjdGlvblR5cGUsXHJcbiAgICAgICAgICAgIHN0ZXA6IHRoaXMuc3RlcCxcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdzZXRBbmRSdW5WaWV3Jyk7XHJcbiAgICAgICAgY29uc29sZS5sb2cob2JqKTtcclxuICAgICAgICB0aGlzLnZpZXcuc2V0U3RhcnRpbmdDb25kaXRpb25zKG9iaik7XHJcbiAgICAgICAgdGhpcy52aWV3LmluaXQoKTtcclxuICAgIH1cclxuICAgIGJpbmRNb2RlbChtb2RlbCkge1xyXG4gICAgICAgIHRoaXMubW9kZWwgPSBtb2RlbDtcclxuICAgIH1cclxuICAgIHNldE1vZGVsKCkge1xyXG4gICAgICAgIHRoaXMubW9kZWwuc2V0TW9kZWwoe1xyXG4gICAgICAgICAgICBsb3dlclNsaWRlclZhbHVlOiB0aGlzLmxvd2VyU2xpZGVyVmFsdWUsXHJcbiAgICAgICAgICAgIHVwcGVyU2xpZGVyVmFsdWU6IHRoaXMudXBwZXJTbGlkZXJWYWx1ZSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGJpbmRWaWV3KHZpZXcpIHtcclxuICAgICAgICB0aGlzLnZpZXcgPSB2aWV3O1xyXG4gICAgfVxyXG4gICAgZ2V0VmlldyhvYmopIHtcclxuICAgICAgICBpZiAodGhpcy5zbGlkZXJUeXBlID09PSAnZG91YmxlJykge1xyXG4gICAgICAgICAgICB0aGlzLmxvd2VyU2xpZGVyVmFsdWUgPSBvYmoubG93ZXJTbGlkZXJWYWx1ZTtcclxuICAgICAgICAgICAgdGhpcy51cHBlclNsaWRlclZhbHVlID0gb2JqLnVwcGVyU2xpZGVyVmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnNsaWRlclR5cGUgPT09ICdzaW5nbGUnKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG93ZXJTbGlkZXJWYWx1ZSA9IG9iai5sb3dlclNsaWRlclZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldE1vZGVsKCk7XHJcbiAgICB9XHJcbiAgICBnZXRDb250cm9sbGVyKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGVsZW1lbnRJZDogdGhpcy5lbGVtZW50SWQsXHJcbiAgICAgICAgICAgIHNpZ246IHRoaXMuc2lnbixcclxuICAgICAgICAgICAgbG93ZXJTY2FsZUJvdW5kOiB0aGlzLmxvd2VyU2NhbGVCb3VuZCxcclxuICAgICAgICAgICAgdXBwZXJTY2FsZUJvdW5kOiB0aGlzLnVwcGVyU2NhbGVCb3VuZCxcclxuICAgICAgICAgICAgbG93ZXJTbGlkZXJWYWx1ZTogdGhpcy5sb3dlclNsaWRlclZhbHVlLFxyXG4gICAgICAgICAgICB1cHBlclNsaWRlclZhbHVlOiB0aGlzLnVwcGVyU2xpZGVyVmFsdWUsXHJcbiAgICAgICAgICAgIHNsaWRlclR5cGU6IHRoaXMuc2xpZGVyVHlwZSxcclxuICAgICAgICAgICAgc3RlcDogdGhpcy5zdGVwLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBiaW5kQ29udHJvbFBhbmVsKGNudHJsUG5sKSB7XHJcbiAgICAgICAgdGhpcy5jb250cm9sUGFuZWwgPSBjbnRybFBubDtcclxuICAgIH1cclxufVxyXG5leHBvcnQgeyBDb250cm9sbGVyIH07XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbnRyb2xsZXIuanMubWFwIiwiY2xhc3MgTW9kZWwge1xyXG4gICAgY29uc3RydWN0b3IocGFyYW0pIHtcclxuICAgICAgICB0aGlzLnNldEluaXRpYWxNb2RlbE9wdGlvbnMgPSAocGFyYW0pID0+IHtcclxuICAgICAgICAgICAgdGhpcy5sb3dlclNjYWxlQm91bmQgPSBwYXJhbS5sb3dlclNjYWxlQm91bmQ7XHJcbiAgICAgICAgICAgIHRoaXMudXBwZXJTY2FsZUJvdW5kID0gcGFyYW0udXBwZXJTY2FsZUJvdW5kO1xyXG4gICAgICAgICAgICB0aGlzLmxvd2VyU2xpZGVyVmFsdWUgPSBwYXJhbS5sb3dlclNsaWRlclZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLnVwcGVyU2xpZGVyVmFsdWUgPSBwYXJhbS51cHBlclNsaWRlclZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLnNpZ24gPSBwYXJhbS5zaWduO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5sb3dlclNjYWxlQm91bmQgPSBwYXJhbS5sb3dlclNjYWxlQm91bmQgfHwgMDtcclxuICAgICAgICB0aGlzLnVwcGVyU2NhbGVCb3VuZCA9IHBhcmFtLnVwcGVyU2NhbGVCb3VuZCB8fCAxMDAwO1xyXG4gICAgICAgIHRoaXMubG93ZXJTbGlkZXJWYWx1ZSA9IHBhcmFtLmxvd2VyU2xpZGVyVmFsdWUgfHwgMjAwO1xyXG4gICAgICAgIHRoaXMudXBwZXJTbGlkZXJWYWx1ZSA9IHBhcmFtLnVwcGVyU2xpZGVyVmFsdWUgfHwgODAwO1xyXG4gICAgICAgIHRoaXMuc2lnbiA9IHBhcmFtLnNpZ24gfHwgJz8nO1xyXG4gICAgfVxyXG4gICAgc2V0TW9kZWwob2JqKSB7XHJcbiAgICAgICAgdGhpcy5sb3dlclNsaWRlclZhbHVlID0gb2JqLmxvd2VyU2xpZGVyVmFsdWU7XHJcbiAgICAgICAgdGhpcy51cHBlclNsaWRlclZhbHVlID0gb2JqLnVwcGVyU2xpZGVyVmFsdWU7XHJcbiAgICB9XHJcbiAgICBnZXRNb2RlbCgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBsb3dlclNjYWxlQm91bmQ6IHRoaXMubG93ZXJTY2FsZUJvdW5kLFxyXG4gICAgICAgICAgICB1cHBlclNjYWxlQm91bmQ6IHRoaXMudXBwZXJTY2FsZUJvdW5kLFxyXG4gICAgICAgICAgICBsb3dlclNsaWRlclZhbHVlOiB0aGlzLmxvd2VyU2xpZGVyVmFsdWUsXHJcbiAgICAgICAgICAgIHVwcGVyU2xpZGVyVmFsdWU6IHRoaXMudXBwZXJTbGlkZXJWYWx1ZSxcclxuICAgICAgICAgICAgc2lnbjogdGhpcy5zaWduLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IHsgTW9kZWwgfTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bW9kZWwuanMubWFwIiwiaW1wb3J0ICcuLi8uLi8uLi9pc19yZWZhY3RvcmluZy5jc3MnO1xyXG4vLyBpbXBvcnQgeyBWaWV3IH0gZnJvbSAnLi9yZWZhY3RvcmluZ1ZpZXcnO1xyXG4vLyBpbXBvcnQgeyBDb250cm9sUGFuZWwgfSBmcm9tICcuL0NvbnRyb2xQYW5lbCc7XHJcbmltcG9ydCB7IElTU2xpZGVyIH0gZnJvbSAnLi9JU1NsaWRlcic7XHJcbi8vIGNvbnN0IHZpZXcgPSBuZXcgVmlldygpO1xyXG4vLyBjb25zdCBjb250cm9sUGFuZWwgPSBuZXcgQ29udHJvbFBhbmVsKCk7XHJcbi8vIGNvbnRyb2xQYW5lbC5idWlsZFBhbmVsKCk7XHJcbi8vIHZpZXcuc2V0U3RhcnRpbmdDb25kaXRpb25zKHtcclxuLy8gICBlbGVtZW50SWQ6ICcjaXNzJyxcclxuLy8gICBzaWduOiAnJCcsXHJcbi8vICAgbG93ZXJTY2FsZUJvdW5kOiAxMDAsXHJcbi8vICAgdXBwZXJTY2FsZUJvdW5kOiAxNTAwLFxyXG4vLyAgIGxvd2VyU2xpZGVyVmFsdWU6IDIwMCxcclxuLy8gICB1cHBlclNsaWRlclZhbHVlOiA4MDAsXHJcbi8vICAgc2xpZGVyVHlwZTogJ2RvdWJsZScsXHJcbi8vICAgZGlyZWN0aW9uVHlwZTogJ2hvcml6b250YWwnLFxyXG4vLyAgIHN0ZXA6IDEwLFxyXG4vLyB9KTtcclxuLy8gdmlldy5pbml0KCk7XHJcbmNvbnN0IHNldHRpbmdzRm9ySG9yaXpvbnRhbER1YmxlID0ge1xyXG4gICAgaWRGb3JDb250cm9sUGFuZWw6ICdkb2NfcGFuZWwnLFxyXG4gICAgZWxlbWVudElkOiAnI2lzcycsXHJcbiAgICBzaWduOiAnJCcsXHJcbiAgICBsb3dlclNjYWxlQm91bmQ6IDEwMCxcclxuICAgIHVwcGVyU2NhbGVCb3VuZDogMTUwMCxcclxuICAgIGxvd2VyU2xpZGVyVmFsdWU6IDIwMCxcclxuICAgIHVwcGVyU2xpZGVyVmFsdWU6IDgwMCxcclxuICAgIHNsaWRlclR5cGU6ICdkb3VibGUnLFxyXG4gICAgZGlyZWN0aW9uVHlwZTogJ2hvcml6b250YWwnLFxyXG4gICAgc3RlcDogMTAsXHJcbn07XHJcbklTU2xpZGVyKHNldHRpbmdzRm9ySG9yaXpvbnRhbER1YmxlKTtcclxuLy8gY29uc3Qgdmlld1NpbmdsZUhvcml6b250YWwgPSBuZXcgVmlldygpO1xyXG4vLyB2aWV3U2luZ2xlSG9yaXpvbnRhbC5zZXRTdGFydGluZ0NvbmRpdGlvbnMoe1xyXG4vLyAgIGVsZW1lbnRJZDogJyNpc3NfMicsXHJcbi8vICAgc2lnbjogJyQnLFxyXG4vLyAgIGxvd2VyU2NhbGVCb3VuZDogMTAwLFxyXG4vLyAgIHVwcGVyU2NhbGVCb3VuZDogMTUwMCxcclxuLy8gICBsb3dlclNsaWRlclZhbHVlOiAyMDAsXHJcbi8vICAgdXBwZXJTbGlkZXJWYWx1ZTogODAwLFxyXG4vLyAgIHNsaWRlclR5cGU6ICdzaW5nbGUnLFxyXG4vLyAgIGRpcmVjdGlvblR5cGU6ICdob3Jpem9udGFsJyxcclxuLy8gICBzdGVwOiAxMCxcclxuLy8gfSk7XHJcbi8vIHZpZXdTaW5nbGVIb3Jpem9udGFsLmluaXQoKTtcclxuLy8gY29uc3Qgdmlld1NpbmdsZVZlcnRpY2FsID0gbmV3IFZpZXcoKTtcclxuLy8gdmlld1NpbmdsZVZlcnRpY2FsLnNldFN0YXJ0aW5nQ29uZGl0aW9ucyh7XHJcbi8vICAgZWxlbWVudElkOiAnI2lzc18zJyxcclxuLy8gICBzaWduOiAnJCcsXHJcbi8vICAgbG93ZXJTY2FsZUJvdW5kOiAxMDAsXHJcbi8vICAgdXBwZXJTY2FsZUJvdW5kOiAxNTAwLFxyXG4vLyAgIGxvd2VyU2xpZGVyVmFsdWU6IDIwMCxcclxuLy8gICB1cHBlclNsaWRlclZhbHVlOiA4MDAsXHJcbi8vICAgc2xpZGVyVHlwZTogJ3NpbmdsZScsXHJcbi8vICAgZGlyZWN0aW9uVHlwZTogJ3ZlcnRpY2FsJyxcclxuLy8gICBzdGVwOiAxMCxcclxuLy8gfSk7XHJcbi8vIHZpZXdTaW5nbGVWZXJ0aWNhbC5pbml0KCk7XHJcbi8vIGNvbnN0IHZpZXdEb3VibGVWZXJ0aWNhbCA9IG5ldyBWaWV3KCk7XHJcbi8vIHZpZXdEb3VibGVWZXJ0aWNhbC5zZXRTdGFydGluZ0NvbmRpdGlvbnMoe1xyXG4vLyAgIGVsZW1lbnRJZDogJyNpc3NfNCcsXHJcbi8vICAgc2lnbjogJyQnLFxyXG4vLyAgIGxvd2VyU2NhbGVCb3VuZDogMTAwLFxyXG4vLyAgIHVwcGVyU2NhbGVCb3VuZDogMTUwMCxcclxuLy8gICBsb3dlclNsaWRlclZhbHVlOiAyMDAsXHJcbi8vICAgdXBwZXJTbGlkZXJWYWx1ZTogODAwLFxyXG4vLyAgIHNsaWRlclR5cGU6ICdkb3VibGUnLFxyXG4vLyAgIGRpcmVjdGlvblR5cGU6ICd2ZXJ0aWNhbCcsXHJcbi8vICAgc3RlcDogMTAsXHJcbi8vIH0pO1xyXG4vLyB2aWV3RG91YmxlVmVydGljYWwuaW5pdCgpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZWZhY3RvcmluZ0luZGV4LmpzLm1hcCIsImNsYXNzIFZpZXcge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5iaW5kQ29udHJvbGxlciA9IChjb250cm9sbGVyKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udHJvbGxlciA9IGNvbnRyb2xsZXI7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnNldFN0YXJ0aW5nQ29uZGl0aW9ucyA9IChvYmopID0+IHtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50SWQgPSBvYmouZWxlbWVudElkIHx8ICcjaXNzJztcclxuICAgICAgICAgICAgdGhpcy5lbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lzcycpO1xyXG4gICAgICAgICAgICB0aGlzLnNpZ24gPSBvYmouc2lnbiB8fCAnUic7XHJcbiAgICAgICAgICAgIHRoaXMubG93ZXJTY2FsZUJvdW5kID0gTnVtYmVyKG9iai5sb3dlclNjYWxlQm91bmQpIHx8IDA7XHJcbiAgICAgICAgICAgIHRoaXMudXBwZXJTY2FsZUJvdW5kID0gTnVtYmVyKG9iai51cHBlclNjYWxlQm91bmQpIHx8IDEwMDA7XHJcbiAgICAgICAgICAgIHRoaXMubG93ZXJTbGlkZXJWYWx1ZSA9IE51bWJlcihvYmoubG93ZXJTbGlkZXJWYWx1ZSkgfHwgMjAwO1xyXG4gICAgICAgICAgICB0aGlzLnVwcGVyU2xpZGVyVmFsdWUgPSBOdW1iZXIob2JqLnVwcGVyU2xpZGVyVmFsdWUpIHx8IDgwMDtcclxuICAgICAgICAgICAgdGhpcy5zbGlkZXJUeXBlID0gb2JqLnNsaWRlclR5cGUgfHwgJ3NpbmdsZSc7XHJcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uVHlwZSA9IG9iai5kaXJlY3Rpb25UeXBlIHx8ICdob3Jpem9udGFsJztcclxuICAgICAgICAgICAgdGhpcy5zdGVwID0gb2JqLnN0ZXAgfHwgMjtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuZ2V0U3RhcnRpbmdDb25kaXRpb25zID0gKCkgPT4gKHtcclxuICAgICAgICAgICAgZWxlbWVudElkOiB0aGlzLmVsZW1lbnRJZCxcclxuICAgICAgICAgICAgc2lnbjogdGhpcy5zaWduLFxyXG4gICAgICAgICAgICBsb3dlclNjYWxlQm91bmQ6IHRoaXMubG93ZXJTY2FsZUJvdW5kLFxyXG4gICAgICAgICAgICB1cHBlclNjYWxlQm91bmQ6IHRoaXMudXBwZXJTY2FsZUJvdW5kLFxyXG4gICAgICAgICAgICBsb3dlclNsaWRlclZhbHVlOiB0aGlzLmxvd2VyU2xpZGVyVmFsdWUsXHJcbiAgICAgICAgICAgIHVwcGVyU2xpZGVyVmFsdWU6IHRoaXMudXBwZXJTbGlkZXJWYWx1ZSxcclxuICAgICAgICAgICAgc2xpZGVyVHlwZTogdGhpcy5zbGlkZXJUeXBlLFxyXG4gICAgICAgICAgICBzdGVwOiB0aGlzLnN0ZXAsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5pbml0ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZURPTSgpO1xyXG4gICAgICAgICAgICB0aGlzLndyaXRlRE9NKCk7XHJcbiAgICAgICAgICAgIHRoaXMud3JpdGVHZW9tZXRyeURPTXRvVmFyaWFibGVzKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlTGlzdGVuZXJPblNsaWRlcigpO1xyXG4gICAgICAgICAgICB0aGlzLm1vdmVzU2xpZGVyc1RvU3RhcnRQb3NpdGlvbnMoKTtcclxuICAgICAgICAgICAgdGhpcy53cml0ZU1vbmV5VG9GaWVsZHMoKTtcclxuICAgICAgICAgICAgdGhpcy5tb3ZlVG9vbHRpcCgpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5jcmVhdGVET00gPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNsaWRlclR5cGUgPT09ICdkb3VibGUnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZURvdWJsZURPTSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNsaWRlclR5cGUgPT09ICdzaW5nbGUnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZVNpbmdsZURPTSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmNyZWF0ZVNpbmdsZURPTSA9ICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5lbGVtLmlubmVySFRNTCA9ICc8ZGl2IGNsYXNzPVwiaXNzX192YWx1ZS1maWVsZFwiPidcclxuICAgICAgICAgICAgICAgICsgJzxzcGFuIGNsYXNzPVwiaXNzX3N0YXRpY0ZpZWxkXCI+PC9zcGFuPidcclxuICAgICAgICAgICAgICAgICsgJzwvZGl2PidcclxuICAgICAgICAgICAgICAgICsgJzxkaXYgY2xhc3M9IFwiaXNzLWNvbnRhaW5lclwiPidcclxuICAgICAgICAgICAgICAgICsgJzxkaXYgY2xhc3M9IFwiaXNzX19zY2FsZVwiPjwvZGl2PidcclxuICAgICAgICAgICAgICAgICsgJzxkaXYgY2xhc3M9XCJpc3NfX2NvbG9yLWJhclwiPjwvZGl2PidcclxuICAgICAgICAgICAgICAgICsgJzxkaXYgY2xhc3M9XCJpc3NfX3NpbmdsZV9mbHktdmFsdWUgaXNzX190b29sdGlwXCI+PC9kaXY+J1xyXG4gICAgICAgICAgICAgICAgKyAnPGRpdiBjbGFzcz1cImlzc19fc2luZ2xlIGlzc19fZHJhZ1wiPjwvZGl2PidcclxuICAgICAgICAgICAgICAgICsgJzwvZGl2Pic7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmNyZWF0ZURvdWJsZURPTSA9ICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5lbGVtLmlubmVySFRNTCA9ICc8ZGl2IGNsYXNzPVwiaXNzX192YWx1ZS1maWVsZFwiPidcclxuICAgICAgICAgICAgICAgICsgJzxzcGFuIGNsYXNzPVwiaXNzX3N0YXRpY0ZpZWxkXCI+PC9zcGFuPidcclxuICAgICAgICAgICAgICAgICsgJy0nXHJcbiAgICAgICAgICAgICAgICArICc8c3BhbiBjbGFzcz1cImlzc19zdGF0aWNGaWVsZFwiPjwvc3Bhbj4nXHJcbiAgICAgICAgICAgICAgICArICc8L2Rpdj4nXHJcbiAgICAgICAgICAgICAgICArICc8ZGl2IGNsYXNzPSBcImlzcy1jb250YWluZXJcIj4nXHJcbiAgICAgICAgICAgICAgICArICc8ZGl2IGNsYXNzPSBcImlzc19fc2NhbGVcIj48L2Rpdj4nXHJcbiAgICAgICAgICAgICAgICArICc8ZGl2IGNsYXNzPVwiaXNzX19kb3VibGVfZmx5LXZhbHVlLTEgaXNzX190b29sdGlwXCI+PC9kaXY+J1xyXG4gICAgICAgICAgICAgICAgKyAnPGRpdiBjbGFzcz1cImlzc19fZG91YmxlXzFfaG9yaXpvbnRhbCBpc3NfX2RyYWdcIj48L2Rpdj4nXHJcbiAgICAgICAgICAgICAgICArICc8ZGl2IGNsYXNzPVwiaXNzX19kb3VibGVfZmx5LXZhbHVlLTIgaXNzX190b29sdGlwXCI+PC9kaXY+J1xyXG4gICAgICAgICAgICAgICAgKyAnPGRpdiBjbGFzcz1cImlzc19fZG91YmxlXzJfaG9yaXpvbnRhbCBpc3NfX2RyYWdcIj48L2Rpdj4nXHJcbiAgICAgICAgICAgICAgICArICc8ZGl2IGNsYXNzPVwiaXNzX19jb2xvci1iYXJcIj48L2Rpdj4nXHJcbiAgICAgICAgICAgICAgICArICc8L2Rpdj4nO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy53cml0ZURPTSA9ICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jaGVja0VsZW1lbnRzSW5ET00oKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc2xpZGVyVHlwZSA9PT0gJ3NpbmdsZScpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMud3JpdGVTaW5nbGVET010b1ZhcmlhYmxlcygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy53cml0ZVNpbmdsZVNsaWRlckluZGVudCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuc2xpZGVyVHlwZSA9PT0gJ2RvdWJsZScpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMud3JpdGVEb3VibGVET010b1ZhcmlhYmxlcygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy53cml0ZURvdWJsZVNsaWRlckluZGVudCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmNoZWNrRWxlbWVudHNJbkRPTSA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgRE9NRWxlbWVudHMgPSB0aGlzLmVsZW0ucXVlcnlTZWxlY3RvckFsbCgnLmlzc19fZHJhZycpO1xyXG4gICAgICAgICAgICBpZiAoKERPTUVsZW1lbnRzLmxlbmd0aCA+IDApKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNsaWRlckluRE9NID0gRE9NRWxlbWVudHM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMud3JpdGVTaW5nbGVET010b1ZhcmlhYmxlcyA9ICgpID0+IHtcclxuICAgICAgICAgICAgW3RoaXMuc2NhbGVdID0gdGhpcy5yZXR1cm5FbGVtZW50c0Zyb21ET00oJy5pc3NfX3NjYWxlJywgMSk7XHJcbiAgICAgICAgICAgIFt0aGlzLnNpbmdsZVNsaWRlcl0gPSB0aGlzLnJldHVybkVsZW1lbnRzRnJvbURPTSgnLmlzc19fZHJhZycsIDEpO1xyXG4gICAgICAgICAgICBbdGhpcy5zdGF0aWNGaWVsZFNpbmdsZV0gPSB0aGlzLnJldHVybkVsZW1lbnRzRnJvbURPTSgnLmlzc19zdGF0aWNGaWVsZCcsIDEpO1xyXG4gICAgICAgICAgICBbdGhpcy5mbHlGaWVsZFNpbmdsZV0gPSB0aGlzLnJldHVybkVsZW1lbnRzRnJvbURPTSgnLmlzc19fdG9vbHRpcCcsIDEpO1xyXG4gICAgICAgICAgICBbdGhpcy5yaWJib25dID0gdGhpcy5yZXR1cm5FbGVtZW50c0Zyb21ET00oJy5pc3NfX2NvbG9yLWJhcicsIDEpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy53cml0ZURvdWJsZURPTXRvVmFyaWFibGVzID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBbdGhpcy5zY2FsZV0gPSB0aGlzLnJldHVybkVsZW1lbnRzRnJvbURPTSgnLmlzc19fc2NhbGUnLCAxKTtcclxuICAgICAgICAgICAgW3RoaXMubG93ZXJTbGlkZXIsIHRoaXMudXBwZXJTbGlkZXJdID0gdGhpcy5yZXR1cm5FbGVtZW50c0Zyb21ET00oJy5pc3NfX2RyYWcnLCAyKTtcclxuICAgICAgICAgICAgW3RoaXMuc3RhdGljRmllbGRMb3dlciwgdGhpcy5zdGF0aWNGaWVsZFVwcGVyXSA9IHRoaXMucmV0dXJuRWxlbWVudHNGcm9tRE9NKCcuaXNzX3N0YXRpY0ZpZWxkJywgMik7XHJcbiAgICAgICAgICAgIFt0aGlzLmZseUZpZWxkTG93ZXIsIHRoaXMuZmx5RmllbGRVcHBlcl0gPSB0aGlzLnJldHVybkVsZW1lbnRzRnJvbURPTSgnLmlzc19fdG9vbHRpcCcsIDIpO1xyXG4gICAgICAgICAgICBbdGhpcy5yaWJib25dID0gdGhpcy5yZXR1cm5FbGVtZW50c0Zyb21ET00oJy5pc3NfX2NvbG9yLWJhcicsIDEpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy53cml0ZVNpbmdsZVNsaWRlckluZGVudCA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZWxlbSA9IHRoaXMucmV0dXJuRWxlbWVudHNGcm9tRE9NKCcuaXNzX19kcmFnJywgMSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2luZ2xlU2xpZGVyUG9zaXRpb24gPSB0aGlzLnJldHVybkluZGVudChlbGVtWzBdKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMud3JpdGVEb3VibGVTbGlkZXJJbmRlbnQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW1zID0gdGhpcy5yZXR1cm5FbGVtZW50c0Zyb21ET00oJy5pc3NfX2RyYWcnLCAyKTtcclxuICAgICAgICAgICAgdGhpcy5sb3dlclNsaWRlclBvc2l0aW9uID0gdGhpcy5yZXR1cm5JbmRlbnQoZWxlbXNbMF0pO1xyXG4gICAgICAgICAgICB0aGlzLnVwcGVyU2xpZGVyUG9zaXRpb24gPSB0aGlzLnJldHVybkluZGVudChlbGVtc1sxXSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnJldHVybkluZGVudCA9IChlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRpcmVjdGlvblR5cGUgPT09ICdob3Jpem9udGFsJykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQub2Zmc2V0TGVmdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb25UeXBlID09PSAndmVydGljYWwnKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudC5vZmZzZXRUb3A7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMucmV0dXJuRWxlbWVudHNGcm9tRE9NID0gKGNsYXNzTmFtZSwgbGVuZ3RoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IERPTUVsZW1lbnRzID0gdGhpcy5lbGVtLnF1ZXJ5U2VsZWN0b3JBbGwoY2xhc3NOYW1lKTtcclxuICAgICAgICAgICAgaWYgKChET01FbGVtZW50cy5sZW5ndGggPT09IGxlbmd0aCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBET01FbGVtZW50cztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLndyaXRlR2VvbWV0cnlET010b1ZhcmlhYmxlcyA9ICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXREaXJlY3Rpb24oKTtcclxuICAgICAgICAgICAgdGhpcy53cml0ZUdlb21ldHJ5T2ZTbGlkZXIoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuc2V0RGlyZWN0aW9uID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb25UeXBlID09PSAnaG9yaXpvbnRhbCcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubWFpbkF4aXNTaXplID0gdGhpcy5zY2FsZS5vZmZzZXRXaWR0aDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb25UeXBlID09PSAndmVydGljYWwnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1haW5BeGlzU2l6ZSA9IHRoaXMuc2NhbGUub2Zmc2V0SGVpZ2h0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLndyaXRlR2VvbWV0cnlPZlNsaWRlciA9ICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc2xpZGVyVHlwZSA9PT0gJ3NpbmdsZScpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2xpZGVyV2lkdGggPSB0aGlzLnNpbmdsZVNsaWRlci5vZmZzZXRXaWR0aDtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2xpZGVySGVpZ2h0ID0gdGhpcy5zaW5nbGVTbGlkZXIub2Zmc2V0SGVpZ2h0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuc2xpZGVyVHlwZSA9PT0gJ2RvdWJsZScpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2xpZGVyV2lkdGggPSB0aGlzLmxvd2VyU2xpZGVyLm9mZnNldFdpZHRoO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zbGlkZXJIZWlnaHQgPSB0aGlzLmxvd2VyU2xpZGVyLm9mZnNldEhlaWdodDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmNhbGNQaXhlbFN0ZXAoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuY2FsY1BpeGVsU3RlcCA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgc3RlcEluUGl4ZWwgPSAodGhpcy5tYWluQXhpc1NpemUgLyB0aGlzLnVwcGVyU2NhbGVCb3VuZCkgKiB0aGlzLnN0ZXA7XHJcbiAgICAgICAgICAgIGlmIChzdGVwSW5QaXhlbCA8IDEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGl4ZWxTdGVwID0gMTtcclxuICAgICAgICAgICAgICAgIHRoaXMucm91bmRlZFBpeGVsU3RlcCA9IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBpeGVsU3RlcCA9IHN0ZXBJblBpeGVsO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3VuZGVkUGl4ZWxTdGVwID0gTWF0aC5yb3VuZChzdGVwSW5QaXhlbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuY3JlYXRlTGlzdGVuZXJPblNsaWRlciA9ICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc2xpZGVyVHlwZSA9PT0gJ3NpbmdsZScpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2luZ2xlU2xpZGVyLm9ubW91c2Vkb3duID0gdGhpcy5ldmVudE9uU2xpZGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuc2xpZGVyVHlwZSA9PT0gJ2RvdWJsZScpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG93ZXJTbGlkZXIub25tb3VzZWRvd24gPSB0aGlzLmV2ZW50T25TbGlkZXI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwcGVyU2xpZGVyLm9ubW91c2Vkb3duID0gdGhpcy5ldmVudE9uU2xpZGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLm1vdmVzU2xpZGVyc1RvU3RhcnRQb3NpdGlvbnMgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNsaWRlclR5cGUgPT09ICdzaW5nbGUnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFNpbmdsZVRvU3RhcnRQb3NpdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlUmliYm9uKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuc2xpZGVyVHlwZSA9PT0gJ2RvdWJsZScpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0c0RvdWJsZVRvU3RhcnRQb3N0aW9ucygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlUmliYm9uKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuc2V0U2luZ2xlVG9TdGFydFBvc2l0aW9uID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb25UeXBlID09PSAnaG9yaXpvbnRhbCcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2luZ2xlU2xpZGVyLnN0eWxlLmxlZnQgPSBgJHt0aGlzLmNhbGNNb25leVRvUG9zaXRpb24odGhpcy5sb3dlclNsaWRlclZhbHVlIC0gdGhpcy5sb3dlclNjYWxlQm91bmQpfXB4YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb25UeXBlID09PSAndmVydGljYWwnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNpbmdsZVNsaWRlci5zdHlsZS50b3AgPSBgJHt0aGlzLmNhbGNNb25leVRvUG9zaXRpb24odGhpcy51cHBlclNjYWxlQm91bmQgLSB0aGlzLmxvd2VyU2xpZGVyVmFsdWUpfXB4YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5zZXRzRG91YmxlVG9TdGFydFBvc3Rpb25zID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5sb3dlclNjYWxlQm91bmQgPD0gdGhpcy5sb3dlclNsaWRlclZhbHVlICYmIHRoaXMudXBwZXJTY2FsZUJvdW5kID49IHRoaXMudXBwZXJTbGlkZXJWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uVHlwZSA9PT0gJ2hvcml6b250YWwnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb3dlclNsaWRlci5zdHlsZS5sZWZ0ID0gYCR7dGhpcy5jYWxjTW9uZXlUb1Bvc2l0aW9uKHRoaXMubG93ZXJTbGlkZXJWYWx1ZSAtIHRoaXMubG93ZXJTY2FsZUJvdW5kKX1weGA7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cHBlclNsaWRlci5zdHlsZS5sZWZ0ID0gYCR7dGhpcy5jYWxjTW9uZXlUb1Bvc2l0aW9uKHRoaXMudXBwZXJTY2FsZUJvdW5kIC0gdGhpcy51cHBlclNsaWRlclZhbHVlKX1weGA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb25UeXBlID09PSAndmVydGljYWwnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb3dlclNsaWRlci5zdHlsZS50b3AgPSBgJHt0aGlzLmNhbGNNb25leVRvUG9zaXRpb24odGhpcy5sb3dlclNsaWRlclZhbHVlIC0gdGhpcy5sb3dlclNjYWxlQm91bmQpfXB4YDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwcGVyU2xpZGVyLnN0eWxlLnRvcCA9IGAke3RoaXMuY2FsY01vbmV5VG9Qb3NpdGlvbih0aGlzLnVwcGVyU2NhbGVCb3VuZCAtIHRoaXMudXBwZXJTbGlkZXJWYWx1ZSl9cHhgO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLndyaXRlTW9uZXlUb0ZpZWxkcyA9ICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc2xpZGVyVHlwZSA9PT0gJ3NpbmdsZScpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGljRmllbGRTaW5nbGUuaW5uZXJUZXh0ID0gYCR7dGhpcy5sb3dlclNsaWRlclZhbHVlfSR7dGhpcy5zaWdufWA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZseUZpZWxkU2luZ2xlLmlubmVyVGV4dCA9IGAke3RoaXMubG93ZXJTbGlkZXJWYWx1ZX0ke3RoaXMuc2lnbn1gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNsaWRlclR5cGUgPT09ICdkb3VibGUnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRpY0ZpZWxkTG93ZXIuaW5uZXJUZXh0ID0gYCR7dGhpcy5sb3dlclNsaWRlclZhbHVlfSR7dGhpcy5zaWdufWA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRpY0ZpZWxkVXBwZXIuaW5uZXJUZXh0ID0gYCR7dGhpcy51cHBlclNsaWRlclZhbHVlfSR7dGhpcy5zaWdufWA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZseUZpZWxkTG93ZXIuaW5uZXJUZXh0ID0gYCR7dGhpcy5sb3dlclNsaWRlclZhbHVlfSR7dGhpcy5zaWdufWA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZseUZpZWxkVXBwZXIuaW5uZXJUZXh0ID0gYCR7dGhpcy51cHBlclNsaWRlclZhbHVlfSR7dGhpcy5zaWdufWA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuZXZlbnRPblNsaWRlciA9IChfZSkgPT4ge1xyXG4gICAgICAgICAgICBfZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFJlc3RyaWN0aW9uT2ZTbGlkZXJNb3ZlbWVudChfZSk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50Lm9ubW91c2V1cCA9IHRoaXMuY2FuY2VsRXZlbnRzO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5vbm1vdXNlbW92ZSA9IHRoaXMubW92ZUV2ZW50V2l0aEhvbGRNb3VzZTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuc2V0UmVzdHJpY3Rpb25PZlNsaWRlck1vdmVtZW50ID0gKF9lKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNsaWRlclR5cGUgPT09ICdkb3VibGUnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFJlc3RyaWN0aW9uRm9yRG91YmxlU2xpZGVyKF9lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5zbGlkZXJUeXBlID09PSAnc2luZ2xlJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRSZXN0cmljdGlvbkZvclNpbmdsZVNsaWRlcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnNldFJlc3RyaWN0aW9uRm9yRG91YmxlU2xpZGVyID0gKF9lKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRpcmVjdGlvblR5cGUgPT09ICdob3Jpem9udGFsJykge1xyXG4gICAgICAgICAgICAgICAgaWYgKF9lLnRhcmdldCA9PT0gdGhpcy5sb3dlclNsaWRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0U2xpZGVyID0gdGhpcy5sb3dlclNsaWRlcjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvd2VyUmVzdHJpY3Rpb24gPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBwZXJSZXN0cmljdGlvbiA9IHRoaXMudXBwZXJTbGlkZXJQb3NpdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvd2VyQ29zdFJlc3RyaWN0aW9uID0gdGhpcy5sb3dlclNjYWxlQm91bmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cHBlckNvc3RSZXN0cmljdGlvbiA9IHRoaXMuZ2V0Q29zdEZvclNsaWRlcih0aGlzLnVwcGVyUmVzdHJpY3Rpb24pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKF9lLnRhcmdldCA9PT0gdGhpcy51cHBlclNsaWRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0U2xpZGVyID0gdGhpcy51cHBlclNsaWRlcjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvd2VyUmVzdHJpY3Rpb24gPSB0aGlzLmxvd2VyU2xpZGVyUG9zaXRpb247XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cHBlclJlc3RyaWN0aW9uID0gdGhpcy5tYWluQXhpc1NpemU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb3dlckNvc3RSZXN0cmljdGlvbiA9IHRoaXMuZ2V0Q29zdEZvclNsaWRlcih0aGlzLmxvd2VyUmVzdHJpY3Rpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBwZXJDb3N0UmVzdHJpY3Rpb24gPSB0aGlzLnVwcGVyU2NhbGVCb3VuZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb25UeXBlID09PSAndmVydGljYWwnKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoX2UudGFyZ2V0ID09PSB0aGlzLmxvd2VyU2xpZGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50YXJnZXRTbGlkZXIgPSB0aGlzLmxvd2VyU2xpZGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG93ZXJSZXN0cmljdGlvbiA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cHBlclJlc3RyaWN0aW9uID0gdGhpcy51cHBlclNsaWRlclBvc2l0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG93ZXJDb3N0UmVzdHJpY3Rpb24gPSB0aGlzLmdldENvc3RGb3JTbGlkZXIodGhpcy5sb3dlclJlc3RyaWN0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwcGVyQ29zdFJlc3RyaWN0aW9uID0gdGhpcy5nZXRDb3N0Rm9yU2xpZGVyKHRoaXMudXBwZXJSZXN0cmljdGlvbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoX2UudGFyZ2V0ID09PSB0aGlzLnVwcGVyU2xpZGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50YXJnZXRTbGlkZXIgPSB0aGlzLnVwcGVyU2xpZGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG93ZXJSZXN0cmljdGlvbiA9IHRoaXMubG93ZXJTbGlkZXJQb3NpdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwcGVyUmVzdHJpY3Rpb24gPSB0aGlzLm1haW5BeGlzU2l6ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvd2VyQ29zdFJlc3RyaWN0aW9uID0gdGhpcy5nZXRDb3N0Rm9yU2xpZGVyKHRoaXMubG93ZXJSZXN0cmljdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cHBlckNvc3RSZXN0cmljdGlvbiA9IHRoaXMuZ2V0Q29zdEZvclNsaWRlcih0aGlzLnVwcGVyUmVzdHJpY3Rpb24pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnNldFJlc3RyaWN0aW9uRm9yU2luZ2xlU2xpZGVyID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb25UeXBlID09PSAnaG9yaXpvbnRhbCcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0U2xpZGVyID0gdGhpcy5zaW5nbGVTbGlkZXI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvd2VyUmVzdHJpY3Rpb24gPSAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cHBlclJlc3RyaWN0aW9uID0gdGhpcy5tYWluQXhpc1NpemU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvd2VyQ29zdFJlc3RyaWN0aW9uID0gdGhpcy5sb3dlclNjYWxlQm91bmQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwcGVyQ29zdFJlc3RyaWN0aW9uID0gdGhpcy51cHBlclNjYWxlQm91bmQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uVHlwZSA9PT0gJ3ZlcnRpY2FsJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50YXJnZXRTbGlkZXIgPSB0aGlzLnNpbmdsZVNsaWRlcjtcclxuICAgICAgICAgICAgICAgIHRoaXMubG93ZXJSZXN0cmljdGlvbiA9IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwcGVyUmVzdHJpY3Rpb24gPSB0aGlzLm1haW5BeGlzU2l6ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubG93ZXJDb3N0UmVzdHJpY3Rpb24gPSB0aGlzLnVwcGVyU2NhbGVCb3VuZDtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBwZXJDb3N0UmVzdHJpY3Rpb24gPSB0aGlzLmxvd2VyU2NhbGVCb3VuZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5nZXRDb3N0Rm9yU2xpZGVyID0gKHNsaWRlclBvc3Rpb25JblBpeGVsKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRpcmVjdGlvblR5cGUgPT09ICdob3Jpem9udGFsJykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNsaWRlclBvc3Rpb25JblBpeGVsIDw9IDApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5sb3dlclNjYWxlQm91bmQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKE1hdGgucm91bmQoc2xpZGVyUG9zdGlvbkluUGl4ZWwgLyB0aGlzLnBpeGVsU3RlcCkgKiB0aGlzLnN0ZXApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRpcmVjdGlvblR5cGUgPT09ICd2ZXJ0aWNhbCcpIHtcclxuICAgICAgICAgICAgICAgIGlmIChzbGlkZXJQb3N0aW9uSW5QaXhlbCA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudXBwZXJTY2FsZUJvdW5kO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICgoTWF0aC5yb3VuZCgodGhpcy5tYWluQXhpc1NpemUgLSBzbGlkZXJQb3N0aW9uSW5QaXhlbCkgLyB0aGlzLnBpeGVsU3RlcCkgKiB0aGlzLnN0ZXApICsgdGhpcy5sb3dlclNjYWxlQm91bmQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLm1vdmVFdmVudFdpdGhIb2xkTW91c2UgPSAoX2UpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaW5uZXJNb3VzZVBvc2l0aW9uID0gdGhpcy5nZXRNb3VzZVBvc2l0aW9uKF9lKTtcclxuICAgICAgICAgICAgY29uc3QgbmVhcmVzdFJvdW5kZWRTdGVwID0gdGhpcy5jYWxjTmVhcmVzdFN0ZXAoaW5uZXJNb3VzZVBvc2l0aW9uKTtcclxuICAgICAgICAgICAgY29uc3QgZmluYWxQb3NpdGlvbkluUGl4ZWwgPSB0aGlzLmNhbGNGaW5hbFBvc2l0aW9uKG5lYXJlc3RSb3VuZGVkU3RlcCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGZpbmFsQ29zdCA9IHRoaXMuY2FsY0ZpbmFsQ29zdChuZWFyZXN0Um91bmRlZFN0ZXApO1xyXG4gICAgICAgICAgICB0aGlzLm1vdmVTbGlkZXIoZmluYWxQb3NpdGlvbkluUGl4ZWwpO1xyXG4gICAgICAgICAgICB0aGlzLnNob3dNb25leU9uU2NyZWVuKGZpbmFsQ29zdCk7XHJcbiAgICAgICAgICAgIHRoaXMud3JpdGVNb25leVRvVmFyaWFibGVzKGZpbmFsQ29zdCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0T3ZlcmxheSgpO1xyXG4gICAgICAgICAgICB0aGlzLm1vdmVSaWJib24oKTtcclxuICAgICAgICAgICAgdGhpcy5tb3ZlVG9vbHRpcCgpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5nZXRNb3VzZVBvc2l0aW9uID0gKF9lKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xpZW50UmVjdCA9IHRoaXMuc2NhbGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRpcmVjdGlvblR5cGUgPT09ICdob3Jpem9udGFsJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbmRlbnQgPSB0aGlzLmNsaWVudFJlY3QubGVmdDtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoX2UuY2xpZW50WCAtIHRoaXMuaW5kZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb25UeXBlID09PSAndmVydGljYWwnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluZGVudCA9IHRoaXMuY2xpZW50UmVjdC50b3A7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKF9lLmNsaWVudFkgLSB0aGlzLmluZGVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuY2FsY05lYXJlc3RTdGVwID0gKF9wb3NpdGlvbkluUGl4ZWwpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uVHlwZSA9PT0gJ2hvcml6b250YWwnKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChfcG9zaXRpb25JblBpeGVsIC8gdGhpcy5waXhlbFN0ZXApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRpcmVjdGlvblR5cGUgPT09ICd2ZXJ0aWNhbCcpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBNYXRoLnJvdW5kKCh0aGlzLm1haW5BeGlzU2l6ZSAtIF9wb3NpdGlvbkluUGl4ZWwpIC8gdGhpcy5waXhlbFN0ZXApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmNhbGNGaW5hbFBvc2l0aW9uID0gKF9uZWFyZXN0Um91bmRlZFN0ZXApID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcG9zaXRpb25JblBpeGVsID0gX25lYXJlc3RSb3VuZGVkU3RlcCAqIHRoaXMucGl4ZWxTdGVwO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb25UeXBlID09PSAnaG9yaXpvbnRhbCcpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzUGl4ZWxzSW5Cb3JkZXIocG9zaXRpb25JblBpeGVsKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwb3NpdGlvbkluUGl4ZWw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAocG9zaXRpb25JblBpeGVsIDw9IHRoaXMubG93ZXJSZXN0cmljdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmxvd2VyUmVzdHJpY3Rpb247XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAocG9zaXRpb25JblBpeGVsID49IHRoaXMudXBwZXJSZXN0cmljdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnVwcGVyUmVzdHJpY3Rpb247XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uVHlwZSA9PT0gJ3ZlcnRpY2FsJykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNQaXhlbHNJbkJvcmRlcigodGhpcy5tYWluQXhpc1NpemUgLSBwb3NpdGlvbkluUGl4ZWwpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAodGhpcy5tYWluQXhpc1NpemUgLSBwb3NpdGlvbkluUGl4ZWwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKCh0aGlzLm1haW5BeGlzU2l6ZSAtIHBvc2l0aW9uSW5QaXhlbCkgPD0gdGhpcy5sb3dlclJlc3RyaWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubG93ZXJSZXN0cmljdGlvbjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICgodGhpcy5tYWluQXhpc1NpemUgLSBwb3NpdGlvbkluUGl4ZWwpID49IHRoaXMudXBwZXJSZXN0cmljdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnVwcGVyUmVzdHJpY3Rpb247XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuY2FsY0ZpbmFsQ29zdCA9IChfbmVhcmVzdFJvdW5kZWRTdGVwKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRpcmVjdGlvblR5cGUgPT09ICdob3Jpem9udGFsJykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcG9zaXRpb25Jbk1vbmV5ID0gX25lYXJlc3RSb3VuZGVkU3RlcCAqIHRoaXMuc3RlcDtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzTW9uZXlJbkJvcmRlcihwb3NpdGlvbkluTW9uZXkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBvc2l0aW9uSW5Nb25leTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChwb3NpdGlvbkluTW9uZXkgPCB0aGlzLmxvd2VyQ29zdFJlc3RyaWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubG93ZXJDb3N0UmVzdHJpY3Rpb247XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAocG9zaXRpb25Jbk1vbmV5ID4gdGhpcy51cHBlckNvc3RSZXN0cmljdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnVwcGVyQ29zdFJlc3RyaWN0aW9uO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRpcmVjdGlvblR5cGUgPT09ICd2ZXJ0aWNhbCcpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBvc2l0aW9uSW5Nb25leSA9IChfbmVhcmVzdFJvdW5kZWRTdGVwICogdGhpcy5zdGVwKSArIHRoaXMubG93ZXJTY2FsZUJvdW5kO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNNb25leUluQm9yZGVyKHBvc2l0aW9uSW5Nb25leSkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcG9zaXRpb25Jbk1vbmV5O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHBvc2l0aW9uSW5Nb25leSA+IHRoaXMubG93ZXJDb3N0UmVzdHJpY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5sb3dlckNvc3RSZXN0cmljdGlvbjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChwb3NpdGlvbkluTW9uZXkgPCB0aGlzLnVwcGVyQ29zdFJlc3RyaWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudXBwZXJDb3N0UmVzdHJpY3Rpb247XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuaXNQaXhlbHNJbkJvcmRlciA9IChfcG9zaXRpb24pID0+ICgoX3Bvc2l0aW9uID49IHRoaXMubG93ZXJSZXN0cmljdGlvbikgJiYgKF9wb3NpdGlvbiA8PSB0aGlzLnVwcGVyUmVzdHJpY3Rpb24pKTtcclxuICAgICAgICB0aGlzLmlzTW9uZXlJbkJvcmRlciA9IChfcG9zaXRpb24pID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uVHlwZSA9PT0gJ2hvcml6b250YWwnKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKChfcG9zaXRpb24gPj0gdGhpcy5sb3dlckNvc3RSZXN0cmljdGlvbikgJiYgKF9wb3NpdGlvbiA8PSB0aGlzLnVwcGVyQ29zdFJlc3RyaWN0aW9uKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uVHlwZSA9PT0gJ3ZlcnRpY2FsJykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICgoX3Bvc2l0aW9uIDw9IHRoaXMubG93ZXJDb3N0UmVzdHJpY3Rpb24pICYmIChfcG9zaXRpb24gPj0gdGhpcy51cHBlckNvc3RSZXN0cmljdGlvbikpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnNob3dNb25leU9uU2NyZWVuID0gKGZpbmFsQ29zdCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjb3N0ID0gYCR7ZmluYWxDb3N0fSR7dGhpcy5zaWdufWA7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRhcmdldFNsaWRlciA9PT0gdGhpcy5sb3dlclNsaWRlcikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0aWNGaWVsZExvd2VyLnRleHRDb250ZW50ID0gYCR7Y29zdH1gO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mbHlGaWVsZExvd2VyLnRleHRDb250ZW50ID0gYCR7Y29zdH1gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRhcmdldFNsaWRlciA9PT0gdGhpcy51cHBlclNsaWRlcikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0aWNGaWVsZFVwcGVyLnRleHRDb250ZW50ID0gYCR7Y29zdH1gO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mbHlGaWVsZFVwcGVyLnRleHRDb250ZW50ID0gYCR7Y29zdH1gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRhcmdldFNsaWRlciA9PT0gdGhpcy5zaW5nbGVTbGlkZXIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGljRmllbGRTaW5nbGUudGV4dENvbnRlbnQgPSBgJHtjb3N0fWA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZseUZpZWxkU2luZ2xlLnRleHRDb250ZW50ID0gYCR7Y29zdH1gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLndyaXRlTW9uZXlUb1ZhcmlhYmxlcyA9IChmaW5hbENvc3QpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMudGFyZ2V0U2xpZGVyID09PSB0aGlzLmxvd2VyU2xpZGVyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvd2VyU2xpZGVyVmFsdWUgPSBmaW5hbENvc3Q7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMudGFyZ2V0U2xpZGVyID09PSB0aGlzLnVwcGVyU2xpZGVyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwcGVyU2xpZGVyVmFsdWUgPSBmaW5hbENvc3Q7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMudGFyZ2V0U2xpZGVyID09PSB0aGlzLnNpbmdsZVNsaWRlcikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb3dlclNsaWRlclZhbHVlID0gZmluYWxDb3N0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLm1vdmVSaWJib24gPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNldEhvcml6b250YWxSaWJib25WYXJpYWJsZXMgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zbGlkZXJJbkRPTS5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJpYmJvbi5zdHlsZS5sZWZ0ID0gJzBweCc7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yaWJib24uc3R5bGUud2lkdGggPSBgJHt0aGlzLnNpbmdsZVNsaWRlci5vZmZzZXRMZWZ0fXB4YDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuc2xpZGVySW5ET00ubGVuZ3RoID09PSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yaWJib24uc3R5bGUubGVmdCA9IHRoaXMubG93ZXJTbGlkZXIuc3R5bGUubGVmdDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJpYmJvbi5zdHlsZS53aWR0aCA9IGAke3RoaXMudXBwZXJTbGlkZXIub2Zmc2V0TGVmdCAtIHRoaXMubG93ZXJTbGlkZXIub2Zmc2V0TGVmdH1weGA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNvbnN0IHNldFZlcnRpY2FsUmliYm9uVmFyaWFibGVzID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2xpZGVySW5ET00ubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yaWJib24uc3R5bGUudG9wID0gYCR7dGhpcy5zaW5nbGVTbGlkZXIub2Zmc2V0VG9wfXB4YDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJpYmJvbi5zdHlsZS5oZWlnaHQgPSBgJHt0aGlzLm1haW5BeGlzU2l6ZSAtIHRoaXMuc2luZ2xlU2xpZGVyLm9mZnNldFRvcH1weGA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLnNsaWRlckluRE9NLmxlbmd0aCA9PT0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmliYm9uLnN0eWxlLnRvcCA9IHRoaXMubG93ZXJTbGlkZXIuc3R5bGUudG9wO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmliYm9uLnN0eWxlLmhlaWdodCA9IGAke3RoaXMudXBwZXJTbGlkZXIub2Zmc2V0VG9wIC0gdGhpcy5sb3dlclNsaWRlci5vZmZzZXRUb3B9cHhgO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb25UeXBlID09PSAnaG9yaXpvbnRhbCcpIHtcclxuICAgICAgICAgICAgICAgIHNldEhvcml6b250YWxSaWJib25WYXJpYWJsZXMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb25UeXBlID09PSAndmVydGljYWwnKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRWZXJ0aWNhbFJpYmJvblZhcmlhYmxlcygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLm1vdmVTbGlkZXIgPSAobnVtKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRpcmVjdGlvblR5cGUgPT09ICdob3Jpem9udGFsJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50YXJnZXRTbGlkZXIuc3R5bGUubGVmdCA9IGAke251bX1weGA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5kaXJlY3Rpb25UeXBlID09PSAndmVydGljYWwnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRhcmdldFNsaWRlci5zdHlsZS50b3AgPSBgJHtudW19cHhgO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLm1vdmVUb29sdGlwID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBtb3ZlID0gKGRpcmVjdGlvbiwgb2Zmc2V0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zbGlkZXJUeXBlID09PSAnc2luZ2xlJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWxlbS5xdWVyeVNlbGVjdG9yQWxsKCcuaXNzX190b29sdGlwJylbMF0uc3R5bGVbZGlyZWN0aW9uXSA9IGAke3RoaXMuc2luZ2xlU2xpZGVyW29mZnNldF19cHhgO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2xpZGVyVHlwZSA9PT0gJ2RvdWJsZScpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVsZW0ucXVlcnlTZWxlY3RvckFsbCgnLmlzc19fdG9vbHRpcCcpWzBdLnN0eWxlW2RpcmVjdGlvbl0gPSBgJHt0aGlzLmxvd2VyU2xpZGVyW29mZnNldF19cHhgO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWxlbS5xdWVyeVNlbGVjdG9yQWxsKCcuaXNzX190b29sdGlwJylbMV0uc3R5bGVbZGlyZWN0aW9uXSA9IGAke3RoaXMudXBwZXJTbGlkZXJbb2Zmc2V0XX1weGA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRpcmVjdGlvblR5cGUgPT09ICdob3Jpem9udGFsJykge1xyXG4gICAgICAgICAgICAgICAgbW92ZSgnbGVmdCcsICdvZmZzZXRMZWZ0Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uVHlwZSA9PT0gJ3ZlcnRpY2FsJykge1xyXG4gICAgICAgICAgICAgICAgbW92ZSgndG9wJywgJ29mZnNldFRvcCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnNldE92ZXJsYXkgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRhcmdldFNsaWRlciA9PT0gdGhpcy5sb3dlclNsaWRlcikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50YXJnZXRTbGlkZXIuc3R5bGUuekluZGV4ID0gJzEwMCc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwcGVyU2xpZGVyLnN0eWxlLnpJbmRleCA9ICcxJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLnRhcmdldFNsaWRlciA9PT0gdGhpcy51cHBlclNsaWRlcikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50YXJnZXRTbGlkZXIuc3R5bGUuekluZGV4ID0gJzEwMCc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvd2VyU2xpZGVyLnN0eWxlLnpJbmRleCA9ICcxJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5jYW5jZWxFdmVudHMgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMud3JpdGVET00oKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQub25tb3VzZXVwID0gbnVsbDtcclxuICAgICAgICAgICAgZG9jdW1lbnQub25tb3VzZW1vdmUgPSBudWxsO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBzZXRDb250cm9sbGVyKCkge1xyXG4gICAgICAgIGNvbnN0IG9iaiA9IHtcclxuICAgICAgICAgICAgbG93ZXJTbGlkZXJWYWx1ZTogdGhpcy5sb3dlclNsaWRlclZhbHVlLFxyXG4gICAgICAgICAgICB1cHBlclNsaWRlclZhbHVlOiB0aGlzLnVwcGVyU2xpZGVyVmFsdWUsXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmNvbnRyb2xsZXIuZ2V0VmlldyhvYmopO1xyXG4gICAgfVxyXG4gICAgY2FsY01vbmV5VG9Qb3NpdGlvbihtb25leSkge1xyXG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gKG1vbmV5IC8gdGhpcy5zdGVwKSAqIHRoaXMucGl4ZWxTdGVwO1xyXG4gICAgICAgIHJldHVybiBwb3NpdGlvbjtcclxuICAgIH1cclxufVxyXG5leHBvcnQgeyBWaWV3IH07XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlZmFjdG9yaW5nVmlldy5qcy5tYXAiXSwic291cmNlUm9vdCI6IiJ9