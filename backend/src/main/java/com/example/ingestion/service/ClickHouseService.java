package com.example.ingestion.service;

import org.springframework.stereotype.Service;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.beans.factory.annotation.Autowired;

@Service
public class ClickHouseService {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    public void executeQuery(String query) {
        jdbcTemplate.execute(query);
    }
}
