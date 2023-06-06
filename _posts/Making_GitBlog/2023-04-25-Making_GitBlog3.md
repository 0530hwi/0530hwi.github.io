---
title: "초보를 위한 깃허브 블로그 만들기(3). github.io 만들기"
excerpt: "깃허브 블로그 만들기, 정말 쉽게 정리했습니다. (에러 시 문제 해결 방법)"

categories:
    - Making_Blog
tags:
    - [Blog, Git, Github, Jekyll, Brew, Ruby, rbenv]

toc: true
toc_sticky: true

date: 2023-04-25
last_modified_at: 
comments: true
---
<br>

❗️모든 설치과정은 **MacOS Ventura(M1 Mac)** 환경에서 진행됩니다 ❗️

<br>

**정말 거의 다 왔어요! 이제는 본격적으로 git을 만져봅시다!**

# git 패키지 설치하기
* 우리는 앞서 Homebrew를 설치했기 때문에<br>정말 간단하게 MacOS에 `git`을 설치할 수 있어요.

```bash
brew install git

git -v # 설치된 버전 확인하기
```
<br><br><br>
# Github 블로그 만들기
자, 이제 본격적으로 블로그를 만들어 봐요!

## 1️⃣ 1단계: 저장소 만들기
1. 새로운 저장소를 만들어야 해요!
<img width="600" alt="스크린샷 2023-04-25 오후 2 35 47" src="https://user-images.githubusercontent.com/131740570/234184696-2fc079e5-69db-4e01-b47d-76bad4d4466e.png">{: .align-center}
    * Repositories로 이동 후에 New를 눌러주세요!<br>


2. Repository name과 Add a README file을 설정해 주세요!
<img width="600" alt="스크린샷 2023-04-25 오후 2 39 35" src="https://user-images.githubusercontent.com/131740570/234185028-a0c3e56f-ab16-4f3f-ae65-ea874892a145.png">{: .align-center}

## 2️⃣ 2단계: 로컬에 clone하기

* ❓ '로컬에 clone 하기가 뭐야'라고 생각할 수 있어요
    - 사용자 컴퓨터에 깃허브 저장소를 가지고 오는 의미랍니다.

1. 저장소로 이동 후에 저장소 링크를 복사해 줄게요
<img width="600" alt="스크린샷 2023-04-25 오후 2 49 28" src="https://user-images.githubusercontent.com/131740570/234185785-d6d1c198-4d25-412e-8615-3c4acb711385.png">{: .align-center}

2. 다음 바탕화면에 폴더를 하나 만들어 줄게요
    - 저는 `github_blog`라고 만들었습니다.

3. 터미널로 이동할게요. 코드 참고해 주세요!
```bash
cd Desktop/github_blog #github_blog 폴더로 이동하기.
git clone 아까 복사했던 주소 #
```
* ✅ **참고**: `cd desktop`을 하는 이유는 MacOS 바탕화면의 경로이기 때문이에요.




## 3️⃣ 3단계: minimal-mistakes 가져오기
1. [minimal-mistakes](https://github.com/mmistakes/minimal-mistakes)로 이동합니다!

2. 경로 이동하기<br>
```bash
cd desktop
cd github_blog
cd testerHWI.github.io # clone한 경로로 이동해야 해요!
```
3. minimal-mistakes clone 하기<Br>
```bash
git clone https://github.com/mmistakes/minimal-mistakes.git
```
4. 클론이 완료되면 폴더 옮겨주기
<img width="600" alt="스크린샷 2023-04-25 오후 5 09 57" src="https://user-images.githubusercontent.com/131740570/234222143-db721a77-e04c-47c3-a106-adefa455ac70.png">{: .align-center}

* 저 같은 경우 모든 파일을 **command + a**로 전채 선택 후에, **option + command + x**로 옮겨줍니다!
    - 윈도우에서 **잘라내기**라고 생각하면 편해요!

## 4️⃣ 4단계: 로컬 서버 열어보기!
✅ **참고**: 현재 경로는 `testerHWI.github.io` 입니다!

```bash
bundle install
gem install jekyll bundler

# you don't have to write permission 에러가 난다면 다음 코드를 입력해주세요
source ~/.zshrc
gem install jekyll bundler # 에러 시에 다시 입력하는 거예요!
```

```bash
# 다음 코드는 로컬에서 작업한 파일을 깃에 푸시 하는 과정이에요!
# 로컬 -> 깃허브로 파일을 옮기는 작업입니다.
git add * 
git commit -m "Making Blog" # 커밋 메시지 작성
git push origin main 
# 이 과정에서 아이디랑 비밀번호를 입력해야 해요.
# !중요! 챕터를 참고해 주세요.
```


이제 마지막 단계입니다!


`bundle exec jekyll serve`로 서버를 열어줍니다!<br>
✅ **참고**: 위의 코드를 입력 후에 `.jekyll-cache`, `Gemfile.lock`파일이 생성이 되어야 합니다.

이제 터미널에 표시된 **Server Address**를 인터넷 주소창에 입력해 보세요! <br>
여러분의 멋진 블로그가 만들어졌을 거예요!😄<br><br>

---
# ❗️중요❗️: 비밀번호에 토큰을 입력해야 해요
* `clone`, `push` 등 처음 작업하시는 분들은 토큰을 발급받아야 합니다.
## 토큰 발급받기

1. setting 누르기
<img width="248" height="350" alt="스크린샷 2023-04-25 오후 3 43 04" src="https://user-images.githubusercontent.com/131740570/234195172-ee3a83b3-e79e-45dc-b23e-90f51e86e4ff.png">{: .align-center}

2. **가장 아래에 있는** Developer setting을 눌러주세요
<img width="248" alt="스크린샷 2023-04-25 오후 3 45 18" src="https://user-images.githubusercontent.com/131740570/234195758-a93ea1c1-bf5f-4c33-9a42-379b1e8a0fd5.png">{: .align-center}

3. Tokens -> Generate new token을 눌러 주세요!
<img width="600" alt="스크린샷 2023-04-25 오후 4 26 14" src="https://user-images.githubusercontent.com/131740570/234204784-64adbed5-396a-47e1-a3f3-1744d0bd5f5f.png">{: .align-center}

4. Note와,Expiration(만료 기간), Select scopes를 선택해 주세요!
<img width="600" alt="스크린샷 2023-04-25 오후 4 28 30" src="https://user-images.githubusercontent.com/131740570/234205304-f59e0250-96a7-4eb7-9198-09c04787ab24.png">{: .align-center}

    저 같은 경우, git push, clone 등의 작업만 하기 위해 `repo`만 선택했어요!<Br>
    하단에 Generate token을 눌러 주세요

5. 토큰을 복사해 안전한 곳에 백업해놓으면 끝!
<img width="600" alt="스크린샷 2023-04-25 오후 4 31 10" src="https://user-images.githubusercontent.com/131740570/234205978-8c822f8e-3088-4084-8df1-019b4cfcf58a.png">{: .align-center}

* **앞으로 터미널에 깃 작업 관련 비밀번호를 입력할 때는 토큰을 입력하면 됩니다.**

