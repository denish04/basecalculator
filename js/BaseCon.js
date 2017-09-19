function checkbtn()
{
				var a=document.getElementById("drpdwncon").value;

					if(a=="select base")
					{
						document.getElementById("invalidbase").innerHTML="* Please Select Base";
					}
					else if(a=="binary")
					{	

						document.getElementById("invalidvalue").innerHTML="";
						var b=document.getElementById("txtinputcon").value;
						
						var pattern=new RegExp("^[01]+(\\.)?[01]*$");
							if(pattern.test(b))
							{
								var z=parseInt(b,2).toString(8);
								var y=parseInt(b,2).toString(10);
								var x=parseInt(b,2).toString(16);
								document.getElementById("bincon").value=parseInt(b);
								document.getElementById("occon").value=z;
								document.getElementById("hexacon").value=x;
								document.getElementById("deccon").value=y;	
								document.getElementById("invalidvalue").innerHTML="";			
							}
							else
							{
								document.getElementById("invalidvalue").innerHTML="* Please Enter Correct Value";
							}
						
					}
					else if(a=="octal")
					{
						document.getElementById("invalidvalue").innerHTML="";
						var c=document.getElementById("txtinputcon").value;
						var pattern=new RegExp("^[0-7]+(\\.)?[0-7]*$");
						if(pattern.test(c))
						{
							var z=parseInt(c,8).toString(2);
							var y=parseInt(c,8).toString(10);
							var x=parseInt(c,8).toString(16);
							document.getElementById("bincon").value=z;
							document.getElementById("occon").value=parseInt(c);
							document.getElementById("hexacon").value=x;
							document.getElementById("deccon").value=y;
							document.getElementById("invalidvalue").innerHTML="";
						}
						else
						{
							document.getElementById("invalidvalue").innerHTML="* Please Enter Correct Value";
						}
					}
					else if(a=="decimal")	
					{
						document.getElementById("invalidvalue").innerHTML="";
						var d=document.getElementById("txtinputcon").value;
						var pattern=new RegExp("^[0-9]+(\\.)?[0-9]*$");
						if(pattern.test(d))
						{
							var z=parseInt(d,10).toString(2);
							var y=parseInt(d,10).toString(8);
							var x=parseInt(d,10).toString(16);
							document.getElementById("bincon").value=z;
							document.getElementById("occon").value=y;
							document.getElementById("hexacon").value=x;
							document.getElementById("deccon").value=parseInt(d);
							document.getElementById("invalidvalue").innerHTML="";
						}
						else						
						{
							document.getElementById("invalidvalue").innerHTML="* Please Enter Correct Value";
						}
					}
					else if(a=="hexadecimal")
					{
						document.getElementById("invalidvalue").innerHTML="";
						var e=document.getElementById("txtinputcon").value;
						var pattern=new RegExp("^[0-9A-Fa-f]+(\\.)?[0-9A-Fa-f]*$");
						if(pattern.test(e))
						{
							var z=parseInt(e,16).toString(2);
							var y=parseInt(e,16).toString(8);
							var x=parseInt(e,16).toString(10);
							document.getElementById("bincon").value=z;
							document.getElementById("occon").value=y;
							document.getElementById("hexacon").value=parseInt(e);
							document.getElementById("deccon").value=x;
							document.getElementById("invalidvalue").innerHTML="";
						}
						else
						{
							document.getElementById("invalidvalue").innerHTML="* Please Enter Correct Value";
						}
					}
					else
					{
						alert("Please enter value");
					}
					

			}
function chngDrpdwnone()
{
	document.getElementById("invalidbase").innerHTML="";
	document.getElementById("invalidvalue").innerHTML="";
	var a=document.getElementById("drpdwn1").value;
	if(a=="binary")
	{
		document.getElementById("txt1").placeholder="Enter Binary Value";
	}
	else if(a=="octal")
	{
		document.getElementById("txt1").placeholder="Enter Octal Value";
	}
	else if(a=="decimal")
	{
		document.getElementById("txt1").placeholder="Enter Decimal Value";
	}
	else if(a=="hexadecimal")
	{
		document.getElementById("txt1").placeholder="Enter Hexadecimal Value";
	}
	else
	{
		document.getElementById('txt1').placeholder="";
	}	
}
function chngDrpdwntwo()
{
	document.getElementById("invalidbase").innerHTML="";
	document.getElementById("invalidvalue").innerHTML="";
	var a=document.getElementById("drpdwn2").value;
	if(a=="binary")
	{
		document.getElementById("txt2").placeholder="Enter Binary Value";
	}
	else if(a=="octal")
	{
		document.getElementById("txt2").placeholder="Enter Octal Value";
	}
	else if(a=="decimal")
	{
		document.getElementById("txt2").placeholder="Enter Decimal Value";
	}
	else if(a=="hexadecimal")
	{
		document.getElementById("txt2").placeholder="Enter Hexadecimal Value";
	}
	else
	{
		document.getElementById('txt2').placeholder="";
	}	
}
function chngDrpdwn()
{
	document.getElementById("invalidbase").innerHTML="";
	document.getElementById("invalidvalue").innerHTML="";
	var a=document.getElementById("drpdwncon").value;
	if(a=="binary")
	{
		document.getElementById("txtinputcon").placeholder="Enter Binary Value";
	}
	else if(a=="octal")
	{
		document.getElementById("txtinputcon").placeholder="Enter Octal Value";
	}
	else if(a=="decimal")
	{
		document.getElementById("txtinputcon").placeholder="Enter Decimal Value";
	}
	else if(a=="hexadecimal")
	{
		document.getElementById("txtinputcon").placeholder="Enter Hexadecimal Value";
	}
	else
	{
		document.getElementById('txtinputcon').placeholder="";
	}	
}
function resetplaceholder()
{
	document.getElementById('txtinputcon').placeholder="";
	document.getElementById('invalidbase').innerHTML="";
}
function resetplaceholder1()
{
	document.getElementById('txt1').placeholder="";
	document.getElementById('txt2').placeholder="";
	document.getElementById('invalidvalbas').innerHTML="";
}