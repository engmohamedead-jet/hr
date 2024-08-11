import { PaymentTerm as TPaymentTerm } from "../api/paymentTerm/PaymentTerm";

export const PAYMENTTERM_TITLE_FIELD = "name";

export const PaymentTermTitle = (record: TPaymentTerm): string => {
  return record.name?.toString() || String(record.id);
};
