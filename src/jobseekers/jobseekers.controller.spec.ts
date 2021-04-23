import { Test, TestingModule } from '@nestjs/testing';
import { JobseekersController } from './jobseekers.controller';

describe('JobseekersController', () => {
  let controller: JobseekersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JobseekersController],
    }).compile();

    controller = module.get<JobseekersController>(JobseekersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
