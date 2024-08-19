import { AttributeValueWhereUniqueInput } from "../attributeValue/AttributeValueWhereUniqueInput";
import { BillOfMaterialDetailCreateNestedManyWithoutProductVariantsInput } from "./BillOfMaterialDetailCreateNestedManyWithoutProductVariantsInput";
import { BillOfMaterialCreateNestedManyWithoutProductVariantsInput } from "./BillOfMaterialCreateNestedManyWithoutProductVariantsInput";
import { ProductBarcodeCreateNestedManyWithoutProductVariantsInput } from "./ProductBarcodeCreateNestedManyWithoutProductVariantsInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { PurchaseDetailCreateNestedManyWithoutProductVariantsInput } from "./PurchaseDetailCreateNestedManyWithoutProductVariantsInput";
import { PurchaseReturnDetailCreateNestedManyWithoutProductVariantsInput } from "./PurchaseReturnDetailCreateNestedManyWithoutProductVariantsInput";
import { SaleDetailCreateNestedManyWithoutProductVariantsInput } from "./SaleDetailCreateNestedManyWithoutProductVariantsInput";
import { SaleQuotationDetailCreateNestedManyWithoutProductVariantsInput } from "./SaleQuotationDetailCreateNestedManyWithoutProductVariantsInput";
import { SaleReturnDetailCreateNestedManyWithoutProductVariantsInput } from "./SaleReturnDetailCreateNestedManyWithoutProductVariantsInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type ProductVariantCreateInput = {
  attributeValueId: AttributeValueWhereUniqueInput;
  billOfMaterialDetails?: BillOfMaterialDetailCreateNestedManyWithoutProductVariantsInput;
  billOfMaterials?: BillOfMaterialCreateNestedManyWithoutProductVariantsInput;
  isActive: boolean;
  note?: string | null;
  productBarcodes?: ProductBarcodeCreateNestedManyWithoutProductVariantsInput;
  productId: ProductWhereUniqueInput;
  purchaseDetails?: PurchaseDetailCreateNestedManyWithoutProductVariantsInput;
  purchaseReturnDetails?: PurchaseReturnDetailCreateNestedManyWithoutProductVariantsInput;
  saleDetails?: SaleDetailCreateNestedManyWithoutProductVariantsInput;
  saleQuotationDetails?: SaleQuotationDetailCreateNestedManyWithoutProductVariantsInput;
  saleReturnDetails?: SaleReturnDetailCreateNestedManyWithoutProductVariantsInput;
  tenantId?: TenantWhereUniqueInput | null;
};
