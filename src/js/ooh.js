import ColorPoint from './color-point.js';

window.Ooh = {
  alert: () => {
    alert();
  },
  start: () => {
    var cp = new ColorPoint(1, 2, 'red');
    console.log (cp.toString());
  }
}
