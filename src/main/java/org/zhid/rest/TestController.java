package org.zhid.rest;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import org.zhid.beans.ApisList;

import java.net.MalformedURLException;
import java.net.URL;

@RestController
@RequestMapping("/api")
public class TestController {

    @Autowired
    private RestTemplate restTemplate;

    @Autowired
    private ObjectMapper mapper;

    @GetMapping("/hello")
    public ResponseEntity<String> getHelloWorld() {
        return ResponseEntity.ok("Success!");
    }

    @GetMapping("/listApis/{id}")
    public ResponseEntity<String> getApis(@PathVariable int id) {
        try {
            ResponseEntity<String> resp = restTemplate.getForEntity("https://api.publicapis.org/entries", String.class);
            System.out.println("Response received: " + resp.getBody());
            ApisList list = mapper.readValue(resp.getBody(), ApisList.class);
            System.out.println("List has " + list.getCount() + " entries ");

            return ResponseEntity.ok(mapper.writeValueAsString(list.getEntries().get(id)));
        } catch (Exception e) {
            e.printStackTrace();

            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("error!");
        }

    }
}
