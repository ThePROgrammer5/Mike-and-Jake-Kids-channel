function notifyMe(body, title, onclick) {
  if (Notification.permission !== 'granted') {
    Notification.requestPermission();
  }
  else {
    var notification = new Notification(title, {
    icon: 'img/favicon.jpg',
    body: body,
   });
   notification.onclick(function() {
     onclick 
   })
 }
};
notifyMe("Hello!👋 Did you know we have a youtube channel? check it out by clicking this notification! नमस्कार!👋 क्या आप जानते हैं कि हमारा एक यूट्यूब चैनल है? इस अधिसूचना पर क्लिक करके इसे देखें!", "Atention! ध्यान!", window.open("https://www.youtube.com/c/MIKEANDJAKEKIDSCHANNEL/featured"));

/*filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}*/

