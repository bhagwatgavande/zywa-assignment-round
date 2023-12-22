-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 22, 2023 at 12:26 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cardsmanagement`
--

-- --------------------------------------------------------

--
-- Table structure for table `cards`
--

CREATE TABLE `cards` (
  `id` int(11) NOT NULL,
  `status` int(11) DEFAULT NULL COMMENT '1-ative, 2-inactive',
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `cards`
--

INSERT INTO `cards` (`id`, `status`, `createdAt`, `updatedAt`) VALUES
(1, 1, NULL, NULL),
(2, 2, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `usercards`
--

CREATE TABLE `usercards` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `cardId` int(11) DEFAULT NULL,
  `status` int(11) DEFAULT NULL COMMENT '1-deliverd, 2-return, 3-pickup,4-other',
  `comment` varchar(255) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `usercards`
--

INSERT INTO `usercards` (`id`, `userId`, `cardId`, `status`, `comment`, `createdAt`, `updatedAt`) VALUES
(3, 1, 1, 1, 'deliverd', '2023-12-22 04:40:59', '2023-12-22 04:40:59');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `mobile` varchar(255) DEFAULT NULL,
  `mobilecountry` varchar(255) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `mobile`, `mobilecountry`, `createdAt`, `updatedAt`) VALUES
(1, 'user@yopmail.com', '$2b$10$NLpxBrEUbDkFol24JdbNBe0jZ8GxU0FmTq1/vn41juYc6LHO/ux2O', '1234567890', '+91', '2023-12-22 04:40:16', '2023-12-22 04:40:16');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cards`
--
ALTER TABLE `cards`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `usercards`
--
ALTER TABLE `usercards`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`),
  ADD KEY `cardId` (`cardId`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `mobile` (`mobile`),
  ADD UNIQUE KEY `mobile_2` (`mobile`),
  ADD UNIQUE KEY `mobile_3` (`mobile`),
  ADD UNIQUE KEY `mobile_4` (`mobile`),
  ADD UNIQUE KEY `mobile_5` (`mobile`),
  ADD UNIQUE KEY `mobile_6` (`mobile`),
  ADD UNIQUE KEY `mobile_7` (`mobile`),
  ADD UNIQUE KEY `mobile_8` (`mobile`),
  ADD UNIQUE KEY `mobile_9` (`mobile`),
  ADD UNIQUE KEY `mobile_10` (`mobile`),
  ADD UNIQUE KEY `mobile_11` (`mobile`),
  ADD UNIQUE KEY `mobile_12` (`mobile`),
  ADD UNIQUE KEY `mobile_13` (`mobile`),
  ADD UNIQUE KEY `mobile_14` (`mobile`),
  ADD UNIQUE KEY `mobile_15` (`mobile`),
  ADD UNIQUE KEY `mobile_16` (`mobile`),
  ADD UNIQUE KEY `mobile_17` (`mobile`),
  ADD UNIQUE KEY `mobile_18` (`mobile`),
  ADD UNIQUE KEY `mobile_19` (`mobile`),
  ADD UNIQUE KEY `mobile_20` (`mobile`),
  ADD UNIQUE KEY `mobile_21` (`mobile`),
  ADD UNIQUE KEY `mobile_22` (`mobile`),
  ADD UNIQUE KEY `mobile_23` (`mobile`),
  ADD UNIQUE KEY `mobile_24` (`mobile`),
  ADD UNIQUE KEY `mobile_25` (`mobile`),
  ADD UNIQUE KEY `mobile_26` (`mobile`),
  ADD UNIQUE KEY `mobile_27` (`mobile`),
  ADD UNIQUE KEY `mobile_28` (`mobile`),
  ADD UNIQUE KEY `mobile_29` (`mobile`),
  ADD UNIQUE KEY `mobile_30` (`mobile`),
  ADD UNIQUE KEY `mobile_31` (`mobile`),
  ADD UNIQUE KEY `mobile_32` (`mobile`),
  ADD UNIQUE KEY `mobile_33` (`mobile`),
  ADD UNIQUE KEY `mobile_34` (`mobile`),
  ADD UNIQUE KEY `mobile_35` (`mobile`),
  ADD UNIQUE KEY `mobile_36` (`mobile`),
  ADD UNIQUE KEY `mobile_37` (`mobile`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cards`
--
ALTER TABLE `cards`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `usercards`
--
ALTER TABLE `usercards`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `usercards`
--
ALTER TABLE `usercards`
  ADD CONSTRAINT `usercards_ibfk_67` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `usercards_ibfk_68` FOREIGN KEY (`cardId`) REFERENCES `cards` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
