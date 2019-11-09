import { View_horizontal } from '../src/ias_slider v2/view_horizontal';
// import { IasSlider } from '';
import { expect, assert } from 'chai';
import * as mocha from 'mocha';

// import tsdom from 'tsdom';
// import * as jsdom from 'mocha-jsdom';
// const jsdom = require("jsdom");
// import * as jsdom from "jsdom";
// import { JSDOM } from 'jsdom';
// mocha.setup('bdd'); // используется если запускается в браузере

import { JSDOM, FromFileOptions, DOMWindow } from 'jsdom';

// const { window } = new JSDOM('<!doctype html><html><body><div id="ias-slider"> Привет! </div></body></html>');
// const { window } = new JSDOM("./index copy 4.html");

// const { document } = (new JSDOM(`<!DOCTYPE html><html><body><div id="ias-slider"> Привет! </div></body></html>`)).window;

// 5 вариант привязать jsdom к вью
// const dom = new JSDOM(`<!DOCTYPE html><html><body><div id="ias-slider"> Привет! </div></body></html>`, { resources: "usable", runScripts: "outside-only" });

// let document = dom.window.document;

// JSDOM.env({
// 	html: "<html><body></body></html>",
// 	documentRoot: __dirname + '/js',
// 	scripts: [
// 			'index.js'
// 	]
// }, function (err, window) {
// 	console.log(window.loadFromJSDOM);
// }
// );
// Save these two objects in the global space so that libraries/tests
// can hook into them, using the above doc definition.

// const options: FromFileOptions = {
//   resources: 'usable',
//   runScripts: 'dangerously',
// };
// let view: any;
// let Document: any;
// JSDOM.fromFile('./index copy 4.html', options).then((dom) => {
// console.log(dom.window.document.body.textContent.trim());
// Document = dom.window.document;
// setTimeout(() => {
//   console.log(dom.window.document.body.textContent.trim());
// }, 5000);
// view = new View_horizontal({
// 	_element_id: "ias-slider",
// 	_sign: "₽",
// 	_min_start_slider: 0,
// 	_max_start_slider: 1000,
// 	_min_slider_value: 200,
// 	_max_slider_value: 800,
// 	_slider_type: "duble",
// 	// _type_view: "horizontal",
// 	_step: 50,
// 	tooltip: "on",
// 	value_field: "on"
// 	// settings_id: "none"
// } as View_horizontal);
// });

// interface Global extends NodeJS.Global {
//   window: Window,
//   document: Document,
//   navigator: {
//     userAgent: string
//   }
// }
// (global as Global).window = window;
// (global as Global).document = window.document;

// document = window.document;


// ЭТУ ЧАСТЬ НАДО СДЕЛАТЬ В JSDOM?
// let view = new View_horizontal({
// 	_element_id: "ias-slider",
// 	_sign: "₽",
// 	_min_start_slider: 0,
// 	_max_start_slider: 1000,
// 	_min_slider_value: 200,
// 	_max_slider_value: 800,
// 	_slider_type: "duble",
// 	// _type_view: "horizontal",
// 	_step: 50,
// 	tooltip: "on",
// 	value_field: "on"
// 	// settings_id: "none"
// } as View_horizontal);


describe('Тестирование View',
	() => {
		let document: any;
		// beforeEach(() => {
		// return JSDOM.fromFile('./index copy 4.html')
		// .then((dom) => {
		// document = dom.window.document;
		// 		view = new View_horizontal({
		// 			_element_id: "ias-slider",
		// 			_sign: "₽",
		// 			_min_start_slider: 0,
		// 			_max_start_slider: 1000,
		// 			_min_slider_value: 200,
		// 			_max_slider_value: 800,
		// 			_slider_type: "duble",
		// 			// _type_view: "horizontal",
		// 			_step: 50,
		// 			tooltip: "on",
		// 			value_field: "on"
		// 			// settings_id: "none"
		// 		} as View_horizontal);
		// });
		// });
		describe('Пробное тестирование',
			() => {
				// let document:any;
				// const { document } = (new JSDOM(`<!DOCTYPE html><html><body><div id="ias-slider"> Привет! </div></body></html>`)).window;
				let view: any;
				beforeEach(function () {
					// let options =  {resources: "usable", pretendToBeVisual: true};
					return JSDOM.fromFile('./index copy 5.html', {contentType: "text/html", resources: "usable", pretendToBeVisual: true})
						// return new JSDOM(`<!DOCTYPE html><html><body><div id="ias-slider"> Привет! </div></body></html>`)
						// const jsd = new JSDOM(`<!DOCTYPE html><html><body><div id="ias-slider"> Привет! </div></body></html>`)
						.then((dom) => {
							// let style = document.createElement("link");

							// document = dom.window.document.body;
							interface Global extends NodeJS.Global {
								window: Window,
								document: Document,
								navigator: {
									userAgent: string
								}
							}
							(global as Global).window = dom.window;
							(global as Global).document = window.document;

							let style = dom.window.document.createElement("link");
							style.type = "text/css";
							style.rel = 'stylesheet';
							style.href = "styles.css";
							window.document.getElementsByTagName("head")[0].appendChild(style);

							view = new View_horizontal({
								_element_id: "ias-slider",
								_sign: "₽",
								_min_start_slider: 0,
								_max_start_slider: 1000,
								_min_slider_value: 200,
								_max_slider_value: 800,
								_slider_type: "duble",
								// _type_view: "horizontal",
								_step: 50,
								tooltip: "on",
								value_field: "on"
								// settings_id: "none"
							} as View_horizontal);
						});
						view.create_stuff();
						// let style = window.document.createElement("link");
						// style.type = "text/css";
						// style.rel = 'stylesheet';
						// style.href = "styles.css";
						// window.document.getElementsByTagName("head")[0].appendChild(style);

				});
				//  jsdom();

				// before(function() {
				// 	return JSDOM.fromFile('../index copy 4.html')
				// 		.then((dom) => {
				// 			(global as Global).window = dom.window;
				// 			(global as Global).document = window.document;
				// 		});
				// })

				// let jsdom: JSDOM;
				// before(async function() {
				// 	jsdom = await JSDOM.fromFile("../index copy 4.html", {
				// 		resources: "usable",
				// 		runScripts: "dangerously"
				// 	});
				// 	// await new Promise(resolve =>
				// 	// 	jsdom.window.addEventListener("load", resolve)
				// 	// );
				// });

				it('Цель - запустить jsDOM и получить положительный результат', () => {

					// assert.isOk(window.document, "window не существует");
					assert.isOk(view.a, "window не существует");

				});

				it('Возвращаю из view простое значение = 5', () => {

					// assert.isOk(window.document, "window не существует");
					// assert.isOk(view.a, "window не существует");
					assert.equal(view.a, 5, "значение не найдено")

				});

				it('Проверяю работу document, запускается ли он просто так', () => {

					console.log("КОНСОЛЬ РАБОТАЕТ!!!")
					let a = window.document.getElementById("ias-slider");
					console.log("Проверяю работу DOM и jsDOM, запускаются ли они" + a);

					// let b = document.getElementById("ias-slider").textContent;
					// console.log("Проверяю работу document, запускается ли он !!:: " + b);

					assert.isOk(a);

				});

				it('Проверяю захват document изнутри класса View', () => {
					let style = window.document.createElement("link");
					style.type = "text/css";
					style.rel = 'stylesheet';
					style.href = "styles.css";
					window.document.getElementsByTagName("head")[0].appendChild(style);

					view.create_stuff();
					let parent_element = window.document.querySelector("#ias-slider") as HTMLElement;
					console.log("Верни мне HTML который у тебя внутри! Приказываю! -- " + parent_element.innerHTML);
					let parent_width = parent_element.offsetWidth// ширина родительского элемента
					console.log("Верни мне имя id родительского элемента! Приказываю! -- " + parent_element.id);
					assert.equal(parent_width, 500, "значение не найдено")

				});

			});
	})