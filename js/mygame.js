var GameState2 = {

    init: function(charSelect) {
        this.game.state.add('GameState2', GameState2);
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        // this.girl = girl;
        // this.boy = boy;
        this.charselect = charSelect;


        this.cursors = game.input.keyboard.createCursorKeys();

        this.game.physics.arcade.gravity.y = 3000;

        this.JUMPING_SPEED = -1550;

    },
    create: function() {

        this.BackgroundMusic = game.add.audio('BackgroundMusic');
        this.positivePoint = game.add.audio('positivePoint');
        this.negativePoint = game.add.audio('negativePoint');
        this.goldSong = game.add.audio('goldSong');


        // this.boy = boy;
        // console.log("hello" + this.uniqueid + "uni")
        this.arraybar = [];
        this.arraybar1 = [];
        this.arraybar2 = [];
        this.arraybar3 = [];
        this.arraybar4 = [];
        this.speed = 0;
        this.speedfun = 0;
        this.speedbg = 0;
        this.tileSprite = this.game.add.tileSprite(0, 0, 2200, 1240, "page2");
        this.tileSprite.autoScroll(-900, 0);

        this.movingCarnival = this.game.add.tileSprite(0, 500, 2200, 500, "movingCarnival");
        this.movingCarnival.autoScroll(-900, 0);
        this.movingCarnival.alpha = .3;

        this.floor_alpha = game.add.sprite(0, 1020, "floor");
        this.floor_alpha.alpha = 0
        this.game.physics.arcade.enable(this.floor_alpha);
        this.floor_alpha.body.immovable = true;
        this.floor_alpha.body.allowGravity = false;


        this.light = this.game.add.sprite(0, 0, "light");
        this.lightBloom = this.game.add.sprite(0, 0, "lightBloom");
        this.lightBloom.alpha = 1;
        this.counter = 0;
        this.score = 0;

        this.Timer = this.game.add.sprite(1750, 30, "Timer");

        this.score_bg = this.game.add.sprite(50, 30, "score_bg");
        this.score_bg.scale.setTo(.9);
        this.timer = 60;
        if (this.timer == 60) {
            this.BackgroundMusic.play();
        }
        var style = { font: "bold 70px Carnevalee Freakshow", fill: "#ff0000", boundsAlignH: "center", boundsAlignV: "middle" };
        this.game.time.events.loop(Phaser.Timer.SECOND, this.timerCounter, this);
        this.time_count = this.game.add.text(0, 0, "60", style);
        //   this.time_count.tint = 0x63370d;
        this.time_count.setTextBounds(2000, 60, 100, 100);


        //   this.score_count = this.game.add.bitmapText(300, 200, 'BOLD', '0', 70);
        // this.score_count = this.game.add.text(300, 200, 'BOLD', '0', 70);
        this.score_count = game.add.text(0, 0, "00", style);
        //   this.score_count.tint = 0x63370d;
        //   text.setTextBounds(0, 100, 800, 100);
        this.score_count.setTextBounds(270, 200, 100, 100);

        this.game.time.events.loop(Phaser.Timer.SECOND * .3, this.updateCounter, this);
        if (this.charselect == "boy") {
            this.player1 = this.game.add.sprite(100, 800, 'maleCharacter');
            this.game.physics.arcade.enable(this.player1);
            this.player1.body.allowGravity = true;
            this.player1.scale.setTo(1.5);
            this.player1.animations.add('walking', [0, 1, 2, 3, 4, 3, 2, 1], 10, true);
            //this.player1.play('walking');           
            //  console.log("boy")
            this.player1.body.checkCollision.up = false;
            this.player1.body.checkCollision.down = true;
            this.player = this.player1;
        }
        if (this.charselect == "girl") {

            this.player1 = this.game.add.sprite(100, 800, 'femaleCharacter');
            this.game.physics.arcade.enable(this.player1);
            this.player1.scale.setTo(1.5);
            this.player1.animations.add('walking', [0, 1, 2, 3, 4, 3, 2, 1], 10, true);
            //this.player1.play('walking');
            // console.log("girl")
            this.player1.body.checkCollision.up = false;
            this.player1.body.checkCollision.down = true;

        }
        this.items = this.game.add.group(); //bar

        this.birditems = this.game.add.group();
        this.golditems = this.game.add.group();
        this.bar_items = this.game.add.group();
        this.score_points = this.game.add.group();
        this.points = this.game.add.group();

        this.slide_bar = this.game.time.events.loop(Phaser.Timer.SECOND * 1.3, this.slidefun, this);
        this.slide_gold = this.game.time.events.loop(Phaser.Timer.SECOND * (.5), this.gold_slide, this);
        this.cover_item = [{
                product_list: "cover",
                imgName: 'barricade'
            },
            {
                product_list: "cover",
                imgName: "biscuit"
            },
            {
                product_list: "cover",
                imgName: "cactus"
            },
            {
                product_list: "cover",
                imgName: "cooker"
            },
            {
                product_list: "cover",
                imgName: "hair_dryer"
            },
            {
                product_list: "cover",
                imgName: "JAcket"
            },
            {
                product_list: "cover",
                imgName: "refrigerator"
            },
            {
                product_list: "cover",
                imgName: "rice"
            },
            {
                product_list: "cover",
                imgName: "rocks"
            },
            {
                product_list: "cover",
                imgName: "ssdlogobonuspoints"
            },
            {
                product_list: "cover",
                imgName: "washingMachine"
            },
            {
                product_list: "cover",
                imgName: "towel"
            },
            {
                product_list: "cover",
                imgName: "tv"
            },
            {
                product_list: "cover",
                imgName: "trolly"
            }
        ];
        this.spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        this.game.physics.arcade.enable(this.player1);





    },
    shuffle: function(array) {
        var currentIndex = array.length,
            temporaryValue, randomIndex;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;

    },
    update: function() {
        // this.player1.body.velocity.x = 0;
        this.player1_bound = this.player1.getBounds();
        if (game.physics.arcade.collide(this.player1, this.floor_alpha)) {
            //console.log("coolide");
            this.player1.play('walking');
        }

        // this.player_bound = this.player1.getBounds();


        for (var i = 0; i < this.items.children.length; i++) {
            this.game.physics.arcade.collide(this.player1, this.items.getChildAt(i));
            var adrs = this.items.getChildAt(i);


            adrs.x -= 15 + this.speed;
            //bar
            if (adrs.x <= -550) {
                this.arraybar.push(adrs);
            }
        }
        for (let k = 0; k < this.arraybar.length; k++) {
            this.arraybar[k].destroy();
        }

        for (var i = 0; i < this.birditems.children.length; i++) {
            var adrs = this.birditems.getChildAt(i);
            adrs.x -= 15 + this.speed;
            var element_bound = adrs.getBounds();
            //bird

            if (Phaser.Rectangle.intersects(element_bound, this.player1_bound)) {
                this.speed = 13;
                this.slide_bar.delay = 600;
                this.slide_gold.delay = 300;
                this.tileSprite.autoScroll(-1500, 0);
                this.movingCarnival.autoScroll(-1500, 0);
                // this.page_slide.delay = 700;
                // this.background_slide.delay = 700;
                //   this.tileSprite.autoScroll(-1100, 0);
                //   this.movingCarnival.autoScroll(-1100, 0);

                this.score += 10;
                this.score_count.setText(this.score);
                this.plusTen = this.game.add.sprite(adrs.x, adrs.y, "score_points", "plusTen");
                this.plusTen.anchor.set(.5);

                this.score_points.addChild(this.plusTen);

                adrs.destroy();
                this.game.time.events.add(Phaser.Timer.SECOND * 8, this.slow_speed, this);
            }

            //console.log(this.speed)
            if (adrs.x <= -550) {
                this.arraybar3.push(adrs);
            }
        }
        for (let k = 0; k < this.arraybar3.length; k++) {
            this.arraybar3[k].destroy();
        }

        for (var i = 0; i < this.bar_items.children.length; i++) {
            var adrs1 = this.bar_items.getChildAt(i);
            adrs1.x -= 15 + this.speed;
            var element_bound = adrs1.getBounds();
            //bar item

            if (Phaser.Rectangle.intersects(element_bound, this.player1_bound) && this.player1.body.touching.down) {
                if (adrs1.frameName == 'barricade') {
                    if (this.score > 0) {
                        this.negativePoint.play();
                        this.score -= 5;
                        this.score_count.setText(this.score);
                        this.minusFive = this.game.add.sprite(adrs1.x, adrs1.y, "score_points", "minusFive");
                        this.minusFive.anchor.set(.5);

                        this.score_points.addChild(this.minusFive);
                    }
                } else if (adrs1.frameName == 'cactus' || adrs1.frameName == 'rocks') {
                    if (this.score > 0) {
                        this.negativePoint.play();
                        this.score -= 2;
                        this.score_count.setText(this.score);
                        this.minusTwo = this.game.add.sprite(adrs1.x, adrs1.y, "score_points", "minusTwo");
                        this.minusTwo.anchor.set(.5);

                        this.score_points.addChild(this.minusTwo);
                    }
                } else if (adrs1.frameName == 'ssdlogobonuspoints') {
                    this.positivePoint.play();
                    this.plusTwentyFive = this.game.add.sprite(adrs1.x, adrs1.y, "score_points", "plusTwentyFive");
                    this.plusTwentyFive.anchor.set(.5);
                    this.score += 25;
                    this.score_count.setText(this.score);
                    this.score_points.addChild(this.plusTwentyFive);
                } else if (adrs1.frameName == 'tv' || adrs1.frameName == 'trolly' || adrs1.frameName == 'JAcket' || adrs1.frameName == 'biscuit' || adrs1.frameName == 'cooker' || adrs1.frameName == 'hair_dryer' || adrs1.frameName == 'refrigerator' || adrs1.frameName == 'rice' || adrs1.frameName == 'towel' || adrs1.frameName == 'washingMachine' || adrs1.frameName == 'rice') {
                    this.positivePoint.play();
                    this.plusTwo = this.game.add.sprite(adrs1.x, adrs1.y, "score_points", "plusTwo");
                    this.plusTwo.anchor.set(.5);
                    this.score += 2;
                    this.score_count.setText(this.score);

                    this.score_points.addChild(this.plusTwo);
                }
                if (this.player1.body.touching.down) {
                    adrs1.destroy();
                }
                if (adrs1.x <= -550) {
                    this.arraybar1.push(adrs1);
                }
            }
        }
        for (let k = 0; k < this.arraybar1.length; k++) {
            this.arraybar1[k].destroy();
        }
        //jump
        if (this.spaceKey.isDown && this.player1.body.touching.down) {
            this.player1.body.velocity.y = -1400;
            this.player1.animations.add('jump', [7], 11, true);
            this.player1.play('jump');
            // console.log("jump"+this.JUMPING_SPEED )
        } else if (this.player1.body.touching.down) {
            this.player1.play('walking');
        }

        if (this.game.input.activePointer.isDown && this.player1.body.touching.down) {
            this.player1.body.velocity.y = -1400;
            this.player1.animations.add('jump', [7], 11, true);
            this.player1.play('jump');
        }



        for (var i = 0; i < this.golditems.children.length; i++) {
            var adrs = this.golditems.getChildAt(i);
            adrs.x -= 15 + this.speed;
            var element_bound = adrs.getBounds();
            //goldcoin
            // console.log(adrs.key)
            // if(this.game.physics.arcade.collide(this.player1, adrs)){
            if (Phaser.Rectangle.intersects(element_bound, this.player1_bound)) {
                this.goldSong.play();
                this.score += 1;
                this.score_count.setText(this.score);
                this.plusOne = this.game.add.sprite(adrs.x, adrs.y, "score_points", "plusOne");
                this.plusOne.anchor.set(.5);

                this.score_points.addChild(this.plusOne);

                adrs.destroy();


            }
            if (adrs.x <= -550) {
                this.arraybar2.push(adrs);
                // console.log("ghjk")
            }
        }
        for (let k = 0; k < this.arraybar2.length; k++) {
            this.arraybar2[k].destroy();
        }

        for (var i = 0; i < this.score_points.children.length; i++) {
            var pp = this.score_points.getChildAt(i);
            pp.y -= 10;
            if (pp.y <= 100) {
                pp.destroy();
                // console.log('destroy')
            }
        }

    },
    updateCounter: function() {
        if (this.counter % 2 == 0) {
            this.lightBloom.alpha = 0;
        } else {
            this.lightBloom.alpha = 1;
        }
        this.counter++;
        this.shuffle(this.cover_item, this);

    },

    slidefun: function() {
        // console.log(this.cover_item)
        var randombar = Math.floor(Math.random() * 3 + 1);
        var random = Math.floor(Math.random() * 3 + 1);

        if (randombar == 1) {
            this.bar1 = this.game.add.sprite((game.width) + 100, 350, "bar");
            this.items.addChild(this.bar1);
            this.game.physics.arcade.enable(this.bar1);
            this.bar1.body.allowGravity = false;
            this.bar1.body.immovable = true;
            //  this.bar1.body.checkCollision.left= true;
            //  this.bar1.body.checkCollision.down= false;

            if (random == 1) {
                this.item_bar = this.game.add.sprite((game.width) + 440, 350, "items", this.cover_item[0].imgName);
                this.item_bar.anchor.setTo(.5, 1);
                this.game.physics.arcade.enable(this.item_bar);
                this.bar_items.addChild(this.item_bar);
                this.item_bar.body.allowGravity = false;
                this.item_bar.body.checkCollision.down = false;
            } else if (random == 2) {
                this.item_bar1 = this.game.add.sprite((game.width) + 180, 350, "items", this.cover_item[0].imgName);
                this.item_bar1.anchor.setTo(.5, 1);
                this.game.physics.arcade.enable(this.item_bar1);
                this.bar_items.addChild(this.item_bar1);
                this.item_bar1.body.allowGravity = false;
                this.item_bar1.body.checkCollision.down = false;

                this.item_bar2 = this.game.add.sprite((game.width) + 440, 350, "items", this.cover_item[0].imgName);
                this.item_bar2.anchor.setTo(.5, 1);
                this.game.physics.arcade.enable(this.item_bar2);
                this.bar_items.addChild(this.item_bar2);
                this.item_bar2.body.allowGravity = false;
                this.item_bar2.body.checkCollision.down = false;

                this.item_bar3 = this.game.add.sprite((game.width) + 650, 350, "items", this.cover_item[0].imgName);
                this.item_bar3.anchor.setTo(.5, 1);
                this.game.physics.arcade.enable(this.item_bar3);
                this.bar_items.addChild(this.item_bar3);
                this.item_bar3.body.allowGravity = false;
                this.item_bar3.body.checkCollision.down = false;
            } else {
                this.item_bar1 = this.game.add.sprite((game.width) + 300, 350, "items", this.cover_item[0].imgName);
                this.item_bar1.anchor.setTo(.5, 1);
                this.game.physics.arcade.enable(this.item_bar1);
                this.bar_items.addChild(this.item_bar1);
                this.item_bar1.body.allowGravity = false;
                this.item_bar1.body.checkCollision.down = false;

                this.item_bar3 = this.game.add.sprite((game.width) + 600, 350, "items", this.cover_item[0].imgName);
                this.item_bar3.anchor.setTo(.5, 1);
                this.game.physics.arcade.enable(this.item_bar3);
                this.bar_items.addChild(this.item_bar3);
                this.item_bar3.body.allowGravity = false;

                this.item_bar3.body.checkCollision.down = false;
            }
        }





        if (randombar == 2) {
            this.bar2 = this.game.add.sprite((game.width) + 300, 550, "bar");
            this.items.addChild(this.bar2);
            this.game.physics.arcade.enable(this.bar2);
            this.bar2.body.allowGravity = false;
            //  this.bar2.body.checkCollision.left= true;
            this.bar2.body.immovable = true;
            if (random == 1) {
                this.item_bar = this.game.add.sprite((game.width) + 600, 550, "items", this.cover_item[0].imgName);
                this.item_bar.anchor.setTo(.5, 1);
                this.game.physics.arcade.enable(this.item_bar);
                this.bar_items.addChild(this.item_bar);
                this.item_bar.body.allowGravity = false;
                this.item_bar.body.checkCollision.down = false;


            } else if (random == 2) {
                this.item_bar1 = this.game.add.sprite((game.width) + 400, 550, "items", this.cover_item[0].imgName);
                this.item_bar1.anchor.setTo(.5, 1);
                this.game.physics.arcade.enable(this.item_bar1);
                this.bar_items.addChild(this.item_bar1);
                this.item_bar1.body.allowGravity = false;
                this.item_bar1.body.checkCollision.down = false;

                this.item_bar2 = this.game.add.sprite((game.width) + 650, 550, "items", this.cover_item[0].imgName);
                this.item_bar2.anchor.setTo(.5, 1);
                this.game.physics.arcade.enable(this.item_bar2);
                this.bar_items.addChild(this.item_bar2);
                this.item_bar2.body.allowGravity = false;
                this.item_bar2.body.checkCollision.down = false;

                this.item_bar3 = this.game.add.sprite((game.width) + 850, 550, "items", this.cover_item[0].imgName);
                this.item_bar3.anchor.setTo(.5, 1);
                this.game.physics.arcade.enable(this.item_bar3);
                this.bar_items.addChild(this.item_bar3);
                this.item_bar3.body.allowGravity = false;
                this.item_bar3.body.checkCollision.down = false;

            } else {
                this.item_bar1 = this.game.add.sprite((game.width) + 450, 550, "items", this.cover_item[0].imgName);
                this.item_bar1.anchor.setTo(.5, 1);
                this.game.physics.arcade.enable(this.item_bar1);
                this.bar_items.addChild(this.item_bar1);
                this.item_bar1.body.allowGravity = false;
                this.item_bar1.body.checkCollision.down = false;

                this.item_bar3 = this.game.add.sprite((game.width) + 800, 550, "items", this.cover_item[0].imgName);
                this.item_bar3.anchor.setTo(.5, 1);
                this.game.physics.arcade.enable(this.item_bar3);
                this.bar_items.addChild(this.item_bar3);
                this.item_bar3.body.allowGravity = false;
                this.item_bar3.body.checkCollision.down = false;
            }
        }




        if (randombar == 3) {
            this.bar3 = this.game.add.sprite((game.width) + 500, 720, "bar");
            this.items.addChild(this.bar3);
            this.game.physics.arcade.enable(this.bar3);
            this.bar3.body.allowGravity = false;
            this.bar3.body.immovable = true;
            //  this.bar3.body.checkCollision.left= true;
            if (random == 1) {
                this.item_bar = this.game.add.sprite((game.width) + 850, 720, "items", this.cover_item[0].imgName);
                this.item_bar.anchor.setTo(.5, 1);
                this.game.physics.arcade.enable(this.item_bar);
                this.bar_items.addChild(this.item_bar);
                this.item_bar.body.allowGravity = false;
                this.item_bar.body.checkCollision.down = false;

            } else if (random == 2) {
                this.item_bar1 = this.game.add.sprite((game.width) + 600, 720, "items", this.cover_item[0].imgName);
                this.item_bar1.anchor.setTo(.5, 1);
                this.game.physics.arcade.enable(this.item_bar1);
                this.bar_items.addChild(this.item_bar1);
                this.item_bar1.body.allowGravity = false;
                this.item_bar1.body.checkCollision.down = false;

                this.item_bar2 = this.game.add.sprite((game.width) + 850, 720, "items", this.cover_item[0].imgName);
                this.item_bar2.anchor.setTo(.5, 1);
                this.game.physics.arcade.enable(this.item_bar2);
                this.bar_items.addChild(this.item_bar2);
                this.item_bar2.body.allowGravity = false;
                this.item_bar2.body.checkCollision.down = false;

                this.item_bar3 = this.game.add.sprite((game.width) + 1090, 720, "items", this.cover_item[0].imgName);
                this.item_bar3.anchor.setTo(.5, 1);
                this.game.physics.arcade.enable(this.item_bar3);
                this.bar_items.addChild(this.item_bar3);
                this.item_bar3.body.allowGravity = false;
                this.item_bar3.body.checkCollision.down = false;

            } else {
                this.item_bar1 = this.game.add.sprite((game.width) + 690, 720, "items", this.cover_item[0].imgName);
                this.item_bar1.anchor.setTo(.5, 1);
                this.game.physics.arcade.enable(this.item_bar1);
                this.bar_items.addChild(this.item_bar1);
                this.item_bar1.body.allowGravity = false;
                this.item_bar1.body.checkCollision.down = false;

                this.item_bar3 = this.game.add.sprite((game.width) + 950, 720, "items", this.cover_item[0].imgName);
                this.item_bar3.anchor.setTo(.5, 1);
                this.game.physics.arcade.enable(this.item_bar3);
                this.bar_items.addChild(this.item_bar3);
                this.item_bar3.body.allowGravity = false;
                this.item_bar3.body.checkCollision.down = false;

            }
        }
        if (randombar == 1 && random == 1) {
            this.bird = this.game.add.sprite((game.width) + 500, 600, 'birdAnimation', 0);
            this.game.physics.arcade.enable(this.bird);
            this.bird.scale.setTo(1, -1);
            this.bird.body.allowGravity = false;
            this.bird.body.immovable = true;
            this.bird.animations.add('fly', [0, 1, 2, 3, 2, 1], 6, true);
            this.bird.play('fly');
            this.birditems.addChild(this.bird);
        }

    },
    gold_slide: function() {
        this.goldCoin = this.game.add.sprite((game.width) + 500, 910, "goldCoin");
        this.game.physics.arcade.enable(this.goldCoin);
        this.goldCoin.scale.setTo(1.5);
        this.goldCoin.body.allowGravity = false;
        // this.goldCoin.body.immovable = true;
        this.golditems.addChild(this.goldCoin);
    },
    slow_speed: function() {
        this.speed = 0;
        this.speedbg = 0;

        this.tileSprite.autoScroll(-900, 0);
        this.movingCarnival.autoScroll(-900, 0);
        this.slide_bar.delay = 1400;
        this.slide_gold.delay = 600;


        // console.log(this.speed)
    },
    timerCounter: function() {
        this.timer--;
        this.time_count.setText(this.timer);
        if (this.timer == 0) {

            this.BackgroundMusic.stop();

            var score = this.score;
            // console.log(uniqeid)
            $.ajax({
                method: "post",
                url: "ajax_data.php",
                data: {
                    type: 'score',
                    uid: global_userid,
                    total_score: score
                },

                success: function(data) {

                }

            });
            this.game.state.start('GameState3', true, false, this.score);
        }

    },


};