import { SaleDetailWhereUniqueInput } from "../saleDetail/SaleDetailWhereUniqueInput";
import { SaleOrderDetailWhereUniqueInput } from "../saleOrderDetail/SaleOrderDetailWhereUniqueInput";
import { SaleOrderWhereUniqueInput } from "../saleOrder/SaleOrderWhereUniqueInput";
import { SaleQuotationDetailWhereUniqueInput } from "../saleQuotationDetail/SaleQuotationDetailWhereUniqueInput";
import { SaleReturnDetailWhereUniqueInput } from "../saleReturnDetail/SaleReturnDetailWhereUniqueInput";
import { SaleReturnWhereUniqueInput } from "../saleReturn/SaleReturnWhereUniqueInput";
import { SaleWhereUniqueInput } from "../sale/SaleWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type SalePriceTypeUpdateInput = {
  code?: string | null;
  description?: string | null;
  isActive?: boolean;
  name?: string;
  normalizedName?: string;
  note?: string | null;
  saleDetails?: SaleDetailWhereUniqueInput | null;
  saleOrderDetails?: SaleOrderDetailWhereUniqueInput | null;
  saleOrders?: SaleOrderWhereUniqueInput | null;
  saleQuotationDetails?: SaleQuotationDetailWhereUniqueInput | null;
  saleReturnDetails?: SaleReturnDetailWhereUniqueInput | null;
  saleReturns?: SaleReturnWhereUniqueInput | null;
  sales?: SaleWhereUniqueInput | null;
  tenantId?: TenantWhereUniqueInput | null;
};
