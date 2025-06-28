// src/user/dto/user.dto.ts
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class UserDto {
  @ApiPropertyOptional({ example: 1 })
  id?: number;

  @ApiProperty({ example: 'João' })
  name: string;

  @ApiProperty({ example: 'Silva' })
  lastName: string;

  @ApiProperty({ example: 30 })
  age: number;

  @ApiPropertyOptional({ example: 'Acme Inc.' })
  company?: string;
}
