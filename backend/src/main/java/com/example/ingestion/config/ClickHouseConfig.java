package com.example.ingestion.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.datasource.DriverManagerDataSource;

import javax.sql.DataSource;

@Configuration
public class ClickHouseConfig {

    @Bean
    public DataSource clickHouseDataSource() {
        DriverManagerDataSource dataSource = new DriverManagerDataSource();
        dataSource.setDriverClassName("com.clickhouse.client.ClickHouseDriver");
        dataSource.setUrl("jdbc:clickhouse://localhost:8123/default");
        dataSource.setUsername("default");
        dataSource.setPassword("");

        return dataSource;
    }
}
