function fizzBuzz(num)
{
    for(let i=1;i<=num;i++)
    {
        if (i%3===0 && i%5===0)
        {
            console.log("FizzBuzz");
        }
        else if(i%3===0)
        {
            console.log("Fizz");
         }
         else (i%5===0)
         {
             console.log("Buzz");
          }
          else{
              console.log("No is" +i);
          }
    }
}
fizzBuzz(num);