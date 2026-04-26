"use client"
import { authClient } from "@/lib/auth-client";



const RegisterPage = () => {
    const handleRegister = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const userData = Object.fromEntries(formData.entries());
        console.log(userData);


        const { data, error } = await authClient.signUp.email({
            name: userData.name,
            image: userData.photoUrl,
            email: userData.email,
            password: userData.password,
        });

        console.log({ data, error });

        if (error) {
            alert(error.message)
        } else {
            alert("Registetion sessusfull");
        }

    }
    return (
        <div className="min-h-[80vh] container mx-auto flex flex-col justify-center items-center">

            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-10">
                <h2 className="text-xl font-bold text-center border-b pb-5 border-gray-100">Register your account</h2>
                <div className="card-body">

                    <form onSubmit={handleRegister}>
                        <fieldset className="fieldset">
                            <label className="label">Your Name</label>
                            <input type="text" className="input" placeholder="Enter your name" name="name" />


                            <label className="label">Photo URL</label>
                            <input type="url" className="input" placeholder="Enter your photo url" name="photoUrl" />

                            <label className="label">Email</label>
                            <input type="email" className="input" placeholder="Enter your photo url" name="email" />

                            <label className="label">Password</label>
                            <input type="password" className="input" placeholder="Enter your password" name="password" />

                            <div className="flex items-center gap-2"><input type="checkbox" />
                                <label>Accept Term & Conditions</label></div>
                            <button className="btn btn-neutral mt-4">Register</button>
                        </fieldset>
                    </form>


                </div>
            </div>
        </div>
    );
};

export default RegisterPage;