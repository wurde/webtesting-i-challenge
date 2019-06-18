BEGIN TRANSACTION;

CREATE TABLE `items` (
  `id` integer not null primary key autoincrement,
  `name` text not null,
  `durability` integer,
  `enhancement` integer,
  `created_at` datetime not null default CURRENT_TIMESTAMP,
  `updated_at` datetime not null default CURRENT_TIMESTAMP
);

COMMIT TRANSACTION;
