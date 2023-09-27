# Donation Campaign Project

## Project Overview

This project aims to create a user-friendly donation platform where users can explore, donate to specific categories, manage their donations, and gain insights into their donation patterns through statistics and visual representation.

## Key Features

- ### **Category-Based Search and Filtering:**
  - Users can search for specific donation categories using a search bar and filter results by category.
  - Clicking on a category card takes them to a dedicated dynamic route displaying detailed information about that category.

- ### **Donation Management:**
  - Users can donate to specific categories with a "Donate" button on the dynamic route.
  - The system prevents duplicate donations and displays an error message if users attempt to donate the same item more than once.
  - Donated items are stored and displayed in the "Donation" route, allowing users to view and manage their contributions.

- ### **Donation History and Pagination:**
  - The "Donation" route provides a history of all donated items.
  - If the number of donated items exceeds a certain limit (e.g., 4), users can choose to see all their donations through a "See All" button.
  - Users have the option to delete all donated items for a clean slate.

- ### **Statistics and Visual Representation:**
  - The "Statistics" route offers users insights into their donation patterns.
  - A pie chart visually represents the percentage of total donation items (e.g., 12) for each category.
  - Users can also see the total number of items they've donated from the "Donation" route, providing an overview of their contributions.

- ### **Success and Error Messaging:**
  - Users receive clear feedback through success messages when their donations are successful.
  - Error messages are displayed when users attempt to donate the same item multiple times or encounter other issues, enhancing the overall user experience and clarity of the donation process.
