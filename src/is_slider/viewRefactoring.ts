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
  step: number;
  controller: any;
  tooltip: string;
  valueStateField: string;

  parentElement: HTMLElement;
  parentWidth: number;
  parentPosition: ClientRect | DOMRect;
  parentAxisPosition: number;

  valueField: HTMLElement;

  staticFieldLower: HTMLElement;
  staticFieldUpper: HTMLElement;
  staticFieldSingle: HTMLElement;

  flyFieldLower: HTMLElement;
  flyFieldUpper: HTMLElement;
  flyFieldSingle: HTMLElement;

  lowerSlider: HTMLElement;
  lowerSliderWidth: number;
  lowerSliderPosition: number;

  upperSlider: HTMLElement;
  upperSliderWidth: number;
  upperSliderPosition: number;

  singleSlider: HTMLElement;
  singleSliderWidth: any;
  singleSliderPosition: number;

  ribbon: HTMLElement;

  workingAttribute: string[]
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

    this.sign = obj.sign || '₽';
    this.lowerScale = Number(obj.lowerScaleBound) || 0;
    this.upperScale = Number(obj.upperScaleBound) || 1000;
    this.lowerSliderValue = Number(obj.lowerSliderValue) || 200;
    this.upperSliderValue = Number(obj.upperSliderValue) || 800;

    this.sliderType = obj.sliderType || 'single';
    this.step = obj.step || 2;

    this.tooltip = obj.tooltip || 'on';
    this.valueStateField = obj.valueStateField || 'on';
  }

  getStartingConditions() {
    return {
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
    };
  }

  init = () => {
    this.createDOM();
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

    this.writedVariablesFromDOM();
  }

  createSingleDOM = () => {
    this.elem.innerHTML = '<div class="iss_value-field">'
      + '<span class="flyFieldSingle"></span>'
      + '</div>'
      + '<div class= "iss-container">'
      + '<div class="iss__color-bar_horizontal"></div>'
      + '<div class="iss__single_fly-value" class="iss_tooltip"></div>'
      + '<div class="iss__single" class="iss_drag"></div>'
      + '</div>';
  }

  createDoubleDOM = () => {
    this.elem.innerHTML = '<div class="iss_value-field">'
      + '<span class="iss_staticFieldLowerBound-field"></span>'
      + '-'
      + '<span class="iss_staticFieldUpperBound-field"></span>'
      + '</div>'
      + '<div class= "iss-container">'
      + '<div class="iss__double_fly-value-1"  class="iss_tooltip"></div>'
      + '<div class="iss__double_1_horizontal" class="iss_drag"></div>'
      + '<div class="iss__double_fly-value-2" class="iss_tooltip"></div>'
      + '<div class="iss__double_2_horizontal" class="iss_drag"></div>'
      + '<div class="iss__color-bar_horizontal"></div>'
      + '</div>';
  }

  checkParent = () => !!this.elem

  writedVariablesFromDOM = () => {
    this.checksSlidersInDOM();

    // this.flyFieldLower = this.parentElement.querySelector('') as HTMLElement;
  }

  checksSlidersInDOM = () => { }

  writeSliderVariables = () => {
    if (this.sliderType === 'single') {
      this.workingAttribute = [];
    }
  }


  createListenerOnSlider = (slider: HTMLElement) => {
    const chosenSlider = slider;
    chosenSlider.onmousedown = this.eventOnSlider;
  }

  eventOnSlider = (_e: MouseEvent) => {
    _e.preventDefault();
    document.onmouseup = this.cancelEvents;
    document.onmousemove = this.moveEventWithHoldSlider;
  }
  // private sendConsoleMessage = function sendConsoleMessage(message: string) {
  //   console.log(message);
  // }

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

  setDirection = () => { }



  cancelEvents = () => { }
}

export default ViewHorizontal;
