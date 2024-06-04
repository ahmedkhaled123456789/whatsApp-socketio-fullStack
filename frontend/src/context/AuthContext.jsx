// import { createContext, useContext, useState } from "react";

// export const AuthContext = createContext();

// // eslint-disable-next-line react-refresh/only-export-components
// export const useAuthContext = () => {
// 	return useContext(AuthContext);
// };

// export const AuthContextProvider = ({ children }) => {
// 	const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem("chat-user")) || null);

// 	return <AuthContext.Provider value={{ authUser, setAuthUser }}>{children}</AuthContext.Provider>;
// };


import { createContext, useContext, useState, useEffect } from "react";

export const AuthContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => {
	return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
	const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem("chat-user")) || null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		// Simulate a delay to fetch auth status
		const fetchAuthStatus = () => {
			setLoading(true);
			setTimeout(() => {
				const user = JSON.parse(localStorage.getItem("chat-user"));
				setAuthUser(user);
				setLoading(false);
			}, 2000); // 2 seconds delay to simulate loading
		};
		fetchAuthStatus();
	}, []);

	return (
		<AuthContext.Provider value={{ authUser, setAuthUser, loading }}>
			{children}
		</AuthContext.Provider>
	);
};
