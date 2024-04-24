import { Montserrat } from "next/font/google";
import { PropsWithChildren } from "react";

import HeadLayout from "./head";
import Header from "./header";

const montserrat = Montserrat({
  subsets: ["latin"],
});
export default function Template({ children }: PropsWithChildren) {
  return (
    <div className={`${montserrat.className}`}>
      <HeadLayout />
      <main>
        <Header />
        {children}
      </main>
    </div>
  );
}
