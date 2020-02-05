import { View_horizontal } from './view_horizontal';
import { View_vertical } from './view_vertical';
import { Model } from './model';
import { Controller } from './controller';

interface Param {
  settings_id?: string;
  _type_view?: string;
  _element_id?: string;
  _elem?: any;
  _sign?: string;
  _min_value?: number;
  _max_value?: number;
  _min_slider_value?: number;
  _max_slider_value?: number;
  _slider_type?: string;
  _step?: number;
  controller?: any;
  tooltip?: string;
  value_field_state?: string;
}

function is_slider(param: Param) {
  const settings: any = {
    _element_id: param._element_id || 'iss',
    _sign: param._sign || '₽',
    _min_value: param._min_value || 0,
    _max_value: param._max_value || 1000,
    _min_slider_value: param._min_slider_value || 200,
    _max_slider_value: param._max_slider_value || 800,
    _slider_type: param._slider_type || 'double',
    _type_view: param._type_view || 'horizontal',
    _step: param._step || 50,
    tooltip: param.tooltip || 'on',
    value_field_state: param.value_field_state || 'on',
    settings_id: param.settings_id || 'doc_panel',
  };



  // ПОСТРОЕНИЕ СЛАЙДЕРА ПРИ ПЕРВОМ ЗАПУСКЕ
  let view: any;
  if (settings._type_view == 'vertical') {
    view = new View_vertical();
  } else if (settings._type_view == 'horizontal') {
    view = new View_horizontal();
  }

  let model = new Model(settings);

  let controller = new Controller(settings);

  controller._bind_model(model);
  controller._bind_view(view);
  view._bind_controller(controller);

  controller.create_slider();

  function slider_refresh() {
    if (settings._type_view == 'vertical') {
      view = new View_vertical();
    } else if (settings._type_view == 'horizontal') {
      view = new View_horizontal();
    }
    model = new Model(settings);

    controller = new Controller(settings);

    controller._bind_model(model);
    controller._bind_view(view);
    view._bind_controller(controller);

    controller.create_slider();
  }
}

export { is_slider };
