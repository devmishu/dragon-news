
"use client"
import { authClient } from "@/lib/auth-client";
import Link from "next/link";

// Bangladesh? dbapon927@gmail.com

const LoginPage = () => {
    const handleLogin = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const userData = Object.fromEntries(formData.entries());
        console.log(userData);


        const { data, error } = await authClient.signIn.email({
            email: userData.email,
            password: userData.password,
            rememberMe: true,
            callbackURL: "/about",
        });
        console.log({ data, error });
        if (error) {
            alert(error.message);
        }else{
            alert("login sessusfull");
        }

    }
    return (
        <div className="min-h-[80vh] container mx-auto flex flex-col justify-center items-center">

            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-10">
                <h2 className="text-xl font-bold text-center border-b pb-5 border-gray-100">Login your account</h2>
                <div className="card-body">
                    <form onSubmit={handleLogin}>
                        <fieldset className="fieldset">
                            <label className="label">Email</label>
                            <input type="email" className="input" placeholder="Email" name="email" />

                            <label className="label">Password</label>
                            <input type="password" className="input" placeholder="Password" name="password" />

                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4">Login</button>
                        </fieldset>
                    </form>

                    <div className="mx-auto text-[12px]">
                        Dont't Have An Account ?
                        <Link href="/register" className="text-red-400 text-[12px]">Register</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;