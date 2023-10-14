{
  const x = 1;
  {
    const y = 2;
    console.log(x); // 1
    {
      console.log('inside' + x); // inside1
    }
  }
  console.log(x); // 1
  //   console.log(y); // crash
}

// 블록 안에 있는 변수는 외부에서 참조할 수 없다.
// 아무리 중첩되어있어도 자식 블록은 상위 블록의 변수를 참조할 수 있다.
// 다만 상위 블록이 하위 블록에서 정의된 변수를 참조할 수는 없다.

const text = 'global'; // 전역 변수, 전역 스코프 (글로벌 변수, 글로벌 스코프)
{
  const text = 'inside block1'; // 지역 변수(로컬변수), 지역 스코프(로컬스코프)
  {
    console.log(text); // inside block1
  }
}
