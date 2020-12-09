import {
  Inject,
  Controller,
  Post,
  Provide,
  Query,
  Get,
} from '@midwayjs/decorator';
import { Context } from 'egg';
import { UserService } from '../service/user';

@Provide()
@Controller('/api')
export class APIController {
  @Inject()
  ctx: Context;

  @Inject()
  userService: UserService;

  @Inject()
  DemoServer: any;

  @Get('/')
  async getData(ctx) {
    ctx.body = await this.DemoServer.getList();
  }

  @Post('/get_user')
  async getUser(@Query() uid) {
    const user = await this.userService.getUser({ uid });
    return { success: true, message: 'OK', data: user };
  }
}
