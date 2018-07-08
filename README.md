# make-schedule

> 시간표 자동 생성 웹서비스

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev
```

- 백엔드 API 서버 준비 필요
1. 데이터베이스에 시리얼나이즈 또는 JSON 형태로 값이 저장되어있다고 가정합니다.
2. 백엔드서버는 API요청 발생 시 json형태로 전달 합니다.

- 추가정보

1. 아래 오브젝트 값 중 time의 저장되는 배열의값은 총 3가지 강의시간을 입력시 위와같은 배열형태로 총3가지(3가지 강의시간)의 경우의수를 모두 저장한 값이라 가정 합니다.
2. 위 JSON에서 time에 저장되는값은 아래 사진에 표시된것같과 같이 시간표에서의 위치를 나타냅니다.


