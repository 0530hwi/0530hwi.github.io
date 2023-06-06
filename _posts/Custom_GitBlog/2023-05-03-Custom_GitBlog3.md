---
title: "깃허브 블로그 커스텀하기 - 블로그 폰트 크기, 페이지 너비 조절하기"
excerpt: "깃허브 블로그 커스텀, 쉽게 정리했습니다. 깃허브 블로그 폰트 크기 조절, 블로그 너비 조절"

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

# 1️⃣ 폰트 크기 조절하기
* 폰트 크기는 정말 간단하게 조절할 수 있습니다.

1. `_sass/minimal-mistakes/_reset.scss`로 이동해 줍니다.

2. 제 블로그의 `_reset.scss` 내용입니다. <br>

```scss
/* ==========================================================================
   STYLE RESETS
   ========================================================================== */

* { box-sizing: border-box; }

html {
  /* apply a natural box layout model to all elements */
  /* 글씨 크기 조정하기 */
  box-sizing: border-box;
  background-color: $background-color;
  font-size: 15px;

  /* 본문 사이즈 */
  @include breakpoint($medium) {
    font-size: 15px;
  }

  /* 헤더 사이즈 */
  @include breakpoint($large) {
    font-size: 16px;
  }

  /* 제목 사이즈 (이 부분만 조정해도 글씨 사이즈가 조절 됨)*/
  @include breakpoint($x-large) {
    font-size: 17.5px;
  }

  -webkit-text-size-adjust: 100%; /* 모바일 폰트 사이즈 조정*/
  -ms-text-size-adjust: 100%;
}
```

✅ **참고**: 로컬로 서버를 연 후, 조정하면서 설정하시기 바랍니다. 

## ▶️ 코드블럭 폰트 사이즈 조절하기
블로그를 읽다 보면 다음 사진과 같은 부분이 나오는데요! 이 부분이 바로 코드블럭입니다.<br>
<img width="455" alt="스크린샷 2023-05-03 오후 4 49 38" src="https://user-images.githubusercontent.com/86516594/235859375-220c5bd2-710b-4041-952e-cc7c145279c8.png">{: .align-center}

1. `_sass/minimal-mistakes/_syntax.scss`로 이동합니다.
2. 맨 위에 있는 부분에서 `font-size`부분을 조절해 줍니다.<br>

```scss
div.highlighter-rouge,
figure.highlight {
  position: relative;
  margin-bottom: 1em;
  background: $base00;
  color: $base05;
  font-family: $monospace;
  font-size: 0.80em; /*default: $type-size-6, 코드블럭 사이즈*/
  line-height: 1.8;
  border-radius: $border-radius;

  > pre,
  pre.highlight {
    margin: 0;
    padding: 1em;
  }
}
```

❗️**주의**: `font-size`를 조절하실 때 소수점 단위로 조절하셔야 합니다. 정수 단위로 조절하시면 폰트가 어마무시하게 커집니다!

# 2️⃣ 페이지 너비 조절하기
1. `_sass/minimal-mistakes/_variables.scss`로 이동해 줍니다.

2. Grid 부분을 찾아 줍니다. 아예 하단으로 내리면 바로 위에 있어요.

```scss
/*
   Grid
   ========================================================================== */

$right-sidebar-width-narrow: 200px !default; //default: 200
$right-sidebar-width: 210px !default; //default: 300, 포스트의 글 부분 너비 조정
$right-sidebar-width-wide: 200px !default; //default: 400

```
✅ **참고**: 사실상 `$right-siderbar-width`만 조정했을 때 체감이 되는데요, 여러분도 값을 조정해보세요!<br>반드시 로컬 서버를 통해 먼저 적용을 하시고, 기본 값은 주석으로 처리하시는 것을 추천드립니다.

이상 폰트 사이즈와 페이지 너비를 조절하는 방법에 대해 포스팅을 마치겠습니다. 원하는 값으로 커스터마이징해서 쾌적한 블로그를 운영해보세요!😁