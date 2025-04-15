package com.example.ingestion.controller;

import com.example.ingestion.service.IngestionService;
import com.example.ingestion.model.IngestionResponse;
import com.example.ingestion.model.StatisticsResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/ingestion")
public class IngestionController {

    @Autowired
    private IngestionService ingestionService;

    @PostMapping("/ingest")
    public IngestionResponse ingestData(@RequestParam("file") MultipartFile file) {
        return ingestionService.processFile(file);
    }

    @GetMapping("/statistics")
    public StatisticsResponse getStatistics() {
        return ingestionService.fetchStatistics();
    }
}
