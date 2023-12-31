import { Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { UserModule } from 'src/user/user.module';
import { ChatController } from './chat.controller';
import { ChatGateway } from './chat.gateway';
import { ChatService } from './chat.service';
import { ChatMediaController } from './chat-media.controller';

@Module({
  imports: [UserModule, AuthModule],
  providers: [ChatGateway, ChatService],
  controllers: [ChatController, ChatMediaController],
  exports: [ChatGateway],
})
export class ChatModule {}
