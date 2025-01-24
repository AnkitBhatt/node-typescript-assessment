export const sum = (...args) => {
  if(args){
    let sum = 0;
    for(const i of args){
      sum += Number(i);
    }
    return sum;
  }
  else{
    return 0;
  }
}