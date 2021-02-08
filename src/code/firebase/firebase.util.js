import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyDkswWNb9jHvDo7YyL64yp8Ykj1QwLgz0U",
    authDomain: "tutorial-react-91fe5.firebaseapp.com",
    projectId: "tutorial-react-91fe5",
    storageBucket: "tutorial-react-91fe5.appspot.com",
    messagingSenderId: "986164906144",
    appId: "1:986164906144:web:cbde476fe0965facc161c5"
};
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