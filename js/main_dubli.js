var game = new Phaser.Game(2200, 1242, Phaser.AUTO);
global_userid = '';

function thank() {
    setTimeout(function() {
        var s = document.getElementById('container');
        s.style.display = "none";
        // console.log(this)
        // console.log("thnq function")
        $("canvas").show();
        this.game.state.start("GameState4");
    }, 3);
}
// function thank() {
// var s = document.getElementById('container');
// s.style.display = "none";
// // console.log(this)
// console.log("thnq function")
// $("canvas").show();
// this.game.state.start("GameState4");

// }
// var uniqueid = '';
//console.log(uniqueid);
var GameState = {
    uniqueid: null, //key and value check this
    init: function() {
        this.game.state.add('GameState1', GameState1);
        this.game.state.add('GameState2', GameState2);
        this.game.state.add('GameState3', GameState3);
        this.game.state.add('GameState4', GameState4);
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        // this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.girl = 0;
        this.boy = 0;
        //  this.game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;

    },
    preload: function() {
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
        this.game.load.audio("BackgroundMusic", "assets/BackgroundMusic.mp3");
        this.game.load.audio("positivePoint", "assets/positivePoint.mp3");
        this.game.load.audio("negativePoint", "assets/negativePoint.mp3");

        this.game.load.audio("goldSong", "assets/Song.mp3");
    },
    create: function() {
        // localStorage.clear();
        var that = this;
        $.ajax({
            method: "post",
            url: "ajax_data.php",
            data: {
                type: 'ids',
            },

            success: function(data) {
                $.trim(data);
                // console.log(that);
                that.uniqueid = data;

            }

        });


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

        // golbal_userid = this.GameState.uniqueid;
        // console.log(this.GameState.uniqueid)

    },






    updateCounter: function() {


        if (this.counter % 2 == 0) {
            this.lightBloom.alpha = 0;
        } else {
            this.lightBloom.alpha = 1;
        }
        //console.log(this.counter)

        this.counter++;
    },
    play_btn: () => {
        //var uniqeid = this.GameState.uniqueid;

        global_userid = this.GameState.uniqueid;

        this.game.state.start('GameState1');
        // game.state.start('GameState4', true, false, this.select_icon, this.points, this.uniqueid);
        // console.log(uniqeid)
        $.ajax({
            method: "post",
            url: "ajax_data.php",
            data: {
                type: 'play',
                uid: global_userid
            },
            dataType: "json",
            success: function(data) {}

        });



    },
    listener: function() {

        this.play2 = this.game.add.button((this.game.width) / 2, 1100, "buttons", this.play_btn, this, "play-button-rollover", "play-button-rollover");
        this.play2.anchor.setTo(.5);
        this.play2.scale.setTo(.88);
        this.play2.input.useHandCursor = true;


    },


    update: function() {






    },

};
this.game.state.add('GameState', GameState);
this.game.state.start('GameState');