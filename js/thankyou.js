//  uniqueid = localStorage.getItem('uniqueid');
var GameState4 = {
    init: function() {
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
    },
    // preload: function() {
    //     this.load.image("background", "assets/thankyou.jpg");
    //     this.game.load.image("lightBloom", "assets/lightBloom.png");
    //     this.game.load.image("light", "assets/light.png");
    //     this.game.load.atlasJSONHash("buttons", 'assets/spritesheets/buttons.png', 'assets/spritesheets/buttons.json');



    // },
    create: function() {

        // console.log("thnq create")
        this.background = this.game.add.sprite(0, 0, "background");

        this.light = this.game.add.sprite(0, 0, "light");

        this.lightBloom = this.game.add.sprite(0, 0, "lightBloom");
        this.lightBloom.alpha = 1;
        this.counter = 0;

        this.game.time.events.loop(Phaser.Timer.SECOND * .3, this.updateCounter, this);

        this.fb = this.game.add.sprite((game.width) / 2 - 300, (game.height) / 2, "buttons", "f-share");
        this.wapp = this.game.add.sprite((game.width) / 2 + 180, (game.height) / 2, "buttons", "t-share");

        // this.retry = this.game.add.sprite((game.width) / 2, (game.height) / 2 + 500, "buttons", "retry", "retry");
        // this.retry.anchor.setTo(.5);


        this.retry = this.game.add.sprite((game.width) / 2 - 150, (game.height) / 2 + 400, "buttons", "retry");
        this.retry.inputEnabled = true;
        this.retry.events.onInputDown.add(this.retryfun, this);
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
    retryfun: function() {
        // var uniqueid_local = localStorage.getItem('uniqueid_local');

        $.ajax({
            method: "post",
            url: "ajax_data.php",
            data: {
                type: 'retry',


                uid: global_userid
            },

            success: function(data) {

            }

        });

        this.game.state.start('GameState1')

    }



};