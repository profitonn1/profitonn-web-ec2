-- AlterTable
ALTER TABLE `User` ADD COLUMN `signInTime` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);
