package com.example.ingestion.controller;

import com.example.ingestion.model.FlatFileIngestionRequest;
import com.example.ingestion.model.IngestionResponse;
import com.example.ingestion.service.FlatFileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/flatfile")
public class FlatFileController {

    @Autowired
    private FlatFileService flatFileService;

    @PostMapping("/ingest")
    public IngestionResponse ingestFromFlatFile(@RequestBody FlatFileIngestionRequest request) {
        return flatFileService.ingestFlatFile(request);
    }
}
