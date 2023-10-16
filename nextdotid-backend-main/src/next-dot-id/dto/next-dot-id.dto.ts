import { OmitType } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class GetPayloadDto {
  @IsString()
  action: string;

  @IsString()
  platform: string;

  @IsString()
  identity: string;

  @IsString()
  public_key: string;
}

export class GetTwitterPayloadDto extends OmitType(GetPayloadDto, [
  'platform',
]) {
  @IsString()
  privateKey: string;
}

export class VerifyProofDto {
  @IsString()
  action: string;

  @IsString()
  platform: string;

  @IsString()
  identity: string;

  @IsString()
  public_key: string;

  @IsString()
  proof_location: string;

  @IsNotEmpty()
  extra: object;

  @IsString()
  uuid: string;

  @IsString()
  created_at: string;
}

export class CheckAvatarStatusDto {
  @IsString()
  platform: string;

  @IsString()
  identity: string;
}
