 function testBlock() {
     var obj = document.getElementById('switch-on')
     var obj2 = document.getElementById('switch-off')


     if (obj.style.display == 'none') {
         obj.style.display = 'block';
         obj2.style.display = 'none';

     } else {
         obj.style.display = 'none';
         obj2.style.display = 'block';
     }
 }