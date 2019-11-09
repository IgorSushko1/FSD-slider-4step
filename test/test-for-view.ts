import { View_horizontal } from '../src/ias_slider v2/view_horizontal';
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

					return JSDOM.fromFile('./index copy 5.html', {contentType: "text/html", resources: "usable", pretendToBeVisual: true})
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
								value_field: "on"
							} as View_horizontal);
						});

				});

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

					assert.isOk(parent_element, "значение не найдено")

				});

			});
	})