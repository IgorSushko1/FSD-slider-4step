import { Model } from './model';
import { Controller } from './controller';
import { View } from './refactoringView';
import { ControlPanel } from './ControlPanel';

interface Param {
  idForControlPanel?: string;
  elementId?: string;
  sign: string;
  lowerScaleBound?: number;
  upperScaleBound?: number;
  lowerSliderValue?: number;
  upperSliderValue?: number;
  sliderType?: string;
  directionType?: string;
  step?: number;
}

function ISSlider(param: Param) {

  const settings: any = {
    idForControlPanel: param.idForControlPanel || 'doc_panel',
    elementId: param.elementId || 'iss',
    sign: param.sign || '₽',
    lowerScaleBound: param.lowerScaleBound || 0,
    upperScaleBound: param.upperScaleBound || 1000,
    lowerSliderValue: param.lowerSliderValue || 200,
    upperSliderValue: param.upperSliderValue || 800,
    sliderType: param.sliderType || 'double',
    directionType: param.directionType || 'horizontal',
    step: param.step || 50,
  };

  // ПОСТРОЕНИЕ СЛАЙДЕРА ПРИ ПЕРВОМ ЗАПУСКЕ
  const model = new Model(settings);
  const controller = new Controller(settings);
  const view = new View();
  const controlPanel = new ControlPanel();

  controller.bindModel(model);
  controller.bindView(view);
  controller.bindControlPanel(controlPanel);

  view.bindController(controller);
  controlPanel.bindController(controller);
  controlPanel.bindModel(model);

  controller.createSlider();

  controlPanel.buildPanel();
}

export { ISSlider };
