var compose = function(functions) {
    return x => functions.reduceRight((acc,f)=>f(acc),x)
}
