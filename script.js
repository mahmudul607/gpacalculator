const calculate =() => {
    let phy = document.querySelector("#phy").value;
    let eng = document.querySelector("#eng").value;
    let math = document.querySelector("#math").value;
    let oop = document.querySelector("#oop").value;
    let grades="";

    let totalgrades=parseFloat(phy)+parseFloat(eng)+parseFloat(math)+parseFloat(oop);


    let result=(totalgrades/400)*100;
    if(result<=100 && result>= 80 && phy>=40 && eng>=40 && math>=40 && oop>=40 ){
        grades='A+';
    }
    else if (result<=79 && result >=65 && phy>=40 && eng>=40 && math>=40 && oop>=40){
        grades='A';
    }
    else if(result<=64 && result>=50 && phy>=40 && eng>=40 && math>=40 && oop>=40){
        grades='B';
    }
    else if(result<=49 && result>=40 && phy>=40 && eng>=40 && math>=40 && oop>=40){
        grades='C';
    }
    else{
        grades='F';
    }


    if(phy== ""||eng== ""||math== ""||oop== ""){

        document.querySelector("#showdata").innerHTML= "Please Fillup All Fields";
    } 
    else{

        if(result >= 40 && phy>=40 && eng>=40 && math>=40 && oop>=40)
        {
            document.querySelector("#showdata").innerHTML= `Out of 400 your total is ${totalgrades} and parcentage result is ${result}%. <br> Your grade is ${grades}.You are Pass.`;
        }
        else{
            document.querySelector("#showdata").innerHTML=`Out of 400 your total is ${totalgrades} and result is ${result}%. <br>
            your grade is ${grades}. Yor are Fail`;
        }
        
    }
};