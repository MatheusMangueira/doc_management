import { IsNotEmpty, IsOptional, IsString } from "class-validator";


export class RolesDTO {

   @IsOptional()
   @IsString()
      id?: string;

   @IsString()
   @IsNotEmpty({
      message: "Name is required."
   })
      name: string;

   @IsString()
   @IsNotEmpty({
      message: "Description is required."
   })
      description: string;

   constructor(name: string, description: string) {
      this.name = name;
      this.description = description;
   }
}