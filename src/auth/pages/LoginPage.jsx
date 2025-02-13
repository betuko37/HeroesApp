import { useNavigate } from "react-router";

export const LoginPage = () => {

    const navigate = useNavigate();

    const onLogin = () =>{
        navigate('/', {
            replace: true
        })
    }


  return (
    <>
      <div className="bg-black h-screen flex justify-center mx-auto items-center">
        <div
          className="bg-white w-xl rounded-2xl flex flex-col items-center justify-center
                p-15 gap-10"
        >
          <div>
            <h1 className="text-3xl font-bold">Bienvenido de Nuevo !!</h1>
          </div>

          <div className="flex flex-col gap-5 w-xs">
            <input
              className="border-2 border-gray-200 rounded px-4 py-2"
              type="text"
              placeholder="Username"
            />
            <input
              className="border-2 border-gray-200 rounded px-4 py-2"
              type="password"
              placeholder="Password"
            />
          </div>

          <div className="flex justify-between min-w-xs text-sm">
            <div>
              <input className="" type="checkbox" name="" id="" />
              <label className="text-gray-600" htmlFor="">
                Remember me
              </label>
            </div>

            <div>
              <a className="italic text-gray-400 hover:text-red-300" href="">
                Forgot Password?
              </a>
            </div>
          </div>

          <div>
            <button 
            onClick={onLogin}
            className=" w-xs  bg-red-500 text-2xl px-4 py-1 rounded text-white transition hover:bg-red-900 cursor-pointer">
              LOGIN
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
