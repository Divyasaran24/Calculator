
let output = document.getElementById("output-value");

function display(num){
    output.value += num;
}

function equal(){
    try{
        output.value = eval(output.value);
    }
    catch(err){
        alert("Invalid Input");
    }
}

function Clear(){
    output.value = "";
}

function del(){
    output.value = output.value.slice(0,-1);
}