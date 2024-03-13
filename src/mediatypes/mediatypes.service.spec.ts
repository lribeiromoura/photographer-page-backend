import { Test, TestingModule } from '@nestjs/testing';
import { MediatypesService } from './mediatypes.service';

describe('MediatypesService', () => {
  let service: MediatypesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MediatypesService],
    }).compile();

    service = module.get<MediatypesService>(MediatypesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
