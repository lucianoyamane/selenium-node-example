# Selenium node example

<!---Esses são exemplos. Veja https://shields.io para outras pessoas ou para personalizar este conjunto de escudos. Você pode querer incluir dependências, status do projeto e informações de licença aqui--->

### About
> An example project using node and selenium.

## Getting started

### 💻 Prerequisites

* npm
  ```sh
  npm install
  ```

* running a example static webSite (required docker)
  ```sh
  cd static-pages/
  docker compose up -d
  ```
 The example webSite is running at:
  ```sh
  http://localhost:3600
  ```  
## Usage
Running all tests
```sh
  npm test
  ```
adding a specific dir/test
```sh
  npm test path_to_test
  ```
or with reporter
```sh
  npm run test:reporter
  ```

