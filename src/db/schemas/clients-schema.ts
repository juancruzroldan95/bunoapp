import { boolean, integer, pgTable, serial, timestamp } from 'drizzle-orm/pg-core';
import { users } from './users-schema';

export const clients = pgTable('clients', {
  clientId: serial('client_id').primaryKey(),
  userId: integer('user_id')
    .notNull()
    .references(() => users.userId, { onDelete: 'cascade' }),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().$onUpdate(() => new Date()),
  isDeleted: boolean('is_deleted').notNull().default(false),
});
