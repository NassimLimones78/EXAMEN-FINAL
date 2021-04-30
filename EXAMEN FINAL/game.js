import sceneA from "./sceneA.js"
var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene:[sceneA],
physics: {
    default: 'arcade',
    arcade: {
        gravity: { y: 300 },
        debug: false
    }
},
};

var game = new Phaser.Game(config);
//IMAGENES DEL JUEGO
// function preload ()
// {
//     this.load.image('fondo1', 'assets/fondo1.jpg');
//     this.load.image('ground', 'assets/platform.png');
//     this.load.image('apple', 'assets/apple.png');
//     this.load.image('bomb', 'assets/bomb.png');
//     this.load.spritesheet('dude', 
//         'assets/dude.png',
//         { frameWidth: 32, frameHeight: 48 }
//     );
// }
// var platforms;
// function create ()
// {
//     this.add.image(400, 300, 'fondo1');
//     platforms = this.physics.add.staticGroup();

//     platforms.create(400, 568, 'ground').setScale(2).refreshBody();

//     platforms.create(600, 400, 'ground');
//     platforms.create(50, 250, 'ground');
//     platforms.create(750, 220, 'ground');
//     //console.log(this);

//     player = this.physics.add.sprite(100, 450, 'dude');

// player.setBounce(0.2);
// player.setCollideWorldBounds(true);

// this.anims.create({
//     key: 'left',
//     frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
//     frameRate: 10,
//     repeat: -1
// });

// this.anims.create({
//     key: 'turn',
//     frames: [ { key: 'dude', frame: 4 } ],
//     frameRate: 20
// });

// this.anims.create({
//     key: 'right',
//     frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
//     frameRate: 10,
//     repeat: -1
// });

// this.physics.add.collider(player, platforms);

// stars = this.physics.add.group({
//     key: 'apple',
//     repeat: 11,
//     setXY: { x: 12, y: 0, stepX: 70 }
// });

// stars.children.iterate(function (child) {

//     child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));

// });

// this.physics.add.collider(stars, platforms);
// this.physics.add.overlap(player, stars, collectStar, null, this);

// scoreText = this.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });

// bombs = this.physics.add.group();

// this.physics.add.collider(bombs, platforms);

// this.physics.add.collider(player, bombs, hitBomb, null, this);

// };

// var score = 0;
// var scoreText;

// function collectStar (player, apple)
// {
//     apple.disableBody(true, true);

//     score += 10;
//     scoreText.setText('Score: ' + score);

//     if (stars.countActive(true) === 0)
//     {
//         stars.children.iterate(function (child) {

//             child.enableBody(true, child.x, 0, true, true);

//         });

//         var x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);

//         var bomb = bombs.create(x, 16, 'bomb');
//         bomb.setBounce(1);
//         bomb.setCollideWorldBounds(true);
//         bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);

//     }

// }

// function hitBomb (player, bomb)
// {
//     this.physics.pause();

//     player.setTint(0xff0000);

//     player.anims.play('turn');

//     gameOver = true;

//     this.text1 = this.add.text(300, 250, 'Perdiste', { font: "50px Arial Black", fill: "#fff" });
//     this.text1.setStroke('#00f', 16);
//     this.text1.setShadow(2, 2, "#333333", 2, true, true);
//     //reinicio
//     this.text2 = this.add.text(150, 350, 'Click para reiniciar', { font: "50px Arial Black", fill: "#fff"});
//     this.text2.setStroke('#00f', 16);
//     this.text2.setShadow(2, 2, "#333333", 2, true, true);
//     this.input.on('pointerdown', function () {
//     this.scene.restart('SceneB');
//     this.score=0;
//     }, this);
// }

// function update ()
// {
//     cursors = this.input.keyboard.createCursorKeys();

// if (cursors.left.isDown)
// {
//     player.setVelocityX(-160);

//     player.anims.play('left', true);
// }
// else if (cursors.right.isDown)
// {
//     player.setVelocityX(160);

//     player.anims.play('right', true);
// }
// else
// {
//     player.setVelocityX(0);

//     player.anims.play('turn');
// }

// if (cursors.up.isDown && player.body.touching.down)
// {
//     player.setVelocityY(-330);
// }
// }
