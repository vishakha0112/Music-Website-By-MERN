const UserModel = require('../schemas/user');
const userOperations = {
    async register(userObject){
        const result = await UserModel.create(userObject);
        console.log('Result is ',result);
        return result._id; 
    },
    async login({userid,password}){
        const result = await UserModel.findOne({"userid":userid,"password":password});
        console.log('Login Result is ',result);
        return result;
    }
}
// userOperations.register({userid:'shyam',password:'12345678',name:'Shyam Kumar'});
module.exports = userOperations;