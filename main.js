 
var todolist=[]

function ToDo(date,todo){
 var obj={
 	date: date,
 	todo:todo
 }
 todolist.push(obj);
}

function ready (){
    $("#btn").click(function(){

		if ($('#input').val()!=="" && $('#date').val()!=="" && 
		$('#input5').val()==="" && $('#date5').val()==="" &&
		$('#input4').val()==="" && $('#date4').val()==="" &&
		$('#input3').val()==="" && $('#date3').val()==="" )
	{
		
		$("#input5").val($("#input").val()) 
		$("#date5").val($('#date').val())
        $('#input').val("")
        $("#date").val("")	
        ToDo($("#date5").val(),$("#input5").val())
	}

	else if ($('#input').val()!=="" && $('#date').val()!=="" && 
		$('#input5').val()!=="" && $('#date5').val()!=="" &&
		$('#input4').val() ==="" && $('#date4').val()==="" )
	{
        
		$("#input4").val($("#input").val()) 
		$("#date4").val($('#date').val())
        $('#input').val("")
        $("#date").val("")	
        ToDo($("#date4").val(),$("#input4").val())
	}

	else if ($('#input').val()!=="" && $('#date').val()!=="" && 
		$('#input4').val()!=="" && $('#date4').val()!=="" &&
		$('#input5').val()!=="" && $('#date5').val()!=="" &&
		$('#input3').val()==="" && $('#date3').val()==="")
	{
        
		$("#input3").val($("#input").val()) 
		$("#date3").val($('#date').val())
        $('#input').val("")
        $("#date").val("")
        ToDo($("#date3").val(),$("#input3").val())	

	}

	else if ($('#input').val()!=="" && $('#date').val()!=="" && 
		$('#input4').val()!=="" && $('#date4').val()!=="" &&
		$('#input5').val()!=="" && $('#date5').val()!=="" &&
		$('#input3').val()!=="" && $('#date3').val()!=="" &&
		$('#input2').val()==="" && $('#date2').val()==="")

	{
         
		$("#input2").val($("#input").val()) 
		$("#date2").val($('#date').val())
        $('#input').val("")
        $("#date").val("")	
        ToDo($("#date2").val(),$("#input2").val())

	}
	else if ($('#input').val()!=="" && $('#date').val()!=="" && 
		$('#input4').val()!=="" && $('#date4').val()!=="" &&
		$('#input5').val()!=="" && $('#date5').val()!=="" &&
		$('#input3').val()!=="" && $('#date3').val()!=="" &&
		$('#input2').val()!=="" && $('#date2').val()!=="" &&
		$('#input1').val()==="" && $('#date1').val()==="")

	{
         
		$("#input1").val($("#input").val()) 
		$("#date1").val($('#date').val())
        $('#input').val("")
        $("#date").val("")	
        ToDo($("#date1").val(),$("#input1").val())

	}
	else if ($('#input4').val()!=="" && $('#date4').val()!=="" &&
		$('#input5').val()!=="" && $('#date5').val()!=="" &&
		$('#input3').val()!=="" && $('#date3').val()!=="" &&
		$('#input2').val()!=="" && $('#date2').val()!=="" &&
		$('#input1').val()!=="" && $('#date1').val()!=="" )  {

		alert("Your list if full")
	}


	
	})

}


function resetAll(){

	$("#Reset").click(function(){
	$("#check1").show() && $("#NO1").show();
	$("#check2").show() && $("#NO2").show();
	$("#check3").show() && $("#NO3").show();
	$("#check4").show() && $("#NO4").show();
	$("#check5").show() && $("#NO5").show()
})
}

function hide(){
	$("h5").hide()
	$("#table").hide()
	$("#ResetAll").hide()
	$("#Reset").hide()
}

// function display(){
// 	$("#btn1").click(function(){
// 		if ($('#input5').val()!=="" && $('#date5').val()!==""){
// 		$("#btn1").hide()
// 		$(".TDL").hide()
// 		$("h3").hide()
// 		$("h4").hide()
// 		$("#table").show()
// 		$("h5").show()
// 		$("h2").hide()
// 		$("#Reset").show()
// 		$("#ResetAll").show()
// 		$("#ba1").append($("#input5").val())
//         $("#bb1").append($("#date5").val())
//         $("#ba2").append($("#input4").val())
//         $("#bb2").append($("#date4").val())
//         $("#ba3").append($("#input3").val())
//         $("#bb3").append($("#date3").val())
//         $("#ba4").append($("#input2").val())
//         $("#bb4").append($("#date2").val())
//         $("#ba5").append($("#input1").val())
//         $("#bb5").append($("#date1").val())
// 	}
// else {
// 	alert("You need to fill at least one task")
// }})
// }


function resetall(){
	$("#ResetAll").click(function(){
		$("#btn1").show()
		$("h5").hide()
	$("#table").hide()
	$("#Reset").hide()
		$("h3").show()
		$("h4").show()
		$("h2").show()
		$("#ResetAll").hide()
		$(".TDL").show()
		$("#ba1").empty()
        $("#bb1").empty()
        $("#ba2").empty()
        $("#bb2").empty()
        $("#ba3").empty()
        $("#bb3").empty()
        $("#ba4").empty()
        $("#bb4").empty()
        $("#ba5").empty()
        $("#bb5").empty()
        $("#input5").val("")
        $("#date5").val("")
        $("#input4").val("")
        $("#date4").val("")
        $("#input3").val("")
        $("#date3").val("")
        $("#input2").val("")
        $("#date2").val("")
        $("#input1").val("")
        $("#date1").val("")



	})

}







function display(){
	
	$("#btn1").click(function(){
		if ($('#input5').val()!=="" && $('#date5').val()!==""){

var array=todolist.sort(function (a, b) {
    if (a.date<b.date) {
    return -1;
  }
  if (a.date>b.date) {
    return 1;
  }
  return 0;
  });
console.log(array)
	
		$("#btn1").hide()
		$(".TDL").hide()
		$("h3").hide()
		$("h4").hide()
		$("#table").show()
		$("h5").show()
		$("h2").hide()
		$("#Reset").show()
		$("#ResetAll").show()
for (var i=1;i<=array.length;i++){

		$("#ba"+i).append(array[i-1].todo)
        $("#bb"+i).append(array[i-1].date)
        

	}}
else {
	alert("You need to fill at least one task")
}
})}

