import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { ProductGroupWhereUniqueInput } from "./ProductGroupWhereUniqueInput";
import { ProductGroupUpdateManyWithoutProductGroupsInput } from "./ProductGroupUpdateManyWithoutProductGroupsInput";
import { ProductUpdateManyWithoutProductGroupsInput } from "./ProductUpdateManyWithoutProductGroupsInput";
import { SaleTaxWhereUniqueInput } from "../saleTax/SaleTaxWhereUniqueInput";

export type ProductGroupUpdateInput = {
  code?: string | null;
  costOfGoodsSoldAccount?: AccountWhereUniqueInput | null;
  description?: string | null;
  excludeFromPurchase?: boolean;
  excludeFromSale?: boolean;
  inventoryAccount?: AccountWhereUniqueInput | null;
  isDefault?: boolean;
  name?: string;
  normalizedName?: string;
  note?: string | null;
  parentProductGroupId?: ProductGroupWhereUniqueInput | null;
  productGroups?: ProductGroupUpdateManyWithoutProductGroupsInput;
  products?: ProductUpdateManyWithoutProductGroupsInput;
  purchaseAccountId?: AccountWhereUniqueInput | null;
  purchaseDiscountAccountId?: AccountWhereUniqueInput | null;
  purchaseReturnAccountId?: AccountWhereUniqueInput | null;
  saleAccountId?: AccountWhereUniqueInput | null;
  saleDiscountAccountId?: AccountWhereUniqueInput | null;
  saleReturnAccountId?: AccountWhereUniqueInput | null;
  saleTaxId?: SaleTaxWhereUniqueInput | null;
};
