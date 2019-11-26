const Pusher = pc.createScript("pusher");
Pusher.attributes.add("Speed", { type: "number", default: 0.01 });
Pusher.attributes.add("Base", { type: "number", default: 120 });

Pusher.prototype.initialize = function() {
  this.count = 0;
  this.mode = "push";
  this.base = this.Base;
  this.reverse = this.base * 2.02;
};

Pusher.prototype.update = function() {
  if (this.count < this.base && this.mode === "push") {
    this.entity.translate(0, 0, this.Speed);
  } else if (this.count < this.reverse && this.mode === "pull") {
    this.entity.translate(0, 0, -this.Speed);
  } else if (this.count > this.base && this.mode === "push") {
    this.mode = "pull";
  } else if (this.count > this.reverse && this.mode === "pull") {
    this.mode = "push";
    this.count = 0;
  }
  this.count++;
};