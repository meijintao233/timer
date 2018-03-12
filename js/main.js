
var canvas =  document.getElementById('canvas'),
	context = canvas.getContext('2d');
	canvas.width = document.getElementsByTagName('body')[0].offsetWidth;
	canvas.height = document.getElementsByTagName('body')[0].offsetHeight;
var digit =[
    [
        [0,0,1,1,1,0,0],
        [0,1,1,0,1,1,0],
        [1,1,0,0,0,1,1],
        [1,1,0,0,0,1,1],
        [1,1,0,0,0,1,1],
        [1,1,0,0,0,1,1],
        [1,1,0,0,0,1,1],
        [1,1,0,0,0,1,1],
        [0,1,1,0,1,1,0],
        [0,0,1,1,1,0,0]
    ],//0
    [
        [0,0,0,1,1,0,0],
        [0,1,1,1,1,0,0],
        [0,0,0,1,1,0,0],
        [0,0,0,1,1,0,0],
        [0,0,0,1,1,0,0],
        [0,0,0,1,1,0,0],
        [0,0,0,1,1,0,0],
        [0,0,0,1,1,0,0],
        [0,0,0,1,1,0,0],
        [1,1,1,1,1,1,1]
    ],//1
    [
        [0,1,1,1,1,1,0],
        [1,1,0,0,0,1,1],
        [0,0,0,0,0,1,1],
        [0,0,0,0,1,1,0],
        [0,0,0,1,1,0,0],
        [0,0,1,1,0,0,0],
        [0,1,1,0,0,0,0],
        [1,1,0,0,0,0,0],
        [1,1,0,0,0,1,1],
        [1,1,1,1,1,1,1]
    ],//2
    [
        [1,1,1,1,1,1,1],
        [0,0,0,0,0,1,1],
        [0,0,0,0,1,1,0],
        [0,0,0,1,1,0,0],
        [0,0,1,1,1,0,0],
        [0,0,0,0,1,1,0],
        [0,0,0,0,0,1,1],
        [0,0,0,0,0,1,1],
        [1,1,0,0,0,1,1],
        [0,1,1,1,1,1,0]
    ],//3
    [
        [0,0,0,0,1,1,0],
        [0,0,0,1,1,1,0],
        [0,0,1,1,1,1,0],
        [0,1,1,0,1,1,0],
        [1,1,0,0,1,1,0],
        [1,1,1,1,1,1,1],
        [0,0,0,0,1,1,0],
        [0,0,0,0,1,1,0],
        [0,0,0,0,1,1,0],
        [0,0,0,1,1,1,1]
    ],//4
    [
        [1,1,1,1,1,1,1],
        [1,1,0,0,0,0,0],
        [1,1,0,0,0,0,0],
        [1,1,1,1,1,1,0],
        [0,0,0,0,0,1,1],
        [0,0,0,0,0,1,1],
        [0,0,0,0,0,1,1],
        [0,0,0,0,0,1,1],
        [1,1,0,0,0,1,1],
        [0,1,1,1,1,1,0]
    ],//5
    [
        [0,0,0,0,1,1,0],
        [0,0,1,1,0,0,0],
        [0,1,1,0,0,0,0],
        [1,1,0,0,0,0,0],
        [1,1,0,1,1,1,0],
        [1,1,0,0,0,1,1],
        [1,1,0,0,0,1,1],
        [1,1,0,0,0,1,1],
        [1,1,0,0,0,1,1],
        [0,1,1,1,1,1,0]
    ],//6
    [
        [1,1,1,1,1,1,1],
        [1,1,0,0,0,1,1],
        [0,0,0,0,1,1,0],
        [0,0,0,0,1,1,0],
        [0,0,0,1,1,0,0],
        [0,0,0,1,1,0,0],
        [0,0,1,1,0,0,0],
        [0,0,1,1,0,0,0],
        [0,0,1,1,0,0,0],
        [0,0,1,1,0,0,0]
    ],//7
    [
        [0,1,1,1,1,1,0],
        [1,1,0,0,0,1,1],
        [1,1,0,0,0,1,1],
        [1,1,0,0,0,1,1],
        [0,1,1,1,1,1,0],
        [1,1,0,0,0,1,1],
        [1,1,0,0,0,1,1],
        [1,1,0,0,0,1,1],
        [1,1,0,0,0,1,1],
        [0,1,1,1,1,1,0]
    ],//8
    [
        [0,1,1,1,1,1,0],
        [1,1,0,0,0,1,1],
        [1,1,0,0,0,1,1],
        [1,1,0,0,0,1,1],
        [0,1,1,1,0,1,1],
        [0,0,0,0,0,1,1],
        [0,0,0,0,0,1,1],
        [0,0,0,0,1,1,0],
        [0,0,0,1,1,0,0],
        [0,1,1,0,0,0,0]
    ],//9
    [
        [0,0,0,0],
        [0,0,0,0],
        [0,1,1,0],
        [0,1,1,0],
        [0,0,0,0],
        [0,0,0,0],
        [0,1,1,0],
        [0,1,1,0],
        [0,0,0,0],
        [0,0,0,0]
    ]//:
];	


function Timer(){
	var that = this;
	var start_x = canvas.width * 0.2;//横坐标开始位置
	var start_y = canvas.height * 0.25;//纵坐标开始位置
	var R = 5;
	var color = '#006699';
	var vx_min = -4;
	var vx_max = 4;
	var vy = -2;		
	var balls = [];
	var flag = [
	 	{
	 		l_digit_prev:'',
	 		r_digit_prev:'',
	 	},
	 	{
	 		l_digit_prev:'',
	 		r_digit_prev:'',
	 	},
	 	{
	 		l_digit_prev:'',
	 		r_digit_prev:'',
	 	},
	];
	//随机颜色
	function randomColor(){
	 	var colors = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
	 	var str = '#',index;
	 	for(var i = 0;i < 6;i++){
	 		index = Math.random()*15|0;
	 		str += colors[index];
	 	}
	 	return str;
	};
	
	//随机数
	function random(min,max){
	 	return min + Math.random()*(max - min);
	};
	
	function update(){
		context.clearRect(0,0,canvas.width,canvas.height);
		that.drawTimer();
		balls.forEach(function(item,index){
			item.drop(index)
		})
		requestAnimationFrame(update)
	};
	
	this.init = function(){
		update()
	}
	
	this.getTimer = function(){
		var date = new Date();
		return {
			hour: date.getHours(),
			minute: date.getMinutes(),
			second: date.getSeconds(),
		}
	};
	
	this.drawTimer = function(){
		var time = this.getTimer();
		this.drawSeconds('digit',0,time.hour);
		this.drawSeconds('digit',1,time.minute);
		this.drawSeconds('digit',2,time.second);
		this.drawSeconds('dot',0);
		this.drawSeconds('dot',1);
	};
	
	this.drawSeconds = function(type,m,time){
		var start = start_x + 46*(R+1) * m;
		if( type == 'digit'){
			var l_digit = time/10|0;
			var r_digit = time%10;
			//个位
			for (var i = 0;i < digit[r_digit].length;i++) {
				for (var j = 0;j < digit[r_digit][i].length;j++) {
					if(digit[r_digit][i][j]==1){
						ball = new Ball(start + (1+R)*(17+j*2),start_y + (1+R)*(1+2*i),R,random(vx_min,vx_max),vy,randomColor())
						ball.draw();
						if(r_digit!=flag[m].r_digit_prev){
							balls.push(ball);
						}
					}
				}
			}
			//十位
			for (var i = 0;i < digit[l_digit].length;i++) {
				for (var j = 0;j < digit[l_digit][i].length;j++) {
					if(digit[l_digit][i][j]==1){
						ball = new Ball(start + (1+R)*(1+2*j),start_y + (1+R)*(1+2*i),R,random(vx_min,vx_max),vy,randomColor())
						ball.draw();
						if(l_digit!=flag[m].l_digit_prev){
							balls.push(ball);
						}
					}
				}
			}
			flag[m].l_digit_prev = l_digit;
			flag[m].r_digit_prev = r_digit;
		}else if(type == 'dot'){
			for (var i = 0;i < digit[10].length;i++) {
				for (var j = 0;j < digit[10][i].length;j++) {
					if(digit[10][i][j]==1){
						var ball = new Ball(start + 34*(R+1) + (1+R)*(1+2*j),start_y + (1+R)*(1+2*i),R,0,0,color)
						ball.draw();
					}
				}
			}
		}
	};
	
	//球对象
	function Ball(x,y,r,vx,vy,color){
	 	this.x = x;
	 	this.y = y;
	 	this.r = r; 
	 	this.vx = vx;
	 	this.vy = vy;
	 	this.color = color;
	 	this.draw = function(color){
			context.beginPath();
			context.arc(this.x,this.y,this.r,0,Math.PI * 2);
			context.closePath();
			context.fillStyle = color || '#006699';
			context.fill();
		};
		this.drop = function(index){
			this.x += this.vx;
			this.y += this.vy;
			this.vy += random(0.1,0.2);
			if(this.y>canvas.height*0.8){
				this.y = canvas.height*0.8;
	            this.vy = -this.vy*0.65;
	            if(Math.abs(this.vy)<Math.abs(0.5)){
	            	balls.splice(index,1);
	            }
			}
			if(this.x< canvas.width *0.1||this.x>200*(this.r+1)){
				balls.splice(index,1);
			}else{
				this.draw(this.color)
			}
		}
	}
	
}







