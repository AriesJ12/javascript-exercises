const fibonacci = function(term) {
    term = +term;

    if (term <0 )
    {
        return "OOPS";
    }
    
    if (term === 1)
    {
        return 1;
    }
    else if(term === 0)
    {
        return 0;
    }
    return fibonacci(term-1) + fibonacci(term-2) ;
};

// Do not edit below this line
module.exports = fibonacci;
