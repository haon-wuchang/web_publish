// hello javascript! 문자열을 한 문자씩 출력해주세요
let str = 'hello javascript!';
for(let i =0;i < str.length ; i++){
    console.log(str[i]);
}

// '독서,수영,영화,게임,사이클' 이렇게 입력받음 얘는 ,로구분해서 배열로만들고 출력해라
let hobbys = '독서, 수영, 영화, 게임, 사이클';
hobbys = hobbys.split(',');
console.log(hobbys);
for(let i =0; i<hobbys.length;i++){
    console.log(hobbys[i].trim());   
}


// hobbys.forEach((hobby) => console.log(hobby.trim()));

