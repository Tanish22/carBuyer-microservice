import jwt from "jsonwebtoken";
const JWT_SECRET: any = process.env.JWT_SECRET;

export class JwtToken {
    static async generateJwt (newBuyer: any) {
        return jwt.sign({
            iss: 'Tanish',
            sub: newBuyer.id,
            iat: new Date().getTime(),  // current time
            exp: new Date().setDate(new Date().getDate() + 1) // current time + 24 hrs
          }, JWT_SECRET)
    }
}