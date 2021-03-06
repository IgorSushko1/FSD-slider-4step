# IS_SLIDER

Простой слайдер с двумя или одним бегунками и с горизонтальным/вериткальным видом.

GitHub страница: https://igorsushko1.github.io/FSD-slider-4step/dist/index.html

для выполнения бандла -- `npm run bundle`

для live версии с devServer -- `npm run liveDev`

для выполнения тестирования необходимо выполнить команду `npm run test`

# Навигация:

- [IS_SLIDER](#is_slider)
- [Навигация:](#Навигация)
  - [Achievement](#achievement)
  - [В проекте используются:](#В-проекте-используются)
  - [is_slider](#is_slider-1)
    - [Установка](#Установка)
    - [Описание аргументов ISSlider](#Описание-аргументов-isslider)
  - [Описание архитектуры](#Описание-архитектуры)
  - [Модель](#Модель)
    - [Описание](#Описание)
  - [Контроллер](#Контроллер)
    - [Описание](#Описание-1)
  - [Вид](#Вид)
    - [Описание вида](#Описание-вида)
  - [CSS-файл](#css-файл)
    - [Подключение CSS](#Подключение-css)

## Achievement

Для выполнения этого проекта были прочитаны:

- "JavaScript Карманный справочник" Дэвида Флэнагана

- "JavaScript Сильные стороны" Дугласа Крокфорда

- "Programming TypeScript" by Boris Cherny

- "Чистая архитектура. Искусство разработки программного обеспечения" Роберта Мартина

- и множество прекрасных статей :)

Мной впервые были применены typescript, jsdom, mocha, chai.

А так же один учебный проект на котором я разобрал тестирование.

[⇱](#Навигация 'Навигация')

## В проекте используются:

- [Webpack]('https://webpack.js.org/')
- [Node.js]('https://nodejs.org/en/')
- [ts-node]('https://github.com/TypeStrong/ts-node')
- [TypeScript]('https://www.typescriptlang.org/')
- [Mocha]('https://www.npmjs.com/package/mocha')
- [Chia]('https://www.chaijs.com/')
- [JSDOM]('https://www.npmjs.com/package/jsdom')
- [Sass]('https://sass-scss.ru/')

[⇱](#Навигация 'Навигация')

## is_slider

### Установка

Клонирование проекта `git clone https://github.com/IgorSushko1/FSD-slider-4step`

Необходимо скачать папку `ts` или `js` с ts/js файлами и скопировать в ваш проект. Плагин не использует сторонние библиотеки! Затем в вашем файле прописать `import { ISSlider } from './ISSlider';` и передать ему необходимые параметры:

> `ISSlider(object)`
>
> `object` -- в этом объекте {} хранятся данные, которые при желании можно изменить, в соответствии с ними производится построение слайдера.

[⇱](#Навигация 'Навигация')

### Описание аргументов ISSlider

```
{
	elementId: 'string' // в это поле необходимо поместить id того элемента `div`, в котором должен быть создан слайдер. Для расчетов высоты или ширины слайдера используется элемент с классом `__scale` -- его можно настроить в scss файле

	idForControlPanel: 'string' // здесь, при желании использования быстрых настроек, необходимо разместить id элемента `div`, в котором будет создана панель для быстрых настроек слайдера.

	sign: "₽",//"₽", "$", "€", "¥", "Ұ", "£" -- знак валюты(любое строковое значение), отобразится в поле над бегунком при наведении на слайдер, и в статичном поле.

	lowerScaleBound: 0,// - минимальное значение шкалы слайдера

	upperScaleBound: 1000,// - максимальное значение шкалы слайдера

	lowerSliderValue: 200,// - значение первого или единственного слайдера, при инициализации слайдер будет установлен в это положение

	upperSliderValue: 800,// - значение второго слайдера,  при инициализации слайдер будет установлен в это положение, цифра должна быть больше значения для первого слайдера

	sliderType: "duble",//"duble" or "single" - двойной или одиночный слайдер

	directionType: "horizontal",//"horizontal" or "vertical" - горизонтальный или вертикальный вид слайдера

	step: 50,// - шаг слайдера

	style: "nameOfStyle"// - для удобства изменения стиля слайдера на нужный достаточно скопировать стили, дать новое заглавное имя родительскому классу, изменить стили в соответсвии с дизайном. Передать в `style` новое имя родительского класса
}
```

[⇱](#Навигация 'Навигация')

## Описание архитектуры

[⇱](#Навигация 'Навигация')

Инициализацию плагина выполняет функция ISSlider, которая запускает плагин с параметрами, заданными программистом. При наличии в родительском элементе дочернего с заданным idForControlPanel, slider отобразит интерфейс для быстрого изменения настроек.

Архитектура плагина реализована по методике MVC.

Модель представляет собой объект, хранящий данные о максимальной и минимальной доступной цене, знаке валюты, а так же о том, какие значения были установлены посетителем сайта. Модель содержит методы, позволяющие обновить данные и вызвать заинтересованную службу для дальнейшей выгрузки данных.

Контроллер "видит" Модель и Вид, забирает необходимые данные из Модели и переносит их в Вид, запускает построение слайдера на странице. При манипуляциях пользователя с Видом Контроллер по вызову забирает новые данные и переносит их в Модель.

Вид отвечает за построение графической части, содержит логику работы плагина. С построенным Видом взаимодействует пользователь. При манипуляциях пользователя Вид вызывает метод Контроллера для сбора необходимых данных.

Схемка архитектуры, очень простая https://drive.google.com/file/d/1BXpP8KkfTi6AnifXiFUrZE54Eor77LYT/view?usp=sharing

## Модель

---

### Описание

Если следовать описанию, которое дал Роберт Мартин в книге "Чистая архитектура", под моделью(бизнес-логикой) понимаются те процессы и данные, которые существуют вне программирования, компьютеров. В слайдере этими процессами и данными являются деньги. У продавца есть товар в определенном диапазоне средств. У покупателя есть желание и потребность купить определенный товар за определенные деньги. Эти четыре параметра - границы возможностей продавца и покупателя и являются бизнес-логикой. Далее у нас есть определенная валюта т.к. слайдер может использоваться в разных странах. В этом слайдере модель содержит объект, хранящий перечисленные выше параметры, и фасад, с помощью которого контроллер может вносить изменения в модель и брать значения из вида.

[⇱](#Навигация 'Навигация')

---

## Контроллер

---

### Описание

Контроллер занимается тем, что при изменении информации в Виде передаёт данные в Модель. Так же в Контроллере находится метод для инициализации Вида, Контроллер при инициализации получает объект от Модели, который содержит данные относящиеся о дефолтных граничных условиях.

---

## Вид

[⇱](#Навигация 'Навигация')

---

### Описание вида

Создает слайдер в указанном по id элементе.

---

## CSS-файл

### Подключение CSS

Стандартно, файл SCSS лежат в папке с плагином. Файл содержит два дефолтных стиля, которые можно задать в `style` при инициализации плагина:

для горизонтального плагина -- имя родительского класса `issHorizontal`

для вертикального плагина -- имя родительского класса `issVertical`
