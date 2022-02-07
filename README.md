## What is Closure? 

In JavaScript, closures are defined as inner functions that have access to variables and parameters of outer function even after the outer function has returned.

```

function multi(){
    let factor = 10;

    return multiplyByTen(num){
        return num * factor;
    }
}

let multipleOfTen = multi();

let result = multipleOfTen(7);

/// output ///

70

```
In above example  multipleOfTen function has access to parent function local variable 'factor' value.