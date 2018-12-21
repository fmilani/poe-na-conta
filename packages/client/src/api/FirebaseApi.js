import { firebaseDatabase } from '../utils/firebaseUtils';

export default class FirebaseApi {
  static getItems = callback => {
    const query = firebaseDatabase.ref('items');

    query.on('value', dataSnapshot => {
      const val = dataSnapshot.val();

      if (typeof callback === 'function') callback(val);
    });
  };

  static chargeUser = async (id, pin, ammount) => {
    const query = firebaseDatabase.ref(`users/${id}`);

    const dataSnapshot = await query.once('value');
    const user = dataSnapshot.val();
    if (!user) {
      return false;
    }

    const newDebt = user.debt + ammount;
    return new Promise(resolve => {
      query.update({ debt: newDebt }, function(error) {
        if (error) {
          resolve({ success: false });
        } else {
          resolve({
            success: true,
            newDebt,
          });
        }
      });
    });
  };

  static setStatus = (nodePath, status) => {
    firebaseDatabase.ref(nodePath).set({ ocupado: status });
  };
}
