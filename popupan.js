
	
var i=Math.floor(Math.random() * 3);
	var urls=["https://www.phunsuong.org/","https://www.facebook.com/C%C3%B4ng-ty-TNHH-TMDV-Ho%C3%A0ng-Minh-T%C3%A2n-1588382177855498","https://www.youtube.com/watch?v=KjhW9F4xoBk"];
	
	var url_popup = urls[i];      //<![CDATA[
	  // var url_ppp = 'https://www.phunsuong.org/';
      function addEvent(obj, eventName, func){
        if (obj.attachEvent)
        {
          obj.attachEvent("on" + eventName, func);
        }
        else if(obj.addEventListener)
        {
          obj.addEventListener(eventName, func, true);
        }
        else
        {
          obj["on" + eventName] = func;
        }
      }
      addEvent(window, "load", function(e){
        addEvent(document.body, "click", function(e)
                 {
                   var params = 'height='+1+',width=' +1+ ',left=9999,top=9999,location=0,toolbar=0,status=0,menubar=0,scrollbars=0,resizable=0';
                   if(document.cookie.indexOf("popup") == -1)
                   {
                     var w = window.open(url_popup,'popup', params);
                     if (w)
                     {
                       document.cookie = "popuphvfs=popup";
                       w.blur();
                     }
                     window.focus();
                   }
                 });
      });  
      //]]>
