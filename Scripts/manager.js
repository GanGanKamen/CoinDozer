const Manager = pc.createScript("manager");
Manager.attributes.add("MainCamera", { type: "entity" });
Manager.attributes.add("Interval", { type: "number", default: 1000 });

Manager.prototype.initialize = function() {
  this.cameraAnimation(this.MainCamera);
  this.setTimer(this.Interval);
};

Manager.prototype.cameraAnimation = function({ camera }) {
  if (this.app.touch) {
    camera.fov = 55;
  } else {
    this.app.mouse.on(pc.EVENT_MOUSEDOWN, this.create, this);
  }
};

Manager.prototype.setTimer = function(IntervalValue) {
  setInterval(() => {
    if (TimerValue > 0) {
      TimerValue = TimerValue - 1;
    } else {
      TimerValue = 5;
      WalletValue++;
    }
  }, IntervalValue);
};
