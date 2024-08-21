import { SalePayment as TSalePayment } from "../api/salePayment/SalePayment";

export const SALEPAYMENT_TITLE_FIELD = "bankBrach";

export const SalePaymentTitle = (record: TSalePayment): string => {
  return record.bankBrach?.toString() || String(record.id);
};
