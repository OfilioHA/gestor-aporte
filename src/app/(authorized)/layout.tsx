import type { ReactNode } from "react";
import AuthorizedSideBar from "@/components/utils/authorized/side-bar";

interface PropTypes {
  readonly children: ReactNode;
}

export default function AuthorizedLayout({ children }: PropTypes) {
  return (
    <main className="d-flex">
      <AuthorizedSideBar />
      <div id="page-content">
        {children}
      </div>
    </main>
  );
}
