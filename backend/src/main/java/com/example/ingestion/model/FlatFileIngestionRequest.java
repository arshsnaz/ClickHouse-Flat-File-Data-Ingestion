package com.example.ingestion.model;

import lombok.Data;
import java.util.List;

@Data
public class FlatFileIngestionRequest {
    private String filePath;
    private String delimiter;
    private List<String> selectedColumns;
}
