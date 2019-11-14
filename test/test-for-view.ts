import { View_horizontal } from '../src/ias_slider/view_horizontal';
// import { IasSlider } from '';
import { expect, assert } from 'chai';
import * as mocha from 'mocha';

import { JSDOM, FromFileOptions, DOMWindow } from 'jsdom';

describe('Тестирование View',
	() => {
		let document: any;

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

							view = new View_horizontal({
								_element_id: "ias-slider",
								_sign: "₽",
								_min_start_slider: 0,
								_max_start_slider: 1000,
								_min_slider_value: 200,
								_max_slider_value: 800,
								_slider_type: "duble",
								_step: 50,
								tooltip: "on",
								value_field_state: "on"
							} as View_horizontal);
						});

				});
				// view.create_stuff();

				it('Цель - запустить jsDOM и получить положительный результат', () => {

					assert.isOk(window.document, "window не существует");
					// assert.isOk(view.a, "window не существует");

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

							// let style = dom.window.document.createElement("link");
							// style.type = "text/css";
							// style.rel = 'stylesheet';
							// style.href = "styles.css";
							// window.document.getElementsByTagName("head")[0].appendChild(style);

							view = new View_horizontal({
								_element_id: "ias-slider",
								_sign: "₽",
								_min_start_slider: 0,
								_max_start_slider: 1000,
								_min_slider_value: 200,
								_max_slider_value: 800,
								_slider_type: "duble",
								_step: 50,
								tooltip: "on",
								value_field_state: "on"
							} as View_horizontal);
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
					let value_field = window.document.getElementById("value-field");
					assert.isOk(value_field);
				});

				it('Создание области вывода значения с левого ползунка в статичном поле', () => {
					view.create_stuff();
					let value_field = window.document.getElementById("value_field_1-field");
					assert.isOk(value_field);
				});

				it('Создание области вывода значения с правого ползунка в статичном поле ', () => {
					view.create_stuff();
					let value_field = window.document.getElementById("value_field_2-field");
					assert.isOk(value_field);
				});

				it('Создание всплывающего значения над левым ползунком', () => {
					view.create_stuff();
					let value_field = window.document.getElementById("ias-slider__duble_fly-value-1");
					assert.isOk(value_field);
				});

				it('Создание всплывающего значения над правым ползунком', () => {
					view.create_stuff();
					let value_field = window.document.getElementById("ias-slider__duble_fly-value-2");
					assert.isOk(value_field);
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

							view = new View_horizontal({
								_element_id: "ias-slider",
								_sign: "₽",
								_min_start_slider: 0,
								_max_start_slider: 1000,
								_min_slider_value: 200,
								_max_slider_value: 800,
								_slider_type: "duble",
								_step: 50,
								tooltip: "on",
								value_field_state: "on"
							} as View_horizontal);
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
					assert.isOk(view.value_field);
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
	})