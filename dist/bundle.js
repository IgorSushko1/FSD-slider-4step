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

//# sourceMappingURL=refactoringView.js.map

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vaXNfcmVmYWN0b3JpbmcuY3NzPzcwZTkiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZmFjdG9yaW5nL2pzL0NvbnRyb2xQYW5lbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVmYWN0b3JpbmcvanMvSVNTbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZmFjdG9yaW5nL2pzL2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZmFjdG9yaW5nL2pzL21vZGVsLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWZhY3RvcmluZy9qcy9yZWZhY3RvcmluZ0luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9yZWZhY3RvcmluZy9qcy9yZWZhY3RvcmluZ1ZpZXcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBLHVDOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrREFBK0QseUJBQXlCO0FBQ3hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxhQUFhO0FBQzdEO0FBQ0Esd0VBQXdFLHVCQUF1QjtBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdFQUF3RSx1QkFBdUI7QUFDL0Y7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3dCO0FBQ3hCLHdDOzs7Ozs7Ozs7Ozs7QUNyTkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWdDO0FBQ1U7QUFDRDtBQUNLO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsNENBQUs7QUFDM0IsMkJBQTJCLHNEQUFVO0FBQ3JDLHFCQUFxQixxREFBSTtBQUN6Qiw2QkFBNkIsMERBQVk7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ29CO0FBQ3BCLG9DOzs7Ozs7Ozs7Ozs7QUNoQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNzQjtBQUN0QixzQzs7Ozs7Ozs7Ozs7O0FDcEZBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2lCO0FBQ2pCLGlDOzs7Ozs7Ozs7Ozs7QUM5QkE7QUFBQTtBQUFBO0FBQUE7QUFBcUM7QUFDckMsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsZUFBZTtBQUNZO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSw0Qzs7Ozs7Ozs7Ozs7O0FDdkVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCxnREFBZ0Q7QUFDbEc7QUFDQTtBQUNBLGlEQUFpRCxnREFBZ0Q7QUFDakc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRCxnREFBZ0Q7QUFDckcscURBQXFELGdEQUFnRDtBQUNyRztBQUNBO0FBQ0Esb0RBQW9ELGdEQUFnRDtBQUNwRyxvREFBb0QsZ0RBQWdEO0FBQ3BHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzREFBc0Qsc0JBQXNCLEVBQUUsVUFBVTtBQUN4RixtREFBbUQsc0JBQXNCLEVBQUUsVUFBVTtBQUNyRjtBQUNBO0FBQ0EscURBQXFELHNCQUFzQixFQUFFLFVBQVU7QUFDdkYscURBQXFELHNCQUFzQixFQUFFLFVBQVU7QUFDdkYsa0RBQWtELHNCQUFzQixFQUFFLFVBQVU7QUFDcEYsa0RBQWtELHNCQUFzQixFQUFFLFVBQVU7QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsZ0JBQWdCO0FBQ25FLHlFQUF5RSxzQ0FBc0M7QUFDL0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFVBQVUsRUFBRSxVQUFVO0FBQ2xEO0FBQ0EsdURBQXVELEtBQUs7QUFDNUQsb0RBQW9ELEtBQUs7QUFDekQ7QUFDQTtBQUNBLHVEQUF1RCxLQUFLO0FBQzVELG9EQUFvRCxLQUFLO0FBQ3pEO0FBQ0E7QUFDQSx3REFBd0QsS0FBSztBQUM3RCxxREFBcUQsS0FBSztBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELDZCQUE2QjtBQUM5RTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsMERBQTBEO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLDRCQUE0QjtBQUMzRSxrREFBa0QsZ0RBQWdEO0FBQ2xHO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCx3REFBd0Q7QUFDMUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCxJQUFJO0FBQ3REO0FBQ0E7QUFDQSxpREFBaUQsSUFBSTtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUZBQXlGLDBCQUEwQjtBQUNuSDtBQUNBO0FBQ0EseUZBQXlGLHlCQUF5QjtBQUNsSCx5RkFBeUYseUJBQXlCO0FBQ2xIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2dCO0FBQ2hCLDJDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3JlZmFjdG9yaW5nL2pzL3JlZmFjdG9yaW5nSW5kZXguanNcIik7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJjbGFzcyBDb250cm9sUGFuZWwge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5vclZhbHVlcyA9IHtcclxuICAgICAgICAgICAgc2lnbjoge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdTaWduJyxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAn0JLQsNC70Y7RgtCwJyxcclxuICAgICAgICAgICAgICAgIGVsZW1lbnROYW1lOiAnc2lnbicsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogWyfigr0nLCAnJCddLFxyXG4gICAgICAgICAgICAgICAgbmFtZU9mVmFyaWFibGU6ICdzaWduJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2xpZGVyVHlwZToge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdUeXBlJyxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAn0KLQuNC/INGB0LvQsNC50LTQtdGA0LAgLSDQvtC00LjQvdCw0YDQvdGL0Lkg0LjQu9C4INC00LLQvtC50L3QvtC5JyxcclxuICAgICAgICAgICAgICAgIGVsZW1lbnROYW1lOiAnc2xpZGVyVHlwZScsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogWydkb3VibGUnLCAnc2luZ2xlJ10sXHJcbiAgICAgICAgICAgICAgICBuYW1lT2ZWYXJpYWJsZTogJ3NsaWRlclR5cGUnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBkaXJlY3Rpb25UeXBlOiB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1R5cGUnLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICfQotC40L8g0YHQu9Cw0LnQtNC10YDQsCAtINCy0LXRgNGC0LjQutCw0LvRjNC90YvQuSDQuNC70Lgg0LPQvtGA0LjQt9C+0L3RgtCw0LvRjNC90YvQuScsXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50TmFtZTogJ2RpcmVjdGlvblR5cGUnLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IFsnaG9yaXpvbnRhbCcsICd2ZXJ0aWNhbCddLFxyXG4gICAgICAgICAgICAgICAgbmFtZU9mVmFyaWFibGU6ICdkaXJlY3Rpb25UeXBlJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMubnVtZXJhbFZhbHVlcyA9IHtcclxuICAgICAgICAgICAgc3RlcDoge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdTdGVwJyxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAn0KjQsNCzINC/0L7Qu9C30YPQvdC60LAnLFxyXG4gICAgICAgICAgICAgICAgZWxlbWVudE5hbWU6ICdzdGVwJyxcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdudW1iZXInLFxyXG4gICAgICAgICAgICAgICAgbmFtZU9mVmFyaWFibGU6ICdzdGVwJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbG93ZXJTY2FsZUJvdW5kOiB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ01pbl9zbGlkZXInLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICfQnNC40L3QuNC80LDQu9GM0L3QvtC1INC30L3QsNGH0LXQvdC40LUg0YjQutCw0LvRiyDRgdC70LDQudC00LXRgNCwJyxcclxuICAgICAgICAgICAgICAgIGVsZW1lbnROYW1lOiAnbG93ZXJTY2FsZUJvdW5kJyxcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdudW1iZXInLFxyXG4gICAgICAgICAgICAgICAgbmFtZU9mVmFyaWFibGU6ICdsb3dlclNjYWxlQm91bmQnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB1cHBlclNjYWxlQm91bmQ6IHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnTWF4X3NsaWRlcicsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ9Cc0LDQutGB0LjQvNCw0LvRjNC90L7QtSDQt9C90LDRh9C10L3QuNC1INGI0LrQsNC70Ysg0YHQu9Cw0LnQtNC10YDQsCcsXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50TmFtZTogJ3VwcGVyU2NhbGVCb3VuZCcsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnbnVtYmVyJyxcclxuICAgICAgICAgICAgICAgIG5hbWVPZlZhcmlhYmxlOiAndXBwZXJTY2FsZUJvdW5kJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbG93ZXJTbGlkZXJWYWx1ZToge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdNaW5fc2xpZGVyJyxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAn0J3QsNGH0LDQu9GM0L3QvtC1INC30L3QsNGH0LXQvdC40LUg0YjQutCw0LvRiyDRgdC70LDQudC00LXRgNCwIC0g0LTQu9GPINC/0LXRgNCy0L7Qs9C+INC40LvQuCDQvtC00LjQvdC+0YfQvdC+0LPQviDQv9C+0LvQt9GD0L3QutCwJyxcclxuICAgICAgICAgICAgICAgIGVsZW1lbnROYW1lOiAnbG93ZXJTbGlkZXJWYWx1ZScsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnbnVtYmVyJyxcclxuICAgICAgICAgICAgICAgIG5hbWVPZlZhcmlhYmxlOiAnbG93ZXJTbGlkZXJWYWx1ZScsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHVwcGVyU2xpZGVyVmFsdWU6IHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnTWF4X3NsaWRlcicsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ9Cd0LDRh9Cw0LvRjNC90L7QtSDQt9C90LDRh9C10L3QuNC1INGI0LrQsNC70Ysg0YHQu9Cw0LnQtNC10YDQsCAtINC00LvRjyDQstGC0L7RgNC+0LPQviDQv9C+0LvQt9GD0L3QutCwJyxcclxuICAgICAgICAgICAgICAgIGVsZW1lbnROYW1lOiAndXBwZXJTbGlkZXJWYWx1ZScsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnbnVtYmVyJyxcclxuICAgICAgICAgICAgICAgIG5hbWVPZlZhcmlhYmxlOiAndXBwZXJTbGlkZXJWYWx1ZScsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnNldHRpbmdzID0ge1xyXG4gICAgICAgICAgICBlbGVtZW50SWQ6ICdkb2NfcGFuZWwnLFxyXG4gICAgICAgICAgICBzaWduOiAn4oK9JyxcclxuICAgICAgICAgICAgbG93ZXJTY2FsZUJvdW5kOiAwLFxyXG4gICAgICAgICAgICB1cHBlclNjYWxlQm91bmQ6IDEwMDAsXHJcbiAgICAgICAgICAgIGxvd2VyU2xpZGVyVmFsdWU6IDIwMCxcclxuICAgICAgICAgICAgdXBwZXJTbGlkZXJWYWx1ZTogODAwLFxyXG4gICAgICAgICAgICBzbGlkZXJUeXBlOiAnZG91YmxlJyxcclxuICAgICAgICAgICAgZGlyZWN0aW9uVHlwZTogJ2hvcml6b250YWwnLFxyXG4gICAgICAgICAgICBzdGVwOiA1LFxyXG4gICAgICAgICAgICBpZEZvckNvbnRyb2xQYW5lbDogJ2RvY19wYW5lbCcsXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmJpbmRDb250cm9sbGVyID0gKGNvbnRyb2xsZXIpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jb250cm9sbGVyID0gY29udHJvbGxlcjtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuc2V0U2V0dGluZ3NGcm9tQ29udHJvbGxlciA9IChzZXRGcm9tQ29udHJvbGxlcikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzID0ge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudElkOiBzZXRGcm9tQ29udHJvbGxlci5lbGVtZW50SWQsXHJcbiAgICAgICAgICAgICAgICBzaWduOiBzZXRGcm9tQ29udHJvbGxlci5zaWduLFxyXG4gICAgICAgICAgICAgICAgbG93ZXJTY2FsZUJvdW5kOiBzZXRGcm9tQ29udHJvbGxlci5sb3dlclNjYWxlQm91bmQsXHJcbiAgICAgICAgICAgICAgICB1cHBlclNjYWxlQm91bmQ6IHNldEZyb21Db250cm9sbGVyLnVwcGVyU2NhbGVCb3VuZCxcclxuICAgICAgICAgICAgICAgIGxvd2VyU2xpZGVyVmFsdWU6IHNldEZyb21Db250cm9sbGVyLmxvd2VyU2xpZGVyVmFsdWUsXHJcbiAgICAgICAgICAgICAgICB1cHBlclNsaWRlclZhbHVlOiBzZXRGcm9tQ29udHJvbGxlci51cHBlclNsaWRlclZhbHVlLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVyVHlwZTogc2V0RnJvbUNvbnRyb2xsZXIuc2xpZGVyVHlwZSxcclxuICAgICAgICAgICAgICAgIGRpcmVjdGlvblR5cGU6IHNldEZyb21Db250cm9sbGVyLmRpcmVjdGlvblR5cGUsXHJcbiAgICAgICAgICAgICAgICBzdGVwOiBzZXRGcm9tQ29udHJvbGxlci5zdGVwLFxyXG4gICAgICAgICAgICAgICAgaWRGb3JDb250cm9sUGFuZWw6IHNldEZyb21Db250cm9sbGVyLmlkRm9yQ29udHJvbFBhbmVsLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5iaW5kTW9kZWwgPSAobW9kZWwpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5tb2RlbCA9IG1vZGVsO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5nZXRDb250cm9sUGFuZWwgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnRyb2xQYW5lbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuc2V0dGluZ3MuaWRGb3JDb250cm9sUGFuZWwpO1xyXG4gICAgICAgICAgICByZXR1cm4gY29udHJvbFBhbmVsO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5zZXRJZEZvclNlbGVjdCA9IChzZWxlY3QsIG9iaikgPT4ge1xyXG4gICAgICAgICAgICBzZWxlY3QuaWQgPSBvYmouZWxlbWVudE5hbWU7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmFwcGVuZENoaWxkID0gKHBhcmVudCwgY2hpbGQpID0+IHtcclxuICAgICAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGNoaWxkKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuY3JlYXRlVGl0bGUgPSAob2JqKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gb2JqLmRlc2NyaXB0aW9uO1xyXG4gICAgICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgY29uc3QgdGV4dE5vZGVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRpdGxlKTtcclxuICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKHRleHROb2RlVGl0bGUpO1xyXG4gICAgICAgICAgICByZXR1cm4gZGl2O1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5yZXR1cm5LZXlzID0gKG9iaikgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBhcnIgPSBPYmplY3Qua2V5cyhvYmopO1xyXG4gICAgICAgICAgICByZXR1cm4gYXJyO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5jcmVhdGVJbnB1dCA9IChzZWxlY3RPckRpdiwgdmFsdWUpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgICAgICBpbnB1dC50eXBlID0gJ251bWJlcic7XHJcbiAgICAgICAgICAgIGlucHV0LnZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMuYXBwZW5kQ2hpbGQoc2VsZWN0T3JEaXYsIGlucHV0KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuY3JlYXRlQ2hhbmdhYmxlT3B0aW9ucyA9IChhcnIsIHBhcmVudEVsZW1lbnQpID0+IHtcclxuICAgICAgICAgICAgYXJyLmZvckVhY2goKGNoYW5nYWJsZVZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgICAgICAgICAgICAgIG9wdGlvbi52YWx1ZSA9IGNoYW5nYWJsZVZhbHVlO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNoYW5nYWJsZVZhbHVlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXBwZW5kQ2hpbGQob3B0aW9uLCB0ZXh0KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXBwZW5kQ2hpbGQocGFyZW50RWxlbWVudCwgb3B0aW9uKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmNyZWF0ZUxpc3RlbmVyT3JPciA9IChlbGVtZW50Rm9yTGlzdGVuZXIsIGtleU9mU2V0dGluZykgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjaGFuZ2VMaXN0ZW5lciA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCfRgNCw0LHQvtGC0LDQtdGCIScpO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYGVsZW1lbnRGb3JMaXN0ZW5lci52YWx1ZSA9PT0gJHtlbGVtZW50Rm9yTGlzdGVuZXIudmFsdWV9YCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldHRpbmdzW2tleU9mU2V0dGluZ10gPSBlbGVtZW50Rm9yTGlzdGVuZXIudmFsdWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNsaWRlclJlZnJlc2goKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgZWxlbWVudEZvckxpc3RlbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGNoYW5nZUxpc3RlbmVyKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuY3JlYXRlTGlzdGVuZXJOdW1lcmFsID0gKGVsZW1lbnRGb3JMaXN0ZW5lciwga2V5T2ZTZXR0aW5nKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlucHV0TGlzdGVuZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn0YDQsNCx0L7RgtCw0LXRgiEnKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVsZW1lbnRGb3JMaXN0ZW5lci5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW5wdXQnKVswXS52YWx1ZUFzTnVtYmVyKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0dGluZ3Nba2V5T2ZTZXR0aW5nXSA9IE51bWJlcihlbGVtZW50Rm9yTGlzdGVuZXIuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2lucHV0JylbMF0udmFsdWVBc051bWJlcik7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhrZXlPZlNldHRpbmcpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5zZXR0aW5ncyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNsaWRlclJlZnJlc2goKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgZWxlbWVudEZvckxpc3RlbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgaW5wdXRMaXN0ZW5lcik7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmNyZWF0ZVBhbmVsID0gKG9iamVjdEZvckNvbnN0cnVjdGlvblBhbmVsLCB0eXBlLCBjb250cm9sUGFuZWwpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qga2V5cyA9IHRoaXMucmV0dXJuS2V5cyhvYmplY3RGb3JDb25zdHJ1Y3Rpb25QYW5lbCk7XHJcbiAgICAgICAgICAgIGtleXMuZm9yRWFjaCgoa2V5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50T2JqID0gb2JqZWN0Rm9yQ29uc3RydWN0aW9uUGFuZWxba2V5XTtcclxuICAgICAgICAgICAgICAgIGxldCBzZWxlY3RPckRpdjtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAnbnVtZXJhbCcpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RPckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdzZWxlY3QnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0T3JEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0SWRGb3JTZWxlY3Qoc2VsZWN0T3JEaXYsIGN1cnJlbnRPYmopO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY3JlYXRlVGl0bGUgPSB0aGlzLmNyZWF0ZVRpdGxlKGN1cnJlbnRPYmopO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcHBlbmRDaGlsZChzZWxlY3RPckRpdiwgY3JlYXRlVGl0bGUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdudW1lcmFsJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlSW5wdXQoc2VsZWN0T3JEaXYsIHRoaXMuc2V0dGluZ3NbY3VycmVudE9iai5uYW1lT2ZWYXJpYWJsZV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdzZWxlY3QnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVDaGFuZ2FibGVPcHRpb25zKGN1cnJlbnRPYmoudmFsdWUsIHNlbGVjdE9yRGl2KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuYXBwZW5kQ2hpbGQoY29udHJvbFBhbmVsLCBzZWxlY3RPckRpdik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBrZXlzLmZvckVhY2goKGtleSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudE9iaiA9IG9iamVjdEZvckNvbnN0cnVjdGlvblBhbmVsW2tleV07XHJcbiAgICAgICAgICAgICAgICBjb25zdCBrZXlPZlNldHRpbmcgPSBjdXJyZW50T2JqLm5hbWVPZlZhcmlhYmxlO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYGtleU9mU2V0dGluZyA9PT0gJHtrZXlPZlNldHRpbmd9YCk7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gJ251bWVyYWwnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZXZlbnRFbGVtZW50ID0gY29udHJvbFBhbmVsLnF1ZXJ5U2VsZWN0b3IoYCMke2N1cnJlbnRPYmouZWxlbWVudE5hbWV9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVMaXN0ZW5lck51bWVyYWwoZXZlbnRFbGVtZW50LCBrZXlPZlNldHRpbmcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdzZWxlY3QnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJzEyMycpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGV2ZW50RWxlbWVudCA9IGNvbnRyb2xQYW5lbC5xdWVyeVNlbGVjdG9yKGAjJHtjdXJyZW50T2JqLmVsZW1lbnROYW1lfWApO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlTGlzdGVuZXJPck9yKGV2ZW50RWxlbWVudCwga2V5T2ZTZXR0aW5nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnNsaWRlclJlZnJlc2ggPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG9iakZvckNvbnRyb2xsZXIgPSB7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXJUeXBlOiB0aGlzLnNldHRpbmdzLnNsaWRlclR5cGUsXHJcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb25UeXBlOiB0aGlzLnNldHRpbmdzLmRpcmVjdGlvblR5cGUsXHJcbiAgICAgICAgICAgICAgICBzdGVwOiB0aGlzLnNldHRpbmdzLnN0ZXAsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHRoaXMuY29udHJvbGxlci5zZXRDb250cm9sbGVyRnJvbUNvbnRyb2xQYW5lbChvYmpGb3JDb250cm9sbGVyKTtcclxuICAgICAgICAgICAgY29uc3Qgb2JqRm9yTW9kZWwgPSB7XHJcbiAgICAgICAgICAgICAgICBzaWduOiB0aGlzLnNldHRpbmdzLnNpZ24sXHJcbiAgICAgICAgICAgICAgICBsb3dlclNjYWxlQm91bmQ6IHRoaXMuc2V0dGluZ3MubG93ZXJTY2FsZUJvdW5kLFxyXG4gICAgICAgICAgICAgICAgdXBwZXJTY2FsZUJvdW5kOiB0aGlzLnNldHRpbmdzLnVwcGVyU2NhbGVCb3VuZCxcclxuICAgICAgICAgICAgICAgIGxvd2VyU2xpZGVyVmFsdWU6IHRoaXMuc2V0dGluZ3MubG93ZXJTbGlkZXJWYWx1ZSxcclxuICAgICAgICAgICAgICAgIHVwcGVyU2xpZGVyVmFsdWU6IHRoaXMuc2V0dGluZ3MudXBwZXJTbGlkZXJWYWx1ZSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdGhpcy5tb2RlbC5zZXRJbml0aWFsTW9kZWxPcHRpb25zKG9iakZvck1vZGVsKTtcclxuICAgICAgICAgICAgdGhpcy5jb250cm9sbGVyLmNyZWF0ZVNsaWRlcigpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5idWlsZFBhbmVsID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjb250cm9sUGFuZWwgPSB0aGlzLmdldENvbnRyb2xQYW5lbCgpO1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVBhbmVsKHRoaXMub3JWYWx1ZXMsICdzZWxlY3QnLCBjb250cm9sUGFuZWwpO1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVBhbmVsKHRoaXMubnVtZXJhbFZhbHVlcywgJ251bWVyYWwnLCBjb250cm9sUGFuZWwpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnNldHRpbmdzKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCB7IENvbnRyb2xQYW5lbCB9O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1Db250cm9sUGFuZWwuanMubWFwIiwiaW1wb3J0IHsgTW9kZWwgfSBmcm9tICcuL21vZGVsJztcclxuaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJy4vY29udHJvbGxlcic7XHJcbmltcG9ydCB7IFZpZXcgfSBmcm9tICcuL3JlZmFjdG9yaW5nVmlldyc7XHJcbmltcG9ydCB7IENvbnRyb2xQYW5lbCB9IGZyb20gJy4vQ29udHJvbFBhbmVsJztcclxuZnVuY3Rpb24gSVNTbGlkZXIocGFyYW0pIHtcclxuICAgIGNvbnN0IHNldHRpbmdzID0ge1xyXG4gICAgICAgIGlkRm9yQ29udHJvbFBhbmVsOiBwYXJhbS5pZEZvckNvbnRyb2xQYW5lbCB8fCAnZG9jX3BhbmVsJyxcclxuICAgICAgICBlbGVtZW50SWQ6IHBhcmFtLmVsZW1lbnRJZCB8fCAnaXNzJyxcclxuICAgICAgICBzaWduOiBwYXJhbS5zaWduIHx8ICfigr0nLFxyXG4gICAgICAgIGxvd2VyU2NhbGVCb3VuZDogcGFyYW0ubG93ZXJTY2FsZUJvdW5kIHx8IDAsXHJcbiAgICAgICAgdXBwZXJTY2FsZUJvdW5kOiBwYXJhbS51cHBlclNjYWxlQm91bmQgfHwgMTAwMCxcclxuICAgICAgICBsb3dlclNsaWRlclZhbHVlOiBwYXJhbS5sb3dlclNsaWRlclZhbHVlIHx8IDIwMCxcclxuICAgICAgICB1cHBlclNsaWRlclZhbHVlOiBwYXJhbS51cHBlclNsaWRlclZhbHVlIHx8IDgwMCxcclxuICAgICAgICBzbGlkZXJUeXBlOiBwYXJhbS5zbGlkZXJUeXBlIHx8ICdkb3VibGUnLFxyXG4gICAgICAgIGRpcmVjdGlvblR5cGU6IHBhcmFtLmRpcmVjdGlvblR5cGUgfHwgJ2hvcml6b250YWwnLFxyXG4gICAgICAgIHN0ZXA6IHBhcmFtLnN0ZXAgfHwgNTAsXHJcbiAgICB9O1xyXG4gICAgLy8g0J/QntCh0KLQoNCe0JXQndCY0JUg0KHQm9CQ0JnQlNCV0KDQkCDQn9Cg0Jgg0J/QldCg0JLQntCcINCX0JDQn9Cj0KHQmtCVXHJcbiAgICBjb25zdCBtb2RlbCA9IG5ldyBNb2RlbChzZXR0aW5ncyk7XHJcbiAgICBjb25zdCBjb250cm9sbGVyID0gbmV3IENvbnRyb2xsZXIoc2V0dGluZ3MpO1xyXG4gICAgY29uc3QgdmlldyA9IG5ldyBWaWV3KCk7XHJcbiAgICBjb25zdCBjb250cm9sUGFuZWwgPSBuZXcgQ29udHJvbFBhbmVsKCk7XHJcbiAgICBjb250cm9sbGVyLmJpbmRNb2RlbChtb2RlbCk7XHJcbiAgICBjb250cm9sbGVyLmJpbmRWaWV3KHZpZXcpO1xyXG4gICAgY29udHJvbGxlci5iaW5kQ29udHJvbFBhbmVsKGNvbnRyb2xQYW5lbCk7XHJcbiAgICB2aWV3LmJpbmRDb250cm9sbGVyKGNvbnRyb2xsZXIpO1xyXG4gICAgY29udHJvbFBhbmVsLmJpbmRDb250cm9sbGVyKGNvbnRyb2xsZXIpO1xyXG4gICAgY29udHJvbFBhbmVsLmJpbmRNb2RlbChtb2RlbCk7XHJcbiAgICBjb250cm9sbGVyLmNyZWF0ZVNsaWRlcigpO1xyXG4gICAgY29udHJvbFBhbmVsLmJ1aWxkUGFuZWwoKTtcclxufVxyXG5leHBvcnQgeyBJU1NsaWRlciB9O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1JU1NsaWRlci5qcy5tYXAiLCJjbGFzcyBDb250cm9sbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKHNldHRpbmdzKSB7XHJcbiAgICAgICAgdGhpcy5zZXRDb250cm9sbGVyRnJvbUNvbnRyb2xQYW5lbCA9IChvYmopID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zdGVwID0gb2JqLnN0ZXA7XHJcbiAgICAgICAgICAgIHRoaXMuc2xpZGVyVHlwZSA9IG9iai5zbGlkZXJUeXBlO1xyXG4gICAgICAgICAgICB0aGlzLmRpcmVjdGlvblR5cGUgPSBvYmouZGlyZWN0aW9uVHlwZTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuZWxlbWVudElkID0gc2V0dGluZ3MuZWxlbWVudElkO1xyXG4gICAgICAgIHRoaXMuc2xpZGVyVHlwZSA9IHNldHRpbmdzLnNsaWRlclR5cGUgfHwgJ3NpbmdsZSc7XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb25UeXBlID0gc2V0dGluZ3MuZGlyZWN0aW9uVHlwZSB8fCAnaG9yaXpvbnRhbCc7XHJcbiAgICAgICAgdGhpcy5zdGVwID0gc2V0dGluZ3Muc3RlcCB8fCAyO1xyXG4gICAgICAgIHRoaXMuaWRGb3JDb250cm9sUGFuZWwgPSBzZXR0aW5ncy5pZEZvckNvbnRyb2xQYW5lbCB8fCAnJztcclxuICAgIH1cclxuICAgIGNyZWF0ZVNsaWRlcigpIHtcclxuICAgICAgICB0aGlzLnNldENvbnRyb2xsZXIoKTtcclxuICAgICAgICB0aGlzLnNldEFuZFJ1blZpZXcoKTtcclxuICAgIH1cclxuICAgIHNldENvbnRyb2xsZXIoKSB7XHJcbiAgICAgICAgY29uc3Qgb2JqRnJvbU1vZGVsID0gdGhpcy5nZXRNb2RlbCgpO1xyXG4gICAgICAgIHRoaXMubG93ZXJTbGlkZXJWYWx1ZSA9IG9iakZyb21Nb2RlbC5sb3dlclNsaWRlclZhbHVlO1xyXG4gICAgICAgIHRoaXMudXBwZXJTbGlkZXJWYWx1ZSA9IG9iakZyb21Nb2RlbC51cHBlclNsaWRlclZhbHVlO1xyXG4gICAgICAgIHRoaXMubG93ZXJTY2FsZUJvdW5kID0gb2JqRnJvbU1vZGVsLmxvd2VyU2NhbGVCb3VuZDtcclxuICAgICAgICB0aGlzLnVwcGVyU2NhbGVCb3VuZCA9IG9iakZyb21Nb2RlbC51cHBlclNjYWxlQm91bmQ7XHJcbiAgICAgICAgdGhpcy5zaWduID0gb2JqRnJvbU1vZGVsLnNpZ247XHJcbiAgICB9XHJcbiAgICBnZXRNb2RlbCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tb2RlbC5nZXRNb2RlbCgpO1xyXG4gICAgfVxyXG4gICAgc2V0QW5kUnVuVmlldygpIHtcclxuICAgICAgICBjb25zdCBvYmogPSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnRJZDogdGhpcy5lbGVtZW50SWQsXHJcbiAgICAgICAgICAgIHNpZ246IHRoaXMuc2lnbixcclxuICAgICAgICAgICAgbG93ZXJTY2FsZUJvdW5kOiB0aGlzLmxvd2VyU2NhbGVCb3VuZCxcclxuICAgICAgICAgICAgdXBwZXJTY2FsZUJvdW5kOiB0aGlzLnVwcGVyU2NhbGVCb3VuZCxcclxuICAgICAgICAgICAgbG93ZXJTbGlkZXJWYWx1ZTogdGhpcy5sb3dlclNsaWRlclZhbHVlLFxyXG4gICAgICAgICAgICB1cHBlclNsaWRlclZhbHVlOiB0aGlzLnVwcGVyU2xpZGVyVmFsdWUsXHJcbiAgICAgICAgICAgIHNsaWRlclR5cGU6IHRoaXMuc2xpZGVyVHlwZSxcclxuICAgICAgICAgICAgZGlyZWN0aW9uVHlwZTogdGhpcy5kaXJlY3Rpb25UeXBlLFxyXG4gICAgICAgICAgICBzdGVwOiB0aGlzLnN0ZXAsXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zb2xlLmxvZygnc2V0QW5kUnVuVmlldycpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG9iaik7XHJcbiAgICAgICAgdGhpcy52aWV3LnNldFN0YXJ0aW5nQ29uZGl0aW9ucyhvYmopO1xyXG4gICAgICAgIHRoaXMudmlldy5pbml0KCk7XHJcbiAgICB9XHJcbiAgICBiaW5kTW9kZWwobW9kZWwpIHtcclxuICAgICAgICB0aGlzLm1vZGVsID0gbW9kZWw7XHJcbiAgICB9XHJcbiAgICBzZXRNb2RlbCgpIHtcclxuICAgICAgICB0aGlzLm1vZGVsLnNldE1vZGVsKHtcclxuICAgICAgICAgICAgbG93ZXJTbGlkZXJWYWx1ZTogdGhpcy5sb3dlclNsaWRlclZhbHVlLFxyXG4gICAgICAgICAgICB1cHBlclNsaWRlclZhbHVlOiB0aGlzLnVwcGVyU2xpZGVyVmFsdWUsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBiaW5kVmlldyh2aWV3KSB7XHJcbiAgICAgICAgdGhpcy52aWV3ID0gdmlldztcclxuICAgIH1cclxuICAgIGdldFZpZXcob2JqKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2xpZGVyVHlwZSA9PT0gJ2RvdWJsZScpIHtcclxuICAgICAgICAgICAgdGhpcy5sb3dlclNsaWRlclZhbHVlID0gb2JqLmxvd2VyU2xpZGVyVmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMudXBwZXJTbGlkZXJWYWx1ZSA9IG9iai51cHBlclNsaWRlclZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5zbGlkZXJUeXBlID09PSAnc2luZ2xlJykge1xyXG4gICAgICAgICAgICB0aGlzLmxvd2VyU2xpZGVyVmFsdWUgPSBvYmoubG93ZXJTbGlkZXJWYWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRNb2RlbCgpO1xyXG4gICAgfVxyXG4gICAgZ2V0Q29udHJvbGxlcigpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBlbGVtZW50SWQ6IHRoaXMuZWxlbWVudElkLFxyXG4gICAgICAgICAgICBzaWduOiB0aGlzLnNpZ24sXHJcbiAgICAgICAgICAgIGxvd2VyU2NhbGVCb3VuZDogdGhpcy5sb3dlclNjYWxlQm91bmQsXHJcbiAgICAgICAgICAgIHVwcGVyU2NhbGVCb3VuZDogdGhpcy51cHBlclNjYWxlQm91bmQsXHJcbiAgICAgICAgICAgIGxvd2VyU2xpZGVyVmFsdWU6IHRoaXMubG93ZXJTbGlkZXJWYWx1ZSxcclxuICAgICAgICAgICAgdXBwZXJTbGlkZXJWYWx1ZTogdGhpcy51cHBlclNsaWRlclZhbHVlLFxyXG4gICAgICAgICAgICBzbGlkZXJUeXBlOiB0aGlzLnNsaWRlclR5cGUsXHJcbiAgICAgICAgICAgIHN0ZXA6IHRoaXMuc3RlcCxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgYmluZENvbnRyb2xQYW5lbChjbnRybFBubCkge1xyXG4gICAgICAgIHRoaXMuY29udHJvbFBhbmVsID0gY250cmxQbmw7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IHsgQ29udHJvbGxlciB9O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb250cm9sbGVyLmpzLm1hcCIsImNsYXNzIE1vZGVsIHtcclxuICAgIGNvbnN0cnVjdG9yKHBhcmFtKSB7XHJcbiAgICAgICAgdGhpcy5zZXRJbml0aWFsTW9kZWxPcHRpb25zID0gKHBhcmFtKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubG93ZXJTY2FsZUJvdW5kID0gcGFyYW0ubG93ZXJTY2FsZUJvdW5kO1xyXG4gICAgICAgICAgICB0aGlzLnVwcGVyU2NhbGVCb3VuZCA9IHBhcmFtLnVwcGVyU2NhbGVCb3VuZDtcclxuICAgICAgICAgICAgdGhpcy5sb3dlclNsaWRlclZhbHVlID0gcGFyYW0ubG93ZXJTbGlkZXJWYWx1ZTtcclxuICAgICAgICAgICAgdGhpcy51cHBlclNsaWRlclZhbHVlID0gcGFyYW0udXBwZXJTbGlkZXJWYWx1ZTtcclxuICAgICAgICAgICAgdGhpcy5zaWduID0gcGFyYW0uc2lnbjtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMubG93ZXJTY2FsZUJvdW5kID0gcGFyYW0ubG93ZXJTY2FsZUJvdW5kIHx8IDA7XHJcbiAgICAgICAgdGhpcy51cHBlclNjYWxlQm91bmQgPSBwYXJhbS51cHBlclNjYWxlQm91bmQgfHwgMTAwMDtcclxuICAgICAgICB0aGlzLmxvd2VyU2xpZGVyVmFsdWUgPSBwYXJhbS5sb3dlclNsaWRlclZhbHVlIHx8IDIwMDtcclxuICAgICAgICB0aGlzLnVwcGVyU2xpZGVyVmFsdWUgPSBwYXJhbS51cHBlclNsaWRlclZhbHVlIHx8IDgwMDtcclxuICAgICAgICB0aGlzLnNpZ24gPSBwYXJhbS5zaWduIHx8ICc/JztcclxuICAgIH1cclxuICAgIHNldE1vZGVsKG9iaikge1xyXG4gICAgICAgIHRoaXMubG93ZXJTbGlkZXJWYWx1ZSA9IG9iai5sb3dlclNsaWRlclZhbHVlO1xyXG4gICAgICAgIHRoaXMudXBwZXJTbGlkZXJWYWx1ZSA9IG9iai51cHBlclNsaWRlclZhbHVlO1xyXG4gICAgfVxyXG4gICAgZ2V0TW9kZWwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbG93ZXJTY2FsZUJvdW5kOiB0aGlzLmxvd2VyU2NhbGVCb3VuZCxcclxuICAgICAgICAgICAgdXBwZXJTY2FsZUJvdW5kOiB0aGlzLnVwcGVyU2NhbGVCb3VuZCxcclxuICAgICAgICAgICAgbG93ZXJTbGlkZXJWYWx1ZTogdGhpcy5sb3dlclNsaWRlclZhbHVlLFxyXG4gICAgICAgICAgICB1cHBlclNsaWRlclZhbHVlOiB0aGlzLnVwcGVyU2xpZGVyVmFsdWUsXHJcbiAgICAgICAgICAgIHNpZ246IHRoaXMuc2lnbixcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCB7IE1vZGVsIH07XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1vZGVsLmpzLm1hcCIsImltcG9ydCAnLi4vLi4vLi4vaXNfcmVmYWN0b3JpbmcuY3NzJztcclxuLy8gaW1wb3J0IHsgVmlldyB9IGZyb20gJy4vcmVmYWN0b3JpbmdWaWV3JztcclxuLy8gaW1wb3J0IHsgQ29udHJvbFBhbmVsIH0gZnJvbSAnLi9Db250cm9sUGFuZWwnO1xyXG5pbXBvcnQgeyBJU1NsaWRlciB9IGZyb20gJy4vSVNTbGlkZXInO1xyXG4vLyBjb25zdCB2aWV3ID0gbmV3IFZpZXcoKTtcclxuLy8gY29uc3QgY29udHJvbFBhbmVsID0gbmV3IENvbnRyb2xQYW5lbCgpO1xyXG4vLyBjb250cm9sUGFuZWwuYnVpbGRQYW5lbCgpO1xyXG4vLyB2aWV3LnNldFN0YXJ0aW5nQ29uZGl0aW9ucyh7XHJcbi8vICAgZWxlbWVudElkOiAnI2lzcycsXHJcbi8vICAgc2lnbjogJyQnLFxyXG4vLyAgIGxvd2VyU2NhbGVCb3VuZDogMTAwLFxyXG4vLyAgIHVwcGVyU2NhbGVCb3VuZDogMTUwMCxcclxuLy8gICBsb3dlclNsaWRlclZhbHVlOiAyMDAsXHJcbi8vICAgdXBwZXJTbGlkZXJWYWx1ZTogODAwLFxyXG4vLyAgIHNsaWRlclR5cGU6ICdkb3VibGUnLFxyXG4vLyAgIGRpcmVjdGlvblR5cGU6ICdob3Jpem9udGFsJyxcclxuLy8gICBzdGVwOiAxMCxcclxuLy8gfSk7XHJcbi8vIHZpZXcuaW5pdCgpO1xyXG5jb25zdCBzZXR0aW5nc0Zvckhvcml6b250YWxEdWJsZSA9IHtcclxuICAgIGlkRm9yQ29udHJvbFBhbmVsOiAnZG9jX3BhbmVsJyxcclxuICAgIGVsZW1lbnRJZDogJyNpc3MnLFxyXG4gICAgc2lnbjogJyQnLFxyXG4gICAgbG93ZXJTY2FsZUJvdW5kOiAxMDAsXHJcbiAgICB1cHBlclNjYWxlQm91bmQ6IDE1MDAsXHJcbiAgICBsb3dlclNsaWRlclZhbHVlOiAyMDAsXHJcbiAgICB1cHBlclNsaWRlclZhbHVlOiA4MDAsXHJcbiAgICBzbGlkZXJUeXBlOiAnZG91YmxlJyxcclxuICAgIGRpcmVjdGlvblR5cGU6ICdob3Jpem9udGFsJyxcclxuICAgIHN0ZXA6IDEwLFxyXG59O1xyXG5JU1NsaWRlcihzZXR0aW5nc0Zvckhvcml6b250YWxEdWJsZSk7XHJcbi8vIGNvbnN0IHZpZXdTaW5nbGVIb3Jpem9udGFsID0gbmV3IFZpZXcoKTtcclxuLy8gdmlld1NpbmdsZUhvcml6b250YWwuc2V0U3RhcnRpbmdDb25kaXRpb25zKHtcclxuLy8gICBlbGVtZW50SWQ6ICcjaXNzXzInLFxyXG4vLyAgIHNpZ246ICckJyxcclxuLy8gICBsb3dlclNjYWxlQm91bmQ6IDEwMCxcclxuLy8gICB1cHBlclNjYWxlQm91bmQ6IDE1MDAsXHJcbi8vICAgbG93ZXJTbGlkZXJWYWx1ZTogMjAwLFxyXG4vLyAgIHVwcGVyU2xpZGVyVmFsdWU6IDgwMCxcclxuLy8gICBzbGlkZXJUeXBlOiAnc2luZ2xlJyxcclxuLy8gICBkaXJlY3Rpb25UeXBlOiAnaG9yaXpvbnRhbCcsXHJcbi8vICAgc3RlcDogMTAsXHJcbi8vIH0pO1xyXG4vLyB2aWV3U2luZ2xlSG9yaXpvbnRhbC5pbml0KCk7XHJcbi8vIGNvbnN0IHZpZXdTaW5nbGVWZXJ0aWNhbCA9IG5ldyBWaWV3KCk7XHJcbi8vIHZpZXdTaW5nbGVWZXJ0aWNhbC5zZXRTdGFydGluZ0NvbmRpdGlvbnMoe1xyXG4vLyAgIGVsZW1lbnRJZDogJyNpc3NfMycsXHJcbi8vICAgc2lnbjogJyQnLFxyXG4vLyAgIGxvd2VyU2NhbGVCb3VuZDogMTAwLFxyXG4vLyAgIHVwcGVyU2NhbGVCb3VuZDogMTUwMCxcclxuLy8gICBsb3dlclNsaWRlclZhbHVlOiAyMDAsXHJcbi8vICAgdXBwZXJTbGlkZXJWYWx1ZTogODAwLFxyXG4vLyAgIHNsaWRlclR5cGU6ICdzaW5nbGUnLFxyXG4vLyAgIGRpcmVjdGlvblR5cGU6ICd2ZXJ0aWNhbCcsXHJcbi8vICAgc3RlcDogMTAsXHJcbi8vIH0pO1xyXG4vLyB2aWV3U2luZ2xlVmVydGljYWwuaW5pdCgpO1xyXG4vLyBjb25zdCB2aWV3RG91YmxlVmVydGljYWwgPSBuZXcgVmlldygpO1xyXG4vLyB2aWV3RG91YmxlVmVydGljYWwuc2V0U3RhcnRpbmdDb25kaXRpb25zKHtcclxuLy8gICBlbGVtZW50SWQ6ICcjaXNzXzQnLFxyXG4vLyAgIHNpZ246ICckJyxcclxuLy8gICBsb3dlclNjYWxlQm91bmQ6IDEwMCxcclxuLy8gICB1cHBlclNjYWxlQm91bmQ6IDE1MDAsXHJcbi8vICAgbG93ZXJTbGlkZXJWYWx1ZTogMjAwLFxyXG4vLyAgIHVwcGVyU2xpZGVyVmFsdWU6IDgwMCxcclxuLy8gICBzbGlkZXJUeXBlOiAnZG91YmxlJyxcclxuLy8gICBkaXJlY3Rpb25UeXBlOiAndmVydGljYWwnLFxyXG4vLyAgIHN0ZXA6IDEwLFxyXG4vLyB9KTtcclxuLy8gdmlld0RvdWJsZVZlcnRpY2FsLmluaXQoKTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVmYWN0b3JpbmdJbmRleC5qcy5tYXAiLCJjbGFzcyBWaWV3IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuYmluZENvbnRyb2xsZXIgPSAoY29udHJvbGxlcikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRyb2xsZXIgPSBjb250cm9sbGVyO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5zZXRTdGFydGluZ0NvbmRpdGlvbnMgPSAob2JqKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudElkID0gb2JqLmVsZW1lbnRJZCB8fCAnI2lzcyc7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpc3MnKTtcclxuICAgICAgICAgICAgdGhpcy5zaWduID0gb2JqLnNpZ24gfHwgJ1InO1xyXG4gICAgICAgICAgICB0aGlzLmxvd2VyU2NhbGVCb3VuZCA9IE51bWJlcihvYmoubG93ZXJTY2FsZUJvdW5kKSB8fCAwO1xyXG4gICAgICAgICAgICB0aGlzLnVwcGVyU2NhbGVCb3VuZCA9IE51bWJlcihvYmoudXBwZXJTY2FsZUJvdW5kKSB8fCAxMDAwO1xyXG4gICAgICAgICAgICB0aGlzLmxvd2VyU2xpZGVyVmFsdWUgPSBOdW1iZXIob2JqLmxvd2VyU2xpZGVyVmFsdWUpIHx8IDIwMDtcclxuICAgICAgICAgICAgdGhpcy51cHBlclNsaWRlclZhbHVlID0gTnVtYmVyKG9iai51cHBlclNsaWRlclZhbHVlKSB8fCA4MDA7XHJcbiAgICAgICAgICAgIHRoaXMuc2xpZGVyVHlwZSA9IG9iai5zbGlkZXJUeXBlIHx8ICdzaW5nbGUnO1xyXG4gICAgICAgICAgICB0aGlzLmRpcmVjdGlvblR5cGUgPSBvYmouZGlyZWN0aW9uVHlwZSB8fCAnaG9yaXpvbnRhbCc7XHJcbiAgICAgICAgICAgIHRoaXMuc3RlcCA9IG9iai5zdGVwIHx8IDI7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmdldFN0YXJ0aW5nQ29uZGl0aW9ucyA9ICgpID0+ICh7XHJcbiAgICAgICAgICAgIGVsZW1lbnRJZDogdGhpcy5lbGVtZW50SWQsXHJcbiAgICAgICAgICAgIHNpZ246IHRoaXMuc2lnbixcclxuICAgICAgICAgICAgbG93ZXJTY2FsZUJvdW5kOiB0aGlzLmxvd2VyU2NhbGVCb3VuZCxcclxuICAgICAgICAgICAgdXBwZXJTY2FsZUJvdW5kOiB0aGlzLnVwcGVyU2NhbGVCb3VuZCxcclxuICAgICAgICAgICAgbG93ZXJTbGlkZXJWYWx1ZTogdGhpcy5sb3dlclNsaWRlclZhbHVlLFxyXG4gICAgICAgICAgICB1cHBlclNsaWRlclZhbHVlOiB0aGlzLnVwcGVyU2xpZGVyVmFsdWUsXHJcbiAgICAgICAgICAgIHNsaWRlclR5cGU6IHRoaXMuc2xpZGVyVHlwZSxcclxuICAgICAgICAgICAgc3RlcDogdGhpcy5zdGVwLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuaW5pdCA9ICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVET00oKTtcclxuICAgICAgICAgICAgdGhpcy53cml0ZURPTSgpO1xyXG4gICAgICAgICAgICB0aGlzLndyaXRlR2VvbWV0cnlET010b1ZhcmlhYmxlcygpO1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUxpc3RlbmVyT25TbGlkZXIoKTtcclxuICAgICAgICAgICAgdGhpcy5tb3Zlc1NsaWRlcnNUb1N0YXJ0UG9zaXRpb25zKCk7XHJcbiAgICAgICAgICAgIHRoaXMud3JpdGVNb25leVRvRmllbGRzKCk7XHJcbiAgICAgICAgICAgIHRoaXMubW92ZVRvb2x0aXAoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuY3JlYXRlRE9NID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zbGlkZXJUeXBlID09PSAnZG91YmxlJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVEb3VibGVET00oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5zbGlkZXJUeXBlID09PSAnc2luZ2xlJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVTaW5nbGVET00oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5jcmVhdGVTaW5nbGVET00gPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbS5pbm5lckhUTUwgPSAnPGRpdiBjbGFzcz1cImlzc19fdmFsdWUtZmllbGRcIj4nXHJcbiAgICAgICAgICAgICAgICArICc8c3BhbiBjbGFzcz1cImlzc19zdGF0aWNGaWVsZFwiPjwvc3Bhbj4nXHJcbiAgICAgICAgICAgICAgICArICc8L2Rpdj4nXHJcbiAgICAgICAgICAgICAgICArICc8ZGl2IGNsYXNzPSBcImlzcy1jb250YWluZXJcIj4nXHJcbiAgICAgICAgICAgICAgICArICc8ZGl2IGNsYXNzPSBcImlzc19fc2NhbGVcIj48L2Rpdj4nXHJcbiAgICAgICAgICAgICAgICArICc8ZGl2IGNsYXNzPVwiaXNzX19jb2xvci1iYXJcIj48L2Rpdj4nXHJcbiAgICAgICAgICAgICAgICArICc8ZGl2IGNsYXNzPVwiaXNzX19zaW5nbGVfZmx5LXZhbHVlIGlzc19fdG9vbHRpcFwiPjwvZGl2PidcclxuICAgICAgICAgICAgICAgICsgJzxkaXYgY2xhc3M9XCJpc3NfX3NpbmdsZSBpc3NfX2RyYWdcIj48L2Rpdj4nXHJcbiAgICAgICAgICAgICAgICArICc8L2Rpdj4nO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5jcmVhdGVEb3VibGVET00gPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbS5pbm5lckhUTUwgPSAnPGRpdiBjbGFzcz1cImlzc19fdmFsdWUtZmllbGRcIj4nXHJcbiAgICAgICAgICAgICAgICArICc8c3BhbiBjbGFzcz1cImlzc19zdGF0aWNGaWVsZFwiPjwvc3Bhbj4nXHJcbiAgICAgICAgICAgICAgICArICctJ1xyXG4gICAgICAgICAgICAgICAgKyAnPHNwYW4gY2xhc3M9XCJpc3Nfc3RhdGljRmllbGRcIj48L3NwYW4+J1xyXG4gICAgICAgICAgICAgICAgKyAnPC9kaXY+J1xyXG4gICAgICAgICAgICAgICAgKyAnPGRpdiBjbGFzcz0gXCJpc3MtY29udGFpbmVyXCI+J1xyXG4gICAgICAgICAgICAgICAgKyAnPGRpdiBjbGFzcz0gXCJpc3NfX3NjYWxlXCI+PC9kaXY+J1xyXG4gICAgICAgICAgICAgICAgKyAnPGRpdiBjbGFzcz1cImlzc19fZG91YmxlX2ZseS12YWx1ZS0xIGlzc19fdG9vbHRpcFwiPjwvZGl2PidcclxuICAgICAgICAgICAgICAgICsgJzxkaXYgY2xhc3M9XCJpc3NfX2RvdWJsZV8xX2hvcml6b250YWwgaXNzX19kcmFnXCI+PC9kaXY+J1xyXG4gICAgICAgICAgICAgICAgKyAnPGRpdiBjbGFzcz1cImlzc19fZG91YmxlX2ZseS12YWx1ZS0yIGlzc19fdG9vbHRpcFwiPjwvZGl2PidcclxuICAgICAgICAgICAgICAgICsgJzxkaXYgY2xhc3M9XCJpc3NfX2RvdWJsZV8yX2hvcml6b250YWwgaXNzX19kcmFnXCI+PC9kaXY+J1xyXG4gICAgICAgICAgICAgICAgKyAnPGRpdiBjbGFzcz1cImlzc19fY29sb3ItYmFyXCI+PC9kaXY+J1xyXG4gICAgICAgICAgICAgICAgKyAnPC9kaXY+JztcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMud3JpdGVET00gPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tFbGVtZW50c0luRE9NKCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNsaWRlclR5cGUgPT09ICdzaW5nbGUnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLndyaXRlU2luZ2xlRE9NdG9WYXJpYWJsZXMoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMud3JpdGVTaW5nbGVTbGlkZXJJbmRlbnQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLnNsaWRlclR5cGUgPT09ICdkb3VibGUnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLndyaXRlRG91YmxlRE9NdG9WYXJpYWJsZXMoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMud3JpdGVEb3VibGVTbGlkZXJJbmRlbnQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5jaGVja0VsZW1lbnRzSW5ET00gPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IERPTUVsZW1lbnRzID0gdGhpcy5lbGVtLnF1ZXJ5U2VsZWN0b3JBbGwoJy5pc3NfX2RyYWcnKTtcclxuICAgICAgICAgICAgaWYgKChET01FbGVtZW50cy5sZW5ndGggPiAwKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zbGlkZXJJbkRPTSA9IERPTUVsZW1lbnRzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLndyaXRlU2luZ2xlRE9NdG9WYXJpYWJsZXMgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIFt0aGlzLnNjYWxlXSA9IHRoaXMucmV0dXJuRWxlbWVudHNGcm9tRE9NKCcuaXNzX19zY2FsZScsIDEpO1xyXG4gICAgICAgICAgICBbdGhpcy5zaW5nbGVTbGlkZXJdID0gdGhpcy5yZXR1cm5FbGVtZW50c0Zyb21ET00oJy5pc3NfX2RyYWcnLCAxKTtcclxuICAgICAgICAgICAgW3RoaXMuc3RhdGljRmllbGRTaW5nbGVdID0gdGhpcy5yZXR1cm5FbGVtZW50c0Zyb21ET00oJy5pc3Nfc3RhdGljRmllbGQnLCAxKTtcclxuICAgICAgICAgICAgW3RoaXMuZmx5RmllbGRTaW5nbGVdID0gdGhpcy5yZXR1cm5FbGVtZW50c0Zyb21ET00oJy5pc3NfX3Rvb2x0aXAnLCAxKTtcclxuICAgICAgICAgICAgW3RoaXMucmliYm9uXSA9IHRoaXMucmV0dXJuRWxlbWVudHNGcm9tRE9NKCcuaXNzX19jb2xvci1iYXInLCAxKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMud3JpdGVEb3VibGVET010b1ZhcmlhYmxlcyA9ICgpID0+IHtcclxuICAgICAgICAgICAgW3RoaXMuc2NhbGVdID0gdGhpcy5yZXR1cm5FbGVtZW50c0Zyb21ET00oJy5pc3NfX3NjYWxlJywgMSk7XHJcbiAgICAgICAgICAgIFt0aGlzLmxvd2VyU2xpZGVyLCB0aGlzLnVwcGVyU2xpZGVyXSA9IHRoaXMucmV0dXJuRWxlbWVudHNGcm9tRE9NKCcuaXNzX19kcmFnJywgMik7XHJcbiAgICAgICAgICAgIFt0aGlzLnN0YXRpY0ZpZWxkTG93ZXIsIHRoaXMuc3RhdGljRmllbGRVcHBlcl0gPSB0aGlzLnJldHVybkVsZW1lbnRzRnJvbURPTSgnLmlzc19zdGF0aWNGaWVsZCcsIDIpO1xyXG4gICAgICAgICAgICBbdGhpcy5mbHlGaWVsZExvd2VyLCB0aGlzLmZseUZpZWxkVXBwZXJdID0gdGhpcy5yZXR1cm5FbGVtZW50c0Zyb21ET00oJy5pc3NfX3Rvb2x0aXAnLCAyKTtcclxuICAgICAgICAgICAgW3RoaXMucmliYm9uXSA9IHRoaXMucmV0dXJuRWxlbWVudHNGcm9tRE9NKCcuaXNzX19jb2xvci1iYXInLCAxKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMud3JpdGVTaW5nbGVTbGlkZXJJbmRlbnQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW0gPSB0aGlzLnJldHVybkVsZW1lbnRzRnJvbURPTSgnLmlzc19fZHJhZycsIDEpO1xyXG4gICAgICAgICAgICB0aGlzLnNpbmdsZVNsaWRlclBvc2l0aW9uID0gdGhpcy5yZXR1cm5JbmRlbnQoZWxlbVswXSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLndyaXRlRG91YmxlU2xpZGVySW5kZW50ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBlbGVtcyA9IHRoaXMucmV0dXJuRWxlbWVudHNGcm9tRE9NKCcuaXNzX19kcmFnJywgMik7XHJcbiAgICAgICAgICAgIHRoaXMubG93ZXJTbGlkZXJQb3NpdGlvbiA9IHRoaXMucmV0dXJuSW5kZW50KGVsZW1zWzBdKTtcclxuICAgICAgICAgICAgdGhpcy51cHBlclNsaWRlclBvc2l0aW9uID0gdGhpcy5yZXR1cm5JbmRlbnQoZWxlbXNbMV0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5yZXR1cm5JbmRlbnQgPSAoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb25UeXBlID09PSAnaG9yaXpvbnRhbCcpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50Lm9mZnNldExlZnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uVHlwZSA9PT0gJ3ZlcnRpY2FsJykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQub2Zmc2V0VG9wO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnJldHVybkVsZW1lbnRzRnJvbURPTSA9IChjbGFzc05hbWUsIGxlbmd0aCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBET01FbGVtZW50cyA9IHRoaXMuZWxlbS5xdWVyeVNlbGVjdG9yQWxsKGNsYXNzTmFtZSk7XHJcbiAgICAgICAgICAgIGlmICgoRE9NRWxlbWVudHMubGVuZ3RoID09PSBsZW5ndGgpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gRE9NRWxlbWVudHM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy53cml0ZUdlb21ldHJ5RE9NdG9WYXJpYWJsZXMgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RGlyZWN0aW9uKCk7XHJcbiAgICAgICAgICAgIHRoaXMud3JpdGVHZW9tZXRyeU9mU2xpZGVyKCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnNldERpcmVjdGlvbiA9ICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uVHlwZSA9PT0gJ2hvcml6b250YWwnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1haW5BeGlzU2l6ZSA9IHRoaXMuc2NhbGUub2Zmc2V0V2lkdGg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uVHlwZSA9PT0gJ3ZlcnRpY2FsJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tYWluQXhpc1NpemUgPSB0aGlzLnNjYWxlLm9mZnNldEhlaWdodDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy53cml0ZUdlb21ldHJ5T2ZTbGlkZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNsaWRlclR5cGUgPT09ICdzaW5nbGUnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNsaWRlcldpZHRoID0gdGhpcy5zaW5nbGVTbGlkZXIub2Zmc2V0V2lkdGg7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNsaWRlckhlaWdodCA9IHRoaXMuc2luZ2xlU2xpZGVyLm9mZnNldEhlaWdodDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLnNsaWRlclR5cGUgPT09ICdkb3VibGUnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNsaWRlcldpZHRoID0gdGhpcy5sb3dlclNsaWRlci5vZmZzZXRXaWR0aDtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2xpZGVySGVpZ2h0ID0gdGhpcy5sb3dlclNsaWRlci5vZmZzZXRIZWlnaHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5jYWxjUGl4ZWxTdGVwKCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmNhbGNQaXhlbFN0ZXAgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0ZXBJblBpeGVsID0gKHRoaXMubWFpbkF4aXNTaXplIC8gKHRoaXMudXBwZXJTY2FsZUJvdW5kIC0gdGhpcy5sb3dlclNjYWxlQm91bmQpKSAqIHRoaXMuc3RlcDtcclxuICAgICAgICAgICAgaWYgKHN0ZXBJblBpeGVsIDwgMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5waXhlbFN0ZXAgPSAxO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3VuZGVkUGl4ZWxTdGVwID0gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGl4ZWxTdGVwID0gc3RlcEluUGl4ZWw7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdW5kZWRQaXhlbFN0ZXAgPSBNYXRoLnJvdW5kKHN0ZXBJblBpeGVsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5jcmVhdGVMaXN0ZW5lck9uU2xpZGVyID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zbGlkZXJUeXBlID09PSAnc2luZ2xlJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaW5nbGVTbGlkZXIub25tb3VzZWRvd24gPSB0aGlzLmV2ZW50T25TbGlkZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5zbGlkZXJUeXBlID09PSAnZG91YmxlJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb3dlclNsaWRlci5vbm1vdXNlZG93biA9IHRoaXMuZXZlbnRPblNsaWRlcjtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBwZXJTbGlkZXIub25tb3VzZWRvd24gPSB0aGlzLmV2ZW50T25TbGlkZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMubW92ZXNTbGlkZXJzVG9TdGFydFBvc2l0aW9ucyA9ICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc2xpZGVyVHlwZSA9PT0gJ3NpbmdsZScpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U2luZ2xlVG9TdGFydFBvc2l0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVSaWJib24oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5zbGlkZXJUeXBlID09PSAnZG91YmxlJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRzRG91YmxlVG9TdGFydFBvc3Rpb25zKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVSaWJib24oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5zZXRTaW5nbGVUb1N0YXJ0UG9zaXRpb24gPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRpcmVjdGlvblR5cGUgPT09ICdob3Jpem9udGFsJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaW5nbGVTbGlkZXIuc3R5bGUubGVmdCA9IGAke3RoaXMuY2FsY01vbmV5VG9Qb3NpdGlvbih0aGlzLmxvd2VyU2xpZGVyVmFsdWUpfXB4YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb25UeXBlID09PSAndmVydGljYWwnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNpbmdsZVNsaWRlci5zdHlsZS50b3AgPSBgJHt0aGlzLmNhbGNNb25leVRvUG9zaXRpb24odGhpcy5sb3dlclNsaWRlclZhbHVlKX1weGA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuc2V0c0RvdWJsZVRvU3RhcnRQb3N0aW9ucyA9ICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMubG93ZXJTY2FsZUJvdW5kIDw9IHRoaXMubG93ZXJTbGlkZXJWYWx1ZSAmJiB0aGlzLnVwcGVyU2NhbGVCb3VuZCA+PSB0aGlzLnVwcGVyU2xpZGVyVmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmRpcmVjdGlvblR5cGUgPT09ICdob3Jpem9udGFsJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG93ZXJTbGlkZXIuc3R5bGUubGVmdCA9IGAke3RoaXMuY2FsY01vbmV5VG9Qb3NpdGlvbih0aGlzLmxvd2VyU2xpZGVyVmFsdWUpfXB4YDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwcGVyU2xpZGVyLnN0eWxlLmxlZnQgPSBgJHt0aGlzLmNhbGNNb25leVRvUG9zaXRpb24odGhpcy51cHBlclNsaWRlclZhbHVlKX1weGA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb25UeXBlID09PSAndmVydGljYWwnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb3dlclNsaWRlci5zdHlsZS50b3AgPSBgJHt0aGlzLmNhbGNNb25leVRvUG9zaXRpb24odGhpcy51cHBlclNsaWRlclZhbHVlKX1weGA7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cHBlclNsaWRlci5zdHlsZS50b3AgPSBgJHt0aGlzLmNhbGNNb25leVRvUG9zaXRpb24odGhpcy5sb3dlclNsaWRlclZhbHVlKX1weGA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMud3JpdGVNb25leVRvRmllbGRzID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zbGlkZXJUeXBlID09PSAnc2luZ2xlJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0aWNGaWVsZFNpbmdsZS5pbm5lclRleHQgPSBgJHt0aGlzLmxvd2VyU2xpZGVyVmFsdWV9JHt0aGlzLnNpZ259YDtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmx5RmllbGRTaW5nbGUuaW5uZXJUZXh0ID0gYCR7dGhpcy5sb3dlclNsaWRlclZhbHVlfSR7dGhpcy5zaWdufWA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuc2xpZGVyVHlwZSA9PT0gJ2RvdWJsZScpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGljRmllbGRMb3dlci5pbm5lclRleHQgPSBgJHt0aGlzLmxvd2VyU2xpZGVyVmFsdWV9JHt0aGlzLnNpZ259YDtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGljRmllbGRVcHBlci5pbm5lclRleHQgPSBgJHt0aGlzLnVwcGVyU2xpZGVyVmFsdWV9JHt0aGlzLnNpZ259YDtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmx5RmllbGRMb3dlci5pbm5lclRleHQgPSBgJHt0aGlzLmxvd2VyU2xpZGVyVmFsdWV9JHt0aGlzLnNpZ259YDtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmx5RmllbGRVcHBlci5pbm5lclRleHQgPSBgJHt0aGlzLnVwcGVyU2xpZGVyVmFsdWV9JHt0aGlzLnNpZ259YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5ldmVudE9uU2xpZGVyID0gKF9lKSA9PiB7XHJcbiAgICAgICAgICAgIF9lLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0UmVzdHJpY3Rpb25PZlNsaWRlck1vdmVtZW50KF9lKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQub25tb3VzZXVwID0gdGhpcy5jYW5jZWxFdmVudHM7XHJcbiAgICAgICAgICAgIGRvY3VtZW50Lm9ubW91c2Vtb3ZlID0gdGhpcy5tb3ZlRXZlbnRXaXRoSG9sZE1vdXNlO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5zZXRSZXN0cmljdGlvbk9mU2xpZGVyTW92ZW1lbnQgPSAoX2UpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc2xpZGVyVHlwZSA9PT0gJ2RvdWJsZScpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0UmVzdHJpY3Rpb25Gb3JEb3VibGVTbGlkZXIoX2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNsaWRlclR5cGUgPT09ICdzaW5nbGUnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFJlc3RyaWN0aW9uRm9yU2luZ2xlU2xpZGVyKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuc2V0UmVzdHJpY3Rpb25Gb3JEb3VibGVTbGlkZXIgPSAoX2UpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uVHlwZSA9PT0gJ2hvcml6b250YWwnKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoX2UudGFyZ2V0ID09PSB0aGlzLmxvd2VyU2xpZGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50YXJnZXRTbGlkZXIgPSB0aGlzLmxvd2VyU2xpZGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG93ZXJSZXN0cmljdGlvbiA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cHBlclJlc3RyaWN0aW9uID0gdGhpcy51cHBlclNsaWRlclBvc2l0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG93ZXJDb3N0UmVzdHJpY3Rpb24gPSB0aGlzLmxvd2VyU2NhbGVCb3VuZDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwcGVyQ29zdFJlc3RyaWN0aW9uID0gdGhpcy5nZXRDb3N0Rm9yU2xpZGVyKHRoaXMudXBwZXJSZXN0cmljdGlvbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoX2UudGFyZ2V0ID09PSB0aGlzLnVwcGVyU2xpZGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50YXJnZXRTbGlkZXIgPSB0aGlzLnVwcGVyU2xpZGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG93ZXJSZXN0cmljdGlvbiA9IHRoaXMubG93ZXJTbGlkZXJQb3NpdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwcGVyUmVzdHJpY3Rpb24gPSB0aGlzLm1haW5BeGlzU2l6ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvd2VyQ29zdFJlc3RyaWN0aW9uID0gdGhpcy5nZXRDb3N0Rm9yU2xpZGVyKHRoaXMubG93ZXJSZXN0cmljdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cHBlckNvc3RSZXN0cmljdGlvbiA9IHRoaXMudXBwZXJTY2FsZUJvdW5kO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRpcmVjdGlvblR5cGUgPT09ICd2ZXJ0aWNhbCcpIHtcclxuICAgICAgICAgICAgICAgIGlmIChfZS50YXJnZXQgPT09IHRoaXMubG93ZXJTbGlkZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRhcmdldFNsaWRlciA9IHRoaXMubG93ZXJTbGlkZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb3dlclJlc3RyaWN0aW9uID0gMDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwcGVyUmVzdHJpY3Rpb24gPSB0aGlzLnVwcGVyU2xpZGVyUG9zaXRpb247XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb3dlckNvc3RSZXN0cmljdGlvbiA9IHRoaXMuZ2V0Q29zdEZvclNsaWRlcih0aGlzLmxvd2VyUmVzdHJpY3Rpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBwZXJDb3N0UmVzdHJpY3Rpb24gPSB0aGlzLmdldENvc3RGb3JTbGlkZXIodGhpcy51cHBlclJlc3RyaWN0aW9uKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChfZS50YXJnZXQgPT09IHRoaXMudXBwZXJTbGlkZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRhcmdldFNsaWRlciA9IHRoaXMudXBwZXJTbGlkZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb3dlclJlc3RyaWN0aW9uID0gdGhpcy5sb3dlclNsaWRlclBvc2l0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBwZXJSZXN0cmljdGlvbiA9IHRoaXMubWFpbkF4aXNTaXplO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG93ZXJDb3N0UmVzdHJpY3Rpb24gPSB0aGlzLmdldENvc3RGb3JTbGlkZXIodGhpcy5sb3dlclJlc3RyaWN0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwcGVyQ29zdFJlc3RyaWN0aW9uID0gdGhpcy5nZXRDb3N0Rm9yU2xpZGVyKHRoaXMudXBwZXJSZXN0cmljdGlvbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuc2V0UmVzdHJpY3Rpb25Gb3JTaW5nbGVTbGlkZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRpcmVjdGlvblR5cGUgPT09ICdob3Jpem9udGFsJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50YXJnZXRTbGlkZXIgPSB0aGlzLnNpbmdsZVNsaWRlcjtcclxuICAgICAgICAgICAgICAgIHRoaXMubG93ZXJSZXN0cmljdGlvbiA9IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwcGVyUmVzdHJpY3Rpb24gPSB0aGlzLm1haW5BeGlzU2l6ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubG93ZXJDb3N0UmVzdHJpY3Rpb24gPSB0aGlzLmxvd2VyU2NhbGVCb3VuZDtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBwZXJDb3N0UmVzdHJpY3Rpb24gPSB0aGlzLnVwcGVyU2NhbGVCb3VuZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb25UeXBlID09PSAndmVydGljYWwnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRhcmdldFNsaWRlciA9IHRoaXMuc2luZ2xlU2xpZGVyO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb3dlclJlc3RyaWN0aW9uID0gMDtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBwZXJSZXN0cmljdGlvbiA9IHRoaXMubWFpbkF4aXNTaXplO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb3dlckNvc3RSZXN0cmljdGlvbiA9IHRoaXMudXBwZXJTY2FsZUJvdW5kO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cHBlckNvc3RSZXN0cmljdGlvbiA9IHRoaXMubG93ZXJTY2FsZUJvdW5kO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmdldENvc3RGb3JTbGlkZXIgPSAoc2xpZGVyUG9zdGlvbkluUGl4ZWwpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uVHlwZSA9PT0gJ2hvcml6b250YWwnKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2xpZGVyUG9zdGlvbkluUGl4ZWwgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmxvd2VyU2NhbGVCb3VuZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiAodGhpcy5sb3dlclNjYWxlQm91bmQgKyAoTWF0aC5yb3VuZChzbGlkZXJQb3N0aW9uSW5QaXhlbCAvIHRoaXMucGl4ZWxTdGVwKSAqIHRoaXMuc3RlcCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRpcmVjdGlvblR5cGUgPT09ICd2ZXJ0aWNhbCcpIHtcclxuICAgICAgICAgICAgICAgIGlmIChzbGlkZXJQb3N0aW9uSW5QaXhlbCA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudXBwZXJTY2FsZUJvdW5kO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICgoTWF0aC5yb3VuZCgodGhpcy5tYWluQXhpc1NpemUgLSBzbGlkZXJQb3N0aW9uSW5QaXhlbCkgLyB0aGlzLnBpeGVsU3RlcCkgKiB0aGlzLnN0ZXApICsgdGhpcy5sb3dlclNjYWxlQm91bmQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLm1vdmVFdmVudFdpdGhIb2xkTW91c2UgPSAoX2UpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaW5uZXJNb3VzZVBvc2l0aW9uID0gdGhpcy5nZXRNb3VzZVBvc2l0aW9uKF9lKTtcclxuICAgICAgICAgICAgY29uc3QgbmVhcmVzdFJvdW5kZWRTdGVwID0gdGhpcy5jYWxjTmVhcmVzdFN0ZXAoaW5uZXJNb3VzZVBvc2l0aW9uKTtcclxuICAgICAgICAgICAgY29uc3QgZmluYWxQb3NpdGlvbkluUGl4ZWwgPSB0aGlzLmNhbGNGaW5hbFBvc2l0aW9uKG5lYXJlc3RSb3VuZGVkU3RlcCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGZpbmFsQ29zdCA9IHRoaXMuY2FsY0ZpbmFsQ29zdChuZWFyZXN0Um91bmRlZFN0ZXApO1xyXG4gICAgICAgICAgICB0aGlzLm1vdmVTbGlkZXIoZmluYWxQb3NpdGlvbkluUGl4ZWwpO1xyXG4gICAgICAgICAgICB0aGlzLnNob3dNb25leU9uU2NyZWVuKGZpbmFsQ29zdCk7XHJcbiAgICAgICAgICAgIHRoaXMud3JpdGVNb25leVRvVmFyaWFibGVzKGZpbmFsQ29zdCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0T3ZlcmxheSgpO1xyXG4gICAgICAgICAgICB0aGlzLm1vdmVSaWJib24oKTtcclxuICAgICAgICAgICAgdGhpcy5tb3ZlVG9vbHRpcCgpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5nZXRNb3VzZVBvc2l0aW9uID0gKF9lKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xpZW50UmVjdCA9IHRoaXMuc2NhbGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRpcmVjdGlvblR5cGUgPT09ICdob3Jpem9udGFsJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbmRlbnQgPSB0aGlzLmNsaWVudFJlY3QubGVmdDtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoX2UuY2xpZW50WCAtIHRoaXMuaW5kZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb25UeXBlID09PSAndmVydGljYWwnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluZGVudCA9IHRoaXMuY2xpZW50UmVjdC50b3A7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKF9lLmNsaWVudFkgLSB0aGlzLmluZGVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuY2FsY05lYXJlc3RTdGVwID0gKF9wb3NpdGlvbkluUGl4ZWwpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uVHlwZSA9PT0gJ2hvcml6b250YWwnKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChfcG9zaXRpb25JblBpeGVsIC8gdGhpcy5waXhlbFN0ZXApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRpcmVjdGlvblR5cGUgPT09ICd2ZXJ0aWNhbCcpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBNYXRoLnJvdW5kKCh0aGlzLm1haW5BeGlzU2l6ZSAtIF9wb3NpdGlvbkluUGl4ZWwpIC8gdGhpcy5waXhlbFN0ZXApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmNhbGNGaW5hbFBvc2l0aW9uID0gKF9uZWFyZXN0Um91bmRlZFN0ZXApID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcG9zaXRpb25JblBpeGVsID0gX25lYXJlc3RSb3VuZGVkU3RlcCAqIHRoaXMucGl4ZWxTdGVwO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb25UeXBlID09PSAnaG9yaXpvbnRhbCcpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzUGl4ZWxzSW5Cb3JkZXIocG9zaXRpb25JblBpeGVsKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwb3NpdGlvbkluUGl4ZWw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAocG9zaXRpb25JblBpeGVsIDw9IHRoaXMubG93ZXJSZXN0cmljdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmxvd2VyUmVzdHJpY3Rpb247XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAocG9zaXRpb25JblBpeGVsID49IHRoaXMudXBwZXJSZXN0cmljdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnVwcGVyUmVzdHJpY3Rpb247XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uVHlwZSA9PT0gJ3ZlcnRpY2FsJykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNQaXhlbHNJbkJvcmRlcigodGhpcy5tYWluQXhpc1NpemUgLSBwb3NpdGlvbkluUGl4ZWwpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAodGhpcy5tYWluQXhpc1NpemUgLSBwb3NpdGlvbkluUGl4ZWwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKCh0aGlzLm1haW5BeGlzU2l6ZSAtIHBvc2l0aW9uSW5QaXhlbCkgPD0gdGhpcy5sb3dlclJlc3RyaWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubG93ZXJSZXN0cmljdGlvbjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICgodGhpcy5tYWluQXhpc1NpemUgLSBwb3NpdGlvbkluUGl4ZWwpID49IHRoaXMudXBwZXJSZXN0cmljdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnVwcGVyUmVzdHJpY3Rpb247XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuY2FsY0ZpbmFsQ29zdCA9IChfbmVhcmVzdFJvdW5kZWRTdGVwKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRpcmVjdGlvblR5cGUgPT09ICdob3Jpem9udGFsJykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcG9zaXRpb25Jbk1vbmV5ID0gdGhpcy5sb3dlclNjYWxlQm91bmQgKyAoX25lYXJlc3RSb3VuZGVkU3RlcCAqIHRoaXMuc3RlcCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgcG9zaXRpb25Jbk1vbmV5ID09PSAke3Bvc2l0aW9uSW5Nb25leX1gKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGB0aGlzLmlzTW9uZXlJbkJvcmRlcihwb3NpdGlvbkluTW9uZXkpID09PSAke3RoaXMuaXNNb25leUluQm9yZGVyKHBvc2l0aW9uSW5Nb25leSl9YCk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc01vbmV5SW5Cb3JkZXIocG9zaXRpb25Jbk1vbmV5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwb3NpdGlvbkluTW9uZXk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAocG9zaXRpb25Jbk1vbmV5IDwgdGhpcy5sb3dlckNvc3RSZXN0cmljdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmxvd2VyQ29zdFJlc3RyaWN0aW9uO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHBvc2l0aW9uSW5Nb25leSA+IHRoaXMudXBwZXJDb3N0UmVzdHJpY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy51cHBlckNvc3RSZXN0cmljdGlvbjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb25UeXBlID09PSAndmVydGljYWwnKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwb3NpdGlvbkluTW9uZXkgPSAoX25lYXJlc3RSb3VuZGVkU3RlcCAqIHRoaXMuc3RlcCkgKyB0aGlzLmxvd2VyU2NhbGVCb3VuZDtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzTW9uZXlJbkJvcmRlcihwb3NpdGlvbkluTW9uZXkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBvc2l0aW9uSW5Nb25leTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChwb3NpdGlvbkluTW9uZXkgPiB0aGlzLmxvd2VyQ29zdFJlc3RyaWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubG93ZXJDb3N0UmVzdHJpY3Rpb247XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAocG9zaXRpb25Jbk1vbmV5IDwgdGhpcy51cHBlckNvc3RSZXN0cmljdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnVwcGVyQ29zdFJlc3RyaWN0aW9uO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmlzUGl4ZWxzSW5Cb3JkZXIgPSAoX3Bvc2l0aW9uKSA9PiAoKF9wb3NpdGlvbiA+PSB0aGlzLmxvd2VyUmVzdHJpY3Rpb24pICYmIChfcG9zaXRpb24gPD0gdGhpcy51cHBlclJlc3RyaWN0aW9uKSk7XHJcbiAgICAgICAgdGhpcy5pc01vbmV5SW5Cb3JkZXIgPSAoX3Bvc2l0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRpcmVjdGlvblR5cGUgPT09ICdob3Jpem9udGFsJykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICgoX3Bvc2l0aW9uID49IHRoaXMubG93ZXJDb3N0UmVzdHJpY3Rpb24pICYmIChfcG9zaXRpb24gPD0gdGhpcy51cHBlckNvc3RSZXN0cmljdGlvbikpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRpcmVjdGlvblR5cGUgPT09ICd2ZXJ0aWNhbCcpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoKF9wb3NpdGlvbiA8PSB0aGlzLmxvd2VyQ29zdFJlc3RyaWN0aW9uKSAmJiAoX3Bvc2l0aW9uID49IHRoaXMudXBwZXJDb3N0UmVzdHJpY3Rpb24pKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5zaG93TW9uZXlPblNjcmVlbiA9IChmaW5hbENvc3QpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY29zdCA9IGAke2ZpbmFsQ29zdH0ke3RoaXMuc2lnbn1gO1xyXG4gICAgICAgICAgICBpZiAodGhpcy50YXJnZXRTbGlkZXIgPT09IHRoaXMubG93ZXJTbGlkZXIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGljRmllbGRMb3dlci50ZXh0Q29udGVudCA9IGAke2Nvc3R9YDtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmx5RmllbGRMb3dlci50ZXh0Q29udGVudCA9IGAke2Nvc3R9YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy50YXJnZXRTbGlkZXIgPT09IHRoaXMudXBwZXJTbGlkZXIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGljRmllbGRVcHBlci50ZXh0Q29udGVudCA9IGAke2Nvc3R9YDtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmx5RmllbGRVcHBlci50ZXh0Q29udGVudCA9IGAke2Nvc3R9YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy50YXJnZXRTbGlkZXIgPT09IHRoaXMuc2luZ2xlU2xpZGVyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRpY0ZpZWxkU2luZ2xlLnRleHRDb250ZW50ID0gYCR7Y29zdH1gO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mbHlGaWVsZFNpbmdsZS50ZXh0Q29udGVudCA9IGAke2Nvc3R9YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy53cml0ZU1vbmV5VG9WYXJpYWJsZXMgPSAoZmluYWxDb3N0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRhcmdldFNsaWRlciA9PT0gdGhpcy5sb3dlclNsaWRlcikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb3dlclNsaWRlclZhbHVlID0gZmluYWxDb3N0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRhcmdldFNsaWRlciA9PT0gdGhpcy51cHBlclNsaWRlcikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cHBlclNsaWRlclZhbHVlID0gZmluYWxDb3N0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRhcmdldFNsaWRlciA9PT0gdGhpcy5zaW5nbGVTbGlkZXIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG93ZXJTbGlkZXJWYWx1ZSA9IGZpbmFsQ29zdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5tb3ZlUmliYm9uID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBzZXRIb3Jpem9udGFsUmliYm9uVmFyaWFibGVzID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2xpZGVySW5ET00ubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yaWJib24uc3R5bGUubGVmdCA9ICcwcHgnO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmliYm9uLnN0eWxlLndpZHRoID0gYCR7dGhpcy5zaW5nbGVTbGlkZXIub2Zmc2V0TGVmdH1weGA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLnNsaWRlckluRE9NLmxlbmd0aCA9PT0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmliYm9uLnN0eWxlLmxlZnQgPSB0aGlzLmxvd2VyU2xpZGVyLnN0eWxlLmxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yaWJib24uc3R5bGUud2lkdGggPSBgJHt0aGlzLnVwcGVyU2xpZGVyLm9mZnNldExlZnQgLSB0aGlzLmxvd2VyU2xpZGVyLm9mZnNldExlZnR9cHhgO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjb25zdCBzZXRWZXJ0aWNhbFJpYmJvblZhcmlhYmxlcyA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNsaWRlckluRE9NLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmliYm9uLnN0eWxlLnRvcCA9IGAke3RoaXMuc2luZ2xlU2xpZGVyLm9mZnNldFRvcH1weGA7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yaWJib24uc3R5bGUuaGVpZ2h0ID0gYCR7dGhpcy5tYWluQXhpc1NpemUgLSB0aGlzLnNpbmdsZVNsaWRlci5vZmZzZXRUb3B9cHhgO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5zbGlkZXJJbkRPTS5sZW5ndGggPT09IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJpYmJvbi5zdHlsZS50b3AgPSB0aGlzLmxvd2VyU2xpZGVyLnN0eWxlLnRvcDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJpYmJvbi5zdHlsZS5oZWlnaHQgPSBgJHt0aGlzLnVwcGVyU2xpZGVyLm9mZnNldFRvcCAtIHRoaXMubG93ZXJTbGlkZXIub2Zmc2V0VG9wfXB4YDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uVHlwZSA9PT0gJ2hvcml6b250YWwnKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRIb3Jpem9udGFsUmliYm9uVmFyaWFibGVzKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uVHlwZSA9PT0gJ3ZlcnRpY2FsJykge1xyXG4gICAgICAgICAgICAgICAgc2V0VmVydGljYWxSaWJib25WYXJpYWJsZXMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5tb3ZlU2xpZGVyID0gKG51bSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb25UeXBlID09PSAnaG9yaXpvbnRhbCcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0U2xpZGVyLnN0eWxlLmxlZnQgPSBgJHtudW19cHhgO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuZGlyZWN0aW9uVHlwZSA9PT0gJ3ZlcnRpY2FsJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50YXJnZXRTbGlkZXIuc3R5bGUudG9wID0gYCR7bnVtfXB4YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5tb3ZlVG9vbHRpcCA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbW92ZSA9IChkaXJlY3Rpb24sIG9mZnNldCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2xpZGVyVHlwZSA9PT0gJ3NpbmdsZScpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVsZW0ucXVlcnlTZWxlY3RvckFsbCgnLmlzc19fdG9vbHRpcCcpWzBdLnN0eWxlW2RpcmVjdGlvbl0gPSBgJHt0aGlzLnNpbmdsZVNsaWRlcltvZmZzZXRdfXB4YDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNsaWRlclR5cGUgPT09ICdkb3VibGUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVtLnF1ZXJ5U2VsZWN0b3JBbGwoJy5pc3NfX3Rvb2x0aXAnKVswXS5zdHlsZVtkaXJlY3Rpb25dID0gYCR7dGhpcy5sb3dlclNsaWRlcltvZmZzZXRdfXB4YDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVsZW0ucXVlcnlTZWxlY3RvckFsbCgnLmlzc19fdG9vbHRpcCcpWzFdLnN0eWxlW2RpcmVjdGlvbl0gPSBgJHt0aGlzLnVwcGVyU2xpZGVyW29mZnNldF19cHhgO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb25UeXBlID09PSAnaG9yaXpvbnRhbCcpIHtcclxuICAgICAgICAgICAgICAgIG1vdmUoJ2xlZnQnLCAnb2Zmc2V0TGVmdCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRpcmVjdGlvblR5cGUgPT09ICd2ZXJ0aWNhbCcpIHtcclxuICAgICAgICAgICAgICAgIG1vdmUoJ3RvcCcsICdvZmZzZXRUb3AnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5zZXRPdmVybGF5ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy50YXJnZXRTbGlkZXIgPT09IHRoaXMubG93ZXJTbGlkZXIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0U2xpZGVyLnN0eWxlLnpJbmRleCA9ICcxMDAnO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cHBlclNsaWRlci5zdHlsZS56SW5kZXggPSAnMSc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy50YXJnZXRTbGlkZXIgPT09IHRoaXMudXBwZXJTbGlkZXIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0U2xpZGVyLnN0eWxlLnpJbmRleCA9ICcxMDAnO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb3dlclNsaWRlci5zdHlsZS56SW5kZXggPSAnMSc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuY2FuY2VsRXZlbnRzID0gKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLndyaXRlRE9NKCk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50Lm9ubW91c2V1cCA9IG51bGw7XHJcbiAgICAgICAgICAgIGRvY3VtZW50Lm9ubW91c2Vtb3ZlID0gbnVsbDtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgc2V0Q29udHJvbGxlcigpIHtcclxuICAgICAgICBjb25zdCBvYmogPSB7XHJcbiAgICAgICAgICAgIGxvd2VyU2xpZGVyVmFsdWU6IHRoaXMubG93ZXJTbGlkZXJWYWx1ZSxcclxuICAgICAgICAgICAgdXBwZXJTbGlkZXJWYWx1ZTogdGhpcy51cHBlclNsaWRlclZhbHVlLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5jb250cm9sbGVyLmdldFZpZXcob2JqKTtcclxuICAgIH1cclxuICAgIGNhbGNNb25leVRvUG9zaXRpb24obW9uZXkpIHtcclxuICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb25UeXBlID09PSAnaG9yaXpvbnRhbCcpIHtcclxuICAgICAgICAgICAgY29uc3QgcG9zaXRpb24gPSAoKG1vbmV5IC0gdGhpcy5sb3dlclNjYWxlQm91bmQpIC8gdGhpcy5zdGVwKSAqIHRoaXMucGl4ZWxTdGVwO1xyXG4gICAgICAgICAgICByZXR1cm4gcG9zaXRpb247XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmRpcmVjdGlvblR5cGUgPT09ICd2ZXJ0aWNhbCcpIHtcclxuICAgICAgICAgICAgY29uc3QgcG9zaXRpb24gPSB0aGlzLm1haW5BeGlzU2l6ZSAtICgoKG1vbmV5IC0gdGhpcy5sb3dlclNjYWxlQm91bmQpIC8gdGhpcy5zdGVwKSAqIHRoaXMucGl4ZWxTdGVwKTtcclxuICAgICAgICAgICAgcmV0dXJuIHBvc2l0aW9uO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnQgeyBWaWV3IH07XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlZmFjdG9yaW5nVmlldy5qcy5tYXAiXSwic291cmNlUm9vdCI6IiJ9