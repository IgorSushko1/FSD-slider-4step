interface unchangableValues {
  [a: string]: Unchangable;
}

interface Unchangable {
  title: string;
  description: string;
  element_word: string;
  value: any;
  function_name: string;
}

const unchangableValues: unchangableValues = {
  sign: {
    title: 'Sign',
    description: 'Валюта',
    element_word: 'sign',
    value: ['₽', '$'],
    function_name: '_sign',
  },
  type_view: {
    title: 'Type',
    description: 'Тип слайдера - одинарный или двойной',
    element_word: 'slider_view',
    value: ['double', 'single'],
    function_name: '_slider_type',
  },
  slider_type: {
    title: 'Type',
    description: 'Тип слайдера - вертикальный или горизонтальный',
    element_word: 'slider_type',
    value: ['horizontal', 'vertical'],
    function_name: '_type_view',
  },
  tooltip: {
    title: 'Tooltip',
    description: 'Всплывающая подсказка над ползунком',
    element_word: 'tooltip',
    value: ['on', 'off'],
    function_name: 'tooltip',
  },
  value_field_state: {
    //   title: 'value_field_state',
    //   description: 'Поле вывода валюты',
    //   element_word: 'value_field_state',
    //   value: ['on', 'off'],
    //   function_name: 'value_field_state',
  },
};

interface changableValues {
  [sign: string]: Changable;
}

interface Changable {
  title: string;
  description: string;
  element_word: string;
  type: string;
  function_name: string;
}

const changableValues: changableValues = {
  step: {
    title: 'Step',
    description: 'Шаг ползунка',
    element_word: 'step',
    type: 'number',
    function_name: '_step',
  },
  min_start_slider: {
    title: 'Min_slider',
    description: 'Минимальное значение шкалы слайдера',
    element_word: 'min_start_slider',
    type: 'number',
    function_name: '_min_value',
  },
  max_start_slider: {
    title: 'Max_slider',
    description: 'Максимальное значение шкалы слайдера',
    element_word: 'max_start_slider',
    type: 'number',
    function_name: '_max_value',
  },
  min_slider_value: {
    title: 'Min_slider',
    description:
      'Начальное значение шкалы слайдера - для первого или одиночного ползунка',
    element_word: 'min_slider_value',
    type: 'number',
    function_name: '_min_slider_value',
  },
  max_slider_value: {
    title: 'Max_slider',
    description: 'Начальное значение шкалы слайдера - для второго ползунка',
    element_word: 'max_slider_value',
    type: 'number',
    function_name: '_max_slider_value',
  },
};

interface Param {
  settings_id?: string;
  _type_view?: string;
  elementId?: string;
  _elem?: any;
  _sign?: string;
  _min_value?: number;
  _max_value?: number;
  _min_slider_value?: number;
  _max_slider_value?: number;
  _slider_type?: string;
  _step?: number;
  controller?: any;
  tooltip?: string;
  value_field_state?: string;
}

const settings: any = {
  elementId: 'iss',
  _sign: '₽',
  _min_value: 0,
  _max_value: 1000,
  _min_slider_value: 200,
  _max_slider_value: 800,
  _slider_type: 'double',
  _type_view: 'horizontal',
  _step: 5,
  settings_id: 'doc_panel',
};

Object.keys(unchangableValues).forEach((elementOfMenu) => {
  const controlPanel = document.getElementById(settings.settings_id);
  const select = document.createElement('select');
  select.id = unchangableValues[elementOfMenu].element_word;

  const createAndAddTitle = (info: Unchangable, parentElement: HTMLElement) => {
    const title: string = info.description;
    const textNodeTitle = document.createTextNode(title);
    const spanTitle = document.createElement('span');
    spanTitle.appendChild(textNodeTitle);
    const divTitle = document.createElement('div');
    divTitle.appendChild(spanTitle);
    parentElement.appendChild(divTitle);
  };

  const addOptionsToSelectElement = (info: Unchangable, parentElement: HTMLElement) => {
    Object.keys(info).forEach((switchableOption) => {
      const option = info[switchableOption];

      const elementOption = document.createElement('option');
      elementOption.value = option;

      const textNode = document.createTextNode(option);
      elementOption.appendChild(textNode);

      parentElement.appendChild(elementOption);
    });
  };

  const descriptions = unchangableValues[elementOfMenu];

  createAndAddTitle(descriptions, controlPanel);

  addOptionsToSelectElement(descriptions.value, select);

  controlPanel.appendChild(select);

  const elementThatUserChoose = controlPanel.querySelector(`#${descriptions.element_word}`) as HTMLElement;

  elementThatUserChoose.onchange = () => {
    settings[descriptions.function_name] = (this as any).value;
    slider_refresh();
  };
});


for (const elementOfMenu in changableValues) {
  const description = changableValues[elementOfMenu];
  const textNodeTitle = document.createTextNode(description);

  const div = document.createElement('div');
  const span = document.createElement('span');
  const input = document.createElement('input');
  input.type = 'number';

  span.appendChild(textNodeTitle);
  div.appendChild(span);
  div.appendChild(input);

  div.id = `iss__${changableValues[elementOfMenu].element_word}`;

  document.getElementById(settings.settings_id).appendChild(div);

  const parent = document.getElementById(settings.settings_id);

  const elementThatUserChoose = parent.querySelector(
    `#iss__${changableValues[elementOfMenu].element_word}`,
  ) as HTMLElement;

  const f_name = changableValues[elementOfMenu].function_name;

  elementThatUserChoose.oninput = function () {
    settings[f_name] = input.value;
  };

  slider_refresh();
}

function change_string(n: string, x: string) {
  document.getElementById('settings').innerText = `${n}: ${x}`;
  slider_refresh();
}
