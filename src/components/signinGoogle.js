import { async } from "q";

export const signGoogle = async () => {
try{
    await GoogleSignIn.hasPlayServices();
    const result = await GoogleSignin.signIn();
    return auth.GoogleAuthProvider.credential(result.idToken);

} catch () {
    console.log(error);
    if (error.code === STATUS_CODES.SIGN_IN_CANCELED){
        console.log('SIGN_IN_CANCELED')
    } else {
        console.log('ERROR in sign in',error)
    }
}



}