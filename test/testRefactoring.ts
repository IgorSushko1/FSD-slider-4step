// eslint-disable-next-line no-unused-vars
import { expect, assert } from 'chai';
// eslint-disable-next-line no-unused-vars
import { it, describe, beforeEach } from 'mocha';
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line import/no-unresolved
import { JSDOM } from 'jsdom';
import ViewHorizontal from '../src/is_slider/viewRefactoring';


describe('Тестирование View, проверка наличия функций, необходимых для работы слайдера',
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
      assert.isOk(view.createDubleDOM);
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
