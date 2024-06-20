import { boolean, integer, pgTable, timestamp, uuid } from 'drizzle-orm/pg-core';
import { categories } from './categories-schema';
import { cases } from './cases-schema';

export const categories_cases = pgTable('categories_cases', {
  categoryId: uuid('category_id')
    .notNull()
    .references(() => categories.categoryId, { onDelete: 'cascade' }),
  caseId: integer('case_id')
    .notNull()
    .references(() => cases.caseId, { onDelete: 'cascade' }),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().$onUpdate(() => new Date()),
  isDeleted: boolean('is_deleted').notNull().default(false),
});
