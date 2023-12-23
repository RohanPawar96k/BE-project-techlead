var HRModel = require('./HRModel');
var key = '123456789trytryrtyr';
var encryptor = require('simple-encryptor')(key);

module.exports.createHRDBService = (HRDetails) => {
  return new Promise(async function myFn(resolve, reject) {
    try {
      var HRModelData = new HRModel();
      HRModelData.firstname = HRDetails.firstname;
      HRModelData.lastname = HRDetails.lastname;
      HRModelData.company = HRDetails.company;
      HRModelData.email = HRDetails.email;
      
      // Encrypt the password
      var encrypted = encryptor.encrypt(HRDetails.password);
      HRModelData.password = encrypted;

      // Save the document
      const result = await HRModelData.save();

      // Handle the result
      console.log('HR saved successfully:', result);
      resolve(true);
    } catch (error) {
      console.error('Error saving HR:', error.message);
      reject(false);
    }
  });
};

module.exports.loginHRDBService = (HRDetails) => {
  return new Promise(async function myFn(resolve, reject) {
    try {
      const result = await HRModel.findOne({ email: HRDetails.email });

      if (result !== null) {
        // Decrypt the password
        var decrypted = encryptor.decrypt(result.password);

        if (decrypted == HRDetails.password) {
          console.log('HR Validated Successfully');
          resolve({ status: true, msg: "HR Validated Successfully" });
        } else {
          console.log('HR Validation Failed');
          reject({ status: false, msg: "HR Validation Failed" });
        }
        
      } else {
        console.log('Invalid HR Data');
        reject({ status: false, msg: "Invalid HR Data" });
      }
    } catch (error) {
      console.error('Error finding HR:', error.message);
      reject({ status: false, msg: "Error in finding HR" });
    }
  });
};
 