// // 1.1


// function myFunction (a, b) {
//     let result;
//     if (a % 2 == 0) {
//         result = a*b;
//         console.log(result);
//     }else if (a % 2 != 0) {
//         result = a+b;
//         console.log(result);
//     }
// }

// // myFunction(3,10);

// //1.2

// function findQuarter (x,y) {
//     if(x < 0 && y > 0) {
//         console.log("Точка принадлежит 1-й четверти");
//     }else if (x > 0 && y > 0) {
//         console.log("Точка принадлежит 2-й четверти");
//     }else if (x < 0 && y < 0) {
//         console.log("Точка принадлежит 3-й четверти");
//     }else if (x > 0 && y < 0) {
//         console.log("Точка принадлежит 4-й четверти");
//     }else {
//         console.log("Точка не пренадлежит четверти")
//     }
// } 
// // findQuarter(2, 1);

// //1.3

// let massive = [2, 3, -1, -9];
// let clear = 0;
// function sumPositive () {
//     for (let i = 0; i < massive.length; i++) {
//     if (massive[i] > 0) {
//         clear += massive[i];
//     }
// }
// console.log(clear);
// }
// // sumPositive ();

// //1.4

// function findMax (a, b, c) {
//     console.log(
//         Math.max((a*b*c), (a+b+c) +3)
//     )
// }

// findMax(3,4,7);

//2.1 

function myFunction(x, y) {
  let sum = 0;
  for (let i = x; i < y; i++) {
    if (i % 2 === 1){
        sum += i;
    }
  }
  return sum;
}
// console.log(myFunction(3,5));

//2,2


function isPrime(num){
    for (var i = 2; i < num; i++) {
        if (num % i==0){
            return false;
        }
    };
    return true;
}
// console.log(isPrime(10));

function getSqrtBySequentialSelection(num) {
    for(let i = 0; i < num;i++) {
        while(i * i < num) {
            i++;
            console.log(i);
            }
        }
    }

// console.log(getSqrtBySequentialSelection(9));


function getFactorial(n){
    let answer = 1;
    if (n == 0 || n == 1){
        console.log(answer);
    }else{
      for(var i = n; i >= 1; i--){
        answer = answer * i;
      }
      console.log(answer);
    }  
  }
// getFactorial(5)

// function digitSum(y) {
//         let sum = 0, x = String(y);
//         for (let i = 0; i < x.length; i++) {
//             sum += Number(x[i]);
//         }
//         return(sum)
// }

// console.log(digitSum(111))




//3.1 

function getMinOfArr () {
    arr = [1,4,1,3,5,78];
    console.log(Math.min(...arr));
}

// getMinOfArr();

//3.2 

function getMaxOfArr () {
    arr = [1,4,10,3,5,78];
    console.log(Math.max(...arr));
}

// getMaxOfArr();

//3,3

function getMaxIndexOfArray () {
    arr = [1,4,10,3,5,78];
    var lowest = 0;
        for (var i = 1; i < arr.length; i++) {
            if (arr[i] > arr[lowest])
                lowest = i;
        }
        console.log(lowest);
} 

// getMaxIndexOfArray();

function getMinIndexOfArray () {
    arr = [1,4,10,3,5,78];
    var lowest = 0;
        for (var i = 1; i < arr.length; i++) {
            if (arr[i] < arr[lowest])
                lowest = i;
        }
        console.log(lowest);
} 

// getMinIndexOfArray();


function arraySum(array){
    var sum = 0;
    for(var i = 0; i < array.length; i++){
        sum += array[i];
    }
    console.log(sum);
}
// arr = [1,4,10,3,5,78]; 
// arraySum(arr);

function reverseArr () {
    let arr = [1,4,10,3,5,78];
    arr.reverse();
    console.log(arr);
}

// 

function countOfOdd () {
    let arr = [1,4,10,3,5,78];
    for (var i = 0; i < arr.length; i++) {
        if ((arr[i] % 2)!= 0) {
  	    console.log(arr[i]);
    } 
}
}
// countOfOdd();


//5.1

function getWeekDay (day) {
    switch (day) {
        case 1:
            console.log('Monday')
            break;
        case 2:
            console.log('Tuesday')
            break;
        case 3:
            console.log('Wednesday')
            break;
        case 4:
            console.log('Thursday')
            break;
        case 5:
            console.log('Friday')
            break;
        case 6:
            console.log('Saturday')
            break;
        case 7:
            console.log('Sunday')
            break;    
        default:
            break;
    }
}

// getWeekDay(3);

// function getDistance(x, y) {
//     return Math.sqrt(Math.pow(y[0] - x[0], 2) + Math.pow(y[1] - x[1], 2));
// }
// console.log(getDistance([3, 1], [3, 2]))

// function numbersToWords (num) {
//     switch (num) {
//         case 1:
//             console.log('one')
//             break;
//         case 2:
//             console.log('two')
//             break;
//         case 3:
//             console.log('three')
//             break;
//         case 4:
//             console.log('four')
//             break;
//         case 5:
//             console.log('five')
//             break;
//         case 6:
//             console.log('six')
//             break;
//         case 7:
//             console.log('seven')
//             break;    
//         default:
//             break;
//     }
// }

// numbersToWords(2);

function getSum () {
    let num1 = '118385385384304038435454856485308431';
    let num2 = '89424298902782457254787375379543535';
    console.log(num1 + num2);
}

// getSum();

function banknotesArray (a, b, c) {
    if (a >= b-25 && b >= c-25 + a-25 ) {
        console.log(true);
    }else {
        console.log(false)
    }
}

// banknotesArray(25,25,100);

let listOfPosts2 = [

    {

        id: 1,

        post: 'some post1',

        title: 'title 1',

        author: 'Ivanov',

        comments: [

            {

                id: 1.1,

                comment: 'some comment1',

                title: 'title 1',

                author: 'Rimus'

            },

            {

                id: 1.2,

                comment: 'some comment2',

                title: 'title 2',

                author: 'Uncle'

            }

        ]

    },

    {

        id: 2,

        post: 'some post2',

        title: 'title 2',

        author: 'Petrov',

        comments: [

            {

                id: 1.1,

                comment: 'some comment1',

                title: 'title 1',

                author: 'Rimus'

            },

            {

                id: 1.2,

                comment: 'some comment2',

                title: 'title 2',

                author: 'Uncle'

            },

            {

                id: 1.3,

                comment: 'some comment3',

                title: 'title 3',

                author: 'Rimus'

            }

        ]

    },

    {

        id: 3,

        post: 'some post3',

        title: 'title 3',

        author: 'Rimus'

    },

    {

        id: 4,

        post: 'some post4',

        title: 'title 4',

        author: 'Uncle'

    }

]

function getQuntityPostsByAuthor (listOfPosts, name) {
    let post, comment;
    post = 0;
    comment = 0;
    for (let i = 0; i < listOfPosts.length; i++) {
        if (listOfPosts[i].author == name) {
            post++;
        }
        for(key in listOfPosts[i].comments) {
            if (listOfPosts[i].comments[key].author == name) {
                comment++;
            }
        }
    }
    console.log("post/posts - " + post + ", " + "comment/comments - " + comment);
}

getQuntityPostsByAuthor (listOfPosts2,"Rimus");