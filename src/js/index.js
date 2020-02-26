import '../styles.scss';
import { ISSlider } from './ISSlider';
const settingsForHorizontalDuble = {
    idForControlPanel: 'doc_panel',
    elementId: 'iss',
    sign: '$',
    lowerScaleBound: 100,
    upperScaleBound: 1500,
    lowerSliderValue: 200,
    upperSliderValue: 800,
    sliderType: 'double',
    directionType: 'horizontal',
    step: 10,
    style: 'issHorizontal',
};
ISSlider(settingsForHorizontalDuble);
const settingsForHorizontalSingle = {
    idForControlPanel: 'doc_panel_2',
    elementId: 'iss_2',
    sign: '$',
    lowerScaleBound: 100,
    upperScaleBound: 1500,
    lowerSliderValue: 200,
    upperSliderValue: 800,
    sliderType: 'single',
    directionType: 'horizontal',
    step: 10,
    style: 'issHorizontal',
};
ISSlider(settingsForHorizontalSingle);
const settingsForVerticalDouble = {
    idForControlPanel: 'doc_panel_3',
    elementId: 'iss_3',
    sign: '$',
    lowerScaleBound: 100,
    upperScaleBound: 1500,
    lowerSliderValue: 200,
    upperSliderValue: 800,
    sliderType: 'double',
    directionType: 'vertical',
    step: 10,
    style: 'issVertical',
};
ISSlider(settingsForVerticalDouble);
const settingsForVerticalSingle = {
    idForControlPanel: 'doc_panel_4',
    elementId: 'iss_4',
    sign: '$',
    lowerScaleBound: 100,
    upperScaleBound: 1500,
    lowerSliderValue: 200,
    upperSliderValue: 800,
    sliderType: 'single',
    directionType: 'vertical',
    step: 10,
    style: 'issVertical',
};
ISSlider(settingsForVerticalSingle);
//# sourceMappingURL=index.js.map