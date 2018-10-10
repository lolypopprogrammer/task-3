document.getElementById('circle').onclick = move;
var button = document.getElementById('circle');
var but = document.getElementById('color-button');
var tmp = 0;
var x = 28;

 function move() {
        if (tmp == 0)  {
            var left = setInterval(function () {
                x -= 2;
                if (x >= 6) {
                    button.style.marginLeft = x + 'px';
                }
                if (x == 6) {
                    clearInterval(left);
                    but.style.background = ('#9c9c9c');
                }
                console.log(x);
            }, 15);
            tmp = 1;
        } else if (tmp == 1) {
            var right = setInterval(function () {
                x += 2;
                if (x <= 28) {
                    button.style.marginLeft = x + 'px';
                }
                if (x == 28) {
                    clearInterval(right);
                    but.style.background = ('#3eb281');
                }
                console.log(x);
            }, 15);
            console.log(x);
            tmp = 0;
        }
 }

