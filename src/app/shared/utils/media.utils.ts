import {environment} from "../../../environments/environment";

export function getMediaUrl(path: string): string {
  return `assets/${environment.mode}/${path}`;
}
