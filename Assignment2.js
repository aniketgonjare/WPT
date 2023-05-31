exports.factorial=(n)=>{
    var fact=1;
    for(i=0;i<n;i++)
    {
        fact=fact*(i+1);
    }
    return fact;
}


exports.myprime=(n)=>{
    var cnt=0;
    for(i=2;i<n/2;i++)
    {
        if(n%i==0)
        {
           
            cnt++;
            break;
        }
    }
    if(cnt!=0)
    {
        return " Prime Number"
    }
    else
    return "not a Prime number";
}


exports.table=(n)=>{
    var result="";
    for(i=1;i<11;i++)
    {
      result = result+ n +"*"+i+"="+i*n+'\n';
     
    }
    return result;
}
