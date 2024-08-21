import { SaleQuotationDetailWhereInput } from "./SaleQuotationDetailWhereInput";
import { SaleQuotationDetailOrderByInput } from "./SaleQuotationDetailOrderByInput";

export type SaleQuotationDetailFindManyArgs = {
  where?: SaleQuotationDetailWhereInput;
  orderBy?: Array<SaleQuotationDetailOrderByInput>;
  skip?: number;
  take?: number;
};
