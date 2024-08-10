import { Office } from "../office/Office";
import { Store } from "../store/Store";
import { JsonValue } from "type-fest";

export type Notification = {
  createdAt: Date;
  description: string | null;
  eventDateTime: Date | null;
  icon: string | null;
  id: string;
  isSystem: boolean | null;
  note: string | null;
  notificationText: string | null;
  officeId?: Office | null;
  store?: Store | null;
  toLoginId: string | null;
  toRoleId: JsonValue;
  toUserId: string | null;
  updatedAt: Date;
  url: string | null;
};
