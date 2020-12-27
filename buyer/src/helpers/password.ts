import bcrypt from 'bcryptjs';

export class Password {
  static async hashPassword(salt: string, rounds: number){
    const hash = bcrypt.hash(salt, rounds);

    return hash;
  }

  static async comparePassword( salt: string, password: string ){
    const isMatch = bcrypt.compare(salt, password);

    return isMatch;
  }
}


