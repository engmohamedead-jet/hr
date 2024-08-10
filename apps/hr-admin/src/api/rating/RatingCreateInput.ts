import { CustomerCreateNestedManyWithoutRatingsInput } from "./CustomerCreateNestedManyWithoutRatingsInput";

export type RatingCreateInput = {
  code: string;
  customers?: CustomerCreateNestedManyWithoutRatingsInput;
  guarantorRatingI?: CustomerCreateNestedManyWithoutRatingsInput;
  name: string;
  normalizedName: string;
  note?: string | null;
};
