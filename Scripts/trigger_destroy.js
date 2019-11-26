var TroggerDestroy = pc.createScript('triggerDestroy');

// initialize code called once per entity
TroggerDestroy.prototype.initialize = function() {
     this.entity.collision.on('triggerenter', this.onTriggerEnter, this);
};

// update code called every frame
TroggerDestroy.prototype.update = function(dt) {
    
};

TroggerDestroy.prototype.onTriggerEnter = function(entity) {
    entity.destroy()
}