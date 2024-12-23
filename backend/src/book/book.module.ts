import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookController } from './book.controller';
import { DynamoDBModule } from '../dynamodb/dynamodb.module';

@Module({
  imports: [DynamoDBModule],  // Change this from providers to imports
  providers: [BookService],
  controllers: [BookController],
})
export class BookModule {}
