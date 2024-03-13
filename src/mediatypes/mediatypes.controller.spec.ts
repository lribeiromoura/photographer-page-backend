import { Test, TestingModule } from '@nestjs/testing';
import { MediatypesController } from './mediatypes.controller';
import { MediatypesService } from './mediatypes.service';

describe('MediatypesController', () => {
  let controller: MediatypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MediatypesController],
      providers: [MediatypesService],
    }).compile();

    controller = module.get<MediatypesController>(MediatypesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
