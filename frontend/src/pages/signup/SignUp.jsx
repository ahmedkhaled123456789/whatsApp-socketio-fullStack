import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckbox";
import { useState } from "react";
import useSignup from "../../hooks/useSignup";

const SignUp = () => {
	const [inputs, setInputs] = useState({
		fullName: "",
		username: "",
		password: "",
		confirmPassword: "",
		gender: "",
		profileImg: null,
	});
	const [imagePreview, setImagePreview] = useState(null);

	const { loading, signup } = useSignup();

	const handleCheckboxChange = (gender) => {
		setInputs({ ...inputs, gender });
	};

	const handleImageChange = (e) => {
		const file = e.target.files[0];
		setInputs({ ...inputs, profileImg: file });
		if (file) {
			setImagePreview(URL.createObjectURL(file));
		} else {
			setImagePreview(null);
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		await signup(inputs);
	};

	return (
		<div className="w-full  py-8 max-w-md mx-auto flex flex-col items-center justify-center min-h-screen  px-4 sm:px-6 lg:px-8">
			<div className="w-full p-6 rounded-lg shadow-md bg-white">
      <h1 className=" text_header text-2xl    md:text-1xl   font-semibold text-center text-gray-900">
  Sign Up <span className="text-green-500">{"What's"} App</span>
</h1>

				<form onSubmit={handleSubmit} className="mt-8 space-y-6">
					<div className="rounded-md shadow-sm">
						<div>
							<label className="label p-2">
								<span className="text-base label-text">Full Name</span>
							</label>
							<input
								type="text"
								placeholder="Full Name"
								className="w-full input input-bordered h-10"
								value={inputs.fullName}
								onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
							/>
						</div>

						<div className="mt-4">
							<label className="label p-2">
								<span className="text-base label-text">Email</span>
							</label>
							<input
								type="email"
								placeholder="Email"
								className="w-full input input-bordered h-10"
								value={inputs.username}
								onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
							/>
						</div>

						<div className="mt-4">
							<label className="label">
								<span className="text-base label-text">Password</span>
							</label>
							<input
								type="password"
								placeholder="Enter Password"
								className="w-full input input-bordered h-10"
								value={inputs.password}
								onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
							/>
						</div>

						<div className="mt-4">
							<label className="label">
								<span className="text-base label-text">Confirm Password</span>
							</label>
							<input
								type="password"
								placeholder="Confirm Password"
								className="w-full input input-bordered h-10"
								value={inputs.confirmPassword}
								onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
							/>
						</div>

						<div className="mt-4">
							<label htmlFor="file" className="label p-2 cursor-pointer flex items-center justify-center input input-bordered h-10">
								<span className="text-base label-text">Profile Image</span>
							</label>
							<input
								type="file"
								className="hidden"
								id="file"
								accept="image/*"
								onChange={handleImageChange}
							/>
							{imagePreview && (
								<div className="image-preview mt-2">
									<img
										src={imagePreview}
										alt="Preview"
										className="h-20 w-20 object-cover rounded"
									/>
								</div>
							)}
						</div>
					</div>

					<GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />

					<Link to="/login" className="text-sm hover:underline hover:text-green-500 mt-2 block text-center">
						Already have an account?
					</Link>

					<div>
						<button className="btn btn-block btn-sm mt-2 border border-slate-700" disabled={loading}>
							{loading ? <span className="loading loading-spinner"></span> : "Sign Up"}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default SignUp;
