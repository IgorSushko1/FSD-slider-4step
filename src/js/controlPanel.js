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
export { ControlPanel };
//# sourceMappingURL=controlPanel.js.map