var newOrder =[]
function Pizza (pizzaFlavour,pizzaSize,pizzaCrust,pizzaToppings,pizzaNumber){
    this.pizzaFlavour=pizzaFlavour;
    this.pizzaSize=pizzaSize;
    this.pizzaCrust=pizzaCrust;
    this.pizzaToppings=pizzaToppings;
}
var pizzaPrices=[1200,1000,800]
Pizza.prototype.totalPrice= function(){
    return(this.pizzaCrust + this.pizzaSize + this.pizzaToppings)* this.pizzaNumber
};
Pizza.prototype.pizzaS=function(){
    if(this.pizzaSize==1200){
        return "large"
    }
    else if(this.pizzaSize==1000){
        return "medium"
    }
    else if(this.pizzaSize==800){
        return "small"
    }
}
Pizza.prototype.pizzaC=function(){
    if(this.pizzaCrust==150){
        return "thin"
    }
    else if(this.pizzaCrust==200){
        return "thick"
    }
    else if(this.pizzaCrust==250){
        return "stuffed"
    }
}
Pizza.prototype.pizzaT=function(){
    if(this.pizzaToppings==150){
        return "potato"
    }
    else if(this.pizzaToppings==170){
        return "mushrooms"
    }
    else if(this.pizzaToppings==200){
        return "Black olives"
    }
}

$("#checkout").click(function (event){
    var PizzaFlavour = $("#Flavour").val();
    
    var PizzaSize = parseInt( $("#Size").val());
    
    var PizzaCrust = parseInt( $("#Crust").val());
    
    var PizzaToppings =parseInt( $("#Topping").val());
    
    var PizzaNumber =parseInt( $("#number").val());

    newPizzae= new Pizza(pizzaFlavour,pizzaSize,PizzaCrust,pizzaToppings,PizzaNumber);

    console.log(newPizzae)
    console.log(newPizzae.PizzaFlavour)
    OrderNew.push(newPizzae);
    console.log(OrderNew)

    
      
})