import { differenceInDays , setCurrentDate, weatherDateFormat } from '../client/js/helper'


describe('check  "differenceInDays()" should exist' , () => {
    test('It should be defined',  () => {
        expect(differenceInDays).toBeDefined();
    });
});

describe('check  "differenceInDays()" should be a function' , () => {
    test('It should be a function',  () => {
        expect(typeof differenceInDays).toBe("function");
    });
});

describe('check  "setCurrentDate()" should exist' , () => {
    test('It should be defined',  () => {
        expect(setCurrentDate).toBeDefined();
    });
});

describe('check  "setCurrentDate()" should be a function' , () => {
    test('It should be a function',  () => {
        expect(typeof setCurrentDate).toBe("function");
    });
});

describe('check  "weatherDateFormat()" should exist' , () => {
    test('It should be defined',  () => {
        expect(weatherDateFormat).toBeDefined();
    });
});

describe('check  "weatherDateFormat()" should be a function' , () => {
    test('It should be a function',  () => {
        expect(typeof weatherDateFormat).toBe("function");
    });
});