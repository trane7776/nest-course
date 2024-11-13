import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from 'src/app.module';
import * as request from 'supertest';
describe('FlowersController', () => {
    let app: INestApplication;
    beforeAll(async () => {
        const moduleMixture: TestingModule = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();

        app = moduleMixture.createNestApplication();
        app.useGlobalPipes(new ValidationPipe());
        await app.init();
    });

    it('/flowers (GET)', () => {
        return request(app.getHttpServer())
            .get('/flowers')
            .expect(200)
            .expect([
                {
                    id: 1,
                    name: 'Rose',
                    color: 'Red',
                    price: 5,
                    createdAt: '2024-11-11T21:04:06.935Z',
                    updatedAt: '2024-11-11T21:04:06.935Z',
                },
                {
                    id: 2,
                    name: 'Lily',
                    color: 'White',
                    price: 15,
                    createdAt: '2024-11-13T19:58:42.801Z',
                    updatedAt: '2024-11-13T19:58:42.801Z',
                },
                {
                    id: 3,
                    name: 'Daisy',
                    color: 'Yellow',
                    price: 10,
                    createdAt: '2024-11-13T20:27:53.073Z',
                    updatedAt: '2024-11-13T20:27:53.073Z',
                },
                {
                    id: 4,
                    name: 'Daisy',
                    color: 'Yellow',
                    price: 10,
                    createdAt: '2024-11-13T20:29:25.945Z',
                    updatedAt: '2024-11-13T20:29:25.945Z',
                },
                {
                    id: 5,
                    name: 'Daisy',
                    color: 'Yellow',
                    price: 10,
                    createdAt: '2024-11-13T20:35:03.587Z',
                    updatedAt: '2024-11-13T20:35:03.587Z',
                },
            ]);
    });

    it('/flowers (POST)', () => {
        return request(app.getHttpServer())
            .post('/flowers')
            .send({
                name: 'Daisy',
                color: 'Yellow',
                price: 10,
            })
            .expect(201)
            .expect((response) => {
                return response.body.name === 'Daisy';
            });
    });

    afterAll(async () => {
        await app.close();
    });
});
