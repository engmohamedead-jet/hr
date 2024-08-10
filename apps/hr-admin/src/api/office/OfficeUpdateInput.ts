import { NotificationUpdateManyWithoutOfficesInput } from "./NotificationUpdateManyWithoutOfficesInput";
import { StoreUpdateManyWithoutOfficesInput } from "./StoreUpdateManyWithoutOfficesInput";

export type OfficeUpdateInput = {
  address?: string | null;
  cellPhoneNumber?: string | null;
  code?: string;
  description?: string | null;
  fax?: string | null;
  homePhoneNumber?: string | null;
  name?: string;
  normalizedName?: string;
  note?: string | null;
  notifications?: NotificationUpdateManyWithoutOfficesInput;
  stores?: StoreUpdateManyWithoutOfficesInput;
};
