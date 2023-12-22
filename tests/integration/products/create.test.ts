import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import Sinon from 'sinon';
import app from '../../../src/app'
import ProductModel from '../../../src/database/models/product.model';
import { product, validBody } from '../../mocks/Product.mock';

chai.use(chaiHttp);

describe('POST /products', function () { 
  beforeEach(function () { sinon.restore(); });

  it ('Testa se é possível criar um produto com sucesso', async function () {
    const productSimulated = ProductModel.build(product)
    Sinon.stub(ProductModel, 'create').resolves(productSimulated)

    const response = await chai.request(app).post('/products').send(validBody)

    expect(response.status).to.be.equal(201);
  })

  it ('Testa se lança erro ao enviar body sem o campo price', async function () {
    const productSimulated = ProductModel.build(product)
    Sinon.stub(ProductModel, 'create').resolves(productSimulated)

    const response = await chai.request(app).post('/products').send({
      "name": "Martelo de Thor",
      "orderId": 5
    })

    expect(response.status).to.be.deep.equal(400);
    expect(response.body).to.have.key('message')
  })

  it ('Testa se lança erro ao enviar body sem o campo name', async function () {
    const productSimulated = ProductModel.build(product)
    Sinon.stub(ProductModel, 'create').resolves(productSimulated)

    const response = await chai.request(app).post('/products').send({
      "price": "30 peças de ouro",
      "orderId": 5
    })

    expect(response.status).to.be.deep.equal(400);
    expect(response.body).to.have.key('message')
  })
});
