import { Module } from '@nestjs/common';
import { SharedModule } from './libs/shared/shared.module';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [SharedModule, PostsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
