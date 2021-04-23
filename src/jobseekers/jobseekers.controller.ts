import { Body, Controller, Get, Post, Delete, Put, Param, Query } from '@nestjs/common';
import { JobseekersService } from './jobseekers.service';
import CreateProjectDto from './dto/create-project.dto';
import CreateFreelancerDto from './dto/create-freelancer.dto';
import CreateEmployerDto from './dto/create-employer.dto';

@Controller('jobseekers')
export class JobseekersController {
    constructor(private readonly jobseekerServices: JobseekersService) {}
  
    /////////////////////////////////////// Project ///////////////////////////////////////

    @Post("project")
    postProject( @Body() project: CreateProjectDto) {
      return this.jobseekerServices.insertProject(project);
    }
  
    @Get("project")
    getAllProjects() {
      return this.jobseekerServices.getAllProject();
    }
  
    @Delete('project/:id')
    async removeProject(@Param('id') id: number) {
      return this.jobseekerServices.removeProject(id)
    }
  
    @Put('project/:id')
    async updateProject(@Param('id') id: number, @Body() project: CreateProjectDto) {
      return this.jobseekerServices.updateProject(id, project)
    }

    /////////////////////////////////////// Freelancer ///////////////////////////////////////

    @Post("freelancer")
    postFreelancer( @Body() freelancer: CreateFreelancerDto) {
      return this.jobseekerServices.insertFreelancer(freelancer);
    }
  
    @Get("freelancer")
    getAllFreelancers() {
      return this.jobseekerServices.getAllFreelancer();
    }
  
    @Delete('freelancer/:id')
    async removeFreelancer(@Param('id') id: number) {
      return this.jobseekerServices.removeFreelancer(id)
    }
  
    @Put('freelancer/:id')
    async updateFreelancer(@Param('id') id: number, @Body() freelancer: CreateFreelancerDto) {
      return this.jobseekerServices.updateFreelancer(id, freelancer)
    }

    @Post('freelancer/:freelancer_id/order')
    async insertOrder(@Param('freelancer_id') freelancer_id: number, @Query() project_id: number) {
      return this.jobseekerServices.insertOrder(freelancer_id, project_id)
    }

    @Delete('freelancer/:freelancer_id/order')
    async updateOrder(@Param('freelancer_id') freelancer_id: number, @Query() project_id: number) {
      return this.jobseekerServices.removeOrder(freelancer_id, project_id)
    }

    /////////////////////////////////////// Employer ///////////////////////////////////////

    @Post("employer")
    postEmployer( @Body() employer: CreateEmployerDto) {
      return this.jobseekerServices.insertEmployer(employer);
    }
  
    @Get("employer")
    getAllEmployers() {
      return this.jobseekerServices.getAllEmployer();
    }
  
    @Delete('employer/:id')
    async removeEmployer(@Param('id') id: number) {
      return this.jobseekerServices.removeEmployer(id)
    }
  
    @Put('employer/:id')
    async updateEmployer(@Param('id') id: number, @Body() employer: CreateEmployerDto) {
      return this.jobseekerServices.updateEmployer(id, employer)
    }

}
