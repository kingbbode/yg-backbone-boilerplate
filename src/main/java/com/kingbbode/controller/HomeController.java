package com.kingbbode.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

/**
 * Created by YG on 2017-05-19.
 */
@Controller
public class HomeController {
    @GetMapping("/")
    public String index() {
        return "index";
    }
}
