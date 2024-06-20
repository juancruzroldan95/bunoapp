import { boolean, integer, pgTable, timestamp, uuid } from 'drizzle-orm/pg-core';
import { categories } from './categories-schema';
import { lawyers } from './lawyers-schema';

export const categories_lawyers = pgTable('categories_lawyers', {
  categoryId: uuid('category_id')
    .notNull()
    .references(() => categories.categoryId, { onDelete: 'cascade' }),
  lawyerId: integer('lawyer_id')
    .notNull()
    .references(() => lawyers.lawyerId, { onDelete: 'cascade' }),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().$onUpdate(() => new Date()),
  isDeleted: boolean('is_deleted').notNull().default(false),
});
