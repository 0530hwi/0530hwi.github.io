var store = [{
        "title": "초보를 위한 깃허브 블로그 만들기(1). Homebrew 설치",
        "excerpt":"    ❗️모든 설치과정은 MacOS Ventura(M1 Mac) 환경에서 진행됩니다 ❗️       HomeBrew 설치하기     HomeBrew란?            HomeBrew는 MacOS의 패키지 관리자예요       Apple, Linux에서 제공하지 않는 패키지를 관리할 수 있어요.           1️⃣ 1단계  자, 그럼 이제 설치해봅시다.     HomeBrew 바로가기   홈페이지의 안내에 따라 설치해도 되고, 터미널에 다음 명령어를 입력해도 돼요.   ✅ 참고: 터미널은 Command + Spacebar 실행 후, Terminal 입력 후에 바로 실행할 수 있어요!   1 /bin/bash -c \"$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)\"   2️⃣ 2단계  설치가 완료되었다면, brew help, brew -v 같은 명령어를 통해 HomeBrew가 잘 작동되는지 확인해 봐요.      brew help를 입력했을 때      정상적으로 작동됩니다!   자, 이제 터미널을 끄고 재실행해 봅시다.       에러 발생 zsh: command not found: brew     터미널을 재시작한 후 brew help를 입력했지만 다음과 같은 에러가 발생했습니다!      1️⃣ 해결 1단계  이럴 때는 터미널에 다음과 같이 입력해 주면 돼요   1 eval $(/opt/homebrew/bin/brew shellenv)  ✅ 참고: eval 명령어는 “$뒤 경로에 대한 인자를 받아 현재 터미널에서 실행하라”라는 의미예요.   그런데, 터미널을 재시작할 때마다 저런 명령어를 입력하는 것은 너무 귀찮아요  그래서 우리는 다음과 같은 작업을 해줘야 돼요.   2️⃣ 해결 2단계      vi 편집기 진입     1 vi ~/.zshrc          ✅ 참고: echo $SHELL을 통해 현재 사용되는 편집기가 무엇인지 알아야 해요. 저는 zsh를 사용하고 있지만, bash의 경우에는 vi ~/.bashrc가 됩니다.            알파벳 “i”를 눌러 insert 모드에 진입합니다.  모드가 바뀐 것은 터미널 하단에서 확인할 수 있어요.       다음 명령어를 그대로 추가해 줍니다.     1 eval $(/opt/homebrew/bin/brew shellenv)                 ESC를 누르고 :wq를 입력한 후에 빠져나오면 돼요            ✅ 참고: :wq는 저장 후 종료입니다. 이외에 :q는 종료, :!q는 강제 종료 등 여러 가지 명령어가 있어요           터미널을 재부팅 후 brew help를 입력하면 brew가 정상적으로 실행됩니다!   Homebrew 삭제하기  혹시라도 에러가 발생한다면, Homebrew를 삭제한 후 다시 설치하는 것을 권장합니다.      터미널에 입력해 주세요.     1 /bin/bash -c \"$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/uninstall.sh)\"          입력 후에 Y를 입력해 삭제해 주세요!       다음 /usr/local 폴더에서 HomeBrew 폴더를 삭제해 줍니다.     1 rm -rf Homebrew/           Homebrew를 설치했다면 절반은 성공입니다. 다음 파트에서 뵙겠습니다😄  ","categories": ["Making-Blog"],
        "tags": ["Blog","Git","Github","Jekyll","Brew","Ruby","rbenv"],
        "url": "/making-blog/Making_GitBlog1/",
        "teaser": null
      },{
        "title": "초보를 위한 깃허브 블로그 만들기(2). rbenv 패키지 설치",
        "excerpt":"    ❗️모든 설치과정은 MacOS Ventura(M1 Mac) 환경에서 진행됩니다 ❗️       rbenv 패키지 설치하기     rbenv란?            MacOS는 기본적으로 ruby가 설치되어 있습니다.   따라서 ruby는 OS의 영향을 받고, 다양한 버전을 독립적으로 관리하기가 쉽지 않습니다.       이럴 때 독립적으로 ruby의 버전 관리를 도와주는 것이 rbenv입니다.           1️⃣ 1단계  자, 그럼 rbenv 패키지를 설치해봅시다.     rbenv 설치 바로가기   홈페이지에는 rbenv에 대한 정보가 담겨 있어요.  홈페이지를 참고해서 설치해도 되고, 저를 따라오셔도 됩니다.   ❗️못할 것 같다는 생각은 잊어버리고, 터미널을 켜줍니다! 그리고 다음 명령어들을 쭉 입력해주세요   1 2 brew install rbenv ruby-build  rbenv verions # 설치가 완료되면 버전을 확인해보기     위와 같은 이미지가 뜬다면 성공입니다.  아까 설명한 OS의 ruby를 사용하고 있다는 말이에요!   2️⃣ 2단계  1 2 3 4 ruby install -l #설치가 가능한 ruby 버전을 확인해보기 ruby install 3.2.2 # 3.2.2 버전 설치하기 rbenv global 3.2.2 # 3.2.2 버전으로 설정하기 rbenv versions      위와 같은 이미지가 뜬다면 성공입니다.   ❗️필독❗️ 에러: BUILD FAILED (macOS 13.0.1 using ruby-build 20230330) 대처          ruby install 3.2.2를 입력하고 설치하는 과정에서   BUILD FAILED (macOS 13.0.1 using ruby-build 20230330) 이라는 에러가 발생할 수 있어요.       이럴 때는 다음과 같이 터미널에 입력해 주세요.      1 2 3 brew install readline openssl # 설치가 끝나면 차례대로 입력해 주세요 brew install libyaml           오류가 발생하는 이유를 여러가지 의심해 볼 수 있어요            ruby-build를 설치하는 과정에서 homebrew의 패키지인 readline openssl, libyaml 를 사용한다.       brew를 처음하는 사용자는 위의 패키지가 설치되어 있지 않다.           ✅ 참고: BUILD FAILED 에러 발생 이유   3️⃣ 3단계     지난 번 homebrew 에러 발생과 마찬가지로 vi ~/.zshrc에 진입해 경로를 설정해줘야 해요.      vi 편집기 진입     1 vi ~/.zshrc                알파벳 “i”를 눌러 insert 모드에 진입합니다.  모드가 바뀐 것은 터미널 하단에서 확인할 수 있어요.       다음 명령어를 그대로 추가해 줍니다.     1 2 3 [[ -d ~/.rbenv  ]] &amp;&amp; \\      export PATH=\"$HOME/.rbenv/bin:$PATH\" &amp;&amp; \\      eval \"$(rbenv init -)\"           ESC를 누르고 :wq를 입력한 후에 빠져나오면 돼요            ✅ 참고: :wq는 저장 후 종료입니다. 이외에 :q는 종료, :!q는 강제 종료 등 여러 가지 명령어가 있어요           적용까지 해주기     1 source ~/.zshrc          터미널을 재실행해도 system ruby가 아닌 독립적인 ruby 버전을 적용합니다.       저는 BUILD FAILED 에러 해결해 보겠다고 4~5시간 구글링했는데,  여러분은 꼭 이 글을 통해 쉽게 해결했으면 좋겠습니다! 다음 파트에서 뵙겠습니다😅  ","categories": ["Making-Blog"],
        "tags": ["Blog","Git","Github","Jekyll","Brew","Ruby","rbenv"],
        "url": "/making-blog/Making_GitBlog2/",
        "teaser": null
      },{
        "title": "초보를 위한 깃허브 블로그 만들기(3). github.io 만들기",
        "excerpt":"    ❗️모든 설치과정은 MacOS Ventura(M1 Mac) 환경에서 진행됩니다 ❗️       정말 거의 다 왔어요! 이제는 본격적으로 git을 만져봅시다!   git 패키지 설치하기     우리는 앞서 Homebrew를 설치했기 때문에 정말 간단하게 MacOS에 git을 설치할 수 있어요.   1 2 3 brew install git  git -v # 설치된 버전 확인하기       Github 블로그 만들기  자, 이제 본격적으로 블로그를 만들어 봐요!   1️⃣ 1단계: 저장소 만들기     새로운 저장소를 만들어야 해요!             Repositories로 이동 후에 New를 눌러주세요!            Repository name과 Add a README file을 설정해 주세요!    2️⃣ 2단계: 로컬에 clone하기      ❓ ‘로컬에 clone 하기가 뭐야’라고 생각할 수 있어요            사용자 컴퓨터에 깃허브 저장소를 가지고 오는 의미랍니다.                   저장소로 이동 후에 저장소 링크를 복사해 줄게요        다음 바탕화면에 폴더를 하나 만들어 줄게요            저는 github_blog라고 만들었습니다.           터미널로 이동할게요. 코드 참고해 주세요!     1 2 cd Desktop/github_blog #github_blog 폴더로 이동하기. git clone 아까 복사했던 주소 #                 ✅ 참고: cd desktop을 하는 이유는 MacOS 바탕화면의 경로이기 때문이에요.           3️⃣ 3단계: minimal-mistakes 가져오기          minimal-mistakes로 이동합니다!       경로 이동하기      1 2 3 cd desktop cd github_blog cd testerHWI.github.io # clone한 경로로 이동해야 해요!           minimal-mistakes clone 하기      1 git clone https://github.com/mmistakes/minimal-mistakes.git           클론이 완료되면 폴더 옮겨주기       저 같은 경우 모든 파일을 command + a로 전채 선택 후에, option + command + x로 옮겨줍니다!            윈도우에서 잘라내기라고 생각하면 편해요!           4️⃣ 4단계: 로컬 서버 열어보기!  ✅ 참고: 현재 경로는 testerHWI.github.io 입니다!   1 2 3 4 5 6 bundle install gem install jekyll bundler  # you don't have to write permission 에러가 난다면 다음 코드를 입력해주세요 source ~/.zshrc gem install jekyll bundler # 에러 시에 다시 입력하는 거예요!   1 2 3 4 5 6 7 # 다음 코드는 로컬에서 작업한 파일을 깃에 푸시 하는 과정이에요! # 로컬 -&gt; 깃허브로 파일을 옮기는 작업입니다. git add *  git commit -m \"Making Blog\" # 커밋 메시지 작성 git push origin main  # 이 과정에서 아이디랑 비밀번호를 입력해야 해요. # !중요! 챕터를 참고해 주세요.   이제 마지막 단계입니다!   bundle exec jekyll serve로 서버를 열어줍니다!  ✅ 참고: 위의 코드를 입력 후에 .jekyll-cache, Gemfile.lock파일이 생성이 되어야 합니다.   이제 터미널에 표시된 Server Address를 인터넷 주소창에 입력해 보세요!   여러분의 멋진 블로그가 만들어졌을 거예요!😄      ❗️중요❗️: 비밀번호에 토큰을 입력해야 해요     clone, push 등 처음 작업하시는 분들은 토큰을 발급받아야 합니다.     토큰 발급받기               setting 누르기             가장 아래에 있는 Developer setting을 눌러주세요             Tokens -&gt; Generate new token을 눌러 주세요!             Note와,Expiration(만료 기간), Select scopes를 선택해 주세요!        저 같은 경우, git push, clone 등의 작업만 하기 위해 repo만 선택했어요!   하단에 Generate token을 눌러 주세요            토큰을 복사해 안전한 곳에 백업해놓으면 끝!           앞으로 터미널에 깃 작업 관련 비밀번호를 입력할 때는 토큰을 입력하면 됩니다.   ","categories": ["Making-Blog"],
        "tags": ["Blog","Git","Github","Jekyll","Brew","Ruby","rbenv"],
        "url": "/making-blog/Making_GitBlog3/",
        "teaser": null
      },{
        "title": "초보를 위한 깃허브 블로그 만들기(4). vscode로 블로그 관리하기",
        "excerpt":"    ❗️모든 설치 과정은 MacOS Ventura(M1 Mac) 환경에서 진행됩니다 ❗️       안녕하세요! 깃허브 블로그는 잘 설치되었나요?   이번에는 Visual Studio Code로 깃허브 블로그를 아주 간편하게 관리하는 방법을 공유합니다.    1️⃣ Visual Studio Code 설치하기          Visual Sutdio Code Download Link로 이동해 주세요!       Mac을 선택해 주세요!            설치하는 과정에서 특별한 건 없습니다. 쭉쭉 넘어가 주세요!           설치가 완료되었다면 아래와 같은 화면이 뜹니다.    한국어 패키지 설정하기     저는 한국어 패키지가 설치가 되어있습니다. 영어 버전을 원하시는 분들은 건너뛰셔도 돼요!       왼쪽 확장(Shift + Command + X)을 눌러 줍니다.   Korean Language Pack을 검색 후 설치해 줍니다.        2️⃣ Github와 VScode 연결하기           VScode를 실행합니다.            열기를 눌러 줍니다.             전에 만들어 두었던 깃허브 폴더를 선택해 주세요!             control + shift + ₩를 눌러 터미널을 열어 주세요!        github에 push가 잘 되는지 확인해 볼까요?     1 2 3  git add *  git commit -m \"Update Blog\" #원하는 커밋 메세지 작성  git push origin main                 ❗️이 과정에서 계정과 비밀번호가 필요할 수 있습니다. 비밀번호에는 반드시 토큰을 입력해 주셔야 합니다.   토큰 발급 바로가기           이제 vscode 터미널로도 로컬 서버를 열 수 있습니다!  bundle exec jekyll serve를 vscode 터미널에 입력 후, 여러분의 멋진 블로그를 확인해 보세요!    ✅ 참고:  저는 127.0.0.1:4000 이라는 주소로 로컬 서버를 들어갈 수 있는데요.  이 서버는 깃에 푸시하기 전에 최종적으로 검토해보는 단계입니다.  따라서, 여러분의 변경사항을 로컬 서버를 통해 먼저 확인할 수 있는 장점이 있습니다.   또 깃에 업로드 후 블로그가 업데이트 되는 딜레이 시간(약 3분)이 있습니다.  로컬 서버를 이용하면 이러한 딜레이를 상쇄할 수 있기 때문에 로컬 서버를 이용하는 것이 블로그 작업에 매우 효율적입니다.     ❗️주의: 계정 일치 확인하기     git remote -v 명령어를 통해 여러분의 계정과 일치하는지 확인해 주세요!   만약 일치하지 않는다면 다음 과정을 진행하면 됩니다.     1 2   git remote add origin (저장소 주소) #깃허브 블로그 저장소   git remote -v           지금까지의 과정 총정리     Mac에서 여러가지 패키지를 편하게 관리하기 위해 Homebrew를 설치했다   ruby를 독립적으로 이용하기 위해 rbenv패키지를 설치했다   로컬에서 깃허브 레파지토리를 관리하기 위해 git을 설치했다   루비 개발 환경을 갖추기 위해 gem install jekyll bundler를 통해 설치했다.   서버를 구동하기 위해 bundle exec jekyll serve를 입력했다.     🎉이상으로 깃허브 블로그 만들기 과정을 종료합니다! 깃허브 블로그 커스텀에서 뵙겠습니다!  ","categories": ["Making-Blog"],
        "tags": ["Blog","Git","Github","Jekyll","Brew","Ruby","rbenv"],
        "url": "/making-blog/Making_GitBlog4/",
        "teaser": null
      },{
        "title": "깃허브 블로그 커스텀하기 - 테마 설정, 기본적인 설정 등",
        "excerpt":"       ❗️커스텀 포스팅은 필자의 시행착오와 독학을 통해 작성되었습니다.❗️  틀린 부분이나 좀 더 쉬운 방법이 있다면 댓글 부탁드려요. 다양한 피드백 환영입니다😃          1️⃣ _config.yml 파일 파헤치기     가장 기본적인 설정을 하는 파일이에요.   파일의 위치는 블로그 폴더의 루트 폴더입니다.   Site setting 부분     따로 주석을 달아놓을게요, 제 블로그와 비교해보세요!   1 2 3 4 5 6 7 8 9 10 11 12 13 # Site Settings locale                   : \"ko-KR\" # 블로그의 기본 언어를 설정합니다. ex)영어: en-US title                    : \"쉽게 정리한 블로그\" # 사이트 탭에 나타나는 블로그 이름입니다. title_separator          : \"-\" subtitle                 : \"Let's do our best!\" # 블로그 제목 아래에 표시되는 부분입니다. name                     : \"Byeong hwi\" # 블로그 가장 하단 부분 @2023 {name} Powered by 부분 description              : \"\" # 어느 부분인지 모르겠네요 url                      : \"https://0530hwi.github.io\" # 블로그의 주소를 나타냅니다. 여러분의 주소를 입력해주세요. baseurl                  : # 블로그 접속 오류가 발생(fallback)했을 때 연결되는 서브 주소입니다. repository               : \"0530hwi/0530hwi.github.io\" # 깃허브 저장소입니다.  teaser                   : # fallback의 경우 연결되는 이미지입니다. 경로는  \"/assets/images/.png\"  logo                     : \"/assets/images/notebook.png\" # 제목 옆에 있는 로고 이미지입니다.  masthead_title           : \"쉽게 정리한 블로그: An easy notebook\" # 블로그 제목을 나타냅니다. 로고 옆에 있는 제목이에요  ✅ 참고: 이미지 경로는 /assets/폴더를 활용해야 합니다. images 폴더가 없이 그대로 사용하셔도 무방합니다.  사진 파일은 png, jpg, jpeg 등 모두 상관없습니다.   Site Author      이 부분은 블로그 왼쪽 부분의 영역입니다.   1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 # Site Author author:   name             : \"Byeong hwi\" # 블로그 왼쪽에 나타나는 이름입니다.   avatar           : \"/assets/images/bear.png\" # 이름 위 사진입니다. 경로는 /assets/images/.png로 설정 가능합니다.   bio              : \"어려운 내용, 쉽게 정리해보겠습니다 :)\" # 소개란입니다.    location         : \"Republic of Korea\" # 위치를 나타내줍니다.    email            :   links:     - label: \"Email\"       icon: \"fas fa-fw fa-envelope-square\"       url: mailto:0530hwi@gmail.com #mailto:를 입력해야 메일 쓰기로 바로 연결됩니다.     - label: \"Website\"       icon: \"fas fa-fw fa-link\"       # url: \"https://your-website.com\" # 이 부분을 주석처리하면 블로그에서 생략됩니다.     - label: \"Twitter\"       icon: \"fab fa-fw fa-twitter-square\"       # url: \"https://twitter.com/\" # 이 부분을 주석처리하면 블로그에서 생략됩니다.     - label: \"Facebook\"       icon: \"fab fa-fw fa-facebook-square\"       # url: \"https://facebook.com/\" # 이 부분을 주석처리하면 블로그에서 생략됩니다.     - label: \"GitHub\"       icon: \"fab fa-fw fa-github\"       url: \"https://github.com/0530hwi\"     - label: \"Instagram\"       icon: \"fab fa-fw fa-instagram\"       url: \"https://instagram.com/hwiping_\"   Site Footer     다음은 Site Footer 영역입니다.   이 영역은 블로그 하단 부분에 해당됩니다.   이 부분은 블로그 프로필(왼쪽 영역)과 동일한 부분이 많아서 저같은 경우 모두 주석 처리했습니다.         개인적으로 저는 빨간 영역의 부분을 지우고 싶더라구요!   저와 같이 하시려면 다음을 참고해주세요!     FOLLOW: FEED 지우기             먼저 폴더 _includes로 이동합니다.       footer_html       아래의 코드 부분을 제외한 나머지 부분을 모두 주석 처리            1 &lt;div class=\"page__footer-copyright\"&gt;&amp;copy; 2023 Byeong hwi. Powered by &lt;a href=\"https://jekyllrb.com\" rel=\"nofollow\"&gt;Jekyll&lt;/a&gt; &amp;amp; &lt;a href=\"https://mademistakes.com/work/minimal-mistakes-jekyll-theme/\" rel=\"nofollow\"&gt;Minimal Mistakes&lt;/a&gt;.&lt;/div&gt;   ✅ 참고: html 블록 주석처리는 vscode에서 shift + option + a 간편하게 할 수 있습니다.   위의 코드는 Powered by ~ 부분입니다. 이 부분을 주석 처리하면 저작권 문제가 발생할 수 있습니다.   ","categories": ["Custom-Blog"],
        "tags": ["Blog","Git","Github","Jekyll","Brew","Ruby","rbenv"],
        "url": "/custom-blog/Custom_GitBlog1/",
        "teaser": null
      },{
        "title": "깃허브 블로그 커스텀하기 - 블로그 폰트 변경하기",
        "excerpt":"       ❗️커스텀 포스팅은 필자의 시행착오와 독학을 통해 작성되었습니다.❗️  틀린 부분이나 좀 더 쉬운 방법이 있다면 댓글 부탁드려요. 다양한 피드백 환영입니다😃          폰트 사이트  제가 사용하는 폰트 사이트입니다!     눈누   구글 폰트   ❗️주의: 위 두페이지는 무료 상업용 폰트를 제공하므로, 본인의 웹페이지에서 폰트를 사용해도 됩니다.  하지만 폰트를 사용할 때에는 다시한번 라이센스를 확인하시기 바랍니다. (저작권 문제가 발생할 수 있습니다.)   폰트 변경하는 방법  ✅ 참고: 블로그의 폰트를 변경하는 방법은 여러가지가 있습니다.     웹폰트의 url을 이용하여 변경하는 방법   본인의 블로그 파일에 폰트를 설치해 변경하는 방법   먼저, 웹폰트를 사용하는 방법에 대해 포스팅을 하겠습니다   1️⃣ 웹폰트 사용하기      assets 폴더 -&gt; css 폴더 -&gt; main.scss 파일로 이동해 줍니다.   눈누 사이트로 이동해 원하는 폰트를 선택합니다.        “웹폰트로 사용” 부분을 복사(command(ctrl) + c)해 줍니다.             그런 다음 main.scss에 붙여넣기!        _sass 폴더 -&gt; minimal-mistakes 폴더 -&gt; _variables.scss 파일로 이동해 줍니다.       sans-serif 부분에 아까 복사했던 font-family의 내용을 적어주면 됩니다.   ✅ 참고: -apple-system을 적어줘야 해요! 애플이 제공하는 앱에서도 해당하는 폰트로 변경됩니다.   ▶️ 참고 사항: 구글 폰트 이용 시          먼저 구글 폰트 사이트로 이동합니다.             Show only variable fonts의 박스를 클릭하고 원하는 폰트를 클릭합니다.            사진과 같이 보이는 버튼을 클릭합니다.             우측 상단의 버튼을 클릭합니다.             url만 복사 후 아까 설명드렸던 과정을 진행하시면 돼요!             저는 다음과 같이 설정하였습니다. 예시로 보시면 편할 것 같아요!       1 2 3 4 @font-face {  font-family: 'noto-sans';  src: url('//fonts.googleapis.com/earlyaccess/notosanskr.css');  }           2️⃣  직접 설치하기     저는 assets 폴더에 font라는 폴더를 새로 생성했어요   이 폴더 안에는 폰트 파일을 넣어주시면 됩니다.            assets폴더에 있는 main.scss파일에 추가해주시면 됩니다.           1 2 3 4 5 6 @font-face {     font-family: 'RobotoMono-Regular';     src: url('/assets/font/RobotoMono-Regular.ttf') format('truetype');     font-weight: normal;     font-style: normal; }   ❗️주의     font-family는 임의적으로 설정할 수 있습니다.   url부분은 폰트 파일의 경로(저의 경우 assets폴더에 font폴더를 새로 생성)를 입력해주시면 됩니다.            폴더명을 다르게 할 경우 본인의 폴더명을 맞춰 주세요!           format의 경우 파일명에 따라 다릅니다. 반드시 맞춰 주세요!            ttf: format('truetype')       otf: format('opentype')       wotf: format('wotf')       wotf2: format('wotf2')              위에 했던 것과 마찬가지로 _sass/_variables.scss로 이동 후에 본인이 지정한 font-family 이름을 입력해 주세요!            저는 위에서 RobotoMono-Regular로 지정했으니 다음과 같겠네요.           저의 예시는 다음과 같습니다.      1 2 3 4 5 /* system typefaces 폰트 적용하기 */ $serif: Georgia, Times, serif !default; $sans-serif: \"noto-sans\", \"noto-sans\", -apple-system, BlinkMacSystemFont, \"Roboto\", \"Segoe UI\",   \"Helvetica Neue\", \"Lucida Grande\", Arial, sans-serif !default; $monospace: \"RobotoMono-Regular\", \"RobotoMono-Regular\", -apple-system, Monaco, Consolas, \"Lucida Console\", monospace !default;                 각 행에 있는 글씨체 제일 앞에 따옴표가 매겨진 글씨체가 적용되니 참고하시면 좋겠어요.   제 블로그에는 noto-sans, RobotoMono-Regular가 적용되겠네요!           ✅참고: -apple-system을 적어줘야 해요! 애플이 제공하는 앱에서도 해당하는 폰트로 변경됩니다.   3️⃣ 알아가면 좋은 지식      $serif는 궁서체, $sans-serif는 돋움체(고딕)를 의미합니다.   $monospace는 고정폭 글꼴 즉, 코딩체를 의미합니다. 이러한 고정폭 글꼴은 코드블럭에 나타나는 글꼴이며 따로 설정할 수 있습니다.   여러분이 원하는 폰트를 설치하거나, 웹폰트의 링크를 가져와 자유롭게 설정하시되 꼭 폰트의 저적권을 반드시 유념하시기 바랍니다.  ","categories": ["Custom-Blog"],
        "tags": ["Blog","Git","Github","Jekyll","Brew","Ruby","rbenv"],
        "url": "/custom-blog/Custom_GitBlog2/",
        "teaser": null
      },{
        "title": "깃허브 블로그 커스텀하기 - 블로그 폰트 크기, 페이지 너비 조절하기",
        "excerpt":"       ❗️커스텀 포스팅은 필자의 시행착오와 독학을 통해 작성되었습니다.❗️  틀린 부분이나 좀 더 쉬운 방법이 있다면 댓글 부탁드려요. 다양한 피드백 환영입니다😃          1️⃣ 폰트 크기 조절하기     폰트 크기는 정말 간단하게 조절할 수 있습니다.           _sass/minimal-mistakes/_reset.scss로 이동해 줍니다.            제 블로그의 _reset.scss 내용입니다.         1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 /* ==========================================================================    STYLE RESETS    ========================================================================== */  * { box-sizing: border-box; }  html {   /* apply a natural box layout model to all elements */   /* 글씨 크기 조정하기 */   box-sizing: border-box;   background-color: $background-color;   font-size: 15px;    /* 본문 사이즈 */   @include breakpoint($medium) {     font-size: 15px;   }    /* 헤더 사이즈 */   @include breakpoint($large) {     font-size: 16px;   }    /* 제목 사이즈 (이 부분만 조정해도 글씨 사이즈가 조절 됨)*/   @include breakpoint($x-large) {     font-size: 17.5px;   }    -webkit-text-size-adjust: 100%; /* 모바일 폰트 사이즈 조정*/   -ms-text-size-adjust: 100%; }   ✅ 참고: 로컬로 서버를 연 후, 조정하면서 설정하시기 바랍니다.   ▶️ 코드블럭 폰트 사이즈 조절하기  블로그를 읽다 보면 다음 사진과 같은 부분이 나오는데요! 이 부분이 바로 코드블럭입니다.        _sass/minimal-mistakes/_syntax.scss로 이동합니다.   맨 위에 있는 부분에서 font-size부분을 조절해 줍니다.    1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 div.highlighter-rouge, figure.highlight {   position: relative;   margin-bottom: 1em;   background: $base00;   color: $base05;   font-family: $monospace;   font-size: 0.80em; /*default: $type-size-6, 코드블럭 사이즈*/   line-height: 1.8;   border-radius: $border-radius;    &gt; pre,   pre.highlight {     margin: 0;     padding: 1em;   } }   ❗️주의: font-size를 조절하실 때 소수점 단위로 조절하셔야 합니다. 정수 단위로 조절하시면 폰트가 어마무시하게 커집니다!   2️⃣ 페이지 너비 조절하기          _sass/minimal-mistakes/_variables.scss로 이동해 줍니다.            Grid 부분을 찾아 줍니다. 아예 하단으로 내리면 바로 위에 있어요.       1 2 3 4 5 6 7 8 /*    Grid    ========================================================================== */  $right-sidebar-width-narrow: 200px !default; //default: 200 $right-sidebar-width: 210px !default; //default: 300, 포스트의 글 부분 너비 조정 $right-sidebar-width-wide: 200px !default; //default: 400   ✅ 참고: 사실상 $right-siderbar-width만 조정했을 때 체감이 되는데요, 여러분도 값을 조정해보세요! 반드시 로컬 서버를 통해 먼저 적용을 하시고, 기본 값은 주석으로 처리하시는 것을 추천드립니다.   이상 폰트 사이즈와 페이지 너비를 조절하는 방법에 대해 포스팅을 마치겠습니다. 원하는 값으로 커스터마이징해서 쾌적한 블로그를 운영해보세요!😁  ","categories": ["Custom-Blog"],
        "tags": ["Blog","Git","Github","Jekyll","Brew","Ruby","rbenv"],
        "url": "/custom-blog/Custom_GitBlog3/",
        "teaser": null
      }]
