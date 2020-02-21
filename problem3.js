/* The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ? */

let factor = 2;

function largestPrime(num){
    while(num != factor){
        if(num % factor === 0){
            num = num / factor;
            //console.log(num);
        }
        else{
            factor += 1;
        }
    }
        return factor;
    }


console.log("The largest prime factorization is",largestPrime(600851475143));

//answer: 6857