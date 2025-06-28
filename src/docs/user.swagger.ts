import { applyDecorators } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';
import { UserDto } from '../user/dto/user.dto';

export const UserSwagger = {
  create: applyDecorators(
    ApiOperation({ summary: 'Criar um novo usuário' }),
    ApiBody({ type: UserDto }),
    ApiResponse({ status: 201, description: 'Usuário criado com sucesso' }),
  ),
  findAll: applyDecorators(
    ApiOperation({ summary: 'Listar todos os usuários' }),
  ),
  getById: applyDecorators(
    ApiOperation({ summary: 'Buscar usuário por ID' }),
    ApiParam({ name: 'id', type: Number }),
  ),
  update: applyDecorators(
    ApiOperation({ summary: 'Atualizar usuário por ID' }),
    ApiParam({ name: 'id', type: Number }),
    ApiBody({ type: UserDto }),
  ),
  delete: applyDecorators(
    ApiOperation({ summary: 'Deletar usuário por ID' }),
    ApiParam({ name: 'id', type: Number }),
  ),
};
