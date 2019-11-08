/**
 * Options for the example plugin.
 */
interface PluginOptions {
  /**
   * CSS selector for the element where generated messages are inserted. (required)
   */
  outputSelector: string;
  /**
   * Color of the message text. (optional)
   */
  outputColor?: string;
}

/**
 * Global options of the example plugin available as properties on $.fn object.
 */
interface PluginGlobalOptions {
  /**
   * Global options of the example plugin.
   */
  options: PluginOptions;
}

/**
 * Function to apply the example plugin to the selected elements of a jQuery result.
 */
interface PluginFunction {
  /**
   * Apply the example plugin to the elements selected in the jQuery result.
   *
   * @param options Options to use for this application of the example plugin.
   * @returns jQuery result.
   */
  (options: PluginOptions): JQuery;
}

/**
 * Declaration of the example plugin.
 */
interface Plugin extends PluginGlobalOptions, PluginFunction { }
/**
 * Extend the jQuery result declaration with the example plugin.
 */
interface JQuery {
	iasSlider: () => string;
	// iasSlider: Plugin;
  /**
   * Extension of the example plugin.
   */
}
