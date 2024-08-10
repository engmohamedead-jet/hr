import { Rating as TRating } from "../api/rating/Rating";

export const RATING_TITLE_FIELD = "name";

export const RatingTitle = (record: TRating): string => {
  return record.name?.toString() || String(record.id);
};
