# エクステリア計算ツール - PWA版

エクステリア工事計算を効率化するツール集です。スマートフォンのホーム画面に追加して使用できます。

## 📦 内容物

```
exterior-tools-pwa/
├── index.html              # メインページ（PWA対応）
├── manifest.json           # PWAマニフェストファイル
├── service-worker.js       # オフライン対応用Service Worker
├── icon-192.svg           # ホーム画面アイコン（192x192）
├── icon-512.svg           # スプラッシュスクリーン用（512x512）
└── README.md              # このファイル
```

## 🚀 セットアップ方法

### 1. GitHub Pagesへのデプロイ

**リポジトリ構成:**
```
your-repo/
└── (このZIP内のファイルをここに配置)
```

### 2. ローカルテスト

簡易サーバーを起動してテストできます：

```bash
# Python 3.x
python -m http.server 8000

# Python 2.x
python -m SimpleHTTPServer 8000

# Node.js (http-server)
npx http-server
```

ブラウザで `http://localhost:8000` にアクセス

### 3. スマートフォンでのインストール

#### iPhoneの場合
1. Safariでサイトにアクセス
2. 共有ボタン（↑）をタップ
3. 「ホーム画面に追加」をタップ
4. アプリ名を確認して「追加」

#### Androidの場合
1. Chromeでサイトにアクセス
2. メニューボタン（⋮）をタップ
3. 「アプリをインストール」をタップ
4. 「インストール」を確認

## ✨ 機能

### 1. カーポート柱寸法計算
- 柱のピッチ（間隔）と本数を計算
- 設計に必要な配置情報を効率的に算出

### 2. 生コン量計算
- 基礎工事に必要なコンクリート量をm³単位で計算
- 寸法を入力すれば自動算出

### 3. テラス屋根干渉チェック
- 施工時の障害物との干渉を判定
- 角度と寸法から安全性を確認

## 🌐 オフライン機能

Service Workerにより、一度ダウンロードしたら **インターネット接続なしで使用可能** です。

- キャッシュファースト戦略を採用
- ネットワーク接続時は最新版を自動更新

## 🎨 アイコン仕様

- **192x192px**: ホーム画面アイコン
- **512x512px**: スプラッシュスクリーン
- SVG形式で全デバイスに対応
- Maskable対応（Android 13+での最適表示）

## 📱 対応ブラウザ

- **iOS**: Safari 11.3+
- **Android**: Chrome 39+、Firefox 67+、Edge 18+

## 🔧 カスタマイズ

### アプリ名の変更
`manifest.json`の以下の項目を編集：
```json
"name": "エクステリア計算ツール",
"short_name": "計算ツール"
```

### テーマカラーの変更
`manifest.json`と`index.html`の以下を編集：
```json
"theme_color": "#4a5f7f"
```

## 🐛 トラブルシューティング

### PWAとしてインストールできない
- HTTPSで配信されているか確認（localhost除く）
- manifest.jsonが正しくロードされているか確認（ブラウザのDevToolsで確認）
- `index.html`の `<link rel="manifest">` を確認

### オフラインで動作しない
- Service Workerが登録されているか確認（DevTools → Application → Service Workers）
- キャッシュの内容を確認（DevTools → Application → Cache Storage）

## 📄 ファイル説明

### index.html
メインのHTMLファイル。PWA対応タグを含みます：
- Meta tags（description, theme-color）
- Apple用Meta tags
- manifest.json のリンク
- Service Worker 登録スクリプト

### manifest.json
PWA定義ファイル。以下を含みます：
- アプリの基本情報（name, short_name, description）
- アイコン（通常形式とmaskable形式）
- 表示モード（standalone）
- 画面向き設定（portrait-primary）

### service-worker.js
オフライン機能を提供します：
- キャッシュ戦略: **キャッシュファースト**
  1. キャッシュに要求があればそれを返す
  2. なければネットワークから取得
  3. 新規レスポンスをキャッシュに追加
- 自動更新機能

## 📞 サポート

問題が発生した場合は、ブラウザのConsole（DevTools）でエラーメッセージを確認してください。

---

**最終更新**: 2025年10月28日  
**バージョン**: 1.0.0
