const CreateUser = async (req, res) => {
    console.log(req.body)
   return res.send('Create User');
};

const DelUser =  (req, res) => {
    console.log(req.params)
    console.log(req.body)
    return res.send('Delete User');
};
const Updateuser = async (req, res) => {
    console.log(req.body)
   return res.send('Update User');
};


module.exports = {
    CreateUser,DelUser,Updateuser
};
