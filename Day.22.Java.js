// 1. Series 1 to 20


        const series1 = () => {
            for (let i = 1; i <= 20; i++) {
                console.log(i);
            }
        };
        series1();


// 2. Odd numbers 1 to 20


        const oddSeries = () => {
            for (let i = 1; i <= 20; i += 2) {
                console.log(i);
            }
        };
        oddSeries();


// 3. Even numbers 0 to 20


        const evenSeries = () => {
            for (let i = 0; i <= 20; i += 2) {
                console.log(i);
            }
        };
        evenSeries();


// 4. Multiples of 5 from 0 to 25


        const fiveSeries = () => {
            for (let i = 0; i <= 25; i += 5) {
                console.log(i);
            }
        };
        fiveSeries();

// 5. Sum 1 + 2 + 3 + ... + 20


        const sumSeries = () => {
            let sum = 0;

            for (let i = 1; i <= 20; i++) {
                sum += i;
            }

            console.log(sum);
        };
        sumSeries();

// 6. Sum 0 + 2 + 4 + ... + 20


        const evenSum = () => {
            let sum = 0;

            for (let i = 0; i <= 20; i += 2) {
                sum += i;
            }

            console.log(sum);
        };
        evenSum();

// 7. Sum 1 + 3 + 5 + ... + 19


    const oddSum = () => {
        let sum = 0;

        for (let i = 1; i <= 20; i += 2) {
            sum += i;
        }

        console.log(sum);
    };
    oddSum();


// 8. Sum 0 + 5 + 10 + ... + 25


        const fiveSum = () => {
            let sum = 0;

            for (let i = 0; i <= 25; i += 5) {
                sum += i;
            }

            console.log(sum);
        };
        fiveSum();

// 9. 1/1! + 2/2! + ... + 5/5!


        const factorialSeries = () => {
            let sum = 0;

            for (let i = 1; i <= 5; i++) {
                let fact = 1;

                for (let j = 1; j <= i; j++) {
                    fact *= j;
                }

                sum += i / fact;
            }

            console.log(sum);
        };
        factorialSeries();


// 10. 0 + 2/2! + 4/4! + 6/6!


            const evenFactorial = () => {
                let sum = 0;

                for (let i = 2; i <= 6; i += 2) {
                    let fact = 1;

                    for (let j = 1; j <= i; j++) {
                        fact *= j;
                    }

                    sum += i / fact;
                }

                console.log(sum);
            };
            evenFactorial();

// 11. 1/1! + 3/3! + 5/5!


    const oddFactorial = () => {
        let sum = 0;

        for (let i = 1; i <= 5; i += 2) {
            let fact = 1;

            for (let j = 1; j <= i; j++) {
                fact *= j;
            }

            sum += i / fact;
        }

        console.log(sum);
    };
    oddFactorial();


// 12. Factorial of a number


        const factorial = (num) => {
            let fact = 1;

            for (let i = 1; i <= num; i++) {
                fact *= i;
            }

            console.log(fact);
        };
        factorial(5);

// 13. Check prime number


        const primeCheck = (num) => {
            let count = 0;

            for (let i = 1; i <= num; i++) {
                if (num % i === 0) {
                    count++;
                }
            }

            if (count === 2) {
                console.log("Prime");
            } else {
                console.log("Not Prime");
            }
        };
        primeCheck(7);

// 14. Prime number series 1 to 20


    const primeSeries = () => {
        for (let num = 2; num <= 20; num++) {
            let count = 0;

            for (let i = 1; i <= num; i++) {
                if (num % i === 0) {
                    count++;
                }
            }

            if (count === 2) {
                console.log(num);
            }
        }
    };
    primeSeries();


// 15. Armstrong number check


    const armstrongCheck = (num) => {
        let temp = num;
        let sum = 0;

        while (temp > 0) {
            let digit = temp % 10;
            sum += digit ** 3;
            temp = Math.floor(temp / 10);
        }

        if (sum === num) {
            console.log("Armstrong Number");
        } else {
            console.log("Not Armstrong Number");
        }
    };
    armstrongCheck(153);


// 16. Armstrong number series 1 to 999


            const armstrongSeries = () => {
                for (let num = 1; num <= 999; num++) {
                    let temp = num;
                    let sum = 0;

                    while (temp > 0) {
                        let digit = temp % 10;
                        sum += digit ** 3;
                        temp = Math.floor(temp / 10);
                    }

                    if (sum === num) {
                        console.log(num);
                    }
                }
            };
            armstrongSeries();

// 17. Fibonacci Series


    const fibonacci = () => {
        let a = 0;
        let b = 1;

        for (let i = 1; i <= 10; i++) {
            console.log(a);

            let c = a + b;
            a = b;
            b = c;
        }
    };
    fibonacci();


// 18. Print 5 Table


    const table = () => {
        for (let i = 1; i <= 10; i++) {
            console.log(`${i} * 5 = ${i * 5}`);
        }
    };
    table();



// 19. Sum of digits


    const sumOfDigits = (num) => {
        let sum = 0;

        while (num > 0) {
            let digit = num % 10;
            sum += digit;
            num = Math.floor(num / 10);
        }

        console.log(sum);
    };
    sumOfDigits(123);


// 20. Palindrome check


    const palindrome = (word) => {
        let reverse = "";

        for (let i = word.length - 1; i >= 0; i--) {
            reverse += word[i];
        }

        if (word === reverse) {
            console.log("Palindrome");
        } else {
            console.log("Not Palindrome");
        }
    };

    palindrome("MADAM");
