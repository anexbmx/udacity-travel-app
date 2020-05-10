import { fetchGeonames, primaryObject } from '../client/js/app'


describe('check  "fetchGeonames()" should exist' , () => {
    test('It should be defined',  () => {
        expect(fetchGeonames).toBeDefined();
    });
});

describe('check  "fetchGeonames()" should be a function' , () => {
    test('It should be a function',  () => {
        expect(typeof fetchGeonames).toBe("function");
    });
});

describe('check  "primaryObject()" should exist' , () => {
    test('It should be defined',  () => {
        expect(primaryObject).toBeDefined();
    });
});

describe('check  "primaryObject()" should be a function' , () => {
    test('It should be a function',  () => {
        expect(typeof primaryObject).toBe("function");
    });
});