import { Account } from "../account/Account";
import { Product } from "../product/Product";
import { SaleTax } from "../saleTax/SaleTax";

export type ProductGroup = {
  code: string | null;
  costOfGoodsSoldAccount?: Account | null;
  createdAt: Date;
  description: string | null;
  excludeFromPurchase: boolean;
  excludeFromSale: boolean;
  id: string;
  inventoryAccount?: Account | null;
  isDefault: boolean;
  name: string;
  normalizedName: string;
  note: string | null;
  parentProductGroupId?: ProductGroup | null;
  productGroups?: Array<ProductGroup>;
  products?: Array<Product>;
  purchaseAccountId?: Account | null;
  purchaseDiscountAccountId?: Account | null;
  purchaseReturnAccountId?: Account | null;
  saleAccountId?: Account | null;
  saleDiscountAccountId?: Account | null;
  saleReturnAccountId?: Account | null;
  saleTaxId?: SaleTax | null;
  updatedAt: Date;
};
