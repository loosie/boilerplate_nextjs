# Next.js boilerplate

## boilerplate 기본 설정

- Next 9.5.5

- eslint, prettier 기본 setting (.eslint.json, .prettier.json)

## 사용방법

1. git clone 혹은 파일 다운로드
2. VSCode를 실행 후 terminal에 `$npm install` 를 입력

<br/>

## basic + bootstrap

### 기본 페이지 구성

`page` <br/>
|-- \_app.js <br/>
|-- \_document.js <br/>
|-- index.js <br/>
|-- `type` <br/>
|--|-- [name].js <br/>
|--|-- index.js <br/>
<br/>

### 기본 경로

/ <br/>
/type <br/>
/type/[name] <br/>

---

### bootstrap / sass로 global.css 전역설정

- bootstrap 4.5.3 설정 <br/>
  > 공식 문서 [링크](https://getbootstrap.com/)

- sass global Stylesheet설정
  > 공식 문서 [링크](https://nextjs.org/blog/next-9-3#built-in-sass-support-for-global-stylesheets)

