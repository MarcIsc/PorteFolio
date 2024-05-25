document.addEventListener('DOMContentLoaded', function() {
    var progressBar = document.getElementById('myBar');
    var width = 0;
    var interval = setInterval(increaseWidth, 100);

    function increaseWidth() {
        if (width >= 60) {
            clearInterval(interval);
        } else {
            width++;
            progressBar.style.width = width + '%';
            progressBar.innerHTML = width + '%';
        }
    }
});

document.addEventListener('DOMContentLoaded', function() {
    var progressBar = document.getElementById('myBar1');
    var width = 0;
    var interval = setInterval(increaseWidth, 100);

    function increaseWidth() {
        if (width >= 80) {
            clearInterval(interval);
        } else {
            width++;
            progressBar.style.width = width + '%';
            progressBar.innerHTML = width + '%';
        }
    }
});
document.addEventListener('DOMContentLoaded', function() {
    var progressBar = document.getElementById('mybar2');
    var width = 0;
    var interval = setInterval(increaseWidth, 100);

    function increaseWidth() {
        if (width >= 80) {
            clearInterval(interval);
        } else {
            width++;
            progressBar.style.width = width + '%';
            progressBar.innerHTML = width + '%';
        }
    }
});

document.addEventListener('DOMContentLoaded', function() {
    var progressBar = document.getElementById('.');
    var width = 0;
    var interval = setInterval(increaseWidth, 100);

    function increaseWidth() {
        if (width >= 30) {
            clearInterval(interval);
        } else {
            width++;
            progressBar.style.width = width + '%';
            progressBar.innerHTML = width + '%';
        }
    }
});

document.addEventListener('DOMContentLoaded', function() {
    var progressBar = document.getElementById('myBar3');
    var width = 0;
    var interval = setInterval(increaseWidth, 100);

    function increaseWidth() {
        if (width >= 10) {
            clearInterval(interval);
        } else {
            width++;
            progressBar.style.width = width + '%';
            progressBar.innerHTML = width + '%';
        }
    }
});

document.addEventListener('DOMContentLoaded', function() {
    var progressBar = document.getElementById('myBar4');
    var width = 0;
    var interval = setInterval(increaseWidth, 100);

    function increaseWidth() {
        if (width >= 55) {
            clearInterval(interval);
        } else {
            width++;
            progressBar.style.width = width + '%';
            progressBar.innerHTML = width + '%';
        }
    }
});



document.addEventListener('DOMContentLoaded', function() {
    var progressBar = document.getElementById('myBar5');
    var width = 0;
    var interval = setInterval(increaseWidth, 100);

    function increaseWidth() {
        if (width >= 10) {
            clearInterval(interval);
        } else {
            width++;
            progressBar.style.width = width + '%';
            progressBar.innerHTML = width + '%';
        }
    }
});




document.addEventListener('click', function() {
    var progressBar = document.getElementById('contFront');
    var width = 0;
    var interval = setInterval(increaseWidth, 100);

    function increaseWidth() {
        if (width >= 60) {
            clearInterval(interval);
        } else {
            width++;
            progressBar.style.width = width + '%';
            progressBar.innerHTML = width + '%';
        }
    }
});


// ---------------------------








let divBackEnd = document.querySelector('.bg-danger')
let divFrontEnd = document.querySelector('.bg-primary')

let contFront = "<section class=\"row flex-column rounded-2  py-3 bg-warning col-10 col-md-10 mx-auto justify-content-between align-items-center  \">\
<label for=\"html\" class=\"col-md-6 mx-auto text-center \">html</label><div class=\"row align-items-center mx-auto justify-content-center\"\>\
  <i class=\"col-2 col-md-4\"><img src=\"assets/icon/html icone.png\" class=\"icone img-fluid\" alt=\"html\"></i\>\
  <div class=\"progress-container col-10 col-md-6  justify-content-start\" role=\"progressbar\" aria-label=\"html\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"\>\
    <div class=\"progress-bar bg-warning text-dark  fw-bold fs-2 \" id=\"myBar1\" style=\"width: 0%\"\>\
      80%\
    </div\>\
  </div\>\
</div\>\
<hr class=\"col-3 col-md-3 mx-auto mt-2\">\
<label for=\"css\" class=\"col-md-6 mx-auto text-center \">css</label>\
<div class=\"row align-items-center mx-auto justify-content-center\">\
  <i class=\"col-2  col-md-4\"><img src=\"assets/icon/css_icon.png\" class=\"icone img-fluid \" alt=\"css\"></i>\
  <div class=\"progress-container col-10 col-md-6 justify-content-start \" role=\"progressbar\" aria-label=\"css\" aria-valuenow=\"50\" aria-valuemin=\"0\"          aria-valuemax=\"100\">\
    <div class=\"progress-bar bg-primary fw-bold fs-2 \" id=\"myBar2\" style=\"width: 0%\">\
      60%\
    </div>\
  </div>\
</div>\
<label for=\"JavaScript\" class=\"col-md-6 mx-auto text-center \">JavaScript</label>\
<div class=\"row align-items-center mx-auto justify-content-center\">\
  <i class=\"col-2 col-md-4  \"><img src=\"assets/icon/js_icon.png\" class=\"icone img-fluid rounded-3  \" alt=\"\"></i>\
  <div class=\"progress-container col-10 col-md-6 justify-content-start \" role=\"progressbar\" aria-label=\"Javascript\" aria-valuenow=\"100\" aria-valuemin=\"0\" aria-valuemax=\"100\">\
    <div class=\"progress-bar bg-warning fs-2 fw-bold text-dark \" id=\"myBar4\" style=\"width: 0%\">\
      10%\
    </div>\
  </div>\
</div>\
</section>";


// Change le background-color de la div front end et son contenu suite a un click comme evenement
divFrontEnd.addEventListener('click', () => {
    if (divFrontEnd.classList.contains('bg-primary')) {

    divFrontEnd.classList.remove('bg-primary');
    divFrontEnd.classList.add("bg-success");
    
    divFrontEnd.innerHTML = contFront;
   
    
} else {
    divFrontEnd.classList.remove('bg-success');
    divFrontEnd.classList.add("bg-primary"); 
     
}

});



   
