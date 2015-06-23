var canvas = document.getElementById("mainCanvas");
var context = canvas.getContext("2d");

var playercanvas = document.getElementById("playerCanvas");
var context = canvas.getContext("2d");

var fps = 60;

var keys = [];

var width = 5000, height = 5000, speed = 5;
canvas.height = 5000;
canvas.width = 5000;


var score = 0;

var hp = 100;

game.walk_grass = new Audio("sound/walk_grass.mp3");

game.song1 = new Audio("sound/ost.mp3");
game.song2 = new Audio("sound/song2.mp3");
game.song3 = new Audio("sound/song3.mp3");
game.song4 = new Audio("sound/song4.mp3");
game.song5 = new Audio("sound/song5.mp3");

function randSong() {
	var rSong = Math.floor((Math.random() * 5) + 1); 

	if(rSong == 1) { 
		game.song1.play(); 
		game.song1.volume = .15;
		  	
	  	if(keys[81]){
			game.song1.pause();
		}
		
	}
	if(rSong == 2) { 
		game.song2.play(); 
		game.song2.volume = .2;
		  	
	  	if(keys[81]){
			song2.pause();
		}
		
	}
	if(rSong == 3) { 
		game.song3.play(); 
		game.song3.volume = .1;
		  	
	  	if(keys[81]){
			game.song3.pause();
		}
		
	}
	if(rSong == 4) { 
		game.song4.play();
		game.song4.volume = .1;
		  	
	  	if(keys[81]){
			game.song4.pause();
		}
		
	}
	if(rSong == 5) { 
		game.song5.play(); 
		game.song5.volume = .1;
	  	
	  	if(keys[81]){
			game.song5.pause();
		}

	}
	if(game.song1.ended) game.song2.play();
	if(game.song2.ended) game.song3.play();
	if(game.song3.ended) game.song4.play();
	if(game.song4.ended) game.song5.play();
	if(game.song5.ended) game.song1.play();

	console.log("This is song:" + " " +  rSong);
}
randSong();


window.onkeydown = function(e) {
    if(e.keyCode == 32 && e.target == document.body) {
        e.preventDefault();
        return false;
    }
};


var player = {
	x: window.innerWidth / 2 + 230, // Its position on the canvas.
	y: window.innerHeight / 2 + 270,	// Its position on the canvas.
	width: 75, // Your player's width.
	height: 75 // Your player's height.
};
context.translate(-230, -270);
var cube = {
	x: Math.random() * (width - 4000),
	y: Math.random() * (height - 4000),	
	width:75,
	height:75
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


	//if(player.y > 469 && player.y < 435 && player.x > 1030 && player.x < 1815 ) {
	//	console.log("YO");
	//}

	if(player.x > 1030 && player.x < 1820) {
		var fence_topX = true;
	}
	if(player.y < 494 && player.y > 437){
		var fence_topY = true;
	}
	if(fence_topX == true && fence_topY == true){
		
		if(keys[87]){
			player.y += speed;
			context.translate(0,-speed);
		}
	}




	if(player.x < 1048 && player.x > 1040){
		var fence_leftX = true;
	}
	if(player.y > 462 && player.y < 978 ){
		var fence_leftY = true;
	}
	if(fence_leftX == true && fence_leftY == true){
		if(keys[65]){
			player.x += speed;
			context.translate(-speed,0);
		}
		if(keys[68]){
			player.x -= speed;
			context.translate(speed,0);
		}
	}



	if(player.x > 1030 && player.x < 1820){
		var fence_bottomX = true;
	}
	if(player.y > 970 && player.y < 1002){
		var fence_bottomY = true;
	}
	if(fence_bottomX == true && fence_bottomY == true){
		if(keys[83]){
			player.y += -speed;
			context.translate(0,speed);
		}
		if(keys[87]){
			player.y += speed;
			context.translate(0,-speed);
		}
		if(keys[65]){
			player.x += speed;
			context.translate(-speed,0);	
		}
	}

	if(player.x < 1275 && player.x > 1510){
		var house_1X = true;
	}
	if(player.y < 545 && player.y > 494){
		var house_1Y = true;
	}
	if(house_1X == true && house_1Y == true){
		if(keys[87]){
			player.y += speed;
			context.translate(0,-speed);
		}
	}
	if(player.x < 1535 && player.x > 1505){
		var house_1_rightX = true;
	}
	if(player.y < 545 && player.y > 494){
		var house_1_rightY = true;
	}
	if(house_1_rightX == true && house_1_rightY == true){
		if(keys[65]){
			player.x += speed;
			context.translate(-speed,0);
		}
	}

	if(player.y > 1920){
		context.clearRect(1920, 1080, 1920, 1080);
	}






	if(player.y < 494){
		player.y += speed;
		context.translate(0,-speed);
	}
	if(player.x < 1010){
		player.x += speed;
		context.translate(-speed, 0);
	}


  
  	if (hp <= 0) lose();






  //Shooting 



}



function render(){

	// Make sure your player is not repeating.
	context.clearRect(0, 0, width, height);


	context.drawImage(grass, 0, 1080);
	context.drawImage(grass, 0, 0);

	context.drawImage(grass, 1920, 0);
	context.drawImage(grass, 1920, 1080);



	var health = "Health: " + hp;



	

	context.globalAlpha=1; 
	

	
	context.drawImage(enemy, cube.x, cube.y );
	

	//Quests 

	var quest_icon = document.getElementById('quest_icon');

	//Quest_1 


	var Tom = document.getElementById("questgiver");
	var quest_1 = {
		giver:Tom,
		x: 1530,
		y: 734,
	}
	context.drawImage(quest_icon, quest_1.x + 15, quest_1.y - 50);
	context.drawImage(quest_1.giver, quest_1.x, quest_1.y);

	//Quset_2 



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



	//Trees
	context.drawImage(tree1, 500, 500);
	context.drawImage(shrub, 1285, 610);
	context.drawImage(shrub, 1415, 610);

	context.drawImage(tree3, 1100, 000);
	context.drawImage(tree2, 700, 000);
	context.drawImage(tree2, 000, 300);
	context.drawImage(tree1, 300, 00);
	context.drawImage(tree1, 1500, 00);




	// Render of your player.

  	
  	
  
	/*context.fillRect(player.x, player.y, player.width, player.height);*/

	

	context.globalAlpha=1;

	context.drawImage(house, 1300, 350);


	//Road
	context.drawImage(dirt_1, 1200, 800);
	context.drawImage(dirt_1, 1200+(52*1), 800);
	context.drawImage(dirt_1, 1200+(52*2), 800);
	context.drawImage(dirt_1, 1200+(52*3), 800);
	context.drawImage(dirt_1, 1200+(52*4), 800);
	context.drawImage(dirt_1, 1200+(52*5), 800);
	
	context.drawImage(dirt_1, 1200+(52*1), 800+(52*1));
	context.drawImage(dirt_1, 1200+(52*2), 800+(52*1));
	context.drawImage(dirt_1, 1200+(52*3), 800+(52*1));
	context.drawImage(dirt_1, 1200+(52*4), 800+(52*1));
	context.drawImage(dirt_1, 1200+(52*5), 800+(52*1));
	


	context.drawImage(dirt_1, 1201, 825-(52*1));
	context.drawImage(dirt_1, 1200+(52*1), 800-(52*1));
	context.drawImage(dirt_1, 1200+(52*2), 800-(52*1));
	context.drawImage(dirt_1, 1200+(52*3), 800-(52*1));
	context.drawImage(dirt_1, 1200+(52*4), 800-(52*1));
	context.drawImage(dirt_1, 1200+(52*5), 800-(52*1));

	context.drawImage(dirt_1, 1200+(52*4), 800-(52*1));


  	context.drawImage(character, player.x, player.y );

 	
  	//Player Coordinates
 	context.fillText("x:" + player.x, player.x+875, player.y + 445);
	context.fillText("y:" + player.y, player.x+875, player.y + 475);
	
	
	//Inventory
	context.fillStyle = "#333";
	if(keys[69]){
		context.drawImage(inv,player.x-(400), player.y-250);
	}

		//Render of Health
	context.globalAlpha=.8;	
	context.drawImage(hud ,player.x-1000, player.y+435);

	context.globalAlpha=1;
	context.fillStyle = "#000";
	context.font = "24px helvetica";
	context.fillText(health, player.x-950, player.y+475	);

	// Render of Score
	context.globalAlpha=1;
	var pscore = "Score: " + score;
	context.fillStyle = "#000";
	context.font = "24px helvetica";
	context.fillText(pscore, player.x-800, player.y+475);

	
}

window.onbeforeunload = function(){
  return ' WARNING: YOU WILL LOSE ALL PROGRESS! ';
};

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

