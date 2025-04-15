package com.example.ingestion.controller;

import com.example.ingestion.model.ClickHouseConnectionRequest;
import com.example.ingestion.model.IngestionResponse;
import com.example.ingestion.service.ClickHouseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/clickhouse")
public class ClickHouseController {

    @Autowired
    private ClickHouseService clickHouseService;

    @PostMapping("/connect")
    public IngestionResponse connectClickHouse(@RequestBody ClickHouseConnectionRequest request) {
        return clickHouseService.connectAndFetchSchema(request);
    }
}
