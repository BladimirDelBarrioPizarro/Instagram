# npm
npm install -S redux react-redux redux-thunk @types/react-redux
npm install react-loadable 
npm install --save redux-devtools-extension
npm install redux-form
npm i --save @fortawesome/fontawesome-svg-core
npm i --save @fortawesome/free-solid-svg-icons
npm i --save @fortawesome/react-fontawesome
# Firebase

npm i firebase-tools
firebase login
firebase init -> Seleccionamos Firestore (Base de Datos(reglas e indices))
                               Functions (Nos crea un folder para nuestra lógica de negocio)
                               Hosting (Reglas para desplegarlas)
                               Storage  

              -> Selecionamos el proyecto creado previamente en firebase
              -> Seleccionamos los nombres para los archivos de reglas
              -> Seleccionamos lenguaje
              -> Seleccionamos gestor de paquetes
              -> Importante! Al seleccionar el directorio para el deploy debemos cambiar el nombre de public ya que ese naming ya esta ocupado por    create-react-app (build)
              -> Para nuestras url yes en index.html (se modificará)
              -> Seleccionamos nombre para las reglas de storage

# Config

//En tsconfig.json

"exclude": [
    "functions"
  ]

//En functions tsconfig.json

"typeRoots":[
      "./functions/node_modules/@types"
    ], 

//En firebase.json

"emulators": {
    "functions": {
      "host": "localhost",
      "port": "5003"
    }

npm -g get prefix
export PATH="/home/user/.npm-global/bin:$PATH"
firebase deploy
cd functions/
npm run serve