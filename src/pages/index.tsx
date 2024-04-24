import Image from "next/image";
import { Inter, Montserrat } from "next/font/google";
import HomepageView from "@/views/homepage";
import Template from "@/layouts/template";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Home() {
  return (
    <Template>
      <HomepageView />
    </Template>
  );
}
