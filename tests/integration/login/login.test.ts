import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import UserModel from '../../../src/database/models/user.model'
import app from '../../../src/app'
import {userFromDB, validBodyLogin} from '../../mocks/Login.mock'
import Sinon from 'sinon';
chai.use(chaiHttp);

describe('POST /login', function () { 
  beforeEach(function () { sinon.restore(); });

  it('Testa se é possível fazer login com sucesso.', async function () {
    const userSimulated = UserModel.build(userFromDB)
    Sinon.stub(UserModel, 'findOne').resolves(userSimulated)

    const response = await chai.request(app).post('/login').send(validBodyLogin)

    expect(response.status).to.be.equal(200)
    expect(response.body).to.have.key('token')
  } )
});
