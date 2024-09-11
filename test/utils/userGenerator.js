
import { faker } from '@faker-js/faker';


export const generateFakeUser = () => {
    return {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        phone: faker.phone.number(),
        email: faker.internet.email(),
        password: faker.internet.password(8)
    };
};
