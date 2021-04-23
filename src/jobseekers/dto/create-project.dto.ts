export default class CreateProjectDto {
    readonly name: string;
    readonly priority: number;
    readonly deadline: Date;
    readonly price: number;
    readonly min_experience: string;
    readonly employerId: number;
  }