import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { SaleQuotationWhereUniqueInput } from "../saleQuotation/SaleQuotationWhereUniqueInput";

export type SaleOrderWhereInput = {
  customerId?: CustomerWhereUniqueInput;
  id?: StringFilter;
  saleOrderDate?: DateTimeNullableFilter;
  saleQuotation?: SaleQuotationWhereUniqueInput;
};
