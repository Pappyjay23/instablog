import React, { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthContextWrapper = ({children}) => {
	const [isLogged, setIsLogged] = useState(localStorage.getItem('isLogged'));
	const authValues = {
		isLogged,
		setIsLogged,
	};
	return (
		<AuthContext.Provider value={authValues}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContextWrapper;