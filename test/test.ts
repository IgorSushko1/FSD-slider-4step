import { View_horizontal } from '../src/ias_slider/view_horizontal';
import { Model } from '../src/ias_slider/model';
import { Controller } from '../src/ias_slider/controller';
// import { IasSlider } from '';
import { expect, assert } from 'chai';
import * as mocha from 'mocha';
import { is_slider } from "../src/ias_slider/is_slider";

import { JSDOM, FromFileOptions, DOMWindow } from 'jsdom';

describe('Тестирование View',
	() => {

		describe('Пробное тестирование',
			() => {
				let view: any;
				beforeEach(function () {

					return JSDOM.fromFile('./index.html', { runScripts: "dangerously", pretendToBeVisual: true, resources: "usable" })
						.then((dom) => {
							interface Global extends NodeJS.Global {
								window: Window,
								document: Document,
								navigator: {
									userAgent: string
								}
							}
							(global as Global).window = dom.window;
							(global as Global).document = window.document;

							// let style = dom.window.document.createElement("link");
							// style.type = "text/css";
							// style.rel = 'stylesheet';
							// style.href = "styles.css";
							// window.document.getElementsByTagName("head")[0].appendChild(style);

							view = new View_horizontal();
							view._set_for_view({
								_element_id: "ias-slider",
								_sign: "₽",
								_min_value: 0,
								_max_value: 1000,
								_min_slider_value: 200,
								_max_slider_value: 800,
								_slider_type: "duble",
								_step: 50,
								tooltip: "on",
								value_field_state: "on"
							} as View_horizontal)
						});

				});

				it('Цель - запустить jsDOM и получить положительный результат', () => {

					assert.isOk(window.document, "window не существует");

				});

				it('Возвращаю из view простое значение = 5', () => {

					assert.equal(view.a, 5, "значение не найдено")

				});

				it('Проверяю работу document, запускается ли он просто так', () => {

					let a = window.document.getElementById("ias-slider");

					assert.isOk(a);

				});

				it('Проверяю захват document изнутри класса View', () => {


					view.create_stuff();// обязательно запускать сборку плагина, иначе не работает
					let parent_element = window.document.querySelector("#ias-slider") as HTMLElement;

					// console.log("Верни мне HTML который у тебя внутри! Приказываю! -- " + parent_element.innerHTML);
					let r = window.document.getElementById("ias-slider__duble_1_horizontal").style;
					// console.log("Цвет внутри! Покажи! -- " + r.left);
					assert.isOk(parent_element, "значение не найдено")

				});

				it('Проверяю захват document изнутри класса View', () => {
					view.create_stuff();// обязательно запускать сборку плагина, иначе не работает

					let abc = window.document.getElementById("ias-slider__duble_fly-value-1").style.left;

					// let parent_element = window.document.querySelector("#ias-slider") as HTMLElement;

					// console.log("Верни мне HTML который у тебя внутри! Приказываю! -- " + parent_element.innerHTML);

					// console.log(abc);
					assert.isOk(view.a, "значение не найдено")

				});
			});
		describe('Тестирование создания элементов для работы слайдера с диапазоном значенией',
			() => {
				let view: any;
				beforeEach(function () {

					return JSDOM.fromFile('./index.html', { runScripts: "dangerously", pretendToBeVisual: true, resources: "usable" })
						.then((dom) => {
							interface Global extends NodeJS.Global {
								window: Window,
								document: Document,
								navigator: {
									userAgent: string
								}
							}
							(global as Global).window = dom.window;
							(global as Global).document = window.document;

							// view = new View_horizontal({
							// 	_element_id: "ias-slider",
							// 	_sign: "₽",
							// 	_min_value: 0,
							// 	_max_value: 1000,
							// 	_min_slider_value: 200,
							// 	_max_slider_value: 800,
							// 	_slider_type: "duble",
							// 	_step: 50,
							// 	tooltip: "on",
							// 	value_field_state: "on"
							// } as View_horizontal);
							// });
							view = new View_horizontal();
							view._set_for_view({
								_element_id: "ias-slider",
								_sign: "₽",
								_min_value: 0,
								_max_value: 1000,
								_min_slider_value: 200,
								_max_slider_value: 800,
								_slider_type: "duble",
								_step: 50,
								tooltip: "on",
								value_field_state: "on"
							} as View_horizontal)

						});
				});

				it('Создание контейнера для графического представления слайдера', () => {
					view.create_stuff();
					let slider = window.document.getElementById("ias-container");
					assert.isOk(slider);
				});

				it('Создание первого ползунка', () => {
					view.create_stuff();
					let slider_1 = window.document.getElementById("ias-slider__duble_1_horizontal");
					assert.isOk(slider_1);
				});

				it('Создание второго ползунка', () => {
					view.create_stuff();
					let slider_2 = window.document.getElementById("ias-slider__duble_2_horizontal");
					assert.isOk(slider_2);
				});

				it('Создание цветной полоски между ползунками', () => {
					view.create_stuff();
					let ribon = window.document.getElementById("color-bar_horizontal");
					assert.isOk(ribon);
				});

				it('Создание статичного поля для вывода значений', () => {
					view.create_stuff();
					let value_field_state = window.document.getElementById("value-field");
					assert.isOk(value_field_state);
				});

				it('Создание области вывода значения с левого ползунка в статичном поле', () => {
					view.create_stuff();
					let value_field_state = window.document.getElementById("value_field_1-field");
					assert.isOk(value_field_state);
				});

				it('Создание области вывода значения с правого ползунка в статичном поле ', () => {
					view.create_stuff();
					let value_field_state = window.document.getElementById("value_field_2-field");
					assert.isOk(value_field_state);
				});

				it('Создание всплывающего значения над левым ползунком', () => {
					view.create_stuff();
					let value_field_state = window.document.getElementById("ias-slider__duble_fly-value-1");
					assert.isOk(value_field_state);
				});

				it('Создание всплывающего значения над правым ползунком', () => {
					view.create_stuff();
					let value_field_state = window.document.getElementById("ias-slider__duble_fly-value-2");
					assert.isOk(value_field_state);
				});
			});
		describe('Тестирование доступных переменных "this._" во View, которые нужны для обращения к элементам DOM внутри функций',
			() => {
				let view: any;
				beforeEach(function () {

					return JSDOM.fromFile('./index.html', { runScripts: "dangerously", pretendToBeVisual: true, resources: "usable" })
						.then((dom) => {
							interface Global extends NodeJS.Global {
								window: Window,
								document: Document,
								navigator: {
									userAgent: string
								}
							}
							(global as Global).window = dom.window;
							(global as Global).document = window.document;

							// view = new View_horizontal({
							// 	_element_id: "ias-slider",
							// 	_sign: "₽",
							// 	_min_value: 0,
							// 	_max_value: 1000,
							// 	_min_slider_value: 200,
							// 	_max_slider_value: 800,
							// 	_slider_type: "duble",
							// 	_step: 50,
							// 	tooltip: "on",
							// 	value_field_state: "on"
							// } as View_horizontal);
							view = new View_horizontal();
							view._set_for_view({
								_element_id: "ias-slider",
								_sign: "₽",
								_min_value: 0,
								_max_value: 1000,
								_min_slider_value: 200,
								_max_slider_value: 800,
								_slider_type: "duble",
								_step: 50,
								tooltip: "on",
								value_field_state: "on"
							} as View_horizontal)
						});
				});
				it('Наличие функции создания this - элементов', () => {
					view.create_stuff();
					// console.log(view.parent_element);// если пустой то вернет undifined
					assert.isOk(view.create_this_sliders_elements);
				});
				it('Наличие переменной для обращения к родительскому элементу', () => {
					view.create_stuff();
					// console.log(view.parent_element);// если пустой то вернет undifined
					assert.isOk(view.parent_element);
				});
				it('Наличие переменной для обращения к элементу, объединяющему элементы статичного отображения', () => {
					view.create_stuff();
					// console.log(view.parent_element);// если пустой то вернет undifined
					assert.isOk(view.value_field_state);
				});
				it('Наличие переменной для обращения к статичному элементу вывода результатов первого элемента', () => {
					view.create_stuff();
					// console.log(view.parent_element);// если пустой то вернет undifined
					if (view._slider_type == "duble") {
						assert.isOk(view.value_field_1);
					} else {
						assert.isOk(view.value_field_single_static);
					};
				});
				it('Наличие переменной для обращения к статичному элементу вывода результатов второго элемента', () => {
					view.create_stuff();
					// console.log(view.parent_element);// если пустой то вернет undifined
					if (view._slider_type == "duble") {
						assert.isOk(view.value_field_2);
					} else {
						assert.isOk(view.value_field_single_static);
					};
				});
				it('Наличие переменной для обращения к всплывающей подсказке первого слайдера', () => {
					view.create_stuff();
					// console.log(view.parent_element);// если пустой то вернет undifined
					if (view._slider_type == "duble") {
						assert.isOk(view.value_field_1_fly);
					} else {
						assert.isOk(view.value_field_single);
					};
				});
				it('Наличие переменной для обращения к всплывающей подсказке второго слайдера', () => {
					view.create_stuff();
					// console.log(view.parent_element);// если пустой то вернет undifined
					if (view._slider_type == "duble") {
						assert.isOk(view.value_field_2_fly);
					} else {
						assert.isOk(view.value_field_single);
					};
				});
				it('Наличие переменной для обращения к первому слайдеру', () => {
					view.create_stuff();
					// console.log(view.parent_element);// если пустой то вернет undifined
					if (view._slider_type == "duble") {
						assert.isOk(view.slider_1);
					} else {
						assert.isOk(view.slider_single);
					};
				});
				it('Наличие переменной для обращения ко второму слайдеру', () => {
					view.create_stuff();
					// console.log(view.parent_element);// если пустой то вернет undifined
					if (view._slider_type == "duble") {
						assert.isOk(view.slider_2);
					} else {
						assert.isOk(view.slider_single);
					};
				});
			});

		describe('Проверка работы сборки плагина',
			() => {
				let view: any;
				beforeEach(function () {

					JSDOM.fromFile('./index.html', {
						// resources: 'usable',
					})
						.then((dom) => {
							const { window } = dom;
							// const document = window.document;
							// window.document.getElementById("ias-slider").style.width = "500px";// не работает , не переписывает
							window.onload = () => {
								is_slider("ias-slider", "doc_panel")
							};
						});
				});
				it('Есть ли родительский элемент на странице', () => {

					assert.isOk(window.document.getElementById("ias-slider__duble_2_horizontal"));
				});

				it('Есть ли другие элементы на странице', () => {
					assert.isOk(window.document.getElementById("ias-slider__duble_1_horizontal"));
				})

			});
	});

// ПОДВОДЯ ИТОГ ВСЕХ ЭТИХ КОНСОЛЕЙ ВНИЗУ:

//ШИРИНА ЗАДАЁТСЯ, ЭЛЕМЕНТЫ СОЗДАЮТСЯ НО Я НЕ МОГУ ПРИСВОИТЬ ИМ НЕОБХОДИМЫЕ СВОЙСТВА
// ПОТОМУ ЧТО, СКОРЕЕ ВСЕГО, В NODEJS НЕТ ТАКОГО ИНТСРУМЕНТА КАК LEFT? МОГУ ПРОВЕРИТЬ ТОЛЬКО ВЫПОЛНЕНИЕ 
// ИНИЦИАЛИЗАЦИИ ВСЕХ 'this' во вью

// console.log(window.getComputedStyle(window.document.getElementById("ias-slider")).width);// если пустой то вернет undifined
// console.log(window.getComputedStyle(window.document.getElementById("ias-slider__duble_1_horizontal")).left);// 0PX НЕ ВНЕСЕНЫ НОВЫЕ ДАННЫЕ
// console.log(window.getComputedStyle(window.document.getElementById("ias-slider__duble_2_horizontal")));
// console.log(window.document.getElementById("ias-slider__duble_2_horizontal").style.background);

describe('Тестирование Controller', () => {

	let view: any;
	beforeEach(function () {

		JSDOM.fromFile('./index.html', { runScripts: "dangerously", pretendToBeVisual: true, resources: "usable" })
			.then((dom) => {

			const	{ window } = dom;

				view = new View_horizontal();
			});
	});

	let settings_for_model: any = {
		_sign: "₽",
		_min_value: 0,
		_max_value: 1000,
		_min_slider_value: 300,
		_max_slider_value: 900
	};
	let model = new Model(settings_for_model);

	let controller = new Controller(view, model, {
		_element_id: "ias-slider",
		_slider_type: "duble",
		_step: 50,
		tooltip: "on",
		value_field_state: "on"
	});



	it('_1_ Проверка контроллера', () => {
		assert.isOk(controller)
	});

	it('_2_ Проверка наличия метода _get_model', () => {
		assert.isOk(controller._get_model)
	});

	it('_3_ Проверка _get_model -- должен вернуть объект с данными, равными данным объекта полученным из модели', () => {
		assert.deepEqual(controller._get_model(), settings_for_model)
	});

	it('_4_ Проверка наличия метода _get_view', () => {
		assert.isOk(controller._get_view)
	});

	it('_5_ Проверка _get_view -- вызывается из вида, получает объект, кносит изменения в информацию контроллера', () => {
		controller._get_view({
			_min_slider_value: 100,
			_max_slider_value: 700
		});
		assert.deepEqual({ _min_slider_value: controller._min_slider_value, _max_slider_value: controller._max_slider_value }, {
			_min_slider_value: 100,
			_max_slider_value: 700
		});

	});

	it('_6_ Проверка наличия метода _set_model', () => {

		assert.isOk(controller._set_model)
	});

	it('_7_ Проверка _set_model -- работает ли настройка-передача даных из Controller в Model ', () => {
		controller._set_model();
		assert.deepEqual({ _min_slider_value: model._min_slider_value, _max_slider_value: model._max_slider_value }, {
			_min_slider_value: 100,
			_max_slider_value: 700
		});
	});

	it('_8_ Проверка наличия метода _set_view', () => {
		assert.isOk(controller._set_view)
	});

	it('_9_ ?????? Проверка _set_for_view -- работает ли настройка-передача даных из Controller во View ', () => {
		// controller.create_slider();
		controller._set_controller();
		view._set_for_view({
			_element_id: controller._element_id,
			_sign: controller._sign,
			_min_value: controller._min_value,
			_max_value: controller._max_value,
			_min_slider_value: controller._min_slider_value,
			_max_slider_value: controller._max_slider_value,
			_slider_type: controller._slider_type,
			_step: controller._step,
			tooltip: controller.tooltip,
			value_field_state: controller.value_field_state
		})
		// console.log(view);
		// console.log(controller._get_controller());
		// console.log(view._get_view());
		assert.deepEqual(controller._get_controller(), view._get_view())
	});

	it('_10_ Проверка _get_controller() - возвращает объект с данными, которые были переданы для построения слайдера', () => {
		assert.isOk(controller._get_controller())
	});


	it('_1_ Проверка работы _set_controller() - получает данные из модели, добавляет эти данные в свои свойства', () => {
		controller._set_controller()
		assert.include(controller._get_controller(), {
			_sign: "₽",
			_min_value: 0,
			_max_value: 1000,
			_min_slider_value: 100,
			_max_slider_value: 700,
			_element_id: "ias-slider",
			_slider_type: "duble",
			_step: 50,
			tooltip: "on",
			value_field_state: "on"
		})
	});

	it('_1_ Проверка наличия метода create_slider', () => {
		assert.isOk(controller.create_slider)
	});

});

describe('Тестирование Model', () => {
	let settings: any = {
		_sign: "₽",
		_min_value: 0,
		_max_value: 1000,
		_min_slider_value: 200,
		_max_slider_value: 800
	}

	let model = new Model(settings);

	it('Проверка модели', () => {
		assert.isOk(model)
	});

	it('Проверка наличия метода _get_model', () => {
		assert.isOk(model._get_model)
	});

	it('Проверка наличия метода _set_model', () => {
		assert.isOk(model._set_model)
	});

	it('Проверка _get_model, должна вернуть массив с данными, которые равны переданному массиву при инициализации', () => {
		assert.deepEqual(model._get_model(), settings)
	});

	it('Проверка _set_model, в модели должны измениться данные на те, что переданы контроллером из вида', () => {
		model._set_model({
			_min_slider_value: 300,
			_max_slider_value: 900
		});
		assert.include(model._get_model(), {
			_min_slider_value: 300,
			_max_slider_value: 900
		})
	});

})