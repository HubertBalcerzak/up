package pl.starchasers.up.controller

import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.GetMapping

@Controller
class UIController {

    @GetMapping("/")
    fun index(): String {
        return "forward:/index.html"
    }
}
