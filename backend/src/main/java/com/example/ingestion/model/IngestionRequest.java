package com.example.ingestion.model;

import lombok.Data;
import java.util.List;
import java.util.Map;

@Data
public class IngestionRequest {
    private String sourceType; // "ClickHouse" or "FlatFile"
    private String targetType; // "ClickHouse" or "FlatFile"
    private String sourceTable; // For ClickHouse
    private String targetTable; // For FlatFile -> ClickHouse
    private List<String> selectedColumns;
    private Map<String, String> columnMappings; // optional (source -> target)
}
