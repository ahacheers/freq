import { notes } from "./Notes";

export default input => {
  let A4 = 440.0;
  let A4_INDEX = 57;

  var MINUS = 0;
  var PLUS = 1;

  var f;
  var r = Math.pow(2.0, 1.0 / 12.0);
  var c = Math.pow(2.0, 1.0 / 1200.0);
  var r_index = 0;
  var c_index = 0;
  var side;

  f = A4;

  if (input >= f) {
    while (input >= r * f) {
      f = r * f;
      r_index++;
    }
    while (input > c * f) {
      f = c * f;
      c_index++;
    }
    if (c * f - input < input - f) c_index++;
    if (c_index > 50) {
      r_index++;
      c_index = 100 - c_index;
      if (c_index !== 0) side = MINUS;
      else side = PLUS;
    } else side = PLUS;
  } else {
    while (input <= f / r) {
      f = f / r;
      r_index--;
    }
    while (input < f / c) {
      f = f / c;
      c_index++;
    }
    if (input - f / c < f - input) c_index++;
    if (c_index >= 50) {
      r_index--;
      c_index = 100 - c_index;
      side = PLUS;
    } else {
      if (c_index !== 0) side = MINUS;
      else side = PLUS;
    }
  }

  return `${notes[A4_INDEX + r_index]} ${
    side === PLUS ? " +" : " -"
  }${c_index}c`;
};
