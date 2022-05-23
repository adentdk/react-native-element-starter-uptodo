import { Model } from "@nozbe/watermelondb";
import {text, field, date} from "@nozbe/watermelondb/decorators"

export default class Category extends Model {
  static table = 'categories';

  @text('name') name;
  @text('color') color;
  @text('icon') icon;
  @field('order') order;
  @date('created_at') createdAt;
  @date('updated_at') updatedAt;
}