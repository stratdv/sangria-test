function myFunction() {
    var age, drinkable;
    age = document.getElementById("age").value;
    drinkable = (age < 21) ? "Way too young":"Old enough";
    document.getElementById("demo").innerHTML = drinkable + " to drink Kate's hooch.";
}
