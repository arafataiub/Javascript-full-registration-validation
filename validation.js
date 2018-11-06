function validation()
{
	var tag;
	var id = document.getElementById('id').value;
	var pass = document.getElementById('pass').value;
	var name = document.getElementById('name').value;
	var gender = document.getElementsByClassName('gender');
	var degree=document.getElementsByClassName('degree');
	//var gender = document.getElementById('gender').value;
	//var gender = ["document.getElementById('male').checked","document.getElementById('female').checked","document.getElementById("other").checked"];
	//var occu = document.getElementById('occupation').value;
	
	
	
	if(pass=="" || name=="" || id=="" || gender=="")
	{
		document.getElementById('div1').innerHTML= "Every field must be filled";
		tag=false;
	}
	else if(degree[0].checked || degree[1].checked || degree[2].checked ||degree[3].checked)
	{
		if(gender[0].checked || gender[1].checked || gender[2].checked)
		{
	        
	        tag=true;
		}

		else
		{
			tag=false;
			document.getElementById('div1').innerHTML="gender field must be filled!";
		}

	}
	else 
	{
		tag=false;
		document.getElementById('div1').innerHTML="Anyone of the degree must be filled";
	}
	return tag;
	
	
}



			