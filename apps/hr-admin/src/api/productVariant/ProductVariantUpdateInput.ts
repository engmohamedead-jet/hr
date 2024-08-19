import { AttributeValueWhereUniqueInput } from "../attributeValue/AttributeValueWhereUniqueInput";
import { BillOfMaterialDetailUpdateManyWithoutProductVariantsInput } from "./BillOfMaterialDetailUpdateManyWithoutProductVariantsInput";
import { BillOfMaterialUpdateManyWithoutProductVariantsInput } from "./BillOfMaterialUpdateManyWithoutProductVariantsInput";
import { ProductBarcodeUpdateManyWithoutProductVariantsInput } from "./ProductBarcodeUpdateManyWithoutProductVariantsInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { PurchaseDetailUpdateManyWithoutProductVariantsInput } from "./PurchaseDetailUpdateManyWithoutProductVariantsInput";
import { PurchaseReturnDetailUpdateManyWithoutProductVariantsInput } from "./PurchaseReturnDetailUpdateManyWithoutProductVariantsInput";
import { SaleDetailUpdateManyWithoutProductVariantsInput } from "./SaleDetailUpdateManyWithoutProductVariantsInput";
import { SaleQuotationDetailUpdateManyWithoutProductVariantsInput } from "./SaleQuotationDetailUpdateManyWithoutProductVariantsInput";
import { SaleReturnDetailUpdateManyWithoutProductVariantsInput } from "./SaleReturnDetailUpdateManyWithoutProductVariantsInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type ProductVariantUpdateInput = {
  attributeValueId?: AttributeValueWhereUniqueInput;
  billOfMaterialDetails?: BillOfMaterialDetailUpdateManyWithoutProductVariantsInput;
  billOfMaterials?: BillOfMaterialUpdateManyWithoutProductVariantsInput;
  isActive?: boolean;
  note?: string | null;
  productBarcodes?: ProductBarcodeUpdateManyWithoutProductVariantsInput;
  productId?: ProductWhereUniqueInput;
  purchaseDetails?: PurchaseDetailUpdateManyWithoutProductVariantsInput;
  purchaseReturnDetails?: PurchaseReturnDetailUpdateManyWithoutProductVariantsInput;
  saleDetails?: SaleDetailUpdateManyWithoutProductVariantsInput;
  saleQuotationDetails?: SaleQuotationDetailUpdateManyWithoutProductVariantsInput;
  saleReturnDetails?: SaleReturnDetailUpdateManyWithoutProductVariantsInput;
  tenantId?: TenantWhereUniqueInput | null;
};
