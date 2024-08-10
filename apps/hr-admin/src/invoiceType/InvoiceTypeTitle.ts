import { InvoiceType as TInvoiceType } from "../api/invoiceType/InvoiceType";

export const INVOICETYPE_TITLE_FIELD = "name";

export const InvoiceTypeTitle = (record: TInvoiceType): string => {
  return record.name?.toString() || String(record.id);
};
