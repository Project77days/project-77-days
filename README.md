# Project 77days
Um app que faz o acompanhamento de restramento de tasks (hábitos) realizados durante 77 dias. Que tem como obejetivo mostrar ao cliente um dashboard de checks das atividades e porcetagem de aproveitamento.

&nbsp;
## Screenshot

![Group 2517](https://github.com/Ar3secchim/project-77-days/assets/82913620/d0979d6e-410a-4d4a-96cf-2f1f955910df)

&nbsp;
## Executando o projeto

Abaixo seguem as instruções para você executar o projeto na sua máquina.

Comece clonando o repositório e instalando suas dependências:

```sh
git clone https://github.com/Ar3secchim/project-77-days.git
cd project-77-days.git
npm install
```
&nbsp;

### Back-end

O back-end desse projeto é construído em Node.js, mais especificamente sua versão LTS.

> Você pode instalar o Node.js seguindo [esse guia](https://efficient-sloth-d85.notion.site/Instalando-o-Node-js-d40fdabe8f0a491eb33b85da93d90a2f).

Além do Node.js, utilizamos o banco de dados MySql vis ORM Prisma

```sh
cd apps/server

# Copiar o arquivo com os dados de conexão e demais variáveis ambiente
mrkdir .env.example .env

# Subir o servidor HTTP
npm run start:dev
```

### Mobile

Para executar o app mobile pwa. Experência par ausuário de uma app nativo porém que roda no navegador.

```sh
# Caso esteja usando um dispositivo físico
npm start
```

&nbsp;
## 💜 Tech Stack 

**📱 Mobile:**

- [PWA](https://web.dev/learn/pwa/)
- [React](https://github.com/facebook/react/)
- [Tailwind](https://github.com/tailwindlabs/tailwindcss)

**🏧 Server:**

- [Express](https://github.com/expressjs/express)
- [Prisma](https://github.com/prisma/prisma)
- [Mysql](https://github.com/mysql) 

&nbsp;

## 🚀 Funcionalidades: 
Até o momento, levando em consideração o prazo de 2 meses (Due: 23/06/2023), listei algumas funcionalidades básicas para ser entregue na primeira parte do App.

### Funcionalidades 1.0 (MVP): 

- [x] **Configuração  do projeto**
        setup de mobile e back-end
        
- [ ] **Autenticação google**

- [ ] **Dashboard de atividades**
      Criar uma tela que estára todas as tasks que precisão ser feitas
      
- [ ] **Feed de progresso**
      Criar uma tela para mostrar o progresso e a porcetagem de aproveitamento do projeto

- [ ] **Configuração  da data do projeto**
        Criar um formulário para a configuração do inicio e fim do projeto


## Feedback
Este projeto faz parte do meu portfólio, ficarei feliz em receber feedback sobre o projeto, sobre os códigos, estrutura ou qualquer coisa que me ajude a evoluir para me tornar uma desenvolvedora melhor

Email: renarasecchim@hotmail.com

Conecte-se comigo [Linkedin](https://www.linkedin.com/in/renarasecchim/)
