package com.example.vijaydemo;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.core.io.FileSystemResource;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;

import java.io.File;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class VijaydemoApplicationTests {

    @LocalServerPort
    private int port;

    @Autowired
    private TestRestTemplate testRestTemplate;

    @Test
    void testGreet() {
        final String response = testRestTemplate.getForObject("http://localhost:" + port, String.class);
        assertEquals("Greetings from Spring Boot!", response);
    }


    @Test
    void testBye() {
        final String response = testRestTemplate.getForObject("http://localhost:" + port + "/bye", String.class);
        assertEquals("Bye from Spring Boot!", response);
    }

    @Test
    void testUpload() {
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.MULTIPART_FORM_DATA);
        MultiValueMap<String, Object> body
                = new LinkedMultiValueMap<>();
        body.add("file", getTestFile());
        HttpEntity<MultiValueMap<String, Object>> requestEntity
                = new HttpEntity<>(body, headers);
        String serverUrl = "http://localhost:"+port + "/upload";
        ResponseEntity<String> response = testRestTemplate
                .postForEntity(serverUrl, requestEntity, String.class);
        assertEquals("test.txt-Vijay", response.getBody());
    }

    private FileSystemResource getTestFile() {
        File f = new File("C:\\test\\test.txt");
        return new FileSystemResource(f);
    }
}
