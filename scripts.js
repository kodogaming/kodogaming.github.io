function randSong(){var e=Math.floor(5*Math.random()+1);1==e&&(game.song1.play(),game.song1.volume=.15,keys[81]&&game.song1.pause()),2==e&&(game.song2.play(),game.song2.volume=.2,keys[81]&&song2.pause()),3==e&&(game.song3.play(),game.song3.volume=.1,keys[81]&&game.song3.pause()),4==e&&(game.song4.play(),game.song4.volume=.1,keys[81]&&game.song4.pause()),5==e&&(game.song5.play(),game.song5.volume=.1,keys[81]&&game.song5.pause()),game.song1.ended&&game.song2.play(),game.song2.ended&&game.song3.play(),game.song3.ended&&game.song4.play(),game.song4.ended&&game.song5.play(),game.song5.ended&&game.song1.play(),console.log("This is song: "+e)}function game(){update(),render()}function update(){function e(){(keys[38]||keys[87])&&(player.y-=speed,character=document.getElementById("playerUp"),context.translate(0,speed),player.x<mat_grass.width&player.y<mat_grass.height&&game.walk_grass.play())}function t(){(keys[40]||keys[83])&&(player.y+=speed,character=document.getElementById("playerDown"),context.translate(0,-speed),player.x<mat_grass.width&player.y<mat_grass.height&&game.walk_grass.play())}function a(){(keys[37]||keys[65])&&(player.x-=speed,character=document.getElementById("playerLeft"),context.translate(speed,0),player.x<mat_grass.width&player.y<mat_grass.height&&game.walk_grass.play())}function n(){(keys[39]||keys[68])&&(player.x+=speed,character=document.getElementById("playerRight"),context.translate(-speed,0),player.x<1920&player.y<1e3&&game.walk_grass.play())}if(n(),a(),e(),t(),player.x<0&&(player.x=0),player.y<0&&(player.y=0),player.x>=width-player.width&&(player.x=width-player.width),player.y>=height-player.height&&(player.y=height-player.height),collision(player,cube)&&keys[32]&&process(),player.x>1030&&player.x<1820)var r=!0;if(player.y<494&&player.y>437)var o=!0;if(1==r&&1==o&&keys[87]&&(player.y+=speed,context.translate(0,-speed)),player.x<1048&&player.x>1040)var d=!0;if(player.y>462&&player.y<978)var g=!0;if(1==d&&1==g&&(keys[65]&&(player.x+=speed,context.translate(-speed,0)),keys[68]&&(player.x-=speed,context.translate(speed,0))),player.x>1030&&player.x<1820)var c=!0;if(player.y>970&&player.y<1002)var s=!0;if(1==c&&1==s&&(keys[83]&&(player.y+=-speed,context.translate(0,speed)),keys[87]&&(player.y+=speed,context.translate(0,-speed)),keys[65]&&(player.x+=speed,context.translate(-speed,0))),player.x<1275&&player.x>1510)var y=!0;if(player.y<545&&player.y>494)var l=!0;if(1==y&&1==l&&keys[87]&&(player.y+=speed,context.translate(0,-speed)),player.x<1535&&player.x>1505)var m=!0;if(player.y<545&&player.y>494)var x=!0;1==m&&1==x&&keys[65]&&(player.x+=speed,context.translate(-speed,0)),player.y>1920&&context.clearRect(1920,1080,1920,1080),player.y<494&&(player.y+=speed,context.translate(0,-speed)),player.x<1010&&(player.x+=speed,context.translate(-speed,0)),0>=hp&&lose()}function render(){context.clearRect(0,0,width,height),context.drawImage(grass,0,1080),context.drawImage(grass,0,0),context.drawImage(grass,1920,0),context.drawImage(grass,1920,1080);var e="Health: "+hp;context.globalAlpha=1,context.drawImage(enemy,cube.x,cube.y);var t=document.getElementById("quest_icon"),a=document.getElementById("questgiver"),n={giver:a,x:1530,y:734};context.drawImage(t,n.x+15,n.y-50),context.drawImage(n.giver,n.x,n.y),context.drawImage(fence,1065,500),context.drawImage(fence,1175,500),context.drawImage(fence,1285,500),context.drawImage(fence,1395,500),context.drawImage(fence,1505,500),context.drawImage(fence,1615,500),context.drawImage(fence,1725,500),context.drawImage(fence,1065,1040),context.drawImage(fence,1175,1040),context.drawImage(fence,1285,1040),context.drawImage(fence,1395,1040),context.drawImage(fence,1505,1040),context.drawImage(fence,1615,1040),context.drawImage(fence,1725,1040);var r=1069;context.drawImage(fenceVert,r,536),context.drawImage(fenceVert,r,572),context.drawImage(fenceVert,r,608),context.drawImage(fenceVert,r,644),context.drawImage(fenceVert,r,680),context.drawImage(fenceVert,r,716),context.drawImage(fenceVert,r,752),context.drawImage(fenceVert,r,788),context.drawImage(fenceVert,r,824),context.drawImage(fenceVert,r,860),context.drawImage(fenceVert,r,896),context.drawImage(fenceVert,r,932),context.drawImage(fenceVert,r,968),context.drawImage(fenceVert,r,1004),context.drawImage(fenceVert,r,1040),context.drawImage(stone,1340,610),context.drawImage(stone,1350,610),context.drawImage(stone,1382,610),context.drawImage(stone,1340,642),context.drawImage(stone,1350,642),context.drawImage(stone,1382,642),context.drawImage(tree1,500,500),context.drawImage(shrub,1285,610),context.drawImage(shrub,1415,610),context.drawImage(tree3,1100,0),context.drawImage(tree2,700,0),context.drawImage(tree2,0,300),context.drawImage(tree1,300,0),context.drawImage(tree1,1500,0),context.globalAlpha=1,context.drawImage(house,1300,350),context.drawImage(dirt_1,1200,800),context.drawImage(dirt_1,1252,800),context.drawImage(dirt_1,1304,800),context.drawImage(dirt_1,1356,800),context.drawImage(dirt_1,1408,800),context.drawImage(dirt_1,1460,800),context.drawImage(dirt_1,1252,852),context.drawImage(dirt_1,1304,852),context.drawImage(dirt_1,1356,852),context.drawImage(dirt_1,1408,852),context.drawImage(dirt_1,1460,852),context.drawImage(dirt_1,1201,773),context.drawImage(dirt_1,1252,748),context.drawImage(dirt_1,1304,748),context.drawImage(dirt_1,1356,748),context.drawImage(dirt_1,1408,748),context.drawImage(dirt_1,1460,748),context.drawImage(dirt_1,1408,748),context.drawImage(character,player.x,player.y),context.fillText("x:"+player.x,player.x+875,player.y+445),context.fillText("y:"+player.y,player.x+875,player.y+475),context.fillStyle="#333",keys[69]&&context.drawImage(inv,player.x-400,player.y-250),context.globalAlpha=.8,context.drawImage(hud,player.x-1e3,player.y+435),context.globalAlpha=1,context.fillStyle="#000",context.font="24px helvetica",context.fillText(e,player.x-950,player.y+475),context.globalAlpha=1;var o="Score: "+score;context.fillStyle="#000",context.font="24px helvetica",context.fillText(o,player.x-800,player.y+475)}function process(){score++,cube.x=Math.random()*(width-75),cube.y=Math.random()*(height-75)}function collision(e,t){return!(e.x>t.x+t.width||e.x+e.width<t.x||e.y>t.y+t.height||e.y+e.height<t.y)}var canvas=document.getElementById("mainCanvas"),context=canvas.getContext("2d"),playercanvas=document.getElementById("playerCanvas"),context=canvas.getContext("2d"),fps=60,keys=[],width=5e3,height=5e3,speed=5;canvas.height=5e3,canvas.width=5e3;var score=0,hp=100;game.walk_grass=new Audio("sound/walk_grass.mp3"),game.song1=new Audio("sound/ost.mp3"),game.song2=new Audio("sound/song2.mp3"),game.song3=new Audio("sound/song3.mp3"),game.song4=new Audio("sound/song4.mp3"),game.song5=new Audio("sound/song5.mp3"),randSong(),window.onkeydown=function(e){return 32==e.keyCode&&e.target==document.body?(e.preventDefault(),!1):void 0};var player={x:window.innerWidth/2+230,y:window.innerHeight/2+270,width:75,height:75};context.translate(-230,-270);var cube={x:Math.random()*(width-4e3),y:Math.random()*(height-4e3),width:75,height:75};window.addEventListener("keydown",function(e){keys[e.keyCode]=!0},!1),window.addEventListener("keyup",function(e){delete keys[e.keyCode]},!1);var character=document.getElementById("playerRight"),enemy=document.getElementById("Enemy"),grass=document.getElementById("grass"),mat_grass={width:1900,height:1e3},house=document.getElementById("house");window.onbeforeunload=function(){return" WARNING: YOU WILL LOSE ALL PROGRESS! "},setInterval(function(){game()},1e3/fps);