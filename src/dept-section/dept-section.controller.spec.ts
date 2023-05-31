import { Test, TestingModule } from '@nestjs/testing';
import { DeptSectionController } from './dept-section.controller';
import { DeptSectionService } from './dept-section.service';

describe('DeptSectionController', () => {
  let controller: DeptSectionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DeptSectionController],
      providers: [DeptSectionService],
    }).compile();

    controller = module.get<DeptSectionController>(DeptSectionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
