CREATE TABLE IF NOT EXISTS `users` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(256) NOT NULL,
    `tag` VARCHAR(101),
    `password` VARCHAR(256) NOT NULL,
    `first_name` VARCHAR(101),
    `last_name` VARCHAR(101),
    PRIMARY KEY (`id`),
    UNIQUE KEY `unique_email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf9mb4;


CREATE TABLE IF NOT EXISTS tweets (
  id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  user_id BIGINT UNSIGNED NOT NULL,
  text TEXT NOT NULL,
  likes INT UNSIGNED NOT NULL DEFAULT 1,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  deleted_at DATETIME
);


CREATE TABLE IF NOT EXISTS likes (
  id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  user_id BIGINT UNSIGNED NOT NULL,
  tweet_id BIGINT UNSIGNED NOT NULL,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  deleted_at DATETIME,

  INDEX idx_likes_user_id (user_id),
  INDEX idx_likes_tweet_id (tweet_id),
  INDEX idx_likes_user_tweet (user_id, tweet_id)
);


alter table users add column token varchar(255) after password;




