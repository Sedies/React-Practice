# [오늘은 뭐 먹지?](https://becover.github.io/React-Practice/)

함수컴포넌트에 hooks를 사용하여 DOM조작 및 사용자의 input 데이터들을 받아 메뉴를 랜덤하게 출력하는 점심뽑기를 만들어 보았습니다.

- 메뉴 뽑기 기능
  - 평범한 메뉴 선택 기능에 재미요소를 넣음
  - 메뉴 추가 후 레버를 돌려 랜덤하게 선택
  - 메뉴가 없이 레버를 돌리면 알림창 및 메뉴 input창 focusing
  - 메뉴 후보가 1개이상시 레버돌리는 안내문구 show

![sample](https://github.com/becover/React-Practice/tree/master/random-draw/src/Assets/img/sample.png)


- 추후 추가할 기능
  - 많은 메뉴(또는 긴메뉴)를 넣을시 느려지는 현상 최적화
  - input에 그냥 엔터쳤을때 빈문자로 메뉴가 나오는 부분 처리
  - 메뉴를 매번 다시 써야하는 번거로움을 줄이고자 로컬스토리지에 저장하는 옵션 추가/ 저장된 옵션 불러오기 추가
  - input box 이미지도 다른 레이아웃들과 통일감을 주도록 css border style에서 img로 변경
  - 반응형
  - 매번 쓰기 귀찮을땐 랜덤하게 메뉴를 뽑기통에 담아주는 쓰기귀찮아 버튼
  - 쓰기귀찮아 버튼으로 누를시 꽝추가
  - 뽑힌 메뉴 누르면 구글/구글지도 연결

