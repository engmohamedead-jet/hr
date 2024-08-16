import { BillOfMaterialDetailCreateNestedManyWithoutProductsInput } from "./BillOfMaterialDetailCreateNestedManyWithoutProductsInput";
import { BillOfMaterialCreateNestedManyWithoutProductsInput } from "./BillOfMaterialCreateNestedManyWithoutProductsInput";
import { Decimal } from "decimal.js";
import { StoreWhereUniqueInput } from "../store/StoreWhereUniqueInput";
import { UnitWhereUniqueInput } from "../unit/UnitWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { ProductBarcodeCreateNestedManyWithoutProductsInput } from "./ProductBarcodeCreateNestedManyWithoutProductsInput";
import { ProductCategoryWhereUniqueInput } from "../productCategory/ProductCategoryWhereUniqueInput";
import { ProductDepartmentWhereUniqueInput } from "../productDepartment/ProductDepartmentWhereUniqueInput";
import { ProductGroupWhereUniqueInput } from "../productGroup/ProductGroupWhereUniqueInput";
import { ProductTypeWhereUniqueInput } from "../productType/ProductTypeWhereUniqueInput";
import { ProductVariantCreateNestedManyWithoutProductsInput } from "./ProductVariantCreateNestedManyWithoutProductsInput";
import { ProductionOrderCreateNestedManyWithoutProductsInput } from "./ProductionOrderCreateNestedManyWithoutProductsInput";
import { SaleTaxWhereUniqueInput } from "../saleTax/SaleTaxWhereUniqueInput";

export type ProductCreateInput = {
  barcode?: string | null;
  billOfMaterialDetails?: BillOfMaterialDetailCreateNestedManyWithoutProductsInput;
  billOfMaterials?: BillOfMaterialCreateNestedManyWithoutProductsInput;
  canExpire: boolean;
  code?: string | null;
  costPrice: Decimal;
  costPriceIncludesTax?: boolean | null;
  currentStockQuantity: Decimal;
  daysToManufacture?: number | null;
  defaultStoreId?: StoreWhereUniqueInput | null;
  defaultUnitId: UnitWhereUniqueInput;
  description?: string | null;
  discontinuedDate?: Date | null;
  discountRate?: Decimal | null;
  expireAlarmInDays?: number | null;
  expireIsDefaultAfterDaysFromPurchase?: number | null;
  firstStockQuantity?: Decimal | null;
  isActive: boolean;
  isCompound?: boolean | null;
  isFavorite: boolean;
  maintainInventory: boolean;
  minimumSalePrice?: Decimal | null;
  name: string;
  normalizedName: string;
  note?: string | null;
  photo?: InputJsonValue;
  productBarcodes?: ProductBarcodeCreateNestedManyWithoutProductsInput;
  productCategoryId?: ProductCategoryWhereUniqueInput | null;
  productDepartmentId?: ProductDepartmentWhereUniqueInput | null;
  productGroupId?: ProductGroupWhereUniqueInput | null;
  productTypeId: ProductTypeWhereUniqueInput;
  productVariants?: ProductVariantCreateNestedManyWithoutProductsInput;
  productionOrders?: ProductionOrderCreateNestedManyWithoutProductsInput;
  profitRate?: Decimal | null;
  reorderQuantity?: Decimal | null;
  salePrice: Decimal;
  salePriceIncludesTax: boolean;
  saleTaxId?: SaleTaxWhereUniqueInput | null;
};
