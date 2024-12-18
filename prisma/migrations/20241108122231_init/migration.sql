-- CreateTable
CREATE TABLE `User` (
    `id` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `mobile` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `signin` BOOLEAN NOT NULL DEFAULT false,
    `joinedDate` DATETIME(3) NOT NULL,

    UNIQUE INDEX `User_username_key`(`username`),
    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TotalAutomaticHistory` (
    `id` VARCHAR(191) NOT NULL,
    `amount` VARCHAR(191) NOT NULL,
    `category` VARCHAR(191) NOT NULL,
    `playerOneUserName` VARCHAR(191) NOT NULL,
    `playerTwoUserName` VARCHAR(191) NOT NULL,
    `playerThreeUserName` VARCHAR(191) NULL,
    `playerFourUserName` VARCHAR(191) NULL,
    `first` VARCHAR(191) NOT NULL,
    `second` VARCHAR(191) NOT NULL,
    `third` VARCHAR(191) NULL,
    `fourth` VARCHAR(191) NULL,

    UNIQUE INDEX `TotalAutomaticHistory_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TotalchallengeHistory` (
    `id` VARCHAR(191) NOT NULL,
    `amount` VARCHAR(191) NOT NULL,
    `category` VARCHAR(191) NOT NULL,
    `challengedBy` VARCHAR(191) NOT NULL,
    `challengedTo` VARCHAR(191) NOT NULL,
    `winner` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `TotalchallengeHistory_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UserFullDetails` (
    `id` VARCHAR(191) NOT NULL,
    `nooftimespaired` VARCHAR(191) NOT NULL,
    `averageroc` VARCHAR(191) NOT NULL,
    `winRate` VARCHAR(191) NOT NULL DEFAULT '0/0',
    `Ranking` VARCHAR(191) NOT NULL,
    `balanceINR` VARCHAR(191) NOT NULL,
    `authorId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `UserFullDetails_id_key`(`id`),
    UNIQUE INDEX `UserFullDetails_authorId_key`(`authorId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UserEachMatchDetails` (
    `id` VARCHAR(191) NOT NULL,
    `profit` VARCHAR(191) NOT NULL,
    `playingwith` VARCHAR(191) NOT NULL,
    `aftergameamount` VARCHAR(191) NOT NULL,
    `authorId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `UserEachMatchDetails_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UserCurrentPairedDetails` (
    `id` VARCHAR(191) NOT NULL,
    `authorId` VARCHAR(191) NOT NULL,
    `isPaired` BOOLEAN NOT NULL DEFAULT false,
    `opponentId` VARCHAR(191) NULL,
    `amount` VARCHAR(191) NULL,
    `category` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `UserCurrentPairedDetails_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ChallengeGameRangeDetails` (
    `id` VARCHAR(191) NOT NULL,
    `authorId` VARCHAR(191) NOT NULL,
    `paired` BOOLEAN NULL DEFAULT false,
    `categoryChosen` VARCHAR(191) NOT NULL,
    `betStartRange` VARCHAR(191) NULL,
    `betEndRange` VARCHAR(191) NULL,
    `askStartRange` VARCHAR(191) NULL,
    `askEndRange` VARCHAR(191) NULL,
    `opponentId` VARCHAR(191) NULL,

    UNIQUE INDEX `ChallengeGameRangeDetails_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ChallengeResendGameRangeDetails` (
    `id` VARCHAR(191) NOT NULL,
    `authorId` VARCHAR(191) NOT NULL,
    `betStartRange2` VARCHAR(191) NULL,
    `betEndRange2` VARCHAR(191) NULL,
    `askStartRange2` VARCHAR(191) NULL,
    `askEndRange2` VARCHAR(191) NULL,

    UNIQUE INDEX `ChallengeResendGameRangeDetails_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UserAllTrades` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `authorId` VARCHAR(191) NOT NULL,
    `buyOrSell` VARCHAR(191) NOT NULL,
    `symbol` VARCHAR(191) NOT NULL,
    `openingprice` DOUBLE NOT NULL,
    `margin` DOUBLE NOT NULL,
    `unitsOrLots` DOUBLE NOT NULL,
    `profitOrLoss` DOUBLE NULL,
    `takeProfitValue` DOUBLE NULL,
    `stopLossValue` DOUBLE NULL,
    `currentPrice` DOUBLE NULL,
    `closingPrice` DOUBLE NULL,
    `openingTime` DATETIME(3) NULL,
    `closingTime` DATETIME(3) NULL,

    UNIQUE INDEX `UserAllTrades_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PlayerTradingStyleDetails` (
    `id` VARCHAR(191) NOT NULL,
    `indicatorName` JSON NULL,
    `symbol` VARCHAR(191) NOT NULL,
    `authorId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `PlayerTradingStyleDetails_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ChallengeHistory` (
    `id` VARCHAR(191) NOT NULL,
    `player1` VARCHAR(191) NOT NULL,
    `player2` VARCHAR(191) NULL,
    `player1Bet` DOUBLE NULL,
    `player2Bet` DOUBLE NULL,
    `winner` VARCHAR(191) NULL,
    `player1DemoBalance` DOUBLE NULL,
    `player2DemoBlance` DOUBLE NULL,
    `matchStartedAt` DATETIME(3) NULL,
    `matchOverAt` DATETIME(3) NULL,

    UNIQUE INDEX `ChallengeHistory_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PartialDemoBalance` (
    `id` VARCHAR(191) NOT NULL,
    `player` VARCHAR(191) NOT NULL,
    `demoBalance` DOUBLE NOT NULL,
    `authorId` VARCHAR(191) NOT NULL,
    `category` VARCHAR(191) NULL,

    UNIQUE INDEX `PartialDemoBalance_id_key`(`id`),
    UNIQUE INDEX `PartialDemoBalance_player_key`(`player`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `UserFullDetails` ADD CONSTRAINT `UserFullDetails_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserEachMatchDetails` ADD CONSTRAINT `UserEachMatchDetails_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserCurrentPairedDetails` ADD CONSTRAINT `UserCurrentPairedDetails_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ChallengeGameRangeDetails` ADD CONSTRAINT `ChallengeGameRangeDetails_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ChallengeResendGameRangeDetails` ADD CONSTRAINT `ChallengeResendGameRangeDetails_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `ChallengeGameRangeDetails`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserAllTrades` ADD CONSTRAINT `UserAllTrades_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PlayerTradingStyleDetails` ADD CONSTRAINT `PlayerTradingStyleDetails_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PartialDemoBalance` ADD CONSTRAINT `PartialDemoBalance_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
