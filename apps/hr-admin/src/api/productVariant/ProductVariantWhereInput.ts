import { AttributeValueWhereUniqueInput } from "../attributeValue/AttributeValueWhereUniqueInput";
import { BillOfMaterialDetailListRelationFilter } from "../billOfMaterialDetail/BillOfMaterialDetailListRelationFilter";
import { BillOfMaterialListRelationFilter } from "../billOfMaterial/BillOfMaterialListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ProductBarcodeListRelationFilter } from "../productBarcode/ProductBarcodeListRelationFilter";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type ProductVariantWhereInput = {
  attributeValueId?: AttributeValueWhereUniqueInput;
  billOfMaterialDetails?: BillOfMaterialDetailListRelationFilter;
  billOfMaterials?: BillOfMaterialListRelationFilter;
  id?: StringFilter;
  note?: StringNullableFilter;
  productBarcodes?: ProductBarcodeListRelationFilter;
  productId?: ProductWhereUniqueInput;
};
