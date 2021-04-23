export default class CreateFreelancerDto {
    readonly name: string;
    readonly email: string;
    readonly phone_number: string;
    readonly image_url: string;
    readonly experience: string;
    readonly skills: string;
    readonly score: number;
    readonly registry_type: string;
    readonly projectIDs: number[];
  }