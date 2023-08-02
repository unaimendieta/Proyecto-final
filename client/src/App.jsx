import { BrowserRouter } from "react-router-dom";
import Router from './router/Router';
import { GlobalStyles } from './styles/GlobalStyles';
import AuthProvider from "./providers/auth.provider";


const App = () => {
	
	return (
		<>
			<AuthProvider>
				<BrowserRouter>
				<GlobalStyles />
					<Router />
				</BrowserRouter>
			</AuthProvider>
		</>
	);
};

export default App;
