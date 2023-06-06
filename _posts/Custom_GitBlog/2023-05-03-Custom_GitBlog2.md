---
title: "깃허브 블로그 커스텀하기 - 블로그 폰트 변경하기"
excerpt: "깃허브 블로그 커스텀, 쉽게 정리했습니다. 깃허브 블로그 폰트 변경하기"

categories:
    - Custom_Blog
tags:
    - [Blog, Git, Github, Jekyll, Brew, Ruby, rbenv]

toc: true
toc_sticky: true

date: 2023-05-03
last_modified_at: 
comments: true
---
<br>

<div align=center>


❗️커스텀 포스팅은 필자의 시행착오와 독학을 통해 작성되었습니다.❗️<br> 틀린 부분이나 좀 더 쉬운 방법이 있다면 댓글 부탁드려요. 다양한 피드백 환영입니다😃


</div>

<br><br>

# 폰트 사이트
제가 사용하는 폰트 사이트입니다!
* [눈누](https://noonnu.cc)
* [구글 폰트](https://fonts.google.com)

❗️**주의**: 위 두페이지는 무료 상업용 폰트를 제공하므로, 본인의 웹페이지에서 폰트를 사용해도 됩니다.<br>
하지만 **폰트를 사용할 때에는 다시한번 라이센스를 확인하시기 바랍니다.** (저작권 문제가 발생할 수 있습니다.)

# 폰트 변경하는 방법
✅ **참고**: 블로그의 폰트를 변경하는 방법은 여러가지가 있습니다.
1. 웹폰트의 `url`을 이용하여 변경하는 방법
2. 본인의 블로그 파일에 폰트를 설치해 변경하는 방법

먼저, 웹폰트를 사용하는 방법에 대해 포스팅을 하겠습니다

## 1️⃣ 웹폰트 사용하기

1. `assets 폴더 -> css 폴더 -> main.scss 파일`로 이동해 줍니다. 
2. [눈누](https://noonnu.cc) 사이트로 이동해 원하는 폰트를 선택합니다.
3. "웹폰트로 사용" 부분을 복사(`command(ctrl) + c`)해 줍니다.
<img width="350" alt="스크린샷 2023-05-03 오후 1 38 09" src="https://user-images.githubusercontent.com/86516594/235833784-ff521160-6276-4c57-9f12-4004dc2bcadb.png">{: .align-center}

4. 그런 다음 `main.scss`에 붙여넣기!
<img width="500" alt="스크린샷 2023-05-03 오후 1 41 39" src="https://user-images.githubusercontent.com/86516594/235834055-b681e8e2-d503-439d-b8a7-1dc004b86be1.png">{: .align-center}

5. `_sass 폴더 -> minimal-mistakes 폴더 -> _variables.scss 파일`로 이동해 줍니다.
<img width="500" alt="스크린샷 2023-05-03 오후 1 45 40" src="https://user-images.githubusercontent.com/86516594/235834565-d6b4666b-ab57-4052-8f01-7413938c7d0c.png">{: .align-center}

* `sans-serif` 부분에 아까 복사했던 `font-family의 내용`을 적어주면 됩니다.


✅ **참고**: -apple-system을 적어줘야 해요! 애플이 제공하는 앱에서도 해당하는 폰트로 변경됩니다.


### ▶️ 참고 사항: 구글 폰트 이용 시
1. 먼저 구글 폰트 사이트로 이동합니다.
<img width="700" alt="스크린샷 2023-05-03 오후 3 02 13" src="https://user-images.githubusercontent.com/86516594/235842801-db718a13-93b9-48ba-a44c-d5dfef144ebc.png">{: .align-center}


2. Show only variable fonts의 박스를 클릭하고 원하는 폰트를 클릭합니다.

3. 사진과 같이 보이는 버튼을 클릭합니다.
<img width="200" alt="스크린샷 2023-05-03 오후 3 02 53" src="https://user-images.githubusercontent.com/86516594/235842952-fd575b8c-2e0a-451b-8de0-213cf4a61679.png">{: .align-center}

4. 우측 상단의 버튼을 클릭합니다.
<img width="200" alt="스크린샷 2023-05-03 오후 3 03 40" src="https://user-images.githubusercontent.com/86516594/235843094-02f4452c-6ccc-4246-b7b9-bba492e98edc.png">{: .align-center}

5. `url`만 복사 후 아까 설명드렸던 과정을 진행하시면 돼요!
<img width="200" alt="스크린샷 2023-05-03 오후 3 04 48" src="https://user-images.githubusercontent.com/86516594/235843158-e83f99f2-bf8a-4843-9d7c-950a88ce96a2.png">{: .align-center}

6. 저는 다음과 같이 설정하였습니다. 예시로 보시면 편할 것 같아요!<br>
```css
@font-face {
    font-family: 'noto-sans';
    src: url('//fonts.googleapis.com/earlyaccess/notosanskr.css'); 
}
```

## 2️⃣  직접 설치하기
* 저는 `assets` 폴더에 `font`라는 폴더를 새로 생성했어요
* 이 폴더 안에는 **폰트 파일**을 넣어주시면 됩니다.
1. `assets`폴더에 있는 `main.scss`파일에 추가해주시면 됩니다.

```scss
@font-face {
    font-family: 'RobotoMono-Regular';
    src: url('/assets/font/RobotoMono-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
}
```

❗️**주의**
* `font-family`는 임의적으로 설정할 수 있습니다.
* `url`부분은 폰트 파일의 경로(저의 경우 `assets`폴더에 `font`폴더를 새로 생성)를 입력해주시면 됩니다.
    * 폴더명을 다르게 할 경우 본인의 폴더명을 맞춰 주세요!
* `format`의 경우 파일명에 따라 다릅니다. 반드시 맞춰 주세요!
    * ttf: `format('truetype')`
    * otf: `format('opentype')`
    * wotf: `format('wotf')`
    * wotf2: `format('wotf2')`

2. 위에 했던 것과 마찬가지로 `_sass/_variables.scss`로 이동 후에 본인이 지정한 `font-family` 이름을 입력해 주세요!
* 저는 위에서 `RobotoMono-Regular`로 지정했으니 다음과 같겠네요.

3. 저의 예시는 다음과 같습니다.<br>
```scss
/* system typefaces 폰트 적용하기 */
$serif: Georgia, Times, serif !default;
$sans-serif: "noto-sans", "noto-sans", -apple-system, BlinkMacSystemFont, "Roboto", "Segoe UI",
  "Helvetica Neue", "Lucida Grande", Arial, sans-serif !default;
$monospace: "RobotoMono-Regular", "RobotoMono-Regular", -apple-system, Monaco, Consolas, "Lucida Console", monospace !default;
```
* 각 행에 있는 글씨체 **제일 앞에 따옴표가 매겨진 글씨체**가 적용되니 참고하시면 좋겠어요. <br>
제 블로그에는 `noto-sans`, `RobotoMono-Regular`가 적용되겠네요!

✅**참고**: -apple-system을 적어줘야 해요! 애플이 제공하는 앱에서도 해당하는 폰트로 변경됩니다.

## 3️⃣ 알아가면 좋은 지식

* `$serif`는 궁서체, `$sans-serif`는 돋움체(고딕)를 의미합니다.
* `$monospace`는 고정폭 글꼴 즉, 코딩체를 의미합니다.<br>이러한 고정폭 글꼴은 **코드블럭**에 나타나는 글꼴이며 따로 설정할 수 있습니다.
* 여러분이 원하는 폰트를 설치하거나, 웹폰트의 링크를 가져와 자유롭게 설정하시되 꼭 폰트의 저적권을 반드시 유념하시기 바랍니다.