import { ComponentType, ReactNode } from "react";

interface Header {
  blockA?: ReactNode | string;
  blockB?: ReactNode | string;
  blockC?: ReactNode | string;
}

export const NavBar = () => {
  return (
    <>
      <div
        className="offcanvas offcanvas-start"
        tabindex="-1"
        id="offcanvasWithBackdrop"
        aria-labelledby="offcanvasWithBackdropLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasWithBackdropLabel">
            Offcanvas with backdrop
          </h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <p>.....</p>
        </div>
      </div>
    </>
  );
};
