
function RenderEntry() {
  this._props = {};
}


RenderEntry.prototype = {
  setProp: function(prop, value) {
    this._props[prop] = value;
  }
};
