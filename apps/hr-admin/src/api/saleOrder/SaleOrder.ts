import { Customer } from "../customer/Customer";
import { SaleQuotation } from "../saleQuotation/SaleQuotation";

export type SaleOrder = {
  createdAt: Date;
  customerId?: Customer;
  id: string;
  saleOrderDate: Date | null;
  saleQuotation?: SaleQuotation | null;
  updatedAt: Date;
};
