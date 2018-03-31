## Move to an already opened tab kai
このFirefoxアドオンはタブを開くときに既に開いている同じタブがあればそのタブへ移動する[Pachira](https://addons.mozilla.org/ja/firefox/user/anonymous-a0bba9187b568f98732d22d51c5955a6/)氏の[move to an already opened tab](https://addons.mozilla.org/ja/firefox/addon/move-to-an-already-opened-tab/)アドオンを改変したものです。  
Firefox起動時にタブが複数存在するとタブが閉じることがあることを修正しています。  

※[Duplicate Tabs Closer](https://addons.mozilla.org/ja/firefox/addon/duplicate-tabs-closer/)アドオンが本アドオンより高機能で更に[Multi-Account Containers](https://addons.mozilla.org/ja/firefox/addon/multi-account-containers/)アドオン使用時に異なるコンテナを判別して制御できるのでおすすめです。  
※このアドオンはWebExtensionアドオン対応のFirefox専用となります。  
※他のこしあんアドオン改変版とUserscriptは[こちら](https://github.com/akoya-tomo/futaba_auto_reloader_K/wiki/)の一覧からどうぞ。  

## 機能
* オリジナルの機能（Move to an already opened tab）
  - タブを開くときに既に開いている同じタブがあればそのタブへ移動  
    この機能を利用してふたば☆ちゃんねるのカタログから既に開いているスレへ移動することができます。  
* 変更された機能（Move to an already opened tab kai）
  - Firefox起動時にタブが複数存在するとタブが閉じることがあることを修正  
    ピン留めタブなどタブが複数存在する状態でFirefoxを起動すると不特定のタブが閉じることがありました。  
    これをタブが閉じないようにabout:blankを移動の対象外に修正しました。  

## インストール
[GitHub](https://github.com/akoya-tomo/move_to_an_already_opened_tab_kai/releases/download/v1.0.0/move_to_an_already_opened_tab_kai-1.0.0-an.fx.xpi)

※「接続エラーのため、アドオンをダウンロードできませんでした。」と表示されてインストール出来ない時はリンクを右クリックしてxpiファイルをダウンロードし、メニューのツール→アドオン（またはCtrl+Shift+A）で表示されたアドオンマネージャーのページにxpiファイルをドラッグ＆ドロップして下さい。  

## 注意事項
* このアドオンはWebExtensionアドオン対応のFirefox専用です。  
* 本アドオンを有効化したときはオリジナル版を無効化または削除して下さい。  

## 更新履歴
* v1.0.0 2017-12-15
  - Move to an already opened tab v1.0.0ベース
  - Firefox起動時にタブが複数存在するとタブが閉じることがあることを修正
