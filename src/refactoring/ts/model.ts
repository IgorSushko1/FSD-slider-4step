interface Model {
  lowerScaleBound: number;
  upperScaleBound: number;
  lowerSliderValue: number;
  upperSliderValue: number;
  sign: string;
}

interface objFromView {
  lowerSliderValue?: number;
  upperSliderValue?: number;
}
interface objFromController {
  lowerScaleBound: number;
  upperScaleBound: number;
  lowerSliderValue: number;
  upperSliderValue: number;
  sign: string;
}
class Model {
  constructor(param: objFromController) {
    this.lowerScaleBound = param.lowerScaleBound || 0;
    this.upperScaleBound = param.upperScaleBound || 1000;
    this.lowerSliderValue = param.lowerSliderValue || 200;
    this.upperSliderValue = param.upperSliderValue || 800;
    this.sign = param.sign || '?';
  }

  setModel(obj: objFromView) {
    this.lowerSliderValue = obj.lowerSliderValue;
    this.upperSliderValue = obj.upperSliderValue;
  }

  getModel() {
    return {
      lowerScaleBound: this.lowerScaleBound,
      upperScaleBound: this.upperScaleBound,
      lowerSliderValue: this.lowerSliderValue,
      upperSliderValue: this.upperSliderValue,
      sign: this.sign,
    };
  }
}

export { Model };
