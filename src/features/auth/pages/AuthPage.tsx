import { useState } from "react";

import { Register } from "@Auth/components/Register";
import portada from "@assets/portada.jpg";
import { Login } from "@Auth/components/Login";

export function AuthPage() {
    const [isLogin, setIsLogin] = useState<boolean>(true);

    return (
        <div className="flex w-full min-h-screen items-center">
            <img className="w-2/4 h-screen object-fill" src={portada} alt="portada" />
            <div className="w-2/4">
                <div className="max-w-md mx-auto bg-[#141514] rounded-lg border border-gray-800 py-10 shadow-xl">
                    <p className="text-2xl font-bold text-white mb-6 text-center">{isLogin ? "Sign in to your account" : "Registrarse"}</p>

                    <div className="mb-6 w-4/5 mx-auto">{isLogin ? <Login /> : <Register />}</div>

                    <button onClick={() => setIsLogin(!isLogin)} className="w-full text-gray-400 hover:text-white text-center text-sm">
                        {isLogin ? "¿No tienes cuenta? Regístrate" : "¿Ya tienes cuenta? Inicia sesión"}
                    </button>
                </div>
            </div>
        </div>
    );
}
