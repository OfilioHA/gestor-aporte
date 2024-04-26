import type { ReactNode } from "react";

interface PropTypes {
  readonly children: ReactNode;
}

export default function AuthorizedLayout({ children }: PropTypes) {
  return (
    <section>
      interno
      {children}
    </section>
  );
}
