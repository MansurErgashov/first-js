alert('biror sonni kiriting')
son = prompt()
console.log(son)
son2 = son%2
if(son2==0) {
    console.log('juft son')
}
else {
    console.log('toq son')
}
/*form*/
alert('Ismingizni kiriting')
ism = prompt()
if(ism.length >= 3){
    console.log(ism)
}
else {
    console.log('ismningizni qayta kiriting')
    prompt('')
};
alert('Familyangizni kiriting')
familya = prompt()
if(familya.length >= 3) {
    console.log(familya)
}
else {
    console.log('familyangizni qayta kiriting')
    prompt()
};
alert('Tug\'ilgan yilingizni kiriting')
yosh = prompt('');
if(yosh <= 2002) {
    console.log(yosh)
    console.log('siz armiyaga qabul qilindingiz')
}
else {
    console.log('siz armiyaga qabul qilinmadingiz')
}