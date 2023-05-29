$(document).ready(function() {
    function checkScreenSize() {
        if ($(window).width() < 450) {
            $('#laptop').hide();
            $('#mobile').show();
            $('#laptop1').hide();
            $('#mobile1').show();
            //loading filter data to fit mobile screen
            $("#filter_mobile").html($("#filter").html());
        } else if ($(window).width() > 450) {
            $('#mobile').hide();
            $('#laptop').show();
            $('#laptop1').show();
            $('#mobile1').hide();
            //loading filter data to laptop screen
            $("#filter_Laptop").html($("#filter").html());
        }
    }
    checkScreenSize(); // call the function initially
});


$('.filter-name').click(function() {
    $(this).find('i').toggleClass('bi bi-chevron-down bi bi-chevron-up');
});



function my_experience() {
    let text = document.getElementById("experience").value;
    document.getElementById("print-experience").innerHTML = text * 0.5 + " -Years";
}

function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
}

function Home_Body() {
    $('#Home_Body').show();
    $('#JOBS').hide();
    $('#Job_Dis').hide();
    $('#INTERVIEW').hide();
    $('#BOOKS').hide();
    $('#learning').show();
    $('#categorey').show();
   
}

function JOBS() {
    $('#JOBS').show();
    $('#Home_Body').hide();
    $('#Job_Dis').hide();
    $('#INTERVIEW').hide();
    $('#BOOKS').hide();
    $('#learning').hide();
    $('#categorey').hide();
    window.scrollTo(0, 0);
}

function Job_Dis() {
    $('#Job_Dis').show();
    $('#Home_Body').hide();
    $('#JOBS').hide();
    $('#INTERVIEW').hide();
    $('#BOOKS').hide();
    $('#learning').hide();
     $('#categorey').hide();
    window.scrollTo(0, 0);

}
function learning() {
    $('#learning').show();
    $('#Job_Dis').hide();
    $('#Home_Body').hide();
    $('#JOBS').hide();
    $('#INTERVIEW').hide();
    $('#BOOKS').hide();
     $('#categorey').hide();
    window.scrollTo(0, 0);

}

function INTERVIEW() {
    $('#INTERVIEW').show();
    $('#Home_Body').hide();
    $('#JOBS').hide();
    $('#Job_Dis').hide();
    $('#BOOKS').hide();
    $('#learning').hide();
     $('#categorey').hide();
    window.scrollTo(0, 0);
}

function BOOKS() {
    $('#BOOKS').show();
    $('#Home_Body').hide();
    $('#JOBS').hide();
    $('#Job_Dis').hide();
    $('#INTERVIEW').hide();
    $('#learning').hide();
     $('#categorey').hide();
    window.scrollTo(0, 0);
}



const inputs = document.querySelectorAll('#otp > *[id]');
for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('keydown', function(event) {
        if (event.key === "Backspace") {
            inputs[i].value = '';
            if (i !== 0) inputs[i - 1].focus();
        } else {
            if (i === inputs.length - 1 && inputs[i].value !== '') {
                return true;
            } else if (event.keyCode > 47 && event.keyCode < 58) {
                inputs[i].value = event.key;
                if (i !== inputs.length - 1) inputs[i + 1].focus();
                event.preventDefault();
            } else if (event.keyCode > 64 && event.keyCode < 91) {
                inputs[i].value = String.fromCharCode(event.keyCode);
                if (i !== inputs.length - 1) inputs[i + 1].focus();
                event.preventDefault();
            }
        }
    });
}

OTPInput();

function signin() {
    var x = document.getElementById("signin1");
    if (x.type === "password") {
        x.type = "text";
        document.getElementById("in").style.color = "red";

    } else {
        x.type = "password";
        document.getElementById("in").style.color = "black";

    }
}

function signup() {
    var x = document.getElementById("signup1");
    if (x.type === "password") {
        x.type = "text";
        document.getElementById("up").style.color = "red";

    } else {
        x.type = "password";
        document.getElementById("up").style.color = "black";

    }
}