export interface IUserInputDto {
    username?: string;
    email: string;
    password: string;
  }
  
  export interface IUser {
    id: number;
    username: string;
    email: string;
    token?: string;
    password?: string;
    createdAt?: string;
    updatedAt?: string;
  }
  