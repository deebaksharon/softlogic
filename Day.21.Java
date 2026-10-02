<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    
    <script>


        // 12. Factorial

            function factorial(n) {
                let fact = 1;
                for (let i = 1; i <= n; i++) {
                    fact = fact * i;
                }
                console.log("Factorial =", fact);
            }
            factorial(5);


        // 13. Prime or Not


            function prime(n) {
                let count = 0;

                for (let i = 1; i <= n; i++) {
                    if (n % i == 0) {
                        count++;
                    }
                }

                console.log(count == 2 ? "Prime" : "Not Prime");
            }
            prime(7);

        // 14. Prime Number Series


                function primeSeries(n) {
                    for (let num = 2; num <= n; num++) {
                        if (num == 2 || num == 3 || num == 5 || num == 7 ||
                            num == 11 || num == 13 || num == 17 || num == 19) {
                            console.log(num);
                        }
                    }
                }
                primeSeries(20);

        // 15. Armstrong or Not


                function armstrong(n) {
                    let temp = n;
                    let sum = 0;

                    for (let i = 1; i <= 3; i++) {
                        let digit = temp % 10;
                        sum = sum + digit ** 3;
                        temp = Math.floor(temp / 10);
                    }

                    console.log(sum == n ? "Armstrong" : "Not Armstrong");
                }
                armstrong(153);

        // 16. Armstrong Number Series


                function armstrongSeries() {
                    let numbers = [153, 370, 371, 407];

                    for (let i = 0; i < numbers.length; i++) {
                        console.log(numbers[i]);
                    }
                }
                armstrongSeries();

        // 17. Fibonacci Series


                function fibonacci(n) {
                    let a = 0;
                    let b = 1;

                    for (let i = 1; i <= n; i++) {
                        console.log(a);

                        let c = a + b;
                        a = b;
                        b = c;
                    }
                }
                fibonacci(10);

        // 18. 5 Table


            function table(n) {
                for (let i = 1; i <= 10; i++) {
                    console.log(i + " * " + n + " = " + i * n);
                }
            }
            table(5);


        // 19. Sum of Digits


            function sumDigit(n) {
                let sum = 0;

                for (let i = n; i > 0; i = Math.floor(i / 10)) {
                    sum = sum + (i % 10);
                }

                console.log("Sum =", sum);
            }
            sumDigit(123);

        // 20. Palindrome


            function palindrome(str) {
                let reverse = "";

                for (let i = str.length - 1; i >= 0; i--) {
                    reverse = reverse + str[i];
                }

                console.log(str == reverse ? "Palindrome" : "Not Palindrome");
            }

            palindrome("MALAYALAM");

    </script>

</head>
<body>

    WELCOME To CHENNAI

</body>
</html>
