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

  sliderInDOM: [HTMLElement];

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
    this.writeGeometryDOMtoVariables();
    this.createListenerOnSlider();
  }

  createDOM = () => {
    if (this.sliderType === 'double') {
      this.createDoubleDOM();
    }
    if (this.sliderType === 'single') {
      this.createSingleDOM();
    }
  }


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
    const DOMElements = this.elem.querySelectorAll('.iss__drag');

    if ((DOMElements.length > 0)) {
      this.sliderInDOM = DOMElements;
    }
  }

  private writeSingleDOMtoVariables = () => {
    [this.scale] = this.returnElementsFromDOM('.iss__scale', 1);
    [this.singleSlider] = this.returnElementsFromDOM('.iss__drag', 1);
    [this.staticFieldSingle] = this.returnElementsFromDOM('.iss_staticField', 1);
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
    this.singleSliderPosition = this.returnIndent(elem[0]);
  }

  private writeDoubleSliderIndent = () => {
    const elems = this.returnElementsFromDOM('.iss__drag', 2);
    this.lowerSliderPosition = this.returnIndent(elems[0]);
    this.upperSliderPosition = this.returnIndent(elems[1]);
  }

  private returnIndent = (arr: HTMLElement) => {
    if (this.directionType === 'horizontal') {
      return arr.offsetLeft;
    } if (this.directionType === 'vertical') {
      return arr.offsetTop;
    }
  };

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
    if (this.directionType === 'horizontal') {
      this.mainAxisSize = this.scale.offsetWidth;
      // console.log(`horizontal indent ${this.indent} -- this.mainAxisSize ${this.mainAxisSize}`);
    }
    if (this.directionType === 'vertical') {
      // this.indent = this.clientRect.top;
      this.mainAxisSize = this.scale.offsetHeight;
      // console.log(`indent ${this.indent} -- this.mainAxisSize ${this.mainAxisSize}`);
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
      this.pixelStep = 1;
      this.roundedPixelStep = 1;
    } else {
      this.pixelStep = stepInPixel;
      this.roundedPixelStep = Math.round(stepInPixel);
    }
  }

  createListenerOnSlider = () => {
    if (this.sliderInDOM.length === 1) {
      this.singleSlider.onmousedown = this.eventOnSlider;
    } else if (this.sliderInDOM.length === 2) {
      this.lowerSlider.onmousedown = this.eventOnSlider;
      this.upperSlider.onmousedown = this.eventOnSlider;
    }
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
    if (this.directionType === 'horizontal') {
      if (_e.target === this.lowerSlider) {
        this.targetSlider = this.lowerSlider;
        this.lowerRestriction = 0;
        this.upperRestriction = this.upperSliderPosition;
        this.lowerCostRestriction = this.lowerScale;
        this.upperCostRestriction = this.getCostForSlider(this.upperRestriction);
      }

      if (_e.target === this.upperSlider) {
        this.targetSlider = this.upperSlider;
        this.lowerRestriction = this.lowerSliderPosition;
        this.upperRestriction = this.mainAxisSize;
        this.lowerCostRestriction = this.getCostForSlider(this.lowerRestriction);
        this.upperCostRestriction = this.upperScale;
      }
    }
    if (this.directionType === 'vertical') {
      if (_e.target === this.lowerSlider) {
        this.targetSlider = this.lowerSlider;
        this.lowerRestriction = 0;
        this.upperRestriction = this.upperSliderPosition;
        this.lowerCostRestriction = this.getCostForSlider(this.lowerRestriction);
        this.upperCostRestriction = this.getCostForSlider(this.upperRestriction);
        console.log(`lowerCostRestriction === ${this.lowerCostRestriction}`);
        console.log(`upperCostRestriction === ${this.upperCostRestriction}`);
      }
      if (_e.target === this.upperSlider) {
        this.targetSlider = this.upperSlider;
        this.lowerRestriction = this.lowerSliderPosition;
        this.upperRestriction = this.mainAxisSize;
        this.lowerCostRestriction = this.getCostForSlider(this.lowerRestriction);
        this.upperCostRestriction = this.getCostForSlider(this.upperRestriction);
        console.log(`lowerCostRestriction === ${this.lowerCostRestriction}`);
        console.log(`upperCostRestriction === ${this.upperCostRestriction}`);
      }
    }
  }

  private setRestrictionForSingleSlider = () => {
    this.targetSlider = this.singleSlider;
    this.lowerRestriction = 0;
    this.upperRestriction = this.mainAxisSize;

    this.upperCostRestriction = this.upperScale;
    this.lowerCostRestriction = this.lowerScale;
  }

  getCostForSlider = (sliderPostionInPixel: number) => {
    if (this.directionType === 'horizontal') {
      if (sliderPostionInPixel <= 0) {
        console.log(`${this.lowerScale} this.lowerScale`);
        return this.lowerScale;
      }
      return (Math.round(sliderPostionInPixel / this.pixelStep) * this.step);
    }
    if (this.directionType === 'vertical') {
      if (sliderPostionInPixel <= 0) {
        // console.log(`${this.upperScale} this.upperScale`);
        return this.upperScale;
      }
      return ((Math.round((this.mainAxisSize - sliderPostionInPixel) / this.pixelStep) * this.step) + this.lowerScale);
    }
  }

  moveEventWithHoldMouse = (_e: MouseEvent) => {
    const innerMousePosition = this.getMousePosition(_e);
    // console.log(`${innerMousePosition} innerMousePosition`);


    const nearestRoundedStep = this.calcNearestStep(innerMousePosition);
    // console.log(`${_nearestRoundedStep} _nearestRoundedStep`);


    const finalPositionInPixel = this.calcFinalPosition(nearestRoundedStep);

    const finalCost = this.calcFinalCost(nearestRoundedStep);

    this.showMoneyOnScreen(finalCost);

    this.moveSlider(finalPositionInPixel);

    this.setOverlay();

    this.moveRibbon();

    this.moveTooltip();
  }

  private getMousePosition = (_e: MouseEvent) => {
    this.clientRect = this.scale.getBoundingClientRect();
    if (this.directionType === 'horizontal') {
      this.indent = this.clientRect.left;
      return (_e.clientX - this.indent);
    } if (this.directionType === 'vertical') {
      this.indent = this.clientRect.top;
      return (_e.clientY - this.indent);
    }
  }

  calcNearestStep = (_positionInPixel: number) => {
    if (this.directionType === 'horizontal') {
      return Math.round(_positionInPixel / this.pixelStep);
    }
    if (this.directionType === 'vertical') {
      // return Math.round(_positionInPixel / this.pixelStep);
      return Math.round((this.mainAxisSize - _positionInPixel) / this.pixelStep);
    }
  }

  calcFinalPosition = (_nearestRoundedStep: number) => {
    const positionInPixel = _nearestRoundedStep * this.pixelStep;

    if (this.directionType === 'horizontal') {
      if (this.isPixelsInBorder(positionInPixel)) {
        return positionInPixel;
      }
      if (positionInPixel <= this.lowerRestriction) {
        return this.lowerRestriction;
      }
      if (positionInPixel >= this.upperRestriction) {
        return this.upperRestriction;
      }
    }
    if (this.directionType === 'vertical') {
      if (this.isPixelsInBorder((this.mainAxisSize - positionInPixel))) {
        console.log(`${this.mainAxisSize - positionInPixel} === this.mainAxisSize - positionInPixel`);

        return (this.mainAxisSize - positionInPixel);
      }
      if ((this.mainAxisSize - positionInPixel) <= this.lowerRestriction) {
        // console.log(`${}`);
        console.log(`${this.lowerRestriction} === lower`);


        return this.lowerRestriction;
      }
      if ((this.mainAxisSize - positionInPixel) >= this.upperRestriction) {
        return this.upperRestriction;
      }
    }
  }

  calcFinalCost = (_nearestRoundedStep: number) => {
    if (this.directionType === 'horizontal') {
      const positionInMoney = _nearestRoundedStep * this.step;
      if (this.isMoneyInBorder(positionInMoney)) {
        return positionInMoney;
      }
      if (positionInMoney < this.lowerCostRestriction) {
        return this.lowerCostRestriction;
      }
      if (positionInMoney > this.upperCostRestriction) {
        return this.upperCostRestriction;
      }
    }
    if (this.directionType === 'vertical') {
      const positionInMoney = (_nearestRoundedStep * this.step) + this.lowerScale;
      console.log(`positionInMoney === ${positionInMoney}`);
      if (this.isMoneyInBorder(positionInMoney)) {
        return positionInMoney;
      }
      if (positionInMoney > this.lowerCostRestriction) {
        return this.lowerCostRestriction;
      }
      if (positionInMoney < this.upperCostRestriction) {
        return this.upperCostRestriction;
      }
    }
  }

  isPixelsInBorder = (_position: number) => ((_position >= this.lowerRestriction) && (_position <= this.upperRestriction))

  isMoneyInBorder = (_position: number) => {
    if (this.directionType === 'horizontal') {
      return ((_position >= this.lowerCostRestriction) && (_position <= this.upperCostRestriction));
    }
    if (this.directionType === 'vertical') {
      return ((_position <= this.lowerCostRestriction) && (_position >= this.upperCostRestriction));
    }
  }


  showMoneyOnScreen = (finalCost: number) => {
    const cost = `${finalCost}${this.sign}`;
    if (this.targetSlider === this.lowerSlider) {
      this.staticFieldLower.textContent = `${cost}`;
      this.flyFieldLower.textContent = `${cost}`;
    }
    if (this.targetSlider === this.upperSlider) {
      this.staticFieldUpper.textContent = `${cost}`;
      this.flyFieldUpper.textContent = `${cost}`;
    }
    if (this.targetSlider === this.singleSlider) {
      this.staticFieldSingle.textContent = `${cost}`;
      this.flyFieldSingle.textContent = `${cost}`;
    }
  }

  private moveRibbon = () => {
    const setHorizontalRibbonVariables = () => {
      if (this.sliderInDOM.length === 1) {
        this.ribbon.style.left = '0px';
        this.ribbon.style.width = `${this.singleSlider.offsetLeft}px`;
      } else if (this.sliderInDOM.length === 2) {
        this.ribbon.style.left = this.lowerSlider.style.left;
        this.ribbon.style.width = `${this.upperSlider.offsetLeft - this.lowerSlider.offsetLeft}px`;
      }
    };

    const setVerticalRibbonVariables = () => {
      if (this.sliderInDOM.length === 1) {
        this.ribbon.style.top = '0px';
        this.ribbon.style.height = `${this.singleSlider.offsetTop}px`;
      } else if (this.sliderInDOM.length === 2) {
        this.ribbon.style.top = this.lowerSlider.style.top;
        this.ribbon.style.height = `${this.upperSlider.offsetTop - this.lowerSlider.offsetTop}px`;
      }
    };

    if (this.directionType === 'horizontal') {
      setHorizontalRibbonVariables();
    }
    if (this.directionType === 'vertical') {
      setVerticalRibbonVariables();
    }
  }

  moveSlider = (num: number) => {
    if (this.directionType === 'horizontal') {
      this.targetSlider.style.left = `${num}px`;
    } else if (this.directionType === 'vertical') {
      this.targetSlider.style.top = `${num}px`;
    }
  }

  moveTooltip = () => {
    const move = (direction: string, offset: 'offsetLeft' | 'offsetTop') => {
      if (this.sliderType === 'single') {
        this.elem.querySelectorAll('.iss__tooltip')[0].style[direction] = `${this.singleSlider[offset]}px`;
      }
      if (this.sliderType === 'double') {
        this.elem.querySelectorAll('.iss__tooltip')[0].style[direction] = `${this.lowerSlider[offset]}px`;
        this.elem.querySelectorAll('.iss__tooltip')[1].style[direction] = `${this.upperSlider[offset]}px`;
      }
    };
    if (this.directionType === 'horizontal') {
      move('left', 'offsetLeft');
    }
    if (this.directionType === 'vertical') {
      move('top', 'offsetTop');
    }
  }

  setOverlay = () => {
    if (this.targetSlider === this.lowerSlider) {
      this.targetSlider.style.zIndex = '100';
      this.upperSlider.style.zIndex = '1';
    } else if (this.targetSlider === this.upperSlider) {
      this.targetSlider.style.zIndex = '100';
      this.lowerSlider.style.zIndex = '1';
    }
  }

  cancelEvents = () => {
    this.writeDOM();
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

export { ViewHorizontal };
