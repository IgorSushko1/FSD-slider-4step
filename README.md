# IAS-slider.

# Навигация:
- [IAS-slider.](#ias-slider)
- [Навигация:](#%d0%9d%d0%b0%d0%b2%d0%b8%d0%b3%d0%b0%d1%86%d0%b8%d1%8f)
	- [Achievement](#achievement)
	- [В проекте используются:](#%d0%92-%d0%bf%d1%80%d0%be%d0%b5%d0%ba%d1%82%d0%b5-%d0%b8%d1%81%d0%bf%d0%be%d0%bb%d1%8c%d0%b7%d1%83%d1%8e%d1%82%d1%81%d1%8f)
	- [Описание архитектуры](#%d0%9e%d0%bf%d0%b8%d1%81%d0%b0%d0%bd%d0%b8%d0%b5-%d0%b0%d1%80%d1%85%d0%b8%d1%82%d0%b5%d0%ba%d1%82%d1%83%d1%80%d1%8b)
	- [Модель](#%d0%9c%d0%be%d0%b4%d0%b5%d0%bb%d1%8c)
	- [Контролёр](#%d0%9a%d0%be%d0%bd%d1%82%d1%80%d0%be%d0%bb%d1%91%d1%80)
	- [Вид](#%d0%92%d0%b8%d0%b4)
		- [Описание](#%d0%9e%d0%bf%d0%b8%d1%81%d0%b0%d0%bd%d0%b8%d0%b5)
		- [Методы](#%d0%9c%d0%b5%d1%82%d0%be%d0%b4%d1%8b)
			- [create_stuff()](#create_stuff)
			- [create_this_sliders_elements()](#create_this_sliders_elements)
			- [move_ribon()](#move_ribon)
			- [set_visible_text_field()](#set_visible_text_field)
			- [move_sliders_on_inizialization()](#move_sliders_on_inizialization)
			- [move_single_slider_on_inizialization()](#move_single_slider_on_inizialization)
			- [_create_listeners()](#_create_listeners)
			- [_mouse_down_single](#_mouse_down_single)
			- [_move_element_single](#_move_element_single)
			- [_math__sliders_value_single(this.pixel_step, e);](#_math__sliders_value_singlethispixel_step-e)
			- [refresh_positions()](#refresh_positions)
			- [_mouse_down_first_slider](#_mouse_down_first_slider)
			- [_mouse_down_second_slider](#_mouse_down_second_slider)
			- [_move_element_1](#_move_element_1)
			- [_move_element_2](#_move_element_2)
			- [_step_implementation(e: MouseEvent,	modified_object: HTMLElement, static_object?: HTMLElement)](#_step_implementatione-mouseeventmodified_object-htmlelement-static_object-htmlelement)
			- [_math__sliders_value_left()](#_math__sliders_value_left)
			- [_math__sliders_value_right(e: MouseEvent)](#_math__sliders_value_righte-mouseevent)
			- [_math__sliders_value_single_step(steps: number, e: MouseEvent)](#_math__sliders_value_single_stepsteps-number-e-mouseevent)
			- [_math__sliders_value_left_step(steps: number, pixel_step: number, e: MouseEvent)](#_math__sliders_value_left_stepsteps-number-pixel_step-number-e-mouseevent)
			- [_math__sliders_value_right_step(steps: number, pixel_step: number, e: MouseEvent)](#_math__sliders_value_right_stepsteps-number-pixel_step-number-e-mouseevent)
			- [_cancel_move_events](#_cancel_move_events)

## Achievement

Для выполнения этого проекта были прочитаны:

+ "JavaScript Карманный справочник" Дэвида Флэнагана

+ "JavaScript Сильные стороны" Дугласа Крокфорда

+ "Programming TypeScript" by Boris Cherny

+ "Чистая архитектура. Искусство разработки программного обеспечения" Роберта Мартина

+ и множество прекрасных статей :)

Мной впервые были применены typescript, jsdom, mocha, chai.

А так же один учебный проект на котором я разобрал тестирование.

## В проекте используются:


+ Webpack
+ Node.js
+ ts-node
+ TypeScript
+ Mocha
+ Chia
+ JSDOM
+ HTML
+ CSS


## Описание архитектуры

[⇱ К навигации ](#Навигация "Навигация")

Инициализацию плагина выполняет функция ias-slider, которая запускает плагин с параметрами, заданными программистом. При наличии в родительском элементе дочернего с заданным settings_id, ias-slider отобразит интерфейс для быстрого изменения настроек слайдера.

Архитектура плагина реализована по методике MVC.

Модель представляет собой объект, хранящий данные о максимальной и минимальной доступной цене, знаке валюты, а так же о том, какие значения были установлены посетителем сайта. Модель содержит методы, позволяющие обновить данные и вызвать заинтересованную службу для дальнейшей выгрузки данных.

Контролёр "видит" Модель и Вид, забирает необходимые данные из Модели и переносит их в Вид, запускает построение слайдера на странице. При манипуляциях пользователя с Видом Контролёр по вызову забирает новые данные и переносит их в Модель.

Вид отвечает за построение графической части, содержит логику работы плагина. С построенным Видом взаимодействует пользователь. При манипуляциях пользователя Вид вызывает метод Контролёра для сбора необходимых данных.


## Модель

[⇱ К навигации ](#Навигация "Навигация")

## Контролёр

[⇱ К навигации ](#Навигация "Навигация")

## Вид

[⇱ К навигации ](#Навигация "Навигация")

### Описание

Создает слайдер в указанном по id элементе.

### Методы

#### create_stuff()
Проверяет наличие элемента с указанным id для создания слайдера.
Создает HTML элементы двойного или одинарного слайдера в зависимости от переданных параметров.

>После обращается к методам
>
>`create_this_sliders_elements();`
>
>`move_ribon();`
>
>`set_visible_text_field();`
>
>`_create_listeners();`

[⇱ К навигации ](#Навигация "Навигация")


#### create_this_sliders_elements()
Сообщает переменным класса значения типа HTMLElement, к этим переменным далее будут обращаться другие методы.

[⇱ К навигации ](#Навигация "Навигация")

#### move_ribon()

>`refresh_positions();`

Совмещает координаты полоски и слайдеров или координаты начала и слайдера(если слайдер одиночный).

[⇱ К навигации ](#Навигация "Навигация")

#### set_visible_text_field()

В зависимости от того двойной слайдер или одиночный:
	Проверяет условие, что все элементы подчинены логике и ни одно из значений не является больше или меньше, чем оно должно быть
	Присваивает текстовым полям(придназначенным для отображения денежного диапазона) значения
	Проверяет необходимость показа или скрытия текстовых полей, соответственно показывает или скрывает

>После обращается к методам
>
>`move_sliders_on_inizialization();`
>
>`move_single_slider_on_inizialization();`

[⇱ К навигации ](#Навигация "Навигация")

#### move_sliders_on_inizialization()

Переводит слайдеры в начальное положение по исходных данным

[⇱ К навигации ](#Навигация "Навигация")

#### move_single_slider_on_inizialization()

Переводит слайдер в начальное положение по исходных данным

[⇱ К навигации ](#Навигация "Навигация")

#### _create_listeners()

В зависимости от того двойной слайдер или одинарный ссылается на методы инициализации событий

>При событии нажатия на одинарный ползунок вызвает метод
>
>`_mouse_down_single`

>При событии нажатия на один из ползунков вызвает соответствующий метод
>
>`_mouse_down_first_slider`
>
>`_mouse_down_second_slider`

[⇱ К навигации ](#Навигация "Навигация")

#### _mouse_down_single

>Arguments:
>
>event
>
>e.preventDefault() - отменяет любые действия браузера связанные с этим элементом

>При событии движения мыши запускает метод
>
>`_move_element_single`

>При событии отпускания клавиши мыши запускает метод
>
>`_cancel_move_events`

[⇱ К навигации ](#Навигация "Навигация")

#### _move_element_single

>Arguments:
>
>event

Если:
+ Шаг слайдера больше размера ползунка, то запустит
+	>`_step_implementation(e, this.parent_element, this.slider_single);`

Иначе:

+ Если Координаты мыши выходят за рамки элемента слайдера, то ползунок встает в крайнее положение

+ Иначе Если Координаты мыши меньше координат начала элемента слайдера, то ползунок встает в нулевое положение

+ Иначе Ползунок перемещается за мышью.

+  >Вызвает методы:
     >
     >`refresh_positions();`
     >
     >`_math__sliders_value_single(this.pixel_step, e);`

>После вызывает метод:
>
>`move_ribon();`

[⇱ К навигации ](#Навигация "Навигация")

#### _math__sliders_value_single(this.pixel_step, e);
>Arguments
>
>Events
>
>this.pixel_step

 >refresh_positions();

Если:

+ Координаты мыши за пределами слайдера, то
в поля помещаются минимальные/максимальные значения

Иначе

+ В поля помещаются вычисляемые значения в зависимости от положения ползунка

Сдвиг всплывающей подсказки за ползунком

[⇱ К навигации ](#Навигация "Навигация")

#### refresh_positions()

Обновляет переменную родительского элемента слайдера, и его позицию - это понадобится в случае если пользователь изменит разрешение экрана во время просмотра страницы или увеличит/уменьшит страницу.

Обновляет переменные, содержащие положение по осям X или Y, ползунков или ползунка

[⇱ К навигации ](#Навигация "Навигация")

#### _mouse_down_first_slider

>Arguments:
>
>event
>
>e.preventDefault() - отменяет любые действия браузера связанные с этим элементом

>При событии движения мыши запускает метод
>
>`_move_element_1`

>При событии отпускания клавиши мыши запускает метод
>
>`_cancel_move_events`

[⇱ К навигации ](#Навигация "Навигация")

#### _mouse_down_second_slider


>Arguments:
>
>event
>
>e.preventDefault() - отменяет любые действия браузера связанные с этим элементом

>При событии движения мыши запускает метод
>
>`_move_element_2`

>При событии отпускания клавиши мыши запускает метод
>
>`_cancel_move_events`

[⇱ К навигации ](#Навигация "Навигация")

#### _move_element_1

>Arguments:
>
>event

>`refresh_positions();`

Если

+ Шаг больше заданного размера, то запускается

+ >`_step_implementation(e, this.parent_element, this.slider_1, this.slider_2)`

Иначе

+ Слайдер ведет себя как будто шаг равен 1.

+ >refresh_positions();
  >
	>_math__sliders_value_left(this.pixel_step, e);

>`move_ribon()`



[⇱ К навигации ](#Навигация "Навигация")

#### _move_element_2

>Arguments:
>
>event

>`refresh_positions();`

Если
+ Шаг больше заданного размера, то запускается

+  >`_step_implementation(e, this.parent_element, this.slider_1, this.slider_2)`

Иначе

+ Слайдер ведет себя как будто шаг равен 1

+ >`refresh_positions();`
  >
	>`_math__sliders_value_left(this.pixel_step, e);`

>`move_ribon()`

[⇱ К навигации ](#Навигация "Навигация")

#### _step_implementation(e: MouseEvent,	modified_object: HTMLElement, static_object?: HTMLElement)

>Arguments:
>
>e: MouseEvent;
>
>modified_object: HTMLElement - ползунок, с которым взаимодействует пользователь
>
>static_object?: HTMLElement - ползунок в двойном слайдере, в данный момент остающийся статичным

>`refresh_positions();`

Если есть `static_object`

+ Если modified_object расположен перед static_object
	+ Манипуляции с ползунком в зависимости от положения мыши
  
	+ >`.refresh_positions();`
	+ >`_math__sliders_value_left_new(step, pixel_step, e);`

+ Если modified_object расположен после static_object
  
	+ Манипуляции с ползунком в зависимости от положения мыши
  + >`.refresh_positions();`

  + >`_math__sliders_value_right_new(step, pixel_step, e);`

Если static_object осутствует

+ Манипуляции с ползунком в зависимости от положения мыши

+ >`.refresh_positions();`

+ >`_math__sliders_value_single_step(step, pixel_step, e);`

[⇱ К навигации ](#Навигация "Навигация")

#### _math__sliders_value_left()

Вычисляет значения для помещения в поля, перемещает всплывающую подсказку

[⇱ К навигации ](#Навигация "Навигация")

#### _math__sliders_value_right(e: MouseEvent)

>Arguments:
>
>e: MouseEvent

Вычисляет значения для помещения в поля(в зависимости от положения мыши), перемещает всплывающую подсказку

[⇱ К навигации ](#Навигация "Навигация")

#### _math__sliders_value_single_step(steps: number, e: MouseEvent)

>Arguments:
>
>steps: number - это значение конкретного шага, на котором остановился ползунок;
>
>e: MouseEvent;

Вычисляет значение шага, помещает его в поля и перемещает всплывающую подсказку

[⇱ К навигации ](#Навигация "Навигация")

#### _math__sliders_value_left_step(steps: number, pixel_step: number, e: MouseEvent)

>Arguments:
>
>step: number - это шаг, на котором пользователь остановил ползунок. Округляется до целого числа.
>
>pixel_step: number - это размер шага в пикселях, отличается от другого шага тем, что у этого из ширины/высоты родительского элемента вычтена ширина/высота ползунка, что не дает выйти ползунку за пределы границ родительского элемента;
>
>e: MouseEvent;

Вычисляет значение, на котором остановился пользователь, отображает это значение в динамичных и статичных полях, поля следуют за ползунком.

[⇱ К навигации ](#Навигация "Навигация")

#### _math__sliders_value_right_step(steps: number, pixel_step: number, e: MouseEvent)

>Arguments:
>
>step: number - это шаг, на котором пользователь остановил ползунок. Округляется до целого числа.
>
>pixel_step: number - это размер шага в пикселях, отличается от другого шага тем, что у этого из ширины/высоты родительского элемента вычтена ширина/высота ползунка, что не дает выйти ползунку за пределы границ родительского элемента;
>
>e: MouseEvent;

Вычисляет значение, на котором остановился пользователь, отображает это значение в динамичных и статичных полях, поля следуют за ползунком.

[⇱ К навигации ](#Навигация "Навигация")

#### _cancel_move_events

Срабатывает при поднятии клавиши мыши, аннулирует все прослушки событий.

[⇱ К навигации ](#Навигация "Навигация")