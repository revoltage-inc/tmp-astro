# tmp-astro

このリポジトリは、Astroのテンプレートです。
構成にはTailwindCSSが含まれます。

> **Warning**  
> このテンプレートは個人的なベストプラクティスに基づいて作成されたものです。  
> 破壊的な変更に注意してください。  

## 前提

- [VSCodeのインストール](https://azure.microsoft.com/ja-jp/products/visual-studio-code/)
- [VSCodeの推奨拡張機能のインストール](https://code.visualstudio.com/docs/editor/extension-marketplace#_workspace-recommended-extensions)
- [Voltaのインストール](https://docs.volta.sh/guide/getting-started)

## 設定

### 実行環境の作成

下記のコマンドで実行環境を作成します。  

```zsh
volta install node@18.16.0 npm@9.5.1 pnpm@8.6.0

pnpm install
```

### 環境変数の設定

下記のコマンドで実行環境を作成します。  
.envファイルに環境変数を記述します。  

```zsh
cp .env.template .env
```

## 使用方法

下記コマンドでローカルサーバーを起動する。  

```zsh
npm run dev
```

## スクリプト

| スクリプト | 説明 |
|:-------|:--------|
| `npm run update`| パッケージを一括更新する |
| `npm run dev` | ローカルサーバーを起動する |
| `npm run build` | 本番ビルドする |
| `npm run astro` | Astro CLIを実行する |

## 参考

- [Astro](https://astro.build/)
- [TailwindCSS](https://tailwindui.com/)

## ライセンス

[MIT](https://opensource.org/licenses/MIT)
