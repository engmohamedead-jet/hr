import { Decimal } from "decimal.js";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { ProductVariantWhereUniqueInput } from "../productVariant/ProductVariantWhereUniqueInput";
import { PurchaseWhereUniqueInput } from "../purchase/PurchaseWhereUniqueInput";
import { PurchasePriceTypeWhereUniqueInput } from "../purchasePriceType/PurchasePriceTypeWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { UnitWhereUniqueInput } from "../unit/UnitWhereUniqueInput";

export type PurchaseDetailUpdateInput = {
  barcode?: string | null;
  discount?: Decimal | null;
  discountRate?: Decimal | null;
  isActive?: boolean;
  isError?: boolean | null;
  isReplicated?: boolean;
  isTaxed?: boolean;
  note?: string | null;
  price?: Decimal;
  priceTotal?: Decimal;
  productId?: ProductWhereUniqueInput;
  productSerialNumber?: string | null;
  productVariantId?: ProductVariantWhereUniqueInput | null;
  purchaseId?: PurchaseWhereUniqueInput;
  purchasePriceTypeId?: PurchasePriceTypeWhereUniqueInput | null;
  quantity?: Decimal;
  sequence?: number;
  tenantId?: TenantWhereUniqueInput | null;
  unitId?: UnitWhereUniqueInput;
};
