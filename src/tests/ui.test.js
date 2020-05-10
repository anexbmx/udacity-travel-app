import { generateCardTrip_UI, generateInfoContainer_UI, generateWeatherContainer_UI } from '../client/js/ui'


describe('check  "generateCardTrip_UI()" should exist' , () => {
    test('It should be defined',  () => {
        expect(generateCardTrip_UI).toBeDefined();
    });
});

describe('check  "generateCardTrip_UI()" should be a function' , () => {
    test('It should be a function',  () => {
        expect(typeof generateCardTrip_UI).toBe("function");
    });
});

describe('check  "generateInfoContainer_UI()" should exist' , () => {
    test('It should be defined',  () => {
        expect(generateInfoContainer_UI).toBeDefined();
    });
});

describe('check  "generateInfoContainer_UI()" should be a function' , () => {
    test('It should be a function',  () => {
        expect(typeof generateInfoContainer_UI).toBe("function");
    });
});

describe('check  "generateWeatherContainer_UI()" should exist' , () => {
    test('It should be defined',  () => {
        expect(generateWeatherContainer_UI).toBeDefined();
    });
});

describe('check  "generateWeatherContainer_UI()" should be a function' , () => {
    test('It should be a function',  () => {
        expect(typeof generateWeatherContainer_UI).toBe("function");
    });
});