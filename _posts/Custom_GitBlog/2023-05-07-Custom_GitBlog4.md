---
title: "깃허브 블로그 커스텀하기 - 깃허브 블로그 구글에 검색 되게 하기"
excerpt: "깃허브 블로그 커스텀, 쉽게 정리했습니다. 블로그를 구글에 노출시키기"

categories:
    - Custom_Blog
tags:
    - [Blog, Git, Github, Jekyll, Brew, Ruby, rbenv]

toc: true
toc_sticky: true

date: 2023-05-07
last_modified_at: 
comments: true
---
<br>

<div align=center>


❗️커스텀 포스팅은 필자의 시행착오와 독학을 통해 작성되었습니다.❗️<br> 틀린 부분이나 좀 더 쉬운 방법이 있다면 댓글 부탁드려요. 다양한 피드백 환영입니다😃


</div>

<br><br>

안녕하세요! 이번 포스팅은 **내 블로그를 구글에 검색이 되게끔 하는 방법**입니다.<br>
어렵지 않으니 차근차근 같이 해봐요! 참고로 구글 계정이 반드시 필요합니다.


# 1️⃣  sitemap.xml 파일 업로드
* 블로그 폴더에 직접 만들어 주셔야 합니다.
* 파일의 위치는 `_config.yml`이 있는 곳에 만들어 주세요!
* 다음 코드를 복붙해 주시면 됩니다!

<script src="https://gist.github.com/0530hwi/a3027fc8c6bb7131e35c555740d1fcb7.js"></script>

* 파일을 업로드 한다음 깃허브에 `push`하는 작업이 필요합니다.
* 다음, 확인 작업으로 여러분의 링크를 주소창에 입력해 보세요!<br> `Ex) 0530hwi.github.io/sitemap.xml`

# 2️⃣ robots.txt 파일 업로드
* 블로그 폴더에 직접 만들어 주셔야 합니다.
* 마찬가지로 `_config.yml`이 있는 곳에 만들어 주세요!
* 다음 코드를 복붙해 주시면 됩니다.

<script src="https://gist.github.com/0530hwi/42b6d3f8ecd6148ca0d96de77af91cdc.js"></script>

# 3️⃣ Google Search Console 
* [Google Search Console](https://search.google.com/search-console/about)로 이동해 줍니다.

* **URL 접두어**를 선택해 주세요.
<img width="650" alt="스크린샷 2023-05-07 오후 7 04 25" src="https://user-images.githubusercontent.com/86516594/236671114-38b6539c-11d6-4911-ac2d-e2e7a8d96418.png">{: .align-center}

* 여러분의 블로그 URL을 입력합니다.

* 다음 html 파일을 다운로드 받아 주세요.
<img width="650" alt="스크린샷 2023-05-07 오후 7 09 23" src="https://user-images.githubusercontent.com/86516594/236671277-924fc1c0-b5cb-45b7-acf7-1ed91c22ee78.png">{: .align-center}

* 이전에 했던 작업처럼 **`_config.yml`에 있는 위치에 업로드**를 해주세요!

* 그런 다음 깃허브에 `push`해주세요! (깃허브에 직접 업로드 하셨다면 건너 뛰셔도 됩니다.)

* 확인 버튼을 눌러주시면 다음과 같은 화면이 나옵니다.
<img width="650" alt="스크린샷 2023-05-07 오후 7 15 18" src="https://user-images.githubusercontent.com/131740570/236671576-f778a6dd-13a8-4177-9da8-cfa6a22fd18a.png">{: .align-center}

* 다음 좌측에 있는 `sitemap.xml`을 클릭 후 `https://testerhwi.github.io/sitemap.xml`을 입력 후 **제출**을 눌러 주세요!
<img width="650" alt="스크린샷 2023-05-07 오후 7 18 17" src="https://user-images.githubusercontent.com/131740570/236671655-b4e0ef0e-2ba5-431a-99eb-a80b1e29c252.png">{: .align-center}


* 이렇게 되면 완성입니다🎉
<img width="650" alt="스크린샷 2023-05-07 오후 7 22 40" src="https://user-images.githubusercontent.com/131740570/236671921-3110ebbf-51ca-4a07-ad0c-63c528910614.png">{: .align-center}

* 반영 되기까지 시간이 소요됩니다.<br>
저는 이틀 정도 소요됐는데, 다른 분들은 최대 한달까지도 걸린다는 것 같아요🤨

