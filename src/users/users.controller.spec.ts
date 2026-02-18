import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { kStringMaxLength } from 'buffer';

describe('UsersController', () => {
    let controller: UsersController;

    const mockUsersService = {
        createUser: jest.fn((dto)=>{
            return {
                id: Date.now(),
                ...dto,
            }
        })
    };
    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [UsersController],
            providers: [UsersService]
        }).overrideProvider(UsersService).useValue(mockUsersService).compile();

        controller = module.get<UsersController>(UsersController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });

    it('should create user', ()=>{
        expect(controller.createUser({username: 'marius', displayname: 'test'})).toEqual({
            id: expect.any(Number),
            username: 'marius',
            displayname: 'test'
        })

        expect(mockUsersService.createUser).toHaveBeenCalled()
    })
});
