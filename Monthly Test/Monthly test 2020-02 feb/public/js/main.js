//Global
var products=[];
var cartItems=[];
var cart_n=document.getElementById('cart_n');
//DIVS
var menDIV= document.getElementById("menDIV");
var girlDIV= document.getElementById("girlDIV");
var kidsDIV= document.getElementById("kidsDIV");
//information
var MEN=[
    {name:'Blazer', price:1000},
    {name:'watches', price:1200},
    {name:'Ethnic Wear', price:1500},
    {name:'Shoes', price:1},
    {name:'Formal Shoes', price:1},
    {name:'Sport Shoes', price:1},
];
var GIRL=[
    {name:'girl #1', price:10},
    {name:'girl #2', price:11},
    {name:'girl #3', price:12}];
var KIDS=[
    {name:'kids #1', price:11},
    {name:'kids #1', price:12},
    {name:'kids #1', price:15}
];
//HTML
function HTMLmenProduct(con){
    let URL = `/img/men/men${con}.jpg`;
    let btn = `btnMen${con}`;
    return `
    <div class="col-md-4">
    <div class="card-mb-4 shadow sm">
        <img src="${URL}" alt="Card image cap" style="height: 16rems;" class="card-img-top">
        <div class="card-body">
            <i class="fa fa-star" ></i>
            <i class="fa fa-star" ></i>
            <i class="fa fa-star" ></i>
            <i class="fa fa-star" ></i>
            <i class="fa fa-star" ></i>
            <p class="card-text">${MEN[con-1].name}</p>
            <p class="card-text">${MEN[con-1].price}.00</p>
            <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                    <button type="button" onclick="cart2('${MEN[con-1].name}','${MEN[con-1].price}','${URL}','${con}','${btn}')" class="btn btn-sm btn-outline-secondary">
                        <a style="color: inherit;" href="/cart">Buy</a>
                    </button>
                    <button id="${btn}" type="button" onclick="cart('${MEN[con-1].name}','${MEN[con-1].price}','${URL}','${con}','${btn}')" class="btn btn-sm btn-outline-secondary">
                            Add to cart
                    </button>
                </div>
                <small class="text-muted">Free Shipping</small>
            </div>
        </div>
    </div>
</div>
        `
}
function HTMLgirlProduct(con){
    let URL = `img/girls/girl${con}.jpg`;
    let btn = `btnGirl${con}`;
    return `<div class="col-md-4">
    <div class="card-mb-4 shadow sm">
        <img src="${URL}" alt="Card image cap" style="height: 16rems;" class="card-img-top">
        <div class="card-body">
            <i style="color: orange;" class="fa fa-star" ></i>
            <i style="color: orange;" class="fa fa-star" ></i>
            <i style="color: orange;" class="fa fa-star" ></i>
            <i style="color: orange;" class="fa fa-star" ></i>
            <i style="color: orange;" class="fa fa-star" ></i>
            <p class="card-text">${GIRL[con-1].name}</p>
            <p class="card-text">${GIRL[con-1].price}.00</p>
            <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                    <button type="button" onclick="cart2('${GIRL[con-1].name}','${GIRL[con-1].price}','${URL}','${con}','${btn}')" class="btn btn-sm btn-outline-secondary">
                        <a style="color: inherit;" href="/cart">Buy</a>
                    </button>
                    <button id="${btn}" type="button" onclick="cart('${GIRL[con-1].name}','${GIRL[con-1].price}','${URL}','${con}','${btn}')" class="btn btn-sm btn-outline-secondary">
                            Add to cart
                    </button>
                </div>
                <small class="text-muted">Free Shipping</small>
            </div>
        </div>
    </div>
</div>
        `
}
function HTMLkidsProduct(con){
    let URL = `img/kids/kid${con}.jpg`;
    let btn = `btnkids${con}`;
    return `<div class="col-md-4">
    <div class="card-mb-4 shadow sm">
        <img src="${URL}" alt="Card image cap" style="height: 16rems;" class="card-img-top">
        <div class="card-body">
            <i style="color: orange;" class="fa fa-star" ></i>
            <i style="color: orange;" class="fa fa-star" ></i>
            <i style="color: orange;" class="fa fa-star" ></i>
            <i style="color: orange;" class="fa fa-star" ></i>
            <i style="color: orange;" class="fa fa-star" ></i>
            <p class="card-text">${KIDS[con-1].name}</p>
            <p class="card-text">${KIDS[con-1].price}.00</p>
            <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                    <button type="button" onclick="cart2('${KIDS[con-1].name}','${KIDS[con-1].price}','${URL}','${con}','${btn}')" class="btn btn-sm btn-outline-secondary">
                        <a style="color: inherit;" href="/cart">Buy</a>
                    </button>
                    <button id="${btn}" type="button" onclick="cart('${KIDS[con-1].name}','${KIDS[con-1].price}','${URL}','${con}','${btn}')" class="btn btn-sm btn-outline-secondary">
                            Add to cart
                    </button>
                </div>
                <small class="text-muted">Free Shipping</small>
            </div>
        </div>
    </div>
</div>
        `
}
//Animation
function animation(){
    const toast=swal.mixin({
        toast:true,
        position:'top-end',
        showConfirmButton: false,
        timer:1000
    });
    toast({
        type:'success',
        title:'Added to shopping cart'
    });
}
//CART Functions
function cart(name,price,url,con,btncart){
    var item={
        name:name,
        price:price,
        url:url,
    }
    cartItems.push(item);
    let storage=JSON.parse(localStorage.getItem("cart"));
    if(storage==null){
        products.push(item);
        localStorage.setItem("cart",JSON.stringify(product));
    } else{
        products= JSON.parse(localStorage.getItem("cart"));
        products.push(item);
        localStorage.setItem("cart",JSON.stringify(products));
    }
    products = JSON.parse(localStorage.getItem("cart"));
    cart_n.innerHTML= `[${products.length}]`;
    document.getElementById(btncart).style.display="none";
    animation();
}
function cart2(name,price,url,con,btncart){
    var item={
        name:name,
        price:price,
        url:url
    }
    cartItems.push(item);
    let storage=JSON.parse(localStorage.getItem("cart"));
    if(storage==null){
        products.push(item);
        localStorage.setItem("cart",JSON.stringify(products));
    } else {
        products = JSON.parse(localStorage.getItem("cart"));
        products.push(item);
        localStorage.setItem("cart",JSON.stringify(products));
    }
    products=JSON.parse(localStorage.getItem("cart"));
    cart_n.innerHTML= `[${products.length}]`;
    document.getElementById(btncart).style.display="none";
}
//Render
//function render(){

//}
(()=>{
    for(let index= 1; index<=6; index++){
        menDIV.innerHTML+=`${HTMLmenProduct(index)}`;
    }
    for(let index= 1; index<=3; index++){
        girlDIV.innerHTML+=`${HTMLgirlProduct(index)}`;
        kidsDIV.innerHTML+=`${HTMLkidsProduct(index)}`;
    }
    if(localStorage.getItem("cart")==null){

    }else{
        products =JSON.parse(localStorage.getItem("cart"));
        cart_n.innerHTML=`[${products.length}]`
    }
})();
