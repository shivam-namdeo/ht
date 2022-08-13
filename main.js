var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
    fabric.Image.fromURL('BirthdayImage.jpg',function(Img){
        bobj=Img;
bobj.scaleToWidth(700);
bobj.scaleToHeight(500);
bobj.set({
    top:0,
    left:0
});
canvas.add(bobj);
}); 
	
}

function start(){
	x.play();
}
