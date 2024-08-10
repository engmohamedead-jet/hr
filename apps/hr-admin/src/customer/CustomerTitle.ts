import { Customer as TCustomer } from "../api/customer/Customer";

export const CUSTOMER_TITLE_FIELD = "guarantorName";

export const CustomerTitle = (record: TCustomer): string => {
  return record.guarantorName?.toString() || String(record.id);
};
