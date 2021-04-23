import { Module } from '@nestjs/common';
import { JobseekersService } from './jobseekers.service';
import { JobseekersController } from './jobseekers.controller';

@Module({
  providers: [JobseekersService],
  controllers: [JobseekersController]
})
export class JobseekersModule {}
