var alivenow = alivenow || {};

(function() {
    alivenow.Global = {
        skipRotationHandle: true,
        isMobile: false,
        deviceDetector: null,
        serverObj: null,
        playCount: 0,
        viewport: null,
        selected_character: null,
        time: 0,
        uniqueId: ''
    }
    alivenow.Main = (function() {
        function Main() {

        }
        Main.prototype.init = function() {
                // alivenow.Global.deviceDetector = function () {
                //     var b = navigator.userAgent.toLowerCase(),
                //         a = function (a) {
                //             void 0 !== a && (b = a.toLowerCase());
                //             return /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(b) ? "tablet" : /(mobi|ipod|phone|blackberry|opera mini|fennec|minimo|symbian|psp|nintendo ds|archos|skyfire|puffin|blazer|bolt|gobrowser|iris|maemo|semc|teashark|uzard)/.test(b) ? "phone" : "desktop"
                //         };
                //     return {
                //         device: a(),
                //         detect: a,
                //         isMobile: "desktop" != a() ? !0 : !1,
                //         userAgent: b
                //     }
                // }();
                // alivenow.Global.isMobile = !(alivenow.Global.deviceDetector.device == "desktop");

                var game = new Phaser.Game(2208, 1242, Phaser.CANVAS, "gameDiv", {
                    create: this.create,
                    preload: this.preload2,
                    rotateMe: this.rotateMe
                }, true);
                // alivenow.Global.serverObj = new alivenow.Server();

                game.state.add('GameState1', GameState1);
                game.state.add('GameState2', GameState2);
                game.state.add('GameState3', GameState3);
            },

            Main.prototype.preload2 = function() {
                alivenow.Global.game = this.game;
                alivenow.Global.rotateHandler = this.rotateMe;

                this.load.image("background", "assets/thankyou.jpg");
                this.game.load.bitmapFont('BOLD', 'assets/spritesheets/carnivalFont.png', 'assets/spritesheets/carnivalFont.xml');
                this.game.load.bitmapFont('gotham', 'assets/spritesheets/gotham.png', 'assets/spritesheets/gotham.xml');
                this.game.load.image("page1", "assets/Instruction.jpg");
                this.game.load.image("femaleCharacter_btn", "assets/femaleCharacter.png");
                this.game.load.image("maleCharacter_btn", "assets/maleCharacter.png");
                this.game.load.image("lightBloom", "assets/lightBloom.png");
                this.game.load.image("light", "assets/light.png");
                this.game.load.image("selectCharacter", "assets/selectCharacter.jpg");
                this.game.load.atlasJSONHash("buttons", 'assets/spritesheets/buttons.png', 'assets/spritesheets/buttons.json');

                this.game.load.atlasJSONHash("femaleCharacter", 'assets/spritesheets/femaleCharacter.png', 'assets/spritesheets/maleCharacter.json');

                this.game.load.atlasJSONHash("maleCharacter", 'assets/spritesheets/maleCharacter.png', 'assets/spritesheets/maleCharacter.json');
                this.game.load.image("page2", "assets/game_page.jpg");
                this.game.load.image("bar", "assets/bar.png");
                this.game.load.image("goldCoin", "assets/goldCoin.png");
                this.game.load.image("movingCarnival", "assets/movingCarnival.png");
                this.game.load.image("floor", "assets/floor.jpg");
                this.game.load.image("score_bg", "assets/score_bg.PNG");
                this.game.load.image("Timer", "assets/Timer.png");

                this.game.load.image("Score-board", "assets/Score-board.png");

                this.game.load.image("page3", "assets/formBg.jpg");
                this.game.load.atlasJSONHash("items", 'assets/spritesheets/items.png', 'assets/spritesheets/items.json');
                this.game.load.atlasJSONHash("score_points", 'assets/spritesheets/collectedPoints.png', 'assets/spritesheets/collectedPoints.json');
                this.game.load.atlasJSONHash("birdAnimation", 'assets/spritesheets/birdAnimation.png', 'assets/spritesheets/birdAnimation.json');
            },

            Main.prototype.create = function() {
                $.ajax({
                    method: "post",
                    url: "ajax_data.php",
                    data: {
                        type: 'ids',
                    },

                    success: function(data) {
                        $.trim(data);
                        alivenow.Global.uniqueId = data;
                        console.log(data)
                    }

                });
                console.log(alivenow.Global.uniqueId);
                Main.obj = this;
                this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
                this.game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
                this.scale.compatibility.orientationFallback = 'viewport';
                this.scale.pageAlignHorizontally = true;
                this.scale.pageAlignVertically = true;
                this.game.time.advancedTiming = true;
                this.game.scale.fullScreenTarget = document.body;

                this.page1 = this.game.add.sprite(0, 0, "page1");

                this.light = this.game.add.sprite(0, 0, "light");

                this.lightBloom = this.game.add.sprite(0, 0, "lightBloom");
                this.lightBloom.alpha = 1;

                this.t = this.game.add.bitmapText((this.game.width) / 2 - 450, 950, 'gotham', "Score minimum 100 to unlock your coupon!", 40);
                this.t.tint = 0xff0000;

                this.play = this.game.add.button((this.game.width) / 2, 1100, "buttons", this.play_btn, this, "play-button", "play-button");
                this.play.anchor.setTo(.5);
                this.play.scale.setTo(.88);
                this.play.input.useHandCursor = true;
                this.play.events.onInputDown.add(this.listener, this);
                this.counter = 0;

                this.game.time.events.loop(Phaser.Timer.SECOND * .3, this.updateCounter, this);

                window.addEventListener("resize", Main.prototype.rotateMe);




            },

            Main.prototype.updateCounter = function() {
                if (this.counter % 2 == 0) {
                    this.lightBloom.alpha = 0;
                } else {
                    this.lightBloom.alpha = 1;
                }

                this.counter++;
            }

        Main.prototype.play_btn = function() {
            Main.obj.game.state.start("GameState1");
        }

        Main.prototype.listener = function() {
            this.play2 = this.game.add.button((this.game.width) / 2, 1100, "buttons", this.play_btn, this, "play-button-rollover", "play-button-rollover");
            this.play2.anchor.setTo(.5);
            this.play2.scale.setTo(.88);
            this.play2.input.useHandCursor = true;
        }
        Main.prototype.rotateMe = function() {
            if (!alivenow.Global.skipRotationHandle) {
                alivenow.Global.game.stage.visible = !(alivenow.Global.game.paused = false);
                alivenow.Global.game.paused = false;

                if (alivenow.Global.videoToView != null) {
                    if (alivenow.Global.isVideoPage)
                        alivenow.Global.videoToView.play();
                }
                $(alivenow.Global.videoToView).show();
            }
        }
        return Main;
    })();
    var myObj = new alivenow.Main();
    myObj.init();
})();