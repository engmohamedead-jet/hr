import { Decimal } from "decimal.js";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { ProductVariantWhereUniqueInput } from "../productVariant/ProductVariantWhereUniqueInput";
import { SalePriceTypeWhereUniqueInput } from "../salePriceType/SalePriceTypeWhereUniqueInput";
import { SaleReturnWhereUniqueInput } from "../saleReturn/SaleReturnWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { UnitWhereUniqueInput } from "../unit/UnitWhereUniqueInput";

export type SaleReturnDetailUpdateInput = {
  barcode?: string | null;
  discount?: Decimal | null;
  discountRate?: Decimal | null;
  isActive?: boolean;
  isError?: boolean;
  isReplicated?: boolean;
  price?: Decimal;
  priceTotal?: Decimal;
  productId?: ProductWhereUniqueInput;
  productSerialNumber?: string | null;
  productVariantId?: ProductVariantWhereUniqueInput | null;
  quantity?: Decimal | null;
  salePriceType?: SalePriceTypeWhereUniqueInput | null;
  saleReturnId?: SaleReturnWhereUniqueInput;
  sequence?: number;
  tenantId?: TenantWhereUniqueInput | null;
  unitId?: UnitWhereUniqueInput;
};
