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
//# sourceMappingURL=refactoringIndex.js.map