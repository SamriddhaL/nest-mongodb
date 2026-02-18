import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { getModelToken } from '@nestjs/mongoose';
import { Users } from 'src/schema/users.schema';
import { UserSettings } from 'src/schema/UserSettings.schema';
import { NotFoundException } from '@nestjs/common';

describe('UsersService', () => {
    let service: UsersService;

    const mockUsersModel = {
        findById: jest.fn().mockImplementation(
            (id) => Promise.resolve({
                    id: id,
                    username: 'maguire',
                    displayname: 'test'
            })
        )
    }

    const mockUserSettingsModel = {
        findById: jest.fn().mockImplementation(() => {

        })
    }

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [UsersService,
                {
                    provide: getModelToken(Users.name),
                    useValue: mockUsersModel
                },
                {
                    provide: getModelToken(UserSettings.name),
                    useValue: mockUserSettingsModel
                }
            ],
        }).compile();

        service = module.get<UsersService>(UsersService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    it('should find user', async () => {
        const user = {
            id: '698ad9c017e66f7e64052410',
            username: 'maguire',
            displayname: 'test'
        }
        const result = await service.getUserById('698ad9c017e66f7e64052410');
        expect(result).toEqual(user)

    })

    it('should throw NotFoundException', async () =>{
        mockUsersModel.findById.mockResolvedValueOnce(null)
        await expect(service.getUserById('5'))
            .rejects
            .toThrow(NotFoundException)
    })
});
