 if (this.timer >= 50) {
     this.a = this.game.add.sprite((game.width) + 100, 690, "items", "biscuit");
     this.a.anchor.setTo(.5);
     this.points.addChild(this.a);
     this.c = this.game.add.sprite((game.width) + 500, 690, "items", "biscuit");

     this.c.anchor.setTo(.5);


     this.points.addChild(this.c);
     this.b = this.game.add.sprite((game.width) + 300, 690, "items", "biscuit");

     this.b.anchor.setTo(.5);

     this.points.addChild(this.b);
 } else if (this.timer >= 45) {
     this.a1 = this.game.add.sprite((game.width) + 100, 640, "items", "JAcket");
     this.b1 = this.game.add.sprite((game.width) + 300, 640, "items", "JAcket");
     this.c1 = this.game.add.sprite((game.width) + 500, 640, "items", "JAcket");
     this.a1.anchor.setTo(.5);
     this.b1.anchor.setTo(.5);
     this.c1.anchor.setTo(.5);

     this.points.addChild(this.a1);
     this.points.addChild(this.b1);
     this.points.addChild(this.c1);
 } else if (this.timer >= 40) {
     this.a1 = this.game.add.sprite((game.width) + 100, 640, "items", "rocks");
     this.b1 = this.game.add.sprite((game.width) + 300, 640, "items", "rocks");
     this.c1 = this.game.add.sprite((game.width) + 500, 640, "items", "rocks");
     this.a1.anchor.setTo(.5);
     this.b1.anchor.setTo(.5);
     this.c1.anchor.setTo(.5);

     this.points.addChild(this.a1);
     this.points.addChild(this.b1);
     this.points.addChild(this.c1);
 } else if (this.timer >= 35) {
     this.a1 = this.game.add.sprite((game.width) + 100, 640, "items", "tv");
     this.b1 = this.game.add.sprite((game.width) + 300, 640, "items", "tv");
     this.c1 = this.game.add.sprite((game.width) + 500, 640, "items", "tv");
     this.a1.anchor.setTo(.5);
     this.b1.anchor.setTo(.5);
     this.c1.anchor.setTo(.5);

     this.points.addChild(this.a1);
     this.points.addChild(this.b1);
     this.points.addChild(this.c1);
 } else if (this.timer >= 30) {
     this.a2 = this.game.add.sprite((game.width) + 100, 640, "items", "cooker");
     this.b2 = this.game.add.sprite((game.width) + 300, 640, "items", "cooker");
     this.c2 = this.game.add.sprite((game.width) + 500, 640, "items", "cooker");
     this.a2.anchor.setTo(.5);
     this.b2.anchor.setTo(.5);
     this.c2.anchor.setTo(.5);

     this.points.addChild(this.a2);
     this.points.addChild(this.b2);
     this.points.addChild(this.c2);

 } else if (this.timer >= 25) {
     this.a1 = this.game.add.sprite((game.width) + 100, 640, "items", "refrigerator");
     this.b1 = this.game.add.sprite((game.width) + 300, 640, "items", "refrigerator");
     this.c1 = this.game.add.sprite((game.width) + 500, 640, "items", "refrigerator");
     this.a1.anchor.setTo(.5);
     this.b1.anchor.setTo(.5);
     this.c1.anchor.setTo(.5);

     this.points.addChild(this.a1);
     this.points.addChild(this.b1);
     this.points.addChild(this.c1);
 } else if (this.timer >= 20) {
     this.a3 = this.game.add.sprite((game.width) + 100, 640, "items", "rocks");
     this.b3 = this.game.add.sprite((game.width) + 300, 640, "items", "rocks");
     this.c3 = this.game.add.sprite((game.width) + 500, 640, "items", "rocks");
     this.a3.anchor.setTo(.5);
     this.b3.anchor.setTo(.5);
     this.c3.anchor.setTo(.5);

     this.points.addChild(this.a3);
     this.points.addChild(this.b3);
     this.points.addChild(this.c3);

 } else if (this.timer >= 15) {
     this.a1 = this.game.add.sprite((game.width) + 100, 640, "items", "rice");
     this.b1 = this.game.add.sprite((game.width) + 300, 640, "items", "rice");
     this.c1 = this.game.add.sprite((game.width) + 500, 640, "items", "rice");
     this.a1.anchor.setTo(.5);
     this.b1.anchor.setTo(.5);
     this.c1.anchor.setTo(.5);

     this.points.addChild(this.a1);
     this.points.addChild(this.b1);
     this.points.addChild(this.c1);
 } else if (this.timer >= 10) {
     this.a4 = this.game.add.sprite((game.width) + 100, 640, "items", "towel");
     this.b4 = this.game.add.sprite((game.width) + 300, 640, "items", "towel");
     this.c4 = this.game.add.sprite((game.width) + 500, 640, "items", "towel");
     this.a4.anchor.setTo(.5);
     this.b4.anchor.setTo(.5);
     this.c4.anchor.setTo(.5);

     this.points.addChild(this.a4);
     this.points.addChild(this.b4);
     this.points.addChild(this.c4);

 } else if (this.timer >= 0) {

     this.a = this.game.add.sprite((game.width) + 100, 640, "items", "barricade");
     this.a.anchor.setTo(.5);
     this.points.addChild(this.a);
     this.c = this.game.add.sprite((game.width) + 500, 640, "items", "barricade");

     this.c.anchor.setTo(.5);


     this.points.addChild(this.c);
     this.b = this.game.add.sprite((game.width) + 300, 640, "items", "barricade");

     this.b.anchor.setTo(.5);

     this.points.addChild(this.b);
 }

 } else if (random == 2) {
     this.bar2 = this.game.add.sprite((game.width), 600, "bar");
     this.game.physics.arcade.enable(this.bar2);
     this.bar2.body.allowGravity = false;
     this.bar2.body.immovable = true;
     this.bar2.pixelPerfect = true;
     this.items.addChild(this.bar2);

     if (this.timer >= 50) {
         this.a1 = this.game.add.sprite((game.width) + 100, 550, "items", "tv");
         this.b1 = this.game.add.sprite((game.width) + 300, 550, "items", "tv");
         this.c1 = this.game.add.sprite((game.width) + 500, 550, "items", "tv");
         this.a1.anchor.setTo(.5);
         this.b1.anchor.setTo(.5);
         this.c1.anchor.setTo(.5);

         this.points.addChild(this.a1);
         this.points.addChild(this.b1);
         this.points.addChild(this.c1);

     } else if (this.timer >= 45) {
         this.a = this.game.add.sprite((game.width) + 100, 550, "items", "cooker");
         this.a.anchor.setTo(.5);
         this.points.addChild(this.a);
         this.c = this.game.add.sprite((game.width) + 500, 550, "items", "cooker");
         this.c.anchor.setTo(.5);
         this.points.addChild(this.c);
         this.b = this.game.add.sprite((game.width) + 300, 550, "items", "cooker");
         this.b.anchor.setTo(.5);
         this.points.addChild(this.b);

     } else if (this.timer >= 40) {
         // this.a = this.game.add.sprite((game.width) + 100, 550, "items", "barricade");
         // this.a.anchor.setTo(.5);
         // this.points.addChild(this.a);
         // this.c = this.game.add.sprite((game.width) + 500, 550, "items", "barricade");
         // this.c.anchor.setTo(.5);
         // this.points.addChild(this.c);
         this.b = this.game.add.sprite((game.width) + 300, 550, "items", "barricade");
         this.b.anchor.setTo(.5);
         this.points.addChild(this.b);

     } else if (this.timer >= 35) {
         // this.a = this.game.add.sprite((game.width) + 100, 550, "items", "JAcket");
         // this.a.anchor.setTo(.5);
         // this.points.addChild(this.a);
         // this.c = this.game.add.sprite((game.width) + 500, 550, "items", "JAcket");
         // this.c.anchor.setTo(.5);
         // this.points.addChild(this.c);
         this.b = this.game.add.sprite((game.width) + 300, 550, "items", "JAcket");
         this.b.anchor.setTo(.5);
         this.points.addChild(this.b);

     } else if (this.timer >= 30) {
         this.a4 = this.game.add.sprite((game.width) + 100, 550, "items", "towel");
         this.b4 = this.game.add.sprite((game.width) + 300, 550, "items", "towel");
         this.c4 = this.game.add.sprite((game.width) + 500, 550, "items", "towel");
         this.a4.anchor.setTo(.5);
         this.b4.anchor.setTo(.5);
         this.c4.anchor.setTo(.5);

         this.points.addChild(this.a4);
         this.points.addChild(this.b4);
         this.points.addChild(this.c4);

     } else if (this.timer >= 25) {
         // this.a = this.game.add.sprite((game.width) + 100, 550, "items", "barricade");
         // this.a.anchor.setTo(.5);
         // this.points.addChild(this.a);
         // this.c = this.game.add.sprite((game.width) + 500, 550, "items", "barricade");
         // this.c.anchor.setTo(.5);
         // this.points.addChild(this.c);
         this.b = this.game.add.sprite((game.width) + 300, 550, "items", "barricade");
         this.b.anchor.setTo(.5);
         this.points.addChild(this.b);

     } else if (this.timer >= 20) {
         this.a3 = this.game.add.sprite((game.width) + 100, 550, "items", "rocks");
         this.b3 = this.game.add.sprite((game.width) + 300, 550, "items", "rocks");
         this.c3 = this.game.add.sprite((game.width) + 500, 550, "items", "rocks");
         this.a3.anchor.setTo(.5);
         this.b3.anchor.setTo(.5);
         this.c3.anchor.setTo(.5);

         this.points.addChild(this.a3);
         this.points.addChild(this.b3);
         this.points.addChild(this.c3);

     } else if (this.timer >= 15) {
         this.a = this.game.add.sprite((game.width) + 100, 550, "items", "rice");
         this.a.anchor.setTo(.5);
         this.points.addChild(this.a);
         this.c = this.game.add.sprite((game.width) + 500, 550, "items", "rice");
         this.c.anchor.setTo(.5);
         this.points.addChild(this.c);
         this.b = this.game.add.sprite((game.width) + 300, 550, "items", "rice");
         this.b.anchor.setTo(.5);
         this.points.addChild(this.b);

     } else if (this.timer >= 10) {
         this.a2 = this.game.add.sprite((game.width) + 100, 550, "items", "cooker");
         this.b2 = this.game.add.sprite((game.width) + 300, 550, "items", "cooker");
         this.c2 = this.game.add.sprite((game.width) + 500, 550, "items", "cooker");
         this.a2.anchor.setTo(.5);
         this.b2.anchor.setTo(.5);
         this.c2.anchor.setTo(.5);

         this.points.addChild(this.a2);
         this.points.addChild(this.b2);
         this.points.addChild(this.c2);
     } else if (this.timer >= 0) {

         this.a = this.game.add.sprite((game.width) + 100, 550, "items", "barricade");
         this.a.anchor.setTo(.5);
         this.points.addChild(this.a);
         this.c = this.game.add.sprite((game.width) + 500, 550, "items", "barricade");

         this.c.anchor.setTo(.5);


         this.points.addChild(this.c);
         this.b = this.game.add.sprite((game.width) + 300, 550, "items", "barricade");

         this.b.anchor.setTo(.5);

         this.points.addChild(this.b);
     }
 } else if (random == 3) {
     this.bar3 = this.game.add.sprite((game.width), 400, "bar");
     this.game.physics.arcade.enable(this.bar3);
     this.bar3.body.allowGravity = false;
     this.bar3.body.immovable = true;

     this.bar3.pixelPerfect = true;
     this.items.addChild(this.bar3);


     if (this.timer >= 50) {
         this.a3 = this.game.add.sprite((game.width) + 100, 360, "items", "rocks");
         this.b3 = this.game.add.sprite((game.width) + 300, 360, "items", "rocks");
         this.c3 = this.game.add.sprite((game.width) + 500, 360, "items", "rocks");
         this.a3.anchor.setTo(.5);
         this.b3.anchor.setTo(.5);
         this.c3.anchor.setTo(.5);

         this.points.addChild(this.a3);
         this.points.addChild(this.b3);
         this.points.addChild(this.c3);


     } else if (this.timer >= 45) {
         // this.a2 = this.game.add.sprite((game.width) + 100, 360, "items", "ssdlogobonuspoints");
         this.b2 = this.game.add.sprite((game.width) + 300, 360, "items", "ssdlogobonuspoints");
         //  this.c2 = this.game.add.sprite((game.width) + 500, 360, "items", "ssdlogobonuspoints");
         // this.a2.anchor.setTo(.5);
         this.b2.anchor.setTo(.5);
         // this.c2.anchor.setTo(.5);
         // this.points.addChild(this.a2);
         this.points.addChild(this.b2);
         // this.points.addChild(this.c2);
     } else if (this.timer >= 40) {
         // this.a2 = this.game.add.sprite((game.width) + 100, 360, "items", "biscuit");
         this.b2 = this.game.add.sprite((game.width) + 300, 360, "items", "biscuit");
         //this.c2 = this.game.add.sprite((game.width) + 500, 360, "items", "biscuit");
         // this.a2.anchor.setTo(.5);
         this.b2.anchor.setTo(.5);
         // this.c2.anchor.setTo(.5);
         // this.points.addChild(this.a2);
         this.points.addChild(this.b2);
         this.points.addChild(this.c2);
     } else if (this.timer >= 35) {
         this.a2 = this.game.add.sprite((game.width) + 100, 360, "items", "cooker");
         this.b2 = this.game.add.sprite((game.width) + 300, 360, "items", "cooker");
         this.c2 = this.game.add.sprite((game.width) + 500, 360, "items", "cooker");
         this.a2.anchor.setTo(.5);
         this.b2.anchor.setTo(.5);
         this.c2.anchor.setTo(.5);
         this.points.addChild(this.a2);
         this.points.addChild(this.b2);
         this.points.addChild(this.c2);
     } else if (this.timer >= 30) {
         this.a4 = this.game.add.sprite((game.width) + 100, 360, "items", "cactus");
         this.b4 = this.game.add.sprite((game.width) + 300, 360, "items", "cactus");
         this.c4 = this.game.add.sprite((game.width) + 500, 360, "items", "cactus");
         this.a4.anchor.setTo(.5);
         this.b4.anchor.setTo(.5);
         this.c4.anchor.setTo(.5);

         this.points.addChild(this.a4);
         this.points.addChild(this.b4);
         this.points.addChild(this.c4);

     } else if (this.timer >= 25) {
         this.a2 = this.game.add.sprite((game.width) + 100, 360, "items", "trolly");
         this.b2 = this.game.add.sprite((game.width) + 300, 360, "items", "trolly");
         this.c2 = this.game.add.sprite((game.width) + 500, 360, "items", "trolly");
         this.a2.anchor.setTo(.5);
         this.b2.anchor.setTo(.5);
         this.c2.anchor.setTo(.5);
         this.points.addChild(this.a2);
         this.points.addChild(this.b2);
         this.points.addChild(this.c2);
     } else if (this.timer >= 20) {
         //this.a1 = this.game.add.sprite((game.width) + 100, 360, "items", "tv");
         this.b1 = this.game.add.sprite((game.width) + 300, 360, "items", "tv");
         // this.c1 = this.game.add.sprite((game.width) + 500, 360, "items", "tv");
         // this.a1.anchor.setTo(.5);
         this.b1.anchor.setTo(.5);
         // this.c1.anchor.setTo(.5);
         // this.points.addChild(this.a1);
         this.points.addChild(this.b1);
         // this.points.addChild(this.c1);

     } else if (this.timer >= 15) {
         this.a2 = this.game.add.sprite((game.width) + 100, 360, "items", "washingMachine");
         this.b2 = this.game.add.sprite((game.width) + 300, 360, "items", "washingMachine");
         this.c2 = this.game.add.sprite((game.width) + 500, 360, "items", "cowashingMachineoker");
         this.a2.anchor.setTo(.5);
         this.b2.anchor.setTo(.5);
         this.c2.anchor.setTo(.5);
         this.points.addChild(this.a2);
         this.points.addChild(this.b2);
         this.points.addChild(this.c2);
     } else if (this.timer >= 10) {

         this.a = this.game.add.sprite((game.width) + 100, 360, "items", "barricade");
         this.a.anchor.setTo(.5);
         this.points.addChild(this.a);
         this.c = this.game.add.sprite((game.width) + 500, 360, "items", "barricade");
         this.c.anchor.setTo(.5);
         this.points.addChild(this.c);
         this.b = this.game.add.sprite((game.width) + 300, 360, "items", "barricade");
         this.b.anchor.setTo(.5);
         this.points.addChild(this.b);
     } else if (this.timer >= 0) {
         this.a = this.game.add.sprite((game.width) + 100, 360, "items", "refrigerator");
         this.a.anchor.setTo(.5);
         this.points.addChild(this.a);
         this.c = this.game.add.sprite((game.width) + 500, 360, "items", "refrigerator");
         this.c.anchor.setTo(.5);
         this.points.addChild(this.c);
         this.b = this.game.add.sprite((game.width) + 300, 360, "items", "refrigerator");
         this.b.anchor.setTo(.5);
         this.points.addChild(this.b);
     }
 }