const btn = document.getElementById('calculate');;

btn.addEventListener('click',function(){

    let height = document.querySelector('#height').value;
    let weight = document.querySelector('#weight').value;

    if(height == '' || weight == ''){
        alert('please fill out the input feilds');
        return;
    }
    height = height/100;

    let bmi = (weight / (height * height));

    bmi = bmi.toFixed(2)
    // console.log(bmi);

    document.querySelector('#result').innerHTML = bmi;

    let text = '';

     if(bmi<=19){
        text = 'Underweight'
     }
     if(bmi>19 & bmi < 30){
        text = 'Normal'
     }
     if(bmi >= 30 & bmi < 40){
        text = 'Overweiight'
     }
     if(bmi >= 40 & bmi < 50){
        text = 'Overweiight'
     }
     if(bmi>=50){
        text = 'Is celi waa Socotaayee '
     }
document.querySelector('.comment').innerHTML = `you are <span id='comment'>${text} </span>`

})