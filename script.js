function clearScreen() {
    document.getElementById("result").value = "";
}
 
// This function display values
function display(value) {
   
    document.getElementById("result").value += value;
}
 
// This function evaluates the expression and returns result
function calculate() {
    var str = document.getElementById("result").value;
    // var str = document.getElementById("result").value;
    console.log(str);
    let num1 = parseInt(str.split('+')[0]);
    let num2 = parseInt(str.split('+')[1]);
    if(str.includes('+')) {
        document.getElementById("result").value = num1 + num2;
    }
    
    num1 = parseInt(str.split('-')[0]);
    num2 = parseInt(str.split('-')[1]);
    if(str.includes('-')) {                                    
        document.getElementById("result").value = num1 - num2;
    }
    
    num1 = parseInt(str.split('*')[0]);       
    num2 = parseInt(str.split('*')[1]);
    if(str.includes('*')) {
        document.getElementById("result").value = num1 * num2;
    }

    num1 = parseInt(str.split('/')[0]);
    num2 = parseInt(str.split('/')[1]);
    if(str.includes('/')) {
        document.getElementById('result').value = num1 / num2;
    }
}
