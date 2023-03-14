# tmp-astro

This repository is template for Astro  
This includes TailwindCSS.  

> **Warning**  
> This template is still in alpha stage.  
> Beware destructive changes.  

## Premise

- [Install VSCode](https://azure.microsoft.com/ja-jp/products/visual-studio-code/)
- [Install Workspace recommended VSCode extensions](https://code.visualstudio.com/docs/editor/extension-marketplace#_workspace-recommended-extensions)
- [Install Volta](https://docs.volta.sh/guide/getting-started)

## Setting

### Create execution environment

Create execution environment with following command.  

```zsh
volta install node@18.14.2 npm@9.5.0

npm install
```

### Setting environment variables

Then create environment file with following command.  
Set environment variables in environment file.  

```zsh
cp .env.template .env
```

## Usage

Run develop server with following command.  

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
