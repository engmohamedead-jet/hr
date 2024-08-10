import { Notification as TNotification } from "../api/notification/Notification";

export const NOTIFICATION_TITLE_FIELD = "icon";

export const NotificationTitle = (record: TNotification): string => {
  return record.icon?.toString() || String(record.id);
};
