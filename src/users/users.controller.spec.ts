import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UserRole } from './roles.enum';

describe('UsersController', () => {
  let controller: UsersController;
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        UsersService,
        {
          provide: getRepositoryToken(User),
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<UsersController>(UsersController);
    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('createUser', () => {
    it('should create a new user', async () => {
      const userDto = { username: 'testuser', password: 'testpassword' };
      const createdUser: User = { id: 1, ...userDto, roles: [] }; // Complete user object
      
      jest.spyOn(service, 'create').mockResolvedValue(createdUser);

      expect(await controller.createUser(userDto)).toBe(createdUser);
    });
  });

  describe('updateUserRole', () => {
    it('should update the role of a user', async () => {
      const username = 'testuser';
      const newRole = UserRole.Admin;
      const user: User = { id: 1, username, password: 'password', roles: [] }; // Create a User object
      
      jest.spyOn(service, 'updateUserRole').mockResolvedValue(user); // Use the created user

      expect(await controller.updateUserRole(user, newRole)).toEqual({ username, role: newRole });
    });
  });
});


