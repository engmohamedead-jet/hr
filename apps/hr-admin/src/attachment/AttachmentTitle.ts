import { Attachment as TAttachment } from "../api/attachment/Attachment";

export const ATTACHMENT_TITLE_FIELD = "originalFileName";

export const AttachmentTitle = (record: TAttachment): string => {
  return record.originalFileName?.toString() || String(record.id);
};
