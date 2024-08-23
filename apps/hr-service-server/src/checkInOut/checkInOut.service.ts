import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CheckInOutServiceBase } from "./base/checkInOut.service.base";

@Injectable()
export class CheckInOutService extends CheckInOutServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
