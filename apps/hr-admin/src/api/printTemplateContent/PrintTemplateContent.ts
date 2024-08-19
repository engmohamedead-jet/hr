import { PrintTemplate } from "../printTemplate/PrintTemplate";
import { Tenant } from "../tenant/Tenant";

export type PrintTemplateContent = {
  createdAt: Date;
  display: string | null;
  fieldValue: string;
  id: string;
  isActive: boolean | null;
  key: string;
  note: string | null;
  printTemplateId?: PrintTemplate | null;
  tenantId?: Tenant | null;
  updatedAt: Date;
  value: string;
};
