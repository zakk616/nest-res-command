import { Test, TestingModule } from '@nestjs/testing';
import { DeptSectionService } from './dept-section.service';

describe('DeptSectionService', () => {
  let service: DeptSectionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeptSectionService],
    }).compile();

    service = module.get<DeptSectionService>(DeptSectionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
