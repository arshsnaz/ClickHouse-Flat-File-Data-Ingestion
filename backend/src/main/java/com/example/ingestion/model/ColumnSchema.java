package com.example.ingestion.model;

import lombok.Data;

@Data
public class ColumnSchema {
    private String columnName;
    private String dataType;
}
