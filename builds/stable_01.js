var canvas = document.getElementById("mainCanvas")
var context = canvas.getContext("2d");

var fps = 60;

var keys = [];

var width = 5000, height = 5000, speed = 5;
canvas.height = 5000;
canvas.width = 5000;


var score = 0;

var hp = 100;

game.walk_grass = new Audio("sound/walk_grass.mp3");
game.soundtrack = new Audio("sound/ost.mp3");
// game.soundtrack.play(); 
game.soundtrack.volume = .18;



window.onkeydown = function(e) {
    if(e.keyCode == 32 && e.target == document.body) {
        e.preventDefault();
        return false;
    }
};


var player = {
	x: window.innerWidth / 2 + 250, // Its position on the canvas.
	y: window.innerHeight / 2 + 245,	// Its position on the canvas.
	width: 75, // Your player's width.
	height: 75 // Your player's height.
};
context.translate(-250, -245);
var cube = {
	x: Math.random() * (width - 4000),
	y: Math.random() * (height - 4000),	
	width:75,
	height:75,
};



 

window.addEventListener("keydown", function(e){
	keys[e.keyCode] = true;
}, false)

window.addEventListener("keyup", function(e){
	delete keys[e.keyCode];
}, false)


// Sprites

var character = document.getElementById("playerRight");

var enemy = document.getElementById("Enemy");

var questgiver = document.getElementById("questgiver");

var quest_1 = {
	x: 500,
	y: 500
}

var grass = document.getElementById("grass");
var mat_grass = {
	width:1900,
	height:1000
}

var house = document.getElementById("house");

/*
up - 38
down - 40
left - 37
right - 39
*/

function game() {
	update();
	render();
}

function update(){
	function moveUp(){
		if (keys[38] || keys[87]){
	 		player.y-=speed; 
	 		character = document.getElementById("playerUp");
	 		context.translate(0, speed );

	 		if(player.x < mat_grass.width & player.y < mat_grass.height) {
	 			game.walk_grass.play();
	 		}

		} //up
	}
	function moveDown(){
		if (keys[40] || keys[83]){
			player.y+=speed; //down
			character = document.getElementById("playerDown");	
			context.translate(0, -speed );
			if(player.x < mat_grass.width & player.y < mat_grass.height) {
	 			game.walk_grass.play();
	 		}
		}
	}
	function moveLeft() {
		if (keys[37] || keys[65]){ 
			player.x-=speed; //left
			character = document.getElementById("playerLeft");
			context.translate(speed, 0);
			if(player.x < mat_grass.width & player.y < mat_grass.height) {
	 			game.walk_grass.play();
	 		}
		}
	}
	function moveRight() {
		if (keys[39] || keys[68]){
			player.x+=speed; //right
			character = document.getElementById("playerRight");
			context.translate(-speed, 0);
			if(player.x < 1920 & player.y < 1000) {
	 			game.walk_grass.play();
	 		}
		}
	}


	moveRight();
	moveLeft();
	moveUp();
	moveDown();

	if (player.x < 0) player.x = 0;
	if (player.y < 0) player.y = 0; 
	if (player.x >= width - player.width) player.x = width - player.width;
	if (player.y >= height - player.height) player.y = height - player.height;

	if (collision(player, cube) && keys[32]) process();
	
  
  	if (hp <= 0) lose();




  //Shooting 



}



function render(){

	// Make sure your player is not repeating.
	context.clearRect(0, 0, width, height);

	context.drawImage(grass, 0, 0);

	/*// Render of HUD area
	context.fillStyle = "#eee";
	context.globalAlpha=0.8;
	context.fillRect(0,0,250,75);*/

	var health = "Health: " + hp;


	//Render of Health
	context.globalAlpha=1;
	context.fillStyle = "red";
	context.font = "24px helvetica";
	context.fillText(health, player.x-950, player.y+535	);

	// Render of Score
	context.globalAlpha=1;
	var pscore = "Score: " + score;
	context.fillStyle = "#000";
	context.font = "24px helvetica";
	context.fillText(pscore, player.x-800, player.y+535);

	// Render of your enemy.

	context.globalAlpha=1; //opacity	
	/*context.fillStyle = "red";*/

	
	context.drawImage(enemy, cube.x, cube.y );
	

	/*context.fillRect(cube.x, cube.y, cube.width, cube.height);*/



	context.drawImage(fence, 845+(110*2), 500);
	context.drawImage(fence, 845+(110*3), 500);
	context.drawImage(fence, 845+(110*4), 500);
	context.drawImage(fence, 845+(110*5), 500);
	context.drawImage(fence, 845+(110*6), 500);
	context.drawImage(fence, 845+(110*7), 500);
	context.drawImage(fence, 845+(110*8), 500);

	context.drawImage(fence, 845+(110*2),  536+(36*14));
	context.drawImage(fence, 845+(110*3),  536+(36*14));
	context.drawImage(fence, 845+(110*4),  536+(36*14));
	context.drawImage(fence, 845+(110*5),  536+(36*14));
	context.drawImage(fence, 845+(110*6),  536+(36*14));
	context.drawImage(fence, 845+(110*7),  536+(36*14));
	context.drawImage(fence, 845+(110*8),  536+(36*14));


	var fenceVertX = 1069;


		context.drawImage(fenceVert, fenceVertX, 536)
		context.drawImage(fenceVert, fenceVertX, 536+36)
		context.drawImage(fenceVert, fenceVertX, 536+(36*2))
		context.drawImage(fenceVert, fenceVertX, 536+(36*3))
		context.drawImage(fenceVert, fenceVertX, 536+(36*4))
		context.drawImage(fenceVert, fenceVertX, 536+(36*5))
		context.drawImage(fenceVert, fenceVertX, 536+(36*6))
		context.drawImage(fenceVert, fenceVertX, 536+(36*7))
		context.drawImage(fenceVert, fenceVertX, 536+(36*8))
		context.drawImage(fenceVert, fenceVertX, 536+(36*9))
		context.drawImage(fenceVert, fenceVertX, 536+(36*10))
		context.drawImage(fenceVert, fenceVertX, 536+(36*11))
		context.drawImage(fenceVert, fenceVertX, 536+(36*12))
		context.drawImage(fenceVert, fenceVertX, 536+(36*13))
		context.drawImage(fenceVert, fenceVertX, 536+(36*14))

		context.drawImage(stone, 1340, 610)
		context.drawImage(stone, 1350, 610)
		context.drawImage(stone, 1350+32, 610)

		context.drawImage(stone, 1340, 610+32)
		context.drawImage(stone, 1350, 610+32)
		context.drawImage(stone, 1350+32, 610+32)


	// Render of your player.

  	context.globalCompositeOperation = 1;
  	
  
	/*context.fillRect(player.x, player.y, player.width, player.height);*/

	

	context.globalAlpha=1;

	context.drawImage(house, 1300, 350);
  context.drawImage(character, player.x, player.y );
 // context.fillText(player.x, player.x-20, player.y);
	//context.fillText(player.y, player.x+50, player.y);
	
}

//window.onbeforeunload = function(){
//  return ' WARNING: YOU WILL LOSE ALL PROGRESS! ';
//};

function process() {
	score++;
	cube.x = Math.random() * (width - 75);
	cube.y = Math.random() * (height - 75);	
}

function collision(first, second) {
	return !(first.x > second.x + second.width ||
		first.x+first.width<second.x ||
		first.y > second.y + second.height ||
		first.y + first.height<second.y);
}

setInterval(function(){
	game();
},  1000/fps);

