// pwd:  proshop

const mongoose = require('mongoose');
const colors = require('colors');
const Mongo_Url = "mongodb+srv://dakshataramteke00:proshop@proshop.cdrvrku.mongodb.net/ProShop?retryWrites=true&w=majority&appName=proshop"
main()
.then(console.log(`Mongo DB connected `.bgMagenta.white))
.catch(err => console.log(err));

async function main() {
  await mongoose.connect(Mongo_Url);

}