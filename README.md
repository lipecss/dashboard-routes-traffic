## Sobre

Projeto desenvolvido com Vuejs e suas bibliotecas, para compor uma área de serviço/controle logistico (dashboard) na qual exibe algumas informações das rotas num determinado período.

[Link para acesso - Netlify](routes-traffic.netlify.app)

## Desenvolvimento
### Constrúido com
Foi usado no desenvolvimento dessa aplicação:
> Todas as versões especificadas são mínimas.
- [Vue.js](https://vuejs.org/) - v2.6.11
- [Vue Cli](https://cli.vuejs.org/) - v4.5.1
- [Vue I18N](https://github.com/kazupon/vue-i18n) - v8.23.0
- [Vue Router](https://router.vuejs.org/) - v3.2.0
- [Vue PWA](https://router.vuejs.org/) - v4.5.0
- [Vuex](https://vuex.vuejs.org/) - v3.4.0
- [Vuex Persistedstate](https://github.com/robinvdvleuten/vuex-persistedstate) - v4.0.0-beta.3
- [vue-flag-icon](https://www.npmjs.com/package/vue-flag-icon) - v1.0.6
- [axios](https://www.npmjs.com/package/axios) - v0.21.1
- [bootstrap-vue](https://www.npmjs.com/package/bootstrap-vue) - 2.21.2
- [vue-apexcharts](https://www.npmjs.com/package/vue-apexcharts) - 1.6.1

### Variáveis de Ambiente

Para que o projeto funcione corretamente e tenha melhor segurança, trabalhe com dois arquivos de variáveis de ambiente que estão sendo ignorados pelo Git por meio do arquivo **. Gitignore **.

Crie os arquivos na raiz do seu projeto com os nomes:
- ** env.development **: Usado por _Vue.js_ quando você está desenvolvendo seu projeto.
- ** env.production **: Usando por _Vue.js_ ao gerar o projeto _Build_.
- **. env **: Ou use apenas um arquivo dotenv

With the following structure and the appropriate values for your project:

```js
{
  VUE_APP_KEY_NAME =  valor que você deseja
}
```

É obrigatório ter essas chaves e valores para funcionar perfeitamente:

```js
{
	VUE_APP_APP_NAME = APP TESTE
	VUE_APP_BASE = http://localhost:8080/
	VUE_APP_I18N_LOCALE = pt-BR
	VUE_APP_I18N_FALLBACK_LOCALE = en
	VUE_APP_API = https://6050b01f5346090017670430.mockapi.io/api
}
```

### Página

Por padrão, o projeto já vem com as seguintes páginas:
- Login: Você não precisa estar logado para acessar.
- System: Você precisa estar logado para acessar. Aqui, você poderá interagir, conferir o processo de entrega atual, assim como verificar suas informaçoes.
- Erro 404: Você não precisa estar logado para acessar.

## Instalação e uso
### Pré-requisitos e instalação
- Terminal (Command used in Terminal Powershell)
- Yarn
- Vue.js

### **Configuração do projeto**
Para executar este projeto, você deve primeiro instalar as dependências. No tipo de diretório raiz:
```
yarn install
```

#### Compiles and hot-reloads for development
```
yarn run serve
```

#### Compiles and minifies for production
```
yarn run build
```

#### I18N Reports
```
yarn run i18n:report
```

#### Lints and fixes files
```
yarn run lint
```

#### Run your end-to-end tests
```
yarn run test:e2e
```

#### Run your unit tests
```
yarn run test:unit
```

#### Run your verbose unit tests
```
yarn run test:unit_verbose
```

Para testar clique aqui [```http://localhost:8080```](http://localhost:8080).

### **Produção**
Para a produção, você precisa fazer alguns truques para executar o ** modo Vue Route history ** em alguns serviços de implantação.

## [netlify](http://netlify.com)
Para usar no ** netlify **, você precisará criar no diretório ** public ** um arquivo com o nome *** _ redirects *** e o seguinte conteúdo:
```js
/*    /index.html   200
```

Vá para ** Settings> Build & Deploy ** e na sessão ** Build settings ** no relatório iiii:

- Comando de Build: **yarn build**
- Diretório de publicação: **dist**

### **Versioning**
0.1.0

### **Licensing**
 Não tenho nenhum direito sobre as imagens utilizadas.

MIT
Copyright (c) 2021 Felipecss.
