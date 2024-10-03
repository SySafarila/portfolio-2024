import { openModal } from "@/utils/modal";
import Link from "next/link";
import { useEffect } from "react";

const Navbar = (): JSX.Element => {
  useEffect(() => {
    setTimeout(() => {
      const syahrul = document.querySelector("#navbar #syahrul");
      const safarila = document.querySelector("#navbar #safarila");

      if (syahrul) {
        syahrul.classList.remove("bg-black", "text-white");
        syahrul.classList.add("bg-white", "text-black");
      }

      if (safarila) {
        safarila.classList.remove("bg-white", "text-black");
        safarila.classList.add("bg-black", "text-white");
      }
    }, 250);
  }, []);

  return (
    <div
      className="fixed left-0 top-0 z-40 w-full border-b bg-white"
      id="navbar"
    >
      <div className="mx-auto flex max-w-screen-lg justify-between px-4 py-4">
        <Link href="/" className="group flex border-2 border-black font-bold">
          <span
            className="bg-black px-2 uppercase tracking-widest text-white transition duration-500 ease-in-out"
            id="syahrul"
          >
            Syahrul
          </span>
          <span
            className="bg-white px-2 uppercase tracking-widest text-black transition duration-500 ease-in-out"
            id="safarila"
          >
            Safarila
          </span>
        </Link>
        <button onClick={() => openModal("#modal-navbar")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
