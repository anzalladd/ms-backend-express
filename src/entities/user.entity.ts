import { BaseEntity } from "@/helpers/utils/BaseEntity";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "user" })
class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column()
  public email!: string;

  @Column()
  public username!: string;

  @Column()
  public password!: string;
}

export default User;
