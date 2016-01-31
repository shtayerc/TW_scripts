javascript:
var%20units=[0,0,0,0,1,10,0,0,0,0,0,0];
var coord="445|520%20448|521%20444|523%20445|523%20450|523%20457|523%20445|524%20446|524%20453|524%20455|524%20445|525%20446|525%20444|526%20446|526%20451|526%20447|527%20449|527%20443|528%20450|528%20455|528%20458|528%20461|528%20449|529%20454|529%20453|530%20455|530%20455|531%20447|532%20452|532%20451|533%20453|533%20455|533%20448|534%20450|534%20458|535%20460|535%20466|535%20453|536%20459|536%20449|537%20456|537%20460|537%20462|537%20463|537%20453|538%20459|538%20460|538%20461|538%20463|538%20464|538%20465|538%20449|539%20456|539%20457|539%20460|539%20453|540%20456|540%20472|540%20473|540%20457|541%20458|541%20466|541%20456|542%20459|542%20462|542%20465|542%20466|542%20468|542%20478|542%20458|543%20460|543%20463|543%20460|544%20461|544%20469|544%20459|545%20465|545%20466|545%20469|545%20455|546%20459|546%20463|546%20466|546%20475|546%20462|547%20456|548%20458|548%20461|548%20466|548%20472|548%20473|548%20475|548%20462|549%20475|549%20476|549%20468|550%20470|550%20469|551%20470|551%20475|551%20475|552%20477|552%20478|552%20464|553%20473|553%20475|553%20478|553%20470|554%20473|554%20476|554%20472|555%20473|555%20468|556%20474|557%20479|557%20";

var x;
var i=readCookie("ind");
if(i==null){

	
	i=0;
	
	
	}
	else{i=Number(i);}
x=document.getElementById('input').value=coord.substring(i,i+7);
x=document.getElementById('unit_input_spear').value=units[0];
x=document.getElementById('unit_input_sword').value=units[1];
x=document.getElementById('unit_input_axe').value=units[2];
x=document.getElementById('unit_input_archer').value=units[3];
x=document.getElementById('unit_input_spy').value=units[4];
x=document.getElementById('unit_input_light').value=units[5];
x=document.getElementById('unit_input_marcher').value=units[6];
x=document.getElementById('unit_input_heavy').value=units[7];
x=document.getElementById('unit_input_ram').value=units[8];
x=document.getElementById('unit_input_cat').value=units[9];
x=document.getElementById('unit_input_knight').value=units[10];
x=document.getElementById('unit_input_snob').value=units[11];










in('input',coord.substring(i,i+7));
in('unit_input_spear',units[0]);
in('unit_input_sword',units[1]);
in('unit_input_axe',units[2]);
in('unit_input_archer',units[3]);
in('unit_input_spy',units[4]);
in('unit_input_light',units[5]);
in('unit_input_marcher',units[6]);
in('unit_input_heavy',units[7]);
in('unit_input_ram',units[8]);
in('unit_input_cat',units[9]);
in('unit_input_knight',units[10]);
in('unit_input_snob',units[11]);
var%20neke=$('#place_target').find('input').val(coord.substring(i,i+7));
insertUnit(document.forms[0].spear,units[0]);
insertUnit(document.forms[0].sword,units[1]);
insertUnit(document.forms[0].axe,units[2]);
insertUnit(document.forms[0].archer,units[3]);
insertUnit(document.forms[0].spy,units[4]);
insertUnit(document.forms[0].light,units[5]);
insertUnit(document.forms[0].marcher,units[6]);
insertUnit(document.forms[0].heavy,units[7]);
insertUnit(document.forms[0].ram,units[8]);
insertUnit(document.forms[0].catapult,units[9]);
insertUnit(document.forms[0].knight,units[10]);
insertUnit(document.forms[0].snob,units[11]);
i=i+8;
if(i>coord.length){alert("To je zadnja vas");i=0;}
createCookie("ind",i,7);
document.getElementById("target_attack").click();
function createCookie(name,value,days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        var expires = "; expires="+date.toGMTString();
    }
    else var expires = "";
    document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
function in(id,value)
{
	var x=document.getElementById(id).value=value;
	}





