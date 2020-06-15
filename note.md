# Installation d'un nouveau projet
1 Installer une nouvelle application react

npx create-react-app my-react-app
Créer un dossier my-react-app avec le contenu nécesaire pour ReactJS

2 Installer electron

Dans le projet my-react-app
npm install --save-dev electron

{
    "name": "electdemo",
    "version": "0.1.0",
    "main": "public/Main.js",
    "private": true,
    "dependencies": {
    "react": "^16.4.2",
    "react-dom": "^16.4.2",
    "react-scripts": "1.1.5",
    "electron": "^2.0.8"
    },
    "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject",
    "electron-start": "electron ."
    }
}

3 Installation du server Backend
creer un dossier serverWeb
initier un package json 

npm init
npm install express --save

Creer un fichier app.js
dans le terminal lancer node app.js

Creer un dossier routes pour mettre les routes à l'interieur.

4 Installation de bootstrap
npm install bootstrap
npm install jquery
npm install popper.js

dans le fichier index.js de React:
import 'bootstrap/dist/css/bootstrap.min.css'

5 Installation de mongoDb
dans le répertoire serverWeb
npm install mongodb --save

ne pas oublier d'installer MongoDB et de disposer d'une bdd 
Pour info sur mac : 
https://medium.com/better-programming/installing-mongodb-on-macos-catalina-aab1cbe0c836


## lien vers les applications
ReactJs
https://reactjs.org/

ElectronJS
https://www.electronjs.org/

Redux
https://redux.js.org/

React-Redux
https://react-redux.js.org/

Redux-Saga
https://redux-saga.js.org/

Bootstrap
https://getbootstrap.com/

Material-UI
https://material-ui.com/