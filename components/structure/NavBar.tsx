import Link from 'next/link'
import { pages } from '../../constants/pages';

export const NavBar = () => {
  return (
    <>
      <div
        className="offcanvas offcanvas-start"
        id="offcanvasWithBackdrop"
        aria-labelledby="offcanvasWithBackdropLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasWithBackdropLabel">
            Menu
          </h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          { pages ? (
            Object.entries(pages).map((item, key) => {
              return (
                <Link key={key} href={item[1]}><a>{item[0]}</a></Link>
              )
            })
          ) : 'loading menu'}
        </div>
      </div>
    </>
  );
};
