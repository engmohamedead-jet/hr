import { CustomerUpdateManyWithoutRatingsInput } from "./CustomerUpdateManyWithoutRatingsInput";

export type RatingUpdateInput = {
  code?: string;
  customers?: CustomerUpdateManyWithoutRatingsInput;
  guarantorRatingI?: CustomerUpdateManyWithoutRatingsInput;
  name?: string;
  normalizedName?: string;
  note?: string | null;
};
