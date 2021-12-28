import { Controller,Post, Body, Get, Put, Delete, Param } from '@nestjs/common';
import { DtoMessage } from './dto/dto-message';

@Controller('messages')
export class MessagesController {
    @Post()
    create(@Body() dtoMessage: DtoMessage): string{
        return 'Mensaje creado'
    }

    @Get()
    getAll(): string{
        return 'Esta es la lista de mensajes'
    }

    @Put()
    update(@Body() dtoMessage: DtoMessage): string{
        return 'Mensaje actualizado'
    }

    @Delete(':id')
    delete(@Param('id') id: string){
        return `Mensaje ${id} eliminado`
    }

}