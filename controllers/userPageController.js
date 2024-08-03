const UserModal = require('../models/userSchema')
const bcrypt = require('bcrypt')


const createUser = async (req,res) => {
        try {
            const saltRounds = 10; // Örneğin, 10 round kullanabilirsiniz
            const myPlaintextPassword = req.body.password; // Burada parolanızı belirtin
    
            // Salt oluşturma
            const salt = await bcrypt.genSalt(saltRounds);
    
            // Parolayı hash'leme
            const hash = await bcrypt.hash(myPlaintextPassword, salt);
    
            // Hash'lenmiş parolayı req.body'ye ekleyin
            req.body.password = hash;
    
            // Kullanıcıyı veritabanına kaydedin
            await UserModal.create(req.body);
    
            // Başarı yanıtı gönderin
            res.status(200).json({
                succeed: true,
                message: "Created user"
            });
        } catch (error) {
            // Hata yanıtı gönderin
            res.status(401).json({
                succeed: false,
                message: "User creation failed",
                error
            });
        }
}


const loginUSer = async (req,res) => {
     try {
        const { email, password } = req.body;
        const user = await UserModal.findOne({ email });
    
        if (!user) {
            return res.status(404).send({
                success: false,
                message: "User not found"
            });
        }
    
        bcrypt.compare(password, user.password, function(err, result) {
            if (err) {
                console.error("Error comparing passwords:", err);
                return res.status(500).send({
                    success: false,
                    message: "Internal Server Error"
                });
            }

            if (result) {
                // Şifre doğru
                return res.send({
                    success: true,
                    message: "Login successful"
                });
            } else {
                // Şifre yanlış
                return res.status(401).send({
                    success: false,
                    message: "Password is incorrect"
                });
            }
        })
    } catch (err) {
        console.error("Error:", err);
        return res.status(500).send({
            success: false,
            message: 'Internal Server Error'
        });
    }
    
    
}


module.exports = {
    createUser,
    loginUSer
}