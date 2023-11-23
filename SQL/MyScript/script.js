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
const button_list = ['','index', 'syntax', 'commands', 'comments', 'pros_and_cons_of_sql', 'what_is_a_relational_database', 'select', 'from', 'where', 'group by', 'having', 'order by', 'limit and offset', 'distinct', 'alias', 'aggregate_functions', 'subqueries', 'top', 'limit', 'offset', 'logical_operators', 'comparison_operators', 'and', 'or', 'not', 'all', 'between', 'in', 'not_in', 'like_clause', 'not_like', 'joins_introduction', 'inner_join', 'outer_join_left_join', 'right_join', 'full_join', 'cross_join', 'anti-join', 'left_vs_right_join', 'set_operators_introduction', 'union', 'union_all', 'intersect', 'except_minus', 'indexes:', 'indexes_introduction', 'types_of_indexes', 'index_optimization', 'create_database', 'create_table', 'data_types', 'constraints', 'alter_table', 'drop_table', 'views', 'relationships', 'rename', 'normalization', 'normal_forms_(1nf,_2nf,_3nf)', 'denormalization', 'insert', 'update', 'delete', 'truncate', 'merge', 'what_are_transactions', 'commit', 'rollback', 'savepoint', 'set_transaction', 'acid_properties', 'grant', 'revoke', 'if-then_statement', 'if_then_else_statement', 'if_then_elseif_else_statement', 'case_statements', 'case_vs_if_statement', 'stored_procedures', 'functions', 'common_table_expressions', 'window_functions_intro', 'row_number', 'rank', 'dense_rank', 'ntile', 'lead_&_lag', 'first_value_&_last_value', 'percent_rank_&_cume_dist', 'over', 'partition', 'online_analytical_processing', 'online_transaction_processing', 'fat_tables_vs_dimension_tables', 'hash_tables', 'slowly_changing_imensio', 'user_permissions_and_access_control', 'sql_injection_prevention', 'index_optimization', 'date_functions', 'string_functions', 'best_practices', 'interview_questions', 'interview_queries']

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
      <li class='LeftSideIndex_Btn_h'>Introduction To Sql:</li>
<a href='/SQL/index'><li class='LeftSideIndex_Btn' id='index' name='index'>SQL What Is Sql?</li></a>
<a href='/SQL/syntax'><li class='LeftSideIndex_Btn' id='syntax' name='syntax'>SQL Syntax</li></a>
<a href='/SQL/commands'><li class='LeftSideIndex_Btn' id='commands' name='commands'>SQL Commands</li></a>
<a href='/SQL/comments'><li class='LeftSideIndex_Btn' id='comments' name='comments'>SQL Comments</li></a>
<a href='/SQL/pros and cons'><li class='LeftSideIndex_Btn' id='pros and cons' name='pros_and_cons_of_sql'>SQL Pros and cons of SQL</li></a>
<li class='LeftSideIndex_Btn_h'>Relational Databases: </li>
<a href='/SQL/data base management system'><li class='LeftSideIndex_Btn' id='dbms' name='dbms'>What Is A DBMS?</li></a>

<li class='LeftSideIndex_Btn_h'>Data Retrieval: </li>
<a href='/SQL/select'><li class='LeftSideIndex_Btn' id='select' name='select_statement'>SQL Select Statement</li></a>
<a href='/SQL/from'><li class='LeftSideIndex_Btn' id='from' name='from_clause'>SQL From Clause</li></a>
<a href='/SQL/where'><li class='LeftSideIndex_Btn' id='where' name='where_clause'>SQL Where Clause</li></a>
<a href='/SQL/group by'><li class='LeftSideIndex_Btn' id='group by' name='group_by_clause'>SQL Group By Clause</li></a>
<a href='/SQL/having'><li class='LeftSideIndex_Btn' id='having' name='having_clause'>SQL Having Clause</li></a>
<a href='/SQL/order by'><li class='LeftSideIndex_Btn' id='order by' name='order_by_clause'>SQL Order By Clause</li></a>
<a href='/SQL/limit and offset'><li class='LeftSideIndex_Btn' id='limit and offset' name='limit_and_offset'>SQL Limit And Offset</li></a>
<a href='/SQL/distinct'><li class='LeftSideIndex_Btn' id='distinct' name='distinct'>SQL Distinct</li></a>
<a href='/SQL/alias'><li class='LeftSideIndex_Btn' id='alias' name='as_clause'>SQL As Clause</li></a>
<a href='/SQL/aggregate functions'><li class='LeftSideIndex_Btn' id='aggregate_functions' name='aggregate_functions'>SQL Aggregate Functions</li></a>
<a href='/SQL/subqueries'><li class='LeftSideIndex_Btn' id='subqueries' name='subqueries'>SQL Subqueries</li></a>
<li class='LeftSideIndex_Btn_h'>Limit & Offset:</li>
<a href='/limit'><li class='LeftSideIndex_Btn' id='limit' name='limit'>SQL Limit</li></a>
<a href='/offset'><li class='LeftSideIndex_Btn' id='offset' name='offset'>SQL Offset</li></a>
<li class='LeftSideIndex_Btn_h'>Logical Operators</li>
<a href='/logical_operators'><li class='LeftSideIndex_Btn' id='logical_operators' name='logical_operators'>SQL Logical Operators</li></a>
<a href='/comparison_operators'><li class='LeftSideIndex_Btn' id='comparison_operators' name='comparison_operators'>SQL Comparison Operators</li></a>
<a href='/and'><li class='LeftSideIndex_Btn' id='and' name='and'>SQL And</li></a>
<a href='/or'><li class='LeftSideIndex_Btn' id='or' name='or'>SQL Or</li></a>
<a href='/not'><li class='LeftSideIndex_Btn' id='not' name='not'>SQL Not</li></a>
<a href='/all'><li class='LeftSideIndex_Btn' id='all' name='all'>SQL All</li></a>
<a href='/between'><li class='LeftSideIndex_Btn' id='between' name='between'>SQL Between</li></a>
<a href='/in'><li class='LeftSideIndex_Btn' id='in' name='in'>SQL In</li></a>
<a href='/not_in'><li class='LeftSideIndex_Btn' id='not_in' name='not_in'>SQL Not In</li></a>
<a href='/like_clause'><li class='LeftSideIndex_Btn' id='like_clause' name='like_clause'>SQL Like Clause</li></a>
<a href='/not_like'><li class='LeftSideIndex_Btn' id='not_like' name='not_like'>SQL Not Like</li></a>
<li class='LeftSideIndex_Btn_h'>Joins: </li>
<a href='/joins_introduction'><li class='LeftSideIndex_Btn' id='joins_introduction' name='joins_introduction'>SQL Joins Introduction</li></a>
<a href='/inner_join'><li class='LeftSideIndex_Btn' id='inner_join' name='inner_join'>SQL Inner Join</li></a>
<a href='/outer_join_left_join'><li class='LeftSideIndex_Btn' id='outer_join_left_join' name='outer_join_left_join'>SQL Outer Join Left Join</li></a>
<a href='/right_join'><li class='LeftSideIndex_Btn' id='right_join' name='right_join'>SQL Right Join</li></a>
<a href='/full_join'><li class='LeftSideIndex_Btn' id='full_join' name='full_join'>SQL Full Join</li></a>
<a href='/cross_join'><li class='LeftSideIndex_Btn' id='cross_join' name='cross_join'>SQL Cross Join</li></a>
<a href='/anti-join'><li class='LeftSideIndex_Btn' id='anti-join' name='anti-join'>SQL Anti-Join</li></a>
<a href='/left_vs_right_join'><li class='LeftSideIndex_Btn' id='left_vs_right_join' name='left_vs_right_join'>SQL Left Vs Right Join</li></a>
<li class='LeftSideIndex_Btn_h'> Set Operators: </li>
<a href='/set_operators_introduction'><li class='LeftSideIndex_Btn' id='set_operators_introduction' name='set_operators_introduction'>SQL Set Operators Introduction</li></a>
<a href='/union'><li class='LeftSideIndex_Btn' id='union' name='union'>SQL Union</li></a>
<a href='/union_all'><li class='LeftSideIndex_Btn' id='union_all' name='union_all'>SQL Union All</li></a>
<a href='/intersect'><li class='LeftSideIndex_Btn' id='intersect' name='intersect'>SQL Intersect</li></a>
<a href='/except/minus'><li class='LeftSideIndex_Btn' id='except/minus' name='except/minus'>SQL Except/Minus</li></a>
<li class='LeftSideIndex_Btn_h'>Indexes: </li>
<a href='/indexes_introduction'><li class='LeftSideIndex_Btn' id='indexes_introduction' name='indexes_introduction'>SQL Indexes Introduction</li></a>
<a href='/types_of_indexes'><li class='LeftSideIndex_Btn' id='types_of_indexes' name='types_of_indexes'>SQL Types Of Indexes</li></a>
<a href='/index_optimization'><li class='LeftSideIndex_Btn' id='index_optimization' name='index_optimization'>SQL Index Optimization</li></a>
<li class='LeftSideIndex_Btn_h'>Data Definition: </li>
<a href='/create_database'><li class='LeftSideIndex_Btn' id='create_database' name='create_database'>SQL Create Database</li></a>
<a href='/create_table'><li class='LeftSideIndex_Btn' id='create_table' name='create_table'>SQL Create Table</li></a>
<a href='/data_types'><li class='LeftSideIndex_Btn' id='data_types' name='data_types'>SQL Data Types</li></a>
<a href='/constraints'><li class='LeftSideIndex_Btn' id='constraints' name='constraints'>SQL Constraints</li></a>
<a href='/alter_table'><li class='LeftSideIndex_Btn' id='alter_table' name='alter_table'>SQL Alter Table</li></a>
<a href='/drop_table'><li class='LeftSideIndex_Btn' id='drop_table' name='drop_table'>SQL Drop Table</li></a>
<a href='/views'><li class='LeftSideIndex_Btn' id='views' name='views'>SQL Views</li></a>
<a href='/relationships'><li class='LeftSideIndex_Btn' id='relationships' name='relationships'>SQL Relationships</li></a>
<a href='/rename'><li class='LeftSideIndex_Btn' id='rename' name='rename'>SQL Rename</li></a>
<a href='/normalization'><li class='LeftSideIndex_Btn' id='normalization' name='normalization'>SQL Normalization</li></a>
<a href='/normal_forms_(1nf,_2nf,_3nf)'><li class='LeftSideIndex_Btn' id='normal_forms_(1nf,_2nf,_3nf)' name='normal_forms_(1nf,_2nf,_3nf)'>SQL Normal Forms (1nf, 2nf, 3nf)</li></a>
<a href='/denormalization'><li class='LeftSideIndex_Btn' id='denormalization' name='denormalization'>SQL Denormalization</li></a>
<li class='LeftSideIndex_Btn_h'>Data Manipulation: </li>
<a href='/insert'><li class='LeftSideIndex_Btn' id='insert' name='insert'>SQL Insert</li></a>
<a href='/update'><li class='LeftSideIndex_Btn' id='update' name='update'>SQL Update</li></a>
<a href='/delete'><li class='LeftSideIndex_Btn' id='delete' name='delete'>SQL Delete</li></a>
<a href='/truncate'><li class='LeftSideIndex_Btn' id='truncate' name='truncate'>SQL Truncate</li></a>
<a href='/merge'><li class='LeftSideIndex_Btn' id='merge' name='merge'>SQL Merge</li></a>
<li class='LeftSideIndex_Btn_h'>Transactions Control</li>
<a href='/what_are_transactions'><li class='LeftSideIndex_Btn' id='what_are_transactions' name='what_are_transactions'>SQL What Are Transactions</li></a>
<a href='/commit'><li class='LeftSideIndex_Btn' id='commit' name='commit'>SQL Commit</li></a>
<a href='/rollback'><li class='LeftSideIndex_Btn' id='rollback' name='rollback'>SQL Rollback</li></a>
<a href='/savepoint'><li class='LeftSideIndex_Btn' id='savepoint' name='savepoint'>SQL Savepoint</li></a>
<a href='/set_transaction'><li class='LeftSideIndex_Btn' id='set_transaction' name='set_transaction'>SQL Set Transaction</li></a>
<a href='/acid_properties'><li class='LeftSideIndex_Btn' id='acid_properties' name='acid_properties'>SQL Acid Properties</li></a>
<li class='LeftSideIndex_Btn_h'>Data Control</li>
<a href='/grant'><li class='LeftSideIndex_Btn' id='grant' name='grant'>SQL Grant</li></a>
<a href='/revoke'><li class='LeftSideIndex_Btn' id='revoke' name='revoke'>SQL Revoke</li></a>
<li class='LeftSideIndex_Btn_h'>Conditional Statement:</li>
<a href='/if-then_statement'><li class='LeftSideIndex_Btn' id='if-then_statement' name='if-then_statement'>SQL If-Then Statement</li></a>
<a href='/if_then_else_statement'><li class='LeftSideIndex_Btn' id='if_then_else_statement' name='if_then_else_statement'>SQL If Then Else Statement</li></a>
<a href='/if_then_elseif_else_statement'><li class='LeftSideIndex_Btn' id='if_then_elseif_else_statement' name='if_then_elseif_else_statement'>SQL If Then Elseif Else Statement</li></a>
<a href='/*searched case statement*'><li class='LeftSideIndex_Btn' id='searched case statement' name='*searched case statement*'>SQL *Searched Case Statement*</li></a>
<a href='/case_statements'><li class='LeftSideIndex_Btn' id='case_statements' name='case_statements'>SQL Case Statements</li></a>
<a href='/case vs if statement'><li class='LeftSideIndex_Btn' id='case vs if statement' name='case vs if statement'>SQL Case Vs If Statement</li></a>
<li class='LeftSideIndex_Btn_h'>Advanced Sql: </li>
<a href='/stored_procedures'><li class='LeftSideIndex_Btn' id='stored_procedures' name='stored_procedures'>SQL Stored Procedures</li></a>
<a href='/functions'><li class='LeftSideIndex_Btn' id='functions' name='functions'>SQL Functions</li></a>
<a href='/common_table_expressions'><li class='LeftSideIndex_Btn' id='common_table_expressions' name='common_table_expressions'>SQL Common Table Expressions</li></a>
<li class='LeftSideIndex_Btn_h'>Window Functions:</li>
<a href='/window_functions_intro'><li class='LeftSideIndex_Btn' id='window_functions_intro' name='window_functions_intro'>SQL Window Functions Intro</li></a>
<a href='/row_number'><li class='LeftSideIndex_Btn' id='row_number' name='row_number'>SQL Row Number</li></a>
<a href='/rank'><li class='LeftSideIndex_Btn' id='rank' name='rank'>SQL Rank</li></a>
<a href='/dense_rank'><li class='LeftSideIndex_Btn' id='dense_rank' name='dense_rank'>SQL Dense Rank</li></a>
<a href='/ntile'><li class='LeftSideIndex_Btn' id='ntile' name='ntile'>SQL Ntile</li></a>
<a href='/lead_&_lag'><li class='LeftSideIndex_Btn' id='lead_&_lag' name='lead_&_lag'>SQL Lead & Lag</li></a>
<a href='/first_value_&_last_value'><li class='LeftSideIndex_Btn' id='first_value_&_last_value' name='first_value_&_last_value'>SQL First Value & Last Value</li></a>
<a href='/percent_rank_&_cume_dist'><li class='LeftSideIndex_Btn' id='percent_rank_&_cume_dist' name='percent_rank_&_cume_dist'>SQL Percent Rank & Cume Dist</li></a>
<a href='/over'><li class='LeftSideIndex_Btn' id='over' name='over'>SQL Over</li></a>
<a href='/partition'><li class='LeftSideIndex_Btn' id='partition' name='partition'>SQL Partition</li></a>
<li class='LeftSideIndex_Btn_h'>Data Analysis: </li>
<a href='/online_analytical_processing'><li class='LeftSideIndex_Btn' id='online_analytical_processing' name='online_analytical_processing'>SQL Online Analytical Processing</li></a>
<a href='/online_transaction_processing'><li class='LeftSideIndex_Btn' id='online_transaction_processing' name='online_transaction_processing'>SQL Online Transaction Processing</li></a>
<a href='/fat_tables_vs_dimension_tables'><li class='LeftSideIndex_Btn' id='fat_tables_vs_dimension_tables' name='fat_tables_vs_dimension_tables'>SQL Fat Tables Vs Dimension Tables</li></a>
<a href='/hash_tables'><li class='LeftSideIndex_Btn' id='hash_tables' name='hash_tables'>SQL Hash Tables</li></a>
<a href='/slowly_changing_imensio'><li class='LeftSideIndex_Btn' id='slowly_changing_imensio' name='slowly_changing_imensio'>SQL Slowly Changing Imensio</li></a>
<li class='LeftSideIndex_Btn_h'>Security And Optimization: </li>
<a href='/user_permissions_and_access_control'><li class='LeftSideIndex_Btn' id='user_permissions_and_access_control' name='user_permissions_and_access_control'>SQL User Permissions And Access Control</li></a>
<a href='/sql_injection_prevention'><li class='LeftSideIndex_Btn' id='sql_injection_prevention' name='sql_injection_prevention'>SQL Sql Injection Prevention</li></a>
<li class='LeftSideIndex_Btn_h'>Important Concepts: </li>
<a href='/index_optimization'><li class='LeftSideIndex_Btn' id='index_optimization' name='index_optimization'>SQL Index Optimization</li></a>
<a href='/date_functions'><li class='LeftSideIndex_Btn' id='date_functions' name='date_functions'>SQL Date Functions</li></a>
<a href='/string_functions'><li class='LeftSideIndex_Btn' id='string_functions' name='string_functions'>SQL String Functions</li></a>
<a href='/best_practices'><li class='LeftSideIndex_Btn' id='best_practices' name='best_practices'>SQL Best Practices</li></a>
<li class='LeftSideIndex_Btn_h'>Interview Preparation: </li>
<a href='/interview_questions'><li class='LeftSideIndex_Btn' id='interview_questions' name='interview_questions'>SQL Interview Questions</li></a>
<a href='/interview_queries'><li class='LeftSideIndex_Btn' id='interview_queries' name='interview_queries'>SQL Interview Queries</li></a>

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
  a_buttons += `<a href="/SQL/${previousitem}" type="button"><button class="btn btn-success1"><i class='fas fa-arrow-left'></i> Previous </button></a><br><br><br>`;
}
if (nextitem !== null) {
  a_buttons += `<a href="/SQL/${nextitem}" type="button"><button class="btn btn-success1">&nbsp;&nbsp;&nbsp; Next <i class='fas fa-arrow-right'></i>&nbsp;&nbsp;&nbsp; </button></a>`;
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
