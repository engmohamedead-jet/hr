import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { SaleQuotationWhereUniqueInput } from "../saleQuotation/SaleQuotationWhereUniqueInput";

export type SaleOrderCreateInput = {
  customerId: CustomerWhereUniqueInput;
  saleOrderDate?: Date | null;
  saleQuotation?: SaleQuotationWhereUniqueInput | null;
};
