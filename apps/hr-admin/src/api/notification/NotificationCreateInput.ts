import { OfficeWhereUniqueInput } from "../office/OfficeWhereUniqueInput";
import { StoreWhereUniqueInput } from "../store/StoreWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type NotificationCreateInput = {
  description?: string | null;
  eventDateTime?: Date | null;
  icon?: string | null;
  isSystem?: boolean | null;
  note?: string | null;
  notificationText?: string | null;
  officeId?: OfficeWhereUniqueInput | null;
  store?: StoreWhereUniqueInput | null;
  toLoginId?: string | null;
  toRoleId?: InputJsonValue;
  toUserId?: string | null;
  url?: string | null;
};
