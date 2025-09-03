import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsOptional, Min } from 'class-validator';
import { Transform } from 'class-transformer';

export class PaginatedQuery {
  @ApiProperty({
    name: 'take',
    type: Number,
    required: false,
  })
  @IsInt()
  @IsOptional()
  @Min(1)
  @Transform(({ value }) => {
    return parseInt(value as string, 10);
  })
  public readonly take: number = 24;

  @ApiProperty({
    name: 'skip',
    type: Number,
    required: false,
  })
  @IsInt()
  @IsOptional()
  @Min(0)
  @Transform(({ value }) => parseInt(value as string, 10))
  public readonly skip: number = 0;
}
