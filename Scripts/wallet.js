const wallet = pc.createScript("wallet");
wallet.attributes.add("Coin", { type: "entity" }); //複製するコインの型と名前を指定
wallet.prototype.initialize = function() {
    if(this.app.touch){
        this.app.touch.on(pc.EVENT_TOUCHSTART,this.create,this);
    }else{
        this.app.mouse.on(pc.EVENT_MOUSEDOWN, this.create, this);
    }
};

wallet.prototype.create = function() {
  const coin = this.Coin.clone(); // テンプレート化されたコインを取得する
  coin.setName("coin_nomal");
  coin.setLocalPosition(0, 6, 0);
  this.app.root.addChild(coin);
  coin.enabled = true; // 非表示になっているコインを表示する
};