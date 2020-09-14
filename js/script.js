let cats = document.querySelectorAll('.counter-block__input')[0];
let days = document.querySelectorAll('.counter-block__input')[1];
let accomodationType = document.getElementById('select');
let totalValue = document.getElementById('total');
let catsAmount = 0;
let daysAmount = 0;
let tota = 0;

cats.addEventListener('change', function(){
    catsAmount= +this.value;
    total = (catsAmount * daysAmount) * 40;
    if(days.value == ''){
        totalValue.innerHTML = 0;
    } else {
        totalValue.innerHTML = total;
    }
});

days.addEventListener('change', function(){
    daysAmount= +this.value;
    total = (catsAmount * daysAmount) * 10;
    if(days.value == ''){
        totalValue.innerHTML = 0;
    } else {
        totalValue.innerHTML = total;
    }
});

accomodationType.addEventListener('change', function(){
    if(cats.value == '' || days.value == ''){
        totalValue.innerHTML = 0;
    } else {
        let a = total;
        totalValue.innerHTML = a * this.options[this.selectedIndex].value;
    }
});