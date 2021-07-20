function isPrime(number) {
    if (number<=0){
        return  "Đây không phải số nguyên tố. Hãy nhập vào số dương";
    }
    else if (number == 1){
        return  1 + " không phải số nguyên tố";
    }
    else if (number > 10000){
        return "Số bạn nhập lơn hơn 10000";
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
    let sNt = isPrime(num);
    document.getElementById('output').innerHTML = sNt;
}

