package com.example.ingestion.service;

import org.springframework.stereotype.Service;

@Service
public class StatisticsService {

    // Here you would fetch actual data from your database (ClickHouse or another data source)
    public Object fetchStatistics() {
        // Simulating data for demonstration purposes
        return new Object() {
            public int recordsIngested = 5000;
            public int filesProcessed = 50;
            public double successRate = 95.7;
        };
    }
}
