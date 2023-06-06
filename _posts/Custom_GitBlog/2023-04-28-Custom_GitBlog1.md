---
title: "깃허브 블로그 커스텀하기 - 테마 설정, 기본적인 설정 등"
excerpt: "깃허브 블로그 커스텀, 쉽게 정리했습니다. '_config_yml'파일 정복하기"

categories:
    - Custom_Blog
tags:
    - [Blog, Git, Github, Jekyll, Brew, Ruby, rbenv]

toc: true
toc_sticky: true

date: 2023-04-28
last_modified_at: 
comments: true
---
<br>

<div align=center>


❗️커스텀 포스팅은 필자의 시행착오와 독학을 통해 작성되었습니다.❗️<br> 틀린 부분이나 좀 더 쉬운 방법이 있다면 댓글 부탁드려요. 다양한 피드백 환영입니다😃


</div>

<BR><BR>

# 1️⃣ _config.yml 파일 파헤치기
* 가장 기본적인 설정을 하는 파일이에요.
* 파일의 위치는 **블로그 폴더의 루트 폴더**입니다.

## Site setting 부분
* 따로 주석을 달아놓을게요, 제 블로그와 비교해보세요! 


```bash
# Site Settings
locale                   : "ko-KR" # 블로그의 기본 언어를 설정합니다. ex)영어: en-US
title                    : "쉽게 정리한 블로그" # 사이트 탭에 나타나는 블로그 이름입니다.
title_separator          : "-"
subtitle                 : "Let's do our best!" # 블로그 제목 아래에 표시되는 부분입니다.
name                     : "Byeong hwi" # 블로그 가장 하단 부분 @2023 {name} Powered by 부분
description              : "" # 어느 부분인지 모르겠네요
url                      : "https://0530hwi.github.io" # 블로그의 주소를 나타냅니다. 여러분의 주소를 입력해주세요.
baseurl                  : # 블로그 접속 오류가 발생(fallback)했을 때 연결되는 서브 주소입니다.
repository               : "0530hwi/0530hwi.github.io" # 깃허브 저장소입니다. 
teaser                   : # fallback의 경우 연결되는 이미지입니다. 경로는  "/assets/images/.png" 
logo                     : "/assets/images/notebook.png" # 제목 옆에 있는 로고 이미지입니다. 
masthead_title           : "쉽게 정리한 블로그: An easy notebook" # 블로그 제목을 나타냅니다. 로고 옆에 있는 제목이에요
```
✅ **참고**: 이미지 경로는 `/assets/`폴더를 활용해야 합니다. `images` 폴더가 없이 그대로 사용하셔도 무방합니다.<br>
사진 파일은 png, jpg, jpeg 등 모두 상관없습니다.

## Site Author

* 이 부분은 블로그 왼쪽 부분의 영역입니다.


```bash
# Site Author
author:
  name             : "Byeong hwi" # 블로그 왼쪽에 나타나는 이름입니다.
  avatar           : "/assets/images/bear.png" # 이름 위 사진입니다. 경로는 /assets/images/.png로 설정 가능합니다.
  bio              : "어려운 내용, 쉽게 정리해보겠습니다 :)" # 소개란입니다. 
  location         : "Republic of Korea" # 위치를 나타내줍니다. 
  email            :
  links:
    - label: "Email"
      icon: "fas fa-fw fa-envelope-square"
      url: mailto:0530hwi@gmail.com #mailto:를 입력해야 메일 쓰기로 바로 연결됩니다.
    - label: "Website"
      icon: "fas fa-fw fa-link"
      # url: "https://your-website.com" # 이 부분을 주석처리하면 블로그에서 생략됩니다.
    - label: "Twitter"
      icon: "fab fa-fw fa-twitter-square"
      # url: "https://twitter.com/" # 이 부분을 주석처리하면 블로그에서 생략됩니다.
    - label: "Facebook"
      icon: "fab fa-fw fa-facebook-square"
      # url: "https://facebook.com/" # 이 부분을 주석처리하면 블로그에서 생략됩니다.
    - label: "GitHub"
      icon: "fab fa-fw fa-github"
      url: "https://github.com/0530hwi"
    - label: "Instagram"
      icon: "fab fa-fw fa-instagram"
      url: "https://instagram.com/hwiping_"
```

## Site Footer
* 다음은 `Site Footer` 영역입니다.
* 이 영역은 블로그 하단 부분에 해당됩니다.
* 이 부분은 블로그 프로필(왼쪽 영역)과 동일한 부분이 많아서 저같은 경우 **모두 주석 처리**했습니다.

<img width="425" alt="스크린샷 2023-04-28 오후 6 36 28" src="https://user-images.githubusercontent.com/86516594/235113455-312006d5-09a1-47c3-ad90-53eb48d49f26.png">{: .align-center}

* 개인적으로 저는 빨간 영역의 부분을 지우고 싶더라구요! <br> 저와 같이 하시려면 다음을 참고해주세요!
### FOLLOW: FEED 지우기
1. 먼저 폴더 `_includes`로 이동합니다.
2. `footer_html`
3. 아래의 코드 부분을 **제외한 나머지 부분을 모두 주석 처리**
<img width="610" alt="스크린샷 2023-04-28 오후 6 57 03" src="https://user-images.githubusercontent.com/86516594/235117681-bed715d0-6f85-48bc-9711-15431c86de61.png">{: .align-center}



```bash
<div class="page__footer-copyright">&copy; {{ site.time | date: '%Y' }} {{ site.name | default: site.title }}. {{ site.data.ui-text[site.locale].powered_by | default: "Powered by" }} <a href="https://jekyllrb.com" rel="nofollow">Jekyll</a> &amp; <a href="https://mademistakes.com/work/minimal-mistakes-jekyll-theme/" rel="nofollow">Minimal Mistakes</a>.</div>
```


✅ **참고**: html 블록 주석처리는 vscode에서 `shift + option + a` 간편하게 할 수 있습니다. <br> 위의 코드는 Powered by ~ 부분입니다. 이 부분을 주석 처리하면 저작권 문제가 발생할 수 있습니다.


