import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SettingGroupServiceBase } from "./base/settingGroup.service.base";

@Injectable()
export class SettingGroupService extends SettingGroupServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
