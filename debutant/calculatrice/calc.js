function insert(num){
    document.form.textview.value = document.form.textview.value+num;
}

function egal(){
    let exp = document.form.textview.value;
    if (exp){
        document.form.textview.value = eval(exp);
    }
}

function effacer(){
    document.form.textview.value = "";
}

function retour(){
    let exp = document.form.textview.value
    document.form.textview.value = exp.substring(0,exp.length-1);

}