// eslint-disable-next-line no-unused-vars
import { expect, assert } from 'chai';
// eslint-disable-next-line no-unused-vars
import { it, describe, beforeEach } from 'mocha';
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line import/no-unresolved
import { JSDOM } from 'jsdom';
import ViewHorizontal from '../src/is_slider/viewRefactoring';


describe('View, проверка наличия функций, необходимых для работы слайдера',
  () => {
    let view: any;
    // const obj = {
    //   elementId: 'iss',
    //   sign: '₽',
    //   lowerScaleBound: 0,
    //   upperScaleBound: 1200,
    //   lowerSliderValue: 200,
    //   upperSliderValue: 1000,
    //   sliderType: 'double',
    //   step: 5,
    //   tooltip: 'on',
    //   valueStateField: 'on',
    // };
    beforeEach(async () => {
      const dom = await JSDOM.fromFile('./index.html', { runScripts: 'dangerously', pretendToBeVisual: true, resources: 'usable' });
      interface Global extends NodeJS.Global {
        window: Window;
        document: Document;
        navigator: {
          userAgent: string;
        };
      }
      (global as Global).window = dom.window;
      (global as Global).document = window.document;
      view = new ViewHorizontal();
    });

    it('Функция, запускающая работу вью - его построение, отображение, навешивание событий', () => {
      assert.exists(view.init);
    });

    it('Команда, принимающая отдающая стартовые данные, для проверки', () => {
      assert.isOk(view.getStartingConditions);
    });

    it('Команда, записывающая каждую полученную единицу данных в соответствующую переменную view', () => {
      assert.isOk(view.setStartingConditions);
    });

    it('Функция, которая создает DOM элементы в переменной', () => {
      assert.isOk(view.createDOM);
    });

    it('Функция, которая проверяет наличие на странице необходимого элемента для инициализации слайдера', () => {
      assert.isOk(view.checkParent);
    });

    it('Функция, которая создает DOM с одним бегунком', () => {
      assert.isOk(view.createSingleDOM);
    });


    it('Функция, которая создает DOM с несколькими бегунками', () => {
      assert.isOk(view.createDoubleDOM);
    });

    it('writeDOM -- определяет какие переменные записать', () => {
      assert.isOk(view.writeDOM);
    });

    it('writeSingleDOMtoVariables -- записывает переменные для одного бегунка', () => {
      assert.isOk(view.writeSingleDOMtoVariables);
    });

    it('writeSingleDOMtoVariables -- записывает переменные для двойного бегунка', () => {
      assert.isOk(view.writeDoubleDOMtoVariables);
    });

    it('Функция, которая считает количество слайдеров', () => {
      assert.isOk(view.checkElementsInDOM);
    });

    it('Функция, которая находит в DOM дереве элементы с нужным классом, и возвращает их в массиве', () => {
      assert.isOk(view.returnElementsFromDOM);
    });

    it('Функция, навешивающая событие на бегунок при нажатии на него', () => {
      assert.isOk(view.createListenerOnSlider);
    });

    it('Функция, которая проверяет что слайдер двойной', () => {
      assert.isOk(view.createListenerOnSlider);
    });

    it('Функция, навешивающая событие на бегунок при нажатии на него', () => {
      assert.isOk(view.eventOnSlider);
    });

    it('Функция, навешивающая событие на бегунок при перемещении мыши с зажатой клавишей над бегунком', () => {
      assert.isOk(view.moveEventWithHoldSlider);
    });

    it('writeGeometryDOMtoVariables -- записывает положение слайдера на странице', () => {
      assert.isOk(view.writeGeometryDOMtoVariables);
    });

    it('setDirection -- вызывает функции для создания переменных в горизонтальном или вертикальном виде', () => {
      assert.isOk(view.setDirection);
    });

    it('setHorizontalDirection -- задает главную ось по горизонатали', () => {
      assert.isOk(view.setHorizontalDirection);
    });

    it('setVerticalDirection -- задает главную ось по вертикали', () => {
      assert.isOk(view.setVerticalDirection);
    });

    it('writeGeometryOfSlider -- задает переменные бегунка', () => {
      assert.isOk(view.writeGeometryOfSlider);
    });

    it('writeGeometryOfRibbon -- задает переменные для цветной полоски', () => {
      assert.isOk(view.writeGeometryOfRibbon);
    });

    it('setHorizontalRibbonVariables -- задает переменные когда плагин ориентирован горизонтально', () => {
      assert.isOk(view.setHorizontalRibbonVariables);
    });

    it('writeGeometryOfRibbon -- задает переменные когда плагин ориентирован вертикально', () => {
      assert.isOk(view.setVerticalRibbonVariables);
    });








    it('Функция, которая вычисляет координаты мыши', () => {
      assert.isOk(view.calcMousePosition);
    });

    it('Функция, которая перезаписывает переменную значением того DOM-элемента, с которым в данный момент работает пользователь', () => {
      assert.isOk(view.writeSelectedSlider);
    });

    it('Функция, которая затирает переменную, содержащую ссылку на тот бегунок, с которым работал пользователь', () => {
      assert.isOk(view.clearSelectedSlider);
    });

    it('Функция, которая вычисляет шаг в деньгах', () => {
      assert.isOk(view.calcMoneyStep);
    });

    it('Функция, которая вычисляет шаг в количестве товара', () => {
      assert.isOk(view.calcProductStep);
    });

    it('Функция, которая вычисляет шаг в единицах', () => {
      assert.isOk(view.calcPixelStep);
    });

    it('Функция, которая помещает значения в поле для отображения выбранных границ денег/товара', () => {
      assert.isOk(view.showMoneyOnScreen);
    });

    it('Функция, которая разрешает или не разрешает перемещение слайдера на данную позицию за мышкой', () => {
      assert.isOk(view.canMoveToPosition);
    });

    it('Функция, которая вычисляет позицию для слайдера в зависимости от координат мыши', () => {
      assert.isOk(view.calcSliderPosition);
    });

    it('Функция, которая записывает координаты мыши в переменную', () => {
      assert.isOk(view.getMouseCoordinates);
    });

    it('Функция, которая перемещает бегунок', () => {
      assert.isOk(view.moveSlider);
    });

    it('Функция, которая вычисляет значения в пикселях при использовании шагов и создает переменную с массивом этих данных', () => {
      assert.isOk(view.calcStepsArray);
    });

    it('Функция, которая вычисляет ближайший шаг в зависимости от координаты мыши', () => {
      assert.isOk(view.calcStepNumberNearMouse);
    });

    it('Функция, которая вычисляет положение плагина в пикселях', () => {
      assert.isOk(view.calcPluginPosition);
    });

    it('Функция, сравнение положения мыши и граничных значений шкалы плагина в пикселях', () => {
      assert.isOk(view.calcCrossedBound);
    });

    it('Функция, которая перемещает полоску за бегунком', () => {
      assert.isOk(view.moveRibon);
    });

    it('Функция, которая находит количество бегунков', () => {
      assert.isOk(view.findSliderNumber);
    });

    it('Функция, которая сохраняет в переменную ссылку на первый и последний бегунок', () => {
      assert.isOk(view.findAndSafeSliderExtremum);
    });

    it('Функция, которая записывает положение статичного бегунка в переменную', () => {
      // assert.isOk(view.);
    });

    it('Функция, которая определяет, с каким бегунком в данный момент работает пользователь', () => {
      // assert.isOk(view.);
    });

    // it('', () => {
    //   assert.isOk(view.);
    // });

    // it('', () => {
    //   assert.isOk(view.);
    // });

    // it('', () => {
    //   assert.isOk(view.);
    // });

    // it('', () => {
    //   assert.isOk(view.);
    // });
  });

describe('View, Проверка на правильность приёма параметров классом, построение DOM, подсчет DOM, привязка DOM-элементов к переменным',
  () => {
    let view: any;
    const conditions = {
      elementId: '#iss',
      sign: '₽',
      lowerScaleBound: 0,
      upperScaleBound: 1200,
      lowerSliderValue: 200,
      upperSliderValue: 1000,
      sliderType: 'double',
      step: 5,
      tooltip: 'on',
      valueStateField: 'on',
    };

    const singleDOM = '<div id="iss_value-field">'
      + '<span id="flyFieldSingle"></span>'
      + '</div>'
      + '<div id= "iss-container">'
      + '<div id="iss__color-bar_horizontal"></div>'
      + '<div id="iss__single_fly-value" class="iss_tooltip"></div>'
      + '<div id="iss__single" class="iss_drag"></div>'
      + '</div>';

    const DoubleDOM = '<div id="iss_value-field">'
      + '<span id="iss_staticFieldLowerBound-field"></span>'
      + '-'
      + '<span id="iss_staticFieldUpperBound-field"></span>'
      + '</div>'
      + '<div id= "iss-container">'
      + '<div id="iss__double_fly-value-1"  class="iss_tooltip"></div>'
      + '<div id="iss__double_1_horizontal" class="iss_drag"></div>'
      + '<div id="iss__double_fly-value-2" class="iss_tooltip"></div>'
      + '<div id="iss__double_2_horizontal" class="iss_drag"></div>'
      + '<div id="iss__color-bar_horizontal"></div>'
      + '</div>';

    beforeEach(async () => {
      const dom = await JSDOM.fromFile('./index.html', { runScripts: 'dangerously', pretendToBeVisual: true, resources: 'usable' });
      interface Global extends NodeJS.Global {
        window: Window;
        document: Document;
        navigator: {
          userAgent: string;
        };
      }
      (global as Global).window = dom.window;
      (global as Global).document = window.document;
      view = new ViewHorizontal();
    });

    it('Проверка правильности передачи и приёма начальных данных для построения', () => {
      view.setStartingConditions(conditions);
      assert.deepEqual(conditions, view.getStartingConditions());
    });

    it('Проверка выбора DOM-элемента, нужного для инициализации плагина', () => {
      view.setStartingConditions(conditions);
      const parentElement = document.querySelector('#iss');
      assert.equal(parentElement, view.elem);
    });

    it('Проверка добавления в DOM новых элементов слайдера с одинарным бегунком', () => {
      view.setStartingConditions(conditions);
      view.createSingleDOM();
      const divElement = document.querySelector('.iss__single');
      assert.isOk(divElement);
    });

    it('Проверка добавления в DOM новых элементов слайдера с двойным бегунком', () => {
      view.setStartingConditions(conditions);
      view.createDoubleDOM();
      const divElement = document.querySelector('.iss__double_1_horizontal');
      assert.isOk(divElement);
    });


    it('Проверка createDOM -- добавления в DOM новых элементов слайдера в зависимости от параметра sliderType', () => {
      view.setStartingConditions(conditions);
      view.createDOM();
      const spanElement = document.querySelector('.iss_staticField');
      assert.isOk(spanElement);
    });

    it('Проверка checkElementsInDOM -- должен вернуть массив длинной 2, функция проверяет есть ли элементы бегунков на странице', () => {
      view.setStartingConditions(conditions);
      view.createDOM();
      const arrayDOMElements = view.checkElementsInDOM();
      assert.equal(arrayDOMElements.length, 2);
    });

    it('Проверка returnElementsFromDOM -- возвращает массив из элементов по указанному в атрибуте селектору элемента', () => {
      view.setStartingConditions(conditions);
      view.createDOM();
      const arrayDOMElements = view.returnElementsFromDOM('.iss__tooltip', 2);
      assert.equal(arrayDOMElements.length, 2);
    });

    it('Проверка writeVariablesFromDOM  -- записывает необходимые элементы для манипулирования в переменные класса', () => {
      view.setStartingConditions(conditions);
      view.createDOM();
      view.writeVariablesFromDOM();
      const ribbon = document.querySelector('.iss__color-bar');
      assert.equal(view.ribbon, ribbon);
    });
  });

describe('View, Проверка функций, отвечающих за вычисления шагов, перемещения бегунков, вычисления допустимости перемещения',
  () => {
    let view: any;
    const conditions = {
      elementId: '#iss',
      sign: '₽',
      lowerScaleBound: 0,
      upperScaleBound: 1200,
      lowerSliderValue: 200,
      upperSliderValue: 1000,
      sliderType: 'double',
      step: 5,
      tooltip: 'on',
      valueStateField: 'on',
    };

    beforeEach(async () => {
      const dom = await JSDOM.fromFile('./index.html', { runScripts: 'dangerously', pretendToBeVisual: true, resources: 'usable' });
      interface Global extends NodeJS.Global {
        window: Window;
        document: Document;
        navigator: {
          userAgent: string;
        };
      }
      (global as Global).window = dom.window;
      (global as Global).document = window.document;
      view = new ViewHorizontal();
      view.setStartingConditions(conditions);
      view.createDOM();
    });

    it('', () => {
      assert.deepEqual(conditions, view.getStartingConditions());
    });
  });
