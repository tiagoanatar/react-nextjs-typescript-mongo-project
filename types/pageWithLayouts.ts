import { NextPage } from "next";
import type { ReactElement } from "react";

// Layout list
import { Main } from "../components/layouts/main";
import { Admin } from "../components/layouts/admin";

export type PageWithMainLayoutType = NextPage & { layout: typeof Main }
export type PageWithAdminLayoutType = NextPage & { layout: typeof Admin }

export type PageWithLayoutType =
 | PageWithMainLayoutType
 | PageWithAdminLayoutType

export type LayoutProps = ({
 children,
}: {
 children: ReactElement
}) => ReactElement

export default PageWithLayoutType