AFRAME.registerComponent('timer', {
  schema: {

   // 60 seconds limit to shoot 9 targets
   
     TimeOutTime : {type:'int', default:60},
    DigitsColor: {type: 'color', default: '#000"'},
  },
  init: function () {
    var data = this.data; 
    var el = this.el;
    this.paused= false;  

    var date= new Date();
    this.TargetTime=new Date(date.getTime() + data.TimeOutTime*1000); 
     
     seconds = new THREE.Object3D(); 
     seconds.name="seconds"
     for(var j=0;j<2;j++)  
    {
     distance = -j*0.25;
     parent1 = new THREE.Object3D();
     var SecGeo = new THREE.BoxGeometry( 0.025, 0.1, 0.3 );
     var SecMaterial = new THREE.MeshBasicMaterial( {color: this.data.DigitsColor} );
     var mesh1 = new THREE.Mesh( SecGeo, SecMaterial);
     parent1.add(mesh1);
     parent1.position.x-=distance;
     parent1.position.y+=0.07;
     seconds.add(parent1);
    
     parent2 = new THREE.Object3D();
     var SecGeo = new THREE.BoxGeometry( 0.025, 0.1, 0.3 );
     var SecMaterial = new THREE.MeshBasicMaterial( {color: this.data.DigitsColor} );
     var mesh1 = new THREE.Mesh( SecGeo, SecMaterial);
     parent2.add(mesh1);
     parent2.rotateZ(Math.PI/2);
     parent2.position.x-=(distance - 0.08);
     parent2.position.y+=0.14;
     seconds.add(parent2);

     parent3 = new THREE.Object3D();
     var SecGeo = new THREE.BoxGeometry( 0.025, 0.1, 0.3 );
     var SecMaterial = new THREE.MeshBasicMaterial( {color: this.data.DigitsColor} );
     var mesh1 = new THREE.Mesh( SecGeo, SecMaterial);
     parent3.add(mesh1);
     parent3.position.x-=(distance - 0.16);
     parent3.position.y+=0.07;
     seconds.add(parent3);

     parent4 = new THREE.Object3D();
     var SecGeo = new THREE.BoxGeometry( 0.025, 0.1, 0.3);
     var SecMaterial = new THREE.MeshBasicMaterial( {color: this.data.DigitsColor} );
     var mesh1 = new THREE.Mesh( SecGeo, SecMaterial );
     parent4.add(mesh1);
     parent4.rotateZ(Math.PI/2);
     parent4.position.x-=(distance - 0.08);   
     seconds.add(parent4);


     parent5 = new THREE.Object3D();
     var SecGeo = new THREE.BoxGeometry( 0.025, 0.1, 0.2 );
     var SecMaterial = new THREE.MeshBasicMaterial( {color: this.data.DigitsColor} );
     var mesh1 = new THREE.Mesh( SecGeo, SecMaterial );
     parent5.add(mesh1);
     parent5.rotateZ(Math.PI/2);
     parent5.position.x-=(distance - 0.08);
     parent5.position.y-=0.14;    
     seconds.add(parent5);

     parent6 = new THREE.Object3D();
     var SecGeo = new THREE.BoxGeometry( 0.025, 0.1, 0.2 );
     var SecMaterial = new THREE.MeshBasicMaterial( {color: this.data.DigitsColor} );
     var mesh1 = new THREE.Mesh( SecGeo, SecMaterial );
     parent6.add(mesh1);
     parent6.position.x-=(distance - 0.16);
     parent6.position.y-=0.07;
     
     seconds.add(parent6);

       parent7 = new THREE.Object3D();
       var SecGeo = new THREE.BoxGeometry( 0.025, 0.1, 0.2 );
       var SecMaterial = new THREE.MeshBasicMaterial( {color: this.data.DigitsColor} );
       var mesh1 = new THREE.Mesh( SecGeo, SecMaterial );
       parent7.add(mesh1);
       parent7.position.x-=distance;
       parent7.position.y-=0.07;
       seconds.add(parent7);
      }
      el.setObject3D('TimerMesh', seconds); 
  },
  tick : function() 
  { 
    
    if(this.paused==false&& this.seconda!=0)

  {    this.GetTimeLeft();
       this.Setdigit();

       /*******************************LOSING CONDITION*******************************************/
         if(this.seconda==0 && mainscore <9)
      {
      	//as losing, call TimeUp
        this.TimeUp();
      }
   }
  
  }, pause: function () {
      this.paused=true;
       
  },
  play: function () {
    console.log("play called");
   if(this.paused)
    {
    this.TargetTime = new Date(new Date().getTime() + this.totalTimeRemaining);
    
    }
    this.paused=false;
  },
  Setdigit: function(){ 
   
    var digitval= [[1,1,1,0,1,1,1],[0,0,1,0,0,1,0],[0,1,1,1,1,0,1],[0,1,1,1,1,1,0],[1,0,1,1,0,1,0],[1,1,0,1,1,1,0],[1,1,0,1,1,1,1],[0,1,1,0,0,1,0],[1,1,1,1,1,1,1],[1,1,1,1,0,1,0]];
   // console.log(seconds.children.length); 
    var tensPlace = Math.floor(this.seconda/10); 
    for(var a=0;a<7;a++) 
         { 
           if(digitval[tensPlace][a]==1)
           seconds.children[a].visible=true;
           else
           seconds.children[a].visible=false;
         }
    var onesPlace = this.seconda%10;
    for(var i=7;i<14;i++) 
        { 
           if(digitval[onesPlace][i-7]==1)
           seconds.children[i].visible=true;
           else
           seconds.children[i].visible=false;
        }
  },

  /******************************************LOSING SCENE*************************************/

  TimeUp: function(){

	$("#wrapper").setAttribute('position','5  0 0')  			
   

   //take off any spacemans left
  	
  	if (document.getElementById("sm"))
  	{
  				var sm = document.querySelector('#sm');
  				sm.parentNode.removeChild(sm);
  	}

  	if (document.getElementById("sm1"))
  	{
  				var sm1 = document.querySelector('#sm1');
  				sm1.parentNode.removeChild(sm1);
   		}	
   	if (document.getElementById("sm2"))
  	{	
   					var sm2 = document.querySelector('#sm2');
  				sm2.parentNode.removeChild(sm2);
	}
	if (document.getElementById("sm3"))
	  	{
	  					var sm3 = document.querySelector('#sm3');
	  				sm3.parentNode.removeChild(sm3);
	}
	if (document.getElementById("sm4"))
	  	{
	  					var sm4 = document.querySelector('#sm4');
	  				sm4.parentNode.removeChild(sm4);
	}
	if (document.getElementById("sm5"))
	  	{
	  					var sm5 = document.querySelector('#sm5');
	  				sm5.parentNode.removeChild(sm5);
	}
	if (document.getElementById("sm6"))
	  	{
	  					var sm6 = document.querySelector('#sm6');
	  				sm6.parentNode.removeChild(sm6);
	}
	if (document.getElementById("sm7"))
	  	{
	  				var sm7 = document.querySelector('#sm7');
	  				sm7.parentNode.removeChild(sm7);
	} 	

	if (document.getElementById("sm8"))
	  	{
	  					var sm8 = document.querySelector('#sm8');
	  				sm8.parentNode.removeChild(sm8);
	}
	if (document.getElementById("sm9"))
	  	{
	  					var sm6 = document.querySelector('#sm9');
	  				sm9.parentNode.removeChild(sm9);
	}
	if (document.getElementById("sm10"))
	  	{
	  				var sm10 = document.querySelector('#sm10');
	  				sm10.parentNode.removeChild(sm10);
	} 	

	if (document.getElementById("chubby"))
	  	{
	  				var chubby = document.querySelector('#chubby');
	  				chubby.parentNode.removeChild(chubby);
	} 	


//stop clock sound
  	if (this.seconda<1)
  	{
  		$("#clock").components.sound.pause();
  	}


//change lighting

  	$("#light").setAttribute('light','color','red')

    $("#light").setAttribute('light','color','red')
    $("#light5").setAttribute('position','0 10 5')

    $("#light5").setAttribute('light','type','directional')
    $("#light1").setAttribute('light','color','red')
    $("#light2").setAttribute('light','color','red')
    $("#light3").setAttribute('light','color','red')
    $("#light4").setAttribute('light','color','red')
    $("#light5").setAttribute('light','color','red')
    $("#light6").setAttribute('light','color','red')
    $("#light7").setAttribute('light','color','red')
    $("#light8").setAttribute('light','color','red')

 //change skybox video
    $("#vid").play();
    $("#sk").setAttribute('src','#vid')

 //losing sounds
    $("#lose").components.sound.playSound();
  	$("#losemain").components.sound.playSound();
    $("#song").components.sound.pause();

 //change ground texture
    $("#ground").setAttribute('src','#happyground1')
    
 //change score text to 'GAME OVER'
    $("#score").setAttribute('text','value','GAME OVER')
    $("#score").setAttribute('position','-0.3 0.5 -4')
    $("#score").setAttribute('text','color','orange')
    $("#score").setAttribute('text','height','8')
    $("#score").setAttribute('text','width','8')
  },



  GetTimeLeft:function(){
        let startDate = new Date();
    startDate = startDate.getTime();
    
    let timeRemaining = parseInt((this.TargetTime - startDate) / 1000);
    
    this.totalTimeRemaining=  timeRemaining*1000;
    if (timeRemaining >= 0) {
      days = parseInt(timeRemaining / 86400);
      timeRemaining = (timeRemaining % 86400);
      
      this.houra = parseInt(timeRemaining / 3600);
      timeRemaining = (timeRemaining % 3600);
      
      this.minutea = parseInt(timeRemaining / 60);
      timeRemaining = (timeRemaining % 60);
      console.log("timeRemaining "+ timeRemaining);
   
      this.seconda = parseInt(timeRemaining);

      console.log("days :"+days+" hours :"+this.houra+" minutes :"+this.minutea+" seconds :"+this.seconda);
    } 
    
  },
  remove: function () {
     console.log("removing timer"); //remove events if any


  },
    update: function (oldData) {
    var data = this.data;
    var el = this.el;
 
  if (Object.keys(oldData).length === 0) { return; }
    console.log("update "+ data.DigitsColor);
   
    if (data.DigitsColor !== oldData.DigitsColor) {
      console.log(" update "+ seconds.children[1].isObject3D+" "+ data.DigitsColor.toString(16).slice(-6) );
    
      var col= "0x"+data.DigitsColor.toString(16).slice(-6);
      for(var i=0;i<14;i++) 
      {
        el.object3D.children[0].children[i].children[0].material.color.setHex(col);
      }
    }
  }
});
