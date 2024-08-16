import { AttributeValueWhereUniqueInput } from "../attributeValue/AttributeValueWhereUniqueInput";
import { BillOfMaterialDetailCreateNestedManyWithoutProductVariantsInput } from "./BillOfMaterialDetailCreateNestedManyWithoutProductVariantsInput";
import { BillOfMaterialCreateNestedManyWithoutProductVariantsInput } from "./BillOfMaterialCreateNestedManyWithoutProductVariantsInput";
import { ProductBarcodeCreateNestedManyWithoutProductVariantsInput } from "./ProductBarcodeCreateNestedManyWithoutProductVariantsInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type ProductVariantCreateInput = {
  attributeValueId: AttributeValueWhereUniqueInput;
  billOfMaterialDetails?: BillOfMaterialDetailCreateNestedManyWithoutProductVariantsInput;
  billOfMaterials?: BillOfMaterialCreateNestedManyWithoutProductVariantsInput;
  note?: string | null;
  productBarcodes?: ProductBarcodeCreateNestedManyWithoutProductVariantsInput;
  productId: ProductWhereUniqueInput;
};
