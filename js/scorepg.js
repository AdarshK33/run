var GameState3 = {
    init: function(score) {

        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;

        this.total_score = score;

    },
    create: function() {

        this.page3 = this.game.add.sprite(0, 0, "page3");
        this.Score_board = this.game.add.sprite((this.game.width) / 2, (this.game.height) / 2, "Score-board");
        this.Score_board.anchor.setTo(.5);
        // console.log(this.total_score)
        var style = { font: "bold 100px Arial", fill: "#ff0000", boundsAlignH: "center", boundsAlignV: "middle" };

        this.score_count = game.add.text(0, 0, "00", style);
        this.score_count.anchor.setTo(.5);
        this.score_count.setText(this.total_score);
        this.score_count.setTextBounds((this.game.width) / 2, (this.game.height) / 2 + 50, 100, 100);

        this.counter = 0;
        this.light = this.game.add.sprite(0, 0, "light");

        this.lightBloom = this.game.add.sprite(0, 0, "lightBloom");
        this.lightBloom.alpha = 1;
        this.game.time.events.loop(Phaser.Timer.SECOND * .3, this.updateCounter, this);
        if (this.total_score < 100) {
            this.t = this.game.add.bitmapText((this.game.width) / 2 - 450, 950, 'gotham', "Score minimum 100 to unlock your coupon!", 40);
            this.t.tint = 0xff0000;
            this.play_again = this.game.add.button((this.game.width) / 2, 1100, "buttons", this.playagain_btn, this, "Play-again", "Play_again_rollover");
            this.play_again.anchor.setTo(.5);
            this.play_again.input.useHandCursor = true;
            //  this.play_again.events.onInputDown.add(this.pa, this);
        } else if (this.total_score >= 100) {
            this.t = this.game.add.bitmapText((this.game.width) / 2 - 100, 950, 'gotham', "Congrats!", 40);
            this.t.tint = 0xff0000;
            this.Submit = this.game.add.button((this.game.width) / 2, 1100, "buttons", this.Submit_btn, this, "Submit", "Submit");
            this.Submit.anchor.setTo(.5);
            this.Submit.input.useHandCursor = true;
            //  this.Submit.events.onInputDown.add(this.sm, this);
        }
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
    // pa:function(){
    //     this.Playagain = this.game.add.sprite((this.game.width) / 2, 1100, "buttons", "Play_again_rollover");
    //    // this.Playagain.frameName='Play_again_rollover';
    //     this.Playagain.anchor.setTo(.5);

    // //game states
    // },
    // sm:function(){
    //     this.Submit_rollover = this.game.add.sprite((this.game.width) / 2, 1100, "buttons", "Submit_rollover");
    //     this.Submit_rollover.anchor.setTo(.5);
    // },
    playagain_btn: function() {

        this.game.state.start('GameState1');
        console.log("play again")
            // var uniqeid = this.uniqueid;
            // var score = this.total_score;
            // console.log(uniqeid)
        $.ajax({
            method: "post",
            url: "ajax_data.php",
            data: {
                type: 'play_again',
                uid: global_userid,

            },

            success: function(data) {

            }

        });
    },
    Submit_btn: function() {

        // var score = this.total_score;
        // console.log(uniqeid)
        $.ajax({
            method: "post",
            url: "ajax_data.php",
            data: {
                type: 'submit_click',
                uid: global_userid

            },

            success: function(data) {
                $("canvas").hide();

            }

        });
        console.log("submit")
        this.Submit_rollover = this.game.add.sprite((this.game.width) / 2, 1100, "buttons", "Submit_rollover");
        this.Submit_rollover.anchor.setTo(.5);
        var a = document.getElementById("container");
        a.style.display = "block";
        // var b = document.getElementById("canvas");
        // b.style.display = "none";


    },




};