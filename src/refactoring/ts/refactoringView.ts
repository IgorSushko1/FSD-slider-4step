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
  indent: number;// смещение относительно вьюпорта
  mainAxisSize: number; // размер поля слайдера по главной оси
  secondaryAxisSize: number; // размер поля слайдера по второстепенной оси

  sliderInDOM: [HTMLElement];

  staticFieldLower: HTMLElement;
  staticFieldUpper: HTMLElement;

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

  eventTargetSlider: EventTarget;

  globalMousePosition: number
  innerMousePosition: number;

  pixelStep: number;
  roundedPixelStep: number;

  targetSlider: HTMLElement;
  targetSliderPosition: any;

  lowerRestriction: number;
  upperRestriction: number;

  lowerCostRestriction: number;
  upperCostRestriction: number;
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
      + '<div class="iss__single_fly-value iss__tooltip" data-slyder="single"></div>'
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
      + '<div class="iss__double_1_horizontal iss__drag" data-slyder="lower"></div>'
      + '<div class="iss__double_fly-value-2 iss__tooltip"></div>'
      + '<div class="iss__double_2_horizontal iss__drag" data-slyder="upper"></div>'
      + '<div class="iss__color-bar"></div>'
      + '</div>';
  }

  writeDOM = () => {
    this.checkElementsInDOM();

    if (this.sliderInDOM.length === 1) {
      this.writeSingleDOMtoVariables();
      this.writeSingleSliderIndent();
    } else if (this.sliderInDOM.length === 2) {
      this.writeDoubleDOMtoVariables();
      this.writeDoubleSliderIndent();
    }
  }

  private checkElementsInDOM = () => {
    const sliderInDOM = this.elem.querySelectorAll('.iss__drag');

    if ((sliderInDOM.length > 0)) {
      this.sliderInDOM = sliderInDOM;
    }
  }

  private writeSingleDOMtoVariables = () => {
    [this.scale] = this.returnElementsFromDOM('.iss__scale', 1);
    [this.singleSlider] = this.returnElementsFromDOM('.iss__drag', 1);
    [this.staticFieldUpper] = this.returnElementsFromDOM('.iss_staticField', 1);
    [this.flyFieldSingle] = this.returnElementsFromDOM('.iss__tooltip', 1);
    [this.ribbon] = this.returnElementsFromDOM('.iss__color-bar', 1);
  }

  private writeDoubleDOMtoVariables = () => {
    [this.scale] = this.returnElementsFromDOM('.iss__scale', 1);
    [this.lowerSlider, this.upperSlider] = this.returnElementsFromDOM('.iss__drag', 2);
    [this.staticFieldLower, this.staticFieldUpper] = this.returnElementsFromDOM('.iss_staticField', 2);
    [this.flyFieldLower, this.flyFieldUpper] = this.returnElementsFromDOM('.iss__tooltip', 2);
    [this.ribbon] = this.returnElementsFromDOM('.iss__color-bar', 1);
  }

  private writeSingleSliderIndent = () => {
    const elem = this.returnElementsFromDOM('.iss__drag', 1);
    const elemBounding = elem.getBoundingClientRect();
    if (this.sliderType === 'horizontal') {
      this.singleSliderPosition = elemBounding.left;
    } if (this.sliderType === 'vertical') {
      this.singleSliderPosition = elemBounding.top;
    }
  }

  private writeDoubleSliderIndent = () => {
    const elems = this.returnElementsFromDOM('.iss__drag', 2);
    const type = this.directionType;
    const returnIndent = (arr: HTMLElement) => {
      if (type === 'horizontal') {
        return arr.offsetLeft;
      } if (type === 'vertical') {
        return arr.offsetTop;
      }
    };
    this.lowerSliderPosition = returnIndent(elems[0]);
    this.upperSliderPosition = returnIndent(elems[1]);
  }

  private returnElementsFromDOM = (className: string, length: number) => {
    const DOMElements = this.elem.querySelectorAll(className);
    if ((DOMElements.length === length)) {
      return DOMElements;
    }
    return false;
  }

  writeGeometryDOMtoVariables = () => {
    this.setDirection();
    this.writeGeometryOfSlider();
  }

  private setDirection = () => {
    const setHorizontalDirection = () => {
      this.clientRect = this.scale.getBoundingClientRect();
      this.indent = this.clientRect.left;

      this.mainAxisSize = this.scale.offsetWidth;
      this.secondaryAxisSize = this.scale.offsetHeight;
    };

    const setVerticalDirection = () => {
      this.clientRect = this.scale.getBoundingClientRect();
      this.indent = this.clientRect.top;

      this.mainAxisSize = this.elem.offsetHeight;
      this.secondaryAxisSize = this.scale.offsetWidth;
    };

    if (this.directionType === 'horizontal') {
      setHorizontalDirection();
    }
    if (this.directionType === 'vertical') {
      setVerticalDirection();
    }
  }

  private writeGeometryOfSlider = () => {
    if (this.sliderInDOM.length === 1) {
      this.sliderWidth = this.singleSlider.offsetWidth;
      this.sliderHeight = this.singleSlider.offsetHeight;
    } else if (this.sliderInDOM.length === 2) {
      this.sliderWidth = this.lowerSlider.offsetWidth;
      this.sliderHeight = this.lowerSlider.offsetHeight;
    }
    this.calcPixelStep();
  }

  calcPixelStep = () => {
    const widthVsMoney = this.mainAxisSize / this.upperScale;

    const stepInPixel = widthVsMoney * this.step;

    if (stepInPixel < 1) {
      this.pixelStep = stepInPixel;
      this.roundedPixelStep = 1;
    } else {
      this.pixelStep = stepInPixel;
      this.roundedPixelStep = Math.round(stepInPixel);
    }
  }

  createListenerOnSlider = () => {
    if (this.sliderInDOM.length === 1) {
      this.createEventOnSingleSlider();
    } else if (this.sliderInDOM.length === 2) {
      this.createEventsOnDoubleSlider();
    }
  }

  private createEventsOnDoubleSlider = () => {
    this.lowerSlider.onmousedown = this.eventOnSlider;
    this.upperSlider.onmousedown = this.eventOnSlider;
  }

  private createEventOnSingleSlider = () => {
    this.singleSlider.onmousedown = this.eventOnSlider;
  }

  private eventOnSlider = (_e: Event) => {
    _e.preventDefault();
    this.setRestrictionOfSliderMovement(_e);
    document.onmouseup = this.cancelEvents;
    document.onmousemove = this.moveEventWithHoldMouse;
  }

  private setRestrictionOfSliderMovement = (_e: Event) => {
    if (this.sliderType === 'double') {
      this.setRestrictionForDoubleSlider(_e);
    }
    if (this.sliderType === 'single') {
      this.setRestrictionForSingleSlider();
    }
  }

  private setRestrictionForDoubleSlider = (_e: Event) => {
    if (_e.target === this.lowerSlider) {
      this.targetSlider = this.lowerSlider;

      this.upperRestriction = this.upperSliderPosition;

      this.lowerRestriction = 0;

      this.upperCostRestriction = this.getCostForSlider(this.upperSliderPosition);
      this.lowerCostRestriction = this.lowerScale;
    }
    if (_e.target === this.upperSlider) {
      this.targetSlider = this.upperSlider;
      this.upperRestriction = this.mainAxisSize;
      this.lowerRestriction = this.lowerSliderPosition;

      this.upperCostRestriction = this.upperScale;
      this.lowerCostRestriction = this.getCostForSlider(this.lowerSliderPosition);
    }
  }

  private setRestrictionForSingleSlider = () => {
    this.targetSlider = this.singleSlider;
    this.upperRestriction = this.mainAxisSize;
    this.lowerRestriction = 0;

    this.upperCostRestriction = this.upperScale;
    this.lowerCostRestriction = this.lowerScale;
  }

  getCostForSlider = (sliderPostionInPixel: number) => Math.round((sliderPostionInPixel / this.pixelStep) * this.step)


  moveEventWithHoldMouse = (_e: MouseEvent) => {
    const innerMousePosition = this.getMousePosition(_e);

    const nearestRoundedStep = this.calcNearestStep(innerMousePosition);

    const finalPositionInPixel = this.calcFinalPosition(nearestRoundedStep);

    const finalCost = this.calcFinalCost(finalPositionInPixel);

    this.showMoneyOnScreen(finalCost);

    this.setTargetSliderPosition(finalPositionInPixel);

    this.moveRibbon();
  }

  private getMousePosition = (_e: MouseEvent) => {
    if (this.directionType === 'horizontal') {
      return (_e.clientX - this.indent);
    } if (this.directionType === 'vertical') {
      return (_e.clientY - this.indent);
    }
  }

  calcNearestStep = (_positionInPixel: number) => Math.round(_positionInPixel / this.pixelStep)

  calcFinalPosition = (nearestRoundedStep: number) => {
    const positionInPixel = nearestRoundedStep * this.pixelStep;
    if (this.isInBorder(positionInPixel)) {
      return positionInPixel;
    }
    if (positionInPixel <= this.lowerRestriction) {
      return this.lowerRestriction;
    }
    if (positionInPixel >= this.upperRestriction) {
      return this.upperRestriction;
    }

  }

  calcFinalCost = (finalPositionInPixel: number) => {
    if (this.isInBorder(finalPositionInPixel)) {
      return finalPositionInPixel * this.step;
    }
    if (finalPositionInPixel < this.lowerRestriction) {
      return this.lowerCostRestriction;
    }
    if (finalPositionInPixel > this.upperRestriction) {
      return this.upperCostRestriction;
    }
  }

  isInBorder = (position: number) => ((position >= this.lowerRestriction) && (position <= this.upperRestriction))

  showMoneyOnScreen = (finalCost: number) => {
    if (this.targetSlider === this.lowerSlider) {
      this.staticFieldLower.textContent = String(finalCost);
    }
    if ((this.targetSlider === this.upperSlider) || (this.targetSlider === this.singleSlider)) {
      this.staticFieldUpper.textContent = String(finalCost);
    }
  }

  private moveRibbon = () => {
    const setHorizontalRibbonVariables = () => {
      if (this.sliderInDOM.length === 1) {
        this.ribbon.style.left = '0px';
        this.ribbon.style.width = `${this.singleSlider.offsetLeft} px`;
      } else if (this.sliderInDOM.length === 2) {
        this.ribbon.style.left = this.lowerSlider.style.left;
        this.ribbon.style.width = `${this.upperSlider.offsetLeft - this.lowerSlider.offsetLeft} px`;
      }
    };

    const setVerticalRibbonVariables = () => {
      if (this.sliderInDOM.length === 1) {
        this.ribbon.style.top = '0px';
        this.ribbon.style.height = `${this.singleSlider.offsetTop} px`;
      } else if (this.sliderInDOM.length === 2) {
        this.ribbon.style.top = this.lowerSlider.style.top;
        this.ribbon.style.height = `${this.upperSlider.offsetTop - this.lowerSlider.offsetTop} px`;
      }
    };

    if (this.directionType === 'horizontal') {
      setHorizontalRibbonVariables();
    }
    if (this.directionType === 'vertical') {
      setVerticalRibbonVariables();
    }
  }

  setTargetSliderPosition = (num: number) => {
    if (this.directionType === 'horizontal') {
      this.targetSlider.style.left = `${num}px`;
    } else if (this.directionType === 'vertical') {
      this.targetSlider.style.top = `${num}px`;
    }
    this.writeDOM();
    this.setOverlay();
  }

  setOverlay = () => {
    if (this.sliderType === 'double') {
      if (this.targetSlider === this.lowerSlider) {
        this.targetSlider.style.zIndex = '100';
        this.upperSlider.style.zIndex = '1';
      } else if (this.targetSlider === this.upperSlider) {
        this.targetSlider.style.zIndex = '100';
        this.lowerSlider.style.zIndex = '1';
      }
    }
  }

  cancelEvents = () => {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

export { ViewHorizontal };
