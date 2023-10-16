import { Module, RequestMethod } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { LoggerModule } from 'nestjs-pino';
import { AppController } from './app.controller';
import { NextDotIdModule } from './next-dot-id/next-dot-id.module';
import { HttpModule } from '@nestjs/axios';
const { NODE_ENV } = process.env;
@Module({
  imports: [
    TerminusModule,
    LoggerModule.forRoot({
      pinoHttp: {
        autoLogging: true,
        formatters: {
          level: (label) => ({ level: label }),
        },
        level: NODE_ENV === 'prod' ? 'info' : 'debug',
        // install 'pino-pretty' package in order to use the following option
        transport: NODE_ENV === 'local' ? { target: 'pino-pretty' } : undefined,
      },
      exclude: [{ method: RequestMethod.GET, path: '/api/health' }],
    }),
    HttpModule.register({}),
    NextDotIdModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
