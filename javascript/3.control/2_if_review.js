//임의의 과일을 선택받아 ..
//좋아하는 과일:apple,orange,lemon
//이외의 과일 선택 시 '좋아하는 과일 없음' 출력 하세요

let fruit = 'lemon';
let choice = undefined;
if (fruit === 'apple')choice ='🍎';  
else if (fruit === 'orange')  choice ='🍊';
else if (fruit === 'lemon') choice ='🍋';
else    choice =`${fruit} 없어요`;
console.log(`선택 결과 : ${choice}`);



