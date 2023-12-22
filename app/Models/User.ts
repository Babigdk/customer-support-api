import { DateTime } from 'luxon'
import {
  column,
  BaseModel,
} from "@ioc:Adonis/Lucid/Orm";


export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({ columnName: 'email'})
  public email: string

  @column({ columnName: 'full_name' })
  public fullName: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
