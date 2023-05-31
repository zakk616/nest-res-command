import { Injectable } from '@nestjs/common';
import { CreateDeptSectionDto } from './dto/create-dept-section.dto';
import { UpdateDeptSectionDto } from './dto/update-dept-section.dto';

@Injectable()
export class DeptSectionService {
  create(createDeptSectionDto: CreateDeptSectionDto) {
    return 'This action adds a new deptSection';
  }

  findAll() {
    return `This action returns all deptSection`;
  }

  findOne(id: number) {
    return `This action returns a #${id} deptSection`;
  }

  update(id: number, updateDeptSectionDto: UpdateDeptSectionDto) {
    return `This action updates a #${id} deptSection`;
  }

  remove(id: number) {
    return `This action removes a #${id} deptSection`;
  }
}
