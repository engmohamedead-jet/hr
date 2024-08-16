import { AttributeValueWhereUniqueInput } from "../attributeValue/AttributeValueWhereUniqueInput";
import { BillOfMaterialDetailUpdateManyWithoutProductVariantsInput } from "./BillOfMaterialDetailUpdateManyWithoutProductVariantsInput";
import { BillOfMaterialUpdateManyWithoutProductVariantsInput } from "./BillOfMaterialUpdateManyWithoutProductVariantsInput";
import { ProductBarcodeUpdateManyWithoutProductVariantsInput } from "./ProductBarcodeUpdateManyWithoutProductVariantsInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type ProductVariantUpdateInput = {
  attributeValueId?: AttributeValueWhereUniqueInput;
  billOfMaterialDetails?: BillOfMaterialDetailUpdateManyWithoutProductVariantsInput;
  billOfMaterials?: BillOfMaterialUpdateManyWithoutProductVariantsInput;
  note?: string | null;
  productBarcodes?: ProductBarcodeUpdateManyWithoutProductVariantsInput;
  productId?: ProductWhereUniqueInput;
};
