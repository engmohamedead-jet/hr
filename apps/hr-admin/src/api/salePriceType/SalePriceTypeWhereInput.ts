import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { StringFilter } from "../../util/StringFilter";
import { SaleDetailWhereUniqueInput } from "../saleDetail/SaleDetailWhereUniqueInput";
import { SaleQuotationDetailWhereUniqueInput } from "../saleQuotationDetail/SaleQuotationDetailWhereUniqueInput";
import { SaleReturnDetailWhereUniqueInput } from "../saleReturnDetail/SaleReturnDetailWhereUniqueInput";
import { SaleReturnWhereUniqueInput } from "../saleReturn/SaleReturnWhereUniqueInput";
import { SaleWhereUniqueInput } from "../sale/SaleWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type SalePriceTypeWhereInput = {
  code?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: IntFilter;
  isActive?: BooleanFilter;
  name?: StringFilter;
  normalizedName?: StringFilter;
  note?: StringNullableFilter;
  saleDetails?: SaleDetailWhereUniqueInput;
  saleQuotationDetails?: SaleQuotationDetailWhereUniqueInput;
  saleReturnDetails?: SaleReturnDetailWhereUniqueInput;
  saleReturns?: SaleReturnWhereUniqueInput;
  sales?: SaleWhereUniqueInput;
  tenantId?: TenantWhereUniqueInput;
};
