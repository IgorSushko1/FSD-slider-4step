import "../is_horizontal.css";
import "../is_vertical.css";
import { is_slider } from "./is_slider";
is_slider({ _element_id: "iss", settings_id: "doc_panel" });
is_slider({ _element_id: "iss_2", settings_id: "doc_panel_2" });
is_slider({
	_element_id: "iss_3",
	settings_id: "doc_panel_3",
	_type_view: "vertical",
	_min_value: 300,
	_max_value:  5000,
	_min_slider_value: 400,
	_max_slider_value: 500
});