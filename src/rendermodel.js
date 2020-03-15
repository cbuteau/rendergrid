
function RenderModel() {
  this._list = [];
}

RenderModel.prototype = {
  add: function(entry) {
    this._list.push(entry);
  }
};
