export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  // Custom string representation
  toString() {
    return `[object ${this._code}]`;
  }

  // Symbol.toStringTag to customize the default string description
  get [Symbol.toStringTag]() {
    return this._code;
  }
}
