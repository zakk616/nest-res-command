import { Module } from '@nestjs/common';
import { DeptSectionService } from './dept-section.service';
import { DeptSectionController } from './dept-section.controller';

@Module({
  controllers: [DeptSectionController],
  providers: [DeptSectionService]
})
export class DeptSectionModule {}
