package com.example.ingestion.controller;

import com.example.ingestion.service.StatisticsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class StatisticsController {

    @Autowired
    private StatisticsService statisticsService;

    // Endpoint to fetch statistics
    @GetMapping("/api/statistics")
    public Object getStatistics() {
        return statisticsService.fetchStatistics();
    }
}
