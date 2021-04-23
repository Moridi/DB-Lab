import { Test, TestingModule } from '@nestjs/testing';
import { JobseekersService } from './jobseekers.service';

describe('JobseekersService', () => {
  let service: JobseekersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JobseekersService],
    }).compile();

    service = module.get<JobseekersService>(JobseekersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
