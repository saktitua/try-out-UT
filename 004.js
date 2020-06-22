function palindrome(palindrom){
   
    for( var i = palindrom.length; i > 0; i-- )
    {
        if( palindrom[i] = palindrom.charAt(palindrom.length)-1 )
        {
            return true;
        }else{
            return false;
        }
    }
  
 
}

console.log(palindrome('Cigar? Toss it in a can. It is so tragic'));
console.log(palindrome('I did, did I?'));
console.log(palindrome("Red rum, sir, is murder"));
console.log(palindrome("Eva, can I see bees in a cave?"));
console.log(palindrome('Hello World'));

