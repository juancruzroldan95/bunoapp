import {
  boolean,
  integer,
  pgTable,
  serial,
  text,
  timestamp,
} from 'drizzle-orm/pg-core';
import { users } from './users-schema';

export const cases = pgTable('cases', {
  caseId: serial('case_id').primaryKey(),
  title: text('title'),
  description: text('description').notNull(),
  userId: integer('user_id')
    .notNull()
    .references(() => users.userId),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
  isDeleted: boolean('is_deleted').default(false).notNull(),
});
