import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { OfficeWhereUniqueInput } from "../office/OfficeWhereUniqueInput";
import { StoreWhereUniqueInput } from "../store/StoreWhereUniqueInput";

export type NotificationWhereInput = {
  description?: StringNullableFilter;
  eventDateTime?: DateTimeNullableFilter;
  icon?: StringNullableFilter;
  id?: StringFilter;
  isSystem?: BooleanNullableFilter;
  note?: StringNullableFilter;
  notificationText?: StringNullableFilter;
  officeId?: OfficeWhereUniqueInput;
  store?: StoreWhereUniqueInput;
  toLoginId?: StringNullableFilter;
  toUserId?: StringNullableFilter;
  url?: StringNullableFilter;
};
