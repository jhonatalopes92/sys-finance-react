import { useState } from "react"
import image from "../../assets/mobile-login-animate.svg"

export default function LoginPage(){
    const [user, setUser] = useState("")
    const [senha, setSenha] = useState(0)

    function clickLogin(){
        console.log(user)
        console.log(senha)
    }


    return (
        <div className="w-full h-screen flex bg-[#1e1e1e] text-white">  
            <div className="w-[50%] h-full flex justify-center items-center flex-col">
                <div className="w-full h-[20%] flex justify-center items-center">
                    <h1 className=" text-[#92d78a] text-[30px] font-bold">
                        Faça login<br/>
                        E entre para nosso time
                    </h1>
                </div>
                <div className="w-full h-[80%] flex justify-center items-center">
                    <img src={image} alt="" width={500} />
                </div>
            </div>
            <div className="w-[50%] h-full flex justify-center items-center">
                <div className="bg-[#292929] w-[60%] h-[60%] rounded-xl">
                    <div className="w-full h-[20%] flex items-center justify-center">
                        <h1 className="text-[#92d78a] font-bold text-[35px]">LOGIN</h1>
                    </div>
                    <div className="w-full h-[60%] flex items-center flex-col gap-3">
                        <div className="w-[80%] flex flex-col">
                            <label htmlFor="" className="text-[14px] ">Usuário</label>
                            <input
                                onChange={
                                    (event) => setUser(event.target.value)
                                }
                                type="text" 
                                placeholder="Usuário"
                                className="w-full h-[40px] rounded-lg border-none bg-[#434343] pl-2 outline-none"/>
                        </div>
                        <div className="w-[80%] flex flex-col">
                            <label htmlFor="" className="text-[14px]">Senha</label>
                            <input
                                onChange={
                                    (event) => setSenha(event.target.value)
                                } 
                                type="password" 
                                placeholder="Senha"
                                className="w-full h-[40px] rounded-lg border-none bg-[#434343] pl-2 outline-none"/>
                        </div>
                        <div className="w-full flex items-center justify-center leading-[0]">
                            <a href="" className="text-[10px] hover:underline decoration ">Recupere sua senha</a>
                        </div>
                    </div>
                    <div className="w-full h-[20%] flex justify-center">
                        <button
                            onClick={clickLogin}
                            className="w-[80%] h-[40px] rounded-lg bg-[#92d78a] text-[#1e1e1e] font-bold">LOGIN</button>
                    </div>
                </div>
            </div>
        </div>
    )
}