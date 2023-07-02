const Express = require("express");
const ProdutosController = require("./controllers/produtoController.js");
const CarrinhoController = require('./controllers/carrinhoController.js')
const router = Express()

router.get('/produtos',ProdutosController.index );
router.post('/produtos',ProdutosController.store );
router.put('/produtos/:produto_id',ProdutosController.update );
router.delete('/produtos/:produto_id',ProdutosController.delete);

//Carrinho
router.get('/car',CarrinhoController.index );
router.post('/car',CarrinhoController.store );
router.put('/car/:car_id',CarrinhoController.update );
router.delete('/car/:car_id',CarrinhoController.delete);

module.exports = router;