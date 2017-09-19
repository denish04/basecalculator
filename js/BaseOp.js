	function checkadd()
		{

			var a=document.getElementById('drpdwn1').value;
			var b=document.getElementById('drpdwn2').value;
			if(a=="select base" || b=="select base")
			{
				document.getElementById("invalidvalbas").innerHTML="*Please select base";
				
			}
			else if(a=="binary" && b=="binary")
					{
						var c=document.getElementById("txt1").value;
						var d=document.getElementById("txt2").value;
						
						var pattern=new RegExp("^[01]+(\\.)?[01]*$");
						if(pattern.test(c) && pattern.test(d))
						{
							var x=(parseInt(c,2)+parseInt(d,2)).toString(2);
							var y=parseInt(x,2).toString(8);
							var z=parseInt(x,2).toString(10);
							var w=parseInt(x,2).toString(16);
							document.getElementById('ansbin').value=x;
							document.getElementById('ansoct').value=y;
							document.getElementById('ansdeci').value=z;
							document.getElementById('anshexa').value=w;
							document.getElementById("invalidvalbas").innerHTML="";

						}
						else
						{
							document.getElementById("invalidvalbas").innerHTML="*invalid Enter Value";
						}
					}
			else if(a=="binary" && b=="octal")
					{
						var c=document.getElementById("txt1").value;
						var d=document.getElementById("txt2").value;
						
						var pattern1=new RegExp("^[01]+(\\.)?[01]*$");
						var pattern2=new RegExp("^[0-7]+(\\.)?[0-7]*$");
						if(pattern1.test(c) && pattern2.test(d))
						{
							var x=(parseInt(c,2)+parseInt(d,8)).toString(2);
							var y=parseInt(x,2).toString(8);
							var z=parseInt(x,2).toString(10);
							var w=parseInt(x,2).toString(16);
							document.getElementById('ansbin').value=x;
							document.getElementById('ansoct').value=y;
							document.getElementById('ansdeci').value=z;
							document.getElementById('anshexa').value=w;
							document.getElementById("invalidvalbas").innerHTML="";

						}
						else
						{
							document.getElementById("invalidvalbas").innerHTML="*invalid Enter Value";
						}
					}
			else if(a=="binary" && b=="decimal")
					{
						var c=document.getElementById("txt1").value;
						var d=document.getElementById("txt2").value;
						
						var pattern1=new RegExp("^[01]+(\\.)?[01]*$");
						var pattern2=new RegExp("^[0-9]+(\\.)?[0-9]*$");
						if(pattern1.test(c) && pattern2.test(d))
						{
							var x=(parseInt(c,2)+parseInt(d,10)).toString(2);
							var y=parseInt(x,2).toString(8);
							var z=parseInt(x,2).toString(10);
							var w=parseInt(x,2).toString(16);
							document.getElementById('ansbin').value=x;
							document.getElementById('ansoct').value=y;
							document.getElementById('ansdeci').value=z;
							document.getElementById('anshexa').value=w;document.getElementById("invalidvalbas").innerHTML="";
							document.getElementById("invalidvalbas").innerHTML="";

						}
						else
						{
							document.getElementById("invalidvalbas").innerHTML="*invalid Enter Value";
						}
					}
			else if(a=="binary" && b=="hexadecimal")
					{

						var c=document.getElementById("txt1").value;
						var d=document.getElementById("txt2").value;
						
						var pattern1=new RegExp("^[01]+(\\.)?[01]*$");
						var pattern2=new RegExp("^[0-9A-Fa-f]+(\\.)?[0-9A-Fa-f]*$");
						if(pattern1.test(c) && pattern2.test(d))
						{
							var x=(parseInt(c,2)+parseInt(d,16)).toString(2);
							var y=parseInt(x,2).toString(8);
							var z=parseInt(x,2).toString(10);
							var w=parseInt(x,2).toString(16);
							document.getElementById('ansbin').value=x;
							document.getElementById('ansoct').value=y;
							document.getElementById('ansdeci').value=z;
							document.getElementById('anshexa').value=w;
							document.getElementById("invalidvalbas").innerHTML="";
						}
						else
						{
							document.getElementById("invalidvalbas").innerHTML="*invalid Enter Value";
						}
					}
			else if(a=="octal" && b=="binary")
					{

						var c=document.getElementById("txt1").value;
						var d=document.getElementById("txt2").value;
						
						var pattern2=new RegExp("^[01]+(\\.)?[01]*$");
						var pattern1=new RegExp("^[0-7]+(\\.)?[0-7]*$");
						if(pattern1.test(c) && pattern2.test(d))
						{
							var x=(parseInt(c,8)+parseInt(d,2)).toString(2);
							var y=parseInt(x,2).toString(8);
							var z=parseInt(x,2).toString(10);
							var w=parseInt(x,2).toString(16);
							document.getElementById('ansbin').value=x;
							document.getElementById('ansoct').value=y;
							document.getElementById('ansdeci').value=z;
							document.getElementById('anshexa').value=w;
							document.getElementById("invalidvalbas").innerHTML="";
						}
						else
						{
							document.getElementById("invalidvalbas").innerHTML="*invalid Enter Value";
						}
					}
			else if(a=="octal" && b=="octal")
					{

						var c=document.getElementById("txt1").value;
						var d=document.getElementById("txt2").value;
						
						var pattern1=new RegExp("^[0-7]+(\\.)?[0-7]*$");
						var pattern2=new RegExp("^[0-7]+(\\.)?[0-7]*$");
						if(pattern1.test(c) && pattern2.test(d))
						{
							var x=(parseInt(c,8)+parseInt(d,8)).toString(2);
							var y=parseInt(x,2).toString(8);
							var z=parseInt(x,2).toString(10);
							var w=parseInt(x,2).toString(16);
							document.getElementById('ansbin').value=x;
							document.getElementById('ansoct').value=y;
							document.getElementById('ansdeci').value=z;
							document.getElementById('anshexa').value=w;
							document.getElementById("invalidvalbas").innerHTML="";
						}
						else
						{
							document.getElementById("invalidvalbas").innerHTML="*invalid Enter Value";
						}
					}
			else if(a=="octal" && b=="decimal")
					{

						var c=document.getElementById("txt1").value;
						var d=document.getElementById("txt2").value;
						
						var pattern1=new RegExp("^[0-7]+(\\.)?[0-7]*$");
						var pattern2=new RegExp("^[0-9]+(\\.)?[0-9]*$");
						if(pattern1.test(c) && pattern2.test(d))
						{
							var x=(parseInt(c,8)+parseInt(d,10)).toString(2);
							var y=parseInt(x,2).toString(8);
							var z=parseInt(x,2).toString(10);
							var w=parseInt(x,2).toString(16);
							document.getElementById('ansbin').value=x;
							document.getElementById('ansoct').value=y;
							document.getElementById('ansdeci').value=z;
							document.getElementById('anshexa').value=w;
							document.getElementById("invalidvalbas").innerHTML="";
						}
						else
						{
							document.getElementById("invalidvalbas").innerHTML="*invalid Enter Value";
						}
					}
			else if(a=="octal" && b=="hexadecimal")
					{

						var c=document.getElementById("txt1").value;
						var d=document.getElementById("txt2").value;
						
						var pattern1=new RegExp("^[0-7]+(\\.)?[0-7]*$");
						var pattern2=new RegExp("^[0-9A-Fa-f]+(\\.)?[0-9A-Fa-f]*$");
						if(pattern1.test(c) && pattern2.test(d))
						{
							var x=(parseInt(c,8)+parseInt(d,16)).toString(2);
							var y=parseInt(x,2).toString(8);
							var z=parseInt(x,2).toString(10);
							var w=parseInt(x,2).toString(16);
							document.getElementById('ansbin').value=x;
							document.getElementById('ansoct').value=y;
							document.getElementById('ansdeci').value=z;
							document.getElementById('anshexa').value=w;
							document.getElementById("invalidvalbas").innerHTML="";
						}
						else
						{
							document.getElementById("invalidvalbas").innerHTML="*invalid Enter Value";
						}
					}
			else if(a=="decimal" && b=="binary")
					{

						var c=document.getElementById("txt1").value;
						var d=document.getElementById("txt2").value;
						
						var pattern2=new RegExp("^[01]+(\\.)?[01]*$");
						var pattern1=new RegExp("^[0-9]+(\\.)?[0-9]*$");
						if(pattern1.test(c) && pattern2.test(d))
						{
							var x=(parseInt(c,10)+parseInt(d,2)).toString(2);
							var y=parseInt(x,2).toString(8);
							var z=parseInt(x,2).toString(10);
							var w=parseInt(x,2).toString(16);
							document.getElementById('ansbin').value=x;
							document.getElementById('ansoct').value=y;
							document.getElementById('ansdeci').value=z;
							document.getElementById('anshexa').value=w;
							document.getElementById("invalidvalbas").innerHTML="";
						}
						else
						{
							document.getElementById("invalidvalbas").innerHTML="*invalid Enter Value";
						}
					}
			else if(a=="decimal" && b=="octal")
					{

						var c=document.getElementById("txt1").value;
						var d=document.getElementById("txt2").value;
						
						var pattern2=new RegExp("^[0-7]+(\\.)?[0-7]*$");
						var pattern1=new RegExp("^[0-9]+(\\.)?[0-9]*$");
						if(pattern1.test(c) && pattern2.test(d))
						{
							var x=(parseInt(c,10)+parseInt(d,8)).toString(2);
							var y=parseInt(x,2).toString(8);
							var z=parseInt(x,2).toString(10);
							var w=parseInt(x,2).toString(16);
							document.getElementById('ansbin').value=x;
							document.getElementById('ansoct').value=y;
							document.getElementById('ansdeci').value=z;
							document.getElementById('anshexa').value=w;
							document.getElementById("invalidvalbas").innerHTML="";
						}
						else
						{
							document.getElementById("invalidvalbas").innerHTML="*invalid Enter Value";
						}
					}
			else if(a=="decimal" && b=="decimal")
					{

						var c=document.getElementById("txt1").value;
						var d=document.getElementById("txt2").value;
						
						var pattern1=new RegExp("^[0-9]+(\\.)?[0-9]*$");
						var pattern2=new RegExp("^[0-9]+(\\.)?[0-9]*$");
						if(pattern1.test(c) && pattern2.test(d))
						{
							var x=(parseInt(c,10)+parseInt(d,10)).toString(2);
							var y=parseInt(x,2).toString(8);
							var z=parseInt(x,2).toString(10);
							var w=parseInt(x,2).toString(16);
							document.getElementById('ansbin').value=x;
							document.getElementById('ansoct').value=y;
							document.getElementById('ansdeci').value=z;
							document.getElementById('anshexa').value=w;
							document.getElementById("invalidvalbas").innerHTML="";
						}
						else
						{
							document.getElementById("invalidvalbas").innerHTML="*invalid Enter Value";
						}
					}
			else if(a=="decimal" && b=="hexadecimal")
					{

						var c=document.getElementById("txt1").value;
						var d=document.getElementById("txt2").value;
						
						var pattern2=new RegExp("^[0-9A-Fa-f]+(\\.)?[0-9A-Fa-f]*$");
						var pattern1=new RegExp("^[0-9]+(\\.)?[0-9]*$");
						if(pattern1.test(c) && pattern2.test(d))
						{
							var x=(parseInt(c,10)+parseInt(d,16)).toString(2);
							var y=parseInt(x,2).toString(8);
							var z=parseInt(x,2).toString(10);
							var w=parseInt(x,2).toString(16);
							document.getElementById('ansbin').value=x;
							document.getElementById('ansoct').value=y;
							document.getElementById('ansdeci').value=z;
							document.getElementById('anshexa').value=w;
							document.getElementById("invalidvalbas").innerHTML="";
						}
						else
						{
							document.getElementById("invalidvalbas").innerHTML="*invalid Enter Value";
						}
					}
			else if(a=="hexadecimal" && b=="binary")
					{

						var c=document.getElementById("txt1").value;
						var d=document.getElementById("txt2").value;
						
						var pattern1=new RegExp("^[0-9A-Fa-f]+(\\.)?[0-9A-Fa-f]*$");
						var pattern2=new RegExp("^[01]+(\\.)?[01]*$");
						if(pattern1.test(c) && pattern2.test(d))
						{
							var x=(parseInt(c,16)+parseInt(d,2)).toString(2);
							var y=parseInt(x,2).toString(8);
							var z=parseInt(x,2).toString(10);
							var w=parseInt(x,2).toString(16);
							document.getElementById('ansbin').value=x;
							document.getElementById('ansoct').value=y;
							document.getElementById('ansdeci').value=z;
							document.getElementById('anshexa').value=w;
							document.getElementById("invalidvalbas").innerHTML="";
						}
						else
						{
							document.getElementById("invalidvalbas").innerHTML="*invalid Enter Value";
						}
					}
			else if(a=="hexadecimal" && b=="octal")
					{

						var c=document.getElementById("txt1").value;
						var d=document.getElementById("txt2").value;
						
						var pattern1=new RegExp("^[0-9A-Fa-f]+(\\.)?[0-9A-Fa-f]*$");
						var pattern2=new RegExp("^[0-7]+(\\.)?[0-7]*$");

						if(pattern1.test(c) && pattern2.test(d))
						{
							var x=(parseInt(c,16)+parseInt(d,8)).toString(2);
							var y=parseInt(x,2).toString(8);
							var z=parseInt(x,2).toString(10);
							var w=parseInt(x,2).toString(16);
							document.getElementById('ansbin').value=x;
							document.getElementById('ansoct').value=y;
							document.getElementById('ansdeci').value=z;
							document.getElementById('anshexa').value=w;
							document.getElementById("invalidvalbas").innerHTML="";
						}
						else
						{
							document.getElementById("invalidvalbas").innerHTML="*invalid Enter Value";
						}
					}
			else if(a=="hexadecimal" && b=="decimal")
					{

						var c=document.getElementById("txt1").value;
						var d=document.getElementById("txt2").value;
						
						var pattern1=new RegExp("^[0-9A-Fa-f]+(\\.)?[0-9A-Fa-f]*$");
						var pattern2=new RegExp("^[0-9]+(\\.)?[0-9]*$");
						if(pattern1.test(c) && pattern2.test(d))
						{
							var x=(parseInt(c,16)+parseInt(d,10)).toString(2);
							var y=parseInt(x,2).toString(8);
							var z=parseInt(x,2).toString(10);
							var w=parseInt(x,2).toString(16);
							document.getElementById('ansbin').value=x;
							document.getElementById('ansoct').value=y;
							document.getElementById('ansdeci').value=z;
							document.getElementById('anshexa').value=w;
							document.getElementById("invalidvalbas").innerHTML="";
						}
						else
						{
							document.getElementById("invalidvalbas").innerHTML="*invalid Enter Value";
						}
					}
			else if(a=="hexadecimal" && b=="hexadecimal")
					{

						var c=document.getElementById("txt1").value;
						var d=document.getElementById("txt2").value;
						
						var pattern1=new RegExp("^[0-9A-Fa-f]+(\\.)?[0-9A-Fa-f]*$");
						var pattern2=new RegExp("^[0-9A-Fa-f]+(\\.)?[0-9A-Fa-f]*$");
						if(pattern1.test(c) && pattern2.test(d))
						{
							var x=(parseInt(c,16)+parseInt(d,16)).toString(2);
							var y=parseInt(x,2).toString(8);
							var z=parseInt(x,2).toString(10);
							var w=parseInt(x,2).toString(16);
							document.getElementById('ansbin').value=x;
							document.getElementById('ansoct').value=y;
							document.getElementById('ansdeci').value=z;
							document.getElementById('anshexa').value=w;
							document.getElementById("invalidvalbas").innerHTML="";
						}
						else
						{
							document.getElementById("invalidvalbas").innerHTML="*invalid Enter Value";
						}
					}
			else
			{
				document.getElementById("invalidvalbas").innerHTML="* Enter Value";
			}
		}
	function checksub()
		{
			var a=document.getElementById('drpdwn1').value;
			var b=document.getElementById('drpdwn2').value;
			if(a=="select base" || b=="select base")
			{
				document.getElementById("invalidvalbas").innerHTML="*Please select base";
			}
			else if(a=="binary" && b=="binary")
					{
						var c=document.getElementById("txt1").value;
						var d=document.getElementById("txt2").value;
						
						var pattern=new RegExp("^[01]+(\\.)?[01]*$");
						if(pattern.test(c) && pattern.test(d))
						{
							var x=(parseInt(c,2)-parseInt(d,2)).toString(2);
							var y=parseInt(x,2).toString(8);
							var z=parseInt(x,2).toString(10);
							var w=parseInt(x,2).toString(16);
							document.getElementById('ansbin').value=x;
							document.getElementById('ansoct').value=y;
							document.getElementById('ansdeci').value=z;
							document.getElementById('anshexa').value=w;
							document.getElementById("invalidvalbas").innerHTML="";

						}
						else
						{
							document.getElementById("invalidvalbas").innerHTML="*invalid Enter Value";
						}
					}
			else if(a=="binary" && b=="octal")
					{
						var c=document.getElementById("txt1").value;
						var d=document.getElementById("txt2").value;
						
						var pattern1=new RegExp("^[01]+(\\.)?[01]*$");
						var pattern2=new RegExp("^[0-7]+(\\.)?[0-7]*$");
						if(pattern1.test(c) && pattern2.test(d))
						{
							var x=(parseInt(c,2)-parseInt(d,8)).toString(2);
							var y=parseInt(x,2).toString(8);
							var z=parseInt(x,2).toString(10);
							var w=parseInt(x,2).toString(16);
							document.getElementById('ansbin').value=x;
							document.getElementById('ansoct').value=y;
							document.getElementById('ansdeci').value=z;
							document.getElementById('anshexa').value=w;
							document.getElementById("invalidvalbas").innerHTML="";

						}
						else
						{
							document.getElementById("invalidvalbas").innerHTML="*invalid Enter Value";
						}
					}
			else if(a=="binary" && b=="decimal")
					{
						var c=document.getElementById("txt1").value;
						var d=document.getElementById("txt2").value;
						
						var pattern1=new RegExp("^[01]+(\\.)?[01]*$");
						var pattern2=new RegExp("^[0-9]+(\\.)?[0-9]*$");
						if(pattern1.test(c) && pattern2.test(d))
						{
							var x=(parseInt(c,2)-parseInt(d,10)).toString(2);
							var y=parseInt(x,2).toString(8);
							var z=parseInt(x,2).toString(10);
							var w=parseInt(x,2).toString(16);
							document.getElementById('ansbin').value=x;
							document.getElementById('ansoct').value=y;
							document.getElementById('ansdeci').value=z;
							document.getElementById('anshexa').value=w;
							document.getElementById("invalidvalbas").innerHTML="";

						}
						else
						{
							document.getElementById("invalidvalbas").innerHTML="*invalid Enter Value";
						}
					}
			else if(a=="binary" && b=="hexadecimal")
					{

						var c=document.getElementById("txt1").value;
						var d=document.getElementById("txt2").value;
						
						var pattern1=new RegExp("^[01]+(\\.)?[01]*$");
						var pattern2=new RegExp("^[0-9A-Fa-f]+(\\.)?[0-9A-Fa-f]*$");
						if(pattern1.test(c) && pattern2.test(d))
						{
							var x=(parseInt(c,2)-parseInt(d,16)).toString(2);
							var y=parseInt(x,2).toString(8);
							var z=parseInt(x,2).toString(10);
							var w=parseInt(x,2).toString(16);
							document.getElementById('ansbin').value=x;
							document.getElementById('ansoct').value=y;
							document.getElementById('ansdeci').value=z;
							document.getElementById('anshexa').value=w;
							document.getElementById("invalidvalbas").innerHTML="";
						}
						else
						{
							document.getElementById("invalidvalbas").innerHTML="*invalid Enter Value";
						}
					}
			else if(a=="octal" && b=="binary")
					{

						var c=document.getElementById("txt1").value;
						var d=document.getElementById("txt2").value;
						
						var pattern2=new RegExp("^[01]+(\\.)?[01]*$");
						var pattern1=new RegExp("^[0-7]+(\\.)?[0-7]*$");
						if(pattern1.test(c) && pattern2.test(d))
						{
							var x=(parseInt(c,8)-parseInt(d,2)).toString(2);
							var y=parseInt(x,2).toString(8);
							var z=parseInt(x,2).toString(10);
							var w=parseInt(x,2).toString(16);
							document.getElementById('ansbin').value=x;
							document.getElementById('ansoct').value=y;
							document.getElementById('ansdeci').value=z;
							document.getElementById('anshexa').value=w;
							document.getElementById("invalidvalbas").innerHTML="";
						}
						else
						{
							document.getElementById("invalidvalbas").innerHTML="*invalid Enter Value";
						}
					}
			else if(a=="octal" && b=="octal")
					{

						var c=document.getElementById("txt1").value;
						var d=document.getElementById("txt2").value;
						
						var pattern1=new RegExp("^[0-7]+(\\.)?[0-7]*$");
						var pattern2=new RegExp("^[0-7]+(\\.)?[0-7]*$");
						if(pattern1.test(c) && pattern2.test(d))
						{
							var x=(parseInt(c,8)-parseInt(d,8)).toString(2);
							var y=parseInt(x,2).toString(8);
							var z=parseInt(x,2).toString(10);
							var w=parseInt(x,2).toString(16);
							document.getElementById('ansbin').value=x;
							document.getElementById('ansoct').value=y;
							document.getElementById('ansdeci').value=z;
							document.getElementById('anshexa').value=w;
							document.getElementById("invalidvalbas").innerHTML="";
						}
						else
						{
							document.getElementById("invalidvalbas").innerHTML="*invalid Enter Value";
						}
					}
			else if(a=="octal" && b=="decimal")
					{

						var c=document.getElementById("txt1").value;
						var d=document.getElementById("txt2").value;
						
						var pattern1=new RegExp("^[0-7]+(\\.)?[0-7]*$");
						var pattern2=new RegExp("^[0-9]+(\\.)?[0-9]*$");
						if(pattern1.test(c) && pattern2.test(d))
						{
							var x=(parseInt(c,8)-parseInt(d,10)).toString(2);
							var y=parseInt(x,2).toString(8);
							var z=parseInt(x,2).toString(10);
							var w=parseInt(x,2).toString(16);
							document.getElementById('ansbin').value=x;
							document.getElementById('ansoct').value=y;
							document.getElementById('ansdeci').value=z;
							document.getElementById('anshexa').value=w;
							document.getElementById("invalidvalbas").innerHTML="";
						}
						else
						{
							document.getElementById("invalidvalbas").innerHTML="*invalid Enter Value";
						}
					}
			else if(a=="octal" && b=="hexadecimal")
					{

						var c=document.getElementById("txt1").value;
						var d=document.getElementById("txt2").value;
						
						var pattern1=new RegExp("^[0-7]+(\\.)?[0-7]*$");
						var pattern2=new RegExp("^[0-9A-Fa-f]+(\\.)?[0-9A-Fa-f]*$");
						if(pattern1.test(c) && pattern2.test(d))
						{
							var x=(parseInt(c,8)-parseInt(d,16)).toString(2);
							var y=parseInt(x,2).toString(8);
							var z=parseInt(x,2).toString(10);
							var w=parseInt(x,2).toString(16);
							document.getElementById('ansbin').value=x;
							document.getElementById('ansoct').value=y;
							document.getElementById('ansdeci').value=z;
							document.getElementById('anshexa').value=w;
							document.getElementById("invalidvalbas").innerHTML="";
						}
						else
						{
							document.getElementById("invalidvalbas").innerHTML="*invalid Enter Value";
						}
					}
			else if(a=="decimal" && b=="binary")
					{

						var c=document.getElementById("txt1").value;
						var d=document.getElementById("txt2").value;
						
						var pattern2=new RegExp("^[01]+(\\.)?[01]*$");
						var pattern1=new RegExp("^[0-9]+(\\.)?[0-9]*$");
						if(pattern1.test(c) && pattern2.test(d))
						{
							var x=(parseInt(c,10)-parseInt(d,2)).toString(2);
							var y=parseInt(x,2).toString(8);
							var z=parseInt(x,2).toString(10);
							var w=parseInt(x,2).toString(16);
							document.getElementById('ansbin').value=x;
							document.getElementById('ansoct').value=y;
							document.getElementById('ansdeci').value=z;
							document.getElementById('anshexa').value=w;
							document.getElementById("invalidvalbas").innerHTML="";
						}
						else
						{
							document.getElementById("invalidvalbas").innerHTML="*invalid Enter Value";
						}
					}
			else if(a=="decimal" && b=="octal")
					{

						var c=document.getElementById("txt1").value;
						var d=document.getElementById("txt2").value;
						
						var pattern2=new RegExp("^[0-7]+(\\.)?[0-7]*$");
						var pattern1=new RegExp("^[0-9]+(\\.)?[0-9]*$");
						if(pattern1.test(c) && pattern2.test(d))
						{
							var x=(parseInt(c,10)-parseInt(d,8)).toString(2);
							var y=parseInt(x,2).toString(8);
							var z=parseInt(x,2).toString(10);
							var w=parseInt(x,2).toString(16);
							document.getElementById('ansbin').value=x;
							document.getElementById('ansoct').value=y;
							document.getElementById('ansdeci').value=z;
							document.getElementById('anshexa').value=w;
							document.getElementById("invalidvalbas").innerHTML="";
						}
						else
						{
							document.getElementById("invalidvalbas").innerHTML="*invalid Enter Value";
						}
					}
			else if(a=="decimal" && b=="decimal")
					{

						var c=document.getElementById("txt1").value;
						var d=document.getElementById("txt2").value;
						
						var pattern1=new RegExp("^[0-9]+(\\.)?[0-9]*$");
						var pattern2=new RegExp("^[0-9]+(\\.)?[0-9]*$");
						if(pattern1.test(c) && pattern2.test(d))
						{
							var x=(parseInt(c,10)-parseInt(d,10)).toString(2);
							var y=parseInt(x,2).toString(8);
							var z=parseInt(x,2).toString(10);
							var w=parseInt(x,2).toString(16);
							document.getElementById('ansbin').value=x;
							document.getElementById('ansoct').value=y;
							document.getElementById('ansdeci').value=z;
							document.getElementById('anshexa').value=w;
							document.getElementById("invalidvalbas").innerHTML="";
						}
						else
						{
							document.getElementById("invalidvalbas").innerHTML="*invalid Enter Value";
						}
					}
			else if(a=="decimal" && b=="hexadecimal")
					{

						var c=document.getElementById("txt1").value;
						var d=document.getElementById("txt2").value;
						
						var pattern2=new RegExp("^[0-9A-Fa-f]+(\\.)?[0-9A-Fa-f]*$");
						var pattern1=new RegExp("^[0-9]+(\\.)?[0-9]*$");
						if(pattern1.test(c) && pattern2.test(d))
						{
							var x=(parseInt(c,10)-parseInt(d,16)).toString(2);
							var y=parseInt(x,2).toString(8);
							var z=parseInt(x,2).toString(10);
							var w=parseInt(x,2).toString(16);
							document.getElementById('ansbin').value=x;
							document.getElementById('ansoct').value=y;
							document.getElementById('ansdeci').value=z;
							document.getElementById('anshexa').value=w;
							document.getElementById("invalidvalbas").innerHTML="";
						}
						else
						{
							document.getElementById("invalidvalbas").innerHTML="*invalid Enter Value";
						}
					}
			else if(a=="hexadecimal" && b=="binary")
					{

						var c=document.getElementById("txt1").value;
						var d=document.getElementById("txt2").value;
						
						var pattern1=new RegExp("^[0-9A-Fa-f]+(\\.)?[0-9A-Fa-f]*$");
						var pattern2=new RegExp("^[01]+(\\.)?[01]*$");
						if(pattern1.test(c) && pattern2.test(d))
						{
							var x=(parseInt(c,16)-parseInt(d,2)).toString(2);
							var y=parseInt(x,2).toString(8);
							var z=parseInt(x,2).toString(10);
							var w=parseInt(x,2).toString(16);
							document.getElementById('ansbin').value=x;
							document.getElementById('ansoct').value=y;
							document.getElementById('ansdeci').value=z;
							document.getElementById('anshexa').value=w;
							document.getElementById("invalidvalbas").innerHTML="";
						}
						else
						{
							document.getElementById("invalidvalbas").innerHTML="*invalid Enter Value";
						}
					}
			else if(a=="hexadecimal" && b=="octal")
					{

						var c=document.getElementById("txt1").value;
						var d=document.getElementById("txt2").value;
						
						var pattern1=new RegExp("^[0-9A-Fa-f]+(\\.)?[0-9A-Fa-f]*$");
						var pattern2=new RegExp("^[0-7]+(\\.)?[0-7]*$");

						if(pattern1.test(c) && pattern2.test(d))
						{
							var x=(parseInt(c,16)-parseInt(d,8)).toString(2);
							var y=parseInt(x,2).toString(8);
							var z=parseInt(x,2).toString(10);
							var w=parseInt(x,2).toString(16);
							document.getElementById('ansbin').value=x;
							document.getElementById('ansoct').value=y;
							document.getElementById('ansdeci').value=z;
							document.getElementById('anshexa').value=w;
							document.getElementById("invalidvalbas").innerHTML="";
						}
						else
						{
							document.getElementById("invalidvalbas").innerHTML="*invalid Enter Value";
						}
					}
			else if(a=="hexadecimal" && b=="decimal")
					{

						var c=document.getElementById("txt1").value;
						var d=document.getElementById("txt2").value;
						
						var pattern1=new RegExp("^[0-9A-Fa-f]+(\\.)?[0-9A-Fa-f]*$");
						var pattern2=new RegExp("^[0-9]+(\\.)?[0-9]*$");
						if(pattern1.test(c) && pattern2.test(d))
						{
							var x=(parseInt(c,16)-parseInt(d,10)).toString(2);
							var y=parseInt(x,2).toString(8);
							var z=parseInt(x,2).toString(10);
							var w=parseInt(x,2).toString(16);
							document.getElementById('ansbin').value=x;
							document.getElementById('ansoct').value=y;
							document.getElementById('ansdeci').value=z;
							document.getElementById('anshexa').value=w;
							document.getElementById("invalidvalbas").innerHTML="";
						}
						else
						{
							document.getElementById("invalidvalbas").innerHTML="*invalid Enter Value";
						}
					}
			else if(a=="hexadecimal" && b=="hexadecimal")
					{

						var c=document.getElementById("txt1").value;
						var d=document.getElementById("txt2").value;
						
						var pattern1=new RegExp("^[0-9A-Fa-f]+(\\.)?[0-9A-Fa-f]*$");
						var pattern2=new RegExp("^[0-9A-Fa-f]+(\\.)?[0-9A-Fa-f]*$");
						if(pattern1.test(c) && pattern2.test(d))
						{
							var x=(parseInt(c,16)-parseInt(d,16)).toString(2);
							var y=parseInt(x,2).toString(8);
							var z=parseInt(x,2).toString(10);
							var w=parseInt(x,2).toString(16);
							document.getElementById('ansbin').value=x;
							document.getElementById('ansoct').value=y;
							document.getElementById('ansdeci').value=z;
							document.getElementById('anshexa').value=w;
							document.getElementById("invalidvalbas").innerHTML="";
						}
						else
						{
							document.getElementById("invalidvalbas").innerHTML="*invalid Enter Value";
						}
					}
			else
			{
				document.getElementById("invalidvalbas").innerHTML="*Enter Value";
			}
		}
	function checkmul()
		{
				var a=document.getElementById('drpdwn1').value;
			var b=document.getElementById('drpdwn2').value;
			if(a=="select base" || b=="select base")
			{
				document.getElementById("invalidvalbas").innerHTML="*Please select base";
			}
			else if(a=="binary" && b=="binary")
					{
						var c=document.getElementById("txt1").value;
						var d=document.getElementById("txt2").value;
						
						var pattern=new RegExp("^[01]+(\\.)?[01]*$");
						if(pattern.test(c) && pattern.test(d))
						{
							var x=(parseInt(c,2)*parseInt(d,2)).toString(2);
							var y=parseInt(x,2).toString(8);
							var z=parseInt(x,2).toString(10);
							var w=parseInt(x,2).toString(16);
							document.getElementById('ansbin').value=x;
							document.getElementById('ansoct').value=y;
							document.getElementById('ansdeci').value=z;
							document.getElementById('anshexa').value=w;
							document.getElementById("invalidvalbas").innerHTML="";

						}
						else
						{
							document.getElementById("invalidvalbas").innerHTML="*invalid Enter Value";
						}
					}
			else if(a=="binary" && b=="octal")
					{
						var c=document.getElementById("txt1").value;
						var d=document.getElementById("txt2").value;
						
						var pattern1=new RegExp("^[01]+(\\.)?[01]*$");
						var pattern2=new RegExp("^[0-7]+(\\.)?[0-7]*$");
						if(pattern1.test(c) && pattern2.test(d))
						{
							var x=(parseInt(c,2)*parseInt(d,8)).toString(2);
							var y=parseInt(x,2).toString(8);
							var z=parseInt(x,2).toString(10);
							var w=parseInt(x,2).toString(16);
							document.getElementById('ansbin').value=x;
							document.getElementById('ansoct').value=y;
							document.getElementById('ansdeci').value=z;
							document.getElementById('anshexa').value=w;
							document.getElementById("invalidvalbas").innerHTML="";

						}
						else
						{
							document.getElementById("invalidvalbas").innerHTML="*invalid Enter Value";
						}
					}
			else if(a=="binary" && b=="decimal")
					{
						var c=document.getElementById("txt1").value;
						var d=document.getElementById("txt2").value;
						
						var pattern1=new RegExp("^[01]+(\\.)?[01]*$");
						var pattern2=new RegExp("^[0-9]+(\\.)?[0-9]*$");
						if(pattern1.test(c) && pattern2.test(d))
						{
							var x=(parseInt(c,2)*parseInt(d,10)).toString(2);
							var y=parseInt(x,2).toString(8);
							var z=parseInt(x,2).toString(10);
							var w=parseInt(x,2).toString(16);
							document.getElementById('ansbin').value=x;
							document.getElementById('ansoct').value=y;
							document.getElementById('ansdeci').value=z;
							document.getElementById('anshexa').value=w;
							document.getElementById("invalidvalbas").innerHTML="";

						}
						else
						{
							document.getElementById("invalidvalbas").innerHTML="*invalid Enter Value";
						}
					}
			else if(a=="binary" && b=="hexadecimal")
					{

						var c=document.getElementById("txt1").value;
						var d=document.getElementById("txt2").value;
						
						var pattern1=new RegExp("^[01]+(\\.)?[01]*$");
						var pattern2=new RegExp("^[0-9A-Fa-f]+(\\.)?[0-9A-Fa-f]*$");
						if(pattern1.test(c) && pattern2.test(d))
						{
							var x=(parseInt(c,2)*parseInt(d,16)).toString(2);
							var y=parseInt(x,2).toString(8);
							var z=parseInt(x,2).toString(10);
							var w=parseInt(x,2).toString(16);
							document.getElementById('ansbin').value=x;
							document.getElementById('ansoct').value=y;
							document.getElementById('ansdeci').value=z;
							document.getElementById('anshexa').value=w;
							document.getElementById("invalidvalbas").innerHTML="";
						}
						else
						{
							document.getElementById("invalidvalbas").innerHTML="*invalid Enter Value";
						}
					}
			else if(a=="octal" && b=="binary")
					{

						var c=document.getElementById("txt1").value;
						var d=document.getElementById("txt2").value;
						
						var pattern2=new RegExp("^[01]+(\\.)?[01]*$");
						var pattern1=new RegExp("^[0-7]+(\\.)?[0-7]*$");
						if(pattern1.test(c) && pattern2.test(d))
						{
							var x=(parseInt(c,8)*parseInt(d,2)).toString(2);
							var y=parseInt(x,2).toString(8);
							var z=parseInt(x,2).toString(10);
							var w=parseInt(x,2).toString(16);
							document.getElementById('ansbin').value=x;
							document.getElementById('ansoct').value=y;
							document.getElementById('ansdeci').value=z;
							document.getElementById('anshexa').value=w;
							document.getElementById("invalidvalbas").innerHTML="";
						}
						else
						{
							document.getElementById("invalidvalbas").innerHTML="*invalid Enter Value";
						}
					}
			else if(a=="octal" && b=="octal")
					{

						var c=document.getElementById("txt1").value;
						var d=document.getElementById("txt2").value;
						
						var pattern1=new RegExp("^[0-7]+(\\.)?[0-7]*$");
						var pattern2=new RegExp("^[0-7]+(\\.)?[0-7]*$");
						if(pattern1.test(c) && pattern2.test(d))
						{
							var x=(parseInt(c,8)*parseInt(d,8)).toString(2);
							var y=parseInt(x,2).toString(8);
							var z=parseInt(x,2).toString(10);
							var w=parseInt(x,2).toString(16);
							document.getElementById('ansbin').value=x;
							document.getElementById('ansoct').value=y;
							document.getElementById('ansdeci').value=z;
							document.getElementById('anshexa').value=w;
							document.getElementById("invalidvalbas").innerHTML="";
						}
						else
						{
							document.getElementById("invalidvalbas").innerHTML="*invalid Enter Value";
						}
					}
			else if(a=="octal" && b=="decimal")
					{

						var c=document.getElementById("txt1").value;
						var d=document.getElementById("txt2").value;
						
						var pattern1=new RegExp("^[0-7]+(\\.)?[0-7]*$");
						var pattern2=new RegExp("^[0-9]+(\\.)?[0-9]*$");
						if(pattern1.test(c) && pattern2.test(d))
						{
							var x=(parseInt(c,8)*parseInt(d,10)).toString(2);
							var y=parseInt(x,2).toString(8);
							var z=parseInt(x,2).toString(10);
							var w=parseInt(x,2).toString(16);
							document.getElementById('ansbin').value=x;
							document.getElementById('ansoct').value=y;
							document.getElementById('ansdeci').value=z;
							document.getElementById('anshexa').value=w;
							document.getElementById("invalidvalbas").innerHTML="";
						}
						else
						{
							document.getElementById("invalidvalbas").innerHTML="*invalid Enter Value";
						}
					}
			else if(a=="octal" && b=="hexadecimal")
					{

						var c=document.getElementById("txt1").value;
						var d=document.getElementById("txt2").value;
						
						var pattern1=new RegExp("^[0-7]+(\\.)?[0-7]*$");
						var pattern2=new RegExp("^[0-9A-Fa-f]+(\\.)?[0-9A-Fa-f]*$");
						if(pattern1.test(c) && pattern2.test(d))
						{
							var x=(parseInt(c,8)*parseInt(d,16)).toString(2);
							var y=parseInt(x,2).toString(8);
							var z=parseInt(x,2).toString(10);
							var w=parseInt(x,2).toString(16);
							document.getElementById('ansbin').value=x;
							document.getElementById('ansoct').value=y;
							document.getElementById('ansdeci').value=z;
							document.getElementById('anshexa').value=w;
							document.getElementById("invalidvalbas").innerHTML="";
						}
						else
						{
							document.getElementById("invalidvalbas").innerHTML="*invalid Enter Value";
						}
					}
			else if(a=="decimal" && b=="binary")
					{

						var c=document.getElementById("txt1").value;
						var d=document.getElementById("txt2").value;
						
						var pattern2=new RegExp("^[01]+(\\.)?[01]*$");
						var pattern1=new RegExp("^[0-9]+(\\.)?[0-9]*$");
						if(pattern1.test(c) && pattern2.test(d))
						{
							var x=(parseInt(c,10)*parseInt(d,2)).toString(2);
							var y=parseInt(x,2).toString(8);
							var z=parseInt(x,2).toString(10);
							var w=parseInt(x,2).toString(16);
							document.getElementById('ansbin').value=x;
							document.getElementById('ansoct').value=y;
							document.getElementById('ansdeci').value=z;
							document.getElementById('anshexa').value=w;
							document.getElementById("invalidvalbas").innerHTML="";
						}
						else
						{
							document.getElementById("invalidvalbas").innerHTML="*invalid Enter Value";
						}
					}
			else if(a=="decimal" && b=="octal")
					{

						var c=document.getElementById("txt1").value;
						var d=document.getElementById("txt2").value;
						
						var pattern2=new RegExp("^[0-7]+(\\.)?[0-7]*$");
						var pattern1=new RegExp("^[0-9]+(\\.)?[0-9]*$");
						if(pattern1.test(c) && pattern2.test(d))
						{
							var x=(parseInt(c,10)*parseInt(d,8)).toString(2);
							var y=parseInt(x,2).toString(8);
							var z=parseInt(x,2).toString(10);
							var w=parseInt(x,2).toString(16);
							document.getElementById('ansbin').value=x;
							document.getElementById('ansoct').value=y;
							document.getElementById('ansdeci').value=z;
							document.getElementById('anshexa').value=w;
							document.getElementById("invalidvalbas").innerHTML="";
						}
						else
						{
							document.getElementById("invalidvalbas").innerHTML="*invalid Enter Value";
						}
					}
			else if(a=="decimal" && b=="decimal")
					{

						var c=document.getElementById("txt1").value;
						var d=document.getElementById("txt2").value;
						
						var pattern1=new RegExp("^[0-9]+(\\.)?[0-9]*$");
						var pattern2=new RegExp("^[0-9]+(\\.)?[0-9]*$");
						if(pattern1.test(c) && pattern2.test(d))
						{
							var x=(parseInt(c,10)*parseInt(d,10)).toString(2);
							var y=parseInt(x,2).toString(8);
							var z=parseInt(x,2).toString(10);
							var w=parseInt(x,2).toString(16);
							document.getElementById('ansbin').value=x;
							document.getElementById('ansoct').value=y;
							document.getElementById('ansdeci').value=z;
							document.getElementById('anshexa').value=w;
							document.getElementById("invalidvalbas").innerHTML="";
						}
						else
						{
							document.getElementById("invalidvalbas").innerHTML="*invalid Enter Value";
						}
					}
			else if(a=="decimal" && b=="hexadecimal")
					{

						var c=document.getElementById("txt1").value;
						var d=document.getElementById("txt2").value;
						
						var pattern2=new RegExp("^[0-9A-Fa-f]+(\\.)?[0-9A-Fa-f]*$");
						var pattern1=new RegExp("^[0-9]+(\\.)?[0-9]*$");
						if(pattern1.test(c) && pattern2.test(d))
						{
							var x=(parseInt(c,10)*parseInt(d,16)).toString(2);
							var y=parseInt(x,2).toString(8);
							var z=parseInt(x,2).toString(10);
							var w=parseInt(x,2).toString(16);
							document.getElementById('ansbin').value=x;
							document.getElementById('ansoct').value=y;
							document.getElementById('ansdeci').value=z;
							document.getElementById('anshexa').value=w;
							document.getElementById("invalidvalbas").innerHTML="";
						}
						else
						{
							document.getElementById("invalidvalbas").innerHTML="*invalid Enter Value";
						}
					}
			else if(a=="hexadecimal" && b=="binary")
					{

						var c=document.getElementById("txt1").value;
						var d=document.getElementById("txt2").value;
						
						var pattern1=new RegExp("^[0-9A-Fa-f]+(\\.)?[0-9A-Fa-f]*$");
						var pattern2=new RegExp("^[01]+(\\.)?[01]*$");
						if(pattern1.test(c) && pattern2.test(d))
						{
							var x=(parseInt(c,16)*parseInt(d,2)).toString(2);
							var y=parseInt(x,2).toString(8);
							var z=parseInt(x,2).toString(10);
							var w=parseInt(x,2).toString(16);
							document.getElementById('ansbin').value=x;
							document.getElementById('ansoct').value=y;
							document.getElementById('ansdeci').value=z;
							document.getElementById('anshexa').value=w;
							document.getElementById("invalidvalbas").innerHTML="";
						}
						else
						{
							document.getElementById("invalidvalbas").innerHTML="*invalid Enter Value";
						}
					}
			else if(a=="hexadecimal" && b=="octal")
					{

						var c=document.getElementById("txt1").value;
						var d=document.getElementById("txt2").value;
						
						var pattern1=new RegExp("^[0-9A-Fa-f]+(\\.)?[0-9A-Fa-f]*$");
						var pattern2=new RegExp("^[0-7]+(\\.)?[0-7]*$");

						if(pattern1.test(c) && pattern2.test(d))
						{
							var x=(parseInt(c,16)*parseInt(d,8)).toString(2);
							var y=parseInt(x,2).toString(8);
							var z=parseInt(x,2).toString(10);
							var w=parseInt(x,2).toString(16);
							document.getElementById('ansbin').value=x;
							document.getElementById('ansoct').value=y;
							document.getElementById('ansdeci').value=z;
							document.getElementById('anshexa').value=w;
							document.getElementById("invalidvalbas").innerHTML="";
						}
						else
						{
							document.getElementById("invalidvalbas").innerHTML="*invalid Enter Value";;
						}
					}
			else if(a=="hexadecimal" && b=="decimal")
					{

						var c=document.getElementById("txt1").value;
						var d=document.getElementById("txt2").value;
						
						var pattern1=new RegExp("^[0-9A-Fa-f]+(\\.)?[0-9A-Fa-f]*$");
						var pattern2=new RegExp("^[0-9]+(\\.)?[0-9]*$");
						if(pattern1.test(c) && pattern2.test(d))
						{
							var x=(parseInt(c,16)*parseInt(d,10)).toString(2);
							var y=parseInt(x,2).toString(8);
							var z=parseInt(x,2).toString(10);
							var w=parseInt(x,2).toString(16);
							document.getElementById('ansbin').value=x;
							document.getElementById('ansoct').value=y;
							document.getElementById('ansdeci').value=z;
							document.getElementById('anshexa').value=w;
							document.getElementById("invalidvalbas").innerHTML="";
						}
						else
						{
							document.getElementById("invalidvalbas").innerHTML="*invalid Enter Value";
						}
					}
			else if(a=="hexadecimal" && b=="hexadecimal")
					{

						var c=document.getElementById("txt1").value;
						var d=document.getElementById("txt2").value;
						
						var pattern1=new RegExp("^[0-9A-Fa-f]+(\\.)?[0-9A-Fa-f]*$");
						var pattern2=new RegExp("^[0-9A-Fa-f]+(\\.)?[0-9A-Fa-f]*$");
						if(pattern1.test(c) && pattern2.test(d))
						{
							var x=(parseInt(c,16)*parseInt(d,16)).toString(2);
							var y=parseInt(x,2).toString(8);
							var z=parseInt(x,2).toString(10);
							var w=parseInt(x,2).toString(16);
							document.getElementById('ansbin').value=x;
							document.getElementById('ansoct').value=y;
							document.getElementById('ansdeci').value=z;
							document.getElementById('anshexa').value=w;
							document.getElementById("invalidvalbas").innerHTML="";
						}
						else
						{
							document.getElementById("invalidvalbas").innerHTML="*invalid Enter Value";
						}
					}
			else
			{
				document.getElementById("invalidvalbas").innerHTML="*Enter Value";
			}
		}
		function checkdiv()
		{
			var a=document.getElementById('drpdwn1').value;
			var b=document.getElementById('drpdwn2').value;
			if(a=="select base" || b=="select base")
			{
				document.getElementById("invalidvalbas").innerHTML="*Please select base";
			}
			else if(a=="binary" && b=="binary")
					{
						var c=document.getElementById("txt1").value;
						var d=document.getElementById("txt2").value;
						
						var pattern=new RegExp("^[01]+(\\.)?[01]*$");
						if(pattern.test(c) && pattern.test(d))
						{
							var x=(parseInt(c,2)/parseInt(d,2)).toString(2);
							var y=parseInt(x,2).toString(8);
							var z=parseInt(x,2).toString(10);
							var w=parseInt(x,2).toString(16);
							document.getElementById('ansbin').value=x;
							document.getElementById('ansoct').value=y;
							document.getElementById('ansdeci').value=z;
							document.getElementById('anshexa').value=w;
							document.getElementById("invalidvalbas").innerHTML="";

						}
						else
						{
							document.getElementById("invalidvalbas").innerHTML="*invalid Enter Value";
						}
					}
			else if(a=="binary" && b=="octal")
					{
						var c=document.getElementById("txt1").value;
						var d=document.getElementById("txt2").value;
						
						var pattern1=new RegExp("^[01]+(\\.)?[01]*$");
						var pattern2=new RegExp("^[0-7]+(\\.)?[0-7]*$");
						if(pattern1.test(c) && pattern2.test(d))
						{
							var x=(parseInt(c,2)/parseInt(d,8)).toString(2);
							var y=parseInt(x,2).toString(8);
							var z=parseInt(x,2).toString(10);
							var w=parseInt(x,2).toString(16);
							document.getElementById('ansbin').value=x;
							document.getElementById('ansoct').value=y;
							document.getElementById('ansdeci').value=z;
							document.getElementById('anshexa').value=w;
							document.getElementById("invalidvalbas").innerHTML="";

						}
						else
						{
							document.getElementById("invalidvalbas").innerHTML="*invalid Enter Value";
						}
					}
			else if(a=="binary" && b=="decimal")
					{
						var c=document.getElementById("txt1").value;
						var d=document.getElementById("txt2").value;
						
						var pattern1=new RegExp("^[01]+(\\.)?[01]*$");
						var pattern2=new RegExp("^[0-9]+(\\.)?[0-9]*$");
						if(pattern1.test(c) && pattern2.test(d))
						{
							var x=(parseInt(c,2)/parseInt(d,10)).toString(2);
							var y=parseInt(x,2).toString(8);
							var z=parseInt(x,2).toString(10);
							var w=parseInt(x,2).toString(16);
							document.getElementById('ansbin').value=x;
							document.getElementById('ansoct').value=y;
							document.getElementById('ansdeci').value=z;
							document.getElementById('anshexa').value=w;
							document.getElementById("invalidvalbas").innerHTML="";

						}
						else
						{
							document.getElementById("invalidvalbas").innerHTML="*invalid Enter Value";
						}
					}
			else if(a=="binary" && b=="hexadecimal")
					{

						var c=document.getElementById("txt1").value;
						var d=document.getElementById("txt2").value;
						
						var pattern1=new RegExp("^[01]+(\\.)?[01]*$");
						var pattern2=new RegExp("^[0-9A-Fa-f]+(\\.)?[0-9A-Fa-f]*$");
						if(pattern1.test(c) && pattern2.test(d))
						{
							var x=(parseInt(c,2)/parseInt(d,16)).toString(2);
							var y=parseInt(x,2).toString(8);
							var z=parseInt(x,2).toString(10);
							var w=parseInt(x,2).toString(16);
							document.getElementById('ansbin').value=x;
							document.getElementById('ansoct').value=y;
							document.getElementById('ansdeci').value=z;
							document.getElementById('anshexa').value=w;
							document.getElementById("invalidvalbas").innerHTML="";
						}
						else
						{
							document.getElementById("invalidvalbas").innerHTML="*invalid Enter Value";
						}
					}
			else if(a=="octal" && b=="binary")
					{

						var c=document.getElementById("txt1").value;
						var d=document.getElementById("txt2").value;
						
						var pattern2=new RegExp("^[01]+(\\.)?[01]*$");
						var pattern1=new RegExp("^[0-7]+(\\.)?[0-7]*$");
						if(pattern1.test(c) && pattern2.test(d))
						{
							var x=(parseInt(c,8)/parseInt(d,2)).toString(2);
							var y=parseInt(x,2).toString(8);
							var z=parseInt(x,2).toString(10);
							var w=parseInt(x,2).toString(16);
							document.getElementById('ansbin').value=x;
							document.getElementById('ansoct').value=y;
							document.getElementById('ansdeci').value=z;
							document.getElementById('anshexa').value=w;
							document.getElementById("invalidvalbas").innerHTML="";
						}
						else
						{
							document.getElementById("invalidvalbas").innerHTML="*invalid Enter Value";
						}
					}
			else if(a=="octal" && b=="octal")
					{

						var c=document.getElementById("txt1").value;
						var d=document.getElementById("txt2").value;
						
						var pattern1=new RegExp("^[0-7]+(\\.)?[0-7]*$");
						var pattern2=new RegExp("^[0-7]+(\\.)?[0-7]*$");
						if(pattern1.test(c) && pattern2.test(d))
						{
							var x=(parseInt(c,8)/parseInt(d,8)).toString(2);
							var y=parseInt(x,2).toString(8);
							var z=parseInt(x,2).toString(10);
							var w=parseInt(x,2).toString(16);
							document.getElementById('ansbin').value=x;
							document.getElementById('ansoct').value=y;
							document.getElementById('ansdeci').value=z;
							document.getElementById('anshexa').value=w;
							document.getElementById("invalidvalbas").innerHTML="";
						}
						else
						{
							document.getElementById("invalidvalbas").innerHTML="*invalid Enter Value";
						}
					}
			else if(a=="octal" && b=="decimal")
					{

						var c=document.getElementById("txt1").value;
						var d=document.getElementById("txt2").value;
						
						var pattern1=new RegExp("^[0-7]+(\\.)?[0-7]*$");
						var pattern2=new RegExp("^[0-9]+(\\.)?[0-9]*$");
						if(pattern1.test(c) && pattern2.test(d))
						{
							var x=(parseInt(c,8)/parseInt(d,10)).toString(2);
							var y=parseInt(x,2).toString(8);
							var z=parseInt(x,2).toString(10);
							var w=parseInt(x,2).toString(16);
							document.getElementById('ansbin').value=x;
							document.getElementById('ansoct').value=y;
							document.getElementById('ansdeci').value=z;
							document.getElementById('anshexa').value=w;
							document.getElementById("invalidvalbas").innerHTML="";
						}
						else
						{
							document.getElementById("invalidvalbas").innerHTML="*invalid Enter Value";
						}
					}
			else if(a=="octal" && b=="hexadecimal")
					{

						var c=document.getElementById("txt1").value;
						var d=document.getElementById("txt2").value;
						
						var pattern1=new RegExp("^[0-7]+(\\.)?[0-7]*$");
						var pattern2=new RegExp("^[0-9A-Fa-f]+(\\.)?[0-9A-Fa-f]*$");
						if(pattern1.test(c) && pattern2.test(d))
						{
							var x=(parseInt(c,8)/parseInt(d,16)).toString(2);
							var y=parseInt(x,2).toString(8);
							var z=parseInt(x,2).toString(10);
							var w=parseInt(x,2).toString(16);
							document.getElementById('ansbin').value=x;
							document.getElementById('ansoct').value=y;
							document.getElementById('ansdeci').value=z;
							document.getElementById('anshexa').value=w;
							document.getElementById("invalidvalbas").innerHTML="";
						}
						else
						{
							document.getElementById("invalidvalbas").innerHTML="*invalid Enter Value";
						}
					}
			else if(a=="decimal" && b=="binary")
					{

						var c=document.getElementById("txt1").value;
						var d=document.getElementById("txt2").value;
						
						var pattern2=new RegExp("^[01]+(\\.)?[01]*$");
						var pattern1=new RegExp("^[0-9]+(\\.)?[0-9]*$");
						if(pattern1.test(c) && pattern2.test(d))
						{
							var x=(parseInt(c,10)/parseInt(d,2)).toString(2);
							var y=parseInt(x,2).toString(8);
							var z=parseInt(x,2).toString(10);
							var w=parseInt(x,2).toString(16);
							document.getElementById('ansbin').value=x;
							document.getElementById('ansoct').value=y;
							document.getElementById('ansdeci').value=z;
							document.getElementById('anshexa').value=w;
							document.getElementById("invalidvalbas").innerHTML="";
						}
						else
						{
							document.getElementById("invalidvalbas").innerHTML="*invalid Enter Value";
						}
					}
			else if(a=="decimal" && b=="octal")
					{

						var c=document.getElementById("txt1").value;
						var d=document.getElementById("txt2").value;
						
						var pattern2=new RegExp("^[0-7]+(\\.)?[0-7]*$");
						var pattern1=new RegExp("^[0-9]+(\\.)?[0-9]*$");
						if(pattern1.test(c) && pattern2.test(d))
						{
							var x=(parseInt(c,10)/parseInt(d,8)).toString(2);
							var y=parseInt(x,2).toString(8);
							var z=parseInt(x,2).toString(10);
							var w=parseInt(x,2).toString(16);
							document.getElementById('ansbin').value=x;
							document.getElementById('ansoct').value=y;
							document.getElementById('ansdeci').value=z;
							document.getElementById('anshexa').value=w;
							document.getElementById("invalidvalbas").innerHTML="";
						}
						else
						{
							document.getElementById("invalidvalbas").innerHTML="*invalid Enter Value";
						}
					}
			else if(a=="decimal" && b=="decimal")
					{

						var c=document.getElementById("txt1").value;
						var d=document.getElementById("txt2").value;
						
						var pattern1=new RegExp("^[0-9]+(\\.)?[0-9]*$");
						var pattern2=new RegExp("^[0-9]+(\\.)?[0-9]*$");
						if(pattern1.test(c) && pattern2.test(d))
						{
							var x=(parseInt(c,10)/parseInt(d,10)).toString(2);
							var y=parseInt(x,2).toString(8);
							var z=parseInt(x,2).toString(10);
							var w=parseInt(x,2).toString(16);
							document.getElementById('ansbin').value=x;
							document.getElementById('ansoct').value=y;
							document.getElementById('ansdeci').value=z;
							document.getElementById('anshexa').value=w;
							document.getElementById("invalidvalbas").innerHTML="";
						}
						else
						{
							document.getElementById("invalidvalbas").innerHTML="*invalid Enter Value";
						}
					}
			else if(a=="decimal" && b=="hexadecimal")
					{

						var c=document.getElementById("txt1").value;
						var d=document.getElementById("txt2").value;
						
						var pattern2=new RegExp("^[0-9A-Fa-f]+(\\.)?[0-9A-Fa-f]*$");
						var pattern1=new RegExp("^[0-9]+(\\.)?[0-9]*$");
						if(pattern1.test(c) && pattern2.test(d))
						{
							var x=(parseInt(c,10)/parseInt(d,16)).toString(2);
							var y=parseInt(x,2).toString(8);
							var z=parseInt(x,2).toString(10);
							var w=parseInt(x,2).toString(16);
							document.getElementById('ansbin').value=x;
							document.getElementById('ansoct').value=y;
							document.getElementById('ansdeci').value=z;
							document.getElementById('anshexa').value=w;
							document.getElementById("invalidvalbas").innerHTML="";
						}
						else
						{
							document.getElementById("invalidvalbas").innerHTML="*invalid Enter Value";
						}
					}
			else if(a=="hexadecimal" && b=="binary")
					{

						var c=document.getElementById("txt1").value;
						var d=document.getElementById("txt2").value;
						
						var pattern1=new RegExp("^[0-9A-Fa-f]+(\\.)?[0-9A-Fa-f]*$");
						var pattern2=new RegExp("^[01]+(\\.)?[01]*$");
						if(pattern1.test(c) && pattern2.test(d))
						{
							var x=(parseInt(c,16)/parseInt(d,2)).toString(2);
							var y=parseInt(x,2).toString(8);
							var z=parseInt(x,2).toString(10);
							var w=parseInt(x,2).toString(16);
							document.getElementById('ansbin').value=x;
							document.getElementById('ansoct').value=y;
							document.getElementById('ansdeci').value=z;
							document.getElementById('anshexa').value=w;
							document.getElementById("invalidvalbas").innerHTML="";
						}
						else
						{
							document.getElementById("invalidvalbas").innerHTML="*invalid Enter Value";
						}
					}
			else if(a=="hexadecimal" && b=="octal")
					{

						var c=document.getElementById("txt1").value;
						var d=document.getElementById("txt2").value;
						
						var pattern1=new RegExp("^[0-9A-Fa-f]+(\\.)?[0-9A-Fa-f]*$");
						var pattern2=new RegExp("^[0-7]+(\\.)?[0-7]*$");

						if(pattern1.test(c) && pattern2.test(d))
						{
							var x=(parseInt(c,16)/parseInt(d,8)).toString(2);
							var y=parseInt(x,2).toString(8);
							var z=parseInt(x,2).toString(10);
							var w=parseInt(x,2).toString(16);
							document.getElementById('ansbin').value=x;
							document.getElementById('ansoct').value=y;
							document.getElementById('ansdeci').value=z;
							document.getElementById('anshexa').value=w;
							document.getElementById("invalidvalbas").innerHTML="";
						}
						else
						{
							document.getElementById("invalidvalbas").innerHTML="*invalid Enter Value";
						}
					}
			else if(a=="hexadecimal" && b=="decimal")
					{

						var c=document.getElementById("txt1").value;
						var d=document.getElementById("txt2").value;
						
						var pattern1=new RegExp("^[0-9A-Fa-f]+(\\.)?[0-9A-Fa-f]*$");
						var pattern2=new RegExp("^[0-9]+(\\.)?[0-9]*$");
						if(pattern1.test(c) && pattern2.test(d))
						{
							var x=(parseInt(c,16)/parseInt(d,10)).toString(2);
							var y=parseInt(x,2).toString(8);
							var z=parseInt(x,2).toString(10);
							var w=parseInt(x,2).toString(16);
							document.getElementById('ansbin').value=x;
							document.getElementById('ansoct').value=y;
							document.getElementById('ansdeci').value=z;
							document.getElementById('anshexa').value=w;
							document.getElementById("invalidvalbas").innerHTML="";
						}
						else
						{
							document.getElementById("invalidvalbas").innerHTML="*invalid Enter Value";
						}
					}
			else if(a=="hexadecimal" && b=="hexadecimal")
					{

						var c=document.getElementById("txt1").value;
						var d=document.getElementById("txt2").value;
						
						var pattern1=new RegExp("^[0-9A-Fa-f]+(\\.)?[0-9A-Fa-f]*$");
						var pattern2=new RegExp("^[0-9A-Fa-f]+(\\.)?[0-9A-Fa-f]*$");
						if(pattern1.test(c) && pattern2.test(d))
						{
							var x=(parseInt(c,16)/parseInt(d,16)).toString(2);
							var y=parseInt(x,2).toString(8);
							var z=parseInt(x,2).toString(10);
							var w=parseInt(x,2).toString(16);
							document.getElementById('ansbin').value=x;
							document.getElementById('ansoct').value=y;
							document.getElementById('ansdeci').value=z;
							document.getElementById('anshexa').value=w;
							document.getElementById("invalidvalbas").innerHTML="";
						}
						else
						{
							document.getElementById("invalidvalbas").innerHTML="*invalid Enter Value";
						}
					}
			else
			{
				document.getElementById("invalidvalbas").innerHTML="*Enter Value";
			}
		}
