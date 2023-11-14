import { GithubAuthProvider } from "firebase/auth";
//se crea una instancia del objeto del proveedor de GitHub
const provider = new GithubAuthProvider();

provider.addScope('repo');

provider.setCustomParameters({
    'allow_signup': 'false'
  });

