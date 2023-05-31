import { Module } from '@nestjs/common';
import { TimeTableService } from './time-table.service';
import { TimeTableController } from './time-table.controller';

@Module({
  controllers: [TimeTableController],
  providers: [TimeTableService]
})
export class TimeTableModule {}
