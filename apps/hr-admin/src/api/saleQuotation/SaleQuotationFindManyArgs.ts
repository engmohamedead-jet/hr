import { SaleQuotationWhereInput } from "./SaleQuotationWhereInput";
import { SaleQuotationOrderByInput } from "./SaleQuotationOrderByInput";

export type SaleQuotationFindManyArgs = {
  where?: SaleQuotationWhereInput;
  orderBy?: Array<SaleQuotationOrderByInput>;
  skip?: number;
  take?: number;
};
