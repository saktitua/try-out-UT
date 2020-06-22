function Reduce(number){
    console.log(number);
    return Reduce(number -1);
}

Reduce(5);