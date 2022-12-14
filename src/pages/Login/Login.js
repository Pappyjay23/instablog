import React, { useContext, useEffect } from "react";
import "./Login.css";
import GoogleLogo from "../../assets/images/google-logo.png";
import { AuthContext } from "../../config/authContext";
import { signInWithRedirect } from "firebase/auth";
import { auth, provider } from "../../config/firebaseConfig";
import { useNavigate } from "react-router-dom";

const Login = () => {
	const { setIsLogged, user } = useContext(AuthContext);
	const navigate = useNavigate();
	const loginWithGoogle = async () => {
		signInWithRedirect(auth, provider);
	};
	useEffect(() => {
		if (user != null) {
			navigate("/");
			localStorage.setItem("isLogged", true);
			setIsLogged(true);
		}
	}, [user, navigate, setIsLogged]);
	return (
		<div className='main__content__container'>
			<div className='main__content'>
				<div className='login'>
					<div className='login__card'>
						<h2>Instablog</h2>
						<h4>Join the community now.</h4>
						<button className='google__card' onClick={loginWithGoogle}>
							<span className='google__icon'>
								<img src={GoogleLogo} alt='Google Logo' />
							</span>
							<span>Sign In with Google</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
