export type ISeat = {
  id: string;
  label: string;
  type?: "seat" | "space";
  bookingStatus?: "booked" | "available";
};

export type IRow = {
  id: string;
  label: string;
  seats: ISeat[];
};

export type ILayout = {
  type: string;
  price: number;
  rows: IRow[];
};

export type ILayoutResponse = {
  maxSeats: number;
  layout: ILayout[];
};
