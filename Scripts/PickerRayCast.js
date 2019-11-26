const PickerRaycast = pc.createScript("pickerRaycast");
PickerRaycast.prototype.initialize = function() {
  if (this.app.touch) {
    this.app.touch.on(pc.EVENT_TOUCHSTART, this.onSelect, this);
  } else {
    this.app.mouse.on(pc.EVENT_MOUSEDOWN, this.onSelect, this);
  }
};

PickerRaycast.prototype.onSelect = function(e) {
  let from, to;
  if (this.app.touch) {
    from = this.entity.camera.screenToWorld(
      e.touches[0].x,
      e.touches[0].y,
      this.entity.camera.nearClip
    );
    to = this.entity.camera.screenToWorld(
      e.touches[0].x,
      e.touches[0].y,
      this.entity.camera.farClip
    );
  } else {
    from = this.entity.camera.screenToWorld(
      e.x,
      e.y,
      this.entity.camera.nearClip
    );
    to = this.entity.camera.screenToWorld(e.x, e.y, this.entity.camera.farClip);
  }
  var result = this.app.systems.rigidbody.raycastFirst(from, to);
  if (result) {
    var pickedEntity = result.entity;
    if (pickedEntity.name === "TouchableSpace") {
      pickedEntity.script.createCoin.create(result.point);
    }
  }
};
