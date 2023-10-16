import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { ProofService } from './proof.service';
import { ApiTags } from '@nestjs/swagger';
import {
  CheckAvatarStatusDto,
  GetPayloadDto,
  GetTwitterPayloadDto,
  VerifyProofDto,
} from './dto/next-dot-id.dto';

@ApiTags('v1/proof')
@Controller('v1/proof')
export class ProofController {
  constructor(private readonly proofService: ProofService) {}

  @Get('key-pair')
  getKeyPair() {
    return this.proofService.getKeyPair();
  }

  @Post('payload')
  getPayload(@Body() dto: GetPayloadDto) {
    return this.proofService.getPayload(dto);
  }

  @Post('payload/twitter')
  getTwitterPayload(@Body() dto: GetTwitterPayloadDto) {
    return this.proofService.getTwitterPayload(dto);
  }

  @Post('')
  verifyProof(@Body() dto: VerifyProofDto) {
    return this.proofService.verifyProof(dto);
  }

  @Get('')
  checkAvatarStatus(@Query() dto: CheckAvatarStatusDto) {
    return this.proofService.checkAvatarStatus(dto);
  }
}
