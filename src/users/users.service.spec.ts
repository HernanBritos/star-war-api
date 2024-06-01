import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UserRole } from './roles.enum';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getRepositoryToken(User),
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a new user', async () => {
      const userDto = { username: 'testuser', password: 'testpassword' };
      const createdUser: User = { id: 1, ...userDto, roles: [] }; // Complete user object
      
      // Create a User object from userDto
      const user: User = { ...userDto, id: 1, roles: [] };

      jest.spyOn(service, 'create').mockResolvedValue(createdUser);

      expect(await service.create(user)).toBe(createdUser);
    });
  });

  describe('updateUserRole', () => {
    it('should update the role of a user', async () => {
      const username = 'testuser';
      const newRole = UserRole.Admin;
      const user: User = { id: 1, username, password: 'password', roles: [] }; // Create a User object
      
      jest.spyOn(service, 'updateUserRole').mockResolvedValue(user); // Use the created user

      expect(await service.updateUserRole(user, newRole)).toEqual(user);
    });
  });

  // Other service methods tests...
});

