# 🚀 Deploy para GitHub Pages

Este projeto está configurado para deploy automático no GitHub Pages usando GitHub Actions.

## 📋 Pré-requisitos

1. **Repositório no GitHub** - Faça push do código para um repositório GitHub
2. **GitHub Pages habilitado** - Configure nas configurações do repositório

## ⚙️ Configuração do GitHub Pages

### Passo 1: Configurar o Repositório

1. Vá para **Settings** > **Pages** no seu repositório GitHub
2. Em **Source**, selecione **GitHub Actions**
3. Salve as configurações

### Passo 2: Fazer Push do Código

```bash
# Inicializar repositório Git (se ainda não foi feito)
git init
git add .
git commit -m "Initial commit: Next.js site ready for GitHub Pages"

# Adicionar repositório remoto
git remote add origin https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git

# Fazer push para a branch main
git push -u origin main
```

### Passo 3: Deploy Automático

O GitHub Actions irá automaticamente:
1. Detectar o push para a branch `main`
2. Instalar as dependências
3. Fazer build do site estático
4. Fazer deploy para GitHub Pages

## 🔧 Configurações Implementadas

### `next.config.js`
- ✅ `output: 'export'` - Habilita exportação estática
- ✅ `trailingSlash: true` - Adiciona barra no final das URLs
- ✅ `images.unoptimized: true` - Desabilita otimização de imagens
- ✅ `distDir: 'out'` - Define pasta de saída

### `package.json`
- ✅ `build:static` - Script para build estático
- ✅ `export` - Script alternativo de exportação

### GitHub Actions (`.github/workflows/deploy.yml`)
- ✅ Workflow automático para deploy
- ✅ Build e upload para GitHub Pages
- ✅ Configuração de permissões

### Arquivos Adicionais
- ✅ `.nojekyll` - Evita processamento Jekyll

## 🌐 Acessando o Site

Após o deploy, seu site estará disponível em:
```
https://SEU_USUARIO.github.io/SEU_REPOSITORIO/
```

## 🛠️ Build Local

Para testar o build estático localmente:

```bash
# Build estático
npm run build:static

# Servir arquivos estáticos (opcional)
npx serve out
```

## 📝 Notas Importantes

1. **Imagens**: Todas as imagens são servidas sem otimização
2. **Rotas**: Todas as rotas são pré-renderizadas como HTML estático
3. **APIs**: Funcionalidades server-side não funcionarão (formulários usam simulação)
4. **Updates**: Qualquer push para `main` triggera novo deploy automaticamente

## 🔍 Troubleshooting

### Build Falha
- Verifique os logs no GitHub Actions
- Teste o build local com `npm run build:static`

### Site não Carrega
- Verifique se GitHub Pages está habilitado
- Confirme que o workflow foi executado com sucesso
- Aguarde alguns minutos para propagação

### Imagens não Aparecem
- Verifique se as URLs das imagens estão corretas
- Confirme que `images.unoptimized: true` está no `next.config.js`