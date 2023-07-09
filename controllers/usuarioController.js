const  Usuarios = require('../models/usuarios.js'); 
const bcrypt = require('bcryptjs');


 module.exports = {
        /*
            async login(req, res) {
                const { email,senha, online } = req.body;
               
                const user = await Usuarios.findOne({ where: { email } });
                console.log(user);
                if (!user) {
                    return res.status(400).send({
                        status: 0,
                        message: 'E-mail ou senha incorreto! 1 IF  ',
                        user: {}
                    });
                }
                
                const senhaMatch = await bcrypt.compare(senha, user.senha);
                if (!senhaMatch) {
                return res.status(400).send({
                    status: 0,
                    message: 'E-mail ou senha incorreto! 2 IF',
                    user: {}
                });
                }
/*
                if (!bcrypt.compareSync(senha, user.senha)) {
                    return res.status(400).send({
                        status: 0,
                        message: 'E-mail ou senha incorreto!',
                        user: {}
                    });
                }
        
                const user_id = user.id;
        
                await Usuarios.update({
                    online
                }, {
                    where: {
                        id: user_id
                    }
                });
        },*/

        async index(req, res){
            const user = await Usuarios.findAll();
            if(user == '' || user == null){
               
                return res.status(200).send({message: 'Nenhum usuário cadastrado'})
            }
            return res.status(200).send({user});

        },
    }