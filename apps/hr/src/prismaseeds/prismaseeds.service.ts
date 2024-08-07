import { Injectable } from "@nestjs/common";

@Injectable()
export class PrismaSeedsService {
  constructor() {}
  async SeedRoles(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
