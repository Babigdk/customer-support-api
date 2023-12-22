CREATE TABLE `users` (
  `id` integer PRIMARY KEY,
  `email` varchar(255),
  `full_name` varchar(255),
  `created_at` timestamp,
  `updated_at` timestamp
);

CREATE TABLE `support_requests` (
  `id` integer PRIMARY KEY,
  `user_id` varchar(255),
  `first_name` varchar(255),
  `last_name` varchar(255),
  `email_address` varchar(255),
  `support_message_title` varchar(255),
  `support_message_text` text,
  `file_path` varchar(255),
  `created_at` timestamp,
  `updated_at` timestamp
);

ALTER TABLE `users` ADD FOREIGN KEY (`id`) REFERENCES `support_requests` (`user_id`);
