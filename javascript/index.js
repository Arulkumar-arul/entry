tamil=parseInt(prompt("Enter the tamil marks:"))
english=parseInt(prompt("Enter the English marks:"))
maths=parseInt(prompt("Enter the Maths marks:"))
science=parseInt(prompt("Enter the Science marks:"))
social=parseInt(prompt("Enter the Social marks:"))
Total=(tamil+english+maths+science+social)
average=Total/5
console.log(Total)
console.log(average)
if(average>=90){
    console.log("A+ Grade")
}
else if(average>=80 && average<=89){
    console.log("A Grade")
}
else if(average>=70 && average<=79){
    console.log("B Grade")
}
else if(average>=60 && average<=69){
    console.log("C Grade")
}
else if(average>=50 && average<=59){
    console.log("D Grade")
}
else{
    console.log("Faill")
}