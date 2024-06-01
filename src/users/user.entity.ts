import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { UserRole } from './roles.enum';

@Entity()
export class User  {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @Column('simple-array')
  roles: UserRole[];
}
