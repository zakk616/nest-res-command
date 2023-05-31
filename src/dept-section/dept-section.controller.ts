import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DeptSectionService } from './dept-section.service';
import { CreateDeptSectionDto } from './dto/create-dept-section.dto';
import { UpdateDeptSectionDto } from './dto/update-dept-section.dto';

@Controller('dept-section')
export class DeptSectionController {
  constructor(private readonly deptSectionService: DeptSectionService) {}

  @Post()
  create(@Body() createDeptSectionDto: CreateDeptSectionDto) {
    return this.deptSectionService.create(createDeptSectionDto);
  }

  @Get()
  findAll() {
    return this.deptSectionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.deptSectionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDeptSectionDto: UpdateDeptSectionDto) {
    return this.deptSectionService.update(+id, updateDeptSectionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.deptSectionService.remove(+id);
  }
}
