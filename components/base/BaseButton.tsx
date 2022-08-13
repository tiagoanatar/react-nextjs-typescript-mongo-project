import { NavBar } from "../layout/NavBar"

interface Button {
  label: string;
  type: "button" | "submit" | "reset";
}

export const BaseButton = ({ label, type }: Button) => {
  return (
    <>
    <button
      type={type}
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasWithBackdrop"
      aria-controls="offcanvasWithBackdrop"
    >
      {label}
    </button>
    <NavBar />
    </>
  );
};
