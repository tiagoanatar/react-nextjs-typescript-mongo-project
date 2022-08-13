import { ComponentType, ReactNode } from "react";
import { BaseButton } from "../base/BaseButton";
import { LayoutHeader } from "../structure/LayoutHeader";
import type { LayoutProps } from "../../types/pageWithLayouts";

interface Header {
  blockA?: ReactNode | string;
  blockB?: ReactNode | string;
  blockC?: ReactNode | string;
}

export const Admin:LayoutProps = ({ children }) => {
  return (
    <>
      <LayoutHeader
        blockA={<BaseButton label="Header Button" type="button" />}
        blockB="Top Text"
      />
      <h1>Admin</h1>
      <hr />
      {children}
    </>
  );
};
