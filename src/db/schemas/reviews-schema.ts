import { boolean, integer, pgEnum, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';
import { users } from './users-schema';
import { cases } from './cases-schema';

export const ratingEnum = pgEnum("rating", ['1', '2', '3', '4', '5']);

export const reviews = pgTable('reviews', {
  reviewId: serial('review_id').primaryKey(),
  description: text('description').notNull(),
  rating: ratingEnum('rating').notNull(),
  reviewerId: integer('reviewer_id')
    .notNull()
    .references(() => users.userId, { onDelete: 'cascade' }),
  caseId: integer('case_id')
    .notNull()
    .references(() => cases.caseId, { onDelete: 'cascade' }),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().$onUpdate(() => new Date()),
  isDeleted: boolean('is_deleted').notNull().default(false),
});
