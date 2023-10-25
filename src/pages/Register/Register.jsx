import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {
	const { createUser } = useContext(AuthContext);
	const [signupError, setSignupError] = useState("");
	const [success, setSuccess] = useState("");
	const navigate = useNavigate();

	const handleRegister = (e) => {
		e.preventDefault();
		const form = new FormData(e.currentTarget);
		const name = form.get("name");
		const email = form.get("email");
		const password = form.get("password");
		const confirmPassword = form.get("confirmPassword");
		console.log(name, email, password, confirmPassword);

		// reset error and success
		setSignupError("");
		setSuccess("");

		if (password !== confirmPassword) {
			setSignupError("Password don't match.");
			return;
		} else if (password.length < 6) {
			console.log(password.length);
			setSignupError("Password must be at least 6 characters long.");
			return;
		} else if (!/[A-Z]/.test(password)) {
			setSignupError(
				"Password must contain at least one capital letter."
			);
			return;
		} else if (!/[!@#$%^&*]/.test(password)) {
			setSignupError(
				"Password must contain at least one special character."
			);
			return;
		}

		//createUser
		createUser(email, password, confirmPassword, name)
		.then(result =>{
			console.log(result.user);
			//new user has been created
			const createdAt = result.user.metadata?.creationTime;
			const user = { email, createdAt: createdAt };
			fetch("https://autobuzz-server.vercel.app/users", {
				method: "POST",
				headers: {
					"content-type": "application/json",
				},
				body: JSON.stringify(user),
			})
				.then((res) => res.json())
				.then((data) => {
					console.log(data);
					if (data.insertedId) {
						Swal.fire({
							title: "Success!",
							text: "User Added Succssfully",
							icon: "success",
							confirmButtonText: "Ok",
						});
					}
					navigate("/login");
				});
        })
        .catch(error =>{
            console.error(error);
			setSignupError(error.message);
        })
	};

    return (
		<div>
			<div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
				<div className="w-full px-6 py-2 m-auto rounded-md md:max-w-xl p-6 shadow-xl shadow-rose-600/40 md:ring-2 ring-purple-600">
					<h1 className="text-3xl font-semibold text-center text-purple-600 underline decoration-wavy">
						Create a new account
					</h1>
					<form onSubmit={handleRegister} className="mt-6">
						<div className="mb-2 ">
							<label
								htmlFor="name"
								className="block font-semibold text-gray-800 dark:text-gray-100"
							>
								Name
							</label>
							<input
								type="text"
								name="name"
								autoComplete="name"
								className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border border-violet-400 rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
							/>
						</div>
						<div className="mb-2">
							<label
								htmlFor="email"
								className="block font-semibold text-gray-800 dark:text-gray-100"
							>
								Email
							</label>
							<input
								type="email"
								name="email"
								autoComplete="email"
								className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border border-violet-400 rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
							/>
						</div>
						<div className="mb-2">
							<label
								htmlFor="password"
								className="block font-semibold text-gray-800 dark:text-gray-100"
							>
								Password
							</label>
							<div className="relative">
								<input
									type="password"
									name="password"
									id="password"
									className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border border-violet-400 rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
									required
								/>
							</div>
						</div>
						<div className="mb-2">
							<label
								htmlFor="confirmPassword"
								className="block font-semibold text-gray-800 dark:text-gray-100"
							>
								Confirm password
							</label>
							<div className="relative">
								<input
									type="password"
									name="confirmPassword"
									id="confirmPassword"
									className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border border-violet-400 rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
									required
								/>
							</div>
						</div>
						<div className="mt-6">
							<button className="w-full px-4 py-2 tracking-wide font-semibold text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
								Register
							</button>
						</div>
					</form>
					{signupError && (
						<p className="text-red-500">{signupError}</p>
					)}
					{success && <p className="text-green-500">{success}</p>}

					<p className="mt-6 text-base text-center text-gray-800 dark:text-gray-100">
						{" "}
						Already have an account?{" "}
						<Link
							to="/login"
							className="font-medium text-purple-600 hover:underline"
						>
							Log In
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Register;