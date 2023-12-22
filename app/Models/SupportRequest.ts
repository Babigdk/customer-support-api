import { DateTime } from 'luxon'
import { BaseModel, column, BelongsTo, belongsTo  } from '@ioc:Adonis/Lucid/Orm'
import User from './User';

export default class SupportRequest extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({ columnName: 'user_id' })
  public userId: number

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>;

  @column()
  public first_name: string

  @column()
  public last_name: string

  @column({ columnName: 'email_address' })
  public email_address: string

  @column({ columnName: 'support_message_title' })
  public support_message_title: string

  @column({ columnName: 'support_message_text' })
  public support_message_text: string

  @column({ columnName: 'file_path' })
  public file_path: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
