import { Model } from './model';
import { Controller } from './controller';
import { View } from './View';
import { ControlPanel } from './controlPanel';
function ISSlider(param) {
    const settings = {
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
        style: param.style || 'iss',
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
    controlPanel.setSettings(settings);
    controller.createSlider();
    controlPanel.buildPanel();
}
export { ISSlider };
//# sourceMappingURL=ISSlider.js.map