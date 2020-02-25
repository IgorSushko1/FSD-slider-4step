
import { expect, assert } from 'chai';

import { it, describe, beforeEach } from 'mocha';

import { JSDOM } from 'jsdom';

import { View } from '../ts/View';

import { Model } from '../ts/model';

describe('View, проверка наличия функций, необходимых для работы слайдера',
  () => {
    let view: any;
    const conditions = {
      elementId: 'iss',
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
      const dom = await JSDOM.fromFile('index.html', { runScripts: 'dangerously', pretendToBeVisual: true, resources: 'usable' });
      interface Global extends NodeJS.Global {
        window: Window;
        document: Document;
        navigator: {
          userAgent: string;
        };
      }
      (global as Global).window = dom.window;
      (global as Global).document = window.document;
      view = new View();
      view.setStartingConditions(conditions);
      view.init();
    });

    it('view.init -- запускает построение, отображение, навешивание событий', () => {
      assert.isOk(view.init);
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

    it('writeGeometryOfSlider -- записывает размеры бегунков по вертикали и горизонтали', () => {
      assert.isOk(view.writeGeometryOfSlider);
    });

    it('Тест на то, что DOM не работает со style', () => {
      const tooltip: HTMLElement = document.querySelector('.iss__tooltip');
      tooltip.style.left = '100px';
      assert.equal(tooltip.offsetLeft, 100);
    });
  });

describe('View. Функции, отвечающие за расчёты',
  () => {
    let view: any;
    const conditions = {
      elementId: 'iss',
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
      const dom = await JSDOM.fromFile('index.html', { runScripts: 'dangerously', pretendToBeVisual: true, resources: 'usable' });
      interface Global extends NodeJS.Global {
        window: Window;
        document: Document;
        navigator: {
          userAgent: string;
        };
      }
      (global as Global).window = dom.window;
      (global as Global).document = window.document;
      view = new View();
      view.setStartingConditions(conditions);
      view.init();
    });

    it('getCostForSlider(sliderPostionInPixel: number) -- принимает позицию в пикселях, вычисляет количество шагов, округляет, умножает на шаг в деньгах', () => {
      view.pixelStep = 2.5;
      const cost = view.getCostForSlider(50);
      assert.equal(cost, 100);
    });

    it('calcPixelStep -- вычисляет шаг в пикселях', () => {
      view.mainAxisSize = 500;
      view.calcPixelStep();
      assert.equal(view.pixelStep, 2.5);
    });

    it('calcNearestStep -- вычисляет  ближайший шаг на шкале, зависит от позиции мыши', () => {
      view.mainAxisSize = 500;
      view.calcPixelStep();
      const nearestRoundedStep = view.calcNearestStep(53);
      assert.equal(nearestRoundedStep, 21);
    });

    it('calcFinalPosition -- проверить, что эта позиция возможна для этого слайдера', () => {
      view.mainAxisSize = 500;
      view.calcPixelStep();
      const nearestRoundedStep = view.calcNearestStep(53);
      view.lowerRestriction = 0;
      view.upperRestriction = 1000;
      const finalPosition = view.calcFinalPosition(nearestRoundedStep);
      assert.equal(finalPosition, 52.5);
    });

    it('isPixelsInBorder -- проверяет, будет ли слайдер в пределах допустимых значений', () => {
      const sliderPosition = 100;
      view.upperRestriction = 1000;
      view.lowerRestriction = 50;
      assert.equal(view.isPixelsInBorder(sliderPosition), true);
    });

    it('moveSlider -- перемешает бегунок в нужную позицию/ WARNING!!! функция не работает из-за DOM который не может правильно построить перемещения', () => {
      view.targetSlider = view.lowerSlider;
      view.moveSlider(500);
      const leftMesure = view.targetSlider.offsetLeft;
      assert.equal(leftMesure, 500);
    });

    it('showMoneyOnScreen -- заполняет соответствующее поле значением', () => {
      assert.isOk(view.showMoneyOnScreen);
    });

    it(`мне нужен расчет денег для вертикального случая, если ползунок находится в самом верху
    то это значит, что у него максимальное значение, если ползунок находится в центре то мне надо взять
    его позицию и посчитать шаги от низа, т.е. низ - позиция бегунка = расстояние для подсчета шага
    после того как есть расстояние считается количество шагов
    после того как есть количество шагов в пикселях делается округление и и умножается на шаг в деньгах
    это будет значение которое необходимо поместить в поля для вывода денежных значений`, () => {
    });

    it('calcFinalCost(finalPositionInPixel: number) -- определяет, какое значение будет возвращено - максимальное, минимальное или вычисляемое между ними', () => {

      assert.isOk(view.calcFinalCost);
    });

  });

describe('View, Проверка на правильность приёма параметров классом, построение DOM, подсчет DOM, привязка DOM-элементов к переменным',
  () => {
    let view: any;
    const conditions = {
      elementId: 'iss',
      sign: '₽',
      lowerScaleBound: 0,
      upperScaleBound: 1200,
      lowerSliderValue: 200,
      upperSliderValue: 1000,
      sliderType: 'double',
      step: 5,
    };

    beforeEach(async () => {
      const dom = await JSDOM.fromFile('index.html', { runScripts: 'dangerously', pretendToBeVisual: true, resources: 'usable' });
      interface Global extends NodeJS.Global {
        window: Window;
        document: Document;
        navigator: {
          userAgent: string;
        };
      }
      (global as Global).window = dom.window;
      (global as Global).document = window.document;
      view = new View();
      view.setStartingConditions(conditions);
      view.init();
    });

    it('Проверка правильности передачи и приёма начальных данных для построения', () => {
      assert.deepEqual({
        elementId: '#iss',
        sign: '₽',
        lowerScaleBound: 0,
        upperScaleBound: 1200,
        lowerSliderValue: 200,
        upperSliderValue: 1000,
        sliderType: 'double',
        step: 5,
      }, view.getStartingConditions());
    });

    it('Проверка выбора DOM-элемента, нужного для инициализации плагина', () => {
      const parentElement = document.querySelector('#iss');
      assert.equal(parentElement, view.elem);
    });

    it('Проверка добавления в DOM новых элементов слайдера с одинарным бегунком', () => {
      view.createSingleDOM();
      const divElement = document.querySelector('.iss__single');
      assert.isOk(divElement);
    });

    it('Проверка добавления в DOM новых элементов слайдера с двойным бегунком', () => {
      view.createDoubleDOM();
      const divElement = document.querySelector('.iss__double_1_horizontal');
      assert.isOk(divElement);
    });

    it('Проверка createDOM -- добавления в DOM новых элементов слайдера в зависимости от параметра sliderType', () => {
      const spanElement = document.querySelector('.iss__staticField');
      assert.isOk(spanElement);
    });

    it('Проверка checkElementsInDOM -- должен записать в переменную массив из HTMLElements', () => {
      assert.equal(view.sliderInDOM.length, 2);
    });

    it('Проверка returnElementsFromDOM -- возвращает массив из элементов по указанному в атрибуте селектору элемента', () => {
      const arrayDOMElements = view.returnElementsFromDOM('.iss__tooltip', 2);
      assert.equal(arrayDOMElements.length, 2);
    });

    it('Проверка writeDOM  -- записывает необходимые элементы для манипулирования в переменные класса', () => {
      const ribbon = document.querySelector('.iss__color-bar');
      assert.equal(view.ribbon, ribbon);
    });
  });

describe('Model, Проверка на правильность приёма и передачи параметров',
  () => {
    const conditions = {
      sign: '₽',
      lowerScaleBound: 0,
      upperScaleBound: 1200,
      lowerSliderValue: 200,
      upperSliderValue: 1000,
    };
    const model = new Model(conditions);

    it('setModel -- получает изменения, произошедшие в переменных', () => {
      const newValues = {
        lowerSliderValue: 400,
        upperSliderValue: 800,
      };
      model.setModel(newValues);
      const check = {
        lowerSliderValue: model.lowerSliderValue,
        upperSliderValue: model.upperSliderValue,
      };
      assert.deepEqual(check, newValues);
    });
  });
