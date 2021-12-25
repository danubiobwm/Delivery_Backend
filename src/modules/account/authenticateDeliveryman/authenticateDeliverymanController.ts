import { Request, Response } from 'express';
import { AuthenticateDeliveryManUseCase } from './AuthenticateDeliverymanUseCase';

export class AuthenticateDeliverymanController {
  async handle(request: Request, response: Response) {
    const { username, password } = request.body;

    const authenticateDeliveryManUseCase = new AuthenticateDeliveryManUseCase();

    const result = await authenticateDeliveryManUseCase.execute({
      username, 
      password
    })
    return response.json(result)
    
  }
}