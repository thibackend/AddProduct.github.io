


function buy(){
    // this is return part
    var sum =""
    ,gbwater,gbfruit,bought,moneywater,moneyfruit,gb;
    // đây là phần nhận.
   var water = document.getElementById('water');
   var fruit = document.getElementById('fruit');
    valuewater= parseInt(water.options[water.selectedIndex].value);
    valuefruit= parseInt(fruit.options[fruit.selectedIndex].value);

    var money= parseInt(document.getElementById('money').value);


    if(document.getElementById('money').value ==""){
        alert(" You can't buy anything without money!")
    }
  
        if(valuewater !=0 && valuefruit !=0){
            switch(valuewater){
                case 1: gbwater="nước suối ";
                    moneywater = 15000;
                    break;
                case 2:
                    gbwater="Coca cola ";
                    moneywater=17000;
                    break;
                    
                case 3:
                    gbwater="7 Up ";
                    moneywater=17000;
                    break;
                case 4:
                    gbwater="Pessi";
                    moneywater=17000;
                    break;
                case 5:
                    gbwater="Cam Ep";
                    moneywater=17000;
                    break;
                case 6:
                    gbwater="Sting ";
                    moneywater=17000;
                    break;
                case 7:
                    gbwater=" Bo Huc";
                    moneywater=20000;
                    break;
            }
            
            switch(valuefruit){
                case 1: 
                    gbfruit = "Trái cây nhỏ" ;
                    moneyfruit =99000;
                    break;
                case 2: 
                    gbfruit ="trái cây lớn";
                    moneyfruit =129000;
                    break;
                case 3: 
                    gbfruit ="Bưởi";
                    moneyfruit =189000;
                    break;
                    
            } 
            if (money <15000){
                bought="the money is not enough to buy anything in here!!";
                sum= moneyfruit+moneywater;
            }
            sum= moneyfruit+moneywater;
            bought ="Please enjoy "+gbwater+" and "+gbfruit +"!!";
            gb = "The money left is "+(money-sum+"") +" $";
            if(money <sum ){
                bought="the money isn't enough!!";
                sum=moneyfruit+moneywater;
                gb= "You need more :" +(sum-money+"")+" $";
            }

           
            
           
           
        }
        else if(valuewater !=0 && valuefruit ==0){
            switch(valuewater){
                case 1: gbwater="nước suối ";
                    moneywater = 15000;
                    break;
                case 2:
                    gbwater="Coca cola ";
                    moneywater=17000;
                    break;
                    
                case 3:
                    gbwater="7 Up ";
                    moneywater=17000;
                    break;
                case 4:
                    gbwater="Pessi";
                    moneywater=17000;
                    break;
                case 5:
                    gbwater="Cam Ep";
                    moneywater=17000;
                    break;
                case 6:
                    gbwater="Sting ";
                    moneywater=17000;
                    break;
                case 7:
                    gbwater=" Bo Huc";
                    moneywater=20000;
                    break;
            }

            bought =gbwater;
            sum=moneywater;
            bought ="Please enjoy "+gbwater;
            gb = "The money left is "+(money-sum+"") +" $";
            if(money <sum ){
                bought="the money isn't enough!!";
                sum=moneywater;
                gb= "You need more :" +(sum-money+"")+" $";
            }
        }
        else if(valuewater==0 && valuefruit!=0){
            switch(valuefruit){
                case 1: 
                    gbfruit = "Trái cây nhỏ" ;
                    moneyfruit =99000;
                    break;
                case 2: 
                    gbfruit ="trái cây lớn";
                    moneyfruit =129000;
                    break;
                case 3: 
                    gbfruit ="Bưởi";
                    moneyfruit =189000;
                    break;
            
            }
            sum= moneyfruit;
            bought ="Please enjoy "+gbfruit;
            gb = "The money left is "+(money-sum+"") +" $";
            if(money <sum ){
                bought="the money isn't enough!!";
                sum=(moneyfruit +"")+"$";
                gb= "You need more :" +(sum-money+"")+" $";
            }

        }
        else if(valuefruit ==0 && valuewater ==0){

            sum="";
            bought="You haven't buy anything!";
            gb="";
        }
        
    document.getElementById('sum').value=sum;
    document.getElementById('bought').value=bought;
    document.getElementById('return').value= gb;
  
    }

















function cancel(){
    document.getElementById("fruit").value="0";
    document.getElementById("water").value="0";
    document.getElementById("sum").value="";
    document.getElementById("money").value="";
    document.getElementById("return").value="";
    document.getElementById('bought').value="";
    
}