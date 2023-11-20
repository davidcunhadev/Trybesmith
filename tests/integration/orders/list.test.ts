import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app'
import OrderModel from '../../../src/database/models/order.model';
import { orders } from '../../mocks/Orders.mock'
import Sinon from 'sinon';

chai.use(chaiHttp);

describe('GET /orders', function () { 
  beforeEach(function () { sinon.restore(); });

  it ('Testa se é possível listar todas as orders com os respectivos ids de cada produto.', async function () {
    const buildAllOrders = orders.map((order) => OrderModel.build(order))
    Sinon.stub(OrderModel, 'findAll').resolves(buildAllOrders)
    
    const response = await chai.request(app).get('/orders');

    expect(response.status).to.be.equal(200);
  })
});
