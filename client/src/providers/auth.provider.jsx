import { useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import firebaseApp from "../firebase/credentials";

const auth = getAuth(firebaseApp);

const AuthProvider = ({children})=>{
    const [user, setUser] = useState(null);
    const [userLoading, setUserLoading] = useState(false);

    useEffect(() => {
        const unsuscribe = onAuthStateChanged(auth, (firebaseUser) => {
            if (firebaseUser) {
              
                setUserLoading(true);
                setUserWithFirebase(firebaseUser, setUser);
              
            } else {
              setUser(null);
              setUserLoading(false);
            }
          });

          return ()=>unsuscribe();
    }, [])
    

    
    console.log(userLoading);

    return(
        <>
            <AuthContext.Provider value={{user,setUser,userLoading}}>
                {children}
            </AuthContext.Provider>
        </>
    )
};

const setUserWithFirebase = async (firebaseUser, setUser) => {

    const response = await fetch("http://localhost:3000/api/users/getById/" + firebaseUser.uid);
  
    let data = await response.json();
  
    data = data.data;
    const userData = {
      uid: firebaseUser.uid,
      name: data.name,
      surname: data.surname,
      email: firebaseUser.email,
      liked: data.liked,
      payments: data.payments,
      plan: data.plan
    };
    setUser(userData);
  }

export default AuthProvider;