[![Cypress Tests](https://github.com/adminvns/shell_assignment/actions/workflows/cypress-tests.yml/badge.svg)](https://github.com/adminvns/shell_assignment/actions/workflows/cypress-tests.yml)
# Cypress E2E Test Suite for Assignment - Shell

## Overview

This repository contains an end-to-end (E2E) test suite for testing the functionality of a E-commerce web application using Cypress. The suite includes tests for various user interactions such as adding items to the cart, checking out, and searching for products.

## Table of Contents

1. [Running the Tests Locally](#running-the-tests-locally)
2. [GitHub Actions CI/CD Pipeline](#github-actions-cicd-pipeline)
3. [Test Flow](#test-flow)
4. [Defect Found](#defect-found)

## Running the Tests Locally

To run the tests locally, follow these steps:

1. **Clone the Repository**

   ```bash
   git clone <this repo>
   cd repo
2. **Install Dependencies**

     ```bash
   npm install
   npx cypress run


## GitHub Actions CI/CD Pipeline

This project includes a GitHub Actions workflow for continuous integration and deployment. The workflow is triggered on every push to the repository and performs the following:

**Runs on Ubuntu-latest**: The tests are executed on an Ubuntu virtual machine to ensure consistency across environments.

**Parallel Execution**: Tests are executed in parallel for faster feedback. Each test file specified in the matrix is run independently.

**Merge and Generate Reports**: After running the tests, the results are merged and a detailed report is generated.

**Upload Reports**: The test reports are uploaded as artifacts, allowing you to download and review them from the GitHub Actions interface.
We can also see Cypress Results Summary by Navigating to Actions in Github and Selecting particular Run and then Clicking on Summary.

**Retries**: Retries are set to one.

## Test Flow
### 1. Login Flow

Test Case: Verify user login functionality with valid and invalid credentials.

**Steps**:

- Navigate to the login page.
- Enter valid credentials (username and password).
- Click the 'Login' button.
- Verify that the user is successfully logged in.
- Try logging in with invalid credentials.
- Verify that an error message is displayed.

**Validation**:
    
- Successful login redirects to the dashboard or home page.
- Error message is displayed for invalid credentials.

### 2. Add to Cart Flow
Test Case: Add a specific or random product to the cart.

**Steps**:
    
- Login using valid credentials.
- Navigate to the product listing page.
- Add a product to the cart.
- Verify that the product is added to the cart.

**Validation**:
    
- The cart count is updated.
- Correct product is displayed in the cart.
- The cart should reflect the price and product details.

### 3. Checkout Flow

Test Case: Add a product to the cart and proceed to checkout.

**Steps**:
    
- Add a product to the cart.
- Navigate to the cart page and verify the cart title.
- Proceed to checkout.
- Fill out the shipping and payment information.
- Submit the order and verify the confirmation message.

**Validation**:
    
- The product and price in the checkout page match those in the cart.
- Successful checkout displays a confirmation message.
### 4. Search Products Flow

Test Case: Search for a product name or category and verify search results.

**Steps**:
- Login using valid credentials.
- Search by product name.
- Verify that the search results page displays relevant products.

**Validation**:
    
- Search results display products matching the search query.
- Search by different categories (Phone, Laptop, Monitor)
## Defect Found (UI)

During testing, a defect was identified in the application:

*Issue*: The application allows the checkout process even if the cart is empty.

*Impact*: This could lead to users completing purchases without having any items in their cart, resulting in a poor user experience and potential revenue loss(although the website is a test/demo website)
<br>
##