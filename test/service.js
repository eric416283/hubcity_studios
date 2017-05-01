const mongoose = require('mongoose')
const {expect} = require('chai')
const sinon    = require('sinon')
require('sinon-mongoose')

const Service = require('../models/Service')

describe('Service Model', ()=>{
  it('shold be invalid with dashes in the name', (done) => {
    const ServiceMock = sinon.mock(new Service({name: 'bad-name'}))
    const service = ServiceMock.object;

    ServiceMock
      .expects('save')
      .yields(null)

    service.validate((err)=>{
      expect(err.errors.name).to.exist
      done()
    })

    /*
    service.save(function(err, result){
      ServiceMock.verify()
      ServiceMock.restore()
      expect(err).to.be.null;
      done();
    })
    */
  })
})
