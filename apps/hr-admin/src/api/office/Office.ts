import { Notification } from "../notification/Notification";
import { Store } from "../store/Store";

export type Office = {
  address: string | null;
  cellPhoneNumber: string | null;
  code: string;
  createdAt: Date;
  description: string | null;
  fax: string | null;
  homePhoneNumber: string | null;
  id: string;
  name: string;
  normalizedName: string;
  note: string | null;
  notifications?: Array<Notification>;
  stores?: Array<Store>;
  updatedAt: Date;
};
