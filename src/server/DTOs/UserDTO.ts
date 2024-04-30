import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";


export class UserDTO {

   @IsOptional()
   @IsString()
      id?: string;

   @IsString()
   @IsNotEmpty({
      message: "Name is required."
   })
      name: string;

   @IsEmail()
   @IsNotEmpty({
      message: "Email is required."
   })
      email: string;

   @IsString()
   @IsNotEmpty({
      message: "Password is required."
   })
      password: string;

   @IsString()
   @IsNotEmpty({
      message: "Role is required."
   })
      role: string;

   constructor(name: string, email: string, password: string, role: string) {
      this.name = name;
      this.email = email;
      this.password = password;
      this.role = role;
   }
}