function isPrime(number) {
    if (number<=1){
        return  "Đây không phải số nguyên tố.";
    }
    else {
        while (number){
            let flag = true;
            for (let i =2;i <= Math.sqrt(number); i++){
                if (number % i == 0){
                    flag = false;
                    return number + " không là số nguyên tố"
                    break;
                }
            }
            if (flag == true){
                return number + " là số nguyên tố";
                break;

            }
        }
    }
}
function reSult() {
    let num = document.getElementById('input').value;
    let checkPrime = isPrime(num);
    document.getElementById('output').innerHTML = checkPrime;
}

