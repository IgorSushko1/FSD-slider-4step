import { Model } from './model';
import { View } from './refactoringView';
import { ControlPanel } from './ControlPanel';

interface Controller {
  idForControlPanel?: string;
  elementId?: string;
  sign?: string;
  lowerScaleBound?: number;
  upperScaleBound?: number;
  lowerSliderValue?: number;
  upperSliderValue?: number;
  sliderType?: string;
  directionType?: string;
  step?: number;

  model?: any;
  view?: any;

  controlPanel?: any;
}

interface objFromView {
  lowerSliderValue?: number;
  upperSliderValue?: number;
}

interface objFromControlPanel {
  sliderType: string;
  directionType: string;
  step: number;
}

class Controller {
  constructor(settings: any) {
    this.elementId = settings.elementId;
    this.sliderType = settings.sliderType || 'single';
    this.directionType = settings.directionType || 'horizontal';
    this.step = settings.step || 2;
    this.idForControlPanel = settings.idForControlPanel || '';
  }


  createSlider() {
    this.setController();
    this.setAndRunView();
  }

  setController() {
    const objFromModel = this.getModel();
    this.lowerSliderValue = objFromModel.lowerSliderValue;
    this.upperSliderValue = objFromModel.upperSliderValue;
    this.lowerScaleBound = objFromModel.lowerScaleBound;
    this.upperScaleBound = objFromModel.upperScaleBound;
    this.sign = objFromModel.sign;
  }

  getModel() {
    return this.model.getModel();
  }

  setAndRunView() {
    const obj = {
      elementId: this.elementId,
      sign: this.sign,
      lowerScaleBound: this.lowerScaleBound,
      upperScaleBound: this.upperScaleBound,
      lowerSliderValue: this.lowerSliderValue,
      upperSliderValue: this.upperSliderValue,
      sliderType: this.sliderType,
      directionType: this.directionType,
      step: this.step,
    };
    console.log('setAndRunView');
    console.log(obj);
    this.view.setStartingConditions(obj);
    this.view.init();
  }



  bindModel(model: Model) {
    this.model = model;
  }

  setModel() {
    this.model.setModel({
      lowerSliderValue: this.lowerSliderValue,
      upperSliderValue: this.upperSliderValue,
    });
  }

  bindView(view: View) {
    this.view = view;
  }

  getView(obj: objFromView) {
    if (this.sliderType === 'double') {
      this.lowerSliderValue = obj.lowerSliderValue;
      this.upperSliderValue = obj.upperSliderValue;
    }
    if (this.sliderType === 'single') {
      this.lowerSliderValue = obj.lowerSliderValue;
    }
    this.setModel();
  }

  getController() {
    return {
      elementId: this.elementId,
      sign: this.sign,
      lowerScaleBound: this.lowerScaleBound,
      upperScaleBound: this.upperScaleBound,
      lowerSliderValue: this.lowerSliderValue,
      upperSliderValue: this.upperSliderValue,
      sliderType: this.sliderType,
      step: this.step,
    };
  }

  bindControlPanel(cntrlPnl: ControlPanel) {
    this.controlPanel = cntrlPnl;
  }

  setControllerFromControlPanel = (obj: objFromControlPanel) => {
    this.step = obj.step;
    this.sliderType = obj.sliderType;
    this.directionType = obj.directionType;
  }
}

export { Controller };
