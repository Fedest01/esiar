//import { GithubAuthProvider } from "firebase/auth";

const provider = new GithubAuthProvider();

provider.addScope('repo');

provider.setCustomParameters({
    'allow_signup': 'false'
  });

