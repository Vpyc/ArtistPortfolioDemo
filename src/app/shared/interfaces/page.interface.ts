import {HeroSection} from "./hero-section.interface";
import {SectionGroup} from "./section-group.interface";

export interface Page {
  hero?: HeroSection;
  groups: SectionGroup[];
}
