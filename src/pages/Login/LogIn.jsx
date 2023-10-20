import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { FcGoogle } from "react-icons/fc";

const LogIn = () => {
	const { signInUser, googleSignIn } = useContext(AuthContext);
	const location = useLocation();
	const navigate = useNavigate();

    const handleSignIn = e =>{
		e.preventDefault();
		const form = e.target;
		const email = form.email.value;
		const password = form.password.value;
		console.log(email, password);

		signInUser(email, password)
			.then((result) => {
				console.log(result.user);
				// navigate after login
				navigate(location?.state ? location.state : "/");
			})
			.catch((error) => {
				console.error(error);
			});

		
    }

	const handleGoogleSignin = async (e) => {
		e.preventDefault();
		try {
			await googleSignIn();
			navigate(location?.state ? location.state : "/");
		} catch (err) {
			console.log(err.message);
		}
	};

    return (
		<div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
			<div className="w-full px-6 py-2 m-auto rounded-md md:max-w-xl p-6 shadow-xl shadow-rose-600/40 ring-2 ring-purple-600">
				<h1 className="text-3xl font-semibold text-center text-purple-600 underline decoration-wavy">
					Login to your account
				</h1>
				<form onSubmit={handleSignIn} className="mt-6">
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
					<a
						href="#"
						className="text-sm text-purple-600 hover:underline"
					>
						Forget Password?
					</a>
					<div className="mt-6">
						<button className="w-full px-4 py-2 tracking-wide font-semibold text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
							Log In
						</button>
					</div>
				</form>
				<div className="relative flex items-center justify-center w-full mt-6 border border-t bg-gray-400 dark:border-slate-500">
					<div className="absolute px-5 bg-white dark:bg-slate-700">Or</div>
				</div>
				<div className="flex mt-4 gap-x-2">
					<button
						type="button"
						onClick={handleGoogleSignin}
						className="flex items-center justify-center w-full p-3 border border-violet-500 rounded-md focus:ring-1 focus:ring-violet-700"
					>
						<FcGoogle></FcGoogle>
						<p className="ml-3">Google</p>
					</button>
				</div>
				<p className="mt-6 text-base text-center text-gray-800 dark:text-gray-100">
					{" "}
					Don&apos;t have an account?{" "}
					<Link
						to="/register"
						className="font-medium text-purple-600 hover:underline"
					>
						Register
					</Link>
				</p>
			</div>
		</div>
	);
};

export default LogIn;