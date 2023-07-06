const mongoose = require('mongoose');
const { Schema } = mongoose;

const accountSchema = new Schema({
  identifiant: {
    type: String,
    unique: true,
    required: true
  },
  authentication: {
    password: { type: String, required: true, select: false },
    salt: { type: String, select: false },
    sessionToken: { type: String, select: false },
  },
  role: {
    type: Number,
    default: 3
  }
});

export const AccountModel = mongoose.model('Account', accountSchema);

export const getAccount = () => AccountModel.find({});
export const getAccountById = (id: string) => AccountModel.findById(id);
export const getUserBySessionToken = (sessionToken: string) => AccountModel.findOne({ 'authentication.sessionToken': sessionToken });

export const createAccount = (account: any) => {
  const newAccount = new AccountModel(account);
  return newAccount.save();
}


// export const createAccount2 = (values: Record<string, any>) => new AccountModel(values).save().then((user) => user.toObject());
export const deleteAccountById = (id: string) => AccountModel.findByIdAndDelete(id);
export const updateAccountById = (id: string, account: any) => AccountModel.findByIdAndUpdate(id, account, { new: true });