import { PrintTemplateGroupWhereInput } from "./PrintTemplateGroupWhereInput";
import { PrintTemplateGroupOrderByInput } from "./PrintTemplateGroupOrderByInput";

export type PrintTemplateGroupFindManyArgs = {
  where?: PrintTemplateGroupWhereInput;
  orderBy?: Array<PrintTemplateGroupOrderByInput>;
  skip?: number;
  take?: number;
};
