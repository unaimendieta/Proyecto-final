import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import { MainContainer } from "./styles";
import Footer from "../components/footer/Footer";
import LikePopUp from "../components/likePopUp/LikePopUp";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Layout = () => {
	const {user} = useContext(AuthContext);
	return (
	<>
		<MainContainer>
			<Header/>
			<Outlet />
			<Footer />
			{(user) && <LikePopUp/>}
		</MainContainer>
	</>
	);
};

export default Layout;