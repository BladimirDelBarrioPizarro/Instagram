# npm
npm install -S redux react-redux redux-thunk @types/react-redux
npm install --save redux-devtools-extension
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
