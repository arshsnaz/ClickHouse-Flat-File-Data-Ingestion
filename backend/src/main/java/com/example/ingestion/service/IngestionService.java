package com.example.ingestion.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import com.example.ingestion.model.IngestionResponse;
import com.example.ingestion.model.StatisticsResponse;
import com.example.ingestion.util.CSVUtils;
import org.apache.commons.csv.CSVFormat;
import org.apache.commons.csv.CSVParser;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@Service
public class IngestionService {

    @Autowired
    private ClickHouseService clickHouseService;

    private int filesProcessed = 0;
    private int rowsIngested = 0;

    public IngestionResponse processFile(MultipartFile file) {
        try {
            Path tempFile = Files.createTempFile("ingested-", ".csv");
            file.transferTo(tempFile);
            CSVParser parser = CSVUtils.parseCSV(tempFile);

            // Process the CSV file data and insert into ClickHouse
            // Example: clickHouseService.executeQuery(query);
            filesProcessed++;
            rowsIngested = parser.getRecords().size();
            return new IngestionResponse("File processed successfully", true);

        } catch (IOException e) {
            return new IngestionResponse("Error processing file: " + e.getMessage(), false);
        }
    }

    public StatisticsResponse fetchStatistics() {
        StatisticsResponse response = new StatisticsResponse();
        response.setFilesProcessed(filesProcessed);
        response.setRowsIngested(rowsIngested);
        return response;
    }
}
