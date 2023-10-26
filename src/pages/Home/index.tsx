import React from 'react'

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-green-900 flex flex-col items-start text-gray-900 antialiased relative">
      <div
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 80%, 0% 100%)",
          height: "34rem",
        }}
        className="absolute bg-green-800 inset-x-0 top-0"
      ></div>
      <div className="mx-auto z-10 mt-48 text-center">
        <h1 className="text-white text-5xl font-semibold">
          Bem vindo <span className="text-yellow-500">ao Club</span>
        </h1>
        <p className="text-green-200 mt-2">
          Torne-se um novo membro em 3 etapas fáceis
        </p>
      </div>
      <div className="max-w-xl w-full mt-24 mb-24 rounded-lg shadow-2xl bg-white mx-auto overflow-hidden z-10">
        <div className="px-16 py-10">
          <form>
            <h2 className="font-semibold text-3xl mb-8">
              Informações Pessoais
            </h2>
            <label htmlFor="username">Usuário</label>
            <input
              type="text"
              id="username"
              name="username"
              className="border border-slate-400 focus:border-black hover:border-black outline-none w-full px-2 h-8 rounded-md"
            />
            <h2 className="font-semibold text-3xl mb-8">Informações de pagamento</h2>
            <label htmlFor="address">Endereço</label>
            <input
              type="text"
              id="address"
              name="address"
              className="border border-slate-400 focus:border-black hover:border-black outline-none w-full px-2 h-8 rounded-md"
            />
            <h2 className="font-semibold text-3xl mb-8">Informação legal</h2>
            <div className="flex items-center mt-6">
              <input
                name="toc"
                className="w-5 h-5 accent-green-500 rounded mr-3 border-2 border-gray-300 ring-0 focus:ring-0 focus:ring-offset-0 focus:border-0 cursor-pointer"
                type="checkbox"
              />
              <span>
                Eu aceito os{" "}
                <a className="text-blue-400 underline" href="/">
                  Termos e condições
                </a>
                .
              </span>
            </div>
            <div className="flex items-center mt-6">
              <input
                name="pp"
                className="w-5 h-5 accent-green-500 rounded mr-3 border-2 border-gray-300 ring-0 focus:ring-0 focus:ring-offset-0 focus:border-0 cursor-pointer"
                type="checkbox"
              />
              <span>
                Eu aceito a{" "}
                <a className="text-blue-400 underline" href="/">
                  Política de Privacidade
                </a>
                .
              </span>
            </div>
            <button
              type="submit"
              className="mt-6 bg-green-600 text-white rounded px-8 py-6 w-full disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              Criar conta
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
