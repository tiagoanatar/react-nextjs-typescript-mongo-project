import { ComponentType, ReactNode } from "react";
import { BaseButton } from "../base/BaseButton";
import { LayoutHeader } from "../structure/LayoutHeader";
import type { LayoutProps } from "../../types/pageWithLayouts";

interface Header {
  blockA?: ReactNode | string;
  blockB?: ReactNode | string;
  blockC?: ReactNode | string;
}

export const Main:LayoutProps = ({ children }) => {
  return (
    <>
      <LayoutHeader
        blockA={<BaseButton label="Header Button" type="button" />}
        blockB="Top Text"
      />
      <h1>Main</h1>
      <hr />
      {children}
    </>
  );
};
