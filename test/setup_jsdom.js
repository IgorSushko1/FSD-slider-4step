import { JSDOM } from 'jsdom';
const { window } = new JSDOM('<!doctype html><html><body></body></html>');

// Save these two objects in the global space so that libraries/tests
// can hook into them, using the above doc definition.
global.document = window.document;
global.window = window;
