package com.example.ingestion.controller;

import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping("/api/stats")
@CrossOrigin(origins = "*")
public class IngestionStatsController {

    @GetMapping
    public Map<String, Object> getStats() {
        Map<String, Object> stats = new HashMap<>();
        stats.put("totalRows", 1543);
        stats.put("columnsIngested", 8);
        stats.put("timeTaken", "3.4s");

        return stats;
    }
}
