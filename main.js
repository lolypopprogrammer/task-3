document.getElementById('circle').onclick = move;
var but = document.getElementById('color-button');
var tmp = 0;


 function move() {
        if (tmp == 0)  {
            but.style.background = ('#9c9c9c');
            this.style.marginLeft = ('6px');
            tmp = 1;
        } else if (tmp == 1) {
            but.style.background = ('#3eb281');
            this.style.marginLeft = ('28px');
            tmp = 0;
        }
    };
