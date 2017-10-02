

// работа label:checked B iOS & iPad
var deviceAgent = navigator.userAgent.toLowerCase();
    var iOS = deviceAgent.match(/(iphone|ipod|ipad)/);
    if (iOS) {
        $('label').click(function (event) {
            $('#' + $(event.target).attr('for')).attr('checked', true).change();
        });
    }


//раздвигание блоков
var sl = document.getElementsByClassName("toggle-point");
var i;

for (i = 0; i < sl.length; i++) {
    sl[i].onclick = function() {
        this.classList.toggle("toggle-point");
        this.nextElementSibling.classList.toggle("show");
        this.nextElement.classList.toggle("show");
    }
}

var sl = document.getElementsByClassName("delete");
var i;

for (i = 0; i < sl.length; i++) {
    sl[i].onclick = function() {
        this.classList.toggle("delete");
        this.previousElementSibling.classList.toggle("hide");
        this.previousElement.classList.toggle("hide");
    }
}