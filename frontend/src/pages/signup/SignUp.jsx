// import { Link } from "react-router-dom";
// import GenderCheckbox from "./GenderCheckbox";
// import { useState } from "react";
// import useSignup from "../../hooks/useSignup";

// const SignUp = () => {
// 	const [inputs, setInputs] = useState({
// 		fullName: "",
// 		username: "",
// 		password: "",
// 		confirmPassword: "",
// 		gender: "",
//     profileImg:null
// 	});

// 	const { loading, signup } = useSignup();

// 	const handleCheckboxChange = (gender) => {
// 		setInputs({ ...inputs, gender });
// 	};

// 	const handleSubmit = async (e) => {
// 		e.preventDefault();
// 		await signup(inputs);
// 	};

// 	return (
// 		<div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
// 			<div className='w-full p-6 rounded-lg shadow-md bg-white bg-clip-padding   '>
// 				<h1 className='text-3xl font-semibold text-center text-black-300'>
// 					Sign Up <span className='text-green-500'> {"What's"} App</span>
// 				</h1>

// 				<form onSubmit={handleSubmit}>
// 					<div>
// 						<label className='label p-2'>
// 							<span className='text-base label-text'>Full Name</span>
// 						</label>
// 						<input
// 							type='text'
// 							placeholder='John Doe'
// 							className='w-full input input-bordered  h-10'
// 							value={inputs.fullName}
// 							onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
// 						/>
// 					</div>

// 					<div>
// 						<label className='label p-2 '>
// 							<span className='text-base label-text'>Username</span>
// 						</label>
// 						<input
// 							type='text'
// 							placeholder='johndoe'
// 							className='w-full input input-bordered h-10'
// 							value={inputs.username}
// 							onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
// 						/>
// 					</div>

// 					<div>
// 						<label className='label'>
// 							<span className='text-base label-text'>Password</span>
// 						</label>
// 						<input
// 							type='password'
// 							placeholder='Enter Password'
// 							className='w-full input input-bordered h-10'
// 							value={inputs.password}
// 							onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
// 						/>
// 					</div>

// 					<div>
// 						<label className='label'>
// 							<span className='text-base label-text'>Confirm Password</span>
// 						</label>
// 						<input
// 							type='password'
// 							placeholder='Confirm Password'
// 							className='w-full input input-bordered h-10'
// 							value={inputs.confirmPassword}
// 							onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
// 						/>
// 					</div> 
//           <input
//               type="file"
//                value={inputs.profileImg}
// 							onChange={(e) => setInputs({ ...inputs, profileImg: e.target.value })}
//              />

             
// 					<GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />

// 					<Link
// 						to={"/login"}
// 						className='text-sm hover:underline hover:text-green-500 mt-2 inline-block'
// 						href='#'
// 					>
// 						Already have an account?
// 					</Link>

// 					<div>
// 						<button className='btn btn-block btn-sm mt-2 border border-slate-700' disabled={loading}>
// 							{loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
// 						</button>
// 					</div>
// 				</form>
// 			</div>
// 		</div>
// 	);
// };
// export default SignUp;
 




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
		<div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
			<div className='w-full p-6 rounded-lg shadow-md bg-white bg-clip-padding'>
				<h1 className='text-3xl font-semibold text-center text-black-300'>
					Sign Up <span className='text-green-500'>{"What's"} App</span>
				</h1>

				<form onSubmit={handleSubmit}>
					<div>
						<label className='label p-2'>
							<span className='text-base label-text'>Full Name</span>
						</label>
						<input
							type='text'
							placeholder='user name'
							className='w-full input input-bordered h-10'
							value={inputs.fullName}
							onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
						/>
					</div>

					<div>
						<label className='label p-2'>
							<span className='text-base label-text'>Email</span>
						</label>
						<input
							type='text'
							placeholder='Email'
							className='w-full input input-bordered h-10'
							value={inputs.username}
							onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
						/>
					</div>

					<div>
						<label className='label'>
							<span className='text-base label-text'>Password</span>
						</label>
						<input
							type='password'
							placeholder='Enter Password'
							className='w-full input input-bordered h-10'
							value={inputs.password}
							onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
						/>
					</div>

					<div>
						<label className='label'>
							<span className='text-base label-text'>Confirm Password</span>
						</label>
						<input
							type='password'
							placeholder='Confirm Password'
							className='w-full input input-bordered h-10'
							value={inputs.confirmPassword}
							onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
						/>
					</div>

					<div className="flex items-center ">
            
						<label htmlFor="file" className="cursor-pointer  flex items-center justify-center input input-bordered h-10">
							<span className='text-base label-text'>Profile Image</span>
						</label>
						<input
							type='file'
							className='w-full mt-2    h-10'
              id="file"
              style={{ display: "none" }}
							accept='image/*'
							onChange={handleImageChange}
						/>
						{imagePreview && (
							<div className='image-preview mt-2'>
								<img
									src={imagePreview}
									alt='Preview'
									className='h-20 w-20 object-cover rounded'
								/>
							</div>
						)}
					</div>

					<GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />

					<Link
						to={"/login"}
						className='text-sm hover:underline hover:text-green-500 mt-2 inline-block'
					>
						Already have an account?
					</Link>

					<div>
						<button className='btn btn-block btn-sm mt-2 border border-slate-700' disabled={loading}>
							{loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default SignUp;
