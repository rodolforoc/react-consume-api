### React Consume API

Aplicação Web feita em [ReactJS](https://reactjs.org/) para consumir dados recebidos da [API NodeJS](https://github.com/rodolforoc/api-node) referente a Criação, Adição e Listagem de repositórios.

## Tecnologias
- [ReactJS](https://reactjs.org/)
- [Axios](https://github.com/axios/axios)
- [Jest](https://jestjs.io/)

### Funcionalidades da aplicação

- **`Listar os repositórios da sua API`**: Cria uma lista com o campo **title** de todos os repositórios que estão cadastrados na sua API.

- **`Adicionar um repositório a sua API`**: Adiciona um novo item na sua API através de um botão com o texto **Adicionar** e, após a criação, é capaz de exibir o nome dele após o cadastro.

- **`Remover um repositório da sua API`**: Para cada item da sua lista, possui um botão com o texto **Remover** que, ao clicar, chama uma função para remover esse item da lista do seu frontend e da sua API.

## Instalações e usos

Clone ou faça o download desse repositório:

```
# Clone o repositório
$ git clone https://github.com/rodolforoc/react-consume-api 
```

Dentro da pasta /react-consume-api rode os seguintes comandos:

```
# Instale as dependencias
$ yarn

# Rode a Aplicação Web
$ yarn start

# running on port 3000
```
