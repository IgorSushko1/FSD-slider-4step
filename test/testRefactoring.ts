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
      assert.isOk(view.getStartingConditions());
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

    it('Функция, которая проверяет созание DOM с одним бегунком', () => {
      assert.isOk(view.createSingleDOM);
    });

    it('Функция, которая создает DOM с несколькими бегунками', () => {
      assert.isOk(view.createDoubleDOM);
    });

    it('Функция, которая создает переменные для обращения к элементам', () => {
      assert.isOk(view.writedVariablesFromDOM);
    });

    it('Функция, которая считает количество слайдеров', () => {
      assert.isOk(view.checksSlidersInDOM);
    });

    it('Функция, которая проверяет сколько бегунков в слайдере', () => {
      assert.isOk(view.writeSliderVariables);
    });

    it('Функция, навешивающая событие на бегунок при нажатии на него', () => {
      // const html = '<div class= "a"></div>' as unknown as HTMLElement;
      assert.isOk(view.createListenerOnSlider);
    });

    it('Функция, навешивающая событие на бегунок при нажатии на него', () => {
      assert.isOk(view.eventOnSlider);
    });

    it('Функция, навешивающая событие на бегунок при перемещении мыши с зажатой клавишей над бегунком', () => {
      assert.isOk(view.moveEventWithHoldSlider);
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

    it('Функция, сравнение положения мыши и граничных значений слайдера в пикселях', () => {
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

    it('Функция, которая вычисляет положение слайдера в пикселях', () => {
      assert.isOk(view.calcPluginPosition);
    });

    it('Функция, которая переопределяет направление вычислений в зависимости от того, горизонтальный или вертикальный вид', () => {
      assert.isOk(view.setDirection);
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

    // it('', () => {
    //   assert.isOk(view.);
    // });

    // it('', () => {
    //   assert.isOk(view.);
    // });
  });

describe('View, Проверка на правильность приёма параметров классом, построение DOM',
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
      const spanElement = document.querySelector('.iss_staticFieldLowerBound-field');
      assert.isOk(spanElement);
    });
  });
