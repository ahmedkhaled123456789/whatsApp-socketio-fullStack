
import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useSignup = () => {
	const [loading, setLoading] = useState(false);
	const { setAuthUser } = useAuthContext();

	const signup = async (inputs) => {
		const success = handleInputErrors(inputs);
		if (!success) return;

		setLoading(true);
		try {
			const formData = new FormData();
			for (const key in inputs) {
				formData.append(key, inputs[key]);
			}

			const res = await fetch("/api/auth/signup", {
				method: "POST",
				body: formData,
			});

			const data = await res.json();
			console.log(data);
			if (data.error) {
				throw new Error(data.error);
			}
			localStorage.setItem("chat-user", JSON.stringify(data));

			setAuthUser(data);
		} catch (error) {
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};

	return { loading, signup };
};

export default useSignup;

function handleInputErrors(inputs) {
	const { fullName, username, password, confirmPassword, gender, profileImg } = inputs;
	if (!fullName || !username || !password || !confirmPassword || !gender || !profileImg) {
		toast.error("Please fill in all fields");
		return false;
	}

	if (password !== confirmPassword) {
		toast.error("Passwords do not match");
		return false;
	}

	if (password.length < 6) {
		toast.error("Password must be at least 6 characters");
		return false;
	}
 
	return true;
}
