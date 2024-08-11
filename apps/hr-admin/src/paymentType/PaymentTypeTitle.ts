import { PaymentType as TPaymentType } from "../api/paymentType/PaymentType";

export const PAYMENTTYPE_TITLE_FIELD = "name";

export const PaymentTypeTitle = (record: TPaymentType): string => {
  return record.name?.toString() || String(record.id);
};
