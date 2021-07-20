function soNguyento(num) {
    let n=2;
    let count=0;
    var array = [];
    if (num<=0){
        return  "Hãy nhập vào số dương";
    }
    else {
        while (num){
            let flag = true;
            for (let i =2;i <= Math.sqrt(n); i++){
                if (n%i == 0){
                    flag=false;
                    break;
                }
            }
            if (flag == true){
                count++;
                array.push(n);
            }
            if (count >= num){
                break;
            }
            n++;
        }
    }
    return array.toString();
}
let sNt = soNguyento(100);
console.log(sNt);
