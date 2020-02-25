interface Values {
  [a: string]: ElementInterface;
}

interface ElementInterface {
  title?: string;
  description?: string;
  elementName?: string;
  value?: any;
  nameOfVariable?: string;
  type?: string;
}

interface Param {
  idForControlPanel?: string;
  directionType?: string;
  elementId?: string;
  elem?: any;
  sign?: string;
  lowerScaleBound?: number;
  upperScaleBound?: number;
  lowerSliderValue?: number;
  upperSliderValue?: number;
  sliderType?: string;
  step?: number;
  controller?: any;
  style?: string
}

interface ControlPanel {
  controlPanel: HTMLElement,
  selectOrOr: HTMLElement,
  divNumeral: HTMLElement,
  controller: any;
  model: any;
}

class ControlPanel {
  orValues: Values = {
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

  numeralValues: Values = {
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
      description:
        'Начальное значение шкалы слайдера - для первого или одиночного ползунка',
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

  settings: Param = {
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

  bindController = (controller: any) => {
    this.controller = controller;
  }

  setSettings = (setFromController: Param) => {
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
  }

  bindModel = (model: any) => {
    this.model = model;
  }

  getControlPanel = () => {
    const controlPanel = document.getElementById(this.settings.idForControlPanel);
    return controlPanel;
  }

  setIdForSelect = (select: HTMLElement, obj: any) => {
    select.id = obj.elementName;
  }

  appendChild = (parent: HTMLElement, child: HTMLElement | Text) => {
    parent.appendChild(child);
  }

  createTitle = (obj: any) => {
    const title: string = obj.description;

    const div: HTMLElement = document.createElement('div');

    const textNodeTitle: Text = document.createTextNode(title);

    div.appendChild(textNodeTitle);

    return div;
  }

  returnKeys = (obj: Values): string[] => {
    const arr = Object.keys(obj);
    return arr;
  }

  createInput = (selectOrDiv: HTMLElement, value: number) => {
    const input = document.createElement('input');
    input.type = 'number';
    input.value = String(value);
    this.appendChild(selectOrDiv, input);
  }

  createChangableOptions = (arr: string[], parentElement: HTMLElement) => {
    arr.forEach((changableValue) => {
      const option = document.createElement('option');
      option.value = changableValue;
      const text = document.createTextNode(changableValue);
      this.appendChild(option, text);
      this.appendChild(parentElement, option);
    });
  }

  createListenerOrOr = (elementForListener: HTMLSelectElement, keyOfSetting: 'sign' | 'sliderType' | 'directionType') => {
    const changeListener = (): any => {
      this.settings[keyOfSetting] = elementForListener.value;
      this.sliderRefresh();
    };
    elementForListener.addEventListener('change', changeListener);
  }

  createListenerNumeral = (elementForListener: HTMLInputElement, keyOfSetting: 'step' | 'lowerScaleBound' | 'upperScaleBound' | 'lowerSliderValue' | 'upperSliderValue') => {
    const inputListener = (): any => {
      this.settings[keyOfSetting] = Number(elementForListener.getElementsByTagName('input')[0].valueAsNumber);
      this.sliderRefresh();
    };
    elementForListener.addEventListener('input', inputListener);
  }

  createPanel = (objectForConstructionPanel: Values, type: string, controlPanel: HTMLElement) => {
    const keys = this.returnKeys(objectForConstructionPanel);

    keys.forEach((key) => {
      const currentObj = objectForConstructionPanel[key];

      let selectOrDiv: HTMLElement;
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
        this.createInput(selectOrDiv, this.settings[currentObj.nameOfVariable as 'step' | 'lowerScaleBound' | 'upperScaleBound' | 'lowerSliderValue' | 'upperSliderValue']);
      }
      if (type === 'select') {
        this.createChangableOptions(currentObj.value, selectOrDiv);
      }

      this.appendChild(controlPanel, selectOrDiv);
    });

    keys.forEach((key) => {
      const currentObj = objectForConstructionPanel[key];
      const keyOfSetting: any = currentObj.nameOfVariable;

      if (type === 'numeral') {
        const eventElement = controlPanel.querySelector(`#${currentObj.elementName}`) as HTMLInputElement;

        this.createListenerNumeral(eventElement, keyOfSetting);
      }
      if (type === 'select') {
        const eventElement = controlPanel.querySelector(`#${currentObj.elementName}`) as HTMLSelectElement;
        this.createListenerOrOr(eventElement, keyOfSetting);
      }
    });
  }

  sliderRefresh = () => {
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
  }

  buildPanel = () => {
    const controlPanel = this.getControlPanel();
    this.createPanel(this.orValues, 'select', controlPanel);
    this.createPanel(this.numeralValues, 'numeral', controlPanel);
  }
}

export { ControlPanel };
