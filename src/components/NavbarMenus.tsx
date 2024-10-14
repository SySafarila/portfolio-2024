import { closeModal } from "@/utils/modal";
import Link from "next/link";

const NavbarMenus = (): JSX.Element => {
  return (
    <div
      className="fixed left-0 top-0 z-50 hidden h-full w-full overflow-y-auto overflow-x-hidden bg-transparent backdrop-blur-0 transition-all ease-in-out"
      id="modal-navbar"
    >
      <div
        className="relative flex min-h-full w-full items-center p-4"
        id="wrapper"
        onClick={(e) => {
          e.stopPropagation();
          closeModal("#modal-navbar");
        }}
      >
        <div
          className="relative mx-auto hidden w-full max-w-screen-md -translate-y-full transform flex-col gap-y-3 rounded-lg bg-white p-5 opacity-0 transition-all ease-in-out"
          id="content"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between">
            <h2 className="font-bold">Menus</h2>
            <button
              onClick={(e) => {
                e.stopPropagation();
                closeModal("#modal-navbar");
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="#000000"
                className="fill-black hover:fill-red-500"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z" />
              </svg>
            </button>
          </div>
          <div className="flex h-fit max-h-80 flex-col gap-2 overflow-y-auto overflow-x-hidden">
            <Link
              href="/dashboard"
              className="hover:underline"
              onClick={() => closeModal("#modal-navbar")}
            >
              Go To Dashboard
            </Link>
          </div>
          <div className="flex justify-end gap-2" id="buttons">
            <button
              className="rounded-lg border bg-white px-5 py-2 uppercase hover:bg-gray-100"
              onClick={(e) => {
                e.stopPropagation();
                closeModal("#modal-navbar");
              }}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarMenus;
