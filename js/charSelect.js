var GameState1 = {

    init: function() {

        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;


    },




    create: function() {
        // var uniqeid_local = this.uniqueid;

        //console.log(golbal_userid)
        // localStorage.setItem('uniqueid_local', uniqeid_local);

        this.page2 = this.game.add.sprite(game.world.centerX, game.world.centerY, "selectCharacter");
        this.page2.anchor.setTo(.5);
        this.page2.scale.setTo(.98);



        this.light = this.game.add.sprite(0, 0, "light");

        this.lightBloom = this.game.add.sprite(0, 0, "lightBloom");
        this.lightBloom.alpha = 1;



        this.counter = 0;

        this.game.time.events.loop(Phaser.Timer.SECOND * .3, this.updateCounter, this);




        this.femaleCharacter_btn = this.game.add.button((this.game.width) / 2 + 150, 650, "femaleCharacter_btn", this.femaleCharacter_fun, this);
        // this.femaleCharacter_btn.alpha = 0;
        this.maleCharacter_btn = this.game.add.button((this.game.width) / 2 - 650, 650, "maleCharacter_btn", this.maleCharacter_fun, this);
        // this.maleCharacter_btn.alpha = 0;
        // console.log(this.girl + "girl")
        this.charSelect = "";
        // globally;


    },

    maleCharacter_fun: function() {
        this.charSelect = "boy";


        // console.log(uniqeid)
        $.ajax({
            method: "post",
            url: "ajax_data.php",
            data: {
                type: 'male',
                uid: global_userid
            },

            success: function(data) {

            }

        });

        this.game.state.start('GameState2', true, false, this.charSelect, this.uniqueid);
        // this.cfun();


    },

    femaleCharacter_fun: function() {
        this.charSelect = "girl";

        // this.girl++;

        // this.cfun();
        var uniqeid = this.uniqueid;
        //console.log(uniqeid)
        $.ajax({
            method: "post",
            url: "ajax_data.php",
            data: {
                type: 'female',
                uid: global_userid
            },

            success: function(data) {

            }

        });
        this.game.state.start('GameState2', true, false, this.charSelect, this.uniqueid);

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



    update: function() {






    },

};