import bcrypt from 'bcryptjs';

// export class Pwd {
//   static async hashPassword(salt: string, rounds: number){
//     const hash = bcrypt.hash(salt, rounds);

//     return hash;
//   }

//   static async comparePassword ( pw: any, hashedPw: any ) {
//     const isMatch = bcrypt.compare(pw, hashedPw);
 
//     return isMatch;
    
//   }
// }


export class Password {
  static async hashPassword (enteredPassword: string) {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(enteredPassword, salt);

    return hash;
  }

  static async comparePassword (enteredPassword: string, storedPassword: string) {
    const isMatch = await bcrypt.compare(enteredPassword, storedPassword);

    return isMatch;
  }
}