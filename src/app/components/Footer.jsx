// import Image from "next/image";
import { useRouter } from "next/navigation"
import logo from "../../../public/app/logo-3.png"

export default function Footer() {
  const router = useRouter()

  return (
    <div>
      {/* dark:bg-[#243642] */}
      <footer className="bg-white  border-t-2 dark:bg-gray-800 border-slate-600 mt-8 lg:mt-10">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-4 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-4 md:mb-0 flex ">
              <button
                onClick={() => {router.push("/")}}
                className="flex gap-2 text-white font-bold  text-2xl"
              >                <span>ProfitONN</span>
              </button>
            </div>
            <div className="grid grid-cols-3 gap-6 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-2 text-xs lg:text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Resources
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 text-xs font-normal lg:text-sm">
                  <li className="mb-2">
                    <button onClick={() => {router.push("/")}} className="hover:underline">
                      Equity
                    </button>
                  </li>
                  <li>
                    <button onClick={() => {router.push("/")}} className="hover:underline">
                      F&O
                    </button>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-2 text-xs lg:text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Follow us
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-normal text-xs lg:text-sm">
                  <li className="mb-2">
                    <button onClick={() => {router.push("/")}} className="hover:underline ">
                      Github
                    </button>
                  </li>
                  <li>
                    <button onClick={() => {router.push("/")}} className="hover:underline">
                      Discord
                    </button>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-2 text-xs lg:text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Legal
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-normal text-xs lg:text-sm">
                  <li className="mb-1">
                    <button href="#" className="hover:underline">
                      Privacy Policy
                    </button>
                  </li>
                  <li>
                    <button href="#" className="hover:underline">
                      Terms &amp; Conditions
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-2 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-xs lg:text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2024. <button className="hover:underline">ProfitONN™</button>. All Rights
              Reserved.
            </span>
            <div className="flex mt-2 lg:m-4 sm:justify-center sm:mt-0">
              <button
                href="https://www.instagram.com/tradding.official/"
                target="none"
                className=""
              >
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white ml-4 hover:text-orange-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <button href="#" className="hover:text-slate-300">
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white ml-4 hover:text-orange-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z" />
                </svg>
              </button>
              <button href="#" className="hover:text-slate-300">
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white ml-4 hover:text-orange-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <button href="#" className="hover:text-slate-300">
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white ml-4 hover:text-orange-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <button href="#" className="hover:text-slate-300">
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white hover:text-orange-300 ml-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}