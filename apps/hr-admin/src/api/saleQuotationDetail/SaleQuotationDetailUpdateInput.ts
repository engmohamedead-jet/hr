import { Decimal } from "decimal.js";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { ProductVariantWhereUniqueInput } from "../productVariant/ProductVariantWhereUniqueInput";
import { SalePriceTypeWhereUniqueInput } from "../salePriceType/SalePriceTypeWhereUniqueInput";
import { SaleQuotationWhereUniqueInput } from "../saleQuotation/SaleQuotationWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { UnitWhereUniqueInput } from "../unit/UnitWhereUniqueInput";

export type SaleQuotationDetailUpdateInput = {
  discount?: Decimal | null;
  discountRate?: Decimal | null;
  isActive?: boolean;
  isError?: boolean;
  isReplicated?: boolean;
  isTaxed?: boolean;
  note?: string | null;
  price?: Decimal;
  priceTotal?: Decimal;
  productId?: ProductWhereUniqueInput;
  productVariantId?: ProductVariantWhereUniqueInput | null;
  quantity?: Decimal;
  salePriceType?: SalePriceTypeWhereUniqueInput | null;
  saleQuotationId?: SaleQuotationWhereUniqueInput | null;
  sequence?: string;
  shippingCharge?: Decimal | null;
  tenantId?: TenantWhereUniqueInput | null;
  unitId?: UnitWhereUniqueInput;
};
