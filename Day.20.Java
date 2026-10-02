<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>


    //1. 1 2 3 4 5 6 7 8  series of 1 to 20

            for (let i = 1; i <= 20; i++) {
                console.log(i);
            }


    //2. 1 3 5 7 9   series of 1 to 20 odd

            for (let i = 1; i <= 20; i += 2) {
                console.log(i);
            }


    //3. 0 2 4 6 8    series of even 0 to 20

            for (let i = 0; i <= 20; i += 2) {
            console.log(i);
            }


    //4. 0 5 10 15 20 25(5 series)

            for (let i = 0; i <= 25; i += 5) {
            console.log(i);
            }

    //5. 1 + 2 + 3 + 4 + .....

            let sum1 = 0;

            for (let i = 1; i <= 20; i++) {
            sum1 = sum1 + i;
            }

            console.log("Sum =", sum1);

    //6. 0 + 2 + 4 + 6 + ...

            let sum2 = 0;

            for (let i = 0; i <= 20; i += 2) {
                sum2 = sum2 + i;
            }

            console.log("Sum =", sum2);

    //7. 1 + 3 + 5 + 7 + 9.....

            let sum3 = 0;

            for (let i = 1; i <= 20; i += 2) {
                sum3 = sum3 + i;
            }

            console.log("Sum =", sum3);

    //8. 0 + 5 + 10 + 15 + 20 + .....

            let sum4 = 0;

            for (let i = 0; i <= 20; i += 5) {
                sum4 = sum4 + i;
            }
            
            console.log("Sum =", sum4);


    //9. 1 / 1! + 2 / 2! + 3 / 3! + 4 / 4!.....

            let sum5 = 0;
            let fact1 = 1;

            for (let i = 1; i <= 10; i++) {
                fact1 = fact1 * i;
                sum5 = sum5 + (i / fact1);
            }

            console.log("Sum =", sum5);


    //10.  0 + 2 / 2! + 4 / 4! + 6 / 6!.... 
    
            let sum6 = 0;
            let fact2 = 1;

            for (let i = 0; i <= 10; i += 2) {

                if (i === 0) {
                    sum6 = sum6 + 0;
                } else {
                    fact2 = fact2 * (i - 1) * i;
                    sum6 = sum6 + (i / fact2);
                }
            }

            console.log("Sum =", sum6);


    //11. 1 / 1! + 3 / 3! + 5 / 5!....

            let sum7 = 0;
            let fact3 = 1;

            for (let i = 1; i <= 9; i += 2) {

                if (i === 1) {
                    fact3 = 1;
                } else {
                    fact3 = fact3 * (i - 1) * i;
                }

                sum7 = sum7 + (i / fact3);
            }

            console.log("Sum =", sum7);

    </script>

</head>
<body>

    <h1>WELCOME TO SLA</h1>

</body>
</html>
