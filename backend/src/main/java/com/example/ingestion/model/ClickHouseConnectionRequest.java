package com.example.ingestion.model;

import lombok.Data;

@Data
public class ClickHouseConnectionRequest {
    private String host;
    private int port;
    private String database;
    private String username;
    private String jwtToken;
}
