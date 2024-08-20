import { BillOfMaterialDetail } from "../billOfMaterialDetail/BillOfMaterialDetail";
import { BillOfMaterial } from "../billOfMaterial/BillOfMaterial";
import { ProductUnit } from "../productUnit/ProductUnit";
import { ProductionOrder } from "../productionOrder/ProductionOrder";
import { Product } from "../product/Product";
import { PurchaseDetail } from "../purchaseDetail/PurchaseDetail";
import { PurchaseReturnDetail } from "../purchaseReturnDetail/PurchaseReturnDetail";
import { SaleDetail } from "../saleDetail/SaleDetail";
import { SaleOrderDetail } from "../saleOrderDetail/SaleOrderDetail";
import { SaleQuotationDetail } from "../saleQuotationDetail/SaleQuotationDetail";
import { SaleReturnDetail } from "../saleReturnDetail/SaleReturnDetail";
import { Tenant } from "../tenant/Tenant";

export type Unit = {
  billOfMaterialDetails?: Array<BillOfMaterialDetail>;
  billOfMaterials?: Array<BillOfMaterial>;
  code: string | null;
  createdAt: Date;
  description: string | null;
  id: string;
  isActive: boolean;
  isCompound: boolean | null;
  isDefault: boolean | null;
  name: string;
  normalizedName: string;
  note: string | null;
  productUnitCompareUnits?: ProductUnit | null;
  productUnits?: Array<ProductUnit>;
  productionOrders?: Array<ProductionOrder>;
  products?: Array<Product>;
  purchaseDetails?: Array<PurchaseDetail>;
  purchaseReturnDetails?: Array<PurchaseReturnDetail>;
  saleDetails?: Array<SaleDetail>;
  saleOrderDetails?: Array<SaleOrderDetail>;
  saleQuotationDetails?: Array<SaleQuotationDetail>;
  saleReturnDetails?: Array<SaleReturnDetail>;
  tenantId?: Tenant | null;
  updatedAt: Date;
};
