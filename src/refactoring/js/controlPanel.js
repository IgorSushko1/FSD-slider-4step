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
export { ControlPanel };
//# sourceMappingURL=controlPanel.js.map