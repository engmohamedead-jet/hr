import { Account } from "../account/Account";
import { Product } from "../product/Product";
import { SaleTax } from "../saleTax/SaleTax";

export type ProductGroup = {
  PurchaseDiscountAccountId?: Account | null;
  SaleReturnAccountId?: Account | null;
  account?: Account | null;
  code: string | null;
  createdAt: Date;
  description: string | null;
  excludeFromPurchase: boolean | null;
  excludeFromSale: boolean | null;
  id: string;
  inventoryAccountId?: Account | null;
  isDefault: boolean | null;
  name: string;
  normalizedName: string;
  notes: string | null;
  parentProductGroupId?: Array<ProductGroup>;
  productGroups?: ProductGroup | null;
  products?: Array<Product>;
  purchaseAccountId?: Account | null;
  purchaseReturnAccountId?: Account | null;
  saleAccountId?: Account | null;
  saleDiscountAccountId?: Account | null;
  saleTaxId?: SaleTax | null;
  updatedAt: Date;
};
