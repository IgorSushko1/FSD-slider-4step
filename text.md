# Строение вью слайдера:
## Класс View(Горизонтальный)
### Методы

### create_stuff()
	Проверяет наличие элемента с указанным id для создания слайдера.
	Создает HTML элементы двойного или одинарного слайдера в зависимости от переданных параметров.
	После создания обращается к методам
		create_this_sliders_elements();
		create_ribon();
		set_visible_text_field();
		_create_listeners();

### create_this_sliders_elements()
	Сообщает переменным класса значения типа HTMLElement, к этим переменным далее будут обращаться другие методы.

### create_ribon()
	Обращается к методу
		refresh_positions();
	Совмещает координаты полоски и слайдеров или координаты начала и слайдера(если слайдер одиночный).

### set_visible_text_field()
	В зависимости от того двойной слайдер или одиночный:
		Проверяет условие, что все элементы подчинены логике и ни одно из значений не является больше или меньше, чем оно должно быть
		Присваивает текстовым полям(придназначенным для отображения денежного диапазона) значения
		Проверяет необходимость показа или скрытия текстовых полей, соответственно показывает или скрывает
	После создания обращается к методу
		move_sliders_on_inizialization();
		move_single_slider_on_inizialization();

### _create_listeners()
	В зависимости от того двойной слайдер или одинарный ссылается на методы инициализации событий
	Обращается к методам
		_drag_events();
		_drag_event_single();

### _drag_event_single()
	При событии нажатия на ползунок вызвает метод
		_drag_mouse_down_single

### _drag_events()
	При событии нажатия на один из ползунков вызвает соответствующий метод
		_drag_mouse_down_1
		_drag_mouse_down_2

## Перемещение одинарного слайдера

### _drag_mouse_down_single
	function expression
	Arguments:
		event
	e.preventDefault() - отменяет любые действия браузера связанные с этим элементом
	При событии движения мыши запускает метод
		_drag_element_single
	При событии отпускания клавиши мыши запускает метод
		_close_drag_element

### _drag_element_single
	Arguments:
		event
	Если шаг слайдера больше размера ползунка, то запустит
		_step_implementation(e, this.parent_element, this.slider_single);

Иначе:
+ Если Координаты мыши выходят за рамки элемента слайдера, то ползунок встает в крайнее положение
+ Иначе Если Координаты мыши меньше координат начала элемента слайдера, то ползунок встает в нулевое положение
+ Иначе Ползунок перемещается за мышью.

  Вызвает методы:
  + refresh_positions();
  + _math__sliders_value_single(this.pixel_step, e);

После вызывает метод:
+ _drag_ribon_auto_single();

### _math__sliders_value_single(this.pixel_step, e);
Arguments
 + Events
 + this.pixel_step

Код:
+ refresh_positions();
+ Если координаты мыши за пределами слайдера, то
в поля помещаются максимальные значения
+ Иначе в поля помещаются вычисляемые значения в зависимости от положения ползунка
+ Сдвиг всплывающей подсказки за ползунком



### _drag_ribon_auto_single()
  Смещает полоску вслед за ползунком

### refresh_positions()
Обновляет переменную родительского элемента слайдера, и его позицию - это понадобится в случае если пользователь изменит разрешение экрана во время просмотра страницы или увеличит/уменьшит страницу.

Обновляет переменные, содержащие положение по осям X или Y, ползунков или ползунка

## Перемещение двойного сладера

### _drag_mouse_down_1

function expression
	Arguments:
		event
	e.preventDefault() - отменяет любые действия браузера связанные с этим элементом
	При событии движения мыши запускает метод
		_drag_element_1
	При событии отпускания клавиши мыши запускает метод
		_close_drag_element

### _drag_mouse_down_2

function expression
	Arguments:
		event
	e.preventDefault() - отменяет любые действия браузера связанные с этим элементом
	При событии движения мыши запускает метод
		_drag_element_2
	При событии отпускания клавиши мыши запускает метод
		_close_drag_element

### _drag_element_1

Arguments:
event

refresh_positions();

Если
  Шаг больше ширины слайдера, то запускается 
  _step_implementation(e, this.parent_element, this.slider_1, this.slider_2)
Иначе
	Слайдер ведет себя как будто шаг равен 1.
	refresh_positions();
	_math__sliders_value_left(this.pixel_step, e);

_drag_ribon_auto()

### _drag_element_2

Arguments:
event

refresh_positions();

Если
  Шаг больше ширины слайдера, то запускается
  _step_implementation(e, this.parent_element, this.slider_1, this.slider_2)
Иначе
	Слайдер ведет себя как будто шаг равен 1.
	refresh_positions();
	_math__sliders_value_left(this.pixel_step, e);

_drag_ribon_auto()

