import {Section} from "../models/sections.type";

export interface SectionGroup {
  backgroundColor?: string;
  textColor?: string;
  sections: Section[];
}
