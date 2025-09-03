import { PaginatedQuery, PaginatedResponse } from '@common/dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class ServerItem {
  @ApiProperty({
    type: String,
  })
  public readonly id: string;

  @ApiProperty({
    type: String,
  })
  public readonly slug: string;

  @ApiProperty({
    type: String,
  })
  public readonly title: string;

  @ApiProperty({
    type: String,
  })
  public readonly owner: string;

  @ApiProperty({
    type: String,
  })
  public readonly description: string;

  @ApiProperty({
    type: Boolean,
  })
  public readonly isOfficial: boolean;

  @ApiProperty({
    type: String,
    nullable: true,
  })
  public readonly logo?: string | null;
}

export class GetServersRequest extends PaginatedQuery {
  @ApiProperty({
    type: String,
    required: false,
  })
  @IsOptional()
  @IsString()
  public readonly q: string;

  @ApiProperty({
    type: String,
    required: false,
  })
  @IsOptional()
  @IsString()
  public readonly category: string;
}

export class GetServersResponse extends PaginatedResponse<ServerItem> {
  @ApiProperty({
    type: ServerItem,
    isArray: true,
  })
  public readonly data: ServerItem[];
}
