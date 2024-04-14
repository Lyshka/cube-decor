export enum TEMPLTE {
  template1 = "template1",
  template2 = "template2",
  template3 = "template3",
}

export interface typeWindow {
  template: TEMPLTE;
  minWidthWindow: string;
  maxWidthWindow: string;
  minHeightWindow: string;
  maxHeightWindow: string;
  minWidthDoor: string;
  maxWidthDoor: string;
  minHeightDoor: string;
  maxHeightDoor: string;
  title: string;
  name: string;
  img: string;
  minWidthFront: string;
  maxWidthFront: string;
  minWidthBack: string;
  maxWidthBack: string;
}
