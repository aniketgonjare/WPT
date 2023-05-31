/*1) Create a user defined local module calc.js that exposes the following functions: add(a,b),
subtract(a,b), multiply(a,b), divide(a,b), square(a), sum(a,b,c...)
Create a client application that invokes each of these methods*/


exports.add=(a,b)=>{
    return a+b
    }
    
    
    exports.substract=(a,b)=>{
    return a-b
    }
    
    
    exports.multiply=(a,b)=>{
    return a*b
    }
    
    
    exports.square=(a)=>{
    return a*a
    }
    
    
    exports.divide=(a,b)=>{
        return a/b
    }
    
    
    exports.sum=(...a)=>{
         var result=0;
         for(i=0;i<a.length;i++)
         {
            result+=a[i];
         }
         return result;
    }
    