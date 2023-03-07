# memo
## bashではシングルクウォートのエスケープは「'\'

# ------------------------------START_alias
# 修正後は以下のコマンドで反映
alias so='source /root/.bashrc'

#cdしたらls
cdls ()
{
    \cd "$@" && ls
}
alias cd="cdls"

#git

## チェックアウト
alias gc='git checkout'
alias _gc='git branch | peco | xargs git checkout'
alias gcb='git checkout -b'

## ブランチ
alias gb='git branch'

### ブランチの削除
alias _gbd='git branch | peco | xargs git branch -d'

## ステージ
alias gaa='git add -A'

## コミット
### 20210603 テンプレートを使うため、"-m"オプションを削除した
alias gcm='git commit'
alias gca='git commit --amend'

## リベース
### 何個遡るか指定してリベースのスタート(引数に遡りたい数を指定)
alias grih='(){git rebase -i HEAD~$1}'

### コンティニュー
alias grc='git rebase --continue'

## プッシュ
alias gps='git push'

## プル
alias gpl='git pull'

## スタッシュ
### push
alias gsm='git stash push -m'

### apply
alias _gsa='git stash list | peco | awk -F '\'':'\'' '\''{print $1}'\''  | xargs -IXXX git stash apply XXX'

### drop
alias _gsd='git stash list | peco | awk -F '\'':'\'' '\''{print $1}'\''  | xargs -IXXX git stash drop XXX'

## プルーン
alias gp='git remote prune origin'

## インデックスの更新
### ワークツリー監視対象から外す
alias guisw='git update-index --skip-worktree'
### ワークツリー監視対象とする
alias guinsw='git update-index --no-skip-worktree'

## リセット
alias grs='git reset --soft HEAD^'

## チェリーピック
alias gcp='git cherry-pick'

## ログ
alias gl='git log --oneline'



# docker
alias d='docker'

## Dockerイメージの作成
alias db='docker build'

## イメージの一覧を確認
alias di='docker images -a'

## コンテナのrun(生成&起動)
alias dr='docker run'

## コンテナの一覧
alias dps='docker ps -a'

## コンテナの削除
alias _drm='docker rm -f $(dps --format "{{.Names}} {{.ID}}" | peco | awk "{print \$2}")'

## イメージの削除
alias _drmi='docker rmi $(docker images | peco | awk "{print \$3}")'

## 起動済みのコンテナに入る
alias de='docker exec -it'

## Docker-compose
alias dc='docker-compose'
### build
alias dcb='docker-compose build'
### up (-d: デタッチ起動)
alias dcu='docker-compose up -d'
### down
alias dcd='docker-compose down'
### run
alias dcr='docker-compose run'