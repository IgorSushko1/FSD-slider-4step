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
  idForSettings?: string;
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
  tooltip?: string;
  // value_field_state?: string;
}

interface ControlPanel {
  controlPanel: HTMLElement,
  selectOrOr: HTMLElement,
  divNumeral: HTMLElement,
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
    // tooltip: {
    //   title: 'Tooltip',
    //   description: 'Всплывающая подсказка над ползунком',
    //   elementName: 'tooltip',
    //   value: ['on', 'off'],
    //   nameOfVariable: 'tooltip',
    // },
    // value_field_state: {
    //   title: 'value_field_state',
    //   description: 'Поле вывода валюты',
    //   elementName: 'value_field_state',
    //   value: ['on', 'off'],
    //   nameOfVariable: 'value_field_state',
    // },
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

  getControlPanel = () => {
    const controlPanel = document.getElementById(this.settings.idForSettings);
    return controlPanel;
  }

  setIdForSelect = (select: HTMLElement, obj: any) => {
    select.id = obj.elementName;
  }

  createTitle = (obj: any) => {
    const title: string = obj.description;

    const div: HTMLElement = document.createElement('div');

    const textNodeTitle: Text = document.createTextNode(title);

    div.appendChild(textNodeTitle);

    return div;
  }

  appendChild = (parent: HTMLElement, child: HTMLElement | Text) => {
    parent.appendChild(child);
  }

  returnKeys = (obj: Values): string[] => {
    const arr = Object.keys(obj);
    return arr;
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

  createInput = (selectOrDiv: HTMLElement, value: number) => {
    const input = document.createElement('input');
    input.type = 'number';
    input.textContent = `${value}${this.settings.sign}`;
    this.appendChild(selectOrDiv, input);
  }

  createListenerOrOr = (elementForListener: HTMLSelectElement, keyOfSetting: 'sign' | 'sliderType' | 'directionType') => {
    const changeListener = (): any => {
      this.settings[keyOfSetting] = elementForListener.value;
      this.sliderRefresh();
    };
    elementForListener.addEventListener('change', changeListener());
  }

  createListenerNumeral = (elementForListener: HTMLInputElement, keyOfSetting: 'step' | 'lowerScaleBound' | 'upperScaleBound' | 'lowerSliderValue' | 'upperSliderValue') => {
    const inputListener = (): any => {
      this.settings[keyOfSetting] = Number(elementForListener.value);
      this.sliderRefresh();
    };
    elementForListener.addEventListener('input', inputListener());
  }

  createPanel = (objectForConstructionPanel: Values, type: string) => {
    const keys = this.returnKeys(objectForConstructionPanel);
    const controlPanel = this.getControlPanel();

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

  buildPanel = () => {
    this.createPanel(this.numeralValues, 'numeral');
    this.createPanel(this.orValues, 'select');
  }

  sliderRefresh = () => { }
}

export { ControlPanel };
