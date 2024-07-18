import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserListComponent } from './user-list.component';
import { UserService } from '../../services/user.service'; // Import your service

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;
  let userServiceSpy: jasmine.SpyObj<UserService>; // Mock service

  beforeEach(() => {
    const spy = jasmine.createSpyObj('UserService', ['getUsers']); // Create mock service

    TestBed.configureTestingModule({
      declarations: [UserListComponent],
      providers: [{ provide: UserService, useValue: spy }],
    }).compileComponents();

    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    userServiceSpy = TestBed.inject(UserService) as jasmine.SpyObj<UserService>; // Inject mock service
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Write more test cases as needed
});
