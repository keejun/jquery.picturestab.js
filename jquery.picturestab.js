/**
 *    Jquery plugin for images effections
 *  * Created by keejun on 14-1-10.
 *    Copyright (C) 2014 keejun
 */
(function(){
var array=["sweet","colorwhite","warmth","clearly","classic","passor","gray","blackwhite","paint"];
var makecanvas={
    setcanvasid:function(){
        if(document.getElementsByTagName("canvas").length<1){
            var canvas=document.createElement("canvas");
            canvas.setAttribute("id","canvas");
            document.body.appendChild(canvas);
        }
    },
    makecanvas:function(currimage){
        var canvas=document.getElementById("canvas");
        canvas.width=currimage.width;
        canvas.height=currimage.height;

    },
    removecanvas:function(){
        if(document.getElementsByTagName("canvas").length>0){
            var canvas=document.getElementById("canvas");
            document.body.removeChild(canvas);
        }
    }
};
var  makepicture={
    sweet:function(data){
        for(var i=0;i<data.length;i+=4){
            data[i]=data[i]+40;
            data[i+1]=data[i+1]+20;
            data[i+2]=data[i+2]-20;
            data[i+3]=data[i+3]-50;
        }
    },
    colorwhite:function(data){
        for(var i=0;i<data.length;i+=4){
            data[i]=data[i]-30;
            data[i+1]=data[i+1];
            data[i+2]=data[i+2]+15;
        }
    },
    warmth:function(data){
        for(var i=0;i<data.length;i+=4){
            data[i]=data[i]+40;
            data[i+1]=data[i+1]+20;
            data[i+2]=data[i+2];
        }
    },
    clearly:function(data){
        for(var i=0;i<data.length;i+=4){
            data[i]=data[i]-30;
            data[i+1]=data[i+1];
            data[i+2]=data[i+2]+15;
            data[i+3]=data[i+3]-35;
        }
    },
    classic:function(data){
        for(var i=0;i<data.length;i+=4){
            data[i]=data[i]+100;
            data[i+1]=data[i+1]+110;
            data[i+2]=data[i+2]+10;
            data[i+3]=data[i+3]-80;
        }
    },
    passor:function(data){
        var preparered=0;
        var preparegreen=0;
        var prepareyellow=0;
        for(var i=0;i<data.length;i+=1){
             data[i]=data[i]-preparered+128;
             data[i+1]=data[i+1]-preparegreen+128;
             data[i+2]=data[i+2]-prepareyellow+128;
             preparered=data[i];
             preparegreen=data[i+1];
             prepareyellow=data[i+2];
            var avgdata=data[i]*0.3+data[i+1]*0.59+data[i+2]*0.11;
            data[i]=data[i+1]=data[i+2]=avgdata;
        }
    },
    gray:function(data){
        for(var i=0;i<data.length;i+=4){
            var avgdata=data[i]*0.3+data[i+1]*0.59+data[i+2]*0.11;
            data[i]=data[i+1]=data[i+2]=avgdata;
        }
    },
    blackwhite:function(data){
        for(var i=0;i<data.length;i+=4){
            var avgdata=(data[i]+data[i+1]+data[i+2])/3;
            if(avgdata>=98){
                data[i]=data[i+1]=data[i+2]=255;
            }
            else{
                data[i]=data[i+1]=data[i+2]=0;
            }
        }
    },
    paint:function(data){
        for(var i=0;i<data.length;i+=4){
            data[i]=255-data[i];
            data[i+1]=255-data[i+1];
            data[i+2]=255-data[i+2];
        }
    }
};
function drawimage(image,value,transid,currimage){
    makecanvas.setcanvasid();
    makecanvas.makecanvas(currimage);
    var  canvas =document.getElementById("canvas");
    var  context=canvas.getContext("2d");
    context.drawImage(image,0,0);
    var  imagedata=context.getImageData(0,0,canvas.width,canvas.height);
    var  data=imagedata.data;
    if(array.indexOf(value)>=0){
        switch(value){
            case "sweet": makepicture.sweet(data); break;
            case "colorwhite": makepicture.colorwhite(data); break;
            case  "warmth" :makepicture.warmth(data);break;
            case  "clearly":makepicture.clearly(data);break;
            case  "classic":makepicture.classic(data);break;
            case  "passor":makepicture.passor(data);break;
            case   "gray":makepicture.gray(data);break;
            case  "blackwhite":makepicture.blackwhite(data);break;
            case   "paint":makepicture.paint(data);break;
            default : console.log("Are you hunman ?"); break;
        }
    }
    else{
           console.log("Are you hunman ?");
    }
    context.putImageData(imagedata,0,0);
    var length=document.getElementsByTagName("img").length;
    for(var i=0;i<length;i++){
        if(document.getElementById(transid.toString().slice(1))!=null){
            document.getElementById(transid.toString().slice(1)).src=canvas.toDataURL();
        }
        else if(!document.getElementsByTagName("img")[i].hasAttribute("src")){
            document.getElementsByTagName("img")[i].src=canvas.toDataURL();
        }
    }
    makecanvas.removecanvas();
}
$.fn.extend({
    picturestab:function(transid,infection){
        var select=this.selector.trim().toString();
        var selectidbar=this.selector.trim().toString().split("");
        if(selectidbar[0]=="#"){
            var selected=document.getElementById(select.slice(1));
            if(selected!=null){
                var  image= new Image();
                image.onload=function(){
                    drawimage(this,infection,transid,selected);
                }
                image.src=selected.getAttribute("src");
            }
            else{
                return "";
            }
        }
        else{
            return confirm("please get the elements by id");
        }
    }
} )
})();
