var nodemailer=require("nodemailer")
const dotenv = require('dotenv');

dotenv.config();

var transfer=nodemailer.createTransport({
    service:"gmail", //gönderici mail in kullandığı servis
    auth:{//gönderici mail in bilgileri
        user:"mertbaba.okulmus.010@gmail.com",
        pass:process.env.pass
        
    }
})

var mailBilgi={
    from:"mertbaba.okulmus.010@gmail.com",
    to:"mertbaba.okulmus@hotmail.com,matamatik-kimya@hotmail.com", 
    subject:"Ateş Avcıları",
    html:"<h1>Dikkat 1 nolu ateş avcısından tenlikeli durum algılandı</h1><strong>Daha detaylı bilgi için lütfen <a href='http://www.google.com'>Atesavcılari.com</a> adresini ziyaret ediniz!</strong>" //mail içeriğine html tağları da yazabiliyoruz, text özelliği gibi kullana biliyoruz
};

transfer.sendMail(mailBilgi,function (error) {
    if(error) console.log(error)
    else console.log("Mailiniz gönderildi!!")
})