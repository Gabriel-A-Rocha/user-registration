import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const userRecord = this.usersRepository.findByEmail(email);
    if (userRecord) {
      throw new Error("Email address is already in the database.");
    }
    const user = this.usersRepository.create({ name, email });
    return user;
  }
}

export { CreateUserUseCase };
