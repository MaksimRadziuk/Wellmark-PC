

// работа label:checked B iOS & iPad
var deviceAgent = navigator.userAgent.toLowerCase();
    var iOS = deviceAgent.match(/(iphone|ipod|ipad)/);
    if (iOS) {
        $('label').click(function (event) {
            $('#' + $(event.target).attr('for')).attr('checked', true).change();
        });
    }


//раздвигание блоков

	//блок формы (+ смена бэкграунда action-right-block)
var sl = document.getElementsByClassName("toggle-point");
var i;

for (i = 0; i < sl.length; i++) {
    sl[i].onclick = function() {
        this.classList.toggle("toggle-point");
        this.nextElementSibling.classList.toggle("hide");
        this.lastElementChild.classList.toggle("checked");
    }
}


	//блок сайдбара
var sl = document.getElementsByClassName("toggle1-point");
var i;

for (i = 0; i < sl.length; i++) {
    sl[i].onclick = function() {
        this.classList.toggle("toggle1-point");
        this.nextElementSibling.classList.toggle("show");
    }
}

// добавление блоков onclick(+ДОБАВИТЬ)
function myFunc () {
    document.getElementById("moscow").style.display = "inline-block";
}
function myFunc1 () {
    document.getElementById("SpB").style.display = "inline-block";
}
function myFunc2 () {
    document.getElementById("Novo").style.display = "inline-block";
}
function myShop1 () {
    document.getElementById("shop1").style.display = "inline-block";
}
function myShop2 () {
    document.getElementById("shop2").style.display = "inline-block";
}
function myAge1 () {
    document.getElementById("over21").style.display = "inline-block";
}
function myAge2 () {
    document.getElementById("over26").style.display = "inline-block";
}
function myAge3 () {
    document.getElementById("over31").style.display = "inline-block";
}

// удаление блоков onclick(+ДОБАВИТЬ)

$('.delete').on('click', function() {
  $(this).parent('.shop-place').css('display', 'none');
});

// удаление строк в таблице GOODS

$('.delete').on('click', function() {
  $(this).closest('.table-row').css('display', 'none');
});



// выведение меню навигации (при разрешении 360)
var sl = document.getElementsByClassName("toggle-btn");
var i;

for (i = 0; i < sl.length; i++) {
    sl[i].onclick = function() {
        this.classList.toggle("toggle-btn");
        this.lastElementChild.classList.toggle("show");
    }
}

