import { Decimal } from "decimal.js";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { ProductVariantWhereUniqueInput } from "../productVariant/ProductVariantWhereUniqueInput";
import { PurchasePriceTypeWhereUniqueInput } from "../purchasePriceType/PurchasePriceTypeWhereUniqueInput";
import { PurchaseReturnWhereUniqueInput } from "../purchaseReturn/PurchaseReturnWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { UnitWhereUniqueInput } from "../unit/UnitWhereUniqueInput";

export type PurchaseReturnDetailUpdateInput = {
  barcode?: string | null;
  discount?: Decimal | null;
  discountRate?: Decimal | null;
  isActive?: boolean;
  isError?: boolean;
  isReplicated?: boolean;
  isTaxed?: boolean;
  note?: string | null;
  price?: Decimal;
  priceTotal?: Decimal | null;
  productId?: ProductWhereUniqueInput;
  productSerialNumber?: string | null;
  productVariantId?: ProductVariantWhereUniqueInput | null;
  purchasePriceTypeId?: PurchasePriceTypeWhereUniqueInput | null;
  purchaseReturnId?: PurchaseReturnWhereUniqueInput | null;
  quantity?: Decimal;
  sequence?: number;
  tenantId?: TenantWhereUniqueInput | null;
  unitId?: UnitWhereUniqueInput;
};
