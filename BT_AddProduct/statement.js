var  header ='<table border="1"><tr><th>No</th><td>Name</td><td>Quantity</td><td>Price</td><td>Sub-total</td></tr>';
var data ='';
var footer='</table>';
var total=0;
var no=1;
function productAdd(){
    var path =document.frm_product;
    var name= path.txt_name.value;
    var quantity=path.txt_quantity.value;
    var price =path.txt_price.value;
    var sub_total=quantity*price;
    total +=sub_total;
    var  sub_data_one='<tr><th>'+no+'</th><td>'+name+'</td><td>'+quantity+'</td><td>'+price+'$</td><td>'+sub_total+'$</td></tr>';
    var sub_data_two ='<tr><th colspan="4">Total</th><td>'+total+'</td></tr>';
    data +=sub_data_one;
    document.getElementById('product_list').innerHTML=header+data+sub_data_two+footer;
    no++;
}