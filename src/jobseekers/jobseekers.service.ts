import { Injectable } from '@nestjs/common';
import EmployerEntity from 'db/employer.entity';
import ProjectEntity from 'db/project.entity';
import FreelancerEntity from 'db/freelancer.entity';
import CreateProjectDto from './dto/create-project.dto';
import CreateFreelancerDto from './dto/create-freelancer.dto';
import CreateEmployerDto from './dto/create-employer.dto';

@Injectable()
export class JobseekersService {

  /////////////////////////////////////// Project ///////////////////////////////////////

    async insertProject(project_details: CreateProjectDto): Promise<ProjectEntity> {

        const project_entity: ProjectEntity = ProjectEntity.create();
        const { name, priority, deadline,
                price, min_experience, employerId } =
                project_details;
        
        project_entity.name = name;
        project_entity.priority = priority;
        project_entity.deadline = deadline;
        project_entity.price = price;
        project_entity.min_experience = min_experience;
        project_entity.employer = await EmployerEntity.findOne(employerId);

        await ProjectEntity.save(project_entity);
        return project_entity;
      }
    
      async getAllProject(): Promise<ProjectEntity[]> {
            return await ProjectEntity.find();
      }
    
      async removeProject(id: number): Promise<any> {
        return await ProjectEntity.delete({id});
      }
    
      async updateProject(id: number, projectDetails: CreateProjectDto): Promise<any> {
        return await ProjectEntity.update({id}, projectDetails);
      }

      /////////////////////////////////////// Freelancer ///////////////////////////////////////

    async insertFreelancer(freelancer_details: CreateFreelancerDto): Promise<FreelancerEntity> {

      const freelancer_entity: FreelancerEntity = FreelancerEntity.create();
      const { name,
        email,
        phone_number,
        image_url,
        experience,
        skills,
        score,
        registry_type, } = freelancer_details;
      
      freelancer_entity.name = name;
      freelancer_entity.email = email;
      freelancer_entity.phone_number = phone_number;
      freelancer_entity.image_url = image_url;
      freelancer_entity.experience = experience;
      freelancer_entity.skills = skills;
      freelancer_entity.score = 0;
      freelancer_entity.registry_type = registry_type;

      await FreelancerEntity.save(freelancer_entity);
      return freelancer_entity;
    }
  
    async getAllFreelancer(): Promise<FreelancerEntity[]> {
          return await FreelancerEntity.find();
    }
  
    async removeFreelancer(id: number): Promise<any> {
      return await FreelancerEntity.delete({id});
    }
  
    async updateFreelancer(id: number, freelancerDetails: CreateFreelancerDto): Promise<any> {
      return await FreelancerEntity.update({id}, freelancerDetails);
    }

    async insertOrder(freelancer_id: number, updated: CreateFreelancerDto): Promise<any> {
      const freelancer = await FreelancerEntity.findOne(freelancer_id);

      const { name,
        email,
        phone_number,
        image_url,
        experience,
        skills,
        score,
        registry_type, } = freelancer;

      let new_freelancer: any = {};

      new_freelancer.name = name;
      new_freelancer.email = email;
      new_freelancer.phone_number = phone_number;
      new_freelancer.image_url = image_url;
      new_freelancer.experience = experience;
      new_freelancer.skills = skills;
      new_freelancer.score = score;
      new_freelancer.registry_type = registry_type;

      new_freelancer.orders = [];
      for ( let i = 0; i < updated.projectIDs.length ; i++)
      {
        const project = await ProjectEntity.findOne(updated.projectIDs[i]);
        new_freelancer.orders.push(project);
      }
      return FreelancerEntity.update(freelancer_id, new_freelancer);
    }

    /////////////////////////////////////// Employer ///////////////////////////////////////

    async insertEmployer(employer_details: CreateEmployerDto): Promise<EmployerEntity> {

      const employer_entity: EmployerEntity = EmployerEntity.create();
      const { name, email, phone_number, image_url } = employer_details;
      
      employer_entity.name = name;
      employer_entity.email = email;
      employer_entity.phone_number = phone_number;
      employer_entity.image_url = image_url;

      await EmployerEntity.save(employer_entity);
      return employer_entity;
    }
  
    async getAllEmployer(): Promise<EmployerEntity[]> {
          return await EmployerEntity.find();
    }
  
    async removeEmployer(id: number): Promise<any> {
      return await EmployerEntity.delete({id});
    }
  
    async updateEmployer(id: number, employerDetails: CreateEmployerDto): Promise<any> {
      return await EmployerEntity.update({id}, employerDetails);
    }
}
