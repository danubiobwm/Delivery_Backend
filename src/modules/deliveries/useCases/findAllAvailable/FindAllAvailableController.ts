import { Request, Response } from "express";
import { FindAllAvailableDateUseCase } from "./FindAllAvailableDateUseCase";


export class FindAllAvailableController {
  async handle(request: Request, response: Response) {
    const findAllAvailableDateUseCase = new FindAllAvailableDateUseCase();

    const deliveries = await findAllAvailableDateUseCase.execute()
    return response.json(deliveries);


  }
}