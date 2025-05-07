// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

//
//testing phone number
//

//return true
test('Tests 555-1095 to be valid phone number', ()=>{
  expect(isPhoneNumber("555-1095")).toBe(true);
});
test('Test (626)555-1123 to be valid phone number', ()=>{
  expect(isPhoneNumber("(626)555-1123")).toBe(true);
});

//return false
test('Tests 55-1095 to be non-valid phone number', ()=>{
  expect(isPhoneNumber("55-1095")).toBe(false);
});
test('Test (626)alex-1123 to be non-valid phone number', ()=>{
  expect(isPhoneNumber("(626)alex-1123")).toBe(false);
});

//
//testing email
//

//return true
test('bruhmoment42@gmail.com to be valid email', ()=>{
  expect(isEmail("bruhmoment42@gmail.com")).toBe(true);
});
test('BruHmOmEnt_42@GmAiL.com to be valid email', ()=>{
  expect(isEmail("BruHmOmEnt_42@GmAiL.com")).toBe(true);
});

//return false
test('bruh.moment.42@gmail.com to be non-valid email', ()=>{
  expect(isEmail("bruh.moment.42@gmail.com")).toBe(false);
});
test('BruHmOmEnt+42=&&&@GmAiL.com to be non-valid email', ()=>{
  expect(isEmail("BruHmOmEnt+42=&&&@GmAiL.com")).toBe(false);
});

//
//testing strongPass
//

//return true
test('Bruh-42 is a valid password', ()=>{
  expect(isStrongPassword("Bruh_42")).toBe(true);
});
test('BRUH4242 is a valid password', ()=>{
  expect(isStrongPassword("BRUH4242")).toBe(true);
});

//return false
test('4BRUH2 is a non-valid password', ()=>{
  expect(isStrongPassword("4BRUH2")).toBe(false);
});
test('BRU to be non-valid password', ()=>{
  expect(isStrongPassword("BRU")).toBe(false);
});

//
// testing isDate
//

//return true
test('06/19/2004 is a valid date', ()=>{
  expect(isDate("06/19/2004")).toBe(true);
});
test('6/19/2004 is a valid date', ()=>{
  expect(isDate("6/19/2004")).toBe(true);
});

//return false
test('06-19-2004 is a non-valid date', ()=>{
  expect(isDate("06-19-2004")).toBe(false);
});
test('06/19/04 to be non-valid date', ()=>{
  expect(isDate("06/19/04")).toBe(false);
});

//
// testing isHexColor
//

//return true
test('0AE is a valid hex-color', ()=>{
  expect(isHexColor("0AE")).toBe(true);
});
test('42AF42 is a valid hex-color', ()=>{
  expect(isHexColor("42AF42")).toBe(true);
});

//return false
test('0AG is a non-valid hex-color', ()=>{
  expect(isHexColor("0AG")).toBe(false);
});
test('4242 to be non-valid hex-color', ()=>{
  expect(isHexColor("4242")).toBe(false);
});

