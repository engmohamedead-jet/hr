import { AccountTransactionDetail } from "../accountTransactionDetail/AccountTransactionDetail";
import { AccountTransaction } from "../accountTransaction/AccountTransaction";
import { Notification } from "../notification/Notification";
import { Office } from "../office/Office";
import { StoreType } from "../storeType/StoreType";

export type Store = {
  accountTransactionDetails?: Array<AccountTransactionDetail>;
  accountTransactions?: Array<AccountTransaction>;
  addressLine1: string | null;
  allowSale: boolean;
  cellPhoneNumber: string | null;
  code: string;
  createdAt: Date;
  fax: string | null;
  homePhoneNumber: string | null;
  id: string;
  name: string;
  normalizedName: string;
  note: string | null;
  notifications?: Array<Notification>;
  office?: Office;
  storeType?: StoreType;
  street: string | null;
  updatedAt: Date;
};
