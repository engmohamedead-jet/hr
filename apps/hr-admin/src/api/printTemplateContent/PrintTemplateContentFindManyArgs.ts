import { PrintTemplateContentWhereInput } from "./PrintTemplateContentWhereInput";
import { PrintTemplateContentOrderByInput } from "./PrintTemplateContentOrderByInput";

export type PrintTemplateContentFindManyArgs = {
  where?: PrintTemplateContentWhereInput;
  orderBy?: Array<PrintTemplateContentOrderByInput>;
  skip?: number;
  take?: number;
};
