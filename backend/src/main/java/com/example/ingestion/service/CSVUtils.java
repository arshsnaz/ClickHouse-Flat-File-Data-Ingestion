package com.example.ingestion.util;

import org.apache.commons.csv.CSVFormat;
import org.apache.commons.csv.CSVParser;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;

public class CSVUtils {

    public static CSVParser parseCSV(Path filePath) throws IOException {
        return CSVFormat.DEFAULT.withFirstRecordAsHeader().parse(Files.newBufferedReader(filePath));
    }
}
