/* 

[readystate]

0: uninitalized
1: loading
2: loaded
3: inertactive
4: complete

*/




const xhr = new XMLHttpRequest();


xhr.open('GET','https://jsonplaceholder.typicode.com/users')


console.log( xhr.readyState );



xhr.send();