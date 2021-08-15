'use strict';
const server = require('../server');
const supertest = require('supertest');
const request = supertest(server.app);
describe('Api req', ()=> {   
    it('Sign in route ', async () => {
        let signInHeader ={
            username:'Qasem',
            password:'2171246'
        }
        const response = await request.post('/signin').send(signInHeader); 
        expect(response.status).toEqual(200);
    });
    it('Faild Sign in route ', async () => {
        const response = await request.post('/signin'); 
        expect(response.status).toEqual(500); 
    });   
    it('Sign up route ', async () => {
        let signInBody ={
            username: 'Qasem',
            password: '2171246'
        }
        const response = await request.post('/signup').send(signInBody); 
        expect(response.status).toEqual(200);
    });
    it('Faild Sign up route ', async () => {
        const response = await request.post('/signup'); 
        expect(response.status).toEqual(500); 
    });
});