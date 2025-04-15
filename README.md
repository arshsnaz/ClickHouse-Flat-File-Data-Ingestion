
# Bidirectional ClickHouse & Flat File Data Ingestion Tool

## Objective

This project is a web-based application that facilitates bidirectional data ingestion between a ClickHouse database and Flat File (CSV). The application supports both ClickHouse to Flat File ingestion and Flat File to ClickHouse ingestion. It provides a simple user interface (UI) to configure connections, select tables/columns for ingestion, and reports the total number of records processed upon completion. The application also uses JWT token-based authentication for ClickHouse as a source.

## Core Requirements

- **Bidirectional Data Flow**: Data can be ingested both from ClickHouse to Flat File and from Flat File to ClickHouse.
- **ClickHouse Connection**: Users can connect to ClickHouse using JWT tokens for authentication.
- **Flat File Integration**: Users can upload a local flat file (CSV) for ingestion into ClickHouse.
- **Column Selection**: The UI allows users to select specific columns for ingestion from either ClickHouse or Flat File.
- **Completion Reporting**: The total count of records ingested is displayed upon completion.

## Key Features

- **ClickHouse to Flat File Ingestion**: Users can select a table in ClickHouse and specify which columns to export to a CSV file.
- **Flat File to ClickHouse Ingestion**: Users can upload a CSV file, select which columns to ingest, and load them into a new or existing ClickHouse table.
- **Authentication**: Uses JWT token for secure connection to ClickHouse.
- **Multi-Table Joins (Bonus)**: Option to select and join multiple ClickHouse tables before ingesting into a flat file.
- **Data Preview (Optional)**: Displays the first 100 records of the selected data for preview before full ingestion.
- **Progress Bar (Optional)**: Shows the progress of the ingestion process.

## Setup and Configuration

### Prerequisites

- **Backend**: Go or Java is recommended (Java used in this implementation).
- **Frontend**: React.js (or any framework such as Vue, Angular, etc.).
- **ClickHouse**: Local or cloud-based ClickHouse instance (Dockerized or hosted).
- **Dependencies**:
  - ClickHouse JDBC or client library (depending on the chosen backend language).
  - JWT library for authentication.

### Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/clickhouse-flatfile-ingestion.git
   cd clickhouse-flatfile-ingestion
   ```

2. **Backend Setup** (Java)
   - Navigate to the `backend/` folder and build the project.
   ```bash
   cd backend
   ./gradlew build
   ```

3. **Frontend Setup** (React)
   - Navigate to the `frontend/` folder and install dependencies.
   ```bash
   cd frontend
   npm install
   ```

4. **ClickHouse Setup**
   - Ensure that your ClickHouse instance is running (either locally via Docker or a cloud-based service).
   - Configure the ClickHouse connection parameters in the `config.json` or environment variables (host, port, database, JWT token).

### Running the Application

1. **Backend**:
   - Run the backend server.
   ```bash
   cd backend
   ./gradlew bootRun
   ```

2. **Frontend**:
   - Start the React application.
   ```bash
   cd frontend
   npm start
   ```

3. Open the web application in your browser at `http://localhost:3000`.

### Configuration

- **ClickHouse Source Configuration**:
   - Input for **Host**, **Port**, **Database**, **User**, and **JWT Token**.
   - Authentication via JWT token for connecting to ClickHouse.

- **Flat File Configuration**:
   - Input for **Flat File Name** and **Delimiter** (e.g., comma for CSV).

- **Column Selection**:
   - After connecting to the source, the UI will display available tables (for ClickHouse) or the schema of the uploaded CSV (for Flat File).
   - Select the desired columns to be ingested.

### Error Handling

The application includes error handling for common issues such as:
- Connection failures.
- Authentication errors (invalid JWT token).
- Query execution failures.
- Data ingestion errors.

These errors will be reported with user-friendly messages in the UI.

## Testing

- **ClickHouse to Flat File Ingestion**: Test by selecting a ClickHouse table and verifying the ingested records in the CSV file.
- **Flat File to ClickHouse Ingestion**: Test by uploading a CSV file and verifying the ingested records in the ClickHouse database.
- **Multi-Table Join (Bonus)**: Test joining multiple ClickHouse tables and verify the resulting data in the flat file.
- **Error Scenarios**: Test for connection/authentication errors and ensure that appropriate error messages are displayed.

## Optional Features

- **Progress Bar**: Implement a progress bar to show approximate ingestion progress.
- **Data Preview**: Before starting the ingestion, display a preview of the first 100 records of the selected data.

## Usage Example

1. **Step 1**: Choose "ClickHouse" as the source.
2. **Step 2**: Enter the connection details (host, port, database, user, JWT token).
3. **Step 3**: Select a table and columns to export.
4. **Step 4**: Click "Start Ingestion" to begin the data export to Flat File.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

- [ClickHouse Documentation](https://clickhouse.com/docs/en/)
- [React Documentation](https://reactjs.org/)
