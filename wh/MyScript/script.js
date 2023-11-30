/*
function copyCodeToClipboard(button) {
	const codeElement = button.nextElementSibling.querySelector("code");
	const codeToCopy = codeElement.innerText;
	navigator.clipboard.writeText(codeToCopy);
	button.innerHTML = '<i class="fas fa-check"></i> copied';
	button.classList.add("copied");
	setTimeout(() => {
		button.innerHTML = '<i class="fas fa-copy"></i> copy';
		button.classList.remove("copied");
	}, 3000);
}
*/
const button_list = 
[   '',
   "index",
    "data warehouse architecture",
    "data warehouse best practices",
    "advantages of data warehousing",
    "normalization",
    "oltp",
    "olap",
    "oltp vs olap",
    "slowly changing dimension",
    "data marts",
    "etl",
    "elt",
    "etl vs elt",
    "star schema",
    "snowflake schema",
    "star schema vs snowflake schema",
    "fact tables",
    "dimension tables",
    "fact tables vs dimension tables",
    "data lake",
    "delta lake",
    "data lake vs delta lake",
    "data mining",
    "data modeling",
    "operational data store",
    "data governance",
    "performance tuning",
    "data warehouse tools"

]

function copyCodeToClipboard(button) {
	var codeElement = button.closest(".code-container").querySelector("code");

	if (codeElement) {
		var textArea = document.createElement("textarea");
		textArea.value = codeElement.textContent;
		document.body.appendChild(textArea);
		textArea.select();

		try {
			document.execCommand("copy");
			button.innerHTML = "<i class='fas fa-check'> </i> Copied!";
			button.classList.add("copied");
		} catch (err) {
			console.error("Unable to copy to clipboard: " + err);
		}
		document.body.removeChild(textArea);

		setTimeout(function() {
			button.innerHTML = '<i class="fas fa-copy"></i> copy';
			button.classList.remove("copied");
		}, 2000);
	}
}

const toggleButtons = document.querySelectorAll('.toggleButton');
toggleButtons.forEach(button => {
	button.addEventListener('click', function() {
		const currentState = this.getAttribute('data-state');
		if (currentState === 'copy') {
			// Change to the "Copied" state
			this.innerHTML = '<i class="fas fa-check"></i> copied';
			this.setAttribute('data-state', 'copied');
		} else {
			// Change to the "Copy" state
			this.innerHTML = '<i class="fas fa-copy"></i> copy';
			this.setAttribute('data-state', 'copy');
		}
	});
});

function toggleNav() {
	var list = document.getElementById("listofitems_mobile");
	if (list.style.width === "0%" || list.style.width === "") {
		list.style.width = "50%";
	} else {
		list.style.width = "0%";
	}
}

function openNav() {
	document.getElementById("listofitems_mobile").style.width = "50%";
}


function closeNav() {
	document.getElementById("listofitems_mobile").style.width = "0";
}

$(document).ready(function() {
	function checkScreenSize() {
		const listofitems = `
      <div id='listofitems'>
      <li class='LeftSideIndex_Btn_h'>Data Warehouse</li>
      <a href='/index'><li class='LeftSideIndex_Btn' id='index' name='index'>What is Data Warehouse ?</li></a>
<a href='/data warehouse architecture'><li class='LeftSideIndex_Btn' id='data warehouse architecture' name='data warehouse architecture'>Architecture</li></a>
<a href='/data warehouse best practices'><li class='LeftSideIndex_Btn' id='data warehouse best practices' name='data warehouse best practices'>Best Practices</li></a>
<a href='/advantages of data warehousing '><li class='LeftSideIndex_Btn' id='advantages of data warehousing ' name='advantages'>Advantages</li></a>

<li class='LeftSideIndex_Btn_h'>Normalization</li>
<a href='/normalization'><li class='LeftSideIndex_Btn' id='normalization' name='normalization'>Normalization</li></a>

<li class='LeftSideIndex_Btn_h'>OLTP & OLAP</li>
<a href='/oltp'><li class='LeftSideIndex_Btn' id='oltp' name='oltp'>OLTP</li></a>
<a href='/olap'><li class='LeftSideIndex_Btn' id='olap' name='olap'>OLAP</li></a>
<a href='/oltp vs olap'><li class='LeftSideIndex_Btn' id='oltp vs olap' name='oltp vs olap'>OLTP Vs OLAP</li></a>

<li class='LeftSideIndex_Btn_h'>SCD</li>
<a href='/slowly changing dimension'><li class='LeftSideIndex_Btn' id='slowly changing dimension' name='slowly changing dimension'>Slowly Changing Dimension</li></a>

<li class='LeftSideIndex_Btn_h'>Data Marts</li>
<a href='/data marts'><li class='LeftSideIndex_Btn' id='data marts' name='data marts'>Data Marts</li></a>

<li class='LeftSideIndex_Btn_h'>ETL & ELT</li>
<a href='/etl '><li class='LeftSideIndex_Btn' id='etl ' name='etl '>ETL </li></a>
<a href='/elt'><li class='LeftSideIndex_Btn' id='elt' name='elt'>ELT</li></a>
<a href='/etl vs elt'><li class='LeftSideIndex_Btn' id='etl vs elt' name='etl vs elt'>ETL Vs ELT</li></a>

<li class='LeftSideIndex_Btn_h'>Star & Snowflake</li>
<a href='/star schema'><li class='LeftSideIndex_Btn' id='star schema' name='star schema'>Star Schema</li></a>
<a href='/snowflake schema'><li class='LeftSideIndex_Btn' id='snowflake schema' name='snowflake schema'>Snowflake Schema</li></a>
<a href='/star schema vs snowflake schema'><li class='LeftSideIndex_Btn' id='star schema vs snowflake schema' name='star schema vs snowflake schema'>Star Schema Vs Snowflake Schema</li></a>

<li class='LeftSideIndex_Btn_h'>Fact & Dimenction</li>
<a href='/fact tables'><li class='LeftSideIndex_Btn' id='fact tables' name='fact tables'>Fact Tables</li></a>
<a href='/dimension tables'><li class='LeftSideIndex_Btn' id='dimension tables' name='dimension tables'>Dimension Tables</li></a>
<a href='/fact tables vs dimension tables'><li class='LeftSideIndex_Btn' id='fact tables vs dimension tables' name='fact tables vs dimension tables'>Fact Tables Vs Dimension Tables</li></a>

<li class='LeftSideIndex_Btn_h'>Data and Delta Lakes</li>
<a href='/data lake'><li class='LeftSideIndex_Btn' id='data lake' name='data lake'>Data Lake</li></a>
<a href='/delta lake'><li class='LeftSideIndex_Btn' id='delta lake' name='delta lake'>Delta Lake</li></a>
<a href='/data lake vs delta lake'><li class='LeftSideIndex_Btn' id='data lake vs delta lake' name='data lake vs delta lake'>Data Lake Vs Delta Lake</li></a>

<li class='LeftSideIndex_Btn_h'>Important Concepts</li>
<a href='/data mining'><li class='LeftSideIndex_Btn' id='data mining' name='data mining'>Data Mining</li></a>
<a href='/data modeling'><li class='LeftSideIndex_Btn' id='data modeling' name='data modeling'>Data Modeling</li></a>
<a href='/operational data store'><li class='LeftSideIndex_Btn' id='operational data store' name='operational data store'>Operational Data Store</li></a>
<a href='/data governance'><li class='LeftSideIndex_Btn' id='data governance' name='data governance'>Data Governance</li></a>
<a href='/performance tuning'><li class='LeftSideIndex_Btn' id='performance tuning' name='performance tuning'>Performance Tuning</li></a>

<li class='LeftSideIndex_Btn_h'>Data Warehouse Tools</li>
<a href='/data warehouse tools'><li class='LeftSideIndex_Btn' id='data warehouse tools' name='data warehouse tools'>Data Warehouse Tools</li></a>
    </div>`;

		const navigationbar = `
      <nav class='navbar navbar-expand-lg navbar-light bg-light fixed-top'>
        <div class='container-fluid'>
        <button class='navbar-toggler collapsed' type='button' data-bs-toggle='collapse' onclick='toggleNav()' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
          <span class='toggler-icon top-bar'></span>
          <span class='toggler-icon middle-bar'></span>
          <span class='toggler-icon bottom-bar'></span>
        </button>
        

        <a class='navbar-brand' href='#'>
          <img src='Images/LOGO.png' alt='tds' style='width:40px; ' class='rounded-pill'>
          <b>&#160; LearnIt.today</b>
        </a>
       <p ></p>
        <div class='collapse navbar-collapse justify-content-end' >
        <a id='navbarSupportedContent'></a>
          <ul class='navbar-nav  mb-2 mb-lg-0' id='navlist'>
            <li class='nav-item' data-bs-toggle='collapse' data-bs-target='.navbar-collapse'>
              <a class='nav-link' onclick='Home_Body()'>
                <b class='nav_name'>&#160;&#160; <i class='fas fa-home'></i> HOME&#160;&#160; </b>
              </a>
            </li>
            <li class='nav-item' data-bs-toggle='collapse' data-bs-target='.navbar-collapse'>
              <a class='nav-link' onclick='JOBS()'>
                <b class='nav_name'>&#160;&#160; <i class='fas fa-briefcase'></i> JOBS&#160;&#160; </b>
              </a>
            </li>
            <li class='nav-item' data-bs-toggle='collapse' data-bs-target='.navbar-collapse'>
              <a class='nav-link' onclick='INTERVIEW()'>
                <b class='nav_name'>&#160;&#160; <i class='fas fa-book-open icon'></i> Practice&#160;&#160; </b>
              </a>
            </li>
            <li class='nav-item' data-bs-toggle='collapse' data-bs-target='.navbar-collapse'>
              <a class='nav-link' onclick='learning()'>
                <b class='nav_name'>&#160;&#160; <i class='fas fa-graduation-cap'></i> COURSES&#160;&#160; </b>
              </a>
            </li>
            <li class='nav-item' data-bs-toggle='collapse' data-bs-target='.navbar-collapse'>
              <a class='nav-link' onclick='BOOKS()'>
                <b class='nav_name'>&#160;&#160; <i class='fas fa-book'></i> BOOKS&#160;&#160; </b>
              </a>
            </li>
            <li class='nav-item' data-bs-toggle='collapse' data-bs-target='.navbar-collapse'>
              <a class='nav-link' onclick='LOGIN()' data-bs-toggle='modal' data-bs-target='#sign-in'>
                <b class='nav_name'>&#160;&#160; <i class='fas fa-sign-in-alt'></i> SIGN IN&#160;&#160; </b>
              </a>
            </li>
          </ul>
            </div>
      </div>
     </nav>`;

		const NavigationbarMobile = `
<nav class="navbar1 fixed-bottom navbar-light bg-light">
    <div class="container-fluid">
        <a id='navbarSupportedContent'></a>
        <ul class="navbar-nav1 mb-2 mb-lg-0 d-flex justify-content-around" id="navlist">
            <li class="nav-item1">
                <a class="nav-link1" onclick="Home_Body()">
                    <b class="nav_name1"><i class="fas fa-home"></i></b>
                </a>
            </li>
            <li class="nav-item1">
                <a class="nav-link1" onclick="JOBS()">
                    <b class="nav_name1"><i class="fas fa-briefcase"></i></b>
                </a>
            </li>
            <li class="nav-item1">
                <a class="nav-link1" onclick="INTERVIEW()">
                    <b class="nav_name1"><i class="fas fa-book-open icon"></i></b>
                </a>
            </li>
            <li class="nav-item1">
                <a class="nav-link1" onclick="learning()">
                    <b class="nav_name1"><i class="fas fa-graduation-cap"></i></b>
                </a>
            </li>
            <li class="nav-item1">
                <a class="nav-link1" onclick="BOOKS()">
                    <b class="nav_name1"><i class="fas fa-book"></i></b>
                </a>
            </li>
            <li class="nav-item1">
                <a class="nav-link1" onclick="LOGIN()" data-bs-toggle="modal" data-bs-target="#sign-in">
                    <b class="nav_name1"><i class="fas fa-user"></i></b>
                </a>
            </li>
        </ul>
    </div>
</nav>
`;
const footer = `
  <div class="row">
    <div class="col-md-6 text-center text-md-start">
        <b>Copyright &copy; 2023 <a href="#">Feelit.today</a>, All rights reserved.</b><br>
    </div>
    <div class="col-md-6 text-center text-md-end">
      <a href="#" class='footeropt'>CONTACTUS</a>&nbsp;|&nbsp;
      <a href="#" class='footeropt'>ABOUTUS</a>&nbsp;|&nbsp;     
      <a href="#" class='footeropt'>DISCLIMER</a>&nbsp;|&nbsp;
      <a href="#" class='footeropt'>FOLLOW US</a>&nbsp;|&nbsp;
      <a href="#" class='footeropt'>HOME</a>&nbsp;|&nbsp;
      <a href="#" class='footeropt'>COOKIES</a>&nbsp;|&nbsp;
      <a href="#" class='footeropt'>HELP</a>&nbsp;|&nbsp;
      <a href="#" class='footeropt'>SUBCRIBE</a>
    </div>
  </div>
 `;
		document.getElementById("footer").innerHTML = footer;

		document.getElementById("navigation_bar").innerHTML = navigationbar;
		var getclass = document.getElementById("getclass").textContent;
		var getclassModified = `id='${getclass}'`;

		var listofitemsModified = listofitems.replace(new RegExp(`id='${getclass}'`), `${getclassModified} style='background-color:#d4dceb;'`);
		//var bModified = b.replace(new RegExp(`id='${a}'`), `${aModified} class='active'`);

		if ($(window).width() < 450) {
			document.getElementById("navigation_bar_botom").innerHTML = NavigationbarMobile;

			$('#sidenavbtn').show();
			$('#laptop').hide();
			$('#content').hide();
			$('#mobile').show();
			$('#listofitems_mobile').html(listofitemsModified);
			$("#listofitems_mobile1").html($("#content").html());
		} else if ($(window).width() > 450) {
			$('#sidenavbtn').hide();
			$('#content').hide();
			$('#mobile').hide();
			$('#laptop').show();
			$('#listofitems_Laptop').html(listofitemsModified);
			$("#listofitems_Laptop1").html($("#content").html());
		}
	}
	checkScreenSize();
});

var getclass = document.getElementById("getclass").textContent;
var index = button_list.indexOf(getclass);
var previousitem = index > 0 ? button_list[index - 1] : null;
var nextitem = index < button_list.length - 1 ? button_list[index + 1] : null;
var a_buttons = "";

if (previousitem !== null) {
  a_buttons += `<a href="/${previousitem}" type="button"><button class="btn btn-success1"><i class='fas fa-arrow-left'></i> Previous </button></a><br><br><br>`;
}
if (nextitem !== null) {
  a_buttons += `<a href="/${nextitem}" type="button"><button class="btn btn-success1">&nbsp;&nbsp;&nbsp; Next <i class='fas fa-arrow-right'></i>&nbsp;&nbsp;&nbsp; </button></a>`;
  }

document.getElementById("next_nav_button").innerHTML = a_buttons;

//var getclass = document.getElementById("getclass").textContent;
//document.getElementById(getclass).style.backgroundColor = "#04aa6d";

window.addEventListener("load", () => {
    const loader = document.querySelector(".loadingspinner");
    const content = document.querySelector(".content");

    // Hide the loader
    loader.style.display = "none";

    // Show the content
    content.style.display = "block";
});