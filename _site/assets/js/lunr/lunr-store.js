var store = [{
        "title": "초보를 위한 깃허브 블로그 만들기(1). Homebrew 설치",
        "excerpt":"    ❗️모든 설치과정은 MacOS Ventura(M1 Mac) 환경에서 진행됩니다 ❗️       HomeBrew 설치하기     HomeBrew란?            HomeBrew는 MacOS의 패키지 관리자예요       Apple, Linux에서 제공하지 않는 패키지를 관리할 수 있어요.           1️⃣ 1단계  자, 그럼 이제 설치해봅시다.     HomeBrew 바로가기   홈페이지의 안내에 따라 설치해도 되고, 터미널에 다음 명령어를 입력해도 돼요.   ✅ 참고: 터미널은 Command + Spacebar 실행 후, Terminal 입력 후에 바로 실행할 수 있어요!   /bin/bash -c \"$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)\"   2️⃣ 2단계  설치가 완료되었다면, brew help, brew -v 같은 명령어를 통해 HomeBrew가 잘 작동되는지 확인해 봐요.      brew help를 입력했을 때      정상적으로 작동됩니다!   자, 이제 터미널을 끄고 재실행해 봅시다.       에러 발생 zsh: command not found: brew     터미널을 재시작한 후 brew help를 입력했지만 다음과 같은 에러가 발생했습니다!      1️⃣ 해결 1단계  이럴 때는 터미널에 다음과 같이 입력해 주면 돼요   eval $(/opt/homebrew/bin/brew shellenv)  ✅ 참고: eval 명령어는 “$뒤 경로에 대한 인자를 받아 현재 터미널에서 실행하라”라는 의미예요.   그런데, 터미널을 재시작할 때마다 저런 명령어를 입력하는 것은 너무 귀찮아요  그래서 우리는 다음과 같은 작업을 해줘야 돼요.   2️⃣ 해결 2단계      vi 편집기 진입     vi ~/.zshrc          ✅ 참고: echo $SHELL을 통해 현재 사용되는 편집기가 무엇인지 알아야 해요. 저는 zsh를 사용하고 있지만, bash의 경우에는 vi ~/.bashrc가 됩니다.            알파벳 “i”를 눌러 insert 모드에 진입합니다.  모드가 바뀐 것은 터미널 하단에서 확인할 수 있어요.       다음 명령어를 그대로 추가해 줍니다.     eval $(/opt/homebrew/bin/brew shellenv)                 ESC를 누르고 :wq를 입력한 후에 빠져나오면 돼요            ✅ 참고: :wq는 저장 후 종료입니다. 이외에 :q는 종료, :!q는 강제 종료 등 여러 가지 명령어가 있어요           터미널을 재부팅 후 brew help를 입력하면 brew가 정상적으로 실행됩니다!   Homebrew 삭제하기  혹시라도 에러가 발생한다면, Homebrew를 삭제한 후 다시 설치하는 것을 권장합니다.      터미널에 입력해 주세요.     /bin/bash -c \"$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/uninstall.sh)\"          입력 후에 Y를 입력해 삭제해 주세요!       다음 /usr/local 폴더에서 HomeBrew 폴더를 삭제해 줍니다.     rm -rf Homebrew/           Homebrew를 설치했다면 절반은 성공입니다. 다음 파트에서 뵙겠습니다😄  ","categories": ["Making Blog"],
        "tags": ["Blog","Git","Github","Jekyll","Brew","Ruby","rbenv"],
        "url": "/making%20blog/Making_GitBlog1/",
        "teaser": null
      },{
        "title": "초보를 위한 깃허브 블로그 만들기(2). rbenv 패키지 설치",
        "excerpt":"    ❗️모든 설치과정은 MacOS Ventura(M1 Mac) 환경에서 진행됩니다 ❗️       rbenv 패키지 설치하기     rbenv란?            MacOS는 기본적으로 ruby가 설치되어 있습니다.   따라서 ruby는 OS의 영향을 받고, 다양한 버전을 독립적으로 관리하기가 쉽지 않습니다.       이럴 때 독립적으로 ruby의 버전 관리를 도와주는 것이 rbenv입니다.           1️⃣ 1단계  자, 그럼 rbenv 패키지를 설치해봅시다.     rbenv 설치 바로가기   홈페이지에는 rbenv에 대한 정보가 담겨 있어요.  홈페이지를 참고해서 설치해도 되고, 저를 따라오셔도 됩니다.   ❗️못할 것 같다는 생각은 잊어버리고, 터미널을 켜줍니다! 그리고 다음 명령어들을 쭉 입력해주세요   brew install rbenv ruby-build  rbenv verions # 설치가 완료되면 버전을 확인해보기     위와 같은 이미지가 뜬다면 성공입니다.  아까 설명한 OS의 ruby를 사용하고 있다는 말이에요!   2️⃣ 2단계  ruby install -l #설치가 가능한 ruby 버전을 확인해보기 ruby install 3.2.2 # 3.2.2 버전 설치하기 rbenv global 3.2.2 # 3.2.2 버전으로 설정하기 rbenv versions      위와 같은 이미지가 뜬다면 성공입니다.   ❗️필독❗️ 에러: BUILD FAILED (macOS 13.0.1 using ruby-build 20230330) 대처          ruby install 3.2.2를 입력하고 설치하는 과정에서   BUILD FAILED (macOS 13.0.1 using ruby-build 20230330) 이라는 에러가 발생할 수 있어요.       이럴 때는 다음과 같이 터미널에 입력해 주세요.      brew install readline openssl # 설치가 끝나면 차례대로 입력해 주세요 brew install libyaml           오류가 발생하는 이유를 여러가지 의심해 볼 수 있어요            ruby-build를 설치하는 과정에서 homebrew의 패키지인 readline openssl, libyaml 를 사용한다.       brew를 처음하는 사용자는 위의 패키지가 설치되어 있지 않다.           ✅ 참고: BUILD FAILED 에러 발생 이유   3️⃣ 3단계     지난 번 homebrew 에러 발생과 마찬가지로 vi ~/.zshrc에 진입해 경로를 설정해줘야 해요.      vi 편집기 진입     vi ~/.zshrc                알파벳 “i”를 눌러 insert 모드에 진입합니다.  모드가 바뀐 것은 터미널 하단에서 확인할 수 있어요.       다음 명령어를 그대로 추가해 줍니다.     [[ -d ~/.rbenv  ]] &amp;&amp; \\      export PATH=\"$HOME/.rbenv/bin:$PATH\" &amp;&amp; \\      eval \"$(rbenv init -)\"           ESC를 누르고 :wq를 입력한 후에 빠져나오면 돼요            ✅ 참고: :wq는 저장 후 종료입니다. 이외에 :q는 종료, :!q는 강제 종료 등 여러 가지 명령어가 있어요           적용까지 해주기     source ~/.zshrc          터미널을 재실행해도 system ruby가 아닌 독립적인 ruby 버전을 적용합니다.       저는 BUILD FAILED 에러 해결해 보겠다고 4~5시간 구글링했는데,  여러분은 꼭 이 글을 통해 쉽게 해결했으면 좋겠어요! 다음 파트에서 뵙겠습니다😅  ","categories": ["Making Blog"],
        "tags": ["Blog","Git","Github","Jekyll","Brew","Ruby","rbenv"],
        "url": "/making%20blog/Making_GitBlog2/",
        "teaser": null
      },{
        "title": "초보를 위한 깃허브 블로그 만들기(3). github.io 만들기",
        "excerpt":"    ❗️모든 설치과정은 MacOS Ventura(M1 Mac) 환경에서 진행됩니다 ❗️       정말 거의 다 왔어요! 이제는 본격적으로 git을 만져봅시다!   git 패키지 설치하기     우리는 앞서 Homebrew를 설치했기 때문에 정말 간단하게 MacOS에 git을 설치할 수 있어요.   brew install git  git -v # 설치된 버전 확인하기       Github 블로그 만들기  자, 이제 본격적으로 블로그를 만들어 봐요!   1️⃣ 1단계: 저장소 만들기     새로운 저장소를 만들어야 해요!             Repositories로 이동 후에 New를 눌러주세요!            Repository name과 Add a README file을 설정해 주세요!     2️⃣ 2단계: 로컬에 clone하기      ❓ ‘로컬에 clone하기가 뭐야’라고 생각할 수 있어요            사용자 컴퓨터에 깃허브 저장소를 가지고 오는 의미랍니다.                   저장소로 이동 후에 저장소 링크를 복사 해줄게요         다음 바탕화면에 폴더를 하나 만들어 줄게요            저는 github_blog라고 만들었습니다.           터미널로 이동할게요. 코드 참고해 주세요!     cd Desktop/github_blog #github_blog 폴더로 이동하기. git clone 아까 복사했던 주소 #                 ✅ 참고: cd desktop을 하는 이유는 MacOS 바탕화면의 경로이기 때문이에요.           3️⃣ 3단계: minimal-mistakes 가져오기          minimal-mistakes로 이동합니다!       경로 이동하기      cd desktop cd github_blog cd testerHWI.github.io # clone한 경로로 이동해야 해요!           minimal-mistakes clone 하기      git clone https://github.com/mmistakes/minimal-mistakes.git           클론이 완료 되면 폴더 옮겨주기       저같은 경우 모든 파일을 command + a로 전채 선택 후에, option + command + x로 옮겨줍니다!            윈도우에서 잘라내기라고 생각하면 편해요!           4️⃣ 4단계: 로컬 서버 열어보기!  # 다음 코드는 로컬에서 작업한 파일을 깃에 푸쉬하는 과정이에요! # 로컬 -&gt; 깃허브로 파일을 옮기는 작업입니다. git add *  git commit -m \"Making Blog\" # 커밋 메시지 작성 git push origin main  # 이 과정에서 아이디랑 비밀번호를 입력해야 해요. # !중요! 챕터를 참고해 주세요.  이제 마지막 단계입니다!  bundle install gem install jekyll bundler  # 에러 시에 입력해보세요  source ~/.zshrc   bundle exec jekyll serve로 서버를 열어줍니다!   이제 터미널에 표시된 Server Address를 인터넷 주소창에 입력해 보세요!   여러분의 멋진 블로그가 만들어졌을 거예요!😄      ❗️중요❗️: 비밀번호에 토큰을 입력해야 해요     clone, push 등 처음 작업하시는 분들은 토큰을 발급받아야 합니다.     토큰 발급 받기               setting 누르기              가장 아래에 있는 Developer setting을 눌러주세요              Tokens -&gt; Generate new token을 눌러 주세요!              Note와,Expiration(만료 기간), Select scopes를 선택해주세요!         저 같은 경우, git push, clone 등의 작업만 하기 위해 repo만 선택했어요!   하단에 Generate token을 눌러 주세요            토큰을 복사해 안전한 곳에 백업해놓으면 끝!            앞으로 터미널에 깃 작업 관련 비밀번호를 입력할 때는 토큰을 입력하면 됩니다.   ","categories": ["Making Blog"],
        "tags": ["Blog","Git","Github","Jekyll","Brew","Ruby","rbenv"],
        "url": "/making%20blog/Making_GitBlog3/",
        "teaser": null
      },{
        "title": "Visual Studio code로 간편하게 깃허브 블로그 관리하기",
        "excerpt":"    ❗️모든 설치과정은 MacOS Ventura(M1 Mac) 환경에서 진행됩니다 ❗️       안녕하세요! 깃허브 블로그는 잘 설치 되었나요?   이번에는 Visual Studio Code로 깃허브 블로그를 아주 간편하게 관리하는 방법을 공유합니다.    1️⃣ Visual Studio Code 설치하기          Visual Sutdio Code Download Link로 이동해주세요!       Mac을 선택해주세요!            설치하는 과정에서 특별한 건 없습니다. 쭉쭉 넘어가주세요!           설치가 완료되었다면 아래와 같은 화면이 뜹니다.     한국어 패키지 설정하기  저는 한국어 패키지가 설치가 되어있습니다. 영어 버전을 원하시는 분들은 건너뛰셔도 돼요!          왼쪽 확장(Shift + Command + X)을 눌러 줍니다.   Korean Language Pack을 검색 후 설치해 줍니다.   2️⃣ Github와 VScode 연결하기  ","categories": ["Making Blog"],
        "tags": ["Blog","Git","Github","Jekyll","Brew","Ruby","rbenv"],
        "url": "/making%20blog/Making_GitBlog4/",
        "teaser": null
      }]
