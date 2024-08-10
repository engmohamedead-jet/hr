import { InvoiceTypeWhereInput } from "./InvoiceTypeWhereInput";
import { InvoiceTypeOrderByInput } from "./InvoiceTypeOrderByInput";

export type InvoiceTypeFindManyArgs = {
  where?: InvoiceTypeWhereInput;
  orderBy?: Array<InvoiceTypeOrderByInput>;
  skip?: number;
  take?: number;
};
