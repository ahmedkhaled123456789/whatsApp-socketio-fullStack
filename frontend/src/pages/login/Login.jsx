import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const { loading, login } = useLogin();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await login(username, password);
	};

	return (
		<div className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
			<div className="w-full max-w-md p-6 rounded-lg shadow-md bg-white">
				<h1 className="text-3xl text_header font-semibold text-center text-gray-900">
					Login <span className="text-green-500">What's App</span>
				</h1>

				<form onSubmit={handleSubmit} className="mt-8 space-y-6">
					<div className="rounded-md shadow-sm -space-y-px">
						<div>
							<label className="label p-2" htmlFor="username">
								<span className="text-base label-text">Username</span>
							</label>
							<input
								id="username"
								name="username"
								type="text"
								autoComplete="username"
								required
								placeholder="Enter username"
								className="w-full input input-bordered h-10"
								value={username}
								onChange={(e) => setUsername(e.target.value)}
							/>
						</div>

						<div className="mt-4">
							<label className="label" htmlFor="password">
								<span className="text-base label-text">Password</span>
							</label>
							<input
								id="password"
								name="password"
								type="password"
								autoComplete="current-password"
								required
								placeholder="Enter Password"
								className="w-full input input-bordered h-10"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</div>
					</div>

					<Link to="/signup" className="text-sm text-green-500 hover:underline mt-2 block text-center">
						{"Don't"} have an account?
					</Link>

					<div>
						<button type="submit" className="btn btn-block btn-sm mt-2" disabled={loading}>
							{loading ? <span className="loading loading-spinner"></span> : "Login"}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
