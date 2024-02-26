```markdown
# Roxiler Backend Project

![Roxiler Backend](link-to-your-image)

Welcome to the Roxiler Backend project! This project implements APIs to manage transactions, generate statistics, bar charts, and pie charts based on transaction data. It also includes an API to combine data from multiple sources.

## Table of Contents

- [Setup](#setup)
- [Accessing APIs](#accessing-apis)
- [Task Description](#task-description)
- [Libraries Used](#libraries-used)

## Setup

### Clone the repository:

```
git clone https://github.com/Aseemgupta256/Roxiler-Backened.git
```

### Install dependencies:

```
cd Roxiler-Backened
npm install
```

Create a `.env` file in the root directory with the following content, replacing the placeholders with your MySQL database credentials:

```
DB_HOST=your_database_host
DB_USER=your_database_user
DB_PASSWORD=your_database_password
DB_DATABASE=your_database_name
DB_PORT=your_database_port
```

### Run the project:

```
npm start
```

## Accessing APIs

- Transactions API: [http://localhost:3000/api/transacts](http://localhost:3000/api/transacts)
- Statistics API: [http://localhost:3000/api/stats](http://localhost:3000/api/stats)
- Bar Chart API: [http://localhost:3000/api/bar](http://localhost:3000/api/bar)
- Pie Chart API: [http://localhost:3000/api/pie](http://localhost:3000/api/pie)
- Combined API: [http://localhost:3000/api/combo](http://localhost:3000/api/combo)

## Task Description

- **Initialize Database:** The project includes a service to initialize the database by creating a products table and inserting seed data fetched from a third-party API.
- **Transactions API:** List all transactions based on search parameters and pagination.
- **Statistics API:** Calculate and return statistics such as total sales, average price, etc., based on the transaction data.
- **Bar Chart API:** Generate a bar chart showing the price range and the number of items in that range for the selected month.
- **Pie Chart API:** Generate a pie chart showing the distribution of sales across different categories for the selected month.
- **Combined API:** Fetch data from multiple APIs, combine the responses, and send a final combined JSON response.

## Libraries Used

- **Express.js:** Web framework for Node.js
- **MySQL:** MySQL database driver
- **dotenv:** Load environment variables from a .env file
- **fetch:** HTTP client for fetching data from third-party APIs
```