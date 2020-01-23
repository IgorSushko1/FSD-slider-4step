interface ViewStartingConditions {
  elementId?: string;
  elem?: any;
  sign?: string;
  lowerScaleBound?: number;
  upperScaleBound?: number;
  lowerSliderValue?: number;
  upperSliderValue?: number;
  sliderType?: string;
  step?: number;
  controller?: any;
  tooltip?: string;
  valueStateField?: string;
  directionType?: string;
}

interface ViewHorizontal {
  elementId: string;
  elem: any;
  sign: string;
  lowerScale: number;
  upperScale: number;
  lowerSliderValue: number;
  upperSliderValue: number;
  sliderType: string;
  directionType: string;
  step: number;
  controller: any;
  tooltip: string;
  valueStateField: string;

  parentElement: HTMLElement;
  parentWidth: number;
  parentPosition: ClientRect | DOMRect;
  parentAxisPosition: number;

  scale: HTMLElement;
  mainAxis: number;
  secondaryAxis: number;
  indent: number;

  staticFieldLower: HTMLElement;
  staticFieldUpper: HTMLElement;
  staticFieldSingle: HTMLElement;

  flyFieldLower: HTMLElement;
  flyFieldUpper: HTMLElement;
  flyFieldSingle: HTMLElement;

  lowerSlider: HTMLElement;
  lowerSliderPosition: number;

  upperSlider: HTMLElement;
  upperSliderPosition: number;

  singleSlider: HTMLElement;
  singleSliderPosition: number;

  sliderWidth: number;
  sliderHeight: number;

  ribbon: HTMLElement;
  ribbonLowerPosition: number;
  ribbonUpperPosition: number;

  workingAttribute: string[];

  clientRect: ClientRect;
}

class ViewHorizontal {
  bindController = (controller: any) => {
    this.controller = controller;
  }


  setController() {
    const obj = {
      lowerSliderValue: this.lowerSliderValue,
      upperSliderValue: this.upperSliderValue,
    };
    this.controller.getView(obj);
  }

  setStartingConditions = (obj: ViewStartingConditions) => {
    this.elementId = obj.elementId || '#iss';
    this.elem = document.querySelector(obj.elementId);

    this.sign = obj.sign || 'R';
    this.lowerScale = Number(obj.lowerScaleBound) || 0;
    this.upperScale = Number(obj.upperScaleBound) || 1000;
    this.lowerSliderValue = Number(obj.lowerSliderValue) || 200;
    this.upperSliderValue = Number(obj.upperSliderValue) || 800;

    this.sliderType = obj.sliderType || 'single';
    this.directionType = obj.directionType || 'horizontal';
    this.step = obj.step || 2;

    this.tooltip = obj.tooltip || 'on';
    this.valueStateField = obj.valueStateField || 'on';
  }

  getStartingConditions = () => ({
    elementId: this.elementId,
    sign: this.sign,
    lowerScaleBound: this.lowerScale,
    upperScaleBound: this.upperScale,
    lowerSliderValue: this.lowerSliderValue,
    upperSliderValue: this.upperSliderValue,
    sliderType: this.sliderType,
    step: this.step,
    tooltip: this.tooltip,
    valueStateField: this.valueStateField,
  });


  init = () => {
    this.createDOM();
    this.writeDOM();
    this.createListenerOnSlider();
    this.writeGeometryDOMtoVariables();
  }

  createDOM = () => {
    if (this.checkParent) {
      if (this.sliderType === 'double') {
        this.createDoubleDOM();
      }
      if (this.sliderType === 'single') {
        this.createSingleDOM();
      }
    }
  }

  checkParent = () => !!this.elem

  createSingleDOM = () => {
    this.elem.innerHTML = '<div class="iss__value-field">'
      + '<span class="iss_staticField"></span>'
      + '</div>'
      + '<div class= "iss-container">'
      + '<div class= "iss__scale"></div>'
      + '<div class="iss__color-bar"></div>'
      + '<div class="iss__single_fly-value iss__tooltip"></div>'
      + '<div class="iss__single iss__drag"></div>'
      + '</div>';
  }

  createDoubleDOM = () => {
    this.elem.innerHTML = '<div class="iss__value-field">'
      + '<span class="iss_staticField"></span>'
      + '-'
      + '<span class="iss_staticField"></span>'
      + '</div>'
      + '<div class= "iss-container">'
      + '<div class= "iss__scale"></div>'
      + '<div class="iss__double_fly-value-1 iss__tooltip"></div>'
      + '<div class="iss__double_1_horizontal iss__drag"></div>'
      + '<div class="iss__double_fly-value-2 iss__tooltip"></div>'
      + '<div class="iss__double_2_horizontal iss__drag"></div>'
      + '<div class="iss__color-bar"></div>'
      + '</div>';
  }

  writeDOM = () => {
    const sliderInDOM = this.checkElementsInDOM();

    if (sliderInDOM.length === 2) {
      this.writeDoubleDOMtoVariables();
    }
    if (sliderInDOM.length === 1) {
      this.writeSingleDOMtoVariables();
    }
  }

  checkElementsInDOM = () => {
    const DOMElements = this.elem.querySelectorAll('.iss__drag');
    if ((DOMElements.length > 0)) {
      return DOMElements;
    }
    return false;
  }

  writeSingleDOMtoVariables = () => {
    [this.scale] = this.returnElementsFromDOM('.iss__scale', 1);
    [this.singleSlider] = this.returnElementsFromDOM('.iss__drag', 1);
    [this.staticFieldSingle] = this.returnElementsFromDOM('.iss_staticField', 1);
    [this.flyFieldSingle] = this.returnElementsFromDOM('.iss__tooltip', 1);
    [this.ribbon] = this.returnElementsFromDOM('.iss__color-bar', 1);
  }

  writeDoubleDOMtoVariables = () => {
    [this.scale] = this.returnElementsFromDOM('.iss__scale', 1);
    [this.lowerSlider, this.upperSlider] = this.returnElementsFromDOM('.iss__drag', 2);
    [this.staticFieldLower, this.staticFieldUpper] = this.returnElementsFromDOM('.iss_staticField', 2);
    [this.flyFieldLower, this.flyFieldUpper] = this.returnElementsFromDOM('.iss__tooltip', 2);
    [this.ribbon] = this.returnElementsFromDOM('.iss__color-bar', 1);
  }

  returnElementsFromDOM = (className: string, length: number) => {
    const DOMElements = this.elem.querySelectorAll(className);
    if ((DOMElements.length === length)) {
      return DOMElements;
    }
    return false;
  }

  createListenerOnSlider = () => {
    const sliderInDOM = this.checkElementsInDOM();

    if (sliderInDOM.length === 2) {
      this.createEventsOnDoubleSlider();
    }
    if (sliderInDOM.length === 1) {
      this.createEventOnSingleSlider();
    }
  }

  createEventsOnDoubleSlider = () => {
    this.lowerSlider.onmousedown = this.eventOnSlider;
    this.upperSlider.onmousedown = this.eventOnSlider;
  }

  createEventOnSingleSlider = () => {
    this.singleSlider.onmousedown = this.eventOnSlider;
  }

  eventOnSlider = (_e: MouseEvent) => {
    _e.preventDefault();
    document.onmouseup = this.cancelEvents;
    document.onmousemove = this.moveEventWithHoldSlider;
  }

  writeGeometryDOMtoVariables = () => {
    this.setDirection();
    this.writeGeometryOfSlider();
    this.writeGeometryOfRibbon();
  }

  setDirection = () => {
    if (this.directionType === 'horizontal') {
      this.setHorizontalDirection();
    }
    if (this.directionType === 'vertical') {
      this.setVerticalDirection();
    }
  }

  setHorizontalDirection = () => {
    this.clientRect = this.scale.getBoundingClientRect();
    this.indent = this.clientRect.left;

    this.mainAxis = this.scale.offsetWidth;
    this.secondaryAxis = this.scale.offsetHeight;
  }

  setVerticalDirection = () => {
    this.clientRect = this.scale.getBoundingClientRect();
    this.indent = this.clientRect.top;

    this.mainAxis = this.elem.offsetHeight;
    this.secondaryAxis = this.scale.offsetWidth;
  }

  writeGeometryOfSlider = () => {
    const sliderInDOM = this.checkElementsInDOM();

    if (sliderInDOM.length === 2) {
      this.sliderWidth = this.lowerSlider.offsetWidth;
      this.sliderHeight = this.lowerSlider.offsetHeight;
    }

    if (sliderInDOM.length === 1) {
      this.sliderWidth = this.singleSlider.offsetWidth;
      this.sliderHeight = this.singleSlider.offsetHeight;
    }
  }

  writeGeometryOfRibbon = () => {
    if (this.directionType === 'horizontal') {
      this.setHorizontalRibbonVariables();
    }
    if (this.directionType === 'vertical') {
      this.setVerticalRibbonVariables();
    }
  }

  setHorizontalRibbonVariables = () => {
    const sliderInDOM = this.checkElementsInDOM();
    if (sliderInDOM.length === 2) {
      this.ribbonLowerPosition = this.lowerSlider.offsetLeft;
      this.ribbonUpperPosition = this.upperSlider.offsetLeft;
    }

    if (sliderInDOM.length === 1) {
      this.ribbonLowerPosition = 0;
      this.ribbonUpperPosition = this.singleSlider.offsetLeft;
    }
  }

  setVerticalRibbonVariables = () => {
    const sliderInDOM = this.checkElementsInDOM();
    if (sliderInDOM.length === 2) {
      this.ribbonLowerPosition = this.lowerSlider.offsetTop;
      this.ribbonUpperPosition = this.upperSlider.offsetTop;
    }

    if (sliderInDOM.length === 1) {
      this.ribbonLowerPosition = 0;
      this.ribbonUpperPosition = this.singleSlider.offsetTop;
    }
  }






  moveEventWithHoldSlider = () => { }

  calcMousePosition = () => { }

  writeSelectedSlider = () => { }

  clearSelectedSlider = () => { }

  calcMoneyStep = () => { }

  calcProductStep = () => { }

  calcPixelStep = () => { }

  showMoneyOnScreen = () => { }

  canMoveToPosition = () => { }

  calcSliderPosition = () => { }

  getMouseCoordinates = () => { }

  moveSlider = () => { }

  calcStepsArray = () => { }

  calcStepNumberNearMouse = () => { }

  calcCrossedBound = () => { }

  moveRibon = () => { }

  findSliderNumber = () => { }

  findAndSafeSliderExtremum = () => { }

  calcPluginPosition = () => { }

  cancelEvents = () => { }
}

export default ViewHorizontal;
