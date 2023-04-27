---
title: "초보를 위한 깃허브 블로그 만들기(4). vscode로 블로그 관리하기"
excerpt: "깃허브 블로그 관리하는 방법을 쉽게 정리했습니다"

categories:
    - Making Blog
tags:
    - [Blog, Git, Github, Jekyll, Brew, Ruby, rbenv]

toc: true
toc_sticky: true

date: 2023-04-27
last_modified_at: 
comments: true
---
<br>

❗️모든 설치과정은 **MacOS Ventura(M1 Mac)** 환경에서 진행됩니다 ❗️

<br>

안녕하세요! 깃허브 블로그는 잘 설치 되었나요? <br>
이번에는 Visual Studio Code로 깃허브 블로그를 아주 간편하게 관리하는 방법을 공유합니다.<br>

# 1️⃣ Visual Studio Code 설치하기
1. [Visual Sutdio Code Download Link](https://code.visualstudio.com/Download)로 이동해주세요!

2. **Mac**을 선택해주세요!
    * 설치하는 과정에서 특별한 건 없습니다. 쭉쭉 넘어가주세요!

3. 설치가 완료되었다면 아래와 같은 화면이 뜹니다.<br>
<img width="600" alt="스크린샷 2023-04-27 오후 6 00 49" src="https://user-images.githubusercontent.com/86516594/234813734-fad5187e-4266-4f8b-a3a8-d4cba8f680e6.png">

## 한국어 패키지 설정하기
저는 한국어 패키지가 설치가 되어있습니다. 영어 버전을 원하시는 분들은 건너뛰셔도 돼요!<br>
<img width="600" alt="스크린샷 2023-04-27 오후 6 05 54" src="https://user-images.githubusercontent.com/86516594/234815186-0a20346b-fe28-4787-bdd1-e83e61bc9d17.png"> <br>

1. 왼쪽 **확장(Shift + Command + X)**을 눌러 줍니다.
2. **Korean Language Pack**을 검색 후 설치해 줍니다.

<BR><BR>

# 2️⃣ Github와 VScode 연결하기

1. VScode를 실행합니다.

2. **열기**를 눌러 줍니다.<br>
<img width="400" alt="스크린샷 2023-04-27 오후 6 56 25" src="https://user-images.githubusercontent.com/86516594/234828505-d2464273-629d-4133-8309-e3a9fd814355.png">

3. 전에 만들어 두었던 깃허브 폴더를 선택해 주세요!
<img width="400" alt="스크린샷 2023-04-27 오후 6 58 18" src="https://user-images.githubusercontent.com/86516594/234828987-a6b4e271-0447-46cb-8a04-754ce14dfc25.png">

4. `control + shift + ₩`를 눌러 터미널을 열어 주세요!
<img width="400" alt="스크린샷 2023-04-27 오후 6 27 56" src="https://user-images.githubusercontent.com/86516594/234829475-0ecdb1ee-b8a8-426d-b436-37866c5558a2.png">

5. github에 push가 잘 되는지 확인해 볼까요?
    ```bash
    git add *
    git commit -m "Update Blog" #원하는 커밋 메세지 작성
    git push origin main
    ```
* ❗️이 과정에서 계정과 비밀번호가 필요할 수 있습니다. 비밀번호에는 반드시 **토큰**을 입력해주셔야 합니다. <br>
[토큰 발급 바로가기](https://0530hwi.github.io/making%20blog/Making_GitBlog3/#%EF%B8%8F중요%EF%B8%8F-비밀번호에-토큰을-입력해야-해요)

## ❗️주의: 계정 일치 확인하기
* `git remote -v` 명령어를 통해 여러분의 계정과 일치하는지 확인해 주세요!
* 만약 일치하지 않는다면 다음 과정을 진행하면 됩니다.
    ```bash
    git remote add origin (저장소 주소) #깃허브 블로그 저장소
    git remote -v
    ```