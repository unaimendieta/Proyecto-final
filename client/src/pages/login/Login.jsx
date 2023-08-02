import { useContext, useEffect, useState } from "react";
import { BackButton, Button, Caption, Form, FormContainer, FormTitle, Header, Input,  MainContainer, Mask, Onboarding, OnboardingContainer, Option, Options, OtherWays, PasswordForget, RegisterButton, RegisterOption, Step, Steps, Text } from "./styles";

import firebaseApp from "../../firebase/credentials";
import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,} from "firebase/auth";
  import { getFirestore, doc,  setDoc } from "firebase/firestore";
import {  useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
  const auth = getAuth(firebaseApp);



const Login = () => {
    const navigate = useNavigate();
	const firestore = getFirestore(firebaseApp);
	const {user} = useContext(AuthContext);
	const [isRegistering,setIsRegistering] = useState(false);
    useEffect(() => {
        if (!user) {
         navigate("/login");
        }
}, [user])
	return (
		<>
            <MainContainer>
                <Header>
					
                    <BackButton to="/">VOLVER</BackButton>
				</Header>   
                <Mask>
				</Mask>   
				<FormContainer>
					{!isRegistering ?
						<Form onSubmit={e=>submitHandle(e,isRegistering,setIsRegistering,firestore,navigate)}>
							<FormTitle>Bienvenido de nuevo 👋</FormTitle>
							<Input type="email" placeholder="Email" name="email" required/>
							<Input type="password" placeholder="Password"  name="password" required/>
							<Button>INICIAR SESIÓN</Button>
							<PasswordForget>He olvidado mi contraseña</PasswordForget>
							<OtherWays>
								<Caption>O continua usando</Caption>
								<Options>
									<Option><img src="../../../assets/login/google.png" /></Option>
									<Option><img src="../../../assets/login/facebook.png" /></Option>
								</Options>
							</OtherWays>
							<RegisterOption>
								<FormTitle>¿Aun no eres parte de Pedal Price?</FormTitle>	
								<RegisterButton onClick={()=>setIsRegistering(true)}>CREAR CUENTA</RegisterButton>
							</RegisterOption>
						</Form>	
						:
						<Form onSubmit={e=>submitHandle(e,isRegistering,setIsRegistering,firestore,navigate)}>
							<FormTitle>Bienvenido de nuevo 👋</FormTitle>
							<Input type="text" placeholder="Nombre" name="name" required/>
							<Input type="text" placeholder="Apellido" name="surname" required/>
							<Input type="email" placeholder="Email" name="email" required/>
							<Input type="password" placeholder="Contraseña"  name="password" required/>
							<Button>CREAR CUENTA</Button>
							<PasswordForget>He olvidado mi contraseña</PasswordForget>
							<OtherWays>
								<Caption>O continua usando</Caption>
								<Options>
									<Option><img src="../../../assets/login/google.png" /></Option>
									<Option><img src="../../../assets/login/facebook.png" /></Option>
								</Options>
							</OtherWays>
							<RegisterOption>
								<FormTitle>¿Ya eres parte de Pedal Price?</FormTitle>	
								<RegisterButton onClick={()=>setIsRegistering(false)}>INICIAR SESIÓN</RegisterButton>
							</RegisterOption>
						</Form>
					}
					
				</FormContainer>
				<OnboardingContainer>
					<Onboarding>
						<Text>There is a filter that does shadows as well: drop-shadow(). But you can’t use it directly on the element because the clip-path will cut it off as well. So you make a parent:</Text>
						<Steps>
							<Step className="actual"></Step>
							<Step></Step>
							<Step></Step>
						</Steps>
					</Onboarding>
				</OnboardingContainer>
				
            </MainContainer>
		</>
	);
};

const submitHandle = async(params,isRegistering,setIsRegistering,firestore,navigate)=>{
	params.preventDefault();
	const email = params.target.elements.email.value;
	const password = params.target.elements.password.value;
	if (isRegistering) {
		const name = params.target.elements.name.value;
		const surname = params.target.elements.surname.value;
		// registrar
		try {
			registerNewUser(email, password, name,surname,firestore);
			setIsRegistering(false)
		  } catch (error) {
			console.log(error.message);
		  }
	  } else {
		// login
		await signInWithEmailAndPassword(auth, email, password);
		navigate("/");
		
	  }
}
const registerNewUser = async(email, password, name,surname,firestore)=>{
	
	const userInfo = await createUserWithEmailAndPassword(
		auth,
		email,
		password
	  ).then((userInfo) => {
		return userInfo;
	  });
	  const docuRef = doc(firestore, `users/${userInfo.user.uid}`);
	  setDoc(docuRef, { name, surname, liked:[], plan:{type:"gratis",price:0,frequency:null,likeMax:3,historic:false}});
}



export default Login;