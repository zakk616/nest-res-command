import { PartialType } from '@nestjs/mapped-types';
import { CreateDeptSectionDto } from './create-dept-section.dto';

export class UpdateDeptSectionDto extends PartialType(CreateDeptSectionDto) {}
