/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let c = false
    return function(...args){
        if (c) return undefined;
        c = true
        return fn(...args)
    }
}

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
