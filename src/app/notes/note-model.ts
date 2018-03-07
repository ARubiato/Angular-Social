import { Time } from "@angular/common";

export interface Note {
  content: string;
  hearts: number;
  dislike: number;
  id?: string;
  time: any;
}
