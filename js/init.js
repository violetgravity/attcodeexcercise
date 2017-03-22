/*
  DATE PICKER
*/
$('#datepicker input').datepicker({
	format: 'mm/dd/yyyy', 
}).on('changeDate', function(){ 
  $(this).datepicker('hide');
});

/*
  FORM VALIDATION
*/
$(function() {  
  $("#createExpense").validate({ 
      errorPlacement: function(error, element) { 
      },
      highlight: function(element, errorClass) {
      $(element).addClass(errorClass).parent().children("select").addClass(errorClass);
    }, 
    rules: {
      expensetitle     : "required", 
      dateofpurchase   : "required", 
      expensecategory  : "required",
    }, 
    submitHandler: function(form) { 
       addExpense();
    }
  });
});


/*
	CREATE NEW EXPENSE
*/ 

rowCount=0; //ASSIGN EACH TABLE ROW UNIQUE ID 
function addExpense(){
  rowCount+=1; 

  //GET FORM DATA & SAVE IT IN LOCAL VARIABLES
  getExpenseTitle   = $('#expensetitle');
  getDateofPurchase = $('#dateofpurchase');
  getCategoryValue  = $('#expensecategory option:selected').text(); 

  //GET TABLE GRID
  tblDataGrid = $('#tblDataGrid');
  tblGrid     = $('#tblExpenses');
 
  //CREATE AN ARRAY & STORE FORM VALUES 
  expenseRow = [
    {title:getExpenseTitle.val(), date:getDateofPurchase.val(), category:getCategoryValue} 
  ]
  expenseRow.map(function(item, index){  
    htmlres=tblGrid.html(); 
    htmlres+="<tr id='row"+rowCount+"'>";
    htmlres+="<td>"+item.title+"</td>";
    htmlres+="<td>"+item.date+"</td>";
    htmlres+="<td>"+item.category+"</td>";
    htmlres+="<td><a href='#' onclick='deleteExpense("+rowCount+")' class='btn btn-xs btn-default'>Delete</a></td>";
    htmlres+="</tr>"; 
    tblDataGrid.css('display','');
    tblGrid.css('display','');
    tblGrid.html(htmlres); 
    getExpenseTitle.val('');
    getDateofPurchase.val('');
  }); 
}
 
function deleteExpense(i){ 
  $('#tblExpenses #row'+i).remove();
}

function clearExpenses(){
  $('#tblDataGrid').css('display', 'none');
  console.log(rowCount);
  for(i=1; i<=rowCount; i++){
    $('#tblExpenses #row'+i).remove();
  }
}  
