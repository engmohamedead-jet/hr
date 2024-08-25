import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { OverNightRequestServiceBase } from "./base/overNightRequest.service.base";

@Injectable()
export class OverNightRequestService extends OverNightRequestServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
