import { SaleDetail } from "../saleDetail/SaleDetail";
import { SaleQuotationDetail } from "../saleQuotationDetail/SaleQuotationDetail";
import { SaleReturnDetail } from "../saleReturnDetail/SaleReturnDetail";
import { SaleReturn } from "../saleReturn/SaleReturn";
import { Sale } from "../sale/Sale";
import { Tenant } from "../tenant/Tenant";

export type SalePriceType = {
  code: string | null;
  createdAt: Date;
  description: string | null;
  id: number;
  isActive: boolean;
  name: string;
  normalizedName: string;
  note: string | null;
  saleDetails?: SaleDetail | null;
  saleQuotationDetails?: SaleQuotationDetail | null;
  saleReturnDetails?: SaleReturnDetail | null;
  saleReturns?: SaleReturn | null;
  sales?: Sale | null;
  tenantId?: Tenant | null;
  updatedAt: Date;
};
