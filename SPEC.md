# 語学学習ストリーク記録【無料】無料Webツール - 技術仕様書

## 概要

**サービス名**: Language Learning Streak
**バージョン**: 1.0.0
**更新日**: 2026-05-27
**URL**: https://appadaycreator.com/language-learning-streak/

毎日の語学学習時間・内容を記録して継続日数（ストリーク）を管理。登録不要・完全無料でご利用いただけます。

## データ管理

- **ストレージ**: ブラウザ localStorage（外部API通信なし）
- **永続化**: ページ読み込み時に自動復元
- **クリア**: ブラウザのサイトデータ削除で初期化

## 技術スタック

- HTML5 / CSS3 / Vanilla JavaScript
- PWA対応（manifest.json / Service Worker）
- レスポンシブデザイン（モバイルファースト）

## 使い方

1. 記録したい項目を入力フォームに入力する
2. 「追加」または「記録」ボタンをクリックする
3. 記録一覧で過去のデータを確認する
4. グラフや集計で傾向を把握する
5. 継続的に記録して変化を追跡する

## よくある質問（FAQ）

**Q: 語学学習ストリーク記録は無料で使えますか？**

はい、完全無料・登録不要でご利用いただけます。

**Q: 記録データはどこに保存されますか？**

ご使用のブラウザのローカルストレージに保存されます。他のデバイスとは共有されません。

**Q: ブラウザを閉じても記録は残りますか？**

はい、同じブラウザを使う限りデータは保持されます。

**Q: 記録を削除するにはどうすればいいですか？**

リセットボタン、またはブラウザのサイトデータをクリアすることで削除できます。

**Q: スマートフォンで利用できますか？**

はい、スマートフォン・タブレット・PCすべてでご利用いただけます。


## 関連サービス

- [英語力・TOEIC診断](https://appadaycreator.github.io/english-level-checker/)
- [Flashcard Master](https://appadaycreator.github.io/flashcard-master/)
- [Habit Builder](https://appadaycreator.github.io/habit-builder/)

## テスト

| ファイル | フレームワーク | 概要 |
|---------|--------------|------|
| `tests/e2e/` | Playwright | 本番URL対象E2E（Jest対象外） |

## デプロイ

GitHub Pages（mainブランチ push → 自動デプロイ）

## ライセンス

MIT License
