import { AccountTransactionDetailCreateNestedManyWithoutStoresInput } from "./AccountTransactionDetailCreateNestedManyWithoutStoresInput";
import { AccountTransactionCreateNestedManyWithoutStoresInput } from "./AccountTransactionCreateNestedManyWithoutStoresInput";
import { NotificationCreateNestedManyWithoutStoresInput } from "./NotificationCreateNestedManyWithoutStoresInput";
import { OfficeWhereUniqueInput } from "../office/OfficeWhereUniqueInput";
import { StoreTypeWhereUniqueInput } from "../storeType/StoreTypeWhereUniqueInput";

export type StoreCreateInput = {
  accountTransactionDetails?: AccountTransactionDetailCreateNestedManyWithoutStoresInput;
  accountTransactions?: AccountTransactionCreateNestedManyWithoutStoresInput;
  addressLine1?: string | null;
  allowSale: boolean;
  cellPhoneNumber?: string | null;
  code: string;
  fax?: string | null;
  homePhoneNumber?: string | null;
  name: string;
  normalizedName: string;
  note?: string | null;
  notifications?: NotificationCreateNestedManyWithoutStoresInput;
  office: OfficeWhereUniqueInput;
  storeType: StoreTypeWhereUniqueInput;
  street?: string | null;
};
