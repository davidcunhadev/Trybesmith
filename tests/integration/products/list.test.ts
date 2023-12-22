import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app'
import Sinon from 'sinon';
import ProductModel from '../../../src/database/models/product.model';
import { allProducts } from '../../mocks/Product.mock';

chai.use(chaiHttp);

describe('GET /products', function () { 
  beforeEach(function () { sinon.restore(); });

  it ('Testa se é possivel listar todos os produtos', async function () {
    const productListSimulated = allProducts.map((product) => ProductModel.build(product))
    Sinon.stub(ProductModel, 'findAll').resolves(productListSimulated)

    const productListResponse = await chai.request(app).get('/products')
    expect(productListResponse.status).to.be.equal(200)
  })
});
