function sumFibonacci(n) {
    if (!Number.isInteger(n) || n <= 0) {
        return 0;
    }

    if (n === 1) {
        return 0;
    }

    let sum = 1; 
    let previous = 0; 
    let current = 1; 

    for (let i = 3; i <= n; i++) {
        let next = previous + current; 
        sum += next; 
        previous = current;
        current = next;
    }
    
    return sum;
}

