import { AccountTransactionDetailUpdateManyWithoutStoresInput } from "./AccountTransactionDetailUpdateManyWithoutStoresInput";
import { AccountTransactionUpdateManyWithoutStoresInput } from "./AccountTransactionUpdateManyWithoutStoresInput";
import { NotificationUpdateManyWithoutStoresInput } from "./NotificationUpdateManyWithoutStoresInput";
import { OfficeWhereUniqueInput } from "../office/OfficeWhereUniqueInput";
import { StoreTypeWhereUniqueInput } from "../storeType/StoreTypeWhereUniqueInput";

export type StoreUpdateInput = {
  accountTransactionDetails?: AccountTransactionDetailUpdateManyWithoutStoresInput;
  accountTransactions?: AccountTransactionUpdateManyWithoutStoresInput;
  addressLine1?: string | null;
  allowSale?: boolean;
  cellPhoneNumber?: string | null;
  code?: string;
  fax?: string | null;
  homePhoneNumber?: string | null;
  name?: string;
  normalizedName?: string;
  note?: string | null;
  notifications?: NotificationUpdateManyWithoutStoresInput;
  office?: OfficeWhereUniqueInput;
  storeType?: StoreTypeWhereUniqueInput;
  street?: string | null;
};
