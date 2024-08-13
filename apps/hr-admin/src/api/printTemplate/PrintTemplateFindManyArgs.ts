import { PrintTemplateWhereInput } from "./PrintTemplateWhereInput";
import { PrintTemplateOrderByInput } from "./PrintTemplateOrderByInput";

export type PrintTemplateFindManyArgs = {
  where?: PrintTemplateWhereInput;
  orderBy?: Array<PrintTemplateOrderByInput>;
  skip?: number;
  take?: number;
};
