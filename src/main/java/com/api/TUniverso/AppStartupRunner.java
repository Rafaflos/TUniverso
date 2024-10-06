package com.api.TUniverso;

import com.api.TUniverso.service.TestService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class AppStartupRunner implements CommandLineRunner {

    private final TestService testService;
    public AppStartupRunner(TestService testService) {
        this.testService = testService;
    }
    @Override
    public void run(String... args) throws Exception {
        testService.testRelationships();
    }

}
