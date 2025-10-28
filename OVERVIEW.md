# エクステリア計算ツール PWA版 - プロジェクト概要

## 📦 ダウンロード済みパッケージ内容

### `exterior-tools-pwa.zip` に含まれるファイル

```
exterior-tools-pwa/
├── index.html                  # メインアプリケーション（13.5KB）
│                               # - PWA対応
│                               # - 3つのツール（カーポート、生コン、テラス）
│                               # - レスポンシブデザイン
│
├── manifest.json              # PWAマニフェスト（1.3KB）
│                               # - アプリ情報（名前、説明、アイコン）
│                               # - ホーム画面設定
│                               # - スプラッシュスクリーン指定
│
├── service-worker.js          # オフライン対応（2.1KB）
│                               # - キャッシュ戦略の実装
│                               # - ネットワーク失敗時のフォールバック
│
├── icon-192.svg              # ホーム画面アイコン（1.3KB）
│                              # - 192x192px
│
├── icon-512.svg              # スプラッシュスクリーン用（1.3KB）
│                              # - 512x512px
│
├── README.md                  # 使用方法ガイド（4.4KB）
│                              # - セットアップ手順
│                              # - 機能説明
│                              # - トラブルシューティング
│
└── DEPLOYMENT.md              # デプロイ手順書（4.9KB）
                                # - チェックリスト形式
                                # - テスト確認項目
                                # - GitHub Pages デプロイ手順
```

**合計サイズ**: 11KB（圧縮後）

---

## 🎯 各ファイルの役割

### 1. index.html - コアアプリケーション

**機能:**
- ✅ 3つの計算ツール入り口
- ✅ PWA対応タグ
- ✅ Service Worker 登録
- ✅ モバイルフレンドリー
- ✅ オフライン対応

**含まれるメタタグ:**
```html
<meta name="theme-color" content="#4a5f7f">
<meta name="apple-mobile-web-app-capable" content="yes">
<link rel="manifest" href="./manifest.json">
<link rel="apple-touch-icon" href="./icon-192.svg">
```

### 2. manifest.json - PWA設定

**定義内容:**
- アプリ名: "エクステリア計算ツール"
- 短い名前: "計算ツール"
- 表示モード: standalone（ブラウザUI非表示）
- 向き: portrait-primary（縦向き）
- テーマカラー: #4a5f7f

**アイコン:**
- 通常形式（any）: 192x192, 512x512
- Maskable形式: Android 13+向け最適化

### 3. service-worker.js - オフライン機能

**キャッシュ戦略: キャッシュファースト**

```
ユーザーがアクセス
    ↓
キャッシュに存在? → YES → キャッシュから返却
    ↓ NO
ネットワークから取得
    ↓
成功? → YES → キャッシュに保存 → ユーザーに返却
    ↓ NO
キャッシュから返却（オフライン対応）
```

**キャッシュ対象:**
- index.html
- manifest.json
- service-worker.js
- icon-192.svg
- icon-512.svg
- 外部からのリソース（CSS、フォント）

### 4. icon-192.svg / icon-512.svg - ホーム画面アイコン

**デザイン:**
- グラデーション背景（#4a5f7f → #3d4d64）
- 3つのツールを視覚表現
  - 左: 2本の柱（カーポート）
  - 中: 四角形（生コン）
  - 右: 三角形（テラス）

**用途:**
- 192px: iOS ホーム画面、Android ランチャー
- 512px: スプラッシュスクリーン

---

## ✨ PWA対応の特徴

### 🌐 オンライン/オフライン両対応
- オンライン時: 常に最新版を提供
- オフライン時: キャッシュから提供

### 📱 ネイティブアプリのような体験
- ホーム画面にアイコン表示
- フルスクリーン表示
- スプラッシュスクリーン
- スムーズなアニメーション

### ⚡ 高速読み込み
- 2回目以降はほぼ瞬時に起動
- ネットワーク遅延の影響なし

### 🔄 自動更新
- ネットワーク接続時に自動チェック
- 新版があれば次回起動時に更新

---

## 📋 セットアップ流れ

### ステップ1: ファイル配置（1分）
```
ZIPを解凍 → GitHub リポジトリに配置
```

### ステップ2: ローカルテスト（5分）
```
ローカルサーバー起動 → ブラウザでテスト → DevTools確認
```

### ステップ3: デプロイ（5分）
```
git push → GitHub Pages 自動公開 → 数分で全世界から利用可能
```

### ステップ4: インストール確認（3分）
```
PC/スマートフォンでインストール → ホーム画面に追加 → 完了
```

**総所要時間: 約15分**

---

## 🚀 デプロイ先オプション

### オプション1: GitHub Pages（推奨）
- ✅ 無料
- ✅ HTTPS対応
- ✅ リポジトリ と サイト が連動
- ✅ 自動デプロイ可能
- 📍 URL: `https://username.github.io/repository-name`

### オプション2: Netlify
- ✅ 無料
- ✅ HTTPS対応
- ✅ 自動ビルド・デプロイ
- ✅ カスタムドメイン対応
- 📍 URL: `https://your-domain.netlify.app`

### オプション3: Vercel
- ✅ 無料
- ✅ HTTPS対応
- ✅ グローバル CDN
- ✅ 高速配信
- 📍 URL: `https://your-domain.vercel.app`

### オプション4: 自社サーバー
- ⚠️ HTTPSが必須
- ⚠️ 設定が必要
- ✅ 完全なコントロール可能

---

## 📊 ファイルサイズ仕様

| ファイル | サイズ | 圧縮後 | 説明 |
|---------|--------|--------|------|
| index.html | 13.5KB | 10.7KB | メインアプリ |
| manifest.json | 1.3KB | 0.8KB | PWA設定 |
| service-worker.js | 2.1KB | 1.2KB | キャッシュロジック |
| icon-192.svg | 1.3KB | 0.7KB | 小アイコン |
| icon-512.svg | 1.3KB | 0.7KB | 大アイコン |
| **合計** | **19.5KB** | **11KB** | 非常に軽量 |

**初回読み込み**: 約50KB（CSS、フォント含む）  
**2回目以降**: ほぼ0KB（キャッシュから読み込み）

---

## 🔒 セキュリティとプライバシー

- ✅ すべてスタティックファイル（サーバサイド処理なし）
- ✅ 個人情報をサーバに送信しない
- ✅ HTTPS対応済み
- ✅ No tracking、No analytics（オプション）

---

## 📞 トラブルシューティング

### Q: PWAがインストール候補として出ない

A: 以下を確認してください：
1. HTTPS で配信されているか
2. manifest.json が正しく読み込まれているか（DevTools確認）
3. Service Worker が active 状態か

### Q: スマートフォンでインストールできない

A: ブラウザ要件を確認：
- iOS: Safari 11.3+
- Android: Chrome 39+

### Q: 各ツールへのリンクが動作しない

A: リンクはそのまま動作します：
- `/Carport-Post-Calculation/` (カーポート計算)
- `/Carport-Post-Calculation/conc.html` (生コン計算)
- `/angle/` (テラス干渉)

---

## 📝 今後のカスタマイズ例

### アイコンの変更
- `icon-192.svg`, `icon-512.svg` を置き換え
- SVG形式推奨（スケーラブル）

### アプリ名の変更
- `manifest.json` の `name`, `short_name`
- `index.html` の `<title>`

### テーマカラー変更
- `manifest.json` の `theme_color`
- `index.html` の `<meta name="theme-color">`

### 言語変更
- `index.html` の `lang` 属性
- `manifest.json` の `name`, `short_name`, `description`

---

**最後に、DEPLOYMENT.md のチェックリストに従ってセットアップしてください！**
