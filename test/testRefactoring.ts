// eslint-disable-next-line no-unused-vars
import { expect, assert } from 'chai';
// eslint-disable-next-line no-unused-vars
import { it, describe, beforeEach } from 'mocha';
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line import/no-unresolved
import { JSDOM } from 'jsdom';
// eslint-disable-next-line import/no-unresolved
import { ViewHorizontal } from '../src/refactoring/ts/refactoringView';


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

    it('view.init -- запускает построение, отображение, навешивание событий', () => {
      assert.exists(view.init);
    });

    it('getStartingConditions -- отдает стартовые данные, если они есть', () => {
      assert.isOk(view.getStartingConditions);
    });

    it('setStartingConditions -- записывает данные в соответствующие переменные во view', () => {
      assert.isOk(view.setStartingConditions);
    });

    it('createDOM -- создает DOM элементы на странице браузера', () => {
      assert.isOk(view.createDOM);
    });

    it('checkParent -- проверяет наличие на странице браузера необходимого элемента для инициализации слайдера', () => {
      assert.isOk(view.checkParent);
    });

    it('createSingleDOM -- создает на странице браузера DOM для одинарного бегунка ', () => {
      assert.isOk(view.createSingleDOM);
    });


    it('createDoubleDOM -- создает на странице браузера DOM для двойного бегунка ', () => {
      assert.isOk(view.createDoubleDOM);
    });

    it('writeDOM -- запускает создание переменных в коде, в которых хранятся ссылки на элементы DOM, находящиеся на странице браузера', () => {
      assert.isOk(view.writeDOM);
    });

    it('writeSingleDOMtoVariables -- записывает переменные для одного бегунка', () => {
      assert.isOk(view.writeSingleDOMtoVariables);
    });

    it('writeSingleDOMtoVariables -- записывает переменные для двойного бегунка', () => {
      assert.isOk(view.writeDoubleDOMtoVariables);
    });

    it('checkElementsInDOM -- считает количество бегунков, и проверяет, соответствует ли это условиям в коде', () => {
      assert.isOk(view.checkElementsInDOM);
    });

    it('returnElementsFromDOM -- аргументом передается необходимый класс, возвращает массив DOM элементов', () => {
      assert.isOk(view.returnElementsFromDOM);
    });

    it('createListenerOnSlider -- создает событие нажатия кнопки мыши над бегунком', () => {
      assert.isOk(view.createListenerOnSlider);
    });

    it('createEventsOnDoubleSlider -- вызывает функцию с созданием событий на два бегунка', () => {
      assert.isOk(view.createListenerOnSlider);
    });

    it('createEventsOnSingleSlider -- вызывает функцию с созданием событий на один бегунок', () => {
      assert.isOk(view.createListenerOnSlider);
    });

    it('eventOnSlider -- создает события, реагирующие на отпускание клавиши мыши и на передвижение мыши с зажатой клавишей мыши', () => {
      assert.isOk(view.eventOnSlider);
    });

    it('moveEventWithHoldMouse -- запускает расчеты позиции мыши и количества денег', () => {
      assert.isOk(view.moveEventWithHoldMouse);
    });

    it('writeGeometryDOMtoVariables -- записывает положение шкалы слайдера отностильно страницы браузера', () => {
      assert.isOk(view.writeGeometryDOMtoVariables);
    });

    it('setDirection -- вызывает функции для записи положения шкалы слайдера в горизонтальном или вертикальном виде', () => {
      assert.isOk(view.setDirection);
    });

    it('setHorizontalDirection -- записывает положение шкалы слайдера по горизонатали', () => {
      assert.isOk(view.setHorizontalDirection);
    });

    it('setVerticalDirection -- записывает положение шкалы слайдера по вертикали', () => {
      assert.isOk(view.setVerticalDirection);
    });

    it('writeGeometryOfSlider -- записывает размеры бегунков по вертикали и горизонтали', () => {
      assert.isOk(view.writeGeometryOfSlider);
    });

    it('writeGeometryOfRibbon -- записывает переменные для цветной полоски', () => {
      assert.isOk(view.writeGeometryOfRibbon);
    });

    it('setHorizontalRibbonVariables -- задает переменные когда плагин ориентирован горизонтально', () => {
      assert.isOk(view.setHorizontalRibbonVariables);
    });

    it('writeGeometryOfRibbon -- задает переменные когда плагин ориентирован вертикально', () => {
      assert.isOk(view.setVerticalRibbonVariables);
    });

    it('calcInnerMousePosition -- вычисляет координаты мыши относительно начала координат шкалы слайдера', () => {
      assert.isOk(view.calcInnerMousePosition);
    });

    it('writeSelectedSlider -- записывает в переменную DOM-элемент, с которым в данный момент работает пользователь', () => {
      assert.isOk(view.writeSelectedSlider);
    });
  });

describe('View. Функции, отвечающие за расчёты',
  () => {
    let view: any;
    const conditions = {
      elementId: '#iss',
      sign: '₽',
      lowerScaleBound: 0,
      upperScaleBound: 1000,
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


    it('getCostForSlider(sliderPostionInPixel: number) -- принимает позицию в пикселях, вычисляет количество шагов, округляет, умножает на шаг в деньгах', () => {
      const cost = view.getCostForSlider(50);
      assert.equal(cost, 100);
    });

    it('calcPixelStep -- вычисляет шаг в пикселях', () => {
      view.sliderWidth = 500;
      view.calcPixelStep();
      assert.equal(view.pixelStep, 2.5);
    });


    it('calcNearestStep -- вычисляет  ближайший шаг на шкале, зависит от позиции мыши', () => {
      const innerMousePosition = 53;
      const nearestRoundedStep = view.calcNearestStep(innerMousePosition);

      assert.equal(nearestRoundedStep, 21);
    });

    it('calcFinalPosition -- проверить, что эта позиция возможна для этого слайдера', () => {
      const mousePosition = 53;
      const nearestRoundedStep = view.calcNearestStep(mousePosition);
      const finalPosition = view.calcFinalPosition(nearestRoundedStep);
      assert.equal(finalPosition, 52.5);
    });

    it('isInBorder -- проверяет, будет ли слайдер в пределах допустимых значений', () => {
      const sliderPosition = 100;
      view.upperRestriction = 1000;
      view.lowerRestriction = 50;
      assert.equal(view.isInBorder(sliderPosition), true);
    });

    it('calcFinalCost(finalPositionInPixel: number) -- определяет, какое значение будет возвращено - максимальное, минимальное или вычисляемое между ними', () => {
      assert.isOk(view.calcFinalCost);
    });

    it('moveSlider -- перемешает бегунок в нужную позицию', () => {
      assert.isOk(view.moveSlider);
    });

    it('showMoneyOnScreen -- заполняет соответствующее поле значением', () => {
      assert.isOk(view.showMoneyOnScreen);
    });
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

    it('Проверка writeDOM  -- записывает необходимые элементы для манипулирования в переменные класса', () => {
      view.setStartingConditions(conditions);
      view.createDOM();
      view.writeDOM();
      const ribbon = document.querySelector('.iss__color-bar');
      assert.equal(view.ribbon, ribbon);
    });
  });

describe('View. Функции, отвечающие за вывод данных на экран, за перемещение слайдера',
  () => {
    let view: any;
    const conditions = {
      elementId: '#iss',
      sign: '₽',
      lowerScaleBound: 0,
      upperScaleBound: 1000,
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
      view.init();
    });

    it('moveSlider -- перемещает слайдер на нужную позицию', () => {
      assert.isOk(view.moveSlider);
    });
  });
