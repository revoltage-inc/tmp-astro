# tmp-astro

This repository is template for Astro  
This includes TailwindCSS.  

> **Warning**  
> This template is still in alpha stage.  
> Beware destructive changes.  

<h2 id="setting">Setting</h2>

<h3>Premise</h3>

- [Install VSCode](https://azure.microsoft.com/ja-jp/products/visual-studio-code/)
- [Install Workspace recommended VSCode extensions](https://code.visualstudio.com/docs/editor/extension-marketplace#_workspace-recommended-extensions)
- [Install Volta](https://docs.volta.sh/guide/getting-started)

<h3>Create environment</h3>

Create environment with following command.  

```zsh
volta install node@18.12.1 npm@9.1.2

npm install
```

## Usage

After completing [Setting](./README.md#setting), run develop server with following command.  

```zsh
npm run dev
```

## Script

| Script | Content |
|:-------|:--------|
| `npm run update`| Bulk update of packages |
| `npm run dev` | Run develop server |
| `npm run build` | Production build |
| `npm run astro` | Run Astro CLI commands |

## Reference

- [Astro](https://astro.build/)
- [TailwindCSS](https://tailwindui.com/)

## License

[MIT](https://opensource.org/licenses/MIT)
