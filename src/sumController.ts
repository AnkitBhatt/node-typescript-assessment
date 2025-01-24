export const sum = (num1?, num2?) => {
  if(num1 && !num2){
    return num1;
  }
  else if(num1 && num2){
    return num1 + num2
  }
  else{
    return 0;
  }
}