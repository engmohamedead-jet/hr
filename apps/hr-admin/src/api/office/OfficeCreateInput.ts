import { NotificationCreateNestedManyWithoutOfficesInput } from "./NotificationCreateNestedManyWithoutOfficesInput";
import { StoreCreateNestedManyWithoutOfficesInput } from "./StoreCreateNestedManyWithoutOfficesInput";

export type OfficeCreateInput = {
  address?: string | null;
  cellPhoneNumber?: string | null;
  code: string;
  description?: string | null;
  fax?: string | null;
  homePhoneNumber?: string | null;
  name: string;
  normalizedName: string;
  note?: string | null;
  notifications?: NotificationCreateNestedManyWithoutOfficesInput;
  stores?: StoreCreateNestedManyWithoutOfficesInput;
};
