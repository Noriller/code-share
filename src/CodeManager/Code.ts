import { v4 as uuidv4 } from 'uuid';
import { CodeError } from '../types/Errors/CodeNameError';

export class Code {
  private id?: string;
  private name!: string;
  private description!: string;
  private restricted?: boolean;
  private image?: string;

  constructor({
    id = uuidv4(),
    name,
    description,
    restricted = false,
    image,
  }: CodeDTO) {
    if (name.length < 5) throw new CodeError('Name need at least 5 characters.');
    if (description.length < 25) throw new CodeError('Description need at least 25 characters.');

    Object.assign(this, {
      id,
      name,
      description,
      restricted,
      image,
    });
  }
}

interface CodeDTO {
  id?: string;
  name: string;
  description: string;
  restricted?: boolean;
  image?: string;
}
