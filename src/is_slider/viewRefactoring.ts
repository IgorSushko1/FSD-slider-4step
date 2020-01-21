interface ViewHorizontal {
  elementId?: string;
  elem?: any;
  sign?: string;
  lowerBound?: number;
  upperBound?: number;
  minSliderValue?: number;
  maxSlideValue?: number;
  sliderType?: string;
  step?: number;
  controller?: any;
  tooltip?: string;
  valueStateField?: string;
}

class ViewHorizontal {
  parentElement: HTMLElement;

  parentWidth: number;

  parentPosition: ClientRect | DOMRect;

  parentPositionX: number;

  valueField: HTMLElement;

  valueFieldLeft: HTMLElement;

  valueFieldRight: HTMLElement;

  valueFieldSingleStatic: HTMLElement;

  valueFieldLeftFly: HTMLElement;

  valueFieldRightFly: HTMLElement;

  valueFieldSingleFly: HTMLElement;

  initialSlider: HTMLElement;

  initialSliderWidth: number;

  initialSliderPosition: number;

  finalSlider: HTMLElement;

  finalSliderWidth: number;

  finalSliderPosition: number;

  singleSlider: HTMLElement;

  singleSliderWidth: any;

  singleSliderPosition: number;

  ribbon: HTMLElement;

  steps: number;

  pixelstep: number;

  multiplier: number;

  bindController(controller: any) {
    this.controller = controller;
  }

  setView(objFromController: ViewHorizontal) {
    this.elementId = objFromController.elementId;
    this.elem = document.getElementById(objFromController.elementId);
    this.sign = objFromController.sign || '₽';
    this.lowerBound = Number(objFromController.lowerBound) || 0;
    this.upperBound = Number(objFromController.upperBound) || 1000;
    this.minSliderValue = Number(objFromController.minSliderValue) || 200;
    this.maxSlideValue = Number(objFromController.maxSlideValue) || 800;
    this.sliderType = objFromController.sliderType || 'single';
    this.step = objFromController.step || 2;
    this.tooltip = objFromController.tooltip || 'on';
    this.valueStateField = objFromController.valueStateField || 'on';
    this.createStuff();
  }

  getView() {
    return {
      elementId: this.elementId,
      sign: this.sign,
      lowerBound: this.lowerBound,
      upperBound: this.upperBound,
      minSliderValue: this.minSliderValue,
      maxSlideValue: this.maxSlideValue,
      sliderType: this.sliderType,
      step: this.step,
      tooltip: this.tooltip,
      valueStateField: this.valueStateField,
    };
  }

  setController() {
    const obj = {
      minSliderValue: this.minSliderValue,
      maxSlideValue: this.maxSlideValue,
    };
    this.controller.getView(obj);
  }

  createStuff() {
    if (this.elem) {
      if (this.sliderType === 'double') {
        this.elem.innerHTML = '<div id="iss_value-field">'
          + '<span id="iss_valueFieldLeft-field"></span>'
          + '-'
          + '<span id="iss_valueFieldRight-field"></span>'
          + '</div>'
          + '<div id= "iss-container">'
          + '<div id="iss__double_fly-value-1"  class="iss_tooltip"></div>'
          + '<div id="iss__double_1_horizontal" class="iss_drag"></div>'
          + '<div id="iss__double_fly-value-2" class="iss_tooltip"></div>'
          + '<div id="iss__double_2_horizontal" class="iss_drag"></div>'
          + '<div id="iss__color-bar_horizontal"></div>'
          + '</div>';
      } else if (this.sliderType === 'single') {
        this.elem.innerHTML = '<div id="iss_value-field">'
          + '<span id="valueFieldSingleFly"></span>'
          + '</div>'
          + '<div id= "iss-container">'
          + '<div id="iss__color-bar_horizontal"></div>'
          + '<div id="iss__single_fly-value" class="iss_tooltip"></div>'
          + '<div id="iss__single" class="iss_drag"></div>'
          + '</div>';
      } else {
        throw this.sendConsoleMessage('Неправильно задан параметр для sliderType');
      }
    } else {
      throw this.sendConsoleMessage('На странице не существует указанного elementId для создания слайдера или он просто не указан');
    }
  }

  private sendConsoleMessage = function sendConsoleMessage(message: string) {
    console.log(message);
  }

}
export default ViewHorizontal;
