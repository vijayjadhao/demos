package com.example.vijaydemo;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.awt.*;
import java.io.*;

@RestController
public class HelloController {

    @GetMapping("/")
    public String greet() {
        return "Greetings from Spring Boot!";
    }

    @GetMapping("/bye")
    public String bye() {
        return "Bye from Spring Boot!";
    }

    @PostMapping(value = "/upload", consumes = MediaType.MULTIPART_FORM_DATA_VALUE, produces = MediaType.TEXT_PLAIN_VALUE)
    public String upload(@RequestParam("file") MultipartFile file, HttpServletRequest request) {
        String content = null;
        try {
            final InputStream inputStream = file.getInputStream();
            BufferedReader br = new BufferedReader(new InputStreamReader(inputStream));
            content = br.readLine();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return file.getOriginalFilename() + "-" + content;
    }
}