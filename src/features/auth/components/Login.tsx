import { Link } from "react-router-dom";

export const Login = () => {
    return (
        <form className=" flex flex-col gap-4">
            <div className="flex flex-col gap-3">
                <p>Your email</p>
                <input className="h-10 rounded-md px-2 outline-none" autoComplete="off" id="email" type="text" placeholder="name@email.com" />
            </div>
            <div className=" flex flex-col gap-2 ">
                <p>Password</p>
                <input className="h-10 rounded-md px-2" type="text" placeholder="name@email.com" />
            </div>
            <div className=" flex justify-between">
                <label className=" flex gap-2">
                    <input type="checkbox" />
                    <p> Recordar</p>
                </label>
                <Link to={"/home,e"}> Forgot password?</Link>
            </div>
            <button className=" bg-[#d9c041] text-[#141414] h-10 rounded-md">Iniciar sesión</button>
        </form>
    );
};
