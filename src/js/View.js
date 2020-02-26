class View {
    constructor() {
        this.bindController = (controller) => {
            this.controller = controller;
        };
        this.setStartingConditions = (obj) => {
            this.elementId = `#${obj.elementId}` || '#iss';
            this.elem = document.getElementById(obj.elementId);
            this.sign = obj.sign || 'R';
            this.lowerScaleBound = Number(obj.lowerScaleBound) || 0;
            this.upperScaleBound = Number(obj.upperScaleBound) || 1000;
            this.lowerSliderValue = Number(obj.lowerSliderValue) || 200;
            this.upperSliderValue = Number(obj.upperSliderValue) || 800;
            this.sliderType = obj.sliderType || 'single';
            this.directionType = obj.directionType || 'horizontal';
            this.step = obj.step || 2;
            this.style = obj.style || 'iss';
        };
        this.getStartingConditions = () => ({
            elementId: this.elementId,
            sign: this.sign,
            lowerScaleBound: this.lowerScaleBound,
            upperScaleBound: this.upperScaleBound,
            lowerSliderValue: this.lowerSliderValue,
            upperSliderValue: this.upperSliderValue,
            sliderType: this.sliderType,
            step: this.step,
        });
        this.init = () => {
            this.createDOM();
            this.writeDOM();
            this.writeGeometryDOMtoVariables();
            this.createListenerOnSlider();
            this.movesSlidersToStartPositions();
            this.writeMoneyToFields();
            this.moveTooltip();
        };
        this.createDOM = () => {
            if (this.sliderType === 'double') {
                this.createDoubleDOM();
            }
            if (this.sliderType === 'single') {
                this.createSingleDOM();
            }
        };
        this.createSingleDOM = () => {
            this.elem.innerHTML = `<div class="${this.style}__value-field">
      <span class="${this.style}__staticField"></span>
      </div>
      <div class= "${this.style}__container">
      <div class= "${this.style}__scale"></div>
      <div class="${this.style}__color-bar"></div>
      <div class="${this.style}__single-fly ${this.style}__tooltip"></div>
      <div class="${this.style}__single ${this.style}__drag"></div>
      <div class="${this.style}__visible-scale"></div>
      </div>`;
        };
        this.createDoubleDOM = () => {
            this.elem.innerHTML = `<div class="${this.style}__value-field">
      <span class="${this.style}__staticField"></span>
      -
      <span class="${this.style}__staticField"></span>
      </div>
      <div class= "${this.style}__container">
      <div class= "${this.style}__scale"></div>
      <div class="${this.style}__double-fly-first ${this.style}__tooltip"></div>
      <div class="${this.style}__double-first-slider ${this.style}__drag"></div>
      <div class="${this.style}__double-fly-second ${this.style}__tooltip"></div>
      <div class="${this.style}__double-second-slider ${this.style}__drag"></div>
      <div class="${this.style}__color-bar"></div>
      <div class="${this.style}__visible-scale"></div>
      </div>`;
        };
        this.writeDOM = () => {
            this.checkElementsInDOM();
            if (this.sliderType === 'single') {
                this.writeSingleDOMtoVariables();
                this.writeSingleSliderIndent();
            }
            else if (this.sliderType === 'double') {
                this.writeDoubleDOMtoVariables();
                this.writeDoubleSliderIndent();
            }
        };
        this.checkElementsInDOM = () => {
            const DOMElements = this.elem.querySelectorAll(`.${this.style}__drag`);
            if ((DOMElements.length > 0)) {
                this.sliderInDOM = DOMElements;
            }
        };
        this.writeSingleDOMtoVariables = () => {
            [this.scale] = this.returnElementsFromDOM(`.${this.style}__scale`, 1);
            [this.singleSlider] = this.returnElementsFromDOM(`.${this.style}__drag`, 1);
            [this.staticFieldSingle] = this.returnElementsFromDOM(`.${this.style}__staticField`, 1);
            [this.flyFieldSingle] = this.returnElementsFromDOM(`.${this.style}__tooltip`, 1);
            [this.ribbon] = this.returnElementsFromDOM(`.${this.style}__color-bar`, 1);
        };
        this.writeDoubleDOMtoVariables = () => {
            [this.scale] = this.returnElementsFromDOM(`.${this.style}__scale`, 1);
            [this.lowerSlider, this.upperSlider] = this.returnElementsFromDOM(`.${this.style}__drag`, 2);
            [this.staticFieldLower, this.staticFieldUpper] = this.returnElementsFromDOM(`.${this.style}__staticField`, 2);
            [this.flyFieldLower, this.flyFieldUpper] = this.returnElementsFromDOM(`.${this.style}__tooltip`, 2);
            [this.ribbon] = this.returnElementsFromDOM(`.${this.style}__color-bar`, 1);
        };
        this.writeSingleSliderIndent = () => {
            const elem = this.returnElementsFromDOM(`.${this.style}__drag`, 1);
            this.singleSliderPosition = this.returnIndent(elem[0]);
        };
        this.writeDoubleSliderIndent = () => {
            const elems = this.returnElementsFromDOM(`.${this.style}__drag`, 2);
            this.lowerSliderPosition = this.returnIndent(elems[0]);
            this.upperSliderPosition = this.returnIndent(elems[1]);
        };
        this.returnElementsFromDOM = (className, length) => {
            const DOMElements = this.elem.querySelectorAll(className);
            if ((DOMElements.length === length)) {
                return DOMElements;
            }
            return false;
        };
        this.returnIndent = (element) => {
            if (this.directionType === 'horizontal') {
                return element.offsetLeft;
            }
            if (this.directionType === 'vertical') {
                return element.offsetTop;
            }
        };
        this.writeGeometryDOMtoVariables = () => {
            this.setDirection();
            this.writeGeometryOfSlider();
        };
        this.setDirection = () => {
            if (this.directionType === 'horizontal') {
                this.mainAxisSize = this.scale.offsetWidth;
            }
            if (this.directionType === 'vertical') {
                this.mainAxisSize = this.scale.offsetHeight;
            }
        };
        this.writeGeometryOfSlider = () => {
            if (this.sliderType === 'single') {
                this.sliderWidth = this.singleSlider.offsetWidth;
                this.sliderHeight = this.singleSlider.offsetHeight;
            }
            else if (this.sliderType === 'double') {
                this.sliderWidth = this.lowerSlider.offsetWidth;
                this.sliderHeight = this.lowerSlider.offsetHeight;
            }
            this.calcPixelStep();
        };
        this.calcPixelStep = () => {
            const stepInPixel = (this.mainAxisSize / (this.upperScaleBound - this.lowerScaleBound)) * this.step;
            if (stepInPixel < 1 && stepInPixel !== 0) {
                alert('Шаг в пикселях меньше 1px, расчеты не производятся. Шаг автоматически будет увеличиваться на 50, пока не будет соответствовать условиям');
                this.step = this.step + 50;
                this.calcPixelStep();
            }
            else {
                this.pixelStep = stepInPixel;
                this.roundedPixelStep = Math.round(stepInPixel);
            }
        };
        this.createListenerOnSlider = () => {
            if (this.sliderType === 'single') {
                this.singleSlider.onmousedown = this.eventOnSlider;
            }
            else if (this.sliderType === 'double') {
                this.lowerSlider.onmousedown = this.eventOnSlider;
                this.upperSlider.onmousedown = this.eventOnSlider;
            }
        };
        this.movesSlidersToStartPositions = () => {
            if (this.sliderType === 'single') {
                this.setSingleToStartPosition();
                this.moveRibbon();
            }
            if (this.sliderType === 'double') {
                this.setsDoubleToStartPostions();
                this.moveRibbon();
            }
        };
        this.setSingleToStartPosition = () => {
            if (this.directionType === 'horizontal') {
                this.singleSlider.style.left = `${this.calcMoneyToPosition(this.lowerSliderValue)}px`;
            }
            if (this.directionType === 'vertical') {
                this.singleSlider.style.top = `${this.calcMoneyToPosition(this.lowerSliderValue)}px`;
            }
        };
        this.setsDoubleToStartPostions = () => {
            if (this.lowerScaleBound <= this.lowerSliderValue && this.upperScaleBound >= this.upperSliderValue) {
                if (this.directionType === 'horizontal') {
                    this.lowerSlider.style.left = `${this.calcMoneyToPosition(this.lowerSliderValue)}px`;
                    this.upperSlider.style.left = `${this.calcMoneyToPosition(this.upperSliderValue)}px`;
                }
                if (this.directionType === 'vertical') {
                    this.lowerSlider.style.top = `${this.calcMoneyToPosition(this.upperSliderValue)}px`;
                    this.upperSlider.style.top = `${this.calcMoneyToPosition(this.lowerSliderValue)}px`;
                }
            }
        };
        this.writeMoneyToFields = () => {
            if (this.sliderType === 'single') {
                this.staticFieldSingle.innerText = `${this.lowerSliderValue}${this.sign}`;
                this.flyFieldSingle.innerText = `${this.lowerSliderValue}${this.sign}`;
            }
            if (this.sliderType === 'double') {
                if (this.directionType === 'horizontal') {
                    this.staticFieldLower.innerText = `${this.lowerSliderValue}${this.sign}`;
                    this.staticFieldUpper.innerText = `${this.upperSliderValue}${this.sign}`;
                    this.flyFieldLower.innerText = `${this.lowerSliderValue}${this.sign}`;
                    this.flyFieldUpper.innerText = `${this.upperSliderValue}${this.sign}`;
                }
                if (this.directionType === 'vertical') {
                    this.staticFieldLower.innerText = `${this.lowerSliderValue}${this.sign}`;
                    this.staticFieldUpper.innerText = `${this.upperSliderValue}${this.sign}`;
                    this.flyFieldLower.innerText = `${this.upperSliderValue}${this.sign}`;
                    this.flyFieldUpper.innerText = `${this.lowerSliderValue}${this.sign}`;
                }
            }
        };
        this.eventOnSlider = (_e) => {
            _e.preventDefault();
            this.setRestrictionOfSliderMovement(_e);
            document.onmouseup = this.cancelEvents;
            document.onmousemove = this.moveEventWithHoldMouse;
        };
        this.setRestrictionOfSliderMovement = (_e) => {
            if (this.sliderType === 'double') {
                this.setRestrictionForDoubleSlider(_e);
            }
            if (this.sliderType === 'single') {
                this.setRestrictionForSingleSlider();
            }
        };
        this.setRestrictionForDoubleSlider = (_e) => {
            if (this.directionType === 'horizontal') {
                if (_e.target === this.lowerSlider) {
                    this.targetSlider = this.lowerSlider;
                    this.lowerRestriction = 0;
                    this.upperRestriction = this.upperSliderPosition;
                    this.lowerCostRestriction = this.lowerScaleBound;
                    this.upperCostRestriction = this.getCostForSlider(this.upperRestriction);
                }
                if (_e.target === this.upperSlider) {
                    this.targetSlider = this.upperSlider;
                    this.lowerRestriction = this.lowerSliderPosition;
                    this.upperRestriction = this.mainAxisSize;
                    this.lowerCostRestriction = this.getCostForSlider(this.lowerRestriction);
                    this.upperCostRestriction = this.upperScaleBound;
                }
            }
            if (this.directionType === 'vertical') {
                if (_e.target === this.lowerSlider) {
                    this.targetSlider = this.lowerSlider;
                    this.lowerRestriction = 0;
                    this.upperRestriction = this.upperSliderPosition;
                    this.lowerCostRestriction = this.getCostForSlider(this.lowerRestriction);
                    this.upperCostRestriction = this.getCostForSlider(this.upperRestriction);
                }
                if (_e.target === this.upperSlider) {
                    this.targetSlider = this.upperSlider;
                    this.lowerRestriction = this.lowerSliderPosition;
                    this.upperRestriction = this.mainAxisSize;
                    this.lowerCostRestriction = this.getCostForSlider(this.lowerRestriction);
                    this.upperCostRestriction = this.getCostForSlider(this.upperRestriction);
                }
            }
        };
        this.setRestrictionForSingleSlider = () => {
            if (this.directionType === 'horizontal') {
                this.targetSlider = this.singleSlider;
                this.lowerRestriction = 0;
                this.upperRestriction = this.mainAxisSize;
                this.lowerCostRestriction = this.lowerScaleBound;
                this.upperCostRestriction = this.upperScaleBound;
            }
            if (this.directionType === 'vertical') {
                this.targetSlider = this.singleSlider;
                this.lowerRestriction = 0;
                this.upperRestriction = this.mainAxisSize;
                this.lowerCostRestriction = this.upperScaleBound;
                this.upperCostRestriction = this.lowerScaleBound;
            }
        };
        this.getCostForSlider = (sliderPostionInPixel) => {
            if (this.directionType === 'horizontal') {
                if (sliderPostionInPixel <= 0) {
                    return this.lowerScaleBound;
                }
                return (this.lowerScaleBound + (Math.round(sliderPostionInPixel / this.pixelStep) * this.step));
            }
            if (this.directionType === 'vertical') {
                if (sliderPostionInPixel <= 0) {
                    return this.upperScaleBound;
                }
                return ((Math.round((this.mainAxisSize - sliderPostionInPixel) / this.pixelStep) * this.step) + this.lowerScaleBound);
            }
        };
        this.moveEventWithHoldMouse = (_e) => {
            const innerMousePosition = this.getMousePosition(_e);
            const nearestRoundedStep = this.calcNearestStep(innerMousePosition);
            const finalPositionInPixel = this.calcFinalPosition(nearestRoundedStep);
            const finalCost = this.calcFinalCost(nearestRoundedStep);
            this.moveSlider(finalPositionInPixel);
            this.showMoneyOnScreen(finalCost);
            this.writeMoneyToVariables(finalCost);
            this.setOverlay();
            this.moveRibbon();
            this.moveTooltip();
        };
        this.getMousePosition = (_e) => {
            this.clientRect = this.scale.getBoundingClientRect();
            if (this.directionType === 'horizontal') {
                this.indent = this.clientRect.left;
                return (_e.clientX - this.indent - (this.sliderWidth / 2));
            }
            if (this.directionType === 'vertical') {
                this.indent = this.clientRect.top;
                return (_e.clientY - this.indent - (this.sliderHeight / 2));
            }
        };
        this.calcNearestStep = (_positionInPixel) => {
            if (this.directionType === 'horizontal') {
                return Math.round(_positionInPixel / this.pixelStep);
            }
            if (this.directionType === 'vertical') {
                return Math.round((this.mainAxisSize - _positionInPixel) / this.pixelStep);
            }
        };
        this.calcFinalPosition = (_nearestRoundedStep) => {
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
                    return (this.mainAxisSize - positionInPixel);
                }
                if ((this.mainAxisSize - positionInPixel) <= this.lowerRestriction) {
                    return this.lowerRestriction;
                }
                if ((this.mainAxisSize - positionInPixel) >= this.upperRestriction) {
                    return this.upperRestriction;
                }
            }
        };
        this.calcFinalCost = (_nearestRoundedStep) => {
            if (this.directionType === 'horizontal') {
                const positionInMoney = this.lowerScaleBound + (_nearestRoundedStep * this.step);
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
                const positionInMoney = (_nearestRoundedStep * this.step) + this.lowerScaleBound;
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
        };
        this.isPixelsInBorder = (_position) => ((_position >= this.lowerRestriction) && (_position <= this.upperRestriction));
        this.isMoneyInBorder = (_position) => {
            if (this.directionType === 'horizontal') {
                return ((_position >= this.lowerCostRestriction) && (_position <= this.upperCostRestriction));
            }
            if (this.directionType === 'vertical') {
                return ((_position <= this.lowerCostRestriction) && (_position >= this.upperCostRestriction));
            }
        };
        this.showMoneyOnScreen = (finalCost) => {
            const cost = `${finalCost}${this.sign}`;
            if (this.directionType === 'horizontal') {
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
            if (this.directionType === 'vertical') {
                if (this.targetSlider === this.lowerSlider) {
                    this.staticFieldUpper.textContent = `${cost}`;
                    this.flyFieldLower.textContent = `${cost}`;
                }
                if (this.targetSlider === this.upperSlider) {
                    this.staticFieldLower.textContent = `${cost}`;
                    this.flyFieldUpper.textContent = `${cost}`;
                }
                if (this.targetSlider === this.singleSlider) {
                    this.staticFieldSingle.textContent = `${cost}`;
                    this.flyFieldSingle.textContent = `${cost}`;
                }
            }
        };
        this.writeMoneyToVariables = (finalCost) => {
            if (this.targetSlider === this.lowerSlider) {
                this.lowerSliderValue = finalCost;
            }
            if (this.targetSlider === this.upperSlider) {
                this.upperSliderValue = finalCost;
            }
            if (this.targetSlider === this.singleSlider) {
                this.lowerSliderValue = finalCost;
            }
        };
        this.moveRibbon = () => {
            const setHorizontalRibbonVariables = () => {
                if (this.sliderInDOM.length === 1) {
                    this.ribbon.style.left = '0px';
                    this.ribbon.style.width = `${this.singleSlider.offsetLeft + (this.sliderWidth / 2)}px`;
                }
                else if (this.sliderInDOM.length === 2) {
                    this.ribbon.style.left = `${this.lowerSlider.offsetLeft + (this.sliderWidth / 2)}px`;
                    this.ribbon.style.width = `${this.upperSlider.offsetLeft - this.lowerSlider.offsetLeft}px`;
                }
            };
            const setVerticalRibbonVariables = () => {
                if (this.sliderInDOM.length === 1) {
                    this.ribbon.style.top = `${this.singleSlider.offsetTop + (this.sliderHeight / 2)}px`;
                    this.ribbon.style.height = `${this.mainAxisSize - this.singleSlider.offsetTop + (this.sliderHeight / 2)}px`;
                }
                else if (this.sliderInDOM.length === 2) {
                    this.ribbon.style.top = `${this.lowerSlider.offsetTop + (this.sliderHeight / 2)}px`;
                    this.ribbon.style.height = `${this.upperSlider.offsetTop - this.lowerSlider.offsetTop}px`;
                }
            };
            if (this.directionType === 'horizontal') {
                setHorizontalRibbonVariables();
            }
            if (this.directionType === 'vertical') {
                setVerticalRibbonVariables();
            }
        };
        this.moveSlider = (num) => {
            if (this.directionType === 'horizontal') {
                this.targetSlider.style.left = `${num}px`;
            }
            else if (this.directionType === 'vertical') {
                this.targetSlider.style.top = `${num}px`;
            }
        };
        this.moveTooltip = () => {
            const move = (direction, offset, sliderSize) => {
                if (this.sliderType === 'single') {
                    this.elem.querySelectorAll(`.${this.style}__tooltip`)[0].style[direction] = `${this.singleSlider[offset] - sliderSize}px`;
                }
                if (this.sliderType === 'double') {
                    this.elem.querySelectorAll(`.${this.style}__tooltip`)[0].style[direction] = `${this.lowerSlider[offset] - sliderSize}px`;
                    this.elem.querySelectorAll(`.${this.style}__tooltip`)[1].style[direction] = `${this.upperSlider[offset] - sliderSize}px`;
                }
            };
            if (this.directionType === 'horizontal') {
                move('left', 'offsetLeft', (this.sliderWidth / 3));
            }
            if (this.directionType === 'vertical') {
                move('top', 'offsetTop', 0);
            }
        };
        this.setOverlay = () => {
            if (this.targetSlider === this.lowerSlider) {
                this.targetSlider.style.zIndex = '100';
                this.upperSlider.style.zIndex = '1';
            }
            else if (this.targetSlider === this.upperSlider) {
                this.targetSlider.style.zIndex = '100';
                this.lowerSlider.style.zIndex = '1';
            }
        };
        this.cancelEvents = () => {
            this.writeDOM();
            document.onmouseup = null;
            document.onmousemove = null;
        };
    }
    setController() {
        const obj = {
            lowerSliderValue: this.lowerSliderValue,
            upperSliderValue: this.upperSliderValue,
        };
        this.controller.getView(obj);
    }
    calcMoneyToPosition(money) {
        let position;
        if (this.directionType === 'horizontal') {
            position = ((money - this.lowerScaleBound) / this.step) * this.pixelStep;
        }
        if (this.directionType === 'vertical') {
            position = this.mainAxisSize - (((money - this.lowerScaleBound) / this.step) * this.pixelStep);
        }
        return position;
    }
}
export { View };
//# sourceMappingURL=View.js.map