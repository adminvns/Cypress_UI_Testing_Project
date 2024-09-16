[![Cypress Tests](https://github.com/adminvns/shell_assignment/actions/workflows/cypress-tests.yml/badge.svg)](https://github.com/adminvns/shell_assignment/actions/workflows/cypress-tests.yml)
# Cypress E2E Test Suite for Assignment - Shell

## Overview

This repository contains an end-to-end (E2E) test suite for testing the functionality of a E-commerce web application using Cypress. The suite includes tests for various user interactions such as adding items to the cart, checking out, and searching for products.

## Table of Contents

1. [Running the Tests Locally](#running-the-tests-locally)
2. [GitHub Actions CI/CD Pipeline](#github-actions-cicd-pipeline)
3. [Defect Found](#defect-found)

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

Runs on Ubuntu-latest: The tests are executed on an Ubuntu virtual machine to ensure consistency across environments.

Parallel Execution: Tests are executed in parallel for faster feedback. Each test file specified in the matrix is run independently.

Merge and Generate Reports: After running the tests, the results are merged and a detailed report is generated.

Upload Reports: The test reports are uploaded as artifacts, allowing you to download and review them from the GitHub Actions interface.
We can also see Cypress Results Summary by Navigating to Actions in Github and Selecting particular Run and then Clicking on Summary.

## Defect Found (UI)

During testing, a defect was identified in the application:

*Issue*: The application allows the checkout process even if the cart is empty.

*Impact*: This could lead to users completing purchases without having any items in their cart, resulting in a poor user experience and potential revenue loss(although the website is a test/demo website)
<br>
##