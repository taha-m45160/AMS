const uri = "mongodb+srv://mutahar789:Hello0985@ams.qh2kz.mongodb.net/AMS?retryWrites=true&w=majority";
const {connect, dropCollection} = require('./util')
const populate = require('./populate')

run()
async function run(){
    const db = await connect(uri)
    const collections = await db.listCollections().toArray()
    const list = collections.map(async (x, i) => {
        await dropCollection(x.name)
    })
    await Promise.all(list);
    await db.ensureIndexes();
    await populate();
    console.log('DONE!')
    process.exit()
}