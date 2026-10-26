-------------
### 설명 브랜치


어떤 식으로 할건지
지금 코드는{
 WhatTodo, addbutton, todoList, Todos 4개의 상수(Todos는 변수)로 입력을 받는다.
showTodos함수로 현재 Todos에 들어가 있는 list값을 모두 출력한다.
addbutton으로 text값에 입력을 받아서 todos에 추가한 다음 showTodos함수 출력함.
}
이고 앞으로 해야하는것은 delete버튼 추가하기, 새로고침해도 안사라지게 서버?에 저장하기 +(edit가능하게 만들기)

먼저 해야하는것은 delete버튼 추가. delete버튼을 추가 버튼 옆에 만들어서 한번 누르면 delete상태가 on이 되어서 누르는 모든 list값을 삭제시키거나, 각 list옆 맨 오른쪽에 각각 delete버튼을 추가해서 그걸 누르면 삭제하게 되기 둘중 코드가 더 간편한것을 선택해보자.

코드 설계를 대충 해본 결과 각각 delete버튼을 만드는게 나한테는 더 쉬울듯함. 
그러면 1. delete버튼을 누르면 list값에서 해당값을 지우고 showTodos만 출력하면 됨.
2. 버튼을 누르면 confirm으로 "정말 지우시겠습니까?"를 출력하고 확인을 누르면 todos에 있는 list값을 지운 다음, showTodos를 한다. 
:완료

새로고침해도 유지:
localStorage라는걸로 하는듯 하다.
참조링크:
https://7357.tistory.com/52
위 글에 따르면 localStorage에 내 list값을 넣어서 저장하면 되는듯.
localStorage: 브라우저에 key-value값을 저장할수 있게함. 
항상 문자열로 저장됨









 js, html, css연습용 사이트 https://jsfiddle.net/      
 js코드 설명
 <details>
<summary>자세히 보기</summary>

const: 변하지 않는 상수. const로 먼저 지정하고 바꿀일 있는거만 let으로     
let: 변할 수 있는 변수.     
alert:팝업 띄우기     
prompt:입력받기, 두개 입력시 두번째거는 입력창에 미리 있음 ex) prompt("qwe", "qwee");     
console.log:콘솔창에 결과     
"" '' `` : 따옴표는 안에 있는값을 문자열로, ``는 변수를 인식해서 출력     
${} : ``안에 변수 넣을때사용    
//: 주석    
confirm: alert와 비슷하나, 확인과 취소버튼이 있고 입력받을시 true false값을 가질 수 있음   
boolean:자료형의 하나로, 참/거짓값을 가짐   
String, Number, Boolean:각자의 자료형으로 바꿈. 0,null, undefined, 빈문자열, NaN만은 Boolean에서 false값을 가짐(나머지는 true)
주의사항:Boolean(0)-true, Boolean ('0')-false    
**: 거듭제곱
*= += -= %=: 줄여서 표현 가능    
++ -- :1씩 증감(변수의 앞에 넣어야 먼저 작동함)   

if(조건){실행}else if(조건){실행}else{앞 두개가 모두 안하면 실행}   
for(초기값;조건(false가되면멈춤);코드실행후작업){반복할 코드}    
break:해당 반복문을 멈추고 빠져나옴
continue:해당 반복문을 멈추고 다음 반복문을 실행   

switch(평가){case A= case B= ...}이랑 if(조건A){}else if(조건 B){}...와 동일, default: if else에서 else역할   
function 함수명(매개변수){실행코드} 이후에 함수명 (매개변수에 넣을것); 하면 실행됨   
value:현재값을 가져오거나 변경   
push:배열 맨 마지막에 추가   
length: 길이    



</details>

------------------
