import { useRef } from "react";
import CardsContainer from "@/containers/cards";
import HeroContainer from "@/containers/hero";

/**
 * An interactive homepage view component.
 * @returns {JSX.Element} The rendered homepage view.
 */
export default function HomepageView() {
  const sectionRef = useRef<HTMLDivElement>(null);

  /**
   * Scrolls the page to the referenced section.
   */
  const scrollToSection = () => {
    const sectionElement = sectionRef.current;
    if (sectionElement) {
      const sectionPosition = sectionElement.offsetTop;
      window.scrollTo({
        top: sectionPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      {/* Renders the hero section container */}
      <HeroContainer func={scrollToSection} />

      {/* Renders the cards container with a reference to the section */}
      <CardsContainer ref={sectionRef} />
    </div>
  );
}
