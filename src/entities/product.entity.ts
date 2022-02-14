import { BaseEntity } from "@/helpers/utils/BaseEntity";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "product" })
class Product extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column()
  public name!: string;
}

export default Product;
