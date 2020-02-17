import '../../../is_refactoring.css';
// import { View } from './refactoringView';
// import { ControlPanel } from './ControlPanel';
import { ISSlider } from './ISSlider';
// const view = new View();
// const controlPanel = new ControlPanel();
// controlPanel.buildPanel();
// view.setStartingConditions({
//   elementId: '#iss',
//   sign: '$',
//   lowerScaleBound: 100,
//   upperScaleBound: 1500,
//   lowerSliderValue: 200,
//   upperSliderValue: 800,
//   sliderType: 'double',
//   directionType: 'horizontal',
//   step: 10,
// });
// view.init();
const settingsForHorizontalDuble = {
    idForControlPanel: 'doc_panel',
    elementId: '#iss',
    sign: '$',
    lowerScaleBound: 100,
    upperScaleBound: 1500,
    lowerSliderValue: 200,
    upperSliderValue: 800,
    sliderType: 'double',
    directionType: 'horizontal',
    step: 10,
};
ISSlider(settingsForHorizontalDuble);
// const viewSingleHorizontal = new View();
// viewSingleHorizontal.setStartingConditions({
//   elementId: '#iss_2',
//   sign: '$',
//   lowerScaleBound: 100,
//   upperScaleBound: 1500,
//   lowerSliderValue: 200,
//   upperSliderValue: 800,
//   sliderType: 'single',
//   directionType: 'horizontal',
//   step: 10,
// });
// viewSingleHorizontal.init();
// const viewSingleVertical = new View();
// viewSingleVertical.setStartingConditions({
//   elementId: '#iss_3',
//   sign: '$',
//   lowerScaleBound: 100,
//   upperScaleBound: 1500,
//   lowerSliderValue: 200,
//   upperSliderValue: 800,
//   sliderType: 'single',
//   directionType: 'vertical',
//   step: 10,
// });
// viewSingleVertical.init();
// const viewDoubleVertical = new View();
// viewDoubleVertical.setStartingConditions({
//   elementId: '#iss_4',
//   sign: '$',
//   lowerScaleBound: 100,
//   upperScaleBound: 1500,
//   lowerSliderValue: 200,
//   upperSliderValue: 800,
//   sliderType: 'double',
//   directionType: 'vertical',
//   step: 10,
// });
// viewDoubleVertical.init();
//# sourceMappingURL=refactoringIndex.js.map