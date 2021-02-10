import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: `${process.env.REACT_APP_FB_APIKEY}`,
    authDomain: `${process.env.REACT_APP_FB_AUTHDOMAIN}`,
    projectId: `${process.env.REACT_APP_FB_PROJECTID}`,
    storageBucket: `${process.env.REACT_APP_FB_STORAGEBUCKET}`,
    messagingSenderId: `${process.env.REACT_APP_FB_MESSAGINGSENDERID}`,
    appId: `${process.env.REACT_APP_FB_APPID}`
}

// apply vault to get config;
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

export const createProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createAt = new Date();
        console.log(displayName);
        try{
            await userRef.set({
                displayName,
                email,
                createAt,
                ...additionalData
            });
        } catch (error) {
            console.error('error creating user',error);
        }
    } 

    return userRef;
};