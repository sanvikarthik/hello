// src/app/services/user.service.spec.ts
import { TestBed } from '@angular/core/testing';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return initial users', () => {
    const users = service.getUsers();
    expect(users.length).toBe(3);
  });

  it('should add a new user', () => {
    const newUser = {
      id: 4,
      name: 'Alice Cooper',
      workouts: [{ type: 'Dancing', minutes: 30 }],
    };
    service.addUser(newUser);
    const users = service.getUsers();
    expect(users.length).toBe(4);
    expect(users[3]).toEqual(newUser);
  });
});
