import { AttributeValue } from "../attributeValue/AttributeValue";
import { BillOfMaterialDetail } from "../billOfMaterialDetail/BillOfMaterialDetail";
import { BillOfMaterial } from "../billOfMaterial/BillOfMaterial";
import { ProductBarcode } from "../productBarcode/ProductBarcode";
import { Product } from "../product/Product";

export type ProductVariant = {
  attributeValueId?: AttributeValue;
  billOfMaterialDetails?: Array<BillOfMaterialDetail>;
  billOfMaterials?: Array<BillOfMaterial>;
  createdAt: Date;
  id: string;
  note: string | null;
  productBarcodes?: Array<ProductBarcode>;
  productId?: Product;
  updatedAt: Date;
};
