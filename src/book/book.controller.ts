import { Body, Controller, Get, Post, Param, Put, Delete } from '@nestjs/common';
import { Book } from './schema/book.schema';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Controller('books')
export class BookController {
    constructor(private bookService: BookService) { }

    @Get()
    async findAllBooks(): Promise<Book[]> {
        var book = this.bookService.findAll()
        return book
    }

    @Post()
    async createBook(@Body() book: CreateBookDto,): Promise<Book> {
        console.log(book)
        return this.bookService.create(book)
    }
    // this is for finding book by its ID
    @Get(':id')
    async getBooks(
        @Param('id')
        id: string,
    ): Promise<Book> {
        console.log(id)
        return this.bookService.findById(id);
    }
    @Put(':id')
    async updateBook(
        @Param('id')
        id: string,
        @Body()
        book: UpdateBookDto,
    ): Promise<Book> {
        return this.bookService.updateById(id, book);
    }
    @Delete(':id')
    async deleteBooks(
        @Param('id')
        id: string,
    ): Promise<Book> {
        return this.bookService.deleteById(id)
    }
}
