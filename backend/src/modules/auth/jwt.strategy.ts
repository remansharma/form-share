// import { ExtractJwt, Strategy } from 'passport-jwt';
// import { PassportStrategy } from '@nestjs/passport';
// import { Injectable, UnauthorizedException } from '@nestjs/common';
// // import userServices from '../user/user.services';

// @Injectable()
// export class JwtStrategy extends PassportStrategy(Strategy) {
//   constructor() {
//     super({
//       jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//       ignoreExpiration: false,
//       secretOrKey: process.env.JWTKEY,
//     });
//   }

//   async validate(payload: any) {
//     // const user = await this.userService.findOneById(payload.id);
//     // if (!user) {
//     //     throw new UnauthorizedException('You are not authorized to perform the operation');
//     // }
//     // return payload;
//   }
// }
