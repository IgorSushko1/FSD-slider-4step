import '../../../is_refactoring.css';
// eslint-disable-next-line import/no-unresolved
import { ViewHorizontal } from './refactoringView';
const view = new ViewHorizontal();
view.setStartingConditions({
    elementId: '#iss',
    sign: '$',
    lowerScaleBound: 100,
    upperScaleBound: 1500,
    lowerSliderValue: 200,
    upperSliderValue: 800,
    sliderType: 'double',
    directionType: 'horizontal',
    step: 10,
    tooltip: 'on',
    valueStateField: 'on',
});
view.init();
const viewSingleHorizontal = new ViewHorizontal();
viewSingleHorizontal.setStartingConditions({
    elementId: '#iss_2',
    sign: '$',
    lowerScaleBound: 100,
    upperScaleBound: 1500,
    lowerSliderValue: 200,
    upperSliderValue: 800,
    sliderType: 'single',
    directionType: 'horizontal',
    step: 10,
    tooltip: 'on',
    valueStateField: 'on',
});
viewSingleHorizontal.init();
const viewSingleVertical = new ViewHorizontal();
viewSingleVertical.setStartingConditions({
    elementId: '#iss_3',
    sign: '$',
    lowerScaleBound: 100,
    upperScaleBound: 1500,
    lowerSliderValue: 200,
    upperSliderValue: 800,
    sliderType: 'single',
    directionType: 'vertical',
    step: 10,
    tooltip: 'on',
    valueStateField: 'on',
});
viewSingleVertical.init();
const viewDoubleVertical = new ViewHorizontal();
viewDoubleVertical.setStartingConditions({
    elementId: '#iss_4',
    sign: '$',
    lowerScaleBound: 100,
    upperScaleBound: 1500,
    lowerSliderValue: 200,
    upperSliderValue: 800,
    sliderType: 'double',
    directionType: 'vertical',
    step: 10,
    tooltip: 'on',
    valueStateField: 'on',
});
viewDoubleVertical.init();
//# sourceMappingURL=refactoringIndex.js.map