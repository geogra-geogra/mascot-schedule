## 推しのスケジュールまとめ

[「球団マスコットの情報。」](https://baseball-mascot.com)で公開しているスケジュール作成用のコードです。

### データの作り方

1. マスコット自体の情報を data/mascot.json に入力する。
2. 各種htmlファイルを編集する。(index,profile,schedule,aboutusとキャラクター別のページ)
3. マスコットのスケジュールを data/schedule.json に入力する。

私は、Excel でjsonファイルのもとを作成、変換して使用しています。(後日公開予定)

### mascot.json
例
>"search": "B・B",
>"name": "bb212",
>"full": "B・B",
>"team": "北海道日本ハムファイターズ",
>"home": "ES CON FIELD HOKKAIDO",
>"url": "https://www.fighters.co.jp/entertainment/mascot/",
>"schedule": "",
>"blog": "https://www.bbthehome.com/",
>"Twitter": "",
>"Instagram": "",
>"debut": "2004",
>"no": "212"

**必須の項目**
search: いわゆる「略称」です。スケジュールなどに表示する名前と同じにしてください。
name：「アルファベット表記」です。htmlファイルは、${name}.htmlという形にしてください。
full：「フルネーム」です。

**任意の項目**
team：「フルネーム(チーム名)」といった表示がされます。
home：本拠地です。schedule.jsonを作成する際に使っているのみで、必要ありません。
url： URLを入力してください。デフォルトでは「公式プロフィール」というテキストで表示されます。
schedule：URLを入力してください。デフォルトでは「公式スケジュール」というテキストで表示されます。
blog：URLを入力してください。デフォルトでは「公式ブログ」というテキストで表示されます。
Twitter：URLを入力してください。デフォルトでは「Twitter」というテキストで表示されます。
Instagram：URLを入力してください。デフォルトでは「Instagram」というテキストで表示されます。
debut：「xxxx年に登場」と表示されます。
no：「背番号はxx」と表示されます。


### schedule.json
例

> "date": "2023/08/05",
> "title": "中日対ヤクルト@バンテリンドーム 14:00 開始",
> "character": "ドアラ/シャオロン/パオロン/つば九郎",
> "remarks": "マスコット交流",
> "spot": "バンテリンドームナゴヤ",
> "lng": "35.186008",
> "lat": "136.9474",
> "url1": "https://dragons.jp/news/2023/mascot-koryu-swallows.php",
> "url2": "https://www.yakult-swallows.co.jp/news/detail/28567"

**必須の項目**
date：日付 yyyy/mm/dd の形式
title：タイトル
character：data/mascot.json の"search"に登録した名前を用いると、プロフィールページにリンクされます。スラッシュで区切ることで、複数のキャラクターもプロフィールページにリンクができます。

**任意の項目**
remarks：備考です。デフォルトでは赤字で表示されます。
spot：「場所：xxxx」と表示されます。
lng：経度です。
lat：緯度です。※緯度経度にデータがあると、GoogleMapに接続します。
url1：URLを入力してください。url1が存在する場合、「参考記事」というテキストでリンクが生成されます。
url2：URLを入力してください。先にurl1に入れてください。url2は「参考記事2」となります。

### htmlファイル
index.html：