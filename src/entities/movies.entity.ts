import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "@/helpers/utils/BaseEntity";

@Entity({ name: "movies" })
class Movies extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column()
  public title!: string;

  @Column()
  public description!: string;
}

export default Movies;
