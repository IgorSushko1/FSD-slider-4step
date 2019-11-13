# Строение вью слайдера:
## Класс View(Горизонтальный)
### Методы

### create_stuff()
	Проверяет наличие элемента с указанным id для создания слайдера.
	Создает HTML элементы двойного или одинарного слайдера в зависимости от переданных параметров.
	После создания обращается к методам
		create_this_sliders_elements();
		move_ribon();
		set_visible_text_field();
		_create_listeners();

### create_this_sliders_elements()
	Сообщает переменным класса значения типа HTMLElement, к этим переменным далее будут обращаться другие методы.

### move_ribon()
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

### move_sliders_on_inizialization()

		Переводит слайдеры в начальное положение по исходных данным

### move_single_slider_on_inizialization()

		Переводит слайдер в начальное положение по исходных данным

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
+ move_ribon();

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


### refresh_positions()
Обновляет переменную родительского элемента слайдера, и его позицию - это понадобится в случае если пользователь изменит разрешение экрана во время просмотра страницы или увеличит/уменьшит страницу.

Обновляет переменные, содержащие положение по осям X или Y, ползунков или ползунка

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

    move_ribon()

### _drag_element_2

    Arguments:
      event

    refresh_positions();

    Если
      Шаг больше ширины ползунка, то запускается
      _step_implementation(e, this.parent_element, this.slider_1, this.slider_2)
    Иначе
    	Слайдер ведет себя как будто шаг равен 1. ахахах
    	refresh_positions();
    	_math__sliders_value_left(this.pixel_step, e);

    move_ribon()


### _step_implementation(e: MouseEvent,	modified_object: HTMLElement, static_object?: HTMLElement)

    Arguments:
      e: MouseEvent;
      modified_object: HTMLElement - ползунок, с которым взаимодействует пользователь
      static_object?: HTMLElement - ползунок в двойном слайдере, в данный момент остающийся статичным

		refresh_positions();

		Если есть static_object
			Если modified_object расположен перед static_object
				Манипуляции с ползунком в зависимости от положения мыши
				.refresh_positions();
				_math__sliders_value_left_new(step, pixel_step, e);
			Если modified_object расположен после static_object
				Манипуляции с ползунком в зависимости от положения мыши
				.refresh_positions();
				_math__sliders_value_right_new(step, pixel_step, e);



		Если static_object осутствует
			Манипуляции с ползунком в зависимости от положения мыши
			.refresh_positions();
			_math__sliders_value_single_step(step, pixel_step, e);


### _math__sliders_value_left()

		Вычисляет значения для помещения в поля, перемещает всплывающую подсказку

### _math__sliders_value_right(e: MouseEvent)

    Arguments:
  		e: MouseEvent

		Вычисляет значения для помещения в поля(в зависимости от положения мыши), перемещает всплывающую подсказку

### _math__sliders_value_single_step(steps: number, e: MouseEvent)

		Arguments:
  		steps: number - это значение конкретного шага, на котором остановился ползунок;
  		e: MouseEvent;
		
		Вычисляет значение шага, помещает его в поля и перемещает всплывающую подсказку

### _math__sliders_value_left_step(steps: number, pixel_step: number, e: MouseEvent)

		Arguments:
			step: number - это шаг, на котором пользователь остановил ползунок. Округляется до целого числа.
  		pixel_step: number - это размер шага в пикселях, отличается от другого шага тем, что у этого из ширины/высоты родительского элемента вычтена ширина/высота ползунка, что не дает выйти ползунку за пределы границ родительского элемента;
  		e: MouseEvent;

		Вычисляет значение, на котором остановился пользователь, отображает это значение в динамичных и статичных полях, поля следуют за ползунком.

### _math__sliders_value_right_step(steps: number, pixel_step: number, e: MouseEvent)

		Arguments:
			step: number - это шаг, на котором пользователь остановил ползунок. Округляется до целого числа.
  		pixel_step: number - это размер шага в пикселях, отличается от другого шага тем, что у этого из ширины/высоты родительского элемента вычтена ширина/высота ползунка, что не дает выйти ползунку за пределы границ родительского элемента;
  		e: MouseEvent;

		Вычисляет значение, на котором остановился пользователь, отображает это значение в динамичных и статичных полях, поля следуют за ползунком.

### _cancel_drag_events 

		Срабатывает при отжатии клавиши мыши, аннулирует все прослушки событий.