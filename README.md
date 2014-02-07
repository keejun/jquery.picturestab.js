jquery.picturestab.js
=====================

a  jquery plugin for image effections

now show different effections for a beauty photo 

![alt tag](https://github.com/keejun/jquery.picturestab.js/blob/master/sample.PNG?raw=true) 
               原图(image before effect)  || 甜美(sweet)   ||  清新(clearly)   || 灰度(gray)

this plugin is easy to be applyed for some web applications . first, you should replace the Jquery plugin before picturestab.js ,then follow the example index.html which offers amounts of effections .
eg: $("#imagetoeffect").picturestab("#currimage","clearly"); 
$("#imagetoeffect") refers to the undo image , the "#currimage" refers to the effected image , "clearly" refers to a effection .  you counld find more effections in the index.html in this repository .  remind to place the image src in the undo image tag.  

此js插件易用于一些web项目,具体使用方法:
  1. 在引用插件之前，须在此之前引入Jquery.js。你可以在index.html中看到一些图片处理特效参数.
  2. eg : $("#imagetoeffect").picturestab("#currimage","clearly");        $("#imagetoeffect")表示要处理前的图像，而("#currimage","clearly")则表示处理后的图像和处理参数.注您需在处理前的图像的src加上图像地址。
  3. 此图像处理算法略显笨拙，您可以根据一些相关论文资料对此插件进行进一步的开发和应用.
    
 
