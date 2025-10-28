# エクステリア計算ツール PWA版 - デプロイ手順

## 📋 チェックリスト

このファイルをチェックしながら進めてください。

### ✅ ステップ1: ファイルの配置

- [ ] ZIPファイルを解凍
- [ ] 以下のファイルがあることを確認
  - [ ] `index.html`
  - [ ] `manifest.json`
  - [ ] `service-worker.js`
  - [ ] `icon-192.svg`
  - [ ] `icon-512.svg`
  - [ ] `README.md`

### ✅ ステップ2: ローカルテスト

コマンドラインで以下を実行：

```bash
# ダウンロードしたフォルダに移動
cd (ダウンロードフォルダ)

# ローカルサーバーを起動（以下のいずれか）
python -m http.server 8000
# または
npx http-server
```

ブラウザで `http://localhost:8000` を開く

- [ ] ページが表示される
- [ ] 3つのカードが表示される
- [ ] ホバーで効果がある
- [ ] ブラウザの戻る機能で各ツールにアクセスできる

### ✅ ステップ3: PWA機能確認

DevTools（F12キー）で確認：

**Application タブ**
- [ ] Manifest: `manifest.json` が正しくロード
  - [ ] name: エクステリア計算ツール
  - [ ] short_name: 計算ツール
  - [ ] theme_color: #4a5f7f
  - [ ] icons が2つ表示されている

**Service Workers**
- [ ] `service-worker.js` が registered
- [ ] Status: Active and running

**Cache Storage**
- [ ] `exterior-tools-v1` が表示されている
- [ ] 5つ以上のファイルがキャッシュされている

### ✅ ステップ4: GitHub Pagesへのデプロイ

1. GitHubで新しいリポジトリを作成
   - [ ] リポジトリ名を決定
   - [ ] Public に設定

2. ファイルをアップロード
   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
   # 解凍したファイルをここにコピー
   git add .
   git commit -m "Initial commit: PWA app"
   git push origin main
   ```

3. Settings → Pages で確認
   - [ ] Source が "Deploy from a branch"
   - [ ] Branch が "main"
   - [ ] 数分後に https://your-username.github.io/your-repo/ で公開

### ✅ ステップ5: PWAインストール確認

**PC（Chrome）:**
- [ ] URLバー右側にインストールアイコン（⬇️+□）が表示される
- [ ] クリックしてインストール可能

**iPhone（Safari）:**
1. Safariで開く
2. 共有ボタン（↑）をタップ
3. 「ホーム画面に追加」を確認
   - [ ] オプションが表示される

**Android（Chrome）:**
1. Chromeで開く
2. メニュー（⋮）→ 「アプリをインストール」
   - [ ] オプションが表示される

### ✅ ステップ6: オフライン確認

1. DevTools → Network タブ
2. "Offline" をチェック
3. ページをリロード
   - [ ] オフラインでも表示される
   - [ ] スタイルが適用されている

## 🔍 デバッグ時に確認すること

### PWAがインストール候補として表示されない場合

1. HTTPSで配信されているか
   - GitHub Pages は自動的にHTTPS
   - ローカルはHTTP (localhost) で許可

2. manifest.json が有効か
   ```bash
   curl https://your-site/manifest.json
   ```

3. Service Worker がエラーなしで登録されているか
   - Console タブでエラーを確認

### キャッシュが古いままの場合

1. DevTools → Application → Cache Storage で該当キャッシュを削除
2. Service Workers で "Unregister" をクリック
3. ページをリロード

## 📱 実機テスト手順

### iPhone での確認

1. Safariで URL を開く
2. 共有（↑）→ 「ホーム画面に追加」
3. 名前を「計算ツール」に変更
4. 追加
5. ホーム画面でアイコン確認
   - [ ] アイコンが表示される
   - [ ] タップして起動
   - [ ] フルスクリーンで表示（ステータスバーなし）

### Android での確認

1. Chrome で URL を開く
2. メニュー（⋮）→ 「アプリをインストール」
3. 「インストール」をタップ
4. ホーム画面でアイコン確認
   - [ ] アイコンが表示される
   - [ ] タップして起動
   - [ ] スプラッシュスクリーン表示
   - [ ] アプリ化されている

## 🚨 よくあるトラブル

| 症状 | 原因 | 解決策 |
|------|------|--------|
| PWAがインストール候補として出ない | HTTPS未対応またはmanifest.json読み込み失敗 | GitHub Pagesの設定確認、manifest.jsonの読み込み確認 |
| キャッシュが更新されない | Service Worker のキャッシュが古い | DevTools で古いキャッシュを削除 |
| オフラインで動作しない | Service Worker が登録されていない | コンソールエラーを確認、再デプロイ |

---

**完了後、全ての✅にチェックを入れてください！**
