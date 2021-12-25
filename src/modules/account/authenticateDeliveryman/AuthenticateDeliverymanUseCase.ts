import { prisma } from '../../../database/prismaClient';
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';

interface IAuthenticateDeliveryMan {
  username: string;
  password: string;
}

export class AuthenticateDeliveryManUseCase {
  async execute({ username, password }: IAuthenticateDeliveryMan) {

    const deliveryman = await prisma.deliveryman.findFirst({
      where: {
        username
      }
    })
    if (!deliveryman) {
      throw new Error("Username or password invalid!")
    }

    const passwordMatch = await compare(password, deliveryman.password);

    if (!passwordMatch) {
      throw new Error("Username or password invalid!")
    }

    const token = sign({ username }, "2bbfb6e50d5226371f42b9f55237a0d4", {
      subject: deliveryman.id,
      expiresIn: "1d"
    });
    return token ;
  }
}